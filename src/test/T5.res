open Expr
open FORM


let seq = list{Ctx([Mark(Ctx([]))]), Ctx([Val(U)]), Ctx([Mark(Ctx([Mark(Ctx([Val(I)])), Val(M)]))])}

Js.log2( seq->Sequence.show, seq->Sequence.eval )

Js.log( seq->Sequence.toFORMt->show )

open Alg

let iso = Isolator.fromVPoint(list{M,U,I})

Js.log( iso->FORMula.show )