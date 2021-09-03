open Zora

open Expr
open Sign
open Sign.Value


// [FORM] tests

type expr_sample<'a> = {f: FORM.expr<'a>, str: string}

let exprsCon: array<expr_sample<con>> = [
  { f: [],
    str: ""
  },
  { f: [ Uncl(""),Uncl(`👀`) ],
    str: `///👀/`
  },
  { f: [ FDna({dna: FormDNA.makeUnsafe([N]), form: None, vars: None}) ],
    str: `[⁘0]`
  },
  { f: [ Mark([Mark([]),Mark([ Mark([ Mark([]) ]),Mark([]), ]) ]) ],
    str: "(()((())()))"
  },
  { f: [ Mark([]), CVal(U), Uncl(`Über Ich`),
         SeqRE({reEntryPar: Parity.Any, unmarked: true, interpr: RecIdent},
           list{[ FORM.Mark([ CVal(M) ]) ],[]}),
         FDna({dna: FormDNA.makeUnsafe([M,I,U,N]), form: Some([ CVal(M) ]), vars: None}) ],
    str: `()u/Über Ich/{(m), _@'}[m⁘3210]`
  },
]

let exprsVar: array<expr_sample<var>> = [
  { f: [],
    str: ""
  },
  { f: [ Var("a"),Var(`λ`),Var("a_n"),Var("apple"),Var(`süßer_apfel b`) ],
    str: `aλ"a_n""apple""süßer_apfel b"`
  },
]

zoraBlock(`Testing show()`, t => {

  exprsCon->Js.Array2.forEach((expr) =>
    t->block(`given a constant [FORM], test for "${expr.str}"`, t => {
      let input = expr.f
      let actual = input->FORM.show

      // Js.log2("f: ",actual)
      let expected = expr.str
      t->equal(actual, expected, `should be the formula "${expr.str}"`)
    })
  )
  exprsVar->Js.Array2.forEach((expr) =>
    t->block(`given a variable [FORM], test for "${expr.str}"`, t => {
      let input = expr.f
      let actual = input->FORM.show

      // Js.log2("f: ",actual)
      let expected = expr.str
      t->equal(actual, expected, `should be the formula "${expr.str}"`)
    })
  )
})


// [FCON] tests

zoraBlock(`Testing FCON.toFVAR`, t => {

  t->block(`given an empty [FCON] expression`, t => {
    let input: FCON.expr = []
    let actual = input->FCON.toFVAR

    let expected: FVAR.expr = []
    t->equal(actual, expected, `should be equivalent [FVAR]`)
  })

  t->block(`given a complex [FCON] expression`, t => {
    let input: FCON.expr =
      [ Mark([ CVal(I), Mark([ Mark([CVal(N)]) ]), CVal(U) ]),
        SeqRE({reEntryPar: Parity.Even, unmarked: false, interpr: RecInstr},
           list{[ Uncl("Unklar") ]}),
        FDna({ dna: FormDNA.makeUnsafe([N]), form: Some([ CVal(M) ]), vars: Some(["a"]) }),
      ]
    let actual = input->FCON.toFVAR

    let expected: FVAR.expr =
      [ Mark([ CVal(I), Mark([ Mark([CVal(N)]) ]), CVal(U) ]),
        SeqRE({reEntryPar: Parity.Even, unmarked: false, interpr: RecInstr},
           list{[ Uncl("Unklar") ]}),
        FDna({ dna: FormDNA.makeUnsafe([N]), form: Some([ CVal(M) ]), vars: Some(["a"]) }),
      ]
    t->equal(actual, expected, `should be equivalent [FVAR]`)
  })
})


// [FVAR] tests

