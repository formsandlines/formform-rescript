open Expr
open FORM

// let seq = Empty->Sequence.fromFORMt
let seq = Mark(Mark(none))->Sequence.fromFORMt

Js.log(seq->Belt.Option.getUnsafe->Sequence.show)

let seq = list{none,Rel([Val(U), Val(U), Mark(Rel([Val(I),none]))])}

let nest = seq->Sequence.nestedEval

Js.log3(seq->Sequence.show, seq->Sequence.eval, nest->Calc.Nested.show)


// let f = Rel([Mark(Mark(none)), Val(M)])
// let f = Mark(Rel([]))
let f = Mark(Rel([Val(U), Mark(Rel([Val(M),Val(I)])), FUncl("Häh")]))

Js.log(f->DepthTree.parse->DepthTree.show)