open Calc
open Code
open Expr
open Helper

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
}

module FORMula = {
  // ===================================================================
  // [FORMula]: FORM formula -> variable FORM structure that must be
  // interpreted before evaluation as a [FORM]
  // ===================================================================
  open Code.Form

  type rec t<'a> =
    | Mark(t<context>): t<content>
    | Val(Const.t): t<content>
    | SeqRE(UCalc.REsign.t, seq): t<content>
    | FUncl(string): t<content>

    | FVar(string): t<content>
    | FDna(fdna): t<content>

    | Ctx(array<t<content>>): t<context>
    // | Seq(list<t<context>>): t<context>
  and seq = list<t<context>>
  and fdna = { // [FDna] expression
      dna: FormDNA.t,
      form: option<t<context>>,
      vars: option<array<string>>
    }


  let none: t<context> = Ctx([])
  let mark: t<content> = Mark(none)


  let getContents = (ctx) => switch ctx {
  | Ctx(cnts) => cnts
  }


  /**
   * Shows [FORMula] as text
   */
  let rec show: type any. (~sortNMUI: bool=?, t<any>) => string
    = (~sortNMUI=false, form) => switch form {
    | Mark(ctx) => "(" ++ ctx->show(~sortNMUI=sortNMUI) ++ ")"
    | Val(c) => c->Const.show
    | SeqRE(reSign, seq) => `{${seq->showSeq(~sortNMUI=sortNMUI)} ${reSign->UCalc.REsign.show}}`
    | FUncl(lbl) => "/" ++ lbl ++ "/"

    | FVar(lbl)  => lbl
    | FDna(fDna) => "[" ++ fDna->showFdna(~sortNMUI=sortNMUI) ++ "]"

    | Ctx(cnts) => cnts->Js.Array2.map(cnt => cnt->show(~sortNMUI=sortNMUI))->Js.Array2.joinWith("")
    }
  and showSeq = (~sortNMUI=false, seq: seq) =>
    seq->Belt.List.map(ctx => ctx->show(~sortNMUI=sortNMUI))->ListExtensions.joinWith(",")

  and showFdna = (~sortNMUI=false, {dna, form, vars}: fdna): string => {
    let formStr = switch form {
    | Some(f) => switch vars {
      | Some(vars) => {
        let varsStr = vars->Js.Array2.joinWith(",")
        `${f->show(~sortNMUI=sortNMUI)}.[${varsStr}]`
        }
      | None => f->show(~sortNMUI=sortNMUI)
      }
    | None => ""
    }
    formStr ++ dna->FormDNA.show(~sortNMUI=sortNMUI)
  }


  /**
   * Maps [FORM] to [FORMula]
   */
  let rec fromExpr: type any. FORM.t<any> => t<any>
    = (form) => switch form {
    | FORM.Mark(ctx)  => Mark(ctx->fromExpr)
    | FORM.Val(c)     => Val(c)
    | FORM.SeqRE(sign, forms) => SeqRE(sign, forms->fromExprSeq)
    | FORM.FUncl(lbl) => FUncl(lbl)
    
    | FORM.Ctx(cnts)  => Ctx(cnts->Js.Array2.map(cnt => cnt->fromExpr))
    }
  and fromExprSeq = (seq: FORM.seq): seq =>
    seq->Belt.List.map(ctx => ctx->fromExpr)


