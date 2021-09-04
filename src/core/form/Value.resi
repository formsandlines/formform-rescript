open Calc

module VPoint: {

  type t = list<Const.t>

  let show: t => string
  let showAsKey: t => string

  let tFromStr: (~sortNMUI: bool=?, string) => option<t>

}

module VSpace: {

  type t = private array<VPoint.t>

  let toArray: t => array<VPoint.t>

  let make: (~sortNMUI: bool=?, int) => t

  let toFormDNA: (t, VPoint.t => Calc.Const.t) => FormDNA.t

}

module VMap: {

}

module VTable: {

  type t = private Js.Dict.t<Const.t>

  let show: t => string

  let makeFromFDna: (FormDNA.t) => t
}