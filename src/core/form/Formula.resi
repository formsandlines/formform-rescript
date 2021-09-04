open Expr

type t = private string


module Lexer: {


}

module Parser: {


  let parse: (t) => FVAR.expr
}

// type varlist = private array<string>

// let reOrderVars: (formula, varlist) => formula

// let decodeVars: (formula, decodePattern? = undefined) => formula

// let encodeVars: (formula, varlist) => formula

// let matchDefaultVarOrder: (varlist) => varList

