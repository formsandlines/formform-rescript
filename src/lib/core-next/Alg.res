open Calc
open Code
open Expr

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

  type rec t = 
    | Mark(t)
    | Rel(array<t>)
    | Val(Const.t)
    | SeqRE(UCalc.REsign.t, list<t>)
    | FUncl(string)

    | FVar(string)
    | FDna(fdna)
  and fdna = { // [FDna] expression
      dna: FormDNA.t,
      form: option<t>,
      vars: option<array<string>>
    }

  let rec show = (~sortNMUI=false, formula: t): string =>
    switch formula {
    | Mark(f) => "(" ++ f->show(~sortNMUI=sortNMUI) ++ ")"
    | Rel([]) => "."
    | Rel(fs) => fs->Js.Array2.map(f => f->show(~sortNMUI=sortNMUI))->Js.Array2.joinWith("")
    | Val(c)  => c->Const.show
    | SeqRE(reSign, forms) => {
        let formStr = {
          let rec showForms = (forms: list<t>): string =>
            switch forms {
            | list{} => ""
            | list{f, } => f->show(~sortNMUI=sortNMUI)
            | list{f, ...rest} => f->show(~sortNMUI=sortNMUI) ++ "," ++ rest->showForms
            }
          showForms(forms)
        }
        `{${reSign->UCalc.REsign.show} ${formStr}}`
      }
    | FUncl(lbl) => "/" ++ lbl ++ "/"
    | FVar(lbl)  => lbl
    | FDna(fDna) => fDna->showFDna(~sortNMUI=sortNMUI)
    }
  and showFDna = (~sortNMUI=false, {dna, form, vars}: fdna): string => {
    let formStr = switch form {
    | Some(f) => switch vars {
      | Some(vars) => {
        let varsStr = vars->Js.Array2.joinWith(",") // Js.Array2.reducei((s,v,i) => s++(i > 0 ? "," : "")++v,"")
        `${f->show(~sortNMUI=sortNMUI)}.[${varsStr}]`
        }
      | None => f->show(~sortNMUI=sortNMUI)
      }
    | None => ""
    }
    formStr ++ dna->FormDNA.show(~sortNMUI=sortNMUI)
  }

  let rec fromExpr = (expr: FORM.t): t =>
    switch expr {
    | FORM.Rel([]) => Rel([])
    | FORM.Val(c)  => Val(c)
    | FORM.Mark(f) => Mark(fromExpr(f))
    | FORM.Rel(fs) => Rel(fs->Js.Array2.map(f => fromExpr(f)))
    | FORM.SeqRE(sign, fs) => SeqRE(sign, fs->Belt.List.map(f => fromExpr(f)))
    | FORM.FUncl(lbl) => FUncl(lbl)
  }

  let rec interpret = (formula: t, intpr: Interpr.t): FORM.t => {
    switch formula {
    | Mark(f) => FORM.Mark(interpret(f, intpr))
    | Rel([]) => FORM.Rel([])
    | Rel(fs) => FORM.Rel(fs->Js.Array2.map(f => interpret(f, intpr)))
    | Val(c)  => FORM.Val(c)
    | SeqRE(reSign, forms) => {
        let forms_interpr: Sequence.t = forms->Belt.List.map(f => interpret(f, intpr))
        FORM.SeqRE(reSign, forms_interpr)
      }
    | FUncl(lbl) => FORM.FUncl(lbl)

    | FVar(lbl) => {
        let maybeVal = intpr->Js.Dict.get(lbl)
        switch maybeVal {
        | Some(val) => FORM.Val(val)
        | None => raise(Not_found) // uninterpreted or misspelled label!
        }
      }
    | FDna({dna, form, vars}) => FORM.Rel([]) // ! incorrect -> build FORM from polynomials
    }
  }

  let rec reduce = (reducerFn, init, formula) => {
    let acc = reducerFn(init, formula)
    switch formula {
    | Mark(f) => reduce(reducerFn, acc, f)
    | Rel(fs) => fs->Js.Array2.reduce(reduce(reducerFn), acc)
    | _ => acc
    }
  }

  let interEval = (formula: t, intpr: Interpr.t): Const.t =>
    formula->interpret(intpr)->FORM.eval


  let getVars = (formula: t): array<string> => {
    // https://jrsinclair.com/articles/2019/functional-js-traversing-trees-with-recursive-reduce/
    // ? not sure if Set and the subsequent conversion are too expensive and useless here
    module VarCmp =
      Belt.Id.MakeComparable({
        type t = string
        let cmp = (a, b) =>
          Pervasives.compare(a, b)
      })

    let _getVars = (vars, formula) => {
      switch formula {
      | FVar(lbl) => vars->Belt.Set.add(lbl) // vars->Js.Array2.concat([lbl])
      | _ => vars
      }
    }
    let vars = formula |> reduce(_getVars, Belt.Set.make(~id=module(VarCmp)))
    vars->Belt.Set.toArray
  }


  let evalAll = (formula: t): fdna => {
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

    // let val_num = Js.Math.floor_int(4.0 ** vnum->Belt.Int.toFloat)

    // Belt.Array.makeBy(val_num,(i) => {
    //   let interprVals = Js.Int.toStringWithRadix(i,~radix=4)->JsRaw.padStart(vnum,"0");
    //   let interpr = interprVals
    //     ->Js.String2.split("")
    //     ->Js.Array2.mapi((val,n) => {
    //       let valC = switch (val->Belt.Int.fromString) {
    //       | Some(n) => switch n->(sortNMUI ? Const.tFromJs_NMUI : Const.tFromJs) {
    //         | Some(c) => c
    //         | None => raise(Not_found)
    //         }
    //       | None => raise(Not_found)
    //       }
    //       (vars->Js.Array2.unsafe_get(n), valC)
    //     })
    //   formula->interEval(interpr->Js.Dict.fromArray)
    // })


}

