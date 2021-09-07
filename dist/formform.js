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
/* harmony export */   "Calc": function() { return /* binding */ Calc$1; }
/* harmony export */ });
/* harmony import */ var _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/calc/Calc.bs.js */ "./src/core/calc/Calc.bs.js");
/* harmony import */ var rescript_lib_es6_js_exn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rescript/lib/es6/js_exn.js */ "./node_modules/rescript/lib/es6/js_exn.js");
// Generated by ReScript, PLEASE EDIT WITH CARE




var config = {
  sortNMUI: true
};

function fromJS(js_int) {
  var c = _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_0__.Const.fromInt(config.sortNMUI, js_int);
  if (c !== undefined) {
    return c;
  } else {
    return rescript_lib_es6_js_exn_js__WEBPACK_IMPORTED_MODULE_1__.raiseError("Invalid constant");
  }
}

function fromJS_array(js_arr) {
  return js_arr.map(fromJS);
}

function toJS(c) {
  return _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_0__.Const.toInt(config.sortNMUI, c);
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

function show(d) {
  return _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_0__.Const.show(fromJS(d));
}

function showAsKey(d) {
  return _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_0__.Const.showAsKey(fromJS(d));
}

function fromStr(str) {
  var c = _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_0__.Const.tFromStr(str);
  if (c !== undefined) {
    return toJS(c);
  } else {
    return rescript_lib_es6_js_exn_js__WEBPACK_IMPORTED_MODULE_1__.raiseError("Cannot interpret string");
  }
}

function inv(d) {
  return toJS(_core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_0__.Const.inv(fromJS(d)));
}

function rel(d1, d2) {
  var c1 = fromJS(d1);
  var c2 = fromJS(d2);
  return toJS(_core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_0__.Const.rel(c1, c2));
}

var Const$1 = {
  show: show,
  showAsKey: showAsKey,
  fromStr: fromStr,
  inv: inv,
  rel: rel
};

var show$1 = _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_0__.Nested.show;

var getList = _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_0__.Nested.getList;

function fromArrayToL(arr) {
  return _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_0__.Nested.fromArrayToL(arr.map(fromJS));
}

function fromArrayToR(arr) {
  return _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_0__.Nested.fromArrayToR(arr.map(fromJS));
}

function toArray(d) {
  var c_arr = _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_0__.Nested.toArray(d);
  return c_arr.map(toJS);
}

var Nested$1 = {
  show: show$1,
  getList: getList,
  fromArrayToL: fromArrayToL,
  fromArrayToR: fromArrayToR,
  toArray: toArray
};

var Calc$1 = {
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

var Const_enum = {
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

var Const_enum_NMUI = {
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

var Const_enumNM = {
  hd: /* N */0,
  tl: {
    hd: /* M */3,
    tl: /* [] */0
  }
};

var Const_enumUI = {
  hd: /* U */1,
  tl: {
    hd: /* I */2,
    tl: /* [] */0
  }
};

var Const = {
  tToJs: tToJs,
  tFromJs: tFromJs,
  n: /* N */0,
  u: /* U */1,
  i: /* I */2,
  m: /* M */3,
  show: show,
  showAsKey: showAsKey,
  toInt: toInt,
  fromInt: fromInt,
  tFromStr: tFromStr,
  $$enum: Const_enum,
  enum_NMUI: Const_enum_NMUI,
  enumNM: Const_enumNM,
  enumUI: Const_enumUI,
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9iZWx0X0FycmF5LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvYmVsdF9MaXN0LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvYmVsdF9Tb3J0QXJyYXkuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9jYW1sLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvY2FtbF9hcnJheS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2NhbWxfZXhjZXB0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2NhbWxfanNfZXhjZXB0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2NhbWxfb3B0aW9uLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvY3VycnkuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9qc19leG4uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9qc19pbnQuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9qc19saXN0LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvanNfbWF0aC5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2pzX3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9KU19pbnRlcmZhY2UuYnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvY29yZS9jYWxjL0NhbGMuYnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvcm1mb3JtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9tYWluLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSa0M7QUFDRTtBQUNJO0FBQ1E7O0FBRWhEO0FBQ0E7QUFDQSxXQUFXLGlEQUFnQjtBQUMzQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekIsc0JBQXNCLG1EQUFrQjtBQUN4Qzs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLHdDQUF3QyxjQUFjO0FBQ3REO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwwQ0FBUztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLDBDQUFTO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixVQUFVO0FBQzFCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLFNBQVM7QUFDekI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsMENBQVM7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsUUFBUTtBQUN4QjtBQUNBO0FBQ0Esa0JBQWtCLFVBQVU7QUFDNUI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLGFBQWE7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsYUFBYTtBQUM3QjtBQUNBLHlDQUF5QyxjQUFjO0FBQ3ZEO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtEQUFpQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsZ0JBQWdCO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSx5QkFBeUIsa0RBQWlCO0FBQzFDO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EseUJBQXlCLGtEQUFpQjtBQUMxQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbURBQW1ELGNBQWM7QUFDakU7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0Esa0JBQWtCLGdCQUFnQjtBQUNsQztBQUNBO0FBQ0E7QUFDQTtBQUNBLG1DQUFtQyxVQUFVO0FBQzdDO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsMkJBQTJCLGtEQUFpQjtBQUM1QywyQkFBMkIsa0RBQWlCO0FBQzVDLG1CQUFtQixrREFBaUIsTUFBTSxrREFBaUI7QUFDM0Q7QUFDQSxrQkFBa0IsZ0JBQWdCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUNBQW1DLFVBQVU7QUFDN0M7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFDQUFxQyxjQUFjO0FBQ25EO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQSxxQkFBcUIsMENBQVM7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxpQkFBaUIsMENBQVM7QUFDMUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLGlEQUFnQjtBQUMxQjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDBDQUFTO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDBDQUFTO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtCQUFrQiwwQ0FBUztBQUMzQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsMENBQVM7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQSxhQUFhLDBEQUF5QjtBQUN0QztBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDBDQUFTO0FBQzlCOztBQUVBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLDhCQUE4QiwwQ0FBUztBQUN2Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnQkFBZ0IsT0FBTztBQUN2QjtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDBCQUEwQiwwQ0FBUztBQUNuQzs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx1QkFBdUIsMENBQVM7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLCtCQUErQixRQUFRO0FBQ3ZDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsOEJBQThCLDBDQUFTO0FBQ3ZDOztBQUVBO0FBQ0E7QUFDQSxZQUFZLGtEQUFpQjtBQUM3QiwwQkFBMEIsUUFBUTtBQUNsQztBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGtDQUFrQywwQ0FBUztBQUMzQzs7QUFFQTtBQUNBO0FBQ0EscUNBQXFDLGNBQWM7QUFDbkQ7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnQ0FBZ0MsMENBQVM7QUFDekM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EscUJBQXFCLDBDQUFTO0FBQzlCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwwQ0FBUztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLCtCQUErQixrREFBaUI7QUFDaEQ7O0FBRUE7QUFDQSx1QkFBdUIsMENBQVM7QUFDaEM7O0FBRUE7QUFDQTtBQUNBLFlBQVksa0RBQWlCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwwQ0FBUztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQiwwQ0FBUztBQUM1Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwwQ0FBUztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsUUFBUTtBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsdUJBQXVCLDBDQUFTO0FBQ2hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDBDQUFTO0FBQ3BDOztBQXdFQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMzdUJvQztBQUNVO0FBQ0U7QUFDTTs7QUFFdEQ7QUFDQTtBQUNBLFdBQVcsaURBQWdCO0FBQzNCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQXlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMENBQVM7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwQ0FBUztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDBDQUFTO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwwQ0FBUztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSwwREFBeUI7QUFDM0I7QUFDQTs7QUFFQTtBQUNB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O0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwwQ0FBUztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQTRGQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0K0NvQztBQUNVOztBQUU5QztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUNBQW1DLDBDQUFTO0FBQzVDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwwQ0FBUztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNB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QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7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QUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFxQkM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Z0I4RDs7QUFFOUQsdUJBQXVCLDRFQUEyQzs7QUFFbEU7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBLGdCQUFnQiwyREFBMEI7O0FBYXpDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDN0NBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFPQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNmNEM7QUFDSTs7QUFFaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGlEQUFnQjtBQUMzQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaURBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQXlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxTQUFTLGlEQUFnQixDQUFDLCtDQUFjO0FBQ3hDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBeUJDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQzNVc0M7O0FBRXRDO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsMkNBQVU7QUFDcEIsV0FBVywyQ0FBVTtBQUNyQixHQUFHLGNBQWMsMkNBQVU7QUFDM0IsV0FBVywyQ0FBVTtBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLFVBQVUsMkNBQVU7QUFDcEIsV0FBVywyQ0FBVTtBQUNyQixHQUFHLGNBQWMsMkNBQVU7QUFDM0IsV0FBVywyQ0FBVTtBQUNyQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTs7QUFXQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL0NBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLGNBQWM7QUFDcEQ7QUFDQTs7QUFFQTs7QUFFQTtBQUNBLHFDQUFxQyxj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Y0E7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLDZDQUE2Qyx3REFBd0QsRTs7Ozs7V0NBckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7OztBQ05tRDs7QUFFbkQsK0RBQWUsZ0RBQVUsRSIsImZpbGUiOiJmb3JtZm9ybS5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvcm1mb3JtXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZvcm1mb3JtXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiXG5cbmltcG9ydCAqIGFzIENhbWwgZnJvbSBcIi4vY2FtbC5qc1wiO1xuaW1wb3J0ICogYXMgQ3VycnkgZnJvbSBcIi4vY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIEpzX21hdGggZnJvbSBcIi4vanNfbWF0aC5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vcHRpb24gZnJvbSBcIi4vY2FtbF9vcHRpb24uanNcIjtcblxuZnVuY3Rpb24gZ2V0KGFyciwgaSkge1xuICBpZiAoaSA+PSAwICYmIGkgPCBhcnIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoYXJyW2ldKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gZ2V0RXhuKGFyciwgaSkge1xuICBpZiAoIShpID49IDAgJiYgaSA8IGFyci5sZW5ndGgpKSB7XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJBc3NlcnRfZmFpbHVyZVwiLFxuICAgICAgICAgIF8xOiBbXG4gICAgICAgICAgICBcImJlbHRfQXJyYXkubWxcIixcbiAgICAgICAgICAgIDI3LFxuICAgICAgICAgICAgNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH1cbiAgcmV0dXJuIGFycltpXTtcbn1cblxuZnVuY3Rpb24gc2V0KGFyciwgaSwgdikge1xuICBpZiAoaSA+PSAwICYmIGkgPCBhcnIubGVuZ3RoKSB7XG4gICAgYXJyW2ldID0gdjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RXhuKGFyciwgaSwgdikge1xuICBpZiAoIShpID49IDAgJiYgaSA8IGFyci5sZW5ndGgpKSB7XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJBc3NlcnRfZmFpbHVyZVwiLFxuICAgICAgICAgIF8xOiBbXG4gICAgICAgICAgICBcImJlbHRfQXJyYXkubWxcIixcbiAgICAgICAgICAgIDMzLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH1cbiAgYXJyW2ldID0gdjtcbiAgXG59XG5cbmZ1bmN0aW9uIHN3YXBVbnNhZmUoeHMsIGksIGopIHtcbiAgdmFyIHRtcCA9IHhzW2ldO1xuICB4c1tpXSA9IHhzW2pdO1xuICB4c1tqXSA9IHRtcDtcbiAgXG59XG5cbmZ1bmN0aW9uIHNodWZmbGVJblBsYWNlKHhzKSB7XG4gIHZhciBsZW4gPSB4cy5sZW5ndGg7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgc3dhcFVuc2FmZSh4cywgaSwgSnNfbWF0aC5yYW5kb21faW50KGksIGxlbikpO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBzaHVmZmxlKHhzKSB7XG4gIHZhciByZXN1bHQgPSB4cy5zbGljZSgwKTtcbiAgc2h1ZmZsZUluUGxhY2UocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcmV2ZXJzZUluUGxhY2UoeHMpIHtcbiAgdmFyIGxlbiA9IHhzLmxlbmd0aDtcbiAgdmFyIG9mcyA9IDA7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gbGVuIC8gMiB8IDA7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBzd2FwVW5zYWZlKHhzLCBvZnMgKyBpIHwgMCwgKChvZnMgKyBsZW4gfCAwKSAtIGkgfCAwKSAtIDEgfCAwKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gcmV2ZXJzZSh4cykge1xuICB2YXIgbGVuID0geHMubGVuZ3RoO1xuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgcmVzdWx0W2ldID0geHNbKGxlbiAtIDEgfCAwKSAtIGkgfCAwXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtYWtlKGwsIGYpIHtcbiAgaWYgKGwgPD0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgcmVzID0gbmV3IEFycmF5KGwpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICByZXNbaV0gPSBmO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIG1ha2VCeVUobCwgZikge1xuICBpZiAobCA8PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciByZXMgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHJlc1tpXSA9IGYoaSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gbWFrZUJ5KGwsIGYpIHtcbiAgcmV0dXJuIG1ha2VCeVUobCwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gbWFrZUJ5QW5kU2h1ZmZsZVUobCwgZikge1xuICB2YXIgdSA9IG1ha2VCeVUobCwgZik7XG4gIHNodWZmbGVJblBsYWNlKHUpO1xuICByZXR1cm4gdTtcbn1cblxuZnVuY3Rpb24gbWFrZUJ5QW5kU2h1ZmZsZShsLCBmKSB7XG4gIHJldHVybiBtYWtlQnlBbmRTaHVmZmxlVShsLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiByYW5nZShzdGFydCwgZmluaXNoKSB7XG4gIHZhciBjdXQgPSBmaW5pc2ggLSBzdGFydCB8IDA7XG4gIGlmIChjdXQgPCAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBhcnIgPSBuZXcgQXJyYXkoY3V0ICsgMSB8IDApO1xuICBmb3IodmFyIGkgPSAwOyBpIDw9IGN1dDsgKytpKXtcbiAgICBhcnJbaV0gPSBzdGFydCArIGkgfCAwO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIHJhbmdlQnkoc3RhcnQsIGZpbmlzaCwgc3RlcCkge1xuICB2YXIgY3V0ID0gZmluaXNoIC0gc3RhcnQgfCAwO1xuICBpZiAoY3V0IDwgMCB8fCBzdGVwIDw9IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIG5iID0gKGN1dCAvIHN0ZXAgfCAwKSArIDEgfCAwO1xuICB2YXIgYXJyID0gbmV3IEFycmF5KG5iKTtcbiAgdmFyIGN1ciA9IHN0YXJ0O1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbmI7ICsraSl7XG4gICAgYXJyW2ldID0gY3VyO1xuICAgIGN1ciA9IGN1ciArIHN0ZXAgfCAwO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIHppcCh4cywgeXMpIHtcbiAgdmFyIGxlbnggPSB4cy5sZW5ndGg7XG4gIHZhciBsZW55ID0geXMubGVuZ3RoO1xuICB2YXIgbGVuID0gbGVueCA8IGxlbnkgPyBsZW54IDogbGVueTtcbiAgdmFyIHMgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICBzW2ldID0gW1xuICAgICAgeHNbaV0sXG4gICAgICB5c1tpXVxuICAgIF07XG4gIH1cbiAgcmV0dXJuIHM7XG59XG5cbmZ1bmN0aW9uIHppcEJ5VSh4cywgeXMsIGYpIHtcbiAgdmFyIGxlbnggPSB4cy5sZW5ndGg7XG4gIHZhciBsZW55ID0geXMubGVuZ3RoO1xuICB2YXIgbGVuID0gbGVueCA8IGxlbnkgPyBsZW54IDogbGVueTtcbiAgdmFyIHMgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICBzW2ldID0gZih4c1tpXSwgeXNbaV0pO1xuICB9XG4gIHJldHVybiBzO1xufVxuXG5mdW5jdGlvbiB6aXBCeSh4cywgeXMsIGYpIHtcbiAgcmV0dXJuIHppcEJ5VSh4cywgeXMsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIGNvbmNhdChhMSwgYTIpIHtcbiAgdmFyIGwxID0gYTEubGVuZ3RoO1xuICB2YXIgbDIgPSBhMi5sZW5ndGg7XG4gIHZhciBhMWEyID0gbmV3IEFycmF5KGwxICsgbDIgfCAwKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGwxOyArK2kpe1xuICAgIGExYTJbaV0gPSBhMVtpXTtcbiAgfVxuICBmb3IodmFyIGkkMSA9IDA7IGkkMSA8IGwyOyArK2kkMSl7XG4gICAgYTFhMltsMSArIGkkMSB8IDBdID0gYTJbaSQxXTtcbiAgfVxuICByZXR1cm4gYTFhMjtcbn1cblxuZnVuY3Rpb24gY29uY2F0TWFueShhcnJzKSB7XG4gIHZhciBsZW5BcnJzID0gYXJycy5sZW5ndGg7XG4gIHZhciB0b3RhbExlbiA9IDA7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW5BcnJzOyArK2kpe1xuICAgIHRvdGFsTGVuID0gdG90YWxMZW4gKyBhcnJzW2ldLmxlbmd0aCB8IDA7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheSh0b3RhbExlbik7XG4gIHRvdGFsTGVuID0gMDtcbiAgZm9yKHZhciBqID0gMDsgaiA8IGxlbkFycnM7ICsrail7XG4gICAgdmFyIGN1ciA9IGFycnNbal07XG4gICAgZm9yKHZhciBrID0gMCAsa19maW5pc2ggPSBjdXIubGVuZ3RoOyBrIDwga19maW5pc2g7ICsrayl7XG4gICAgICByZXN1bHRbdG90YWxMZW5dID0gY3VyW2tdO1xuICAgICAgdG90YWxMZW4gPSB0b3RhbExlbiArIDEgfCAwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzbGljZShhLCBvZmZzZXQsIGxlbikge1xuICBpZiAobGVuIDw9IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIGxlbmEgPSBhLmxlbmd0aDtcbiAgdmFyIG9mcyA9IG9mZnNldCA8IDAgPyBDYW1sLmNhbWxfaW50X21heChsZW5hICsgb2Zmc2V0IHwgMCwgMCkgOiBvZmZzZXQ7XG4gIHZhciBoYXNMZW4gPSBsZW5hIC0gb2ZzIHwgMDtcbiAgdmFyIGNvcHlMZW5ndGggPSBoYXNMZW4gPCBsZW4gPyBoYXNMZW4gOiBsZW47XG4gIGlmIChjb3B5TGVuZ3RoIDw9IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShjb3B5TGVuZ3RoKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGNvcHlMZW5ndGg7ICsraSl7XG4gICAgcmVzdWx0W2ldID0gYVtvZnMgKyBpIHwgMF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc2xpY2VUb0VuZChhLCBvZmZzZXQpIHtcbiAgdmFyIGxlbmEgPSBhLmxlbmd0aDtcbiAgdmFyIG9mcyA9IG9mZnNldCA8IDAgPyBDYW1sLmNhbWxfaW50X21heChsZW5hICsgb2Zmc2V0IHwgMCwgMCkgOiBvZmZzZXQ7XG4gIHZhciBsZW4gPSBsZW5hIC0gb2ZzIHwgMDtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgIHJlc3VsdFtpXSA9IGFbb2ZzICsgaSB8IDBdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZpbGwoYSwgb2Zmc2V0LCBsZW4sIHYpIHtcbiAgaWYgKGxlbiA8PSAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgbGVuYSA9IGEubGVuZ3RoO1xuICB2YXIgb2ZzID0gb2Zmc2V0IDwgMCA/IENhbWwuY2FtbF9pbnRfbWF4KGxlbmEgKyBvZmZzZXQgfCAwLCAwKSA6IG9mZnNldDtcbiAgdmFyIGhhc0xlbiA9IGxlbmEgLSBvZnMgfCAwO1xuICB2YXIgZmlsbExlbmd0aCA9IGhhc0xlbiA8IGxlbiA/IGhhc0xlbiA6IGxlbjtcbiAgaWYgKGZpbGxMZW5ndGggPD0gMCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgZm9yKHZhciBpID0gb2ZzICxpX2ZpbmlzaCA9IG9mcyArIGZpbGxMZW5ndGggfCAwOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgYVtpXSA9IHY7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGJsaXRVbnNhZmUoYTEsIHNyY29mczEsIGEyLCBzcmNvZnMyLCBibGl0TGVuZ3RoKSB7XG4gIGlmIChzcmNvZnMyIDw9IHNyY29mczEpIHtcbiAgICBmb3IodmFyIGogPSAwOyBqIDwgYmxpdExlbmd0aDsgKytqKXtcbiAgICAgIGEyW2ogKyBzcmNvZnMyIHwgMF0gPSBhMVtqICsgc3Jjb2ZzMSB8IDBdO1xuICAgIH1cbiAgICByZXR1cm4gO1xuICB9XG4gIGZvcih2YXIgaiQxID0gYmxpdExlbmd0aCAtIDEgfCAwOyBqJDEgPj0gMDsgLS1qJDEpe1xuICAgIGEyW2okMSArIHNyY29mczIgfCAwXSA9IGExW2okMSArIHNyY29mczEgfCAwXTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gYmxpdChhMSwgb2ZzMSwgYTIsIG9mczIsIGxlbikge1xuICB2YXIgbGVuYTEgPSBhMS5sZW5ndGg7XG4gIHZhciBsZW5hMiA9IGEyLmxlbmd0aDtcbiAgdmFyIHNyY29mczEgPSBvZnMxIDwgMCA/IENhbWwuY2FtbF9pbnRfbWF4KGxlbmExICsgb2ZzMSB8IDAsIDApIDogb2ZzMTtcbiAgdmFyIHNyY29mczIgPSBvZnMyIDwgMCA/IENhbWwuY2FtbF9pbnRfbWF4KGxlbmEyICsgb2ZzMiB8IDAsIDApIDogb2ZzMjtcbiAgdmFyIGJsaXRMZW5ndGggPSBDYW1sLmNhbWxfaW50X21pbihsZW4sIENhbWwuY2FtbF9pbnRfbWluKGxlbmExIC0gc3Jjb2ZzMSB8IDAsIGxlbmEyIC0gc3Jjb2ZzMiB8IDApKTtcbiAgaWYgKHNyY29mczIgPD0gc3Jjb2ZzMSkge1xuICAgIGZvcih2YXIgaiA9IDA7IGogPCBibGl0TGVuZ3RoOyArK2ope1xuICAgICAgYTJbaiArIHNyY29mczIgfCAwXSA9IGExW2ogKyBzcmNvZnMxIHwgMF07XG4gICAgfVxuICAgIHJldHVybiA7XG4gIH1cbiAgZm9yKHZhciBqJDEgPSBibGl0TGVuZ3RoIC0gMSB8IDA7IGokMSA+PSAwOyAtLWokMSl7XG4gICAgYTJbaiQxICsgc3Jjb2ZzMiB8IDBdID0gYTFbaiQxICsgc3Jjb2ZzMSB8IDBdO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBmb3JFYWNoVShhLCBmKSB7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBmKGFbaV0pO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBmb3JFYWNoKGEsIGYpIHtcbiAgcmV0dXJuIGZvckVhY2hVKGEsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIG1hcFUoYSwgZikge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgciA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgcltpXSA9IGYoYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIG1hcChhLCBmKSB7XG4gIHJldHVybiBtYXBVKGEsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIGdldEJ5VShhLCBwKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIHI7XG4gIHdoaWxlKHIgPT09IHVuZGVmaW5lZCAmJiBpIDwgbCkge1xuICAgIHZhciB2ID0gYVtpXTtcbiAgICBpZiAocCh2KSkge1xuICAgICAgciA9IENhbWxfb3B0aW9uLnNvbWUodik7XG4gICAgfVxuICAgIGkgPSBpICsgMSB8IDA7XG4gIH07XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBnZXRCeShhLCBwKSB7XG4gIHJldHVybiBnZXRCeVUoYSwgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5kZXhCeVUoYSwgcCkge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciByO1xuICB3aGlsZShyID09PSB1bmRlZmluZWQgJiYgaSA8IGwpIHtcbiAgICB2YXIgdiA9IGFbaV07XG4gICAgaWYgKHAodikpIHtcbiAgICAgIHIgPSBpO1xuICAgIH1cbiAgICBpID0gaSArIDEgfCAwO1xuICB9O1xuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gZ2V0SW5kZXhCeShhLCBwKSB7XG4gIHJldHVybiBnZXRJbmRleEJ5VShhLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBrZWVwVShhLCBmKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciByID0gbmV3IEFycmF5KGwpO1xuICB2YXIgaiA9IDA7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHZhciB2ID0gYVtpXTtcbiAgICBpZiAoZih2KSkge1xuICAgICAgcltqXSA9IHY7XG4gICAgICBqID0gaiArIDEgfCAwO1xuICAgIH1cbiAgICBcbiAgfVxuICByLmxlbmd0aCA9IGo7XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBrZWVwKGEsIGYpIHtcbiAgcmV0dXJuIGtlZXBVKGEsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIGtlZXBXaXRoSW5kZXhVKGEsIGYpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIHIgPSBuZXcgQXJyYXkobCk7XG4gIHZhciBqID0gMDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgdmFyIHYgPSBhW2ldO1xuICAgIGlmIChmKHYsIGkpKSB7XG4gICAgICByW2pdID0gdjtcbiAgICAgIGogPSBqICsgMSB8IDA7XG4gICAgfVxuICAgIFxuICB9XG4gIHIubGVuZ3RoID0gajtcbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGtlZXBXaXRoSW5kZXgoYSwgZikge1xuICByZXR1cm4ga2VlcFdpdGhJbmRleFUoYSwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24ga2VlcE1hcFUoYSwgZikge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgciA9IG5ldyBBcnJheShsKTtcbiAgdmFyIGogPSAwO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICB2YXIgdiA9IGFbaV07XG4gICAgdmFyIHYkMSA9IGYodik7XG4gICAgaWYgKHYkMSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByW2pdID0gQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbih2JDEpO1xuICAgICAgaiA9IGogKyAxIHwgMDtcbiAgICB9XG4gICAgXG4gIH1cbiAgci5sZW5ndGggPSBqO1xuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24ga2VlcE1hcChhLCBmKSB7XG4gIHJldHVybiBrZWVwTWFwVShhLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoV2l0aEluZGV4VShhLCBmKSB7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBmKGksIGFbaV0pO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBmb3JFYWNoV2l0aEluZGV4KGEsIGYpIHtcbiAgcmV0dXJuIGZvckVhY2hXaXRoSW5kZXhVKGEsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIG1hcFdpdGhJbmRleFUoYSwgZikge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgciA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgcltpXSA9IGYoaSwgYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIG1hcFdpdGhJbmRleChhLCBmKSB7XG4gIHJldHVybiBtYXBXaXRoSW5kZXhVKGEsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVUoYSwgeCwgZikge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICByID0gZihyLCBhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gcmVkdWNlKGEsIHgsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVUoYSwgeCwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZVUoYSwgeCwgZikge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IGEubGVuZ3RoIC0gMSB8IDA7IGkgPj0gMDsgLS1pKXtcbiAgICByID0gZihyLCBhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZShhLCB4LCBmKSB7XG4gIHJldHVybiByZWR1Y2VSZXZlcnNlVShhLCB4LCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlMlUoYSwgYiwgeCwgZikge1xuICB2YXIgciA9IHg7XG4gIHZhciBsZW4gPSBDYW1sLmNhbWxfaW50X21pbihhLmxlbmd0aCwgYi5sZW5ndGgpO1xuICBmb3IodmFyIGkgPSBsZW4gLSAxIHwgMDsgaSA+PSAwOyAtLWkpe1xuICAgIHIgPSBmKHIsIGFbaV0sIGJbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlMihhLCBiLCB4LCBmKSB7XG4gIHJldHVybiByZWR1Y2VSZXZlcnNlMlUoYSwgYiwgeCwgQ3VycnkuX18zKGYpKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlV2l0aEluZGV4VShhLCB4LCBmKSB7XG4gIHZhciByID0geDtcbiAgZm9yKHZhciBpID0gMCAsaV9maW5pc2ggPSBhLmxlbmd0aDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIHIgPSBmKHIsIGFbaV0sIGkpO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VXaXRoSW5kZXgoYSwgeCwgZikge1xuICByZXR1cm4gcmVkdWNlV2l0aEluZGV4VShhLCB4LCBDdXJyeS5fXzMoZikpO1xufVxuXG5mdW5jdGlvbiBldmVyeVUoYXJyLCBiKSB7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICB2YXIgX2kgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA9PT0gbGVuKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFiKGFycltpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBldmVyeShhcnIsIGYpIHtcbiAgcmV0dXJuIGV2ZXJ5VShhcnIsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIHNvbWVVKGFyciwgYikge1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIF9pID0gMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPT09IGxlbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYihhcnJbaV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzb21lKGFyciwgZikge1xuICByZXR1cm4gc29tZVUoYXJyLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBldmVyeUF1eDIoYXJyMSwgYXJyMiwgX2ksIGIsIGxlbikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA9PT0gbGVuKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFiKGFycjFbaV0sIGFycjJbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXZlcnkyVShhLCBiLCBwKSB7XG4gIHJldHVybiBldmVyeUF1eDIoYSwgYiwgMCwgcCwgQ2FtbC5jYW1sX2ludF9taW4oYS5sZW5ndGgsIGIubGVuZ3RoKSk7XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5MihhLCBiLCBwKSB7XG4gIHJldHVybiBldmVyeTJVKGEsIGIsIEN1cnJ5Ll9fMihwKSk7XG59XG5cbmZ1bmN0aW9uIHNvbWUyVShhLCBiLCBwKSB7XG4gIHZhciBfaSA9IDA7XG4gIHZhciBsZW4gPSBDYW1sLmNhbWxfaW50X21pbihhLmxlbmd0aCwgYi5sZW5ndGgpO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA9PT0gbGVuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwKGFbaV0sIGJbaV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzb21lMihhLCBiLCBwKSB7XG4gIHJldHVybiBzb21lMlUoYSwgYiwgQ3VycnkuX18yKHApKTtcbn1cblxuZnVuY3Rpb24gZXFVKGEsIGIsIHApIHtcbiAgdmFyIGxlbmEgPSBhLmxlbmd0aDtcbiAgdmFyIGxlbmIgPSBiLmxlbmd0aDtcbiAgaWYgKGxlbmEgPT09IGxlbmIpIHtcbiAgICByZXR1cm4gZXZlcnlBdXgyKGEsIGIsIDAsIHAsIGxlbmEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlcShhLCBiLCBwKSB7XG4gIHJldHVybiBlcVUoYSwgYiwgQ3VycnkuX18yKHApKTtcbn1cblxuZnVuY3Rpb24gY21wVShhLCBiLCBwKSB7XG4gIHZhciBsZW5hID0gYS5sZW5ndGg7XG4gIHZhciBsZW5iID0gYi5sZW5ndGg7XG4gIGlmIChsZW5hID4gbGVuYikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKGxlbmEgPCBsZW5iKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHZhciBfaSA9IDA7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIGkgPSBfaTtcbiAgICAgIGlmIChpID09PSBsZW5hKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgdmFyIGMgPSBwKGFbaV0sIGJbaV0pO1xuICAgICAgaWYgKGMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9XG4gICAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNtcChhLCBiLCBwKSB7XG4gIHJldHVybiBjbXBVKGEsIGIsIEN1cnJ5Ll9fMihwKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnRpdGlvblUoYSwgZikge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBqID0gMDtcbiAgdmFyIGExID0gbmV3IEFycmF5KGwpO1xuICB2YXIgYTIgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaWkgPSAwOyBpaSA8IGw7ICsraWkpe1xuICAgIHZhciB2ID0gYVtpaV07XG4gICAgaWYgKGYodikpIHtcbiAgICAgIGExW2ldID0gdjtcbiAgICAgIGkgPSBpICsgMSB8IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGEyW2pdID0gdjtcbiAgICAgIGogPSBqICsgMSB8IDA7XG4gICAgfVxuICB9XG4gIGExLmxlbmd0aCA9IGk7XG4gIGEyLmxlbmd0aCA9IGo7XG4gIHJldHVybiBbXG4gICAgICAgICAgYTEsXG4gICAgICAgICAgYTJcbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uKGEsIGYpIHtcbiAgcmV0dXJuIHBhcnRpdGlvblUoYSwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gdW56aXAoYSkge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgYTEgPSBuZXcgQXJyYXkobCk7XG4gIHZhciBhMiA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgdmFyIG1hdGNoID0gYVtpXTtcbiAgICBhMVtpXSA9IG1hdGNoWzBdO1xuICAgIGEyW2ldID0gbWF0Y2hbMV07XG4gIH1cbiAgcmV0dXJuIFtcbiAgICAgICAgICBhMSxcbiAgICAgICAgICBhMlxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBqb2luV2l0aFUoYSwgc2VwLCB0b1N0cmluZykge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICBpZiAobCA9PT0gMCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBsIC0gMSB8IDA7XG4gIHZhciBfaSA9IDA7XG4gIHZhciBfcmVzID0gXCJcIjtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciByZXMgPSBfcmVzO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPT09IGxhc3RJbmRleCkge1xuICAgICAgcmV0dXJuIHJlcyArIHRvU3RyaW5nKGFbaV0pO1xuICAgIH1cbiAgICBfcmVzID0gcmVzICsgKHRvU3RyaW5nKGFbaV0pICsgc2VwKTtcbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGpvaW5XaXRoKGEsIHNlcCwgdG9TdHJpbmcpIHtcbiAgcmV0dXJuIGpvaW5XaXRoVShhLCBzZXAsIEN1cnJ5Ll9fMSh0b1N0cmluZykpO1xufVxuXG5leHBvcnQge1xuICBnZXQgLFxuICBnZXRFeG4gLFxuICBzZXQgLFxuICBzZXRFeG4gLFxuICBzaHVmZmxlSW5QbGFjZSAsXG4gIHNodWZmbGUgLFxuICByZXZlcnNlSW5QbGFjZSAsXG4gIHJldmVyc2UgLFxuICBtYWtlICxcbiAgcmFuZ2UgLFxuICByYW5nZUJ5ICxcbiAgbWFrZUJ5VSAsXG4gIG1ha2VCeSAsXG4gIG1ha2VCeUFuZFNodWZmbGVVICxcbiAgbWFrZUJ5QW5kU2h1ZmZsZSAsXG4gIHppcCAsXG4gIHppcEJ5VSAsXG4gIHppcEJ5ICxcbiAgdW56aXAgLFxuICBjb25jYXQgLFxuICBjb25jYXRNYW55ICxcbiAgc2xpY2UgLFxuICBzbGljZVRvRW5kICxcbiAgZmlsbCAsXG4gIGJsaXQgLFxuICBibGl0VW5zYWZlICxcbiAgZm9yRWFjaFUgLFxuICBmb3JFYWNoICxcbiAgbWFwVSAsXG4gIG1hcCAsXG4gIGdldEJ5VSAsXG4gIGdldEJ5ICxcbiAgZ2V0SW5kZXhCeVUgLFxuICBnZXRJbmRleEJ5ICxcbiAga2VlcFUgLFxuICBrZWVwICxcbiAga2VlcFdpdGhJbmRleFUgLFxuICBrZWVwV2l0aEluZGV4ICxcbiAga2VlcE1hcFUgLFxuICBrZWVwTWFwICxcbiAgZm9yRWFjaFdpdGhJbmRleFUgLFxuICBmb3JFYWNoV2l0aEluZGV4ICxcbiAgbWFwV2l0aEluZGV4VSAsXG4gIG1hcFdpdGhJbmRleCAsXG4gIHBhcnRpdGlvblUgLFxuICBwYXJ0aXRpb24gLFxuICByZWR1Y2VVICxcbiAgcmVkdWNlICxcbiAgcmVkdWNlUmV2ZXJzZVUgLFxuICByZWR1Y2VSZXZlcnNlICxcbiAgcmVkdWNlUmV2ZXJzZTJVICxcbiAgcmVkdWNlUmV2ZXJzZTIgLFxuICByZWR1Y2VXaXRoSW5kZXhVICxcbiAgcmVkdWNlV2l0aEluZGV4ICxcbiAgam9pbldpdGhVICxcbiAgam9pbldpdGggLFxuICBzb21lVSAsXG4gIHNvbWUgLFxuICBldmVyeVUgLFxuICBldmVyeSAsXG4gIGV2ZXJ5MlUgLFxuICBldmVyeTIgLFxuICBzb21lMlUgLFxuICBzb21lMiAsXG4gIGNtcFUgLFxuICBjbXAgLFxuICBlcVUgLFxuICBlcSAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwiLi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9BcnJheSBmcm9tIFwiLi9iZWx0X0FycmF5LmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX29wdGlvbiBmcm9tIFwiLi9jYW1sX29wdGlvbi5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9Tb3J0QXJyYXkgZnJvbSBcIi4vYmVsdF9Tb3J0QXJyYXkuanNcIjtcblxuZnVuY3Rpb24gaGVhZCh4KSB7XG4gIGlmICh4KSB7XG4gICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoeC5oZCk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGhlYWRFeG4oeCkge1xuICBpZiAoeCkge1xuICAgIHJldHVybiB4LmhkO1xuICB9XG4gIHRocm93IHtcbiAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHRhaWwoeCkge1xuICBpZiAoeCkge1xuICAgIHJldHVybiB4LnRsO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiB0YWlsRXhuKHgpIHtcbiAgaWYgKHgpIHtcbiAgICByZXR1cm4geC50bDtcbiAgfVxuICB0aHJvdyB7XG4gICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICB9O1xufVxuXG5mdW5jdGlvbiBhZGQoeHMsIHgpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBoZDogeCxcbiAgICAgICAgICB0bDogeHNcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0KHgsIG4pIHtcbiAgaWYgKG4gPCAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX3ggPSB4O1xuICAgIHZhciBfbiA9IG47XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIG4kMSA9IF9uO1xuICAgICAgdmFyIHgkMSA9IF94O1xuICAgICAgaWYgKCF4JDEpIHtcbiAgICAgICAgcmV0dXJuIDtcbiAgICAgIH1cbiAgICAgIGlmIChuJDEgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoeCQxLmhkKTtcbiAgICAgIH1cbiAgICAgIF9uID0gbiQxIC0gMSB8IDA7XG4gICAgICBfeCA9IHgkMS50bDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEV4bih4LCBuKSB7XG4gIGlmIChuIDwgMCkge1xuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IFwiTm90X2ZvdW5kXCIsXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH1cbiAgdmFyIF94ID0geDtcbiAgdmFyIF9uID0gbjtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBuJDEgPSBfbjtcbiAgICB2YXIgeCQxID0gX3g7XG4gICAgaWYgKHgkMSkge1xuICAgICAgaWYgKG4kMSA9PT0gMCkge1xuICAgICAgICByZXR1cm4geCQxLmhkO1xuICAgICAgfVxuICAgICAgX24gPSBuJDEgLSAxIHwgMDtcbiAgICAgIF94ID0geCQxLnRsO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICB0aHJvdyB7XG4gICAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb25BdXgocCwgX2NlbGwsIF9wcmVjWCwgX3ByZWNZKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlY1kgPSBfcHJlY1k7XG4gICAgdmFyIHByZWNYID0gX3ByZWNYO1xuICAgIHZhciBjZWxsID0gX2NlbGw7XG4gICAgaWYgKCFjZWxsKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgdCA9IGNlbGwudGw7XG4gICAgdmFyIGggPSBjZWxsLmhkO1xuICAgIHZhciBuZXh0ID0ge1xuICAgICAgaGQ6IGgsXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBpZiAocChoKSkge1xuICAgICAgcHJlY1gudGwgPSBuZXh0O1xuICAgICAgX3ByZWNYID0gbmV4dDtcbiAgICAgIF9jZWxsID0gdDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgcHJlY1kudGwgPSBuZXh0O1xuICAgIF9wcmVjWSA9IG5leHQ7XG4gICAgX2NlbGwgPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3BsaXRBdXgoX2NlbGwsIF9wcmVjWCwgX3ByZWNZKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlY1kgPSBfcHJlY1k7XG4gICAgdmFyIHByZWNYID0gX3ByZWNYO1xuICAgIHZhciBjZWxsID0gX2NlbGw7XG4gICAgaWYgKCFjZWxsKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgbWF0Y2ggPSBjZWxsLmhkO1xuICAgIHZhciBuZXh0QSA9IHtcbiAgICAgIGhkOiBtYXRjaFswXSxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHZhciBuZXh0QiA9IHtcbiAgICAgIGhkOiBtYXRjaFsxXSxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWNYLnRsID0gbmV4dEE7XG4gICAgcHJlY1kudGwgPSBuZXh0QjtcbiAgICBfcHJlY1kgPSBuZXh0QjtcbiAgICBfcHJlY1ggPSBuZXh0QTtcbiAgICBfY2VsbCA9IGNlbGwudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb3B5QXV4Q29udChfY2VsbFgsIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gcHJlYztcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogY2VsbFguaGQsXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gbmV4dDtcbiAgICBfcHJlYyA9IG5leHQ7XG4gICAgX2NlbGxYID0gY2VsbFgudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb3B5QXV4V2l0RmlsdGVyKGYsIF9jZWxsWCwgX3ByZWMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciB0ID0gY2VsbFgudGw7XG4gICAgdmFyIGggPSBjZWxsWC5oZDtcbiAgICBpZiAoZihoKSkge1xuICAgICAgdmFyIG5leHQgPSB7XG4gICAgICAgIGhkOiBoLFxuICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICB9O1xuICAgICAgcHJlYy50bCA9IG5leHQ7XG4gICAgICBfcHJlYyA9IG5leHQ7XG4gICAgICBfY2VsbFggPSB0O1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBfY2VsbFggPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eFdpdGhGaWx0ZXJJbmRleChmLCBfY2VsbFgsIF9wcmVjLCBfaSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgdCA9IGNlbGxYLnRsO1xuICAgIHZhciBoID0gY2VsbFguaGQ7XG4gICAgaWYgKGYoaCwgaSkpIHtcbiAgICAgIHZhciBuZXh0ID0ge1xuICAgICAgICBoZDogaCxcbiAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgfTtcbiAgICAgIHByZWMudGwgPSBuZXh0O1xuICAgICAgX2kgPSBpICsgMSB8IDA7XG4gICAgICBfcHJlYyA9IG5leHQ7XG4gICAgICBfY2VsbFggPSB0O1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBfY2VsbFggPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eFdpdEZpbHRlck1hcChmLCBfY2VsbFgsIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgdCA9IGNlbGxYLnRsO1xuICAgIHZhciBoID0gZihjZWxsWC5oZCk7XG4gICAgaWYgKGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIG5leHQgPSB7XG4gICAgICAgIGhkOiBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKGgpLFxuICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICB9O1xuICAgICAgcHJlYy50bCA9IG5leHQ7XG4gICAgICBfcHJlYyA9IG5leHQ7XG4gICAgICBfY2VsbFggPSB0O1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBfY2VsbFggPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXNzb2NBdXhXaXRoTWFwKF9jZWxsWCwgeCwgX3ByZWMsIGYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHQgPSBjZWxsWC50bDtcbiAgICB2YXIgaCA9IGNlbGxYLmhkO1xuICAgIGlmIChmKGhbMF0sIHgpKSB7XG4gICAgICBwcmVjLnRsID0gdDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgbmV4dCA9IHtcbiAgICAgIGhkOiBoLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IG5leHQ7XG4gICAgX3ByZWMgPSBuZXh0O1xuICAgIF9jZWxsWCA9IHQ7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzZXRBc3NvY0F1eFdpdGhNYXAoX2NlbGxYLCB4LCBrLCBfcHJlYywgZXEpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHQgPSBjZWxsWC50bDtcbiAgICB2YXIgaCA9IGNlbGxYLmhkO1xuICAgIGlmIChlcShoWzBdLCB4KSkge1xuICAgICAgcHJlYy50bCA9IHtcbiAgICAgICAgaGQ6IFtcbiAgICAgICAgICB4LFxuICAgICAgICAgIGtcbiAgICAgICAgXSxcbiAgICAgICAgdGw6IHRcbiAgICAgIH07XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogaCxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWMudGwgPSBuZXh0O1xuICAgIF9wcmVjID0gbmV4dDtcbiAgICBfY2VsbFggPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eFdpdGhNYXAoX2NlbGxYLCBfcHJlYywgZikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogZihjZWxsWC5oZCksXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gbmV4dDtcbiAgICBfcHJlYyA9IG5leHQ7XG4gICAgX2NlbGxYID0gY2VsbFgudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiB6aXBBdXgoX2NlbGxYLCBfY2VsbFksIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWSA9IF9jZWxsWTtcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgaWYgKCFjZWxsWSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogW1xuICAgICAgICBjZWxsWC5oZCxcbiAgICAgICAgY2VsbFkuaGRcbiAgICAgIF0sXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gbmV4dDtcbiAgICBfcHJlYyA9IG5leHQ7XG4gICAgX2NlbGxZID0gY2VsbFkudGw7XG4gICAgX2NlbGxYID0gY2VsbFgudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb3B5QXV4V2l0aE1hcDIoZiwgX2NlbGxYLCBfY2VsbFksIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWSA9IF9jZWxsWTtcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgaWYgKCFjZWxsWSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogZihjZWxsWC5oZCwgY2VsbFkuaGQpLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IG5leHQ7XG4gICAgX3ByZWMgPSBuZXh0O1xuICAgIF9jZWxsWSA9IGNlbGxZLnRsO1xuICAgIF9jZWxsWCA9IGNlbGxYLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eFdpdGhNYXBJKGYsIF9pLCBfY2VsbFgsIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciBuZXh0ID0ge1xuICAgICAgaGQ6IGYoaSwgY2VsbFguaGQpLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IG5leHQ7XG4gICAgX3ByZWMgPSBuZXh0O1xuICAgIF9jZWxsWCA9IGNlbGxYLnRsO1xuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGFrZUF1eChfbiwgX2NlbGwsIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsID0gX2NlbGw7XG4gICAgdmFyIG4gPSBfbjtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghY2VsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgY2VsbCQxID0ge1xuICAgICAgaGQ6IGNlbGwuaGQsXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gY2VsbCQxO1xuICAgIF9wcmVjID0gY2VsbCQxO1xuICAgIF9jZWxsID0gY2VsbC50bDtcbiAgICBfbiA9IG4gLSAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNwbGl0QXRBdXgoX24sIF9jZWxsLCBfcHJlYykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbCA9IF9jZWxsO1xuICAgIHZhciBuID0gX247XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cbiAgICBpZiAoIWNlbGwpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciBjZWxsJDEgPSB7XG4gICAgICBoZDogY2VsbC5oZCxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWMudGwgPSBjZWxsJDE7XG4gICAgX3ByZWMgPSBjZWxsJDE7XG4gICAgX2NlbGwgPSBjZWxsLnRsO1xuICAgIF9uID0gbiAtIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGFrZShsc3QsIG4pIHtcbiAgaWYgKG4gPCAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICBpZiAobiA9PT0gMCkge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgaWYgKCFsc3QpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiBsc3QuaGQsXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgaGFzID0gdGFrZUF1eChuIC0gMSB8IDAsIGxzdC50bCwgY2VsbCk7XG4gIGlmIChoYXMpIHtcbiAgICByZXR1cm4gY2VsbDtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gZHJvcChsc3QsIG4pIHtcbiAgaWYgKG4gPCAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2wgPSBsc3Q7XG4gICAgdmFyIF9uID0gbjtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgbiQxID0gX247XG4gICAgICB2YXIgbCA9IF9sO1xuICAgICAgaWYgKG4kMSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbDtcbiAgICAgIH1cbiAgICAgIGlmICghbCkge1xuICAgICAgICByZXR1cm4gO1xuICAgICAgfVxuICAgICAgX24gPSBuJDEgLSAxIHwgMDtcbiAgICAgIF9sID0gbC50bDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNwbGl0QXQobHN0LCBuKSB7XG4gIGlmIChuIDwgMCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgaWYgKG4gPT09IDApIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgLyogW10gKi8wLFxuICAgICAgICAgICAgbHN0XG4gICAgICAgICAgXTtcbiAgfVxuICBpZiAoIWxzdCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IGxzdC5oZCxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciByZXN0ID0gc3BsaXRBdEF1eChuIC0gMSB8IDAsIGxzdC50bCwgY2VsbCk7XG4gIGlmIChyZXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgY2VsbCxcbiAgICAgICAgICAgIHJlc3RcbiAgICAgICAgICBdO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBjb25jYXQoeHMsIHlzKSB7XG4gIGlmICgheHMpIHtcbiAgICByZXR1cm4geXM7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IHhzLmhkLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgY29weUF1eENvbnQoeHMudGwsIGNlbGwpLnRsID0geXM7XG4gIHJldHVybiBjZWxsO1xufVxuXG5mdW5jdGlvbiBtYXBVKHhzLCBmKSB7XG4gIGlmICgheHMpIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiBmKHhzLmhkKSxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIGNvcHlBdXhXaXRoTWFwKHhzLnRsLCBjZWxsLCBmKTtcbiAgcmV0dXJuIGNlbGw7XG59XG5cbmZ1bmN0aW9uIG1hcCh4cywgZikge1xuICByZXR1cm4gbWFwVSh4cywgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gemlwQnlVKGwxLCBsMiwgZikge1xuICBpZiAoIWwxKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICBpZiAoIWwyKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICB2YXIgY2VsbCA9IHtcbiAgICBoZDogZihsMS5oZCwgbDIuaGQpLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgY29weUF1eFdpdGhNYXAyKGYsIGwxLnRsLCBsMi50bCwgY2VsbCk7XG4gIHJldHVybiBjZWxsO1xufVxuXG5mdW5jdGlvbiB6aXBCeShsMSwgbDIsIGYpIHtcbiAgcmV0dXJuIHppcEJ5VShsMSwgbDIsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIG1hcFdpdGhJbmRleFUoeHMsIGYpIHtcbiAgaWYgKCF4cykge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IGYoMCwgeHMuaGQpLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgY29weUF1eFdpdGhNYXBJKGYsIDEsIHhzLnRsLCBjZWxsKTtcbiAgcmV0dXJuIGNlbGw7XG59XG5cbmZ1bmN0aW9uIG1hcFdpdGhJbmRleCh4cywgZikge1xuICByZXR1cm4gbWFwV2l0aEluZGV4VSh4cywgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gbWFrZUJ5VShuLCBmKSB7XG4gIGlmIChuIDw9IDApIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIHZhciBoZWFkWCA9IHtcbiAgICBoZDogZigwKSxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciBjdXIgPSBoZWFkWDtcbiAgdmFyIGkgPSAxO1xuICB3aGlsZShpIDwgbikge1xuICAgIHZhciB2ID0ge1xuICAgICAgaGQ6IGYoaSksXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBjdXIudGwgPSB2O1xuICAgIGN1ciA9IHY7XG4gICAgaSA9IGkgKyAxIHwgMDtcbiAgfTtcbiAgcmV0dXJuIGhlYWRYO1xufVxuXG5mdW5jdGlvbiBtYWtlQnkobiwgZikge1xuICByZXR1cm4gbWFrZUJ5VShuLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBtYWtlKG4sIHYpIHtcbiAgaWYgKG4gPD0gMCkge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgdmFyIGhlYWRYID0ge1xuICAgIGhkOiB2LFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIGN1ciA9IGhlYWRYO1xuICB2YXIgaSA9IDE7XG4gIHdoaWxlKGkgPCBuKSB7XG4gICAgdmFyIHYkMSA9IHtcbiAgICAgIGhkOiB2LFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgY3VyLnRsID0gdiQxO1xuICAgIGN1ciA9IHYkMTtcbiAgICBpID0gaSArIDEgfCAwO1xuICB9O1xuICByZXR1cm4gaGVhZFg7XG59XG5cbmZ1bmN0aW9uIGxlbmd0aCh4cykge1xuICB2YXIgX3ggPSB4cztcbiAgdmFyIF9hY2MgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgdmFyIHggPSBfeDtcbiAgICBpZiAoIXgpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIF9hY2MgPSBhY2MgKyAxIHwgMDtcbiAgICBfeCA9IHgudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWxsQXV4KGFyciwgX2ksIF94KSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeCA9IF94O1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKCF4KSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBhcnJbaV0gPSB4LmhkO1xuICAgIF94ID0geC50bDtcbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheShhKSB7XG4gIHZhciBfaSA9IGEubGVuZ3RoIC0gMSB8IDA7XG4gIHZhciBfcmVzID0gLyogW10gKi8wO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHJlcyA9IF9yZXM7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIF9yZXMgPSB7XG4gICAgICBoZDogYVtpXSxcbiAgICAgIHRsOiByZXNcbiAgICB9O1xuICAgIF9pID0gaSAtIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheSh4KSB7XG4gIHZhciBsZW4gPSBsZW5ndGgoeCk7XG4gIHZhciBhcnIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZmlsbEF1eChhcnIsIDAsIHgpO1xuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBzaHVmZmxlKHhzKSB7XG4gIHZhciB2ID0gdG9BcnJheSh4cyk7XG4gIEJlbHRfQXJyYXkuc2h1ZmZsZUluUGxhY2Uodik7XG4gIHJldHVybiBmcm9tQXJyYXkodik7XG59XG5cbmZ1bmN0aW9uIHJldmVyc2VDb25jYXQoX2wxLCBfbDIpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKCFsMSkge1xuICAgICAgcmV0dXJuIGwyO1xuICAgIH1cbiAgICBfbDIgPSB7XG4gICAgICBoZDogbDEuaGQsXG4gICAgICB0bDogbDJcbiAgICB9O1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmV2ZXJzZShsKSB7XG4gIHJldHVybiByZXZlcnNlQ29uY2F0KGwsIC8qIFtdICovMCk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5BdXgoX3ByZWMsIF94cykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgaWYgKHhzKSB7XG4gICAgICBfeHMgPSB4cy50bDtcbiAgICAgIF9wcmVjID0gY29weUF1eENvbnQoeHMuaGQsIHByZWMpO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBwcmVjLnRsID0gLyogW10gKi8wO1xuICAgIHJldHVybiA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oX3hzKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIC8qIFtdICovMDtcbiAgICB9XG4gICAgdmFyIG1hdGNoID0geHMuaGQ7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICB2YXIgY2VsbCA9IHtcbiAgICAgICAgaGQ6IG1hdGNoLmhkLFxuICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICB9O1xuICAgICAgZmxhdHRlbkF1eChjb3B5QXV4Q29udChtYXRjaC50bCwgY2VsbCksIHhzLnRsKTtcbiAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbmNhdE1hbnkoeHMpIHtcbiAgdmFyIGxlbiA9IHhzLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMSkge1xuICAgIHJldHVybiB4c1swXTtcbiAgfVxuICBpZiAobGVuID09PSAwKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICB2YXIgbGVuJDEgPSB4cy5sZW5ndGg7XG4gIHZhciB2ID0geHNbbGVuJDEgLSAxIHwgMF07XG4gIGZvcih2YXIgaSA9IGxlbiQxIC0gMiB8IDA7IGkgPj0gMDsgLS1pKXtcbiAgICB2ID0gY29uY2F0KHhzW2ldLCB2KTtcbiAgfVxuICByZXR1cm4gdjtcbn1cblxuZnVuY3Rpb24gbWFwUmV2ZXJzZVUobCwgZikge1xuICB2YXIgX2FjY3UgPSAvKiBbXSAqLzA7XG4gIHZhciBfeHMgPSBsO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIF94cyA9IHhzLnRsO1xuICAgIF9hY2N1ID0ge1xuICAgICAgaGQ6IGYoeHMuaGQpLFxuICAgICAgdGw6IGFjY3VcbiAgICB9O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwUmV2ZXJzZShsLCBmKSB7XG4gIHJldHVybiBtYXBSZXZlcnNlVShsLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoVShfeHMsIGYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBmKHhzLmhkKTtcbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvckVhY2goeHMsIGYpIHtcbiAgcmV0dXJuIGZvckVhY2hVKHhzLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoV2l0aEluZGV4VShsLCBmKSB7XG4gIHZhciBfeHMgPSBsO1xuICB2YXIgX2kgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgZihpLCB4cy5oZCk7XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoV2l0aEluZGV4KGwsIGYpIHtcbiAgcmV0dXJuIGZvckVhY2hXaXRoSW5kZXhVKGwsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVUoX2wsIF9hY2N1LCBmKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYWNjdSA9IF9hY2N1O1xuICAgIHZhciBsID0gX2w7XG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9XG4gICAgX2FjY3UgPSBmKGFjY3UsIGwuaGQpO1xuICAgIF9sID0gbC50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZShsLCBhY2N1LCBmKSB7XG4gIHJldHVybiByZWR1Y2VVKGwsIGFjY3UsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2VVbnNhZmVVKGwsIGFjY3UsIGYpIHtcbiAgaWYgKGwpIHtcbiAgICByZXR1cm4gZihyZWR1Y2VSZXZlcnNlVW5zYWZlVShsLnRsLCBhY2N1LCBmKSwgbC5oZCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFjY3U7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZVUobCwgYWNjLCBmKSB7XG4gIHZhciBsZW4gPSBsZW5ndGgobCk7XG4gIGlmIChsZW4gPCAxMDAwKSB7XG4gICAgcmV0dXJuIHJlZHVjZVJldmVyc2VVbnNhZmVVKGwsIGFjYywgZik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEJlbHRfQXJyYXkucmVkdWNlUmV2ZXJzZVUodG9BcnJheShsKSwgYWNjLCBmKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlKGwsIGFjY3UsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVJldmVyc2VVKGwsIGFjY3UsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVdpdGhJbmRleFUobCwgYWNjLCBmKSB7XG4gIHZhciBfbCA9IGw7XG4gIHZhciBfYWNjID0gYWNjO1xuICB2YXIgX2kgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICB2YXIgYWNjJDEgPSBfYWNjO1xuICAgIHZhciBsJDEgPSBfbDtcbiAgICBpZiAoIWwkMSkge1xuICAgICAgcmV0dXJuIGFjYyQxO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBfYWNjID0gZihhY2MkMSwgbCQxLmhkLCBpKTtcbiAgICBfbCA9IGwkMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVdpdGhJbmRleChsLCBhY2MsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVdpdGhJbmRleFUobCwgYWNjLCBDdXJyeS5fXzMoZikpO1xufVxuXG5mdW5jdGlvbiBtYXBSZXZlcnNlMlUobDEsIGwyLCBmKSB7XG4gIHZhciBfbDEgPSBsMTtcbiAgdmFyIF9sMiA9IGwyO1xuICB2YXIgX2FjY3UgPSAvKiBbXSAqLzA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYWNjdSA9IF9hY2N1O1xuICAgIHZhciBsMiQxID0gX2wyO1xuICAgIHZhciBsMSQxID0gX2wxO1xuICAgIGlmICghbDEkMSkge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIGlmICghbDIkMSkge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIF9hY2N1ID0ge1xuICAgICAgaGQ6IGYobDEkMS5oZCwgbDIkMS5oZCksXG4gICAgICB0bDogYWNjdVxuICAgIH07XG4gICAgX2wyID0gbDIkMS50bDtcbiAgICBfbDEgPSBsMSQxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwUmV2ZXJzZTIobDEsIGwyLCBmKSB7XG4gIHJldHVybiBtYXBSZXZlcnNlMlUobDEsIGwyLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoMlUoX2wxLCBfbDIsIGYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKCFsMSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgZihsMS5oZCwgbDIuaGQpO1xuICAgIF9sMiA9IGwyLnRsO1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaDIobDEsIGwyLCBmKSB7XG4gIHJldHVybiBmb3JFYWNoMlUobDEsIGwyLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2UyVShfbDEsIF9sMiwgX2FjY3UsIGYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgdmFyIGwyID0gX2wyO1xuICAgIHZhciBsMSA9IF9sMTtcbiAgICBpZiAoIWwxKSB7XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIF9hY2N1ID0gZihhY2N1LCBsMS5oZCwgbDIuaGQpO1xuICAgIF9sMiA9IGwyLnRsO1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlMihsMSwgbDIsIGFjYywgZikge1xuICByZXR1cm4gcmVkdWNlMlUobDEsIGwyLCBhY2MsIEN1cnJ5Ll9fMyhmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2UyVW5zYWZlVShsMSwgbDIsIGFjY3UsIGYpIHtcbiAgaWYgKGwxICYmIGwyKSB7XG4gICAgcmV0dXJuIGYocmVkdWNlUmV2ZXJzZTJVbnNhZmVVKGwxLnRsLCBsMi50bCwgYWNjdSwgZiksIGwxLmhkLCBsMi5oZCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFjY3U7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZTJVKGwxLCBsMiwgYWNjLCBmKSB7XG4gIHZhciBsZW4gPSBsZW5ndGgobDEpO1xuICBpZiAobGVuIDwgMTAwMCkge1xuICAgIHJldHVybiByZWR1Y2VSZXZlcnNlMlVuc2FmZVUobDEsIGwyLCBhY2MsIGYpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBCZWx0X0FycmF5LnJlZHVjZVJldmVyc2UyVSh0b0FycmF5KGwxKSwgdG9BcnJheShsMiksIGFjYywgZik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZTIobDEsIGwyLCBhY2MsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVJldmVyc2UyVShsMSwgbDIsIGFjYywgQ3VycnkuX18zKGYpKTtcbn1cblxuZnVuY3Rpb24gZXZlcnlVKF94cywgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXAoeHMuaGQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF94cyA9IHhzLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXZlcnkoeHMsIHApIHtcbiAgcmV0dXJuIGV2ZXJ5VSh4cywgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gc29tZVUoX3hzLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocCh4cy5oZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNvbWUoeHMsIHApIHtcbiAgcmV0dXJuIHNvbWVVKHhzLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBldmVyeTJVKF9sMSwgX2wyLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWwyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFwKGwxLmhkLCBsMi5oZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX2wyID0gbDIudGw7XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBldmVyeTIobDEsIGwyLCBwKSB7XG4gIHJldHVybiBldmVyeTJVKGwxLCBsMiwgQ3VycnkuX18yKHApKTtcbn1cblxuZnVuY3Rpb24gY21wQnlMZW5ndGgoX2wxLCBfbDIpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKCFsMSkge1xuICAgICAgaWYgKGwyKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWwyKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgX2wyID0gbDIudGw7XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjbXBVKF9sMSwgX2wyLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIGlmIChsMikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHZhciBjID0gcChsMS5oZCwgbDIuaGQpO1xuICAgIGlmIChjICE9PSAwKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgX2wyID0gbDIudGw7XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjbXAobDEsIGwyLCBmKSB7XG4gIHJldHVybiBjbXBVKGwxLCBsMiwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gZXFVKF9sMSwgX2wyLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIGlmIChsMikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXAobDEuaGQsIGwyLmhkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfbDIgPSBsMi50bDtcbiAgICBfbDEgPSBsMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVxKGwxLCBsMiwgZikge1xuICByZXR1cm4gZXFVKGwxLCBsMiwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gc29tZTJVKF9sMSwgX2wyLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocChsMS5oZCwgbDIuaGQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX2wyID0gbDIudGw7XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzb21lMihsMSwgbDIsIHApIHtcbiAgcmV0dXJuIHNvbWUyVShsMSwgbDIsIEN1cnJ5Ll9fMihwKSk7XG59XG5cbmZ1bmN0aW9uIGhhc1UoX3hzLCB4LCBlcSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGVxKHhzLmhkLCB4KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF94cyA9IHhzLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaGFzKHhzLCB4LCBlcSkge1xuICByZXR1cm4gaGFzVSh4cywgeCwgQ3VycnkuX18yKGVxKSk7XG59XG5cbmZ1bmN0aW9uIGdldEFzc29jVShfeHMsIHgsIGVxKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIG1hdGNoID0geHMuaGQ7XG4gICAgaWYgKGVxKG1hdGNoWzBdLCB4KSkge1xuICAgICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUobWF0Y2hbMV0pO1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEFzc29jKHhzLCB4LCBlcSkge1xuICByZXR1cm4gZ2V0QXNzb2NVKHhzLCB4LCBDdXJyeS5fXzIoZXEpKTtcbn1cblxuZnVuY3Rpb24gaGFzQXNzb2NVKF94cywgeCwgZXEpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChlcSh4cy5oZFswXSwgeCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGhhc0Fzc29jKHhzLCB4LCBlcSkge1xuICByZXR1cm4gaGFzQXNzb2NVKHhzLCB4LCBDdXJyeS5fXzIoZXEpKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXNzb2NVKHhzLCB4LCBlcSkge1xuICBpZiAoIXhzKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICB2YXIgbCA9IHhzLnRsO1xuICB2YXIgcGFpciA9IHhzLmhkO1xuICBpZiAoZXEocGFpclswXSwgeCkpIHtcbiAgICByZXR1cm4gbDtcbiAgfVxuICB2YXIgY2VsbCA9IHtcbiAgICBoZDogcGFpcixcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciByZW1vdmVkID0gcmVtb3ZlQXNzb2NBdXhXaXRoTWFwKGwsIHgsIGNlbGwsIGVxKTtcbiAgaWYgKHJlbW92ZWQpIHtcbiAgICByZXR1cm4gY2VsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXNzb2MoeHMsIHgsIGVxKSB7XG4gIHJldHVybiByZW1vdmVBc3NvY1UoeHMsIHgsIEN1cnJ5Ll9fMihlcSkpO1xufVxuXG5mdW5jdGlvbiBzZXRBc3NvY1UoeHMsIHgsIGssIGVxKSB7XG4gIGlmICgheHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IFtcbiAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAga1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICB9O1xuICB9XG4gIHZhciBsID0geHMudGw7XG4gIHZhciBwYWlyID0geHMuaGQ7XG4gIGlmIChlcShwYWlyWzBdLCB4KSkge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZDogW1xuICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICBrXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdGw6IGxcbiAgICAgICAgICB9O1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiBwYWlyLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIHJlcGxhY2VkID0gc2V0QXNzb2NBdXhXaXRoTWFwKGwsIHgsIGssIGNlbGwsIGVxKTtcbiAgaWYgKHJlcGxhY2VkKSB7XG4gICAgcmV0dXJuIGNlbGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiBbXG4gICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgIGtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0bDogeHNcbiAgICAgICAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEFzc29jKHhzLCB4LCBrLCBlcSkge1xuICByZXR1cm4gc2V0QXNzb2NVKHhzLCB4LCBrLCBDdXJyeS5fXzIoZXEpKTtcbn1cblxuZnVuY3Rpb24gc29ydFUoeHMsIGNtcCkge1xuICB2YXIgYXJyID0gdG9BcnJheSh4cyk7XG4gIEJlbHRfU29ydEFycmF5LnN0YWJsZVNvcnRJblBsYWNlQnlVKGFyciwgY21wKTtcbiAgcmV0dXJuIGZyb21BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBzb3J0KHhzLCBjbXApIHtcbiAgcmV0dXJuIHNvcnRVKHhzLCBDdXJyeS5fXzIoY21wKSk7XG59XG5cbmZ1bmN0aW9uIGdldEJ5VShfeHMsIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgeCA9IHhzLmhkO1xuICAgIGlmIChwKHgpKSB7XG4gICAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZSh4KTtcbiAgICB9XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRCeSh4cywgcCkge1xuICByZXR1cm4gZ2V0QnlVKHhzLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBrZWVwVShfeHMsIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gLyogW10gKi8wO1xuICAgIH1cbiAgICB2YXIgdCA9IHhzLnRsO1xuICAgIHZhciBoID0geHMuaGQ7XG4gICAgaWYgKHAoaCkpIHtcbiAgICAgIHZhciBjZWxsID0ge1xuICAgICAgICBoZDogaCxcbiAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgfTtcbiAgICAgIGNvcHlBdXhXaXRGaWx0ZXIocCwgdCwgY2VsbCk7XG4gICAgICByZXR1cm4gY2VsbDtcbiAgICB9XG4gICAgX3hzID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGtlZXAoeHMsIHApIHtcbiAgcmV0dXJuIGtlZXBVKHhzLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBrZWVwV2l0aEluZGV4VSh4cywgcCkge1xuICB2YXIgX3hzID0geHM7XG4gIHZhciBfaSA9IDA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIHZhciB4cyQxID0gX3hzO1xuICAgIGlmICgheHMkMSkge1xuICAgICAgcmV0dXJuIC8qIFtdICovMDtcbiAgICB9XG4gICAgdmFyIHQgPSB4cyQxLnRsO1xuICAgIHZhciBoID0geHMkMS5oZDtcbiAgICBpZiAocChoLCBpKSkge1xuICAgICAgdmFyIGNlbGwgPSB7XG4gICAgICAgIGhkOiBoLFxuICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICB9O1xuICAgICAgY29weUF1eFdpdGhGaWx0ZXJJbmRleChwLCB0LCBjZWxsLCBpICsgMSB8IDApO1xuICAgICAgcmV0dXJuIGNlbGw7XG4gICAgfVxuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIF94cyA9IHQ7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBrZWVwV2l0aEluZGV4KHhzLCBwKSB7XG4gIHJldHVybiBrZWVwV2l0aEluZGV4VSh4cywgQ3VycnkuX18yKHApKTtcbn1cblxuZnVuY3Rpb24ga2VlcE1hcFUoX3hzLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIC8qIFtdICovMDtcbiAgICB9XG4gICAgdmFyIHQgPSB4cy50bDtcbiAgICB2YXIgaCA9IHAoeHMuaGQpO1xuICAgIGlmIChoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBjZWxsID0ge1xuICAgICAgICBoZDogQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbihoKSxcbiAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgfTtcbiAgICAgIGNvcHlBdXhXaXRGaWx0ZXJNYXAocCwgdCwgY2VsbCk7XG4gICAgICByZXR1cm4gY2VsbDtcbiAgICB9XG4gICAgX3hzID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGtlZXBNYXAoeHMsIHApIHtcbiAgcmV0dXJuIGtlZXBNYXBVKHhzLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb25VKGwsIHApIHtcbiAgaWYgKCFsKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC8qIFtdICovMCxcbiAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgIF07XG4gIH1cbiAgdmFyIGggPSBsLmhkO1xuICB2YXIgbmV4dFggPSB7XG4gICAgaGQ6IGgsXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgbmV4dFkgPSB7XG4gICAgaGQ6IGgsXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgYiA9IHAoaCk7XG4gIHBhcnRpdGlvbkF1eChwLCBsLnRsLCBuZXh0WCwgbmV4dFkpO1xuICBpZiAoYikge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBuZXh0WCxcbiAgICAgICAgICAgIG5leHRZLnRsXG4gICAgICAgICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgbmV4dFgudGwsXG4gICAgICAgICAgICBuZXh0WVxuICAgICAgICAgIF07XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uKGwsIHApIHtcbiAgcmV0dXJuIHBhcnRpdGlvblUobCwgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gdW56aXAoeHMpIHtcbiAgaWYgKCF4cykge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICAvKiBbXSAqLzAsXG4gICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICBdO1xuICB9XG4gIHZhciBtYXRjaCA9IHhzLmhkO1xuICB2YXIgY2VsbFggPSB7XG4gICAgaGQ6IG1hdGNoWzBdLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIGNlbGxZID0ge1xuICAgIGhkOiBtYXRjaFsxXSxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHNwbGl0QXV4KHhzLnRsLCBjZWxsWCwgY2VsbFkpO1xuICByZXR1cm4gW1xuICAgICAgICAgIGNlbGxYLFxuICAgICAgICAgIGNlbGxZXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIHppcChsMSwgbDIpIHtcbiAgaWYgKCFsMSkge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgaWYgKCFsMikge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IFtcbiAgICAgIGwxLmhkLFxuICAgICAgbDIuaGRcbiAgICBdLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgemlwQXV4KGwxLnRsLCBsMi50bCwgY2VsbCk7XG4gIHJldHVybiBjZWxsO1xufVxuXG52YXIgc2l6ZSA9IGxlbmd0aDtcblxudmFyIGZpbHRlciA9IGtlZXA7XG5cbnZhciBmaWx0ZXJXaXRoSW5kZXggPSBrZWVwV2l0aEluZGV4O1xuXG5leHBvcnQge1xuICBsZW5ndGggLFxuICBzaXplICxcbiAgaGVhZCAsXG4gIGhlYWRFeG4gLFxuICB0YWlsICxcbiAgdGFpbEV4biAsXG4gIGFkZCAsXG4gIGdldCAsXG4gIGdldEV4biAsXG4gIG1ha2UgLFxuICBtYWtlQnlVICxcbiAgbWFrZUJ5ICxcbiAgc2h1ZmZsZSAsXG4gIGRyb3AgLFxuICB0YWtlICxcbiAgc3BsaXRBdCAsXG4gIGNvbmNhdCAsXG4gIGNvbmNhdE1hbnkgLFxuICByZXZlcnNlQ29uY2F0ICxcbiAgZmxhdHRlbiAsXG4gIG1hcFUgLFxuICBtYXAgLFxuICB6aXAgLFxuICB6aXBCeVUgLFxuICB6aXBCeSAsXG4gIG1hcFdpdGhJbmRleFUgLFxuICBtYXBXaXRoSW5kZXggLFxuICBmcm9tQXJyYXkgLFxuICB0b0FycmF5ICxcbiAgcmV2ZXJzZSAsXG4gIG1hcFJldmVyc2VVICxcbiAgbWFwUmV2ZXJzZSAsXG4gIGZvckVhY2hVICxcbiAgZm9yRWFjaCAsXG4gIGZvckVhY2hXaXRoSW5kZXhVICxcbiAgZm9yRWFjaFdpdGhJbmRleCAsXG4gIHJlZHVjZVUgLFxuICByZWR1Y2UgLFxuICByZWR1Y2VXaXRoSW5kZXhVICxcbiAgcmVkdWNlV2l0aEluZGV4ICxcbiAgcmVkdWNlUmV2ZXJzZVUgLFxuICByZWR1Y2VSZXZlcnNlICxcbiAgbWFwUmV2ZXJzZTJVICxcbiAgbWFwUmV2ZXJzZTIgLFxuICBmb3JFYWNoMlUgLFxuICBmb3JFYWNoMiAsXG4gIHJlZHVjZTJVICxcbiAgcmVkdWNlMiAsXG4gIHJlZHVjZVJldmVyc2UyVSAsXG4gIHJlZHVjZVJldmVyc2UyICxcbiAgZXZlcnlVICxcbiAgZXZlcnkgLFxuICBzb21lVSAsXG4gIHNvbWUgLFxuICBldmVyeTJVICxcbiAgZXZlcnkyICxcbiAgc29tZTJVICxcbiAgc29tZTIgLFxuICBjbXBCeUxlbmd0aCAsXG4gIGNtcFUgLFxuICBjbXAgLFxuICBlcVUgLFxuICBlcSAsXG4gIGhhc1UgLFxuICBoYXMgLFxuICBnZXRCeVUgLFxuICBnZXRCeSAsXG4gIGtlZXBVICxcbiAga2VlcCAsXG4gIGZpbHRlciAsXG4gIGtlZXBXaXRoSW5kZXhVICxcbiAga2VlcFdpdGhJbmRleCAsXG4gIGZpbHRlcldpdGhJbmRleCAsXG4gIGtlZXBNYXBVICxcbiAga2VlcE1hcCAsXG4gIHBhcnRpdGlvblUgLFxuICBwYXJ0aXRpb24gLFxuICB1bnppcCAsXG4gIGdldEFzc29jVSAsXG4gIGdldEFzc29jICxcbiAgaGFzQXNzb2NVICxcbiAgaGFzQXNzb2MgLFxuICByZW1vdmVBc3NvY1UgLFxuICByZW1vdmVBc3NvYyAsXG4gIHNldEFzc29jVSAsXG4gIHNldEFzc29jICxcbiAgc29ydFUgLFxuICBzb3J0ICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCIuL2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X0FycmF5IGZyb20gXCIuL2JlbHRfQXJyYXkuanNcIjtcblxuZnVuY3Rpb24gc29ydGVkTGVuZ3RoQXV4TW9yZSh4cywgX3ByZWMsIF9hY2MsIGxlbiwgbHQpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgaWYgKGFjYyA+PSBsZW4pIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIHZhciB2ID0geHNbYWNjXTtcbiAgICBpZiAoIWx0KHYsIHByZWMpKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICBfYWNjID0gYWNjICsgMSB8IDA7XG4gICAgX3ByZWMgPSB2O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3RyaWN0bHlTb3J0ZWRMZW5ndGhVKHhzLCBsdCkge1xuICB2YXIgbGVuID0geHMubGVuZ3RoO1xuICBpZiAobGVuID09PSAwIHx8IGxlbiA9PT0gMSkge1xuICAgIHJldHVybiBsZW47XG4gIH1cbiAgdmFyIHgwID0geHNbMF07XG4gIHZhciB4MSA9IHhzWzFdO1xuICBpZiAobHQoeDAsIHgxKSkge1xuICAgIHZhciBfcHJlYyA9IHgxO1xuICAgIHZhciBfYWNjID0gMjtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgYWNjID0gX2FjYztcbiAgICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgICBpZiAoYWNjID49IGxlbikge1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuICAgICAgdmFyIHYgPSB4c1thY2NdO1xuICAgICAgaWYgKCFsdChwcmVjLCB2KSkge1xuICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgfVxuICAgICAgX2FjYyA9IGFjYyArIDEgfCAwO1xuICAgICAgX3ByZWMgPSB2O1xuICAgICAgY29udGludWUgO1xuICAgIH07XG4gIH0gZWxzZSBpZiAobHQoeDEsIHgwKSkge1xuICAgIHJldHVybiAtc29ydGVkTGVuZ3RoQXV4TW9yZSh4cywgeDEsIDIsIGxlbiwgbHQpIHwgMDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzdHJpY3RseVNvcnRlZExlbmd0aCh4cywgbHQpIHtcbiAgcmV0dXJuIHN0cmljdGx5U29ydGVkTGVuZ3RoVSh4cywgQ3VycnkuX18yKGx0KSk7XG59XG5cbmZ1bmN0aW9uIGlzU29ydGVkVShhLCBjbXApIHtcbiAgdmFyIGxlbiA9IGEubGVuZ3RoO1xuICBpZiAobGVuID09PSAwKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgdmFyIF9pID0gMDtcbiAgICB2YXIgbGFzdF9ib3VuZCA9IGxlbiAtIDEgfCAwO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBpID0gX2k7XG4gICAgICBpZiAoaSA9PT0gbGFzdF9ib3VuZCkge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICAgIGlmIChjbXAoYVtpXSwgYVtpICsgMSB8IDBdKSA+IDApIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgX2kgPSBpICsgMSB8IDA7XG4gICAgICBjb250aW51ZSA7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1NvcnRlZChhLCBjbXApIHtcbiAgcmV0dXJuIGlzU29ydGVkVShhLCBDdXJyeS5fXzIoY21wKSk7XG59XG5cbmZ1bmN0aW9uIG1lcmdlKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIGNtcCkge1xuICB2YXIgc3JjMXIgPSBzcmMxb2ZzICsgc3JjMWxlbiB8IDA7XG4gIHZhciBzcmMyciA9IHNyYzJvZnMgKyBzcmMybGVuIHwgMDtcbiAgdmFyIF9pMSA9IHNyYzFvZnM7XG4gIHZhciBfczEgPSBzcmNbc3JjMW9mc107XG4gIHZhciBfaTIgPSBzcmMyb2ZzO1xuICB2YXIgX3MyID0gc3JjMltzcmMyb2ZzXTtcbiAgdmFyIF9kID0gZHN0b2ZzO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGQgPSBfZDtcbiAgICB2YXIgczIgPSBfczI7XG4gICAgdmFyIGkyID0gX2kyO1xuICAgIHZhciBzMSA9IF9zMTtcbiAgICB2YXIgaTEgPSBfaTE7XG4gICAgaWYgKGNtcChzMSwgczIpIDw9IDApIHtcbiAgICAgIGRzdFtkXSA9IHMxO1xuICAgICAgdmFyIGkxJDEgPSBpMSArIDEgfCAwO1xuICAgICAgaWYgKGkxJDEgPj0gc3JjMXIpIHtcbiAgICAgICAgcmV0dXJuIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMyLCBpMiwgZHN0LCBkICsgMSB8IDAsIHNyYzJyIC0gaTIgfCAwKTtcbiAgICAgIH1cbiAgICAgIF9kID0gZCArIDEgfCAwO1xuICAgICAgX3MxID0gc3JjW2kxJDFdO1xuICAgICAgX2kxID0gaTEkMTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgZHN0W2RdID0gczI7XG4gICAgdmFyIGkyJDEgPSBpMiArIDEgfCAwO1xuICAgIGlmIChpMiQxID49IHNyYzJyKSB7XG4gICAgICByZXR1cm4gQmVsdF9BcnJheS5ibGl0VW5zYWZlKHNyYywgaTEsIGRzdCwgZCArIDEgfCAwLCBzcmMxciAtIGkxIHwgMCk7XG4gICAgfVxuICAgIF9kID0gZCArIDEgfCAwO1xuICAgIF9zMiA9IHNyYzJbaTIkMV07XG4gICAgX2kyID0gaTIkMTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVuaW9uVShzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBjbXApIHtcbiAgdmFyIHNyYzFyID0gc3JjMW9mcyArIHNyYzFsZW4gfCAwO1xuICB2YXIgc3JjMnIgPSBzcmMyb2ZzICsgc3JjMmxlbiB8IDA7XG4gIHZhciBfaTEgPSBzcmMxb2ZzO1xuICB2YXIgX3MxID0gc3JjW3NyYzFvZnNdO1xuICB2YXIgX2kyID0gc3JjMm9mcztcbiAgdmFyIF9zMiA9IHNyYzJbc3JjMm9mc107XG4gIHZhciBfZCA9IGRzdG9mcztcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBkID0gX2Q7XG4gICAgdmFyIHMyID0gX3MyO1xuICAgIHZhciBpMiA9IF9pMjtcbiAgICB2YXIgczEgPSBfczE7XG4gICAgdmFyIGkxID0gX2kxO1xuICAgIHZhciBjID0gY21wKHMxLCBzMik7XG4gICAgaWYgKGMgPCAwKSB7XG4gICAgICBkc3RbZF0gPSBzMTtcbiAgICAgIHZhciBpMSQxID0gaTEgKyAxIHwgMDtcbiAgICAgIHZhciBkJDEgPSBkICsgMSB8IDA7XG4gICAgICBpZiAoaTEkMSA8IHNyYzFyKSB7XG4gICAgICAgIF9kID0gZCQxO1xuICAgICAgICBfczEgPSBzcmNbaTEkMV07XG4gICAgICAgIF9pMSA9IGkxJDE7XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgIH1cbiAgICAgIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMyLCBpMiwgZHN0LCBkJDEsIHNyYzJyIC0gaTIgfCAwKTtcbiAgICAgIHJldHVybiAoZCQxICsgc3JjMnIgfCAwKSAtIGkyIHwgMDtcbiAgICB9XG4gICAgaWYgKGMgPT09IDApIHtcbiAgICAgIGRzdFtkXSA9IHMxO1xuICAgICAgdmFyIGkxJDIgPSBpMSArIDEgfCAwO1xuICAgICAgdmFyIGkyJDEgPSBpMiArIDEgfCAwO1xuICAgICAgdmFyIGQkMiA9IGQgKyAxIHwgMDtcbiAgICAgIGlmICghKGkxJDIgPCBzcmMxciAmJiBpMiQxIDwgc3JjMnIpKSB7XG4gICAgICAgIGlmIChpMSQyID09PSBzcmMxcikge1xuICAgICAgICAgIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMyLCBpMiQxLCBkc3QsIGQkMiwgc3JjMnIgLSBpMiQxIHwgMCk7XG4gICAgICAgICAgcmV0dXJuIChkJDIgKyBzcmMyciB8IDApIC0gaTIkMSB8IDA7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQmVsdF9BcnJheS5ibGl0VW5zYWZlKHNyYywgaTEkMiwgZHN0LCBkJDIsIHNyYzFyIC0gaTEkMiB8IDApO1xuICAgICAgICAgIHJldHVybiAoZCQyICsgc3JjMXIgfCAwKSAtIGkxJDIgfCAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfZCA9IGQkMjtcbiAgICAgIF9zMiA9IHNyYzJbaTIkMV07XG4gICAgICBfaTIgPSBpMiQxO1xuICAgICAgX3MxID0gc3JjW2kxJDJdO1xuICAgICAgX2kxID0gaTEkMjtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgZHN0W2RdID0gczI7XG4gICAgdmFyIGkyJDIgPSBpMiArIDEgfCAwO1xuICAgIHZhciBkJDMgPSBkICsgMSB8IDA7XG4gICAgaWYgKGkyJDIgPCBzcmMycikge1xuICAgICAgX2QgPSBkJDM7XG4gICAgICBfczIgPSBzcmMyW2kyJDJdO1xuICAgICAgX2kyID0gaTIkMjtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgQmVsdF9BcnJheS5ibGl0VW5zYWZlKHNyYywgaTEsIGRzdCwgZCQzLCBzcmMxciAtIGkxIHwgMCk7XG4gICAgcmV0dXJuIChkJDMgKyBzcmMxciB8IDApIC0gaTEgfCAwO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1bmlvbihzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBjbXApIHtcbiAgcmV0dXJuIHVuaW9uVShzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBDdXJyeS5fXzIoY21wKSk7XG59XG5cbmZ1bmN0aW9uIGludGVyc2VjdFUoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgY21wKSB7XG4gIHZhciBzcmMxciA9IHNyYzFvZnMgKyBzcmMxbGVuIHwgMDtcbiAgdmFyIHNyYzJyID0gc3JjMm9mcyArIHNyYzJsZW4gfCAwO1xuICB2YXIgX2kxID0gc3JjMW9mcztcbiAgdmFyIF9zMSA9IHNyY1tzcmMxb2ZzXTtcbiAgdmFyIF9pMiA9IHNyYzJvZnM7XG4gIHZhciBfczIgPSBzcmMyW3NyYzJvZnNdO1xuICB2YXIgX2QgPSBkc3RvZnM7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgZCA9IF9kO1xuICAgIHZhciBzMiA9IF9zMjtcbiAgICB2YXIgaTIgPSBfaTI7XG4gICAgdmFyIHMxID0gX3MxO1xuICAgIHZhciBpMSA9IF9pMTtcbiAgICB2YXIgYyA9IGNtcChzMSwgczIpO1xuICAgIGlmIChjIDwgMCkge1xuICAgICAgdmFyIGkxJDEgPSBpMSArIDEgfCAwO1xuICAgICAgaWYgKGkxJDEgPj0gc3JjMXIpIHtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgICB9XG4gICAgICBfczEgPSBzcmNbaTEkMV07XG4gICAgICBfaTEgPSBpMSQxO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBpZiAoYyA9PT0gMCkge1xuICAgICAgZHN0W2RdID0gczE7XG4gICAgICB2YXIgaTEkMiA9IGkxICsgMSB8IDA7XG4gICAgICB2YXIgaTIkMSA9IGkyICsgMSB8IDA7XG4gICAgICB2YXIgZCQxID0gZCArIDEgfCAwO1xuICAgICAgaWYgKCEoaTEkMiA8IHNyYzFyICYmIGkyJDEgPCBzcmMycikpIHtcbiAgICAgICAgcmV0dXJuIGQkMTtcbiAgICAgIH1cbiAgICAgIF9kID0gZCQxO1xuICAgICAgX3MyID0gc3JjMltpMiQxXTtcbiAgICAgIF9pMiA9IGkyJDE7XG4gICAgICBfczEgPSBzcmNbaTEkMl07XG4gICAgICBfaTEgPSBpMSQyO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICB2YXIgaTIkMiA9IGkyICsgMSB8IDA7XG4gICAgaWYgKGkyJDIgPj0gc3JjMnIpIHtcbiAgICAgIHJldHVybiBkO1xuICAgIH1cbiAgICBfczIgPSBzcmMyW2kyJDJdO1xuICAgIF9pMiA9IGkyJDI7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbnRlcnNlY3Qoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgY21wKSB7XG4gIHJldHVybiBpbnRlcnNlY3RVKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIEN1cnJ5Ll9fMihjbXApKTtcbn1cblxuZnVuY3Rpb24gZGlmZlUoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgY21wKSB7XG4gIHZhciBzcmMxciA9IHNyYzFvZnMgKyBzcmMxbGVuIHwgMDtcbiAgdmFyIHNyYzJyID0gc3JjMm9mcyArIHNyYzJsZW4gfCAwO1xuICB2YXIgX2kxID0gc3JjMW9mcztcbiAgdmFyIF9zMSA9IHNyY1tzcmMxb2ZzXTtcbiAgdmFyIF9pMiA9IHNyYzJvZnM7XG4gIHZhciBfczIgPSBzcmMyW3NyYzJvZnNdO1xuICB2YXIgX2QgPSBkc3RvZnM7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgZCA9IF9kO1xuICAgIHZhciBzMiA9IF9zMjtcbiAgICB2YXIgaTIgPSBfaTI7XG4gICAgdmFyIHMxID0gX3MxO1xuICAgIHZhciBpMSA9IF9pMTtcbiAgICB2YXIgYyA9IGNtcChzMSwgczIpO1xuICAgIGlmIChjIDwgMCkge1xuICAgICAgZHN0W2RdID0gczE7XG4gICAgICB2YXIgZCQxID0gZCArIDEgfCAwO1xuICAgICAgdmFyIGkxJDEgPSBpMSArIDEgfCAwO1xuICAgICAgaWYgKGkxJDEgPj0gc3JjMXIpIHtcbiAgICAgICAgcmV0dXJuIGQkMTtcbiAgICAgIH1cbiAgICAgIF9kID0gZCQxO1xuICAgICAgX3MxID0gc3JjW2kxJDFdO1xuICAgICAgX2kxID0gaTEkMTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgaWYgKGMgPT09IDApIHtcbiAgICAgIHZhciBpMSQyID0gaTEgKyAxIHwgMDtcbiAgICAgIHZhciBpMiQxID0gaTIgKyAxIHwgMDtcbiAgICAgIGlmICghKGkxJDIgPCBzcmMxciAmJiBpMiQxIDwgc3JjMnIpKSB7XG4gICAgICAgIGlmIChpMSQyID09PSBzcmMxcikge1xuICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMsIGkxJDIsIGRzdCwgZCwgc3JjMXIgLSBpMSQyIHwgMCk7XG4gICAgICAgICAgcmV0dXJuIChkICsgc3JjMXIgfCAwKSAtIGkxJDIgfCAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfczIgPSBzcmMyW2kyJDFdO1xuICAgICAgX2kyID0gaTIkMTtcbiAgICAgIF9zMSA9IHNyY1tpMSQyXTtcbiAgICAgIF9pMSA9IGkxJDI7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIHZhciBpMiQyID0gaTIgKyAxIHwgMDtcbiAgICBpZiAoaTIkMiA8IHNyYzJyKSB7XG4gICAgICBfczIgPSBzcmMyW2kyJDJdO1xuICAgICAgX2kyID0gaTIkMjtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgQmVsdF9BcnJheS5ibGl0VW5zYWZlKHNyYywgaTEsIGRzdCwgZCwgc3JjMXIgLSBpMSB8IDApO1xuICAgIHJldHVybiAoZCArIHNyYzFyIHwgMCkgLSBpMSB8IDA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRpZmYoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgY21wKSB7XG4gIHJldHVybiBkaWZmVShzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBDdXJyeS5fXzIoY21wKSk7XG59XG5cbmZ1bmN0aW9uIGluc2VydGlvblNvcnQoc3JjLCBzcmNvZnMsIGRzdCwgZHN0b2ZzLCBsZW4sIGNtcCkge1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgIHZhciBlID0gc3JjW3NyY29mcyArIGkgfCAwXTtcbiAgICB2YXIgaiA9IChkc3RvZnMgKyBpIHwgMCkgLSAxIHwgMDtcbiAgICB3aGlsZShqID49IGRzdG9mcyAmJiBjbXAoZHN0W2pdLCBlKSA+IDApIHtcbiAgICAgIGRzdFtqICsgMSB8IDBdID0gZHN0W2pdO1xuICAgICAgaiA9IGogLSAxIHwgMDtcbiAgICB9O1xuICAgIGRzdFtqICsgMSB8IDBdID0gZTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gc29ydFRvKHNyYywgc3Jjb2ZzLCBkc3QsIGRzdG9mcywgbGVuLCBjbXApIHtcbiAgaWYgKGxlbiA8PSA1KSB7XG4gICAgcmV0dXJuIGluc2VydGlvblNvcnQoc3JjLCBzcmNvZnMsIGRzdCwgZHN0b2ZzLCBsZW4sIGNtcCk7XG4gIH1cbiAgdmFyIGwxID0gbGVuIC8gMiB8IDA7XG4gIHZhciBsMiA9IGxlbiAtIGwxIHwgMDtcbiAgc29ydFRvKHNyYywgc3Jjb2ZzICsgbDEgfCAwLCBkc3QsIGRzdG9mcyArIGwxIHwgMCwgbDIsIGNtcCk7XG4gIHNvcnRUbyhzcmMsIHNyY29mcywgc3JjLCBzcmNvZnMgKyBsMiB8IDAsIGwxLCBjbXApO1xuICByZXR1cm4gbWVyZ2Uoc3JjLCBzcmNvZnMgKyBsMiB8IDAsIGwxLCBkc3QsIGRzdG9mcyArIGwxIHwgMCwgbDIsIGRzdCwgZHN0b2ZzLCBjbXApO1xufVxuXG5mdW5jdGlvbiBzdGFibGVTb3J0SW5QbGFjZUJ5VShhLCBjbXApIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgaWYgKGwgPD0gNSkge1xuICAgIHJldHVybiBpbnNlcnRpb25Tb3J0KGEsIDAsIGEsIDAsIGwsIGNtcCk7XG4gIH1cbiAgdmFyIGwxID0gbCAvIDIgfCAwO1xuICB2YXIgbDIgPSBsIC0gbDEgfCAwO1xuICB2YXIgdCA9IG5ldyBBcnJheShsMik7XG4gIHNvcnRUbyhhLCBsMSwgdCwgMCwgbDIsIGNtcCk7XG4gIHNvcnRUbyhhLCAwLCBhLCBsMiwgbDEsIGNtcCk7XG4gIHJldHVybiBtZXJnZShhLCBsMiwgbDEsIHQsIDAsIGwyLCBhLCAwLCBjbXApO1xufVxuXG5mdW5jdGlvbiBzdGFibGVTb3J0SW5QbGFjZUJ5KGEsIGNtcCkge1xuICByZXR1cm4gc3RhYmxlU29ydEluUGxhY2VCeVUoYSwgQ3VycnkuX18yKGNtcCkpO1xufVxuXG5mdW5jdGlvbiBzdGFibGVTb3J0QnlVKGEsIGNtcCkge1xuICB2YXIgYiA9IGEuc2xpY2UoMCk7XG4gIHN0YWJsZVNvcnRJblBsYWNlQnlVKGIsIGNtcCk7XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBzdGFibGVTb3J0QnkoYSwgY21wKSB7XG4gIHJldHVybiBzdGFibGVTb3J0QnlVKGEsIEN1cnJ5Ll9fMihjbXApKTtcbn1cblxuZnVuY3Rpb24gYmluYXJ5U2VhcmNoQnlVKHNvcnRlZCwga2V5LCBjbXApIHtcbiAgdmFyIGxlbiA9IHNvcnRlZC5sZW5ndGg7XG4gIGlmIChsZW4gPT09IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgdmFyIGxvID0gc29ydGVkWzBdO1xuICB2YXIgYyA9IGNtcChrZXksIGxvKTtcbiAgaWYgKGMgPCAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHZhciBoaSA9IHNvcnRlZFtsZW4gLSAxIHwgMF07XG4gIHZhciBjMiA9IGNtcChrZXksIGhpKTtcbiAgaWYgKGMyID4gMCkge1xuICAgIHJldHVybiAtKGxlbiArIDEgfCAwKSB8IDA7XG4gIH0gZWxzZSB7XG4gICAgdmFyIF9sbyA9IDA7XG4gICAgdmFyIF9oaSA9IGxlbiAtIDEgfCAwO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBoaSQxID0gX2hpO1xuICAgICAgdmFyIGxvJDEgPSBfbG87XG4gICAgICB2YXIgbWlkID0gKGxvJDEgKyBoaSQxIHwgMCkgLyAyIHwgMDtcbiAgICAgIHZhciBtaWRWYWwgPSBzb3J0ZWRbbWlkXTtcbiAgICAgIHZhciBjJDEgPSBjbXAoa2V5LCBtaWRWYWwpO1xuICAgICAgaWYgKGMkMSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbWlkO1xuICAgICAgfVxuICAgICAgaWYgKGMkMSA8IDApIHtcbiAgICAgICAgaWYgKGhpJDEgPT09IG1pZCkge1xuICAgICAgICAgIGlmIChjbXAoc29ydGVkW2xvJDFdLCBrZXkpID09PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gbG8kMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC0oaGkkMSArIDEgfCAwKSB8IDA7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIF9oaSA9IG1pZDtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgfVxuICAgICAgaWYgKGxvJDEgPT09IG1pZCkge1xuICAgICAgICBpZiAoY21wKHNvcnRlZFtoaSQxXSwga2V5KSA9PT0gMCkge1xuICAgICAgICAgIHJldHVybiBoaSQxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAtKGhpJDEgKyAxIHwgMCkgfCAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfbG8gPSBtaWQ7XG4gICAgICBjb250aW51ZSA7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBiaW5hcnlTZWFyY2hCeShzb3J0ZWQsIGtleSwgY21wKSB7XG4gIHJldHVybiBiaW5hcnlTZWFyY2hCeVUoc29ydGVkLCBrZXksIEN1cnJ5Ll9fMihjbXApKTtcbn1cblxudmFyIEludDtcblxudmFyICQkU3RyaW5nO1xuXG5leHBvcnQge1xuICBJbnQgLFxuICAkJFN0cmluZyAsXG4gIHN0cmljdGx5U29ydGVkTGVuZ3RoVSAsXG4gIHN0cmljdGx5U29ydGVkTGVuZ3RoICxcbiAgaXNTb3J0ZWRVICxcbiAgaXNTb3J0ZWQgLFxuICBzdGFibGVTb3J0SW5QbGFjZUJ5VSAsXG4gIHN0YWJsZVNvcnRJblBsYWNlQnkgLFxuICBzdGFibGVTb3J0QnlVICxcbiAgc3RhYmxlU29ydEJ5ICxcbiAgYmluYXJ5U2VhcmNoQnlVICxcbiAgYmluYXJ5U2VhcmNoQnkgLFxuICB1bmlvblUgLFxuICB1bmlvbiAsXG4gIGludGVyc2VjdFUgLFxuICBpbnRlcnNlY3QgLFxuICBkaWZmVSAsXG4gIGRpZmYgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG5mdW5jdGlvbiBjYW1sX2ludF9jb21wYXJlKHgsIHkpIHtcbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2Jvb2xfY29tcGFyZSh4LCB5KSB7XG4gIGlmICh4KSB7XG4gICAgaWYgKHkpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoeSkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2Zsb2F0X2NvbXBhcmUoeCwgeSkge1xuICBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2UgaWYgKHggPiB5IHx8IHggPT09IHgpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmICh5ID09PSB5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfc3RyaW5nX2NvbXBhcmUoczEsIHMyKSB7XG4gIGlmIChzMSA9PT0gczIpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmIChzMSA8IHMyKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYm9vbF9taW4oeCwgeSkge1xuICBpZiAoeCkge1xuICAgIHJldHVybiB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfaW50X21pbih4LCB5KSB7XG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZmxvYXRfbWluKHgsIHkpIHtcbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9zdHJpbmdfbWluKHgsIHkpIHtcbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9pbnQzMl9taW4oeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2Jvb2xfbWF4KHgsIHkpIHtcbiAgaWYgKHgpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2ludF9tYXgoeCwgeSkge1xuICBpZiAoeCA+IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2Zsb2F0X21heCh4LCB5KSB7XG4gIGlmICh4ID4geSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfc3RyaW5nX21heCh4LCB5KSB7XG4gIGlmICh4ID4geSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfaW50MzJfbWF4KHgsIHkpIHtcbiAgaWYgKHggPiB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaTY0X2VxKHgsIHkpIHtcbiAgaWYgKHhbMV0gPT09IHlbMV0pIHtcbiAgICByZXR1cm4geFswXSA9PT0geVswXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gaTY0X2dlKHBhcmFtLCBwYXJhbSQxKSB7XG4gIHZhciBvdGhlcl9oaSA9IHBhcmFtJDFbMF07XG4gIHZhciBoaSA9IHBhcmFtWzBdO1xuICBpZiAoaGkgPiBvdGhlcl9oaSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKGhpIDwgb3RoZXJfaGkpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHBhcmFtWzFdID49IHBhcmFtJDFbMV07XG4gIH1cbn1cblxuZnVuY3Rpb24gaTY0X25lcSh4LCB5KSB7XG4gIHJldHVybiAhaTY0X2VxKHgsIHkpO1xufVxuXG5mdW5jdGlvbiBpNjRfbHQoeCwgeSkge1xuICByZXR1cm4gIWk2NF9nZSh4LCB5KTtcbn1cblxuZnVuY3Rpb24gaTY0X2d0KHgsIHkpIHtcbiAgaWYgKHhbMF0gPiB5WzBdKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoeFswXSA8IHlbMF0pIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHhbMV0gPiB5WzFdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGk2NF9sZSh4LCB5KSB7XG4gIHJldHVybiAhaTY0X2d0KHgsIHkpO1xufVxuXG5mdW5jdGlvbiBpNjRfbWluKHgsIHkpIHtcbiAgaWYgKGk2NF9nZSh4LCB5KSkge1xuICAgIHJldHVybiB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4O1xuICB9XG59XG5cbmZ1bmN0aW9uIGk2NF9tYXgoeCwgeSkge1xuICBpZiAoaTY0X2d0KHgsIHkpKSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgY2FtbF9pbnRfY29tcGFyZSAsXG4gIGNhbWxfYm9vbF9jb21wYXJlICxcbiAgY2FtbF9mbG9hdF9jb21wYXJlICxcbiAgY2FtbF9zdHJpbmdfY29tcGFyZSAsXG4gIGNhbWxfYm9vbF9taW4gLFxuICBjYW1sX2ludF9taW4gLFxuICBjYW1sX2Zsb2F0X21pbiAsXG4gIGNhbWxfc3RyaW5nX21pbiAsXG4gIGNhbWxfaW50MzJfbWluICxcbiAgY2FtbF9ib29sX21heCAsXG4gIGNhbWxfaW50X21heCAsXG4gIGNhbWxfZmxvYXRfbWF4ICxcbiAgY2FtbF9zdHJpbmdfbWF4ICxcbiAgY2FtbF9pbnQzMl9tYXggLFxuICBpNjRfZXEgLFxuICBpNjRfbmVxICxcbiAgaTY0X2x0ICxcbiAgaTY0X2d0ICxcbiAgaTY0X2xlICxcbiAgaTY0X2dlICxcbiAgaTY0X21pbiAsXG4gIGk2NF9tYXggLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG5mdW5jdGlvbiBzdWIoeCwgb2Zmc2V0LCBsZW4pIHtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShsZW4pO1xuICB2YXIgaiA9IDA7XG4gIHZhciBpID0gb2Zmc2V0O1xuICB3aGlsZShqIDwgbGVuKSB7XG4gICAgcmVzdWx0W2pdID0geFtpXTtcbiAgICBqID0gaiArIDEgfCAwO1xuICAgIGkgPSBpICsgMSB8IDA7XG4gIH07XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGxlbihfYWNjLCBfbCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwgPSBfbDtcbiAgICB2YXIgYWNjID0gX2FjYztcbiAgICBpZiAoIWwpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIF9sID0gbC50bDtcbiAgICBfYWNjID0gbC5oZC5sZW5ndGggKyBhY2MgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsbChhcnIsIF9pLCBfbCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwgPSBfbDtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmICghbCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIHggPSBsLmhkO1xuICAgIHZhciBsJDEgPSB4Lmxlbmd0aDtcbiAgICB2YXIgayA9IGk7XG4gICAgdmFyIGogPSAwO1xuICAgIHdoaWxlKGogPCBsJDEpIHtcbiAgICAgIGFycltrXSA9IHhbal07XG4gICAgICBrID0gayArIDEgfCAwO1xuICAgICAgaiA9IGogKyAxIHwgMDtcbiAgICB9O1xuICAgIF9sID0gbC50bDtcbiAgICBfaSA9IGs7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb25jYXQobCkge1xuICB2YXIgdiA9IGxlbigwLCBsKTtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheSh2KTtcbiAgZmlsbChyZXN1bHQsIDAsIGwpO1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzZXQoeHMsIGluZGV4LCBuZXd2YWwpIHtcbiAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB4cy5sZW5ndGgpIHtcbiAgICB0aHJvdyB7XG4gICAgICAgICAgUkVfRVhOX0lEOiBcIkludmFsaWRfYXJndW1lbnRcIixcbiAgICAgICAgICBfMTogXCJpbmRleCBvdXQgb2YgYm91bmRzXCIsXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH1cbiAgeHNbaW5kZXhdID0gbmV3dmFsO1xuICBcbn1cblxuZnVuY3Rpb24gZ2V0KHhzLCBpbmRleCkge1xuICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHhzLmxlbmd0aCkge1xuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IFwiSW52YWxpZF9hcmd1bWVudFwiLFxuICAgICAgICAgIF8xOiBcImluZGV4IG91dCBvZiBib3VuZHNcIixcbiAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgfTtcbiAgfVxuICByZXR1cm4geHNbaW5kZXhdO1xufVxuXG5mdW5jdGlvbiBtYWtlKGxlbiwgaW5pdCkge1xuICB2YXIgYiA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgIGJbaV0gPSBpbml0O1xuICB9XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBtYWtlX2Zsb2F0KGxlbikge1xuICB2YXIgYiA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgIGJbaV0gPSAwO1xuICB9XG4gIHJldHVybiBiO1xufVxuXG5mdW5jdGlvbiBibGl0KGExLCBpMSwgYTIsIGkyLCBsZW4pIHtcbiAgaWYgKGkyIDw9IGkxKSB7XG4gICAgZm9yKHZhciBqID0gMDsgaiA8IGxlbjsgKytqKXtcbiAgICAgIGEyW2ogKyBpMiB8IDBdID0gYTFbaiArIGkxIHwgMF07XG4gICAgfVxuICAgIHJldHVybiA7XG4gIH1cbiAgZm9yKHZhciBqJDEgPSBsZW4gLSAxIHwgMDsgaiQxID49IDA7IC0taiQxKXtcbiAgICBhMltqJDEgKyBpMiB8IDBdID0gYTFbaiQxICsgaTEgfCAwXTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gZHVwKHByaW0pIHtcbiAgcmV0dXJuIHByaW0uc2xpY2UoMCk7XG59XG5cbmV4cG9ydCB7XG4gIGR1cCAsXG4gIHN1YiAsXG4gIGNvbmNhdCAsXG4gIG1ha2UgLFxuICBtYWtlX2Zsb2F0ICxcbiAgYmxpdCAsXG4gIGdldCAsXG4gIHNldCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbnZhciBpZCA9IHtcbiAgY29udGVudHM6IDBcbn07XG5cbmZ1bmN0aW9uIGNyZWF0ZShzdHIpIHtcbiAgaWQuY29udGVudHMgPSBpZC5jb250ZW50cyArIDEgfCAwO1xuICByZXR1cm4gc3RyICsgKFwiL1wiICsgaWQuY29udGVudHMpO1xufVxuXG5mdW5jdGlvbiBjYW1sX2lzX2V4dGVuc2lvbihlKSB7XG4gIGlmIChlID09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHR5cGVvZiBlLlJFX0VYTl9JRCA9PT0gXCJzdHJpbmdcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2V4bl9zbG90X25hbWUoeCkge1xuICByZXR1cm4geC5SRV9FWE5fSUQ7XG59XG5cbmV4cG9ydCB7XG4gIGlkICxcbiAgY3JlYXRlICxcbiAgY2FtbF9pc19leHRlbnNpb24gLFxuICBjYW1sX2V4bl9zbG90X25hbWUgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQ2FtbF9vcHRpb24gZnJvbSBcIi4vY2FtbF9vcHRpb24uanNcIjtcbmltcG9ydCAqIGFzIENhbWxfZXhjZXB0aW9ucyBmcm9tIFwiLi9jYW1sX2V4Y2VwdGlvbnMuanNcIjtcblxudmFyICQkRXJyb3IgPSAvKiBAX19QVVJFX18gKi9DYW1sX2V4Y2VwdGlvbnMuY3JlYXRlKFwiQ2FtbF9qc19leGNlcHRpb25zLkVycm9yXCIpO1xuXG5mdW5jdGlvbiBpbnRlcm5hbFRvT0NhbWxFeGNlcHRpb24oZSkge1xuICBpZiAoQ2FtbF9leGNlcHRpb25zLmNhbWxfaXNfZXh0ZW5zaW9uKGUpKSB7XG4gICAgcmV0dXJuIGU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFJFX0VYTl9JRDogJCRFcnJvcixcbiAgICAgICAgICAgIF8xOiBlXG4gICAgICAgICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2FzX2pzX2V4bihleG4pIHtcbiAgaWYgKGV4bi5SRV9FWE5fSUQgPT09ICQkRXJyb3IpIHtcbiAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZShleG4uXzEpO1xuICB9XG4gIFxufVxuXG5leHBvcnQge1xuICAkJEVycm9yICxcbiAgaW50ZXJuYWxUb09DYW1sRXhjZXB0aW9uICxcbiAgY2FtbF9hc19qc19leG4gLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG5mdW5jdGlvbiBpc05lc3RlZCh4KSB7XG4gIHJldHVybiB4LkJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBzb21lKHgpIHtcbiAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBCU19QUklWQVRFX05FU1RFRF9TT01FX05PTkU6IDBcbiAgICAgICAgICB9O1xuICB9IGVsc2UgaWYgKHggIT09IG51bGwgJiYgeC5CU19QUklWQVRFX05FU1RFRF9TT01FX05PTkUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBCU19QUklWQVRFX05FU1RFRF9TT01FX05PTkU6IHguQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FICsgMSB8IDBcbiAgICAgICAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4O1xuICB9XG59XG5cbmZ1bmN0aW9uIG51bGxhYmxlX3RvX29wdCh4KSB7XG4gIGlmICh4ID09IG51bGwpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzb21lKHgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuZGVmaW5lZF90b19vcHQoeCkge1xuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc29tZSh4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBudWxsX3RvX29wdCh4KSB7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc29tZSh4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxGcm9tT3B0aW9uKHgpIHtcbiAgaWYgKCEoeCAhPT0gbnVsbCAmJiB4LkJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJldHVybiB4O1xuICB9XG4gIHZhciBkZXB0aCA9IHguQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FO1xuICBpZiAoZGVwdGggPT09IDApIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBCU19QUklWQVRFX05FU1RFRF9TT01FX05PTkU6IGRlcHRoIC0gMSB8IDBcbiAgICAgICAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wdGlvbl9nZXQoeCkge1xuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsRnJvbU9wdGlvbih4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcHRpb25fdW53cmFwKHgpIHtcbiAgaWYgKHggIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB4LlZBTDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geDtcbiAgfVxufVxuXG5leHBvcnQge1xuICBudWxsYWJsZV90b19vcHQgLFxuICB1bmRlZmluZWRfdG9fb3B0ICxcbiAgbnVsbF90b19vcHQgLFxuICB2YWxGcm9tT3B0aW9uICxcbiAgc29tZSAsXG4gIGlzTmVzdGVkICxcbiAgb3B0aW9uX2dldCAsXG4gIG9wdGlvbl91bndyYXAgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQ2FtbF9hcnJheSBmcm9tIFwiLi9jYW1sX2FycmF5LmpzXCI7XG5cbmZ1bmN0aW9uIGFwcChfZiwgX2FyZ3MpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBhcmdzID0gX2FyZ3M7XG4gICAgdmFyIGYgPSBfZjtcbiAgICB2YXIgaW5pdF9hcml0eSA9IGYubGVuZ3RoO1xuICAgIHZhciBhcml0eSA9IGluaXRfYXJpdHkgPT09IDAgPyAxIDogaW5pdF9hcml0eTtcbiAgICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gICAgdmFyIGQgPSBhcml0eSAtIGxlbiB8IDA7XG4gICAgaWYgKGQgPT09IDApIHtcbiAgICAgIHJldHVybiBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgICBpZiAoZCA+PSAwKSB7XG4gICAgICByZXR1cm4gKGZ1bmN0aW9uKGYsYXJncyl7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIGFwcChmLCBhcmdzLmNvbmNhdChbeF0pKTtcbiAgICAgIH1cbiAgICAgIH0oZixhcmdzKSk7XG4gICAgfVxuICAgIF9hcmdzID0gQ2FtbF9hcnJheS5zdWIoYXJncywgYXJpdHksIC1kIHwgMCk7XG4gICAgX2YgPSBmLmFwcGx5KG51bGwsIENhbWxfYXJyYXkuc3ViKGFyZ3MsIDAsIGFyaXR5KSk7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBfMShvLCBhMCkge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAxKSB7XG4gICAgcmV0dXJuIG8oYTApO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIG8oYTApO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0pO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMikge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMsIHBhcmFtJDQpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCwgcGFyYW0kNSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0LCBwYXJhbSQ1KTtcbiAgICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbYTBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX18xKG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMSkge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYTApIHtcbiAgICAgIHJldHVybiBfMShvLCBhMCk7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfMihvLCBhMCwgYTEpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMikge1xuICAgIHJldHVybiBvKGEwLCBhMSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbYTFdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMikge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMik7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMykge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMyk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCk7XG4gICAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTFcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzIobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAyKSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEpIHtcbiAgICAgIHJldHVybiBfMihvLCBhMCwgYTEpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gXzMobywgYTAsIGExLCBhMikge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAzKSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMik7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTJcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbYTJdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMik7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIHBhcmFtKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMikge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKTtcbiAgICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgYTJcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzMobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAzKSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEsIGEyKSB7XG4gICAgICByZXR1cm4gXzMobywgYTAsIGExLCBhMik7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfNChvLCBhMCwgYTEsIGEyLCBhMykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA0KSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiksIFthM10pO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMyk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBwYXJhbSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpO1xuICAgICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgYTNcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzQobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA0KSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEsIGEyLCBhMykge1xuICAgICAgcmV0dXJuIF80KG8sIGEwLCBhMSwgYTIsIGEzKTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF81KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCkge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA1KSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0KTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTRcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMyksIFthNF0pO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQpO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIHBhcmFtKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICBhNFxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fNShvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDUpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCkge1xuICAgICAgcmV0dXJuIF81KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCk7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfNihvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDYpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1KTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTVcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMyksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCksIFthNV0pO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1KTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgcGFyYW0pO1xuICAgICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fNihvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDYpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgICAgIHJldHVybiBfNihvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1KTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF83KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDcpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNik7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgW2E2XSk7XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fNyhvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDcpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSB7XG4gICAgICByZXR1cm4gXzcobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gXzgobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDgpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0KSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSwgW2E3XSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX184KG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gOCkge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KSB7XG4gICAgICByZXR1cm4gXzgobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGFwcCAsXG4gIF8xICxcbiAgX18xICxcbiAgXzIgLFxuICBfXzIgLFxuICBfMyAsXG4gIF9fMyAsXG4gIF80ICxcbiAgX180ICxcbiAgXzUgLFxuICBfXzUgLFxuICBfNiAsXG4gIF9fNiAsXG4gIF83ICxcbiAgX183ICxcbiAgXzggLFxuICBfXzggLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQ2FtbF9qc19leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfanNfZXhjZXB0aW9ucy5qc1wiO1xuXG52YXIgYW55VG9FeG5JbnRlcm5hbCA9IENhbWxfanNfZXhjZXB0aW9ucy5pbnRlcm5hbFRvT0NhbWxFeGNlcHRpb247XG5cbmZ1bmN0aW9uIHJhaXNlRXJyb3Ioc3RyKSB7XG4gIHRocm93IG5ldyBFcnJvcihzdHIpO1xufVxuXG5mdW5jdGlvbiByYWlzZUV2YWxFcnJvcihzdHIpIHtcbiAgdGhyb3cgbmV3IEV2YWxFcnJvcihzdHIpO1xufVxuXG5mdW5jdGlvbiByYWlzZVJhbmdlRXJyb3Ioc3RyKSB7XG4gIHRocm93IG5ldyBSYW5nZUVycm9yKHN0cik7XG59XG5cbmZ1bmN0aW9uIHJhaXNlUmVmZXJlbmNlRXJyb3Ioc3RyKSB7XG4gIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihzdHIpO1xufVxuXG5mdW5jdGlvbiByYWlzZVN5bnRheEVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgU3ludGF4RXJyb3Ioc3RyKTtcbn1cblxuZnVuY3Rpb24gcmFpc2VUeXBlRXJyb3Ioc3RyKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3Ioc3RyKTtcbn1cblxuZnVuY3Rpb24gcmFpc2VVcmlFcnJvcihzdHIpIHtcbiAgdGhyb3cgbmV3IFVSSUVycm9yKHN0cik7XG59XG5cbnZhciAkJEVycm9yJDEgPSBDYW1sX2pzX2V4Y2VwdGlvbnMuJCRFcnJvcjtcblxuZXhwb3J0IHtcbiAgJCRFcnJvciQxIGFzICQkRXJyb3IsXG4gIGFueVRvRXhuSW50ZXJuYWwgLFxuICByYWlzZUVycm9yICxcbiAgcmFpc2VFdmFsRXJyb3IgLFxuICByYWlzZVJhbmdlRXJyb3IgLFxuICByYWlzZVJlZmVyZW5jZUVycm9yICxcbiAgcmFpc2VTeW50YXhFcnJvciAsXG4gIHJhaXNlVHlwZUVycm9yICxcbiAgcmFpc2VVcmlFcnJvciAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbmZ1bmN0aW9uIGVxdWFsKHgsIHkpIHtcbiAgcmV0dXJuIHggPT09IHk7XG59XG5cbnZhciBtYXggPSAyMTQ3NDgzNjQ3O1xuXG52YXIgbWluID0gLTIxNDc0ODM2NDg7XG5cbmV4cG9ydCB7XG4gIGVxdWFsICxcbiAgbWF4ICxcbiAgbWluICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIEpzX3ZlY3RvciBmcm9tIFwiLi9qc192ZWN0b3IuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfb3B0aW9uIGZyb20gXCIuL2NhbWxfb3B0aW9uLmpzXCI7XG5cbmZ1bmN0aW9uIGxlbmd0aChsKSB7XG4gIHZhciBfbGVuID0gMDtcbiAgdmFyIF9wYXJhbSA9IGw7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgdmFyIGxlbiA9IF9sZW47XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIGxlbjtcbiAgICB9XG4gICAgX3BhcmFtID0gcGFyYW0udGw7XG4gICAgX2xlbiA9IGxlbiArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29ucyh4LCB4cykge1xuICByZXR1cm4ge1xuICAgICAgICAgIGhkOiB4LFxuICAgICAgICAgIHRsOiB4c1xuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5KHgpIHtcbiAgcmV0dXJuIHggPT09IC8qIFtdICovMDtcbn1cblxuZnVuY3Rpb24gaGQocGFyYW0pIHtcbiAgaWYgKHBhcmFtKSB7XG4gICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUocGFyYW0uaGQpO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiB0bChwYXJhbSkge1xuICBpZiAocGFyYW0pIHtcbiAgICByZXR1cm4gcGFyYW0udGw7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIG50aChsLCBuKSB7XG4gIGlmIChuIDwgMCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIF9sID0gbDtcbiAgdmFyIF9uID0gbjtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBuJDEgPSBfbjtcbiAgICB2YXIgbCQxID0gX2w7XG4gICAgaWYgKCFsJDEpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGlmIChuJDEgPT09IDApIHtcbiAgICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKGwkMS5oZCk7XG4gICAgfVxuICAgIF9uID0gbiQxIC0gMSB8IDA7XG4gICAgX2wgPSBsJDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZXZBcHBlbmQoX2wxLCBfbDIpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKCFsMSkge1xuICAgICAgcmV0dXJuIGwyO1xuICAgIH1cbiAgICBfbDIgPSB7XG4gICAgICBoZDogbDEuaGQsXG4gICAgICB0bDogbDJcbiAgICB9O1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmV2KGwpIHtcbiAgcmV0dXJuIHJldkFwcGVuZChsLCAvKiBbXSAqLzApO1xufVxuXG5mdW5jdGlvbiBtYXBSZXZBdXgoZiwgX2FjYywgX2xzKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbHMgPSBfbHM7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCFscykge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgX2xzID0gbHMudGw7XG4gICAgX2FjYyA9IHtcbiAgICAgIGhkOiBmKGxzLmhkKSxcbiAgICAgIHRsOiBhY2NcbiAgICB9O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwUmV2KGYsIGxzKSB7XG4gIHJldHVybiBtYXBSZXZBdXgoZiwgLyogW10gKi8wLCBscyk7XG59XG5cbmZ1bmN0aW9uIG1hcChmLCBscykge1xuICByZXR1cm4gcmV2QXBwZW5kKG1hcFJldkF1eChmLCAvKiBbXSAqLzAsIGxzKSwgLyogW10gKi8wKTtcbn1cblxuZnVuY3Rpb24gaXRlcihmLCBfcGFyYW0pIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbTtcbiAgICBpZiAoIXBhcmFtKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBmKHBhcmFtLmhkKTtcbiAgICBfcGFyYW0gPSBwYXJhbS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGl0ZXJpKGYsIGwpIHtcbiAgdmFyIF9pID0gMDtcbiAgdmFyIF9wYXJhbSA9IGw7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoIXBhcmFtKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBmKGksIHBhcmFtLmhkKTtcbiAgICBfcGFyYW0gPSBwYXJhbS50bDtcbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvbGRMZWZ0KGYsIF9hY2N1LCBfbCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwgPSBfbDtcbiAgICB2YXIgYWNjdSA9IF9hY2N1O1xuICAgIGlmICghbCkge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIF9sID0gbC50bDtcbiAgICBfYWNjdSA9IGYoYWNjdSwgbC5oZCk7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0YWlsTG9vcChmLCBfYWNjLCBfcGFyYW0pIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbTtcbiAgICB2YXIgYWNjID0gX2FjYztcbiAgICBpZiAoIXBhcmFtKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICBfcGFyYW0gPSBwYXJhbS50bDtcbiAgICBfYWNjID0gZihwYXJhbS5oZCwgYWNjKTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvbGRSaWdodChmLCBsLCBpbml0KSB7XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKG4sIHBhcmFtKSB7XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIGluaXQ7XG4gICAgfVxuICAgIHZhciB0ID0gcGFyYW0udGw7XG4gICAgdmFyIGggPSBwYXJhbS5oZDtcbiAgICBpZiAobiA8IDEwMDApIHtcbiAgICAgIHJldHVybiBmKGgsIGxvb3AobiArIDEgfCAwLCB0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmKGgsIHRhaWxMb29wKGYsIGluaXQsIHJldkFwcGVuZCh0LCAvKiBbXSAqLzApKSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbG9vcCgwLCBsKTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbihseCkge1xuICB2YXIgX2FjYyA9IC8qIFtdICovMDtcbiAgdmFyIF9seCA9IGx4O1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGx4JDEgPSBfbHg7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCFseCQxKSB7XG4gICAgICByZXR1cm4gcmV2QXBwZW5kKGFjYywgLyogW10gKi8wKTtcbiAgICB9XG4gICAgX2x4ID0gbHgkMS50bDtcbiAgICBfYWNjID0gcmV2QXBwZW5kKGx4JDEuaGQsIGFjYyk7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJSZXZBdXgoZiwgX2FjYywgX3hzKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgdmFyIHlzID0geHMudGw7XG4gICAgdmFyIHkgPSB4cy5oZDtcbiAgICBpZiAoZih5KSkge1xuICAgICAgX3hzID0geXM7XG4gICAgICBfYWNjID0ge1xuICAgICAgICBoZDogeSxcbiAgICAgICAgdGw6IGFjY1xuICAgICAgfTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgX3hzID0geXM7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoZiwgeHMpIHtcbiAgcmV0dXJuIHJldkFwcGVuZChmaWx0ZXJSZXZBdXgoZiwgLyogW10gKi8wLCB4cyksIC8qIFtdICovMCk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlck1hcFJldkF1eChmLCBfYWNjLCBfeHMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICB2YXIgYWNjID0gX2FjYztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICB2YXIgeXMgPSB4cy50bDtcbiAgICB2YXIgeiA9IGYoeHMuaGQpO1xuICAgIGlmICh6ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF94cyA9IHlzO1xuICAgICAgX2FjYyA9IHtcbiAgICAgICAgaGQ6IENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24oeiksXG4gICAgICAgIHRsOiBhY2NcbiAgICAgIH07XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIF94cyA9IHlzO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyTWFwKGYsIHhzKSB7XG4gIHJldHVybiByZXZBcHBlbmQoZmlsdGVyTWFwUmV2QXV4KGYsIC8qIFtdICovMCwgeHMpLCAvKiBbXSAqLzApO1xufVxuXG5mdW5jdGlvbiBjb3VudEJ5KGYsIHhzKSB7XG4gIHZhciBfYWNjID0gMDtcbiAgdmFyIF94cyA9IHhzO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzJDEgPSBfeHM7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCF4cyQxKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICBfeHMgPSB4cyQxLnRsO1xuICAgIF9hY2MgPSBmKHhzJDEuaGQpID8gYWNjICsgMSB8IDAgOiBhY2M7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0KG4sIGYpIHtcbiAgcmV0dXJuIEpzX3ZlY3Rvci50b0xpc3QoSnNfdmVjdG9yLmluaXQobiwgZikpO1xufVxuXG5mdW5jdGlvbiB0b1ZlY3Rvcih4cykge1xuICBpZiAoIXhzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBhID0gbmV3IEFycmF5KGxlbmd0aCh4cykpO1xuICB2YXIgX2kgPSAwO1xuICB2YXIgX3BhcmFtID0geHM7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoIXBhcmFtKSB7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgYVtpXSA9IHBhcmFtLmhkO1xuICAgIF9wYXJhbSA9IHBhcmFtLnRsO1xuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXF1YWwoY21wLCBfeHMsIF95cykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHlzID0gX3lzO1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICBpZiAoeXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgheXMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFjbXAoeHMuaGQsIHlzLmhkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfeXMgPSB5cy50bDtcbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmV4cG9ydCB7XG4gIGxlbmd0aCAsXG4gIGNvbnMgLFxuICBpc0VtcHR5ICxcbiAgaGQgLFxuICB0bCAsXG4gIG50aCAsXG4gIHJldkFwcGVuZCAsXG4gIHJldiAsXG4gIG1hcFJldiAsXG4gIG1hcCAsXG4gIGl0ZXIgLFxuICBpdGVyaSAsXG4gIGZvbGRMZWZ0ICxcbiAgZm9sZFJpZ2h0ICxcbiAgZmxhdHRlbiAsXG4gIGZpbHRlciAsXG4gIGZpbHRlck1hcCAsXG4gIGNvdW50QnkgLFxuICBpbml0ICxcbiAgdG9WZWN0b3IgLFxuICBlcXVhbCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBKc19pbnQgZnJvbSBcIi4vanNfaW50LmpzXCI7XG5cbmZ1bmN0aW9uIHVuc2FmZV9jZWlsKHByaW0pIHtcbiAgcmV0dXJuIE1hdGguY2VpbChwcmltKTtcbn1cblxuZnVuY3Rpb24gY2VpbF9pbnQoZikge1xuICBpZiAoZiA+IEpzX2ludC5tYXgpIHtcbiAgICByZXR1cm4gSnNfaW50Lm1heDtcbiAgfSBlbHNlIGlmIChmIDwgSnNfaW50Lm1pbikge1xuICAgIHJldHVybiBKc19pbnQubWluO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBNYXRoLmNlaWwoZik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5zYWZlX2Zsb29yKHByaW0pIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IocHJpbSk7XG59XG5cbmZ1bmN0aW9uIGZsb29yX2ludChmKSB7XG4gIGlmIChmID4gSnNfaW50Lm1heCkge1xuICAgIHJldHVybiBKc19pbnQubWF4O1xuICB9IGVsc2UgaWYgKGYgPCBKc19pbnQubWluKSB7XG4gICAgcmV0dXJuIEpzX2ludC5taW47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmFuZG9tX2ludChtaW4sIG1heCkge1xuICByZXR1cm4gZmxvb3JfaW50KE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluIHwgMCkpICsgbWluIHwgMDtcbn1cblxudmFyIGNlaWwgPSBjZWlsX2ludDtcblxudmFyIGZsb29yID0gZmxvb3JfaW50O1xuXG5leHBvcnQge1xuICB1bnNhZmVfY2VpbCAsXG4gIGNlaWxfaW50ICxcbiAgY2VpbCAsXG4gIHVuc2FmZV9mbG9vciAsXG4gIGZsb29yX2ludCAsXG4gIGZsb29yICxcbiAgcmFuZG9tX2ludCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbmZ1bmN0aW9uIGZpbHRlckluUGxhY2UocCwgYSkge1xuICB2YXIgaSA9IDA7XG4gIHZhciBqID0gMDtcbiAgd2hpbGUoaSA8IGEubGVuZ3RoKSB7XG4gICAgdmFyIHYgPSBhW2ldO1xuICAgIGlmIChwKHYpKSB7XG4gICAgICBhW2pdID0gdjtcbiAgICAgIGogPSBqICsgMSB8IDA7XG4gICAgfVxuICAgIGkgPSBpICsgMSB8IDA7XG4gIH07XG4gIGEuc3BsaWNlKGopO1xuICBcbn1cblxuZnVuY3Rpb24gZW1wdHkoYSkge1xuICBhLnNwbGljZSgwKTtcbiAgXG59XG5cbmZ1bmN0aW9uIHB1c2hCYWNrKHgsIHhzKSB7XG4gIHhzLnB1c2goeCk7XG4gIFxufVxuXG5mdW5jdGlvbiBtZW1CeVJlZih4LCB4cykge1xuICByZXR1cm4geHMuaW5kZXhPZih4KSA+PSAwO1xufVxuXG5mdW5jdGlvbiBpdGVyKGYsIHhzKSB7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0geHMubGVuZ3RoOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgZih4c1tpXSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGl0ZXJpKGYsIGEpIHtcbiAgZm9yKHZhciBpID0gMCAsaV9maW5pc2ggPSBhLmxlbmd0aDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIGYoaSwgYVtpXSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIHRvTGlzdChhKSB7XG4gIHZhciBfaSA9IGEubGVuZ3RoIC0gMSB8IDA7XG4gIHZhciBfcmVzID0gLyogW10gKi8wO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHJlcyA9IF9yZXM7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIF9yZXMgPSB7XG4gICAgICBoZDogYVtpXSxcbiAgICAgIHRsOiByZXNcbiAgICB9O1xuICAgIF9pID0gaSAtIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdChuLCBmKSB7XG4gIHZhciB2ID0gbmV3IEFycmF5KG4pO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbjsgKytpKXtcbiAgICB2W2ldID0gZihpKTtcbiAgfVxuICByZXR1cm4gdjtcbn1cblxuZnVuY3Rpb24gY29weSh4KSB7XG4gIHZhciBsZW4gPSB4Lmxlbmd0aDtcbiAgdmFyIGIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICBiW2ldID0geFtpXTtcbiAgfVxuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gbWFwKGYsIGEpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIHIgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHJbaV0gPSBmKGFbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBmb2xkTGVmdChmLCB4LCBhKSB7XG4gIHZhciByID0geDtcbiAgZm9yKHZhciBpID0gMCAsaV9maW5pc2ggPSBhLmxlbmd0aDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIHIgPSBmKHIsIGFbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBmb2xkUmlnaHQoZiwgYSwgeCkge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IGEubGVuZ3RoIC0gMSB8IDA7IGkgPj0gMDsgLS1pKXtcbiAgICByID0gZihhW2ldLCByKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gbWFwaShmLCBhKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIGlmIChsID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciByID0gbmV3IEFycmF5KGwpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICByW2ldID0gZihpLCBhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gYXBwZW5kKHgsIGEpIHtcbiAgcmV0dXJuIGEuY29uY2F0KFt4XSk7XG59XG5cbmV4cG9ydCB7XG4gIGZpbHRlckluUGxhY2UgLFxuICBlbXB0eSAsXG4gIHB1c2hCYWNrICxcbiAgY29weSAsXG4gIG1lbUJ5UmVmICxcbiAgaXRlciAsXG4gIGl0ZXJpICxcbiAgdG9MaXN0ICxcbiAgbWFwICxcbiAgbWFwaSAsXG4gIGZvbGRMZWZ0ICxcbiAgZm9sZFJpZ2h0ICxcbiAgaW5pdCAsXG4gIGFwcGVuZCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBSZVNjcmlwdCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG5cbmltcG9ydCAqIGFzIENhbGMgZnJvbSBcIi4vY29yZS9jYWxjL0NhbGMuYnMuanNcIjtcbmltcG9ydCAqIGFzIEpzX2V4biBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9qc19leG4uanNcIjtcblxudmFyIGNvbmZpZyA9IHtcbiAgc29ydE5NVUk6IHRydWVcbn07XG5cbmZ1bmN0aW9uIGZyb21KUyhqc19pbnQpIHtcbiAgdmFyIGMgPSBDYWxjLkNvbnN0LmZyb21JbnQoY29uZmlnLnNvcnROTVVJLCBqc19pbnQpO1xuICBpZiAoYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGM7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEpzX2V4bi5yYWlzZUVycm9yKFwiSW52YWxpZCBjb25zdGFudFwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmcm9tSlNfYXJyYXkoanNfYXJyKSB7XG4gIHJldHVybiBqc19hcnIubWFwKGZyb21KUyk7XG59XG5cbmZ1bmN0aW9uIHRvSlMoYykge1xuICByZXR1cm4gQ2FsYy5Db25zdC50b0ludChjb25maWcuc29ydE5NVUksIGMpO1xufVxuXG5mdW5jdGlvbiB0b0pTX2FycmF5KGNfYXJyKSB7XG4gIHJldHVybiBjX2Fyci5tYXAodG9KUyk7XG59XG5cbnZhciBDb25zdCA9IHtcbiAgZnJvbUpTOiBmcm9tSlMsXG4gIGZyb21KU19hcnJheTogZnJvbUpTX2FycmF5LFxuICB0b0pTOiB0b0pTLFxuICB0b0pTX2FycmF5OiB0b0pTX2FycmF5XG59O1xuXG5mdW5jdGlvbiBmcm9tSlMkMShqc19uZXN0ZWQpIHtcbiAgcmV0dXJuIGpzX25lc3RlZDtcbn1cblxuZnVuY3Rpb24gdG9KUyQxKG5lc3RlZCkge1xuICByZXR1cm4gbmVzdGVkO1xufVxuXG52YXIgTmVzdGVkID0ge1xuICBmcm9tSlM6IGZyb21KUyQxLFxuICB0b0pTOiB0b0pTJDFcbn07XG5cbnZhciBDb252ZXJ0ZXIgPSB7XG4gIENvbnN0OiBDb25zdCxcbiAgTmVzdGVkOiBOZXN0ZWRcbn07XG5cbmZ1bmN0aW9uIHNob3coZCkge1xuICByZXR1cm4gQ2FsYy5Db25zdC5zaG93KGZyb21KUyhkKSk7XG59XG5cbmZ1bmN0aW9uIHNob3dBc0tleShkKSB7XG4gIHJldHVybiBDYWxjLkNvbnN0LnNob3dBc0tleShmcm9tSlMoZCkpO1xufVxuXG5mdW5jdGlvbiBmcm9tU3RyKHN0cikge1xuICB2YXIgYyA9IENhbGMuQ29uc3QudEZyb21TdHIoc3RyKTtcbiAgaWYgKGMgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0b0pTKGMpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBKc19leG4ucmFpc2VFcnJvcihcIkNhbm5vdCBpbnRlcnByZXQgc3RyaW5nXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludihkKSB7XG4gIHJldHVybiB0b0pTKENhbGMuQ29uc3QuaW52KGZyb21KUyhkKSkpO1xufVxuXG5mdW5jdGlvbiByZWwoZDEsIGQyKSB7XG4gIHZhciBjMSA9IGZyb21KUyhkMSk7XG4gIHZhciBjMiA9IGZyb21KUyhkMik7XG4gIHJldHVybiB0b0pTKENhbGMuQ29uc3QucmVsKGMxLCBjMikpO1xufVxuXG52YXIgQ29uc3QkMSA9IHtcbiAgc2hvdzogc2hvdyxcbiAgc2hvd0FzS2V5OiBzaG93QXNLZXksXG4gIGZyb21TdHI6IGZyb21TdHIsXG4gIGludjogaW52LFxuICByZWw6IHJlbFxufTtcblxudmFyIHNob3ckMSA9IENhbGMuTmVzdGVkLnNob3c7XG5cbnZhciBnZXRMaXN0ID0gQ2FsYy5OZXN0ZWQuZ2V0TGlzdDtcblxuZnVuY3Rpb24gZnJvbUFycmF5VG9MKGFycikge1xuICByZXR1cm4gQ2FsYy5OZXN0ZWQuZnJvbUFycmF5VG9MKGFyci5tYXAoZnJvbUpTKSk7XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheVRvUihhcnIpIHtcbiAgcmV0dXJuIENhbGMuTmVzdGVkLmZyb21BcnJheVRvUihhcnIubWFwKGZyb21KUykpO1xufVxuXG5mdW5jdGlvbiB0b0FycmF5KGQpIHtcbiAgdmFyIGNfYXJyID0gQ2FsYy5OZXN0ZWQudG9BcnJheShkKTtcbiAgcmV0dXJuIGNfYXJyLm1hcCh0b0pTKTtcbn1cblxudmFyIE5lc3RlZCQxID0ge1xuICBzaG93OiBzaG93JDEsXG4gIGdldExpc3Q6IGdldExpc3QsXG4gIGZyb21BcnJheVRvTDogZnJvbUFycmF5VG9MLFxuICBmcm9tQXJyYXlUb1I6IGZyb21BcnJheVRvUixcbiAgdG9BcnJheTogdG9BcnJheVxufTtcblxudmFyIENhbGMkMSA9IHtcbiAgQ29uc3Q6IENvbnN0JDEsXG4gIE5lc3RlZDogTmVzdGVkJDFcbn07XG5cbmV4cG9ydCB7XG4gIGNvbmZpZyAsXG4gIENvbnZlcnRlciAsXG4gIENhbGMkMSBhcyBDYWxjLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgUmVTY3JpcHQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgSnNfbGlzdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9qc19saXN0LmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X0xpc3QgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvYmVsdF9MaXN0LmpzXCI7XG5cbmZ1bmN0aW9uIHRUb0pzKHBhcmFtKSB7XG4gIHJldHVybiBwYXJhbSArIDAgfCAwO1xufVxuXG5mdW5jdGlvbiB0RnJvbUpzKHBhcmFtKSB7XG4gIGlmIChwYXJhbSA8PSAzICYmIDAgPD0gcGFyYW0pIHtcbiAgICByZXR1cm4gcGFyYW0gLSAwIHwgMDtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gc2hvdyh4KSB7XG4gIHN3aXRjaCAoeCkge1xuICAgIGNhc2UgLyogTiAqLzAgOlxuICAgICAgICByZXR1cm4gXCJOXCI7XG4gICAgY2FzZSAvKiBVICovMSA6XG4gICAgICAgIHJldHVybiBcIlVcIjtcbiAgICBjYXNlIC8qIEkgKi8yIDpcbiAgICAgICAgcmV0dXJuIFwiSVwiO1xuICAgIGNhc2UgLyogTSAqLzMgOlxuICAgICAgICByZXR1cm4gXCJNXCI7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd0FzS2V5KHgpIHtcbiAgc3dpdGNoICh4KSB7XG4gICAgY2FzZSAvKiBOICovMCA6XG4gICAgICAgIHJldHVybiBcIk5cIjtcbiAgICBjYXNlIC8qIFUgKi8xIDpcbiAgICAgICAgcmV0dXJuIFwiVVwiO1xuICAgIGNhc2UgLyogSSAqLzIgOlxuICAgICAgICByZXR1cm4gXCJJXCI7XG4gICAgY2FzZSAvKiBNICovMyA6XG4gICAgICAgIHJldHVybiBcIk1cIjtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiB0b0ludChzb3J0Tk1VSU9wdCwgYykge1xuICB2YXIgc29ydE5NVUkgPSBzb3J0Tk1VSU9wdCAhPT0gdW5kZWZpbmVkID8gc29ydE5NVUlPcHQgOiBmYWxzZTtcbiAgdmFyIG4gPSBjICsgMCB8IDA7XG4gIHN3aXRjaCAobikge1xuICAgIGNhc2UgMCA6XG4gICAgICAgIHJldHVybiBuO1xuICAgIGNhc2UgMSA6XG4gICAgICAgIGlmIChzb3J0Tk1VSSkge1xuICAgICAgICAgIHJldHVybiAyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICB9XG4gICAgY2FzZSAyIDpcbiAgICAgICAgaWYgKHNvcnROTVVJKSB7XG4gICAgICAgICAgcmV0dXJuIDM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgIH1cbiAgICBjYXNlIDMgOlxuICAgICAgICBpZiAoc29ydE5NVUkpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfVxuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gLTk5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGZyb21JbnQoc29ydE5NVUlPcHQsIG4pIHtcbiAgdmFyIHNvcnROTVVJID0gc29ydE5NVUlPcHQgIT09IHVuZGVmaW5lZCA/IHNvcnROTVVJT3B0IDogZmFsc2U7XG4gIHZhciBfYyA9IHRGcm9tSnMobik7XG4gIGlmICghc29ydE5NVUkpIHtcbiAgICByZXR1cm4gX2M7XG4gIH1cbiAgaWYgKF9jID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gX2M7XG4gIH1cbiAgc3dpdGNoIChfYykge1xuICAgIGNhc2UgLyogTiAqLzAgOlxuICAgICAgICByZXR1cm4gX2M7XG4gICAgY2FzZSAvKiBVICovMSA6XG4gICAgICAgIHJldHVybiAvKiBNICovMztcbiAgICBjYXNlIC8qIEkgKi8yIDpcbiAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgIGNhc2UgLyogTSAqLzMgOlxuICAgICAgICByZXR1cm4gLyogSSAqLzI7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gdEZyb21TdHIoc3RyKSB7XG4gIHN3aXRjaCAoc3RyKSB7XG4gICAgY2FzZSBcIihtbilcIiA6XG4gICAgY2FzZSBcIklcIiA6XG4gICAgY2FzZSBcImlcIiA6XG4gICAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICBjYXNlIFwiKClcIiA6XG4gICAgY2FzZSBcIk1cIiA6XG4gICAgY2FzZSBcIm1cIiA6XG4gICAgICAgIHJldHVybiAvKiBNICovMztcbiAgICBjYXNlIFwiXCIgOlxuICAgIGNhc2UgXCIoKCkpXCIgOlxuICAgIGNhc2UgXCIuXCIgOlxuICAgIGNhc2UgXCJOXCIgOlxuICAgIGNhc2UgXCJuXCIgOlxuICAgICAgICByZXR1cm4gLyogTiAqLzA7XG4gICAgY2FzZSBcIlVcIiA6XG4gICAgY2FzZSBcIm1uXCIgOlxuICAgIGNhc2UgXCJ1XCIgOlxuICAgICAgICByZXR1cm4gLyogVSAqLzE7XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiA7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52KHgpIHtcbiAgc3dpdGNoICh4KSB7XG4gICAgY2FzZSAvKiBOICovMCA6XG4gICAgICAgIHJldHVybiAvKiBNICovMztcbiAgICBjYXNlIC8qIFUgKi8xIDpcbiAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgIGNhc2UgLyogSSAqLzIgOlxuICAgICAgICByZXR1cm4gLyogVSAqLzE7XG4gICAgY2FzZSAvKiBNICovMyA6XG4gICAgICAgIHJldHVybiAvKiBOICovMDtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiByZWwoeCwgeSkge1xuICBpZiAoeSA9PT0gMCkge1xuICAgIHJldHVybiB4O1xuICB9XG4gIHN3aXRjaCAoeCkge1xuICAgIGNhc2UgLyogTiAqLzAgOlxuICAgICAgICByZXR1cm4geTtcbiAgICBjYXNlIC8qIFUgKi8xIDpcbiAgICAgICAgaWYgKHkgPj0gMikge1xuICAgICAgICAgIHJldHVybiAvKiBNICovMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gLyogVSAqLzE7XG4gICAgICAgIH1cbiAgICBjYXNlIC8qIEkgKi8yIDpcbiAgICAgICAgaWYgKHkgIT09IDIpIHtcbiAgICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgICAgICB9XG4gICAgY2FzZSAvKiBNICovMyA6XG4gICAgICAgIHJldHVybiAvKiBNICovMztcbiAgICBcbiAgfVxufVxuXG52YXIgQ29uc3RfZW51bSA9IHtcbiAgaGQ6IC8qIE4gKi8wLFxuICB0bDoge1xuICAgIGhkOiAvKiBVICovMSxcbiAgICB0bDoge1xuICAgICAgaGQ6IC8qIEkgKi8yLFxuICAgICAgdGw6IHtcbiAgICAgICAgaGQ6IC8qIE0gKi8zLFxuICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICB9XG4gICAgfVxuICB9XG59O1xuXG52YXIgQ29uc3RfZW51bV9OTVVJID0ge1xuICBoZDogLyogTiAqLzAsXG4gIHRsOiB7XG4gICAgaGQ6IC8qIE0gKi8zLFxuICAgIHRsOiB7XG4gICAgICBoZDogLyogVSAqLzEsXG4gICAgICB0bDoge1xuICAgICAgICBoZDogLyogSSAqLzIsXG4gICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgIH1cbiAgICB9XG4gIH1cbn07XG5cbnZhciBDb25zdF9lbnVtTk0gPSB7XG4gIGhkOiAvKiBOICovMCxcbiAgdGw6IHtcbiAgICBoZDogLyogTSAqLzMsXG4gICAgdGw6IC8qIFtdICovMFxuICB9XG59O1xuXG52YXIgQ29uc3RfZW51bVVJID0ge1xuICBoZDogLyogVSAqLzEsXG4gIHRsOiB7XG4gICAgaGQ6IC8qIEkgKi8yLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfVxufTtcblxudmFyIENvbnN0ID0ge1xuICB0VG9KczogdFRvSnMsXG4gIHRGcm9tSnM6IHRGcm9tSnMsXG4gIG46IC8qIE4gKi8wLFxuICB1OiAvKiBVICovMSxcbiAgaTogLyogSSAqLzIsXG4gIG06IC8qIE0gKi8zLFxuICBzaG93OiBzaG93LFxuICBzaG93QXNLZXk6IHNob3dBc0tleSxcbiAgdG9JbnQ6IHRvSW50LFxuICBmcm9tSW50OiBmcm9tSW50LFxuICB0RnJvbVN0cjogdEZyb21TdHIsXG4gICQkZW51bTogQ29uc3RfZW51bSxcbiAgZW51bV9OTVVJOiBDb25zdF9lbnVtX05NVUksXG4gIGVudW1OTTogQ29uc3RfZW51bU5NLFxuICBlbnVtVUk6IENvbnN0X2VudW1VSSxcbiAgaW52OiBpbnYsXG4gIHJlbDogcmVsXG59O1xuXG5mdW5jdGlvbiBzaG93JDEobmVzdCkge1xuICBpZiAobmVzdC5OQU1FID09PSBcIk5lc3RUb1JcIikge1xuICAgIHZhciBjbGlzdCA9IG5lc3QuVkFMO1xuICAgIGlmIChjbGlzdCkge1xuICAgICAgcmV0dXJuIFwiKFwiICsgQmVsdF9MaXN0LnJlZHVjZVJldmVyc2UoY2xpc3QsIFwiXCIsIChmdW5jdGlvbiAoc3RyLCBjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaG93KGMpICsgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ci5sZW5ndGggPiAwID8gXCIoXCIgKyBzdHIgKyBcIilcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pKSArIFwiKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJNXCI7XG4gICAgfVxuICB9XG4gIHZhciBjbGlzdCQxID0gbmVzdC5WQUw7XG4gIGlmIChjbGlzdCQxKSB7XG4gICAgcmV0dXJuIFwiKFwiICsgQmVsdF9MaXN0LnJlZHVjZShjbGlzdCQxLCBcIlwiLCAoZnVuY3Rpb24gKHN0ciwgYykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyLmxlbmd0aCA+IDAgPyBcIihcIiArIHN0ciArIFwiKVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSArIHNob3coYyk7XG4gICAgICAgICAgICAgICAgfSkpICsgXCIpXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiTVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldExpc3QobmVzdCkge1xuICByZXR1cm4gbmVzdC5WQUw7XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheVRvTChhcnIpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBOQU1FOiBcIk5lc3RUb0xcIixcbiAgICAgICAgICBWQUw6IEJlbHRfTGlzdC5mcm9tQXJyYXkoYXJyKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlUb1IoYXJyKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgVkFMOiBCZWx0X0xpc3QuZnJvbUFycmF5KGFycilcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheShuZXN0KSB7XG4gIHJldHVybiBCZWx0X0xpc3QudG9BcnJheShuZXN0LlZBTCk7XG59XG5cbmZ1bmN0aW9uIGZtYXBMKHBhcmFtLCBmbikge1xuICByZXR1cm4ge1xuICAgICAgICAgIE5BTUU6IFwiTmVzdFRvTFwiLFxuICAgICAgICAgIFZBTDogQ3VycnkuXzEoZm4sIHBhcmFtLlZBTClcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZm1hcFIocGFyYW0sIGZuKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgVkFMOiBDdXJyeS5fMShmbiwgcGFyYW0uVkFMKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBfcmVkdWNlQnlDcm9zc2luZyhfY2xpc3QpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBjbGlzdCA9IF9jbGlzdDtcbiAgICBpZiAoIWNsaXN0KSB7XG4gICAgICByZXR1cm4gY2xpc3Q7XG4gICAgfVxuICAgIHZhciBjID0gY2xpc3QuaGQ7XG4gICAgaWYgKGMgPT09IDApIHtcbiAgICAgIHZhciBtYXRjaCA9IGNsaXN0LnRsO1xuICAgICAgaWYgKG1hdGNoICYmIG1hdGNoLmhkID09PSAwKSB7XG4gICAgICAgIF9jbGlzdCA9IG1hdGNoLnRsO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiBjLFxuICAgICAgICAgICAgdGw6IF9yZWR1Y2VCeUNyb3NzaW5nKGNsaXN0LnRsKVxuICAgICAgICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZUJ5Q3Jvc3NpbmdMKHBhcmFtKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9MXCIsXG4gICAgICAgICAgVkFMOiBfcmVkdWNlQnlDcm9zc2luZyhwYXJhbS5WQUwpXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZUJ5Q3Jvc3NpbmdSKHBhcmFtKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgVkFMOiBfcmVkdWNlQnlDcm9zc2luZyhwYXJhbS5WQUwpXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIF9yZWR1Y2VCeUNhbGxpbmcoY2xpc3QsIHNvbWVVSSkge1xuICBpZiAoIWNsaXN0KSB7XG4gICAgcmV0dXJuIGNsaXN0O1xuICB9XG4gIHZhciBjcyA9IGNsaXN0LnRsO1xuICB2YXIgYyA9IGNsaXN0LmhkO1xuICBpZiAoY3MpIHtcbiAgICBpZiAoYyAhPT0gMCkge1xuICAgICAgaWYgKGMgPj0gMykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhkOiAvKiBNICovMyxcbiAgICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHNvbWVVSSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzb21lVUkgPT09IGMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgaGQ6IC8qIE4gKi8wLFxuICAgICAgICAgICAgICAgICAgdGw6IF9yZWR1Y2VCeUNhbGxpbmcoY3MsIHNvbWVVSSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBoZDogLyogTSAqLzMsXG4gICAgICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZDogYyxcbiAgICAgICAgICAgICAgICB0bDogX3JlZHVjZUJ5Q2FsbGluZyhjcywgYylcbiAgICAgICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaGQ6IC8qIE4gKi8wLFxuICAgICAgICAgICAgICB0bDogX3JlZHVjZUJ5Q2FsbGluZyhjcywgc29tZVVJKVxuICAgICAgICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIShjID09PSAyIHx8IGMgPT09IDEpIHx8IHNvbWVVSSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGNsaXN0O1xuICB9IGVsc2UgaWYgKHNvbWVVSSA9PT0gYykge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZDogLyogTiAqLzAsXG4gICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IC8qIE0gKi8zLFxuICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlQnlDYWxsaW5nTChwYXJhbSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIE5BTUU6IFwiTmVzdFRvTFwiLFxuICAgICAgICAgIFZBTDogSnNfbGlzdC5yZXYoX3JlZHVjZUJ5Q2FsbGluZyhKc19saXN0LnJldihwYXJhbS5WQUwpLCB1bmRlZmluZWQpKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VCeUNhbGxpbmdSKHBhcmFtKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgVkFMOiBfcmVkdWNlQnlDYWxsaW5nKHBhcmFtLlZBTCwgdW5kZWZpbmVkKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VMKHBhcmFtKSB7XG4gIHJldHVybiByZWR1Y2VCeUNyb3NzaW5nTChyZWR1Y2VCeUNhbGxpbmdMKHtcbiAgICAgICAgICAgICAgICAgIE5BTUU6IFwiTmVzdFRvTFwiLFxuICAgICAgICAgICAgICAgICAgVkFMOiBwYXJhbS5WQUxcbiAgICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVIocGFyYW0pIHtcbiAgcmV0dXJuIHJlZHVjZUJ5Q3Jvc3NpbmdSKHJlZHVjZUJ5Q2FsbGluZ1Ioe1xuICAgICAgICAgICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgICAgICAgICBWQUw6IHBhcmFtLlZBTFxuICAgICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gX2NhbGMoY2xpc3QpIHtcbiAgaWYgKCFjbGlzdCkge1xuICAgIHJldHVybiAvKiBOICovMDtcbiAgfVxuICB2YXIgY3MgPSBjbGlzdC50bDtcbiAgdmFyIGMgPSBjbGlzdC5oZDtcbiAgaWYgKGNzKSB7XG4gICAgaWYgKGMgIT09IDApIHtcbiAgICAgIGlmIChjID49IDMpIHtcbiAgICAgICAgcmV0dXJuIC8qIE0gKi8zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlbChjLCBpbnYoX2NhbGMoY3MpKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpbnYoX2NhbGMoY3MpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGM7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY0wocGFyYW0pIHtcbiAgdmFyIGNsaXN0ID0gcGFyYW0uVkFMO1xuICBpZiAoY2xpc3QpIHtcbiAgICByZXR1cm4gaW52KF9jYWxjKEpzX2xpc3QucmV2KGNsaXN0KSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiBNICovMztcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjUihwYXJhbSkge1xuICB2YXIgY2xpc3QgPSBwYXJhbS5WQUw7XG4gIGlmIChjbGlzdCkge1xuICAgIHJldHVybiBpbnYoX2NhbGMoY2xpc3QpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogTSAqLzM7XG4gIH1cbn1cblxudmFyIE5lc3RlZCA9IHtcbiAgc2hvdzogc2hvdyQxLFxuICBnZXRMaXN0OiBnZXRMaXN0LFxuICBmcm9tQXJyYXlUb0w6IGZyb21BcnJheVRvTCxcbiAgZnJvbUFycmF5VG9SOiBmcm9tQXJyYXlUb1IsXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIGZtYXBMOiBmbWFwTCxcbiAgZm1hcFI6IGZtYXBSLFxuICByZWR1Y2VCeUNyb3NzaW5nTDogcmVkdWNlQnlDcm9zc2luZ0wsXG4gIHJlZHVjZUJ5Q3Jvc3NpbmdSOiByZWR1Y2VCeUNyb3NzaW5nUixcbiAgcmVkdWNlQnlDYWxsaW5nTDogcmVkdWNlQnlDYWxsaW5nTCxcbiAgcmVkdWNlQnlDYWxsaW5nUjogcmVkdWNlQnlDYWxsaW5nUixcbiAgcmVkdWNlTDogcmVkdWNlTCxcbiAgcmVkdWNlUjogcmVkdWNlUixcbiAgY2FsY0w6IGNhbGNMLFxuICBjYWxjUjogY2FsY1Jcbn07XG5cbmV4cG9ydCB7XG4gIENvbnN0ICxcbiAgTmVzdGVkICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IGZ1bmN0aW9uKGV4cG9ydHMsIGRlZmluaXRpb24pIHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gZnVuY3Rpb24ob2JqLCBwcm9wKSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKTsgfSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IGZ1bmN0aW9uKGV4cG9ydHMpIHtcblx0aWYodHlwZW9mIFN5bWJvbCAhPT0gJ3VuZGVmaW5lZCcgJiYgU3ltYm9sLnRvU3RyaW5nVGFnKSB7XG5cdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIFN5bWJvbC50b1N0cmluZ1RhZywgeyB2YWx1ZTogJ01vZHVsZScgfSk7XG5cdH1cblx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsICdfX2VzTW9kdWxlJywgeyB2YWx1ZTogdHJ1ZSB9KTtcbn07IiwiaW1wb3J0ICogYXMgZm9ybWZvcm1KUyBmcm9tICcuL0pTX2ludGVyZmFjZS5icy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IGZvcm1mb3JtSlM7Il0sInNvdXJjZVJvb3QiOiIifQ==