open Calc
open Expr
open Value


module Interpr: {

  type t = Js.Dict.t<Const.t>

  let toVPoint: t => VPoint.t
  let fromVPoint: (VPoint.t, array<string>) => option<t>

  let interpret: (FORM.expr<var>, t) => FORM.expr<con>

}


let eval: (FORM.expr<con>) => Const.t
let evalSeq: (FORM.seq<con>) => Const.t

let interEval: (FORM.expr<var>, Interpr.t) => Const.t

let evalAll: (FORM.expr<var>) => FORM.fdna<var>