module Token = {
  type parens = Open | Close
  type const = Calc.Const.t
  type constN = C0 | C1 | C2 | C3
  type par = Helper.Parity.t

  type t =
    | Mark(parens)
    | SeqRE(parens)
    | Const(const)
    | Var(string)
    | Uncl(string)
    | SeqRE_sig(SeqRE.sig)
    | OptSep
    | SeqSep
    | SeqRE_par(par)
    | SeqRE_open
    | SeqRE_alt
    | DNA({sortNMUI: bool, code: DNA.t})
    | ExprSep
    | VarList(array<string>)

  let toString = (token: t): string => switch token {
  | Mark(Open)  => "(" | Mark(Close)  => ")"
  | SeqRE(Open) => "{" | SeqRE(Close) => "}"

  | Const(c) => c->Calc.Const.show
  | Var(lbl) => lbl->Js.String2.length > 1 ? `"${lbl}"` : lbl
  | Uncl(lbl) => `/${lbl}/`

  | SeqRE_sig(sig) => sig->SeqRE.showSig

  | OptSep => "|" | SeqSep => ","
  | SeqRE_par(Even) => "2r" | SeqRE_par(Odd) => "2r+1" | SeqRE_par(Any) => ""
  | SeqRE_open => "open" | SeqRE_alt => "alt"

  | DNA({sortNMUI, code}) => DNA.show(~sortNMUI=(sortNMUI), code)
  | ExprSep => "."
  | VarList(vars) => "[" ++ vars->Js.Array2.joinWith(",") ++ "]"
  }

}


module Lexer = {
  exception LexError({msg: string})

  type tokenStream = list<Token.t>

  let scanLabel = (~delim: string, stream: list<string>): (string, list<string>) => {

    let rec _scan = (stream: list<string>, lbl): (string, list<string>) =>
      switch stream {
      | list{} => raise(LexError({msg: `Closing '${delim}' is missing!`}))
      | list{d, ...r} if d == delim => (lbl, r)
      | list{str, ...r} => r->_scan(lbl ++ str)
      }
    
    switch stream->_scan("") {
    | ("", _) => raise(LexError({msg: `Label should not be empty!`}))
    | (lbl, rest) => (lbl, rest)
    }
  }
 
