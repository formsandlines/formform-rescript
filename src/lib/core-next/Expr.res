open Calc

module FORM = {
  // ===================================================================
  // [FORM]: FORM expression -> structure that evaluates to a [Const]
  // ===================================================================
  
  type rec t = 
    | Empty
    | Mark(t)
    | Rel(t, t)
    | Val(Const.t)
    | SeqRE(UCalc.REsign.t, list<t>)
    | FUncl(string)

  let rec show = (expr: t): string =>
    switch expr {
    | Empty => "."
    | Mark(f) => "(" ++ f->show ++ ")"
    | Rel(fa, fb) => fa->show ++ fb->show
    | Val(c) => c->Const.show
    | SeqRE(reSign, forms) => {
        let formStr = {
          let rec showForms = (forms: list<t>): string =>
            switch forms {
            | list{} => ""
            | list{f, } => f->show
            | list{f, ...rest} => f->show ++ "," ++ rest->showForms
            }
          showForms(forms)
        }
        `{${reSign->UCalc.REsign.show} ${formStr}}`
      }
    | FUncl(lbl) => "/" ++ lbl ++ "/"
    }

  let rec eval = (expr: t): Const.t =>
    switch expr {
    | Empty => N
    | Mark(Empty) => M

    | Mark(f) => Const.inv(eval(f))
    | Rel(fa, fb) => Const.rel(eval(fa), eval(fb))
    | Val(c) => c

    | SeqRE(reSign, forms) => {
        let vals = forms->Belt.List.map(f => eval(f))
        UCalc.calc(reSign, #NestToR(vals))
      }
    | FUncl(_) => U
    }
}