
exception Unreachable // this exception should never be thrown if I’ve done my job correctly

let cleanStr = (str) => {
  // if (str has `"`, "/", `\`, etc.) { maybe purge chars or return None }
  str
}

let hasDecimal = (x) => Belt.Float.fromInt(Belt.Float.toInt(x)) < x


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
  type t<'a> = list<'a>

  /**
   * Monadic operation (>>=) on lists like in Haskell
   */
  let rec fmap = (l: t<'a>, fn: (('a) => t<'b>)): t<'b> => {
    switch l {
    | list{} => list{}
    | list{x, ...xs} => Belt.List.concat(x->fn, xs->fmap(fn))
    }
  }

  /**
   * Like liftM2 from Haskell’s Control.Monad.liftM2
   */
  let liftM2 = (mf2: ('a => 'b => 'c), ma: t<'a>, mb: t<'b>): t<'c> =>
    ma->fmap((x1) => mb->fmap((x2) => list{mf2(x1, x2)}))

  /**
   * Cartesian product for lists (like list-comprehension in Haskell)
   */
  let cartesProd = (l: t<'a>, dim: int) => {
    let rec fn = (l: t<'a>, seq: t<'a>, n: int): t<'b> => {
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