zoraBlock(`Testing FVAR.getVars()`, t => {

  t->block(`given an empty [FVAR] expression`, t => {
    let input: FVAR.expr = []
    let actual = input->FVAR.getVars

    let expected = []
    t->equal(actual, expected, `should be an empty array`)
  })

  t->block(`given [FVAR] expression without variables`, t => {
    let input: FVAR.expr = [ Mark([ CVal(U) ]), Uncl("Cthulu") ]
    let actual = input->FVAR.getVars

    let expected = []
    t->equal(actual, expected, `should be an empty array`)
  })

  t->block(`given [FVAR] expression with 1 variable`, t => {
    let input: FVAR.expr = [ Mark([]),Mark([ Var("a") ]),CVal(M) ]
    let actual = input->FVAR.getVars

    let expected = ["a"]
    t->equal(actual, expected, `should be ["a"]`)
  })

  t->block(`given [FVAR] expression with multiple variables`, t => {
    let input: FVAR.expr = [ Mark([Mark([ Var("Red") ])]),Mark([ Var("Blue") ]),Var("Green") ]
    let actual = input->FVAR.getVars

    let expected = ["Blue","Green","Red"]
    t->equal(actual, expected, `should be variables ["Blue","Green","Red"] in alphabetic order`)
  })

  t->block(`given [FVAR] expression with variables nested inside seqRE`, t => {
    let input: FVAR.expr = [
      SeqRE({reEntryPar: Parity.Odd, unmarked: true, interpr: RecInstr},
        list{[ Var(`Mäuse`),
          SeqRE({reEntryPar: Parity.Odd, unmarked: true, interpr: RecInstr},
            list{[ Var(`Ratten`) ],[ Mark([ Var(`Würmer`) ]) ]}
          )
        ]}
      ),
    ]
    let actual = input->FVAR.getVars

    let expected = [`Mäuse`,`Ratten`,`Würmer`]
    t->equal(actual, expected, `should be variables ["Mäuse","Ratten","Würmer"] in alphabetic order`)
  })

  t->block(`given [FVAR] expression with variables nested inside fdna`, t => {
    let input: FVAR.expr = [
      FDna({ dna: FormDNA.makeUnsafe([N]), form: Some([ Var("a"),Var("b") ]), vars: Some(["a","b"]) }),
    ]
    let actual = input->FVAR.getVars

    let expected = []
    t->equal(actual, expected, `should be the empty array`)
  })
})


// [DepthTree] tests

type depthTree_sample<'a> = {tree: DepthTree.tRoot<'a>, form: FORM.expr<'a>, str: string}

let dtrees: array<depthTree_sample<con>> = [
  {
    tree: DepthTree.testTrees[0],
    form: [],
    str: "{ root, form: '', children: [] }"
  },
  {
    tree: DepthTree.testTrees[1],
    form: [ CVal(U) ],
    str: "{ root, form: 'u', children: [{ index: 0, form: 'u' }] }"
  },
  {
    tree: DepthTree.testTrees[2],
    form: [ Mark([]) ],
    str: "{ root, form: '()', children: [{ index: 0, form: '()', children: [] }] }"
  },
  {
    tree: DepthTree.testTrees[3],
    form: [ Mark([ CVal(M),Mark([]) ]) ],
    str: "{ root, form: '(m())', children: [{ index: 0, form: '(m())', children: [{ index: 00, form: 'm' }, { index: 01, form: '()', children: [] }] }] }"
  },
]

zoraBlock(`Testing DepthTree.parse()`, t => {
  dtrees->Js.Array2.forEach(input => {
    t->block(`given a depth tree`, t => {
      let actual = input.form->DepthTree.parse

      let expected = input.tree
      t->equal(actual, expected, `should be "${input.str}"`)
    })
  })
})

zoraBlock(`Testing DepthTree.show()`, t => {
  dtrees->Js.Array2.forEach(input => {
    t->block(`given a depth tree`, t => {
      let actual = input.tree->DepthTree.show

      let expected = input.str
      t->equal(actual, expected, `should be "${input.str}"`)
    })
  })
})


// [Sequence] tests

zoraBlock(`Testing Sequence.toFORMt()`, t => {
  t->block(`given an empty sequence`, t => {
    let input = list{}
    let actual = input->Sequence.toFORMt

    let expected = FORM.Mark([])
    t->equal(actual, expected, `should be an empty Mark`)
  })
  t->block(`given a singleton sequence`, t => {
    let input = list{[]}
    let actual = input->Sequence.toFORMt

    let expected = FORM.Mark([])
    t->equal(actual, expected, `should be an empty Mark`)
  })
  t->block(`given a sequence of empty expressions`, t => {
    let input = list{[],[],[]}
    let actual = input->Sequence.toFORMt

    let expected = FORM.Mark([ Mark([ Mark([]) ]) ])
    t->equal(actual, expected, `should be 3 nested Marks`)
  })
})