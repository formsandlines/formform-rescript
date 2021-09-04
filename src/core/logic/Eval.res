open Calc
open Expr
open Value

module Interpr = {
  // ===================================================================
  // [Interpr]: interpretation -> mapping of a [VPoint] to a [Const]
  // ===================================================================

  // type t = array<(string, Const.t)>
  type t = Js.Dict.t<Const.t>

  let toVPoint = (interpr: t): VPoint.t =>
    interpr->Js.Dict.values->Belt.List.fromArray

  let fromVPoint = (vp: VPoint.t, vars: array<string>): option<t> => {
    if (vp->Belt.List.length === vars->Js.Array2.length) {
      let interpr_arr = vp->Belt.List.mapWithIndex((i,c) => (vars->Js.Array2.unsafe_get(i), c))
      Some(interpr_arr->Js.Dict.fromList)
    } else {
      None
    }
  }

  /**
   * Interprets [FORMula] variables as [Const] values, resulting in a [FORM]
   */
  let rec interpretForm = (form: FORM.t<var>, intpr: t): FORM.t<con> => {
    switch form {
    | FORM.Mark(expr)  => Mark(expr->interpretExpr(intpr))
    | FORM.CVal(c)     => CVal(c)
    | FORM.SeqRE(reSign, forms) => SeqRE(reSign, forms->interpretSeq(intpr))
    | FORM.Uncl(lbl) => Uncl(lbl)

    | FORM.Var(lbl) => {
        let maybeVal = intpr->Js.Dict.get(lbl)
        switch maybeVal {
        | Some(val) => FORM.CVal(val)
        | None => raise(Not_found) // uninterpreted or misspelled label!
        }}
    | FORM.FDna(fdna) => FORM.FDna(fdna->interpretFdna(intpr)) // Mark([ Mark( fdna->interpretFdna(intpr) ) ]) // ((…)) will act as a grouping here

    }
  }
  and interpretExpr = (expr: FORM.expr<var>, intpr: t): FORM.expr<con> =>
    expr->Js.Array2.map(form => form->interpretForm(intpr)) 

  and interpretFdna = ({dna, form, vars}: FORM.fdna<var>, intpr: t): FORM.fdna<con> => {
    let formCon = switch form {
    | Some(expr) => Some(expr->interpretExpr(intpr)) // ! incorrect -> needs to interpret from vars
    | None => None
    }
    {dna: dna, form: formCon, vars: None} // ! incorrect -> build FORM from polynomials?
    // let dnaCon = 
    // {dna: dna, form: formCon, vars: None} 
  }
  and interpretSeq = (seq: FORM.seq<var>, intpr: t): FORM.seq<con> =>
    seq->Belt.List.map(expr => expr->interpretExpr(intpr))
  
  let interpret = interpretExpr

}

open Const

let rec evalForm = (form: FORM.t<con>) => switch form {
  | FORM.Mark([])   => M
  | FORM.Mark(expr) => Const.inv(expr->evalExpr)
  | FORM.CVal(c)     => c
  | FORM.SeqRE(reSign, forms) => SeqRE.calcRE(reSign, forms->nestedEval)
  | FORM.Uncl(_)   => U

  | FORM.FDna(fdna) => N // ! incorrect -> something like fdna->evalFdna
  }
and evalExpr = (expr: FORM.expr<con>) =>
  expr->Js.Array2.reduce((val,form) => Const.rel(val, form->evalForm), Const.N)

and nestedEval = (seq: FORM.seq<con>) =>
  #NestToR( seq->Belt.List.map(expr => expr->evalExpr) )

/**
* Evaluates [FORM] to a single [Const] value
*/
let eval = evalExpr

let rec evalSeq = (seq: FORM.seq<con>): Const.t =>
  switch seq {
  | list{}     => Const.M
  | list{expr} => Const.inv(eval(expr))
  | list{expr, ...seq'} => Const.inv(Const.rel( eval(expr), seq'->evalSeq ))
  }

/**
* Shortcut to interpret and then evaluate a [FORMula]
*/
let interEval = (expr: FORM.expr<var>, intpr: Interpr.t): Const.t =>
  expr->Interpr.interpret(intpr)->eval

/**
* Evaluates [FORMula] for all possible interpretations as a [FormDNA]
*/
let evalAll = (expr): FORM.fdna<var> => {
  let vars = expr->FVAR.getVars
  let vnum = vars->Js.Array2.length
  let vspace = vnum->VSpace.make

  let fdna = vspace->VSpace.toArray->Js.Array2.map((vpoint) => {
    switch vpoint->Interpr.fromVPoint(vars) {
    | Some(interpr) => expr->interEval(interpr)
    | None => raise(Not_found)
    }
  })->Js.Array2.reverseInPlace->FormDNA.makeUnsafe // <- ! inefficient

  { dna: fdna, form: Some(expr), vars: Some(vars) }
}