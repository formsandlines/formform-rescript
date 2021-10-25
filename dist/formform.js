(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define([], factory);
	else if(typeof exports === 'object')
		exports["formform"] = factory();
	else
		root["formform"] = factory();
})(this, function() {
return /******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/rescript/lib/es6/belt_Array.js":
/*!*****************************************************!*\
  !*** ./node_modules/rescript/lib/es6/belt_Array.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "getExn": function() { return /* binding */ getExn; },
/* harmony export */   "set": function() { return /* binding */ set; },
/* harmony export */   "setExn": function() { return /* binding */ setExn; },
/* harmony export */   "shuffleInPlace": function() { return /* binding */ shuffleInPlace; },
/* harmony export */   "shuffle": function() { return /* binding */ shuffle; },
/* harmony export */   "reverseInPlace": function() { return /* binding */ reverseInPlace; },
/* harmony export */   "reverse": function() { return /* binding */ reverse; },
/* harmony export */   "make": function() { return /* binding */ make; },
/* harmony export */   "range": function() { return /* binding */ range; },
/* harmony export */   "rangeBy": function() { return /* binding */ rangeBy; },
/* harmony export */   "makeByU": function() { return /* binding */ makeByU; },
/* harmony export */   "makeBy": function() { return /* binding */ makeBy; },
/* harmony export */   "makeByAndShuffleU": function() { return /* binding */ makeByAndShuffleU; },
/* harmony export */   "makeByAndShuffle": function() { return /* binding */ makeByAndShuffle; },
/* harmony export */   "zip": function() { return /* binding */ zip; },
/* harmony export */   "zipByU": function() { return /* binding */ zipByU; },
/* harmony export */   "zipBy": function() { return /* binding */ zipBy; },
/* harmony export */   "unzip": function() { return /* binding */ unzip; },
/* harmony export */   "concat": function() { return /* binding */ concat; },
/* harmony export */   "concatMany": function() { return /* binding */ concatMany; },
/* harmony export */   "slice": function() { return /* binding */ slice; },
/* harmony export */   "sliceToEnd": function() { return /* binding */ sliceToEnd; },
/* harmony export */   "fill": function() { return /* binding */ fill; },
/* harmony export */   "blit": function() { return /* binding */ blit; },
/* harmony export */   "blitUnsafe": function() { return /* binding */ blitUnsafe; },
/* harmony export */   "forEachU": function() { return /* binding */ forEachU; },
/* harmony export */   "forEach": function() { return /* binding */ forEach; },
/* harmony export */   "mapU": function() { return /* binding */ mapU; },
/* harmony export */   "map": function() { return /* binding */ map; },
/* harmony export */   "getByU": function() { return /* binding */ getByU; },
/* harmony export */   "getBy": function() { return /* binding */ getBy; },
/* harmony export */   "getIndexByU": function() { return /* binding */ getIndexByU; },
/* harmony export */   "getIndexBy": function() { return /* binding */ getIndexBy; },
/* harmony export */   "keepU": function() { return /* binding */ keepU; },
/* harmony export */   "keep": function() { return /* binding */ keep; },
/* harmony export */   "keepWithIndexU": function() { return /* binding */ keepWithIndexU; },
/* harmony export */   "keepWithIndex": function() { return /* binding */ keepWithIndex; },
/* harmony export */   "keepMapU": function() { return /* binding */ keepMapU; },
/* harmony export */   "keepMap": function() { return /* binding */ keepMap; },
/* harmony export */   "forEachWithIndexU": function() { return /* binding */ forEachWithIndexU; },
/* harmony export */   "forEachWithIndex": function() { return /* binding */ forEachWithIndex; },
/* harmony export */   "mapWithIndexU": function() { return /* binding */ mapWithIndexU; },
/* harmony export */   "mapWithIndex": function() { return /* binding */ mapWithIndex; },
/* harmony export */   "partitionU": function() { return /* binding */ partitionU; },
/* harmony export */   "partition": function() { return /* binding */ partition; },
/* harmony export */   "reduceU": function() { return /* binding */ reduceU; },
/* harmony export */   "reduce": function() { return /* binding */ reduce; },
/* harmony export */   "reduceReverseU": function() { return /* binding */ reduceReverseU; },
/* harmony export */   "reduceReverse": function() { return /* binding */ reduceReverse; },
/* harmony export */   "reduceReverse2U": function() { return /* binding */ reduceReverse2U; },
/* harmony export */   "reduceReverse2": function() { return /* binding */ reduceReverse2; },
/* harmony export */   "reduceWithIndexU": function() { return /* binding */ reduceWithIndexU; },
/* harmony export */   "reduceWithIndex": function() { return /* binding */ reduceWithIndex; },
/* harmony export */   "joinWithU": function() { return /* binding */ joinWithU; },
/* harmony export */   "joinWith": function() { return /* binding */ joinWith; },
/* harmony export */   "someU": function() { return /* binding */ someU; },
/* harmony export */   "some": function() { return /* binding */ some; },
/* harmony export */   "everyU": function() { return /* binding */ everyU; },
/* harmony export */   "every": function() { return /* binding */ every; },
/* harmony export */   "every2U": function() { return /* binding */ every2U; },
/* harmony export */   "every2": function() { return /* binding */ every2; },
/* harmony export */   "some2U": function() { return /* binding */ some2U; },
/* harmony export */   "some2": function() { return /* binding */ some2; },
/* harmony export */   "cmpU": function() { return /* binding */ cmpU; },
/* harmony export */   "cmp": function() { return /* binding */ cmp; },
/* harmony export */   "eqU": function() { return /* binding */ eqU; },
/* harmony export */   "eq": function() { return /* binding */ eq; }
/* harmony export */ });
/* harmony import */ var _caml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml.js */ "./node_modules/rescript/lib/es6/caml.js");
/* harmony import */ var _curry_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./curry.js */ "./node_modules/rescript/lib/es6/curry.js");
/* harmony import */ var _js_math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./js_math.js */ "./node_modules/rescript/lib/es6/js_math.js");
/* harmony import */ var _caml_option_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./caml_option.js */ "./node_modules/rescript/lib/es6/caml_option.js");







function get(arr, i) {
  if (i >= 0 && i < arr.length) {
    return _caml_option_js__WEBPACK_IMPORTED_MODULE_3__.some(arr[i]);
  }
  
}

function getExn(arr, i) {
  if (!(i >= 0 && i < arr.length)) {
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "belt_Array.ml",
            27,
            4
          ],
          Error: new Error()
        };
  }
  return arr[i];
}

function set(arr, i, v) {
  if (i >= 0 && i < arr.length) {
    arr[i] = v;
    return true;
  } else {
    return false;
  }
}

function setExn(arr, i, v) {
  if (!(i >= 0 && i < arr.length)) {
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "belt_Array.ml",
            33,
            2
          ],
          Error: new Error()
        };
  }
  arr[i] = v;
  
}

function swapUnsafe(xs, i, j) {
  var tmp = xs[i];
  xs[i] = xs[j];
  xs[j] = tmp;
  
}

function shuffleInPlace(xs) {
  var len = xs.length;
  for(var i = 0; i < len; ++i){
    swapUnsafe(xs, i, _js_math_js__WEBPACK_IMPORTED_MODULE_2__.random_int(i, len));
  }
  
}

function shuffle(xs) {
  var result = xs.slice(0);
  shuffleInPlace(result);
  return result;
}

function reverseInPlace(xs) {
  var len = xs.length;
  var ofs = 0;
  for(var i = 0 ,i_finish = len / 2 | 0; i < i_finish; ++i){
    swapUnsafe(xs, ofs + i | 0, ((ofs + len | 0) - i | 0) - 1 | 0);
  }
  
}

function reverse(xs) {
  var len = xs.length;
  var result = new Array(len);
  for(var i = 0; i < len; ++i){
    result[i] = xs[(len - 1 | 0) - i | 0];
  }
  return result;
}

function make(l, f) {
  if (l <= 0) {
    return [];
  }
  var res = new Array(l);
  for(var i = 0; i < l; ++i){
    res[i] = f;
  }
  return res;
}

function makeByU(l, f) {
  if (l <= 0) {
    return [];
  }
  var res = new Array(l);
  for(var i = 0; i < l; ++i){
    res[i] = f(i);
  }
  return res;
}

function makeBy(l, f) {
  return makeByU(l, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__1(f));
}

function makeByAndShuffleU(l, f) {
  var u = makeByU(l, f);
  shuffleInPlace(u);
  return u;
}

function makeByAndShuffle(l, f) {
  return makeByAndShuffleU(l, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__1(f));
}

function range(start, finish) {
  var cut = finish - start | 0;
  if (cut < 0) {
    return [];
  }
  var arr = new Array(cut + 1 | 0);
  for(var i = 0; i <= cut; ++i){
    arr[i] = start + i | 0;
  }
  return arr;
}

function rangeBy(start, finish, step) {
  var cut = finish - start | 0;
  if (cut < 0 || step <= 0) {
    return [];
  }
  var nb = (cut / step | 0) + 1 | 0;
  var arr = new Array(nb);
  var cur = start;
  for(var i = 0; i < nb; ++i){
    arr[i] = cur;
    cur = cur + step | 0;
  }
  return arr;
}

function zip(xs, ys) {
  var lenx = xs.length;
  var leny = ys.length;
  var len = lenx < leny ? lenx : leny;
  var s = new Array(len);
  for(var i = 0; i < len; ++i){
    s[i] = [
      xs[i],
      ys[i]
    ];
  }
  return s;
}

function zipByU(xs, ys, f) {
  var lenx = xs.length;
  var leny = ys.length;
  var len = lenx < leny ? lenx : leny;
  var s = new Array(len);
  for(var i = 0; i < len; ++i){
    s[i] = f(xs[i], ys[i]);
  }
  return s;
}

function zipBy(xs, ys, f) {
  return zipByU(xs, ys, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__2(f));
}

function concat(a1, a2) {
  var l1 = a1.length;
  var l2 = a2.length;
  var a1a2 = new Array(l1 + l2 | 0);
  for(var i = 0; i < l1; ++i){
    a1a2[i] = a1[i];
  }
  for(var i$1 = 0; i$1 < l2; ++i$1){
    a1a2[l1 + i$1 | 0] = a2[i$1];
  }
  return a1a2;
}

function concatMany(arrs) {
  var lenArrs = arrs.length;
  var totalLen = 0;
  for(var i = 0; i < lenArrs; ++i){
    totalLen = totalLen + arrs[i].length | 0;
  }
  var result = new Array(totalLen);
  totalLen = 0;
  for(var j = 0; j < lenArrs; ++j){
    var cur = arrs[j];
    for(var k = 0 ,k_finish = cur.length; k < k_finish; ++k){
      result[totalLen] = cur[k];
      totalLen = totalLen + 1 | 0;
    }
  }
  return result;
}

function slice(a, offset, len) {
  if (len <= 0) {
    return [];
  }
  var lena = a.length;
  var ofs = offset < 0 ? _caml_js__WEBPACK_IMPORTED_MODULE_0__.caml_int_max(lena + offset | 0, 0) : offset;
  var hasLen = lena - ofs | 0;
  var copyLength = hasLen < len ? hasLen : len;
  if (copyLength <= 0) {
    return [];
  }
  var result = new Array(copyLength);
  for(var i = 0; i < copyLength; ++i){
    result[i] = a[ofs + i | 0];
  }
  return result;
}

function sliceToEnd(a, offset) {
  var lena = a.length;
  var ofs = offset < 0 ? _caml_js__WEBPACK_IMPORTED_MODULE_0__.caml_int_max(lena + offset | 0, 0) : offset;
  var len = lena - ofs | 0;
  var result = new Array(len);
  for(var i = 0; i < len; ++i){
    result[i] = a[ofs + i | 0];
  }
  return result;
}

function fill(a, offset, len, v) {
  if (len <= 0) {
    return ;
  }
  var lena = a.length;
  var ofs = offset < 0 ? _caml_js__WEBPACK_IMPORTED_MODULE_0__.caml_int_max(lena + offset | 0, 0) : offset;
  var hasLen = lena - ofs | 0;
  var fillLength = hasLen < len ? hasLen : len;
  if (fillLength <= 0) {
    return ;
  }
  for(var i = ofs ,i_finish = ofs + fillLength | 0; i < i_finish; ++i){
    a[i] = v;
  }
  
}

function blitUnsafe(a1, srcofs1, a2, srcofs2, blitLength) {
  if (srcofs2 <= srcofs1) {
    for(var j = 0; j < blitLength; ++j){
      a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];
    }
    return ;
  }
  for(var j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1){
    a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];
  }
  
}

function blit(a1, ofs1, a2, ofs2, len) {
  var lena1 = a1.length;
  var lena2 = a2.length;
  var srcofs1 = ofs1 < 0 ? _caml_js__WEBPACK_IMPORTED_MODULE_0__.caml_int_max(lena1 + ofs1 | 0, 0) : ofs1;
  var srcofs2 = ofs2 < 0 ? _caml_js__WEBPACK_IMPORTED_MODULE_0__.caml_int_max(lena2 + ofs2 | 0, 0) : ofs2;
  var blitLength = _caml_js__WEBPACK_IMPORTED_MODULE_0__.caml_int_min(len, _caml_js__WEBPACK_IMPORTED_MODULE_0__.caml_int_min(lena1 - srcofs1 | 0, lena2 - srcofs2 | 0));
  if (srcofs2 <= srcofs1) {
    for(var j = 0; j < blitLength; ++j){
      a2[j + srcofs2 | 0] = a1[j + srcofs1 | 0];
    }
    return ;
  }
  for(var j$1 = blitLength - 1 | 0; j$1 >= 0; --j$1){
    a2[j$1 + srcofs2 | 0] = a1[j$1 + srcofs1 | 0];
  }
  
}

function forEachU(a, f) {
  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
    f(a[i]);
  }
  
}

function forEach(a, f) {
  return forEachU(a, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__1(f));
}

function mapU(a, f) {
  var l = a.length;
  var r = new Array(l);
  for(var i = 0; i < l; ++i){
    r[i] = f(a[i]);
  }
  return r;
}

function map(a, f) {
  return mapU(a, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__1(f));
}

function getByU(a, p) {
  var l = a.length;
  var i = 0;
  var r;
  while(r === undefined && i < l) {
    var v = a[i];
    if (p(v)) {
      r = _caml_option_js__WEBPACK_IMPORTED_MODULE_3__.some(v);
    }
    i = i + 1 | 0;
  };
  return r;
}

function getBy(a, p) {
  return getByU(a, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__1(p));
}

function getIndexByU(a, p) {
  var l = a.length;
  var i = 0;
  var r;
  while(r === undefined && i < l) {
    var v = a[i];
    if (p(v)) {
      r = i;
    }
    i = i + 1 | 0;
  };
  return r;
}

function getIndexBy(a, p) {
  return getIndexByU(a, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__1(p));
}

function keepU(a, f) {
  var l = a.length;
  var r = new Array(l);
  var j = 0;
  for(var i = 0; i < l; ++i){
    var v = a[i];
    if (f(v)) {
      r[j] = v;
      j = j + 1 | 0;
    }
    
  }
  r.length = j;
  return r;
}

function keep(a, f) {
  return keepU(a, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__1(f));
}

function keepWithIndexU(a, f) {
  var l = a.length;
  var r = new Array(l);
  var j = 0;
  for(var i = 0; i < l; ++i){
    var v = a[i];
    if (f(v, i)) {
      r[j] = v;
      j = j + 1 | 0;
    }
    
  }
  r.length = j;
  return r;
}

function keepWithIndex(a, f) {
  return keepWithIndexU(a, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__2(f));
}

function keepMapU(a, f) {
  var l = a.length;
  var r = new Array(l);
  var j = 0;
  for(var i = 0; i < l; ++i){
    var v = a[i];
    var v$1 = f(v);
    if (v$1 !== undefined) {
      r[j] = _caml_option_js__WEBPACK_IMPORTED_MODULE_3__.valFromOption(v$1);
      j = j + 1 | 0;
    }
    
  }
  r.length = j;
  return r;
}

function keepMap(a, f) {
  return keepMapU(a, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__1(f));
}

function forEachWithIndexU(a, f) {
  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
    f(i, a[i]);
  }
  
}

function forEachWithIndex(a, f) {
  return forEachWithIndexU(a, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__2(f));
}

function mapWithIndexU(a, f) {
  var l = a.length;
  var r = new Array(l);
  for(var i = 0; i < l; ++i){
    r[i] = f(i, a[i]);
  }
  return r;
}

function mapWithIndex(a, f) {
  return mapWithIndexU(a, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__2(f));
}

function reduceU(a, x, f) {
  var r = x;
  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
    r = f(r, a[i]);
  }
  return r;
}

function reduce(a, x, f) {
  return reduceU(a, x, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__2(f));
}

function reduceReverseU(a, x, f) {
  var r = x;
  for(var i = a.length - 1 | 0; i >= 0; --i){
    r = f(r, a[i]);
  }
  return r;
}

function reduceReverse(a, x, f) {
  return reduceReverseU(a, x, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__2(f));
}

function reduceReverse2U(a, b, x, f) {
  var r = x;
  var len = _caml_js__WEBPACK_IMPORTED_MODULE_0__.caml_int_min(a.length, b.length);
  for(var i = len - 1 | 0; i >= 0; --i){
    r = f(r, a[i], b[i]);
  }
  return r;
}

function reduceReverse2(a, b, x, f) {
  return reduceReverse2U(a, b, x, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__3(f));
}

function reduceWithIndexU(a, x, f) {
  var r = x;
  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
    r = f(r, a[i], i);
  }
  return r;
}

function reduceWithIndex(a, x, f) {
  return reduceWithIndexU(a, x, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__3(f));
}

function everyU(arr, b) {
  var len = arr.length;
  var _i = 0;
  while(true) {
    var i = _i;
    if (i === len) {
      return true;
    }
    if (!b(arr[i])) {
      return false;
    }
    _i = i + 1 | 0;
    continue ;
  };
}

function every(arr, f) {
  return everyU(arr, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__1(f));
}

function someU(arr, b) {
  var len = arr.length;
  var _i = 0;
  while(true) {
    var i = _i;
    if (i === len) {
      return false;
    }
    if (b(arr[i])) {
      return true;
    }
    _i = i + 1 | 0;
    continue ;
  };
}

function some(arr, f) {
  return someU(arr, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__1(f));
}

function everyAux2(arr1, arr2, _i, b, len) {
  while(true) {
    var i = _i;
    if (i === len) {
      return true;
    }
    if (!b(arr1[i], arr2[i])) {
      return false;
    }
    _i = i + 1 | 0;
    continue ;
  };
}

function every2U(a, b, p) {
  return everyAux2(a, b, 0, p, _caml_js__WEBPACK_IMPORTED_MODULE_0__.caml_int_min(a.length, b.length));
}

function every2(a, b, p) {
  return every2U(a, b, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__2(p));
}

function some2U(a, b, p) {
  var _i = 0;
  var len = _caml_js__WEBPACK_IMPORTED_MODULE_0__.caml_int_min(a.length, b.length);
  while(true) {
    var i = _i;
    if (i === len) {
      return false;
    }
    if (p(a[i], b[i])) {
      return true;
    }
    _i = i + 1 | 0;
    continue ;
  };
}

function some2(a, b, p) {
  return some2U(a, b, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__2(p));
}

function eqU(a, b, p) {
  var lena = a.length;
  var lenb = b.length;
  if (lena === lenb) {
    return everyAux2(a, b, 0, p, lena);
  } else {
    return false;
  }
}

function eq(a, b, p) {
  return eqU(a, b, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__2(p));
}

function cmpU(a, b, p) {
  var lena = a.length;
  var lenb = b.length;
  if (lena > lenb) {
    return 1;
  } else if (lena < lenb) {
    return -1;
  } else {
    var _i = 0;
    while(true) {
      var i = _i;
      if (i === lena) {
        return 0;
      }
      var c = p(a[i], b[i]);
      if (c !== 0) {
        return c;
      }
      _i = i + 1 | 0;
      continue ;
    };
  }
}

function cmp(a, b, p) {
  return cmpU(a, b, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__2(p));
}

function partitionU(a, f) {
  var l = a.length;
  var i = 0;
  var j = 0;
  var a1 = new Array(l);
  var a2 = new Array(l);
  for(var ii = 0; ii < l; ++ii){
    var v = a[ii];
    if (f(v)) {
      a1[i] = v;
      i = i + 1 | 0;
    } else {
      a2[j] = v;
      j = j + 1 | 0;
    }
  }
  a1.length = i;
  a2.length = j;
  return [
          a1,
          a2
        ];
}

function partition(a, f) {
  return partitionU(a, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__1(f));
}

function unzip(a) {
  var l = a.length;
  var a1 = new Array(l);
  var a2 = new Array(l);
  for(var i = 0; i < l; ++i){
    var match = a[i];
    a1[i] = match[0];
    a2[i] = match[1];
  }
  return [
          a1,
          a2
        ];
}

function joinWithU(a, sep, toString) {
  var l = a.length;
  if (l === 0) {
    return "";
  }
  var lastIndex = l - 1 | 0;
  var _i = 0;
  var _res = "";
  while(true) {
    var res = _res;
    var i = _i;
    if (i === lastIndex) {
      return res + toString(a[i]);
    }
    _res = res + (toString(a[i]) + sep);
    _i = i + 1 | 0;
    continue ;
  };
}

function joinWith(a, sep, toString) {
  return joinWithU(a, sep, _curry_js__WEBPACK_IMPORTED_MODULE_1__.__1(toString));
}


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/belt_List.js":
/*!****************************************************!*\
  !*** ./node_modules/rescript/lib/es6/belt_List.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "length": function() { return /* binding */ length; },
/* harmony export */   "size": function() { return /* binding */ size; },
/* harmony export */   "head": function() { return /* binding */ head; },
/* harmony export */   "headExn": function() { return /* binding */ headExn; },
/* harmony export */   "tail": function() { return /* binding */ tail; },
/* harmony export */   "tailExn": function() { return /* binding */ tailExn; },
/* harmony export */   "add": function() { return /* binding */ add; },
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "getExn": function() { return /* binding */ getExn; },
/* harmony export */   "make": function() { return /* binding */ make; },
/* harmony export */   "makeByU": function() { return /* binding */ makeByU; },
/* harmony export */   "makeBy": function() { return /* binding */ makeBy; },
/* harmony export */   "shuffle": function() { return /* binding */ shuffle; },
/* harmony export */   "drop": function() { return /* binding */ drop; },
/* harmony export */   "take": function() { return /* binding */ take; },
/* harmony export */   "splitAt": function() { return /* binding */ splitAt; },
/* harmony export */   "concat": function() { return /* binding */ concat; },
/* harmony export */   "concatMany": function() { return /* binding */ concatMany; },
/* harmony export */   "reverseConcat": function() { return /* binding */ reverseConcat; },
/* harmony export */   "flatten": function() { return /* binding */ flatten; },
/* harmony export */   "mapU": function() { return /* binding */ mapU; },
/* harmony export */   "map": function() { return /* binding */ map; },
/* harmony export */   "zip": function() { return /* binding */ zip; },
/* harmony export */   "zipByU": function() { return /* binding */ zipByU; },
/* harmony export */   "zipBy": function() { return /* binding */ zipBy; },
/* harmony export */   "mapWithIndexU": function() { return /* binding */ mapWithIndexU; },
/* harmony export */   "mapWithIndex": function() { return /* binding */ mapWithIndex; },
/* harmony export */   "fromArray": function() { return /* binding */ fromArray; },
/* harmony export */   "toArray": function() { return /* binding */ toArray; },
/* harmony export */   "reverse": function() { return /* binding */ reverse; },
/* harmony export */   "mapReverseU": function() { return /* binding */ mapReverseU; },
/* harmony export */   "mapReverse": function() { return /* binding */ mapReverse; },
/* harmony export */   "forEachU": function() { return /* binding */ forEachU; },
/* harmony export */   "forEach": function() { return /* binding */ forEach; },
/* harmony export */   "forEachWithIndexU": function() { return /* binding */ forEachWithIndexU; },
/* harmony export */   "forEachWithIndex": function() { return /* binding */ forEachWithIndex; },
/* harmony export */   "reduceU": function() { return /* binding */ reduceU; },
/* harmony export */   "reduce": function() { return /* binding */ reduce; },
/* harmony export */   "reduceWithIndexU": function() { return /* binding */ reduceWithIndexU; },
/* harmony export */   "reduceWithIndex": function() { return /* binding */ reduceWithIndex; },
/* harmony export */   "reduceReverseU": function() { return /* binding */ reduceReverseU; },
/* harmony export */   "reduceReverse": function() { return /* binding */ reduceReverse; },
/* harmony export */   "mapReverse2U": function() { return /* binding */ mapReverse2U; },
/* harmony export */   "mapReverse2": function() { return /* binding */ mapReverse2; },
/* harmony export */   "forEach2U": function() { return /* binding */ forEach2U; },
/* harmony export */   "forEach2": function() { return /* binding */ forEach2; },
/* harmony export */   "reduce2U": function() { return /* binding */ reduce2U; },
/* harmony export */   "reduce2": function() { return /* binding */ reduce2; },
/* harmony export */   "reduceReverse2U": function() { return /* binding */ reduceReverse2U; },
/* harmony export */   "reduceReverse2": function() { return /* binding */ reduceReverse2; },
/* harmony export */   "everyU": function() { return /* binding */ everyU; },
/* harmony export */   "every": function() { return /* binding */ every; },
/* harmony export */   "someU": function() { return /* binding */ someU; },
/* harmony export */   "some": function() { return /* binding */ some; },
/* harmony export */   "every2U": function() { return /* binding */ every2U; },
/* harmony export */   "every2": function() { return /* binding */ every2; },
/* harmony export */   "some2U": function() { return /* binding */ some2U; },
/* harmony export */   "some2": function() { return /* binding */ some2; },
/* harmony export */   "cmpByLength": function() { return /* binding */ cmpByLength; },
/* harmony export */   "cmpU": function() { return /* binding */ cmpU; },
/* harmony export */   "cmp": function() { return /* binding */ cmp; },
/* harmony export */   "eqU": function() { return /* binding */ eqU; },
/* harmony export */   "eq": function() { return /* binding */ eq; },
/* harmony export */   "hasU": function() { return /* binding */ hasU; },
/* harmony export */   "has": function() { return /* binding */ has; },
/* harmony export */   "getByU": function() { return /* binding */ getByU; },
/* harmony export */   "getBy": function() { return /* binding */ getBy; },
/* harmony export */   "keepU": function() { return /* binding */ keepU; },
/* harmony export */   "keep": function() { return /* binding */ keep; },
/* harmony export */   "filter": function() { return /* binding */ filter; },
/* harmony export */   "keepWithIndexU": function() { return /* binding */ keepWithIndexU; },
/* harmony export */   "keepWithIndex": function() { return /* binding */ keepWithIndex; },
/* harmony export */   "filterWithIndex": function() { return /* binding */ filterWithIndex; },
/* harmony export */   "keepMapU": function() { return /* binding */ keepMapU; },
/* harmony export */   "keepMap": function() { return /* binding */ keepMap; },
/* harmony export */   "partitionU": function() { return /* binding */ partitionU; },
/* harmony export */   "partition": function() { return /* binding */ partition; },
/* harmony export */   "unzip": function() { return /* binding */ unzip; },
/* harmony export */   "getAssocU": function() { return /* binding */ getAssocU; },
/* harmony export */   "getAssoc": function() { return /* binding */ getAssoc; },
/* harmony export */   "hasAssocU": function() { return /* binding */ hasAssocU; },
/* harmony export */   "hasAssoc": function() { return /* binding */ hasAssoc; },
/* harmony export */   "removeAssocU": function() { return /* binding */ removeAssocU; },
/* harmony export */   "removeAssoc": function() { return /* binding */ removeAssoc; },
/* harmony export */   "setAssocU": function() { return /* binding */ setAssocU; },
/* harmony export */   "setAssoc": function() { return /* binding */ setAssoc; },
/* harmony export */   "sortU": function() { return /* binding */ sortU; },
/* harmony export */   "sort": function() { return /* binding */ sort; }
/* harmony export */ });
/* harmony import */ var _curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry.js */ "./node_modules/rescript/lib/es6/curry.js");
/* harmony import */ var _belt_Array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./belt_Array.js */ "./node_modules/rescript/lib/es6/belt_Array.js");
/* harmony import */ var _caml_option_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./caml_option.js */ "./node_modules/rescript/lib/es6/caml_option.js");
/* harmony import */ var _belt_SortArray_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./belt_SortArray.js */ "./node_modules/rescript/lib/es6/belt_SortArray.js");







function head(x) {
  if (x) {
    return _caml_option_js__WEBPACK_IMPORTED_MODULE_2__.some(x.hd);
  }
  
}

function headExn(x) {
  if (x) {
    return x.hd;
  }
  throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
}

function tail(x) {
  if (x) {
    return x.tl;
  }
  
}

function tailExn(x) {
  if (x) {
    return x.tl;
  }
  throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
}

function add(xs, x) {
  return {
          hd: x,
          tl: xs
        };
}

function get(x, n) {
  if (n < 0) {
    return ;
  } else {
    var _x = x;
    var _n = n;
    while(true) {
      var n$1 = _n;
      var x$1 = _x;
      if (!x$1) {
        return ;
      }
      if (n$1 === 0) {
        return _caml_option_js__WEBPACK_IMPORTED_MODULE_2__.some(x$1.hd);
      }
      _n = n$1 - 1 | 0;
      _x = x$1.tl;
      continue ;
    };
  }
}

function getExn(x, n) {
  if (n < 0) {
    throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
  }
  var _x = x;
  var _n = n;
  while(true) {
    var n$1 = _n;
    var x$1 = _x;
    if (x$1) {
      if (n$1 === 0) {
        return x$1.hd;
      }
      _n = n$1 - 1 | 0;
      _x = x$1.tl;
      continue ;
    }
    throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
  };
}

function partitionAux(p, _cell, _precX, _precY) {
  while(true) {
    var precY = _precY;
    var precX = _precX;
    var cell = _cell;
    if (!cell) {
      return ;
    }
    var t = cell.tl;
    var h = cell.hd;
    var next = {
      hd: h,
      tl: /* [] */0
    };
    if (p(h)) {
      precX.tl = next;
      _precX = next;
      _cell = t;
      continue ;
    }
    precY.tl = next;
    _precY = next;
    _cell = t;
    continue ;
  };
}

function splitAux(_cell, _precX, _precY) {
  while(true) {
    var precY = _precY;
    var precX = _precX;
    var cell = _cell;
    if (!cell) {
      return ;
    }
    var match = cell.hd;
    var nextA = {
      hd: match[0],
      tl: /* [] */0
    };
    var nextB = {
      hd: match[1],
      tl: /* [] */0
    };
    precX.tl = nextA;
    precY.tl = nextB;
    _precY = nextB;
    _precX = nextA;
    _cell = cell.tl;
    continue ;
  };
}

function copyAuxCont(_cellX, _prec) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    if (!cellX) {
      return prec;
    }
    var next = {
      hd: cellX.hd,
      tl: /* [] */0
    };
    prec.tl = next;
    _prec = next;
    _cellX = cellX.tl;
    continue ;
  };
}

function copyAuxWitFilter(f, _cellX, _prec) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    if (!cellX) {
      return ;
    }
    var t = cellX.tl;
    var h = cellX.hd;
    if (f(h)) {
      var next = {
        hd: h,
        tl: /* [] */0
      };
      prec.tl = next;
      _prec = next;
      _cellX = t;
      continue ;
    }
    _cellX = t;
    continue ;
  };
}

function copyAuxWithFilterIndex(f, _cellX, _prec, _i) {
  while(true) {
    var i = _i;
    var prec = _prec;
    var cellX = _cellX;
    if (!cellX) {
      return ;
    }
    var t = cellX.tl;
    var h = cellX.hd;
    if (f(h, i)) {
      var next = {
        hd: h,
        tl: /* [] */0
      };
      prec.tl = next;
      _i = i + 1 | 0;
      _prec = next;
      _cellX = t;
      continue ;
    }
    _i = i + 1 | 0;
    _cellX = t;
    continue ;
  };
}

function copyAuxWitFilterMap(f, _cellX, _prec) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    if (!cellX) {
      return ;
    }
    var t = cellX.tl;
    var h = f(cellX.hd);
    if (h !== undefined) {
      var next = {
        hd: _caml_option_js__WEBPACK_IMPORTED_MODULE_2__.valFromOption(h),
        tl: /* [] */0
      };
      prec.tl = next;
      _prec = next;
      _cellX = t;
      continue ;
    }
    _cellX = t;
    continue ;
  };
}

function removeAssocAuxWithMap(_cellX, x, _prec, f) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    if (!cellX) {
      return false;
    }
    var t = cellX.tl;
    var h = cellX.hd;
    if (f(h[0], x)) {
      prec.tl = t;
      return true;
    }
    var next = {
      hd: h,
      tl: /* [] */0
    };
    prec.tl = next;
    _prec = next;
    _cellX = t;
    continue ;
  };
}

function setAssocAuxWithMap(_cellX, x, k, _prec, eq) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    if (!cellX) {
      return false;
    }
    var t = cellX.tl;
    var h = cellX.hd;
    if (eq(h[0], x)) {
      prec.tl = {
        hd: [
          x,
          k
        ],
        tl: t
      };
      return true;
    }
    var next = {
      hd: h,
      tl: /* [] */0
    };
    prec.tl = next;
    _prec = next;
    _cellX = t;
    continue ;
  };
}

function copyAuxWithMap(_cellX, _prec, f) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    if (!cellX) {
      return ;
    }
    var next = {
      hd: f(cellX.hd),
      tl: /* [] */0
    };
    prec.tl = next;
    _prec = next;
    _cellX = cellX.tl;
    continue ;
  };
}

function zipAux(_cellX, _cellY, _prec) {
  while(true) {
    var prec = _prec;
    var cellY = _cellY;
    var cellX = _cellX;
    if (!cellX) {
      return ;
    }
    if (!cellY) {
      return ;
    }
    var next = {
      hd: [
        cellX.hd,
        cellY.hd
      ],
      tl: /* [] */0
    };
    prec.tl = next;
    _prec = next;
    _cellY = cellY.tl;
    _cellX = cellX.tl;
    continue ;
  };
}

function copyAuxWithMap2(f, _cellX, _cellY, _prec) {
  while(true) {
    var prec = _prec;
    var cellY = _cellY;
    var cellX = _cellX;
    if (!cellX) {
      return ;
    }
    if (!cellY) {
      return ;
    }
    var next = {
      hd: f(cellX.hd, cellY.hd),
      tl: /* [] */0
    };
    prec.tl = next;
    _prec = next;
    _cellY = cellY.tl;
    _cellX = cellX.tl;
    continue ;
  };
}