module Isolator = {
  // ===================================================================
  // [Isolator]: isolator -> FORMula that isolates a specific [VPoint]
  // ===================================================================

  type t = FORMula.t

  // 0 → 1: `( {@(a)} {..@(a)} )`
  let n = (var: string): t =>
    Mark(Rel([
      SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{ Mark(FVar(var)) }),
      SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{ Mark(FVar(var)) })
    ]))
  // 1 → 1: `( {@a} {..@a} )`
  let m = (var: string): t =>
    Mark(Rel([
      SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{ FVar(var) }),
      SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{ FVar(var) })
    ]))
  // 2 → 1: `( ({@(a)}a) ({..@a}(a)) )`
  let u = (var: string): t =>
    Mark(Rel([
      Mark(Rel([
        SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{ Mark(FVar(var)) }),
        FVar(var)
      ])),
      Mark(Rel([
        SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{ FVar(var) }),
        Mark(FVar(var))
      ]))
    ]))
  // 3 → 1: `( ({@a}(a)) ({..@(a)}a) )`
  let i = (var: string): t =>
    Mark(Rel([
      Mark(Rel([
        SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{ FVar(var) }),
        Mark(FVar(var))
      ])),
      Mark(Rel([
        SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{ Mark(FVar(var)) }),
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
      Mark( vp->Belt.List.reduceWithIndex(FORMula.Rel([]), (f, c, i) => {
        let var = vars[i]
        if (f == Rel([])) { Mark(get(c,var)) }
        else { Rel([ f, Mark(get(c,var)) ]) }
      }) )
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

  module Imply = {
    type t = (FORMula.t => option<FORMula.t>)

    let apply = (f: FORMula.t, ptn: t): FORMula.t =>
      switch (f->ptn) {
      | Some(f') => f'
      | None => f
      }
  }
  module Equiv = {
    type t = ( (FORMula.t => option<FORMula.t>), (FORMula.t => option<FORMula.t>) )

    let applyL = (f: FORMula.t, (ptnL, _): t): FORMula.t => 
      switch (f->ptnL) {
      | Some(f') => f'
      | None => f
      }
    let applyR = (f: FORMula.t, (_, ptnR): t): FORMula.t =>
      switch (f->ptnR) {
      | Some(f') => f'
      | None => f
      }
  }
}

module PrimAlg = {
  open Pattern

  let refl'out = (f: FORMula.t): option<FORMula.t> =>
    switch f {
    | Mark(Mark(a)) => Some(a)
    | _ => None
    }
  let refl'in = (f: FORMula.t): option<FORMula.t> =>
    Some( Mark(Mark(f)) )

  let refl: Equiv.t = (refl'in, refl'out)


}