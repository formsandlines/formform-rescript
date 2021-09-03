
/** Form Code */
module Form = {
  type cnt = Content
  type ctx = Context
}
/** Value Code */
module Value = {
  type con = Constant
  type var = Variable
}

module Parity = {
  type t = Even | Odd | Any

  let show = (parity: t) => switch parity {
  | Even => "2r"
  | Odd  => "2r+1"
  | Any  => ""
  }
}

module SeqRE = {
  // ----------------------------------------------------
  // [REsign]: ReEntry signature -> instruction on how to
  //   recursively construct the ReEntry structure and
  //   how to interpret its undetermined value
  // ----------------------------------------------------

  // Interpretation alternatives for MN in re-entry FORMs
  // -> See uFORM iFORM, p. 136
  type uType = UFORM | IFORM
  type mn = RecInstr | RecIdent // default is RecInstr
  type sig = {reEntryPar: Parity.t, unmarked: bool, interpr: mn}

  let showSig = ({reEntryPar, unmarked, interpr}) => {
    let (reDots, preDot) = switch reEntryPar {
    | Even => ("..","")
    | Odd  => ("..",".")
    | Any  => ("","")
    }
    let reMark = switch interpr {
    | RecInstr => "@"
    | RecIdent => "@'"
    }
    `${unmarked ? "_" : ""}${preDot}${reMark}${reDots}` // <- nest to right
    // `${reDots}${reMark}${preDot}${unmarked ? "_" : ""}`
  }
  let showMN = (mn) => {
    switch mn {
    | RecInstr => "recursive instruction"
    | RecIdent => "recursive identity"
    }
  }
  let showUType = (uType) => {
    switch uType {
    | UFORM => "uFORM"
    | IFORM => "iFORM"
    }
  }

  let getUType = ({reEntryPar, unmarked, _}, resPar: Parity.t) =>
    switch (resPar, reEntryPar) {
    | (Even, _)   => unmarked ? IFORM : UFORM
    | (Odd, Even) => UFORM
    | (Odd, Odd)  => IFORM
    | (_, _)      => IFORM // default (“Any”) re-entry parity for odd resolution is always odd
    }
}
