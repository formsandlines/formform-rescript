open Calc
open Expr

let result = Const.rel(U,I)

Js.log( result )

Js.log( result->Const.show )


let form = FORM.Mark( Rel([ Val(U), FUncl("Welt") ]) )

Js.log( form->FORM.show )

let seqRe = FORM.SeqRE({reEntryPar: Odd, unmarked: false, interpr: RecInstr},
  list{Mark(Mark(FORM.none)), form})

Js.log( FORM.Mark(Rel([ seqRe, Mark(FORM.none) ]))->FORM.show )

// let fdna = FORM.FDna({
//   dna: [M,N,U,I],
//   varlist: Some(["a","b"]),
//   form: Some(form)
// })

// Js.log( fdna->FORM.show )

let rec uFORM = FORM.Mark( Mark(uFORM) )
let iFORM = FORM.Mark( uFORM )

Js.log( uFORM ) // <- marked as Circular
Js.log( iFORM ) // <- marked as Circular
// Js.log( uFORM->FORM.show ) // <- Caution: Stack overflow!
// Js.log( iFORM->FORM.show ) // <- Caution: Stack overflow!
// Js.log( FORM.equiv(uFORM, uFORM) )

// Js.log( FORM.equiv( Mark(Mark(Empty)), FCtx(Val(M)) ) )

{
  open FORM
  let form' = FORM.Rel([ Mark(Mark(none)), Mark(Mark(none)), Mark(Mark(none)) ])

  Js.log( FORM.show(form') )
  Js.log( FORM.eval(form') )
}
Js.log( Nested.calcL(#NestToL(list{M,N,N}: list<Const.t>)) )

// ((m).).


let vtable: Code.VTable.t = Js.Dict.fromArray([("a",Const.U),("b",Const.I)])

Js.log3(vtable, vtable->Js.Dict.get("a"), vtable->Js.Dict.set("c",Const.M)) // .set mutates the Dict!


let val_n = 3
Js.log2( val_n->Const.fromInt->Belt.Option.map( c => c->Const.show ),
         val_n->Const.fromInt(~sortNMUI=true)->Belt.Option.map( c => c->Const.show ) )

let val_c = Const.I
Js.log2( Const.toInt(val_c),
         Const.toInt(val_c, ~sortNMUI=true) )


{
  open Const
  let nestedL = #NestToL(list{N,N,U,N,N,U})
  Js.log(nestedL->Nested.show)

  let result = Nested.calcL(nestedL)
  Js.log(result->show)

  // let nestedL' = Nested.reduceByCrossingL(nestedL)
  // Js.log2(nestedL'->Nested.show, nestedL')
  // let nestedL'' = Nested.reduceByCallingL(nestedL)
  // Js.log2(nestedL''->Nested.show, nestedL'')
  let nestedL''' = Nested.reduceL(nestedL)
  Js.log2(nestedL'''->Nested.show, nestedL''')

  Js.log("---")

  let nestedR = #NestToR(nestedL->Nested.getList)
  Js.log(nestedR->Nested.show)

  let result = Nested.calcR(nestedR)
  Js.log(result->show)

  // let nestedR' = Nested.reduceByCrossingR(nestedR)
  // Js.log2(nestedR'->Nested.show, nestedR')
  // let nestedR'' = Nested.reduceByCallingR(nestedR)
  // Js.log2(nestedR''->Nested.show, nestedR'')
  let nestedR''' = Nested.reduceR(nestedR)
  Js.log2(nestedR'''->Nested.show, nestedR''')
}


{
  open Const
  let nestedR = #NestToR(list{N,I})
  let r = UCalc.calc({reEntryPar: Even, unmarked: false, interpr: RecInstr}, nestedR)
  Js.log(r->Const.show)

}