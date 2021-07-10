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

  // Js.Dict.fromArray
}

