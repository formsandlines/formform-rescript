open Zora

open Value

open Calc.Const

type c = Calc.Const.t


// ------------------------
// VPoint tests

zoraBlock(`Testing VPoint.show`, t => {
  t->block(`given an empty VPoint`, t => {
    let input = []

    let expected = "[]"
    t->equal(input->VPoint.show, expected, `should be ${expected}`)
    let expected = ""
    t->equal(input->VPoint.showAsKey, expected, `should be ${expected}`)
  })
  t->block(`given a singleton VPoint`, t => {
    let input = [N]

    let expected = "[N]"
    t->equal(input->VPoint.show, expected, `should be ${expected}`)
    let expected = "N"
    t->equal(input->VPoint.showAsKey, expected, `should be ${expected}`)
  })
  t->block(`given a VPoint`, t => {
    let input = [N,U,I,M,I]

    let expected = "[N,U,I,M,I]"
    t->equal(input->VPoint.show, expected, `should be ${expected}`)
    let expected = "NUIMI"
    t->equal(input->VPoint.showAsKey, expected, `should be ${expected}`)
  })
})

zoraBlock(`Testing VPoint.tFromStr`, t => {
  t->block(`given an empty string`, t => {
    let input = ""
    let actual = input->VPoint.tFromStr

    let expected: option<VPoint.t> = Some([])
    t->equal(actual, expected, `should be some empty array`)
  })

  t->block(`given a const char`, t => {
    let input = "N"
    let actual = input->VPoint.tFromStr

    let expected: option<VPoint.t> = Some([N])
    t->equal(actual, expected, `should be some array [N]`)
  })
  t->block(`given a const string`, t => {
    let input = "NUIMI"
    let actual = input->VPoint.tFromStr

    let expected: option<VPoint.t> = Some([N,U,I,M,I])
    t->equal(actual, expected, `should be some array [N,U,I,M,I]`)
  })

  t->block(`given an int char`, t => {
    let input = "0"
    let actual = input->VPoint.tFromStr

    let expected: option<VPoint.t> = Some([N])
    t->equal(actual, expected, `should be some array [N]`)
  })
  t->block(`given an int string`, t => {
    let input = "01232"
    let actual = input->VPoint.tFromStr

    let expected: option<VPoint.t> = Some([N,U,I,M,I])
    t->equal(actual, expected, `should be some array [N,U,I,M,I]`)
  })

  t->block(`given an invalid char`, t => {
    let input = "O"
    let actual = input->VPoint.tFromStr

    let expected: option<VPoint.t> = None
    t->equal(actual, expected, `should be None`)
  })
  t->block(`given an invalid string`, t => {
    let input = "M_"
    let actual = input->VPoint.tFromStr

    let expected: option<VPoint.t> = None
    t->equal(actual, expected, `should be None`)
  })
})


// ------------------------
// VSpace tests

zoraBlock(`Testing VSpace.make`, t => {
  t->block(`given dimension 0`, t => {
    let input = 0
    let actual = input->VSpace.make

    let expected = [[N]]
    t->equal(actual->VSpace.getPoints, expected, `should be a VSpace of size according to dimension`)
  })
  t->block(`given dimension 1`, t => {
    let input = 1
    let actual = input->VSpace.make

    let expected = [[N],[U],[I],[M]]
    t->equal(actual->VSpace.getPoints, expected, `should be a VSpace of size according to dimension`)
  })
  t->block(`given dimension 2`, t => {
    let input = 2
    let actual = input->VSpace.make

    let expected = [[N,N],[N,U],[N,I],[N,M],
                    [U,N],[U,U],[U,I],[U,M],
                    [I,N],[I,U],[I,I],[I,M],
                    [M,N],[M,U],[M,I],[M,M]]
    t->equal(actual->VSpace.getPoints, expected, `should be a VSpace of size according to dimension`)
  })
})


let listRel = (vp) => vp->Belt.Array.reduce(N, ((c1,c2) => Calc.Const.rel(c1,c2))) 

