open Zora

open Calc
open Calc.Const


// [Const] tests

zoraBlock("Testing toInt()", t => {
  t->block("given [const] array in NMUI ordering", t => {

    let input = [N,M,U,I] // in NMUI
    let actual = input->Js.Array2.map((c) => c->toInt(~sortNMUI=true))

    let expected = [0,1,2,3] // as NMUI indices
    t->equal(actual, expected, "should be int array with corresponding NMUI indices")
  })
  t->block("given [const] array in NUIM ordering", t => {

    let input = [N,U,I,M] // in NUIM
    let actual = input->Js.Array2.map((c) => c->toInt)

    let expected = [0,1,2,3] // as NUIM indices
    t->equal(actual, expected, "should be int array with corresponding NUIM indices")
  })
})

zoraBlock("Testing fromInt()", t => {
  t->block("given int array in NMUI ordering", t => {

    let input = [0,1,2,3]
    let actual = input->Js.Array2.map((c) => 
      c->fromInt(~sortNMUI=true)->Belt.Option.getUnsafe)

    let expected = [N,M,U,I]
    t->equal(actual, expected, "should be [const] array with corresponding NMUI symbols")
  })
  t->block("given int array in NUIM ordering", t => {

    let input = [0,1,2,3]
    let actual = input->Js.Array2.map((c) => 
      c->fromInt->Belt.Option.getUnsafe)

    let expected = [N,U,I,M]
    t->equal(actual, expected, "should be [const] array with corresponding NUIM symbols")
  })
})

zoraBlock("Testing inv() and rel()", t => {
  let input = [
    (N,N),(N,U),(N,I),(N,M),
    (U,N),(U,U),(U,I),(U,M),
    (I,N),(I,U),(I,I),(I,M),
    (M,N),(M,U),(M,I),(M,M),
  ]
  t->block("should be OR relation according to calculus", t => {

    let actual = input->Js.Array2.map(((a,b)) => rel(a,b))

    let expected = [N,U,I,M, U,U,M,M, I,M,I,M, M,M,M,M]
    t->equal(actual, expected, "should be binary relation")
  })
  t->block("should be AND relation according to calculus", t => {

    let actual = input->Js.Array2.map(((a,b)) => inv(rel( inv(a),inv(b) )) )

    let expected = [N,N,N,N, N,U,N,U, N,N,I,I, N,U,I,M]
    t->equal(actual, expected, "should be binary conjunction")
  })
})


// [Nested] tests

zoraBlock(`Testing Nested.show()`, t => {
  t->block(`given #NestToL(…)`, t => {
    let input = #NestToL(list{N,U,I,M})
    let actual = input->Nested.show

    let expected = `((((${N->show})${U->show})${I->show})${M->show})`
    t->equal(actual, expected, `should be ((((N)U)I)M)`)
  })
  t->block(`given #NestToR(…)`, t => {
    let input = #NestToR(list{N,U,I,M})
    let actual = input->Nested.show

    let expected = `(${N->show}(${U->show}(${I->show}(${M->show}))))`
    t->equal(actual, expected, `should be (N(U(I(M))))`)
  })
})

zoraBlock(`Testing Nested.reduceByCrossing()`, t => {
  // * needs more thorough testing
  t->block(`given #NestToL(…)`, t => {
    let input = #NestToL(list{N,N, I, N,N, M, N,N})
    let actual = input->Nested.reduceByCrossingL

    let expected = #NestToL(list{I,M})
    t->equal(actual, expected, `should be input without N,N sequence`)
  })
  t->block(`given #NestToR(…)`, t => {
    let input = #NestToR(list{N,N, I, N,N, M, N,N})
    let actual = input->Nested.reduceByCrossingR

    let expected = #NestToR(list{I,M})
    t->equal(actual, expected, `should be input without N,N sequence`)
  })
})

zoraBlock(`Testing Nested.reduceByCalling()`, t => {
  // * needs more thorough testing
  t->block(`given #NestToL(…)`, t => {
    let input = #NestToL(list{N,M,U,I})
    let actual = input->Nested.reduceByCallingL

    let expected = #NestToL(list{M,I})
    t->equal(actual, expected, `should be input reduced be law of calling from right`)
  })
  t->block(`given #NestToR(…)`, t => {
    let input = #NestToR(list{N,M,U,I})
    let actual = input->Nested.reduceByCallingR

    let expected = #NestToR(list{N,M})
    t->equal(actual, expected, `should be input reduced be law of calling from left`)
  })
})

zoraBlock(`Testing Nested.calc()`, t => {
  // * needs more thorough testing
  t->block(`given #NestToL(…)`, t => {
    let input = #NestToL(list{N,M,U,I})
    let actual = input->Nested.calcL

    let expected = U
    t->equal(actual, expected, `should be U`)
  })
  t->block(`given #NestToR(…)`, t => {
    let input = #NestToR(list{N,M,U,I})
    let actual = input->Nested.calcR

    let expected = M
    t->equal(actual, expected, `should be M`)
  })
})