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
  var c = _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_1__.Const.tFromStr(str);
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

function tFromStr(str) {
  switch (str) {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9iZWx0X0FycmF5LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvYmVsdF9MaXN0LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvYmVsdF9Tb3J0QXJyYXkuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9jYW1sLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvY2FtbF9hcnJheS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2NhbWxfZXhjZXB0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2NhbWxfanNfZXhjZXB0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2NhbWxfb3B0aW9uLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvY3VycnkuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9qc19leG4uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9qc19pbnQuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9qc19saXN0LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvanNfbWF0aC5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2pzX3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9KU19pbnRlcmZhY2UuYnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvY29yZS9jYWxjL0NhbGMuYnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvcm1mb3JtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSa0M7QUFDRTtBQUNJO0FBQ1E7O0FBRWhEO0FBQ0E7QUFDQSxXQUFXLGlEQUFnQjtBQUMzQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFD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QWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDBDQUFTO0FBQ3BDOztBQXdFQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzdUJvQztBQUNVO0FBQ0U7QUFDTTs7QUFFdEQ7QUFDQTtBQUNBLFdBQVcsaURBQWdCO0FBQzNCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQXlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMENBQVM7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwQ0FBUztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDBDQUFTO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwwQ0FBUztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSwwREFBeUI7QUFDM0I7QUFDQTs7QUFFQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwwQ0FBUztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQTRGQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0K0NvQztBQUNVOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLDBDQUFTO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwwQ0FBUztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFxQkM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Z0I4RDs7QUFFOUQsdUJBQXVCLDRFQUEyQzs7QUFFbEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQiwyREFBMEI7O0FBYXpDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFPQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNEM7QUFDSTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGlEQUFnQjtBQUMzQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaURBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQXlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLGlEQUFnQixDQUFDLCtDQUFjO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBeUJDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNVc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsMkNBQVU7QUFDcEIsV0FBVywyQ0FBVTtBQUNyQixHQUFHLGNBQWMsMkNBQVU7QUFDM0IsV0FBVywyQ0FBVTtBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsMkNBQVU7QUFDcEIsV0FBVywyQ0FBVTtBQUNyQixHQUFHLGNBQWMsMkNBQVU7QUFDM0IsV0FBVywyQ0FBVTtBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFXQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLGNBQWM7QUFDcEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSwrQkFBK0IsUUFBUTtBQUN2QztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBa0JDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzSUE7O0FBRXFEO0FBQ0c7O0FBRXhEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsZ0VBQTJCO0FBQ3JDO0FBQ0E7QUFDQSxHQUFHO0FBQ0gsV0FBVyxrRUFBaUI7QUFDNUI7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLDhEQUF5QjtBQUNsQzs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsV0FBVyw4REFBeUI7QUFDcEM7QUFDQTs7QUFFQTtBQUNBLFNBQVMsNkRBQXdCO0FBQ2pDOztBQUVBO0FBQ0EsVUFBVSxpRUFBNEI7QUFDdEM7QUFDQTtBQUNBLEdBQUc7QUFDSCxXQUFXLGtFQUFpQjtBQUM1QjtBQUNBOztBQUVBO0FBQ0EsY0FBYyw0REFBdUI7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsY0FBYyw0REFBdUI7QUFDckM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUEsYUFBYSw4REFBeUI7O0FBRXRDLGNBQWMsaUVBQTRCOztBQUUxQztBQUNBLFNBQVMsc0VBQWlDO0FBQzFDOztBQUVBO0FBQ0EsU0FBUyxzRUFBaUM7QUFDMUM7O0FBRUE7QUFDQSxjQUFjLGlFQUE0QjtBQUMxQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQU9DO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNqSUE7O0FBRW1EO0FBQ0k7QUFDSTs7QUFFM0Q7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdFQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUVBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9FQUFtQjtBQUNsQztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsb0VBQW1CO0FBQ2xDO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLGtFQUFpQjtBQUMxQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLHlEQUFRO0FBQ3ZCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSx5REFBUTtBQUN2QjtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZUFBZSw0REFBVyxrQkFBa0IsNERBQVc7QUFDdkQ7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUI7QUFDakI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxxQkFBcUIsNERBQVc7QUFDaEMsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFNQztBQUNEOzs7Ozs7O1VDamRBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7QUNObUQ7O0FBRW5ELCtEQUFlLGdEQUFVLEUiLCJmaWxlIjoiZm9ybWZvcm0uanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmb3JtZm9ybVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmb3JtZm9ybVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIlxuXG5pbXBvcnQgKiBhcyBDYW1sIGZyb20gXCIuL2NhbWwuanNcIjtcbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCIuL2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBKc19tYXRoIGZyb20gXCIuL2pzX21hdGguanNcIjtcbmltcG9ydCAqIGFzIENhbWxfb3B0aW9uIGZyb20gXCIuL2NhbWxfb3B0aW9uLmpzXCI7XG5cbmZ1bmN0aW9uIGdldChhcnIsIGkpIHtcbiAgaWYgKGkgPj0gMCAmJiBpIDwgYXJyLmxlbmd0aCkge1xuICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKGFycltpXSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGdldEV4bihhcnIsIGkpIHtcbiAgaWYgKCEoaSA+PSAwICYmIGkgPCBhcnIubGVuZ3RoKSkge1xuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IFwiQXNzZXJ0X2ZhaWx1cmVcIixcbiAgICAgICAgICBfMTogW1xuICAgICAgICAgICAgXCJiZWx0X0FycmF5Lm1sXCIsXG4gICAgICAgICAgICAyNyxcbiAgICAgICAgICAgIDRcbiAgICAgICAgICBdLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIHJldHVybiBhcnJbaV07XG59XG5cbmZ1bmN0aW9uIHNldChhcnIsIGksIHYpIHtcbiAgaWYgKGkgPj0gMCAmJiBpIDwgYXJyLmxlbmd0aCkge1xuICAgIGFycltpXSA9IHY7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEV4bihhcnIsIGksIHYpIHtcbiAgaWYgKCEoaSA+PSAwICYmIGkgPCBhcnIubGVuZ3RoKSkge1xuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IFwiQXNzZXJ0X2ZhaWx1cmVcIixcbiAgICAgICAgICBfMTogW1xuICAgICAgICAgICAgXCJiZWx0X0FycmF5Lm1sXCIsXG4gICAgICAgICAgICAzMyxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICBdLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIGFycltpXSA9IHY7XG4gIFxufVxuXG5mdW5jdGlvbiBzd2FwVW5zYWZlKHhzLCBpLCBqKSB7XG4gIHZhciB0bXAgPSB4c1tpXTtcbiAgeHNbaV0gPSB4c1tqXTtcbiAgeHNbal0gPSB0bXA7XG4gIFxufVxuXG5mdW5jdGlvbiBzaHVmZmxlSW5QbGFjZSh4cykge1xuICB2YXIgbGVuID0geHMubGVuZ3RoO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgIHN3YXBVbnNhZmUoeHMsIGksIEpzX21hdGgucmFuZG9tX2ludChpLCBsZW4pKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSh4cykge1xuICB2YXIgcmVzdWx0ID0geHMuc2xpY2UoMCk7XG4gIHNodWZmbGVJblBsYWNlKHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHJldmVyc2VJblBsYWNlKHhzKSB7XG4gIHZhciBsZW4gPSB4cy5sZW5ndGg7XG4gIHZhciBvZnMgPSAwO1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGxlbiAvIDIgfCAwOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgc3dhcFVuc2FmZSh4cywgb2ZzICsgaSB8IDAsICgob2ZzICsgbGVuIHwgMCkgLSBpIHwgMCkgLSAxIHwgMCk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIHJldmVyc2UoeHMpIHtcbiAgdmFyIGxlbiA9IHhzLmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgIHJlc3VsdFtpXSA9IHhzWyhsZW4gLSAxIHwgMCkgLSBpIHwgMF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbWFrZShsLCBmKSB7XG4gIGlmIChsIDw9IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHJlcyA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgcmVzW2ldID0gZjtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBtYWtlQnlVKGwsIGYpIHtcbiAgaWYgKGwgPD0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgcmVzID0gbmV3IEFycmF5KGwpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICByZXNbaV0gPSBmKGkpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIG1ha2VCeShsLCBmKSB7XG4gIHJldHVybiBtYWtlQnlVKGwsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VCeUFuZFNodWZmbGVVKGwsIGYpIHtcbiAgdmFyIHUgPSBtYWtlQnlVKGwsIGYpO1xuICBzaHVmZmxlSW5QbGFjZSh1KTtcbiAgcmV0dXJuIHU7XG59XG5cbmZ1bmN0aW9uIG1ha2VCeUFuZFNodWZmbGUobCwgZikge1xuICByZXR1cm4gbWFrZUJ5QW5kU2h1ZmZsZVUobCwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIGZpbmlzaCkge1xuICB2YXIgY3V0ID0gZmluaXNoIC0gc3RhcnQgfCAwO1xuICBpZiAoY3V0IDwgMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgYXJyID0gbmV3IEFycmF5KGN1dCArIDEgfCAwKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8PSBjdXQ7ICsraSl7XG4gICAgYXJyW2ldID0gc3RhcnQgKyBpIHwgMDtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiByYW5nZUJ5KHN0YXJ0LCBmaW5pc2gsIHN0ZXApIHtcbiAgdmFyIGN1dCA9IGZpbmlzaCAtIHN0YXJ0IHwgMDtcbiAgaWYgKGN1dCA8IDAgfHwgc3RlcCA8PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBuYiA9IChjdXQgLyBzdGVwIHwgMCkgKyAxIHwgMDtcbiAgdmFyIGFyciA9IG5ldyBBcnJheShuYik7XG4gIHZhciBjdXIgPSBzdGFydDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IG5iOyArK2kpe1xuICAgIGFycltpXSA9IGN1cjtcbiAgICBjdXIgPSBjdXIgKyBzdGVwIHwgMDtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiB6aXAoeHMsIHlzKSB7XG4gIHZhciBsZW54ID0geHMubGVuZ3RoO1xuICB2YXIgbGVueSA9IHlzLmxlbmd0aDtcbiAgdmFyIGxlbiA9IGxlbnggPCBsZW55ID8gbGVueCA6IGxlbnk7XG4gIHZhciBzID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgc1tpXSA9IFtcbiAgICAgIHhzW2ldLFxuICAgICAgeXNbaV1cbiAgICBdO1xuICB9XG4gIHJldHVybiBzO1xufVxuXG5mdW5jdGlvbiB6aXBCeVUoeHMsIHlzLCBmKSB7XG4gIHZhciBsZW54ID0geHMubGVuZ3RoO1xuICB2YXIgbGVueSA9IHlzLmxlbmd0aDtcbiAgdmFyIGxlbiA9IGxlbnggPCBsZW55ID8gbGVueCA6IGxlbnk7XG4gIHZhciBzID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgc1tpXSA9IGYoeHNbaV0sIHlzW2ldKTtcbiAgfVxuICByZXR1cm4gcztcbn1cblxuZnVuY3Rpb24gemlwQnkoeHMsIHlzLCBmKSB7XG4gIHJldHVybiB6aXBCeVUoeHMsIHlzLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiBjb25jYXQoYTEsIGEyKSB7XG4gIHZhciBsMSA9IGExLmxlbmd0aDtcbiAgdmFyIGwyID0gYTIubGVuZ3RoO1xuICB2YXIgYTFhMiA9IG5ldyBBcnJheShsMSArIGwyIHwgMCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsMTsgKytpKXtcbiAgICBhMWEyW2ldID0gYTFbaV07XG4gIH1cbiAgZm9yKHZhciBpJDEgPSAwOyBpJDEgPCBsMjsgKytpJDEpe1xuICAgIGExYTJbbDEgKyBpJDEgfCAwXSA9IGEyW2kkMV07XG4gIH1cbiAgcmV0dXJuIGExYTI7XG59XG5cbmZ1bmN0aW9uIGNvbmNhdE1hbnkoYXJycykge1xuICB2YXIgbGVuQXJycyA9IGFycnMubGVuZ3RoO1xuICB2YXIgdG90YWxMZW4gPSAwO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuQXJyczsgKytpKXtcbiAgICB0b3RhbExlbiA9IHRvdGFsTGVuICsgYXJyc1tpXS5sZW5ndGggfCAwO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkodG90YWxMZW4pO1xuICB0b3RhbExlbiA9IDA7XG4gIGZvcih2YXIgaiA9IDA7IGogPCBsZW5BcnJzOyArK2ope1xuICAgIHZhciBjdXIgPSBhcnJzW2pdO1xuICAgIGZvcih2YXIgayA9IDAgLGtfZmluaXNoID0gY3VyLmxlbmd0aDsgayA8IGtfZmluaXNoOyArK2spe1xuICAgICAgcmVzdWx0W3RvdGFsTGVuXSA9IGN1cltrXTtcbiAgICAgIHRvdGFsTGVuID0gdG90YWxMZW4gKyAxIHwgMDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc2xpY2UoYSwgb2Zmc2V0LCBsZW4pIHtcbiAgaWYgKGxlbiA8PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBsZW5hID0gYS5sZW5ndGg7XG4gIHZhciBvZnMgPSBvZmZzZXQgPCAwID8gQ2FtbC5jYW1sX2ludF9tYXgobGVuYSArIG9mZnNldCB8IDAsIDApIDogb2Zmc2V0O1xuICB2YXIgaGFzTGVuID0gbGVuYSAtIG9mcyB8IDA7XG4gIHZhciBjb3B5TGVuZ3RoID0gaGFzTGVuIDwgbGVuID8gaGFzTGVuIDogbGVuO1xuICBpZiAoY29weUxlbmd0aCA8PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoY29weUxlbmd0aCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBjb3B5TGVuZ3RoOyArK2kpe1xuICAgIHJlc3VsdFtpXSA9IGFbb2ZzICsgaSB8IDBdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNsaWNlVG9FbmQoYSwgb2Zmc2V0KSB7XG4gIHZhciBsZW5hID0gYS5sZW5ndGg7XG4gIHZhciBvZnMgPSBvZmZzZXQgPCAwID8gQ2FtbC5jYW1sX2ludF9tYXgobGVuYSArIG9mZnNldCB8IDAsIDApIDogb2Zmc2V0O1xuICB2YXIgbGVuID0gbGVuYSAtIG9mcyB8IDA7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICByZXN1bHRbaV0gPSBhW29mcyArIGkgfCAwXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmaWxsKGEsIG9mZnNldCwgbGVuLCB2KSB7XG4gIGlmIChsZW4gPD0gMCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIGxlbmEgPSBhLmxlbmd0aDtcbiAgdmFyIG9mcyA9IG9mZnNldCA8IDAgPyBDYW1sLmNhbWxfaW50X21heChsZW5hICsgb2Zmc2V0IHwgMCwgMCkgOiBvZmZzZXQ7XG4gIHZhciBoYXNMZW4gPSBsZW5hIC0gb2ZzIHwgMDtcbiAgdmFyIGZpbGxMZW5ndGggPSBoYXNMZW4gPCBsZW4gPyBoYXNMZW4gOiBsZW47XG4gIGlmIChmaWxsTGVuZ3RoIDw9IDApIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIGZvcih2YXIgaSA9IG9mcyAsaV9maW5pc2ggPSBvZnMgKyBmaWxsTGVuZ3RoIHwgMDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIGFbaV0gPSB2O1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBibGl0VW5zYWZlKGExLCBzcmNvZnMxLCBhMiwgc3Jjb2ZzMiwgYmxpdExlbmd0aCkge1xuICBpZiAoc3Jjb2ZzMiA8PSBzcmNvZnMxKSB7XG4gICAgZm9yKHZhciBqID0gMDsgaiA8IGJsaXRMZW5ndGg7ICsrail7XG4gICAgICBhMltqICsgc3Jjb2ZzMiB8IDBdID0gYTFbaiArIHNyY29mczEgfCAwXTtcbiAgICB9XG4gICAgcmV0dXJuIDtcbiAgfVxuICBmb3IodmFyIGokMSA9IGJsaXRMZW5ndGggLSAxIHwgMDsgaiQxID49IDA7IC0taiQxKXtcbiAgICBhMltqJDEgKyBzcmNvZnMyIHwgMF0gPSBhMVtqJDEgKyBzcmNvZnMxIHwgMF07XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGJsaXQoYTEsIG9mczEsIGEyLCBvZnMyLCBsZW4pIHtcbiAgdmFyIGxlbmExID0gYTEubGVuZ3RoO1xuICB2YXIgbGVuYTIgPSBhMi5sZW5ndGg7XG4gIHZhciBzcmNvZnMxID0gb2ZzMSA8IDAgPyBDYW1sLmNhbWxfaW50X21heChsZW5hMSArIG9mczEgfCAwLCAwKSA6IG9mczE7XG4gIHZhciBzcmNvZnMyID0gb2ZzMiA8IDAgPyBDYW1sLmNhbWxfaW50X21heChsZW5hMiArIG9mczIgfCAwLCAwKSA6IG9mczI7XG4gIHZhciBibGl0TGVuZ3RoID0gQ2FtbC5jYW1sX2ludF9taW4obGVuLCBDYW1sLmNhbWxfaW50X21pbihsZW5hMSAtIHNyY29mczEgfCAwLCBsZW5hMiAtIHNyY29mczIgfCAwKSk7XG4gIGlmIChzcmNvZnMyIDw9IHNyY29mczEpIHtcbiAgICBmb3IodmFyIGogPSAwOyBqIDwgYmxpdExlbmd0aDsgKytqKXtcbiAgICAgIGEyW2ogKyBzcmNvZnMyIHwgMF0gPSBhMVtqICsgc3Jjb2ZzMSB8IDBdO1xuICAgIH1cbiAgICByZXR1cm4gO1xuICB9XG4gIGZvcih2YXIgaiQxID0gYmxpdExlbmd0aCAtIDEgfCAwOyBqJDEgPj0gMDsgLS1qJDEpe1xuICAgIGEyW2okMSArIHNyY29mczIgfCAwXSA9IGExW2okMSArIHNyY29mczEgfCAwXTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFUoYSwgZikge1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGEubGVuZ3RoOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgZihhW2ldKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gZm9yRWFjaChhLCBmKSB7XG4gIHJldHVybiBmb3JFYWNoVShhLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBtYXBVKGEsIGYpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIHIgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHJbaV0gPSBmKGFbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBtYXAoYSwgZikge1xuICByZXR1cm4gbWFwVShhLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBnZXRCeVUoYSwgcCkge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciByO1xuICB3aGlsZShyID09PSB1bmRlZmluZWQgJiYgaSA8IGwpIHtcbiAgICB2YXIgdiA9IGFbaV07XG4gICAgaWYgKHAodikpIHtcbiAgICAgIHIgPSBDYW1sX29wdGlvbi5zb21lKHYpO1xuICAgIH1cbiAgICBpID0gaSArIDEgfCAwO1xuICB9O1xuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gZ2V0QnkoYSwgcCkge1xuICByZXR1cm4gZ2V0QnlVKGEsIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlVKGEsIHApIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcjtcbiAgd2hpbGUociA9PT0gdW5kZWZpbmVkICYmIGkgPCBsKSB7XG4gICAgdmFyIHYgPSBhW2ldO1xuICAgIGlmIChwKHYpKSB7XG4gICAgICByID0gaTtcbiAgICB9XG4gICAgaSA9IGkgKyAxIHwgMDtcbiAgfTtcbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGdldEluZGV4QnkoYSwgcCkge1xuICByZXR1cm4gZ2V0SW5kZXhCeVUoYSwgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24ga2VlcFUoYSwgZikge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgciA9IG5ldyBBcnJheShsKTtcbiAgdmFyIGogPSAwO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICB2YXIgdiA9IGFbaV07XG4gICAgaWYgKGYodikpIHtcbiAgICAgIHJbal0gPSB2O1xuICAgICAgaiA9IGogKyAxIHwgMDtcbiAgICB9XG4gICAgXG4gIH1cbiAgci5sZW5ndGggPSBqO1xuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24ga2VlcChhLCBmKSB7XG4gIHJldHVybiBrZWVwVShhLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBrZWVwV2l0aEluZGV4VShhLCBmKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciByID0gbmV3IEFycmF5KGwpO1xuICB2YXIgaiA9IDA7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHZhciB2ID0gYVtpXTtcbiAgICBpZiAoZih2LCBpKSkge1xuICAgICAgcltqXSA9IHY7XG4gICAgICBqID0gaiArIDEgfCAwO1xuICAgIH1cbiAgICBcbiAgfVxuICByLmxlbmd0aCA9IGo7XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBrZWVwV2l0aEluZGV4KGEsIGYpIHtcbiAgcmV0dXJuIGtlZXBXaXRoSW5kZXhVKGEsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIGtlZXBNYXBVKGEsIGYpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIHIgPSBuZXcgQXJyYXkobCk7XG4gIHZhciBqID0gMDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgdmFyIHYgPSBhW2ldO1xuICAgIHZhciB2JDEgPSBmKHYpO1xuICAgIGlmICh2JDEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcltqXSA9IENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24odiQxKTtcbiAgICAgIGogPSBqICsgMSB8IDA7XG4gICAgfVxuICAgIFxuICB9XG4gIHIubGVuZ3RoID0gajtcbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGtlZXBNYXAoYSwgZikge1xuICByZXR1cm4ga2VlcE1hcFUoYSwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFdpdGhJbmRleFUoYSwgZikge1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGEubGVuZ3RoOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgZihpLCBhW2ldKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFdpdGhJbmRleChhLCBmKSB7XG4gIHJldHVybiBmb3JFYWNoV2l0aEluZGV4VShhLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiBtYXBXaXRoSW5kZXhVKGEsIGYpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIHIgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHJbaV0gPSBmKGksIGFbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBtYXBXaXRoSW5kZXgoYSwgZikge1xuICByZXR1cm4gbWFwV2l0aEluZGV4VShhLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VVKGEsIHgsIGYpIHtcbiAgdmFyIHIgPSB4O1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGEubGVuZ3RoOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgciA9IGYociwgYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZShhLCB4LCBmKSB7XG4gIHJldHVybiByZWR1Y2VVKGEsIHgsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2VVKGEsIHgsIGYpIHtcbiAgdmFyIHIgPSB4O1xuICBmb3IodmFyIGkgPSBhLmxlbmd0aCAtIDEgfCAwOyBpID49IDA7IC0taSl7XG4gICAgciA9IGYociwgYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2UoYSwgeCwgZikge1xuICByZXR1cm4gcmVkdWNlUmV2ZXJzZVUoYSwgeCwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZTJVKGEsIGIsIHgsIGYpIHtcbiAgdmFyIHIgPSB4O1xuICB2YXIgbGVuID0gQ2FtbC5jYW1sX2ludF9taW4oYS5sZW5ndGgsIGIubGVuZ3RoKTtcbiAgZm9yKHZhciBpID0gbGVuIC0gMSB8IDA7IGkgPj0gMDsgLS1pKXtcbiAgICByID0gZihyLCBhW2ldLCBiW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZTIoYSwgYiwgeCwgZikge1xuICByZXR1cm4gcmVkdWNlUmV2ZXJzZTJVKGEsIGIsIHgsIEN1cnJ5Ll9fMyhmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVdpdGhJbmRleFUoYSwgeCwgZikge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICByID0gZihyLCBhW2ldLCBpKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gcmVkdWNlV2l0aEluZGV4KGEsIHgsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVdpdGhJbmRleFUoYSwgeCwgQ3VycnkuX18zKGYpKTtcbn1cblxuZnVuY3Rpb24gZXZlcnlVKGFyciwgYikge1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIF9pID0gMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPT09IGxlbikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghYihhcnJbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXZlcnkoYXJyLCBmKSB7XG4gIHJldHVybiBldmVyeVUoYXJyLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBzb21lVShhcnIsIGIpIHtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciBfaSA9IDA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmIChpID09PSBsZW4pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGIoYXJyW2ldKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc29tZShhcnIsIGYpIHtcbiAgcmV0dXJuIHNvbWVVKGFyciwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gZXZlcnlBdXgyKGFycjEsIGFycjIsIF9pLCBiLCBsZW4pIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPT09IGxlbikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghYihhcnIxW2ldLCBhcnIyW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5MlUoYSwgYiwgcCkge1xuICByZXR1cm4gZXZlcnlBdXgyKGEsIGIsIDAsIHAsIENhbWwuY2FtbF9pbnRfbWluKGEubGVuZ3RoLCBiLmxlbmd0aCkpO1xufVxuXG5mdW5jdGlvbiBldmVyeTIoYSwgYiwgcCkge1xuICByZXR1cm4gZXZlcnkyVShhLCBiLCBDdXJyeS5fXzIocCkpO1xufVxuXG5mdW5jdGlvbiBzb21lMlUoYSwgYiwgcCkge1xuICB2YXIgX2kgPSAwO1xuICB2YXIgbGVuID0gQ2FtbC5jYW1sX2ludF9taW4oYS5sZW5ndGgsIGIubGVuZ3RoKTtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPT09IGxlbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocChhW2ldLCBiW2ldKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc29tZTIoYSwgYiwgcCkge1xuICByZXR1cm4gc29tZTJVKGEsIGIsIEN1cnJ5Ll9fMihwKSk7XG59XG5cbmZ1bmN0aW9uIGVxVShhLCBiLCBwKSB7XG4gIHZhciBsZW5hID0gYS5sZW5ndGg7XG4gIHZhciBsZW5iID0gYi5sZW5ndGg7XG4gIGlmIChsZW5hID09PSBsZW5iKSB7XG4gICAgcmV0dXJuIGV2ZXJ5QXV4MihhLCBiLCAwLCBwLCBsZW5hKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXEoYSwgYiwgcCkge1xuICByZXR1cm4gZXFVKGEsIGIsIEN1cnJ5Ll9fMihwKSk7XG59XG5cbmZ1bmN0aW9uIGNtcFUoYSwgYiwgcCkge1xuICB2YXIgbGVuYSA9IGEubGVuZ3RoO1xuICB2YXIgbGVuYiA9IGIubGVuZ3RoO1xuICBpZiAobGVuYSA+IGxlbmIpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmIChsZW5hIDwgbGVuYikge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2kgPSAwO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBpID0gX2k7XG4gICAgICBpZiAoaSA9PT0gbGVuYSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIHZhciBjID0gcChhW2ldLCBiW2ldKTtcbiAgICAgIGlmIChjICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfVxuICAgICAgX2kgPSBpICsgMSB8IDA7XG4gICAgICBjb250aW51ZSA7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbXAoYSwgYiwgcCkge1xuICByZXR1cm4gY21wVShhLCBiLCBDdXJyeS5fXzIocCkpO1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb25VKGEsIGYpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgaiA9IDA7XG4gIHZhciBhMSA9IG5ldyBBcnJheShsKTtcbiAgdmFyIGEyID0gbmV3IEFycmF5KGwpO1xuICBmb3IodmFyIGlpID0gMDsgaWkgPCBsOyArK2lpKXtcbiAgICB2YXIgdiA9IGFbaWldO1xuICAgIGlmIChmKHYpKSB7XG4gICAgICBhMVtpXSA9IHY7XG4gICAgICBpID0gaSArIDEgfCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBhMltqXSA9IHY7XG4gICAgICBqID0gaiArIDEgfCAwO1xuICAgIH1cbiAgfVxuICBhMS5sZW5ndGggPSBpO1xuICBhMi5sZW5ndGggPSBqO1xuICByZXR1cm4gW1xuICAgICAgICAgIGExLFxuICAgICAgICAgIGEyXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIHBhcnRpdGlvbihhLCBmKSB7XG4gIHJldHVybiBwYXJ0aXRpb25VKGEsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIHVuemlwKGEpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIGExID0gbmV3IEFycmF5KGwpO1xuICB2YXIgYTIgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHZhciBtYXRjaCA9IGFbaV07XG4gICAgYTFbaV0gPSBtYXRjaFswXTtcbiAgICBhMltpXSA9IG1hdGNoWzFdO1xuICB9XG4gIHJldHVybiBbXG4gICAgICAgICAgYTEsXG4gICAgICAgICAgYTJcbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gam9pbldpdGhVKGEsIHNlcCwgdG9TdHJpbmcpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgaWYgKGwgPT09IDApIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gbCAtIDEgfCAwO1xuICB2YXIgX2kgPSAwO1xuICB2YXIgX3JlcyA9IFwiXCI7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcmVzID0gX3JlcztcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmIChpID09PSBsYXN0SW5kZXgpIHtcbiAgICAgIHJldHVybiByZXMgKyB0b1N0cmluZyhhW2ldKTtcbiAgICB9XG4gICAgX3JlcyA9IHJlcyArICh0b1N0cmluZyhhW2ldKSArIHNlcCk7XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBqb2luV2l0aChhLCBzZXAsIHRvU3RyaW5nKSB7XG4gIHJldHVybiBqb2luV2l0aFUoYSwgc2VwLCBDdXJyeS5fXzEodG9TdHJpbmcpKTtcbn1cblxuZXhwb3J0IHtcbiAgZ2V0ICxcbiAgZ2V0RXhuICxcbiAgc2V0ICxcbiAgc2V0RXhuICxcbiAgc2h1ZmZsZUluUGxhY2UgLFxuICBzaHVmZmxlICxcbiAgcmV2ZXJzZUluUGxhY2UgLFxuICByZXZlcnNlICxcbiAgbWFrZSAsXG4gIHJhbmdlICxcbiAgcmFuZ2VCeSAsXG4gIG1ha2VCeVUgLFxuICBtYWtlQnkgLFxuICBtYWtlQnlBbmRTaHVmZmxlVSAsXG4gIG1ha2VCeUFuZFNodWZmbGUgLFxuICB6aXAgLFxuICB6aXBCeVUgLFxuICB6aXBCeSAsXG4gIHVuemlwICxcbiAgY29uY2F0ICxcbiAgY29uY2F0TWFueSAsXG4gIHNsaWNlICxcbiAgc2xpY2VUb0VuZCAsXG4gIGZpbGwgLFxuICBibGl0ICxcbiAgYmxpdFVuc2FmZSAsXG4gIGZvckVhY2hVICxcbiAgZm9yRWFjaCAsXG4gIG1hcFUgLFxuICBtYXAgLFxuICBnZXRCeVUgLFxuICBnZXRCeSAsXG4gIGdldEluZGV4QnlVICxcbiAgZ2V0SW5kZXhCeSAsXG4gIGtlZXBVICxcbiAga2VlcCAsXG4gIGtlZXBXaXRoSW5kZXhVICxcbiAga2VlcFdpdGhJbmRleCAsXG4gIGtlZXBNYXBVICxcbiAga2VlcE1hcCAsXG4gIGZvckVhY2hXaXRoSW5kZXhVICxcbiAgZm9yRWFjaFdpdGhJbmRleCAsXG4gIG1hcFdpdGhJbmRleFUgLFxuICBtYXBXaXRoSW5kZXggLFxuICBwYXJ0aXRpb25VICxcbiAgcGFydGl0aW9uICxcbiAgcmVkdWNlVSAsXG4gIHJlZHVjZSAsXG4gIHJlZHVjZVJldmVyc2VVICxcbiAgcmVkdWNlUmV2ZXJzZSAsXG4gIHJlZHVjZVJldmVyc2UyVSAsXG4gIHJlZHVjZVJldmVyc2UyICxcbiAgcmVkdWNlV2l0aEluZGV4VSAsXG4gIHJlZHVjZVdpdGhJbmRleCAsXG4gIGpvaW5XaXRoVSAsXG4gIGpvaW5XaXRoICxcbiAgc29tZVUgLFxuICBzb21lICxcbiAgZXZlcnlVICxcbiAgZXZlcnkgLFxuICBldmVyeTJVICxcbiAgZXZlcnkyICxcbiAgc29tZTJVICxcbiAgc29tZTIgLFxuICBjbXBVICxcbiAgY21wICxcbiAgZXFVICxcbiAgZXEgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQ3VycnkgZnJvbSBcIi4vY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfQXJyYXkgZnJvbSBcIi4vYmVsdF9BcnJheS5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vcHRpb24gZnJvbSBcIi4vY2FtbF9vcHRpb24uanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfU29ydEFycmF5IGZyb20gXCIuL2JlbHRfU29ydEFycmF5LmpzXCI7XG5cbmZ1bmN0aW9uIGhlYWQoeCkge1xuICBpZiAoeCkge1xuICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKHguaGQpO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBoZWFkRXhuKHgpIHtcbiAgaWYgKHgpIHtcbiAgICByZXR1cm4geC5oZDtcbiAgfVxuICB0aHJvdyB7XG4gICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICB9O1xufVxuXG5mdW5jdGlvbiB0YWlsKHgpIHtcbiAgaWYgKHgpIHtcbiAgICByZXR1cm4geC50bDtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gdGFpbEV4bih4KSB7XG4gIGlmICh4KSB7XG4gICAgcmV0dXJuIHgudGw7XG4gIH1cbiAgdGhyb3cge1xuICAgICAgICBSRV9FWE5fSUQ6IFwiTm90X2ZvdW5kXCIsXG4gICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgfTtcbn1cblxuZnVuY3Rpb24gYWRkKHhzLCB4KSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgaGQ6IHgsXG4gICAgICAgICAgdGw6IHhzXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldCh4LCBuKSB7XG4gIGlmIChuIDwgMCkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgdmFyIF94ID0geDtcbiAgICB2YXIgX24gPSBuO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBuJDEgPSBfbjtcbiAgICAgIHZhciB4JDEgPSBfeDtcbiAgICAgIGlmICgheCQxKSB7XG4gICAgICAgIHJldHVybiA7XG4gICAgICB9XG4gICAgICBpZiAobiQxID09PSAwKSB7XG4gICAgICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKHgkMS5oZCk7XG4gICAgICB9XG4gICAgICBfbiA9IG4kMSAtIDEgfCAwO1xuICAgICAgX3ggPSB4JDEudGw7XG4gICAgICBjb250aW51ZSA7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFeG4oeCwgbikge1xuICBpZiAobiA8IDApIHtcbiAgICB0aHJvdyB7XG4gICAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIHZhciBfeCA9IHg7XG4gIHZhciBfbiA9IG47XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbiQxID0gX247XG4gICAgdmFyIHgkMSA9IF94O1xuICAgIGlmICh4JDEpIHtcbiAgICAgIGlmIChuJDEgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHgkMS5oZDtcbiAgICAgIH1cbiAgICAgIF9uID0gbiQxIC0gMSB8IDA7XG4gICAgICBfeCA9IHgkMS50bDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uQXV4KHAsIF9jZWxsLCBfcHJlY1gsIF9wcmVjWSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWNZID0gX3ByZWNZO1xuICAgIHZhciBwcmVjWCA9IF9wcmVjWDtcbiAgICB2YXIgY2VsbCA9IF9jZWxsO1xuICAgIGlmICghY2VsbCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIHQgPSBjZWxsLnRsO1xuICAgIHZhciBoID0gY2VsbC5oZDtcbiAgICB2YXIgbmV4dCA9IHtcbiAgICAgIGhkOiBoLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgaWYgKHAoaCkpIHtcbiAgICAgIHByZWNYLnRsID0gbmV4dDtcbiAgICAgIF9wcmVjWCA9IG5leHQ7XG4gICAgICBfY2VsbCA9IHQ7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIHByZWNZLnRsID0gbmV4dDtcbiAgICBfcHJlY1kgPSBuZXh0O1xuICAgIF9jZWxsID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNwbGl0QXV4KF9jZWxsLCBfcHJlY1gsIF9wcmVjWSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWNZID0gX3ByZWNZO1xuICAgIHZhciBwcmVjWCA9IF9wcmVjWDtcbiAgICB2YXIgY2VsbCA9IF9jZWxsO1xuICAgIGlmICghY2VsbCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIG1hdGNoID0gY2VsbC5oZDtcbiAgICB2YXIgbmV4dEEgPSB7XG4gICAgICBoZDogbWF0Y2hbMF0sXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICB2YXIgbmV4dEIgPSB7XG4gICAgICBoZDogbWF0Y2hbMV0sXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjWC50bCA9IG5leHRBO1xuICAgIHByZWNZLnRsID0gbmV4dEI7XG4gICAgX3ByZWNZID0gbmV4dEI7XG4gICAgX3ByZWNYID0gbmV4dEE7XG4gICAgX2NlbGwgPSBjZWxsLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eENvbnQoX2NlbGxYLCBfcHJlYykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIHByZWM7XG4gICAgfVxuICAgIHZhciBuZXh0ID0ge1xuICAgICAgaGQ6IGNlbGxYLmhkLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IG5leHQ7XG4gICAgX3ByZWMgPSBuZXh0O1xuICAgIF9jZWxsWCA9IGNlbGxYLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eFdpdEZpbHRlcihmLCBfY2VsbFgsIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgdCA9IGNlbGxYLnRsO1xuICAgIHZhciBoID0gY2VsbFguaGQ7XG4gICAgaWYgKGYoaCkpIHtcbiAgICAgIHZhciBuZXh0ID0ge1xuICAgICAgICBoZDogaCxcbiAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgfTtcbiAgICAgIHByZWMudGwgPSBuZXh0O1xuICAgICAgX3ByZWMgPSBuZXh0O1xuICAgICAgX2NlbGxYID0gdDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgX2NlbGxYID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvcHlBdXhXaXRoRmlsdGVySW5kZXgoZiwgX2NlbGxYLCBfcHJlYywgX2kpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIHQgPSBjZWxsWC50bDtcbiAgICB2YXIgaCA9IGNlbGxYLmhkO1xuICAgIGlmIChmKGgsIGkpKSB7XG4gICAgICB2YXIgbmV4dCA9IHtcbiAgICAgICAgaGQ6IGgsXG4gICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgIH07XG4gICAgICBwcmVjLnRsID0gbmV4dDtcbiAgICAgIF9pID0gaSArIDEgfCAwO1xuICAgICAgX3ByZWMgPSBuZXh0O1xuICAgICAgX2NlbGxYID0gdDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgX2NlbGxYID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvcHlBdXhXaXRGaWx0ZXJNYXAoZiwgX2NlbGxYLCBfcHJlYykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIHQgPSBjZWxsWC50bDtcbiAgICB2YXIgaCA9IGYoY2VsbFguaGQpO1xuICAgIGlmIChoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBuZXh0ID0ge1xuICAgICAgICBoZDogQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbihoKSxcbiAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgfTtcbiAgICAgIHByZWMudGwgPSBuZXh0O1xuICAgICAgX3ByZWMgPSBuZXh0O1xuICAgICAgX2NlbGxYID0gdDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgX2NlbGxYID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFzc29jQXV4V2l0aE1hcChfY2VsbFgsIHgsIF9wcmVjLCBmKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciB0ID0gY2VsbFgudGw7XG4gICAgdmFyIGggPSBjZWxsWC5oZDtcbiAgICBpZiAoZihoWzBdLCB4KSkge1xuICAgICAgcHJlYy50bCA9IHQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogaCxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWMudGwgPSBuZXh0O1xuICAgIF9wcmVjID0gbmV4dDtcbiAgICBfY2VsbFggPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2V0QXNzb2NBdXhXaXRoTWFwKF9jZWxsWCwgeCwgaywgX3ByZWMsIGVxKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciB0ID0gY2VsbFgudGw7XG4gICAgdmFyIGggPSBjZWxsWC5oZDtcbiAgICBpZiAoZXEoaFswXSwgeCkpIHtcbiAgICAgIHByZWMudGwgPSB7XG4gICAgICAgIGhkOiBbXG4gICAgICAgICAgeCxcbiAgICAgICAgICBrXG4gICAgICAgIF0sXG4gICAgICAgIHRsOiB0XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBuZXh0ID0ge1xuICAgICAgaGQ6IGgsXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gbmV4dDtcbiAgICBfcHJlYyA9IG5leHQ7XG4gICAgX2NlbGxYID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvcHlBdXhXaXRoTWFwKF9jZWxsWCwgX3ByZWMsIGYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciBuZXh0ID0ge1xuICAgICAgaGQ6IGYoY2VsbFguaGQpLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IG5leHQ7XG4gICAgX3ByZWMgPSBuZXh0O1xuICAgIF9jZWxsWCA9IGNlbGxYLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gemlwQXV4KF9jZWxsWCwgX2NlbGxZLCBfcHJlYykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFkgPSBfY2VsbFk7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGlmICghY2VsbFkpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciBuZXh0ID0ge1xuICAgICAgaGQ6IFtcbiAgICAgICAgY2VsbFguaGQsXG4gICAgICAgIGNlbGxZLmhkXG4gICAgICBdLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IG5leHQ7XG4gICAgX3ByZWMgPSBuZXh0O1xuICAgIF9jZWxsWSA9IGNlbGxZLnRsO1xuICAgIF9jZWxsWCA9IGNlbGxYLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eFdpdGhNYXAyKGYsIF9jZWxsWCwgX2NlbGxZLCBfcHJlYykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFkgPSBfY2VsbFk7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGlmICghY2VsbFkpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciBuZXh0ID0ge1xuICAgICAgaGQ6IGYoY2VsbFguaGQsIGNlbGxZLmhkKSxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWMudGwgPSBuZXh0O1xuICAgIF9wcmVjID0gbmV4dDtcbiAgICBfY2VsbFkgPSBjZWxsWS50bDtcbiAgICBfY2VsbFggPSBjZWxsWC50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvcHlBdXhXaXRoTWFwSShmLCBfaSwgX2NlbGxYLCBfcHJlYykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgbmV4dCA9IHtcbiAgICAgIGhkOiBmKGksIGNlbGxYLmhkKSxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWMudGwgPSBuZXh0O1xuICAgIF9wcmVjID0gbmV4dDtcbiAgICBfY2VsbFggPSBjZWxsWC50bDtcbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRha2VBdXgoX24sIF9jZWxsLCBfcHJlYykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbCA9IF9jZWxsO1xuICAgIHZhciBuID0gX247XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWNlbGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGNlbGwkMSA9IHtcbiAgICAgIGhkOiBjZWxsLmhkLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IGNlbGwkMTtcbiAgICBfcHJlYyA9IGNlbGwkMTtcbiAgICBfY2VsbCA9IGNlbGwudGw7XG4gICAgX24gPSBuIC0gMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzcGxpdEF0QXV4KF9uLCBfY2VsbCwgX3ByZWMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGwgPSBfY2VsbDtcbiAgICB2YXIgbiA9IF9uO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICByZXR1cm4gY2VsbDtcbiAgICB9XG4gICAgaWYgKCFjZWxsKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgY2VsbCQxID0ge1xuICAgICAgaGQ6IGNlbGwuaGQsXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gY2VsbCQxO1xuICAgIF9wcmVjID0gY2VsbCQxO1xuICAgIF9jZWxsID0gY2VsbC50bDtcbiAgICBfbiA9IG4gLSAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRha2UobHN0LCBuKSB7XG4gIGlmIChuIDwgMCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgaWYgKG4gPT09IDApIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIGlmICghbHN0KSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgY2VsbCA9IHtcbiAgICBoZDogbHN0LmhkLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIGhhcyA9IHRha2VBdXgobiAtIDEgfCAwLCBsc3QudGwsIGNlbGwpO1xuICBpZiAoaGFzKSB7XG4gICAgcmV0dXJuIGNlbGw7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGRyb3AobHN0LCBuKSB7XG4gIGlmIChuIDwgMCkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgdmFyIF9sID0gbHN0O1xuICAgIHZhciBfbiA9IG47XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIG4kMSA9IF9uO1xuICAgICAgdmFyIGwgPSBfbDtcbiAgICAgIGlmIChuJDEgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGw7XG4gICAgICB9XG4gICAgICBpZiAoIWwpIHtcbiAgICAgICAgcmV0dXJuIDtcbiAgICAgIH1cbiAgICAgIF9uID0gbiQxIC0gMSB8IDA7XG4gICAgICBfbCA9IGwudGw7XG4gICAgICBjb250aW51ZSA7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzcGxpdEF0KGxzdCwgbikge1xuICBpZiAobiA8IDApIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIGlmIChuID09PSAwKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC8qIFtdICovMCxcbiAgICAgICAgICAgIGxzdFxuICAgICAgICAgIF07XG4gIH1cbiAgaWYgKCFsc3QpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiBsc3QuaGQsXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgcmVzdCA9IHNwbGl0QXRBdXgobiAtIDEgfCAwLCBsc3QudGwsIGNlbGwpO1xuICBpZiAocmVzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGNlbGwsXG4gICAgICAgICAgICByZXN0XG4gICAgICAgICAgXTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gY29uY2F0KHhzLCB5cykge1xuICBpZiAoIXhzKSB7XG4gICAgcmV0dXJuIHlzO1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiB4cy5oZCxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIGNvcHlBdXhDb250KHhzLnRsLCBjZWxsKS50bCA9IHlzO1xuICByZXR1cm4gY2VsbDtcbn1cblxuZnVuY3Rpb24gbWFwVSh4cywgZikge1xuICBpZiAoIXhzKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICB2YXIgY2VsbCA9IHtcbiAgICBoZDogZih4cy5oZCksXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICBjb3B5QXV4V2l0aE1hcCh4cy50bCwgY2VsbCwgZik7XG4gIHJldHVybiBjZWxsO1xufVxuXG5mdW5jdGlvbiBtYXAoeHMsIGYpIHtcbiAgcmV0dXJuIG1hcFUoeHMsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIHppcEJ5VShsMSwgbDIsIGYpIHtcbiAgaWYgKCFsMSkge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgaWYgKCFsMikge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IGYobDEuaGQsIGwyLmhkKSxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIGNvcHlBdXhXaXRoTWFwMihmLCBsMS50bCwgbDIudGwsIGNlbGwpO1xuICByZXR1cm4gY2VsbDtcbn1cblxuZnVuY3Rpb24gemlwQnkobDEsIGwyLCBmKSB7XG4gIHJldHVybiB6aXBCeVUobDEsIGwyLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiBtYXBXaXRoSW5kZXhVKHhzLCBmKSB7XG4gIGlmICgheHMpIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiBmKDAsIHhzLmhkKSxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIGNvcHlBdXhXaXRoTWFwSShmLCAxLCB4cy50bCwgY2VsbCk7XG4gIHJldHVybiBjZWxsO1xufVxuXG5mdW5jdGlvbiBtYXBXaXRoSW5kZXgoeHMsIGYpIHtcbiAgcmV0dXJuIG1hcFdpdGhJbmRleFUoeHMsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VCeVUobiwgZikge1xuICBpZiAobiA8PSAwKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICB2YXIgaGVhZFggPSB7XG4gICAgaGQ6IGYoMCksXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgY3VyID0gaGVhZFg7XG4gIHZhciBpID0gMTtcbiAgd2hpbGUoaSA8IG4pIHtcbiAgICB2YXIgdiA9IHtcbiAgICAgIGhkOiBmKGkpLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgY3VyLnRsID0gdjtcbiAgICBjdXIgPSB2O1xuICAgIGkgPSBpICsgMSB8IDA7XG4gIH07XG4gIHJldHVybiBoZWFkWDtcbn1cblxuZnVuY3Rpb24gbWFrZUJ5KG4sIGYpIHtcbiAgcmV0dXJuIG1ha2VCeVUobiwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gbWFrZShuLCB2KSB7XG4gIGlmIChuIDw9IDApIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIHZhciBoZWFkWCA9IHtcbiAgICBoZDogdixcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciBjdXIgPSBoZWFkWDtcbiAgdmFyIGkgPSAxO1xuICB3aGlsZShpIDwgbikge1xuICAgIHZhciB2JDEgPSB7XG4gICAgICBoZDogdixcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIGN1ci50bCA9IHYkMTtcbiAgICBjdXIgPSB2JDE7XG4gICAgaSA9IGkgKyAxIHwgMDtcbiAgfTtcbiAgcmV0dXJuIGhlYWRYO1xufVxuXG5mdW5jdGlvbiBsZW5ndGgoeHMpIHtcbiAgdmFyIF94ID0geHM7XG4gIHZhciBfYWNjID0gMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIHZhciB4ID0gX3g7XG4gICAgaWYgKCF4KSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICBfYWNjID0gYWNjICsgMSB8IDA7XG4gICAgX3ggPSB4LnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsbEF1eChhcnIsIF9pLCBfeCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHggPSBfeDtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmICgheCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgYXJyW2ldID0geC5oZDtcbiAgICBfeCA9IHgudGw7XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXkoYSkge1xuICB2YXIgX2kgPSBhLmxlbmd0aCAtIDEgfCAwO1xuICB2YXIgX3JlcyA9IC8qIFtdICovMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciByZXMgPSBfcmVzO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBfcmVzID0ge1xuICAgICAgaGQ6IGFbaV0sXG4gICAgICB0bDogcmVzXG4gICAgfTtcbiAgICBfaSA9IGkgLSAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkoeCkge1xuICB2YXIgbGVuID0gbGVuZ3RoKHgpO1xuICB2YXIgYXJyID0gbmV3IEFycmF5KGxlbik7XG4gIGZpbGxBdXgoYXJyLCAwLCB4KTtcbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSh4cykge1xuICB2YXIgdiA9IHRvQXJyYXkoeHMpO1xuICBCZWx0X0FycmF5LnNodWZmbGVJblBsYWNlKHYpO1xuICByZXR1cm4gZnJvbUFycmF5KHYpO1xufVxuXG5mdW5jdGlvbiByZXZlcnNlQ29uY2F0KF9sMSwgX2wyKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIHJldHVybiBsMjtcbiAgICB9XG4gICAgX2wyID0ge1xuICAgICAgaGQ6IGwxLmhkLFxuICAgICAgdGw6IGwyXG4gICAgfTtcbiAgICBfbDEgPSBsMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJldmVyc2UobCkge1xuICByZXR1cm4gcmV2ZXJzZUNvbmNhdChsLCAvKiBbXSAqLzApO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuQXV4KF9wcmVjLCBfeHMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIGlmICh4cykge1xuICAgICAgX3hzID0geHMudGw7XG4gICAgICBfcHJlYyA9IGNvcHlBdXhDb250KHhzLmhkLCBwcmVjKTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgcHJlYy50bCA9IC8qIFtdICovMDtcbiAgICByZXR1cm4gO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuKF94cykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiAvKiBbXSAqLzA7XG4gICAgfVxuICAgIHZhciBtYXRjaCA9IHhzLmhkO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgdmFyIGNlbGwgPSB7XG4gICAgICAgIGhkOiBtYXRjaC5oZCxcbiAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgfTtcbiAgICAgIGZsYXR0ZW5BdXgoY29weUF1eENvbnQobWF0Y2gudGwsIGNlbGwpLCB4cy50bCk7XG4gICAgICByZXR1cm4gY2VsbDtcbiAgICB9XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb25jYXRNYW55KHhzKSB7XG4gIHZhciBsZW4gPSB4cy5sZW5ndGg7XG4gIGlmIChsZW4gPT09IDEpIHtcbiAgICByZXR1cm4geHNbMF07XG4gIH1cbiAgaWYgKGxlbiA9PT0gMCkge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgdmFyIGxlbiQxID0geHMubGVuZ3RoO1xuICB2YXIgdiA9IHhzW2xlbiQxIC0gMSB8IDBdO1xuICBmb3IodmFyIGkgPSBsZW4kMSAtIDIgfCAwOyBpID49IDA7IC0taSl7XG4gICAgdiA9IGNvbmNhdCh4c1tpXSwgdik7XG4gIH1cbiAgcmV0dXJuIHY7XG59XG5cbmZ1bmN0aW9uIG1hcFJldmVyc2VVKGwsIGYpIHtcbiAgdmFyIF9hY2N1ID0gLyogW10gKi8wO1xuICB2YXIgX3hzID0gbDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICB2YXIgYWNjdSA9IF9hY2N1O1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBfYWNjdSA9IHtcbiAgICAgIGhkOiBmKHhzLmhkKSxcbiAgICAgIHRsOiBhY2N1XG4gICAgfTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcFJldmVyc2UobCwgZikge1xuICByZXR1cm4gbWFwUmV2ZXJzZVUobCwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFUoX3hzLCBmKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgZih4cy5oZCk7XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoKHhzLCBmKSB7XG4gIHJldHVybiBmb3JFYWNoVSh4cywgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFdpdGhJbmRleFUobCwgZikge1xuICB2YXIgX3hzID0gbDtcbiAgdmFyIF9pID0gMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGYoaSwgeHMuaGQpO1xuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIF94cyA9IHhzLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFdpdGhJbmRleChsLCBmKSB7XG4gIHJldHVybiBmb3JFYWNoV2l0aEluZGV4VShsLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VVKF9sLCBfYWNjdSwgZikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGFjY3UgPSBfYWNjdTtcbiAgICB2YXIgbCA9IF9sO1xuICAgIGlmICghbCkge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIF9hY2N1ID0gZihhY2N1LCBsLmhkKTtcbiAgICBfbCA9IGwudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2UobCwgYWNjdSwgZikge1xuICByZXR1cm4gcmVkdWNlVShsLCBhY2N1LCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlVW5zYWZlVShsLCBhY2N1LCBmKSB7XG4gIGlmIChsKSB7XG4gICAgcmV0dXJuIGYocmVkdWNlUmV2ZXJzZVVuc2FmZVUobC50bCwgYWNjdSwgZiksIGwuaGQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhY2N1O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2VVKGwsIGFjYywgZikge1xuICB2YXIgbGVuID0gbGVuZ3RoKGwpO1xuICBpZiAobGVuIDwgMTAwMCkge1xuICAgIHJldHVybiByZWR1Y2VSZXZlcnNlVW5zYWZlVShsLCBhY2MsIGYpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBCZWx0X0FycmF5LnJlZHVjZVJldmVyc2VVKHRvQXJyYXkobCksIGFjYywgZik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZShsLCBhY2N1LCBmKSB7XG4gIHJldHVybiByZWR1Y2VSZXZlcnNlVShsLCBhY2N1LCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VXaXRoSW5kZXhVKGwsIGFjYywgZikge1xuICB2YXIgX2wgPSBsO1xuICB2YXIgX2FjYyA9IGFjYztcbiAgdmFyIF9pID0gMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgdmFyIGFjYyQxID0gX2FjYztcbiAgICB2YXIgbCQxID0gX2w7XG4gICAgaWYgKCFsJDEpIHtcbiAgICAgIHJldHVybiBhY2MkMTtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgX2FjYyA9IGYoYWNjJDEsIGwkMS5oZCwgaSk7XG4gICAgX2wgPSBsJDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VXaXRoSW5kZXgobCwgYWNjLCBmKSB7XG4gIHJldHVybiByZWR1Y2VXaXRoSW5kZXhVKGwsIGFjYywgQ3VycnkuX18zKGYpKTtcbn1cblxuZnVuY3Rpb24gbWFwUmV2ZXJzZTJVKGwxLCBsMiwgZikge1xuICB2YXIgX2wxID0gbDE7XG4gIHZhciBfbDIgPSBsMjtcbiAgdmFyIF9hY2N1ID0gLyogW10gKi8wO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGFjY3UgPSBfYWNjdTtcbiAgICB2YXIgbDIkMSA9IF9sMjtcbiAgICB2YXIgbDEkMSA9IF9sMTtcbiAgICBpZiAoIWwxJDEpIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgICBpZiAoIWwyJDEpIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgICBfYWNjdSA9IHtcbiAgICAgIGhkOiBmKGwxJDEuaGQsIGwyJDEuaGQpLFxuICAgICAgdGw6IGFjY3VcbiAgICB9O1xuICAgIF9sMiA9IGwyJDEudGw7XG4gICAgX2wxID0gbDEkMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcFJldmVyc2UyKGwxLCBsMiwgZikge1xuICByZXR1cm4gbWFwUmV2ZXJzZTJVKGwxLCBsMiwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaDJVKF9sMSwgX2wyLCBmKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGlmICghbDIpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGYobDEuaGQsIGwyLmhkKTtcbiAgICBfbDIgPSBsMi50bDtcbiAgICBfbDEgPSBsMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvckVhY2gyKGwxLCBsMiwgZikge1xuICByZXR1cm4gZm9yRWFjaDJVKGwxLCBsMiwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlMlUoX2wxLCBfbDIsIF9hY2N1LCBmKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYWNjdSA9IF9hY2N1O1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKCFsMSkge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIGlmICghbDIpIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgICBfYWNjdSA9IGYoYWNjdSwgbDEuaGQsIGwyLmhkKTtcbiAgICBfbDIgPSBsMi50bDtcbiAgICBfbDEgPSBsMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZTIobDEsIGwyLCBhY2MsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZTJVKGwxLCBsMiwgYWNjLCBDdXJyeS5fXzMoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlMlVuc2FmZVUobDEsIGwyLCBhY2N1LCBmKSB7XG4gIGlmIChsMSAmJiBsMikge1xuICAgIHJldHVybiBmKHJlZHVjZVJldmVyc2UyVW5zYWZlVShsMS50bCwgbDIudGwsIGFjY3UsIGYpLCBsMS5oZCwgbDIuaGQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhY2N1O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2UyVShsMSwgbDIsIGFjYywgZikge1xuICB2YXIgbGVuID0gbGVuZ3RoKGwxKTtcbiAgaWYgKGxlbiA8IDEwMDApIHtcbiAgICByZXR1cm4gcmVkdWNlUmV2ZXJzZTJVbnNhZmVVKGwxLCBsMiwgYWNjLCBmKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQmVsdF9BcnJheS5yZWR1Y2VSZXZlcnNlMlUodG9BcnJheShsMSksIHRvQXJyYXkobDIpLCBhY2MsIGYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2UyKGwxLCBsMiwgYWNjLCBmKSB7XG4gIHJldHVybiByZWR1Y2VSZXZlcnNlMlUobDEsIGwyLCBhY2MsIEN1cnJ5Ll9fMyhmKSk7XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5VShfeHMsIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFwKHhzLmhkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5KHhzLCBwKSB7XG4gIHJldHVybiBldmVyeVUoeHMsIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIHNvbWVVKF94cywgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHAoeHMuaGQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzb21lKHhzLCBwKSB7XG4gIHJldHVybiBzb21lVSh4cywgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gZXZlcnkyVShfbDEsIF9sMiwgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwyID0gX2wyO1xuICAgIHZhciBsMSA9IF9sMTtcbiAgICBpZiAoIWwxKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghcChsMS5oZCwgbDIuaGQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF9sMiA9IGwyLnRsO1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXZlcnkyKGwxLCBsMiwgcCkge1xuICByZXR1cm4gZXZlcnkyVShsMSwgbDIsIEN1cnJ5Ll9fMihwKSk7XG59XG5cbmZ1bmN0aW9uIGNtcEJ5TGVuZ3RoKF9sMSwgX2wyKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIGlmIChsMikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIF9sMiA9IGwyLnRsO1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY21wVShfbDEsIF9sMiwgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwyID0gX2wyO1xuICAgIHZhciBsMSA9IF9sMTtcbiAgICBpZiAoIWwxKSB7XG4gICAgICBpZiAobDIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbDIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICB2YXIgYyA9IHAobDEuaGQsIGwyLmhkKTtcbiAgICBpZiAoYyAhPT0gMCkge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIF9sMiA9IGwyLnRsO1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY21wKGwxLCBsMiwgZikge1xuICByZXR1cm4gY21wVShsMSwgbDIsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIGVxVShfbDEsIF9sMiwgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwyID0gX2wyO1xuICAgIHZhciBsMSA9IF9sMTtcbiAgICBpZiAoIWwxKSB7XG4gICAgICBpZiAobDIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbDIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFwKGwxLmhkLCBsMi5oZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX2wyID0gbDIudGw7XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBlcShsMSwgbDIsIGYpIHtcbiAgcmV0dXJuIGVxVShsMSwgbDIsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHNvbWUyVShfbDEsIF9sMiwgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwyID0gX2wyO1xuICAgIHZhciBsMSA9IF9sMTtcbiAgICBpZiAoIWwxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghbDIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHAobDEuaGQsIGwyLmhkKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF9sMiA9IGwyLnRsO1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc29tZTIobDEsIGwyLCBwKSB7XG4gIHJldHVybiBzb21lMlUobDEsIGwyLCBDdXJyeS5fXzIocCkpO1xufVxuXG5mdW5jdGlvbiBoYXNVKF94cywgeCwgZXEpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChlcSh4cy5oZCwgeCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGhhcyh4cywgeCwgZXEpIHtcbiAgcmV0dXJuIGhhc1UoeHMsIHgsIEN1cnJ5Ll9fMihlcSkpO1xufVxuXG5mdW5jdGlvbiBnZXRBc3NvY1UoX3hzLCB4LCBlcSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciBtYXRjaCA9IHhzLmhkO1xuICAgIGlmIChlcShtYXRjaFswXSwgeCkpIHtcbiAgICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKG1hdGNoWzFdKTtcbiAgICB9XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRBc3NvYyh4cywgeCwgZXEpIHtcbiAgcmV0dXJuIGdldEFzc29jVSh4cywgeCwgQ3VycnkuX18yKGVxKSk7XG59XG5cbmZ1bmN0aW9uIGhhc0Fzc29jVShfeHMsIHgsIGVxKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZXEoeHMuaGRbMF0sIHgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBoYXNBc3NvYyh4cywgeCwgZXEpIHtcbiAgcmV0dXJuIGhhc0Fzc29jVSh4cywgeCwgQ3VycnkuX18yKGVxKSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFzc29jVSh4cywgeCwgZXEpIHtcbiAgaWYgKCF4cykge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgdmFyIGwgPSB4cy50bDtcbiAgdmFyIHBhaXIgPSB4cy5oZDtcbiAgaWYgKGVxKHBhaXJbMF0sIHgpKSB7XG4gICAgcmV0dXJuIGw7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IHBhaXIsXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgcmVtb3ZlZCA9IHJlbW92ZUFzc29jQXV4V2l0aE1hcChsLCB4LCBjZWxsLCBlcSk7XG4gIGlmIChyZW1vdmVkKSB7XG4gICAgcmV0dXJuIGNlbGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHhzO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFzc29jKHhzLCB4LCBlcSkge1xuICByZXR1cm4gcmVtb3ZlQXNzb2NVKHhzLCB4LCBDdXJyeS5fXzIoZXEpKTtcbn1cblxuZnVuY3Rpb24gc2V0QXNzb2NVKHhzLCB4LCBrLCBlcSkge1xuICBpZiAoIXhzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiBbXG4gICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgIGtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgfTtcbiAgfVxuICB2YXIgbCA9IHhzLnRsO1xuICB2YXIgcGFpciA9IHhzLmhkO1xuICBpZiAoZXEocGFpclswXSwgeCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IFtcbiAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAga1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRsOiBsXG4gICAgICAgICAgfTtcbiAgfVxuICB2YXIgY2VsbCA9IHtcbiAgICBoZDogcGFpcixcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciByZXBsYWNlZCA9IHNldEFzc29jQXV4V2l0aE1hcChsLCB4LCBrLCBjZWxsLCBlcSk7XG4gIGlmIChyZXBsYWNlZCkge1xuICAgIHJldHVybiBjZWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZDogW1xuICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICBrXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdGw6IHhzXG4gICAgICAgICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRBc3NvYyh4cywgeCwgaywgZXEpIHtcbiAgcmV0dXJuIHNldEFzc29jVSh4cywgeCwgaywgQ3VycnkuX18yKGVxKSk7XG59XG5cbmZ1bmN0aW9uIHNvcnRVKHhzLCBjbXApIHtcbiAgdmFyIGFyciA9IHRvQXJyYXkoeHMpO1xuICBCZWx0X1NvcnRBcnJheS5zdGFibGVTb3J0SW5QbGFjZUJ5VShhcnIsIGNtcCk7XG4gIHJldHVybiBmcm9tQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gc29ydCh4cywgY21wKSB7XG4gIHJldHVybiBzb3J0VSh4cywgQ3VycnkuX18yKGNtcCkpO1xufVxuXG5mdW5jdGlvbiBnZXRCeVUoX3hzLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIHggPSB4cy5oZDtcbiAgICBpZiAocCh4KSkge1xuICAgICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoeCk7XG4gICAgfVxuICAgIF94cyA9IHhzLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0QnkoeHMsIHApIHtcbiAgcmV0dXJuIGdldEJ5VSh4cywgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24ga2VlcFUoX3hzLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIC8qIFtdICovMDtcbiAgICB9XG4gICAgdmFyIHQgPSB4cy50bDtcbiAgICB2YXIgaCA9IHhzLmhkO1xuICAgIGlmIChwKGgpKSB7XG4gICAgICB2YXIgY2VsbCA9IHtcbiAgICAgICAgaGQ6IGgsXG4gICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgIH07XG4gICAgICBjb3B5QXV4V2l0RmlsdGVyKHAsIHQsIGNlbGwpO1xuICAgICAgcmV0dXJuIGNlbGw7XG4gICAgfVxuICAgIF94cyA9IHQ7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBrZWVwKHhzLCBwKSB7XG4gIHJldHVybiBrZWVwVSh4cywgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24ga2VlcFdpdGhJbmRleFUoeHMsIHApIHtcbiAgdmFyIF94cyA9IHhzO1xuICB2YXIgX2kgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICB2YXIgeHMkMSA9IF94cztcbiAgICBpZiAoIXhzJDEpIHtcbiAgICAgIHJldHVybiAvKiBbXSAqLzA7XG4gICAgfVxuICAgIHZhciB0ID0geHMkMS50bDtcbiAgICB2YXIgaCA9IHhzJDEuaGQ7XG4gICAgaWYgKHAoaCwgaSkpIHtcbiAgICAgIHZhciBjZWxsID0ge1xuICAgICAgICBoZDogaCxcbiAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgfTtcbiAgICAgIGNvcHlBdXhXaXRoRmlsdGVySW5kZXgocCwgdCwgY2VsbCwgaSArIDEgfCAwKTtcbiAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBfeHMgPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24ga2VlcFdpdGhJbmRleCh4cywgcCkge1xuICByZXR1cm4ga2VlcFdpdGhJbmRleFUoeHMsIEN1cnJ5Ll9fMihwKSk7XG59XG5cbmZ1bmN0aW9uIGtlZXBNYXBVKF94cywgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiAvKiBbXSAqLzA7XG4gICAgfVxuICAgIHZhciB0ID0geHMudGw7XG4gICAgdmFyIGggPSBwKHhzLmhkKTtcbiAgICBpZiAoaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgY2VsbCA9IHtcbiAgICAgICAgaGQ6IENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24oaCksXG4gICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgIH07XG4gICAgICBjb3B5QXV4V2l0RmlsdGVyTWFwKHAsIHQsIGNlbGwpO1xuICAgICAgcmV0dXJuIGNlbGw7XG4gICAgfVxuICAgIF94cyA9IHQ7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBrZWVwTWFwKHhzLCBwKSB7XG4gIHJldHVybiBrZWVwTWFwVSh4cywgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uVShsLCBwKSB7XG4gIGlmICghbCkge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICAvKiBbXSAqLzAsXG4gICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICBdO1xuICB9XG4gIHZhciBoID0gbC5oZDtcbiAgdmFyIG5leHRYID0ge1xuICAgIGhkOiBoLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIG5leHRZID0ge1xuICAgIGhkOiBoLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIGIgPSBwKGgpO1xuICBwYXJ0aXRpb25BdXgocCwgbC50bCwgbmV4dFgsIG5leHRZKTtcbiAgaWYgKGIpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgbmV4dFgsXG4gICAgICAgICAgICBuZXh0WS50bFxuICAgICAgICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG5leHRYLnRsLFxuICAgICAgICAgICAgbmV4dFlcbiAgICAgICAgICBdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnRpdGlvbihsLCBwKSB7XG4gIHJldHVybiBwYXJ0aXRpb25VKGwsIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIHVuemlwKHhzKSB7XG4gIGlmICgheHMpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgLyogW10gKi8wLFxuICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgXTtcbiAgfVxuICB2YXIgbWF0Y2ggPSB4cy5oZDtcbiAgdmFyIGNlbGxYID0ge1xuICAgIGhkOiBtYXRjaFswXSxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciBjZWxsWSA9IHtcbiAgICBoZDogbWF0Y2hbMV0sXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICBzcGxpdEF1eCh4cy50bCwgY2VsbFgsIGNlbGxZKTtcbiAgcmV0dXJuIFtcbiAgICAgICAgICBjZWxsWCxcbiAgICAgICAgICBjZWxsWVxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiB6aXAobDEsIGwyKSB7XG4gIGlmICghbDEpIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIGlmICghbDIpIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiBbXG4gICAgICBsMS5oZCxcbiAgICAgIGwyLmhkXG4gICAgXSxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHppcEF1eChsMS50bCwgbDIudGwsIGNlbGwpO1xuICByZXR1cm4gY2VsbDtcbn1cblxudmFyIHNpemUgPSBsZW5ndGg7XG5cbnZhciBmaWx0ZXIgPSBrZWVwO1xuXG52YXIgZmlsdGVyV2l0aEluZGV4ID0ga2VlcFdpdGhJbmRleDtcblxuZXhwb3J0IHtcbiAgbGVuZ3RoICxcbiAgc2l6ZSAsXG4gIGhlYWQgLFxuICBoZWFkRXhuICxcbiAgdGFpbCAsXG4gIHRhaWxFeG4gLFxuICBhZGQgLFxuICBnZXQgLFxuICBnZXRFeG4gLFxuICBtYWtlICxcbiAgbWFrZUJ5VSAsXG4gIG1ha2VCeSAsXG4gIHNodWZmbGUgLFxuICBkcm9wICxcbiAgdGFrZSAsXG4gIHNwbGl0QXQgLFxuICBjb25jYXQgLFxuICBjb25jYXRNYW55ICxcbiAgcmV2ZXJzZUNvbmNhdCAsXG4gIGZsYXR0ZW4gLFxuICBtYXBVICxcbiAgbWFwICxcbiAgemlwICxcbiAgemlwQnlVICxcbiAgemlwQnkgLFxuICBtYXBXaXRoSW5kZXhVICxcbiAgbWFwV2l0aEluZGV4ICxcbiAgZnJvbUFycmF5ICxcbiAgdG9BcnJheSAsXG4gIHJldmVyc2UgLFxuICBtYXBSZXZlcnNlVSAsXG4gIG1hcFJldmVyc2UgLFxuICBmb3JFYWNoVSAsXG4gIGZvckVhY2ggLFxuICBmb3JFYWNoV2l0aEluZGV4VSAsXG4gIGZvckVhY2hXaXRoSW5kZXggLFxuICByZWR1Y2VVICxcbiAgcmVkdWNlICxcbiAgcmVkdWNlV2l0aEluZGV4VSAsXG4gIHJlZHVjZVdpdGhJbmRleCAsXG4gIHJlZHVjZVJldmVyc2VVICxcbiAgcmVkdWNlUmV2ZXJzZSAsXG4gIG1hcFJldmVyc2UyVSAsXG4gIG1hcFJldmVyc2UyICxcbiAgZm9yRWFjaDJVICxcbiAgZm9yRWFjaDIgLFxuICByZWR1Y2UyVSAsXG4gIHJlZHVjZTIgLFxuICByZWR1Y2VSZXZlcnNlMlUgLFxuICByZWR1Y2VSZXZlcnNlMiAsXG4gIGV2ZXJ5VSAsXG4gIGV2ZXJ5ICxcbiAgc29tZVUgLFxuICBzb21lICxcbiAgZXZlcnkyVSAsXG4gIGV2ZXJ5MiAsXG4gIHNvbWUyVSAsXG4gIHNvbWUyICxcbiAgY21wQnlMZW5ndGggLFxuICBjbXBVICxcbiAgY21wICxcbiAgZXFVICxcbiAgZXEgLFxuICBoYXNVICxcbiAgaGFzICxcbiAgZ2V0QnlVICxcbiAgZ2V0QnkgLFxuICBrZWVwVSAsXG4gIGtlZXAgLFxuICBmaWx0ZXIgLFxuICBrZWVwV2l0aEluZGV4VSAsXG4gIGtlZXBXaXRoSW5kZXggLFxuICBmaWx0ZXJXaXRoSW5kZXggLFxuICBrZWVwTWFwVSAsXG4gIGtlZXBNYXAgLFxuICBwYXJ0aXRpb25VICxcbiAgcGFydGl0aW9uICxcbiAgdW56aXAgLFxuICBnZXRBc3NvY1UgLFxuICBnZXRBc3NvYyAsXG4gIGhhc0Fzc29jVSAsXG4gIGhhc0Fzc29jICxcbiAgcmVtb3ZlQXNzb2NVICxcbiAgcmVtb3ZlQXNzb2MgLFxuICBzZXRBc3NvY1UgLFxuICBzZXRBc3NvYyAsXG4gIHNvcnRVICxcbiAgc29ydCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwiLi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9BcnJheSBmcm9tIFwiLi9iZWx0X0FycmF5LmpzXCI7XG5cbmZ1bmN0aW9uIHNvcnRlZExlbmd0aEF1eE1vcmUoeHMsIF9wcmVjLCBfYWNjLCBsZW4sIGx0KSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYWNjID0gX2FjYztcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIGlmIChhY2MgPj0gbGVuKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICB2YXIgdiA9IHhzW2FjY107XG4gICAgaWYgKCFsdCh2LCBwcmVjKSkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgX2FjYyA9IGFjYyArIDEgfCAwO1xuICAgIF9wcmVjID0gdjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0cmljdGx5U29ydGVkTGVuZ3RoVSh4cywgbHQpIHtcbiAgdmFyIGxlbiA9IHhzLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMCB8fCBsZW4gPT09IDEpIHtcbiAgICByZXR1cm4gbGVuO1xuICB9XG4gIHZhciB4MCA9IHhzWzBdO1xuICB2YXIgeDEgPSB4c1sxXTtcbiAgaWYgKGx0KHgwLCB4MSkpIHtcbiAgICB2YXIgX3ByZWMgPSB4MTtcbiAgICB2YXIgX2FjYyA9IDI7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgICAgaWYgKGFjYyA+PSBsZW4pIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cbiAgICAgIHZhciB2ID0geHNbYWNjXTtcbiAgICAgIGlmICghbHQocHJlYywgdikpIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cbiAgICAgIF9hY2MgPSBhY2MgKyAxIHwgMDtcbiAgICAgIF9wcmVjID0gdjtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9IGVsc2UgaWYgKGx0KHgxLCB4MCkpIHtcbiAgICByZXR1cm4gLXNvcnRlZExlbmd0aEF1eE1vcmUoeHMsIHgxLCAyLCBsZW4sIGx0KSB8IDA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaWN0bHlTb3J0ZWRMZW5ndGgoeHMsIGx0KSB7XG4gIHJldHVybiBzdHJpY3RseVNvcnRlZExlbmd0aFUoeHMsIEN1cnJ5Ll9fMihsdCkpO1xufVxuXG5mdW5jdGlvbiBpc1NvcnRlZFUoYSwgY21wKSB7XG4gIHZhciBsZW4gPSBhLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBfaSA9IDA7XG4gICAgdmFyIGxhc3RfYm91bmQgPSBsZW4gLSAxIHwgMDtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgaSA9IF9pO1xuICAgICAgaWYgKGkgPT09IGxhc3RfYm91bmQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoY21wKGFbaV0sIGFbaSArIDEgfCAwXSkgPiAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIF9pID0gaSArIDEgfCAwO1xuICAgICAgY29udGludWUgO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTb3J0ZWQoYSwgY21wKSB7XG4gIHJldHVybiBpc1NvcnRlZFUoYSwgQ3VycnkuX18yKGNtcCkpO1xufVxuXG5mdW5jdGlvbiBtZXJnZShzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBjbXApIHtcbiAgdmFyIHNyYzFyID0gc3JjMW9mcyArIHNyYzFsZW4gfCAwO1xuICB2YXIgc3JjMnIgPSBzcmMyb2ZzICsgc3JjMmxlbiB8IDA7XG4gIHZhciBfaTEgPSBzcmMxb2ZzO1xuICB2YXIgX3MxID0gc3JjW3NyYzFvZnNdO1xuICB2YXIgX2kyID0gc3JjMm9mcztcbiAgdmFyIF9zMiA9IHNyYzJbc3JjMm9mc107XG4gIHZhciBfZCA9IGRzdG9mcztcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBkID0gX2Q7XG4gICAgdmFyIHMyID0gX3MyO1xuICAgIHZhciBpMiA9IF9pMjtcbiAgICB2YXIgczEgPSBfczE7XG4gICAgdmFyIGkxID0gX2kxO1xuICAgIGlmIChjbXAoczEsIHMyKSA8PSAwKSB7XG4gICAgICBkc3RbZF0gPSBzMTtcbiAgICAgIHZhciBpMSQxID0gaTEgKyAxIHwgMDtcbiAgICAgIGlmIChpMSQxID49IHNyYzFyKSB7XG4gICAgICAgIHJldHVybiBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjMiwgaTIsIGRzdCwgZCArIDEgfCAwLCBzcmMyciAtIGkyIHwgMCk7XG4gICAgICB9XG4gICAgICBfZCA9IGQgKyAxIHwgMDtcbiAgICAgIF9zMSA9IHNyY1tpMSQxXTtcbiAgICAgIF9pMSA9IGkxJDE7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIGRzdFtkXSA9IHMyO1xuICAgIHZhciBpMiQxID0gaTIgKyAxIHwgMDtcbiAgICBpZiAoaTIkMSA+PSBzcmMycikge1xuICAgICAgcmV0dXJuIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMsIGkxLCBkc3QsIGQgKyAxIHwgMCwgc3JjMXIgLSBpMSB8IDApO1xuICAgIH1cbiAgICBfZCA9IGQgKyAxIHwgMDtcbiAgICBfczIgPSBzcmMyW2kyJDFdO1xuICAgIF9pMiA9IGkyJDE7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1bmlvblUoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgY21wKSB7XG4gIHZhciBzcmMxciA9IHNyYzFvZnMgKyBzcmMxbGVuIHwgMDtcbiAgdmFyIHNyYzJyID0gc3JjMm9mcyArIHNyYzJsZW4gfCAwO1xuICB2YXIgX2kxID0gc3JjMW9mcztcbiAgdmFyIF9zMSA9IHNyY1tzcmMxb2ZzXTtcbiAgdmFyIF9pMiA9IHNyYzJvZnM7XG4gIHZhciBfczIgPSBzcmMyW3NyYzJvZnNdO1xuICB2YXIgX2QgPSBkc3RvZnM7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgZCA9IF9kO1xuICAgIHZhciBzMiA9IF9zMjtcbiAgICB2YXIgaTIgPSBfaTI7XG4gICAgdmFyIHMxID0gX3MxO1xuICAgIHZhciBpMSA9IF9pMTtcbiAgICB2YXIgYyA9IGNtcChzMSwgczIpO1xuICAgIGlmIChjIDwgMCkge1xuICAgICAgZHN0W2RdID0gczE7XG4gICAgICB2YXIgaTEkMSA9IGkxICsgMSB8IDA7XG4gICAgICB2YXIgZCQxID0gZCArIDEgfCAwO1xuICAgICAgaWYgKGkxJDEgPCBzcmMxcikge1xuICAgICAgICBfZCA9IGQkMTtcbiAgICAgICAgX3MxID0gc3JjW2kxJDFdO1xuICAgICAgICBfaTEgPSBpMSQxO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICB9XG4gICAgICBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjMiwgaTIsIGRzdCwgZCQxLCBzcmMyciAtIGkyIHwgMCk7XG4gICAgICByZXR1cm4gKGQkMSArIHNyYzJyIHwgMCkgLSBpMiB8IDA7XG4gICAgfVxuICAgIGlmIChjID09PSAwKSB7XG4gICAgICBkc3RbZF0gPSBzMTtcbiAgICAgIHZhciBpMSQyID0gaTEgKyAxIHwgMDtcbiAgICAgIHZhciBpMiQxID0gaTIgKyAxIHwgMDtcbiAgICAgIHZhciBkJDIgPSBkICsgMSB8IDA7XG4gICAgICBpZiAoIShpMSQyIDwgc3JjMXIgJiYgaTIkMSA8IHNyYzJyKSkge1xuICAgICAgICBpZiAoaTEkMiA9PT0gc3JjMXIpIHtcbiAgICAgICAgICBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjMiwgaTIkMSwgZHN0LCBkJDIsIHNyYzJyIC0gaTIkMSB8IDApO1xuICAgICAgICAgIHJldHVybiAoZCQyICsgc3JjMnIgfCAwKSAtIGkyJDEgfCAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMsIGkxJDIsIGRzdCwgZCQyLCBzcmMxciAtIGkxJDIgfCAwKTtcbiAgICAgICAgICByZXR1cm4gKGQkMiArIHNyYzFyIHwgMCkgLSBpMSQyIHwgMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX2QgPSBkJDI7XG4gICAgICBfczIgPSBzcmMyW2kyJDFdO1xuICAgICAgX2kyID0gaTIkMTtcbiAgICAgIF9zMSA9IHNyY1tpMSQyXTtcbiAgICAgIF9pMSA9IGkxJDI7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIGRzdFtkXSA9IHMyO1xuICAgIHZhciBpMiQyID0gaTIgKyAxIHwgMDtcbiAgICB2YXIgZCQzID0gZCArIDEgfCAwO1xuICAgIGlmIChpMiQyIDwgc3JjMnIpIHtcbiAgICAgIF9kID0gZCQzO1xuICAgICAgX3MyID0gc3JjMltpMiQyXTtcbiAgICAgIF9pMiA9IGkyJDI7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMsIGkxLCBkc3QsIGQkMywgc3JjMXIgLSBpMSB8IDApO1xuICAgIHJldHVybiAoZCQzICsgc3JjMXIgfCAwKSAtIGkxIHwgMDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdW5pb24oc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgY21wKSB7XG4gIHJldHVybiB1bmlvblUoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgQ3VycnkuX18yKGNtcCkpO1xufVxuXG5mdW5jdGlvbiBpbnRlcnNlY3RVKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIGNtcCkge1xuICB2YXIgc3JjMXIgPSBzcmMxb2ZzICsgc3JjMWxlbiB8IDA7XG4gIHZhciBzcmMyciA9IHNyYzJvZnMgKyBzcmMybGVuIHwgMDtcbiAgdmFyIF9pMSA9IHNyYzFvZnM7XG4gIHZhciBfczEgPSBzcmNbc3JjMW9mc107XG4gIHZhciBfaTIgPSBzcmMyb2ZzO1xuICB2YXIgX3MyID0gc3JjMltzcmMyb2ZzXTtcbiAgdmFyIF9kID0gZHN0b2ZzO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGQgPSBfZDtcbiAgICB2YXIgczIgPSBfczI7XG4gICAgdmFyIGkyID0gX2kyO1xuICAgIHZhciBzMSA9IF9zMTtcbiAgICB2YXIgaTEgPSBfaTE7XG4gICAgdmFyIGMgPSBjbXAoczEsIHMyKTtcbiAgICBpZiAoYyA8IDApIHtcbiAgICAgIHZhciBpMSQxID0gaTEgKyAxIHwgMDtcbiAgICAgIGlmIChpMSQxID49IHNyYzFyKSB7XG4gICAgICAgIHJldHVybiBkO1xuICAgICAgfVxuICAgICAgX3MxID0gc3JjW2kxJDFdO1xuICAgICAgX2kxID0gaTEkMTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgaWYgKGMgPT09IDApIHtcbiAgICAgIGRzdFtkXSA9IHMxO1xuICAgICAgdmFyIGkxJDIgPSBpMSArIDEgfCAwO1xuICAgICAgdmFyIGkyJDEgPSBpMiArIDEgfCAwO1xuICAgICAgdmFyIGQkMSA9IGQgKyAxIHwgMDtcbiAgICAgIGlmICghKGkxJDIgPCBzcmMxciAmJiBpMiQxIDwgc3JjMnIpKSB7XG4gICAgICAgIHJldHVybiBkJDE7XG4gICAgICB9XG4gICAgICBfZCA9IGQkMTtcbiAgICAgIF9zMiA9IHNyYzJbaTIkMV07XG4gICAgICBfaTIgPSBpMiQxO1xuICAgICAgX3MxID0gc3JjW2kxJDJdO1xuICAgICAgX2kxID0gaTEkMjtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgdmFyIGkyJDIgPSBpMiArIDEgfCAwO1xuICAgIGlmIChpMiQyID49IHNyYzJyKSB7XG4gICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgX3MyID0gc3JjMltpMiQyXTtcbiAgICBfaTIgPSBpMiQyO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW50ZXJzZWN0KHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIGNtcCkge1xuICByZXR1cm4gaW50ZXJzZWN0VShzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBDdXJyeS5fXzIoY21wKSk7XG59XG5cbmZ1bmN0aW9uIGRpZmZVKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIGNtcCkge1xuICB2YXIgc3JjMXIgPSBzcmMxb2ZzICsgc3JjMWxlbiB8IDA7XG4gIHZhciBzcmMyciA9IHNyYzJvZnMgKyBzcmMybGVuIHwgMDtcbiAgdmFyIF9pMSA9IHNyYzFvZnM7XG4gIHZhciBfczEgPSBzcmNbc3JjMW9mc107XG4gIHZhciBfaTIgPSBzcmMyb2ZzO1xuICB2YXIgX3MyID0gc3JjMltzcmMyb2ZzXTtcbiAgdmFyIF9kID0gZHN0b2ZzO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGQgPSBfZDtcbiAgICB2YXIgczIgPSBfczI7XG4gICAgdmFyIGkyID0gX2kyO1xuICAgIHZhciBzMSA9IF9zMTtcbiAgICB2YXIgaTEgPSBfaTE7XG4gICAgdmFyIGMgPSBjbXAoczEsIHMyKTtcbiAgICBpZiAoYyA8IDApIHtcbiAgICAgIGRzdFtkXSA9IHMxO1xuICAgICAgdmFyIGQkMSA9IGQgKyAxIHwgMDtcbiAgICAgIHZhciBpMSQxID0gaTEgKyAxIHwgMDtcbiAgICAgIGlmIChpMSQxID49IHNyYzFyKSB7XG4gICAgICAgIHJldHVybiBkJDE7XG4gICAgICB9XG4gICAgICBfZCA9IGQkMTtcbiAgICAgIF9zMSA9IHNyY1tpMSQxXTtcbiAgICAgIF9pMSA9IGkxJDE7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIGlmIChjID09PSAwKSB7XG4gICAgICB2YXIgaTEkMiA9IGkxICsgMSB8IDA7XG4gICAgICB2YXIgaTIkMSA9IGkyICsgMSB8IDA7XG4gICAgICBpZiAoIShpMSQyIDwgc3JjMXIgJiYgaTIkMSA8IHNyYzJyKSkge1xuICAgICAgICBpZiAoaTEkMiA9PT0gc3JjMXIpIHtcbiAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjLCBpMSQyLCBkc3QsIGQsIHNyYzFyIC0gaTEkMiB8IDApO1xuICAgICAgICAgIHJldHVybiAoZCArIHNyYzFyIHwgMCkgLSBpMSQyIHwgMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX3MyID0gc3JjMltpMiQxXTtcbiAgICAgIF9pMiA9IGkyJDE7XG4gICAgICBfczEgPSBzcmNbaTEkMl07XG4gICAgICBfaTEgPSBpMSQyO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICB2YXIgaTIkMiA9IGkyICsgMSB8IDA7XG4gICAgaWYgKGkyJDIgPCBzcmMycikge1xuICAgICAgX3MyID0gc3JjMltpMiQyXTtcbiAgICAgIF9pMiA9IGkyJDI7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMsIGkxLCBkc3QsIGQsIHNyYzFyIC0gaTEgfCAwKTtcbiAgICByZXR1cm4gKGQgKyBzcmMxciB8IDApIC0gaTEgfCAwO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkaWZmKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIGNtcCkge1xuICByZXR1cm4gZGlmZlUoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgQ3VycnkuX18yKGNtcCkpO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRpb25Tb3J0KHNyYywgc3Jjb2ZzLCBkc3QsIGRzdG9mcywgbGVuLCBjbXApIHtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICB2YXIgZSA9IHNyY1tzcmNvZnMgKyBpIHwgMF07XG4gICAgdmFyIGogPSAoZHN0b2ZzICsgaSB8IDApIC0gMSB8IDA7XG4gICAgd2hpbGUoaiA+PSBkc3RvZnMgJiYgY21wKGRzdFtqXSwgZSkgPiAwKSB7XG4gICAgICBkc3RbaiArIDEgfCAwXSA9IGRzdFtqXTtcbiAgICAgIGogPSBqIC0gMSB8IDA7XG4gICAgfTtcbiAgICBkc3RbaiArIDEgfCAwXSA9IGU7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIHNvcnRUbyhzcmMsIHNyY29mcywgZHN0LCBkc3RvZnMsIGxlbiwgY21wKSB7XG4gIGlmIChsZW4gPD0gNSkge1xuICAgIHJldHVybiBpbnNlcnRpb25Tb3J0KHNyYywgc3Jjb2ZzLCBkc3QsIGRzdG9mcywgbGVuLCBjbXApO1xuICB9XG4gIHZhciBsMSA9IGxlbiAvIDIgfCAwO1xuICB2YXIgbDIgPSBsZW4gLSBsMSB8IDA7XG4gIHNvcnRUbyhzcmMsIHNyY29mcyArIGwxIHwgMCwgZHN0LCBkc3RvZnMgKyBsMSB8IDAsIGwyLCBjbXApO1xuICBzb3J0VG8oc3JjLCBzcmNvZnMsIHNyYywgc3Jjb2ZzICsgbDIgfCAwLCBsMSwgY21wKTtcbiAgcmV0dXJuIG1lcmdlKHNyYywgc3Jjb2ZzICsgbDIgfCAwLCBsMSwgZHN0LCBkc3RvZnMgKyBsMSB8IDAsIGwyLCBkc3QsIGRzdG9mcywgY21wKTtcbn1cblxuZnVuY3Rpb24gc3RhYmxlU29ydEluUGxhY2VCeVUoYSwgY21wKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIGlmIChsIDw9IDUpIHtcbiAgICByZXR1cm4gaW5zZXJ0aW9uU29ydChhLCAwLCBhLCAwLCBsLCBjbXApO1xuICB9XG4gIHZhciBsMSA9IGwgLyAyIHwgMDtcbiAgdmFyIGwyID0gbCAtIGwxIHwgMDtcbiAgdmFyIHQgPSBuZXcgQXJyYXkobDIpO1xuICBzb3J0VG8oYSwgbDEsIHQsIDAsIGwyLCBjbXApO1xuICBzb3J0VG8oYSwgMCwgYSwgbDIsIGwxLCBjbXApO1xuICByZXR1cm4gbWVyZ2UoYSwgbDIsIGwxLCB0LCAwLCBsMiwgYSwgMCwgY21wKTtcbn1cblxuZnVuY3Rpb24gc3RhYmxlU29ydEluUGxhY2VCeShhLCBjbXApIHtcbiAgcmV0dXJuIHN0YWJsZVNvcnRJblBsYWNlQnlVKGEsIEN1cnJ5Ll9fMihjbXApKTtcbn1cblxuZnVuY3Rpb24gc3RhYmxlU29ydEJ5VShhLCBjbXApIHtcbiAgdmFyIGIgPSBhLnNsaWNlKDApO1xuICBzdGFibGVTb3J0SW5QbGFjZUJ5VShiLCBjbXApO1xuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gc3RhYmxlU29ydEJ5KGEsIGNtcCkge1xuICByZXR1cm4gc3RhYmxlU29ydEJ5VShhLCBDdXJyeS5fXzIoY21wKSk7XG59XG5cbmZ1bmN0aW9uIGJpbmFyeVNlYXJjaEJ5VShzb3J0ZWQsIGtleSwgY21wKSB7XG4gIHZhciBsZW4gPSBzb3J0ZWQubGVuZ3RoO1xuICBpZiAobGVuID09PSAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHZhciBsbyA9IHNvcnRlZFswXTtcbiAgdmFyIGMgPSBjbXAoa2V5LCBsbyk7XG4gIGlmIChjIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICB2YXIgaGkgPSBzb3J0ZWRbbGVuIC0gMSB8IDBdO1xuICB2YXIgYzIgPSBjbXAoa2V5LCBoaSk7XG4gIGlmIChjMiA+IDApIHtcbiAgICByZXR1cm4gLShsZW4gKyAxIHwgMCkgfCAwO1xuICB9IGVsc2Uge1xuICAgIHZhciBfbG8gPSAwO1xuICAgIHZhciBfaGkgPSBsZW4gLSAxIHwgMDtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgaGkkMSA9IF9oaTtcbiAgICAgIHZhciBsbyQxID0gX2xvO1xuICAgICAgdmFyIG1pZCA9IChsbyQxICsgaGkkMSB8IDApIC8gMiB8IDA7XG4gICAgICB2YXIgbWlkVmFsID0gc29ydGVkW21pZF07XG4gICAgICB2YXIgYyQxID0gY21wKGtleSwgbWlkVmFsKTtcbiAgICAgIGlmIChjJDEgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG1pZDtcbiAgICAgIH1cbiAgICAgIGlmIChjJDEgPCAwKSB7XG4gICAgICAgIGlmIChoaSQxID09PSBtaWQpIHtcbiAgICAgICAgICBpZiAoY21wKHNvcnRlZFtsbyQxXSwga2V5KSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGxvJDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtKGhpJDEgKyAxIHwgMCkgfCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfaGkgPSBtaWQ7XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgIH1cbiAgICAgIGlmIChsbyQxID09PSBtaWQpIHtcbiAgICAgICAgaWYgKGNtcChzb3J0ZWRbaGkkMV0sIGtleSkgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gaGkkMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gLShoaSQxICsgMSB8IDApIHwgMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX2xvID0gbWlkO1xuICAgICAgY29udGludWUgO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gYmluYXJ5U2VhcmNoQnkoc29ydGVkLCBrZXksIGNtcCkge1xuICByZXR1cm4gYmluYXJ5U2VhcmNoQnlVKHNvcnRlZCwga2V5LCBDdXJyeS5fXzIoY21wKSk7XG59XG5cbnZhciBJbnQ7XG5cbnZhciAkJFN0cmluZztcblxuZXhwb3J0IHtcbiAgSW50ICxcbiAgJCRTdHJpbmcgLFxuICBzdHJpY3RseVNvcnRlZExlbmd0aFUgLFxuICBzdHJpY3RseVNvcnRlZExlbmd0aCAsXG4gIGlzU29ydGVkVSAsXG4gIGlzU29ydGVkICxcbiAgc3RhYmxlU29ydEluUGxhY2VCeVUgLFxuICBzdGFibGVTb3J0SW5QbGFjZUJ5ICxcbiAgc3RhYmxlU29ydEJ5VSAsXG4gIHN0YWJsZVNvcnRCeSAsXG4gIGJpbmFyeVNlYXJjaEJ5VSAsXG4gIGJpbmFyeVNlYXJjaEJ5ICxcbiAgdW5pb25VICxcbiAgdW5pb24gLFxuICBpbnRlcnNlY3RVICxcbiAgaW50ZXJzZWN0ICxcbiAgZGlmZlUgLFxuICBkaWZmICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cblxuZnVuY3Rpb24gY2FtbF9pbnRfY29tcGFyZSh4LCB5KSB7XG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9ib29sX2NvbXBhcmUoeCwgeSkge1xuICBpZiAoeCkge1xuICAgIGlmICh5KSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9IGVsc2UgaWYgKHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9mbG9hdF9jb21wYXJlKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmICh4IDwgeSkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmICh4ID4geSB8fCB4ID09PSB4KSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSBpZiAoeSA9PT0geSkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX3N0cmluZ19jb21wYXJlKHMxLCBzMikge1xuICBpZiAoczEgPT09IHMyKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAoczEgPCBzMikge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2Jvb2xfbWluKHgsIHkpIHtcbiAgaWYgKHgpIHtcbiAgICByZXR1cm4geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2ludF9taW4oeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2Zsb2F0X21pbih4LCB5KSB7XG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfc3RyaW5nX21pbih4LCB5KSB7XG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfaW50MzJfbWluKHgsIHkpIHtcbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9ib29sX21heCh4LCB5KSB7XG4gIGlmICh4KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9pbnRfbWF4KHgsIHkpIHtcbiAgaWYgKHggPiB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9mbG9hdF9tYXgoeCwgeSkge1xuICBpZiAoeCA+IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX3N0cmluZ19tYXgoeCwgeSkge1xuICBpZiAoeCA+IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2ludDMyX21heCh4LCB5KSB7XG4gIGlmICh4ID4geSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGk2NF9lcSh4LCB5KSB7XG4gIGlmICh4WzFdID09PSB5WzFdKSB7XG4gICAgcmV0dXJuIHhbMF0gPT09IHlbMF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGk2NF9nZShwYXJhbSwgcGFyYW0kMSkge1xuICB2YXIgb3RoZXJfaGkgPSBwYXJhbSQxWzBdO1xuICB2YXIgaGkgPSBwYXJhbVswXTtcbiAgaWYgKGhpID4gb3RoZXJfaGkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChoaSA8IG90aGVyX2hpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwYXJhbVsxXSA+PSBwYXJhbSQxWzFdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGk2NF9uZXEoeCwgeSkge1xuICByZXR1cm4gIWk2NF9lcSh4LCB5KTtcbn1cblxuZnVuY3Rpb24gaTY0X2x0KHgsIHkpIHtcbiAgcmV0dXJuICFpNjRfZ2UoeCwgeSk7XG59XG5cbmZ1bmN0aW9uIGk2NF9ndCh4LCB5KSB7XG4gIGlmICh4WzBdID4geVswXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHhbMF0gPCB5WzBdKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4WzFdID4geVsxXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpNjRfbGUoeCwgeSkge1xuICByZXR1cm4gIWk2NF9ndCh4LCB5KTtcbn1cblxuZnVuY3Rpb24gaTY0X21pbih4LCB5KSB7XG4gIGlmIChpNjRfZ2UoeCwgeSkpIHtcbiAgICByZXR1cm4geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpNjRfbWF4KHgsIHkpIHtcbiAgaWYgKGk2NF9ndCh4LCB5KSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNhbWxfaW50X2NvbXBhcmUgLFxuICBjYW1sX2Jvb2xfY29tcGFyZSAsXG4gIGNhbWxfZmxvYXRfY29tcGFyZSAsXG4gIGNhbWxfc3RyaW5nX2NvbXBhcmUgLFxuICBjYW1sX2Jvb2xfbWluICxcbiAgY2FtbF9pbnRfbWluICxcbiAgY2FtbF9mbG9hdF9taW4gLFxuICBjYW1sX3N0cmluZ19taW4gLFxuICBjYW1sX2ludDMyX21pbiAsXG4gIGNhbWxfYm9vbF9tYXggLFxuICBjYW1sX2ludF9tYXggLFxuICBjYW1sX2Zsb2F0X21heCAsXG4gIGNhbWxfc3RyaW5nX21heCAsXG4gIGNhbWxfaW50MzJfbWF4ICxcbiAgaTY0X2VxICxcbiAgaTY0X25lcSAsXG4gIGk2NF9sdCAsXG4gIGk2NF9ndCAsXG4gIGk2NF9sZSAsXG4gIGk2NF9nZSAsXG4gIGk2NF9taW4gLFxuICBpNjRfbWF4ICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cblxuZnVuY3Rpb24gc3ViKHgsIG9mZnNldCwgbGVuKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuKTtcbiAgdmFyIGogPSAwO1xuICB2YXIgaSA9IG9mZnNldDtcbiAgd2hpbGUoaiA8IGxlbikge1xuICAgIHJlc3VsdFtqXSA9IHhbaV07XG4gICAgaiA9IGogKyAxIHwgMDtcbiAgICBpID0gaSArIDEgfCAwO1xuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBsZW4oX2FjYywgX2wpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsID0gX2w7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICBfbCA9IGwudGw7XG4gICAgX2FjYyA9IGwuaGQubGVuZ3RoICsgYWNjIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbGwoYXJyLCBfaSwgX2wpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsID0gX2w7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoIWwpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciB4ID0gbC5oZDtcbiAgICB2YXIgbCQxID0geC5sZW5ndGg7XG4gICAgdmFyIGsgPSBpO1xuICAgIHZhciBqID0gMDtcbiAgICB3aGlsZShqIDwgbCQxKSB7XG4gICAgICBhcnJba10gPSB4W2pdO1xuICAgICAgayA9IGsgKyAxIHwgMDtcbiAgICAgIGogPSBqICsgMSB8IDA7XG4gICAgfTtcbiAgICBfbCA9IGwudGw7XG4gICAgX2kgPSBrO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29uY2F0KGwpIHtcbiAgdmFyIHYgPSBsZW4oMCwgbCk7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkodik7XG4gIGZpbGwocmVzdWx0LCAwLCBsKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc2V0KHhzLCBpbmRleCwgbmV3dmFsKSB7XG4gIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0geHMubGVuZ3RoKSB7XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJJbnZhbGlkX2FyZ3VtZW50XCIsXG4gICAgICAgICAgXzE6IFwiaW5kZXggb3V0IG9mIGJvdW5kc1wiLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIHhzW2luZGV4XSA9IG5ld3ZhbDtcbiAgXG59XG5cbmZ1bmN0aW9uIGdldCh4cywgaW5kZXgpIHtcbiAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB4cy5sZW5ndGgpIHtcbiAgICB0aHJvdyB7XG4gICAgICAgICAgUkVfRVhOX0lEOiBcIkludmFsaWRfYXJndW1lbnRcIixcbiAgICAgICAgICBfMTogXCJpbmRleCBvdXQgb2YgYm91bmRzXCIsXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH1cbiAgcmV0dXJuIHhzW2luZGV4XTtcbn1cblxuZnVuY3Rpb24gbWFrZShsZW4sIGluaXQpIHtcbiAgdmFyIGIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICBiW2ldID0gaW5pdDtcbiAgfVxuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gbWFrZV9mbG9hdChsZW4pIHtcbiAgdmFyIGIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICBiW2ldID0gMDtcbiAgfVxuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gYmxpdChhMSwgaTEsIGEyLCBpMiwgbGVuKSB7XG4gIGlmIChpMiA8PSBpMSkge1xuICAgIGZvcih2YXIgaiA9IDA7IGogPCBsZW47ICsrail7XG4gICAgICBhMltqICsgaTIgfCAwXSA9IGExW2ogKyBpMSB8IDBdO1xuICAgIH1cbiAgICByZXR1cm4gO1xuICB9XG4gIGZvcih2YXIgaiQxID0gbGVuIC0gMSB8IDA7IGokMSA+PSAwOyAtLWokMSl7XG4gICAgYTJbaiQxICsgaTIgfCAwXSA9IGExW2okMSArIGkxIHwgMF07XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGR1cChwcmltKSB7XG4gIHJldHVybiBwcmltLnNsaWNlKDApO1xufVxuXG5leHBvcnQge1xuICBkdXAgLFxuICBzdWIgLFxuICBjb25jYXQgLFxuICBtYWtlICxcbiAgbWFrZV9mbG9hdCAsXG4gIGJsaXQgLFxuICBnZXQgLFxuICBzZXQgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG52YXIgaWQgPSB7XG4gIGNvbnRlbnRzOiAwXG59O1xuXG5mdW5jdGlvbiBjcmVhdGUoc3RyKSB7XG4gIGlkLmNvbnRlbnRzID0gaWQuY29udGVudHMgKyAxIHwgMDtcbiAgcmV0dXJuIHN0ciArIChcIi9cIiArIGlkLmNvbnRlbnRzKTtcbn1cblxuZnVuY3Rpb24gY2FtbF9pc19leHRlbnNpb24oZSkge1xuICBpZiAoZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0eXBlb2YgZS5SRV9FWE5fSUQgPT09IFwic3RyaW5nXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9leG5fc2xvdF9uYW1lKHgpIHtcbiAgcmV0dXJuIHguUkVfRVhOX0lEO1xufVxuXG5leHBvcnQge1xuICBpZCAsXG4gIGNyZWF0ZSAsXG4gIGNhbWxfaXNfZXh0ZW5zaW9uICxcbiAgY2FtbF9leG5fc2xvdF9uYW1lICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIENhbWxfb3B0aW9uIGZyb20gXCIuL2NhbWxfb3B0aW9uLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2V4Y2VwdGlvbnMgZnJvbSBcIi4vY2FtbF9leGNlcHRpb25zLmpzXCI7XG5cbnZhciAkJEVycm9yID0gLyogQF9fUFVSRV9fICovQ2FtbF9leGNlcHRpb25zLmNyZWF0ZShcIkNhbWxfanNfZXhjZXB0aW9ucy5FcnJvclwiKTtcblxuZnVuY3Rpb24gaW50ZXJuYWxUb09DYW1sRXhjZXB0aW9uKGUpIHtcbiAgaWYgKENhbWxfZXhjZXB0aW9ucy5jYW1sX2lzX2V4dGVuc2lvbihlKSkge1xuICAgIHJldHVybiBlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBSRV9FWE5fSUQ6ICQkRXJyb3IsXG4gICAgICAgICAgICBfMTogZVxuICAgICAgICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9hc19qc19leG4oZXhuKSB7XG4gIGlmIChleG4uUkVfRVhOX0lEID09PSAkJEVycm9yKSB7XG4gICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoZXhuLl8xKTtcbiAgfVxuICBcbn1cblxuZXhwb3J0IHtcbiAgJCRFcnJvciAsXG4gIGludGVybmFsVG9PQ2FtbEV4Y2VwdGlvbiAsXG4gIGNhbWxfYXNfanNfZXhuICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cblxuZnVuY3Rpb24gaXNOZXN0ZWQoeCkge1xuICByZXR1cm4geC5CU19QUklWQVRFX05FU1RFRF9TT01FX05PTkUgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc29tZSh4KSB7XG4gIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FOiAwXG4gICAgICAgICAgfTtcbiAgfSBlbHNlIGlmICh4ICE9PSBudWxsICYmIHguQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FOiB4LkJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORSArIDEgfCAwXG4gICAgICAgICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geDtcbiAgfVxufVxuXG5mdW5jdGlvbiBudWxsYWJsZV90b19vcHQoeCkge1xuICBpZiAoeCA9PSBudWxsKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc29tZSh4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB1bmRlZmluZWRfdG9fb3B0KHgpIHtcbiAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNvbWUoeCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbnVsbF90b19vcHQoeCkge1xuICBpZiAoeCA9PT0gbnVsbCkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNvbWUoeCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdmFsRnJvbU9wdGlvbih4KSB7XG4gIGlmICghKHggIT09IG51bGwgJiYgeC5CU19QUklWQVRFX05FU1RFRF9TT01FX05PTkUgIT09IHVuZGVmaW5lZCkpIHtcbiAgICByZXR1cm4geDtcbiAgfVxuICB2YXIgZGVwdGggPSB4LkJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORTtcbiAgaWYgKGRlcHRoID09PSAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FOiBkZXB0aCAtIDEgfCAwXG4gICAgICAgICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcHRpb25fZ2V0KHgpIHtcbiAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHZhbEZyb21PcHRpb24oeCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gb3B0aW9uX3Vud3JhcCh4KSB7XG4gIGlmICh4ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4geC5WQUw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgbnVsbGFibGVfdG9fb3B0ICxcbiAgdW5kZWZpbmVkX3RvX29wdCAsXG4gIG51bGxfdG9fb3B0ICxcbiAgdmFsRnJvbU9wdGlvbiAsXG4gIHNvbWUgLFxuICBpc05lc3RlZCAsXG4gIG9wdGlvbl9nZXQgLFxuICBvcHRpb25fdW53cmFwICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIENhbWxfYXJyYXkgZnJvbSBcIi4vY2FtbF9hcnJheS5qc1wiO1xuXG5mdW5jdGlvbiBhcHAoX2YsIF9hcmdzKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYXJncyA9IF9hcmdzO1xuICAgIHZhciBmID0gX2Y7XG4gICAgdmFyIGluaXRfYXJpdHkgPSBmLmxlbmd0aDtcbiAgICB2YXIgYXJpdHkgPSBpbml0X2FyaXR5ID09PSAwID8gMSA6IGluaXRfYXJpdHk7XG4gICAgdmFyIGxlbiA9IGFyZ3MubGVuZ3RoO1xuICAgIHZhciBkID0gYXJpdHkgLSBsZW4gfCAwO1xuICAgIGlmIChkID09PSAwKSB7XG4gICAgICByZXR1cm4gZi5hcHBseShudWxsLCBhcmdzKTtcbiAgICB9XG4gICAgaWYgKGQgPj0gMCkge1xuICAgICAgcmV0dXJuIChmdW5jdGlvbihmLGFyZ3Mpe1xuICAgICAgcmV0dXJuIGZ1bmN0aW9uICh4KSB7XG4gICAgICAgIHJldHVybiBhcHAoZiwgYXJncy5jb25jYXQoW3hdKSk7XG4gICAgICB9XG4gICAgICB9KGYsYXJncykpO1xuICAgIH1cbiAgICBfYXJncyA9IENhbWxfYXJyYXkuc3ViKGFyZ3MsIGFyaXR5LCAtZCB8IDApO1xuICAgIF9mID0gZi5hcHBseShudWxsLCBDYW1sX2FycmF5LnN1YihhcmdzLCAwLCBhcml0eSkpO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gXzEobywgYTApIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMSkge1xuICAgIHJldHVybiBvKGEwKTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBvKGEwKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0sIHBhcmFtJDEpO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMik7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMykge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMsIHBhcmFtJDQpO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMsIHBhcmFtJDQsIHBhcmFtJDUpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCwgcGFyYW0kNSk7XG4gICAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW2EwXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fMShvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDEpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEwKSB7XG4gICAgICByZXR1cm4gXzEobywgYTApO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gXzIobywgYTAsIGExKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDIpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW2ExXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgcGFyYW0pO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgcGFyYW0sIHBhcmFtJDEpO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMsIHBhcmFtJDQpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMsIHBhcmFtJDQpO1xuICAgICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX18yKG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMikge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYTAsIGExKSB7XG4gICAgICByZXR1cm4gXzIobywgYTAsIGExKTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF8zKG8sIGEwLCBhMSwgYTIpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMykge1xuICAgIHJldHVybiBvKGEwLCBhMSwgYTIpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW2EyXSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIpO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBwYXJhbSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgcGFyYW0sIHBhcmFtJDEpO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMyk7XG4gICAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgIGEyXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX18zKG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMykge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYTAsIGExLCBhMikge1xuICAgICAgcmV0dXJuIF8zKG8sIGEwLCBhMSwgYTIpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gXzQobywgYTAsIGExLCBhMiwgYTMpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNCkge1xuICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzKTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhM1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhM1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCBbYTNdKTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMpO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgcGFyYW0pO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMikge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKTtcbiAgICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgIGEzXG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX180KG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNCkge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMpIHtcbiAgICAgIHJldHVybiBfNChvLCBhMCwgYTEsIGEyLCBhMyk7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfNShvLCBhMCwgYTEsIGEyLCBhMywgYTQpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNSkge1xuICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTRcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTRcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMpLCBbYTRdKTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0KTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBwYXJhbSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgYTRcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzUobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA1KSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEsIGEyLCBhMywgYTQpIHtcbiAgICAgIHJldHVybiBfNShvLCBhMCwgYTEsIGEyLCBhMywgYTQpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gXzYobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA2KSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTVcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTVcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTVcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQpLCBbYTVdKTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSk7XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIHBhcmFtKTtcbiAgICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgYTVcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzYobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA2KSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7XG4gICAgICByZXR1cm4gXzYobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSk7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfNyhvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNikge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA3KSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0KSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSksIFthNl0pO1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNik7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzcobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA3KSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNikge1xuICAgICAgcmV0dXJuIF83KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF84KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA4KSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMyksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiksIFthN10pO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fOChvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDgpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNykge1xuICAgICAgcmV0dXJuIF84KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNyk7XG4gICAgfTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBhcHAgLFxuICBfMSAsXG4gIF9fMSAsXG4gIF8yICxcbiAgX18yICxcbiAgXzMgLFxuICBfXzMgLFxuICBfNCAsXG4gIF9fNCAsXG4gIF81ICxcbiAgX181ICxcbiAgXzYgLFxuICBfXzYgLFxuICBfNyAsXG4gIF9fNyAsXG4gIF84ICxcbiAgX184ICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIENhbWxfanNfZXhjZXB0aW9ucyBmcm9tIFwiLi9jYW1sX2pzX2V4Y2VwdGlvbnMuanNcIjtcblxudmFyIGFueVRvRXhuSW50ZXJuYWwgPSBDYW1sX2pzX2V4Y2VwdGlvbnMuaW50ZXJuYWxUb09DYW1sRXhjZXB0aW9uO1xuXG5mdW5jdGlvbiByYWlzZUVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgRXJyb3Ioc3RyKTtcbn1cblxuZnVuY3Rpb24gcmFpc2VFdmFsRXJyb3Ioc3RyKSB7XG4gIHRocm93IG5ldyBFdmFsRXJyb3Ioc3RyKTtcbn1cblxuZnVuY3Rpb24gcmFpc2VSYW5nZUVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihzdHIpO1xufVxuXG5mdW5jdGlvbiByYWlzZVJlZmVyZW5jZUVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3Ioc3RyKTtcbn1cblxuZnVuY3Rpb24gcmFpc2VTeW50YXhFcnJvcihzdHIpIHtcbiAgdGhyb3cgbmV3IFN5bnRheEVycm9yKHN0cik7XG59XG5cbmZ1bmN0aW9uIHJhaXNlVHlwZUVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKHN0cik7XG59XG5cbmZ1bmN0aW9uIHJhaXNlVXJpRXJyb3Ioc3RyKSB7XG4gIHRocm93IG5ldyBVUklFcnJvcihzdHIpO1xufVxuXG52YXIgJCRFcnJvciQxID0gQ2FtbF9qc19leGNlcHRpb25zLiQkRXJyb3I7XG5cbmV4cG9ydCB7XG4gICQkRXJyb3IkMSBhcyAkJEVycm9yLFxuICBhbnlUb0V4bkludGVybmFsICxcbiAgcmFpc2VFcnJvciAsXG4gIHJhaXNlRXZhbEVycm9yICxcbiAgcmFpc2VSYW5nZUVycm9yICxcbiAgcmFpc2VSZWZlcmVuY2VFcnJvciAsXG4gIHJhaXNlU3ludGF4RXJyb3IgLFxuICByYWlzZVR5cGVFcnJvciAsXG4gIHJhaXNlVXJpRXJyb3IgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG5mdW5jdGlvbiBlcXVhbCh4LCB5KSB7XG4gIHJldHVybiB4ID09PSB5O1xufVxuXG52YXIgbWF4ID0gMjE0NzQ4MzY0NztcblxudmFyIG1pbiA9IC0yMTQ3NDgzNjQ4O1xuXG5leHBvcnQge1xuICBlcXVhbCAsXG4gIG1heCAsXG4gIG1pbiAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBKc192ZWN0b3IgZnJvbSBcIi4vanNfdmVjdG9yLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX29wdGlvbiBmcm9tIFwiLi9jYW1sX29wdGlvbi5qc1wiO1xuXG5mdW5jdGlvbiBsZW5ndGgobCkge1xuICB2YXIgX2xlbiA9IDA7XG4gIHZhciBfcGFyYW0gPSBsO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIHZhciBsZW4gPSBfbGVuO1xuICAgIGlmICghcGFyYW0pIHtcbiAgICAgIHJldHVybiBsZW47XG4gICAgfVxuICAgIF9wYXJhbSA9IHBhcmFtLnRsO1xuICAgIF9sZW4gPSBsZW4gKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnMoeCwgeHMpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBoZDogeCxcbiAgICAgICAgICB0bDogeHNcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eSh4KSB7XG4gIHJldHVybiB4ID09PSAvKiBbXSAqLzA7XG59XG5cbmZ1bmN0aW9uIGhkKHBhcmFtKSB7XG4gIGlmIChwYXJhbSkge1xuICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKHBhcmFtLmhkKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gdGwocGFyYW0pIHtcbiAgaWYgKHBhcmFtKSB7XG4gICAgcmV0dXJuIHBhcmFtLnRsO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBudGgobCwgbikge1xuICBpZiAobiA8IDApIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciBfbCA9IGw7XG4gIHZhciBfbiA9IG47XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbiQxID0gX247XG4gICAgdmFyIGwkMSA9IF9sO1xuICAgIGlmICghbCQxKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBpZiAobiQxID09PSAwKSB7XG4gICAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZShsJDEuaGQpO1xuICAgIH1cbiAgICBfbiA9IG4kMSAtIDEgfCAwO1xuICAgIF9sID0gbCQxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmV2QXBwZW5kKF9sMSwgX2wyKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIHJldHVybiBsMjtcbiAgICB9XG4gICAgX2wyID0ge1xuICAgICAgaGQ6IGwxLmhkLFxuICAgICAgdGw6IGwyXG4gICAgfTtcbiAgICBfbDEgPSBsMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJldihsKSB7XG4gIHJldHVybiByZXZBcHBlbmQobCwgLyogW10gKi8wKTtcbn1cblxuZnVuY3Rpb24gbWFwUmV2QXV4KGYsIF9hY2MsIF9scykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGxzID0gX2xzO1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICghbHMpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIF9scyA9IGxzLnRsO1xuICAgIF9hY2MgPSB7XG4gICAgICBoZDogZihscy5oZCksXG4gICAgICB0bDogYWNjXG4gICAgfTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcFJldihmLCBscykge1xuICByZXR1cm4gbWFwUmV2QXV4KGYsIC8qIFtdICovMCwgbHMpO1xufVxuXG5mdW5jdGlvbiBtYXAoZiwgbHMpIHtcbiAgcmV0dXJuIHJldkFwcGVuZChtYXBSZXZBdXgoZiwgLyogW10gKi8wLCBscyksIC8qIFtdICovMCk7XG59XG5cbmZ1bmN0aW9uIGl0ZXIoZiwgX3BhcmFtKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgZihwYXJhbS5oZCk7XG4gICAgX3BhcmFtID0gcGFyYW0udGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpdGVyaShmLCBsKSB7XG4gIHZhciBfaSA9IDA7XG4gIHZhciBfcGFyYW0gPSBsO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgZihpLCBwYXJhbS5oZCk7XG4gICAgX3BhcmFtID0gcGFyYW0udGw7XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb2xkTGVmdChmLCBfYWNjdSwgX2wpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsID0gX2w7XG4gICAgdmFyIGFjY3UgPSBfYWNjdTtcbiAgICBpZiAoIWwpIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgICBfbCA9IGwudGw7XG4gICAgX2FjY3UgPSBmKGFjY3UsIGwuaGQpO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGFpbExvb3AoZiwgX2FjYywgX3BhcmFtKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgX3BhcmFtID0gcGFyYW0udGw7XG4gICAgX2FjYyA9IGYocGFyYW0uaGQsIGFjYyk7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb2xkUmlnaHQoZiwgbCwgaW5pdCkge1xuICB2YXIgbG9vcCA9IGZ1bmN0aW9uIChuLCBwYXJhbSkge1xuICAgIGlmICghcGFyYW0pIHtcbiAgICAgIHJldHVybiBpbml0O1xuICAgIH1cbiAgICB2YXIgdCA9IHBhcmFtLnRsO1xuICAgIHZhciBoID0gcGFyYW0uaGQ7XG4gICAgaWYgKG4gPCAxMDAwKSB7XG4gICAgICByZXR1cm4gZihoLCBsb29wKG4gKyAxIHwgMCwgdCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZihoLCB0YWlsTG9vcChmLCBpbml0LCByZXZBcHBlbmQodCwgLyogW10gKi8wKSkpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxvb3AoMCwgbCk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4obHgpIHtcbiAgdmFyIF9hY2MgPSAvKiBbXSAqLzA7XG4gIHZhciBfbHggPSBseDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBseCQxID0gX2x4O1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICghbHgkMSkge1xuICAgICAgcmV0dXJuIHJldkFwcGVuZChhY2MsIC8qIFtdICovMCk7XG4gICAgfVxuICAgIF9seCA9IGx4JDEudGw7XG4gICAgX2FjYyA9IHJldkFwcGVuZChseCQxLmhkLCBhY2MpO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyUmV2QXV4KGYsIF9hY2MsIF94cykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIHZhciB5cyA9IHhzLnRsO1xuICAgIHZhciB5ID0geHMuaGQ7XG4gICAgaWYgKGYoeSkpIHtcbiAgICAgIF94cyA9IHlzO1xuICAgICAgX2FjYyA9IHtcbiAgICAgICAgaGQ6IHksXG4gICAgICAgIHRsOiBhY2NcbiAgICAgIH07XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIF94cyA9IHlzO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGYsIHhzKSB7XG4gIHJldHVybiByZXZBcHBlbmQoZmlsdGVyUmV2QXV4KGYsIC8qIFtdICovMCwgeHMpLCAvKiBbXSAqLzApO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJNYXBSZXZBdXgoZiwgX2FjYywgX3hzKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgdmFyIHlzID0geHMudGw7XG4gICAgdmFyIHogPSBmKHhzLmhkKTtcbiAgICBpZiAoeiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfeHMgPSB5cztcbiAgICAgIF9hY2MgPSB7XG4gICAgICAgIGhkOiBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKHopLFxuICAgICAgICB0bDogYWNjXG4gICAgICB9O1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBfeHMgPSB5cztcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbHRlck1hcChmLCB4cykge1xuICByZXR1cm4gcmV2QXBwZW5kKGZpbHRlck1hcFJldkF1eChmLCAvKiBbXSAqLzAsIHhzKSwgLyogW10gKi8wKTtcbn1cblxuZnVuY3Rpb24gY291bnRCeShmLCB4cykge1xuICB2YXIgX2FjYyA9IDA7XG4gIHZhciBfeHMgPSB4cztcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyQxID0gX3hzO1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICgheHMkMSkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgX3hzID0geHMkMS50bDtcbiAgICBfYWNjID0gZih4cyQxLmhkKSA/IGFjYyArIDEgfCAwIDogYWNjO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdChuLCBmKSB7XG4gIHJldHVybiBKc192ZWN0b3IudG9MaXN0KEpzX3ZlY3Rvci5pbml0KG4sIGYpKTtcbn1cblxuZnVuY3Rpb24gdG9WZWN0b3IoeHMpIHtcbiAgaWYgKCF4cykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgYSA9IG5ldyBBcnJheShsZW5ndGgoeHMpKTtcbiAgdmFyIF9pID0gMDtcbiAgdmFyIF9wYXJhbSA9IHhzO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGFbaV0gPSBwYXJhbS5oZDtcbiAgICBfcGFyYW0gPSBwYXJhbS50bDtcbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVxdWFsKGNtcCwgX3hzLCBfeXMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB5cyA9IF95cztcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgaWYgKHlzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXlzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghY21wKHhzLmhkLCB5cy5oZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX3lzID0geXMudGw7XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5leHBvcnQge1xuICBsZW5ndGggLFxuICBjb25zICxcbiAgaXNFbXB0eSAsXG4gIGhkICxcbiAgdGwgLFxuICBudGggLFxuICByZXZBcHBlbmQgLFxuICByZXYgLFxuICBtYXBSZXYgLFxuICBtYXAgLFxuICBpdGVyICxcbiAgaXRlcmkgLFxuICBmb2xkTGVmdCAsXG4gIGZvbGRSaWdodCAsXG4gIGZsYXR0ZW4gLFxuICBmaWx0ZXIgLFxuICBmaWx0ZXJNYXAgLFxuICBjb3VudEJ5ICxcbiAgaW5pdCAsXG4gIHRvVmVjdG9yICxcbiAgZXF1YWwgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgSnNfaW50IGZyb20gXCIuL2pzX2ludC5qc1wiO1xuXG5mdW5jdGlvbiB1bnNhZmVfY2VpbChwcmltKSB7XG4gIHJldHVybiBNYXRoLmNlaWwocHJpbSk7XG59XG5cbmZ1bmN0aW9uIGNlaWxfaW50KGYpIHtcbiAgaWYgKGYgPiBKc19pbnQubWF4KSB7XG4gICAgcmV0dXJuIEpzX2ludC5tYXg7XG4gIH0gZWxzZSBpZiAoZiA8IEpzX2ludC5taW4pIHtcbiAgICByZXR1cm4gSnNfaW50Lm1pbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKGYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc2FmZV9mbG9vcihwcmltKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKHByaW0pO1xufVxuXG5mdW5jdGlvbiBmbG9vcl9pbnQoZikge1xuICBpZiAoZiA+IEpzX2ludC5tYXgpIHtcbiAgICByZXR1cm4gSnNfaW50Lm1heDtcbiAgfSBlbHNlIGlmIChmIDwgSnNfaW50Lm1pbikge1xuICAgIHJldHVybiBKc19pbnQubWluO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBNYXRoLmZsb29yKGYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJhbmRvbV9pbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIGZsb29yX2ludChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiB8IDApKSArIG1pbiB8IDA7XG59XG5cbnZhciBjZWlsID0gY2VpbF9pbnQ7XG5cbnZhciBmbG9vciA9IGZsb29yX2ludDtcblxuZXhwb3J0IHtcbiAgdW5zYWZlX2NlaWwgLFxuICBjZWlsX2ludCAsXG4gIGNlaWwgLFxuICB1bnNhZmVfZmxvb3IgLFxuICBmbG9vcl9pbnQgLFxuICBmbG9vciAsXG4gIHJhbmRvbV9pbnQgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG5mdW5jdGlvbiBmaWx0ZXJJblBsYWNlKHAsIGEpIHtcbiAgdmFyIGkgPSAwO1xuICB2YXIgaiA9IDA7XG4gIHdoaWxlKGkgPCBhLmxlbmd0aCkge1xuICAgIHZhciB2ID0gYVtpXTtcbiAgICBpZiAocCh2KSkge1xuICAgICAgYVtqXSA9IHY7XG4gICAgICBqID0gaiArIDEgfCAwO1xuICAgIH1cbiAgICBpID0gaSArIDEgfCAwO1xuICB9O1xuICBhLnNwbGljZShqKTtcbiAgXG59XG5cbmZ1bmN0aW9uIGVtcHR5KGEpIHtcbiAgYS5zcGxpY2UoMCk7XG4gIFxufVxuXG5mdW5jdGlvbiBwdXNoQmFjayh4LCB4cykge1xuICB4cy5wdXNoKHgpO1xuICBcbn1cblxuZnVuY3Rpb24gbWVtQnlSZWYoeCwgeHMpIHtcbiAgcmV0dXJuIHhzLmluZGV4T2YoeCkgPj0gMDtcbn1cblxuZnVuY3Rpb24gaXRlcihmLCB4cykge1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IHhzLmxlbmd0aDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIGYoeHNbaV0pO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBpdGVyaShmLCBhKSB7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBmKGksIGFbaV0pO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiB0b0xpc3QoYSkge1xuICB2YXIgX2kgPSBhLmxlbmd0aCAtIDEgfCAwO1xuICB2YXIgX3JlcyA9IC8qIFtdICovMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciByZXMgPSBfcmVzO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBfcmVzID0ge1xuICAgICAgaGQ6IGFbaV0sXG4gICAgICB0bDogcmVzXG4gICAgfTtcbiAgICBfaSA9IGkgLSAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXQobiwgZikge1xuICB2YXIgdiA9IG5ldyBBcnJheShuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IG47ICsraSl7XG4gICAgdltpXSA9IGYoaSk7XG4gIH1cbiAgcmV0dXJuIHY7XG59XG5cbmZ1bmN0aW9uIGNvcHkoeCkge1xuICB2YXIgbGVuID0geC5sZW5ndGg7XG4gIHZhciBiID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgYltpXSA9IHhbaV07XG4gIH1cbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIG1hcChmLCBhKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciByID0gbmV3IEFycmF5KGwpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICByW2ldID0gZihhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gZm9sZExlZnQoZiwgeCwgYSkge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICByID0gZihyLCBhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gZm9sZFJpZ2h0KGYsIGEsIHgpIHtcbiAgdmFyIHIgPSB4O1xuICBmb3IodmFyIGkgPSBhLmxlbmd0aCAtIDEgfCAwOyBpID49IDA7IC0taSl7XG4gICAgciA9IGYoYVtpXSwgcik7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIG1hcGkoZiwgYSkge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICBpZiAobCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgciA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgcltpXSA9IGYoaSwgYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZCh4LCBhKSB7XG4gIHJldHVybiBhLmNvbmNhdChbeF0pO1xufVxuXG5leHBvcnQge1xuICBmaWx0ZXJJblBsYWNlICxcbiAgZW1wdHkgLFxuICBwdXNoQmFjayAsXG4gIGNvcHkgLFxuICBtZW1CeVJlZiAsXG4gIGl0ZXIgLFxuICBpdGVyaSAsXG4gIHRvTGlzdCAsXG4gIG1hcCAsXG4gIG1hcGkgLFxuICBmb2xkTGVmdCAsXG4gIGZvbGRSaWdodCAsXG4gIGluaXQgLFxuICBhcHBlbmQgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgUmVTY3JpcHQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuXG5pbXBvcnQgKiBhcyBKc19leG4gZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvanNfZXhuLmpzXCI7XG5pbXBvcnQgKiBhcyBDYWxjJEZvcm1mb3JtIGZyb20gXCIuL2NvcmUvY2FsYy9DYWxjLmJzLmpzXCI7XG5cbnZhciBjb25maWcgPSB7XG4gIHNvcnROTVVJOiB0cnVlXG59O1xuXG5mdW5jdGlvbiBmcm9tSlMoanNfaW50KSB7XG4gIHZhciBjID0gQ2FsYyRGb3JtZm9ybS5Db25zdC5mcm9tSW50KGNvbmZpZy5zb3J0Tk1VSSwganNfaW50KTtcbiAgaWYgKGMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBjO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBKc19leG4ucmFpc2VFcnJvcihcIkludmFsaWQgY29uc3RhbnRcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZnJvbUpTX2FycmF5KGpzX2Fycikge1xuICByZXR1cm4ganNfYXJyLm1hcChmcm9tSlMpO1xufVxuXG5mdW5jdGlvbiB0b0pTKGMpIHtcbiAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3QudG9JbnQoY29uZmlnLnNvcnROTVVJLCBjKTtcbn1cblxuZnVuY3Rpb24gdG9KU19hcnJheShjX2Fycikge1xuICByZXR1cm4gY19hcnIubWFwKHRvSlMpO1xufVxuXG52YXIgQ29uc3QgPSB7XG4gIGZyb21KUzogZnJvbUpTLFxuICBmcm9tSlNfYXJyYXk6IGZyb21KU19hcnJheSxcbiAgdG9KUzogdG9KUyxcbiAgdG9KU19hcnJheTogdG9KU19hcnJheVxufTtcblxuZnVuY3Rpb24gZnJvbUpTJDEoanNfbmVzdGVkKSB7XG4gIHJldHVybiBqc19uZXN0ZWQ7XG59XG5cbmZ1bmN0aW9uIHRvSlMkMShuZXN0ZWQpIHtcbiAgcmV0dXJuIG5lc3RlZDtcbn1cblxudmFyIE5lc3RlZCA9IHtcbiAgZnJvbUpTOiBmcm9tSlMkMSxcbiAgdG9KUzogdG9KUyQxXG59O1xuXG52YXIgQ29udmVydGVyID0ge1xuICBDb25zdDogQ29uc3QsXG4gIE5lc3RlZDogTmVzdGVkXG59O1xuXG5mdW5jdGlvbiB0RW51bShwYXJhbSkge1xuICB2YXIgcGFydGlhbF9hcmcgPSBjb25maWcuc29ydE5NVUk7XG4gIHJldHVybiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICByZXR1cm4gQ2FsYyRGb3JtZm9ybS5Db25zdC50RW51bShwYXJ0aWFsX2FyZywgcGFyYW0pO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzaG93KGQpIHtcbiAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3Quc2hvdyhmcm9tSlMoZCkpO1xufVxuXG5mdW5jdGlvbiBmcm9tU3RyKHN0cikge1xuICB2YXIgYyA9IENhbGMkRm9ybWZvcm0uQ29uc3QudEZyb21TdHIoc3RyKTtcbiAgaWYgKGMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0b0pTKGMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBKc19leG4ucmFpc2VFcnJvcihcIkNhbm5vdCBpbnRlcnByZXQgc3RyaW5nXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludihkKSB7XG4gIHJldHVybiB0b0pTKENhbGMkRm9ybWZvcm0uQ29uc3QuaW52KGZyb21KUyhkKSkpO1xufVxuXG5mdW5jdGlvbiByZWwoZDEsIGQyKSB7XG4gIHZhciBjMSA9IGZyb21KUyhkMSk7XG4gIHZhciBjMiA9IGZyb21KUyhkMik7XG4gIHJldHVybiB0b0pTKENhbGMkRm9ybWZvcm0uQ29uc3QucmVsKGMxLCBjMikpO1xufVxuXG52YXIgQ29uc3QkMSA9IHtcbiAgdEVudW06IHRFbnVtLFxuICBzaG93OiBzaG93LFxuICBmcm9tU3RyOiBmcm9tU3RyLFxuICBpbnY6IGludixcbiAgcmVsOiByZWxcbn07XG5cbnZhciBzaG93JDEgPSBDYWxjJEZvcm1mb3JtLk5lc3RlZC5zaG93O1xuXG52YXIgZ2V0TGlzdCA9IENhbGMkRm9ybWZvcm0uTmVzdGVkLmdldExpc3Q7XG5cbmZ1bmN0aW9uIGZyb21BcnJheVRvTChhcnIpIHtcbiAgcmV0dXJuIENhbGMkRm9ybWZvcm0uTmVzdGVkLmZyb21BcnJheVRvTChhcnIubWFwKGZyb21KUykpO1xufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlUb1IoYXJyKSB7XG4gIHJldHVybiBDYWxjJEZvcm1mb3JtLk5lc3RlZC5mcm9tQXJyYXlUb1IoYXJyLm1hcChmcm9tSlMpKTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheShkKSB7XG4gIHZhciBjX2FyciA9IENhbGMkRm9ybWZvcm0uTmVzdGVkLnRvQXJyYXkoZCk7XG4gIHJldHVybiBjX2Fyci5tYXAodG9KUyk7XG59XG5cbnZhciBOZXN0ZWQkMSA9IHtcbiAgc2hvdzogc2hvdyQxLFxuICBnZXRMaXN0OiBnZXRMaXN0LFxuICBmcm9tQXJyYXlUb0w6IGZyb21BcnJheVRvTCxcbiAgZnJvbUFycmF5VG9SOiBmcm9tQXJyYXlUb1IsXG4gIHRvQXJyYXk6IHRvQXJyYXlcbn07XG5cbnZhciBDYWxjID0ge1xuICBDb25zdDogQ29uc3QkMSxcbiAgTmVzdGVkOiBOZXN0ZWQkMVxufTtcblxuZXhwb3J0IHtcbiAgY29uZmlnICxcbiAgQ29udmVydGVyICxcbiAgQ2FsYyAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBSZVNjcmlwdCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG5cbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBKc19saXN0IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2pzX2xpc3QuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfTGlzdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0xpc3QuanNcIjtcblxuZnVuY3Rpb24gdFRvSnMocGFyYW0pIHtcbiAgcmV0dXJuIHBhcmFtICsgMCB8IDA7XG59XG5cbmZ1bmN0aW9uIHRGcm9tSnMocGFyYW0pIHtcbiAgaWYgKHBhcmFtIDw9IDMgJiYgMCA8PSBwYXJhbSkge1xuICAgIHJldHVybiBwYXJhbSAtIDAgfCAwO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiB0RW51bShzb3J0Tk1VSU9wdCwgcGFyYW0pIHtcbiAgdmFyIHNvcnROTVVJID0gc29ydE5NVUlPcHQgIT09IHVuZGVmaW5lZCA/IHNvcnROTVVJT3B0IDogZmFsc2U7XG4gIGlmIChzb3J0Tk1VSSkge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICAvKiBOICovMCxcbiAgICAgICAgICAgIC8qIE0gKi8zLFxuICAgICAgICAgICAgLyogVSAqLzEsXG4gICAgICAgICAgICAvKiBJICovMlxuICAgICAgICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC8qIE4gKi8wLFxuICAgICAgICAgICAgLyogVSAqLzEsXG4gICAgICAgICAgICAvKiBJICovMixcbiAgICAgICAgICAgIC8qIE0gKi8zXG4gICAgICAgICAgXTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0RW51bUxpc3Qoc29ydE5NVUlPcHQsIHBhcmFtKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICBpZiAoc29ydE5NVUkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IC8qIE4gKi8wLFxuICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgaGQ6IC8qIE0gKi8zLFxuICAgICAgICAgICAgICB0bDoge1xuICAgICAgICAgICAgICAgIGhkOiAvKiBVICovMSxcbiAgICAgICAgICAgICAgICB0bDoge1xuICAgICAgICAgICAgICAgICAgaGQ6IC8qIEkgKi8yLFxuICAgICAgICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiAvKiBOICovMCxcbiAgICAgICAgICAgIHRsOiB7XG4gICAgICAgICAgICAgIGhkOiAvKiBVICovMSxcbiAgICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgICBoZDogLyogSSAqLzIsXG4gICAgICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgICAgIGhkOiAvKiBNICovMyxcbiAgICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3coeCkge1xuICBzd2l0Y2ggKHgpIHtcbiAgICBjYXNlIC8qIE4gKi8wIDpcbiAgICAgICAgcmV0dXJuIFwiTlwiO1xuICAgIGNhc2UgLyogVSAqLzEgOlxuICAgICAgICByZXR1cm4gXCJVXCI7XG4gICAgY2FzZSAvKiBJICovMiA6XG4gICAgICAgIHJldHVybiBcIklcIjtcbiAgICBjYXNlIC8qIE0gKi8zIDpcbiAgICAgICAgcmV0dXJuIFwiTVwiO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dBc0tleSh4KSB7XG4gIHN3aXRjaCAoeCkge1xuICAgIGNhc2UgLyogTiAqLzAgOlxuICAgICAgICByZXR1cm4gXCJOXCI7XG4gICAgY2FzZSAvKiBVICovMSA6XG4gICAgICAgIHJldHVybiBcIlVcIjtcbiAgICBjYXNlIC8qIEkgKi8yIDpcbiAgICAgICAgcmV0dXJuIFwiSVwiO1xuICAgIGNhc2UgLyogTSAqLzMgOlxuICAgICAgICByZXR1cm4gXCJNXCI7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9JbnQoc29ydE5NVUlPcHQsIGMpIHtcbiAgdmFyIHNvcnROTVVJID0gc29ydE5NVUlPcHQgIT09IHVuZGVmaW5lZCA/IHNvcnROTVVJT3B0IDogZmFsc2U7XG4gIHZhciBuID0gYyArIDAgfCAwO1xuICBzd2l0Y2ggKG4pIHtcbiAgICBjYXNlIDAgOlxuICAgICAgICByZXR1cm4gbjtcbiAgICBjYXNlIDEgOlxuICAgICAgICBpZiAoc29ydE5NVUkpIHtcbiAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfVxuICAgIGNhc2UgMiA6XG4gICAgICAgIGlmIChzb3J0Tk1VSSkge1xuICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICB9XG4gICAgY2FzZSAzIDpcbiAgICAgICAgaWYgKHNvcnROTVVJKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIC05OTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmcm9tSW50KHNvcnROTVVJT3B0LCBuKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICB2YXIgX2MgPSB0RnJvbUpzKG4pO1xuICBpZiAoIXNvcnROTVVJKSB7XG4gICAgcmV0dXJuIF9jO1xuICB9XG4gIGlmIChfYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIF9jO1xuICB9XG4gIHN3aXRjaCAoX2MpIHtcbiAgICBjYXNlIC8qIE4gKi8wIDpcbiAgICAgICAgcmV0dXJuIF9jO1xuICAgIGNhc2UgLyogVSAqLzEgOlxuICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgY2FzZSAvKiBJICovMiA6XG4gICAgICAgIHJldHVybiAvKiBVICovMTtcbiAgICBjYXNlIC8qIE0gKi8zIDpcbiAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIHRGcm9tU3RyKHN0cikge1xuICBzd2l0Y2ggKHN0cikge1xuICAgIGNhc2UgXCIobW4pXCIgOlxuICAgIGNhc2UgXCJJXCIgOlxuICAgIGNhc2UgXCJpXCIgOlxuICAgICAgICByZXR1cm4gLyogSSAqLzI7XG4gICAgY2FzZSBcIigpXCIgOlxuICAgIGNhc2UgXCJNXCIgOlxuICAgIGNhc2UgXCJtXCIgOlxuICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgY2FzZSBcIlwiIDpcbiAgICBjYXNlIFwiKCgpKVwiIDpcbiAgICBjYXNlIFwiLlwiIDpcbiAgICBjYXNlIFwiTlwiIDpcbiAgICBjYXNlIFwiblwiIDpcbiAgICAgICAgcmV0dXJuIC8qIE4gKi8wO1xuICAgIGNhc2UgXCJVXCIgOlxuICAgIGNhc2UgXCJtblwiIDpcbiAgICBjYXNlIFwidVwiIDpcbiAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludih4KSB7XG4gIHN3aXRjaCAoeCkge1xuICAgIGNhc2UgLyogTiAqLzAgOlxuICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgY2FzZSAvKiBVICovMSA6XG4gICAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICBjYXNlIC8qIEkgKi8yIDpcbiAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgIGNhc2UgLyogTSAqLzMgOlxuICAgICAgICByZXR1cm4gLyogTiAqLzA7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsKHgsIHkpIHtcbiAgaWYgKHkgPT09IDApIHtcbiAgICByZXR1cm4geDtcbiAgfVxuICBzd2l0Y2ggKHgpIHtcbiAgICBjYXNlIC8qIE4gKi8wIDpcbiAgICAgICAgcmV0dXJuIHk7XG4gICAgY2FzZSAvKiBVICovMSA6XG4gICAgICAgIGlmICh5ID49IDIpIHtcbiAgICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgICAgICB9XG4gICAgY2FzZSAvKiBJICovMiA6XG4gICAgICAgIGlmICh5ICE9PSAyKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIE0gKi8zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICAgICAgfVxuICAgIGNhc2UgLyogTSAqLzMgOlxuICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgXG4gIH1cbn1cblxudmFyIENvbnN0ID0ge1xuICB0VG9KczogdFRvSnMsXG4gIHRGcm9tSnM6IHRGcm9tSnMsXG4gIHRFbnVtOiB0RW51bSxcbiAgdEVudW1MaXN0OiB0RW51bUxpc3QsXG4gIHNob3c6IHNob3csXG4gIHNob3dBc0tleTogc2hvd0FzS2V5LFxuICB0b0ludDogdG9JbnQsXG4gIGZyb21JbnQ6IGZyb21JbnQsXG4gIHRGcm9tU3RyOiB0RnJvbVN0cixcbiAgaW52OiBpbnYsXG4gIHJlbDogcmVsXG59O1xuXG5mdW5jdGlvbiBzaG93JDEobmVzdCkge1xuICBpZiAobmVzdC5OQU1FID09PSBcIk5lc3RUb1JcIikge1xuICAgIHZhciBjbGlzdCA9IG5lc3QuVkFMO1xuICAgIGlmIChjbGlzdCkge1xuICAgICAgcmV0dXJuIFwiKFwiICsgQmVsdF9MaXN0LnJlZHVjZVJldmVyc2UoY2xpc3QsIFwiXCIsIChmdW5jdGlvbiAoc3RyLCBjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaG93KGMpICsgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ci5sZW5ndGggPiAwID8gXCIoXCIgKyBzdHIgKyBcIilcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pKSArIFwiKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJNXCI7XG4gICAgfVxuICB9XG4gIHZhciBjbGlzdCQxID0gbmVzdC5WQUw7XG4gIGlmIChjbGlzdCQxKSB7XG4gICAgcmV0dXJuIFwiKFwiICsgQmVsdF9MaXN0LnJlZHVjZShjbGlzdCQxLCBcIlwiLCAoZnVuY3Rpb24gKHN0ciwgYykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyLmxlbmd0aCA+IDAgPyBcIihcIiArIHN0ciArIFwiKVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSArIHNob3coYyk7XG4gICAgICAgICAgICAgICAgfSkpICsgXCIpXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiTVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldExpc3QobmVzdCkge1xuICByZXR1cm4gbmVzdC5WQUw7XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheVRvTChhcnIpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBOQU1FOiBcIk5lc3RUb0xcIixcbiAgICAgICAgICBWQUw6IEJlbHRfTGlzdC5mcm9tQXJyYXkoYXJyKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlUb1IoYXJyKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgVkFMOiBCZWx0X0xpc3QuZnJvbUFycmF5KGFycilcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheShuZXN0KSB7XG4gIHJldHVybiBCZWx0X0xpc3QudG9BcnJheShuZXN0LlZBTCk7XG59XG5cbmZ1bmN0aW9uIGZtYXBMKHBhcmFtLCBmbikge1xuICByZXR1cm4ge1xuICAgICAgICAgIE5BTUU6IFwiTmVzdFRvTFwiLFxuICAgICAgICAgIFZBTDogQ3VycnkuXzEoZm4sIHBhcmFtLlZBTClcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZm1hcFIocGFyYW0sIGZuKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgVkFMOiBDdXJyeS5fMShmbiwgcGFyYW0uVkFMKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBfcmVkdWNlQnlDcm9zc2luZyhfY2xpc3QpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBjbGlzdCA9IF9jbGlzdDtcbiAgICBpZiAoIWNsaXN0KSB7XG4gICAgICByZXR1cm4gY2xpc3Q7XG4gICAgfVxuICAgIHZhciBjID0gY2xpc3QuaGQ7XG4gICAgaWYgKGMgPT09IDApIHtcbiAgICAgIHZhciBtYXRjaCA9IGNsaXN0LnRsO1xuICAgICAgaWYgKG1hdGNoICYmIG1hdGNoLmhkID09PSAwKSB7XG4gICAgICAgIF9jbGlzdCA9IG1hdGNoLnRsO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiBjLFxuICAgICAgICAgICAgdGw6IF9yZWR1Y2VCeUNyb3NzaW5nKGNsaXN0LnRsKVxuICAgICAgICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZUJ5Q3Jvc3NpbmdMKHBhcmFtKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9MXCIsXG4gICAgICAgICAgVkFMOiBfcmVkdWNlQnlDcm9zc2luZyhwYXJhbS5WQUwpXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZUJ5Q3Jvc3NpbmdSKHBhcmFtKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgVkFMOiBfcmVkdWNlQnlDcm9zc2luZyhwYXJhbS5WQUwpXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIF9yZWR1Y2VCeUNhbGxpbmcoY2xpc3QsIHNvbWVVSSkge1xuICBpZiAoIWNsaXN0KSB7XG4gICAgcmV0dXJuIGNsaXN0O1xuICB9XG4gIHZhciBjcyA9IGNsaXN0LnRsO1xuICB2YXIgYyA9IGNsaXN0LmhkO1xuICBpZiAoY3MpIHtcbiAgICBpZiAoYyAhPT0gMCkge1xuICAgICAgaWYgKGMgPj0gMykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhkOiAvKiBNICovMyxcbiAgICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHNvbWVVSSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzb21lVUkgPT09IGMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgaGQ6IC8qIE4gKi8wLFxuICAgICAgICAgICAgICAgICAgdGw6IF9yZWR1Y2VCeUNhbGxpbmcoY3MsIHNvbWVVSSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBoZDogLyogTSAqLzMsXG4gICAgICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZDogYyxcbiAgICAgICAgICAgICAgICB0bDogX3JlZHVjZUJ5Q2FsbGluZyhjcywgYylcbiAgICAgICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaGQ6IC8qIE4gKi8wLFxuICAgICAgICAgICAgICB0bDogX3JlZHVjZUJ5Q2FsbGluZyhjcywgc29tZVVJKVxuICAgICAgICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIShjID09PSAyIHx8IGMgPT09IDEpIHx8IHNvbWVVSSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGNsaXN0O1xuICB9IGVsc2UgaWYgKHNvbWVVSSA9PT0gYykge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZDogLyogTiAqLzAsXG4gICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IC8qIE0gKi8zLFxuICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlQnlDYWxsaW5nTChwYXJhbSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIE5BTUU6IFwiTmVzdFRvTFwiLFxuICAgICAgICAgIFZBTDogSnNfbGlzdC5yZXYoX3JlZHVjZUJ5Q2FsbGluZyhKc19saXN0LnJldihwYXJhbS5WQUwpLCB1bmRlZmluZWQpKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VCeUNhbGxpbmdSKHBhcmFtKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgVkFMOiBfcmVkdWNlQnlDYWxsaW5nKHBhcmFtLlZBTCwgdW5kZWZpbmVkKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VMKHBhcmFtKSB7XG4gIHJldHVybiByZWR1Y2VCeUNyb3NzaW5nTChyZWR1Y2VCeUNhbGxpbmdMKHtcbiAgICAgICAgICAgICAgICAgIE5BTUU6IFwiTmVzdFRvTFwiLFxuICAgICAgICAgICAgICAgICAgVkFMOiBwYXJhbS5WQUxcbiAgICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVIocGFyYW0pIHtcbiAgcmV0dXJuIHJlZHVjZUJ5Q3Jvc3NpbmdSKHJlZHVjZUJ5Q2FsbGluZ1Ioe1xuICAgICAgICAgICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgICAgICAgICBWQUw6IHBhcmFtLlZBTFxuICAgICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gX2NhbGMoY2xpc3QpIHtcbiAgaWYgKCFjbGlzdCkge1xuICAgIHJldHVybiAvKiBOICovMDtcbiAgfVxuICB2YXIgY3MgPSBjbGlzdC50bDtcbiAgdmFyIGMgPSBjbGlzdC5oZDtcbiAgaWYgKGNzKSB7XG4gICAgaWYgKGMgIT09IDApIHtcbiAgICAgIGlmIChjID49IDMpIHtcbiAgICAgICAgcmV0dXJuIC8qIE0gKi8zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlbChjLCBpbnYoX2NhbGMoY3MpKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpbnYoX2NhbGMoY3MpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGM7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY0wocGFyYW0pIHtcbiAgdmFyIGNsaXN0ID0gcGFyYW0uVkFMO1xuICBpZiAoY2xpc3QpIHtcbiAgICByZXR1cm4gaW52KF9jYWxjKEpzX2xpc3QucmV2KGNsaXN0KSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiBNICovMztcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjUihwYXJhbSkge1xuICB2YXIgY2xpc3QgPSBwYXJhbS5WQUw7XG4gIGlmIChjbGlzdCkge1xuICAgIHJldHVybiBpbnYoX2NhbGMoY2xpc3QpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogTSAqLzM7XG4gIH1cbn1cblxudmFyIE5lc3RlZCA9IHtcbiAgc2hvdzogc2hvdyQxLFxuICBnZXRMaXN0OiBnZXRMaXN0LFxuICBmcm9tQXJyYXlUb0w6IGZyb21BcnJheVRvTCxcbiAgZnJvbUFycmF5VG9SOiBmcm9tQXJyYXlUb1IsXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIGZtYXBMOiBmbWFwTCxcbiAgZm1hcFI6IGZtYXBSLFxuICByZWR1Y2VCeUNyb3NzaW5nTDogcmVkdWNlQnlDcm9zc2luZ0wsXG4gIHJlZHVjZUJ5Q3Jvc3NpbmdSOiByZWR1Y2VCeUNyb3NzaW5nUixcbiAgcmVkdWNlQnlDYWxsaW5nTDogcmVkdWNlQnlDYWxsaW5nTCxcbiAgcmVkdWNlQnlDYWxsaW5nUjogcmVkdWNlQnlDYWxsaW5nUixcbiAgcmVkdWNlTDogcmVkdWNlTCxcbiAgcmVkdWNlUjogcmVkdWNlUixcbiAgY2FsY0w6IGNhbGNMLFxuICBjYWxjUjogY2FsY1Jcbn07XG5cbmV4cG9ydCB7XG4gIENvbnN0ICxcbiAgTmVzdGVkICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgZm9ybWZvcm1KUyBmcm9tICcuL0pTX2ludGVyZmFjZS5icy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1mb3JtSlM7Il0sInNvdXJjZVJvb3QiOiIifQ==