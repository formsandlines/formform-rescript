open Calc

type t = private array<Const.t>

let get: (t, int) => option<Const.t>
let getUnsafe: (t, int) => Const.t

let getLength: t => int

let getSize: t => int
let isValidLength: int => bool

let make: array<Const.t> => option<t>
let makeUnsafe: array<Const.t> => t
let genRandom: (int) => t

let toArray: t => array<Const.t>

let reorderToNMUI: (~undo: bool=?, t) => t

let fromIntArr: (~sortNMUI: bool=?, array<int>) => option<t>
let fromIntArrUnsafe: (~sortNMUI: bool=?, array<int>) => t

let fromStrArr: (~sortNMUI: bool=?, array<string>) => option<t>
let fromStrArrUnsafe: (~sortNMUI: bool=?, array<string>) => t
// let fromStrArr: (array<string>) => option<t>
// let fromStrArrUnsafe: (array<string>) => t

let show: (~sortNMUI: bool=?, ~spaced: bool=?, t) => string

let raw: (t) => string

// module Permutation: {
//   type dna = t

//   type t = array<int>

//   let validate: (array<int>) => array<int>

//   let makeUnsafe: (array<int>) => t
//   let make: (dna, array<int>) => option<t>
// }

// let permute: (t, Permutation.t) => t
// let permute: (t, array<int>) => option<t>

module Perspective: {
  type dna = t

  // type permOrder = private array<int>
  // type t = private (array<int>, dna)
  type t = private { permOrder: array<int>, dna: dna }

  let getPermOrder: (t) => array<int>
  let getDna: (t) => dna

  let isValidPermOrder: (array<int>) => bool

  let permute: (dna, array<int>) => option<t>
  let permuteAll: (dna) => array<t>

  let makeUnsafe: (array<int>, dna) => t
}

let inv: (t) => t

let rel: (t, t) => t
