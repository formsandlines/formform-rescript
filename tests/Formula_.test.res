open Zora

open Formula


let lex_samples: array<{"fml": string, "tks": Formula.Lexer.tokenStream}> = [
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

  { "fml": `2r+1}  open2r| {alt`,
    "tks": list{Token.SeqRE_par(Odd), SeqRE(Close), SeqRE_open, SeqRE_par(Even), OptSep, SeqRE(Open), SeqRE_alt}
  },

  { "fml": `..@~._`,
    "tks": list{Token.SeqRE_sig({reEntryPar: Odd, unmarked: true, interpr: RecIdent})}
  },
  { "fml": `..@~.`,
    "tks": list{Token.SeqRE_sig({reEntryPar: Odd, unmarked: false, interpr: RecIdent})}
  },
  { "fml": `..@~_`,
    "tks": list{Token.SeqRE_sig({reEntryPar: Even, unmarked: true, interpr: RecIdent})}
  },
  { "fml": `..@~`,
    "tks": list{Token.SeqRE_sig({reEntryPar: Even, unmarked: false, interpr: RecIdent})}
  },
  { "fml": `@~_`,
    "tks": list{Token.SeqRE_sig({reEntryPar: Any, unmarked: true, interpr: RecIdent})}
  },
  { "fml": `@~`,
    "tks": list{Token.SeqRE_sig({reEntryPar: Any, unmarked: false, interpr: RecIdent})}
  },

  { "fml": `..@._`,
    "tks": list{Token.SeqRE_sig({reEntryPar: Odd, unmarked: true, interpr: RecInstr})}
  },
  { "fml": `..@.`,
    "tks": list{Token.SeqRE_sig({reEntryPar: Odd, unmarked: false, interpr: RecInstr})}
  },
  { "fml": `..@_`,
    "tks": list{Token.SeqRE_sig({reEntryPar: Even, unmarked: true, interpr: RecInstr})}
  },
  { "fml": `..@`,
    "tks": list{Token.SeqRE_sig({reEntryPar: Even, unmarked: false, interpr: RecInstr})}
  },
  { "fml": `@_`,
    "tks": list{Token.SeqRE_sig({reEntryPar: Any, unmarked: true, interpr: RecInstr})}
  },
  { "fml": `@`,
    "tks": list{Token.SeqRE_sig({reEntryPar: Any, unmarked: false, interpr: RecInstr})}
  },

  { "fml": `::0123`,
    "tks": list{Token.DNA({sortNMUI: true, code: DNA.fromIntArrUnsafe(~sortNMUI=true, [0,1,2,3]) })}
  },
  { "fml": `.[η,b_1].[ ].[","]`,
    "tks": list{Token.ExprSep, VarList([`η`,`b_1`]), ExprSep, VarList([]), ExprSep, VarList([`,`])}
  },
  { "fml": `a .["$","φτ2",c]  ⁘0123`,
    "tks": list{Token.Var("a"), ExprSep, VarList([`$`,`φτ2`,`c`]), DNA({sortNMUI: false, code: DNA.fromIntArrUnsafe(~sortNMUI=false, [0,1,2,3]) }) }
  },
  { "fml": `)⁘0123 1022 1023 3333 (`,
    "tks": list{Token.Mark(Close), DNA({sortNMUI: false, code: DNA.fromIntArrUnsafe(~sortNMUI=false, [0,1,2,3, 1,0,2,2, 1,0,2,3, 3,3,3,3]) }), Mark(Open)}
  },
]
let lex_invalid: array<{"fml": string, "exn": string}> = [
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
  { "fml": `]`,
    "exn": `Unable to interpret ']'.`
  },
  { "fml": `[`,
    "exn": `Closing ']' is missing!`
  },
  { "fml": `.[a`,
    "exn": `Expected ',' or ']'.`
  },
  { "fml": `.[ab]`,
    "exn": `Expected ',' or ']'.`
  },
  { "fml": `.[ "ab"c]`,
    "exn": `Expected ',' or ']'.`
  },
  { "fml": `.[ "ab",]`,
    "exn": `comma-separated list item must not be empty!`
  },
  { "fml": `.[,]`,  // <-- should have clearer error msg
    "exn": `Unable to interpret ','.`
  },
  { "fml": `:0123`,  // <-- should have clearer error msg
    "exn": `Unable to interpret ':'.`
  },
  { "fml": `0123`,  // <-- should have clearer error msg
    "exn": `Unable to interpret '0'.`
  },
  { "fml": `⁘0423`,
    "exn": `Unable to interpret '4'.`
  },
  { "fml": `⁘01`,  // <-- should have clearer error msg
    "exn": `Invalid formDNA!`
  },
]

