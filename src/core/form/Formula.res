module Token = {
  type parens = Open | Close
  type label = Label(string) | LabelSub({lbl: string, sub: string})
  type const = N | U | I | M
  type constN = C0 | C1 | C2 | C3
  type mn = RecInstr | RecIdent
  type par = Even | Odd
  type fdnaCode = NMUI | NUIM

  type t =
    | Mark(parens)  // (…)
    | SeqRE(parens) // {…}
    | List(parens)  // […]
    | Const(const)  // N | U | I | M
    | ConstN(constN)  // 0 | 1 | 2 | 3
    | VarChar(label) // x | x_n
    | VarStr(label) // "someX" | "someX_n"
    | Uncl(label) // /someU/ | /someU_n"
    | SeqRE_sig_mn(mn) // @ | @~
    | SeqRE_sig_step // .
    | SeqRE_sig_unmarked // _
    | OptSep // |
    | SeqSep // ,
    | SeqRE_par(par) // 2r | 2r+1
    | SeqRE_open // open
    | SeqRE_alt // alt
    | Fdna_code(fdnaCode) // :: | ⁘
    | Fdna_sep // .
    | Char(string) // ?

  let toString = (token: t): string => switch token {
  | Mark(Open)  => "(" | Mark(Close)  => ")"
  | SeqRE(Open) => "{" | SeqRE(Close) => "}"
  | List(Open)  => "[" | List(Close)  => "]"

  | Const(N)   => "N" | Const(U)   => "U" | Const(I)   => "I" | Const(M)   => "M"
  | ConstN(C0) => "0" | ConstN(C1) => "1" | ConstN(C2) => "2" | ConstN(C3) => "3"

  | VarChar(Label(lbl)) =>     lbl    | VarChar(LabelSub(r)) =>  `${r.lbl}_${r.sub}`
  | VarStr(Label(lbl))  => `"${lbl}"` | VarStr(LabelSub(r))  => `"${r.lbl}_${r.sub}"`
  | Uncl(Label(lbl))    => `/${lbl}/` | Uncl(LabelSub(r))    => `/${r.lbl}_${r.sub}/`

  | SeqRE_sig_mn(RecInstr) => "@" | SeqRE_sig_mn(RecIdent) => "@~"
  | SeqRE_sig_step => "." | SeqRE_sig_unmarked => "_"

  | OptSep => "|" | SeqSep => ","
  | SeqRE_par(Even) => "2r" | SeqRE_par(Odd) => "2r+1"
  | SeqRE_open => "open" | SeqRE_alt => "alt"

  | Fdna_code(NMUI) => "::" | Fdna_code(NUIM) => "⁘"
  | Fdna_sep => "."

  | Char(str) => str
  }

}

module Lexer = {
  exception LexError({msg: string})

  type tokenStream = list<Token.t>
  // type result = Belt.Result.t<tokenStream, lexError>
  // let del = 

  let splitSubscript = (str): (string, option<string>) => {
    let parts = str->Js.String2.split("_")
    switch parts {
    // | [] => raise(LexError({msg: "Label should not be empty!"}))
    | [lbl] => (lbl, None)
    | [lbl, ""] => (lbl ++ "_", None)
    | ["", sub] => ("_" ++ sub, None)
    | [lbl, sub] => (lbl, Some(sub))
    | _ => (parts[0], Some(parts
        ->Belt.Array.sliceToEnd(1)
        ->Js.Array2.joinWith("_"))
        )
    }
  }

  let scanLabel = (~delim: string, stream: list<string>): (Token.label, list<string>) => {

    let rec _scan = (stream: list<string>, lbl): (string, list<string>) =>
      switch stream {
      | list{} => raise(LexError({msg: `Closing '${delim}' is missing!`}))
      | list{d, ...r} if d == delim => (lbl, r)
      | list{str, ...r} => r->_scan(lbl ++ str)
      }
    
    switch stream->_scan("") {
    | ("", _) => raise(LexError({msg: `Label should not be empty!`}))
    | (lbl, rest) if lbl->Js.String2.length < 2 => (Label(lbl), rest)
    | (str, rest) => {
        // ? does it make sense to parse subscripts early if they have no semantics?
        let (lbl, maybeSub) = str->splitSubscript
        switch maybeSub {
        | Some(sub) => ( LabelSub({lbl: lbl, sub: sub}), rest )
        | None => ( Label(lbl), rest )
        }
      }
    }
  }

  let rec scanFml = (stream: list<string>): tokenStream => {
    open Token
    switch stream {
    | list{} => list{}
    | list{" ", ...r} => scanFml(r) // ignore whitespace

    | list{"(", ...r} => list{ Mark(Open), ...scanFml(r) }
    | list{")", ...r} => list{ Mark(Close), ...scanFml(r) }

    | list{"N", ...r} => list{ Const(N), ...scanFml(r) }
    | list{"U", ...r} => list{ Const(U), ...scanFml(r) }
    | list{"I", ...r} => list{ Const(I), ...scanFml(r) }
    | list{"M", ...r} => list{ Const(M), ...scanFml(r) }

    | list{"0", ...r} => list{ ConstN(C0), ...scanFml(r) }
    | list{"1", ...r} => list{ ConstN(C1), ...scanFml(r) }
    | list{"2", ...r} => list{ ConstN(C2), ...scanFml(r) }
    | list{"3", ...r} => list{ ConstN(C3), ...scanFml(r) }

    | list{`"`, ...r} => {
        let (lbl, r') = r->scanLabel(~delim=`"`)
        list{ VarStr(lbl), ...scanFml(r') }
      }
    | list{`/`, ...r} => {
        let (lbl, r') = r->scanLabel(~delim=`/`)
        list{ Uncl(lbl), ...scanFml(r') }
      }
    | list{str, ...r} => list{ Char(str), ...scanFml(r) }
    }
  }

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