function copyAuxWithMapI(f, _i, _cellX, _prec) {
  while(true) {
    var prec = _prec;
    var cellX = _cellX;
    var i = _i;
    if (!cellX) {
      return ;
    }
    var next = {
      hd: f(i, cellX.hd),
      tl: /* [] */0
    };
    prec.tl = next;
    _prec = next;
    _cellX = cellX.tl;
    _i = i + 1 | 0;
    continue ;
  };
}

function takeAux(_n, _cell, _prec) {
  while(true) {
    var prec = _prec;
    var cell = _cell;
    var n = _n;
    if (n === 0) {
      return true;
    }
    if (!cell) {
      return false;
    }
    var cell$1 = {
      hd: cell.hd,
      tl: /* [] */0
    };
    prec.tl = cell$1;
    _prec = cell$1;
    _cell = cell.tl;
    _n = n - 1 | 0;
    continue ;
  };
}

function splitAtAux(_n, _cell, _prec) {
  while(true) {
    var prec = _prec;
    var cell = _cell;
    var n = _n;
    if (n === 0) {
      return cell;
    }
    if (!cell) {
      return ;
    }
    var cell$1 = {
      hd: cell.hd,
      tl: /* [] */0
    };
    prec.tl = cell$1;
    _prec = cell$1;
    _cell = cell.tl;
    _n = n - 1 | 0;
    continue ;
  };
}

function take(lst, n) {
  if (n < 0) {
    return ;
  }
  if (n === 0) {
    return /* [] */0;
  }
  if (!lst) {
    return ;
  }
  var cell = {
    hd: lst.hd,
    tl: /* [] */0
  };
  var has = takeAux(n - 1 | 0, lst.tl, cell);
  if (has) {
    return cell;
  }
  
}

function drop(lst, n) {
  if (n < 0) {
    return ;
  } else {
    var _l = lst;
    var _n = n;
    while(true) {
      var n$1 = _n;
      var l = _l;
      if (n$1 === 0) {
        return l;
      }
      if (!l) {
        return ;
      }
      _n = n$1 - 1 | 0;
      _l = l.tl;
      continue ;
    };
  }
}

function splitAt(lst, n) {
  if (n < 0) {
    return ;
  }
  if (n === 0) {
    return [
            /* [] */0,
            lst
          ];
  }
  if (!lst) {
    return ;
  }
  var cell = {
    hd: lst.hd,
    tl: /* [] */0
  };
  var rest = splitAtAux(n - 1 | 0, lst.tl, cell);
  if (rest !== undefined) {
    return [
            cell,
            rest
          ];
  }
  
}

function concat(xs, ys) {
  if (!xs) {
    return ys;
  }
  var cell = {
    hd: xs.hd,
    tl: /* [] */0
  };
  copyAuxCont(xs.tl, cell).tl = ys;
  return cell;
}

function mapU(xs, f) {
  if (!xs) {
    return /* [] */0;
  }
  var cell = {
    hd: f(xs.hd),
    tl: /* [] */0
  };
  copyAuxWithMap(xs.tl, cell, f);
  return cell;
}

function map(xs, f) {
  return mapU(xs, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function zipByU(l1, l2, f) {
  if (!l1) {
    return /* [] */0;
  }
  if (!l2) {
    return /* [] */0;
  }
  var cell = {
    hd: f(l1.hd, l2.hd),
    tl: /* [] */0
  };
  copyAuxWithMap2(f, l1.tl, l2.tl, cell);
  return cell;
}

function zipBy(l1, l2, f) {
  return zipByU(l1, l2, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function mapWithIndexU(xs, f) {
  if (!xs) {
    return /* [] */0;
  }
  var cell = {
    hd: f(0, xs.hd),
    tl: /* [] */0
  };
  copyAuxWithMapI(f, 1, xs.tl, cell);
  return cell;
}

function mapWithIndex(xs, f) {
  return mapWithIndexU(xs, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function makeByU(n, f) {
  if (n <= 0) {
    return /* [] */0;
  }
  var headX = {
    hd: f(0),
    tl: /* [] */0
  };
  var cur = headX;
  var i = 1;
  while(i < n) {
    var v = {
      hd: f(i),
      tl: /* [] */0
    };
    cur.tl = v;
    cur = v;
    i = i + 1 | 0;
  };
  return headX;
}

function makeBy(n, f) {
  return makeByU(n, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function make(n, v) {
  if (n <= 0) {
    return /* [] */0;
  }
  var headX = {
    hd: v,
    tl: /* [] */0
  };
  var cur = headX;
  var i = 1;
  while(i < n) {
    var v$1 = {
      hd: v,
      tl: /* [] */0
    };
    cur.tl = v$1;
    cur = v$1;
    i = i + 1 | 0;
  };
  return headX;
}

function length(xs) {
  var _x = xs;
  var _acc = 0;
  while(true) {
    var acc = _acc;
    var x = _x;
    if (!x) {
      return acc;
    }
    _acc = acc + 1 | 0;
    _x = x.tl;
    continue ;
  };
}

function fillAux(arr, _i, _x) {
  while(true) {
    var x = _x;
    var i = _i;
    if (!x) {
      return ;
    }
    arr[i] = x.hd;
    _x = x.tl;
    _i = i + 1 | 0;
    continue ;
  };
}

function fromArray(a) {
  var _i = a.length - 1 | 0;
  var _res = /* [] */0;
  while(true) {
    var res = _res;
    var i = _i;
    if (i < 0) {
      return res;
    }
    _res = {
      hd: a[i],
      tl: res
    };
    _i = i - 1 | 0;
    continue ;
  };
}

function toArray(x) {
  var len = length(x);
  var arr = new Array(len);
  fillAux(arr, 0, x);
  return arr;
}

function shuffle(xs) {
  var v = toArray(xs);
  _belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.shuffleInPlace(v);
  return fromArray(v);
}

function reverseConcat(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (!l1) {
      return l2;
    }
    _l2 = {
      hd: l1.hd,
      tl: l2
    };
    _l1 = l1.tl;
    continue ;
  };
}

function reverse(l) {
  return reverseConcat(l, /* [] */0);
}

function flattenAux(_prec, _xs) {
  while(true) {
    var xs = _xs;
    var prec = _prec;
    if (xs) {
      _xs = xs.tl;
      _prec = copyAuxCont(xs.hd, prec);
      continue ;
    }
    prec.tl = /* [] */0;
    return ;
  };
}

function flatten(_xs) {
  while(true) {
    var xs = _xs;
    if (!xs) {
      return /* [] */0;
    }
    var match = xs.hd;
    if (match) {
      var cell = {
        hd: match.hd,
        tl: /* [] */0
      };
      flattenAux(copyAuxCont(match.tl, cell), xs.tl);
      return cell;
    }
    _xs = xs.tl;
    continue ;
  };
}

function concatMany(xs) {
  var len = xs.length;
  if (len === 1) {
    return xs[0];
  }
  if (len === 0) {
    return /* [] */0;
  }
  var len$1 = xs.length;
  var v = xs[len$1 - 1 | 0];
  for(var i = len$1 - 2 | 0; i >= 0; --i){
    v = concat(xs[i], v);
  }
  return v;
}

function mapReverseU(l, f) {
  var _accu = /* [] */0;
  var _xs = l;
  while(true) {
    var xs = _xs;
    var accu = _accu;
    if (!xs) {
      return accu;
    }
    _xs = xs.tl;
    _accu = {
      hd: f(xs.hd),
      tl: accu
    };
    continue ;
  };
}

function mapReverse(l, f) {
  return mapReverseU(l, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function forEachU(_xs, f) {
  while(true) {
    var xs = _xs;
    if (!xs) {
      return ;
    }
    f(xs.hd);
    _xs = xs.tl;
    continue ;
  };
}

function forEach(xs, f) {
  return forEachU(xs, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function forEachWithIndexU(l, f) {
  var _xs = l;
  var _i = 0;
  while(true) {
    var i = _i;
    var xs = _xs;
    if (!xs) {
      return ;
    }
    f(i, xs.hd);
    _i = i + 1 | 0;
    _xs = xs.tl;
    continue ;
  };
}

function forEachWithIndex(l, f) {
  return forEachWithIndexU(l, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function reduceU(_l, _accu, f) {
  while(true) {
    var accu = _accu;
    var l = _l;
    if (!l) {
      return accu;
    }
    _accu = f(accu, l.hd);
    _l = l.tl;
    continue ;
  };
}

function reduce(l, accu, f) {
  return reduceU(l, accu, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function reduceReverseUnsafeU(l, accu, f) {
  if (l) {
    return f(reduceReverseUnsafeU(l.tl, accu, f), l.hd);
  } else {
    return accu;
  }
}

function reduceReverseU(l, acc, f) {
  var len = length(l);
  if (len < 1000) {
    return reduceReverseUnsafeU(l, acc, f);
  } else {
    return _belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.reduceReverseU(toArray(l), acc, f);
  }
}

function reduceReverse(l, accu, f) {
  return reduceReverseU(l, accu, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function reduceWithIndexU(l, acc, f) {
  var _l = l;
  var _acc = acc;
  var _i = 0;
  while(true) {
    var i = _i;
    var acc$1 = _acc;
    var l$1 = _l;
    if (!l$1) {
      return acc$1;
    }
    _i = i + 1 | 0;
    _acc = f(acc$1, l$1.hd, i);
    _l = l$1.tl;
    continue ;
  };
}

function reduceWithIndex(l, acc, f) {
  return reduceWithIndexU(l, acc, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__3(f));
}

function mapReverse2U(l1, l2, f) {
  var _l1 = l1;
  var _l2 = l2;
  var _accu = /* [] */0;
  while(true) {
    var accu = _accu;
    var l2$1 = _l2;
    var l1$1 = _l1;
    if (!l1$1) {
      return accu;
    }
    if (!l2$1) {
      return accu;
    }
    _accu = {
      hd: f(l1$1.hd, l2$1.hd),
      tl: accu
    };
    _l2 = l2$1.tl;
    _l1 = l1$1.tl;
    continue ;
  };
}

function mapReverse2(l1, l2, f) {
  return mapReverse2U(l1, l2, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function forEach2U(_l1, _l2, f) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (!l1) {
      return ;
    }
    if (!l2) {
      return ;
    }
    f(l1.hd, l2.hd);
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue ;
  };
}

function forEach2(l1, l2, f) {
  return forEach2U(l1, l2, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function reduce2U(_l1, _l2, _accu, f) {
  while(true) {
    var accu = _accu;
    var l2 = _l2;
    var l1 = _l1;
    if (!l1) {
      return accu;
    }
    if (!l2) {
      return accu;
    }
    _accu = f(accu, l1.hd, l2.hd);
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue ;
  };
}

function reduce2(l1, l2, acc, f) {
  return reduce2U(l1, l2, acc, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__3(f));
}

function reduceReverse2UnsafeU(l1, l2, accu, f) {
  if (l1 && l2) {
    return f(reduceReverse2UnsafeU(l1.tl, l2.tl, accu, f), l1.hd, l2.hd);
  } else {
    return accu;
  }
}

function reduceReverse2U(l1, l2, acc, f) {
  var len = length(l1);
  if (len < 1000) {
    return reduceReverse2UnsafeU(l1, l2, acc, f);
  } else {
    return _belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.reduceReverse2U(toArray(l1), toArray(l2), acc, f);
  }
}

function reduceReverse2(l1, l2, acc, f) {
  return reduceReverse2U(l1, l2, acc, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__3(f));
}

function everyU(_xs, p) {
  while(true) {
    var xs = _xs;
    if (!xs) {
      return true;
    }
    if (!p(xs.hd)) {
      return false;
    }
    _xs = xs.tl;
    continue ;
  };
}

function every(xs, p) {
  return everyU(xs, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(p));
}

function someU(_xs, p) {
  while(true) {
    var xs = _xs;
    if (!xs) {
      return false;
    }
    if (p(xs.hd)) {
      return true;
    }
    _xs = xs.tl;
    continue ;
  };
}

function some(xs, p) {
  return someU(xs, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(p));
}

function every2U(_l1, _l2, p) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (!l1) {
      return true;
    }
    if (!l2) {
      return true;
    }
    if (!p(l1.hd, l2.hd)) {
      return false;
    }
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue ;
  };
}

function every2(l1, l2, p) {
  return every2U(l1, l2, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(p));
}

function cmpByLength(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (!l1) {
      if (l2) {
        return -1;
      } else {
        return 0;
      }
    }
    if (!l2) {
      return 1;
    }
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue ;
  };
}

function cmpU(_l1, _l2, p) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (!l1) {
      if (l2) {
        return -1;
      } else {
        return 0;
      }
    }
    if (!l2) {
      return 1;
    }
    var c = p(l1.hd, l2.hd);
    if (c !== 0) {
      return c;
    }
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue ;
  };
}

function cmp(l1, l2, f) {
  return cmpU(l1, l2, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function eqU(_l1, _l2, p) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (!l1) {
      if (l2) {
        return false;
      } else {
        return true;
      }
    }
    if (!l2) {
      return false;
    }
    if (!p(l1.hd, l2.hd)) {
      return false;
    }
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue ;
  };
}

function eq(l1, l2, f) {
  return eqU(l1, l2, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function some2U(_l1, _l2, p) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (!l1) {
      return false;
    }
    if (!l2) {
      return false;
    }
    if (p(l1.hd, l2.hd)) {
      return true;
    }
    _l2 = l2.tl;
    _l1 = l1.tl;
    continue ;
  };
}

function some2(l1, l2, p) {
  return some2U(l1, l2, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(p));
}

function hasU(_xs, x, eq) {
  while(true) {
    var xs = _xs;
    if (!xs) {
      return false;
    }
    if (eq(xs.hd, x)) {
      return true;
    }
    _xs = xs.tl;
    continue ;
  };
}

function has(xs, x, eq) {
  return hasU(xs, x, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(eq));
}

function getAssocU(_xs, x, eq) {
  while(true) {
    var xs = _xs;
    if (!xs) {
      return ;
    }
    var match = xs.hd;
    if (eq(match[0], x)) {
      return _caml_option_js__WEBPACK_IMPORTED_MODULE_2__.some(match[1]);
    }
    _xs = xs.tl;
    continue ;
  };
}

function getAssoc(xs, x, eq) {
  return getAssocU(xs, x, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(eq));
}

function hasAssocU(_xs, x, eq) {
  while(true) {
    var xs = _xs;
    if (!xs) {
      return false;
    }
    if (eq(xs.hd[0], x)) {
      return true;
    }
    _xs = xs.tl;
    continue ;
  };
}

function hasAssoc(xs, x, eq) {
  return hasAssocU(xs, x, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(eq));
}

function removeAssocU(xs, x, eq) {
  if (!xs) {
    return /* [] */0;
  }
  var l = xs.tl;
  var pair = xs.hd;
  if (eq(pair[0], x)) {
    return l;
  }
  var cell = {
    hd: pair,
    tl: /* [] */0
  };
  var removed = removeAssocAuxWithMap(l, x, cell, eq);
  if (removed) {
    return cell;
  } else {
    return xs;
  }
}

function removeAssoc(xs, x, eq) {
  return removeAssocU(xs, x, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(eq));
}

function setAssocU(xs, x, k, eq) {
  if (!xs) {
    return {
            hd: [
              x,
              k
            ],
            tl: /* [] */0
          };
  }
  var l = xs.tl;
  var pair = xs.hd;
  if (eq(pair[0], x)) {
    return {
            hd: [
              x,
              k
            ],
            tl: l
          };
  }
  var cell = {
    hd: pair,
    tl: /* [] */0
  };
  var replaced = setAssocAuxWithMap(l, x, k, cell, eq);
  if (replaced) {
    return cell;
  } else {
    return {
            hd: [
              x,
              k
            ],
            tl: xs
          };
  }
}

function setAssoc(xs, x, k, eq) {
  return setAssocU(xs, x, k, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(eq));
}

function sortU(xs, cmp) {
  var arr = toArray(xs);
  _belt_SortArray_js__WEBPACK_IMPORTED_MODULE_3__.stableSortInPlaceByU(arr, cmp);
  return fromArray(arr);
}

function sort(xs, cmp) {
  return sortU(xs, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(cmp));
}

function getByU(_xs, p) {
  while(true) {
    var xs = _xs;
    if (!xs) {
      return ;
    }
    var x = xs.hd;
    if (p(x)) {
      return _caml_option_js__WEBPACK_IMPORTED_MODULE_2__.some(x);
    }
    _xs = xs.tl;
    continue ;
  };
}

function getBy(xs, p) {
  return getByU(xs, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(p));
}

function keepU(_xs, p) {
  while(true) {
    var xs = _xs;
    if (!xs) {
      return /* [] */0;
    }
    var t = xs.tl;
    var h = xs.hd;
    if (p(h)) {
      var cell = {
        hd: h,
        tl: /* [] */0
      };
      copyAuxWitFilter(p, t, cell);
      return cell;
    }
    _xs = t;
    continue ;
  };
}

function keep(xs, p) {
  return keepU(xs, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(p));
}

function keepWithIndexU(xs, p) {
  var _xs = xs;
  var _i = 0;
  while(true) {
    var i = _i;
    var xs$1 = _xs;
    if (!xs$1) {
      return /* [] */0;
    }
    var t = xs$1.tl;
    var h = xs$1.hd;
    if (p(h, i)) {
      var cell = {
        hd: h,
        tl: /* [] */0
      };
      copyAuxWithFilterIndex(p, t, cell, i + 1 | 0);
      return cell;
    }
    _i = i + 1 | 0;
    _xs = t;
    continue ;
  };
}

function keepWithIndex(xs, p) {
  return keepWithIndexU(xs, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(p));
}

function keepMapU(_xs, p) {
  while(true) {
    var xs = _xs;
    if (!xs) {
      return /* [] */0;
    }
    var t = xs.tl;
    var h = p(xs.hd);
    if (h !== undefined) {
      var cell = {
        hd: _caml_option_js__WEBPACK_IMPORTED_MODULE_2__.valFromOption(h),
        tl: /* [] */0
      };
      copyAuxWitFilterMap(p, t, cell);
      return cell;
    }
    _xs = t;
    continue ;
  };
}

function keepMap(xs, p) {
  return keepMapU(xs, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(p));
}

function partitionU(l, p) {
  if (!l) {
    return [
            /* [] */0,
            /* [] */0
          ];
  }
  var h = l.hd;
  var nextX = {
    hd: h,
    tl: /* [] */0
  };
  var nextY = {
    hd: h,
    tl: /* [] */0
  };
  var b = p(h);
  partitionAux(p, l.tl, nextX, nextY);
  if (b) {
    return [
            nextX,
            nextY.tl
          ];
  } else {
    return [
            nextX.tl,
            nextY
          ];
  }
}

function partition(l, p) {
  return partitionU(l, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(p));
}

function unzip(xs) {
  if (!xs) {
    return [
            /* [] */0,
            /* [] */0
          ];
  }
  var match = xs.hd;
  var cellX = {
    hd: match[0],
    tl: /* [] */0
  };
  var cellY = {
    hd: match[1],
    tl: /* [] */0
  };
  splitAux(xs.tl, cellX, cellY);
  return [
          cellX,
          cellY
        ];
}

function zip(l1, l2) {
  if (!l1) {
    return /* [] */0;
  }
  if (!l2) {
    return /* [] */0;
  }
  var cell = {
    hd: [
      l1.hd,
      l2.hd
    ],
    tl: /* [] */0
  };
  zipAux(l1.tl, l2.tl, cell);
  return cell;
}

var size = length;

var filter = keep;

var filterWithIndex = keepWithIndex;


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/belt_SortArray.js":
/*!*********************************************************!*\
  !*** ./node_modules/rescript/lib/es6/belt_SortArray.js ***!
  \*********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Int": function() { return /* binding */ Int; },
/* harmony export */   "$$String": function() { return /* binding */ $$String; },
/* harmony export */   "strictlySortedLengthU": function() { return /* binding */ strictlySortedLengthU; },
/* harmony export */   "strictlySortedLength": function() { return /* binding */ strictlySortedLength; },
/* harmony export */   "isSortedU": function() { return /* binding */ isSortedU; },
/* harmony export */   "isSorted": function() { return /* binding */ isSorted; },
/* harmony export */   "stableSortInPlaceByU": function() { return /* binding */ stableSortInPlaceByU; },
/* harmony export */   "stableSortInPlaceBy": function() { return /* binding */ stableSortInPlaceBy; },
/* harmony export */   "stableSortByU": function() { return /* binding */ stableSortByU; },
/* harmony export */   "stableSortBy": function() { return /* binding */ stableSortBy; },
/* harmony export */   "binarySearchByU": function() { return /* binding */ binarySearchByU; },
/* harmony export */   "binarySearchBy": function() { return /* binding */ binarySearchBy; },
/* harmony export */   "unionU": function() { return /* binding */ unionU; },
/* harmony export */   "union": function() { return /* binding */ union; },
/* harmony export */   "intersectU": function() { return /* binding */ intersectU; },
/* harmony export */   "intersect": function() { return /* binding */ intersect; },
/* harmony export */   "diffU": function() { return /* binding */ diffU; },
/* harmony export */   "diff": function() { return /* binding */ diff; }
/* harmony export */ });
/* harmony import */ var _curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry.js */ "./node_modules/rescript/lib/es6/curry.js");
/* harmony import */ var _belt_Array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./belt_Array.js */ "./node_modules/rescript/lib/es6/belt_Array.js");





function sortedLengthAuxMore(xs, _prec, _acc, len, lt) {
  while(true) {
    var acc = _acc;
    var prec = _prec;
    if (acc >= len) {
      return acc;
    }
    var v = xs[acc];
    if (!lt(v, prec)) {
      return acc;
    }
    _acc = acc + 1 | 0;
    _prec = v;
    continue ;
  };
}

function strictlySortedLengthU(xs, lt) {
  var len = xs.length;
  if (len === 0 || len === 1) {
    return len;
  }
  var x0 = xs[0];
  var x1 = xs[1];
  if (lt(x0, x1)) {
    var _prec = x1;
    var _acc = 2;
    while(true) {
      var acc = _acc;
      var prec = _prec;
      if (acc >= len) {
        return acc;
      }
      var v = xs[acc];
      if (!lt(prec, v)) {
        return acc;
      }
      _acc = acc + 1 | 0;
      _prec = v;
      continue ;
    };
  } else if (lt(x1, x0)) {
    return -sortedLengthAuxMore(xs, x1, 2, len, lt) | 0;
  } else {
    return 1;
  }
}

function strictlySortedLength(xs, lt) {
  return strictlySortedLengthU(xs, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(lt));
}

function isSortedU(a, cmp) {
  var len = a.length;
  if (len === 0) {
    return true;
  } else {
    var _i = 0;
    var last_bound = len - 1 | 0;
    while(true) {
      var i = _i;
      if (i === last_bound) {
        return true;
      }
      if (cmp(a[i], a[i + 1 | 0]) > 0) {
        return false;
      }
      _i = i + 1 | 0;
      continue ;
    };
  }
}

function isSorted(a, cmp) {
  return isSortedU(a, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(cmp));
}

function merge(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  var src1r = src1ofs + src1len | 0;
  var src2r = src2ofs + src2len | 0;
  var _i1 = src1ofs;
  var _s1 = src[src1ofs];
  var _i2 = src2ofs;
  var _s2 = src2[src2ofs];
  var _d = dstofs;
  while(true) {
    var d = _d;
    var s2 = _s2;
    var i2 = _i2;
    var s1 = _s1;
    var i1 = _i1;
    if (cmp(s1, s2) <= 0) {
      dst[d] = s1;
      var i1$1 = i1 + 1 | 0;
      if (i1$1 >= src1r) {
        return _belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.blitUnsafe(src2, i2, dst, d + 1 | 0, src2r - i2 | 0);
      }
      _d = d + 1 | 0;
      _s1 = src[i1$1];
      _i1 = i1$1;
      continue ;
    }
    dst[d] = s2;
    var i2$1 = i2 + 1 | 0;
    if (i2$1 >= src2r) {
      return _belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.blitUnsafe(src, i1, dst, d + 1 | 0, src1r - i1 | 0);
    }
    _d = d + 1 | 0;
    _s2 = src2[i2$1];
    _i2 = i2$1;
    continue ;
  };
}

function unionU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  var src1r = src1ofs + src1len | 0;
  var src2r = src2ofs + src2len | 0;
  var _i1 = src1ofs;
  var _s1 = src[src1ofs];
  var _i2 = src2ofs;
  var _s2 = src2[src2ofs];
  var _d = dstofs;
  while(true) {
    var d = _d;
    var s2 = _s2;
    var i2 = _i2;
    var s1 = _s1;
    var i1 = _i1;
    var c = cmp(s1, s2);
    if (c < 0) {
      dst[d] = s1;
      var i1$1 = i1 + 1 | 0;
      var d$1 = d + 1 | 0;
      if (i1$1 < src1r) {
        _d = d$1;
        _s1 = src[i1$1];
        _i1 = i1$1;
        continue ;
      }
      _belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.blitUnsafe(src2, i2, dst, d$1, src2r - i2 | 0);
      return (d$1 + src2r | 0) - i2 | 0;
    }
    if (c === 0) {
      dst[d] = s1;
      var i1$2 = i1 + 1 | 0;
      var i2$1 = i2 + 1 | 0;
      var d$2 = d + 1 | 0;
      if (!(i1$2 < src1r && i2$1 < src2r)) {
        if (i1$2 === src1r) {
          _belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.blitUnsafe(src2, i2$1, dst, d$2, src2r - i2$1 | 0);
          return (d$2 + src2r | 0) - i2$1 | 0;
        } else {
          _belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.blitUnsafe(src, i1$2, dst, d$2, src1r - i1$2 | 0);
          return (d$2 + src1r | 0) - i1$2 | 0;
        }
      }
      _d = d$2;
      _s2 = src2[i2$1];
      _i2 = i2$1;
      _s1 = src[i1$2];
      _i1 = i1$2;
      continue ;
    }
    dst[d] = s2;
    var i2$2 = i2 + 1 | 0;
    var d$3 = d + 1 | 0;
    if (i2$2 < src2r) {
      _d = d$3;
      _s2 = src2[i2$2];
      _i2 = i2$2;
      continue ;
    }
    _belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.blitUnsafe(src, i1, dst, d$3, src1r - i1 | 0);
    return (d$3 + src1r | 0) - i1 | 0;
  };
}

function union(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  return unionU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(cmp));
}

function intersectU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  var src1r = src1ofs + src1len | 0;
  var src2r = src2ofs + src2len | 0;
  var _i1 = src1ofs;
  var _s1 = src[src1ofs];
  var _i2 = src2ofs;
  var _s2 = src2[src2ofs];
  var _d = dstofs;
  while(true) {
    var d = _d;
    var s2 = _s2;
    var i2 = _i2;
    var s1 = _s1;
    var i1 = _i1;
    var c = cmp(s1, s2);
    if (c < 0) {
      var i1$1 = i1 + 1 | 0;
      if (i1$1 >= src1r) {
        return d;
      }
      _s1 = src[i1$1];
      _i1 = i1$1;
      continue ;
    }
    if (c === 0) {
      dst[d] = s1;
      var i1$2 = i1 + 1 | 0;
      var i2$1 = i2 + 1 | 0;
      var d$1 = d + 1 | 0;
      if (!(i1$2 < src1r && i2$1 < src2r)) {
        return d$1;
      }
      _d = d$1;
      _s2 = src2[i2$1];
      _i2 = i2$1;
      _s1 = src[i1$2];
      _i1 = i1$2;
      continue ;
    }
    var i2$2 = i2 + 1 | 0;
    if (i2$2 >= src2r) {
      return d;
    }
    _s2 = src2[i2$2];
    _i2 = i2$2;
    continue ;
  };
}

function intersect(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  return intersectU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(cmp));
}

function diffU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  var src1r = src1ofs + src1len | 0;
  var src2r = src2ofs + src2len | 0;
  var _i1 = src1ofs;
  var _s1 = src[src1ofs];
  var _i2 = src2ofs;
  var _s2 = src2[src2ofs];
  var _d = dstofs;
  while(true) {
    var d = _d;
    var s2 = _s2;
    var i2 = _i2;
    var s1 = _s1;
    var i1 = _i1;
    var c = cmp(s1, s2);
    if (c < 0) {
      dst[d] = s1;
      var d$1 = d + 1 | 0;
      var i1$1 = i1 + 1 | 0;
      if (i1$1 >= src1r) {
        return d$1;
      }
      _d = d$1;
      _s1 = src[i1$1];
      _i1 = i1$1;
      continue ;
    }
    if (c === 0) {
      var i1$2 = i1 + 1 | 0;
      var i2$1 = i2 + 1 | 0;
      if (!(i1$2 < src1r && i2$1 < src2r)) {
        if (i1$2 === src1r) {
          return d;
        } else {
          _belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.blitUnsafe(src, i1$2, dst, d, src1r - i1$2 | 0);
          return (d + src1r | 0) - i1$2 | 0;
        }
      }
      _s2 = src2[i2$1];
      _i2 = i2$1;
      _s1 = src[i1$2];
      _i1 = i1$2;
      continue ;
    }
    var i2$2 = i2 + 1 | 0;
    if (i2$2 < src2r) {
      _s2 = src2[i2$2];
      _i2 = i2$2;
      continue ;
    }
    _belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.blitUnsafe(src, i1, dst, d, src1r - i1 | 0);
    return (d + src1r | 0) - i1 | 0;
  };
}

function diff(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, cmp) {
  return diffU(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(cmp));
}

function insertionSort(src, srcofs, dst, dstofs, len, cmp) {
  for(var i = 0; i < len; ++i){
    var e = src[srcofs + i | 0];
    var j = (dstofs + i | 0) - 1 | 0;
    while(j >= dstofs && cmp(dst[j], e) > 0) {
      dst[j + 1 | 0] = dst[j];
      j = j - 1 | 0;
    };
    dst[j + 1 | 0] = e;
  }
  
}

function sortTo(src, srcofs, dst, dstofs, len, cmp) {
  if (len <= 5) {
    return insertionSort(src, srcofs, dst, dstofs, len, cmp);
  }
  var l1 = len / 2 | 0;
  var l2 = len - l1 | 0;
  sortTo(src, srcofs + l1 | 0, dst, dstofs + l1 | 0, l2, cmp);
  sortTo(src, srcofs, src, srcofs + l2 | 0, l1, cmp);
  return merge(src, srcofs + l2 | 0, l1, dst, dstofs + l1 | 0, l2, dst, dstofs, cmp);
}

function stableSortInPlaceByU(a, cmp) {
  var l = a.length;
  if (l <= 5) {
    return insertionSort(a, 0, a, 0, l, cmp);
  }
  var l1 = l / 2 | 0;
  var l2 = l - l1 | 0;
  var t = new Array(l2);
  sortTo(a, l1, t, 0, l2, cmp);
  sortTo(a, 0, a, l2, l1, cmp);
  return merge(a, l2, l1, t, 0, l2, a, 0, cmp);
}

function stableSortInPlaceBy(a, cmp) {
  return stableSortInPlaceByU(a, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(cmp));
}

function stableSortByU(a, cmp) {
  var b = a.slice(0);
  stableSortInPlaceByU(b, cmp);
  return b;
}

function stableSortBy(a, cmp) {
  return stableSortByU(a, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(cmp));
}

function binarySearchByU(sorted, key, cmp) {
  var len = sorted.length;
  if (len === 0) {
    return -1;
  }
  var lo = sorted[0];
  var c = cmp(key, lo);
  if (c < 0) {
    return -1;
  }
  var hi = sorted[len - 1 | 0];
  var c2 = cmp(key, hi);
  if (c2 > 0) {
    return -(len + 1 | 0) | 0;
  } else {
    var _lo = 0;
    var _hi = len - 1 | 0;
    while(true) {
      var hi$1 = _hi;
      var lo$1 = _lo;
      var mid = (lo$1 + hi$1 | 0) / 2 | 0;
      var midVal = sorted[mid];
      var c$1 = cmp(key, midVal);
      if (c$1 === 0) {
        return mid;
      }
      if (c$1 < 0) {
        if (hi$1 === mid) {
          if (cmp(sorted[lo$1], key) === 0) {
            return lo$1;
          } else {
            return -(hi$1 + 1 | 0) | 0;
          }
        }
        _hi = mid;
        continue ;
      }
      if (lo$1 === mid) {
        if (cmp(sorted[hi$1], key) === 0) {
          return hi$1;
        } else {
          return -(hi$1 + 1 | 0) | 0;
        }
      }
      _lo = mid;
      continue ;
    };
  }
}

function binarySearchBy(sorted, key, cmp) {
  return binarySearchByU(sorted, key, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(cmp));
}

var Int;

var $$String;


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/caml.js":
/*!***********************************************!*\
  !*** ./node_modules/rescript/lib/es6/caml.js ***!
  \***********************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "caml_int_compare": function() { return /* binding */ caml_int_compare; },
/* harmony export */   "caml_bool_compare": function() { return /* binding */ caml_bool_compare; },
/* harmony export */   "caml_float_compare": function() { return /* binding */ caml_float_compare; },
/* harmony export */   "caml_string_compare": function() { return /* binding */ caml_string_compare; },
/* harmony export */   "caml_bool_min": function() { return /* binding */ caml_bool_min; },
/* harmony export */   "caml_int_min": function() { return /* binding */ caml_int_min; },
/* harmony export */   "caml_float_min": function() { return /* binding */ caml_float_min; },
/* harmony export */   "caml_string_min": function() { return /* binding */ caml_string_min; },
/* harmony export */   "caml_int32_min": function() { return /* binding */ caml_int32_min; },
/* harmony export */   "caml_bool_max": function() { return /* binding */ caml_bool_max; },
/* harmony export */   "caml_int_max": function() { return /* binding */ caml_int_max; },
/* harmony export */   "caml_float_max": function() { return /* binding */ caml_float_max; },
/* harmony export */   "caml_string_max": function() { return /* binding */ caml_string_max; },
/* harmony export */   "caml_int32_max": function() { return /* binding */ caml_int32_max; },
/* harmony export */   "i64_eq": function() { return /* binding */ i64_eq; },
/* harmony export */   "i64_neq": function() { return /* binding */ i64_neq; },
/* harmony export */   "i64_lt": function() { return /* binding */ i64_lt; },
/* harmony export */   "i64_gt": function() { return /* binding */ i64_gt; },
/* harmony export */   "i64_le": function() { return /* binding */ i64_le; },
/* harmony export */   "i64_ge": function() { return /* binding */ i64_ge; },
/* harmony export */   "i64_min": function() { return /* binding */ i64_min; },
/* harmony export */   "i64_max": function() { return /* binding */ i64_max; }
/* harmony export */ });



function caml_int_compare(x, y) {
  if (x < y) {
    return -1;
  } else if (x === y) {
    return 0;
  } else {
    return 1;
  }
}

function caml_bool_compare(x, y) {
  if (x) {
    if (y) {
      return 0;
    } else {
      return 1;
    }
  } else if (y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_float_compare(x, y) {
  if (x === y) {
    return 0;
  } else if (x < y) {
    return -1;
  } else if (x > y || x === x) {
    return 1;
  } else if (y === y) {
    return -1;
  } else {
    return 0;
  }
}

function caml_string_compare(s1, s2) {
  if (s1 === s2) {
    return 0;
  } else if (s1 < s2) {
    return -1;
  } else {
    return 1;
  }
}

function caml_bool_min(x, y) {
  if (x) {
    return y;
  } else {
    return x;
  }
}

function caml_int_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_min(x, y) {
  if (x < y) {
    return x;
  } else {
    return y;
  }
}

function caml_bool_max(x, y) {
  if (x) {
    return x;
  } else {
    return y;
  }
}

function caml_int_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_float_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_string_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function caml_int32_max(x, y) {
  if (x > y) {
    return x;
  } else {
    return y;
  }
}

function i64_eq(x, y) {
  if (x[1] === y[1]) {
    return x[0] === y[0];
  } else {
    return false;
  }
}

function i64_ge(param, param$1) {
  var other_hi = param$1[0];
  var hi = param[0];
  if (hi > other_hi) {
    return true;
  } else if (hi < other_hi) {
    return false;
  } else {
    return param[1] >= param$1[1];
  }
}

function i64_neq(x, y) {
  return !i64_eq(x, y);
}

function i64_lt(x, y) {
  return !i64_ge(x, y);
}

function i64_gt(x, y) {
  if (x[0] > y[0]) {
    return true;
  } else if (x[0] < y[0]) {
    return false;
  } else {
    return x[1] > y[1];
  }
}

function i64_le(x, y) {
  return !i64_gt(x, y);
}

function i64_min(x, y) {
  if (i64_ge(x, y)) {
    return y;
  } else {
    return x;
  }
}

function i64_max(x, y) {
  if (i64_gt(x, y)) {
    return x;
  } else {
    return y;
  }
}


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/caml_array.js":
/*!*****************************************************!*\
  !*** ./node_modules/rescript/lib/es6/caml_array.js ***!
  \*****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "dup": function() { return /* binding */ dup; },
/* harmony export */   "sub": function() { return /* binding */ sub; },
/* harmony export */   "concat": function() { return /* binding */ concat; },
/* harmony export */   "make": function() { return /* binding */ make; },
/* harmony export */   "make_float": function() { return /* binding */ make_float; },
/* harmony export */   "blit": function() { return /* binding */ blit; },
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "set": function() { return /* binding */ set; }
/* harmony export */ });



