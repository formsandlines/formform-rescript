open Helper
open Calc

type uType = private UFORM | IFORM

@deriving(accessors)
type mn = RecInstr | RecIdent // default is RecInstr

@deriving(jsConverter)
type sig = {reEntryPar: Parity.t, unmarked: bool, interpr: mn}

let mnFromStr: (string) => mn

let showSig: (sig) => string
let showMN: (mn) => string
let showUType: (uType) => string

let getUType: (sig, Parity.t) => uType


let calcRE: (sig, [< #NestToR(list<Const.t>)]) => Const.t