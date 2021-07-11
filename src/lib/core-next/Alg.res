open Calc
open Expr

module Interpretation = {
  // type t = array<(string, Const.t)>
  type t = Js.Dict.t<Const.t>
}

module FORMula = {

  type rec t = 
    | Empty
    | Mark(t)
    | Rel(t, t)
    | Val(Const.t)
    | SeqRE(UCalc.REsign.t, list<t>)
    | FVar(string)

  let rec show = (formula: t): string =>
    switch formula {
    | Empty => "."
    | Mark(f) => "(" ++ f->show ++ ")"
    | Rel(fa, fb) => fa->show ++ fb->show
    | Val(c) => c->Const.show
    | SeqRE(reSign, forms) => {
        let formStr = {
          let rec showForms = (forms: list<t>): string =>
            switch forms {
            | list{} => ""
            | list{f, } => f->show
            | list{f, ...rest} => f->show ++ "," ++ rest->showForms
            }
          showForms(forms)
        }
        `{${reSign->UCalc.REsign.show} ${formStr}}`
      }

    | FVar(lbl) => lbl
    }

  let rec fromExpr = (expr: FORM.t): t =>
    switch expr {
    | FORM.Empty => Empty
    | FORM.Val(c) => Val(c)
    | FORM.Mark(f) => Mark(fromExpr(f))
    | FORM.Rel(f, f') => Rel(fromExpr(f), fromExpr(f'))
    | FORM.SeqRE(sign, fs) => SeqRE(sign, fs->Belt.List.map(f => fromExpr(f)))
  }

  let rec interpret = (formula: t, intpr: Interpretation.t): FORM.t => {
    switch formula {
    | Empty => FORM.Empty
    | Mark(f) => FORM.Mark(interpret(f, intpr))
    | Rel(fa, fb) => FORM.Rel(interpret(fa, intpr), interpret(fb, intpr))
    | Val(c) => FORM.Val(c)
    | SeqRE(reSign, forms) => {
        let forms_interpr = forms->Belt.List.map(f => interpret(f, intpr))
        FORM.SeqRE(reSign, forms_interpr)
      }

    | FVar(lbl) => {
        let maybeVal = intpr->Js.Dict.get(lbl)
        switch maybeVal {
        | Some(val) => FORM.Val(val)
        | None => raise(Not_found) // uninterpreted or misspelled label!
        }
      }
    | _ => FORM.Empty
    }
  }

  let rec reduce = (reducerFn, init, formula) => {
    let acc = reducerFn(init, formula)
    switch formula {
    | Mark(f)     => reduce(reducerFn, acc, f)
    | Rel(fa, fb) => [fa, fb]->Js.Array2.reduce(reduce(reducerFn), acc)
    | _ => acc
    }
  }

  let interEval = (formula: t, intpr: Interpretation.t): Const.t =>
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
    let vars = reduce(_getVars, Belt.Set.make(~id=module(VarCmp)), formula)
    vars->Belt.Set.toArray
  }


  let evalAll = (~sortNMUI=false, formula: t) => {
    let vars = formula->getVars

    let vnum = vars->Js.Array2.length
    let val_num = Js.Math.floor_int(4.0 ** vnum->Belt.Int.toFloat)

    Belt.Array.makeBy(val_num,(i) => {
      let interprVals = Js.Int.toStringWithRadix(i,~radix=4)->JsRaw.padStart(vnum,"0");
      let interpr = interprVals
        ->Js.String2.split("")
        ->Js.Array2.mapi((val,n) => {
          let valC = switch (val->Belt.Int.fromString) {
          | Some(n) => switch n->(sortNMUI ? Const.tFromJs_NMUI : Const.tFromJs) {
            | Some(c) => c
            | None => raise(Not_found)
            }
          | None => raise(Not_found)
          }
          (vars->Js.Array2.unsafe_get(n), valC)
        });
      formula->interEval(interpr->Js.Dict.fromArray)
    })

  }

}


module Pattern = {
  module Imply = {
    type t = (FORMula.t => option<FORMula.t>)

    let apply = (f: FORMula.t, ptn: t): option<FORMula.t> =>
      f->ptn
    

    // let pA'refl = 
  }
  module Equiv = {
    type t = ( (FORMula.t => option<FORMula.t>), (FORMula.t => option<FORMula.t>) )

    let applyL = (f: FORMula.t, (ptnL, _): t): option<FORMula.t> =>
      f->ptnL

    let applyR = (f: FORMula.t, (_, ptnR): t): option<FORMula.t> =>
      f->ptnR
  }

}