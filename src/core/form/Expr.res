open Helper
open Calc

type con = Constant
type var = Variable

module FORM = {
  // ===================================================================
  // Polymorphic generalized FORM type
  // ===================================================================
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
      dna: DNA.t,
      form: option<expr<'a>>,
      vars: option<array<string>>
    }

  // let none: expr<con> = []
  // let mark: t<con> = Mark(none)


  let showLabel_Var = (lbl) =>
    // TODO: complete Helper function
    (lbl->Js.String2.length == 1) ? Helper.cleanStr(lbl): `"${Helper.cleanStr(lbl)}"`
  let showLabel_Uncl = (lbl) =>
    // TODO: complete Helper function
    "/" ++ Helper.cleanStr(lbl) ++ "/" 

  let rec showForm: type any. (~sortNMUI: bool=?, t<any>) => _
    = (~sortNMUI=false, form) => switch form {
    | Mark(expr) => "(" ++ expr->showExpr(~sortNMUI=sortNMUI) ++ ")"
    | CVal(c) => c->Const.show
    | SeqRE(reSig, seq) => `{${seq->showSeq(~sortNMUI=sortNMUI)} ${reSig->SeqRE.showSig}}`
    | Uncl(lbl) => lbl->showLabel_Uncl

    | Var(lbl)  => lbl->showLabel_Var
    | FDna(fdna) => "[" ++ fdna->showFdna(~sortNMUI=sortNMUI) ++ "]"
    }
  and showExpr: type any. (~sortNMUI: bool=?, expr<any>) => _
    = (~sortNMUI=false, expr) =>
    expr->Js.Array2.map(form => form->showForm(~sortNMUI=sortNMUI))->Js.Array2.joinWith("")

  and showSeq: type any. (~sortNMUI: bool=?, seq<any>) => _
    = (~sortNMUI=false, seq) =>
    seq->Belt.List.map(expr => expr->showExpr(~sortNMUI=sortNMUI))->ListExtensions.joinWith(",")

  and showFdna: type any. (~sortNMUI: bool=?, fdna<any>) => _
    = (~sortNMUI=false, {dna, form, vars}): _ => {
    let formStr = switch form {
    | Some(expr) => switch vars {
      | Some(vars) => {
        let varsStr = vars->Js.Array2.joinWith(",")
        `${expr->showExpr(~sortNMUI=sortNMUI)}.[${varsStr}]`
        }
      | None => expr->showExpr(~sortNMUI=sortNMUI)
      }
    | None => ""
    }
    formStr ++ dna->DNA.show(~sortNMUI=sortNMUI)
  }

  /**
   * Shows [FORMula] as text
   */
  let show = showExpr

}

module FCON = {
  // ===================================================================
  // [FCon]: Constant [FORM] -> structure that evaluates to a [Const]
  // ===================================================================
  type t = FORM.t<con>
  type expr = FORM.expr<con>
  type seq = FORM.seq<con>
  type fdna = FORM.fdna<con>


  let rec reduceForm = (reducerFn, init, form: t) => {
    let acc = reducerFn(init, form)
    switch form {
    | FORM.Mark(expr) => expr->reduceExpr(reducerFn, acc, _)
    | FORM.SeqRE(_, seq) => seq->reduceSeq(reducerFn, acc, _)
    | _ => acc
    }
  }
  and reduceExpr = (reducerFn, init, expr: expr) =>
    expr->Belt.Array.reduce(init, reduceForm(reducerFn))

  and reduceSeq = (reducerFn, init, seq: seq) =>
    seq->Belt.List.reduce(init, reduceExpr(reducerFn))

  /**
   * Reducer function that traverses a [FORM]
   */
  let reduce = (expr, reducerFn, init) => reduceExpr(reducerFn, init, expr)


  let rec toFVAR_form = (form: t): FORM.t<var> =>
    switch form {
    | FORM.Mark(expr) => Mark(expr->toFVAR_expr)
    | FORM.CVal(c)    => CVal(c)
    | FORM.SeqRE(sign, forms) => SeqRE(sign, forms->toFVAR_seq)
    | FORM.Uncl(lbl)  => Uncl(lbl)
    | FORM.FDna(fdna) => FDna(fdna->toFVAR_fdna)
    } 

