open Calc
open Helper

module FORM_ = {
  // ===================================================================
  // [FORM]: FORM expression -> structure that evaluates to a [Const]
  // ===================================================================
  
  type rec content = 
    | Mark(context)
    | Val(Const.t)
    | SeqRE(UCalc.REsign.t, seq)
    | FUncl(string)
  and context = array<content>
  and seq = list<context>

  type t = context

  let none: context = []
  let mark: content = Mark(none)


  /**
   * Shows [FORM] as text
   */
  let rec show'content = (cnt: content) =>
    switch cnt {
    | Mark(ctx) => "(" ++ ctx->show'context ++ ")"
    | Val(c) => c->Const.show
    | SeqRE(reSign, forms) => `{${forms->show'seq} ${reSign->UCalc.REsign.show}}`
    | FUncl(lbl) => "/" ++ lbl ++ "/"
    }
  and show'context = (ctx: context) =>
    ctx->Js.Array2.map(cnt => cnt->show'content)->Js.Array2.joinWith("")

  and show'seq = (seq: seq) =>
    seq->Belt.List.map(ctx => ctx->show'context)->ListExtensions.joinWith(",")

  
  let show = (form: t) => form->show'context


  /**
   * Reducer function that traverses a [FORM]
   */
  // let rec reduce = (reducerFn, init, form) => {
  //   let acc = reducerFn(init, form)
  //   switch form {
  //   | Mark(f) => reduce(reducerFn, acc, f)
  //   | Rel(fs) => fs->Js.Array2.reduce(reduce(reducerFn), acc)
  //   | _ => acc
  //   }
  // }


  /**
   * Evaluates [FORM] to a single [Const] value
   */
  let rec eval'content = (cnt: content): Const.t =>
    switch cnt {
    | Mark([])  => M
    | Mark(ctx) => Const.inv(ctx->eval'context)
    | Val(c)    => c
    | SeqRE(reSign, forms) => UCalc.calc(reSign, forms->eval'seq)
    | FUncl(_)  => U
    }
  and eval'context = (ctx: context): Const.t =>
    ctx->Js.Array2.reduce((val,cnt) => Const.rel(val, cnt->eval'content), Const.N)
    
  and eval'seq = (seq: seq) =>
    #NestToR( seq->Belt.List.map(ctx => ctx->eval'context) )

  let eval = (form: t) => form->eval'context

}