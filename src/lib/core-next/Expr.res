open Calc
open Helper

module FORM = {
  // ===================================================================
  // [FORM]: FORM expression -> structure that evaluates to a [Const]
  // ===================================================================
  open Code.Form

  type rec t<'a> =
    | Mark(t<context>): t<content>
    | Val(Const.t): t<content>
    | SeqRE(UCalc.REsign.t, seq): t<content>
    | FUncl(string): t<content>

    | Ctx(array<t<content>>): t<context>
    // | Seq(list<t<context>>): t<context>
  and seq = list<t<context>>


  let none: t<context> = Ctx([])
  let mark: t<content> = Mark(none)


  let getContents = (ctx) => switch ctx {
  | Ctx(cnts) => cnts
  }


  /**
   * Shows [FORM] as text
   */
  let rec show: type any. t<any> => _
    = (form) => switch form {
    | Mark(ctx) => "(" ++ ctx->show ++ ")"
    | Val(c) => c->Const.show
    | SeqRE(reSign, seq) => `{${seq->showSeq} ${reSign->UCalc.REsign.show}}`
    | FUncl(lbl) => "/" ++ lbl ++ "/"

    | Ctx(cnts) => cnts->Js.Array2.map(cnt => cnt->show)->Js.Array2.joinWith("")
    }
  and showSeq = (seq: seq) =>
    seq->Belt.List.map(ctx => ctx->show)->ListExtensions.joinWith(",")


  let rec reduceContent = (reducerFn, init, cnt: t<content>) => {
    let acc = reducerFn(init, cnt)
    switch cnt {
    | Mark(ctx) => ctx |> reduceContext(reducerFn, acc)
    | SeqRE(_, seq) => seq |> reduceSeq(reducerFn, acc)
    | _ => acc
    }
  }
  and reduceContext = (reducerFn, init, ctx: t<context>) =>
    ctx->getContents->Js.Array2.reduce(reduceContent(reducerFn), init)

  and reduceSeq = (reducerFn, init, seq: seq) =>
    seq->Belt.List.reduce(init, reduceContext(reducerFn))

  /**
   * Reducer function that traverses a [FORM]
   */
  let reduce = (reducerFn, init, form) => reduceContext(reducerFn, init, form)


  /**
   * Evaluates [FORM] to a single [Const] value
   */
  let rec eval: type any. t<any> => Const.t
    = (form) => switch form {
    | Mark(Ctx([])) => M
    | Mark(ctx) => Const.inv(ctx->eval)
    | Val(c)    => c
    | SeqRE(reSign, forms) => UCalc.calc(reSign, forms->nestedEval)
    | FUncl(_)  => U

    | Ctx(cnts) => cnts->Js.Array2.reduce((val,cnt) => Const.rel(val, cnt->eval), Const.N)
    }
  and nestedEval = (seq: seq) =>
    #NestToR( seq->Belt.List.map(ctx => ctx->eval) )


}


module DepthTree = {
  // ===================================================================
  // [DepthTree]: Depth tree -> [FORM] wrapper with spatial information
  // ===================================================================
  /*
  - get height of a FORM from deepest nest
  - obtain a unique coordinate for a FORM in a context
  - 
  */
  open Code.Form

  type rec t =
    | Branch({
        index: tIndex,
        form:  FORM.t<content>,
        children: array<t>
      })
    | Leaf({
        index: tIndex,
        form:  FORM.t<content>
      })
  and tRoot = {
      form:  FORM.t<context>,
      children: array<t>
    }
  and tIndex = array<int>


  let showIndex = (index: tIndex) => index->Js.Array2.joinWith("")

  let rec showSubtree = (subtree: t) =>
    switch subtree {
    | Branch({index, form, children}) => `{ index: ${index->showIndex}, form: '${form->FORM.show}',
      children: [${children->Js.Array2.map(sub => sub->showSubtree)->Js.Array2.joinWith(", ")}] }`
    | Leaf({index, form}) => `{ index: ${index->showIndex}, form: '${form->FORM.show}' }`
    }
  let show = ({form, children}: tRoot) =>
    `{ root, form: '${form->FORM.show}', children: [${children->Js.Array2.map(sub => sub->showSubtree)->Js.Array2.joinWith(", ")}] }`
    

  let rec parseSubtree = (form: FORM.t<content>, index: tIndex): t =>
    switch form {
    | FORM.Mark(FORM.Ctx(fs)) => Branch({index: index, form: form, children: fs->Js.Array2.mapi((cnt, i) => {
        cnt->parseSubtree( index->Js.Array2.concat([i]) )
      }) })
    | _ => Leaf({index: index, form: form})
    }
  let parse = (ctx: FORM.t<context>): tRoot =>
    {form: ctx, children: ctx->FORM.getContents->Js.Array2.mapi((cnt,i) => cnt->parseSubtree([i]))}

}


module Sequence = {
  // ===================================================================
  // [Sequence]: FORM sequence -> nested [FORM] list
  // ===================================================================

  /*
  Note that Sequence.t is a FORM implementation of the #NestToR structure in Calc.Nested
  which means that there is an implicit Mark for each nesting context, which translates like:
  list{a,b,c,…} := (a(b(c(…))))
  */
  type t = FORM.seq

  let show = FORM.showSeq

  let nestedEval = (seq) => FORM.nestedEval(seq)

  let rec eval = (seq: t): Const.t =>
    switch seq {
    | list{}    => Const.M
    | list{ctx} => Const.inv(FORM.eval(ctx))
    | list{ctx, ...seq'} => Const.inv(Const.rel( FORM.eval(ctx), seq'->eval ))
    }

  let rec toFORMt = (seq: t) => {
    open FORM
    switch seq {
    | list{}    => Mark(Ctx([]))
    | list{ctx} => Mark(ctx)
    | list{ctx, ...seq'} => Mark(Ctx( Belt.Array.concat(ctx->FORM.getContents, [seq'->toFORMt]) ))
    }
  }

  // let rec fromFORMt = (f: FORM.t): option<t> => {
  //   open FORM
  //   switch f {
  //   | Mark(a) => fromFORMt(a) // {
  //     //   switch fromFORMt(a) {
  //     //   | Some(seq) => list{seq}
  //     //   | None => None
  //     //   }
  //     // }
  //   // | Rel(t, t)
  //   // | SeqRE(UCalc.REsign.t, seq)
  //   // | Val(Const.t)
  //   // | FUncl(string)
  //   | a => Some(list{a})
  //   }
  // }

  // let rec fromFORMt = (toIndex: int, fromContext: DepthTree.t): option<t> => {
  //   let _makeList = (maybeL: option<t>, form: FORM.t) =>
  //     switch maybeL {
  //     | Some(l) => switch form {
  //       | Mark(f) => Some(l->Belt.List.concat(f))
  //       | Rel(f,Mark(f')) => Some(l->Belt.List.concat(f, f'->_makeList))
  //       // | Rel(fa,fb) => 
  //       | a => Some()
  //       }
  //     | None => None
  //     }

  //   form |> FORM.reduce(_makeList, list{})
  // }



  // let rec fromFORMt = (form: FORM.t): option<t> => // ! not working yet
  //   switch form {
  //   | Mark(a) => {
  //       switch fromFORMt(a) {
  //       | Some(seq) => Some(list{...seq})
  //       | None => None
  //       }
  //     }
  //   | a => Some(list{a})
  //   }

}