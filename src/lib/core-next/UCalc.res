open Calc

type t = UFORM | IFORM

module REsign = {
  // ----------------------------------------------------
  // [REsign]: ReEntry signature -> instruction on how to
  //   recursively construct the ReEntry structure and
  //   how to interpret its undetermined value
  // ----------------------------------------------------

  // Interpretation alternatives for MN in re-entry FORMs
  // -> See uFORM iFORM, p. 136
  type mn = RecInstr | RecIdent // default is RecInstr

  type t = {re_n: int, pre_n: int, nStep: bool, interpr: mn}

  let show = ({re_n, pre_n, nStep, interpr}: t): string => {
    let reDots = "."->Js.String2.repeat(re_n)
    let preDots = "."->Js.String2.repeat(pre_n)
    let reMark = switch interpr {
    | RecInstr => "@"
    | RecIdent => "@'"
    }
    `${reDots}${reMark}${preDots}${nStep ? "_" : ""}`
  }
}

// let is_UFORM_or_IFORM = ({re_n, pre_n, nStep, interpr}: REsign.t): t => {

// }

/**
 * FORM arithmetic for different self-equivalent re-entry FORMs
 *
 * * rtl nesting is by convention
 */
let calc = ({re_n, pre_n, nStep, interpr}: REsign.t, 
             #NestToL(nestedC: list<Const.t>)): option<Const.t> => {
  open Helper

  // ---
  // ?? is_UFORM_or_IFORM ?
  let nestedC_len = nestedC->Js.List.length
  let resPar: Parity.t = mod(nestedC_len,2) == 0 ? Even : Odd

  // ?? can parity checks be avoided if we just use parity by default? would get rid of the option
  let reEntryPar: Parity.t =
    if mod(re_n,2) == 0 {
      mod((re_n + pre_n),2) == 0 ? Even : Odd
    } else {
      Both
    }

  // determine if uFORM or iFORM and modify nested [const] list accordingly
  let (reType, nestedC): (option<t>, list<Const.t>) =
    switch (resPar, reEntryPar) {
    | (Even, Both) => (nStep ? Some(IFORM) : Some(UFORM), nestedC)
    // ?? concat could happen in last step - but is needed by reduceL
    | (Odd, Even)  => (Some(UFORM), nestedC->Belt.List.concat(nestedC))
    | (Odd, Odd)   => (Some(IFORM), nestedC)
    | (_, _)       => (None, nestedC)
    }
  // ---


  if (nestedC->Belt.List.every(c => c == N)) {
    // [3] if all variables are N, the result depends on the shape of the FORM
    switch reType {
    | Some(UFORM) => Some(Const.U)
    | Some(IFORM) => Some(Const.I)
    | None        => None
    }
  } else if (nestedC->Belt.List.some(c => c == M) ||
            (nestedC->Belt.List.some(c => c == U) && nestedC->Belt.List.some(c => c == I)) ) {
    // [1] if innermost value is M, the rule of dominance holds
    // [2] if at some point the nestedC values can be reduced algebraically, further steps are obsolete
    let r = #NestToL(nestedC)->Nested.reduceL->Nested.calcL
    Some(nStep ? Const.inv(r) : r) // ?? can we avoid the double mark for open FORMs?

  } else {
    // now we are at a situation where only one either U or I value remains

    let #NestToL(nestedC) = #NestToL(nestedC)->Nested.reduceByCrossingL
    let nestedC_rev = nestedC->Js.List.rev // ?? can reversing be here avoided?
    let bottom_c = nestedC_rev->Js.List.hd

    if (interpr == RecIdent) && !nStep && (bottom_c == Some(N)) {
      // uFORM a1: [U,N]   -> f=((fU).) <-> f=fU <-> UU <-> U
      //           [I,N]   -> f=((fI).) <-> f=fI <-> UI <-> M
      // iFORM b1: [N,U,N] -> f{f}=(((f.)U).), f=<c1> <-> f{f}=(f)U, f=fU <-> (U)U <-> ()U <-> M
      //           [N,I,N] -> f{f}=(((f.)I).), f=<c1> <-> f{f}=(f)I, f=fI <-> (UI)I <-> (M)I <-> I
      // iFORM c1: [N,U,N] -> f=((((((f.).).).)U).) <-> f=fU <-> UU <-> U
      //           [N,I,N] -> f=((((((f.).).).)I).) <-> f=fI <-> UI <-> M
      switch nestedC_rev {
      | list{_,c, ..._} => switch reType {
        | Some(UFORM) => Some(Const.rel(U,c))
        | Some(IFORM) => Some(Const.rel(I,c))
        | None => None
        }
      | _ => None
      }
    } else if (interpr == RecIdent) && nStep && (bottom_c != Some(N)) {
      // iFORM a2: [N,U] -> f{f}=(f.)U, f=((f.)U) <-> (((U).))U <-> ()U <-> M
      //           [N,I] -> f{f}=(f.)I, f=((f.)I) <-> (((U).))I <-> (U)I <-> I
      // iFORM b2: [U]   -> h{g}=gU, g{f}=(fU), f=((f.)U) <-> (((U.).).)U <-> ()U <-> M
      //           [I]   -> h{g}=gI, g{f}=(fI), f=((f.)I) <-> (((U.).).)I <-> (U)I <-> I
      // uFORM c2: [U]   -> g{f}=fU, f=((f.)U) <-> ((U.).)U <-> U
      //           [I]   -> g{f}=fI, f=((f.)I) <-> ((U.).)I <-> UI <-> M
      switch bottom_c { // ?? can we avoid the code repetition?
      | Some(c) => switch reType {
        | Some(UFORM) => Some(Const.rel(U,c))
        | Some(IFORM) => Some(Const.rel(I,c))
        | None => None
        }
      | None => None
      }      
    } else {
      // uFORMs a1 and c1 are - in this last step - equivalent if c1 is sufficiently reduced:
      // [N,U,N,N,U,N] ((((((.)u).).)u).) == ((((.)u)u).) == ((((.).)u).) == ((u).) -> [U,N]
      // [U,N,N,U,N,N] ((((((u).).)u).).) == ((u)u) == ((.)u) -> [N,U]
      // [N,N,U,N,N,U] ((((((.).)u).).)u) == ((u)u) == ((.)u) -> [N,U]
      // however, they will differ in their open variants since the base resolution parity is different

      if !nStep {
        switch nestedC {
        | list{U,N} => Some(I)
        | list{I,N} => Some(I)
        | list{N,U,N} => reEntryPar == Odd ? Some(U) : Some(I)
        | list{N,I,N} => reEntryPar == Odd ? Some(U) : Some(I)
        | list{N,U} => Some(U)
        | list{N,I} => Some(U)
        | list{U} => reEntryPar == Odd ? Some(I) : Some(U)
        | list{I} => reEntryPar == Odd ? Some(I) : Some(U)
        | _ => None
        }
      } else {
        switch nestedC {
        | list{U,N} => Some(I) // same
        | list{I,N} => Some(I) // same
        | list{N,U,N} => reEntryPar == Odd ? Some(I) : Some(U) // U/I swapped   <-- in the Odd case mn is (mn)!
        | list{N,I,N} => reEntryPar == Odd ? Some(I) : Some(U) // U/I swapped   <-- in the Odd case mn is (mn)!
        | list{N,U} => Some(U) // same
        | list{N,I} => Some(U) // same
        | list{U} => reEntryPar == Odd ? Some(U) : Some(I) // U/I swapped   <-- in the Odd case mn is (mn)!
        | list{I} => reEntryPar == Odd ? Some(U) : Some(I) // U/I swapped   <-- in the Odd case mn is (mn)!
        | _ => None
        }
      }
    }

  }

}