open Zora

open DNA


type dna_sample = {f: string, nuim: DNA.t, nmui: DNA.t}

let dnaV0 = [
  makeUnsafe([N]),
  makeUnsafe([U]),
  makeUnsafe([I]),
  makeUnsafe([M]) ]

let dnaV1_01 = {
    f: `{@_ a}`,
    nuim: makeUnsafe([M,U,U,I]),
    nmui: makeUnsafe([U,U,M,I]) }

let dnaV2_01 = {
    f: `((a)b)`,
    nuim: makeUnsafe([N,U,I,M, N,N,I,I, N,U,N,U, N,N,N,N]),
    nmui: makeUnsafe([N,I,N,I, U,N,N,U, U,I,N,M, N,N,N,N]) }

let dnaV3_01 = {
    f: `{@ a,b,c}{@ b,c,a}{@ a,c,b}`,
    nuim: makeUnsafe(
    [ N,U,I,M, U,N,M,I, I,M,N,U, M,I,U,N, 
      U,U,M,M, U,I,M,M, M,M,U,U, M,M,U,I, 
      I,M,I,M, M,I,M,I, I,M,I,M, M,I,M,I, 
      M,M,M,M, M,M,M,M, M,M,M,M, M,M,M,I ]),
    nmui: makeUnsafe(
    [ I,M,U,M, M,U,M,U, U,M,U,M, M,U,M,I, 
      I,M,M,I, M,I,I,M, M,I,I,M, I,M,M,I, 
      N,M,U,I, M,N,I,U, U,I,N,M, I,U,M,N, 
      M,M,M,M, M,M,M,M, M,M,M,M, M,M,M,I ])
    }


zoraBlock(`Testing getSize()`, t => {
  t->block(`given a formDNA`, t => {
    let input = dnaV0[0]
    let actual = input->getSize

    let expected = 0
    t->equal(actual, expected, `should be size 0`)
  })
  t->block(`given a formDNA`, t => {
    let input = dnaV1_01.nuim
    let actual = input->getSize

    let expected = 1
    t->equal(actual, expected, `should be size 1`)
  })
  t->block(`given a formDNA`, t => {
    let input = dnaV2_01.nuim
    let actual = input->getSize

    let expected = 2
    t->equal(actual, expected, `should be size 2`)
  })
  t->block(`given a formDNA`, t => {
    let input = dnaV3_01.nuim
    let actual = input->getSize

    let expected = 3
    t->equal(actual, expected, `should be size 3`)
  })
})

zoraBlock(`Testing isValidLength()`, t => {
  t->block(`given a length as int`, t => {
    let input = -4
    let test = input->isValidLength

    t->notOk(test, `should be power of 4`)
  })
  t->block(`given a length as int`, t => {
    let input = 0
    let test = input->isValidLength

    t->notOk(test, `should be power of 4`)
  })
  t->block(`given a length as int`, t => {
    let input = 1
    let test = input->isValidLength

    t->ok(test, `should be power of 4`)
  })
  t->block(`given a length as int`, t => {
    let input = 4
    let test = input->isValidLength

    t->ok(test, `should be power of 4`)
  })
  t->block(`given a length as int`, t => {
    let input = 8
    let test = input->isValidLength

    t->notOk(test, `should be power of 4`)
  })
  t->block(`given a length as int`, t => {
    let input = 16
    let test = input->isValidLength

    t->ok(test, `should be power of 4`)
  })
  t->block(`given a length as int`, t => {
    let input = 64
    let test = input->isValidLength

    t->ok(test, `should be power of 4`)
  })
})

zoraBlock(`Testing make()`, t => {
  t->block(`given empty array`, t => {
    let input = make([])
    t->optionNone(input, `should be None`)
  })
  t->block(`given an array of invalid size`, t => {
    let input = make([N,M,U])
    t->optionNone(input, `should be None`)
  })
  t->block(`given an array of invalid size`, t => {
    let input = make([N,N,N,N, U,U,U,U])
    t->optionNone(input, `should be None`)
  })
  t->block(`given an array of valid size`, t => {
    let input = make([N,M,U,I])
    let expected = makeUnsafe([N,M,U,I])
    t->optionSome(input, (t, n) => t->equal(n, expected, `should be Some(dna)`))
  })
})


