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

  // let f = FORM.Mark(Rel(Rel(Empty,Val(U)), SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{Val(I),Mark(Val(U))})))
  let f = FORM.Mark(Rel(Val(I), Val(U)))

  let f' = FORM.Mark(Mark(Val(M)))
  
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
    Js.log(FORMula.equiv(ex, ex'))

    let ff = FORMula.Rel(Mark(Rel(FVar("a"),Mark(FVar("b")))),FVar("a"))

    // let ff'' = FORMula.Mark(Rel(Mark(Rel(FVar("a"),Mark(Rel(FVar("b"),Val(M))))), Mark(Rel(Mark(FVar("c")),FVar("d")))))

    let intpr = Js.Dict.fromArray([("a",Const.U),("b",Const.M)])
    let ff_intpr = FORMula.interpret(ff, intpr)

    Js.log2( ff->FORMula.show, ff_intpr->FORM.show )
    Js.log2( ff->FORMula.interEval(intpr), ff_intpr->FORM.eval )

    Js.log( ff->FORMula.evalAll(~sortNMUI = true) )
  }

}