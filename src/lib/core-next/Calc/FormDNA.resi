open Calc

type t = private array<Const.t>

let getSize: t => int
let isValidLength: int => bool

let make: array<Const.t> => option<t>
let makeUnsafe: array<Const.t> => t

let toArray: t => array<Const.t>

let reorderToNMUI: t => t

let fromIntArr: (~sortNMUI: bool=?, array<int>) => option<t>
let fromIntArrUnsafe: (~sortNMUI: bool=?, array<int>) => t

let fromStrArr: (array<string>) => option<t>
let fromStrArrUnsafe: (array<string>) => t

let show: (~sortNMUI: bool=?, ~spaced: bool=?, t) => string

let raw: (t) => string

let inv: (t) => t

let rel: (t, t) => t