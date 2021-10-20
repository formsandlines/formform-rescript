module Token: {
  type parens = Open | Close
  type const = Calc.Const.t // N | U | I | M
  type constN = C0 | C1 | C2 | C3
  type par = Helper.Parity.t // Even | Odd
  
  type t =
    | Mark(parens)  // (…)
    | SeqRE(parens) // {…}
    | Const(const)  // N | U | I | M
    | Var(string) // x | x_n | "someX" | "someX_n"
    | Uncl(string) // /someU/ | /someU_n"
    | SeqRE_sig(SeqRE.sig)
    | OptSep // |
    | SeqSep // ,
    | SeqRE_par(par) // 2r | 2r+1
    | SeqRE_open // open
    | SeqRE_alt // alt
    | DNA({sortNMUI: bool, code: DNA.t}) // :: | ⁘
    | ExprSep // .
    | VarList(array<string>)

  let toString: t => string

}

module Lexer: {
  exception LexError({msg: string})

  type tokenStream = list<Token.t>

  let scan: string => tokenStream
}

open Expr

module Parser: {
  exception ParseError({msg: string})

  let parse: Lexer.tokenStream => FORM.expr<var>
}

let read: string => FORM.expr<var>


// let reOrderVars: (formula, varlist) => formula

// let decodeVars: (formula, decodePattern? = undefined) => formula

// let encodeVars: (formula, varlist) => formula

// let matchDefaultVarOrder: (varlist) => varList