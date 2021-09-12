open Calc

type con = Constant
type var = Variable

module FORM: {

  @deriving(accessors)
  type rec t<'a> = 
    | Mark(expr<'a>): t<'a>
    | CVal(Const.t): t<'a>
    | SeqRE(SeqRE.sig, seq<'a>): t<'a>
    | Uncl(string): t<'a>

    | FVar(string): t<var>
    | FDna(fdna<'a>): t<'a>

  and expr<'a> = array<t<'a>>
  and seq<'a> = list<expr<'a>>
  and fdna<'a> = { // [FDna] expression
      dna: DNA.t,
      form: option<expr<'a>>,
      vars: option<array<string>>
    }


  let mark: (expr<'a>) => t<'a>
  let cVal: (Const.t) => t<'a>
  let seqRE: (SeqRE.sig, seq<'a>) => t<'a>
  let uncl: (string) => t<'a>

  let fVar: (string) => t<var>
  let fDna: (fdna<'a>) => t<'a>
  

  let show: (~sortNMUI: bool=?, expr<'any>) => string

}

module FCON: {

  type t = FORM.t<con>
  type expr = FORM.expr<con>
  type seq = FORM.seq<con>
  type fdna = FORM.fdna<con>

  let reduce: (expr, ('a, t) => 'a, 'a) => 'a

  let toFVAR: FORM.expr<con> => FORM.expr<var>
}

module FVAR: {

  type t = FORM.t<var>
  type expr = FORM.expr<var>
  type seq = FORM.seq<var>
  type fdna = FORM.fdna<var>

  let reduce: (expr, ('a, t) => 'a, 'a) => 'a

  let getVars: expr => array<string>
  let countVars: expr => int
}


module DepthTree: {

  type rec t<'a> = private 
    | Branch({
        index: tIndex,
        form:  FORM.t<'a>,
        children: array<t<'a>>
      })
    | Leaf({
        index: tIndex,
        form:  FORM.t<'a>
      })
  and tRoot<'a> = private {
      form:     FORM.expr<'a>,
      children: array<t<'a>>
    }
  and tIndex = private array<int>

  let show: tRoot<'a> => string  

  let parse: FORM.expr<'a> => tRoot<'a>

  let testTrees: array<tRoot<con>> 
}


module FormDNA: {

  type t<'a> = FORM.fdna<'a>

  let show: (~sortNMUI: bool=?, FORM.fdna<'a>) => string

  let dnaToFORM: (DNA.t) => FORM.expr<'a>
  let toFORM: (t<'a>) => FORM.expr<'a>
}


module Sequence: {

  type t<'a> = FORM.seq<'a>

  let show: (~sortNMUI: bool=?, FORM.seq<'a>) => string

  let toFORMt: (t<'a>) => FORM.t<'a>
}