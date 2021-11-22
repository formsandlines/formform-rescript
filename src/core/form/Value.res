open Calc

module VPoint = {
  // ===================================================================
  // [VPoint]: value point -> array of [Const] coordinates in a [VSpace]
  // ===================================================================

  type t = array<Const.t>

  let show = (vp: t) =>
    "["++vp->Belt.Array.map(c => c->Const.show)->Js.Array2.joinWith(",")++"]"
  
  let showAsKey = (vp: t) =>
    vp->Belt.Array.map(c => c->Const.showAsKey)->Js.Array2.joinWith("")

  
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
      let vp_str = Js.Int.toStringWithRadix(i,~radix=4)->JsRaw.padStart(dim,"0")
      switch (vp_str->VPoint.tFromStr(~sortNMUI=sortNMUI)) {
      | Some(vpoint) => vpoint
      | None => raise(Not_found)
      }
    })
    {points, dim}
  }

  let toDNA = (vspace: t, map: (VPoint.t => Const.t)): DNA.t =>
    vspace.points->Js.Array2.map(map)->Js.Array2.reverseInPlace->DNA.makeUnsafe
}

module VMap = {
  // ===================================================================
  // [VMap]: value map -> mapping from [VSpace] topology to [DNA]
  // ===================================================================

  // ? maybe implicit value by index in Map instead of tuple
  type rec t = Cell(Const.t) | Map(array<(Const.t, t)>)

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
  * Recursively constructs VMap from VSpace using mapping function
  */
  let fromVSpace = (vspace, map) => {
    // ! map function needs to assume VPoints of same dimension as VSpace
    //   -> error-handling or simplify interface
    let dim = vspace->VSpace.getDimension

    let rec aux = (points: array<VPoint.t>, pos: int) => {
      if (pos >= dim) { Cell(points[0]->map) }
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
  * Creates VMap from dimension and mapping function
  */
  let make = (~sortNMUI=false, dim, map) => {
    // ! dimension must match assumed VPoint dimension in mapping function
    //   -> error-handling or simplify interface
    let vspace = VSpace.make(~sortNMUI, dim)
    fromVSpace(vspace, map)
  }

  /**
  * Generates vmap from DNA input
  */
  let fromDNA = (dna) => {

    let dnaArr = dna->DNA.toArray
    let len = Js.Math.log(dnaArr->Js.Array2.length->Js.Int.toFloat) /. Js.Math.log(4.0) // ? inefficient because VSpace.make does opposite conversion
    let vspace = VSpace.make(len->Js.Math.floor_int)

    vspace->fromVSpace(vp => {
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

module VDict = {
  // ===================================================================
  // [VDict]: value dictionary -> key-value map from [VSpace] to [DNA]
  // ===================================================================

  type t = Js.Dict.t<Const.t>

  let show = (vdict) => `VSpace -> DNA\n` ++ `-------------\n` ++ vdict->Js.Dict.entries
    ->Belt.Array.map(((key,c)) => `${key} -> ${c->Const.show}`)
    ->Js.Array2.joinWith(`\n`)

  /**
  * Creates a VDict from given [VSpace] using a mapping function for each [VPoint]
  */
  let fromVSpace = (vspace, map) => vspace
    ->VSpace.getPoints
    ->Belt.Array.map(vpoint => (vpoint->VPoint.showAsKey, vpoint->map))
    ->Js.Dict.fromArray

  /** for testing purposes - use with caution! */
  let fromDictUnsafe = (dict) => dict

  /**
  * Creates a VDict of given dimension using a mapping function for each [VPoint]
  */
  let make = (~sortNMUI=false, dim, map) =>
    VSpace.make(~sortNMUI, dim)->fromVSpace(map)

  /**
  * Creates a VDict from given [DNA]
  */
  let fromDNA = (dna) => {
    let dnaArr = dna->DNA.toArray
    let len = Js.Math.log(dnaArr->Js.Array2.length->Js.Int.toFloat) /. Js.Math.log(4.0) // ? inefficient because VSpace.make does opposite conversion
    let vspace = VSpace.make(len->Js.Math.floor_int)

    Belt.Array.zipBy(vspace.points, (dnaArr->Js.Array2.reverseInPlace), (vpoint, result) =>
      (vpoint->VPoint.showAsKey, result) )
      ->Js.Dict.fromArray
  }

}