zoraBlock(`Testing Lexer.scan`, t => {

  lex_samples->Js.Array2.forEach((sample) =>
    t->block(`given a formula '${sample["fml"]}'`, t => {
      let input = sample["fml"]
      try {
        let actual = input->Lexer.scan
        let expected = sample["tks"]
        t->equal(actual, expected, `should be a token stream`)
      } catch {
      | Lexer.LexError({msg}) => t->fail(msg)
      | e => {
          Js.log(e)
          t->fail("Unknown Error!")
        }
      }
    })
  )
  lex_invalid->Js.Array2.forEach((sample) =>
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


open Expr

let parse_samples: array<{"fml": string, "tks": Formula.Lexer.tokenStream, "expr": FORM.expr<var>}> = [
  { "fml": ``,
    "tks": list{},
    "expr": []
  },
  { "fml": `()`,
    "tks": list{Token.Mark(Open),Mark(Close)},
    "expr": [FORM.Mark([])]
  },
  { "fml": `(())`,
    "tks": list{Token.Mark(Open),Mark(Open),Mark(Close),Mark(Close)},
    "expr": [FORM.Mark([ Mark([]) ])]
  },
  { "fml": `(()(()))`,
    "tks": list{Token.Mark(Open),Mark(Open),Mark(Close),Mark(Open),Mark(Open),Mark(Close),Mark(Close),Mark(Close)},
    "expr": [FORM.Mark([ Mark([]),Mark([ Mark([]) ]) ])]
  },
  { "fml": `(N(UI))M`,
    "tks": list{Token.Mark(Open),Const(N),Mark(Open),Const(U),Const(I),Mark(Close),Mark(Close),Const(M)},
    "expr": [ FORM.Mark([ CVal(N),Mark([ CVal(U),CVal(I) ]) ]),CVal(M) ]
  },
  { "fml": `{}`,
    "tks": list{Token.SeqRE(Open),SeqRE(Close)},
    "expr": [ FORM.SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{[ ]}) ]
  },
  { "fml": `{ @ }`,
    "tks": list{Token.SeqRE(Open),SeqRE_sig({reEntryPar: Any, unmarked: false, interpr: RecInstr}),SeqRE(Close)},
    "expr": [ FORM.SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{[ ]}) ]
  },
  { "fml": `{ ..@~._ a }`,
    "tks": list{Token.SeqRE(Open),SeqRE_sig({reEntryPar: Odd, unmarked: true, interpr: RecIdent}),Var("a"),SeqRE(Close)},
    "expr": [ FORM.SeqRE({reEntryPar: Odd, unmarked: true, interpr: RecIdent}, list{[ FVar("a") ]}) ]
  },
  { "fml": `{2r| }`,
    "tks": list{Token.SeqRE(Open),SeqRE_par(Even),OptSep,SeqRE(Close)},
    "expr": [ FORM.SeqRE({reEntryPar: Even, unmarked: false, interpr: RecInstr}, list{[ ]}) ]
  },
  { "fml": `{alt|2r+1| }`,
    "tks": list{Token.SeqRE(Open),SeqRE_alt,OptSep,SeqRE_par(Odd),OptSep,SeqRE(Close)},
    "expr": [ FORM.SeqRE({reEntryPar: Odd, unmarked: false, interpr: RecIdent}, list{[ ]}) ]
  },
  { "fml": `{open|2r|alt| a}`,
    "tks": list{Token.SeqRE(Open),SeqRE_open,OptSep,SeqRE_par(Even),OptSep,SeqRE_alt,OptSep,Var("a"),SeqRE(Close)},
    "expr": [ FORM.SeqRE({reEntryPar: Even, unmarked: true, interpr: RecIdent}, list{[ FVar("a") ]}) ]
  },
  { "fml": `{,}`,
    "tks": list{Token.SeqRE(Open),SeqSep,SeqRE(Close)},
    "expr": [ FORM.SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{[ ],[ ]}) ]
  },
  { "fml": `{ M }`,
    "tks": list{Token.SeqRE(Open),Const(M),SeqRE(Close)},
    "expr": [ FORM.SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{[ CVal(M) ]}) ]
  },
  { "fml": `{ M(U) } N`,
    "tks": list{Token.SeqRE(Open),Const(M),Mark(Open),Const(U),Mark(Close),SeqRE(Close),  Const(N)},
    "expr": [ FORM.SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{[ CVal(M),Mark([ CVal(U) ]) ]}) , CVal(N)]
  },
  { "fml": `{ M, U }`, // f = ((f M)U)
    "tks": list{Token.SeqRE(Open),Const(M),SeqSep,Const(U),SeqRE(Close)},
    "expr": [ FORM.SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, 
              list{[ CVal(U) ],[ CVal(M) ]}) ] // f = (U(M f))
  },
  { "fml": `{ (), U }`,
    "tks": list{Token.SeqRE(Open),Mark(Open),Mark(Close),SeqSep,Const(U),SeqRE(Close)},
    "expr": [ FORM.SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, 
              list{[ CVal(U) ],[ Mark([]) ]}) ]
  },
  { "fml": `{ (()), U, {} }`,
    "tks": list{Token.SeqRE(Open),Mark(Open),Mark(Open),Mark(Close),Mark(Close),SeqSep,Const(U),SeqSep,SeqRE(Open),SeqRE(Close),SeqRE(Close)},
    "expr": [ FORM.SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, 
              list{
              [ SeqRE({reEntryPar: Any, unmarked: false, interpr: RecInstr}, list{[ ]}) ],
              [ CVal(U) ],[ Mark([ Mark([ ]) ]) ]
              })
            ]
  },
  { "fml": `::0123`,
    "tks": list{Token.DNA({sortNMUI: true, code: DNA.makeUnsafe([N,M,U,I]) })},
    "expr": [ FORM.FDna({dna: DNA.makeUnsafe([N,M,U,I]), form: None, vars: None}) ]
  },
  { "fml": `[a]⁘0123 I`,
    "tks": list{ Token.VarList(["a"]),DNA({sortNMUI: false, code: DNA.makeUnsafe([N,U,I,M]) }), Const(I) },
    "expr": [ FORM.FDna({dna: DNA.makeUnsafe([N,U,I,M]), form: None, vars: Some(["a"]) }),CVal(I) ]
  },
  { "fml": `"Äpfel"(b).["Äpfel",b]⁘0123`,
    "tks": list{Token.Var(`Äpfel`),Mark(Open),Var(`b`),Mark(Close),ExprSep,VarList([`Äpfel`,`b`]),DNA({sortNMUI: false, code: DNA.makeUnsafe([N,U,I,M]) })},
    "expr": [ FORM.FDna({dna: DNA.makeUnsafe([N,U,I,M]), form: Some([ FVar(`Äpfel`),Mark([ FVar("b") ]) ]), vars: Some([`Äpfel`,"b"]) }) ]
  },
  { "fml": `U( a.[a]⁘0123 )`,
    "tks": list{ Token.Const(U),Mark(Open),Var("a"),ExprSep,VarList(["a"]),DNA({sortNMUI: false, code: DNA.makeUnsafe([N,U,I,M]) }),Mark(Close) },
    "expr": [ FORM.CVal(U),Mark([ FDna({dna: DNA.makeUnsafe([N,U,I,M]), form: Some([ FVar("a") ]), vars: Some(["a"]) }) ]) ]
  },
]

