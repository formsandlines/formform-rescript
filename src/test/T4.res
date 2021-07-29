open Calc

open Expr
open Alg

// open Alg

{
  open FORM

  let f = Ctx([
      Mark(Ctx([ 
        Mark(Ctx([ 
          Val(U), 
          Mark(Ctx([ 
            SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, 
              list{
                Ctx([ Mark(Ctx([ Val(I) ])) ]),
                Ctx([ FUncl("Hey"), Val(M) ])
              }) 
          ])) 
        ])) 
      ])),
      Val(M)
    ])

  Js.log2(f->show, f->eval)

  let fn = (str, f) => {
    str ++ " " ++ switch f {
    | Mark(_) => "Mark"
    | SeqRE(_,_) => "SeqRE"
    | Val(c) => c->Const.show
    | FUncl(s) => s
    // | Ctx(cnts) => "Test"
    }
  }

  Js.log(f |> reduce(fn, "Start"))

  let cnt = Mark(Ctx([Val(U)]))

  Js.log2(cnt->show, cnt->eval)

  Js.log2("FORMula: ", f->FORMula.fromExpr->FORMula.show)
}


{
  open FORMula

  let f = Ctx([
      Mark(Ctx([ 
        Mark(Ctx([ 
          FVar("a"), 
          Mark(Ctx([ 
            SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, 
              list{
                Ctx([ Mark(Ctx([ FVar("b") ])) ]),
                Ctx([ FUncl("Hey"), Val(M) ])
              }) 
          ])) 
        ])) 
      ])),
      FDna({dna: [N,M,U,I], form: Some(Ctx([Mark(Ctx([FVar("a")])),Val(M)])), vars: Some(["a"])})
    ])

  Js.log2(f->show, f->evalAll->showFdna)

  let expr = f->interpret(Js.Dict.fromArray([("a",Const.U),("b",Const.I)]))

  Js.log(expr->FORM.show)


  Js.log(f->getVars)
  Js.log((Ctx([FVar("a"),Mark(Ctx([Val(U),Mark(Ctx([FVar("c")])),FVar("b")]))]))->getVars)

  let cnt = Mark(Ctx([Val(U)]))

  Js.log(cnt->show)

}