function sub(x, offset, len) {
  var result = new Array(len);
  var j = 0;
  var i = offset;
  while(j < len) {
    result[j] = x[i];
    j = j + 1 | 0;
    i = i + 1 | 0;
  };
  return result;
}

function len(_acc, _l) {
  while(true) {
    var l = _l;
    var acc = _acc;
    if (!l) {
      return acc;
    }
    _l = l.tl;
    _acc = l.hd.length + acc | 0;
    continue ;
  };
}

function fill(arr, _i, _l) {
  while(true) {
    var l = _l;
    var i = _i;
    if (!l) {
      return ;
    }
    var x = l.hd;
    var l$1 = x.length;
    var k = i;
    var j = 0;
    while(j < l$1) {
      arr[k] = x[j];
      k = k + 1 | 0;
      j = j + 1 | 0;
    };
    _l = l.tl;
    _i = k;
    continue ;
  };
}

function concat(l) {
  var v = len(0, l);
  var result = new Array(v);
  fill(result, 0, l);
  return result;
}

function set(xs, index, newval) {
  if (index < 0 || index >= xs.length) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
  }
  xs[index] = newval;
  
}

function get(xs, index) {
  if (index < 0 || index >= xs.length) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "index out of bounds",
          Error: new Error()
        };
  }
  return xs[index];
}

function make(len, init) {
  var b = new Array(len);
  for(var i = 0; i < len; ++i){
    b[i] = init;
  }
  return b;
}

function make_float(len) {
  var b = new Array(len);
  for(var i = 0; i < len; ++i){
    b[i] = 0;
  }
  return b;
}

function blit(a1, i1, a2, i2, len) {
  if (i2 <= i1) {
    for(var j = 0; j < len; ++j){
      a2[j + i2 | 0] = a1[j + i1 | 0];
    }
    return ;
  }
  for(var j$1 = len - 1 | 0; j$1 >= 0; --j$1){
    a2[j$1 + i2 | 0] = a1[j$1 + i1 | 0];
  }
  
}

function dup(prim) {
  return prim.slice(0);
}


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/caml_exceptions.js":
/*!**********************************************************!*\
  !*** ./node_modules/rescript/lib/es6/caml_exceptions.js ***!
  \**********************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "id": function() { return /* binding */ id; },
/* harmony export */   "create": function() { return /* binding */ create; },
/* harmony export */   "caml_is_extension": function() { return /* binding */ caml_is_extension; },
/* harmony export */   "caml_exn_slot_name": function() { return /* binding */ caml_exn_slot_name; }
/* harmony export */ });



var id = {
  contents: 0
};

function create(str) {
  id.contents = id.contents + 1 | 0;
  return str + ("/" + id.contents);
}

function caml_is_extension(e) {
  if (e == null) {
    return false;
  } else {
    return typeof e.RE_EXN_ID === "string";
  }
}

function caml_exn_slot_name(x) {
  return x.RE_EXN_ID;
}


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/caml_js_exceptions.js":
/*!*************************************************************!*\
  !*** ./node_modules/rescript/lib/es6/caml_js_exceptions.js ***!
  \*************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$Error": function() { return /* binding */ $$Error; },
/* harmony export */   "internalToOCamlException": function() { return /* binding */ internalToOCamlException; },
/* harmony export */   "caml_as_js_exn": function() { return /* binding */ caml_as_js_exn; }
/* harmony export */ });
/* harmony import */ var _caml_option_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_option.js */ "./node_modules/rescript/lib/es6/caml_option.js");
/* harmony import */ var _caml_exceptions_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caml_exceptions.js */ "./node_modules/rescript/lib/es6/caml_exceptions.js");





var $$Error = /* @__PURE__ */_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_1__.create("Caml_js_exceptions.Error");

function internalToOCamlException(e) {
  if (_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_1__.caml_is_extension(e)) {
    return e;
  } else {
    return {
            RE_EXN_ID: $$Error,
            _1: e
          };
  }
}

function caml_as_js_exn(exn) {
  if (exn.RE_EXN_ID === $$Error) {
    return _caml_option_js__WEBPACK_IMPORTED_MODULE_0__.some(exn._1);
  }
  
}


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/caml_option.js":
/*!******************************************************!*\
  !*** ./node_modules/rescript/lib/es6/caml_option.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "nullable_to_opt": function() { return /* binding */ nullable_to_opt; },
/* harmony export */   "undefined_to_opt": function() { return /* binding */ undefined_to_opt; },
/* harmony export */   "null_to_opt": function() { return /* binding */ null_to_opt; },
/* harmony export */   "valFromOption": function() { return /* binding */ valFromOption; },
/* harmony export */   "some": function() { return /* binding */ some; },
/* harmony export */   "isNested": function() { return /* binding */ isNested; },
/* harmony export */   "option_get": function() { return /* binding */ option_get; },
/* harmony export */   "option_unwrap": function() { return /* binding */ option_unwrap; }
/* harmony export */ });



function isNested(x) {
  return x.BS_PRIVATE_NESTED_SOME_NONE !== undefined;
}

function some(x) {
  if (x === undefined) {
    return {
            BS_PRIVATE_NESTED_SOME_NONE: 0
          };
  } else if (x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
    return {
            BS_PRIVATE_NESTED_SOME_NONE: x.BS_PRIVATE_NESTED_SOME_NONE + 1 | 0
          };
  } else {
    return x;
  }
}

function nullable_to_opt(x) {
  if (x == null) {
    return ;
  } else {
    return some(x);
  }
}

function undefined_to_opt(x) {
  if (x === undefined) {
    return ;
  } else {
    return some(x);
  }
}

function null_to_opt(x) {
  if (x === null) {
    return ;
  } else {
    return some(x);
  }
}

function valFromOption(x) {
  if (!(x !== null && x.BS_PRIVATE_NESTED_SOME_NONE !== undefined)) {
    return x;
  }
  var depth = x.BS_PRIVATE_NESTED_SOME_NONE;
  if (depth === 0) {
    return ;
  } else {
    return {
            BS_PRIVATE_NESTED_SOME_NONE: depth - 1 | 0
          };
  }
}

function option_get(x) {
  if (x === undefined) {
    return ;
  } else {
    return valFromOption(x);
  }
}

function option_unwrap(x) {
  if (x !== undefined) {
    return x.VAL;
  } else {
    return x;
  }
}


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/curry.js":
/*!************************************************!*\
  !*** ./node_modules/rescript/lib/es6/curry.js ***!
  \************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "app": function() { return /* binding */ app; },
/* harmony export */   "_1": function() { return /* binding */ _1; },
/* harmony export */   "__1": function() { return /* binding */ __1; },
/* harmony export */   "_2": function() { return /* binding */ _2; },
/* harmony export */   "__2": function() { return /* binding */ __2; },
/* harmony export */   "_3": function() { return /* binding */ _3; },
/* harmony export */   "__3": function() { return /* binding */ __3; },
/* harmony export */   "_4": function() { return /* binding */ _4; },
/* harmony export */   "__4": function() { return /* binding */ __4; },
/* harmony export */   "_5": function() { return /* binding */ _5; },
/* harmony export */   "__5": function() { return /* binding */ __5; },
/* harmony export */   "_6": function() { return /* binding */ _6; },
/* harmony export */   "__6": function() { return /* binding */ __6; },
/* harmony export */   "_7": function() { return /* binding */ _7; },
/* harmony export */   "__7": function() { return /* binding */ __7; },
/* harmony export */   "_8": function() { return /* binding */ _8; },
/* harmony export */   "__8": function() { return /* binding */ __8; }
/* harmony export */ });
/* harmony import */ var _caml_array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_array.js */ "./node_modules/rescript/lib/es6/caml_array.js");




function app(_f, _args) {
  while(true) {
    var args = _args;
    var f = _f;
    var init_arity = f.length;
    var arity = init_arity === 0 ? 1 : init_arity;
    var len = args.length;
    var d = arity - len | 0;
    if (d === 0) {
      return f.apply(null, args);
    }
    if (d >= 0) {
      return (function(f,args){
      return function (x) {
        return app(f, args.concat([x]));
      }
      }(f,args));
    }
    _args = _caml_array_js__WEBPACK_IMPORTED_MODULE_0__.sub(args, arity, -d | 0);
    _f = f.apply(null, _caml_array_js__WEBPACK_IMPORTED_MODULE_0__.sub(args, 0, arity));
    continue ;
  };
}

function _1(o, a0) {
  var arity = o.length;
  if (arity === 1) {
    return o(a0);
  } else {
    switch (arity) {
      case 1 :
          return o(a0);
      case 2 :
          return function (param) {
            return o(a0, param);
          };
      case 3 :
          return function (param, param$1) {
            return o(a0, param, param$1);
          };
      case 4 :
          return function (param, param$1, param$2) {
            return o(a0, param, param$1, param$2);
          };
      case 5 :
          return function (param, param$1, param$2, param$3) {
            return o(a0, param, param$1, param$2, param$3);
          };
      case 6 :
          return function (param, param$1, param$2, param$3, param$4) {
            return o(a0, param, param$1, param$2, param$3, param$4);
          };
      case 7 :
          return function (param, param$1, param$2, param$3, param$4, param$5) {
            return o(a0, param, param$1, param$2, param$3, param$4, param$5);
          };
      default:
        return app(o, [a0]);
    }
  }
}

function __1(o) {
  var arity = o.length;
  if (arity === 1) {
    return o;
  } else {
    return function (a0) {
      return _1(o, a0);
    };
  }
}

function _2(o, a0, a1) {
  var arity = o.length;
  if (arity === 2) {
    return o(a0, a1);
  } else {
    switch (arity) {
      case 1 :
          return app(o(a0), [a1]);
      case 2 :
          return o(a0, a1);
      case 3 :
          return function (param) {
            return o(a0, a1, param);
          };
      case 4 :
          return function (param, param$1) {
            return o(a0, a1, param, param$1);
          };
      case 5 :
          return function (param, param$1, param$2) {
            return o(a0, a1, param, param$1, param$2);
          };
      case 6 :
          return function (param, param$1, param$2, param$3) {
            return o(a0, a1, param, param$1, param$2, param$3);
          };
      case 7 :
          return function (param, param$1, param$2, param$3, param$4) {
            return o(a0, a1, param, param$1, param$2, param$3, param$4);
          };
      default:
        return app(o, [
                    a0,
                    a1
                  ]);
    }
  }
}

function __2(o) {
  var arity = o.length;
  if (arity === 2) {
    return o;
  } else {
    return function (a0, a1) {
      return _2(o, a0, a1);
    };
  }
}

function _3(o, a0, a1, a2) {
  var arity = o.length;
  if (arity === 3) {
    return o(a0, a1, a2);
  } else {
    switch (arity) {
      case 1 :
          return app(o(a0), [
                      a1,
                      a2
                    ]);
      case 2 :
          return app(o(a0, a1), [a2]);
      case 3 :
          return o(a0, a1, a2);
      case 4 :
          return function (param) {
            return o(a0, a1, a2, param);
          };
      case 5 :
          return function (param, param$1) {
            return o(a0, a1, a2, param, param$1);
          };
      case 6 :
          return function (param, param$1, param$2) {
            return o(a0, a1, a2, param, param$1, param$2);
          };
      case 7 :
          return function (param, param$1, param$2, param$3) {
            return o(a0, a1, a2, param, param$1, param$2, param$3);
          };
      default:
        return app(o, [
                    a0,
                    a1,
                    a2
                  ]);
    }
  }
}

function __3(o) {
  var arity = o.length;
  if (arity === 3) {
    return o;
  } else {
    return function (a0, a1, a2) {
      return _3(o, a0, a1, a2);
    };
  }
}

function _4(o, a0, a1, a2, a3) {
  var arity = o.length;
  if (arity === 4) {
    return o(a0, a1, a2, a3);
  } else {
    switch (arity) {
      case 1 :
          return app(o(a0), [
                      a1,
                      a2,
                      a3
                    ]);
      case 2 :
          return app(o(a0, a1), [
                      a2,
                      a3
                    ]);
      case 3 :
          return app(o(a0, a1, a2), [a3]);
      case 4 :
          return o(a0, a1, a2, a3);
      case 5 :
          return function (param) {
            return o(a0, a1, a2, a3, param);
          };
      case 6 :
          return function (param, param$1) {
            return o(a0, a1, a2, a3, param, param$1);
          };
      case 7 :
          return function (param, param$1, param$2) {
            return o(a0, a1, a2, a3, param, param$1, param$2);
          };
      default:
        return app(o, [
                    a0,
                    a1,
                    a2,
                    a3
                  ]);
    }
  }
}

function __4(o) {
  var arity = o.length;
  if (arity === 4) {
    return o;
  } else {
    return function (a0, a1, a2, a3) {
      return _4(o, a0, a1, a2, a3);
    };
  }
}

function _5(o, a0, a1, a2, a3, a4) {
  var arity = o.length;
  if (arity === 5) {
    return o(a0, a1, a2, a3, a4);
  } else {
    switch (arity) {
      case 1 :
          return app(o(a0), [
                      a1,
                      a2,
                      a3,
                      a4
                    ]);
      case 2 :
          return app(o(a0, a1), [
                      a2,
                      a3,
                      a4
                    ]);
      case 3 :
          return app(o(a0, a1, a2), [
                      a3,
                      a4
                    ]);
      case 4 :
          return app(o(a0, a1, a2, a3), [a4]);
      case 5 :
          return o(a0, a1, a2, a3, a4);
      case 6 :
          return function (param) {
            return o(a0, a1, a2, a3, a4, param);
          };
      case 7 :
          return function (param, param$1) {
            return o(a0, a1, a2, a3, a4, param, param$1);
          };
      default:
        return app(o, [
                    a0,
                    a1,
                    a2,
                    a3,
                    a4
                  ]);
    }
  }
}

function __5(o) {
  var arity = o.length;
  if (arity === 5) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4) {
      return _5(o, a0, a1, a2, a3, a4);
    };
  }
}

function _6(o, a0, a1, a2, a3, a4, a5) {
  var arity = o.length;
  if (arity === 6) {
    return o(a0, a1, a2, a3, a4, a5);
  } else {
    switch (arity) {
      case 1 :
          return app(o(a0), [
                      a1,
                      a2,
                      a3,
                      a4,
                      a5
                    ]);
      case 2 :
          return app(o(a0, a1), [
                      a2,
                      a3,
                      a4,
                      a5
                    ]);
      case 3 :
          return app(o(a0, a1, a2), [
                      a3,
                      a4,
                      a5
                    ]);
      case 4 :
          return app(o(a0, a1, a2, a3), [
                      a4,
                      a5
                    ]);
      case 5 :
          return app(o(a0, a1, a2, a3, a4), [a5]);
      case 6 :
          return o(a0, a1, a2, a3, a4, a5);
      case 7 :
          return function (param) {
            return o(a0, a1, a2, a3, a4, a5, param);
          };
      default:
        return app(o, [
                    a0,
                    a1,
                    a2,
                    a3,
                    a4,
                    a5
                  ]);
    }
  }
}

function __6(o) {
  var arity = o.length;
  if (arity === 6) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4, a5) {
      return _6(o, a0, a1, a2, a3, a4, a5);
    };
  }
}

function _7(o, a0, a1, a2, a3, a4, a5, a6) {
  var arity = o.length;
  if (arity === 7) {
    return o(a0, a1, a2, a3, a4, a5, a6);
  } else {
    switch (arity) {
      case 1 :
          return app(o(a0), [
                      a1,
                      a2,
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 2 :
          return app(o(a0, a1), [
                      a2,
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 3 :
          return app(o(a0, a1, a2), [
                      a3,
                      a4,
                      a5,
                      a6
                    ]);
      case 4 :
          return app(o(a0, a1, a2, a3), [
                      a4,
                      a5,
                      a6
                    ]);
      case 5 :
          return app(o(a0, a1, a2, a3, a4), [
                      a5,
                      a6
                    ]);
      case 6 :
          return app(o(a0, a1, a2, a3, a4, a5), [a6]);
      case 7 :
          return o(a0, a1, a2, a3, a4, a5, a6);
      default:
        return app(o, [
                    a0,
                    a1,
                    a2,
                    a3,
                    a4,
                    a5,
                    a6
                  ]);
    }
  }
}

function __7(o) {
  var arity = o.length;
  if (arity === 7) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4, a5, a6) {
      return _7(o, a0, a1, a2, a3, a4, a5, a6);
    };
  }
}

function _8(o, a0, a1, a2, a3, a4, a5, a6, a7) {
  var arity = o.length;
  if (arity === 8) {
    return o(a0, a1, a2, a3, a4, a5, a6, a7);
  } else {
    switch (arity) {
      case 1 :
          return app(o(a0), [
                      a1,
                      a2,
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 2 :
          return app(o(a0, a1), [
                      a2,
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 3 :
          return app(o(a0, a1, a2), [
                      a3,
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 4 :
          return app(o(a0, a1, a2, a3), [
                      a4,
                      a5,
                      a6,
                      a7
                    ]);
      case 5 :
          return app(o(a0, a1, a2, a3, a4), [
                      a5,
                      a6,
                      a7
                    ]);
      case 6 :
          return app(o(a0, a1, a2, a3, a4, a5), [
                      a6,
                      a7
                    ]);
      case 7 :
          return app(o(a0, a1, a2, a3, a4, a5, a6), [a7]);
      default:
        return app(o, [
                    a0,
                    a1,
                    a2,
                    a3,
                    a4,
                    a5,
                    a6,
                    a7
                  ]);
    }
  }
}

function __8(o) {
  var arity = o.length;
  if (arity === 8) {
    return o;
  } else {
    return function (a0, a1, a2, a3, a4, a5, a6, a7) {
      return _8(o, a0, a1, a2, a3, a4, a5, a6, a7);
    };
  }
}


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/js_exn.js":
/*!*************************************************!*\
  !*** ./node_modules/rescript/lib/es6/js_exn.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "$$Error": function() { return /* binding */ $$Error$1; },
/* harmony export */   "anyToExnInternal": function() { return /* binding */ anyToExnInternal; },
/* harmony export */   "raiseError": function() { return /* binding */ raiseError; },
/* harmony export */   "raiseEvalError": function() { return /* binding */ raiseEvalError; },
/* harmony export */   "raiseRangeError": function() { return /* binding */ raiseRangeError; },
/* harmony export */   "raiseReferenceError": function() { return /* binding */ raiseReferenceError; },
/* harmony export */   "raiseSyntaxError": function() { return /* binding */ raiseSyntaxError; },
/* harmony export */   "raiseTypeError": function() { return /* binding */ raiseTypeError; },
/* harmony export */   "raiseUriError": function() { return /* binding */ raiseUriError; }
/* harmony export */ });
/* harmony import */ var _caml_js_exceptions_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_js_exceptions.js */ "./node_modules/rescript/lib/es6/caml_js_exceptions.js");




var anyToExnInternal = _caml_js_exceptions_js__WEBPACK_IMPORTED_MODULE_0__.internalToOCamlException;

function raiseError(str) {
  throw new Error(str);
}

function raiseEvalError(str) {
  throw new EvalError(str);
}

function raiseRangeError(str) {
  throw new RangeError(str);
}

function raiseReferenceError(str) {
  throw new ReferenceError(str);
}

function raiseSyntaxError(str) {
  throw new SyntaxError(str);
}

function raiseTypeError(str) {
  throw new TypeError(str);
}

function raiseUriError(str) {
  throw new URIError(str);
}

var $$Error$1 = _caml_js_exceptions_js__WEBPACK_IMPORTED_MODULE_0__.$$Error;


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/js_int.js":
/*!*************************************************!*\
  !*** ./node_modules/rescript/lib/es6/js_int.js ***!
  \*************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "equal": function() { return /* binding */ equal; },
/* harmony export */   "max": function() { return /* binding */ max; },
/* harmony export */   "min": function() { return /* binding */ min; }
/* harmony export */ });



function equal(x, y) {
  return x === y;
}

var max = 2147483647;

var min = -2147483648;


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/js_list.js":
/*!**************************************************!*\
  !*** ./node_modules/rescript/lib/es6/js_list.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "length": function() { return /* binding */ length; },
/* harmony export */   "cons": function() { return /* binding */ cons; },
/* harmony export */   "isEmpty": function() { return /* binding */ isEmpty; },
/* harmony export */   "hd": function() { return /* binding */ hd; },
/* harmony export */   "tl": function() { return /* binding */ tl; },
/* harmony export */   "nth": function() { return /* binding */ nth; },
/* harmony export */   "revAppend": function() { return /* binding */ revAppend; },
/* harmony export */   "rev": function() { return /* binding */ rev; },
/* harmony export */   "mapRev": function() { return /* binding */ mapRev; },
/* harmony export */   "map": function() { return /* binding */ map; },
/* harmony export */   "iter": function() { return /* binding */ iter; },
/* harmony export */   "iteri": function() { return /* binding */ iteri; },
/* harmony export */   "foldLeft": function() { return /* binding */ foldLeft; },
/* harmony export */   "foldRight": function() { return /* binding */ foldRight; },
/* harmony export */   "flatten": function() { return /* binding */ flatten; },
/* harmony export */   "filter": function() { return /* binding */ filter; },
/* harmony export */   "filterMap": function() { return /* binding */ filterMap; },
/* harmony export */   "countBy": function() { return /* binding */ countBy; },
/* harmony export */   "init": function() { return /* binding */ init; },
/* harmony export */   "toVector": function() { return /* binding */ toVector; },
/* harmony export */   "equal": function() { return /* binding */ equal; }
/* harmony export */ });
/* harmony import */ var _js_vector_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js_vector.js */ "./node_modules/rescript/lib/es6/js_vector.js");
/* harmony import */ var _caml_option_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caml_option.js */ "./node_modules/rescript/lib/es6/caml_option.js");





function length(l) {
  var _len = 0;
  var _param = l;
  while(true) {
    var param = _param;
    var len = _len;
    if (!param) {
      return len;
    }
    _param = param.tl;
    _len = len + 1 | 0;
    continue ;
  };
}

function cons(x, xs) {
  return {
          hd: x,
          tl: xs
        };
}

function isEmpty(x) {
  return x === /* [] */0;
}

function hd(param) {
  if (param) {
    return _caml_option_js__WEBPACK_IMPORTED_MODULE_1__.some(param.hd);
  }
  
}

function tl(param) {
  if (param) {
    return param.tl;
  }
  
}

function nth(l, n) {
  if (n < 0) {
    return ;
  }
  var _l = l;
  var _n = n;
  while(true) {
    var n$1 = _n;
    var l$1 = _l;
    if (!l$1) {
      return ;
    }
    if (n$1 === 0) {
      return _caml_option_js__WEBPACK_IMPORTED_MODULE_1__.some(l$1.hd);
    }
    _n = n$1 - 1 | 0;
    _l = l$1.tl;
    continue ;
  };
}

function revAppend(_l1, _l2) {
  while(true) {
    var l2 = _l2;
    var l1 = _l1;
    if (!l1) {
      return l2;
    }
    _l2 = {
      hd: l1.hd,
      tl: l2
    };
    _l1 = l1.tl;
    continue ;
  };
}

function rev(l) {
  return revAppend(l, /* [] */0);
}

function mapRevAux(f, _acc, _ls) {
  while(true) {
    var ls = _ls;
    var acc = _acc;
    if (!ls) {
      return acc;
    }
    _ls = ls.tl;
    _acc = {
      hd: f(ls.hd),
      tl: acc
    };
    continue ;
  };
}

function mapRev(f, ls) {
  return mapRevAux(f, /* [] */0, ls);
}

function map(f, ls) {
  return revAppend(mapRevAux(f, /* [] */0, ls), /* [] */0);
}

function iter(f, _param) {
  while(true) {
    var param = _param;
    if (!param) {
      return ;
    }
    f(param.hd);
    _param = param.tl;
    continue ;
  };
}

function iteri(f, l) {
  var _i = 0;
  var _param = l;
  while(true) {
    var param = _param;
    var i = _i;
    if (!param) {
      return ;
    }
    f(i, param.hd);
    _param = param.tl;
    _i = i + 1 | 0;
    continue ;
  };
}

function foldLeft(f, _accu, _l) {
  while(true) {
    var l = _l;
    var accu = _accu;
    if (!l) {
      return accu;
    }
    _l = l.tl;
    _accu = f(accu, l.hd);
    continue ;
  };
}

function tailLoop(f, _acc, _param) {
  while(true) {
    var param = _param;
    var acc = _acc;
    if (!param) {
      return acc;
    }
    _param = param.tl;
    _acc = f(param.hd, acc);
    continue ;
  };
}

function foldRight(f, l, init) {
  var loop = function (n, param) {
    if (!param) {
      return init;
    }
    var t = param.tl;
    var h = param.hd;
    if (n < 1000) {
      return f(h, loop(n + 1 | 0, t));
    } else {
      return f(h, tailLoop(f, init, revAppend(t, /* [] */0)));
    }
  };
  return loop(0, l);
}

function flatten(lx) {
  var _acc = /* [] */0;
  var _lx = lx;
  while(true) {
    var lx$1 = _lx;
    var acc = _acc;
    if (!lx$1) {
      return revAppend(acc, /* [] */0);
    }
    _lx = lx$1.tl;
    _acc = revAppend(lx$1.hd, acc);
    continue ;
  };
}

function filterRevAux(f, _acc, _xs) {
  while(true) {
    var xs = _xs;
    var acc = _acc;
    if (!xs) {
      return acc;
    }
    var ys = xs.tl;
    var y = xs.hd;
    if (f(y)) {
      _xs = ys;
      _acc = {
        hd: y,
        tl: acc
      };
      continue ;
    }
    _xs = ys;
    continue ;
  };
}

function filter(f, xs) {
  return revAppend(filterRevAux(f, /* [] */0, xs), /* [] */0);
}

function filterMapRevAux(f, _acc, _xs) {
  while(true) {
    var xs = _xs;
    var acc = _acc;
    if (!xs) {
      return acc;
    }
    var ys = xs.tl;
    var z = f(xs.hd);
    if (z !== undefined) {
      _xs = ys;
      _acc = {
        hd: _caml_option_js__WEBPACK_IMPORTED_MODULE_1__.valFromOption(z),
        tl: acc
      };
      continue ;
    }
    _xs = ys;
    continue ;
  };
}

function filterMap(f, xs) {
  return revAppend(filterMapRevAux(f, /* [] */0, xs), /* [] */0);
}

function countBy(f, xs) {
  var _acc = 0;
  var _xs = xs;
  while(true) {
    var xs$1 = _xs;
    var acc = _acc;
    if (!xs$1) {
      return acc;
    }
    _xs = xs$1.tl;
    _acc = f(xs$1.hd) ? acc + 1 | 0 : acc;
    continue ;
  };
}

function init(n, f) {
  return _js_vector_js__WEBPACK_IMPORTED_MODULE_0__.toList(_js_vector_js__WEBPACK_IMPORTED_MODULE_0__.init(n, f));
}

function toVector(xs) {
  if (!xs) {
    return [];
  }
  var a = new Array(length(xs));
  var _i = 0;
  var _param = xs;
  while(true) {
    var param = _param;
    var i = _i;
    if (!param) {
      return a;
    }
    a[i] = param.hd;
    _param = param.tl;
    _i = i + 1 | 0;
    continue ;
  };
}

function equal(cmp, _xs, _ys) {
  while(true) {
    var ys = _ys;
    var xs = _xs;
    if (!xs) {
      if (ys) {
        return false;
      } else {
        return true;
      }
    }
    if (!ys) {
      return false;
    }
    if (!cmp(xs.hd, ys.hd)) {
      return false;
    }
    _ys = ys.tl;
    _xs = xs.tl;
    continue ;
  };
}


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/js_math.js":
/*!**************************************************!*\
  !*** ./node_modules/rescript/lib/es6/js_math.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "unsafe_ceil": function() { return /* binding */ unsafe_ceil; },
/* harmony export */   "ceil_int": function() { return /* binding */ ceil_int; },
/* harmony export */   "ceil": function() { return /* binding */ ceil; },
/* harmony export */   "unsafe_floor": function() { return /* binding */ unsafe_floor; },
/* harmony export */   "floor_int": function() { return /* binding */ floor_int; },
/* harmony export */   "floor": function() { return /* binding */ floor; },
/* harmony export */   "random_int": function() { return /* binding */ random_int; }
/* harmony export */ });
/* harmony import */ var _js_int_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js_int.js */ "./node_modules/rescript/lib/es6/js_int.js");




function unsafe_ceil(prim) {
  return Math.ceil(prim);
}

function ceil_int(f) {
  if (f > _js_int_js__WEBPACK_IMPORTED_MODULE_0__.max) {
    return _js_int_js__WEBPACK_IMPORTED_MODULE_0__.max;
  } else if (f < _js_int_js__WEBPACK_IMPORTED_MODULE_0__.min) {
    return _js_int_js__WEBPACK_IMPORTED_MODULE_0__.min;
  } else {
    return Math.ceil(f);
  }
}

function unsafe_floor(prim) {
  return Math.floor(prim);
}

function floor_int(f) {
  if (f > _js_int_js__WEBPACK_IMPORTED_MODULE_0__.max) {
    return _js_int_js__WEBPACK_IMPORTED_MODULE_0__.max;
  } else if (f < _js_int_js__WEBPACK_IMPORTED_MODULE_0__.min) {
    return _js_int_js__WEBPACK_IMPORTED_MODULE_0__.min;
  } else {
    return Math.floor(f);
  }
}

function random_int(min, max) {
  return floor_int(Math.random() * (max - min | 0)) + min | 0;
}

var ceil = ceil_int;

var floor = floor_int;


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/js_vector.js":
/*!****************************************************!*\
  !*** ./node_modules/rescript/lib/es6/js_vector.js ***!
  \****************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "filterInPlace": function() { return /* binding */ filterInPlace; },
/* harmony export */   "empty": function() { return /* binding */ empty; },
/* harmony export */   "pushBack": function() { return /* binding */ pushBack; },
/* harmony export */   "copy": function() { return /* binding */ copy; },
/* harmony export */   "memByRef": function() { return /* binding */ memByRef; },
/* harmony export */   "iter": function() { return /* binding */ iter; },
/* harmony export */   "iteri": function() { return /* binding */ iteri; },
/* harmony export */   "toList": function() { return /* binding */ toList; },
/* harmony export */   "map": function() { return /* binding */ map; },
/* harmony export */   "mapi": function() { return /* binding */ mapi; },
/* harmony export */   "foldLeft": function() { return /* binding */ foldLeft; },
/* harmony export */   "foldRight": function() { return /* binding */ foldRight; },
/* harmony export */   "init": function() { return /* binding */ init; },
/* harmony export */   "append": function() { return /* binding */ append; }
/* harmony export */ });



function filterInPlace(p, a) {
  var i = 0;
  var j = 0;
  while(i < a.length) {
    var v = a[i];
    if (p(v)) {
      a[j] = v;
      j = j + 1 | 0;
    }
    i = i + 1 | 0;
  };
  a.splice(j);
  
}

function empty(a) {
  a.splice(0);
  
}

function pushBack(x, xs) {
  xs.push(x);
  
}

function memByRef(x, xs) {
  return xs.indexOf(x) >= 0;
}

function iter(f, xs) {
  for(var i = 0 ,i_finish = xs.length; i < i_finish; ++i){
    f(xs[i]);
  }
  
}

function iteri(f, a) {
  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
    f(i, a[i]);
  }
  
}

function toList(a) {
  var _i = a.length - 1 | 0;
  var _res = /* [] */0;
  while(true) {
    var res = _res;
    var i = _i;
    if (i < 0) {
      return res;
    }
    _res = {
      hd: a[i],
      tl: res
    };
    _i = i - 1 | 0;
    continue ;
  };
}

function init(n, f) {
  var v = new Array(n);
  for(var i = 0; i < n; ++i){
    v[i] = f(i);
  }
  return v;
}

function copy(x) {
  var len = x.length;
  var b = new Array(len);
  for(var i = 0; i < len; ++i){
    b[i] = x[i];
  }
  return b;
}