  and toFVAR_expr = (expr: expr): FORM.expr<var> => 
    expr->Js.Array2.map(form => form->toFVAR_form)

  and toFVAR_seq = (seq: seq): FORM.seq<var> =>
    seq->Belt.List.map(expr => expr->toFVAR_expr)
  
  and toFVAR_fdna = ({dna, form, vars}: fdna): FORM.fdna<var> => {
    let formVar = switch form {
    | Some(expr) => Some(expr->toFVAR_expr)
    | None => None
    }
    {dna: dna, form: formVar, vars: vars}
  }

  /**
   * Maps [FORM] to [FORMula]
   */
  let toFVAR = toFVAR_expr
}

module FVAR = {
  // ===================================================================
  // [FVar]: Variable [FORM] -> structure that must be interpreted 
  // before evaluation as a [Constant] [FORM]
  // ===================================================================
  type t = FORM.t<var>
  type expr = FORM.expr<var>
  type seq = FORM.seq<var>
  type fdna = FORM.fdna<var>


  let rec reduceForm = (reducerFn, init, form: t) => {
    let acc = reducerFn(init, form)
    switch form {
    | FORM.Mark(expr) => expr->reduceExpr(reducerFn, acc, _)
    | FORM.SeqRE(_, seq) => seq->reduceSeq(reducerFn, acc, _)
    | _ => acc
    }
  }
  and reduceExpr = (reducerFn, init, expr: expr) =>
    expr->Belt.Array.reduce(init, reduceForm(reducerFn))

  and reduceSeq = (reducerFn, init, seq: seq) =>
    seq->Belt.List.reduce(init, reduceExpr(reducerFn))

  /**
   * Reducer function that traverses a [FORM]
   */
  let reduce = (expr, reducerFn, init) => reduceExpr(reducerFn, init, expr)


  /**
   * Gets variables in alphabetic order from a [FORM]
   */
  let getVars = (expr: expr) => {
    // https://jrsinclair.com/articles/2019/functional-js-traversing-trees-with-recursive-reduce/
    // ? not sure if Set and the subsequent conversion are too expensive and useless here
    module VarCmp =
      Belt.Id.MakeComparable({
        type t = string
        let cmp = (a, b) =>
          Pervasives.compare(a, b)
      })

    let _getVars = (vars, form) =>
      switch form {
      | FORM.Var(lbl) => vars->Belt.Set.add(lbl) // vars->Js.Array2.concat([lbl])
      | _ => vars
      }
    let init = Belt.Set.make(~id=module(VarCmp))
    let vars = expr->reduce(_getVars, init) // replaced |>

    vars->Belt.Set.toArray
  }

  /**
   * Counts all variables in a [FORM]
   */
  let countVars = (expr: expr) => {
    let _countVars = (n, form) =>
      switch form {
      | FORM.Var(_) => n + 1
      | _ => n
      }
    expr->reduce(_countVars, 0)
  }

}


