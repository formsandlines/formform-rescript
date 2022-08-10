open Calc
open Expr
open Value

module Interpr = {
  // ===================================================================
  // [Interpr]: interpretation -> mapping of a [VPoint] to a [Const]
  // ===================================================================

  // ? very similar to Value.VDict -> is this structure really needed?

  // type t = array<(string, Const.t)>
  type t = Js.Dict.t<Const.t>

  let toVPoint = (interpr: t): VPoint.t =>
    interpr->Js.Dict.values

  let fromVPoint = (vp: VPoint.t, vars: array<string>): option<t> => {
    if (vp->Js.Array2.length === vars->Js.Array2.length) {
      let interpr_arr = vp->Belt.Array.mapWithIndex((i,c) => (vars->Js.Array2.unsafe_get(i), c))
      Some(interpr_arr->Js.Dict.fromArray)
    } else {
      None
    }
  }

  /**
   * Interprets [FORMula] variables as [Const] values, resulting in a [FORM]
   */
  let rec interpretForm = (form: FORM.t, intpr: t): FORM.t => {
    switch form {
    | FORM.Mark(expr)  => Mark(expr->interpretExpr(intpr))
    | FORM.CVal(c)     => CVal(c)
    | FORM.SeqRE(reSign, forms) => SeqRE(reSign, forms->interpretSeq(intpr))
    | FORM.Uncl(lbl) => Uncl(lbl)

    | FORM.FVar(lbl) => {
        let maybeVal = intpr->Js.Dict.get(lbl)
        switch maybeVal {
        | Some(val) => FORM.CVal(val)
        | None => raise(Not_found) // uninterpreted or misspelled label!
        }}
    | FORM.FDna(fdna) => FORM.FDna(fdna->interpretFdna(intpr)) // Mark([ Mark( fdna->interpretFdna(intpr) ) ]) // ((…)) will act as a grouping here

    }
  }
  and interpretExpr = (expr: FORM.expr, intpr: t): FORM.expr =>
    expr->Js.Array2.map(form => form->interpretForm(intpr)) 

  and interpretFdna = ({dna, form, vars}: FORM.fdna, intpr: t): FORM.fdna => {
    let formCon = switch form {
    | Some(expr) => Some(expr->interpretExpr(intpr)) // ! incorrect -> needs to interpret from vars
    | None => None
    }
    {dna: dna, form: formCon, vars: None} // ! incorrect -> build FORM from polynomials?
    // let dnaCon = 
    // {dna: dna, form: formCon, vars: None} 
  }
  and interpretSeq = (seq: FORM.seq, intpr: t): FORM.seq =>
    seq->Belt.List.map(expr => expr->interpretExpr(intpr))
  
  let interpret = interpretExpr

}

open Const

let rec evalForm = (form: FORM.t, intpr: Interpr.t) => switch form {
  | FORM.Mark([])   => M
  | FORM.Mark(expr) => Const.inv(expr->evalExpr(intpr))
  | FORM.CVal(c)     => c
  | FORM.SeqRE(reSign, forms) => SeqRE.calcRE(reSign, forms->nestedEval(intpr))
  | FORM.Uncl(_)   => U

  | FORM.FDna(fdna) => N // ! incorrect -> something like fdna->evalFdna
  | FORM.FVar(lbl) => {
      let maybeVal = intpr->Js.Dict.get(lbl)
      switch maybeVal {
      | Some(val) => val
      | None => raise(Not_found) // uninterpreted or misspelled label!
      }}
  }
and evalExpr = (expr: FORM.expr, intpr: Interpr.t) =>
  expr->Js.Array2.reduce((val,form) => Const.rel(val, form->evalForm(intpr)), Const.N)

and nestedEval = (seq: FORM.seq, intpr: Interpr.t) =>
  #NestToR( seq->Belt.List.map(expr => expr->evalExpr(intpr)) )

/**
* Evaluates [FORM] to a single [Const] value
*/
let eval = evalExpr

// let rec evalDNA = ?  // ! missing!

let rec evalSeq = (seq: FORM.seq, intpr: Interpr.t): Const.t =>
  switch seq {
  | list{}     => Const.M
  | list{expr} => Const.inv(expr->eval(intpr))
  | list{expr, ...seq'} => Const.inv(Const.rel( expr->eval(intpr), seq'->evalSeq(intpr) ))
  }

/**
* Evaluates [FORMula] for all possible interpretations as a [DNA]
*/
let evalAll = (expr): FORM.fdna => {
  /* ? separation of interpretation and evaluation
       -> would be more efficient if combined? */
  let vars = expr->FORM.getVars
  let vnum = vars->Js.Array2.length
  let vspace = vnum->VSpace.make

  let dna = vspace->VSpace.getPoints->Js.Array2.map((vpoint) => {
    switch vpoint->Interpr.fromVPoint(vars) {
    | Some(interpr) => expr->eval(interpr)
    | None => raise(Not_found)
    }
  })->Js.Array2.reverseInPlace->DNA.makeUnsafe // <- ! reverseInPlace inefficient?

  { dna: dna, form: Some(expr), vars: Some(vars) }
}