open Calc
open Helper

module FORM = {
  // ===================================================================
  // [FORM]: FORM expression -> structure that evaluates to a [Const]
  // ===================================================================
  
  type rec t = 
    | Mark(t)
    | Rel(list<t>)
    | Val(Const.t)
    | SeqRE(UCalc.REsign.t, seq)
    | FUncl(string)
  and seq =
    list<t>

/*

Rel[ Mark(), Rel[Mark(), Mark()], Rel[] ]
  == Rel[ Mark(), Rel[Mark()], Mark(), Rel[] ]
  == Rel[ Mark(), Mark(), Rel[Mark(), Rel[]] ]
  == Rel[ Mark(), Rel[Mark(), Mark(), Rel[]] ]
  <=> ()()().

Rel(Mark(), Rel(Rel(Mark(), Mark()), None))
  == Rel(Mark(), Rel(Mark(), Rel(Mark(), None)))
  == Rel(Rel(Mark(), Mark()), Rel(Mark(), None))
  <=> ()()().

*/


  let none = Rel(list{})
  let mark = Mark(none)

  let rec show = (expr: t) =>
    switch expr {
    | Mark(f) => "(" ++ f->show ++ ")"
    | Rel(list{}) => "."
    | Rel(fs) => fs->Belt.List.map(f => f->show)->ListExtensions.join
    | Val(c) => c->Const.show
    | SeqRE(reSign, forms) => `{${reSign->UCalc.REsign.show} ${forms->showSeq}}`
    | FUncl(lbl) => "/" ++ lbl ++ "/"
    }
  and showSeq = (seq: seq) =>
    seq->Belt.List.map(f => f->show)->ListExtensions.joinWith(",")

  let rec reduce = (reducerFn, init, form) => {
    let acc = reducerFn(init, form)
    switch form {
    | Mark(f) => reduce(reducerFn, acc, f)
    | Rel(fs) => fs->Belt.List.reduce(acc, reduce(reducerFn))
    | _ => acc
    }
  }

    // switch seq {
    // | list{} => Empty->show
    // | list{f, ...fs} => f->show ++ ""
    // // | list{f} => f->show
    // }

  let rec eval = (expr: t): Const.t =>
    switch expr {
    | Rel(list{}) => N
    | Mark(Rel(list{})) => M

    | Mark(f) => Const.inv(eval(f))
    | Rel(fs) => fs->Belt.List.reduce(Const.N, (val,f) => Const.rel(val, eval(f)))
    | Val(c) => c

    | SeqRE(reSign, forms) => UCalc.calc(reSign, forms->nestedEval)
        // let vals = forms->Belt.List.map(f => eval(f))
        // UCalc.calc(reSign, #NestToR(vals))
      // }
    | FUncl(_) => U
    }
  and nestedEval = (seq: seq) =>
    #NestToR( seq->Belt.List.map(f => f->eval) )
  // and evalSeq = (seq: seq): Const.t =>
  //   switch seq {
  //   | list{}  => eval(Empty)
  //   | list{f} => eval(f)
  //   | list{f, ...fs} => Const.rel(eval(f), Const.inv(fs->evalSeq))
  //   }


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

  type rec t =
    | Leaf({
      depth: int,
      order: int,
      form: FORM.t
    })
    | Branch({ // Mark(...)
      depth: int,
      height: int,
      order: int,
      children: array<t>
    })
    | Root({ // <...>
      height: int,
      children: array<t>
    })
  
  // let generate = (form: FORM.t): t => {

  //   let rec parse = (~depth=1, ~height=-99, ~order=0, form) => switch form {
  //   | Mark(f) => Branch()
  //   | f => Leaf({})
  //   }
    
  //   let root = {height: 0, children: switch form {
  //   | Mark(f) => [ Branch({depth: 0, height: -1, order: 0, children: [
  //       f->parse ]}) ]
  //   | Rel(fa,fb) => [ Branch({depth: 0, height: -1, order: 0, children: [
  //       fa->parse,
  //       fb->parse(~order=1) ]}) ]
  //   | f => [ Leaf({depth: 0, order: 0, form: f}) ]
  //   }}
  // }

/*

. -> Leaf(Emtpy)
() -> Branch(d: 1, h: 0, ch: [Empty])
(()) -> Branch(d: 1, h: 1
          ch: [Branch(d: 2, h: 0, ch: [Empty]))]
a() -> 
(()) -> Branch(d: 1, h: 1
          ch: [Branch(d: 2, h: 0, ch: [Empty]))]

*/


}

module Sequence = {
  // ===================================================================
  // [Sequence]: FORM sequence -> nested [FORM] list
  // ===================================================================
  type t = FORM.seq // list<FORM.t>

  let show = FORM.showSeq

  let nestedEval = (seq) => FORM.nestedEval(seq)

  let rec eval = (seq: t): Const.t =>
    switch seq {
    | list{}  => FORM.eval(FORM.none)
    | list{f} => FORM.eval(f)
    | list{f, ...fs} => Const.rel(FORM.eval(f), Const.inv(fs->eval))
    }

  let rec toFORMt = (seq: t): FORM.t => {
    open FORM
    switch seq {
    | list{}  => none
    | list{f} => f
    | list{f, ...fs} => Rel(list{f, Mark(fs->toFORMt)})
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
  //   // let _makeList = (maybeL: option<t>, form: FORM.t) =>
  //   //   switch maybeL {
  //   //   | Some(l) => switch form {
  //   //     | Mark(f) => Some(l->Belt.List.concat(f))
  //   //     | Rel(f,Mark(f')) => Some(l->Belt.List.concat(f, f'->_makeList))
  //   //     // | Rel(fa,fb) => 
  //   //     | a => Some()
  //   //     }
  //   //   | None => None
  //   //   }

  //   form |> FORM.reduce(_makeList, list{})
  // }

  let rec fromFORMt = (form: FORM.t): option<t> =>
    switch form {
    | Mark(a) => {
        switch fromFORMt(a) {
        | Some(seq) => Some(list{...seq})
        | None => None
        }
      }
    | a => Some(list{a})
    }

}


