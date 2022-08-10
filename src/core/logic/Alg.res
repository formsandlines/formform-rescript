open Calc
open Expr


module Isolator = {
  // ===================================================================
  // [Isolator]: isolator -> FORMula that isolates a specific [VPoint]
  // ===================================================================

  type t = FORM.t

  // 0 → 1: `( {@(a)} {..@(a)} )`
  let n = (var: string): t =>
    Mark([
      SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{[ Mark([FVar(var)]) ]}),
      SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{[ Mark([FVar(var)]) ]})
    ])
  // 1 → 1: `( {@a} {..@a} )`
  let m = (var: string): t =>
    Mark([
      SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{[ FVar(var) ]}),
      SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{[ FVar(var) ]})
    ])
  // 2 → 1: `( ({@(a)}a) ({..@a}(a)) )`
  let u = (var: string): t =>
    Mark([
      Mark([
        SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{[ Mark([FVar(var)]) ]}),
        FVar(var)
      ]),
      Mark([
        SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{[ FVar(var) ]}),
        Mark([FVar(var)])
      ])
    ])
  // 3 → 1: `( ({@a}(a)) ({..@(a)}a) )`
  let i = (var: string): t =>
    Mark([
      Mark([
        SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{[ FVar(var) ]}),
        Mark([FVar(var)])
      ]),
      Mark([
        SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{[ Mark([FVar(var)]) ]}),
        FVar(var)
      ])
    ])

  let get = (c: Const.t, var: string): t => switch c {
  | N => n(var) | M => m(var) | U => u(var) | I => i(var)
  }

  /**
   * Maps [VPoint] to [Isolator] FORMs
   */
  let fromVPoint = (~vars=Helper.common_vars, vp): t => {
    if (vars->Js.Array2.length < vp->Js.Array2.length) {
      raise(Js.Exn.raiseRangeError("Insufficient variables in given list!"))
    } else {
      Mark(vp->Belt.Array.mapWithIndex((i,c) => FORM.Mark([ get(c,vars[i]) ]) ))
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
    type t = (FORM.expr => option<FORM.expr>)

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

  let refl'out = (form): option<FORM.expr> =>
    switch form {
    | [ FORM.Mark([ FORM.Mark(a) ]) ] => Some(a)
    | _ => None
    }
  let refl'in = (form): option<FORM.expr> =>
    Some( [ Mark([ Mark(form) ]) ] )

  let refl: Equiv.t = (refl'in, refl'out)


  let pos'in = (form): option<FORM.expr> =>
    switch form {
    | [ FORM.Mark([ FORM.Mark([ p ]), q ]) ] if (p == q) => Some([])
    | _ => None
    }


}