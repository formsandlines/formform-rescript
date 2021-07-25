module Parity = {
  type t = Even | Odd | Any

  let show = (parity: t) => switch parity {
  | Even => "2r"
  | Odd  => "2r+1"
  | Any  => ""
  }

}

module ListExtensions = {
  /**
   * Prepends Element before each element of a list
   */
  let rec prependToAll = (l: list<'a>, sep: 'a): list<'a> =>
    switch l {
    | list{} => list{}
    | list{x, ...xs} => list{sep, x, ...(xs->prependToAll(sep))}
    }

  /**
   * Inserts Element between Elements of a list
   */
  let intersperse = (l: list<'a>, sep: 'a): list<'a> =>
    switch l {
    | list{} => list{}
    | list{x, ...xs} => list{x, ...(xs->prependToAll(sep))}
    }

  /**
   * Inserts list between lists
   */
  let intercalate = (l1: list<list<'a>>, l2: list<'a>): list<'a> =>
    Belt.List.flatten(l1->intersperse(l2))

  /**
   * Joins strings in a list to a single string
   */
  let rec join = (l: list<string>): string =>
    switch l {
    | list{} => ""
    | list{x, ...xs} => x ++ xs->join
    }

  /**
   * Joins strings in a list to a single string with seperator in between
   */
  let joinWith = (l: list<string>, sep: string): string =>
    l->intersperse(sep)->join
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