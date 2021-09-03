
/** Form Code */
module Form: {
  type cnt = Content
  type ctx = Context
}
/** Value Code */
module Value: {
  type con = Constant
  type var = Variable
}

module Parity: {
  type t = Even | Odd | Any

  let show: (t) => string
}


module SeqRE: {
  type uType = private UFORM | IFORM

  type mn = RecInstr | RecIdent // default is RecInstr
  type sig = {reEntryPar: Parity.t, unmarked: bool, interpr: mn}

  let showSig: (sig) => string
  let showMN: (mn) => string
  let showUType: (uType) => string

  let getUType: (sig, Parity.t) => uType
}