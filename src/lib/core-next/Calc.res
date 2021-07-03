module Const = {
  // ===================================================================
  // [Const]: Constant -> simple values of the tetravalent FORM calculus
  // ===================================================================

  type t = N | M | U | I

  /**
   * Generates notation for Const
   */
  let show = (x: t) => switch x {
  | N => "N"
  | M => "M"
  | U => "U"
  | I => "I"
  }


  // ----------------------------------------------------
  // Operations
  // ----------------------------------------------------

  /**
  * Inverts/marks [Const] value
  */
  let inv = (x: t) => {
    // open Const
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
    // open Const
    switch (x, y) {
    | (x, N) => x
    | (N, y) => y
    | (U, U) => U
    | (I, I) => I
    | (_, _) => M
    }
  }

}