open Calc

module VPoint = {
  // ===================================================================
  // [VPoint]: value point -> array of [Const] coordinates in a [VSpace]
  // ===================================================================

  // Coordinate/arrow in a [Const] value space
  type t = array<Const.t>

  // let show = (vp: t): string => "["++vp->Belt.List.reduce("", (str, c) =>
  //     `${str}${(str->Js.String2.length > 0) ? "," : ""}${c->Const.show}`
  //   )++"]"
  let show = (vp: t) =>
    "["++vp->Belt.Array.map(c => c->Const.show)->Js.Array2.joinWith(",")++"]" // <- without conversion?
  
  // let showAsKey = (vp: t) => vp->Belt.Array2.reduce("", (str, c) =>
  //     str ++ (c->Const.showAsKey) )
  let showAsKey = (vp: t) =>
    vp->Belt.Array.map(c => c->Const.showAsKey)->Js.Array2.joinWith("") // <- without conversion?

  
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
      Some(maybe_vpoint->Js.Array2.map(v => v->Belt.Option.getUnsafe))
    } else {
      None
    }
  }

}

module VSpace = {
  // ===================================================================
  // [VSpace]: value space -> set/array of all n-dimensional [VPoint]s
  // ===================================================================

  type t = {points: array<VPoint.t>, dim: int}

  let getPoints = (vspace) => vspace.points
  let getDimension = (vspace) => vspace.dim

  let make = (~sortNMUI=false, dim: int): t => {
    let resolution = Js.Math.floor_int(4.0 ** dim->Belt.Int.toFloat)

    let points = Belt.Array.makeBy(resolution,(i) => {
      let vp_str = Js.Int.toStringWithRadix(i,~radix=4)->JsRaw.padStart(dim,"0");
      switch (vp_str->VPoint.tFromStr(~sortNMUI=sortNMUI)) {
      | Some(vpoint) => vpoint
      | None => raise(Not_found)
      }
    })
    {points, dim}
  }

  // Might be more inefficient than "make" because of list conversion:
  // let make'__alt = (~sortNMUI=false, dim: int): t => {

  //   let base = Const.tEnumList(~sortNMUI=sortNMUI, ())
  //   base->Helper.ListMonads.cartesProd(dim)->Belt.List.toArray
  // }

  let toDNA = (vspace: t, map: (VPoint.t => Const.t)): DNA.t =>
    vspace.points->Js.Array2.map(map)->Js.Array2.reverseInPlace->DNA.makeUnsafe

}

module VMap = {
  // ===================================================================
  // [VMap]: value map -> mapping from [VSpace] topology to [DNA] values
  // ===================================================================

  // ? maybe implicit value by index in Map instead of tuple
  type rec t = Cell(Const.t) | Map(array<(Const.t, t)>)

  // let rec show = (vmap) => switch vmap {
  // | Cell(c) => `<${c->Const.show}>`
  // | Map(coords) => `[` ++ coords->Belt.Array.map(((c,vmap')) =>
  //       `${c->Const.show}: ${vmap'->show}`
  //     )->Js.Array2.joinWith(`, `) ++ `]`
  // }
  let rec show = (~depth=0, vmap) => switch vmap {
  | Cell(c) => `<${c->Const.show}>`
  | Map(coords) => {
      let depthMax = switch coords->Belt.Array.get(0) {
      | Some((_, Cell(_))) => true
      | _ => false
      }
      let br = depthMax ? `` : `\n`
      let indent = depthMax ? `` : `  `
      `[` ++ br ++ coords->Belt.Array.map(((c,vmap')) => {
        indent->Js.String2.repeat(depth+1) ++ `${c->Const.show}: ${vmap'->show(~depth = depth+1)}`
      })->Js.Array2.joinWith(`, ` ++ br) ++ br ++ indent->Js.String2.repeat(depth) ++ `]`
    }
  }

  /** for testing purposes - use with caution! */
  let makeUnsafe_Cell = (c) => Cell(c)
  /** for testing purposes - use with caution! */
  let makeUnsafe_Map = (coords) => Map(coords)

  /**
  * Recursively constructs VMap from DNA
  */
  let make = (vspace, map) => {
    let dim = vspace->VSpace.getDimension

    let rec aux = (points: array<VPoint.t>, pos: int) => {
      if (pos >= dim) {
        Cell(points[0]->map)
      }
      else {
        Map(Const.tEnum()->Belt.Array.map(posVal => {
          let (group, _) = points->Belt.Array.partition(vp => vp[pos] == posVal)
          (posVal, group->aux(pos+1))
        }))
      }
    }
    vspace.points->aux(0)
  }

  /**
  * Generates vmap from DNA input
  */
  let fromDNA = (dna) => {

    let dnaArr = dna->DNA.toArray
    let len = Js.Math.log(dnaArr->Js.Array2.length->Js.Int.toFloat) /. Js.Math.log(4.0) // ? inefficient because VSpace.make does opposite conversion
    let vspace = VSpace.make(len->Js.Math.floor_int)

    vspace->make(vp => {
      let height = vspace.dim-1
      let index = dna->DNA.getLength-1
        - if (height < 0) { 0 }
          else { vp->Belt.Array.reduceWithIndex(0, (pos,c,i) => {
            let offset = Belt.Int.fromFloat( 4.0 ** Belt.Int.toFloat(height - i) )
            pos + offset * c->Const.toInt
          }) }
      switch dna->DNA.get(index) {
      | Some(c) => c
      | None => raise(Not_found)
      }
    })
  }

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
    let vspace = VSpace.make(len->Js.Math.floor_int)

    Belt.Array.zipBy(vspace.points, (dnaArr->Js.Array2.reverseInPlace), (vpoint, result) =>
      (vpoint->VPoint.showAsKey, result) )->Js.Dict.fromArray
  }

}

