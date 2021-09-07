module Const: {
  
  @deriving({jsConverter,accessors}) // generates Converters to/from Enum index
  type t = N | U | I | M

  let show: (t) => string
  let showAsKey: (t) => string

  let toInt: (~sortNMUI: bool=?, t) => int
  let fromInt: (~sortNMUI: bool=?, int) => option<t>

  let tFromStr: (string) => option<t>

  let enum: list<t>
  let enum_NMUI: list<t>
  let enumNM: list<t>
  let enumUI: list<t>


  let inv: (t) => t
  let rel: (t, t) => t
}

module Nested: {

  type t

  let show: ([<
    | #NestToL(Belt.List.t<Const.t>)
    | #NestToR(Belt.List.t<Const.t>)
    ]) => string

  let getList: (t) => list<Const.t>

  let fromArrayToL: (array<Const.t>) => t
  let fromArrayToR: (array<Const.t>) => t
  let toArray: (t) => array<Const.t>

  let fmapL: ([< #NestToL(list<Const.t>)], list<Const.t> => list<Const.t>)
              => [> #NestToL(list<Const.t>)]
  let fmapR: ([< #NestToR(list<Const.t>)], list<Const.t> => list<Const.t>)
              => [> #NestToR(list<Const.t>)]


  let reduceByCrossingL: ([< #NestToL(list<Const.t>)]) => [> #NestToL(list<Const.t>)]
  let reduceByCrossingR: ([< #NestToR(list<Const.t>)]) => [> #NestToR(list<Const.t>)]

  let reduceByCallingL: ([< #NestToL(list<Const.t>)]) => [> #NestToL(list<Const.t>)]
  let reduceByCallingR: ([< #NestToR(list<Const.t>)]) => [> #NestToR(list<Const.t>)]
  
  let reduceL: ([< #NestToL(list<Const.t>)]) => [> #NestToL(list<Const.t>)]
  let reduceR: ([< #NestToR(list<Const.t>)]) => [> #NestToR(list<Const.t>)]


  let calcL: [< #NestToL(list<Const.t>)] => Const.t
  let calcR: [< #NestToR(list<Const.t>)] => Const.t
}