zoraBlock("Testing reorderToNMUI()", t => {
  t->block(`given dna of single value`, t => {
    let input = makeUnsafe([U])
    let actual = input->reorderToNMUI

    let expected = makeUnsafe([U])
    t->equal(actual, expected, `should be the same value`)
  })
  t->block(`given dna of ${dnaV1_01.f} in NUIM ordering`, t => {
    let input = dnaV1_01.nuim
    let actual = input->reorderToNMUI

    let expected = dnaV1_01.nmui
    t->equal(actual, expected, `should be dna of ${dnaV1_01.f} in NMUI ordering`)
  })
  t->block(`given dna of ${dnaV2_01.f} in NUIM ordering`, t => {
    let input = dnaV2_01.nuim
    let actual = input->reorderToNMUI

    let expected = dnaV2_01.nmui
    t->equal(actual, expected, `should be dna of ${dnaV2_01.f} in NMUI ordering`)
  })
  t->block(`given dna of ${dnaV3_01.f} in NUIM ordering`, t => {
    let input = dnaV3_01.nuim
    let actual = input->reorderToNMUI

    let expected = dnaV3_01.nmui
    t->equal(actual, expected, `should be dna of ${dnaV3_01.f} in NMUI ordering`)
  })
})

zoraBlock("Testing fromIntArr()", t => {
  t->block(`given empty array`, t => {
    let input = []
    let actual = input->fromIntArr

    t->optionNone(actual, `should be None`)
  })
  t->block(`given dna of single value`, t => {
    let input = [1]
    let actual = input->fromIntArr

    let expected = Some(makeUnsafe([U]))
    t->equal(actual, expected, `should be U (NUIM ordering)`)
  })
  t->block(`given dna of ${dnaV2_01.f} as ints in NUIM ordering`, t => {
    let input = [0,1,2,3, 0,0,2,2, 0,1,0,1, 0,0,0,0]
    let actual = input->fromIntArr

    let expected = Some(dnaV2_01.nuim)
    t->equal(actual, expected, `should be dna of ${dnaV2_01.f} in NUIM ordering`)
  })
  t->block(`given dna of ${dnaV2_01.f} as ints in NMUI ordering`, t => {
    let input = [0,3,0,3, 2,0,0,2, 2,3,0,1, 0,0,0,0]
    let actual = input->fromIntArr(~sortNMUI=true)

    let expected = Some(dnaV2_01.nuim)
    t->equal(actual, expected, `should be dna of ${dnaV2_01.f} in NUIM ordering`)
  })
})

zoraBlock("Testing fromStrArr()", t => {
  t->block(`given empty array`, t => {
    let input = []
    let actual = input->fromStrArr

    t->optionNone(actual, `should be None`)
  })
  t->block(`given dna of single value`, t => {
    let input = [""]
    let actual = input->fromStrArr

    let expected = Some(makeUnsafe([N]))
    t->equal(actual, expected, `should be N`)
  })
  t->block(`given dna of ${dnaV2_01.f} as strings`, t => {
    let input = ["N","U","I","()", "(())","N","i","(mn)", "N","mn","N","u", ".","N","","N"]
    let actual = input->fromStrArr

    let expected = Some(dnaV2_01.nuim)
    t->equal(actual, expected, `should be dna of ${dnaV2_01.f} in NUIM ordering`)
  })
  t->block(`given dna of single value`, t => {
    let input = ["0","1","2","3"]
    let actual = input->fromStrArr

    let expected = Some(makeUnsafe([N,U,I,M]))
    t->equal(actual, expected, `should be NUIM`)

    // let input = ["0","2","3","1"]
    let input = ["2","3","0","1"]
    let actual = input->fromStrArr(~sortNMUI=true)

    t->equal(actual, expected, `should be NUIM`)
  })
})

zoraBlock("Testing show()", t => {
  t->block(`given dna of single value`, t => {
    let input = makeUnsafe([U])
    let actual = input->show

    let expected = `⁘1`
    t->equal(actual, expected, `should be ${expected}`)
  })
  t->block(`given dna of ${dnaV2_01.f}`, t => {
    let input = dnaV2_01.nuim
    let actual = input->show

    let expected = `⁘0123002201010000`
    t->equal(actual, expected, `should be ${expected}`)
  })
  t->block(`given dna of ${dnaV2_01.f}`, t => {
    let input = dnaV2_01.nuim
    let actual = input->show(~sortNMUI=true, ~spaced=true)

    let expected = `:: 0303 2002 2301 0000`
    t->equal(actual, expected, `should be spaced number string in NMUI ordering: ${expected}`)
  })
  t->block(`given dna of ${dnaV3_01.f}`, t => {
    let input = dnaV3_01.nuim
    let actual = input->show(~spaced=true)

    let expected = `⁘ 0123 1032 2301 3210 1133 1233 3311 3312 2323 3232 2323 3232 3333 3333 3333 3332`
    t->equal(actual, expected, `should be spaced number string: ${expected}`)
  })
})

