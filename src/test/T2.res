open Calc

// {..@. a,b,c}
// {
//   open UCalc

//   let sign: REsign.t = {reEntryPar: Even, unmarked: false, interpr: RecInstr}
//   let table = Code.VTable.make3(Const.enum_NMUI(), (x,y,z) =>
//     UCalc.calc(sign, #NestToR(list{z,y,x}) )
//   )
//   Js.log(table)
// }


{
  open Expr

  // let f = FORM.Mark(Ctx(Ctx(Empty,Val(U)), SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{Val(I),Mark(Val(U))})))
  let f = FORM.Mark(Ctx([ Val(I), Val(U) ]))

  let f' = FORM.Mark(Ctx([ Mark(Ctx([ Val(M) ])) ]))
  
  Js.log2(
    f->FORM.show,
    f->FORM.eval
  )
  Js.log2(
    f'->FORM.show,
    f'->FORM.eval
  )
  
  {
    open Alg
    let ex = FORMula.fromExpr(f)
    let ex' = FORMula.fromExpr(f')
    
    Js.log2(ex->FORMula.show, ex'->FORMula.show)
    // Js.log(FORMula.equiv(ex, ex'))

    let ff = FORMula.Ctx([ Mark(Ctx([ FVar("a"),Mark(Ctx([ FVar("b") ])) ])),FVar("a") ])

    // let ff'' = FORMula.Mark(Ctx(Mark(Ctx(FVar("a"),Mark(Ctx(FVar("b"),Val(M))))), Mark(Ctx(Mark(FVar("c")),FVar("d")))))

    let intpr = Js.Dict.fromArray([("a",Const.U),("b",Const.M)])
    let ff_intpr = FORMula.interpret(ff, intpr)

    Js.log2("Test vpoint: ", intpr->Interpr.toVPoint)
    Js.log3("Test interpr: ", intpr, switch (list{U,M}->Interpr.fromVPoint(["a","b"])) {
    | Some(interpr) => interpr
    | None => raise(Not_found)
    })

    Js.log2( ff->FORMula.show, ff_intpr->FORM.show )
    Js.log2( ff->FORMula.interEval(intpr), ff_intpr->FORM.eval )

    Js.log( ff->FORMula.evalAll )
  }

  {
    open Alg
    let ff = FORMula.Ctx([ Mark(Ctx([ Mark(Ctx([ Mark(Ctx([ FVar("a") ])),FVar("b") ])) ])) ])
    // let ff = FORMula.Ctx(Mark(Mark(Val(U))), Val(I))

    let ff' = ff->Pattern.Equiv.applyR(PrimAlg.refl)
    let ff'' = ff'->Pattern.Equiv.applyL(PrimAlg.refl)

    Js.log2(ff->FORMula.show, ff'->FORMula.show)
    Js.log2(ff'->FORMula.show, ff''->FORMula.show)
  }

}

{
  open Alg

  let f = FORMula.Ctx([ Mark(Ctx([ FVar("a"),FVar("c") ])),FVar("b") ])
  // let f = FORMula.FVar("a")
  // let f = FORMula.Ctx(FVar("a"),FVar("b"))

  Js.log(f->FORMula.show)

  let result = f->FORMula.evalAll
  Js.log2("Result: ", result->FORMula.showFdna(~sortNMUI=false))

  Js.log3(result.dna, result.form, result.vars)
}

{
  open Code

  let vspc = VSpace.make(2)
  let dna = vspc->FormDNA.fromVSpace((vp) =>
    switch vp {
    | list{a,b} => Const.rel(a,b)
    | _ => N
    })
  Js.log2(vspc,dna->FormDNA.show)

  let vtable = dna->VTable.makeFromFDna

  Js.log(vtable)
}


// let rec reentry = Expr.FORM.Mark(Ctx(Val(N),reentry))

// Js.log(reentry->Expr.FORM.show)