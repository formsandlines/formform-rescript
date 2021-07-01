type t = Even | Odd

let show = (parity: t) => switch parity {
| Even => "2r"
| Odd => "2r+1"
}