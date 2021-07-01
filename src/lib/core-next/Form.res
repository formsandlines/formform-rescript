open Calc

type form
type fval
type ffunc
type fsym

module REsign = {
  type t = REsign({re_n: int, pre_n: int, nStep: bool})

  let show = (REsign({re_n, pre_n, nStep}): t) => {
    `${"."->Js.String2.repeat(re_n)}@${"."->Js.String2.repeat(pre_n)}${nStep ? "_" : ""}`
  }
}

type rec t<'a> = 
  | Empty: t<form>
  | Mark(t<form>): t<form>
  | Rel(t<form>, t<form>): t<form>
  | FCtx(t<'a>): t<form>

  | RE(t<form>): t<ffunc>               // f: apply form to itself
  | ToRE(t<ffunc>, t<form>): t<ffunc>   // f: apply form to function
  | ToForm(t<form>, t<form>): t<ffunc>  // f: apply form to form

  | FCon(Const.t): t<fval>
  | FDna({
      dna: Dna.t,
      form: option<t<form>>,
      varlist: option<array<string>>
    }): t<fval>

  | FVar(string): t<fsym>
  | SeqRe(REsign.t, list<t<form>>): t<fsym>
  | FUncl(string, 'x): t<fsym>


let rec show: type any. t<any> => string = (formform) => {
  // For reference on recursive pattern matching with GADTs:
  // https://stackoverflow.com/questions/58964775/pattern-matching-on-a-gadt-fails

  switch formform {
  | Empty       => "."
  | Mark(fx)    => "(" ++ fx->show ++ ")"
  | Rel(fx, fy) => fx->show ++ fy->show
  | FCtx(f_) => show(f_)

  | RE(fx)       => "ƒ = ƒ " ++ fx->show
  | ToRE(ff, fx) => switch fx {
    | Empty => ff->show
    | _     => ff->show ++ " < " ++ fx->show
    }
  | ToForm(fy, fx) => "ƒ(ƒ) = " ++ fy->show ++ fx->show

  | FCon(c) => c->Const.show
  | FDna({dna, form, varlist}) => {
      let formStr = switch form {
      | Some(fx) => switch varlist {
        | Some(vars) => {
          let varsStr = vars->Js.Array2.reducei((s,v,i) => s++(i > 0 ? "," : "")++v,"")
          `${fx->show}.[${varsStr}]`
          }
        | None => fx->show
        }
      | None => ""
      }
      formStr ++ "::" ++ (dna->Dna.show)
    }

  | FVar(str) => str
  | SeqRe(reSign, forms) => {
      let formStr = {
        let rec showForms = (forms: list<t<form>>): string =>
          switch forms {
          | list{} => ""
          | list{form, } => form->show
          | list{form, ...rest} => form->show ++ "," ++ rest->showForms
          }
        showForms(forms)
      }
      `{${reSign->REsign.show} ${formStr}}`
    }
  | FUncl(str, _) => `/${str}/`
  }
}