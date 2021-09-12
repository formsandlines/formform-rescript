open Zora

open Helper
open Expr


// [FORM] tests

type expr_sample<'a> = {f: FORM.expr<'a>, str: string}

let exprsCon: array<expr_sample<con>> = [
  { f: [],
    str: ""
  },
  { f: [ Uncl(""),Uncl(`👀`) ],
    str: `///👀/`
  },
  { f: [ FDna({dna: DNA.makeUnsafe([N]), form: None, vars: None}) ],
    str: `[⁘0]`
  },
  { f: [ Mark([Mark([]),Mark([ Mark([ Mark([]) ]),Mark([]), ]) ]) ],
    str: "(()((())()))"
  },
  { f: [ Mark([]), CVal(U), Uncl(`Über Ich`),
         SeqRE({reEntryPar: Parity.Any, unmarked: true, interpr: RecIdent},
           list{[ FORM.Mark([ CVal(M) ]) ],[]}),
         FDna({dna: DNA.makeUnsafe([M,I,U,N]), form: Some([ CVal(M) ]), vars: None}) ],
    str: `()U/Über Ich/{(M), _@~}[M⁘3210]`
  },
]

let exprsVar: array<expr_sample<var>> = [
  { f: [],
    str: ""
  },
  { f: [ FVar("a"),FVar(`λ`),FVar("a_n"),FVar("apple"),FVar(`süßer_apfel b`) ],
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

let exprsCon: array<{"f": FCON.expr, "fvar": FVAR.expr}> = [
  { "f": [],
    "fvar": []
  },
  { "f": [
      FORM.Mark([ CVal(I), Mark([ Mark([CVal(N)]) ]), CVal(U) ]),
      SeqRE({reEntryPar: Parity.Even, unmarked: false, interpr: RecInstr},
          list{[ Uncl("Unklar") ]}),
      FDna({ dna: DNA.makeUnsafe([N]), form: Some([ CVal(M) ]), vars: Some(["a"]) }),
    ],
    "fvar": [
      FORM.Mark([ CVal(I), Mark([ Mark([CVal(N)]) ]), CVal(U) ]),
      SeqRE({reEntryPar: Parity.Even, unmarked: false, interpr: RecInstr},
          list{[ Uncl("Unklar") ]}),
      FDna({ dna: DNA.makeUnsafe([N]), form: Some([ CVal(M) ]), vars: Some(["a"]) }),
    ]
  },
]


zoraBlock(`Testing FCON.toFVAR`, t => {

  exprsCon->Js.Array2.forEach((expr) =>
    t->block(`given an [FCON] expression`, t => {
      let input = expr["f"]
      let actual = input->FCON.toFVAR

      let expected = expr["fvar"]
      t->equal(actual, expected, `should be equivalent [FVAR]`)
    })
  )
})


// [FVAR] tests

let exprsVar: array<{"f": FVAR.expr, "vars": array<string>, "count": int}> = [
  { "f": [],
    "vars": [],
    "count": 0
  },
  { "f": [ FORM.Mark([ CVal(U) ]), Uncl("Cthulu") ],
    "vars": [],
    "count": 0
  },
  { "f": [ FORM.Mark([]),Mark([ FVar("a") ]),CVal(M) ],
    "vars": ["a"],
    "count": 1
  },
  { "f": [ FORM.Mark([Mark([ FVar("Red") ])]),Mark([ FVar("Blue") ]),FVar("Green") ],
    "vars": ["Blue","Green","Red"],
    "count": 3
  },
  { "f": [
      FORM.SeqRE({reEntryPar: Parity.Odd, unmarked: true, interpr: RecInstr},
        list{[ FVar(`Mäuse`),
          SeqRE({reEntryPar: Parity.Odd, unmarked: true, interpr: RecInstr},
            list{[ FVar(`Ratten`) ],[ Mark([ FVar(`Würmer`) ]) ]}
          )
        ]}
      ),
  ],
    "vars": [`Mäuse`,`Ratten`,`Würmer`],
    "count": 3
  },
  { "f": [
      FORM.FDna({ dna: DNA.makeUnsafe([N]), form: Some([ FVar("a"),FVar("b") ]), vars: Some(["a","b"]) })
  ],
    "vars": [],
    "count": 0
  },
]

zoraBlock(`Testing FVAR.getVars()`, t => {

  exprsVar->Js.Array2.forEach((expr) =>
    t->block(`given an [FVAR] expression`, t => {
      let input = expr["f"]
      let actual = input->FVAR.getVars

      let expected = expr["vars"]
      t->equal(actual, expected, `should be "${expr["vars"]->Js.Array2.toString}"`)
    })
  )
})

zoraBlock(`Testing FVAR.countVars()`, t => {

  exprsVar->Js.Array2.forEach((expr) =>
    t->block(`given an [FVAR] expression`, t => {
      let input = expr["f"]
      let actual = input->FVAR.countVars

      let expected = expr["count"]
      t->equal(actual, expected, `should be "${expr["count"]->Js.Int.toString}"`)
    })
  )
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
    str: "{ root, form: 'U', children: [{ index: 0, form: 'U' }] }"
  },
  {
    tree: DepthTree.testTrees[2],
    form: [ Mark([]) ],
    str: "{ root, form: '()', children: [{ index: 0, form: '()', children: [] }] }"
  },
  {
    tree: DepthTree.testTrees[3],
    form: [ Mark([ CVal(M),Mark([]) ]) ],
    str: "{ root, form: '(M())', children: [{ index: 0, form: '(M())', children: [{ index: 00, form: 'M' }, { index: 01, form: '()', children: [] }] }] }"
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