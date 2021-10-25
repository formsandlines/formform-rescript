open Calc
open Value

// type vmap = VMap.t

type cell = { w: float, h: float }
type vmapData = { dna: DNA.t, vnum: int, cell: cell, margins: array<float> }
type treeData = { height: int, depth: int, order: int }
type geomData = { pos: array<float>, scale: array<float> }

type rec t = 
  | Leaf({
      data: vmapData,
      value: Const.t, 
      attr: treeData, geom: geomData,
    })
  | Branch({
      data: vmapData,
      attr: treeData, geom: geomData,
      children: array<t>
    })




let testData = {dna: DNA.makeUnsafe([N]), vnum: 1, cell: {w: 10.0, h: 10.0 }, margins: [0.0]}
let testAttr = {height: 3, depth: 4, order: 1}
let testGeom = {pos: [0.0], scale: [1.2]}

let test = Leaf({ data: testData, value: Const.N, attr: testAttr, geom: testGeom })

