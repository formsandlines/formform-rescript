open Expr
open FORM

// let seq = Empty->Sequence.fromFORMt
let seq = Mark(Mark(none))->Sequence.fromFORMt

Js.log(seq->Belt.Option.getUnsafe->Sequence.show)

let seq = list{mark,Rel([Val(M), Val(U), Mark(Rel([Val(I),none]))])}

Js.log(seq->Sequence.show)