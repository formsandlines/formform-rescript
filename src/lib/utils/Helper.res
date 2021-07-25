module Parity = {
  type t = Even | Odd | Any

  let show = (parity: t) => switch parity {
  | Even => "2r"
  | Odd  => "2r+1"
  | Any  => ""
  }

}

module ListMonads = {
  /**
   * Monadic operation (>>=) on lists like in Haskell
   */
  let rec fmap = (l: list<'a>, fn: (('a) => list<'b>)): list<'b> => {
    switch l {
    | list{} => list{}
    | list{x, ...xs} => Belt.List.concat(x->fn, xs->fmap(fn))
    }
  }

  /**
   * Cartesian product for lists (like list-comprehension in Haskell)
   */
  let cartesProd = (l: list<'a>, dim: int) => {
    let rec fn = (l: list<'a>, seq: list<'a>, n: int): list<'b> => {
      if n > 0 {
        fmap(l, (x => fn(l, seq->Belt.List.concat(list{x}), n-1 )))
      } else {
        list{ seq }
      }
    }
    l->fn(list{}, dim)
  }
}

let common_vars = "abcdefghijklmnopqrstuvwxyz"->Js.String2.split("")