module DepthTree = {
  // ===================================================================
  // [DepthTree]: Depth tree -> [FORM] wrapper with spatial information
  // ===================================================================
  /*
  - get height of a FORM from deepest nest
  - obtain a unique coordinate for a FORM in a context
  - 
  */
  type rec t<'a> =
    | Branch({
        index: tIndex,
        form:  FORM.t<'a>,
        children: array<t<'a>>
      })
    | Leaf({
        index: tIndex,
        form:  FORM.t<'a>
      })
  and tRoot<'a> = {
      form:     FORM.expr<'a>,
      children: array<t<'a>>
    }
  and tIndex = array<int>


  // let makeUnsafe

  let showIndex = (index: tIndex) => index->Js.Array2.joinWith("")

  let rec showSubtree = (subtree: t<'a>) =>
    switch subtree {
    | Branch({index, form, children}) => `{ index: ${index->showIndex}, form: '${form->FORM.showForm}', children: [${children->Js.Array2.map(sub => sub->showSubtree)->Js.Array2.joinWith(", ")}] }`
    | Leaf({index, form}) => `{ index: ${index->showIndex}, form: '${form->FORM.showForm}' }`
    }
  let show = ({form, children}: tRoot<'a>) =>
    `{ root, form: '${form->FORM.show}', children: [${children->Js.Array2.map(sub => sub->showSubtree)->Js.Array2.joinWith(", ")}] }`
    

  let rec parseSubtree = (form: FORM.t<'a>, index: tIndex): t<'a> =>
    switch form {
    | FORM.Mark(fs) => Branch({index: index, form: form, children: fs->Js.Array2.mapi((cnt, i) => {
        cnt->parseSubtree( index->Js.Array2.concat([i]) )
      }) })
    | _ => Leaf({index: index, form: form})
    }
  let parse = (expr: FORM.expr<'a>): tRoot<'a> =>
    {form: expr, children: expr->Js.Array2.mapi((cnt,i) => cnt->parseSubtree([i]))}


  // some example trees for testing
  let testTrees = [
    {form: [], children: []},
    {form: [ CVal(U) ], 
            children: [ Leaf({index: [0], form: CVal(U)}) ]
          },
    {form: [ Mark([]) ], 
            children: [ Branch({index: [0], form: Mark([]), children: []}) ]
          },
    {form: [ Mark([ CVal(M),Mark([]) ]) ], 
            children: [ Branch({index: [0], form: Mark([ CVal(M),Mark([]) ]), children: [
              Leaf({index: [0,0], form: CVal(M)}),
              Branch({index: [0,1], form: Mark([]), children: []})
            ]}) ]
          }
  ]

}


module FormDNA = {

  type t<'a> = FORM.fdna<'a>

  let show = FORM.showFdna


  // TODO
  let dnaToFORM = (dna: DNA.t) => {
    // to normal FORM
    []
  }
  let toFORM = ({dna, form, vars}: t<'a>) => {
    dnaToFORM(dna)
  }
}


module Sequence = {
  // ===================================================================
  // [Sequence]: FORM sequence -> nested [FORM] list
  // ===================================================================

  /*
  Note that Sequence.t is a FORM implementation of the #NestToR structure in Calc.Nested
  which means that there is an implicit Mark for each nesting context, which translates like:
  list{a,b,c,…} := (a(b(c(…))))
  */
  type t<'a> = FORM.seq<'a>

  let show = FORM.showSeq

  let rec toFORMt = (seq: t<'a>) => {
    open FORM
    switch seq {
    | list{}    => Mark([])
    | list{expr} => Mark(expr)
    | list{expr, ...seq'} => Mark( Belt.Array.concat(expr, [seq'->toFORMt]) )
    }
  }

  // let rec fromFORMt = (f: FORM.t): option<t> => {
  //   open FORM
  //   switch f {
  //   | Mark(a) => fromFORMt(a) // {
  //     //   switch fromFORMt(a) {
  //     //   | Some(seq) => list{seq}
  //     //   | None => None
  //     //   }
  //     // }
  //   // | Rel(t, t)
  //   // | SeqRE(UCalc.REsign.t, seq)
  //   // | CVal(Const.t)
  //   // | Uncl(string)
  //   | a => Some(list{a})
  //   }
  // }

  // let rec fromFORMt = (toIndex: int, fromContext: DepthTree.t): option<t> => {
  //   let _makeList = (maybeL: option<t>, form: FORM.t) =>
  //     switch maybeL {
  //     | Some(l) => switch form {
  //       | Mark(f) => Some(l->Belt.List.concat(f))
  //       | Rel(f,Mark(f')) => Some(l->Belt.List.concat(f, f'->_makeList))
  //       // | Rel(fa,fb) => 
  //       | a => Some()
  //       }
  //     | None => None
  //     }

  //   form |> FORM.reduce(_makeList, list{})
  // }



  // let rec fromFORMt = (form: FORM.t): option<t> => // ! not working yet
  //   switch form {
  //   | Mark(a) => {
  //       switch fromFORMt(a) {
  //       | Some(seq) => Some(list{...seq})
  //       | None => None
  //       }
  //     }
  //   | a => Some(list{a})
  //   }

}