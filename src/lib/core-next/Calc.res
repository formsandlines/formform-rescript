module Const = {
  type t = N | M | U | I

  let show = (x: t) => switch x {
  | N => "N"
  | M => "M"
  | U => "U"
  | I => "I"
  }
}

let inv = (x: Const.t) => {
  open Const
  switch x {
  | N => M
  | M => N
  | U => I
  | I => U
  }
}

let rel = (x: Const.t, y: Const.t) => {
  open Const
  switch (x, y) {
  | (x, N) => x
  | (N, y) => y
  | (U, U) => U
  | (I, I) => I
  | (_, _) => M
  }
}