function map(f, a) {
  var l = a.length;
  var r = new Array(l);
  for(var i = 0; i < l; ++i){
    r[i] = f(a[i]);
  }
  return r;
}

function foldLeft(f, x, a) {
  var r = x;
  for(var i = 0 ,i_finish = a.length; i < i_finish; ++i){
    r = f(r, a[i]);
  }
  return r;
}

function foldRight(f, a, x) {
  var r = x;
  for(var i = a.length - 1 | 0; i >= 0; --i){
    r = f(a[i], r);
  }
  return r;
}

function mapi(f, a) {
  var l = a.length;
  if (l === 0) {
    return [];
  }
  var r = new Array(l);
  for(var i = 0; i < l; ++i){
    r[i] = f(i, a[i]);
  }
  return r;
}

function append(x, a) {
  return a.concat([x]);
}


/* No side effect */


/***/ }),

/***/ "./src/JS_interface.bs.js":
/*!********************************!*\
  !*** ./src/JS_interface.bs.js ***!
  \********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "config": function() { return /* binding */ config; },
/* harmony export */   "Converter": function() { return /* binding */ Converter; },
/* harmony export */   "Calc": function() { return /* binding */ Calc; }
/* harmony export */ });
/* harmony import */ var rescript_lib_es6_js_exn_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rescript/lib/es6/js_exn.js */ "./node_modules/rescript/lib/es6/js_exn.js");
/* harmony import */ var _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/calc/Calc.bs.js */ "./src/core/calc/Calc.bs.js");
// Generated by ReScript, PLEASE EDIT WITH CARE




var config = {
  sortNMUI: true
};

function fromJS(js_int) {
  var c = _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_1__.Const.fromInt(config.sortNMUI, js_int);
  if (c !== undefined) {
    return c;
  } else {
    return rescript_lib_es6_js_exn_js__WEBPACK_IMPORTED_MODULE_0__.raiseError("Invalid constant");
  }
}

function fromJS_array(js_arr) {
  return js_arr.map(fromJS);
}

function toJS(c) {
  return _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_1__.Const.toInt(config.sortNMUI, c);
}

function toJS_array(c_arr) {
  return c_arr.map(toJS);
}

var Const = {
  fromJS: fromJS,
  fromJS_array: fromJS_array,
  toJS: toJS,
  toJS_array: toJS_array
};

function fromJS$1(js_nested) {
  return js_nested;
}

function toJS$1(nested) {
  return nested;
}

var Nested = {
  fromJS: fromJS$1,
  toJS: toJS$1
};

var Converter = {
  Const: Const,
  Nested: Nested
};

function tEnum(param) {
  var partial_arg = config.sortNMUI;
  return function (param) {
    return _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_1__.Const.tEnum(partial_arg, param);
  };
}

function show(d) {
  return _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_1__.Const.show(fromJS(d));
}

function fromStr(str) {
  var c = _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_1__.Const.tFromStr(undefined, str);
  if (c !== undefined) {
    return toJS(c);
  } else {
    return rescript_lib_es6_js_exn_js__WEBPACK_IMPORTED_MODULE_0__.raiseError("Cannot interpret string");
  }
}

function inv(d) {
  return toJS(_core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_1__.Const.inv(fromJS(d)));
}

function rel(d1, d2) {
  var c1 = fromJS(d1);
  var c2 = fromJS(d2);
  return toJS(_core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_1__.Const.rel(c1, c2));
}

var Const$1 = {
  tEnum: tEnum,
  show: show,
  fromStr: fromStr,
  inv: inv,
  rel: rel
};

var show$1 = _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_1__.Nested.show;

var getList = _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_1__.Nested.getList;

function fromArrayToL(arr) {
  return _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_1__.Nested.fromArrayToL(arr.map(fromJS));
}

function fromArrayToR(arr) {
  return _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_1__.Nested.fromArrayToR(arr.map(fromJS));
}

function toArray(d) {
  var c_arr = _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_1__.Nested.toArray(d);
  return c_arr.map(toJS);
}

var Nested$1 = {
  show: show$1,
  getList: getList,
  fromArrayToL: fromArrayToL,
  fromArrayToR: fromArrayToR,
  toArray: toArray
};

var Calc = {
  Const: Const$1,
  Nested: Nested$1
};


/* No side effect */


/***/ }),

/***/ "./src/core/calc/Calc.bs.js":
/*!**********************************!*\
  !*** ./src/core/calc/Calc.bs.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Const": function() { return /* binding */ Const; },
/* harmony export */   "Nested": function() { return /* binding */ Nested; }
/* harmony export */ });
/* harmony import */ var rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rescript/lib/es6/curry.js */ "./node_modules/rescript/lib/es6/curry.js");
/* harmony import */ var rescript_lib_es6_js_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rescript/lib/es6/js_list.js */ "./node_modules/rescript/lib/es6/js_list.js");
/* harmony import */ var rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rescript/lib/es6/belt_List.js */ "./node_modules/rescript/lib/es6/belt_List.js");
// Generated by ReScript, PLEASE EDIT WITH CARE





function tToJs(param) {
  return param + 0 | 0;
}

function tFromJs(param) {
  if (param <= 3 && 0 <= param) {
    return param - 0 | 0;
  }
  
}

function tEnum(sortNMUIOpt, param) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  if (sortNMUI) {
    return [
            /* N */0,
            /* M */3,
            /* U */1,
            /* I */2
          ];
  } else {
    return [
            /* N */0,
            /* U */1,
            /* I */2,
            /* M */3
          ];
  }
}

function tEnumList(sortNMUIOpt, param) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  if (sortNMUI) {
    return {
            hd: /* N */0,
            tl: {
              hd: /* M */3,
              tl: {
                hd: /* U */1,
                tl: {
                  hd: /* I */2,
                  tl: /* [] */0
                }
              }
            }
          };
  } else {
    return {
            hd: /* N */0,
            tl: {
              hd: /* U */1,
              tl: {
                hd: /* I */2,
                tl: {
                  hd: /* M */3,
                  tl: /* [] */0
                }
              }
            }
          };
  }
}

function show(x) {
  switch (x) {
    case /* N */0 :
        return "N";
    case /* U */1 :
        return "U";
    case /* I */2 :
        return "I";
    case /* M */3 :
        return "M";
    
  }
}

function showAsKey(x) {
  switch (x) {
    case /* N */0 :
        return "N";
    case /* U */1 :
        return "U";
    case /* I */2 :
        return "I";
    case /* M */3 :
        return "M";
    
  }
}

function toInt(sortNMUIOpt, c) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  var n = c + 0 | 0;
  switch (n) {
    case 0 :
        return n;
    case 1 :
        if (sortNMUI) {
          return 2;
        } else {
          return n;
        }
    case 2 :
        if (sortNMUI) {
          return 3;
        } else {
          return n;
        }
    case 3 :
        if (sortNMUI) {
          return 1;
        } else {
          return n;
        }
    default:
      return -99;
  }
}

function fromInt(sortNMUIOpt, n) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  var _c = tFromJs(n);
  if (!sortNMUI) {
    return _c;
  }
  if (_c === undefined) {
    return _c;
  }
  switch (_c) {
    case /* N */0 :
        return _c;
    case /* U */1 :
        return /* M */3;
    case /* I */2 :
        return /* U */1;
    case /* M */3 :
        return /* I */2;
    
  }
}

function tFromStr(sortNMUIOpt, str) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  switch (str) {
    case "1" :
        if (sortNMUI) {
          return /* M */3;
        } else {
          return /* U */1;
        }
    case "2" :
        if (sortNMUI) {
          return /* U */1;
        } else {
          return /* I */2;
        }
    case "3" :
        if (sortNMUI) {
          return /* I */2;
        } else {
          return /* M */3;
        }
    case "(mn)" :
    case "I" :
    case "i" :
        return /* I */2;
    case "()" :
    case "M" :
    case "m" :
        return /* M */3;
    case "" :
    case "(())" :
    case "." :
    case "0" :
    case "N" :
    case "n" :
        return /* N */0;
    case "U" :
    case "mn" :
    case "u" :
        return /* U */1;
    default:
      return ;
  }
}

function inv(x) {
  switch (x) {
    case /* N */0 :
        return /* M */3;
    case /* U */1 :
        return /* I */2;
    case /* I */2 :
        return /* U */1;
    case /* M */3 :
        return /* N */0;
    
  }
}

function rel(x, y) {
  if (y === 0) {
    return x;
  }
  switch (x) {
    case /* N */0 :
        return y;
    case /* U */1 :
        if (y >= 2) {
          return /* M */3;
        } else {
          return /* U */1;
        }
    case /* I */2 :
        if (y !== 2) {
          return /* M */3;
        } else {
          return /* I */2;
        }
    case /* M */3 :
        return /* M */3;
    
  }
}

var Const = {
  tToJs: tToJs,
  tFromJs: tFromJs,
  tEnum: tEnum,
  tEnumList: tEnumList,
  show: show,
  showAsKey: showAsKey,
  toInt: toInt,
  fromInt: fromInt,
  tFromStr: tFromStr,
  inv: inv,
  rel: rel
};

function show$1(nest) {
  if (nest.NAME === "NestToR") {
    var clist = nest.VAL;
    if (clist) {
      return "(" + rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__.reduceReverse(clist, "", (function (str, c) {
                    return show(c) + (
                            str.length > 0 ? "(" + str + ")" : ""
                          );
                  })) + ")";
    } else {
      return "M";
    }
  }
  var clist$1 = nest.VAL;
  if (clist$1) {
    return "(" + rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__.reduce(clist$1, "", (function (str, c) {
                  return (
                          str.length > 0 ? "(" + str + ")" : ""
                        ) + show(c);
                })) + ")";
  } else {
    return "M";
  }
}

function getList(nest) {
  return nest.VAL;
}

function fromArrayToL(arr) {
  return {
          NAME: "NestToL",
          VAL: rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__.fromArray(arr)
        };
}

function fromArrayToR(arr) {
  return {
          NAME: "NestToR",
          VAL: rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__.fromArray(arr)
        };
}

function toArray(nest) {
  return rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__.toArray(nest.VAL);
}

function fmapL(param, fn) {
  return {
          NAME: "NestToL",
          VAL: rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(fn, param.VAL)
        };
}

function fmapR(param, fn) {
  return {
          NAME: "NestToR",
          VAL: rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(fn, param.VAL)
        };
}

function _reduceByCrossing(_clist) {
  while(true) {
    var clist = _clist;
    if (!clist) {
      return clist;
    }
    var c = clist.hd;
    if (c === 0) {
      var match = clist.tl;
      if (match && match.hd === 0) {
        _clist = match.tl;
        continue ;
      }
      
    }
    return {
            hd: c,
            tl: _reduceByCrossing(clist.tl)
          };
  };
}

function reduceByCrossingL(param) {
  return {
          NAME: "NestToL",
          VAL: _reduceByCrossing(param.VAL)
        };
}

function reduceByCrossingR(param) {
  return {
          NAME: "NestToR",
          VAL: _reduceByCrossing(param.VAL)
        };
}

function _reduceByCalling(clist, someUI) {
  if (!clist) {
    return clist;
  }
  var cs = clist.tl;
  var c = clist.hd;
  if (cs) {
    if (c !== 0) {
      if (c >= 3) {
        return {
                hd: /* M */3,
                tl: /* [] */0
              };
      } else if (someUI !== undefined) {
        if (someUI === c) {
          return {
                  hd: /* N */0,
                  tl: _reduceByCalling(cs, someUI)
                };
        } else {
          return {
                  hd: /* M */3,
                  tl: /* [] */0
                };
        }
      } else {
        return {
                hd: c,
                tl: _reduceByCalling(cs, c)
              };
      }
    } else {
      return {
              hd: /* N */0,
              tl: _reduceByCalling(cs, someUI)
            };
    }
  } else if (!(c === 2 || c === 1) || someUI === undefined) {
    return clist;
  } else if (someUI === c) {
    return {
            hd: /* N */0,
            tl: /* [] */0
          };
  } else {
    return {
            hd: /* M */3,
            tl: /* [] */0
          };
  }
}

function reduceByCallingL(param) {
  return {
          NAME: "NestToL",
          VAL: rescript_lib_es6_js_list_js__WEBPACK_IMPORTED_MODULE_1__.rev(_reduceByCalling(rescript_lib_es6_js_list_js__WEBPACK_IMPORTED_MODULE_1__.rev(param.VAL), undefined))
        };
}

function reduceByCallingR(param) {
  return {
          NAME: "NestToR",
          VAL: _reduceByCalling(param.VAL, undefined)
        };
}

function reduceL(param) {
  return reduceByCrossingL(reduceByCallingL({
                  NAME: "NestToL",
                  VAL: param.VAL
                }));
}

function reduceR(param) {
  return reduceByCrossingR(reduceByCallingR({
                  NAME: "NestToR",
                  VAL: param.VAL
                }));
}

function _calc(clist) {
  if (!clist) {
    return /* N */0;
  }
  var cs = clist.tl;
  var c = clist.hd;
  if (cs) {
    if (c !== 0) {
      if (c >= 3) {
        return /* M */3;
      } else {
        return rel(c, inv(_calc(cs)));
      }
    } else {
      return inv(_calc(cs));
    }
  } else {
    return c;
  }
}

function calcL(param) {
  var clist = param.VAL;
  if (clist) {
    return inv(_calc(rescript_lib_es6_js_list_js__WEBPACK_IMPORTED_MODULE_1__.rev(clist)));
  } else {
    return /* M */3;
  }
}

function calcR(param) {
  var clist = param.VAL;
  if (clist) {
    return inv(_calc(clist));
  } else {
    return /* M */3;
  }
}

var Nested = {
  show: show$1,
  getList: getList,
  fromArrayToL: fromArrayToL,
  fromArrayToR: fromArrayToR,
  toArray: toArray,
  fmapL: fmapL,
  fmapR: fmapR,
  reduceByCrossingL: reduceByCrossingL,
  reduceByCrossingR: reduceByCrossingR,
  reduceByCallingL: reduceByCallingL,
  reduceByCallingR: reduceByCallingR,
  reduceL: reduceL,
  reduceR: reduceR,
  calcL: calcL,
  calcR: calcR
};


/* No side effect */


/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!*********************!*\
  !*** ./src/main.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _JS_interface_bs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./JS_interface.bs.js */ "./src/JS_interface.bs.js");