let parse_invalid: array<{"fml": string, "tks": Formula.Lexer.tokenStream, "exn": string}> = [
  { "fml": `(`,
    "tks": list{Token.Mark(Open)},
    "exn": `Missing ')' to close FORM.`
  },
  { "fml": `)`,
    "tks": list{Token.Mark(Close)},
    "exn": `Missing '(' to open FORM.`
  },
  { "fml": `())`,
    "tks": list{Token.Mark(Open),Mark(Close),Mark(Close)},
    "exn": `Missing '(' to open FORM.`
  },
  { "fml": `(N()`,
    "tks": list{Token.Mark(Open),Const(N),Mark(Open),Mark(Close)},
    "exn": `Missing ')' to close FORM.`
  },
  { "fml": `{`,
    "tks": list{Token.SeqRE(Open)},
    "exn": `Missing '}' to close re-entry FORM.`
  },
  { "fml": `}`,
    "tks": list{Token.SeqRE(Close)},
    "exn": `Missing '{' to open re-entry FORM.`
  },
  { "fml": `,`,
    "tks": list{Token.SeqSep},
    "exn": `Invalid token ','!`
  },
  { "fml": `{alt }`,
    "tks": list{Token.SeqRE(Open),SeqRE_alt,SeqRE(Close)},
    "exn": `Invalid token 'alt'!`
  },
  { "fml": `[]`,
    "tks": list{Token.VarList([])},
    "exn": `Invalid token '[]'!`
  },
  { "fml": `.[]`,
    "tks": list{Token.ExprSep,VarList([])},
    "exn": `Invalid token '.'!`
  },
  { "fml": `..[]⁘0123`,
    "tks": list{Token.ExprSep,ExprSep,VarList([]),DNA({sortNMUI: false, code: DNA.makeUnsafe([N,U,I,M])}) },
    "exn": `Invalid token '.'!`
  },
  { "fml": `[].⁘0123`,
    "tks": list{Token.VarList([]),ExprSep,DNA({sortNMUI: false, code: DNA.makeUnsafe([N,U,I,M])}) },
    "exn": `Invalid token '[]'!`
  },
]



