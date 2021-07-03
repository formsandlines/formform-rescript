open Calc
open Expr

let result = Const.rel(U,I)

Js.log( result )

Js.log( result->Const.show )


let form = FORM.Mark( Rel( FCtx(FCon(U)), FCtx(FUncl("Welt",1)) ) )

Js.log( form->FORM.show )

let seqRe = FORM.SeqRE(REsign({re_n: 2, pre_n: 1, nStep: false}), list{Mark(Mark(Empty)), form})

Js.log( (FORM.Mark(Rel( FCtx(seqRe), Mark(Empty) )))->FORM.show )

let fdna = FORM.FDna({
  dna: [M,N,U,I],
  varlist: Some(["a","b"]),
  form: Some(form)
})

Js.log( fdna->FORM.show )

let rec uFORM = FORM.Mark( Mark(uFORM) )
let rec iFORM = FORM.Mark( uFORM )

Js.log( uFORM ) // <- marked as Circular
Js.log( iFORM ) // <- marked as Circular
// Js.log( uFORM->FORM.show ) // <- Caution: Stack overflow!
// Js.log( iFORM->FORM.show ) // <- Caution: Stack overflow!
Js.log( FORM.equiv(uFORM, uFORM) )

// Js.log( FORM.equiv( Mark(Mark(Empty)), FCtx(FCon(M)) ) )

let form' = FORM.Rel( Mark(Mark(Empty)), Rel( Mark(Mark(Empty)), Mark(Mark(Empty)) ) )

Js.log( FORM.show(form') )
Js.log( FORM.eval(form') )
