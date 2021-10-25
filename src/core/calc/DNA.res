open Calc

// ===================================================================
// [DNA]: formDNA -> [Const]-value-structure of a FORMula
// ===================================================================

// Note that an empty [DNA] array is impossible to construct since the type is private
type t = array<Const.t>


let get: (t, int) => option<Const.t> = (dna, i) => dna->Belt.Array.get(i)
let getUnsafe: (t, int) => Const.t = (dna, i) => dna->Belt.Array.getUnsafe(i)

let getLength = (dna) => dna->Belt.Array.length

let getSize = (dna) => {
  let len = dna->Belt.Array.length
  let size = Js.Math.log(len->Belt.Int.toFloat) /. Js.Math.log(4.0)
  Belt.Int.fromFloat(size)
}
let getSizeFromLength = (len) => {
  let x = Js.Math.log(len->Belt.Int.toFloat) /. Js.Math.log(4.0)
  if (!Js.Float.isFinite(x) || Helper.hasDecimal(x)) { None }
  else { Some(Belt.Int.fromFloat(x)) }
}

let isValidLength = (len) =>
  switch len->getSizeFromLength {
  | Some(_) => true
  | None => false
  }

let make = (arr) => {  // ! unsafe for JS if no type given and useless otherwise
  let len = arr->Belt.Array.length
  if (len->isValidLength) { Some(arr) }
  else { None }
}
let makeUnsafe = (arr) => {
  let len = arr->Belt.Array.length
  if (len->isValidLength) { arr }
  else { raise(Not_found) }
}

let genRandom = (size) => {
  [] // TODO
}

let toArray = (dna) => dna  // ? useless in JS

/** 
  * Reorders positions of [Const] from given [DNA] to NMUI ordering
  */
let rec reorderToNMUI = (~undo=false, dna) => {
  let len = dna->getLength

  if (len < 4) { dna } // single values don't need reordering
  else {
    let partLen = len / 4

    Belt.Array.makeBy(4, (i) => {
      // reordering of segments:
      // NUIM (undo): [IUMN] => [MIUN]  |  NMUI: [MIUN] => [IUMN]
      let i_reordered = switch i {
      | 0 => undo ? 2 : 1 // at pos 0, take val from pos 2 (M) | 1 (I) in dna 
      | 1 => undo ? 0 : 2 // at pos 1, take val from pos 0 (I) | 2 (U) in dna 
      | 2 => undo ? 1 : 0 // at pos 2, take val from pos 1 (U) | 0 (M) in dna 
      | _ => undo ? i : i // at pos 3, take val from pos 3 (N) | 3 (N) in dna 
      }
      let index = i_reordered * partLen
      let part_reordered = dna->Js.Array2.slice(~start=index, ~end_=(index + partLen))

      (len > 4) ? reorderToNMUI(~undo=undo, part_reordered) : part_reordered
    })->Belt.Array.concatMany
  }
}
// /** 
//   * Reorders positions of [Const] from given [DNA] to NMUI ordering
//   */
// let rec reorderToNMUI = (dna) => {
//   let len = dna->getLength

//   if (len < 4) { dna } // single values don't need reordering
//   else {
//     let partLen = len / 4

//     Belt.Array.makeBy(4, (i) => {
//       // reordering of segments: [MIUN] => [IUMN]
//       let i_nmui = switch i {
//       | 0 => 1 // at pos 0, take value from pos 1 (I) in dna
//       | 1 => 2 // at pos 1, take value from pos 2 (U) in dna
//       | 2 => 0 // at pos 2, take value from pos 0 (M) in dna
//       | _ => i // at pos 3, take value from pos 3 (N) in dna
//       }
//       let index = i_nmui * partLen
//       let part_nmui = dna->Js.Array2.slice(~start=index, ~end_=(index + partLen))

//       (len > 4) ? reorderToNMUI(part_nmui) : part_nmui
//     })->Belt.Array.concatMany
//   }
// }

/**
  * Given an array of ints, converts it to [DNA]
  * with optional NMUI interpretation/ordering
  */