zoraBlock("Testing raw()", t => {
  t->block(`given dna of single value`, t => {
    let input = makeUnsafe([U])
    let actual = input->raw

    let expected = "U"
    t->equal(actual, expected, `should be ${expected}`)
  })
  t->block(`given dna of ${dnaV2_01.f}`, t => {
    let input = dnaV2_01.nuim
    let actual = input->raw

    let expected = "NUIMNNIINUNUNNNN"
    t->equal(actual, expected, `should be ${expected}`)
  })
})


zoraBlock("Testing inv()", t => {
  t->block(`given dna of single value`, t => {
    let input = makeUnsafe([U])
    let actual = input->inv

    let expected = makeUnsafe([I])
    t->equal(actual, expected, `should be [I]`)
  })
  t->block(`given dna of ${dnaV2_01.f}`, t => {
    let input = dnaV2_01.nuim
    let actual = input->inv

    let expected = makeUnsafe([M,I,U,N, M,M,U,U, M,I,M,I, M,M,M,M])
    t->equal(actual, expected, `should be inversion of input`)
  })
})

zoraBlock("Testing rel()", t => {
  t->block(`given 2 equal singleton dnas`, t => {
    let input_a = makeUnsafe([N])
    let input_b = makeUnsafe([N])
    let actual = rel(input_a, input_b)

    let expected = makeUnsafe([N])
    t->equal(actual, expected, `should be same as either input`)
  })
  t->block(`given 2 different singleton dnas`, t => {
    let input_a = makeUnsafe([I])
    let input_b = makeUnsafe([U])
    let actual = rel(input_a, input_b)

    let expected = makeUnsafe([M])
    t->equal(actual, expected, `should be M`)
  })
  t->block(`given a singleton and a larger dna`, t => {
    let input_a = makeUnsafe([I])
    let input_b = makeUnsafe([U,N,M,N])
    let actual = rel(input_a, input_b)

    let expected = makeUnsafe([M,N,M,N])
    t->equal(actual, expected, `should be [M,N,M,N]`)
  })
  t->block(`given a len 3 and a len 2 dna`, t => {
    let input_a = makeUnsafe([N,M,N,U, N,N,N,N, U,I,U,I, M,I,U,N])
    let input_b = makeUnsafe([I,N,N,U])
    let actual = rel(input_a, input_b)

    let expected = makeUnsafe([I,M,N,U, N,N,N,N, U,I,U,I, M,I,U,N])
    t->equal(actual, expected, `should be [I,M,N,U, N,N,N,N, U,I,U,I, M,I,U,N]`)
  })
  t->block(`given two dnas of equal length`, t => {
    let input_a = makeUnsafe([N,M,N,U])
    let input_b = makeUnsafe([I,N,U,N])
    let actual = rel(input_a, input_b)

    let expected = makeUnsafe([I,M,U,U])
    t->equal(actual, expected, `should be [I,M,U,U]`)
  })
  t->block(`given dna of ${dnaV3_01.f} as input a and ${dnaV2_01.f} as input b`, t => {
    let input_a = dnaV3_01.nuim
    let input_b = dnaV2_01.nuim
    let actual = rel(input_a, input_b)

    let expected = makeUnsafe([ N,U,I,M, U,N,M,I, I,M,N,U, M,I,U,N, // <- only this part changed from a
                     U,U,M,M, U,I,M,M, M,M,U,U, M,M,U,I, 
                     I,M,I,M, M,I,M,I, I,M,I,M, M,I,M,I, 
                     M,M,M,M, M,M,M,M, M,M,M,M, M,M,M,I ])
    t->equal(actual, expected, `should be the relation of dna b with the first n values of dna a, where n is the size of dna b`)
  })
})


