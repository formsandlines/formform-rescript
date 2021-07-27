open Calc
open Code
open Expr_
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

module FORMula_ = {
  // ===================================================================
  // [FORMula]: FORM formula -> variable FORM structure that must be
  // interpreted before evaluation as a [FORM]
  // ===================================================================

  type rec content = 
    | Mark(context)
    | Val(Const.t)
    | SeqRE(UCalc.REsign.t, seq)
    | FUncl(string)

    | FVar(string)
    | FDna(fdna)
  and context = array<content>
  and seq = list<context>
  and fdna = { // [FDna] expression
      dna: FormDNA.t,
      form: option<context>,
      vars: option<array<string>>
    }

  type t = context

  let none: context = []
  let mark: content = Mark(none)


  /**
   * Shows [FORMula] as text
   */
  let rec show'content = (~sortNMUI=false, cnt: content) =>
    switch cnt {
    | Mark(ctx) => "(" ++ ctx->show'context(~sortNMUI=sortNMUI) ++ ")"
    | Val(c) => c->Const.show
    | SeqRE(reSign, forms) => `{${forms->show'seq} ${reSign->UCalc.REsign.show}}`
    | FUncl(lbl) => "/" ++ lbl ++ "/"

    | FVar(lbl)  => lbl
    | FDna(fDna) => "[" ++ fDna->show'fdna(~sortNMUI=sortNMUI) ++ "]"
    }
  and show'context = (~sortNMUI=false, ctx: context) =>
    ctx->Js.Array2.map(cnt => cnt->show'content(~sortNMUI=sortNMUI))->Js.Array2.joinWith("")

  and show'seq = (~sortNMUI=false, seq: seq) =>
    seq->Belt.List.map(ctx => ctx->show'context(~sortNMUI=sortNMUI))->ListExtensions.joinWith(",")

  and show'fdna = (~sortNMUI=false, {dna, form, vars}: fdna): string => {
    let formStr = switch form {
    | Some(f) => switch vars {
      | Some(vars) => {
        let varsStr = vars->Js.Array2.joinWith(",")
        `${f->show'context(~sortNMUI=sortNMUI)}.[${varsStr}]`
        }
      | None => f->show'context(~sortNMUI=sortNMUI)
      }
    | None => ""
    }
    formStr ++ dna->FormDNA.show(~sortNMUI=sortNMUI)
  }

  let show = (~sortNMUI=false, form: t) => form->show'context(~sortNMUI=sortNMUI)


  /**
   * Maps [FORM] to [FORMula]
   */
  let rec fromExpr'content = (cnt: FORM_.content): content =>
    switch cnt {
    | FORM_.Mark(ctx)  => Mark(ctx->fromExpr'context)
    | FORM_.Val(c)     => Val(c)
    | FORM_.SeqRE(sign, forms) => SeqRE(sign, forms->fromExpr'seq)
    | FORM_.FUncl(lbl) => FUncl(lbl)
  }
  and fromExpr'context = (ctx: FORM_.context): context =>
    ctx->Js.Array2.map(cnt => cnt->fromExpr'content)

  and fromExpr'seq = (seq: FORM_.seq): seq =>
    seq->Belt.List.map(ctx => ctx->fromExpr'context)

  let fromExpr = (form: FORM_.t): t => form->fromExpr'context


  /**
   * Interprets [FORMula] variables as [Const] values, resulting in a [FORM]
   */
  let rec interpret'content = (cnt: content, intpr: Interpr.t): FORM_.content => {
    switch cnt {
    | Mark(ctx)  => FORM_.Mark(ctx->interpret'context(intpr))
    | Val(c)     => FORM_.Val(c)
    | SeqRE(reSign, forms) => FORM_.SeqRE(reSign, forms->interpret'seq(intpr))
    | FUncl(lbl) => FORM_.FUncl(lbl)

    | FVar(lbl) => {
        let maybeVal = intpr->Js.Dict.get(lbl)
        switch maybeVal {
        | Some(val) => FORM_.Val(val)
        | None => raise(Not_found) // uninterpreted or misspelled label!
        }
      }
    | FDna(fdna) => FORM_.Mark([ FORM_.Mark( fdna->interpret'fdna(intpr) ) ]) // ((…)) will act as a grouping here
    }
  }
  and interpret'context = (ctx: context, intpr: Interpr.t): FORM_.context =>
    ctx->Js.Array2.map(cnt => cnt->interpret'content(intpr))
  
  and interpret'fdna = ({dna, form, vars}: fdna, intpr: Interpr.t): FORM_.context =>
    [] // ! incorrect -> build FORM from polynomials

  and interpret'seq = (seq: seq, intpr: Interpr.t): FORM_.seq =>
    seq->Belt.List.map(ctx => ctx->interpret'context(intpr))
  
  let interpret = (formula: t, intpr: Interpr.t): FORM_.t => formula->interpret'context(intpr)


  /**
   * Reducer function that traverses a [FORMula]
   */
  let rec reduce'content = (reducerFn, init, cnt: content) => {
    let acc = reducerFn(init, cnt)
    switch cnt {
    | Mark(ctx) => ctx |> reduce'context(reducerFn, acc) // ctx->Js.Array2.reduce(reduce'content(reducerFn), acc)
    | SeqRE(reSign, forms) => forms->reduce'seq(reducerFn, acc)
    | _ => acc
    }
  }
  and reduce'context = (reducerFn, init, ctx: context) => {
    ctx->Js.Array2.reduce(reduce'content(reducerFn), init)
  }
  and reduce'seq = (reducerFn, init, seq: seq) => {
    seq->Belt.List.reduce(init, reduce'context(reducerFn))
  }
  let reduce = (reducerFn, init, formula: t) => reduce'context(reducerFn, init, formula)


  let interEval = (formula: t, intpr: Interpr.t): Const.t =>
    formula->interpret(intpr)->FORM_.eval


  let getVars = (formula: t): array<string> => {
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

    let vars = formula |> reduce(_getVars, Belt.Set.make(~id=module(VarCmp)))
    vars->Belt.Set.toArray
  }


}