open Sign
open Calc

/**
 * FORM arithmetic for different self-equivalent re-entry FORMs
 *
 * * Note: the left-to-right nesting of values is contrary to convention in uFORM iFORM
 */
let calc = ({reEntryPar, unmarked, interpr}: SeqRE.sig, 
             #NestToR(nestedC: list<Const.t>)): Const.t => {

  // ? maybe there is a better way to handle empty list cases to avoid the additional query

  let resPar: Parity.t = nestedC == list{} || mod(nestedC->Js.List.length,2) != 0 ? Odd : Even

  // determine if uFORM or iFORM and modify nested [const] list accordingly
  let reType: SeqRE.uType = SeqRE.getUType({reEntryPar, unmarked, interpr}, resPar)

  // Js.log("--- Debug --->")
  if (nestedC == list{} || nestedC->Belt.List.every(c => c == N)) {
    // [3] if all variables are N, the result depends on the shape of the FORM
    // Js.log("All N case")
    // Js.log(nestedC)
    // Js.log(#NestToR(nestedC)->Nested.show)
    // Js.log(reType->F.show)
    // Js.log("<--- Debug ---")

    switch reType {
    | UFORM => U
    | IFORM => I
    }
  } else {
    let nestedC = if (!unmarked && resPar == Odd && reEntryPar == Even) {
      // ?? concat could happen in last step - but is needed by reduceR
      nestedC->Belt.List.concat(nestedC)
    } else {
      nestedC
    }
    // Js.log("Original list (maybe twice):")
    // Js.log(nestedC)
    // Js.log(#NestToR(nestedC)->Nested.show)

    if (nestedC->Belt.List.some(c => c == M) ||
       (nestedC->Belt.List.some(c => c == U) && nestedC->Belt.List.some(c => c == I)) ) {
      // [1] if innermost value is M, the rule of dominance holds
      // [2] if at some point the nestedC values can be reduced algebraically, further steps are obsolete
      // Js.log("Binary case")
      // Js.log(nestedC)
      // Js.log(#NestToR(nestedC)->Nested.show)
      // Js.log(reType->F.show)
      // Js.log("<--- Debug ---")

      let r = #NestToR(nestedC)->Nested.reduceR->Nested.calcR
      unmarked ? Const.inv(r) : r // ?? can we avoid the double mark for open FORMs?

    } else {
      // now we are at a situation where only one either U or I value remains

      // ?? calling is redundant for RecIdent, but crossing needs to happen after calling
      let #NestToR(nestedC) = #NestToR(nestedC)->Nested.reduceR
      let bottom_c = nestedC->Js.List.hd

      if (interpr == RecIdent) && !unmarked && (bottom_c == Some(N)) {
        // uFORM a1: [N,U]   -> f=((fU).) <-> f=fU <-> UU <-> U
        //           [N,I]   -> f=((fI).) <-> f=fI <-> UI <-> M
        // iFORM b1: [N,U,N] -> f{f}=(((f.)U).), f=<c1> <-> f{f}=(f)U, f=fU <-> (U)U <-> ()U <-> M
        //           [N,I,N] -> f{f}=(((f.)I).), f=<c1> <-> f{f}=(f)I, f=fI <-> (UI)I <-> (M)I <-> I
        // iFORM c1: [N,U,N] -> f=((((((f.).).).)U).) <-> f=fU <-> UU <-> U
        //           [N,I,N] -> f=((((((f.).).).)I).) <-> f=fI <-> UI <-> M
        // Js.log("Alt. Interpr. closed")
        // Js.log(nestedC)
        // Js.log(#NestToR(nestedC)->Nested.show)
        // Js.log(reType->F.show)
        // Js.log("<--- Debug ---")

        switch (nestedC, reType) {
        | (list{_,c, ..._}, UFORM) => Const.rel(U,c)
        | (list{_,c, ..._}, IFORM) => Const.rel(I,c)
        | _ => raise(Helper.Unreachable)
        }

      } else if (interpr == RecIdent) && unmarked && (bottom_c != Some(N)) {
        // iFORM a2: [U,N] -> f{f}=(f.)U, f=((f.)U) <-> (((U).))U <-> ()U <-> M
        //           [I,N] -> f{f}=(f.)I, f=((f.)I) <-> (((U).))I <-> (U)I <-> I
        // iFORM b2: [U]   -> h{g}=gU, g{f}=(fU), f=((f.)U) <-> (((U.).).)U <-> ()U <-> M
        //           [I]   -> h{g}=gI, g{f}=(fI), f=((f.)I) <-> (((U.).).)I <-> (U)I <-> I
        // uFORM c2: [U]   -> g{f}=fU, f=((f.)U) <-> ((U.).)U <-> U
        //           [I]   -> g{f}=fI, f=((f.)I) <-> ((U.).)I <-> UI <-> M
        // Js.log("Alt. Interpr. open")
        // Js.log(nestedC)
        // Js.log(#NestToR(nestedC)->Nested.show)
        // Js.log(reType->F.show)
        // Js.log("<--- Debug ---")

        switch (bottom_c, reType) { // ?? can we avoid the code repetition?
        | (Some(c), UFORM) => Const.rel(U,c)
        | (Some(c), IFORM) => Const.rel(I,c)
        | _ => raise(Helper.Unreachable)
        }

      } else {
        // uFORMs a1 and c1 are - in this last step - equivalent if c1 is sufficiently reduced:
        // [N,U,N,N,U,N] ((((((.)u).).)u).) == ((((.)u)u).) == ((((.).)u).) == ((u).) -> [N,U]
        // [N,N,U,N,N,U] ((((((u).).)u).).) == ((u)u) == ((.)u) -> [U,N]
        // [U,N,N,U,N,N] ((((((.).)u).).)u) == ((u)u) == ((.)u) -> [U,N]
        // however, they will differ in their open variants since the base resolution parity is different

        // let #NestToR(nestedC) = #NestToR(nestedC)->Nested.reduceByCallingR

        // (.(i(.(.(i(.)))))) = mn -> .(i(mn))

        // Js.log("Case Distinction")
        // Js.log(nestedC)
        // Js.log(#NestToR(nestedC)->Nested.show)
        // Js.log(reType->F.show)
        // Js.log("<--- Debug ---")

        if !unmarked {
          switch nestedC {
          | list{N,U}   | list{N,I}   => I
          | list{N,U,N} | list{N,I,N} => reEntryPar == Even ? I : U
          | list{U,N}   | list{I,N}   => U
          | list{U}     | list{I}     => reEntryPar == Even ? U : I
          | _ => raise(Helper.Unreachable)
          }
        } else {
          // in the Odd re-entry case (even resolution), mn is (mn)!
          switch nestedC {
          | list{N,U}   | list{N,I}   => I // same
          | list{N,U,N} | list{N,I,N} => reEntryPar == Even ? U : I // U/I swapped
          | list{U,N}   | list{I,N}   => U // same
          | list{U}     | list{I}     => reEntryPar == Even ? I : U // U/I swapped
          | _ => raise(Helper.Unreachable)
          }
        }
      }

    }
  }

}