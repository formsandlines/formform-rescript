module Const = {
  // ===================================================================
  // [Const]: constant -> simple values of the tetravalent FORM calculus
  // 
  // Note: values are in NUIM ordering, different from uFORM iFORM
  //   This is because this ordering has some beneficial properties
  // ===================================================================

  @deriving(jsConverter) // generates Converters to/from Enum index
  type t = N | U | I | M

  /**
   * Generates notation for [Const]
   */
  let show = (x: t) => switch x {
  | N => "."
  | U => "u"
  | I => "i"
  | M => "m"
  }
  let showAsKey = (x: t) => switch x {
  | N => "N"
  | U => "U"
  | I => "I"
  | M => "M"
  }

  /**
   * Output index from [Const] in NMUI ordering (used by uFORM iFORM)
   */
  let toInt = (~sortNMUI=false, c: t): int => {
    // output constants in NMUI ordering (used by uFORM iFORM)
    let n = tToJs(c)
    switch n {
    | 0 => n
    | 1 => sortNMUI ? 2 : n
    | 2 => sortNMUI ? 3 : n
    | 3 => sortNMUI ? 1 : n
    | _ => -99
    }
  }

  /**
   * Output [Const] from index in NMUI ordering (used by uFORM iFORM)
   */
  let fromInt = (~sortNMUI=false, n: int): option<t> => {
    let _c = tFromJs(n)
    switch _c {
    | Some(U) => sortNMUI ? Some(M) : _c
    | Some(I) => sortNMUI ? Some(U) : _c
    | Some(M) => sortNMUI ? Some(I) : _c
    | _       => _c
    }
  }

  /**
   * Output [Const] from index in NMUI ordering (used by uFORM iFORM)
   */
  let tFromStr = (str: string): option<t> => {
    switch str {
    | "N" | "n" | "." | "" => Some(N)
    | "U" | "u" | "mn"     => Some(U)
    | "I" | "i" | "(mn)"   => Some(I)
    | "M" | "m" | "()"     => Some(M)
    | _ => None
    }
  }

  let enum: list<t> = list{N,U,I,M}
  let enum_NMUI: list<t> = list{N,M,U,I}
  let enumNM: list<t> = list{N,M}
  let enumUI: list<t> = list{U,I}


  // ----------------------------------------------------
  // Operations
  // ----------------------------------------------------

  /**
   * Inverts/marks [Const] value
   */
  let inv = (x: t) => {
    switch x {
    | N => M
    | M => N
    | U => I
    | I => U
    }
  }

  /**
   * Relates two [Const] values
   */
  let rel = (x: t, y: t) => {
    switch (x, y) {
    | (x, N) => x
    | (N, y) => y
    | (U, U) => U
    | (I, I) => I
    | (_, _) => M
    }
  }
}

module Nested = {
  // ===================================================================
  // [Nested]: nested constants -> nested [Const] values
  // ===================================================================

  /*
   * Each item represents a marked space that contains its value and its <linked item>
   * The empty list is assumed to be equivalent to N
   * Nested Constants are closed (marked) by default for consistency
   * 
   * [#NestToL]: left-associative nesting (outward) -> list{a,b,c,…} := ((((a)b)c)…)
   *   <linked item> -> predecessor-tail of the list
   * [#NestToR]: right-associative nesting (inward) -> list{a,b,c,…} := (a(b(c(…))))
   *   <linked item> -> successors-tail of the list
   */
  type t = [#NestToL(list<Const.t>) | #NestToR(list<Const.t>)]

  let show = (nest): string =>
    switch nest {
    | #NestToL(list{}) => Const.N->Const.show
    | #NestToL(clist) => "("++clist->Belt.List.reduce("", (str, c) =>
        `${(str->Js.String2.length > 0) ? `(${str})` : ""}${c->Const.show}`
      )++")"
    | #NestToR(list{}) => Const.N->Const.show
    | #NestToR(clist) => "("++clist->Belt.List.reduceReverse("", (str, c) =>
        `${c->Const.show}${(str->Js.String2.length > 0) ? `(${str})` : ""}`
      )++")"
    }

  let getList = (nest: t): list<Const.t> => switch nest {
    | #NestToL(clist) | #NestToR(clist) => clist
    }
  let fmapL = (#NestToL(l), fn: (list<Const.t> => list<Const.t>)) => {
    #NestToL(l->fn)
  }
  let fmapR = (#NestToR(l), fn: (list<Const.t> => list<Const.t>)) => {
    #NestToR(l->fn)
  }

  /**
   * Reduces a list of nested [Const] values via law of crossing: (()) = .
   * * verified for most relevant cases
   * 
   * ? Caution: does not further reduce e.g. [N,M] := (.(M)) or [M,N,M] := (M(.(M))) in order to retain the simplicity of the nested structure
   */
  let rec _reduceByCrossing = (clist): list<Const.t> =>
    switch clist {
    | list{} => clist
    | list{Const.N, Const.N, ...cs} => list{..._reduceByCrossing(cs)}
    | list{c, ...cs} => list{c, ..._reduceByCrossing(cs)}
    }
  let reduceByCrossingL = (#NestToL(clist)) => {
    #NestToL(clist->_reduceByCrossing)
  }
  let reduceByCrossingR = (#NestToR(clist)) => {
    #NestToR(clist->_reduceByCrossing)
  }

  /**
   * Reduces a list of nested [Const] values via law of calling: ()() = ()
   * * verified for most relevant cases
   */
  let rec _reduceByCalling = (clist, someUI: option<Const.t>): list<Const.t> =>
    switch clist {
    | list{}  => clist
    | list{c} => switch c {
      | M | N => clist
      | _ => switch someUI {
        | None     => clist
        | Some(c') => c' == c ? list{N} : list{M}
        }
      }
    | list{c, ...cs} => switch c {
      | M => list{M}
      | N => list{N, ..._reduceByCalling(cs, someUI)}
      | _ => switch someUI {
        | None     => list{c, ..._reduceByCalling(cs, Some(c))}
        | Some(c') => c' == c ? list{N, ..._reduceByCalling(cs, someUI)} : list{M}
        }
      }
    }
  let reduceByCallingL = (#NestToL(clist)) => {
    #NestToL(clist->Js.List.rev->_reduceByCalling(None)->Js.List.rev)
  }
  let reduceByCallingR = (#NestToR(clist)) => {
    #NestToR(clist->_reduceByCalling(None))
  }

  /**
   * Reduces a list of nested [Const] values by successively applying reducer functions
   */
  let reduceL = (#NestToL(clist)) => #NestToL(clist)
    ->reduceByCallingL
    ->reduceByCrossingL
  let reduceR = (#NestToR(clist)) => #NestToR(clist)
    ->reduceByCallingR
    ->reduceByCrossingR

  /**
   * Calculates a list of nested [Const] values
   * * verified for most relevant cases
   */
  let rec _calc = (clist): Const.t =>
    switch clist {
    | list{}  => N
    | list{c} => c
    | list{c, ...cs} => switch c {
      | M => M
      | N => Const.inv( _calc(cs) )
      | _ => Const.rel(c, Const.inv( _calc(cs) ))
      }
    }
  let calcL = (#NestToL(clist)): Const.t => {
    switch clist {
    | list{} => N
    | _ => Const.inv(clist->Js.List.rev->_calc)
    }
  }
  let calcR = (#NestToR(clist)): Const.t => {
    switch clist {
    | list{} => N
    | _ => Const.inv(clist->_calc)
    }
  }
}