open Zora

open Formula


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
  { "fml": `"a"" süßer_apfel b"(/b_1 n_+2 /"42/4")")"`,
    "tks": list{
      Token.VarStr(Label(`a`)),
      VarStr( LabelSub({lbl: ` süßer`, sub: `apfel b`}) ),
      Mark(Open),
      Uncl( LabelSub({lbl: `b`, sub: `1 n_+2 `}) ),
      VarStr(Label(`42/4`)),
      Mark(Close),
      VarStr(Label(`)`)),
      }
  },
  { "fml": `"_"/a_/"_a"`,
    "tks": list{Token.VarStr(Label(`_`)),Uncl(Label(`a_`)),VarStr(Label(`_a`))}
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