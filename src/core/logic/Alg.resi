open Calc
open Expr

module Isolator: {

  type t = private FORM.t

  let n: (string) => t
  let m: (string) => t
  let u: (string) => t
  let i: (string) => t

  let get: (Const.t, string) => t

  let fromVPoint: (~vars: array<string> = ?, Value.VPoint.t) => t
 
}


module Pattern: {

  module Imply: {

    type t = (FORM.expr => option<FORM.expr>)

    let apply: (FORM.expr, t) => FORM.expr
  }
  module Equiv: {

    type t = ( Imply.t, Imply.t )

    let applyL: (FORM.expr, t) => FORM.expr
    let applyR: (FORM.expr, t) => FORM.expr
  }

}


module PrimAlg: {

  let refl: Pattern.Equiv.t
}