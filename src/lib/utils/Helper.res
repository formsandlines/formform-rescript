module Parity = {
  type t = Even | Odd | Both

  let show = (parity: t) => switch parity {
  | Even => "2r"
  | Odd => "2r+1"
  | Both => ""
  }

}