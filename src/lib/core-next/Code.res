open Calc

module Dna = {
  // ===================================================================
  // [Dna]: formDNA -> [Const] value-structure of FORM
  // ===================================================================

  type t = array<Const.t>

  /**
  * Generates notation for [Dna]
  */
  let show = (dna: t) =>
    dna->Js.Array2.reduce((str, c) => str ++ (c->Const.show), "")


  // ----------------------------------------------------
  // Operations
  // ----------------------------------------------------

  /**
   * Inverts/marks all [Const] values of [Dna]
   */
  let inv = (dna: t) => dna->Js.Array2.map(c => Const.inv(c))

  /**
   * Relates all corresponding [Const] values between two [Dna]
   * (if [Dna]s differ in length, only the indexical matching subpart of the longer one is related)
   */
  let rel = (dna_a: t, dna_b: t) => {
    let len_a = dna_a->Js.Array2.length
    let len_b = dna_b->Js.Array2.length

    let (sub, sup) = (len_a <= len_b) ? (dna_a,dna_b) : (dna_b,dna_a)

    sup->Js.Array2.mapi((c,i) => Const.rel(c, sub[i]))
  }

}

module VTable = {

  type t = Js.Dict.t<Const.t>

  // let show = (vtable: t): string => {

  // }
  // Js.Dict.fromArray

  // module IntCmp = Belt.Id.MakeComparable({
  //   type t = int
  //   let cmp = Pervasives.compare
  // })

  // let makeN = ()



  let make1 = (base, val: (Const.t) => Const.t) => {
    let makeKey = (c) => c->Const.showAsKey
    let raw = base
      ->Js.Array2.map(c => (makeKey(c), val(c)) )

    raw->Js.Dict.fromArray
  }

  let make2 = (base, val: (Const.t,Const.t) => Const.t) => {
    let makeKey = (c,c') => c->Const.showAsKey ++ c'->Const.showAsKey
    let raw = base
      ->Js.Array2.map(c => (base->
        Js.Array2.map(c' => (makeKey(c,c'), val(c,c')) ) ))

    raw->Belt.Array.concatMany->Js.Dict.fromArray
  }

  let make3 = (base, val: (Const.t,Const.t,Const.t) => Const.t) => {
    let makeKey = (c,c',c'') => c->Const.showAsKey ++ c'->Const.showAsKey ++ c''->Const.showAsKey
    let raw = base
      ->Js.Array2.map(c => (base->
        Js.Array2.map(c' => (base->
        Js.Array2.map(c'' => (makeKey(c,c',c''), val(c,c',c'')) ) )) ))

    raw->Belt.Array.concatMany->Belt.Array.concatMany->Js.Dict.fromArray
  }

}

