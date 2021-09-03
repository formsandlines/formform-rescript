open Zora

open Sign
open Calc

// IMPORTANT NOTE: UCalc uses #NestToR and hence nesting order is (a(…(n @))) instead of (((@ a)…)n) !

type vtuple = (Const.t,Const.t)
type vtriple = (Const.t,Const.t,Const.t)

type seqREV_sample = {f: string, sign: SeqRE.sig, results: array<Const.t>}

let valSpc1: array<Const.t> = [ // NMUI ordering
    N, M, U, I,
  ]
let valSpc2: array<vtuple> = [ // NMUI ordering
    (N,N),(N,M),(N,U),(N,I),
    (M,N),(M,M),(M,U),(M,I),
    (U,N),(U,M),(U,U),(U,I),
    (I,N),(I,M),(I,U),(I,I),
  ] 
let valSpc3: array<vtriple> = [ // NMUI ordering
    (N,N,N),(N,N,M),(N,N,U),(N,N,I),
    (N,M,N),(N,M,M),(N,M,U),(N,M,I),
    (N,U,N),(N,U,M),(N,U,U),(N,U,I),
    (N,I,N),(N,I,M),(N,I,U),(N,I,I),

    (M,N,N),(M,N,M),(M,N,U),(M,N,I),
    (M,M,N),(M,M,M),(M,M,U),(M,M,I),
    (M,U,N),(M,U,M),(M,U,U),(M,U,I),
    (M,I,N),(M,I,M),(M,I,U),(M,I,I),

    (U,N,N),(U,N,M),(U,N,U),(U,N,I),
    (U,M,N),(U,M,M),(U,M,U),(U,M,I),
    (U,U,N),(U,U,M),(U,U,U),(U,U,I),
    (U,I,N),(U,I,M),(U,I,U),(U,I,I),

    (I,N,N),(I,N,M),(I,N,U),(I,N,I),
    (I,M,N),(I,M,M),(I,M,U),(I,M,I),
    (I,U,N),(I,U,M),(I,U,U),(I,U,I),
    (I,I,N),(I,I,M),(I,I,U),(I,I,I),
  ] 

// ---------------------------------------
// Samples with 1 value:

let seqREV1: array<seqREV_sample> = [
  {
    f: `{@ a}`,
    sign: {reEntryPar: Parity.Any, unmarked: false, interpr: SeqRE.RecInstr},
    results: [ I,N,I,I, ] // ! should be checked manually
  }, {
    f: `{..@ a}`,
    sign: {reEntryPar: Parity.Even, unmarked: false, interpr: SeqRE.RecInstr},
    results: [ U,N,U,U, ] // ! should be checked manually
  }, {
    f: `{..@. a}`,
    sign: {reEntryPar: Parity.Odd, unmarked: false, interpr: SeqRE.RecInstr},
    results: [ I,N,I,I, ] // ! should be checked manually
  }, {
    f: `{@_ a}`,
    sign: {reEntryPar: Parity.Any, unmarked: true, interpr: SeqRE.RecInstr},
    results: [ I,M,U,U, ] // ! should be checked manually
  }, {
    f: `{..@_ a}`,
    sign: {reEntryPar: Parity.Even, unmarked: true, interpr: SeqRE.RecInstr},
    results: [ U,M,I,I, ] // ! should be checked manually
  }, {
    f: `{..@._ a}`,
    sign: {reEntryPar: Parity.Odd, unmarked: true, interpr: SeqRE.RecInstr},
    results: [ I,M,U,U, ] // ! should be checked manually
  },
  {
    f: `{alt|@ a}`,
    sign: {reEntryPar: Parity.Any, unmarked: false, interpr: SeqRE.RecIdent},
    results: [ I,N,I,I, ] // ! should be checked manually
  }, {
    f: `{alt|.@ a}`,
    sign: {reEntryPar: Parity.Even, unmarked: false, interpr: SeqRE.RecIdent},
    results: [ U,N,U,U, ] // ! should be checked manually
  }, {
    f: `{alt|..@. a}`,
    sign: {reEntryPar: Parity.Odd, unmarked: false, interpr: SeqRE.RecIdent},
    results: [ I,N,I,I, ] // ! should be checked manually
  }, {
    f: `{alt|@_ a}`,
    sign: {reEntryPar: Parity.Any, unmarked: true, interpr: SeqRE.RecIdent},
    results: [ I,M,M,I, ] // ! should be checked manually
  }, {
    f: `{alt|..@_ a}`,
    sign: {reEntryPar: Parity.Even, unmarked: true, interpr: SeqRE.RecIdent},
    results: [ U,M,U,M, ] // ! should be checked manually
  }, {
    f: `{alt|..@._ a}`,
    sign: {reEntryPar: Parity.Odd, unmarked: true, interpr: SeqRE.RecIdent},
    results: [ I,M,M,I, ] // ! should be checked manually
  }
]

