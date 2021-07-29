open Expr
open FORM

// let seq = Empty->Sequence.fromFORMt
// let seq = Mark(Ctx([Mark(none)]))->Sequence.fromFORMt

// Js.log(seq->Belt.Option.getUnsafe->Sequence.show)

let seq = list{none, Ctx([Val(U), Val(U), Mark(Ctx([Val(I),Val(N)]))])}

let nest = seq->Sequence.nestedEval

Js.log3(seq->Sequence.show, seq->Sequence.eval, nest->Calc.Nested.show)


let root: DepthTree.tRoot = {
  form: Ctx([ Mark(Ctx([ Val(U), Mark(Ctx([ Val(M),Val(I) ])), FUncl("Häh") ])) ]),
  children: [
    Branch({
      index: [0],
      form: Mark(Ctx([ Val(U), Mark(Ctx([ Val(M),Val(I) ])), FUncl("Häh") ])),
      children: [
        Leaf({index: [0,0], form: Val(U)}),
        Branch({
          index: [0,1],
          form: Mark(Ctx([ Val(M),Val(I) ])),
          children: [
            Leaf({index: [0,1,0], form: Val(M)}),
            Leaf({index: [0,1,1], form: Val(I)}),
          ]
        }),
        Leaf({index: [0,2], form: FUncl("Häh")})
      ]
    })
  ]
}

Js.log(root->DepthTree.show)


// let f = Rel([Mark(Mark(none)), Val(M)])
// let f = Mark(Rel([]))
let f = Ctx([ Mark(Ctx([ Val(U), Mark(Ctx([ Val(M),Val(I) ])), FUncl("Häh") ])) ])

let root' = f->DepthTree.parse

Js.log(root'->DepthTree.show)


Js.log(root == root')