open Calc

type t = list<Const.t>

let rec show = (dna: t) => switch dna {
| list{} => ""
| list{x, ...xs} => Const.show(x) ++ show(xs)
}