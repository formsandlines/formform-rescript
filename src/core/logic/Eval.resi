open Calc
open Expr
open Value


module Interpr: {

  type t = Js.Dict.t<Const.t>

  let toVPoint: t => VPoint.t
  let fromVPoint: (VPoint.t, array<string>) => option<t>

  let interpret: (FORM.expr, t) => FORM.expr

}


let eval: (FORM.expr, Interpr.t) => Const.t
// let evalDNA: ? // ! missing!
let evalSeq: (FORM.seq, Interpr.t) => Const.t

let evalAll: (FORM.expr) => FORM.fdna