zoraBlock(`Testing VSpace.toDNA`, t => {
  t->block(`given a dim. 0 VSpace`, t => {
    let input = VSpace.make(0)
    let actual = input->VSpace.toDNA(listRel)

    let expected = DNA.makeUnsafe([N])
    t->equal(actual, expected, `should be a DNA ${expected->DNA.show}`)
  })
  t->block(`given a dim. 1 VSpace`, t => {
    let input = VSpace.make(1)
    let actual = input->VSpace.toDNA(listRel)

    let expected = DNA.makeUnsafe([M,I,U,N])
    t->equal(actual, expected, `should be a DNA ${expected->DNA.show}`)
  })
  t->block(`given a dim. 2 VSpace`, t => {
    let input = VSpace.make(2)
    let actual = input->VSpace.toDNA(listRel)

    let expected = DNA.makeUnsafe([M,M,M,M, M,I,M,I, M,M,U,U, M,I,U,N])
    t->equal(actual, expected, `should be a DNA ${expected->DNA.show}`)
  })
})


// ------------------------
// VMap tests

let map_n = (_) => N

zoraBlock(`Testing VMap.make`, t => {
  t->block(`given a VSpace`, t => {
    let input = VSpace.make(0)
    let actual = input->VMap.make(map_n)

    let expected = VMap.makeUnsafe_Cell(N)
    t->equal(actual, expected, `should be a valid VMap`)

    let expected = "<N>"
    t->equal(actual->VMap.show, expected, `should be ${expected}`)
  })
  t->block(`given a VSpace`, t => {
    let input = VSpace.make(1)
    let actual = input->VMap.make(map_n)

    let expected = VMap.makeUnsafe_Map([ 
      (N, VMap.makeUnsafe_Cell(N)),
      (U, VMap.makeUnsafe_Cell(N)),
      (I, VMap.makeUnsafe_Cell(N)),
      (M, VMap.makeUnsafe_Cell(N)),
    ])
    t->equal(actual, expected, `should be a valid VMap`)

    let expected = `[N: <N>, U: <N>, I: <N>, M: <N>]`
    t->equal(actual->VMap.show, expected, `should be ${expected}`)
  })
  t->block(`given a VSpace`, t => {
    let input = VSpace.make(2)
    let actual = input->VMap.make(map_n)

    let expected = VMap.makeUnsafe_Map([
      (N, VMap.makeUnsafe_Map([
        (N, VMap.makeUnsafe_Cell(N)),
        (U, VMap.makeUnsafe_Cell(N)),
        (I, VMap.makeUnsafe_Cell(N)),
        (M, VMap.makeUnsafe_Cell(N)),
      ])),
      (U, VMap.makeUnsafe_Map([
        (N, VMap.makeUnsafe_Cell(N)),
        (U, VMap.makeUnsafe_Cell(N)),
        (I, VMap.makeUnsafe_Cell(N)),
        (M, VMap.makeUnsafe_Cell(N)),
      ])),
      (I, VMap.makeUnsafe_Map([
        (N, VMap.makeUnsafe_Cell(N)),
        (U, VMap.makeUnsafe_Cell(N)),
        (I, VMap.makeUnsafe_Cell(N)),
        (M, VMap.makeUnsafe_Cell(N)),
      ])),
      (M, VMap.makeUnsafe_Map([
        (N, VMap.makeUnsafe_Cell(N)),
        (U, VMap.makeUnsafe_Cell(N)),
        (I, VMap.makeUnsafe_Cell(N)),
        (M, VMap.makeUnsafe_Cell(N)),
      ]))
    ])
    t->equal(actual, expected, `should be a valid VMap`)

    let expected = `[
  N: [N: <N>, U: <N>, I: <N>, M: <N>], 
  U: [N: <N>, U: <N>, I: <N>, M: <N>], 
  I: [N: <N>, U: <N>, I: <N>, M: <N>], 
  M: [N: <N>, U: <N>, I: <N>, M: <N>]
]`
    t->equal(actual->VMap.show, expected, `should be ${expected}`)
  })
  t->block(`given a VSpace`, t => {
    let input = VSpace.make(3)
    let actual = input->VMap.make(map_n)

    let expected = VMap.makeUnsafe_Map([
      (N, VMap.makeUnsafe_Map([
        (N, VMap.makeUnsafe_Map([
          (N, VMap.makeUnsafe_Cell(N)),
          (U, VMap.makeUnsafe_Cell(N)),
          (I, VMap.makeUnsafe_Cell(N)),
          (M, VMap.makeUnsafe_Cell(N)),
        ])),
        (U, VMap.makeUnsafe_Map([
          (N, VMap.makeUnsafe_Cell(N)),
          (U, VMap.makeUnsafe_Cell(N)),
          (I, VMap.makeUnsafe_Cell(N)),
          (M, VMap.makeUnsafe_Cell(N)),
        ])),
        (I, VMap.makeUnsafe_Map([
          (N, VMap.makeUnsafe_Cell(N)),
          (U, VMap.makeUnsafe_Cell(N)),
          (I, VMap.makeUnsafe_Cell(N)),
          (M, VMap.makeUnsafe_Cell(N)),
        ])),
        (M, VMap.makeUnsafe_Map([
          (N, VMap.makeUnsafe_Cell(N)),
          (U, VMap.makeUnsafe_Cell(N)),
          (I, VMap.makeUnsafe_Cell(N)),
          (M, VMap.makeUnsafe_Cell(N)),
        ]))
      ])),
      (U, VMap.makeUnsafe_Map([
        (N, VMap.makeUnsafe_Map([
          (N, VMap.makeUnsafe_Cell(N)),
          (U, VMap.makeUnsafe_Cell(N)),
          (I, VMap.makeUnsafe_Cell(N)),
          (M, VMap.makeUnsafe_Cell(N)),
        ])),
        (U, VMap.makeUnsafe_Map([
          (N, VMap.makeUnsafe_Cell(N)),
          (U, VMap.makeUnsafe_Cell(N)),
          (I, VMap.makeUnsafe_Cell(N)),
          (M, VMap.makeUnsafe_Cell(N)),
        ])),
        (I, VMap.makeUnsafe_Map([
          (N, VMap.makeUnsafe_Cell(N)),
          (U, VMap.makeUnsafe_Cell(N)),
          (I, VMap.makeUnsafe_Cell(N)),
          (M, VMap.makeUnsafe_Cell(N)),
        ])),
        (M, VMap.makeUnsafe_Map([
          (N, VMap.makeUnsafe_Cell(N)),
          (U, VMap.makeUnsafe_Cell(N)),
          (I, VMap.makeUnsafe_Cell(N)),
          (M, VMap.makeUnsafe_Cell(N)),
        ]))
      ])),
      (I, VMap.makeUnsafe_Map([
        (N, VMap.makeUnsafe_Map([
          (N, VMap.makeUnsafe_Cell(N)),
          (U, VMap.makeUnsafe_Cell(N)),
          (I, VMap.makeUnsafe_Cell(N)),
          (M, VMap.makeUnsafe_Cell(N)),
        ])),
        (U, VMap.makeUnsafe_Map([
          (N, VMap.makeUnsafe_Cell(N)),
          (U, VMap.makeUnsafe_Cell(N)),
          (I, VMap.makeUnsafe_Cell(N)),
          (M, VMap.makeUnsafe_Cell(N)),
        ])),
        (I, VMap.makeUnsafe_Map([
          (N, VMap.makeUnsafe_Cell(N)),
          (U, VMap.makeUnsafe_Cell(N)),
          (I, VMap.makeUnsafe_Cell(N)),
          (M, VMap.makeUnsafe_Cell(N)),
        ])),
        (M, VMap.makeUnsafe_Map([
          (N, VMap.makeUnsafe_Cell(N)),
          (U, VMap.makeUnsafe_Cell(N)),
          (I, VMap.makeUnsafe_Cell(N)),
          (M, VMap.makeUnsafe_Cell(N)),
        ]))
      ])),
      (M, VMap.makeUnsafe_Map([
        (N, VMap.makeUnsafe_Map([
          (N, VMap.makeUnsafe_Cell(N)),
          (U, VMap.makeUnsafe_Cell(N)),
          (I, VMap.makeUnsafe_Cell(N)),
          (M, VMap.makeUnsafe_Cell(N)),
        ])),
        (U, VMap.makeUnsafe_Map([
          (N, VMap.makeUnsafe_Cell(N)),
          (U, VMap.makeUnsafe_Cell(N)),
          (I, VMap.makeUnsafe_Cell(N)),
          (M, VMap.makeUnsafe_Cell(N)),
        ])),
        (I, VMap.makeUnsafe_Map([
          (N, VMap.makeUnsafe_Cell(N)),
          (U, VMap.makeUnsafe_Cell(N)),
          (I, VMap.makeUnsafe_Cell(N)),
          (M, VMap.makeUnsafe_Cell(N)),
        ])),
        (M, VMap.makeUnsafe_Map([
          (N, VMap.makeUnsafe_Cell(N)),
          (U, VMap.makeUnsafe_Cell(N)),
          (I, VMap.makeUnsafe_Cell(N)),
          (M, VMap.makeUnsafe_Cell(N)),
        ]))
      ])),
    ])
    t->equal(actual, expected, `should be a valid VMap`)

    let expected = `[
  N: [
    N: [N: <N>, U: <N>, I: <N>, M: <N>], 
    U: [N: <N>, U: <N>, I: <N>, M: <N>], 
    I: [N: <N>, U: <N>, I: <N>, M: <N>], 
    M: [N: <N>, U: <N>, I: <N>, M: <N>]
  ], 
  U: [
    N: [N: <N>, U: <N>, I: <N>, M: <N>], 
    U: [N: <N>, U: <N>, I: <N>, M: <N>], 
    I: [N: <N>, U: <N>, I: <N>, M: <N>], 
    M: [N: <N>, U: <N>, I: <N>, M: <N>]
  ], 
  I: [
    N: [N: <N>, U: <N>, I: <N>, M: <N>], 
    U: [N: <N>, U: <N>, I: <N>, M: <N>], 
    I: [N: <N>, U: <N>, I: <N>, M: <N>], 
    M: [N: <N>, U: <N>, I: <N>, M: <N>]
  ], 
  M: [
    N: [N: <N>, U: <N>, I: <N>, M: <N>], 
    U: [N: <N>, U: <N>, I: <N>, M: <N>], 
    I: [N: <N>, U: <N>, I: <N>, M: <N>], 
    M: [N: <N>, U: <N>, I: <N>, M: <N>]
  ]
]`
    t->equal(actual->VMap.show, expected, `should be ${expected}`)
  })
})

