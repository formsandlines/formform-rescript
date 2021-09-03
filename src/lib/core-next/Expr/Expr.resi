open Calc
open Sign
open Sign.Value


module FORM: {

  type rec t<'a> = 
    | Mark(expr<'a>): t<'a>
    | CVal(Const.t): t<'a>
    | SeqRE(SeqRE.sig, seq<'a>): t<'a>
    | Uncl(string): t<'a>

    | Var(string): t<var>
    | FDna(fdna<'a>): t<'a>

  and expr<'a> = array<t<'a>>
  and seq<'a> = list<expr<'a>>
  and fdna<'a> = { // [FDna] expression
      dna: FormDNA.t,
      form: option<expr<'a>>,
      vars: option<array<string>>
    }

  let show: (~sortNMUI: bool=?, expr<'any>) => string

}

module FCON: {

  type t = FORM.t<con>
  type expr = FORM.expr<con>
  type seq = FORM.seq<con>
  type fdna = FORM.fdna<con>

  let reduce: (('a, t) => 'a, 'a, FORM.expr<con>) => 'a

  let toFVAR: FORM.expr<con> => FORM.expr<var>
}

module FVAR: {

  type t = FORM.t<var>
  type expr = FORM.expr<var>
  type seq = FORM.seq<var>
  type fdna = FORM.fdna<var>

  let reduce: (('a, t) => 'a, 'a, FORM.expr<var>) => 'a

  let getVars: expr => array<string>
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


module Sequence: {

  type t<'a> = FORM.seq<'a>

  let show: (~sortNMUI: bool=?, FORM.seq<'a>) => string

  let toFORMt: (t<'a>) => FORM.t<'a>
}