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

  let make: (VSpace.t, VPoint.t => Calc.Const.t) => t

  let fromDNA: (DNA.t) => t

// let expected = [list{N,N},list{N,U},list{N,I},list{N,M},
//                 list{U,N},list{U,U},list{U,I},list{U,M},
//                 list{I,N},list{I,U},list{I,I},list{I,M},
//                 list{M,N},list{M,U},list{M,I},list{M,M},
//                 ]
// Map([ 
//   (N, 
//     Map([ (N, Cell(N)), (M, Cell(M)) ])
//   ),
//   (U, 
//     Map([ (U, Cell(N)), (U, Cell(M)) ]) 
//   ),
// ])

  // type cell = {w: int, h: int}
  // type margins = array<float>

  // let construct: (DNA.t, int, cell, margins) => t

  // let make: (~vars: array<string> =?, DNA.t) => {"tree": t, "input": DNA.t, "varorder": array<string>} 

}

module VTable: {

  type t = private Js.Dict.t<Const.t>

  let show: t => string

  let makeFromDNA: (DNA.t) => t
}