  /**
   * Interprets [FORMula] variables as [Const] values, resulting in a [FORM]
   */
  let rec interpret: type any. (t<any>, Interpr.t) => FORM.t<any>
    = (formula, intpr) => {
    switch formula {
    | Mark(ctx)  => FORM.Mark(ctx->interpret(intpr))
    | Val(c)     => FORM.Val(c)
    | SeqRE(reSign, forms) => FORM.SeqRE(reSign, forms->interpretSeq(intpr))
    | FUncl(lbl) => FORM.FUncl(lbl)

    | FVar(lbl) => {
        let maybeVal = intpr->Js.Dict.get(lbl)
        switch maybeVal {
        | Some(val) => FORM.Val(val)
        | None => raise(Not_found) // uninterpreted or misspelled label!
        }}
    | FDna(fdna) => FORM.Mark(FORM.Ctx([ FORM.Mark( fdna->interpretFdna(intpr) ) ])) // ((…)) will act as a grouping here

    | Ctx(cnts) => FORM.Ctx( cnts->Js.Array2.map(cnt => cnt->interpret(intpr)) )
    }
  }
  and interpretFdna = ({dna, form, vars}: fdna, intpr: Interpr.t): FORM.t<context> =>
    Ctx([]) // ! incorrect -> build FORM from polynomials
  and interpretSeq = (seq: seq, intpr: Interpr.t): FORM.seq =>
    seq->Belt.List.map(ctx => ctx->interpret(intpr))


  let rec reduceContent = (reducerFn, init, cnt: t<content>) => {
    let acc = reducerFn(init, cnt)
    switch cnt {
    | Mark(ctx) => ctx |> reduceContext(reducerFn, acc)
    | SeqRE(_, seq) => seq |> reduceSeq(reducerFn, acc)
    | _ => acc
    }
  }
  and reduceContext = (reducerFn, init, ctx: t<context>) =>
    ctx->getContents->Js.Array2.reduce(reduceContent(reducerFn), init)

  and reduceSeq = (reducerFn, init, seq: seq) =>
    seq->Belt.List.reduce(init, reduceContext(reducerFn))

  /**
   * Reducer function that traverses a [FORMula]
   */
  let reduce = (reducerFn, init, formula) => reduceContext(reducerFn, init, formula)


  /**
   * Shortcut to interpret and then evaluate a [FORMula]
   */
  let interEval = (formula: t<'a>, intpr: Interpr.t): Const.t =>
    formula->interpret(intpr)->FORM.eval

  let test: type any. t<any> => string
    = (formula) => switch formula {
    | Ctx(_) => "Ctx"
    | _ => "else"
    }

  /**
   * Gets variables in alphabetic order from a [FORMula]
   */
  // let getVars = (formula) => {
  let getVars: type any. t<any> => array<string>
    = (formula) => {
    // https://jrsinclair.com/articles/2019/functional-js-traversing-trees-with-recursive-reduce/
    // ? not sure if Set and the subsequent conversion are too expensive and useless here
    module VarCmp =
      Belt.Id.MakeComparable({
        type t = string
        let cmp = (a, b) =>
          Pervasives.compare(a, b)
      })

    let _getVars = (vars, content) =>
      switch content {
      | FVar(lbl) => vars->Belt.Set.add(lbl) // vars->Js.Array2.concat([lbl])
      | _ => vars
      }
    let init = Belt.Set.make(~id=module(VarCmp))
    // let vars = switch formula {
    // | Ctx(_) => formula |> reduce(_getVars, Belt.Set.make(~id=module(VarCmp)))
    // | _ => formula |> reduceContent(_getVars, Belt.Set.make(~id=module(VarCmp)))
    // }
    let vars = switch formula { // there has to be a better way
    | Ctx(_)     => formula |> reduce(_getVars, init)
    | Mark(_)    => formula |> reduceContent(_getVars, init)
    | Val(_)     => formula |> reduceContent(_getVars, init)
    | SeqRE(_,_) => formula |> reduceContent(_getVars, init)
    | FUncl(_)   => formula |> reduceContent(_getVars, init)
    | FVar(_)    => formula |> reduceContent(_getVars, init)
    | FDna(_)    => formula |> reduceContent(_getVars, init)
    }
    vars->Belt.Set.toArray
  }


  /**
   * Evaluates [FORMula] for all possible interpretations as a [FormDNA]
   */
  // let evalAll: type any. t<any> => fdna
  //   = (formula) => {
  let evalAll = (formula): fdna => {
    let vars = formula->getVars
    let vnum = vars->Js.Array2.length
    let vspace = vnum->VSpace.make

    let fdna: FormDNA.t = vspace->Js.Array2.map((vpoint) => {
      switch vpoint->Interpr.fromVPoint(vars) {
      | Some(interpr) => formula->interEval(interpr)
      | None => raise(Not_found)
      }
    })->Js.Array2.reverseInPlace // <- ! inefficient

    { dna: fdna, form: Some(formula), vars: Some(vars) }
  }


}



module Isolator = {
  // ===================================================================
  // [Isolator]: isolator -> FORMula that isolates a specific [VPoint]
  // ===================================================================