zoraBlock(`Testing Parser.parse`, t => {

  parse_samples->Js.Array2.forEach((sample) =>
    t->block(`given a token stream for '${sample["fml"]}'`, t => {
      let input = sample["tks"]
      try {
        let actual = input->Parser.parse
        let expected = sample["expr"]
        t->equal(actual, expected, `should be a FORM expression`)
      } catch {
      | Parser.ParseError({msg}) => t->fail(msg)
      | e => {
          Js.log(e)
          t->fail("Unknown Error!")
        }
      }
    })
  )
  parse_invalid->Js.Array2.forEach((sample) =>
    t->block(`given an invalid token stream for '${sample["fml"]}'`, t => {
      let input = sample["tks"]
      let expected = sample["exn"]

      switch input->Parser.parse {
      | expr => t->fail(`expected error, but parse successful / result: ${expr->FORM.show}`)
      | exception Parser.ParseError({msg}) => t->equal(msg, expected, `should be "${expected}", but was "${msg}"`)
      }
    })
  )
})


// ? redundant tests:

zoraBlock(`Testing Formula.read`, t => {

  parse_samples->Js.Array2.forEach((sample) =>
    t->block(`given a formula '${sample["fml"]}'`, t => {
      let input = sample["fml"]
      try {
        let actual = input->Formula.read
        let expected = sample["expr"]
        t->equal(actual, expected, `should be a FORM expression`)
      } catch {
      | Lexer.LexError({msg}) => t->fail(msg)
      | Parser.ParseError({msg}) => t->fail(msg)
      | e => {
          Js.log(e)
          t->fail("Unknown Error!")
        }
      }
    })
  )
  parse_invalid->Js.Array2.forEach((sample) =>
    t->block(`given an invalid formula '${sample["fml"]}'`, t => {
      let input = sample["fml"]
      let expected = sample["exn"]

      switch input->Formula.read {
      | expr => t->fail(`expected error, but parse successful / result: ${expr->FORM.show}`)
      | exception Parser.ParseError({msg}) => t->equal(msg, expected, `should be "${expected}", but was "${msg}"`)
      // | exception Lexer.LexError({msg}) => t->equal(msg, expected, `should be "${expected}", but was "${msg}"`)
      }
    })
  )
})