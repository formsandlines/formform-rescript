open Calc
open Code

module FORM = {
  // ----------------------------------------------------
  // [form]: Form -> pure FORM structure
  // ----------------------------------------------------
  type form
  // ----------------------------------------------------
  // [func]: Function -> functional expression of FORM
  // ----------------------------------------------------
  type func
  // ----------------------------------------------------
  // [fval]: Form Value -> iconic FORM value expression
  // ----------------------------------------------------
  type fval
  // ----------------------------------------------------
  // [fsym]: Form Symbol -> symbolic FORM value expression
  // ----------------------------------------------------
  type fsym

  // ===================================================================
  // [FORM]: FORMal expression -> general heterogenous FORM structure
  // ===================================================================
  type rec t<'a> = 
    | Empty: t<form>
    | Mark(t<form>): t<form>
    | Rel(t<form>, t<form>): t<form>
    // [FCtx]: FORM Context -> interface to embed more general FORM types into Forms
    | FCtx(t<'a>): t<form>

    // [RE]: ReEntry -> expression of a recursive Form Function
    | RE(t<form>): t<func>               // f: apply form to itself
    | ToRE(t<func>, t<form>): t<func>    // f: apply form to function
    | ToForm(t<form>, t<form>): t<func>  // f: apply form to form

    | FCon(Const.t): t<fval> // [Const] expression
    | FDna({                 // [Dna] expression
        dna: Dna.t,
        form: option<t<form>>,
        varlist: option<array<string>>
      }): t<fval>

    | FVar(string): t<fsym>
    // [SeqRE]: Self-equivalent ReEntry -> expression of a self-equivalent ReEntry [func] structure
    | SeqRE(REsign.t, list<t<form>>): t<fsym>
    // [FUncl]: Unclear FORM -> expression of a ?FORM that is marked unclear
    | FUncl(string, 'x): t<fsym>


  /**
  * Generates notation for [FORM]
  */
  let rec show: type any. t<any> => string = (expr) => {
    // For reference on recursive pattern matching with GADTs:
    // https://stackoverflow.com/questions/58964775/pattern-matching-on-a-gadt-fails

    switch expr {
    | Empty       => "."
    | Mark(f)     => "(" ++ f->show ++ ")"
    | Rel(fa, fb) => fa->show ++ fb->show
    | FCtx(expr') => show(expr')

    | RE(f)       => "ƒ = ƒ " ++ f->show
    | ToRE(re, f) => switch f {
      | Empty => re->show
      | _     => re->show ++ " < " ++ f->show
      }
    | ToForm(fb, fa) => "ƒ(ƒ) = " ++ fb->show ++ fa->show

    | FCon(c) => c->Const.show
    | FDna({dna, form, varlist}) => {
        let formStr = switch form {
        | Some(f) => switch varlist {
          | Some(vars) => {
            let varsStr = vars->Js.Array2.reducei((s,v,i) => s++(i > 0 ? "," : "")++v,"")
            `${f->show}.[${varsStr}]`
            }
          | None => f->show
          }
        | None => ""
        }
        formStr ++ "::" ++ (dna->Dna.show)
      }

    | FVar(str) => str
    | SeqRE(reSign, forms) => {
        let formStr = {
          let rec showForms = (forms: list<t<form>>): string =>
            switch forms {
            | list{} => ""
            | list{f, } => f->show
            | list{f, ...rest} => f->show ++ "," ++ rest->showForms
            }
          showForms(forms)
        }
        `{${reSign->REsign.show} ${formStr}}`
      }
    | FUncl(str, _) => `/${str}/`
    }
  }


  // ----------------------------------------------------
  // Operations
  // ----------------------------------------------------

  /**
  * Evaluates [FORM]
  */
  let rec eval: type any. t<any> => Dna.t = (expr) => {
    switch expr {
    | Empty => [N]
    | Mark(Empty) => [M]

    | Mark(f) => Dna.inv(eval(f))
    | Rel(fa, fb) => Dna.rel(eval(fa), eval(fb))
    | FCtx(expr') => eval(expr')

    | FCon(c) => [c]
    | FDna({dna, _, _}) => Dna.inv(dna)

    | _ => []
    }
  }

  /**
  * Equivalence between two [FORM]
  */
  let rec equiv: type any. t<any> => t<any> => bool = (expr_a, expr_b) => {
    // probably not correct in any case, has to be thought through

    switch (expr_a, expr_b) {
    | (Empty, Empty) => true
    | (FCon(c), FCon(c')) => c == c'
    | (FVar(v), FVar(v')) => v == v'
    | (FUncl(lbl, _), FUncl(lbl', _)) => lbl == lbl' // compare x == y?

    // | (SeqRE(sign, fs), SeqRE(sign', fs')) => (sign == sign') && equiv(fs, fs')

    // is there a shortcut to handle context wrapper?
    | (FCtx(Empty), a) => equiv(Empty, a)
    | (FCtx(Mark(fa)), b) => equiv(fa, b)
    // | (FCtx(Mark(fa)), FCtx(Mark(fb))) => equiv(fa, fb)
    | (FCtx(FCon(c)), FCtx(FCon(c'))) => c == c'
    | (FCtx(FVar(v)), FCtx(FVar(v'))) => v == v'
    | (FCtx(FUncl(lbl, _)), FCtx(FUncl(lbl', _))) => lbl == lbl' // compare x == y?

    | (Mark(fa), Mark(fb)) => equiv(fa, fb)
    | (Mark(fa), b) => equiv(fa, b)
    | (Rel(fa, fb), Rel(fa', fb')) =>
      if equiv(fa, fa') {
        equiv(fb, fb')
      } else if equiv(fa, fb') {
        equiv(fb, fa')
      } else {
        false
      }

    // these are most probably not exhaustive:
    | (RE(fa), RE(fb)) => equiv(fa, fb)
    | (ToRE(re, fa), ToRE(re', fb)) => equiv(re, re') && equiv(fa, fb)
    | (ToForm(fa', fa), ToForm(fb', fb)) => equiv(fa', fb') && equiv(fa, fb)

    | (a, b) => equiv(b, a) // commutativity of equiv
    }
  }

}