  type t = FORMula.t<Code.Form.content>

  // 0 → 1: `( {@(a)} {..@(a)} )`
  let n = (var: string): t =>
    Mark(Ctx([
      SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{Ctx([ Mark(Ctx([FVar(var)])) ])}),
      SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{Ctx([ Mark(Ctx([FVar(var)])) ])})
    ]))
  // 1 → 1: `( {@a} {..@a} )`
  let m = (var: string): t =>
    Mark(Ctx([
      SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{Ctx([ FVar(var) ])}),
      SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{Ctx([ FVar(var) ])})
    ]))
  // 2 → 1: `( ({@(a)}a) ({..@a}(a)) )`
  let u = (var: string): t =>
    Mark(Ctx([
      Mark(Ctx([
        SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{Ctx([ Mark(Ctx([FVar(var)])) ])}),
        FVar(var)
      ])),
      Mark(Ctx([
        SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{Ctx([ FVar(var) ])}),
        Mark(Ctx([FVar(var)]))
      ]))
    ]))
  // 3 → 1: `( ({@a}(a)) ({..@(a)}a) )`
  let i = (var: string): t =>
    Mark(Ctx([
      Mark(Ctx([
        SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{Ctx([ FVar(var) ])}),
        Mark(Ctx([FVar(var)]))
      ])),
      Mark(Ctx([
        SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{Ctx([ Mark(Ctx([FVar(var)])) ])}),
        FVar(var)
      ]))
    ]))

  let get = (c: Const.t, var: string): t => switch c {
  | N => n(var) | M => m(var) | U => u(var) | I => i(var)
  }

  /**
   * Maps [VPoint] to [Isolator] FORMs
   */
  let fromVPoint = (~vars: array<string>=Helper.common_vars, vp: VPoint.t): t => {
    if (vars->Js.Array2.length < vp->Belt.List.length) {
      raise(Js.Exn.raiseRangeError("Insufficient variables in given list!"))
    } else {
      Mark(Ctx( vp->Belt.List.mapWithIndex((i,c) => FORMula.Mark(Ctx([ get(c,vars[i]) ])) )->Belt.List.toArray ))
    }
  }

}


// module History = {
//   type t = {sequence: Sequence, context: FORMula}

// }


// module Polynomial = {
  
// }


module Pattern = {
  // ===================================================================
  // [Pattern]: algebraic pattern -> mapping between related [FORMula]s
  // ===================================================================
  open Code.Form

  module Imply = {
    type t = (FORMula.t<context> => option<FORMula.t<context>>)

    let apply = (form, ptn: t) =>
      switch (form->ptn) {
      | Some(form') => form'
      | None => form
      }
  }
  module Equiv = {
    type t = ( Imply.t, Imply.t )

    let applyL = (form, (ptnL, _): t) => 
      switch (form->ptnL) {
      | Some(form') => form'
      | None => form
      }
    let applyR = (form, (_, ptnR): t) =>
      switch (form->ptnR) {
      | Some(form') => form'
      | None => form
      }
  }
}

module PrimAlg = {
  open Pattern
  open FORMula
  open Code.Form

  let refl'out = (form): option<FORMula.t<context>> =>
    switch form {
    | Ctx([ Mark(Ctx([ Mark(a) ])) ]) => Some(a)
    | _ => None
    }
  let refl'in = (form): option<FORMula.t<context>> =>
    Some( Ctx([ Mark(Ctx([ Mark(form) ])) ]) )

  let refl: Equiv.t = (refl'in, refl'out)


}