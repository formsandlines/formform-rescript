open Expr

// let seq = Empty->Sequence.fromFORMt
let seq = FORM.Mark(Mark(Empty))->Sequence.fromFORMt

Js.log(seq->Belt.Option.getUnsafe->Sequence.show)