zoraBlock(`Testing VMap.fromDNA`, t => {
  t->block(`given a DNA`, t => {
    let input = DNA.makeUnsafe([U])
    let actual = input->VMap.fromDNA

    let expected = `<U>`
    t->equal(actual->VMap.show, expected, `should be ${expected}`)
  })
  t->block(`given a DNA`, t => {
    let input = DNA.makeUnsafe([M,I,U,N])
    let actual = input->VMap.fromDNA

    let expected = `[N: <N>, U: <U>, I: <I>, M: <M>]`
    t->equal(actual->VMap.show, expected, `should be ${expected}`)
  })
  t->block(`given a DNA`, t => {
    let input = DNA.makeUnsafe([N,U,I,M, N,N,I,I, N,U,N,U, N,N,N,N])
    let actual = input->VMap.fromDNA

    let expected = `[
  N: [N: <N>, U: <N>, I: <N>, M: <N>], 
  U: [N: <U>, U: <N>, I: <U>, M: <N>], 
  I: [N: <I>, U: <I>, I: <N>, M: <N>], 
  M: [N: <M>, U: <I>, I: <U>, M: <N>]
]`
    t->equal(actual->VMap.show, expected, `should be ${expected}`)
  })
  t->block(`given a DNA`, t => {
    let input = DNA.makeUnsafe(
      [ N,U,I,M, U,N,M,I, I,M,N,U, M,I,U,N, 
        U,U,M,M, U,I,M,M, M,M,U,U, M,M,U,I, 
        I,M,I,M, M,I,M,I, I,M,I,M, M,I,M,I, 
        M,M,M,M, M,M,M,M, M,M,M,M, M,M,M,I ])
    let actual = input->VMap.fromDNA

    let expected = `[
  N: [
    N: [N: <I>, U: <M>, I: <M>, M: <M>], 
    U: [N: <M>, U: <M>, I: <M>, M: <M>], 
    I: [N: <M>, U: <M>, I: <M>, M: <M>], 
    M: [N: <M>, U: <M>, I: <M>, M: <M>]
  ], 
  U: [
    N: [N: <I>, U: <M>, I: <I>, M: <M>], 
    U: [N: <M>, U: <I>, I: <M>, M: <I>], 
    I: [N: <I>, U: <M>, I: <I>, M: <M>], 
    M: [N: <M>, U: <I>, I: <M>, M: <I>]
  ], 
  I: [
    N: [N: <I>, U: <U>, I: <M>, M: <M>], 
    U: [N: <U>, U: <U>, I: <M>, M: <M>], 
    I: [N: <M>, U: <M>, I: <I>, M: <U>], 
    M: [N: <M>, U: <M>, I: <U>, M: <U>]
  ], 
  M: [
    N: [N: <N>, U: <U>, I: <I>, M: <M>], 
    U: [N: <U>, U: <N>, I: <M>, M: <I>], 
    I: [N: <I>, U: <M>, I: <N>, M: <U>], 
    M: [N: <M>, U: <I>, I: <U>, M: <N>]
  ]
]`
    t->equal(actual->VMap.show, expected, `should be ${expected}`)
  })
})