/* harmony default export */ __webpack_exports__["default"] = (_JS_interface_bs_js__WEBPACK_IMPORTED_MODULE_0__);
}();
__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9iZWx0X0FycmF5LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvYmVsdF9MaXN0LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvYmVsdF9Tb3J0QXJyYXkuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9jYW1sLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvY2FtbF9hcnJheS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2NhbWxfZXhjZXB0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2NhbWxfanNfZXhjZXB0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2NhbWxfb3B0aW9uLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvY3VycnkuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9qc19leG4uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9qc19pbnQuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9qc19saXN0LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvanNfbWF0aC5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2pzX3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9KU19pbnRlcmZhY2UuYnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvY29yZS9jYWxjL0NhbGMuYnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvcm1mb3JtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSa0M7QUFDRTtBQUNJO0FBQ1E7O0FBRWhEO0FBQ0E7QUFDQSxXQUFXLGlEQUFnQjtBQUMzQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDBDQUFTO0FBQ3BDOztBQXdFQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzdUJvQztBQUNVO0FBQ0U7QUFDTTs7QUFFdEQ7QUFDQTtBQUNBLFdBQVcsaURBQWdCO0FBQzNCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQXlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMENBQVM7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwQ0FBUztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDBDQUFTO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwwQ0FBUztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSwwREFBeUI7QUFDM0I7QUFDQTs7QUFFQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwwQ0FBUztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQTRGQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0K0NvQztBQUNVOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLDBDQUFTO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwwQ0FBUztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHNEQUFxQjtBQUNwQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHNEQUFxQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU0sc0RBQXFCO0FBQzNCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFVBQVUsc0RBQXFCO0FBQy9CO0FBQ0EsU0FBUztBQUNULFVBQVUsc0RBQXFCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBcUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNEVBQTRFLDBDQUFTO0FBQ3JGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdGQUFnRiwwQ0FBUztBQUN6Rjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1QsVUFBVSxzREFBcUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBSSxzREFBcUI7QUFDekI7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkVBQTJFLDBDQUFTO0FBQ3BGOztBQUVBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQ0FBaUMsMENBQVM7QUFDMUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiwwQ0FBUztBQUNuQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNDQUFzQywwQ0FBUztBQUMvQzs7QUFFQTs7QUFFQTs7QUFzQkM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDemFBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFxQkM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Z0I4RDs7QUFFOUQsdUJBQXVCLDRFQUEyQzs7QUFFbEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQiwyREFBMEI7O0FBYXpDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFPQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNEM7QUFDSTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGlEQUFnQjtBQUMzQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaURBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQXlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLGlEQUFnQixDQUFDLCtDQUFjO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBeUJDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNVc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsMkNBQVU7QUFDcEIsV0FBVywyQ0FBVTtBQUNyQixHQUFHLGNBQWMsMkNBQVU7QUFDM0IsV0FBVywyQ0FBVTtBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsMkNBQVU7QUFDcEIsV0FBVywyQ0FBVTtBQUNyQixHQUFHLGNBQWMsMkNBQVU7QUFDM0IsV0FBVywyQ0FBVTtBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFXQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLGNBQWM7QUFDcEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBa0JDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSUE7O0FBRXFEO0FBQ0c7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsZ0VBQTJCO0FBQ3JDO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsV0FBVyxrRUFBaUI7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLDhEQUF5QjtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4REFBeUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBLFNBQVMsNkRBQXdCO0FBQ2pDOztBQUVBO0FBQ0EsVUFBVSxpRUFBNEI7QUFDdEM7QUFDQTtBQUNBLEdBQUc7QUFDSCxXQUFXLGtFQUFpQjtBQUM1QjtBQUNBOztBQUVBO0FBQ0EsY0FBYyw0REFBdUI7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyw0REFBdUI7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSw4REFBeUI7O0FBRXRDLGNBQWMsaUVBQTRCOztBQUUxQztBQUNBLFNBQVMsc0VBQWlDO0FBQzFDOztBQUVBO0FBQ0EsU0FBUyxzRUFBaUM7QUFDMUM7O0FBRUE7QUFDQSxjQUFjLGlFQUE0QjtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQU9DO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSUE7O0FBRW1EO0FBQ0k7QUFDSTs7QUFFM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtB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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBTUM7QUFDRDs7Ozs7OztVQ3JlQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBOztVQUVBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBOzs7OztXQ3RCQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLHdDQUF3Qyx5Q0FBeUM7V0FDakY7V0FDQTtXQUNBLEU7Ozs7O1dDUEEsNkNBQTZDLHdEQUF3RCxFOzs7OztXQ0FyRztXQUNBO1dBQ0E7V0FDQSxzREFBc0Qsa0JBQWtCO1dBQ3hFO1dBQ0EsK0NBQStDLGNBQWM7V0FDN0QsRTs7Ozs7Ozs7Ozs7O0FDTm1EOztBQUVuRCwrREFBZSxnREFBVSxFIiwiZmlsZSI6ImZvcm1mb3JtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIHdlYnBhY2tVbml2ZXJzYWxNb2R1bGVEZWZpbml0aW9uKHJvb3QsIGZhY3RvcnkpIHtcblx0aWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnICYmIHR5cGVvZiBtb2R1bGUgPT09ICdvYmplY3QnKVxuXHRcdG1vZHVsZS5leHBvcnRzID0gZmFjdG9yeSgpO1xuXHRlbHNlIGlmKHR5cGVvZiBkZWZpbmUgPT09ICdmdW5jdGlvbicgJiYgZGVmaW5lLmFtZClcblx0XHRkZWZpbmUoW10sIGZhY3RvcnkpO1xuXHRlbHNlIGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0Jylcblx0XHRleHBvcnRzW1wiZm9ybWZvcm1cIl0gPSBmYWN0b3J5KCk7XG5cdGVsc2Vcblx0XHRyb290W1wiZm9ybWZvcm1cIl0gPSBmYWN0b3J5KCk7XG59KSh0aGlzLCBmdW5jdGlvbigpIHtcbnJldHVybiAiLCJcblxuaW1wb3J0ICogYXMgQ2FtbCBmcm9tIFwiLi9jYW1sLmpzXCI7XG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwiLi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgSnNfbWF0aCBmcm9tIFwiLi9qc19tYXRoLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX29wdGlvbiBmcm9tIFwiLi9jYW1sX29wdGlvbi5qc1wiO1xuXG5mdW5jdGlvbiBnZXQoYXJyLCBpKSB7XG4gIGlmIChpID49IDAgJiYgaSA8IGFyci5sZW5ndGgpIHtcbiAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZShhcnJbaV0pO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBnZXRFeG4oYXJyLCBpKSB7XG4gIGlmICghKGkgPj0gMCAmJiBpIDwgYXJyLmxlbmd0aCkpIHtcbiAgICB0aHJvdyB7XG4gICAgICAgICAgUkVfRVhOX0lEOiBcIkFzc2VydF9mYWlsdXJlXCIsXG4gICAgICAgICAgXzE6IFtcbiAgICAgICAgICAgIFwiYmVsdF9BcnJheS5tbFwiLFxuICAgICAgICAgICAgMjcsXG4gICAgICAgICAgICA0XG4gICAgICAgICAgXSxcbiAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgfTtcbiAgfVxuICByZXR1cm4gYXJyW2ldO1xufVxuXG5mdW5jdGlvbiBzZXQoYXJyLCBpLCB2KSB7XG4gIGlmIChpID49IDAgJiYgaSA8IGFyci5sZW5ndGgpIHtcbiAgICBhcnJbaV0gPSB2O1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRFeG4oYXJyLCBpLCB2KSB7XG4gIGlmICghKGkgPj0gMCAmJiBpIDwgYXJyLmxlbmd0aCkpIHtcbiAgICB0aHJvdyB7XG4gICAgICAgICAgUkVfRVhOX0lEOiBcIkFzc2VydF9mYWlsdXJlXCIsXG4gICAgICAgICAgXzE6IFtcbiAgICAgICAgICAgIFwiYmVsdF9BcnJheS5tbFwiLFxuICAgICAgICAgICAgMzMsXG4gICAgICAgICAgICAyXG4gICAgICAgICAgXSxcbiAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgfTtcbiAgfVxuICBhcnJbaV0gPSB2O1xuICBcbn1cblxuZnVuY3Rpb24gc3dhcFVuc2FmZSh4cywgaSwgaikge1xuICB2YXIgdG1wID0geHNbaV07XG4gIHhzW2ldID0geHNbal07XG4gIHhzW2pdID0gdG1wO1xuICBcbn1cblxuZnVuY3Rpb24gc2h1ZmZsZUluUGxhY2UoeHMpIHtcbiAgdmFyIGxlbiA9IHhzLmxlbmd0aDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICBzd2FwVW5zYWZlKHhzLCBpLCBKc19tYXRoLnJhbmRvbV9pbnQoaSwgbGVuKSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIHNodWZmbGUoeHMpIHtcbiAgdmFyIHJlc3VsdCA9IHhzLnNsaWNlKDApO1xuICBzaHVmZmxlSW5QbGFjZShyZXN1bHQpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiByZXZlcnNlSW5QbGFjZSh4cykge1xuICB2YXIgbGVuID0geHMubGVuZ3RoO1xuICB2YXIgb2ZzID0gMDtcbiAgZm9yKHZhciBpID0gMCAsaV9maW5pc2ggPSBsZW4gLyAyIHwgMDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIHN3YXBVbnNhZmUoeHMsIG9mcyArIGkgfCAwLCAoKG9mcyArIGxlbiB8IDApIC0gaSB8IDApIC0gMSB8IDApO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiByZXZlcnNlKHhzKSB7XG4gIHZhciBsZW4gPSB4cy5sZW5ndGg7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICByZXN1bHRbaV0gPSB4c1sobGVuIC0gMSB8IDApIC0gaSB8IDBdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIG1ha2UobCwgZikge1xuICBpZiAobCA8PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciByZXMgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHJlc1tpXSA9IGY7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gbWFrZUJ5VShsLCBmKSB7XG4gIGlmIChsIDw9IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHJlcyA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgcmVzW2ldID0gZihpKTtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBtYWtlQnkobCwgZikge1xuICByZXR1cm4gbWFrZUJ5VShsLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBtYWtlQnlBbmRTaHVmZmxlVShsLCBmKSB7XG4gIHZhciB1ID0gbWFrZUJ5VShsLCBmKTtcbiAgc2h1ZmZsZUluUGxhY2UodSk7XG4gIHJldHVybiB1O1xufVxuXG5mdW5jdGlvbiBtYWtlQnlBbmRTaHVmZmxlKGwsIGYpIHtcbiAgcmV0dXJuIG1ha2VCeUFuZFNodWZmbGVVKGwsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIHJhbmdlKHN0YXJ0LCBmaW5pc2gpIHtcbiAgdmFyIGN1dCA9IGZpbmlzaCAtIHN0YXJ0IHwgMDtcbiAgaWYgKGN1dCA8IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIGFyciA9IG5ldyBBcnJheShjdXQgKyAxIHwgMCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPD0gY3V0OyArK2kpe1xuICAgIGFycltpXSA9IHN0YXJ0ICsgaSB8IDA7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gcmFuZ2VCeShzdGFydCwgZmluaXNoLCBzdGVwKSB7XG4gIHZhciBjdXQgPSBmaW5pc2ggLSBzdGFydCB8IDA7XG4gIGlmIChjdXQgPCAwIHx8IHN0ZXAgPD0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgbmIgPSAoY3V0IC8gc3RlcCB8IDApICsgMSB8IDA7XG4gIHZhciBhcnIgPSBuZXcgQXJyYXkobmIpO1xuICB2YXIgY3VyID0gc3RhcnQ7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBuYjsgKytpKXtcbiAgICBhcnJbaV0gPSBjdXI7XG4gICAgY3VyID0gY3VyICsgc3RlcCB8IDA7XG4gIH1cbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gemlwKHhzLCB5cykge1xuICB2YXIgbGVueCA9IHhzLmxlbmd0aDtcbiAgdmFyIGxlbnkgPSB5cy5sZW5ndGg7XG4gIHZhciBsZW4gPSBsZW54IDwgbGVueSA/IGxlbnggOiBsZW55O1xuICB2YXIgcyA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgIHNbaV0gPSBbXG4gICAgICB4c1tpXSxcbiAgICAgIHlzW2ldXG4gICAgXTtcbiAgfVxuICByZXR1cm4gcztcbn1cblxuZnVuY3Rpb24gemlwQnlVKHhzLCB5cywgZikge1xuICB2YXIgbGVueCA9IHhzLmxlbmd0aDtcbiAgdmFyIGxlbnkgPSB5cy5sZW5ndGg7XG4gIHZhciBsZW4gPSBsZW54IDwgbGVueSA/IGxlbnggOiBsZW55O1xuICB2YXIgcyA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgIHNbaV0gPSBmKHhzW2ldLCB5c1tpXSk7XG4gIH1cbiAgcmV0dXJuIHM7XG59XG5cbmZ1bmN0aW9uIHppcEJ5KHhzLCB5cywgZikge1xuICByZXR1cm4gemlwQnlVKHhzLCB5cywgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gY29uY2F0KGExLCBhMikge1xuICB2YXIgbDEgPSBhMS5sZW5ndGg7XG4gIHZhciBsMiA9IGEyLmxlbmd0aDtcbiAgdmFyIGExYTIgPSBuZXcgQXJyYXkobDEgKyBsMiB8IDApO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDE7ICsraSl7XG4gICAgYTFhMltpXSA9IGExW2ldO1xuICB9XG4gIGZvcih2YXIgaSQxID0gMDsgaSQxIDwgbDI7ICsraSQxKXtcbiAgICBhMWEyW2wxICsgaSQxIHwgMF0gPSBhMltpJDFdO1xuICB9XG4gIHJldHVybiBhMWEyO1xufVxuXG5mdW5jdGlvbiBjb25jYXRNYW55KGFycnMpIHtcbiAgdmFyIGxlbkFycnMgPSBhcnJzLmxlbmd0aDtcbiAgdmFyIHRvdGFsTGVuID0gMDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbkFycnM7ICsraSl7XG4gICAgdG90YWxMZW4gPSB0b3RhbExlbiArIGFycnNbaV0ubGVuZ3RoIHwgMDtcbiAgfVxuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KHRvdGFsTGVuKTtcbiAgdG90YWxMZW4gPSAwO1xuICBmb3IodmFyIGogPSAwOyBqIDwgbGVuQXJyczsgKytqKXtcbiAgICB2YXIgY3VyID0gYXJyc1tqXTtcbiAgICBmb3IodmFyIGsgPSAwICxrX2ZpbmlzaCA9IGN1ci5sZW5ndGg7IGsgPCBrX2ZpbmlzaDsgKytrKXtcbiAgICAgIHJlc3VsdFt0b3RhbExlbl0gPSBjdXJba107XG4gICAgICB0b3RhbExlbiA9IHRvdGFsTGVuICsgMSB8IDA7XG4gICAgfVxuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNsaWNlKGEsIG9mZnNldCwgbGVuKSB7XG4gIGlmIChsZW4gPD0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgbGVuYSA9IGEubGVuZ3RoO1xuICB2YXIgb2ZzID0gb2Zmc2V0IDwgMCA/IENhbWwuY2FtbF9pbnRfbWF4KGxlbmEgKyBvZmZzZXQgfCAwLCAwKSA6IG9mZnNldDtcbiAgdmFyIGhhc0xlbiA9IGxlbmEgLSBvZnMgfCAwO1xuICB2YXIgY29weUxlbmd0aCA9IGhhc0xlbiA8IGxlbiA/IGhhc0xlbiA6IGxlbjtcbiAgaWYgKGNvcHlMZW5ndGggPD0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGNvcHlMZW5ndGgpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgY29weUxlbmd0aDsgKytpKXtcbiAgICByZXN1bHRbaV0gPSBhW29mcyArIGkgfCAwXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzbGljZVRvRW5kKGEsIG9mZnNldCkge1xuICB2YXIgbGVuYSA9IGEubGVuZ3RoO1xuICB2YXIgb2ZzID0gb2Zmc2V0IDwgMCA/IENhbWwuY2FtbF9pbnRfbWF4KGxlbmEgKyBvZmZzZXQgfCAwLCAwKSA6IG9mZnNldDtcbiAgdmFyIGxlbiA9IGxlbmEgLSBvZnMgfCAwO1xuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgcmVzdWx0W2ldID0gYVtvZnMgKyBpIHwgMF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gZmlsbChhLCBvZmZzZXQsIGxlbiwgdikge1xuICBpZiAobGVuIDw9IDApIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciBsZW5hID0gYS5sZW5ndGg7XG4gIHZhciBvZnMgPSBvZmZzZXQgPCAwID8gQ2FtbC5jYW1sX2ludF9tYXgobGVuYSArIG9mZnNldCB8IDAsIDApIDogb2Zmc2V0O1xuICB2YXIgaGFzTGVuID0gbGVuYSAtIG9mcyB8IDA7XG4gIHZhciBmaWxsTGVuZ3RoID0gaGFzTGVuIDwgbGVuID8gaGFzTGVuIDogbGVuO1xuICBpZiAoZmlsbExlbmd0aCA8PSAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICBmb3IodmFyIGkgPSBvZnMgLGlfZmluaXNoID0gb2ZzICsgZmlsbExlbmd0aCB8IDA7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBhW2ldID0gdjtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gYmxpdFVuc2FmZShhMSwgc3Jjb2ZzMSwgYTIsIHNyY29mczIsIGJsaXRMZW5ndGgpIHtcbiAgaWYgKHNyY29mczIgPD0gc3Jjb2ZzMSkge1xuICAgIGZvcih2YXIgaiA9IDA7IGogPCBibGl0TGVuZ3RoOyArK2ope1xuICAgICAgYTJbaiArIHNyY29mczIgfCAwXSA9IGExW2ogKyBzcmNvZnMxIHwgMF07XG4gICAgfVxuICAgIHJldHVybiA7XG4gIH1cbiAgZm9yKHZhciBqJDEgPSBibGl0TGVuZ3RoIC0gMSB8IDA7IGokMSA+PSAwOyAtLWokMSl7XG4gICAgYTJbaiQxICsgc3Jjb2ZzMiB8IDBdID0gYTFbaiQxICsgc3Jjb2ZzMSB8IDBdO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBibGl0KGExLCBvZnMxLCBhMiwgb2ZzMiwgbGVuKSB7XG4gIHZhciBsZW5hMSA9IGExLmxlbmd0aDtcbiAgdmFyIGxlbmEyID0gYTIubGVuZ3RoO1xuICB2YXIgc3Jjb2ZzMSA9IG9mczEgPCAwID8gQ2FtbC5jYW1sX2ludF9tYXgobGVuYTEgKyBvZnMxIHwgMCwgMCkgOiBvZnMxO1xuICB2YXIgc3Jjb2ZzMiA9IG9mczIgPCAwID8gQ2FtbC5jYW1sX2ludF9tYXgobGVuYTIgKyBvZnMyIHwgMCwgMCkgOiBvZnMyO1xuICB2YXIgYmxpdExlbmd0aCA9IENhbWwuY2FtbF9pbnRfbWluKGxlbiwgQ2FtbC5jYW1sX2ludF9taW4obGVuYTEgLSBzcmNvZnMxIHwgMCwgbGVuYTIgLSBzcmNvZnMyIHwgMCkpO1xuICBpZiAoc3Jjb2ZzMiA8PSBzcmNvZnMxKSB7XG4gICAgZm9yKHZhciBqID0gMDsgaiA8IGJsaXRMZW5ndGg7ICsrail7XG4gICAgICBhMltqICsgc3Jjb2ZzMiB8IDBdID0gYTFbaiArIHNyY29mczEgfCAwXTtcbiAgICB9XG4gICAgcmV0dXJuIDtcbiAgfVxuICBmb3IodmFyIGokMSA9IGJsaXRMZW5ndGggLSAxIHwgMDsgaiQxID49IDA7IC0taiQxKXtcbiAgICBhMltqJDEgKyBzcmNvZnMyIHwgMF0gPSBhMVtqJDEgKyBzcmNvZnMxIHwgMF07XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGZvckVhY2hVKGEsIGYpIHtcbiAgZm9yKHZhciBpID0gMCAsaV9maW5pc2ggPSBhLmxlbmd0aDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIGYoYVtpXSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGZvckVhY2goYSwgZikge1xuICByZXR1cm4gZm9yRWFjaFUoYSwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gbWFwVShhLCBmKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciByID0gbmV3IEFycmF5KGwpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICByW2ldID0gZihhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gbWFwKGEsIGYpIHtcbiAgcmV0dXJuIG1hcFUoYSwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gZ2V0QnlVKGEsIHApIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcjtcbiAgd2hpbGUociA9PT0gdW5kZWZpbmVkICYmIGkgPCBsKSB7XG4gICAgdmFyIHYgPSBhW2ldO1xuICAgIGlmIChwKHYpKSB7XG4gICAgICByID0gQ2FtbF9vcHRpb24uc29tZSh2KTtcbiAgICB9XG4gICAgaSA9IGkgKyAxIHwgMDtcbiAgfTtcbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGdldEJ5KGEsIHApIHtcbiAgcmV0dXJuIGdldEJ5VShhLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBnZXRJbmRleEJ5VShhLCBwKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIHI7XG4gIHdoaWxlKHIgPT09IHVuZGVmaW5lZCAmJiBpIDwgbCkge1xuICAgIHZhciB2ID0gYVtpXTtcbiAgICBpZiAocCh2KSkge1xuICAgICAgciA9IGk7XG4gICAgfVxuICAgIGkgPSBpICsgMSB8IDA7XG4gIH07XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBnZXRJbmRleEJ5KGEsIHApIHtcbiAgcmV0dXJuIGdldEluZGV4QnlVKGEsIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIGtlZXBVKGEsIGYpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIHIgPSBuZXcgQXJyYXkobCk7XG4gIHZhciBqID0gMDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgdmFyIHYgPSBhW2ldO1xuICAgIGlmIChmKHYpKSB7XG4gICAgICByW2pdID0gdjtcbiAgICAgIGogPSBqICsgMSB8IDA7XG4gICAgfVxuICAgIFxuICB9XG4gIHIubGVuZ3RoID0gajtcbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGtlZXAoYSwgZikge1xuICByZXR1cm4ga2VlcFUoYSwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24ga2VlcFdpdGhJbmRleFUoYSwgZikge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgciA9IG5ldyBBcnJheShsKTtcbiAgdmFyIGogPSAwO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICB2YXIgdiA9IGFbaV07XG4gICAgaWYgKGYodiwgaSkpIHtcbiAgICAgIHJbal0gPSB2O1xuICAgICAgaiA9IGogKyAxIHwgMDtcbiAgICB9XG4gICAgXG4gIH1cbiAgci5sZW5ndGggPSBqO1xuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24ga2VlcFdpdGhJbmRleChhLCBmKSB7XG4gIHJldHVybiBrZWVwV2l0aEluZGV4VShhLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiBrZWVwTWFwVShhLCBmKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciByID0gbmV3IEFycmF5KGwpO1xuICB2YXIgaiA9IDA7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHZhciB2ID0gYVtpXTtcbiAgICB2YXIgdiQxID0gZih2KTtcbiAgICBpZiAodiQxICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJbal0gPSBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKHYkMSk7XG4gICAgICBqID0gaiArIDEgfCAwO1xuICAgIH1cbiAgICBcbiAgfVxuICByLmxlbmd0aCA9IGo7XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBrZWVwTWFwKGEsIGYpIHtcbiAgcmV0dXJuIGtlZXBNYXBVKGEsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hXaXRoSW5kZXhVKGEsIGYpIHtcbiAgZm9yKHZhciBpID0gMCAsaV9maW5pc2ggPSBhLmxlbmd0aDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIGYoaSwgYVtpXSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGZvckVhY2hXaXRoSW5kZXgoYSwgZikge1xuICByZXR1cm4gZm9yRWFjaFdpdGhJbmRleFUoYSwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gbWFwV2l0aEluZGV4VShhLCBmKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciByID0gbmV3IEFycmF5KGwpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICByW2ldID0gZihpLCBhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gbWFwV2l0aEluZGV4KGEsIGYpIHtcbiAgcmV0dXJuIG1hcFdpdGhJbmRleFUoYSwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlVShhLCB4LCBmKSB7XG4gIHZhciByID0geDtcbiAgZm9yKHZhciBpID0gMCAsaV9maW5pc2ggPSBhLmxlbmd0aDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIHIgPSBmKHIsIGFbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiByZWR1Y2UoYSwgeCwgZikge1xuICByZXR1cm4gcmVkdWNlVShhLCB4LCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlVShhLCB4LCBmKSB7XG4gIHZhciByID0geDtcbiAgZm9yKHZhciBpID0gYS5sZW5ndGggLSAxIHwgMDsgaSA+PSAwOyAtLWkpe1xuICAgIHIgPSBmKHIsIGFbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlKGEsIHgsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVJldmVyc2VVKGEsIHgsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2UyVShhLCBiLCB4LCBmKSB7XG4gIHZhciByID0geDtcbiAgdmFyIGxlbiA9IENhbWwuY2FtbF9pbnRfbWluKGEubGVuZ3RoLCBiLmxlbmd0aCk7XG4gIGZvcih2YXIgaSA9IGxlbiAtIDEgfCAwOyBpID49IDA7IC0taSl7XG4gICAgciA9IGYociwgYVtpXSwgYltpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2UyKGEsIGIsIHgsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVJldmVyc2UyVShhLCBiLCB4LCBDdXJyeS5fXzMoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VXaXRoSW5kZXhVKGEsIHgsIGYpIHtcbiAgdmFyIHIgPSB4O1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGEubGVuZ3RoOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgciA9IGYociwgYVtpXSwgaSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVdpdGhJbmRleChhLCB4LCBmKSB7XG4gIHJldHVybiByZWR1Y2VXaXRoSW5kZXhVKGEsIHgsIEN1cnJ5Ll9fMyhmKSk7XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5VShhcnIsIGIpIHtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciBfaSA9IDA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmIChpID09PSBsZW4pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWIoYXJyW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5KGFyciwgZikge1xuICByZXR1cm4gZXZlcnlVKGFyciwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gc29tZVUoYXJyLCBiKSB7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICB2YXIgX2kgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA9PT0gbGVuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChiKGFycltpXSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNvbWUoYXJyLCBmKSB7XG4gIHJldHVybiBzb21lVShhcnIsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5QXV4MihhcnIxLCBhcnIyLCBfaSwgYiwgbGVuKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmIChpID09PSBsZW4pIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWIoYXJyMVtpXSwgYXJyMltpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBldmVyeTJVKGEsIGIsIHApIHtcbiAgcmV0dXJuIGV2ZXJ5QXV4MihhLCBiLCAwLCBwLCBDYW1sLmNhbWxfaW50X21pbihhLmxlbmd0aCwgYi5sZW5ndGgpKTtcbn1cblxuZnVuY3Rpb24gZXZlcnkyKGEsIGIsIHApIHtcbiAgcmV0dXJuIGV2ZXJ5MlUoYSwgYiwgQ3VycnkuX18yKHApKTtcbn1cblxuZnVuY3Rpb24gc29tZTJVKGEsIGIsIHApIHtcbiAgdmFyIF9pID0gMDtcbiAgdmFyIGxlbiA9IENhbWwuY2FtbF9pbnRfbWluKGEubGVuZ3RoLCBiLmxlbmd0aCk7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmIChpID09PSBsZW4pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHAoYVtpXSwgYltpXSkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNvbWUyKGEsIGIsIHApIHtcbiAgcmV0dXJuIHNvbWUyVShhLCBiLCBDdXJyeS5fXzIocCkpO1xufVxuXG5mdW5jdGlvbiBlcVUoYSwgYiwgcCkge1xuICB2YXIgbGVuYSA9IGEubGVuZ3RoO1xuICB2YXIgbGVuYiA9IGIubGVuZ3RoO1xuICBpZiAobGVuYSA9PT0gbGVuYikge1xuICAgIHJldHVybiBldmVyeUF1eDIoYSwgYiwgMCwgcCwgbGVuYSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVxKGEsIGIsIHApIHtcbiAgcmV0dXJuIGVxVShhLCBiLCBDdXJyeS5fXzIocCkpO1xufVxuXG5mdW5jdGlvbiBjbXBVKGEsIGIsIHApIHtcbiAgdmFyIGxlbmEgPSBhLmxlbmd0aDtcbiAgdmFyIGxlbmIgPSBiLmxlbmd0aDtcbiAgaWYgKGxlbmEgPiBsZW5iKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSBpZiAobGVuYSA8IGxlbmIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgdmFyIF9pID0gMDtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgaSA9IF9pO1xuICAgICAgaWYgKGkgPT09IGxlbmEpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICB2YXIgYyA9IHAoYVtpXSwgYltpXSk7XG4gICAgICBpZiAoYyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH1cbiAgICAgIF9pID0gaSArIDEgfCAwO1xuICAgICAgY29udGludWUgO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gY21wKGEsIGIsIHApIHtcbiAgcmV0dXJuIGNtcFUoYSwgYiwgQ3VycnkuX18yKHApKTtcbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uVShhLCBmKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIGogPSAwO1xuICB2YXIgYTEgPSBuZXcgQXJyYXkobCk7XG4gIHZhciBhMiA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpaSA9IDA7IGlpIDwgbDsgKytpaSl7XG4gICAgdmFyIHYgPSBhW2lpXTtcbiAgICBpZiAoZih2KSkge1xuICAgICAgYTFbaV0gPSB2O1xuICAgICAgaSA9IGkgKyAxIHwgMDtcbiAgICB9IGVsc2Uge1xuICAgICAgYTJbal0gPSB2O1xuICAgICAgaiA9IGogKyAxIHwgMDtcbiAgICB9XG4gIH1cbiAgYTEubGVuZ3RoID0gaTtcbiAgYTIubGVuZ3RoID0gajtcbiAgcmV0dXJuIFtcbiAgICAgICAgICBhMSxcbiAgICAgICAgICBhMlxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb24oYSwgZikge1xuICByZXR1cm4gcGFydGl0aW9uVShhLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiB1bnppcChhKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciBhMSA9IG5ldyBBcnJheShsKTtcbiAgdmFyIGEyID0gbmV3IEFycmF5KGwpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICB2YXIgbWF0Y2ggPSBhW2ldO1xuICAgIGExW2ldID0gbWF0Y2hbMF07XG4gICAgYTJbaV0gPSBtYXRjaFsxXTtcbiAgfVxuICByZXR1cm4gW1xuICAgICAgICAgIGExLFxuICAgICAgICAgIGEyXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIGpvaW5XaXRoVShhLCBzZXAsIHRvU3RyaW5nKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIGlmIChsID09PSAwKSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbiAgdmFyIGxhc3RJbmRleCA9IGwgLSAxIHwgMDtcbiAgdmFyIF9pID0gMDtcbiAgdmFyIF9yZXMgPSBcIlwiO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHJlcyA9IF9yZXM7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA9PT0gbGFzdEluZGV4KSB7XG4gICAgICByZXR1cm4gcmVzICsgdG9TdHJpbmcoYVtpXSk7XG4gICAgfVxuICAgIF9yZXMgPSByZXMgKyAodG9TdHJpbmcoYVtpXSkgKyBzZXApO1xuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gam9pbldpdGgoYSwgc2VwLCB0b1N0cmluZykge1xuICByZXR1cm4gam9pbldpdGhVKGEsIHNlcCwgQ3VycnkuX18xKHRvU3RyaW5nKSk7XG59XG5cbmV4cG9ydCB7XG4gIGdldCAsXG4gIGdldEV4biAsXG4gIHNldCAsXG4gIHNldEV4biAsXG4gIHNodWZmbGVJblBsYWNlICxcbiAgc2h1ZmZsZSAsXG4gIHJldmVyc2VJblBsYWNlICxcbiAgcmV2ZXJzZSAsXG4gIG1ha2UgLFxuICByYW5nZSAsXG4gIHJhbmdlQnkgLFxuICBtYWtlQnlVICxcbiAgbWFrZUJ5ICxcbiAgbWFrZUJ5QW5kU2h1ZmZsZVUgLFxuICBtYWtlQnlBbmRTaHVmZmxlICxcbiAgemlwICxcbiAgemlwQnlVICxcbiAgemlwQnkgLFxuICB1bnppcCAsXG4gIGNvbmNhdCAsXG4gIGNvbmNhdE1hbnkgLFxuICBzbGljZSAsXG4gIHNsaWNlVG9FbmQgLFxuICBmaWxsICxcbiAgYmxpdCAsXG4gIGJsaXRVbnNhZmUgLFxuICBmb3JFYWNoVSAsXG4gIGZvckVhY2ggLFxuICBtYXBVICxcbiAgbWFwICxcbiAgZ2V0QnlVICxcbiAgZ2V0QnkgLFxuICBnZXRJbmRleEJ5VSAsXG4gIGdldEluZGV4QnkgLFxuICBrZWVwVSAsXG4gIGtlZXAgLFxuICBrZWVwV2l0aEluZGV4VSAsXG4gIGtlZXBXaXRoSW5kZXggLFxuICBrZWVwTWFwVSAsXG4gIGtlZXBNYXAgLFxuICBmb3JFYWNoV2l0aEluZGV4VSAsXG4gIGZvckVhY2hXaXRoSW5kZXggLFxuICBtYXBXaXRoSW5kZXhVICxcbiAgbWFwV2l0aEluZGV4ICxcbiAgcGFydGl0aW9uVSAsXG4gIHBhcnRpdGlvbiAsXG4gIHJlZHVjZVUgLFxuICByZWR1Y2UgLFxuICByZWR1Y2VSZXZlcnNlVSAsXG4gIHJlZHVjZVJldmVyc2UgLFxuICByZWR1Y2VSZXZlcnNlMlUgLFxuICByZWR1Y2VSZXZlcnNlMiAsXG4gIHJlZHVjZVdpdGhJbmRleFUgLFxuICByZWR1Y2VXaXRoSW5kZXggLFxuICBqb2luV2l0aFUgLFxuICBqb2luV2l0aCAsXG4gIHNvbWVVICxcbiAgc29tZSAsXG4gIGV2ZXJ5VSAsXG4gIGV2ZXJ5ICxcbiAgZXZlcnkyVSAsXG4gIGV2ZXJ5MiAsXG4gIHNvbWUyVSAsXG4gIHNvbWUyICxcbiAgY21wVSAsXG4gIGNtcCAsXG4gIGVxVSAsXG4gIGVxICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCIuL2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X0FycmF5IGZyb20gXCIuL2JlbHRfQXJyYXkuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfb3B0aW9uIGZyb20gXCIuL2NhbWxfb3B0aW9uLmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X1NvcnRBcnJheSBmcm9tIFwiLi9iZWx0X1NvcnRBcnJheS5qc1wiO1xuXG5mdW5jdGlvbiBoZWFkKHgpIHtcbiAgaWYgKHgpIHtcbiAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZSh4LmhkKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gaGVhZEV4bih4KSB7XG4gIGlmICh4KSB7XG4gICAgcmV0dXJuIHguaGQ7XG4gIH1cbiAgdGhyb3cge1xuICAgICAgICBSRV9FWE5fSUQ6IFwiTm90X2ZvdW5kXCIsXG4gICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgfTtcbn1cblxuZnVuY3Rpb24gdGFpbCh4KSB7XG4gIGlmICh4KSB7XG4gICAgcmV0dXJuIHgudGw7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIHRhaWxFeG4oeCkge1xuICBpZiAoeCkge1xuICAgIHJldHVybiB4LnRsO1xuICB9XG4gIHRocm93IHtcbiAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGFkZCh4cywgeCkge1xuICByZXR1cm4ge1xuICAgICAgICAgIGhkOiB4LFxuICAgICAgICAgIHRsOiB4c1xuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXQoeCwgbikge1xuICBpZiAobiA8IDApIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHZhciBfeCA9IHg7XG4gICAgdmFyIF9uID0gbjtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgbiQxID0gX247XG4gICAgICB2YXIgeCQxID0gX3g7XG4gICAgICBpZiAoIXgkMSkge1xuICAgICAgICByZXR1cm4gO1xuICAgICAgfVxuICAgICAgaWYgKG4kMSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZSh4JDEuaGQpO1xuICAgICAgfVxuICAgICAgX24gPSBuJDEgLSAxIHwgMDtcbiAgICAgIF94ID0geCQxLnRsO1xuICAgICAgY29udGludWUgO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0RXhuKHgsIG4pIHtcbiAgaWYgKG4gPCAwKSB7XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgfTtcbiAgfVxuICB2YXIgX3ggPSB4O1xuICB2YXIgX24gPSBuO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIG4kMSA9IF9uO1xuICAgIHZhciB4JDEgPSBfeDtcbiAgICBpZiAoeCQxKSB7XG4gICAgICBpZiAobiQxID09PSAwKSB7XG4gICAgICAgIHJldHVybiB4JDEuaGQ7XG4gICAgICB9XG4gICAgICBfbiA9IG4kMSAtIDEgfCAwO1xuICAgICAgX3ggPSB4JDEudGw7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IFwiTm90X2ZvdW5kXCIsXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnRpdGlvbkF1eChwLCBfY2VsbCwgX3ByZWNYLCBfcHJlY1kpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjWSA9IF9wcmVjWTtcbiAgICB2YXIgcHJlY1ggPSBfcHJlY1g7XG4gICAgdmFyIGNlbGwgPSBfY2VsbDtcbiAgICBpZiAoIWNlbGwpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciB0ID0gY2VsbC50bDtcbiAgICB2YXIgaCA9IGNlbGwuaGQ7XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogaCxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIGlmIChwKGgpKSB7XG4gICAgICBwcmVjWC50bCA9IG5leHQ7XG4gICAgICBfcHJlY1ggPSBuZXh0O1xuICAgICAgX2NlbGwgPSB0O1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBwcmVjWS50bCA9IG5leHQ7XG4gICAgX3ByZWNZID0gbmV4dDtcbiAgICBfY2VsbCA9IHQ7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzcGxpdEF1eChfY2VsbCwgX3ByZWNYLCBfcHJlY1kpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjWSA9IF9wcmVjWTtcbiAgICB2YXIgcHJlY1ggPSBfcHJlY1g7XG4gICAgdmFyIGNlbGwgPSBfY2VsbDtcbiAgICBpZiAoIWNlbGwpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciBtYXRjaCA9IGNlbGwuaGQ7XG4gICAgdmFyIG5leHRBID0ge1xuICAgICAgaGQ6IG1hdGNoWzBdLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgdmFyIG5leHRCID0ge1xuICAgICAgaGQ6IG1hdGNoWzFdLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlY1gudGwgPSBuZXh0QTtcbiAgICBwcmVjWS50bCA9IG5leHRCO1xuICAgIF9wcmVjWSA9IG5leHRCO1xuICAgIF9wcmVjWCA9IG5leHRBO1xuICAgIF9jZWxsID0gY2VsbC50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvcHlBdXhDb250KF9jZWxsWCwgX3ByZWMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiBwcmVjO1xuICAgIH1cbiAgICB2YXIgbmV4dCA9IHtcbiAgICAgIGhkOiBjZWxsWC5oZCxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWMudGwgPSBuZXh0O1xuICAgIF9wcmVjID0gbmV4dDtcbiAgICBfY2VsbFggPSBjZWxsWC50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvcHlBdXhXaXRGaWx0ZXIoZiwgX2NlbGxYLCBfcHJlYykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIHQgPSBjZWxsWC50bDtcbiAgICB2YXIgaCA9IGNlbGxYLmhkO1xuICAgIGlmIChmKGgpKSB7XG4gICAgICB2YXIgbmV4dCA9IHtcbiAgICAgICAgaGQ6IGgsXG4gICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgIH07XG4gICAgICBwcmVjLnRsID0gbmV4dDtcbiAgICAgIF9wcmVjID0gbmV4dDtcbiAgICAgIF9jZWxsWCA9IHQ7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIF9jZWxsWCA9IHQ7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb3B5QXV4V2l0aEZpbHRlckluZGV4KGYsIF9jZWxsWCwgX3ByZWMsIF9pKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciB0ID0gY2VsbFgudGw7XG4gICAgdmFyIGggPSBjZWxsWC5oZDtcbiAgICBpZiAoZihoLCBpKSkge1xuICAgICAgdmFyIG5leHQgPSB7XG4gICAgICAgIGhkOiBoLFxuICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICB9O1xuICAgICAgcHJlYy50bCA9IG5leHQ7XG4gICAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICAgIF9wcmVjID0gbmV4dDtcbiAgICAgIF9jZWxsWCA9IHQ7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIF9jZWxsWCA9IHQ7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb3B5QXV4V2l0RmlsdGVyTWFwKGYsIF9jZWxsWCwgX3ByZWMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciB0ID0gY2VsbFgudGw7XG4gICAgdmFyIGggPSBmKGNlbGxYLmhkKTtcbiAgICBpZiAoaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgbmV4dCA9IHtcbiAgICAgICAgaGQ6IENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24oaCksXG4gICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgIH07XG4gICAgICBwcmVjLnRsID0gbmV4dDtcbiAgICAgIF9wcmVjID0gbmV4dDtcbiAgICAgIF9jZWxsWCA9IHQ7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIF9jZWxsWCA9IHQ7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmVBc3NvY0F1eFdpdGhNYXAoX2NlbGxYLCB4LCBfcHJlYywgZikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgdCA9IGNlbGxYLnRsO1xuICAgIHZhciBoID0gY2VsbFguaGQ7XG4gICAgaWYgKGYoaFswXSwgeCkpIHtcbiAgICAgIHByZWMudGwgPSB0O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBuZXh0ID0ge1xuICAgICAgaGQ6IGgsXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gbmV4dDtcbiAgICBfcHJlYyA9IG5leHQ7XG4gICAgX2NlbGxYID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNldEFzc29jQXV4V2l0aE1hcChfY2VsbFgsIHgsIGssIF9wcmVjLCBlcSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgdCA9IGNlbGxYLnRsO1xuICAgIHZhciBoID0gY2VsbFguaGQ7XG4gICAgaWYgKGVxKGhbMF0sIHgpKSB7XG4gICAgICBwcmVjLnRsID0ge1xuICAgICAgICBoZDogW1xuICAgICAgICAgIHgsXG4gICAgICAgICAga1xuICAgICAgICBdLFxuICAgICAgICB0bDogdFxuICAgICAgfTtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgbmV4dCA9IHtcbiAgICAgIGhkOiBoLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IG5leHQ7XG4gICAgX3ByZWMgPSBuZXh0O1xuICAgIF9jZWxsWCA9IHQ7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb3B5QXV4V2l0aE1hcChfY2VsbFgsIF9wcmVjLCBmKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgbmV4dCA9IHtcbiAgICAgIGhkOiBmKGNlbGxYLmhkKSxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWMudGwgPSBuZXh0O1xuICAgIF9wcmVjID0gbmV4dDtcbiAgICBfY2VsbFggPSBjZWxsWC50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHppcEF1eChfY2VsbFgsIF9jZWxsWSwgX3ByZWMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGxZID0gX2NlbGxZO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBpZiAoIWNlbGxZKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgbmV4dCA9IHtcbiAgICAgIGhkOiBbXG4gICAgICAgIGNlbGxYLmhkLFxuICAgICAgICBjZWxsWS5oZFxuICAgICAgXSxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWMudGwgPSBuZXh0O1xuICAgIF9wcmVjID0gbmV4dDtcbiAgICBfY2VsbFkgPSBjZWxsWS50bDtcbiAgICBfY2VsbFggPSBjZWxsWC50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvcHlBdXhXaXRoTWFwMihmLCBfY2VsbFgsIF9jZWxsWSwgX3ByZWMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGxZID0gX2NlbGxZO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBpZiAoIWNlbGxZKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgbmV4dCA9IHtcbiAgICAgIGhkOiBmKGNlbGxYLmhkLCBjZWxsWS5oZCksXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gbmV4dDtcbiAgICBfcHJlYyA9IG5leHQ7XG4gICAgX2NlbGxZID0gY2VsbFkudGw7XG4gICAgX2NlbGxYID0gY2VsbFgudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb3B5QXV4V2l0aE1hcEkoZiwgX2ksIF9jZWxsWCwgX3ByZWMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogZihpLCBjZWxsWC5oZCksXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gbmV4dDtcbiAgICBfcHJlYyA9IG5leHQ7XG4gICAgX2NlbGxYID0gY2VsbFgudGw7XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0YWtlQXV4KF9uLCBfY2VsbCwgX3ByZWMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGwgPSBfY2VsbDtcbiAgICB2YXIgbiA9IF9uO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFjZWxsKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciBjZWxsJDEgPSB7XG4gICAgICBoZDogY2VsbC5oZCxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWMudGwgPSBjZWxsJDE7XG4gICAgX3ByZWMgPSBjZWxsJDE7XG4gICAgX2NlbGwgPSBjZWxsLnRsO1xuICAgIF9uID0gbiAtIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3BsaXRBdEF1eChfbiwgX2NlbGwsIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsID0gX2NlbGw7XG4gICAgdmFyIG4gPSBfbjtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgcmV0dXJuIGNlbGw7XG4gICAgfVxuICAgIGlmICghY2VsbCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIGNlbGwkMSA9IHtcbiAgICAgIGhkOiBjZWxsLmhkLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IGNlbGwkMTtcbiAgICBfcHJlYyA9IGNlbGwkMTtcbiAgICBfY2VsbCA9IGNlbGwudGw7XG4gICAgX24gPSBuIC0gMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0YWtlKGxzdCwgbikge1xuICBpZiAobiA8IDApIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIGlmIChuID09PSAwKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICBpZiAoIWxzdCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IGxzdC5oZCxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciBoYXMgPSB0YWtlQXV4KG4gLSAxIHwgMCwgbHN0LnRsLCBjZWxsKTtcbiAgaWYgKGhhcykge1xuICAgIHJldHVybiBjZWxsO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBkcm9wKGxzdCwgbikge1xuICBpZiAobiA8IDApIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHZhciBfbCA9IGxzdDtcbiAgICB2YXIgX24gPSBuO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBuJDEgPSBfbjtcbiAgICAgIHZhciBsID0gX2w7XG4gICAgICBpZiAobiQxID09PSAwKSB7XG4gICAgICAgIHJldHVybiBsO1xuICAgICAgfVxuICAgICAgaWYgKCFsKSB7XG4gICAgICAgIHJldHVybiA7XG4gICAgICB9XG4gICAgICBfbiA9IG4kMSAtIDEgfCAwO1xuICAgICAgX2wgPSBsLnRsO1xuICAgICAgY29udGludWUgO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gc3BsaXRBdChsc3QsIG4pIHtcbiAgaWYgKG4gPCAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICBpZiAobiA9PT0gMCkge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICAvKiBbXSAqLzAsXG4gICAgICAgICAgICBsc3RcbiAgICAgICAgICBdO1xuICB9XG4gIGlmICghbHN0KSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgY2VsbCA9IHtcbiAgICBoZDogbHN0LmhkLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIHJlc3QgPSBzcGxpdEF0QXV4KG4gLSAxIHwgMCwgbHN0LnRsLCBjZWxsKTtcbiAgaWYgKHJlc3QgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBjZWxsLFxuICAgICAgICAgICAgcmVzdFxuICAgICAgICAgIF07XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGNvbmNhdCh4cywgeXMpIHtcbiAgaWYgKCF4cykge1xuICAgIHJldHVybiB5cztcbiAgfVxuICB2YXIgY2VsbCA9IHtcbiAgICBoZDogeHMuaGQsXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICBjb3B5QXV4Q29udCh4cy50bCwgY2VsbCkudGwgPSB5cztcbiAgcmV0dXJuIGNlbGw7XG59XG5cbmZ1bmN0aW9uIG1hcFUoeHMsIGYpIHtcbiAgaWYgKCF4cykge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IGYoeHMuaGQpLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgY29weUF1eFdpdGhNYXAoeHMudGwsIGNlbGwsIGYpO1xuICByZXR1cm4gY2VsbDtcbn1cblxuZnVuY3Rpb24gbWFwKHhzLCBmKSB7XG4gIHJldHVybiBtYXBVKHhzLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiB6aXBCeVUobDEsIGwyLCBmKSB7XG4gIGlmICghbDEpIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIGlmICghbDIpIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiBmKGwxLmhkLCBsMi5oZCksXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICBjb3B5QXV4V2l0aE1hcDIoZiwgbDEudGwsIGwyLnRsLCBjZWxsKTtcbiAgcmV0dXJuIGNlbGw7XG59XG5cbmZ1bmN0aW9uIHppcEJ5KGwxLCBsMiwgZikge1xuICByZXR1cm4gemlwQnlVKGwxLCBsMiwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gbWFwV2l0aEluZGV4VSh4cywgZikge1xuICBpZiAoIXhzKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICB2YXIgY2VsbCA9IHtcbiAgICBoZDogZigwLCB4cy5oZCksXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICBjb3B5QXV4V2l0aE1hcEkoZiwgMSwgeHMudGwsIGNlbGwpO1xuICByZXR1cm4gY2VsbDtcbn1cblxuZnVuY3Rpb24gbWFwV2l0aEluZGV4KHhzLCBmKSB7XG4gIHJldHVybiBtYXBXaXRoSW5kZXhVKHhzLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiBtYWtlQnlVKG4sIGYpIHtcbiAgaWYgKG4gPD0gMCkge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgdmFyIGhlYWRYID0ge1xuICAgIGhkOiBmKDApLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIGN1ciA9IGhlYWRYO1xuICB2YXIgaSA9IDE7XG4gIHdoaWxlKGkgPCBuKSB7XG4gICAgdmFyIHYgPSB7XG4gICAgICBoZDogZihpKSxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIGN1ci50bCA9IHY7XG4gICAgY3VyID0gdjtcbiAgICBpID0gaSArIDEgfCAwO1xuICB9O1xuICByZXR1cm4gaGVhZFg7XG59XG5cbmZ1bmN0aW9uIG1ha2VCeShuLCBmKSB7XG4gIHJldHVybiBtYWtlQnlVKG4sIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIG1ha2Uobiwgdikge1xuICBpZiAobiA8PSAwKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICB2YXIgaGVhZFggPSB7XG4gICAgaGQ6IHYsXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgY3VyID0gaGVhZFg7XG4gIHZhciBpID0gMTtcbiAgd2hpbGUoaSA8IG4pIHtcbiAgICB2YXIgdiQxID0ge1xuICAgICAgaGQ6IHYsXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBjdXIudGwgPSB2JDE7XG4gICAgY3VyID0gdiQxO1xuICAgIGkgPSBpICsgMSB8IDA7XG4gIH07XG4gIHJldHVybiBoZWFkWDtcbn1cblxuZnVuY3Rpb24gbGVuZ3RoKHhzKSB7XG4gIHZhciBfeCA9IHhzO1xuICB2YXIgX2FjYyA9IDA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYWNjID0gX2FjYztcbiAgICB2YXIgeCA9IF94O1xuICAgIGlmICgheCkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgX2FjYyA9IGFjYyArIDEgfCAwO1xuICAgIF94ID0geC50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbGxBdXgoYXJyLCBfaSwgX3gpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4ID0gX3g7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoIXgpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGFycltpXSA9IHguaGQ7XG4gICAgX3ggPSB4LnRsO1xuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5KGEpIHtcbiAgdmFyIF9pID0gYS5sZW5ndGggLSAxIHwgMDtcbiAgdmFyIF9yZXMgPSAvKiBbXSAqLzA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcmVzID0gX3JlcztcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmIChpIDwgMCkge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgX3JlcyA9IHtcbiAgICAgIGhkOiBhW2ldLFxuICAgICAgdGw6IHJlc1xuICAgIH07XG4gICAgX2kgPSBpIC0gMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0b0FycmF5KHgpIHtcbiAgdmFyIGxlbiA9IGxlbmd0aCh4KTtcbiAgdmFyIGFyciA9IG5ldyBBcnJheShsZW4pO1xuICBmaWxsQXV4KGFyciwgMCwgeCk7XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIHNodWZmbGUoeHMpIHtcbiAgdmFyIHYgPSB0b0FycmF5KHhzKTtcbiAgQmVsdF9BcnJheS5zaHVmZmxlSW5QbGFjZSh2KTtcbiAgcmV0dXJuIGZyb21BcnJheSh2KTtcbn1cblxuZnVuY3Rpb24gcmV2ZXJzZUNvbmNhdChfbDEsIF9sMikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwyID0gX2wyO1xuICAgIHZhciBsMSA9IF9sMTtcbiAgICBpZiAoIWwxKSB7XG4gICAgICByZXR1cm4gbDI7XG4gICAgfVxuICAgIF9sMiA9IHtcbiAgICAgIGhkOiBsMS5oZCxcbiAgICAgIHRsOiBsMlxuICAgIH07XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZXZlcnNlKGwpIHtcbiAgcmV0dXJuIHJldmVyc2VDb25jYXQobCwgLyogW10gKi8wKTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbkF1eChfcHJlYywgX3hzKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICBpZiAoeHMpIHtcbiAgICAgIF94cyA9IHhzLnRsO1xuICAgICAgX3ByZWMgPSBjb3B5QXV4Q29udCh4cy5oZCwgcHJlYyk7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIHByZWMudGwgPSAvKiBbXSAqLzA7XG4gICAgcmV0dXJuIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbihfeHMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gLyogW10gKi8wO1xuICAgIH1cbiAgICB2YXIgbWF0Y2ggPSB4cy5oZDtcbiAgICBpZiAobWF0Y2gpIHtcbiAgICAgIHZhciBjZWxsID0ge1xuICAgICAgICBoZDogbWF0Y2guaGQsXG4gICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgIH07XG4gICAgICBmbGF0dGVuQXV4KGNvcHlBdXhDb250KG1hdGNoLnRsLCBjZWxsKSwgeHMudGwpO1xuICAgICAgcmV0dXJuIGNlbGw7XG4gICAgfVxuICAgIF94cyA9IHhzLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29uY2F0TWFueSh4cykge1xuICB2YXIgbGVuID0geHMubGVuZ3RoO1xuICBpZiAobGVuID09PSAxKSB7XG4gICAgcmV0dXJuIHhzWzBdO1xuICB9XG4gIGlmIChsZW4gPT09IDApIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIHZhciBsZW4kMSA9IHhzLmxlbmd0aDtcbiAgdmFyIHYgPSB4c1tsZW4kMSAtIDEgfCAwXTtcbiAgZm9yKHZhciBpID0gbGVuJDEgLSAyIHwgMDsgaSA+PSAwOyAtLWkpe1xuICAgIHYgPSBjb25jYXQoeHNbaV0sIHYpO1xuICB9XG4gIHJldHVybiB2O1xufVxuXG5mdW5jdGlvbiBtYXBSZXZlcnNlVShsLCBmKSB7XG4gIHZhciBfYWNjdSA9IC8qIFtdICovMDtcbiAgdmFyIF94cyA9IGw7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgdmFyIGFjY3UgPSBfYWNjdTtcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9XG4gICAgX3hzID0geHMudGw7XG4gICAgX2FjY3UgPSB7XG4gICAgICBoZDogZih4cy5oZCksXG4gICAgICB0bDogYWNjdVxuICAgIH07XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBSZXZlcnNlKGwsIGYpIHtcbiAgcmV0dXJuIG1hcFJldmVyc2VVKGwsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hVKF94cywgZikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGYoeHMuaGQpO1xuICAgIF94cyA9IHhzLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaCh4cywgZikge1xuICByZXR1cm4gZm9yRWFjaFUoeHMsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hXaXRoSW5kZXhVKGwsIGYpIHtcbiAgdmFyIF94cyA9IGw7XG4gIHZhciBfaSA9IDA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBmKGksIHhzLmhkKTtcbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hXaXRoSW5kZXgobCwgZikge1xuICByZXR1cm4gZm9yRWFjaFdpdGhJbmRleFUobCwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlVShfbCwgX2FjY3UsIGYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgdmFyIGwgPSBfbDtcbiAgICBpZiAoIWwpIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgICBfYWNjdSA9IGYoYWNjdSwgbC5oZCk7XG4gICAgX2wgPSBsLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlKGwsIGFjY3UsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVUobCwgYWNjdSwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZVVuc2FmZVUobCwgYWNjdSwgZikge1xuICBpZiAobCkge1xuICAgIHJldHVybiBmKHJlZHVjZVJldmVyc2VVbnNhZmVVKGwudGwsIGFjY3UsIGYpLCBsLmhkKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYWNjdTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlVShsLCBhY2MsIGYpIHtcbiAgdmFyIGxlbiA9IGxlbmd0aChsKTtcbiAgaWYgKGxlbiA8IDEwMDApIHtcbiAgICByZXR1cm4gcmVkdWNlUmV2ZXJzZVVuc2FmZVUobCwgYWNjLCBmKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQmVsdF9BcnJheS5yZWR1Y2VSZXZlcnNlVSh0b0FycmF5KGwpLCBhY2MsIGYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2UobCwgYWNjdSwgZikge1xuICByZXR1cm4gcmVkdWNlUmV2ZXJzZVUobCwgYWNjdSwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlV2l0aEluZGV4VShsLCBhY2MsIGYpIHtcbiAgdmFyIF9sID0gbDtcbiAgdmFyIF9hY2MgPSBhY2M7XG4gIHZhciBfaSA9IDA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIHZhciBhY2MkMSA9IF9hY2M7XG4gICAgdmFyIGwkMSA9IF9sO1xuICAgIGlmICghbCQxKSB7XG4gICAgICByZXR1cm4gYWNjJDE7XG4gICAgfVxuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIF9hY2MgPSBmKGFjYyQxLCBsJDEuaGQsIGkpO1xuICAgIF9sID0gbCQxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlV2l0aEluZGV4KGwsIGFjYywgZikge1xuICByZXR1cm4gcmVkdWNlV2l0aEluZGV4VShsLCBhY2MsIEN1cnJ5Ll9fMyhmKSk7XG59XG5cbmZ1bmN0aW9uIG1hcFJldmVyc2UyVShsMSwgbDIsIGYpIHtcbiAgdmFyIF9sMSA9IGwxO1xuICB2YXIgX2wyID0gbDI7XG4gIHZhciBfYWNjdSA9IC8qIFtdICovMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgdmFyIGwyJDEgPSBfbDI7XG4gICAgdmFyIGwxJDEgPSBfbDE7XG4gICAgaWYgKCFsMSQxKSB7XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9XG4gICAgaWYgKCFsMiQxKSB7XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9XG4gICAgX2FjY3UgPSB7XG4gICAgICBoZDogZihsMSQxLmhkLCBsMiQxLmhkKSxcbiAgICAgIHRsOiBhY2N1XG4gICAgfTtcbiAgICBfbDIgPSBsMiQxLnRsO1xuICAgIF9sMSA9IGwxJDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBSZXZlcnNlMihsMSwgbDIsIGYpIHtcbiAgcmV0dXJuIG1hcFJldmVyc2UyVShsMSwgbDIsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2gyVShfbDEsIF9sMiwgZikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwyID0gX2wyO1xuICAgIHZhciBsMSA9IF9sMTtcbiAgICBpZiAoIWwxKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBpZiAoIWwyKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBmKGwxLmhkLCBsMi5oZCk7XG4gICAgX2wyID0gbDIudGw7XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoMihsMSwgbDIsIGYpIHtcbiAgcmV0dXJuIGZvckVhY2gyVShsMSwgbDIsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZTJVKF9sMSwgX2wyLCBfYWNjdSwgZikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGFjY3UgPSBfYWNjdTtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgICBpZiAoIWwyKSB7XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9XG4gICAgX2FjY3UgPSBmKGFjY3UsIGwxLmhkLCBsMi5oZCk7XG4gICAgX2wyID0gbDIudGw7XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2UyKGwxLCBsMiwgYWNjLCBmKSB7XG4gIHJldHVybiByZWR1Y2UyVShsMSwgbDIsIGFjYywgQ3VycnkuX18zKGYpKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZTJVbnNhZmVVKGwxLCBsMiwgYWNjdSwgZikge1xuICBpZiAobDEgJiYgbDIpIHtcbiAgICByZXR1cm4gZihyZWR1Y2VSZXZlcnNlMlVuc2FmZVUobDEudGwsIGwyLnRsLCBhY2N1LCBmKSwgbDEuaGQsIGwyLmhkKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYWNjdTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlMlUobDEsIGwyLCBhY2MsIGYpIHtcbiAgdmFyIGxlbiA9IGxlbmd0aChsMSk7XG4gIGlmIChsZW4gPCAxMDAwKSB7XG4gICAgcmV0dXJuIHJlZHVjZVJldmVyc2UyVW5zYWZlVShsMSwgbDIsIGFjYywgZik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEJlbHRfQXJyYXkucmVkdWNlUmV2ZXJzZTJVKHRvQXJyYXkobDEpLCB0b0FycmF5KGwyKSwgYWNjLCBmKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlMihsMSwgbDIsIGFjYywgZikge1xuICByZXR1cm4gcmVkdWNlUmV2ZXJzZTJVKGwxLCBsMiwgYWNjLCBDdXJyeS5fXzMoZikpO1xufVxuXG5mdW5jdGlvbiBldmVyeVUoX3hzLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghcCh4cy5oZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBldmVyeSh4cywgcCkge1xuICByZXR1cm4gZXZlcnlVKHhzLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBzb21lVShfeHMsIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwKHhzLmhkKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF94cyA9IHhzLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc29tZSh4cywgcCkge1xuICByZXR1cm4gc29tZVUoeHMsIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5MlUoX2wxLCBfbDIsIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKCFsMSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghbDIpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXAobDEuaGQsIGwyLmhkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfbDIgPSBsMi50bDtcbiAgICBfbDEgPSBsMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5MihsMSwgbDIsIHApIHtcbiAgcmV0dXJuIGV2ZXJ5MlUobDEsIGwyLCBDdXJyeS5fXzIocCkpO1xufVxuXG5mdW5jdGlvbiBjbXBCeUxlbmd0aChfbDEsIF9sMikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwyID0gX2wyO1xuICAgIHZhciBsMSA9IF9sMTtcbiAgICBpZiAoIWwxKSB7XG4gICAgICBpZiAobDIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbDIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICBfbDIgPSBsMi50bDtcbiAgICBfbDEgPSBsMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNtcFUoX2wxLCBfbDIsIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKCFsMSkge1xuICAgICAgaWYgKGwyKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWwyKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgdmFyIGMgPSBwKGwxLmhkLCBsMi5oZCk7XG4gICAgaWYgKGMgIT09IDApIHtcbiAgICAgIHJldHVybiBjO1xuICAgIH1cbiAgICBfbDIgPSBsMi50bDtcbiAgICBfbDEgPSBsMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNtcChsMSwgbDIsIGYpIHtcbiAgcmV0dXJuIGNtcFUobDEsIGwyLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiBlcVUoX2wxLCBfbDIsIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKCFsMSkge1xuICAgICAgaWYgKGwyKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWwyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghcChsMS5oZCwgbDIuaGQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF9sMiA9IGwyLnRsO1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXEobDEsIGwyLCBmKSB7XG4gIHJldHVybiBlcVUobDEsIGwyLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiBzb21lMlUoX2wxLCBfbDIsIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKCFsMSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWwyKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwKGwxLmhkLCBsMi5oZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBfbDIgPSBsMi50bDtcbiAgICBfbDEgPSBsMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNvbWUyKGwxLCBsMiwgcCkge1xuICByZXR1cm4gc29tZTJVKGwxLCBsMiwgQ3VycnkuX18yKHApKTtcbn1cblxuZnVuY3Rpb24gaGFzVShfeHMsIHgsIGVxKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZXEoeHMuaGQsIHgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBoYXMoeHMsIHgsIGVxKSB7XG4gIHJldHVybiBoYXNVKHhzLCB4LCBDdXJyeS5fXzIoZXEpKTtcbn1cblxuZnVuY3Rpb24gZ2V0QXNzb2NVKF94cywgeCwgZXEpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgbWF0Y2ggPSB4cy5oZDtcbiAgICBpZiAoZXEobWF0Y2hbMF0sIHgpKSB7XG4gICAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZShtYXRjaFsxXSk7XG4gICAgfVxuICAgIF94cyA9IHhzLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0QXNzb2MoeHMsIHgsIGVxKSB7XG4gIHJldHVybiBnZXRBc3NvY1UoeHMsIHgsIEN1cnJ5Ll9fMihlcSkpO1xufVxuXG5mdW5jdGlvbiBoYXNBc3NvY1UoX3hzLCB4LCBlcSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGVxKHhzLmhkWzBdLCB4KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF94cyA9IHhzLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaGFzQXNzb2MoeHMsIHgsIGVxKSB7XG4gIHJldHVybiBoYXNBc3NvY1UoeHMsIHgsIEN1cnJ5Ll9fMihlcSkpO1xufVxuXG5mdW5jdGlvbiByZW1vdmVBc3NvY1UoeHMsIHgsIGVxKSB7XG4gIGlmICgheHMpIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIHZhciBsID0geHMudGw7XG4gIHZhciBwYWlyID0geHMuaGQ7XG4gIGlmIChlcShwYWlyWzBdLCB4KSkge1xuICAgIHJldHVybiBsO1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiBwYWlyLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIHJlbW92ZWQgPSByZW1vdmVBc3NvY0F1eFdpdGhNYXAobCwgeCwgY2VsbCwgZXEpO1xuICBpZiAocmVtb3ZlZCkge1xuICAgIHJldHVybiBjZWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4cztcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmVBc3NvYyh4cywgeCwgZXEpIHtcbiAgcmV0dXJuIHJlbW92ZUFzc29jVSh4cywgeCwgQ3VycnkuX18yKGVxKSk7XG59XG5cbmZ1bmN0aW9uIHNldEFzc29jVSh4cywgeCwgaywgZXEpIHtcbiAgaWYgKCF4cykge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZDogW1xuICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICBrXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgIH07XG4gIH1cbiAgdmFyIGwgPSB4cy50bDtcbiAgdmFyIHBhaXIgPSB4cy5oZDtcbiAgaWYgKGVxKHBhaXJbMF0sIHgpKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiBbXG4gICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgIGtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0bDogbFxuICAgICAgICAgIH07XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IHBhaXIsXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgcmVwbGFjZWQgPSBzZXRBc3NvY0F1eFdpdGhNYXAobCwgeCwgaywgY2VsbCwgZXEpO1xuICBpZiAocmVwbGFjZWQpIHtcbiAgICByZXR1cm4gY2VsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IFtcbiAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAga1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRsOiB4c1xuICAgICAgICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0QXNzb2MoeHMsIHgsIGssIGVxKSB7XG4gIHJldHVybiBzZXRBc3NvY1UoeHMsIHgsIGssIEN1cnJ5Ll9fMihlcSkpO1xufVxuXG5mdW5jdGlvbiBzb3J0VSh4cywgY21wKSB7XG4gIHZhciBhcnIgPSB0b0FycmF5KHhzKTtcbiAgQmVsdF9Tb3J0QXJyYXkuc3RhYmxlU29ydEluUGxhY2VCeVUoYXJyLCBjbXApO1xuICByZXR1cm4gZnJvbUFycmF5KGFycik7XG59XG5cbmZ1bmN0aW9uIHNvcnQoeHMsIGNtcCkge1xuICByZXR1cm4gc29ydFUoeHMsIEN1cnJ5Ll9fMihjbXApKTtcbn1cblxuZnVuY3Rpb24gZ2V0QnlVKF94cywgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciB4ID0geHMuaGQ7XG4gICAgaWYgKHAoeCkpIHtcbiAgICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKHgpO1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEJ5KHhzLCBwKSB7XG4gIHJldHVybiBnZXRCeVUoeHMsIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIGtlZXBVKF94cywgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiAvKiBbXSAqLzA7XG4gICAgfVxuICAgIHZhciB0ID0geHMudGw7XG4gICAgdmFyIGggPSB4cy5oZDtcbiAgICBpZiAocChoKSkge1xuICAgICAgdmFyIGNlbGwgPSB7XG4gICAgICAgIGhkOiBoLFxuICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICB9O1xuICAgICAgY29weUF1eFdpdEZpbHRlcihwLCB0LCBjZWxsKTtcbiAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cbiAgICBfeHMgPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24ga2VlcCh4cywgcCkge1xuICByZXR1cm4ga2VlcFUoeHMsIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIGtlZXBXaXRoSW5kZXhVKHhzLCBwKSB7XG4gIHZhciBfeHMgPSB4cztcbiAgdmFyIF9pID0gMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgdmFyIHhzJDEgPSBfeHM7XG4gICAgaWYgKCF4cyQxKSB7XG4gICAgICByZXR1cm4gLyogW10gKi8wO1xuICAgIH1cbiAgICB2YXIgdCA9IHhzJDEudGw7XG4gICAgdmFyIGggPSB4cyQxLmhkO1xuICAgIGlmIChwKGgsIGkpKSB7XG4gICAgICB2YXIgY2VsbCA9IHtcbiAgICAgICAgaGQ6IGgsXG4gICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgIH07XG4gICAgICBjb3B5QXV4V2l0aEZpbHRlckluZGV4KHAsIHQsIGNlbGwsIGkgKyAxIHwgMCk7XG4gICAgICByZXR1cm4gY2VsbDtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgX3hzID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGtlZXBXaXRoSW5kZXgoeHMsIHApIHtcbiAgcmV0dXJuIGtlZXBXaXRoSW5kZXhVKHhzLCBDdXJyeS5fXzIocCkpO1xufVxuXG5mdW5jdGlvbiBrZWVwTWFwVShfeHMsIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gLyogW10gKi8wO1xuICAgIH1cbiAgICB2YXIgdCA9IHhzLnRsO1xuICAgIHZhciBoID0gcCh4cy5oZCk7XG4gICAgaWYgKGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIGNlbGwgPSB7XG4gICAgICAgIGhkOiBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKGgpLFxuICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICB9O1xuICAgICAgY29weUF1eFdpdEZpbHRlck1hcChwLCB0LCBjZWxsKTtcbiAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cbiAgICBfeHMgPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24ga2VlcE1hcCh4cywgcCkge1xuICByZXR1cm4ga2VlcE1hcFUoeHMsIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnRpdGlvblUobCwgcCkge1xuICBpZiAoIWwpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgLyogW10gKi8wLFxuICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgXTtcbiAgfVxuICB2YXIgaCA9IGwuaGQ7XG4gIHZhciBuZXh0WCA9IHtcbiAgICBoZDogaCxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciBuZXh0WSA9IHtcbiAgICBoZDogaCxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciBiID0gcChoKTtcbiAgcGFydGl0aW9uQXV4KHAsIGwudGwsIG5leHRYLCBuZXh0WSk7XG4gIGlmIChiKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG5leHRYLFxuICAgICAgICAgICAgbmV4dFkudGxcbiAgICAgICAgICBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBuZXh0WC50bCxcbiAgICAgICAgICAgIG5leHRZXG4gICAgICAgICAgXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb24obCwgcCkge1xuICByZXR1cm4gcGFydGl0aW9uVShsLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiB1bnppcCh4cykge1xuICBpZiAoIXhzKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC8qIFtdICovMCxcbiAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgIF07XG4gIH1cbiAgdmFyIG1hdGNoID0geHMuaGQ7XG4gIHZhciBjZWxsWCA9IHtcbiAgICBoZDogbWF0Y2hbMF0sXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgY2VsbFkgPSB7XG4gICAgaGQ6IG1hdGNoWzFdLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgc3BsaXRBdXgoeHMudGwsIGNlbGxYLCBjZWxsWSk7XG4gIHJldHVybiBbXG4gICAgICAgICAgY2VsbFgsXG4gICAgICAgICAgY2VsbFlcbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gemlwKGwxLCBsMikge1xuICBpZiAoIWwxKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICBpZiAoIWwyKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICB2YXIgY2VsbCA9IHtcbiAgICBoZDogW1xuICAgICAgbDEuaGQsXG4gICAgICBsMi5oZFxuICAgIF0sXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB6aXBBdXgobDEudGwsIGwyLnRsLCBjZWxsKTtcbiAgcmV0dXJuIGNlbGw7XG59XG5cbnZhciBzaXplID0gbGVuZ3RoO1xuXG52YXIgZmlsdGVyID0ga2VlcDtcblxudmFyIGZpbHRlcldpdGhJbmRleCA9IGtlZXBXaXRoSW5kZXg7XG5cbmV4cG9ydCB7XG4gIGxlbmd0aCAsXG4gIHNpemUgLFxuICBoZWFkICxcbiAgaGVhZEV4biAsXG4gIHRhaWwgLFxuICB0YWlsRXhuICxcbiAgYWRkICxcbiAgZ2V0ICxcbiAgZ2V0RXhuICxcbiAgbWFrZSAsXG4gIG1ha2VCeVUgLFxuICBtYWtlQnkgLFxuICBzaHVmZmxlICxcbiAgZHJvcCAsXG4gIHRha2UgLFxuICBzcGxpdEF0ICxcbiAgY29uY2F0ICxcbiAgY29uY2F0TWFueSAsXG4gIHJldmVyc2VDb25jYXQgLFxuICBmbGF0dGVuICxcbiAgbWFwVSAsXG4gIG1hcCAsXG4gIHppcCAsXG4gIHppcEJ5VSAsXG4gIHppcEJ5ICxcbiAgbWFwV2l0aEluZGV4VSAsXG4gIG1hcFdpdGhJbmRleCAsXG4gIGZyb21BcnJheSAsXG4gIHRvQXJyYXkgLFxuICByZXZlcnNlICxcbiAgbWFwUmV2ZXJzZVUgLFxuICBtYXBSZXZlcnNlICxcbiAgZm9yRWFjaFUgLFxuICBmb3JFYWNoICxcbiAgZm9yRWFjaFdpdGhJbmRleFUgLFxuICBmb3JFYWNoV2l0aEluZGV4ICxcbiAgcmVkdWNlVSAsXG4gIHJlZHVjZSAsXG4gIHJlZHVjZVdpdGhJbmRleFUgLFxuICByZWR1Y2VXaXRoSW5kZXggLFxuICByZWR1Y2VSZXZlcnNlVSAsXG4gIHJlZHVjZVJldmVyc2UgLFxuICBtYXBSZXZlcnNlMlUgLFxuICBtYXBSZXZlcnNlMiAsXG4gIGZvckVhY2gyVSAsXG4gIGZvckVhY2gyICxcbiAgcmVkdWNlMlUgLFxuICByZWR1Y2UyICxcbiAgcmVkdWNlUmV2ZXJzZTJVICxcbiAgcmVkdWNlUmV2ZXJzZTIgLFxuICBldmVyeVUgLFxuICBldmVyeSAsXG4gIHNvbWVVICxcbiAgc29tZSAsXG4gIGV2ZXJ5MlUgLFxuICBldmVyeTIgLFxuICBzb21lMlUgLFxuICBzb21lMiAsXG4gIGNtcEJ5TGVuZ3RoICxcbiAgY21wVSAsXG4gIGNtcCAsXG4gIGVxVSAsXG4gIGVxICxcbiAgaGFzVSAsXG4gIGhhcyAsXG4gIGdldEJ5VSAsXG4gIGdldEJ5ICxcbiAga2VlcFUgLFxuICBrZWVwICxcbiAgZmlsdGVyICxcbiAga2VlcFdpdGhJbmRleFUgLFxuICBrZWVwV2l0aEluZGV4ICxcbiAgZmlsdGVyV2l0aEluZGV4ICxcbiAga2VlcE1hcFUgLFxuICBrZWVwTWFwICxcbiAgcGFydGl0aW9uVSAsXG4gIHBhcnRpdGlvbiAsXG4gIHVuemlwICxcbiAgZ2V0QXNzb2NVICxcbiAgZ2V0QXNzb2MgLFxuICBoYXNBc3NvY1UgLFxuICBoYXNBc3NvYyAsXG4gIHJlbW92ZUFzc29jVSAsXG4gIHJlbW92ZUFzc29jICxcbiAgc2V0QXNzb2NVICxcbiAgc2V0QXNzb2MgLFxuICBzb3J0VSAsXG4gIHNvcnQgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQ3VycnkgZnJvbSBcIi4vY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfQXJyYXkgZnJvbSBcIi4vYmVsdF9BcnJheS5qc1wiO1xuXG5mdW5jdGlvbiBzb3J0ZWRMZW5ndGhBdXhNb3JlKHhzLCBfcHJlYywgX2FjYywgbGVuLCBsdCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICBpZiAoYWNjID49IGxlbikge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgdmFyIHYgPSB4c1thY2NdO1xuICAgIGlmICghbHQodiwgcHJlYykpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIF9hY2MgPSBhY2MgKyAxIHwgMDtcbiAgICBfcHJlYyA9IHY7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHJpY3RseVNvcnRlZExlbmd0aFUoeHMsIGx0KSB7XG4gIHZhciBsZW4gPSB4cy5sZW5ndGg7XG4gIGlmIChsZW4gPT09IDAgfHwgbGVuID09PSAxKSB7XG4gICAgcmV0dXJuIGxlbjtcbiAgfVxuICB2YXIgeDAgPSB4c1swXTtcbiAgdmFyIHgxID0geHNbMV07XG4gIGlmIChsdCh4MCwgeDEpKSB7XG4gICAgdmFyIF9wcmVjID0geDE7XG4gICAgdmFyIF9hY2MgPSAyO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBhY2MgPSBfYWNjO1xuICAgICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICAgIGlmIChhY2MgPj0gbGVuKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgICB2YXIgdiA9IHhzW2FjY107XG4gICAgICBpZiAoIWx0KHByZWMsIHYpKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgICBfYWNjID0gYWNjICsgMSB8IDA7XG4gICAgICBfcHJlYyA9IHY7XG4gICAgICBjb250aW51ZSA7XG4gICAgfTtcbiAgfSBlbHNlIGlmIChsdCh4MSwgeDApKSB7XG4gICAgcmV0dXJuIC1zb3J0ZWRMZW5ndGhBdXhNb3JlKHhzLCB4MSwgMiwgbGVuLCBsdCkgfCAwO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmljdGx5U29ydGVkTGVuZ3RoKHhzLCBsdCkge1xuICByZXR1cm4gc3RyaWN0bHlTb3J0ZWRMZW5ndGhVKHhzLCBDdXJyeS5fXzIobHQpKTtcbn1cblxuZnVuY3Rpb24gaXNTb3J0ZWRVKGEsIGNtcCkge1xuICB2YXIgbGVuID0gYS5sZW5ndGg7XG4gIGlmIChsZW4gPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2kgPSAwO1xuICAgIHZhciBsYXN0X2JvdW5kID0gbGVuIC0gMSB8IDA7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIGkgPSBfaTtcbiAgICAgIGlmIChpID09PSBsYXN0X2JvdW5kKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGNtcChhW2ldLCBhW2kgKyAxIHwgMF0pID4gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzU29ydGVkKGEsIGNtcCkge1xuICByZXR1cm4gaXNTb3J0ZWRVKGEsIEN1cnJ5Ll9fMihjbXApKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2Uoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgY21wKSB7XG4gIHZhciBzcmMxciA9IHNyYzFvZnMgKyBzcmMxbGVuIHwgMDtcbiAgdmFyIHNyYzJyID0gc3JjMm9mcyArIHNyYzJsZW4gfCAwO1xuICB2YXIgX2kxID0gc3JjMW9mcztcbiAgdmFyIF9zMSA9IHNyY1tzcmMxb2ZzXTtcbiAgdmFyIF9pMiA9IHNyYzJvZnM7XG4gIHZhciBfczIgPSBzcmMyW3NyYzJvZnNdO1xuICB2YXIgX2QgPSBkc3RvZnM7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgZCA9IF9kO1xuICAgIHZhciBzMiA9IF9zMjtcbiAgICB2YXIgaTIgPSBfaTI7XG4gICAgdmFyIHMxID0gX3MxO1xuICAgIHZhciBpMSA9IF9pMTtcbiAgICBpZiAoY21wKHMxLCBzMikgPD0gMCkge1xuICAgICAgZHN0W2RdID0gczE7XG4gICAgICB2YXIgaTEkMSA9IGkxICsgMSB8IDA7XG4gICAgICBpZiAoaTEkMSA+PSBzcmMxcikge1xuICAgICAgICByZXR1cm4gQmVsdF9BcnJheS5ibGl0VW5zYWZlKHNyYzIsIGkyLCBkc3QsIGQgKyAxIHwgMCwgc3JjMnIgLSBpMiB8IDApO1xuICAgICAgfVxuICAgICAgX2QgPSBkICsgMSB8IDA7XG4gICAgICBfczEgPSBzcmNbaTEkMV07XG4gICAgICBfaTEgPSBpMSQxO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBkc3RbZF0gPSBzMjtcbiAgICB2YXIgaTIkMSA9IGkyICsgMSB8IDA7XG4gICAgaWYgKGkyJDEgPj0gc3JjMnIpIHtcbiAgICAgIHJldHVybiBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjLCBpMSwgZHN0LCBkICsgMSB8IDAsIHNyYzFyIC0gaTEgfCAwKTtcbiAgICB9XG4gICAgX2QgPSBkICsgMSB8IDA7XG4gICAgX3MyID0gc3JjMltpMiQxXTtcbiAgICBfaTIgPSBpMiQxO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdW5pb25VKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIGNtcCkge1xuICB2YXIgc3JjMXIgPSBzcmMxb2ZzICsgc3JjMWxlbiB8IDA7XG4gIHZhciBzcmMyciA9IHNyYzJvZnMgKyBzcmMybGVuIHwgMDtcbiAgdmFyIF9pMSA9IHNyYzFvZnM7XG4gIHZhciBfczEgPSBzcmNbc3JjMW9mc107XG4gIHZhciBfaTIgPSBzcmMyb2ZzO1xuICB2YXIgX3MyID0gc3JjMltzcmMyb2ZzXTtcbiAgdmFyIF9kID0gZHN0b2ZzO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGQgPSBfZDtcbiAgICB2YXIgczIgPSBfczI7XG4gICAgdmFyIGkyID0gX2kyO1xuICAgIHZhciBzMSA9IF9zMTtcbiAgICB2YXIgaTEgPSBfaTE7XG4gICAgdmFyIGMgPSBjbXAoczEsIHMyKTtcbiAgICBpZiAoYyA8IDApIHtcbiAgICAgIGRzdFtkXSA9IHMxO1xuICAgICAgdmFyIGkxJDEgPSBpMSArIDEgfCAwO1xuICAgICAgdmFyIGQkMSA9IGQgKyAxIHwgMDtcbiAgICAgIGlmIChpMSQxIDwgc3JjMXIpIHtcbiAgICAgICAgX2QgPSBkJDE7XG4gICAgICAgIF9zMSA9IHNyY1tpMSQxXTtcbiAgICAgICAgX2kxID0gaTEkMTtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgfVxuICAgICAgQmVsdF9BcnJheS5ibGl0VW5zYWZlKHNyYzIsIGkyLCBkc3QsIGQkMSwgc3JjMnIgLSBpMiB8IDApO1xuICAgICAgcmV0dXJuIChkJDEgKyBzcmMyciB8IDApIC0gaTIgfCAwO1xuICAgIH1cbiAgICBpZiAoYyA9PT0gMCkge1xuICAgICAgZHN0W2RdID0gczE7XG4gICAgICB2YXIgaTEkMiA9IGkxICsgMSB8IDA7XG4gICAgICB2YXIgaTIkMSA9IGkyICsgMSB8IDA7XG4gICAgICB2YXIgZCQyID0gZCArIDEgfCAwO1xuICAgICAgaWYgKCEoaTEkMiA8IHNyYzFyICYmIGkyJDEgPCBzcmMycikpIHtcbiAgICAgICAgaWYgKGkxJDIgPT09IHNyYzFyKSB7XG4gICAgICAgICAgQmVsdF9BcnJheS5ibGl0VW5zYWZlKHNyYzIsIGkyJDEsIGRzdCwgZCQyLCBzcmMyciAtIGkyJDEgfCAwKTtcbiAgICAgICAgICByZXR1cm4gKGQkMiArIHNyYzJyIHwgMCkgLSBpMiQxIHwgMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjLCBpMSQyLCBkc3QsIGQkMiwgc3JjMXIgLSBpMSQyIHwgMCk7XG4gICAgICAgICAgcmV0dXJuIChkJDIgKyBzcmMxciB8IDApIC0gaTEkMiB8IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF9kID0gZCQyO1xuICAgICAgX3MyID0gc3JjMltpMiQxXTtcbiAgICAgIF9pMiA9IGkyJDE7XG4gICAgICBfczEgPSBzcmNbaTEkMl07XG4gICAgICBfaTEgPSBpMSQyO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBkc3RbZF0gPSBzMjtcbiAgICB2YXIgaTIkMiA9IGkyICsgMSB8IDA7XG4gICAgdmFyIGQkMyA9IGQgKyAxIHwgMDtcbiAgICBpZiAoaTIkMiA8IHNyYzJyKSB7XG4gICAgICBfZCA9IGQkMztcbiAgICAgIF9zMiA9IHNyYzJbaTIkMl07XG4gICAgICBfaTIgPSBpMiQyO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjLCBpMSwgZHN0LCBkJDMsIHNyYzFyIC0gaTEgfCAwKTtcbiAgICByZXR1cm4gKGQkMyArIHNyYzFyIHwgMCkgLSBpMSB8IDA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVuaW9uKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIGNtcCkge1xuICByZXR1cm4gdW5pb25VKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIEN1cnJ5Ll9fMihjbXApKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJzZWN0VShzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBjbXApIHtcbiAgdmFyIHNyYzFyID0gc3JjMW9mcyArIHNyYzFsZW4gfCAwO1xuICB2YXIgc3JjMnIgPSBzcmMyb2ZzICsgc3JjMmxlbiB8IDA7XG4gIHZhciBfaTEgPSBzcmMxb2ZzO1xuICB2YXIgX3MxID0gc3JjW3NyYzFvZnNdO1xuICB2YXIgX2kyID0gc3JjMm9mcztcbiAgdmFyIF9zMiA9IHNyYzJbc3JjMm9mc107XG4gIHZhciBfZCA9IGRzdG9mcztcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBkID0gX2Q7XG4gICAgdmFyIHMyID0gX3MyO1xuICAgIHZhciBpMiA9IF9pMjtcbiAgICB2YXIgczEgPSBfczE7XG4gICAgdmFyIGkxID0gX2kxO1xuICAgIHZhciBjID0gY21wKHMxLCBzMik7XG4gICAgaWYgKGMgPCAwKSB7XG4gICAgICB2YXIgaTEkMSA9IGkxICsgMSB8IDA7XG4gICAgICBpZiAoaTEkMSA+PSBzcmMxcikge1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH1cbiAgICAgIF9zMSA9IHNyY1tpMSQxXTtcbiAgICAgIF9pMSA9IGkxJDE7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIGlmIChjID09PSAwKSB7XG4gICAgICBkc3RbZF0gPSBzMTtcbiAgICAgIHZhciBpMSQyID0gaTEgKyAxIHwgMDtcbiAgICAgIHZhciBpMiQxID0gaTIgKyAxIHwgMDtcbiAgICAgIHZhciBkJDEgPSBkICsgMSB8IDA7XG4gICAgICBpZiAoIShpMSQyIDwgc3JjMXIgJiYgaTIkMSA8IHNyYzJyKSkge1xuICAgICAgICByZXR1cm4gZCQxO1xuICAgICAgfVxuICAgICAgX2QgPSBkJDE7XG4gICAgICBfczIgPSBzcmMyW2kyJDFdO1xuICAgICAgX2kyID0gaTIkMTtcbiAgICAgIF9zMSA9IHNyY1tpMSQyXTtcbiAgICAgIF9pMSA9IGkxJDI7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIHZhciBpMiQyID0gaTIgKyAxIHwgMDtcbiAgICBpZiAoaTIkMiA+PSBzcmMycikge1xuICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIF9zMiA9IHNyYzJbaTIkMl07XG4gICAgX2kyID0gaTIkMjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludGVyc2VjdChzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBjbXApIHtcbiAgcmV0dXJuIGludGVyc2VjdFUoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgQ3VycnkuX18yKGNtcCkpO1xufVxuXG5mdW5jdGlvbiBkaWZmVShzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBjbXApIHtcbiAgdmFyIHNyYzFyID0gc3JjMW9mcyArIHNyYzFsZW4gfCAwO1xuICB2YXIgc3JjMnIgPSBzcmMyb2ZzICsgc3JjMmxlbiB8IDA7XG4gIHZhciBfaTEgPSBzcmMxb2ZzO1xuICB2YXIgX3MxID0gc3JjW3NyYzFvZnNdO1xuICB2YXIgX2kyID0gc3JjMm9mcztcbiAgdmFyIF9zMiA9IHNyYzJbc3JjMm9mc107XG4gIHZhciBfZCA9IGRzdG9mcztcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBkID0gX2Q7XG4gICAgdmFyIHMyID0gX3MyO1xuICAgIHZhciBpMiA9IF9pMjtcbiAgICB2YXIgczEgPSBfczE7XG4gICAgdmFyIGkxID0gX2kxO1xuICAgIHZhciBjID0gY21wKHMxLCBzMik7XG4gICAgaWYgKGMgPCAwKSB7XG4gICAgICBkc3RbZF0gPSBzMTtcbiAgICAgIHZhciBkJDEgPSBkICsgMSB8IDA7XG4gICAgICB2YXIgaTEkMSA9IGkxICsgMSB8IDA7XG4gICAgICBpZiAoaTEkMSA+PSBzcmMxcikge1xuICAgICAgICByZXR1cm4gZCQxO1xuICAgICAgfVxuICAgICAgX2QgPSBkJDE7XG4gICAgICBfczEgPSBzcmNbaTEkMV07XG4gICAgICBfaTEgPSBpMSQxO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBpZiAoYyA9PT0gMCkge1xuICAgICAgdmFyIGkxJDIgPSBpMSArIDEgfCAwO1xuICAgICAgdmFyIGkyJDEgPSBpMiArIDEgfCAwO1xuICAgICAgaWYgKCEoaTEkMiA8IHNyYzFyICYmIGkyJDEgPCBzcmMycikpIHtcbiAgICAgICAgaWYgKGkxJDIgPT09IHNyYzFyKSB7XG4gICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQmVsdF9BcnJheS5ibGl0VW5zYWZlKHNyYywgaTEkMiwgZHN0LCBkLCBzcmMxciAtIGkxJDIgfCAwKTtcbiAgICAgICAgICByZXR1cm4gKGQgKyBzcmMxciB8IDApIC0gaTEkMiB8IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF9zMiA9IHNyYzJbaTIkMV07XG4gICAgICBfaTIgPSBpMiQxO1xuICAgICAgX3MxID0gc3JjW2kxJDJdO1xuICAgICAgX2kxID0gaTEkMjtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgdmFyIGkyJDIgPSBpMiArIDEgfCAwO1xuICAgIGlmIChpMiQyIDwgc3JjMnIpIHtcbiAgICAgIF9zMiA9IHNyYzJbaTIkMl07XG4gICAgICBfaTIgPSBpMiQyO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjLCBpMSwgZHN0LCBkLCBzcmMxciAtIGkxIHwgMCk7XG4gICAgcmV0dXJuIChkICsgc3JjMXIgfCAwKSAtIGkxIHwgMDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGlmZihzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBjbXApIHtcbiAgcmV0dXJuIGRpZmZVKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIEN1cnJ5Ll9fMihjbXApKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0aW9uU29ydChzcmMsIHNyY29mcywgZHN0LCBkc3RvZnMsIGxlbiwgY21wKSB7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgdmFyIGUgPSBzcmNbc3Jjb2ZzICsgaSB8IDBdO1xuICAgIHZhciBqID0gKGRzdG9mcyArIGkgfCAwKSAtIDEgfCAwO1xuICAgIHdoaWxlKGogPj0gZHN0b2ZzICYmIGNtcChkc3Rbal0sIGUpID4gMCkge1xuICAgICAgZHN0W2ogKyAxIHwgMF0gPSBkc3Rbal07XG4gICAgICBqID0gaiAtIDEgfCAwO1xuICAgIH07XG4gICAgZHN0W2ogKyAxIHwgMF0gPSBlO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBzb3J0VG8oc3JjLCBzcmNvZnMsIGRzdCwgZHN0b2ZzLCBsZW4sIGNtcCkge1xuICBpZiAobGVuIDw9IDUpIHtcbiAgICByZXR1cm4gaW5zZXJ0aW9uU29ydChzcmMsIHNyY29mcywgZHN0LCBkc3RvZnMsIGxlbiwgY21wKTtcbiAgfVxuICB2YXIgbDEgPSBsZW4gLyAyIHwgMDtcbiAgdmFyIGwyID0gbGVuIC0gbDEgfCAwO1xuICBzb3J0VG8oc3JjLCBzcmNvZnMgKyBsMSB8IDAsIGRzdCwgZHN0b2ZzICsgbDEgfCAwLCBsMiwgY21wKTtcbiAgc29ydFRvKHNyYywgc3Jjb2ZzLCBzcmMsIHNyY29mcyArIGwyIHwgMCwgbDEsIGNtcCk7XG4gIHJldHVybiBtZXJnZShzcmMsIHNyY29mcyArIGwyIHwgMCwgbDEsIGRzdCwgZHN0b2ZzICsgbDEgfCAwLCBsMiwgZHN0LCBkc3RvZnMsIGNtcCk7XG59XG5cbmZ1bmN0aW9uIHN0YWJsZVNvcnRJblBsYWNlQnlVKGEsIGNtcCkge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICBpZiAobCA8PSA1KSB7XG4gICAgcmV0dXJuIGluc2VydGlvblNvcnQoYSwgMCwgYSwgMCwgbCwgY21wKTtcbiAgfVxuICB2YXIgbDEgPSBsIC8gMiB8IDA7XG4gIHZhciBsMiA9IGwgLSBsMSB8IDA7XG4gIHZhciB0ID0gbmV3IEFycmF5KGwyKTtcbiAgc29ydFRvKGEsIGwxLCB0LCAwLCBsMiwgY21wKTtcbiAgc29ydFRvKGEsIDAsIGEsIGwyLCBsMSwgY21wKTtcbiAgcmV0dXJuIG1lcmdlKGEsIGwyLCBsMSwgdCwgMCwgbDIsIGEsIDAsIGNtcCk7XG59XG5cbmZ1bmN0aW9uIHN0YWJsZVNvcnRJblBsYWNlQnkoYSwgY21wKSB7XG4gIHJldHVybiBzdGFibGVTb3J0SW5QbGFjZUJ5VShhLCBDdXJyeS5fXzIoY21wKSk7XG59XG5cbmZ1bmN0aW9uIHN0YWJsZVNvcnRCeVUoYSwgY21wKSB7XG4gIHZhciBiID0gYS5zbGljZSgwKTtcbiAgc3RhYmxlU29ydEluUGxhY2VCeVUoYiwgY21wKTtcbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIHN0YWJsZVNvcnRCeShhLCBjbXApIHtcbiAgcmV0dXJuIHN0YWJsZVNvcnRCeVUoYSwgQ3VycnkuX18yKGNtcCkpO1xufVxuXG5mdW5jdGlvbiBiaW5hcnlTZWFyY2hCeVUoc29ydGVkLCBrZXksIGNtcCkge1xuICB2YXIgbGVuID0gc29ydGVkLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICB2YXIgbG8gPSBzb3J0ZWRbMF07XG4gIHZhciBjID0gY21wKGtleSwgbG8pO1xuICBpZiAoYyA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgdmFyIGhpID0gc29ydGVkW2xlbiAtIDEgfCAwXTtcbiAgdmFyIGMyID0gY21wKGtleSwgaGkpO1xuICBpZiAoYzIgPiAwKSB7XG4gICAgcmV0dXJuIC0obGVuICsgMSB8IDApIHwgMDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2xvID0gMDtcbiAgICB2YXIgX2hpID0gbGVuIC0gMSB8IDA7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIGhpJDEgPSBfaGk7XG4gICAgICB2YXIgbG8kMSA9IF9sbztcbiAgICAgIHZhciBtaWQgPSAobG8kMSArIGhpJDEgfCAwKSAvIDIgfCAwO1xuICAgICAgdmFyIG1pZFZhbCA9IHNvcnRlZFttaWRdO1xuICAgICAgdmFyIGMkMSA9IGNtcChrZXksIG1pZFZhbCk7XG4gICAgICBpZiAoYyQxID09PSAwKSB7XG4gICAgICAgIHJldHVybiBtaWQ7XG4gICAgICB9XG4gICAgICBpZiAoYyQxIDwgMCkge1xuICAgICAgICBpZiAoaGkkMSA9PT0gbWlkKSB7XG4gICAgICAgICAgaWYgKGNtcChzb3J0ZWRbbG8kMV0sIGtleSkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBsbyQxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLShoaSQxICsgMSB8IDApIHwgMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2hpID0gbWlkO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICB9XG4gICAgICBpZiAobG8kMSA9PT0gbWlkKSB7XG4gICAgICAgIGlmIChjbXAoc29ydGVkW2hpJDFdLCBrZXkpID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGhpJDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC0oaGkkMSArIDEgfCAwKSB8IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF9sbyA9IG1pZDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmFyeVNlYXJjaEJ5KHNvcnRlZCwga2V5LCBjbXApIHtcbiAgcmV0dXJuIGJpbmFyeVNlYXJjaEJ5VShzb3J0ZWQsIGtleSwgQ3VycnkuX18yKGNtcCkpO1xufVxuXG52YXIgSW50O1xuXG52YXIgJCRTdHJpbmc7XG5cbmV4cG9ydCB7XG4gIEludCAsXG4gICQkU3RyaW5nICxcbiAgc3RyaWN0bHlTb3J0ZWRMZW5ndGhVICxcbiAgc3RyaWN0bHlTb3J0ZWRMZW5ndGggLFxuICBpc1NvcnRlZFUgLFxuICBpc1NvcnRlZCAsXG4gIHN0YWJsZVNvcnRJblBsYWNlQnlVICxcbiAgc3RhYmxlU29ydEluUGxhY2VCeSAsXG4gIHN0YWJsZVNvcnRCeVUgLFxuICBzdGFibGVTb3J0QnkgLFxuICBiaW5hcnlTZWFyY2hCeVUgLFxuICBiaW5hcnlTZWFyY2hCeSAsXG4gIHVuaW9uVSAsXG4gIHVuaW9uICxcbiAgaW50ZXJzZWN0VSAsXG4gIGludGVyc2VjdCAsXG4gIGRpZmZVICxcbiAgZGlmZiAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbmZ1bmN0aW9uIGNhbWxfaW50X2NvbXBhcmUoeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYm9vbF9jb21wYXJlKHgsIHkpIHtcbiAgaWYgKHgpIHtcbiAgICBpZiAoeSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfSBlbHNlIGlmICh5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZmxvYXRfY29tcGFyZSh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoeCA+IHkgfHwgeCA9PT0geCkge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKHkgPT09IHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9zdHJpbmdfY29tcGFyZShzMSwgczIpIHtcbiAgaWYgKHMxID09PSBzMikge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKHMxIDwgczIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9ib29sX21pbih4LCB5KSB7XG4gIGlmICh4KSB7XG4gICAgcmV0dXJuIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9pbnRfbWluKHgsIHkpIHtcbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9mbG9hdF9taW4oeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX3N0cmluZ19taW4oeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2ludDMyX21pbih4LCB5KSB7XG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYm9vbF9tYXgoeCwgeSkge1xuICBpZiAoeCkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfaW50X21heCh4LCB5KSB7XG4gIGlmICh4ID4geSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZmxvYXRfbWF4KHgsIHkpIHtcbiAgaWYgKHggPiB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9zdHJpbmdfbWF4KHgsIHkpIHtcbiAgaWYgKHggPiB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9pbnQzMl9tYXgoeCwgeSkge1xuICBpZiAoeCA+IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpNjRfZXEoeCwgeSkge1xuICBpZiAoeFsxXSA9PT0geVsxXSkge1xuICAgIHJldHVybiB4WzBdID09PSB5WzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpNjRfZ2UocGFyYW0sIHBhcmFtJDEpIHtcbiAgdmFyIG90aGVyX2hpID0gcGFyYW0kMVswXTtcbiAgdmFyIGhpID0gcGFyYW1bMF07XG4gIGlmIChoaSA+IG90aGVyX2hpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoaGkgPCBvdGhlcl9oaSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFyYW1bMV0gPj0gcGFyYW0kMVsxXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpNjRfbmVxKHgsIHkpIHtcbiAgcmV0dXJuICFpNjRfZXEoeCwgeSk7XG59XG5cbmZ1bmN0aW9uIGk2NF9sdCh4LCB5KSB7XG4gIHJldHVybiAhaTY0X2dlKHgsIHkpO1xufVxuXG5mdW5jdGlvbiBpNjRfZ3QoeCwgeSkge1xuICBpZiAoeFswXSA+IHlbMF0pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmICh4WzBdIDwgeVswXSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geFsxXSA+IHlbMV07XG4gIH1cbn1cblxuZnVuY3Rpb24gaTY0X2xlKHgsIHkpIHtcbiAgcmV0dXJuICFpNjRfZ3QoeCwgeSk7XG59XG5cbmZ1bmN0aW9uIGk2NF9taW4oeCwgeSkge1xuICBpZiAoaTY0X2dlKHgsIHkpKSB7XG4gICAgcmV0dXJuIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbn1cblxuZnVuY3Rpb24gaTY0X21heCh4LCB5KSB7XG4gIGlmIChpNjRfZ3QoeCwgeSkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBjYW1sX2ludF9jb21wYXJlICxcbiAgY2FtbF9ib29sX2NvbXBhcmUgLFxuICBjYW1sX2Zsb2F0X2NvbXBhcmUgLFxuICBjYW1sX3N0cmluZ19jb21wYXJlICxcbiAgY2FtbF9ib29sX21pbiAsXG4gIGNhbWxfaW50X21pbiAsXG4gIGNhbWxfZmxvYXRfbWluICxcbiAgY2FtbF9zdHJpbmdfbWluICxcbiAgY2FtbF9pbnQzMl9taW4gLFxuICBjYW1sX2Jvb2xfbWF4ICxcbiAgY2FtbF9pbnRfbWF4ICxcbiAgY2FtbF9mbG9hdF9tYXggLFxuICBjYW1sX3N0cmluZ19tYXggLFxuICBjYW1sX2ludDMyX21heCAsXG4gIGk2NF9lcSAsXG4gIGk2NF9uZXEgLFxuICBpNjRfbHQgLFxuICBpNjRfZ3QgLFxuICBpNjRfbGUgLFxuICBpNjRfZ2UgLFxuICBpNjRfbWluICxcbiAgaTY0X21heCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbmZ1bmN0aW9uIHN1Yih4LCBvZmZzZXQsIGxlbikge1xuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGxlbik7XG4gIHZhciBqID0gMDtcbiAgdmFyIGkgPSBvZmZzZXQ7XG4gIHdoaWxlKGogPCBsZW4pIHtcbiAgICByZXN1bHRbal0gPSB4W2ldO1xuICAgIGogPSBqICsgMSB8IDA7XG4gICAgaSA9IGkgKyAxIHwgMDtcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbGVuKF9hY2MsIF9sKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbCA9IF9sO1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICghbCkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgX2wgPSBsLnRsO1xuICAgIF9hY2MgPSBsLmhkLmxlbmd0aCArIGFjYyB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWxsKGFyciwgX2ksIF9sKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbCA9IF9sO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgeCA9IGwuaGQ7XG4gICAgdmFyIGwkMSA9IHgubGVuZ3RoO1xuICAgIHZhciBrID0gaTtcbiAgICB2YXIgaiA9IDA7XG4gICAgd2hpbGUoaiA8IGwkMSkge1xuICAgICAgYXJyW2tdID0geFtqXTtcbiAgICAgIGsgPSBrICsgMSB8IDA7XG4gICAgICBqID0gaiArIDEgfCAwO1xuICAgIH07XG4gICAgX2wgPSBsLnRsO1xuICAgIF9pID0gaztcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbmNhdChsKSB7XG4gIHZhciB2ID0gbGVuKDAsIGwpO1xuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KHYpO1xuICBmaWxsKHJlc3VsdCwgMCwgbCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNldCh4cywgaW5kZXgsIG5ld3ZhbCkge1xuICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHhzLmxlbmd0aCkge1xuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IFwiSW52YWxpZF9hcmd1bWVudFwiLFxuICAgICAgICAgIF8xOiBcImluZGV4IG91dCBvZiBib3VuZHNcIixcbiAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgfTtcbiAgfVxuICB4c1tpbmRleF0gPSBuZXd2YWw7XG4gIFxufVxuXG5mdW5jdGlvbiBnZXQoeHMsIGluZGV4KSB7XG4gIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0geHMubGVuZ3RoKSB7XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJJbnZhbGlkX2FyZ3VtZW50XCIsXG4gICAgICAgICAgXzE6IFwiaW5kZXggb3V0IG9mIGJvdW5kc1wiLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIHJldHVybiB4c1tpbmRleF07XG59XG5cbmZ1bmN0aW9uIG1ha2UobGVuLCBpbml0KSB7XG4gIHZhciBiID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgYltpXSA9IGluaXQ7XG4gIH1cbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIG1ha2VfZmxvYXQobGVuKSB7XG4gIHZhciBiID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgYltpXSA9IDA7XG4gIH1cbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIGJsaXQoYTEsIGkxLCBhMiwgaTIsIGxlbikge1xuICBpZiAoaTIgPD0gaTEpIHtcbiAgICBmb3IodmFyIGogPSAwOyBqIDwgbGVuOyArK2ope1xuICAgICAgYTJbaiArIGkyIHwgMF0gPSBhMVtqICsgaTEgfCAwXTtcbiAgICB9XG4gICAgcmV0dXJuIDtcbiAgfVxuICBmb3IodmFyIGokMSA9IGxlbiAtIDEgfCAwOyBqJDEgPj0gMDsgLS1qJDEpe1xuICAgIGEyW2okMSArIGkyIHwgMF0gPSBhMVtqJDEgKyBpMSB8IDBdO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBkdXAocHJpbSkge1xuICByZXR1cm4gcHJpbS5zbGljZSgwKTtcbn1cblxuZXhwb3J0IHtcbiAgZHVwICxcbiAgc3ViICxcbiAgY29uY2F0ICxcbiAgbWFrZSAsXG4gIG1ha2VfZmxvYXQgLFxuICBibGl0ICxcbiAgZ2V0ICxcbiAgc2V0ICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cblxudmFyIGlkID0ge1xuICBjb250ZW50czogMFxufTtcblxuZnVuY3Rpb24gY3JlYXRlKHN0cikge1xuICBpZC5jb250ZW50cyA9IGlkLmNvbnRlbnRzICsgMSB8IDA7XG4gIHJldHVybiBzdHIgKyAoXCIvXCIgKyBpZC5jb250ZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNhbWxfaXNfZXh0ZW5zaW9uKGUpIHtcbiAgaWYgKGUgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHlwZW9mIGUuUkVfRVhOX0lEID09PSBcInN0cmluZ1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZXhuX3Nsb3RfbmFtZSh4KSB7XG4gIHJldHVybiB4LlJFX0VYTl9JRDtcbn1cblxuZXhwb3J0IHtcbiAgaWQgLFxuICBjcmVhdGUgLFxuICBjYW1sX2lzX2V4dGVuc2lvbiAsXG4gIGNhbWxfZXhuX3Nsb3RfbmFtZSAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDYW1sX29wdGlvbiBmcm9tIFwiLi9jYW1sX29wdGlvbi5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfZXhjZXB0aW9ucy5qc1wiO1xuXG52YXIgJCRFcnJvciA9IC8qIEBfX1BVUkVfXyAqL0NhbWxfZXhjZXB0aW9ucy5jcmVhdGUoXCJDYW1sX2pzX2V4Y2VwdGlvbnMuRXJyb3JcIik7XG5cbmZ1bmN0aW9uIGludGVybmFsVG9PQ2FtbEV4Y2VwdGlvbihlKSB7XG4gIGlmIChDYW1sX2V4Y2VwdGlvbnMuY2FtbF9pc19leHRlbnNpb24oZSkpIHtcbiAgICByZXR1cm4gZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgUkVfRVhOX0lEOiAkJEVycm9yLFxuICAgICAgICAgICAgXzE6IGVcbiAgICAgICAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYXNfanNfZXhuKGV4bikge1xuICBpZiAoZXhuLlJFX0VYTl9JRCA9PT0gJCRFcnJvcikge1xuICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKGV4bi5fMSk7XG4gIH1cbiAgXG59XG5cbmV4cG9ydCB7XG4gICQkRXJyb3IgLFxuICBpbnRlcm5hbFRvT0NhbWxFeGNlcHRpb24gLFxuICBjYW1sX2FzX2pzX2V4biAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbmZ1bmN0aW9uIGlzTmVzdGVkKHgpIHtcbiAgcmV0dXJuIHguQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHNvbWUoeCkge1xuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIEJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORTogMFxuICAgICAgICAgIH07XG4gIH0gZWxzZSBpZiAoeCAhPT0gbnVsbCAmJiB4LkJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIEJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORTogeC5CU19QUklWQVRFX05FU1RFRF9TT01FX05PTkUgKyAxIHwgMFxuICAgICAgICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbn1cblxuZnVuY3Rpb24gbnVsbGFibGVfdG9fb3B0KHgpIHtcbiAgaWYgKHggPT0gbnVsbCkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNvbWUoeCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5kZWZpbmVkX3RvX29wdCh4KSB7XG4gIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzb21lKHgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG51bGxfdG9fb3B0KHgpIHtcbiAgaWYgKHggPT09IG51bGwpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzb21lKHgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbEZyb21PcHRpb24oeCkge1xuICBpZiAoISh4ICE9PSBudWxsICYmIHguQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FICE9PSB1bmRlZmluZWQpKSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbiAgdmFyIGRlcHRoID0geC5CU19QUklWQVRFX05FU1RFRF9TT01FX05PTkU7XG4gIGlmIChkZXB0aCA9PT0gMCkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIEJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORTogZGVwdGggLSAxIHwgMFxuICAgICAgICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gb3B0aW9uX2dldCh4KSB7XG4gIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWxGcm9tT3B0aW9uKHgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wdGlvbl91bndyYXAoeCkge1xuICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHguVkFMO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIG51bGxhYmxlX3RvX29wdCAsXG4gIHVuZGVmaW5lZF90b19vcHQgLFxuICBudWxsX3RvX29wdCAsXG4gIHZhbEZyb21PcHRpb24gLFxuICBzb21lICxcbiAgaXNOZXN0ZWQgLFxuICBvcHRpb25fZ2V0ICxcbiAgb3B0aW9uX3Vud3JhcCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDYW1sX2FycmF5IGZyb20gXCIuL2NhbWxfYXJyYXkuanNcIjtcblxuZnVuY3Rpb24gYXBwKF9mLCBfYXJncykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGFyZ3MgPSBfYXJncztcbiAgICB2YXIgZiA9IF9mO1xuICAgIHZhciBpbml0X2FyaXR5ID0gZi5sZW5ndGg7XG4gICAgdmFyIGFyaXR5ID0gaW5pdF9hcml0eSA9PT0gMCA/IDEgOiBpbml0X2FyaXR5O1xuICAgIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgICB2YXIgZCA9IGFyaXR5IC0gbGVuIHwgMDtcbiAgICBpZiAoZCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICAgIGlmIChkID49IDApIHtcbiAgICAgIHJldHVybiAoZnVuY3Rpb24oZixhcmdzKXtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gYXBwKGYsIGFyZ3MuY29uY2F0KFt4XSkpO1xuICAgICAgfVxuICAgICAgfShmLGFyZ3MpKTtcbiAgICB9XG4gICAgX2FyZ3MgPSBDYW1sX2FycmF5LnN1YihhcmdzLCBhcml0eSwgLWQgfCAwKTtcbiAgICBfZiA9IGYuYXBwbHkobnVsbCwgQ2FtbF9hcnJheS5zdWIoYXJncywgMCwgYXJpdHkpKTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIF8xKG8sIGEwKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDEpIHtcbiAgICByZXR1cm4gbyhhMCk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gbyhhMCk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMyk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0KTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0LCBwYXJhbSQ1KSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMsIHBhcmFtJDQsIHBhcmFtJDUpO1xuICAgICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFthMF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzEobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAxKSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhMCkge1xuICAgICAgcmV0dXJuIF8xKG8sIGEwKTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF8yKG8sIGEwLCBhMSkge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAyKSB7XG4gICAgcmV0dXJuIG8oYTAsIGExKTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFthMV0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEpO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIHBhcmFtKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0KTtcbiAgICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMVxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fMihvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDIpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSkge1xuICAgICAgcmV0dXJuIF8yKG8sIGEwLCBhMSk7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfMyhvLCBhMCwgYTEsIGEyKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDMpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyKTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFthMl0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyKTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgcGFyYW0pO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMik7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMykge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpO1xuICAgICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMlxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fMyhvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDMpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIpIHtcbiAgICAgIHJldHVybiBfMyhvLCBhMCwgYTEsIGEyKTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF80KG8sIGEwLCBhMSwgYTIsIGEzKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDQpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMyk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTNcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTNcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyKSwgW2EzXSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzKTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIHBhcmFtKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgcGFyYW0sIHBhcmFtJDEpO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMik7XG4gICAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICBhM1xuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fNChvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDQpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzKSB7XG4gICAgICByZXR1cm4gXzQobywgYTAsIGExLCBhMiwgYTMpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gXzUobywgYTAsIGExLCBhMiwgYTMsIGE0KSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDUpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzKSwgW2E0XSk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCk7XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgcGFyYW0pO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgcGFyYW0sIHBhcmFtJDEpO1xuICAgICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgIGE0XG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX181KG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNSkge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0KSB7XG4gICAgICByZXR1cm4gXzUobywgYTAsIGExLCBhMiwgYTMsIGE0KTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF82KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNikge1xuICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0KSwgW2E1XSk7XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpO1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBwYXJhbSk7XG4gICAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgIGE1XG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX182KG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNikge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICAgICAgcmV0dXJuIF82KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gXzcobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNykge1xuICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMyksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpLCBbYTZdKTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX183KG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNykge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpIHtcbiAgICAgIHJldHVybiBfNyhvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNik7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfOChvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gOCkge1xuICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNyk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpLCBbYTddKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzgobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA4KSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpIHtcbiAgICAgIHJldHVybiBfOChvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgYXBwICxcbiAgXzEgLFxuICBfXzEgLFxuICBfMiAsXG4gIF9fMiAsXG4gIF8zICxcbiAgX18zICxcbiAgXzQgLFxuICBfXzQgLFxuICBfNSAsXG4gIF9fNSAsXG4gIF82ICxcbiAgX182ICxcbiAgXzcgLFxuICBfXzcgLFxuICBfOCAsXG4gIF9fOCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDYW1sX2pzX2V4Y2VwdGlvbnMgZnJvbSBcIi4vY2FtbF9qc19leGNlcHRpb25zLmpzXCI7XG5cbnZhciBhbnlUb0V4bkludGVybmFsID0gQ2FtbF9qc19leGNlcHRpb25zLmludGVybmFsVG9PQ2FtbEV4Y2VwdGlvbjtcblxuZnVuY3Rpb24gcmFpc2VFcnJvcihzdHIpIHtcbiAgdGhyb3cgbmV3IEVycm9yKHN0cik7XG59XG5cbmZ1bmN0aW9uIHJhaXNlRXZhbEVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgRXZhbEVycm9yKHN0cik7XG59XG5cbmZ1bmN0aW9uIHJhaXNlUmFuZ2VFcnJvcihzdHIpIHtcbiAgdGhyb3cgbmV3IFJhbmdlRXJyb3Ioc3RyKTtcbn1cblxuZnVuY3Rpb24gcmFpc2VSZWZlcmVuY2VFcnJvcihzdHIpIHtcbiAgdGhyb3cgbmV3IFJlZmVyZW5jZUVycm9yKHN0cik7XG59XG5cbmZ1bmN0aW9uIHJhaXNlU3ludGF4RXJyb3Ioc3RyKSB7XG4gIHRocm93IG5ldyBTeW50YXhFcnJvcihzdHIpO1xufVxuXG5mdW5jdGlvbiByYWlzZVR5cGVFcnJvcihzdHIpIHtcbiAgdGhyb3cgbmV3IFR5cGVFcnJvcihzdHIpO1xufVxuXG5mdW5jdGlvbiByYWlzZVVyaUVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgVVJJRXJyb3Ioc3RyKTtcbn1cblxudmFyICQkRXJyb3IkMSA9IENhbWxfanNfZXhjZXB0aW9ucy4kJEVycm9yO1xuXG5leHBvcnQge1xuICAkJEVycm9yJDEgYXMgJCRFcnJvcixcbiAgYW55VG9FeG5JbnRlcm5hbCAsXG4gIHJhaXNlRXJyb3IgLFxuICByYWlzZUV2YWxFcnJvciAsXG4gIHJhaXNlUmFuZ2VFcnJvciAsXG4gIHJhaXNlUmVmZXJlbmNlRXJyb3IgLFxuICByYWlzZVN5bnRheEVycm9yICxcbiAgcmFpc2VUeXBlRXJyb3IgLFxuICByYWlzZVVyaUVycm9yICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cblxuZnVuY3Rpb24gZXF1YWwoeCwgeSkge1xuICByZXR1cm4geCA9PT0geTtcbn1cblxudmFyIG1heCA9IDIxNDc0ODM2NDc7XG5cbnZhciBtaW4gPSAtMjE0NzQ4MzY0ODtcblxuZXhwb3J0IHtcbiAgZXF1YWwgLFxuICBtYXggLFxuICBtaW4gLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgSnNfdmVjdG9yIGZyb20gXCIuL2pzX3ZlY3Rvci5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vcHRpb24gZnJvbSBcIi4vY2FtbF9vcHRpb24uanNcIjtcblxuZnVuY3Rpb24gbGVuZ3RoKGwpIHtcbiAgdmFyIF9sZW4gPSAwO1xuICB2YXIgX3BhcmFtID0gbDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbTtcbiAgICB2YXIgbGVuID0gX2xlbjtcbiAgICBpZiAoIXBhcmFtKSB7XG4gICAgICByZXR1cm4gbGVuO1xuICAgIH1cbiAgICBfcGFyYW0gPSBwYXJhbS50bDtcbiAgICBfbGVuID0gbGVuICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb25zKHgsIHhzKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgaGQ6IHgsXG4gICAgICAgICAgdGw6IHhzXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkoeCkge1xuICByZXR1cm4geCA9PT0gLyogW10gKi8wO1xufVxuXG5mdW5jdGlvbiBoZChwYXJhbSkge1xuICBpZiAocGFyYW0pIHtcbiAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZShwYXJhbS5oZCk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIHRsKHBhcmFtKSB7XG4gIGlmIChwYXJhbSkge1xuICAgIHJldHVybiBwYXJhbS50bDtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gbnRoKGwsIG4pIHtcbiAgaWYgKG4gPCAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgX2wgPSBsO1xuICB2YXIgX24gPSBuO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIG4kMSA9IF9uO1xuICAgIHZhciBsJDEgPSBfbDtcbiAgICBpZiAoIWwkMSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgaWYgKG4kMSA9PT0gMCkge1xuICAgICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUobCQxLmhkKTtcbiAgICB9XG4gICAgX24gPSBuJDEgLSAxIHwgMDtcbiAgICBfbCA9IGwkMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJldkFwcGVuZChfbDEsIF9sMikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwyID0gX2wyO1xuICAgIHZhciBsMSA9IF9sMTtcbiAgICBpZiAoIWwxKSB7XG4gICAgICByZXR1cm4gbDI7XG4gICAgfVxuICAgIF9sMiA9IHtcbiAgICAgIGhkOiBsMS5oZCxcbiAgICAgIHRsOiBsMlxuICAgIH07XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZXYobCkge1xuICByZXR1cm4gcmV2QXBwZW5kKGwsIC8qIFtdICovMCk7XG59XG5cbmZ1bmN0aW9uIG1hcFJldkF1eChmLCBfYWNjLCBfbHMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBscyA9IF9scztcbiAgICB2YXIgYWNjID0gX2FjYztcbiAgICBpZiAoIWxzKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICBfbHMgPSBscy50bDtcbiAgICBfYWNjID0ge1xuICAgICAgaGQ6IGYobHMuaGQpLFxuICAgICAgdGw6IGFjY1xuICAgIH07XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXBSZXYoZiwgbHMpIHtcbiAgcmV0dXJuIG1hcFJldkF1eChmLCAvKiBbXSAqLzAsIGxzKTtcbn1cblxuZnVuY3Rpb24gbWFwKGYsIGxzKSB7XG4gIHJldHVybiByZXZBcHBlbmQobWFwUmV2QXV4KGYsIC8qIFtdICovMCwgbHMpLCAvKiBbXSAqLzApO1xufVxuXG5mdW5jdGlvbiBpdGVyKGYsIF9wYXJhbSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIGlmICghcGFyYW0pIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGYocGFyYW0uaGQpO1xuICAgIF9wYXJhbSA9IHBhcmFtLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaXRlcmkoZiwgbCkge1xuICB2YXIgX2kgPSAwO1xuICB2YXIgX3BhcmFtID0gbDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbTtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmICghcGFyYW0pIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGYoaSwgcGFyYW0uaGQpO1xuICAgIF9wYXJhbSA9IHBhcmFtLnRsO1xuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9sZExlZnQoZiwgX2FjY3UsIF9sKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbCA9IF9sO1xuICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9XG4gICAgX2wgPSBsLnRsO1xuICAgIF9hY2N1ID0gZihhY2N1LCBsLmhkKTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRhaWxMb29wKGYsIF9hY2MsIF9wYXJhbSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICghcGFyYW0pIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIF9wYXJhbSA9IHBhcmFtLnRsO1xuICAgIF9hY2MgPSBmKHBhcmFtLmhkLCBhY2MpO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9sZFJpZ2h0KGYsIGwsIGluaXQpIHtcbiAgdmFyIGxvb3AgPSBmdW5jdGlvbiAobiwgcGFyYW0pIHtcbiAgICBpZiAoIXBhcmFtKSB7XG4gICAgICByZXR1cm4gaW5pdDtcbiAgICB9XG4gICAgdmFyIHQgPSBwYXJhbS50bDtcbiAgICB2YXIgaCA9IHBhcmFtLmhkO1xuICAgIGlmIChuIDwgMTAwMCkge1xuICAgICAgcmV0dXJuIGYoaCwgbG9vcChuICsgMSB8IDAsIHQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGYoaCwgdGFpbExvb3AoZiwgaW5pdCwgcmV2QXBwZW5kKHQsIC8qIFtdICovMCkpKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBsb29wKDAsIGwpO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuKGx4KSB7XG4gIHZhciBfYWNjID0gLyogW10gKi8wO1xuICB2YXIgX2x4ID0gbHg7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbHgkMSA9IF9seDtcbiAgICB2YXIgYWNjID0gX2FjYztcbiAgICBpZiAoIWx4JDEpIHtcbiAgICAgIHJldHVybiByZXZBcHBlbmQoYWNjLCAvKiBbXSAqLzApO1xuICAgIH1cbiAgICBfbHggPSBseCQxLnRsO1xuICAgIF9hY2MgPSByZXZBcHBlbmQobHgkMS5oZCwgYWNjKTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbHRlclJldkF1eChmLCBfYWNjLCBfeHMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICB2YXIgYWNjID0gX2FjYztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICB2YXIgeXMgPSB4cy50bDtcbiAgICB2YXIgeSA9IHhzLmhkO1xuICAgIGlmIChmKHkpKSB7XG4gICAgICBfeHMgPSB5cztcbiAgICAgIF9hY2MgPSB7XG4gICAgICAgIGhkOiB5LFxuICAgICAgICB0bDogYWNjXG4gICAgICB9O1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBfeHMgPSB5cztcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbHRlcihmLCB4cykge1xuICByZXR1cm4gcmV2QXBwZW5kKGZpbHRlclJldkF1eChmLCAvKiBbXSAqLzAsIHhzKSwgLyogW10gKi8wKTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyTWFwUmV2QXV4KGYsIF9hY2MsIF94cykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIHZhciB5cyA9IHhzLnRsO1xuICAgIHZhciB6ID0gZih4cy5oZCk7XG4gICAgaWYgKHogIT09IHVuZGVmaW5lZCkge1xuICAgICAgX3hzID0geXM7XG4gICAgICBfYWNjID0ge1xuICAgICAgICBoZDogQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbih6KSxcbiAgICAgICAgdGw6IGFjY1xuICAgICAgfTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgX3hzID0geXM7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJNYXAoZiwgeHMpIHtcbiAgcmV0dXJuIHJldkFwcGVuZChmaWx0ZXJNYXBSZXZBdXgoZiwgLyogW10gKi8wLCB4cyksIC8qIFtdICovMCk7XG59XG5cbmZ1bmN0aW9uIGNvdW50QnkoZiwgeHMpIHtcbiAgdmFyIF9hY2MgPSAwO1xuICB2YXIgX3hzID0geHM7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMkMSA9IF94cztcbiAgICB2YXIgYWNjID0gX2FjYztcbiAgICBpZiAoIXhzJDEpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIF94cyA9IHhzJDEudGw7XG4gICAgX2FjYyA9IGYoeHMkMS5oZCkgPyBhY2MgKyAxIHwgMCA6IGFjYztcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXQobiwgZikge1xuICByZXR1cm4gSnNfdmVjdG9yLnRvTGlzdChKc192ZWN0b3IuaW5pdChuLCBmKSk7XG59XG5cbmZ1bmN0aW9uIHRvVmVjdG9yKHhzKSB7XG4gIGlmICgheHMpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIGEgPSBuZXcgQXJyYXkobGVuZ3RoKHhzKSk7XG4gIHZhciBfaSA9IDA7XG4gIHZhciBfcGFyYW0gPSB4cztcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbTtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmICghcGFyYW0pIHtcbiAgICAgIHJldHVybiBhO1xuICAgIH1cbiAgICBhW2ldID0gcGFyYW0uaGQ7XG4gICAgX3BhcmFtID0gcGFyYW0udGw7XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBlcXVhbChjbXAsIF94cywgX3lzKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeXMgPSBfeXM7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIGlmICh5cykge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCF5cykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWNtcCh4cy5oZCwgeXMuaGQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF95cyA9IHlzLnRsO1xuICAgIF94cyA9IHhzLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZXhwb3J0IHtcbiAgbGVuZ3RoICxcbiAgY29ucyAsXG4gIGlzRW1wdHkgLFxuICBoZCAsXG4gIHRsICxcbiAgbnRoICxcbiAgcmV2QXBwZW5kICxcbiAgcmV2ICxcbiAgbWFwUmV2ICxcbiAgbWFwICxcbiAgaXRlciAsXG4gIGl0ZXJpICxcbiAgZm9sZExlZnQgLFxuICBmb2xkUmlnaHQgLFxuICBmbGF0dGVuICxcbiAgZmlsdGVyICxcbiAgZmlsdGVyTWFwICxcbiAgY291bnRCeSAsXG4gIGluaXQgLFxuICB0b1ZlY3RvciAsXG4gIGVxdWFsICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIEpzX2ludCBmcm9tIFwiLi9qc19pbnQuanNcIjtcblxuZnVuY3Rpb24gdW5zYWZlX2NlaWwocHJpbSkge1xuICByZXR1cm4gTWF0aC5jZWlsKHByaW0pO1xufVxuXG5mdW5jdGlvbiBjZWlsX2ludChmKSB7XG4gIGlmIChmID4gSnNfaW50Lm1heCkge1xuICAgIHJldHVybiBKc19pbnQubWF4O1xuICB9IGVsc2UgaWYgKGYgPCBKc19pbnQubWluKSB7XG4gICAgcmV0dXJuIEpzX2ludC5taW47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIE1hdGguY2VpbChmKTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bnNhZmVfZmxvb3IocHJpbSkge1xuICByZXR1cm4gTWF0aC5mbG9vcihwcmltKTtcbn1cblxuZnVuY3Rpb24gZmxvb3JfaW50KGYpIHtcbiAgaWYgKGYgPiBKc19pbnQubWF4KSB7XG4gICAgcmV0dXJuIEpzX2ludC5tYXg7XG4gIH0gZWxzZSBpZiAoZiA8IEpzX2ludC5taW4pIHtcbiAgICByZXR1cm4gSnNfaW50Lm1pbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTWF0aC5mbG9vcihmKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByYW5kb21faW50KG1pbiwgbWF4KSB7XG4gIHJldHVybiBmbG9vcl9pbnQoTWF0aC5yYW5kb20oKSAqIChtYXggLSBtaW4gfCAwKSkgKyBtaW4gfCAwO1xufVxuXG52YXIgY2VpbCA9IGNlaWxfaW50O1xuXG52YXIgZmxvb3IgPSBmbG9vcl9pbnQ7XG5cbmV4cG9ydCB7XG4gIHVuc2FmZV9jZWlsICxcbiAgY2VpbF9pbnQgLFxuICBjZWlsICxcbiAgdW5zYWZlX2Zsb29yICxcbiAgZmxvb3JfaW50ICxcbiAgZmxvb3IgLFxuICByYW5kb21faW50ICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cblxuZnVuY3Rpb24gZmlsdGVySW5QbGFjZShwLCBhKSB7XG4gIHZhciBpID0gMDtcbiAgdmFyIGogPSAwO1xuICB3aGlsZShpIDwgYS5sZW5ndGgpIHtcbiAgICB2YXIgdiA9IGFbaV07XG4gICAgaWYgKHAodikpIHtcbiAgICAgIGFbal0gPSB2O1xuICAgICAgaiA9IGogKyAxIHwgMDtcbiAgICB9XG4gICAgaSA9IGkgKyAxIHwgMDtcbiAgfTtcbiAgYS5zcGxpY2Uoaik7XG4gIFxufVxuXG5mdW5jdGlvbiBlbXB0eShhKSB7XG4gIGEuc3BsaWNlKDApO1xuICBcbn1cblxuZnVuY3Rpb24gcHVzaEJhY2soeCwgeHMpIHtcbiAgeHMucHVzaCh4KTtcbiAgXG59XG5cbmZ1bmN0aW9uIG1lbUJ5UmVmKHgsIHhzKSB7XG4gIHJldHVybiB4cy5pbmRleE9mKHgpID49IDA7XG59XG5cbmZ1bmN0aW9uIGl0ZXIoZiwgeHMpIHtcbiAgZm9yKHZhciBpID0gMCAsaV9maW5pc2ggPSB4cy5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBmKHhzW2ldKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gaXRlcmkoZiwgYSkge1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGEubGVuZ3RoOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgZihpLCBhW2ldKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gdG9MaXN0KGEpIHtcbiAgdmFyIF9pID0gYS5sZW5ndGggLSAxIHwgMDtcbiAgdmFyIF9yZXMgPSAvKiBbXSAqLzA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcmVzID0gX3JlcztcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmIChpIDwgMCkge1xuICAgICAgcmV0dXJuIHJlcztcbiAgICB9XG4gICAgX3JlcyA9IHtcbiAgICAgIGhkOiBhW2ldLFxuICAgICAgdGw6IHJlc1xuICAgIH07XG4gICAgX2kgPSBpIC0gMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0KG4sIGYpIHtcbiAgdmFyIHYgPSBuZXcgQXJyYXkobik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBuOyArK2kpe1xuICAgIHZbaV0gPSBmKGkpO1xuICB9XG4gIHJldHVybiB2O1xufVxuXG5mdW5jdGlvbiBjb3B5KHgpIHtcbiAgdmFyIGxlbiA9IHgubGVuZ3RoO1xuICB2YXIgYiA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgIGJbaV0gPSB4W2ldO1xuICB9XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBtYXAoZiwgYSkge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgciA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgcltpXSA9IGYoYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGZvbGRMZWZ0KGYsIHgsIGEpIHtcbiAgdmFyIHIgPSB4O1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGEubGVuZ3RoOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgciA9IGYociwgYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGZvbGRSaWdodChmLCBhLCB4KSB7XG4gIHZhciByID0geDtcbiAgZm9yKHZhciBpID0gYS5sZW5ndGggLSAxIHwgMDsgaSA+PSAwOyAtLWkpe1xuICAgIHIgPSBmKGFbaV0sIHIpO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBtYXBpKGYsIGEpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgaWYgKGwgPT09IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHIgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHJbaV0gPSBmKGksIGFbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBhcHBlbmQoeCwgYSkge1xuICByZXR1cm4gYS5jb25jYXQoW3hdKTtcbn1cblxuZXhwb3J0IHtcbiAgZmlsdGVySW5QbGFjZSAsXG4gIGVtcHR5ICxcbiAgcHVzaEJhY2sgLFxuICBjb3B5ICxcbiAgbWVtQnlSZWYgLFxuICBpdGVyICxcbiAgaXRlcmkgLFxuICB0b0xpc3QgLFxuICBtYXAgLFxuICBtYXBpICxcbiAgZm9sZExlZnQgLFxuICBmb2xkUmlnaHQgLFxuICBpbml0ICxcbiAgYXBwZW5kICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IFJlU2NyaXB0LCBQTEVBU0UgRURJVCBXSVRIIENBUkVcblxuaW1wb3J0ICogYXMgSnNfZXhuIGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2pzX2V4bi5qc1wiO1xuaW1wb3J0ICogYXMgQ2FsYyRGb3JtZm9ybSBmcm9tIFwiLi9jb3JlL2NhbGMvQ2FsYy5icy5qc1wiO1xuXG52YXIgY29uZmlnID0ge1xuICBzb3J0Tk1VSTogdHJ1ZVxufTtcblxuZnVuY3Rpb24gZnJvbUpTKGpzX2ludCkge1xuICB2YXIgYyA9IENhbGMkRm9ybWZvcm0uQ29uc3QuZnJvbUludChjb25maWcuc29ydE5NVUksIGpzX2ludCk7XG4gIGlmIChjICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gSnNfZXhuLnJhaXNlRXJyb3IoXCJJbnZhbGlkIGNvbnN0YW50XCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZyb21KU19hcnJheShqc19hcnIpIHtcbiAgcmV0dXJuIGpzX2Fyci5tYXAoZnJvbUpTKTtcbn1cblxuZnVuY3Rpb24gdG9KUyhjKSB7XG4gIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LnRvSW50KGNvbmZpZy5zb3J0Tk1VSSwgYyk7XG59XG5cbmZ1bmN0aW9uIHRvSlNfYXJyYXkoY19hcnIpIHtcbiAgcmV0dXJuIGNfYXJyLm1hcCh0b0pTKTtcbn1cblxudmFyIENvbnN0ID0ge1xuICBmcm9tSlM6IGZyb21KUyxcbiAgZnJvbUpTX2FycmF5OiBmcm9tSlNfYXJyYXksXG4gIHRvSlM6IHRvSlMsXG4gIHRvSlNfYXJyYXk6IHRvSlNfYXJyYXlcbn07XG5cbmZ1bmN0aW9uIGZyb21KUyQxKGpzX25lc3RlZCkge1xuICByZXR1cm4ganNfbmVzdGVkO1xufVxuXG5mdW5jdGlvbiB0b0pTJDEobmVzdGVkKSB7XG4gIHJldHVybiBuZXN0ZWQ7XG59XG5cbnZhciBOZXN0ZWQgPSB7XG4gIGZyb21KUzogZnJvbUpTJDEsXG4gIHRvSlM6IHRvSlMkMVxufTtcblxudmFyIENvbnZlcnRlciA9IHtcbiAgQ29uc3Q6IENvbnN0LFxuICBOZXN0ZWQ6IE5lc3RlZFxufTtcblxuZnVuY3Rpb24gdEVudW0ocGFyYW0pIHtcbiAgdmFyIHBhcnRpYWxfYXJnID0gY29uZmlnLnNvcnROTVVJO1xuICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3QudEVudW0ocGFydGlhbF9hcmcsIHBhcmFtKTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2hvdyhkKSB7XG4gIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LnNob3coZnJvbUpTKGQpKTtcbn1cblxuZnVuY3Rpb24gZnJvbVN0cihzdHIpIHtcbiAgdmFyIGMgPSBDYWxjJEZvcm1mb3JtLkNvbnN0LnRGcm9tU3RyKHVuZGVmaW5lZCwgc3RyKTtcbiAgaWYgKGMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0b0pTKGMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBKc19leG4ucmFpc2VFcnJvcihcIkNhbm5vdCBpbnRlcnByZXQgc3RyaW5nXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludihkKSB7XG4gIHJldHVybiB0b0pTKENhbGMkRm9ybWZvcm0uQ29uc3QuaW52KGZyb21KUyhkKSkpO1xufVxuXG5mdW5jdGlvbiByZWwoZDEsIGQyKSB7XG4gIHZhciBjMSA9IGZyb21KUyhkMSk7XG4gIHZhciBjMiA9IGZyb21KUyhkMik7XG4gIHJldHVybiB0b0pTKENhbGMkRm9ybWZvcm0uQ29uc3QucmVsKGMxLCBjMikpO1xufVxuXG52YXIgQ29uc3QkMSA9IHtcbiAgdEVudW06IHRFbnVtLFxuICBzaG93OiBzaG93LFxuICBmcm9tU3RyOiBmcm9tU3RyLFxuICBpbnY6IGludixcbiAgcmVsOiByZWxcbn07XG5cbnZhciBzaG93JDEgPSBDYWxjJEZvcm1mb3JtLk5lc3RlZC5zaG93O1xuXG52YXIgZ2V0TGlzdCA9IENhbGMkRm9ybWZvcm0uTmVzdGVkLmdldExpc3Q7XG5cbmZ1bmN0aW9uIGZyb21BcnJheVRvTChhcnIpIHtcbiAgcmV0dXJuIENhbGMkRm9ybWZvcm0uTmVzdGVkLmZyb21BcnJheVRvTChhcnIubWFwKGZyb21KUykpO1xufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlUb1IoYXJyKSB7XG4gIHJldHVybiBDYWxjJEZvcm1mb3JtLk5lc3RlZC5mcm9tQXJyYXlUb1IoYXJyLm1hcChmcm9tSlMpKTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheShkKSB7XG4gIHZhciBjX2FyciA9IENhbGMkRm9ybWZvcm0uTmVzdGVkLnRvQXJyYXkoZCk7XG4gIHJldHVybiBjX2Fyci5tYXAodG9KUyk7XG59XG5cbnZhciBOZXN0ZWQkMSA9IHtcbiAgc2hvdzogc2hvdyQxLFxuICBnZXRMaXN0OiBnZXRMaXN0LFxuICBmcm9tQXJyYXlUb0w6IGZyb21BcnJheVRvTCxcbiAgZnJvbUFycmF5VG9SOiBmcm9tQXJyYXlUb1IsXG4gIHRvQXJyYXk6IHRvQXJyYXlcbn07XG5cbnZhciBDYWxjID0ge1xuICBDb25zdDogQ29uc3QkMSxcbiAgTmVzdGVkOiBOZXN0ZWQkMVxufTtcblxuZXhwb3J0IHtcbiAgY29uZmlnICxcbiAgQ29udmVydGVyICxcbiAgQ2FsYyAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBSZVNjcmlwdCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG5cbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBKc19saXN0IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2pzX2xpc3QuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfTGlzdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0xpc3QuanNcIjtcblxuZnVuY3Rpb24gdFRvSnMocGFyYW0pIHtcbiAgcmV0dXJuIHBhcmFtICsgMCB8IDA7XG59XG5cbmZ1bmN0aW9uIHRGcm9tSnMocGFyYW0pIHtcbiAgaWYgKHBhcmFtIDw9IDMgJiYgMCA8PSBwYXJhbSkge1xuICAgIHJldHVybiBwYXJhbSAtIDAgfCAwO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiB0RW51bShzb3J0Tk1VSU9wdCwgcGFyYW0pIHtcbiAgdmFyIHNvcnROTVVJID0gc29ydE5NVUlPcHQgIT09IHVuZGVmaW5lZCA/IHNvcnROTVVJT3B0IDogZmFsc2U7XG4gIGlmIChzb3J0Tk1VSSkge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICAvKiBOICovMCxcbiAgICAgICAgICAgIC8qIE0gKi8zLFxuICAgICAgICAgICAgLyogVSAqLzEsXG4gICAgICAgICAgICAvKiBJICovMlxuICAgICAgICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC8qIE4gKi8wLFxuICAgICAgICAgICAgLyogVSAqLzEsXG4gICAgICAgICAgICAvKiBJICovMixcbiAgICAgICAgICAgIC8qIE0gKi8zXG4gICAgICAgICAgXTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0RW51bUxpc3Qoc29ydE5NVUlPcHQsIHBhcmFtKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICBpZiAoc29ydE5NVUkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IC8qIE4gKi8wLFxuICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgaGQ6IC8qIE0gKi8zLFxuICAgICAgICAgICAgICB0bDoge1xuICAgICAgICAgICAgICAgIGhkOiAvKiBVICovMSxcbiAgICAgICAgICAgICAgICB0bDoge1xuICAgICAgICAgICAgICAgICAgaGQ6IC8qIEkgKi8yLFxuICAgICAgICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiAvKiBOICovMCxcbiAgICAgICAgICAgIHRsOiB7XG4gICAgICAgICAgICAgIGhkOiAvKiBVICovMSxcbiAgICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgICBoZDogLyogSSAqLzIsXG4gICAgICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgICAgIGhkOiAvKiBNICovMyxcbiAgICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3coeCkge1xuICBzd2l0Y2ggKHgpIHtcbiAgICBjYXNlIC8qIE4gKi8wIDpcbiAgICAgICAgcmV0dXJuIFwiTlwiO1xuICAgIGNhc2UgLyogVSAqLzEgOlxuICAgICAgICByZXR1cm4gXCJVXCI7XG4gICAgY2FzZSAvKiBJICovMiA6XG4gICAgICAgIHJldHVybiBcIklcIjtcbiAgICBjYXNlIC8qIE0gKi8zIDpcbiAgICAgICAgcmV0dXJuIFwiTVwiO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dBc0tleSh4KSB7XG4gIHN3aXRjaCAoeCkge1xuICAgIGNhc2UgLyogTiAqLzAgOlxuICAgICAgICByZXR1cm4gXCJOXCI7XG4gICAgY2FzZSAvKiBVICovMSA6XG4gICAgICAgIHJldHVybiBcIlVcIjtcbiAgICBjYXNlIC8qIEkgKi8yIDpcbiAgICAgICAgcmV0dXJuIFwiSVwiO1xuICAgIGNhc2UgLyogTSAqLzMgOlxuICAgICAgICByZXR1cm4gXCJNXCI7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9JbnQoc29ydE5NVUlPcHQsIGMpIHtcbiAgdmFyIHNvcnROTVVJID0gc29ydE5NVUlPcHQgIT09IHVuZGVmaW5lZCA/IHNvcnROTVVJT3B0IDogZmFsc2U7XG4gIHZhciBuID0gYyArIDAgfCAwO1xuICBzd2l0Y2ggKG4pIHtcbiAgICBjYXNlIDAgOlxuICAgICAgICByZXR1cm4gbjtcbiAgICBjYXNlIDEgOlxuICAgICAgICBpZiAoc29ydE5NVUkpIHtcbiAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfVxuICAgIGNhc2UgMiA6XG4gICAgICAgIGlmIChzb3J0Tk1VSSkge1xuICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICB9XG4gICAgY2FzZSAzIDpcbiAgICAgICAgaWYgKHNvcnROTVVJKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIC05OTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmcm9tSW50KHNvcnROTVVJT3B0LCBuKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICB2YXIgX2MgPSB0RnJvbUpzKG4pO1xuICBpZiAoIXNvcnROTVVJKSB7XG4gICAgcmV0dXJuIF9jO1xuICB9XG4gIGlmIChfYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIF9jO1xuICB9XG4gIHN3aXRjaCAoX2MpIHtcbiAgICBjYXNlIC8qIE4gKi8wIDpcbiAgICAgICAgcmV0dXJuIF9jO1xuICAgIGNhc2UgLyogVSAqLzEgOlxuICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgY2FzZSAvKiBJICovMiA6XG4gICAgICAgIHJldHVybiAvKiBVICovMTtcbiAgICBjYXNlIC8qIE0gKi8zIDpcbiAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIHRGcm9tU3RyKHNvcnROTVVJT3B0LCBzdHIpIHtcbiAgdmFyIHNvcnROTVVJID0gc29ydE5NVUlPcHQgIT09IHVuZGVmaW5lZCA/IHNvcnROTVVJT3B0IDogZmFsc2U7XG4gIHN3aXRjaCAoc3RyKSB7XG4gICAgY2FzZSBcIjFcIiA6XG4gICAgICAgIGlmIChzb3J0Tk1VSSkge1xuICAgICAgICAgIHJldHVybiAvKiBNICovMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gLyogVSAqLzE7XG4gICAgICAgIH1cbiAgICBjYXNlIFwiMlwiIDpcbiAgICAgICAgaWYgKHNvcnROTVVJKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICAgICAgfVxuICAgIGNhc2UgXCIzXCIgOlxuICAgICAgICBpZiAoc29ydE5NVUkpIHtcbiAgICAgICAgICByZXR1cm4gLyogSSAqLzI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC8qIE0gKi8zO1xuICAgICAgICB9XG4gICAgY2FzZSBcIihtbilcIiA6XG4gICAgY2FzZSBcIklcIiA6XG4gICAgY2FzZSBcImlcIiA6XG4gICAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICBjYXNlIFwiKClcIiA6XG4gICAgY2FzZSBcIk1cIiA6XG4gICAgY2FzZSBcIm1cIiA6XG4gICAgICAgIHJldHVybiAvKiBNICovMztcbiAgICBjYXNlIFwiXCIgOlxuICAgIGNhc2UgXCIoKCkpXCIgOlxuICAgIGNhc2UgXCIuXCIgOlxuICAgIGNhc2UgXCIwXCIgOlxuICAgIGNhc2UgXCJOXCIgOlxuICAgIGNhc2UgXCJuXCIgOlxuICAgICAgICByZXR1cm4gLyogTiAqLzA7XG4gICAgY2FzZSBcIlVcIiA6XG4gICAgY2FzZSBcIm1uXCIgOlxuICAgIGNhc2UgXCJ1XCIgOlxuICAgICAgICByZXR1cm4gLyogVSAqLzE7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiA7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52KHgpIHtcbiAgc3dpdGNoICh4KSB7XG4gICAgY2FzZSAvKiBOICovMCA6XG4gICAgICAgIHJldHVybiAvKiBNICovMztcbiAgICBjYXNlIC8qIFUgKi8xIDpcbiAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgIGNhc2UgLyogSSAqLzIgOlxuICAgICAgICByZXR1cm4gLyogVSAqLzE7XG4gICAgY2FzZSAvKiBNICovMyA6XG4gICAgICAgIHJldHVybiAvKiBOICovMDtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiByZWwoeCwgeSkge1xuICBpZiAoeSA9PT0gMCkge1xuICAgIHJldHVybiB4O1xuICB9XG4gIHN3aXRjaCAoeCkge1xuICAgIGNhc2UgLyogTiAqLzAgOlxuICAgICAgICByZXR1cm4geTtcbiAgICBjYXNlIC8qIFUgKi8xIDpcbiAgICAgICAgaWYgKHkgPj0gMikge1xuICAgICAgICAgIHJldHVybiAvKiBNICovMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gLyogVSAqLzE7XG4gICAgICAgIH1cbiAgICBjYXNlIC8qIEkgKi8yIDpcbiAgICAgICAgaWYgKHkgIT09IDIpIHtcbiAgICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgICAgICB9XG4gICAgY2FzZSAvKiBNICovMyA6XG4gICAgICAgIHJldHVybiAvKiBNICovMztcbiAgICBcbiAgfVxufVxuXG52YXIgQ29uc3QgPSB7XG4gIHRUb0pzOiB0VG9KcyxcbiAgdEZyb21KczogdEZyb21KcyxcbiAgdEVudW06IHRFbnVtLFxuICB0RW51bUxpc3Q6IHRFbnVtTGlzdCxcbiAgc2hvdzogc2hvdyxcbiAgc2hvd0FzS2V5OiBzaG93QXNLZXksXG4gIHRvSW50OiB0b0ludCxcbiAgZnJvbUludDogZnJvbUludCxcbiAgdEZyb21TdHI6IHRGcm9tU3RyLFxuICBpbnY6IGludixcbiAgcmVsOiByZWxcbn07XG5cbmZ1bmN0aW9uIHNob3ckMShuZXN0KSB7XG4gIGlmIChuZXN0Lk5BTUUgPT09IFwiTmVzdFRvUlwiKSB7XG4gICAgdmFyIGNsaXN0ID0gbmVzdC5WQUw7XG4gICAgaWYgKGNsaXN0KSB7XG4gICAgICByZXR1cm4gXCIoXCIgKyBCZWx0X0xpc3QucmVkdWNlUmV2ZXJzZShjbGlzdCwgXCJcIiwgKGZ1bmN0aW9uIChzdHIsIGMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNob3coYykgKyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyLmxlbmd0aCA+IDAgPyBcIihcIiArIHN0ciArIFwiKVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgfSkpICsgXCIpXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBcIk1cIjtcbiAgICB9XG4gIH1cbiAgdmFyIGNsaXN0JDEgPSBuZXN0LlZBTDtcbiAgaWYgKGNsaXN0JDEpIHtcbiAgICByZXR1cm4gXCIoXCIgKyBCZWx0X0xpc3QucmVkdWNlKGNsaXN0JDEsIFwiXCIsIChmdW5jdGlvbiAoc3RyLCBjKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIubGVuZ3RoID4gMCA/IFwiKFwiICsgc3RyICsgXCIpXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICApICsgc2hvdyhjKTtcbiAgICAgICAgICAgICAgICB9KSkgKyBcIilcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJNXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0TGlzdChuZXN0KSB7XG4gIHJldHVybiBuZXN0LlZBTDtcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5VG9MKGFycikge1xuICByZXR1cm4ge1xuICAgICAgICAgIE5BTUU6IFwiTmVzdFRvTFwiLFxuICAgICAgICAgIFZBTDogQmVsdF9MaXN0LmZyb21BcnJheShhcnIpXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheVRvUihhcnIpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBOQU1FOiBcIk5lc3RUb1JcIixcbiAgICAgICAgICBWQUw6IEJlbHRfTGlzdC5mcm9tQXJyYXkoYXJyKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiB0b0FycmF5KG5lc3QpIHtcbiAgcmV0dXJuIEJlbHRfTGlzdC50b0FycmF5KG5lc3QuVkFMKTtcbn1cblxuZnVuY3Rpb24gZm1hcEwocGFyYW0sIGZuKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9MXCIsXG4gICAgICAgICAgVkFMOiBDdXJyeS5fMShmbiwgcGFyYW0uVkFMKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBmbWFwUihwYXJhbSwgZm4pIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBOQU1FOiBcIk5lc3RUb1JcIixcbiAgICAgICAgICBWQUw6IEN1cnJ5Ll8xKGZuLCBwYXJhbS5WQUwpXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIF9yZWR1Y2VCeUNyb3NzaW5nKF9jbGlzdCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGNsaXN0ID0gX2NsaXN0O1xuICAgIGlmICghY2xpc3QpIHtcbiAgICAgIHJldHVybiBjbGlzdDtcbiAgICB9XG4gICAgdmFyIGMgPSBjbGlzdC5oZDtcbiAgICBpZiAoYyA9PT0gMCkge1xuICAgICAgdmFyIG1hdGNoID0gY2xpc3QudGw7XG4gICAgICBpZiAobWF0Y2ggJiYgbWF0Y2guaGQgPT09IDApIHtcbiAgICAgICAgX2NsaXN0ID0gbWF0Y2gudGw7XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgIH1cbiAgICAgIFxuICAgIH1cbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IGMsXG4gICAgICAgICAgICB0bDogX3JlZHVjZUJ5Q3Jvc3NpbmcoY2xpc3QudGwpXG4gICAgICAgICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlQnlDcm9zc2luZ0wocGFyYW0pIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBOQU1FOiBcIk5lc3RUb0xcIixcbiAgICAgICAgICBWQUw6IF9yZWR1Y2VCeUNyb3NzaW5nKHBhcmFtLlZBTClcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlQnlDcm9zc2luZ1IocGFyYW0pIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBOQU1FOiBcIk5lc3RUb1JcIixcbiAgICAgICAgICBWQUw6IF9yZWR1Y2VCeUNyb3NzaW5nKHBhcmFtLlZBTClcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gX3JlZHVjZUJ5Q2FsbGluZyhjbGlzdCwgc29tZVVJKSB7XG4gIGlmICghY2xpc3QpIHtcbiAgICByZXR1cm4gY2xpc3Q7XG4gIH1cbiAgdmFyIGNzID0gY2xpc3QudGw7XG4gIHZhciBjID0gY2xpc3QuaGQ7XG4gIGlmIChjcykge1xuICAgIGlmIChjICE9PSAwKSB7XG4gICAgICBpZiAoYyA+PSAzKSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGQ6IC8qIE0gKi8zLFxuICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgfTtcbiAgICAgIH0gZWxzZSBpZiAoc29tZVVJICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKHNvbWVVSSA9PT0gYykge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBoZDogLyogTiAqLzAsXG4gICAgICAgICAgICAgICAgICB0bDogX3JlZHVjZUJ5Q2FsbGluZyhjcywgc29tZVVJKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIGhkOiAvKiBNICovMyxcbiAgICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhkOiBjLFxuICAgICAgICAgICAgICAgIHRsOiBfcmVkdWNlQnlDYWxsaW5nKGNzLCBjKVxuICAgICAgICAgICAgICB9O1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBoZDogLyogTiAqLzAsXG4gICAgICAgICAgICAgIHRsOiBfcmVkdWNlQnlDYWxsaW5nKGNzLCBzb21lVUkpXG4gICAgICAgICAgICB9O1xuICAgIH1cbiAgfSBlbHNlIGlmICghKGMgPT09IDIgfHwgYyA9PT0gMSkgfHwgc29tZVVJID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gY2xpc3Q7XG4gIH0gZWxzZSBpZiAoc29tZVVJID09PSBjKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiAvKiBOICovMCxcbiAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZDogLyogTSAqLzMsXG4gICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWR1Y2VCeUNhbGxpbmdMKHBhcmFtKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9MXCIsXG4gICAgICAgICAgVkFMOiBKc19saXN0LnJldihfcmVkdWNlQnlDYWxsaW5nKEpzX2xpc3QucmV2KHBhcmFtLlZBTCksIHVuZGVmaW5lZCkpXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZUJ5Q2FsbGluZ1IocGFyYW0pIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBOQU1FOiBcIk5lc3RUb1JcIixcbiAgICAgICAgICBWQUw6IF9yZWR1Y2VCeUNhbGxpbmcocGFyYW0uVkFMLCB1bmRlZmluZWQpXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZUwocGFyYW0pIHtcbiAgcmV0dXJuIHJlZHVjZUJ5Q3Jvc3NpbmdMKHJlZHVjZUJ5Q2FsbGluZ0woe1xuICAgICAgICAgICAgICAgICAgTkFNRTogXCJOZXN0VG9MXCIsXG4gICAgICAgICAgICAgICAgICBWQUw6IHBhcmFtLlZBTFxuICAgICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlUihwYXJhbSkge1xuICByZXR1cm4gcmVkdWNlQnlDcm9zc2luZ1IocmVkdWNlQnlDYWxsaW5nUih7XG4gICAgICAgICAgICAgICAgICBOQU1FOiBcIk5lc3RUb1JcIixcbiAgICAgICAgICAgICAgICAgIFZBTDogcGFyYW0uVkFMXG4gICAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBfY2FsYyhjbGlzdCkge1xuICBpZiAoIWNsaXN0KSB7XG4gICAgcmV0dXJuIC8qIE4gKi8wO1xuICB9XG4gIHZhciBjcyA9IGNsaXN0LnRsO1xuICB2YXIgYyA9IGNsaXN0LmhkO1xuICBpZiAoY3MpIHtcbiAgICBpZiAoYyAhPT0gMCkge1xuICAgICAgaWYgKGMgPj0gMykge1xuICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gcmVsKGMsIGludihfY2FsYyhjcykpKTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGludihfY2FsYyhjcykpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYztcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjTChwYXJhbSkge1xuICB2YXIgY2xpc3QgPSBwYXJhbS5WQUw7XG4gIGlmIChjbGlzdCkge1xuICAgIHJldHVybiBpbnYoX2NhbGMoSnNfbGlzdC5yZXYoY2xpc3QpKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qIE0gKi8zO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGNSKHBhcmFtKSB7XG4gIHZhciBjbGlzdCA9IHBhcmFtLlZBTDtcbiAgaWYgKGNsaXN0KSB7XG4gICAgcmV0dXJuIGludihfY2FsYyhjbGlzdCkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiBNICovMztcbiAgfVxufVxuXG52YXIgTmVzdGVkID0ge1xuICBzaG93OiBzaG93JDEsXG4gIGdldExpc3Q6IGdldExpc3QsXG4gIGZyb21BcnJheVRvTDogZnJvbUFycmF5VG9MLFxuICBmcm9tQXJyYXlUb1I6IGZyb21BcnJheVRvUixcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgZm1hcEw6IGZtYXBMLFxuICBmbWFwUjogZm1hcFIsXG4gIHJlZHVjZUJ5Q3Jvc3NpbmdMOiByZWR1Y2VCeUNyb3NzaW5nTCxcbiAgcmVkdWNlQnlDcm9zc2luZ1I6IHJlZHVjZUJ5Q3Jvc3NpbmdSLFxuICByZWR1Y2VCeUNhbGxpbmdMOiByZWR1Y2VCeUNhbGxpbmdMLFxuICByZWR1Y2VCeUNhbGxpbmdSOiByZWR1Y2VCeUNhbGxpbmdSLFxuICByZWR1Y2VMOiByZWR1Y2VMLFxuICByZWR1Y2VSOiByZWR1Y2VSLFxuICBjYWxjTDogY2FsY0wsXG4gIGNhbGNSOiBjYWxjUlxufTtcblxuZXhwb3J0IHtcbiAgQ29uc3QgLFxuICBOZXN0ZWQgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBmb3JtZm9ybUpTIGZyb20gJy4vSlNfaW50ZXJmYWNlLmJzLmpzJztcblxuZXhwb3J0IGRlZmF1bHQgZm9ybWZvcm1KUzsiXSwic291cmNlUm9vdCI6IiJ9