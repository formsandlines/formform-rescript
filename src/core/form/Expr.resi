open Calc

let lblClass_unquoted: array<string>
let idxClass_unquoted: array<string>

module FORM: {

  @deriving(accessors)
  type rec t =
    | Mark(expr)
    | CVal(Const.t)
    | SeqRE(SeqRE.sig, seq)
    | Uncl(string)
    | FVar(string)
    | FDna(fdna)

  and expr = array<t>
  and seq = list<expr>
  and fdna = { // [FDna] expression
      dna: DNA.t,
      form: option<expr>,
      vars: option<array<string>>
    }


  let mark: (expr) => t
  let cVal: (Const.t) => t
  let seqRE: (SeqRE.sig, seq) => t
  let uncl: (string) => t

  let fVar: (string) => t
  let fDna: (fdna) => t
  

  let show: (~sortNMUI: bool=?, expr) => string

  let reduce: (expr, ('a, t) => 'a, 'a) => 'a

  let getVars: expr => array<string>
  let countVars: expr => int
}

module DepthTree: {

  type rec t = private 
    | Branch({
        index: tIndex,
        form:  FORM.t,
        children: array<t>
      })
    | Leaf({
        index: tIndex,
        form:  FORM.t
      })
  and tRoot = private {
      form:     FORM.expr,
      children: array<t>
    }
  and tIndex = private array<int>

  let show: tRoot => string  

  let parse: FORM.expr => tRoot

  let testTrees: array<tRoot> 
}


module FormDNA: {

  type t = FORM.fdna

  let show: (~sortNMUI: bool=?, FORM.fdna) => string

  let dnaToFORM: (DNA.t) => FORM.expr
  let toFORM: (t) => FORM.expr

  let permute: (t) => t
  let perspectives: (t) => array<t>
}


module Sequence: {

  type t = FORM.seq

  let show: (~sortNMUI: bool=?, FORM.seq) => string

  let toFORMt: (t) => FORM.t
}