  let scanList = (~delim: string, stream: list<string>): (array<string>, list<string>) => {

    let rec _scan = (stream: list<string>, arr): (array<string>, list<string>) =>
      switch stream {
      | list{} => raise(LexError({msg: `Closing '${delim}' is missing!`}))
      | list{" ", ...r} => r->_scan(arr) // ignore whitespace
      | list{d, ...r} if d == delim => {
          if arr->Belt.Array.length > 0
            { raise(LexError({msg: `comma-separated list item must not be empty!`})) }
          else {
            (arr, r)
          }}
      | list{`"`, ...r} => {
          let (lbl, r') = r->scanLabel(~delim=`"`)
          r'->_scanNext(arr->Belt.Array.concat([ lbl ]))
        }
      | list{lbl,"_",idx, ...r}
          if Expr.lblClass_unquoted->Js.Array2.includes(lbl)
          && Expr.idxClass_unquoted->Js.Array2.includes(idx) => 
            r->_scanNext(arr->Belt.Array.concat([ lbl++"_"++idx ]))
      | list{lbl, ...r}
          if Expr.lblClass_unquoted->Js.Array2.includes(lbl) => 
            r->_scanNext(arr->Belt.Array.concat([ lbl ]))

      | list{str, ..._} => raise(LexError({msg: `Unable to interpret '${str}'.`}))
      }
    and _scanNext = (stream: list<string>, arr) =>
      switch stream {
      | list{" ", ...r} => r->_scanNext(arr) // ignore whitespace
      | list{",", ...r} => r->_scan(arr)
      | list{d, ...r} if d == delim => (arr, r)
      | _ => raise(LexError({msg: `Expected ',' or '${delim}'.`}))
      }
    
    stream->_scan([])
  }

  let scanDNA = (~sortNMUI: bool, stream: list<string>): (DNA.t, list<string>) => {
    let rec _scan = (stream: list<string>, arr): (array<int>, list<string>) =>
      switch stream {
      // | list{} => raise(LexError({msg: ``}))
      | list{" ", ...r} => r->_scan(arr) // ? ignore whitespace
      | list{"0", ...r} => r->_scan(arr->Belt.Array.concat([0]))
      | list{"1", ...r} => r->_scan(arr->Belt.Array.concat([1]))
      | list{"2", ...r} => r->_scan(arr->Belt.Array.concat([2]))
      | list{"3", ...r} => r->_scan(arr->Belt.Array.concat([3]))
      | r => (arr, r)
      }

    let (arr, rest) = stream->_scan([]) 
    switch arr->DNA.fromIntArr(~sortNMUI=sortNMUI) { 
    | Some(dna) => (dna, rest)
    | None => raise(LexError({msg: `Invalid formDNA!`}))
    }
  }

  let rec scanFml = (stream: list<string>): tokenStream => {
    open Token
    switch stream {
    | list{} => list{}
    | list{" ", ...r} => scanFml(r) // ignore whitespace

    | list{"(", ...r} => list{ Mark(Open), ...scanFml(r) }
    | list{")", ...r} => list{ Mark(Close), ...scanFml(r) }

    | list{"{", ...r} => list{ SeqRE(Open), ...scanFml(r) }
    | list{"}", ...r} => list{ SeqRE(Close), ...scanFml(r) }

    | list{"N", ...r} => list{ Const(N), ...scanFml(r) }
    | list{"U", ...r} => list{ Const(U), ...scanFml(r) }
    | list{"I", ...r} => list{ Const(I), ...scanFml(r) }
    | list{"M", ...r} => list{ Const(M), ...scanFml(r) }

    | list{":",":", ...r} => {
        let (dna, r') = r->scanDNA(~sortNMUI=true)
        list{ DNA({sortNMUI: true, code: dna}), ...scanFml(r') }
      }
    | list{unicode, ...r} if unicode == `⁘` => {
        let (dna, r') = r->scanDNA(~sortNMUI=false)
        list{ DNA({sortNMUI: false, code: dna}), ...scanFml(r') }
      }
    | list{"[", ...r} => {
        let (arr, r') = r->scanList(~delim=`]`)
        list{ VarList(arr), ...scanFml(r') }
      }

    | list{`"`, ...r} => {
        let (lbl, r') = r->scanLabel(~delim=`"`)
        list{ Var(lbl), ...scanFml(r') }
      }
    | list{`/`, ...r} => {
        let (lbl, r') = r->scanLabel(~delim=`/`)
        list{ Uncl(lbl), ...scanFml(r') }
      }

    | list{".",".","@","~",".","_", ...r} =>
        list{ SeqRE_sig({reEntryPar: Odd, unmarked: true, interpr: RecIdent}), ...scanFml(r) }
    | list{".",".","@","~",".", ...r} =>
        list{ SeqRE_sig({reEntryPar: Odd, unmarked: false, interpr: RecIdent}), ...scanFml(r) }
    | list{".",".","@","~","_", ...r} =>
        list{ SeqRE_sig({reEntryPar: Even, unmarked: true, interpr: RecIdent}), ...scanFml(r) }
    | list{".",".","@","~", ...r} =>
        list{ SeqRE_sig({reEntryPar: Even, unmarked: false, interpr: RecIdent}), ...scanFml(r) }
    | list{"@","~","_", ...r} =>
        list{ SeqRE_sig({reEntryPar: Any, unmarked: true, interpr: RecIdent}), ...scanFml(r) }
    | list{"@","~", ...r} =>
        list{ SeqRE_sig({reEntryPar: Any, unmarked: false, interpr: RecIdent}), ...scanFml(r) }

    | list{".",".","@",".","_", ...r} =>
        list{ SeqRE_sig({reEntryPar: Odd, unmarked: true, interpr: RecInstr}), ...scanFml(r) }
    | list{".",".","@",".", ...r} =>
        list{ SeqRE_sig({reEntryPar: Odd, unmarked: false, interpr: RecInstr}), ...scanFml(r) }
    | list{".",".","@","_", ...r} =>
        list{ SeqRE_sig({reEntryPar: Even, unmarked: true, interpr: RecInstr}), ...scanFml(r) }
    | list{".",".","@", ...r} =>
        list{ SeqRE_sig({reEntryPar: Even, unmarked: false, interpr: RecInstr}), ...scanFml(r) }
    | list{"@","_", ...r} =>
        list{ SeqRE_sig({reEntryPar: Any, unmarked: true, interpr: RecInstr}), ...scanFml(r) }
    | list{"@", ...r} =>
        list{ SeqRE_sig({reEntryPar: Any, unmarked: false, interpr: RecInstr}), ...scanFml(r) }

    | list{"2","r","+","1", ...r} => list{ SeqRE_par(Odd), ...scanFml(r) }
    | list{"2","r", ...r}         => list{ SeqRE_par(Even), ...scanFml(r) }
    | list{"o","p","e","n", ...r} => list{ SeqRE_open, ...scanFml(r) }
    | list{"a","l","t", ...r}     => list{ SeqRE_alt, ...scanFml(r) }

    | list{",", ...r} => list{ SeqSep, ...scanFml(r) }
    | list{"|", ...r} => list{ OptSep, ...scanFml(r) }
    | list{".", ...r} => list{ ExprSep, ...scanFml(r) }

    | list{lbl,"_",idx, ...r}
        if Expr.lblClass_unquoted->Js.Array2.includes(lbl)
        && Expr.idxClass_unquoted->Js.Array2.includes(idx) => list{ Var(lbl++"_"++idx), ...scanFml(r) }
    | list{lbl, ...r}
        if Expr.lblClass_unquoted->Js.Array2.includes(lbl) => list{ Var(lbl), ...scanFml(r) }

    | list{str, ..._} => raise(LexError({msg: `Unable to interpret '${str}'.`}))
    }
  }

  let scan = (input: string): tokenStream =>
    input->Js.String2.split("")->Belt.List.fromArray->scanFml
}


module Parser = {
  open Expr

  exception ParseError({msg: string})
  
  let parseSeqRE_sig = (stream: Lexer.tokenStream): (SeqRE.sig, Lexer.tokenStream) => {
    open SeqRE
    switch stream {
    | list{SeqRE_sig(sig), ...r} => (sig, r)
    // ? should option notation still be accepted?
    | list{SeqRE_par(par),OptSep, ...r} => switch r {
      | list{SeqRE_alt,OptSep,SeqRE_open,OptSep, ...r'}
      | list{SeqRE_open,OptSep,SeqRE_alt,OptSep, ...r'} => ({reEntryPar: par, unmarked: true, interpr: RecIdent}, r')
      | list{SeqRE_alt,OptSep, ...r'} => ({reEntryPar: par, unmarked: false, interpr: RecIdent}, r')
      | list{SeqRE_open,OptSep, ...r'} => ({reEntryPar: par, unmarked: true, interpr: RecInstr}, r')
      | list{ ...r'} => ({reEntryPar: par, unmarked: false, interpr: RecInstr}, r')
      }
    | list{SeqRE_alt,OptSep, ...r} => switch r {
      | list{SeqRE_par(par),OptSep,SeqRE_open,OptSep, ...r'}
      | list{SeqRE_open,OptSep,SeqRE_par(par),OptSep, ...r'} => ({reEntryPar: par, unmarked: true, interpr: RecIdent}, r')
      | list{SeqRE_par(par),OptSep, ...r'} => ({reEntryPar: par, unmarked: false, interpr: RecIdent}, r')
      | list{SeqRE_open,OptSep, ...r'} => ({reEntryPar: Any, unmarked: true, interpr: RecIdent}, r')
      | list{ ...r'} => ({reEntryPar: Any, unmarked: false, interpr: RecIdent}, r')
      }
    | list{SeqRE_open,OptSep, ...r} => switch r {
      | list{SeqRE_par(par),OptSep,SeqRE_alt,OptSep, ...r'}
      | list{SeqRE_alt,OptSep,SeqRE_par(par),OptSep, ...r'} => ({reEntryPar: par, unmarked: true, interpr: RecIdent}, r')
      | list{SeqRE_par(par),OptSep, ...r'} => ({reEntryPar: par, unmarked: true, interpr: RecInstr}, r')
      | list{SeqRE_alt,OptSep, ...r'} => ({reEntryPar: Any, unmarked: true, interpr: RecIdent}, r')
      | list{ ...r'} => ({reEntryPar: Any, unmarked: true, interpr: RecInstr}, r')
      }
    | list{ ...r} => ({reEntryPar: Any, unmarked: false, interpr: RecInstr}, r) // ? should it fail if no sig provided?
    // | list{} => raise(ParseError({msg: `Missing end`}))
    }
  }

  let rec parseExpr = (~unmarked=false, ~inSeq=false, stream: Lexer.tokenStream, expr): (FORM.expr<var>, Lexer.tokenStream) => switch stream {
  | list{} if unmarked => (expr, list{})

  | list{Mark(Open), ...r} => {
      let (innerExpr, r') = r->parseExpr([])
      r'->parseExpr( expr->Belt.Array.concat([ FORM.Mark(innerExpr) ]), ~unmarked=unmarked, ~inSeq=inSeq)
    }
  | list{Mark(Close), ...r} if !unmarked => (expr, r)
  | list{Mark(Close), ..._} if unmarked => raise(ParseError({msg: `Missing '(' to open FORM.`}))

  | list{SeqRE(Open), ...r} => {
      let (sig, r') = r->parseSeqRE_sig
      let (seq, r'') = r'->parseSeq(list{})
      r''->parseExpr( expr->Belt.Array.concat([ FORM.SeqRE(sig, seq) ]), ~unmarked=unmarked, ~inSeq=inSeq)
    }
  | list{SeqSep, ...r} if inSeq => (expr, stream)
  | list{SeqRE(Close), ..._} if inSeq => (expr, stream)
  | list{SeqRE(Close), ..._} if !inSeq => raise(ParseError({msg: `Missing '{' to open re-entry FORM.`}))

  | list{Const(c), ...r} => r->parseExpr( expr->Belt.Array.concat([ FORM.CVal(c) ]), ~unmarked=unmarked, ~inSeq=inSeq)
  | list{Var(lbl), ...r} => r->parseExpr( expr->Belt.Array.concat([ FORM.FVar(lbl) ]), ~unmarked=unmarked, ~inSeq=inSeq)
  | list{Uncl(lbl), ...r} => r->parseExpr( expr->Belt.Array.concat([ FORM.Uncl(lbl) ]), ~unmarked=unmarked, ~inSeq=inSeq)

  | list{ExprSep,VarList(arr),DNA({_, code}), ...r} => {
      // ! add validation for consistency between expr, varlist and DNA
      r->parseExpr( 
        [ FORM.FDna({dna: code, form: Some(expr), vars: Some(arr)}) ], ~unmarked=unmarked, ~inSeq=inSeq)
    }
  | list{VarList(arr),DNA({_, code}), ...r} => {
      // ! add validation for consistency between varlist and DNA
      r->parseExpr( expr->Belt.Array.concat(
        [ FORM.FDna({dna: code, form: None, vars: Some(arr)}) ]), ~unmarked=unmarked, ~inSeq=inSeq)
    }
  | list{DNA({_, code}), ...r} => {
      r->parseExpr( expr->Belt.Array.concat(
        [ FORM.FDna({dna: code, form: None, vars: None}) ]), ~unmarked=unmarked, ~inSeq=inSeq)
    }
   
  | list{tk, ..._} => raise(ParseError({msg: `Invalid token '${tk->Token.toString}'!`}))
  | _ => raise(ParseError({msg: `Missing ')' to close FORM.`}))
  }

  and parseSeq = (stream: Lexer.tokenStream, seq): (FORM.seq<var>, Lexer.tokenStream) => switch stream {
  | list{} => raise(ParseError({msg: `Missing '}' to close re-entry FORM.`}))
  | list{ ...r} => {
      let (expr, r') = r->parseExpr(~unmarked=true, ~inSeq=true, [])
      switch r' {
      | list{SeqSep, SeqRE(Close), ...r''} => (list{[ ], expr, ...seq}, r'')
      | list{SeqSep, ...r''} => r''->parseSeq( list{expr, ...seq} )
      | list{SeqRE(Close), ...r''} => (list{expr, ...seq}, r'')
      | list{ ..._} => raise(ParseError({msg: `Missing '}' to close re-entry FORM.`}))
      }
    }
  }

  let parse = (stream: Lexer.tokenStream): FORM.expr<var> => {
    let (expr, stream) = stream->parseExpr([], ~unmarked=true)
    if (stream->Belt.List.length > 0) {
      raise(ParseError({msg: "Broken parse tree!"}))
    } else {
      expr
    }
  }

}

open Expr

let read = (formula: string): FORM.expr<var> => {
  formula->Lexer.scan->Parser.parse
}

