open Calc
open Expr

module Isolator: {

  type t = private FORM.t<var>

  let n: (string) => t
  let m: (string) => t
  let u: (string) => t
  let i: (string) => t

  let get: (Const.t, string) => t

  let fromVPoint: (~vars: array<string> = ?, Value.VPoint.t) => t
 
}


module Pattern: {

  module Imply: {

    type t<'a> = (FORM.expr<'a> => option<FORM.expr<'a>>)

    let apply: (FORM.expr<'a>, t<'a>) => FORM.expr<'a>
  }
  module Equiv: {

    type t<'a> = ( Imply.t<'a>, Imply.t<'a> )

    let applyL: (FORM.expr<'a>, t<'a>) => FORM.expr<'a>
    let applyR: (FORM.expr<'a>, t<'a>) => FORM.expr<'a>
  }

}


module PrimAlg: {

  let refl: Pattern.Equiv.t<'a>
}