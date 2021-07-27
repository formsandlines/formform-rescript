open Calc

open Expr_
open Alg_

open Expr
open Alg

{
  open FORM_

  let f: t = [
      Mark([ 
        Mark([ 
          Val(U), 
          Mark([ 
            SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, 
              list{
                [ Mark([ Val(I) ]) ],
                [ FUncl("Hey"), Val(M) ]
              }) 
          ]) 
        ]) 
      ]),
      Val(M)
    ]

  Js.log2(f->show, f->eval)

  let cnt: content = Mark([Val(U)])

  Js.log2(cnt->show'content, cnt->eval'content)

  Js.log2("FORMula: ", f->Alg_.FORMula_.fromExpr->Alg_.FORMula_.show)
}

{
  open FORM

  let f: t = Rel([
      Mark( 
        Mark(
          Rel([ 
            Val(U), 
            Mark(
              SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, 
                list{
                  Mark(Val(I)),
                  Rel([ FUncl("Hey"), Val(M) ])
                }) 
            ) 
          ])
        ) 
      ),
      Val(M)
    ])

  Js.log2(f->show, f->eval)

}


{
  open FORMula_

  let f: t = [
      Mark([ 
        Mark([ 
          FVar("a"), 
          Mark([ 
            SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, 
              list{
                [ Mark([ FVar("b") ]) ],
                [ FUncl("Hey"), Val(M) ]
              }) 
          ]) 
        ]) 
      ]),
      FDna({dna: [N,M,U,I], form: Some([Mark([FVar("a")]),Val(M)]), vars: Some(["a"])})
    ]

  Js.log(f->show)

  // Js.log(f->getVars)
  Js.log(([FVar("a"),Mark([Val(U),Mark([FVar("c")]),FVar("b")])])->getVars)

  let expr = f->interpret(Js.Dict.fromArray([("a",Const.U),("b",Const.I)]))

  Js.log(expr->FORM_.show)

  // let cnt: content = Mark([Val(U)])

  // Js.log2(cnt->show'content)

}