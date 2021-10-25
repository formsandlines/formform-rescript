open Zora
open Helper

let nBase_samples_valid = [
  ("1330",4, 124),
  ("3101301",4, 13425),
  ("48946",10, 48946),
  ("0",9, 0),
  ("1001000011001101001100011000110010101000111",2, 4975342937415)
]

zoraBlock(`Testing intFromStrWithRadix`, t => {
  nBase_samples_valid->Js.Array2.forEach(((input,base,expected)) =>
    t->block(`given a numebr ${input} and base ${base->Belt.Int.toString}`, t => {
      let actual = input->intFromStrWithRadix(~radix=base)

      t->optionSome(actual, (t, result) => t->equal(result, expected, `should be a correct number`))
    })
  )
})