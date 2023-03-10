open Helper
open Calc

let lblClass_unquoted = [`a`,`b`,`c`,`d`,`e`,`f`,`g`,`h`,`i`,`j`,`k`,`l`,`m`,`n`,`o`,`p`,`q`,`r`,`s`,`t`,`u`,`v`,`w`,`x`,`y`,`z`,`α`,`β`,`γ`,`δ`,`ε`,`ζ`,`η`,`θ`,`ι`,`κ`,`λ`,`μ`,`ν`,`ξ`,`ο`,`π`,`ρ`,`ς`,`σ`,`τ`,`υ`,`φ`,`χ`,`ψ`,`ω`]
let idxClass_unquoted = [`0`,`1`,`2`,`3`,`4`,`5`,`6`,`7`,`8`,`9`]->Belt.Array.concat(lblClass_unquoted)

module FORM = {
  // ===================================================================
  // Polymorphic generalized FORM type
  // ===================================================================
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

  // let none: expr<con> = []
  // let mark: t<con> = Mark(none)

  // !! experimental accessors !!
  let mark = (expr) => Mark(expr)
  let cVal = (c) => CVal(c)
  let seqRE = (sig, seq) => SeqRE(sig, seq)
  let uncl = (lbl) => Uncl(lbl)

  let fVar = (lbl) => FVar(lbl)
  let fDna = (fdna) => FDna(fdna)
  // ---

  let is_unquotedVar = (lbl) => {
    let len = lbl->Js.String2.length
    let get = Js.String2.get

    if len == 3 && lbl->get(1) == "_" {
      lblClass_unquoted->Js.Array2.includes(lbl->get(0)) &&
      idxClass_unquoted->Js.Array2.includes(lbl->get(2))
    } else if len == 1 {
      lblClass_unquoted->Js.Array2.includes(lbl->get(0))
    } else { false }
  }

  let showLabel_Var = (lbl) => {
    // TODO: complete Helper function
    if (lbl->is_unquotedVar) {
      Helper.cleanStr(lbl)
    } else {
      `"${Helper.cleanStr(lbl)}"`
    }
  }

  let showLabel_Uncl = (lbl) =>
    // TODO: complete Helper function
    "/" ++ Helper.cleanStr(lbl) ++ "/" 

  let rec showForm: (~sortNMUI: bool=?, t) => _
    = (~sortNMUI=false, form) => switch form {
    | Mark(expr) => "(" ++ expr->showExpr(~sortNMUI=sortNMUI) ++ ")"
    | CVal(c) => c->Const.show
    | SeqRE(reSig, seq) => `{${reSig->SeqRE.showSig} ${seq->showSeq(~sortNMUI=sortNMUI)}}`
    | Uncl(lbl) => lbl->showLabel_Uncl

    | FVar(lbl)  => lbl->showLabel_Var
    | FDna(fdna) => "[" ++ fdna->showFdna(~sortNMUI=sortNMUI) ++ "]"
    }
  and showExpr: (~sortNMUI: bool=?, expr) => _
    = (~sortNMUI=false, expr) =>
    expr->Js.Array2.map(form => form->showForm(~sortNMUI=sortNMUI))->Js.Array2.joinWith("")

  and showSeq: (~sortNMUI: bool=?, seq) => _
    = (~sortNMUI=false, seq) =>
    seq->Belt.List.reverse // realign with nest-to-left convention
       ->Belt.List.map(expr => expr->showExpr(~sortNMUI=sortNMUI))->ListExtensions.joinWith(",")

  and showFdna: (~sortNMUI: bool=?, fdna) => _
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


  let rec reduceForm = (reducerFn, init, form: t) => {
    let acc = reducerFn(init, form)
    switch form {
    | Mark(expr) => expr->reduceExpr(reducerFn, acc, _)
    | SeqRE(_, seq) => seq->reduceSeq(reducerFn, acc, _)
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
      | FVar(lbl) => vars->Belt.Set.add(lbl) // vars->Js.Array2.concat([lbl])
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
      | FVar(_) => n + 1
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
  type rec t =
    | Branch({
        index: tIndex,
        form:  FORM.t,
        children: array<t>
      })
    | Leaf({
        index: tIndex,
        form:  FORM.t
      })
  and tRoot = {
      form:     FORM.expr,
      children: array<t>
    }
  and tIndex = array<int>


  // let makeUnsafe

  let showIndex = (index: tIndex) => index->Js.Array2.joinWith("")

  let rec showSubtree = (subtree: t) =>
    switch subtree {
    | Branch({index, form, children}) => `{ index: ${index->showIndex}, form: '${form->FORM.showForm}', children: [${children->Js.Array2.map(sub => sub->showSubtree)->Js.Array2.joinWith(", ")}] }`
    | Leaf({index, form}) => `{ index: ${index->showIndex}, form: '${form->FORM.showForm}' }`
    }
  let show = ({form, children}: tRoot) =>
    `{ root, form: '${form->FORM.show}', children: [${children->Js.Array2.map(sub => sub->showSubtree)->Js.Array2.joinWith(", ")}] }`
    

  let rec parseSubtree = (form: FORM.t, index: tIndex): t =>
    switch form {
    | FORM.Mark(fs) => Branch({index: index, form: form, children: fs->Js.Array2.mapi((cnt, i) => {
        cnt->parseSubtree( index->Js.Array2.concat([i]) )
      }) })
    | _ => Leaf({index: index, form: form})
    }
  let parse = (expr: FORM.expr): tRoot =>
    {form: expr, children: expr->Js.Array2.mapi((cnt,i) => cnt->parseSubtree([i]))}


  // let traversePath = (root: tRoot, index: tIndex): 



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
  // ? module is quite shallow, so maybe could be reorganized

  type t = FORM.fdna

  let show = FORM.showFdna


  // TODO
  let dnaToFORM = (dna: DNA.t) => {
    // to normal FORM
    []
  }
  let toFORM = ({dna, form, vars}: t) => {
    dnaToFORM(dna)
  }


  let permute = ({dna, form, vars}: t) => {
    ({dna, form, vars}: t)
  }

  let perspectives = ({dna, form, vars}: t) => {
    []
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

  ? There is a double semantics for list{} and list{[ ]} -> should there be no empty list?
  */
  type t = FORM.seq

  let show = FORM.showSeq

  let rec toFORMt = (seq: t) => {
    open FORM
    switch seq {
    | list{}     => Mark([])
    | list{expr} => Mark(expr)
    | list{expr, ...seq'} => Mark( Belt.Array.concat(expr, [seq'->toFORMt]) )
    }
  }


  // let rec fromRootPath = (toIndex: DepthTree.tIndex, fromContext: DepthTree.tRoot): option<t> => {

  // }


  
  // let rec fromFORMt = (f: FORM.t): option<t> =>
  //   switch f {
  //   | Mark(expr) => 
  //   | _ => None
  //   }


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