zoraBlock(`Testing UCalc.calc with 1 val`, t => {

  seqREV1->Js.Array2.forEach(input => {
    t->block(`given value space for ${input.f}`, t => {
      let actual = valSpc1->Js.Array2.map((a) => UCalc.calc(input.sign, #NestToR(list{a}) ) )

      let expected = input.results
      t->equal(actual, expected, `should be according to ${input.f} results`)
    })
  })
})


// ---------------------------------------
// Samples with 2 values:

let seqREV2: array<seqREV_sample> = [
  {
    f: `{@ a,b}`,
    sign: {reEntryPar: Parity.Any, unmarked: false, interpr: SeqRE.RecInstr},
    results: [ // ! should be checked manually
      U,N,U,U, M,N,I,U, I,N,U,U, I,N,I,U, 
    ]
  }, {
    f: `{..@ a,b}`,
    sign: {reEntryPar: Parity.Even, unmarked: false, interpr: SeqRE.RecInstr},
    results: [ // ! should be checked manually
      U,N,U,U, M,N,I,U, I,N,U,U, I,N,I,U, 
    ]
  }, {
    f: `{..@. a,b}`,
    sign: {reEntryPar: Parity.Odd, unmarked: false, interpr: SeqRE.RecInstr},
    results: [ // ! should be checked manually
      U,N,U,U, M,N,I,U, I,N,U,U, I,N,I,U, 
    ]
  }, {
    f: `{@_ a,b}`,
    sign: {reEntryPar: Parity.Any, unmarked: true, interpr: SeqRE.RecInstr},
    results: [ // ! should be checked manually
      I,M,U,U, N,M,U,I, I,M,U,I, I,M,U,U, 
    ]
  }, {
    f: `{..@_ a,b}`,
    sign: {reEntryPar: Parity.Even, unmarked: true, interpr: SeqRE.RecInstr},
    results: [ // ! should be checked manually
      I,M,U,U, N,M,U,I, I,M,U,I, I,M,U,U, 
    ]
  }, {
    f: `{..@._ a,b}`,
    sign: {reEntryPar: Parity.Odd, unmarked: true, interpr: SeqRE.RecInstr},
    results: [ // ! should be checked manually
      I,M,U,U, N,M,U,I, I,M,U,I, I,M,U,U, 
    ]
  },
  {
    f: `{alt|@ a,b}`,
    sign: {reEntryPar: Parity.Any, unmarked: false, interpr: SeqRE.RecIdent},
    results: [ // ! should be checked manually
      U,N,U,U, M,N,I,U, U,N,U,U, M,N,I,U, 
    ]
  }, {
    f: `{alt|..@ a,b}`,
    sign: {reEntryPar: Parity.Even, unmarked: false, interpr: SeqRE.RecIdent},
    results: [ // ! should be checked manually
      U,N,U,U, M,N,I,U, U,N,U,U, M,N,I,U, 
    ]
  }, {
    f: `{alt|..@. a,b}`,
    sign: {reEntryPar: Parity.Odd, unmarked: false, interpr: SeqRE.RecIdent},
    results: [ // ! should be checked manually
      U,N,U,U, M,N,I,U, U,N,U,U, M,N,I,U, 
    ]
  }, {
    f: `{alt|@_ a,b}`,
    sign: {reEntryPar: Parity.Any, unmarked: true, interpr: SeqRE.RecIdent},
    results: [ // ! should be checked manually
      I,M,M,I, N,M,U,I, I,M,M,I, I,M,U,I, 
    ]
  }, {
    f: `{alt|..@_ a,b}`,
    sign: {reEntryPar: Parity.Even, unmarked: true, interpr: SeqRE.RecIdent},
    results: [ // ! should be checked manually
      I,M,M,I, N,M,U,I, I,M,M,I, I,M,U,I, 
    ]
  }, {
    f: `{alt|..@._ a,b}`,
    sign: {reEntryPar: Parity.Odd, unmarked: true, interpr: SeqRE.RecIdent},
    results: [ // ! should be checked manually
      I,M,M,I, N,M,U,I, I,M,M,I, I,M,U,I, 
    ]
  }
]

zoraBlock(`Testing UCalc.calc with 2 vals`, t => {

  seqREV2->Js.Array2.forEach(input => {
    t->block(`given value space for ${input.f}`, t => {
      let actual = valSpc2->Js.Array2.map(((a,b)) => UCalc.calc(input.sign, #NestToR(list{b,a}) ) )

      let expected = input.results
      t->equal(actual, expected, `should be according to ${input.f} results`)
    })
  })
})


// ---------------------------------------
// Samples with 3 values:

let seqREV3: array<seqREV_sample> = [
  {
    f: `{@ a,b,c}`,
    sign: {reEntryPar: Parity.Any, unmarked: false, interpr: SeqRE.RecInstr},
    results: [ // ! should be checked manually
I,N,I,I, M,N,I,U, U,N,I,U, U,N,I,I, 
N,N,N,N, M,N,I,U, U,N,N,U, I,N,I,N, 
I,N,I,N, M,N,I,U, U,N,I,U, I,N,I,N, 
I,N,N,I, M,N,I,U, U,N,N,U, U,N,I,I, 
    ]
  }, {
    f: `{..@ a,b,c}`,
    sign: {reEntryPar: Parity.Even, unmarked: false, interpr: SeqRE.RecInstr},
    results: [ // ! should be checked manually
U,N,U,U, M,N,I,U, I,N,U,U, I,N,I,U, 
N,N,N,N, M,N,I,U, U,N,N,U, I,N,I,N, 
U,N,U,N, M,N,I,U, I,N,U,U, I,N,I,N, 
U,N,N,U, M,N,I,U, U,N,N,U, I,N,I,U, 
    ]
  }, {
    f: `{..@. a,b,c}`,
    sign: {reEntryPar: Parity.Odd, unmarked: false, interpr: SeqRE.RecInstr},
    results: [ // ! should be checked manually
I,N,I,I, M,N,I,U, U,N,I,U, U,N,I,I, 
N,N,N,N, M,N,I,U, U,N,N,U, I,N,I,N, 
I,N,I,N, M,N,I,U, U,N,I,U, I,N,I,N, 
I,N,N,I, M,N,I,U, U,N,N,U, U,N,I,I, 
    ]
  }, {
    f: `{@_ a,b,c}`,
    sign: {reEntryPar: Parity.Any, unmarked: true, interpr: SeqRE.RecInstr},
    results: [ // ! should be checked manually
I,M,U,U, N,M,U,I, I,M,U,I, I,M,U,U, 
M,M,M,M, N,M,U,I, I,M,M,I, U,M,U,M, 
U,M,U,M, N,M,U,I, I,M,U,I, U,M,U,M, 
U,M,M,U, N,M,U,I, I,M,M,I, I,M,U,U, 
    ]
  }, {
    f: `{..@_ a,b,c}`,
    sign: {reEntryPar: Parity.Even, unmarked: true, interpr: SeqRE.RecInstr},
    results: [ // ! should be checked manually
U,M,I,I, N,M,U,I, U,M,I,I, U,M,U,I, 
M,M,M,M, N,M,U,I, I,M,M,I, U,M,U,M, 
I,M,I,M, N,M,U,I, U,M,I,I, U,M,U,M, 
I,M,M,I, N,M,U,I, I,M,M,I, U,M,U,I, 
    ]
  }, {
    f: `{..@._ a,b,c}`,
    sign: {reEntryPar: Parity.Odd, unmarked: true, interpr: SeqRE.RecInstr},
    results: [ // ! should be checked manually
I,M,U,U, N,M,U,I, I,M,U,I, I,M,U,U, 
M,M,M,M, N,M,U,I, I,M,M,I, U,M,U,M, 
U,M,U,M, N,M,U,I, I,M,U,I, U,M,U,M, 
U,M,M,U, N,M,U,I, I,M,M,I, I,M,U,U, 
    ]
  },
  {
    f: `{alt|@ a,b,c}`,
    sign: {reEntryPar: Parity.Any, unmarked: false, interpr: SeqRE.RecIdent},
    results: [ // ! should be checked manually
I,N,I,I, M,N,I,U, M,N,I,U, I,N,I,I, 
N,N,N,N, M,N,I,U, U,N,N,U, I,N,I,N, 
I,N,I,N, M,N,I,U, M,N,I,U, I,N,I,N, 
I,N,N,I, M,N,I,U, U,N,N,U, I,N,I,I, 
    ]
  }, {
    f: `{alt|..@ a,b,c}`,
    sign: {reEntryPar: Parity.Even, unmarked: false, interpr: SeqRE.RecIdent},
    results: [ // ! should be checked manually
U,N,U,U, M,N,I,U, U,N,U,U, M,N,I,U, 
N,N,N,N, M,N,I,U, U,N,N,U, I,N,I,N, 
U,N,U,N, M,N,I,U, U,N,U,U, I,N,I,N, 
U,N,N,U, M,N,I,U, U,N,N,U, M,N,I,U, 
    ]
  }, {
    f: `{alt|..@. a,b,c}`,
    sign: {reEntryPar: Parity.Odd, unmarked: false, interpr: SeqRE.RecIdent},
    results: [ // ! should be checked manually
I,N,I,I, M,N,I,U, M,N,I,U, I,N,I,I, 
N,N,N,N, M,N,I,U, U,N,N,U, I,N,I,N, 
I,N,I,N, M,N,I,U, M,N,I,U, I,N,I,N, 
I,N,N,I, M,N,I,U, U,N,N,U, I,N,I,I, 
    ]
  }, {
    f: `{alt|@_ a,b,c}`,
    sign: {reEntryPar: Parity.Any, unmarked: true, interpr: SeqRE.RecIdent},
    results: [ // ! should be checked manually
I,M,M,I, N,M,U,I, I,M,M,I, I,M,U,I, 
M,M,M,M, N,M,U,I, I,M,M,I, U,M,U,M, 
M,M,M,M, N,M,U,I, I,M,M,I, U,M,U,M, 
I,M,M,I, N,M,U,I, I,M,M,I, I,M,U,I, 
    ]
  }, {
    f: `{alt|..@_ a,b,c}`,
    sign: {reEntryPar: Parity.Even, unmarked: true, interpr: SeqRE.RecIdent},
    results: [ // ! should be checked manually
U,M,U,M, N,M,U,I, U,M,U,I, U,M,U,M, 
M,M,M,M, N,M,U,I, I,M,M,I, U,M,U,M, 
U,M,U,M, N,M,U,I, U,M,U,I, U,M,U,M, 
M,M,M,M, N,M,U,I, I,M,M,I, U,M,U,M, 
    ]
  }, {
    f: `{alt|..@._ a,b,c}`,
    sign: {reEntryPar: Parity.Odd, unmarked: true, interpr: SeqRE.RecIdent},
    results: [ // ! should be checked manually
I,M,M,I, N,M,U,I, I,M,M,I, I,M,U,I, 
M,M,M,M, N,M,U,I, I,M,M,I, U,M,U,M, 
M,M,M,M, N,M,U,I, I,M,M,I, U,M,U,M, 
I,M,M,I, N,M,U,I, I,M,M,I, I,M,U,I, 
    ]
  }
]

zoraBlock(`Testing UCalc.calc with 3 vals`, t => {

  seqREV3->Js.Array2.forEach(input => {
    t->block(`given value space for ${input.f}`, t => {
      let actual = valSpc3->Js.Array2.map(((a,b,c)) => UCalc.calc(input.sign, #NestToR(list{c,b,a}) ) )

      let expected = input.results
      t->equal(actual, expected, `should be according to ${input.f} results`)
    })
  })
})


// ---------------------------------------
// Samples with empty nestings:

let seqRE_empty: array<(SeqRE.sig, Const.t)> = [
  ({reEntryPar: Parity.Any, unmarked: false, interpr: SeqRE.RecInstr}, I),
  ({reEntryPar: Parity.Even, unmarked: false, interpr: SeqRE.RecInstr}, U),
  ({reEntryPar: Parity.Odd, unmarked: false, interpr: SeqRE.RecInstr}, I),
  ({reEntryPar: Parity.Any, unmarked: true, interpr: SeqRE.RecInstr}, I),
  ({reEntryPar: Parity.Even, unmarked: true, interpr: SeqRE.RecInstr}, U),
  ({reEntryPar: Parity.Odd, unmarked: true, interpr: SeqRE.RecInstr}, I),

  ({reEntryPar: Parity.Any, unmarked: false, interpr: SeqRE.RecIdent}, I),
  ({reEntryPar: Parity.Even, unmarked: false, interpr: SeqRE.RecIdent}, U),
  ({reEntryPar: Parity.Odd, unmarked: false, interpr: SeqRE.RecIdent}, I),
  ({reEntryPar: Parity.Any, unmarked: true, interpr: SeqRE.RecIdent}, I),
  ({reEntryPar: Parity.Even, unmarked: true, interpr: SeqRE.RecIdent}, U),
  ({reEntryPar: Parity.Odd, unmarked: true, interpr: SeqRE.RecIdent}, I),
]

zoraBlock(`Testing empty list cases`, t => {

  seqRE_empty->Js.Array2.forEach(((sign, result)) => {
    t->block(`given empty list`, t => {
      let actual = UCalc.calc(sign, #NestToR(list{}) )

      let expected = result
      t->equal(actual, expected, `should be ${result->Const.showAsKey}`)
    })
  })
})


// ---------------------------------------
// Samples with edge cases:

zoraBlock(`Testing UCalc.calc with >= 4 vals and some edge cases`, t => {
  open Const
  t->block(`given arbitrary nested values`, t => {

    let inputSign: SeqRE.sig = {reEntryPar: Parity.Odd, unmarked: false, interpr: SeqRE.RecInstr}
    let inputVals = list{U,U,N,N}
    let actual = UCalc.calc(inputSign, #NestToR(inputVals))

    let expected = U
    t->equal(actual, expected, `should be ${expected->Const.showAsKey}`)
  })
  t->block(`given arbitrary nested values`, t => {

    let inputSign: SeqRE.sig= {reEntryPar: Parity.Even, unmarked: true, interpr: SeqRE.RecInstr}
    let inputVals = list{N,U,N,N,U}
    let actual = UCalc.calc(inputSign, #NestToR(inputVals))

    let expected = U
    t->equal(actual, expected, `should be ${expected->Const.showAsKey}`)
  })
  t->block(`given arbitrary nested values`, t => {

    let inputSign: SeqRE.sig= {reEntryPar: Parity.Any, unmarked: false, interpr: SeqRE.RecInstr}
    let inputVals = list{I,N,I,N,N,N,I}
    let actual = UCalc.calc(inputSign, #NestToR(inputVals))

    let expected = I
    t->equal(actual, expected, `should be ${expected->Const.showAsKey}`)
  })
  t->block(`given arbitrary nested values`, t => {

    let inputSign: SeqRE.sig= {reEntryPar: Parity.Even, unmarked: true, interpr: SeqRE.RecInstr}
    let inputVals = list{N,N,N,N,N,N,N,N,N,N}
    let actual = UCalc.calc(inputSign, #NestToR(inputVals))

    let expected = I
    t->equal(actual, expected, `should be ${expected->Const.showAsKey}`)
  })
})