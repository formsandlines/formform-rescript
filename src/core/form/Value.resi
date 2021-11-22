open Calc

module VPoint: {

  type t = array<Const.t>

  let show: t => string
  let showAsKey: t => string

  let tFromStr: (~sortNMUI: bool=?, string) => option<t>

}

module VSpace: {

  type t = private {points: array<VPoint.t>, dim: int}

  let getPoints: t => array<VPoint.t>

  let getDimension: t => int

  let make: (~sortNMUI: bool=?, int) => t

  let toDNA: (t, VPoint.t => Calc.Const.t) => DNA.t

}

module VMap: {

  type rec t = private Cell(Const.t) | Map(array<(Const.t, t)>)

  let show: (~depth: int=?, t) => string

  let makeUnsafe_Cell: (Const.t) => t
  let makeUnsafe_Map: (array<(Const.t, t)>) => t

  let make: (~sortNMUI: bool=?, int, VPoint.t => Const.t) => t

  let fromVSpace: (VSpace.t, VPoint.t => Const.t) => t

  let fromDNA: (DNA.t) => t
}

module VDict: {

  type t = private Js.Dict.t<Const.t>

  let fromDictUnsafe: (Js.Dict.t<Const.t>) => t

  let show: t => string

  let make: (~sortNMUI: bool=?, int, VPoint.t => Const.t) => t

  let fromVSpace: (VSpace.t, VPoint.t => Const.t) => t

  let fromDNA: (DNA.t) => t
}