open Calc

// ===================================================================
// [DNA]: formDNA -> [Const]-value-structure of a FORMula
// ===================================================================

// Note that an empty [DNA] array is impossible to construct since the type is private
type t = array<Const.t>


let get = (dna, i) => dna->Belt.Array.get(i)

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
let rec reorderToNMUI = (dna) => {
  let len = dna->Js.Array2.length

  if (len < 4) { dna } // single values don't need reordering
  else {
    let partLen = len / 4

    Belt.Array.makeBy(4, (i) => {
      // reordering of segments: [MIUN] => [IUMN]
      let i_nmui = switch i {
      | 0 => 1 // at pos 0, take value from pos 1 (I) in dna
      | 1 => 2 // at pos 1, take value from pos 2 (U) in dna
      | 2 => 0 // at pos 2, take value from pos 0 (M) in dna
      | _ => i // at pos 3, take value from pos 3 (N) in dna
      }
      let index = i_nmui * partLen
      let part_nmui = dna->Js.Array2.slice(~start=index, ~end_=(index + partLen))

      (len > 4) ? reorderToNMUI(part_nmui) : part_nmui
    })->Belt.Array.concatMany
  }
}

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
    Some(dna)
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
  */
let fromStrArr = (arr) => {
  if (arr->Belt.Array.length->isValidLength == false) { None }
  else {
    let dna = arr->Js.Array2.map((n) =>
      switch (n->Const.tFromStr) {
      | Some(c) => c
      | None => raise(Not_found)  // ! should return None
      })
    Some(dna)
  }
}
let fromStrArrUnsafe = (arr) =>
  switch arr->fromStrArr {
  | Some(dna) => dna
  | None => raise(Not_found)
  }

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