let fromIntArr = (~sortNMUI=false, arr) => {
  if (arr->Belt.Array.length->isValidLength == false) { None }
  else {
    let dna = arr->Js.Array2.map((n) =>
      switch (n->Const.fromInt(~sortNMUI=sortNMUI)) {
      | Some(c) => c
      | None => raise(Not_found)
      })
    Some(sortNMUI ? dna->reorderToNMUI(~undo=true) : dna)
  }
  // sortNMUI ? dna->reorderToNMUI : dna  // ! reorder is NOT what we want!
}
let fromIntArrUnsafe = (~sortNMUI=false, arr) =>
  switch arr->fromIntArr(~sortNMUI=sortNMUI) {
  | Some(dna) => dna
  | None => raise(Not_found)
  }

/**
  * Given an array of strings (chars), converts it to [DNA]
  * with optional NMUI interpretation/ordering in case of number chars
  */
let fromStrArr = (~sortNMUI=false, arr) => {
  if (arr->Belt.Array.length->isValidLength == false) { None }
  else {
    let dna = arr->Js.Array2.map((n) =>
      switch (n->Const.tFromStr(~sortNMUI=sortNMUI)) {
      | Some(c) => c
      | None => raise(Not_found)  // ! should return None
      })
    Some(sortNMUI ? dna->reorderToNMUI(~undo=true) : dna)
  }
}
let fromStrArrUnsafe = (~sortNMUI=false, arr) =>
  switch arr->fromStrArr(~sortNMUI=sortNMUI) {
  | Some(dna) => dna
  | None => raise(Not_found)
  }
// let fromStrArr = (arr) => {
//   if (arr->Belt.Array.length->isValidLength == false) { None }
//   else {
//     let dna = arr->Js.Array2.map((n) =>
//       switch (n->Const.tFromStr) {
//       | Some(c) => c
//       | None => raise(Not_found)  // ! should return None
//       })
//     Some(dna)
//   }
// }
// let fromStrArrUnsafe = (arr) =>
//   switch arr->fromStrArr {
//   | Some(dna) => dna
//   | None => raise(Not_found)
//   }

/**
  * Generates notation for [DNA]
  * Note: NUIM ordering is *always* expected, so ~sortNMUI will reorder the whole dna
  */
let show = (~sortNMUI=false, ~spaced=false, dna: t) => {
  let dna_sorted = sortNMUI ? dna->reorderToNMUI : dna
  let prefix = (sortNMUI ? `::` : `⁘`) ++ (spaced ? " " : "")

  if (dna_sorted == []) { prefix ++ Const.N->Const.toInt(~sortNMUI=sortNMUI)->Js.Int.toString }
  else {
    prefix ++ dna_sorted->Js.Array2.reducei((str, c, i) => {
      let spc = (spaced && i > 0 && mod(i, 4) == 0) ? " " : ""
      str ++ spc ++ (c->Const.toInt(~sortNMUI=sortNMUI)->Js.Int.toString) }, "")
  }
}

let raw = (dna: t) =>
  dna == [] ? Const.N->Const.showAsKey : dna->Js.Array2.map(c => c->Const.showAsKey)->Js.Array2.joinWith("")
  // dna->Js.Array2.reduce((str, c) => str ++ (c->Const.showAsKey), "")

// ----------------------------------------------------
// Permutations
// ----------------------------------------------------

// module Permutation = {
//   // TODO
//   type dna = t

//   type t = array<int>

//   // let validate: (array<int>) => array<int>

//   let makeUnsafe = (arr) => arr
//   let make = (dna, arr) =>
//     if (dna->getSize == arr->Js.Array2.length) {
//       // check if ints start at 0 and are +1 each
//       Some(arr)
//     } else {
//       None
//     }
  
// }

// let permute = (dna, perm) => dna // TODO

// let permute = (dna, permOrder) => {

module Perspective = {
  type dna = t

  type t = { permOrder: array<int>, dna: dna }