let dnaPerm_samples = [
  {"input": makeUnsafe([U]),
   "perms": [
     ([], makeUnsafe([U])),
   ]},
  {"input": makeUnsafe([M,U,U,I]),
   "perms": [
     ([0], makeUnsafe([M,U,U,I])),
   ]},
  {"input": makeUnsafe([N,U,I,M, N,N,I,I, N,U,N,U, N,N,N,N]),
   "perms": [
     ([0,1], makeUnsafe([N,U,I,M, N,N,I,I, N,U,N,U, N,N,N,N])),
     ([1,0], makeUnsafe([N,N,N,N, U,N,U,N, I,I,N,N, M,I,U,N])),
   ]},
  {"input": makeUnsafe(
      [ N,U,I,M, U,N,M,I, I,M,N,U, M,I,U,N, 
        U,U,M,M, U,I,M,M, M,M,U,U, M,M,U,I, 
        I,M,I,M, M,I,M,I, I,M,I,M, M,I,M,I, 
        M,M,M,M, M,M,M,M, M,M,M,M, M,M,M,I ]),
   "perms": [
     ([0,1,2], makeUnsafe(
      [ N,U,I,M, U,N,M,I, I,M,N,U, M,I,U,N, 
        U,U,M,M, U,I,M,M, M,M,U,U, M,M,U,I, 
        I,M,I,M, M,I,M,I, I,M,I,M, M,I,M,I, 
        M,M,M,M, M,M,M,M, M,M,M,M, M,M,M,I ])),
     ([2,1,0], makeUnsafe(
      [ N,U,I,M, U,U,M,M, I,M,I,M, M,M,M,M, 
        U,U,M,M, N,I,I,M, M,M,M,M, I,M,I,M, 
        I,M,I,M, M,M,M,M, N,U,I,M, U,U,M,M, 
        M,M,M,M, I,M,I,M, U,U,M,M, N,I,I,I ])),
     ([1,2,0], makeUnsafe(  //  FAILS
      [ N,U,I,M, U,U,M,M, I,M,I,M, M,M,M,M, 
        U,U,M,M, N,I,I,M, M,M,M,M, I,M,I,M, 
        I,M,I,M, M,M,M,M, N,U,I,M, U,U,M,M, 
        M,M,M,M, I,M,I,M, U,U,M,M, N,I,I,I ])),
     ([0,2,1], makeUnsafe(
      [ N,U,I,M, U,N,M,I, I,M,N,U, M,I,U,N, 
        U,U,M,M, U,I,M,M, M,M,U,U, M,M,U,I, 
        I,M,I,M, M,I,M,I, I,M,I,M, M,I,M,I, 
        M,M,M,M, M,M,M,M, M,M,M,M, M,M,M,I ])),
     ([2,0,1], makeUnsafe(  // FAILS
      [ N,U,I,M, U,U,M,M, I,M,I,M, M,M,M,M, 
        U,N,M,I, U,I,M,M, M,I,M,I, M,M,M,M, 
        I,M,N,U, M,M,U,U, I,M,I,M, M,M,M,M, 
        M,I,U,N, M,M,U,I, M,I,M,I, M,M,M,I ])),
     ([1,0,2], makeUnsafe(
      [ N,U,I,M, U,U,M,M, I,M,I,M, M,M,M,M, 
        U,N,M,I, U,I,M,M, M,I,M,I, M,M,M,M, 
        I,M,N,U, M,M,U,U, I,M,I,M, M,M,M,M, 
        M,I,U,N, M,M,U,I, M,I,M,I, M,M,M,I ])),
      ]},
]

zoraBlock(`Testing Perspective.make`, t => {
  dnaPerm_samples->Js.Array2.forEach((sample) =>
    t->block(`given dna and an int array`, t => {
      let dna = sample["input"]
      sample["perms"]->Js.Array2.forEach(((permOrder,permDNA)) =>
        try {
          let actual = dna->Perspective.permute(permOrder)
          let expected = Perspective.makeUnsafe(permOrder, permDNA)

          t->optionSome(actual, (t, psp) => {
              Js.log2(psp.permOrder, psp.dna->DNA.show)
              t->equal(psp, expected, `should be identical to input dna`)
            })
        } catch {
        // | Helper.Unreachable => t->fail(`Exception should not be possible!`)
        | Helper.IndexExc(msg,idx) => {
          Js.log2(msg, idx)
          t->fail(msg)
        }
        | Helper.Debug(msg) => {
          Js.log(msg)
          t->fail(msg)
        }
        | e => {
            Js.log(e)
            t->fail("Unknown Error!")
          }
        }
      )
    })
  )
})