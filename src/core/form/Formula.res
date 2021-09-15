module Token = {
  type parens = Open | Close
  type const = Calc.Const.t // N | U | I | M
  type constN = C0 | C1 | C2 | C3
  type par = Helper.Parity.t // Even | Odd

  type t =
    | Mark(parens)  // (…)
    | SeqRE(parens) // {…}
    // | List(parens)  // […]
    | Const(const)  // N | U | I | M
    | ConstN(constN)  // 0 | 1 | 2 | 3
    | Var(string) // x | x_n | "someX" | "someX_n"
    | Uncl(string) // /someU/ | /someU_n"
    | SeqRE_sig(SeqRE.sig)
    // | SeqRE_sig_mn(mn) // @ | @~
    // | SeqRE_sig_step // .
    // | SeqRE_sig_unmarked // _
    | OptSep // |
    | SeqSep // ,
    | SeqRE_par(par) // 2r | 2r+1
    | SeqRE_open // open
    | SeqRE_alt // alt
    | DNA({sortNMUI: bool, code: DNA.t}) // :: | ⁘
    | ExprSep // .
    | VarList(array<string>)
    // | Char(string) // ?

  let toString = (token: t): string => switch token {
  | Mark(Open)  => "(" | Mark(Close)  => ")"
  | SeqRE(Open) => "{" | SeqRE(Close) => "}"
  // | List(Open)  => "[" | List(Close)  => "]"

  | Const(c) => c->Calc.Const.show
  // | Const(N)   => "N" | Const(U)   => "U" | Const(I)   => "I" | Const(M)   => "M"
  | ConstN(C0) => "0" | ConstN(C1) => "1" | ConstN(C2) => "2" | ConstN(C3) => "3"

  | Var(lbl) => lbl->Js.String2.length > 1 ? `"${lbl}"` : lbl
  | Uncl(lbl) => `/${lbl}/`

  // | SeqRE_sig_mn(RecInstr) => "@" | SeqRE_sig_mn(RecIdent) => "@~"
  // | SeqRE_sig_step => "." | SeqRE_sig_unmarked => "_"
  | SeqRE_sig(sig) => sig->SeqRE.showSig

  | OptSep => "|" | SeqSep => ","
  | SeqRE_par(Even) => "2r" | SeqRE_par(Odd) => "2r+1" | SeqRE_par(Any) => ""
  | SeqRE_open => "open" | SeqRE_alt => "alt"

  | DNA({sortNMUI, code}) => DNA.show(~sortNMUI=(sortNMUI), code)
  | ExprSep => "."
  | VarList(vars) => "[" ++ vars->Js.Array2.joinWith(",") ++ "]"

  // | Char(str) => str
  }

  let lblClass_unquoted = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`,`α`,`β`,`γ`,`δ`,`ε`,`ζ`,`η`,`θ`,`ι`,`κ`,`λ`,`μ`,`ν`,`ξ`,`ο`,`π`,`ρ`,`ς`,`σ`,`τ`,`υ`,`φ`,`χ`,`ψ`,`ω`]
  let idxClass_unquoted = [`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`]->Belt.Array.concat(lblClass_unquoted)

  // let lblClass_unquoted = (`abcdefghijklmnopqrstuvwxyzαβγδεζηθικλμνξοπρςστυφχψω`)->Js.String2.split("")
  // let singleVarClass = `[a-zß-öø-ÿά-ώ]` // āăąćĉċčďđēĕėęěĝğġģĥħĩīĭįıĳĵķĸĺļľŀłńņňŉŋōŏőœŕŗřśŝşšţťŧũūŭůűųŵŷźżžſ `[a-zA-ZÀ-ÖØ-öø-ÿĀ-ʯͿΑ-ԯ\udc00-\udfff]` // RegExp class
  // let singleVarClass_RegExp = singleVarClass->Js.Re.fromStringWithFlags(~flags="u")

}

module Lexer = {
  exception LexError({msg: string})

  type tokenStream = list<Token.t>
  // type result = Belt.Result.t<tokenStream, lexError>
  // let del = 

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
      | list{d, ...r} if d == delim => (arr, r)
      | list{",", ...r} => r->_scan(arr->Belt.Array.concat([""]))
      | list{str, ...r} => {
          let i = Belt.Array.length(arr)-1
          arr[i] = arr[i] ++ str
          r->_scan(arr)
        }
      }
    
    switch stream->_scan([""]) {
    | ([""], _) => raise(LexError({msg: `List should not be empty!`}))
    | (arr, rest) => (arr, rest)
    }
  }

  let scanDNA = (~sortNMUI: bool, stream: list<string>): (DNA.t, list<string>) => {
    let conv = (n) => n->Calc.Const.fromInt(~sortNMUI=sortNMUI)->Belt.Option.getUnsafe

    let rec _scan = (stream: list<string>, arr): (array<Calc.Const.t>, list<string>) =>
      switch stream {
      // | list{} => raise(LexError({msg: ``}))
      | list{" ", ...r} => r->_scan(arr) // ? ignore whitespace
      | list{"0", ...r} => r->_scan(arr->Belt.Array.concat([0->conv]))
      | list{"1", ...r} => r->_scan(arr->Belt.Array.concat([1->conv]))
      | list{"2", ...r} => r->_scan(arr->Belt.Array.concat([2->conv]))
      | list{"3", ...r} => r->_scan(arr->Belt.Array.concat([3->conv]))
      | r => (arr, r)
      }

    let (arr, rest) = stream->_scan([]) 
    switch arr->DNA.make {
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

    | list{"2","r","|", ...r}         => list{ SeqRE_par(Even), OptSep, ...scanFml(r) }
    | list{"2","r","+","1","|", ...r} => list{ SeqRE_par(Odd), OptSep, ...scanFml(r) }
    | list{"a","l","t","|", ...r}     => list{ SeqRE_alt, OptSep, ...scanFml(r) }
    | list{"o","p","e","n","|", ...r} => list{ SeqRE_open, OptSep, ...scanFml(r) }

    | list{"N", ...r} => list{ Const(N), ...scanFml(r) }
    | list{"U", ...r} => list{ Const(U), ...scanFml(r) }
    | list{"I", ...r} => list{ Const(I), ...scanFml(r) }
    | list{"M", ...r} => list{ Const(M), ...scanFml(r) }

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

    | list{",", ...r} => list{ SeqSep, ...scanFml(r) }

    | list{":",":", ...r} => {
        let (dna, r') = r->scanDNA(~sortNMUI=true)
        list{ DNA({sortNMUI: true, code: dna}), ...scanFml(r') }
      }
    | list{unicode, ...r} if unicode == `⁘` => {
        let (dna, r') = r->scanDNA(~sortNMUI=false)
        list{ DNA({sortNMUI: false, code: dna}), ...scanFml(r') }
      }
    | list{`.`,"[", ...r} => {
        let (arr, r') = r->scanList(~delim=`,`)
        list{ ExprSep, VarList(arr), ...scanFml(r') }
      }

    | list{`"`, ...r} => {  // ! needs also to scan single-letter vars without ""
        let (lbl, r') = r->scanLabel(~delim=`"`)
        list{ Var(lbl), ...scanFml(r') }
      }
    | list{`/`, ...r} => {
        let (lbl, r') = r->scanLabel(~delim=`/`)
        list{ Uncl(lbl), ...scanFml(r') }
      }
    | list{lbl,"_",idx, ...r}
        if lblClass_unquoted->Js.Array2.includes(lbl)
        && idxClass_unquoted->Js.Array2.includes(idx) => list{ Var(lbl++"_"++idx), ...scanFml(r) }
    | list{lbl, ...r}
        if lblClass_unquoted->Js.Array2.includes(lbl) => list{ Var(lbl), ...scanFml(r) }
    // | list{lbl, ...r} if singleVarClass_RegExp->Js.Re.test_(lbl) => list{ Var(lbl), ...scanFml(r) }
    | list{str, ..._} => raise(LexError({msg: `Unable to interpret '${str}'.`}))
        // list{ Char(str), ...scanFml(r) }
      // }
    }
  }
  // and scanSeqRE = (stream: list<string>): tokenStream => {
  //   open Token
  //   // check if options
  //   // check if sig

  //   switch stream {
  //   | list{} => list{}
  //   // | list{"{", ...r} => list{ SeqRE(Open), ...scanSeqRE(r) }
  //   | list{"}", ...r} => list{ SeqRE(Close), ...scanFml(r) }
  //   }
  // }

  let scan = (input: string): tokenStream =>
    input->Js.String2.split("")->Belt.List.fromArray->scanFml
}


module Parser = {
  open Expr
  
  // type tree = 

  // let parseMark = (stream: Lexer.result): (FORM.t, Lexer.result) => {
  //   open Token

  //   let rec _parseMark = (stream) => switch stream {
  //   | pattern1 => expression
  //   | list{Mark(Close), r} => ()
  //   }

  //   FORM.Mark([ stream->parse ])
  // }

  // let parse = (stream: Lexer.result): FORM.expr => {
  //   open Token

  //   let rec _parse = (stream) => switch stream {
  //   | list{Mark(Open), ...r} => r->parseMark
  //   | pattern2 => expression
  //   }
    
  //   [ stream->_parse ]
  // }

}
