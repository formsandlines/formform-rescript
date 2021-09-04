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

  let toArray = (vspace) => vspace

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

  let toDNA = (vspc: t, map: (VPoint.t => Const.t)): DNA.t =>
    vspc->Js.Array2.map(map)->Js.Array2.reverseInPlace->DNA.makeUnsafe

}

module VMap = {

}

module VTable = {
  // ===================================================================
  // [VTable]: value table -> key-value dictionary for [DNA]
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

  let makeFromDNA = (dna: DNA.t) => {
    let dnaArr = dna->DNA.toArray
    let len = Js.Math.log(dnaArr->Js.Array2.length->Js.Int.toFloat) /. Js.Math.log(4.0) // ? inefficient because VSpace.make does opposite conversion
    let vspc = VSpace.make(len->Js.Math.floor_int)

    Belt.Array.zipBy(vspc, (dnaArr->Js.Array2.reverseInPlace), (vp, result) =>
      (vp->VPoint.showAsKey, result) )->Js.Dict.fromArray
  }

}

