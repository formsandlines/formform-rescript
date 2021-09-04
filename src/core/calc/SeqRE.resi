open Helper
open Calc

type uType = private UFORM | IFORM

type mn = RecInstr | RecIdent // default is RecInstr
type sig = {reEntryPar: Parity.t, unmarked: bool, interpr: mn}

let showSig: (sig) => string
let showMN: (mn) => string
let showUType: (uType) => string

let getUType: (sig, Parity.t) => uType


let calcRE: (sig, [< #NestToR(list<Const.t>)]) => Const.t