  let getPermOrder = (psp) => psp.permOrder
  let getDna = (psp) => psp.dna

  /**
   * Checks if parmutation ordering is valid
   */
  // needs to start at 0 and end at size and have the same amount of elements as dna
  let isValidPermOrder = (permOrder: array<int>) =>
    switch permOrder {
    | [] | [0] => true
    | _ => {
        let orderSetArr = permOrder->Belt.Set.Int.fromArray->Belt.Set.Int.toArray
        let len = orderSetArr->Js.Array2.length

        (permOrder->Js.Array2.length == len)
          && orderSetArr[0] == 0 && orderSetArr[len-1] == len-1
      }
    }

  /**
   * Permutes a [DNA] to match a given permutation ordering
   */
  let permute: (dna, array<int>) => option<t> = (dna, permOrder) => {
    let size = dna->getSize
    if (size != permOrder->Js.Array2.length || !isValidPermOrder(permOrder)) { None }
    else if (size < 2) { Some({ permOrder, dna }) }
    else {
      let toQuaternaryStr = (n) => Js.Int.toStringWithRadix(n,~radix=4)->JsRaw.padStart(size,"0")
      let dnaLen = dna->getLength
      let dnaRev = dna->toArray//->Belt.Array.reverse // ? inefficient - required?

      let dnaPermuted = Belt.Array.makeByU(dnaLen, (. i) => {
        let qtnKey = (i)->toQuaternaryStr->Js.String2.split("")
        // let permKey = qtnKey->Belt.Array.mapWithIndexU((. j,_) => {
        let permKey = Belt.Array.makeByU(size, (. j) => {
            // qtnKey[permOrder[j]]
            switch permOrder->Belt.Array.get(j) {
            | Some(swap_i) => switch qtnKey->Belt.Array.get(swap_i) {
              | Some(qtnStr) => qtnStr
              | None => raise(Helper.IndexExc((`Couldn't get qtn string from swapped index`, swap_i)))
              }
            | None => raise(Helper.IndexExc((`Couldn't get index from permutation ordering!`, j)))
            }
          })->Js.Array2.joinWith("")
        // let i_perm = permKey->Helper.intFromStrWithRadix(~radix=4)->Belt.Option.getUnsafe
        switch permKey->Helper.intFromStrWithRadix(~radix=4) {
        | Some(i_perm) => switch dnaRev->Belt.Array.get(i_perm) {
          | Some(c) => c
          | None => raise(Helper.IndexExc((`Couldn't get Const value from DNA.`, i_perm)))
          }
        | None => raise(Helper.Debug(`permKey "${permKey}" could not be converted to int!`))
        } 
        // dna->getUnsafe(i_perm)
      })->makeUnsafe
      // })->Belt.Array.reverse->makeUnsafe
      Some({ permOrder, dna: dnaPermuted })
    }
  }

  let permuteAll = (dna) => [{permOrder: [], dna}]

  // ! shadowing on parent module!
  let makeUnsafe = (permOrder, dna) => {permOrder, dna}

}

// ----------------------------------------------------
// Operations
// ----------------------------------------------------

/**
  * Inverts/marks all [Const] values of [DNA]
  */
let inv = (dna: t) =>
  (dna == []) ? [Const.inv(Const.N)] : dna->Js.Array2.map(c => Const.inv(c))

/**
  * Relates all corresponding [Const] values between two [DNA]
  * (if [DNA]s differ in length, only the indexical matching subpart of the longer one is related)
  */
let rel = (dna_a: t, dna_b: t) => {
  let len_a = dna_a->Js.Array2.length
  let len_b = dna_b->Js.Array2.length

  let (sub, sup, subLen, supLen) = (len_a <= len_b) ? (dna_a,dna_b, len_a,len_b) : (dna_b,dna_a, len_b,len_a)

  let result = Belt.Array.zipBy(sup, sub, (a,b) => Const.rel(a,b))

  if (subLen == supLen) { result }
  else { result->Belt.Array.concat(sup->Belt.Array.slice(~offset=subLen, ~len=supLen)) }
}

