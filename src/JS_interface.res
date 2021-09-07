
let config = {
  "sortNMUI": true, // ? should this be global or per function or both?
}

module Converter = {
  module Const = {
    open Calc.Const

    let fromJS = (js_int) => {
      switch js_int->fromInt(~sortNMUI=config["sortNMUI"]) {
      | Some(c) => c
      | None => Js.Exn.raiseError("Invalid constant")
      }
    }
    let fromJS_array = (js_arr) =>
      js_arr->Js.Array2.map(js_int => js_int->fromJS)
    
    let toJS = (c) => {
      c->toInt(~sortNMUI=config["sortNMUI"])
    }
    let toJS_array = (c_arr) =>
      c_arr->Js.Array2.map(c => c->toJS)
  }
  module Nested = {
    open Calc.Nested

    let fromJS = (js_nested) => {
      js_nested
    }
    let toJS = (nested) => {
      nested
    }

  }
}

module Calc = {
  open Calc

  module Const = {
    open Const
    open Converter.Const

    let show = (d) => d->fromJS->show

    let showAsKey = (d) => d->fromJS->showAsKey

    let fromStr = (str) => switch str->tFromStr {
    | Some(c) => c->toJS
    | None => Js.Exn.raiseError("Cannot interpret string")
    }

    let inv = (d) => d->fromJS->inv->toJS

    let rel = (d1, d2) => {
      let c1 = d1->fromJS
      let c2 = d2->fromJS
      rel(c1, c2)->toJS
    }
  }

  module Nested = {
    open Nested
    open Converter.Nested

    let show = show

    let getList = getList

    let fromArrayToL = (arr) => arr->Converter.Const.fromJS_array->fromArrayToL
    let fromArrayToR = (arr) => arr->Converter.Const.fromJS_array->fromArrayToR

    let toArray = (d) => d->toArray->Converter.Const.toJS_array

    // let fmapL = (d, fn) => 

  }
}

