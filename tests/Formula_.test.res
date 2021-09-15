open Zora

open Formula
open Calc


let fml_samples: array<{"fml": string, "tks": Formula.Lexer.tokenStream}> = [
  { "fml": ``,
    "tks": list{}
  },
  { "fml": ` )( )  ( `,
    "tks": list{Token.Mark(Close),Mark(Open),Mark(Close),Mark(Open)}
  },
  { "fml": `(N((U )I)  )M`,
    "tks": list{Token.Mark(Open),Const(N),Mark(Open),Mark(Open),Const(U),
                Mark(Close),Const(I),Mark(Close),Mark(Close),Const(M)}
  },
  { "fml": `aμ_2b_n" süßer_apfel b"(/b_1 n_+2 /"42/4")")"`,
    "tks": list{
      Token.Var(`a`), Var(`μ_2`), Var(`b_n`),
      Var(` süßer_apfel b`),
      Mark(Open),
      Uncl(`b_1 n_+2 `),
      Var(`42/4`),
      Mark(Close),
      Var(`)`),
      }
  },
  { "fml": `"_"/a_/"_a"`,
    "tks": list{Token.Var(`_`),Uncl(`a_`),Var(`_a`)}
  },
  { "fml": `::0123`,
    "tks": list{Token.DNA({sortNMUI: true, code: DNA.fromIntArrUnsafe(~sortNMUI=true, [0,1,2,3]) })}
  },
  { "fml": `⁘0123`,
    "tks": list{Token.DNA({sortNMUI: false, code: DNA.fromIntArrUnsafe(~sortNMUI=false, [0,1,2,3]) })}
  },
]
let fml_invalid: array<{"fml": string, "exn": string}> = [
  { "fml": `"`,
    "exn": `Closing '"' is missing!`
  },
  { "fml": `/`,
    "exn": `Closing '/' is missing!`
  },
  { "fml": `"a""`,
    "exn": `Closing '"' is missing!`
  },
  { "fml": `/"/a/`,
    "exn": `Closing '/' is missing!`
  },
  { "fml": `//a"/`,
    "exn": `Label should not be empty!`
  },
  { "fml": `"""`,
    "exn": `Label should not be empty!`
  },
  { "fml": `aA`,
    "exn": `Unable to interpret 'A'.`
  },
  { "fml": `0a`,
    "exn": `Unable to interpret '0'.`
  },
  // { "fml": `⁘0123`,
  //   "exn": `Unable to interpret '0'.`
  // },
]

zoraBlock(`Testing Lexer.scan`, t => {

  fml_samples->Js.Array2.forEach((sample) =>
    t->block(`given a formula '${sample["fml"]}'`, t => {
      let input = sample["fml"]
      let actual = input->Lexer.scan

      let expected = sample["tks"]
      t->equal(actual, expected, `should be a token stream`)
    })
  )
  fml_invalid->Js.Array2.forEach((sample) =>
    t->block(`given an invalid formula '${sample["fml"]}'`, t => {
      let input = sample["fml"]
      let expected = sample["exn"]

      switch input->Lexer.scan {
      | _ => t->fail("expected error, but scan successful")
      | exception Lexer.LexError({msg}) => t->equal(msg, expected, `should be "${expected}", but was "${msg}"`)
      }
    })
  )
})