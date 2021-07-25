open Calc

module VPoint = {
  // ===================================================================
  // [VPoint]: value point -> [Const] coordinate/list in a [VSpace]
  // ===================================================================

  // Coordinate/arrow in a [Const] value space
  type t = list<Const.t>

  // let show = (vp: t): string => "["++vp->Belt.List.reduce("", (str, c) =>
  //     `${str}${(str->Js.String2.length > 0) ? "," : ""}${c->Const.show}`
  //   )++"]"
  let show = (vp: t) =>
    "["++vp->Belt.List.map(c => c->Const.show)->Belt.List.toArray->Js.Array2.joinWith(",")++"]" // <- without conversion?
  
  // let showAsKey = (vp: t) => vp->Belt.List.reduce("", (str, c) =>
  //     str ++ (c->Const.showAsKey) )
  let showAsKey = (vp: t) =>
    vp->Belt.List.map(c => c->Const.showAsKey)->Belt.List.toArray->Js.Array2.joinWith("") // <- without conversion?

  
  let tFromStr = (~sortNMUI=false, str: string): option<t> => {
    let maybe_vpoint = str
      ->Js.String2.split("")
      ->Js.Array2.map((val) => {
        switch (val->Belt.Int.fromString) {
        | Some(n) => n->Const.fromInt(~sortNMUI=sortNMUI)
        | None => val->Const.tFromStr
        }
      })
    if maybe_vpoint->Js.Array2.every(v => v != None) {
      Some(maybe_vpoint->Js.Array2.map(v => v->Belt.Option.getUnsafe)->Belt.List.fromArray)
    } else {
      None
    }
  }

}

module VSpace = {
  // ===================================================================
  // [VSpace]: value space -> set/array of all n-dimensional [VPoint]s
  // ===================================================================

  type t = array<VPoint.t>

  let make = (~sortNMUI=false, dim: int): t => {
    let resolution = Js.Math.floor_int(4.0 ** dim->Belt.Int.toFloat)

    Belt.Array.makeBy(resolution,(i) => {
      let vp_str = Js.Int.toStringWithRadix(i,~radix=4)->JsRaw.padStart(dim,"0");
      switch (vp_str->VPoint.tFromStr(~sortNMUI=sortNMUI)) {
      | Some(vvec) => vvec
      | None => raise(Not_found)
      }
    })
  }

  // Might be more inefficient than "make" because of list conversion:
  let make'__alt = (~sortNMUI=false, dim: int): t => {

    let base = sortNMUI ? Const.enum_NMUI : Const.enum
    base->Helper.ListMonads.cartesProd(dim)->Belt.List.toArray
  }

}

module FormDNA = {
  // ===================================================================
  // [FormDNA]: formDNA -> [Const]-value-structure of a FORMula
  // ===================================================================

  type t = array<Const.t>

  let rec reorderToNMUI = (dna: t): t => {
    let len = dna->Js.Array2.length
    let partLen = len / 4

    // Js.log2("Next part: ", dna)
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
      // Js.log4("Index: ", index, "Slice: ", part_nmui)

      (len > 4) ? reorderToNMUI(part_nmui) : part_nmui
    })->Belt.Array.concatMany
  }

  /**
   * Generates notation for [FormDNA]
   */
  let show = (~sortNMUI=false, ~spaced=false, dna: t) =>{
    let dna_sorted = sortNMUI ? dna->reorderToNMUI : dna

    let prefix = sortNMUI ? `::` : `⁘`
    prefix ++ (spaced ? " " : "") ++ dna_sorted->Js.Array2.reducei((str, c, i) => {
      let spc = (spaced && i > 0 && mod(i, 4) == 0) ? " " : ""
      str ++ spc ++ (c->Const.toInt(~sortNMUI=sortNMUI)->Js.Int.toString) }, "")
  }
  
  let raw = (dna: t) =>
    dna->Js.Array2.map(c => c->Const.showAsKey)->Js.Array2.joinWith("")
    // dna->Js.Array2.reduce((str, c) => str ++ (c->Const.showAsKey), "")

  let fromVSpace = (vspc: VSpace.t, map: (VPoint.t => Const.t)): t =>
    vspc->Js.Array2.map(map)


  // ----------------------------------------------------
  // Operations
  // ----------------------------------------------------

  /**
   * Inverts/marks all [Const] values of [FormDNA]
   */
  let inv = (dna: t) => dna->Js.Array2.map(c => Const.inv(c))

  /**
   * Relates all corresponding [Const] values between two [FormDNA]
   * (if [FormDNA]s differ in length, only the indexical matching subpart of the longer one is related)
   */
  let rel = (dna_a: t, dna_b: t) => {
    let len_a = dna_a->Js.Array2.length
    let len_b = dna_b->Js.Array2.length

    let (sub, sup) = (len_a <= len_b) ? (dna_a,dna_b) : (dna_b,dna_a)

    sup->Js.Array2.mapi((c,i) => Const.rel(c, sub[i]))
  }

}

module VTable = {
  // ===================================================================
  // [VTable]: value table -> key-value dictionary for [FormDNA]
  // ===================================================================

  type t = Js.Dict.t<Const.t>

  let show = (vtable: t): string => {
    "" // how?
  }
  // Js.Dict.fromArray

  // module IntCmp = Belt.Id.MakeComparable({
  //   type t = int
  //   let cmp = Pervasives.compare
  // })

  // let makeN = ()

  let makeFromFDna = (fdna: FormDNA.t) => {
    let len = Js.Math.log(fdna->Js.Array2.length->Js.Int.toFloat) /. Js.Math.log(4.0) // ? inefficient because VSpace.make does opposite conversion
    let vspc = VSpace.make(len->Js.Math.floor_int)

    Belt.Array.zipBy(vspc, (fdna->Js.Array2.reverseInPlace), (vp, result) =>
      (vp->VPoint.showAsKey, result) )->Js.Dict.fromArray
  }

}

