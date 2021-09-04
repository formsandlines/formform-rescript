open Calc
open Expr


module Isolator = {
  // ===================================================================
  // [Isolator]: isolator -> FORMula that isolates a specific [VPoint]
  // ===================================================================

  type t = FORM.t<var>

  // 0 → 1: `( {@(a)} {..@(a)} )`
  let n = (var: string): t =>
    Mark([
      SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{[ Mark([Var(var)]) ]}),
      SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{[ Mark([Var(var)]) ]})
    ])
  // 1 → 1: `( {@a} {..@a} )`
  let m = (var: string): t =>
    Mark([
      SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{[ Var(var) ]}),
      SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{[ Var(var) ]})
    ])
  // 2 → 1: `( ({@(a)}a) ({..@a}(a)) )`
  let u = (var: string): t =>
    Mark([
      Mark([
        SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{[ Mark([Var(var)]) ]}),
        Var(var)
      ]),
      Mark([
        SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{[ Var(var) ]}),
        Mark([Var(var)])
      ])
    ])
  // 3 → 1: `( ({@a}(a)) ({..@(a)}a) )`
  let i = (var: string): t =>
    Mark([
      Mark([
        SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{[ Var(var) ]}),
        Mark([Var(var)])
      ]),
      Mark([
        SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{[ Mark([Var(var)]) ]}),
        Var(var)
      ])
    ])

  let get = (c: Const.t, var: string): t => switch c {
  | N => n(var) | M => m(var) | U => u(var) | I => i(var)
  }

  /**
   * Maps [VPoint] to [Isolator] FORMs
   */
  let fromVPoint = (~vars=Helper.common_vars, vp): t => {
    if (vars->Js.Array2.length < vp->Belt.List.length) {
      raise(Js.Exn.raiseRangeError("Insufficient variables in given list!"))
    } else {
      Mark(vp->Belt.List.mapWithIndex((i,c) => FORM.Mark([ get(c,vars[i]) ]) )->Belt.List.toArray)
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
    type t<'a> = (FORM.expr<'a> => option<FORM.expr<'a>>)

    let apply = (form, ptn: t<'a>) =>
      switch (form->ptn) {
      | Some(form') => form'
      | None => form
      }
  }
  module Equiv = {
    type t<'a> = ( Imply.t<'a>, Imply.t<'a> )

    let applyL = (form, (ptnL, _): t<'a>) => 
      switch (form->ptnL) {
      | Some(form') => form'
      | None => form
      }
    let applyR = (form, (_, ptnR): t<'a>) =>
      switch (form->ptnR) {
      | Some(form') => form'
      | None => form
      }
  }
}

module PrimAlg = {
  open Pattern

  let refl'out = (form): option<FORM.expr<'a>> =>
    switch form {
    | [ FORM.Mark([ FORM.Mark(a) ]) ] => Some(a)
    | _ => None
    }
  let refl'in = (form): option<FORM.expr<'a>> =>
    Some( [ Mark([ Mark(form) ]) ] )

  let refl: Equiv.t<'a> = (refl'in, refl'out)


}