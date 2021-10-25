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

/***/ "./node_modules/rescript/lib/es6/belt_Id.js":
/*!**************************************************!*\
  !*** ./node_modules/rescript/lib/es6/belt_Id.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MakeComparableU": function() { return /* binding */ MakeComparableU; },
/* harmony export */   "MakeComparable": function() { return /* binding */ MakeComparable; },
/* harmony export */   "comparableU": function() { return /* binding */ comparableU; },
/* harmony export */   "comparable": function() { return /* binding */ comparable; },
/* harmony export */   "MakeHashableU": function() { return /* binding */ MakeHashableU; },
/* harmony export */   "MakeHashable": function() { return /* binding */ MakeHashable; },
/* harmony export */   "hashableU": function() { return /* binding */ hashableU; },
/* harmony export */   "hashable": function() { return /* binding */ hashable; }
/* harmony export */ });
/* harmony import */ var _curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry.js */ "./node_modules/rescript/lib/es6/curry.js");




function MakeComparableU(M) {
  return M;
}

function MakeComparable(M) {
  var cmp = M.cmp;
  var cmp$1 = _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(cmp);
  return {
          cmp: cmp$1
        };
}

function comparableU(cmp) {
  return {
          cmp: cmp
        };
}

function comparable(cmp) {
  var cmp$1 = _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(cmp);
  return {
          cmp: cmp$1
        };
}

function MakeHashableU(M) {
  return M;
}

function MakeHashable(M) {
  var hash = M.hash;
  var hash$1 = _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(hash);
  var eq = M.eq;
  var eq$1 = _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(eq);
  return {
          hash: hash$1,
          eq: eq$1
        };
}

function hashableU(hash, eq) {
  return {
          hash: hash,
          eq: eq
        };
}

function hashable(hash, eq) {
  var hash$1 = _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(hash);
  var eq$1 = _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(eq);
  return {
          hash: hash$1,
          eq: eq$1
        };
}


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/belt_Int.js":
/*!***************************************************!*\
  !*** ./node_modules/rescript/lib/es6/belt_Int.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "fromString": function() { return /* binding */ fromString; }
/* harmony export */ });



function fromString(i) {
  var i$1 = parseInt(i, 10);
  if (isNaN(i$1)) {
    return ;
  } else {
    return i$1;
  }
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

/***/ "./node_modules/rescript/lib/es6/belt_Option.js":
/*!******************************************************!*\
  !*** ./node_modules/rescript/lib/es6/belt_Option.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "keepU": function() { return /* binding */ keepU; },
/* harmony export */   "keep": function() { return /* binding */ keep; },
/* harmony export */   "forEachU": function() { return /* binding */ forEachU; },
/* harmony export */   "forEach": function() { return /* binding */ forEach; },
/* harmony export */   "getExn": function() { return /* binding */ getExn; },
/* harmony export */   "mapWithDefaultU": function() { return /* binding */ mapWithDefaultU; },
/* harmony export */   "mapWithDefault": function() { return /* binding */ mapWithDefault; },
/* harmony export */   "mapU": function() { return /* binding */ mapU; },
/* harmony export */   "map": function() { return /* binding */ map; },
/* harmony export */   "flatMapU": function() { return /* binding */ flatMapU; },
/* harmony export */   "flatMap": function() { return /* binding */ flatMap; },
/* harmony export */   "getWithDefault": function() { return /* binding */ getWithDefault; },
/* harmony export */   "isSome": function() { return /* binding */ isSome; },
/* harmony export */   "isNone": function() { return /* binding */ isNone; },
/* harmony export */   "eqU": function() { return /* binding */ eqU; },
/* harmony export */   "eq": function() { return /* binding */ eq; },
/* harmony export */   "cmpU": function() { return /* binding */ cmpU; },
/* harmony export */   "cmp": function() { return /* binding */ cmp; }
/* harmony export */ });
/* harmony import */ var _curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry.js */ "./node_modules/rescript/lib/es6/curry.js");
/* harmony import */ var _caml_option_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caml_option.js */ "./node_modules/rescript/lib/es6/caml_option.js");





function keepU(opt, p) {
  if (opt !== undefined && p(_caml_option_js__WEBPACK_IMPORTED_MODULE_1__.valFromOption(opt))) {
    return opt;
  }
  
}

function keep(opt, p) {
  return keepU(opt, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(p));
}

function forEachU(opt, f) {
  if (opt !== undefined) {
    return f(_caml_option_js__WEBPACK_IMPORTED_MODULE_1__.valFromOption(opt));
  }
  
}

function forEach(opt, f) {
  return forEachU(opt, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function getExn(x) {
  if (x !== undefined) {
    return _caml_option_js__WEBPACK_IMPORTED_MODULE_1__.valFromOption(x);
  }
  throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
}

function mapWithDefaultU(opt, $$default, f) {
  if (opt !== undefined) {
    return f(_caml_option_js__WEBPACK_IMPORTED_MODULE_1__.valFromOption(opt));
  } else {
    return $$default;
  }
}

function mapWithDefault(opt, $$default, f) {
  return mapWithDefaultU(opt, $$default, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function mapU(opt, f) {
  if (opt !== undefined) {
    return _caml_option_js__WEBPACK_IMPORTED_MODULE_1__.some(f(_caml_option_js__WEBPACK_IMPORTED_MODULE_1__.valFromOption(opt)));
  }
  
}

function map(opt, f) {
  return mapU(opt, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function flatMapU(opt, f) {
  if (opt !== undefined) {
    return f(_caml_option_js__WEBPACK_IMPORTED_MODULE_1__.valFromOption(opt));
  }
  
}

function flatMap(opt, f) {
  return flatMapU(opt, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function getWithDefault(opt, $$default) {
  if (opt !== undefined) {
    return _caml_option_js__WEBPACK_IMPORTED_MODULE_1__.valFromOption(opt);
  } else {
    return $$default;
  }
}

function isSome(param) {
  return param !== undefined;
}

function isNone(x) {
  return x === undefined;
}

function eqU(a, b, f) {
  if (a !== undefined) {
    if (b !== undefined) {
      return f(_caml_option_js__WEBPACK_IMPORTED_MODULE_1__.valFromOption(a), _caml_option_js__WEBPACK_IMPORTED_MODULE_1__.valFromOption(b));
    } else {
      return false;
    }
  } else {
    return b === undefined;
  }
}

function eq(a, b, f) {
  return eqU(a, b, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function cmpU(a, b, f) {
  if (a !== undefined) {
    if (b !== undefined) {
      return f(_caml_option_js__WEBPACK_IMPORTED_MODULE_1__.valFromOption(a), _caml_option_js__WEBPACK_IMPORTED_MODULE_1__.valFromOption(b));
    } else {
      return 1;
    }
  } else if (b !== undefined) {
    return -1;
  } else {
    return 0;
  }
}

function cmp(a, b, f) {
  return cmpU(a, b, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/belt_Set.js":
/*!***************************************************!*\
  !*** ./node_modules/rescript/lib/es6/belt_Set.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Int": function() { return /* binding */ Int; },
/* harmony export */   "$$String": function() { return /* binding */ $$String; },
/* harmony export */   "Dict": function() { return /* binding */ Dict; },
/* harmony export */   "make": function() { return /* binding */ make; },
/* harmony export */   "fromArray": function() { return /* binding */ fromArray; },
/* harmony export */   "fromSortedArrayUnsafe": function() { return /* binding */ fromSortedArrayUnsafe; },
/* harmony export */   "isEmpty": function() { return /* binding */ isEmpty; },
/* harmony export */   "has": function() { return /* binding */ has; },
/* harmony export */   "add": function() { return /* binding */ add; },
/* harmony export */   "mergeMany": function() { return /* binding */ mergeMany; },
/* harmony export */   "remove": function() { return /* binding */ remove; },
/* harmony export */   "removeMany": function() { return /* binding */ removeMany; },
/* harmony export */   "union": function() { return /* binding */ union; },
/* harmony export */   "intersect": function() { return /* binding */ intersect; },
/* harmony export */   "diff": function() { return /* binding */ diff; },
/* harmony export */   "subset": function() { return /* binding */ subset; },
/* harmony export */   "cmp": function() { return /* binding */ cmp; },
/* harmony export */   "eq": function() { return /* binding */ eq; },
/* harmony export */   "forEachU": function() { return /* binding */ forEachU; },
/* harmony export */   "forEach": function() { return /* binding */ forEach; },
/* harmony export */   "reduceU": function() { return /* binding */ reduceU; },
/* harmony export */   "reduce": function() { return /* binding */ reduce; },
/* harmony export */   "everyU": function() { return /* binding */ everyU; },
/* harmony export */   "every": function() { return /* binding */ every; },
/* harmony export */   "someU": function() { return /* binding */ someU; },
/* harmony export */   "some": function() { return /* binding */ some; },
/* harmony export */   "keepU": function() { return /* binding */ keepU; },
/* harmony export */   "keep": function() { return /* binding */ keep; },
/* harmony export */   "partitionU": function() { return /* binding */ partitionU; },
/* harmony export */   "partition": function() { return /* binding */ partition; },
/* harmony export */   "size": function() { return /* binding */ size; },
/* harmony export */   "toArray": function() { return /* binding */ toArray; },
/* harmony export */   "toList": function() { return /* binding */ toList; },
/* harmony export */   "minimum": function() { return /* binding */ minimum; },
/* harmony export */   "minUndefined": function() { return /* binding */ minUndefined; },
/* harmony export */   "maximum": function() { return /* binding */ maximum; },
/* harmony export */   "maxUndefined": function() { return /* binding */ maxUndefined; },
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "getUndefined": function() { return /* binding */ getUndefined; },
/* harmony export */   "getExn": function() { return /* binding */ getExn; },
/* harmony export */   "split": function() { return /* binding */ split; },
/* harmony export */   "checkInvariantInternal": function() { return /* binding */ checkInvariantInternal; },
/* harmony export */   "getData": function() { return /* binding */ getData; },
/* harmony export */   "getId": function() { return /* binding */ getId; },
/* harmony export */   "packIdData": function() { return /* binding */ packIdData; }
/* harmony export */ });
/* harmony import */ var _curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry.js */ "./node_modules/rescript/lib/es6/curry.js");
/* harmony import */ var _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./belt_SetDict.js */ "./node_modules/rescript/lib/es6/belt_SetDict.js");





function fromArray(data, id) {
  var cmp = id.cmp;
  return {
          cmp: cmp,
          data: _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.fromArray(data, cmp)
        };
}

function remove(m, e) {
  var data = m.data;
  var cmp = m.cmp;
  var newData = _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.remove(data, e, cmp);
  if (newData === data) {
    return m;
  } else {
    return {
            cmp: cmp,
            data: newData
          };
  }
}

function add(m, e) {
  var data = m.data;
  var cmp = m.cmp;
  var newData = _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.add(data, e, cmp);
  if (newData === data) {
    return m;
  } else {
    return {
            cmp: cmp,
            data: newData
          };
  }
}

function mergeMany(m, e) {
  var cmp = m.cmp;
  return {
          cmp: cmp,
          data: _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.mergeMany(m.data, e, cmp)
        };
}

function removeMany(m, e) {
  var cmp = m.cmp;
  return {
          cmp: cmp,
          data: _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.removeMany(m.data, e, cmp)
        };
}

function union(m, n) {
  var cmp = m.cmp;
  return {
          cmp: cmp,
          data: _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.union(m.data, n.data, cmp)
        };
}

function intersect(m, n) {
  var cmp = m.cmp;
  return {
          cmp: cmp,
          data: _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.intersect(m.data, n.data, cmp)
        };
}

function diff(m, n) {
  var cmp = m.cmp;
  return {
          cmp: cmp,
          data: _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.diff(m.data, n.data, cmp)
        };
}

function subset(m, n) {
  var cmp = m.cmp;
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.subset(m.data, n.data, cmp);
}

function split(m, e) {
  var cmp = m.cmp;
  var match = _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.split(m.data, e, cmp);
  var match$1 = match[0];
  return [
          [
            {
              cmp: cmp,
              data: match$1[0]
            },
            {
              cmp: cmp,
              data: match$1[1]
            }
          ],
          match[1]
        ];
}

function make(id) {
  return {
          cmp: id.cmp,
          data: undefined
        };
}

function isEmpty(m) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.isEmpty(m.data);
}

function cmp(m, n) {
  var cmp$1 = m.cmp;
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.cmp(m.data, n.data, cmp$1);
}

function eq(m, n) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.eq(m.data, n.data, m.cmp);
}

function forEachU(m, f) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.forEachU(m.data, f);
}

function forEach(m, f) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.forEachU(m.data, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function reduceU(m, acc, f) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.reduceU(m.data, acc, f);
}

function reduce(m, acc, f) {
  return reduceU(m, acc, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function everyU(m, f) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.everyU(m.data, f);
}

function every(m, f) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.everyU(m.data, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function someU(m, f) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.someU(m.data, f);
}

function some(m, f) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.someU(m.data, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function keepU(m, f) {
  return {
          cmp: m.cmp,
          data: _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.keepU(m.data, f)
        };
}

function keep(m, f) {
  return keepU(m, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function partitionU(m, f) {
  var match = _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.partitionU(m.data, f);
  var cmp = m.cmp;
  return [
          {
            cmp: cmp,
            data: match[0]
          },
          {
            cmp: cmp,
            data: match[1]
          }
        ];
}

function partition(m, f) {
  return partitionU(m, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function size(m) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.size(m.data);
}

function toList(m) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.toList(m.data);
}

function toArray(m) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.toArray(m.data);
}

function minimum(m) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.minimum(m.data);
}

function minUndefined(m) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.minUndefined(m.data);
}

function maximum(m) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.maximum(m.data);
}

function maxUndefined(m) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.maxUndefined(m.data);
}

function get(m, e) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.get(m.data, e, m.cmp);
}

function getUndefined(m, e) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.getUndefined(m.data, e, m.cmp);
}

function getExn(m, e) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.getExn(m.data, e, m.cmp);
}

function has(m, e) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.has(m.data, e, m.cmp);
}

function fromSortedArrayUnsafe(xs, id) {
  return {
          cmp: id.cmp,
          data: _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.fromSortedArrayUnsafe(xs)
        };
}

function getData(m) {
  return m.data;
}

function getId(m) {
  var cmp = m.cmp;
  return {
          cmp: cmp
        };
}

function packIdData(id, data) {
  return {
          cmp: id.cmp,
          data: data
        };
}

function checkInvariantInternal(d) {
  return _belt_SetDict_js__WEBPACK_IMPORTED_MODULE_1__.checkInvariantInternal(d.data);
}

var Int;

var $$String;

var Dict;


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/belt_SetDict.js":
/*!*******************************************************!*\
  !*** ./node_modules/rescript/lib/es6/belt_SetDict.js ***!
  \*******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "empty": function() { return /* binding */ empty; },
/* harmony export */   "fromArray": function() { return /* binding */ fromArray; },
/* harmony export */   "fromSortedArrayUnsafe": function() { return /* binding */ fromSortedArrayUnsafe; },
/* harmony export */   "isEmpty": function() { return /* binding */ isEmpty; },
/* harmony export */   "has": function() { return /* binding */ has; },
/* harmony export */   "add": function() { return /* binding */ add; },
/* harmony export */   "mergeMany": function() { return /* binding */ mergeMany; },
/* harmony export */   "remove": function() { return /* binding */ remove; },
/* harmony export */   "removeMany": function() { return /* binding */ removeMany; },
/* harmony export */   "union": function() { return /* binding */ union; },
/* harmony export */   "intersect": function() { return /* binding */ intersect; },
/* harmony export */   "diff": function() { return /* binding */ diff; },
/* harmony export */   "subset": function() { return /* binding */ subset; },
/* harmony export */   "cmp": function() { return /* binding */ cmp; },
/* harmony export */   "eq": function() { return /* binding */ eq; },
/* harmony export */   "forEachU": function() { return /* binding */ forEachU; },
/* harmony export */   "forEach": function() { return /* binding */ forEach; },
/* harmony export */   "reduceU": function() { return /* binding */ reduceU; },
/* harmony export */   "reduce": function() { return /* binding */ reduce; },
/* harmony export */   "everyU": function() { return /* binding */ everyU; },
/* harmony export */   "every": function() { return /* binding */ every; },
/* harmony export */   "someU": function() { return /* binding */ someU; },
/* harmony export */   "some": function() { return /* binding */ some; },
/* harmony export */   "keepU": function() { return /* binding */ keepU; },
/* harmony export */   "keep": function() { return /* binding */ keep; },
/* harmony export */   "partitionU": function() { return /* binding */ partitionU; },
/* harmony export */   "partition": function() { return /* binding */ partition; },
/* harmony export */   "size": function() { return /* binding */ size; },
/* harmony export */   "toList": function() { return /* binding */ toList; },
/* harmony export */   "toArray": function() { return /* binding */ toArray; },
/* harmony export */   "minimum": function() { return /* binding */ minimum; },
/* harmony export */   "minUndefined": function() { return /* binding */ minUndefined; },
/* harmony export */   "maximum": function() { return /* binding */ maximum; },
/* harmony export */   "maxUndefined": function() { return /* binding */ maxUndefined; },
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "getUndefined": function() { return /* binding */ getUndefined; },
/* harmony export */   "getExn": function() { return /* binding */ getExn; },
/* harmony export */   "split": function() { return /* binding */ split; },
/* harmony export */   "checkInvariantInternal": function() { return /* binding */ checkInvariantInternal; }
/* harmony export */ });
/* harmony import */ var _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./belt_internalAVLset.js */ "./node_modules/rescript/lib/es6/belt_internalAVLset.js");




function add(t, x, cmp) {
  if (t === undefined) {
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.singleton(x);
  }
  var k = t.v;
  var c = cmp(x, k);
  if (c === 0) {
    return t;
  }
  var l = t.l;
  var r = t.r;
  if (c < 0) {
    var ll = add(l, x, cmp);
    if (ll === l) {
      return t;
    } else {
      return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.bal(ll, k, r);
    }
  }
  var rr = add(r, x, cmp);
  if (rr === r) {
    return t;
  } else {
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.bal(l, k, rr);
  }
}

function remove(t, x, cmp) {
  if (t === undefined) {
    return t;
  }
  var v = t.v;
  var l = t.l;
  var r = t.r;
  var c = cmp(x, v);
  if (c === 0) {
    if (l === undefined) {
      return r;
    }
    if (r === undefined) {
      return l;
    }
    var v$1 = {
      contents: r.v
    };
    var r$1 = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.removeMinAuxWithRef(r, v$1);
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.bal(l, v$1.contents, r$1);
  }
  if (c < 0) {
    var ll = remove(l, x, cmp);
    if (ll === l) {
      return t;
    } else {
      return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.bal(ll, v, r);
    }
  }
  var rr = remove(r, x, cmp);
  if (rr === r) {
    return t;
  } else {
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.bal(l, v, rr);
  }
}

function mergeMany(h, arr, cmp) {
  var len = arr.length;
  var v = h;
  for(var i = 0; i < len; ++i){
    var key = arr[i];
    v = add(v, key, cmp);
  }
  return v;
}

function removeMany(h, arr, cmp) {
  var len = arr.length;
  var v = h;
  for(var i = 0; i < len; ++i){
    var key = arr[i];
    v = remove(v, key, cmp);
  }
  return v;
}

function splitAuxNoPivot(cmp, n, x) {
  var v = n.v;
  var l = n.l;
  var r = n.r;
  var c = cmp(x, v);
  if (c === 0) {
    return [
            l,
            r
          ];
  }
  if (c < 0) {
    if (l === undefined) {
      return [
              undefined,
              n
            ];
    }
    var match = splitAuxNoPivot(cmp, l, x);
    return [
            match[0],
            _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.joinShared(match[1], v, r)
          ];
  }
  if (r === undefined) {
    return [
            n,
            undefined
          ];
  }
  var match$1 = splitAuxNoPivot(cmp, r, x);
  return [
          _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.joinShared(l, v, match$1[0]),
          match$1[1]
        ];
}

function splitAuxPivot(cmp, n, x, pres) {
  var v = n.v;
  var l = n.l;
  var r = n.r;
  var c = cmp(x, v);
  if (c === 0) {
    pres.contents = true;
    return [
            l,
            r
          ];
  }
  if (c < 0) {
    if (l === undefined) {
      return [
              undefined,
              n
            ];
    }
    var match = splitAuxPivot(cmp, l, x, pres);
    return [
            match[0],
            _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.joinShared(match[1], v, r)
          ];
  }
  if (r === undefined) {
    return [
            n,
            undefined
          ];
  }
  var match$1 = splitAuxPivot(cmp, r, x, pres);
  return [
          _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.joinShared(l, v, match$1[0]),
          match$1[1]
        ];
}

function split(t, x, cmp) {
  if (t === undefined) {
    return [
            [
              undefined,
              undefined
            ],
            false
          ];
  }
  var pres = {
    contents: false
  };
  var v = splitAuxPivot(cmp, t, x, pres);
  return [
          v,
          pres.contents
        ];
}

function union(s1, s2, cmp) {
  if (s1 === undefined) {
    return s2;
  }
  if (s2 === undefined) {
    return s1;
  }
  var h1 = s1.h;
  var h2 = s2.h;
  if (h1 >= h2) {
    if (h2 === 1) {
      return add(s1, s2.v, cmp);
    }
    var v1 = s1.v;
    var l1 = s1.l;
    var r1 = s1.r;
    var match = splitAuxNoPivot(cmp, s2, v1);
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.joinShared(union(l1, match[0], cmp), v1, union(r1, match[1], cmp));
  }
  if (h1 === 1) {
    return add(s2, s1.v, cmp);
  }
  var v2 = s2.v;
  var l2 = s2.l;
  var r2 = s2.r;
  var match$1 = splitAuxNoPivot(cmp, s1, v2);
  return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.joinShared(union(match$1[0], l2, cmp), v2, union(match$1[1], r2, cmp));
}

function intersect(s1, s2, cmp) {
  if (s1 === undefined) {
    return ;
  }
  if (s2 === undefined) {
    return ;
  }
  var v1 = s1.v;
  var l1 = s1.l;
  var r1 = s1.r;
  var pres = {
    contents: false
  };
  var match = splitAuxPivot(cmp, s2, v1, pres);
  var ll = intersect(l1, match[0], cmp);
  var rr = intersect(r1, match[1], cmp);
  if (pres.contents) {
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.joinShared(ll, v1, rr);
  } else {
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.concatShared(ll, rr);
  }
}

function diff(s1, s2, cmp) {
  if (s1 === undefined) {
    return s1;
  }
  if (s2 === undefined) {
    return s1;
  }
  var v1 = s1.v;
  var l1 = s1.l;
  var r1 = s1.r;
  var pres = {
    contents: false
  };
  var match = splitAuxPivot(cmp, s2, v1, pres);
  var ll = diff(l1, match[0], cmp);
  var rr = diff(r1, match[1], cmp);
  if (pres.contents) {
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.concatShared(ll, rr);
  } else {
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.joinShared(ll, v1, rr);
  }
}

var empty;

var fromArray = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.fromArray;

var fromSortedArrayUnsafe = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.fromSortedArrayUnsafe;

var isEmpty = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty;

var has = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.has;

var subset = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.subset;

var cmp = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.cmp;

var eq = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.eq;

var forEachU = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.forEachU;

var forEach = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.forEach;

var reduceU = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.reduceU;

var reduce = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.reduce;

var everyU = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.everyU;

var every = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.every;

var someU = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.someU;

var some = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.some;

var keepU = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.keepSharedU;

var keep = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.keepShared;

var partitionU = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.partitionSharedU;

var partition = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.partitionShared;

var size = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.size;

var toList = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.toList;

var toArray = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.toArray;

var minimum = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.minimum;

var minUndefined = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.minUndefined;

var maximum = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.maximum;

var maxUndefined = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.maxUndefined;

var get = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.get;

var getUndefined = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.getUndefined;

var getExn = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.getExn;

var checkInvariantInternal = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.checkInvariantInternal;


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/belt_SetInt.js":
/*!******************************************************!*\
  !*** ./node_modules/rescript/lib/es6/belt_SetInt.js ***!
  \******************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "empty": function() { return /* binding */ empty; },
/* harmony export */   "fromArray": function() { return /* binding */ fromArray; },
/* harmony export */   "fromSortedArrayUnsafe": function() { return /* binding */ fromSortedArrayUnsafe; },
/* harmony export */   "isEmpty": function() { return /* binding */ isEmpty; },
/* harmony export */   "has": function() { return /* binding */ has; },
/* harmony export */   "add": function() { return /* binding */ add; },
/* harmony export */   "mergeMany": function() { return /* binding */ mergeMany; },
/* harmony export */   "remove": function() { return /* binding */ remove; },
/* harmony export */   "removeMany": function() { return /* binding */ removeMany; },
/* harmony export */   "union": function() { return /* binding */ union; },
/* harmony export */   "intersect": function() { return /* binding */ intersect; },
/* harmony export */   "diff": function() { return /* binding */ diff; },
/* harmony export */   "subset": function() { return /* binding */ subset; },
/* harmony export */   "cmp": function() { return /* binding */ cmp; },
/* harmony export */   "eq": function() { return /* binding */ eq; },
/* harmony export */   "forEachU": function() { return /* binding */ forEachU; },
/* harmony export */   "forEach": function() { return /* binding */ forEach; },
/* harmony export */   "reduceU": function() { return /* binding */ reduceU; },
/* harmony export */   "reduce": function() { return /* binding */ reduce; },
/* harmony export */   "everyU": function() { return /* binding */ everyU; },
/* harmony export */   "every": function() { return /* binding */ every; },
/* harmony export */   "someU": function() { return /* binding */ someU; },
/* harmony export */   "some": function() { return /* binding */ some; },
/* harmony export */   "keepU": function() { return /* binding */ keepU; },
/* harmony export */   "keep": function() { return /* binding */ keep; },
/* harmony export */   "partitionU": function() { return /* binding */ partitionU; },
/* harmony export */   "partition": function() { return /* binding */ partition; },
/* harmony export */   "size": function() { return /* binding */ size; },
/* harmony export */   "toList": function() { return /* binding */ toList; },
/* harmony export */   "toArray": function() { return /* binding */ toArray; },
/* harmony export */   "minimum": function() { return /* binding */ minimum; },
/* harmony export */   "minUndefined": function() { return /* binding */ minUndefined; },
/* harmony export */   "maximum": function() { return /* binding */ maximum; },
/* harmony export */   "maxUndefined": function() { return /* binding */ maxUndefined; },
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "getUndefined": function() { return /* binding */ getUndefined; },
/* harmony export */   "getExn": function() { return /* binding */ getExn; },
/* harmony export */   "split": function() { return /* binding */ split; },
/* harmony export */   "checkInvariantInternal": function() { return /* binding */ checkInvariantInternal; }
/* harmony export */ });
/* harmony import */ var _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./belt_internalAVLset.js */ "./node_modules/rescript/lib/es6/belt_internalAVLset.js");
/* harmony import */ var _belt_internalSetInt_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./belt_internalSetInt.js */ "./node_modules/rescript/lib/es6/belt_internalSetInt.js");





function add(t, x) {
  if (t === undefined) {
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.singleton(x);
  }
  var v = t.v;
  if (x === v) {
    return t;
  }
  var l = t.l;
  var r = t.r;
  if (x < v) {
    var ll = add(l, x);
    if (ll === l) {
      return t;
    } else {
      return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.bal(ll, v, r);
    }
  }
  var rr = add(r, x);
  if (rr === r) {
    return t;
  } else {
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.bal(l, v, rr);
  }
}

function mergeMany(h, arr) {
  var len = arr.length;
  var v = h;
  for(var i = 0; i < len; ++i){
    var key = arr[i];
    v = add(v, key);
  }
  return v;
}

function remove(t, x) {
  if (t === undefined) {
    return t;
  }
  var v = t.v;
  var l = t.l;
  var r = t.r;
  if (x === v) {
    if (l === undefined) {
      return r;
    }
    if (r === undefined) {
      return l;
    }
    var v$1 = {
      contents: r.v
    };
    var r$1 = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.removeMinAuxWithRef(r, v$1);
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.bal(l, v$1.contents, r$1);
  }
  if (x < v) {
    var ll = remove(l, x);
    if (ll === l) {
      return t;
    } else {
      return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.bal(ll, v, r);
    }
  }
  var rr = remove(r, x);
  if (rr === r) {
    return t;
  } else {
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.bal(l, v, rr);
  }
}

function removeMany(h, arr) {
  var len = arr.length;
  var v = h;
  for(var i = 0; i < len; ++i){
    var key = arr[i];
    v = remove(v, key);
  }
  return v;
}

function splitAuxNoPivot(n, x) {
  var v = n.v;
  var l = n.l;
  var r = n.r;
  if (x === v) {
    return [
            l,
            r
          ];
  }
  if (x < v) {
    if (l === undefined) {
      return [
              undefined,
              n
            ];
    }
    var match = splitAuxNoPivot(l, x);
    return [
            match[0],
            _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.joinShared(match[1], v, r)
          ];
  }
  if (r === undefined) {
    return [
            n,
            undefined
          ];
  }
  var match$1 = splitAuxNoPivot(r, x);
  return [
          _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.joinShared(l, v, match$1[0]),
          match$1[1]
        ];
}

function splitAuxPivot(n, x, pres) {
  var v = n.v;
  var l = n.l;
  var r = n.r;
  if (x === v) {
    pres.contents = true;
    return [
            l,
            r
          ];
  }
  if (x < v) {
    if (l === undefined) {
      return [
              undefined,
              n
            ];
    }
    var match = splitAuxPivot(l, x, pres);
    return [
            match[0],
            _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.joinShared(match[1], v, r)
          ];
  }
  if (r === undefined) {
    return [
            n,
            undefined
          ];
  }
  var match$1 = splitAuxPivot(r, x, pres);
  return [
          _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.joinShared(l, v, match$1[0]),
          match$1[1]
        ];
}

function split(t, x) {
  if (t === undefined) {
    return [
            [
              undefined,
              undefined
            ],
            false
          ];
  }
  var pres = {
    contents: false
  };
  var v = splitAuxPivot(t, x, pres);
  return [
          v,
          pres.contents
        ];
}

function union(s1, s2) {
  if (s1 === undefined) {
    return s2;
  }
  if (s2 === undefined) {
    return s1;
  }
  var h1 = s1.h;
  var h2 = s2.h;
  if (h1 >= h2) {
    if (h2 === 1) {
      return add(s1, s2.v);
    }
    var v1 = s1.v;
    var l1 = s1.l;
    var r1 = s1.r;
    var match = splitAuxNoPivot(s2, v1);
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.joinShared(union(l1, match[0]), v1, union(r1, match[1]));
  }
  if (h1 === 1) {
    return add(s2, s1.v);
  }
  var v2 = s2.v;
  var l2 = s2.l;
  var r2 = s2.r;
  var match$1 = splitAuxNoPivot(s1, v2);
  return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.joinShared(union(match$1[0], l2), v2, union(match$1[1], r2));
}

function intersect(s1, s2) {
  if (s1 === undefined) {
    return ;
  }
  if (s2 === undefined) {
    return ;
  }
  var v1 = s1.v;
  var l1 = s1.l;
  var r1 = s1.r;
  var pres = {
    contents: false
  };
  var match = splitAuxPivot(s2, v1, pres);
  var ll = intersect(l1, match[0]);
  var rr = intersect(r1, match[1]);
  if (pres.contents) {
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.joinShared(ll, v1, rr);
  } else {
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.concatShared(ll, rr);
  }
}

function diff(s1, s2) {
  if (s1 === undefined) {
    return s1;
  }
  if (s2 === undefined) {
    return s1;
  }
  var v1 = s1.v;
  var l1 = s1.l;
  var r1 = s1.r;
  var pres = {
    contents: false
  };
  var match = splitAuxPivot(s2, v1, pres);
  var ll = diff(l1, match[0]);
  var rr = diff(r1, match[1]);
  if (pres.contents) {
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.concatShared(ll, rr);
  } else {
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.joinShared(ll, v1, rr);
  }
}

var empty;

var fromArray = _belt_internalSetInt_js__WEBPACK_IMPORTED_MODULE_1__.fromArray;

var fromSortedArrayUnsafe = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.fromSortedArrayUnsafe;

var isEmpty = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.isEmpty;

var has = _belt_internalSetInt_js__WEBPACK_IMPORTED_MODULE_1__.has;

var subset = _belt_internalSetInt_js__WEBPACK_IMPORTED_MODULE_1__.subset;

var cmp = _belt_internalSetInt_js__WEBPACK_IMPORTED_MODULE_1__.cmp;

var eq = _belt_internalSetInt_js__WEBPACK_IMPORTED_MODULE_1__.eq;

var forEachU = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.forEachU;

var forEach = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.forEach;

var reduceU = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.reduceU;

var reduce = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.reduce;

var everyU = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.everyU;

var every = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.every;

var someU = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.someU;

var some = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.some;

var keepU = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.keepSharedU;

var keep = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.keepShared;

var partitionU = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.partitionSharedU;

var partition = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.partitionShared;

var size = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.size;

var toList = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.toList;

var toArray = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.toArray;

var minimum = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.minimum;

var minUndefined = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.minUndefined;

var maximum = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.maximum;

var maxUndefined = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.maxUndefined;

var get = _belt_internalSetInt_js__WEBPACK_IMPORTED_MODULE_1__.get;

var getUndefined = _belt_internalSetInt_js__WEBPACK_IMPORTED_MODULE_1__.getUndefined;

var getExn = _belt_internalSetInt_js__WEBPACK_IMPORTED_MODULE_1__.getExn;

var checkInvariantInternal = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_0__.checkInvariantInternal;


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

/***/ "./node_modules/rescript/lib/es6/belt_SortArrayInt.js":
/*!************************************************************!*\
  !*** ./node_modules/rescript/lib/es6/belt_SortArrayInt.js ***!
  \************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "strictlySortedLength": function() { return /* binding */ strictlySortedLength; },
/* harmony export */   "isSorted": function() { return /* binding */ isSorted; },
/* harmony export */   "stableSortInPlace": function() { return /* binding */ stableSortInPlace; },
/* harmony export */   "stableSort": function() { return /* binding */ stableSort; },
/* harmony export */   "binarySearch": function() { return /* binding */ binarySearch; },
/* harmony export */   "union": function() { return /* binding */ union; },
/* harmony export */   "intersect": function() { return /* binding */ intersect; },
/* harmony export */   "diff": function() { return /* binding */ diff; }
/* harmony export */ });
/* harmony import */ var _belt_Array_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./belt_Array.js */ "./node_modules/rescript/lib/es6/belt_Array.js");




function sortedLengthAuxMore(xs, _prec, _acc, len) {
  while(true) {
    var acc = _acc;
    var prec = _prec;
    if (acc >= len) {
      return acc;
    }
    var v = xs[acc];
    if (prec <= v) {
      return acc;
    }
    _acc = acc + 1 | 0;
    _prec = v;
    continue ;
  };
}

function strictlySortedLength(xs) {
  var len = xs.length;
  if (len === 0 || len === 1) {
    return len;
  }
  var x0 = xs[0];
  var x1 = xs[1];
  if (x0 < x1) {
    var _prec = x1;
    var _acc = 2;
    while(true) {
      var acc = _acc;
      var prec = _prec;
      if (acc >= len) {
        return acc;
      }
      var v = xs[acc];
      if (prec >= v) {
        return acc;
      }
      _acc = acc + 1 | 0;
      _prec = v;
      continue ;
    };
  } else if (x0 > x1) {
    return -sortedLengthAuxMore(xs, x1, 2, len) | 0;
  } else {
    return 1;
  }
}

function isSorted(a) {
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
      if (a[i] > a[i + 1 | 0]) {
        return false;
      }
      _i = i + 1 | 0;
      continue ;
    };
  }
}

function merge(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs) {
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
    if (s1 <= s2) {
      dst[d] = s1;
      var i1$1 = i1 + 1 | 0;
      if (i1$1 >= src1r) {
        return _belt_Array_js__WEBPACK_IMPORTED_MODULE_0__.blitUnsafe(src2, i2, dst, d + 1 | 0, src2r - i2 | 0);
      }
      _d = d + 1 | 0;
      _s1 = src[i1$1];
      _i1 = i1$1;
      continue ;
    }
    dst[d] = s2;
    var i2$1 = i2 + 1 | 0;
    if (i2$1 >= src2r) {
      return _belt_Array_js__WEBPACK_IMPORTED_MODULE_0__.blitUnsafe(src, i1, dst, d + 1 | 0, src1r - i1 | 0);
    }
    _d = d + 1 | 0;
    _s2 = src2[i2$1];
    _i2 = i2$1;
    continue ;
  };
}

function union(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs) {
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
    if (s1 < s2) {
      dst[d] = s1;
      var i1$1 = i1 + 1 | 0;
      var d$1 = d + 1 | 0;
      if (i1$1 < src1r) {
        _d = d$1;
        _s1 = src[i1$1];
        _i1 = i1$1;
        continue ;
      }
      _belt_Array_js__WEBPACK_IMPORTED_MODULE_0__.blitUnsafe(src2, i2, dst, d$1, src2r - i2 | 0);
      return (d$1 + src2r | 0) - i2 | 0;
    }
    if (s1 === s2) {
      dst[d] = s1;
      var i1$2 = i1 + 1 | 0;
      var i2$1 = i2 + 1 | 0;
      var d$2 = d + 1 | 0;
      if (!(i1$2 < src1r && i2$1 < src2r)) {
        if (i1$2 === src1r) {
          _belt_Array_js__WEBPACK_IMPORTED_MODULE_0__.blitUnsafe(src2, i2$1, dst, d$2, src2r - i2$1 | 0);
          return (d$2 + src2r | 0) - i2$1 | 0;
        } else {
          _belt_Array_js__WEBPACK_IMPORTED_MODULE_0__.blitUnsafe(src, i1$2, dst, d$2, src1r - i1$2 | 0);
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
    _belt_Array_js__WEBPACK_IMPORTED_MODULE_0__.blitUnsafe(src, i1, dst, d$3, src1r - i1 | 0);
    return (d$3 + src1r | 0) - i1 | 0;
  };
}

function intersect(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs) {
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
    if (s1 < s2) {
      var i1$1 = i1 + 1 | 0;
      if (i1$1 >= src1r) {
        return d;
      }
      _s1 = src[i1$1];
      _i1 = i1$1;
      continue ;
    }
    if (s1 === s2) {
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

function diff(src, src1ofs, src1len, src2, src2ofs, src2len, dst, dstofs) {
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
    if (s1 < s2) {
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
    if (s1 === s2) {
      var i1$2 = i1 + 1 | 0;
      var i2$1 = i2 + 1 | 0;
      if (!(i1$2 < src1r && i2$1 < src2r)) {
        if (i1$2 === src1r) {
          return d;
        } else {
          _belt_Array_js__WEBPACK_IMPORTED_MODULE_0__.blitUnsafe(src, i1$2, dst, d, src1r - i1$2 | 0);
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
    _belt_Array_js__WEBPACK_IMPORTED_MODULE_0__.blitUnsafe(src, i1, dst, d, src1r - i1 | 0);
    return (d + src1r | 0) - i1 | 0;
  };
}

function insertionSort(src, srcofs, dst, dstofs, len) {
  for(var i = 0; i < len; ++i){
    var e = src[srcofs + i | 0];
    var j = (dstofs + i | 0) - 1 | 0;
    while(j >= dstofs && dst[j] > e) {
      dst[j + 1 | 0] = dst[j];
      j = j - 1 | 0;
    };
    dst[j + 1 | 0] = e;
  }
  
}

function sortTo(src, srcofs, dst, dstofs, len) {
  if (len <= 5) {
    return insertionSort(src, srcofs, dst, dstofs, len);
  }
  var l1 = len / 2 | 0;
  var l2 = len - l1 | 0;
  sortTo(src, srcofs + l1 | 0, dst, dstofs + l1 | 0, l2);
  sortTo(src, srcofs, src, srcofs + l2 | 0, l1);
  return merge(src, srcofs + l2 | 0, l1, dst, dstofs + l1 | 0, l2, dst, dstofs);
}

function stableSortInPlace(a) {
  var l = a.length;
  if (l <= 5) {
    return insertionSort(a, 0, a, 0, l);
  }
  var l1 = l / 2 | 0;
  var l2 = l - l1 | 0;
  var t = new Array(l2);
  sortTo(a, l1, t, 0, l2);
  sortTo(a, 0, a, l2, l1);
  return merge(a, l2, l1, t, 0, l2, a, 0);
}

function stableSort(a) {
  var b = a.slice(0);
  stableSortInPlace(b);
  return b;
}

function binarySearch(sorted, key) {
  var len = sorted.length;
  if (len === 0) {
    return -1;
  }
  var lo = sorted[0];
  if (key < lo) {
    return -1;
  }
  var hi = sorted[len - 1 | 0];
  if (key > hi) {
    return -(len + 1 | 0) | 0;
  } else {
    var _lo = 0;
    var _hi = len - 1 | 0;
    while(true) {
      var hi$1 = _hi;
      var lo$1 = _lo;
      var mid = (lo$1 + hi$1 | 0) / 2 | 0;
      var midVal = sorted[mid];
      if (key === midVal) {
        return mid;
      }
      if (key < midVal) {
        if (hi$1 === mid) {
          if (sorted[lo$1] === key) {
            return lo$1;
          } else {
            return -(hi$1 + 1 | 0) | 0;
          }
        }
        _hi = mid;
        continue ;
      }
      if (lo$1 === mid) {
        if (sorted[hi$1] === key) {
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


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/belt_internalAVLset.js":
/*!**************************************************************!*\
  !*** ./node_modules/rescript/lib/es6/belt_internalAVLset.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "copy": function() { return /* binding */ copy; },
/* harmony export */   "create": function() { return /* binding */ create; },
/* harmony export */   "bal": function() { return /* binding */ bal; },
/* harmony export */   "singleton": function() { return /* binding */ singleton; },
/* harmony export */   "minimum": function() { return /* binding */ minimum; },
/* harmony export */   "minUndefined": function() { return /* binding */ minUndefined; },
/* harmony export */   "maximum": function() { return /* binding */ maximum; },
/* harmony export */   "maxUndefined": function() { return /* binding */ maxUndefined; },
/* harmony export */   "removeMinAuxWithRef": function() { return /* binding */ removeMinAuxWithRef; },
/* harmony export */   "isEmpty": function() { return /* binding */ isEmpty; },
/* harmony export */   "stackAllLeft": function() { return /* binding */ stackAllLeft; },
/* harmony export */   "forEachU": function() { return /* binding */ forEachU; },
/* harmony export */   "forEach": function() { return /* binding */ forEach; },
/* harmony export */   "reduceU": function() { return /* binding */ reduceU; },
/* harmony export */   "reduce": function() { return /* binding */ reduce; },
/* harmony export */   "everyU": function() { return /* binding */ everyU; },
/* harmony export */   "every": function() { return /* binding */ every; },
/* harmony export */   "someU": function() { return /* binding */ someU; },
/* harmony export */   "some": function() { return /* binding */ some; },
/* harmony export */   "joinShared": function() { return /* binding */ joinShared; },
/* harmony export */   "concatShared": function() { return /* binding */ concatShared; },
/* harmony export */   "keepSharedU": function() { return /* binding */ keepSharedU; },
/* harmony export */   "keepShared": function() { return /* binding */ keepShared; },
/* harmony export */   "keepCopyU": function() { return /* binding */ keepCopyU; },
/* harmony export */   "keepCopy": function() { return /* binding */ keepCopy; },
/* harmony export */   "partitionSharedU": function() { return /* binding */ partitionSharedU; },
/* harmony export */   "partitionShared": function() { return /* binding */ partitionShared; },
/* harmony export */   "partitionCopyU": function() { return /* binding */ partitionCopyU; },
/* harmony export */   "partitionCopy": function() { return /* binding */ partitionCopy; },
/* harmony export */   "lengthNode": function() { return /* binding */ lengthNode; },
/* harmony export */   "size": function() { return /* binding */ size; },
/* harmony export */   "toList": function() { return /* binding */ toList; },
/* harmony export */   "checkInvariantInternal": function() { return /* binding */ checkInvariantInternal; },
/* harmony export */   "fillArray": function() { return /* binding */ fillArray; },
/* harmony export */   "toArray": function() { return /* binding */ toArray; },
/* harmony export */   "fromSortedArrayAux": function() { return /* binding */ fromSortedArrayAux; },
/* harmony export */   "fromSortedArrayRevAux": function() { return /* binding */ fromSortedArrayRevAux; },
/* harmony export */   "fromSortedArrayUnsafe": function() { return /* binding */ fromSortedArrayUnsafe; },
/* harmony export */   "has": function() { return /* binding */ has; },
/* harmony export */   "cmp": function() { return /* binding */ cmp; },
/* harmony export */   "eq": function() { return /* binding */ eq; },
/* harmony export */   "subset": function() { return /* binding */ subset; },
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "getUndefined": function() { return /* binding */ getUndefined; },
/* harmony export */   "getExn": function() { return /* binding */ getExn; },
/* harmony export */   "fromArray": function() { return /* binding */ fromArray; },
/* harmony export */   "addMutate": function() { return /* binding */ addMutate; },
/* harmony export */   "balMutate": function() { return /* binding */ balMutate; },
/* harmony export */   "removeMinAuxWithRootMutate": function() { return /* binding */ removeMinAuxWithRootMutate; }
/* harmony export */ });
/* harmony import */ var _curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./curry.js */ "./node_modules/rescript/lib/es6/curry.js");
/* harmony import */ var _caml_option_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./caml_option.js */ "./node_modules/rescript/lib/es6/caml_option.js");
/* harmony import */ var _belt_SortArray_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./belt_SortArray.js */ "./node_modules/rescript/lib/es6/belt_SortArray.js");






function copy(n) {
  if (n !== undefined) {
    return {
            v: n.v,
            h: n.h,
            l: copy(n.l),
            r: copy(n.r)
          };
  } else {
    return n;
  }
}

function create(l, v, r) {
  var hl = l !== undefined ? l.h : 0;
  var hr = r !== undefined ? r.h : 0;
  return {
          v: v,
          h: (
            hl >= hr ? hl : hr
          ) + 1 | 0,
          l: l,
          r: r
        };
}

function singleton(x) {
  return {
          v: x,
          h: 1,
          l: undefined,
          r: undefined
        };
}

function heightGe(l, r) {
  if (r !== undefined) {
    if (l !== undefined) {
      return l.h >= r.h;
    } else {
      return false;
    }
  } else {
    return true;
  }
}

function bal(l, v, r) {
  var hl = l !== undefined ? l.h : 0;
  var hr = r !== undefined ? r.h : 0;
  if (hl > (hr + 2 | 0)) {
    var ll = l.l;
    var lr = l.r;
    if (heightGe(ll, lr)) {
      return create(ll, l.v, create(lr, v, r));
    } else {
      return create(create(ll, l.v, lr.l), lr.v, create(lr.r, v, r));
    }
  }
  if (hr <= (hl + 2 | 0)) {
    return {
            v: v,
            h: (
              hl >= hr ? hl : hr
            ) + 1 | 0,
            l: l,
            r: r
          };
  }
  var rl = r.l;
  var rr = r.r;
  if (heightGe(rr, rl)) {
    return create(create(l, v, rl), r.v, rr);
  } else {
    return create(create(l, v, rl.l), rl.v, create(rl.r, r.v, rr));
  }
}

function min0Aux(_n) {
  while(true) {
    var n = _n;
    var n$1 = n.l;
    if (n$1 === undefined) {
      return n.v;
    }
    _n = n$1;
    continue ;
  };
}

function minimum(n) {
  if (n !== undefined) {
    return _caml_option_js__WEBPACK_IMPORTED_MODULE_1__.some(min0Aux(n));
  }
  
}

function minUndefined(n) {
  if (n !== undefined) {
    return min0Aux(n);
  }
  
}

function max0Aux(_n) {
  while(true) {
    var n = _n;
    var n$1 = n.r;
    if (n$1 === undefined) {
      return n.v;
    }
    _n = n$1;
    continue ;
  };
}

function maximum(n) {
  if (n !== undefined) {
    return _caml_option_js__WEBPACK_IMPORTED_MODULE_1__.some(max0Aux(n));
  }
  
}

function maxUndefined(n) {
  if (n !== undefined) {
    return max0Aux(n);
  }
  
}

function removeMinAuxWithRef(n, v) {
  var ln = n.l;
  if (ln !== undefined) {
    return bal(removeMinAuxWithRef(ln, v), n.v, n.r);
  } else {
    v.contents = n.v;
    return n.r;
  }
}

function isEmpty(n) {
  return n === undefined;
}

function stackAllLeft(_v, _s) {
  while(true) {
    var s = _s;
    var v = _v;
    if (v === undefined) {
      return s;
    }
    _s = {
      hd: v,
      tl: s
    };
    _v = v.l;
    continue ;
  };
}

function forEachU(_n, f) {
  while(true) {
    var n = _n;
    if (n === undefined) {
      return ;
    }
    forEachU(n.l, f);
    f(n.v);
    _n = n.r;
    continue ;
  };
}

function forEach(n, f) {
  return forEachU(n, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(f));
}

function reduceU(_s, _accu, f) {
  while(true) {
    var accu = _accu;
    var s = _s;
    if (s === undefined) {
      return accu;
    }
    _accu = f(reduceU(s.l, accu, f), s.v);
    _s = s.r;
    continue ;
  };
}

function reduce(s, accu, f) {
  return reduceU(s, accu, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__2(f));
}

function everyU(_n, p) {
  while(true) {
    var n = _n;
    if (n === undefined) {
      return true;
    }
    if (!p(n.v)) {
      return false;
    }
    if (!everyU(n.l, p)) {
      return false;
    }
    _n = n.r;
    continue ;
  };
}

function every(n, p) {
  return everyU(n, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(p));
}

function someU(_n, p) {
  while(true) {
    var n = _n;
    if (n === undefined) {
      return false;
    }
    if (p(n.v)) {
      return true;
    }
    if (someU(n.l, p)) {
      return true;
    }
    _n = n.r;
    continue ;
  };
}

function some(n, p) {
  return someU(n, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(p));
}

function addMinElement(n, v) {
  if (n !== undefined) {
    return bal(addMinElement(n.l, v), n.v, n.r);
  } else {
    return singleton(v);
  }
}

function addMaxElement(n, v) {
  if (n !== undefined) {
    return bal(n.l, n.v, addMaxElement(n.r, v));
  } else {
    return singleton(v);
  }
}

function joinShared(ln, v, rn) {
  if (ln === undefined) {
    return addMinElement(rn, v);
  }
  if (rn === undefined) {
    return addMaxElement(ln, v);
  }
  var lh = ln.h;
  var rh = rn.h;
  if (lh > (rh + 2 | 0)) {
    return bal(ln.l, ln.v, joinShared(ln.r, v, rn));
  } else if (rh > (lh + 2 | 0)) {
    return bal(joinShared(ln, v, rn.l), rn.v, rn.r);
  } else {
    return create(ln, v, rn);
  }
}

function concatShared(t1, t2) {
  if (t1 === undefined) {
    return t2;
  }
  if (t2 === undefined) {
    return t1;
  }
  var v = {
    contents: t2.v
  };
  var t2r = removeMinAuxWithRef(t2, v);
  return joinShared(t1, v.contents, t2r);
}

function partitionSharedU(n, p) {
  if (n === undefined) {
    return [
            undefined,
            undefined
          ];
  }
  var value = n.v;
  var match = partitionSharedU(n.l, p);
  var lf = match[1];
  var lt = match[0];
  var pv = p(value);
  var match$1 = partitionSharedU(n.r, p);
  var rf = match$1[1];
  var rt = match$1[0];
  if (pv) {
    return [
            joinShared(lt, value, rt),
            concatShared(lf, rf)
          ];
  } else {
    return [
            concatShared(lt, rt),
            joinShared(lf, value, rf)
          ];
  }
}

function partitionShared(n, p) {
  return partitionSharedU(n, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(p));
}

function lengthNode(n) {
  var l = n.l;
  var r = n.r;
  var sizeL = l !== undefined ? lengthNode(l) : 0;
  var sizeR = r !== undefined ? lengthNode(r) : 0;
  return (1 + sizeL | 0) + sizeR | 0;
}

function size(n) {
  if (n !== undefined) {
    return lengthNode(n);
  } else {
    return 0;
  }
}

function toListAux(_n, _accu) {
  while(true) {
    var accu = _accu;
    var n = _n;
    if (n === undefined) {
      return accu;
    }
    _accu = {
      hd: n.v,
      tl: toListAux(n.r, accu)
    };
    _n = n.l;
    continue ;
  };
}

function toList(s) {
  return toListAux(s, /* [] */0);
}

function checkInvariantInternal(_v) {
  while(true) {
    var v = _v;
    if (v === undefined) {
      return ;
    }
    var l = v.l;
    var r = v.r;
    var diff = (
      l !== undefined ? l.h : 0
    ) - (
      r !== undefined ? r.h : 0
    ) | 0;
    if (!(diff <= 2 && diff >= -2)) {
      throw {
            RE_EXN_ID: "Assert_failure",
            _1: [
              "belt_internalAVLset.ml",
              290,
              4
            ],
            Error: new Error()
          };
    }
    checkInvariantInternal(l);
    _v = r;
    continue ;
  };
}

function fillArray(_n, _i, arr) {
  while(true) {
    var i = _i;
    var n = _n;
    var v = n.v;
    var l = n.l;
    var r = n.r;
    var next = l !== undefined ? fillArray(l, i, arr) : i;
    arr[next] = v;
    var rnext = next + 1 | 0;
    if (r === undefined) {
      return rnext;
    }
    _i = rnext;
    _n = r;
    continue ;
  };
}

function fillArrayWithPartition(_n, cursor, arr, p) {
  while(true) {
    var n = _n;
    var v = n.v;
    var l = n.l;
    var r = n.r;
    if (l !== undefined) {
      fillArrayWithPartition(l, cursor, arr, p);
    }
    if (p(v)) {
      var c = cursor.forward;
      arr[c] = v;
      cursor.forward = c + 1 | 0;
    } else {
      var c$1 = cursor.backward;
      arr[c$1] = v;
      cursor.backward = c$1 - 1 | 0;
    }
    if (r === undefined) {
      return ;
    }
    _n = r;
    continue ;
  };
}

function fillArrayWithFilter(_n, _i, arr, p) {
  while(true) {
    var i = _i;
    var n = _n;
    var v = n.v;
    var l = n.l;
    var r = n.r;
    var next = l !== undefined ? fillArrayWithFilter(l, i, arr, p) : i;
    var rnext = p(v) ? (arr[next] = v, next + 1 | 0) : next;
    if (r === undefined) {
      return rnext;
    }
    _i = rnext;
    _n = r;
    continue ;
  };
}

function toArray(n) {
  if (n === undefined) {
    return [];
  }
  var size = lengthNode(n);
  var v = new Array(size);
  fillArray(n, 0, v);
  return v;
}

function fromSortedArrayRevAux(arr, off, len) {
  switch (len) {
    case 0 :
        return ;
    case 1 :
        return singleton(arr[off]);
    case 2 :
        var x0 = arr[off];
        var x1 = arr[off - 1 | 0];
        return {
                v: x1,
                h: 2,
                l: singleton(x0),
                r: undefined
              };
    case 3 :
        var x0$1 = arr[off];
        var x1$1 = arr[off - 1 | 0];
        var x2 = arr[off - 2 | 0];
        return {
                v: x1$1,
                h: 2,
                l: singleton(x0$1),
                r: singleton(x2)
              };
    default:
      var nl = len / 2 | 0;
      var left = fromSortedArrayRevAux(arr, off, nl);
      var mid = arr[off - nl | 0];
      var right = fromSortedArrayRevAux(arr, (off - nl | 0) - 1 | 0, (len - nl | 0) - 1 | 0);
      return create(left, mid, right);
  }
}

function fromSortedArrayAux(arr, off, len) {
  switch (len) {
    case 0 :
        return ;
    case 1 :
        return singleton(arr[off]);
    case 2 :
        var x0 = arr[off];
        var x1 = arr[off + 1 | 0];
        return {
                v: x1,
                h: 2,
                l: singleton(x0),
                r: undefined
              };
    case 3 :
        var x0$1 = arr[off];
        var x1$1 = arr[off + 1 | 0];
        var x2 = arr[off + 2 | 0];
        return {
                v: x1$1,
                h: 2,
                l: singleton(x0$1),
                r: singleton(x2)
              };
    default:
      var nl = len / 2 | 0;
      var left = fromSortedArrayAux(arr, off, nl);
      var mid = arr[off + nl | 0];
      var right = fromSortedArrayAux(arr, (off + nl | 0) + 1 | 0, (len - nl | 0) - 1 | 0);
      return create(left, mid, right);
  }
}

function fromSortedArrayUnsafe(arr) {
  return fromSortedArrayAux(arr, 0, arr.length);
}

function keepSharedU(n, p) {
  if (n === undefined) {
    return ;
  }
  var v = n.v;
  var l = n.l;
  var r = n.r;
  var newL = keepSharedU(l, p);
  var pv = p(v);
  var newR = keepSharedU(r, p);
  if (pv) {
    if (l === newL && r === newR) {
      return n;
    } else {
      return joinShared(newL, v, newR);
    }
  } else {
    return concatShared(newL, newR);
  }
}

function keepShared(n, p) {
  return keepSharedU(n, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(p));
}

function keepCopyU(n, p) {
  if (n === undefined) {
    return ;
  }
  var size = lengthNode(n);
  var v = new Array(size);
  var last = fillArrayWithFilter(n, 0, v, p);
  return fromSortedArrayAux(v, 0, last);
}

function keepCopy(n, p) {
  return keepCopyU(n, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(p));
}

function partitionCopyU(n, p) {
  if (n === undefined) {
    return [
            undefined,
            undefined
          ];
  }
  var size = lengthNode(n);
  var v = new Array(size);
  var backward = size - 1 | 0;
  var cursor = {
    forward: 0,
    backward: backward
  };
  fillArrayWithPartition(n, cursor, v, p);
  var forwardLen = cursor.forward;
  return [
          fromSortedArrayAux(v, 0, forwardLen),
          fromSortedArrayRevAux(v, backward, size - forwardLen | 0)
        ];
}

function partitionCopy(n, p) {
  return partitionCopyU(n, _curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(p));
}

function has(_t, x, cmp) {
  while(true) {
    var t = _t;
    if (t === undefined) {
      return false;
    }
    var v = t.v;
    var c = cmp(x, v);
    if (c === 0) {
      return true;
    }
    _t = c < 0 ? t.l : t.r;
    continue ;
  };
}

function cmp(s1, s2, cmp$1) {
  var len1 = size(s1);
  var len2 = size(s2);
  if (len1 === len2) {
    var _e1 = stackAllLeft(s1, /* [] */0);
    var _e2 = stackAllLeft(s2, /* [] */0);
    while(true) {
      var e2 = _e2;
      var e1 = _e1;
      if (!e1) {
        return 0;
      }
      if (!e2) {
        return 0;
      }
      var h2 = e2.hd;
      var h1 = e1.hd;
      var c = cmp$1(h1.v, h2.v);
      if (c !== 0) {
        return c;
      }
      _e2 = stackAllLeft(h2.r, e2.tl);
      _e1 = stackAllLeft(h1.r, e1.tl);
      continue ;
    };
  } else if (len1 < len2) {
    return -1;
  } else {
    return 1;
  }
}

function eq(s1, s2, c) {
  return cmp(s1, s2, c) === 0;
}

function subset(_s1, _s2, cmp) {
  while(true) {
    var s2 = _s2;
    var s1 = _s1;
    if (s1 === undefined) {
      return true;
    }
    if (s2 === undefined) {
      return false;
    }
    var v1 = s1.v;
    var l1 = s1.l;
    var r1 = s1.r;
    var v2 = s2.v;
    var l2 = s2.l;
    var r2 = s2.r;
    var c = cmp(v1, v2);
    if (c === 0) {
      if (!subset(l1, l2, cmp)) {
        return false;
      }
      _s2 = r2;
      _s1 = r1;
      continue ;
    }
    if (c < 0) {
      if (!subset(create(l1, v1, undefined), l2, cmp)) {
        return false;
      }
      _s1 = r1;
      continue ;
    }
    if (!subset(create(undefined, v1, r1), r2, cmp)) {
      return false;
    }
    _s1 = l1;
    continue ;
  };
}

function get(_n, x, cmp) {
  while(true) {
    var n = _n;
    if (n === undefined) {
      return ;
    }
    var v = n.v;
    var c = cmp(x, v);
    if (c === 0) {
      return _caml_option_js__WEBPACK_IMPORTED_MODULE_1__.some(v);
    }
    _n = c < 0 ? n.l : n.r;
    continue ;
  };
}

function getUndefined(_n, x, cmp) {
  while(true) {
    var n = _n;
    if (n === undefined) {
      return ;
    }
    var v = n.v;
    var c = cmp(x, v);
    if (c === 0) {
      return v;
    }
    _n = c < 0 ? n.l : n.r;
    continue ;
  };
}

function getExn(_n, x, cmp) {
  while(true) {
    var n = _n;
    if (n !== undefined) {
      var v = n.v;
      var c = cmp(x, v);
      if (c === 0) {
        return v;
      }
      _n = c < 0 ? n.l : n.r;
      continue ;
    }
    throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
  };
}

function rotateWithLeftChild(k2) {
  var k1 = k2.l;
  k2.l = k1.r;
  k1.r = k2;
  var n = k2.l;
  var hlk2 = n !== undefined ? n.h : 0;
  var n$1 = k2.r;
  var hrk2 = n$1 !== undefined ? n$1.h : 0;
  k2.h = (
    hlk2 > hrk2 ? hlk2 : hrk2
  ) + 1 | 0;
  var n$2 = k1.l;
  var hlk1 = n$2 !== undefined ? n$2.h : 0;
  var hk2 = k2.h;
  k1.h = (
    hlk1 > hk2 ? hlk1 : hk2
  ) + 1 | 0;
  return k1;
}

function rotateWithRightChild(k1) {
  var k2 = k1.r;
  k1.r = k2.l;
  k2.l = k1;
  var n = k1.l;
  var hlk1 = n !== undefined ? n.h : 0;
  var n$1 = k1.r;
  var hrk1 = n$1 !== undefined ? n$1.h : 0;
  k1.h = (
    hlk1 > hrk1 ? hlk1 : hrk1
  ) + 1 | 0;
  var n$2 = k2.r;
  var hrk2 = n$2 !== undefined ? n$2.h : 0;
  var hk1 = k1.h;
  k2.h = (
    hrk2 > hk1 ? hrk2 : hk1
  ) + 1 | 0;
  return k2;
}

function doubleWithLeftChild(k3) {
  var k3l = k3.l;
  var v = rotateWithRightChild(k3l);
  k3.l = v;
  return rotateWithLeftChild(k3);
}

function doubleWithRightChild(k2) {
  var k2r = k2.r;
  var v = rotateWithLeftChild(k2r);
  k2.r = v;
  return rotateWithRightChild(k2);
}

function heightUpdateMutate(t) {
  var n = t.l;
  var hlt = n !== undefined ? n.h : 0;
  var n$1 = t.r;
  var hrt = n$1 !== undefined ? n$1.h : 0;
  t.h = (
    hlt > hrt ? hlt : hrt
  ) + 1 | 0;
  return t;
}

function balMutate(nt) {
  var l = nt.l;
  var r = nt.r;
  var hl = l !== undefined ? l.h : 0;
  var hr = r !== undefined ? r.h : 0;
  if (hl > (2 + hr | 0)) {
    var ll = l.l;
    var lr = l.r;
    if (heightGe(ll, lr)) {
      return heightUpdateMutate(rotateWithLeftChild(nt));
    } else {
      return heightUpdateMutate(doubleWithLeftChild(nt));
    }
  }
  if (hr > (2 + hl | 0)) {
    var rl = r.l;
    var rr = r.r;
    if (heightGe(rr, rl)) {
      return heightUpdateMutate(rotateWithRightChild(nt));
    } else {
      return heightUpdateMutate(doubleWithRightChild(nt));
    }
  }
  nt.h = (
    hl > hr ? hl : hr
  ) + 1 | 0;
  return nt;
}

function addMutate(cmp, t, x) {
  if (t === undefined) {
    return singleton(x);
  }
  var k = t.v;
  var c = cmp(x, k);
  if (c === 0) {
    return t;
  }
  var l = t.l;
  var r = t.r;
  if (c < 0) {
    var ll = addMutate(cmp, l, x);
    t.l = ll;
  } else {
    t.r = addMutate(cmp, r, x);
  }
  return balMutate(t);
}

function fromArray(xs, cmp) {
  var len = xs.length;
  if (len === 0) {
    return ;
  }
  var next = _belt_SortArray_js__WEBPACK_IMPORTED_MODULE_2__.strictlySortedLengthU(xs, (function (x, y) {
          return cmp(x, y) < 0;
        }));
  var result;
  if (next >= 0) {
    result = fromSortedArrayAux(xs, 0, next);
  } else {
    next = -next | 0;
    result = fromSortedArrayRevAux(xs, next - 1 | 0, next);
  }
  for(var i = next; i < len; ++i){
    result = addMutate(cmp, result, xs[i]);
  }
  return result;
}

function removeMinAuxWithRootMutate(nt, n) {
  var ln = n.l;
  var rn = n.r;
  if (ln !== undefined) {
    n.l = removeMinAuxWithRootMutate(nt, ln);
    return balMutate(n);
  } else {
    nt.v = n.v;
    return rn;
  }
}


/* No side effect */


/***/ }),

/***/ "./node_modules/rescript/lib/es6/belt_internalSetInt.js":
/*!**************************************************************!*\
  !*** ./node_modules/rescript/lib/es6/belt_internalSetInt.js ***!
  \**************************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "S": function() { return /* binding */ S; },
/* harmony export */   "N": function() { return /* binding */ N; },
/* harmony export */   "A": function() { return /* binding */ A; },
/* harmony export */   "has": function() { return /* binding */ has; },
/* harmony export */   "compareAux": function() { return /* binding */ compareAux; },
/* harmony export */   "cmp": function() { return /* binding */ cmp; },
/* harmony export */   "eq": function() { return /* binding */ eq; },
/* harmony export */   "subset": function() { return /* binding */ subset; },
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "getUndefined": function() { return /* binding */ getUndefined; },
/* harmony export */   "getExn": function() { return /* binding */ getExn; },
/* harmony export */   "addMutate": function() { return /* binding */ addMutate; },
/* harmony export */   "fromArray": function() { return /* binding */ fromArray; }
/* harmony export */ });
/* harmony import */ var _belt_SortArrayInt_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./belt_SortArrayInt.js */ "./node_modules/rescript/lib/es6/belt_SortArrayInt.js");
/* harmony import */ var _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./belt_internalAVLset.js */ "./node_modules/rescript/lib/es6/belt_internalAVLset.js");





function has(_t, x) {
  while(true) {
    var t = _t;
    if (t === undefined) {
      return false;
    }
    var v = t.v;
    if (x === v) {
      return true;
    }
    _t = x < v ? t.l : t.r;
    continue ;
  };
}

function compareAux(_e1, _e2) {
  while(true) {
    var e2 = _e2;
    var e1 = _e1;
    if (!e1) {
      return 0;
    }
    if (!e2) {
      return 0;
    }
    var h2 = e2.hd;
    var h1 = e1.hd;
    var k1 = h1.v;
    var k2 = h2.v;
    if (k1 !== k2) {
      if (k1 < k2) {
        return -1;
      } else {
        return 1;
      }
    }
    _e2 = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_1__.stackAllLeft(h2.r, e2.tl);
    _e1 = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_1__.stackAllLeft(h1.r, e1.tl);
    continue ;
  };
}

function cmp(s1, s2) {
  var len1 = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_1__.size(s1);
  var len2 = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_1__.size(s2);
  if (len1 === len2) {
    return compareAux(_belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_1__.stackAllLeft(s1, /* [] */0), _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_1__.stackAllLeft(s2, /* [] */0));
  } else if (len1 < len2) {
    return -1;
  } else {
    return 1;
  }
}

function eq(s1, s2) {
  return cmp(s1, s2) === 0;
}

function subset(_s1, _s2) {
  while(true) {
    var s2 = _s2;
    var s1 = _s1;
    if (s1 === undefined) {
      return true;
    }
    if (s2 === undefined) {
      return false;
    }
    var v1 = s1.v;
    var l1 = s1.l;
    var r1 = s1.r;
    var v2 = s2.v;
    var l2 = s2.l;
    var r2 = s2.r;
    if (v1 === v2) {
      if (!subset(l1, l2)) {
        return false;
      }
      _s2 = r2;
      _s1 = r1;
      continue ;
    }
    if (v1 < v2) {
      if (!subset(_belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_1__.create(l1, v1, undefined), l2)) {
        return false;
      }
      _s1 = r1;
      continue ;
    }
    if (!subset(_belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_1__.create(undefined, v1, r1), r2)) {
      return false;
    }
    _s1 = l1;
    continue ;
  };
}

function get(_n, x) {
  while(true) {
    var n = _n;
    if (n === undefined) {
      return ;
    }
    var v = n.v;
    if (x === v) {
      return v;
    }
    _n = x < v ? n.l : n.r;
    continue ;
  };
}

function getUndefined(_n, x) {
  while(true) {
    var n = _n;
    if (n === undefined) {
      return ;
    }
    var v = n.v;
    if (x === v) {
      return v;
    }
    _n = x < v ? n.l : n.r;
    continue ;
  };
}

function getExn(_n, x) {
  while(true) {
    var n = _n;
    if (n !== undefined) {
      var v = n.v;
      if (x === v) {
        return v;
      }
      _n = x < v ? n.l : n.r;
      continue ;
    }
    throw {
          RE_EXN_ID: "Not_found",
          Error: new Error()
        };
  };
}

function addMutate(t, x) {
  if (t === undefined) {
    return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_1__.singleton(x);
  }
  var k = t.v;
  if (x === k) {
    return t;
  }
  var l = t.l;
  var r = t.r;
  if (x < k) {
    t.l = addMutate(l, x);
  } else {
    t.r = addMutate(r, x);
  }
  return _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_1__.balMutate(t);
}

function fromArray(xs) {
  var len = xs.length;
  if (len === 0) {
    return ;
  }
  var next = _belt_SortArrayInt_js__WEBPACK_IMPORTED_MODULE_0__.strictlySortedLength(xs);
  var result;
  if (next >= 0) {
    result = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_1__.fromSortedArrayAux(xs, 0, next);
  } else {
    next = -next | 0;
    result = _belt_internalAVLset_js__WEBPACK_IMPORTED_MODULE_1__.fromSortedArrayRevAux(xs, next - 1 | 0, next);
  }
  for(var i = next; i < len; ++i){
    result = addMutate(result, xs[i]);
  }
  return result;
}

var S;

var N;

var A;


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

/***/ "./node_modules/rescript/lib/es6/caml_obj.js":
/*!***************************************************!*\
  !*** ./node_modules/rescript/lib/es6/caml_obj.js ***!
  \***************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "caml_obj_dup": function() { return /* binding */ caml_obj_dup; },
/* harmony export */   "update_dummy": function() { return /* binding */ update_dummy; },
/* harmony export */   "caml_compare": function() { return /* binding */ caml_compare; },
/* harmony export */   "caml_equal": function() { return /* binding */ caml_equal; },
/* harmony export */   "caml_equal_null": function() { return /* binding */ caml_equal_null; },
/* harmony export */   "caml_equal_undefined": function() { return /* binding */ caml_equal_undefined; },
/* harmony export */   "caml_equal_nullable": function() { return /* binding */ caml_equal_nullable; },
/* harmony export */   "caml_notequal": function() { return /* binding */ caml_notequal; },
/* harmony export */   "caml_greaterequal": function() { return /* binding */ caml_greaterequal; },
/* harmony export */   "caml_greaterthan": function() { return /* binding */ caml_greaterthan; },
/* harmony export */   "caml_lessthan": function() { return /* binding */ caml_lessthan; },
/* harmony export */   "caml_lessequal": function() { return /* binding */ caml_lessequal; },
/* harmony export */   "caml_min": function() { return /* binding */ caml_min; },
/* harmony export */   "caml_max": function() { return /* binding */ caml_max; }
/* harmony export */ });
/* harmony import */ var _caml_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml.js */ "./node_modules/rescript/lib/es6/caml.js");




var for_in = (function(o,foo){
        for (var x in o) { foo(x) }});

var caml_obj_dup = (function(x){
  if(Array.isArray(x)){
    var len = x.length  
    var v = new Array(len)
    for(var i = 0 ; i < len ; ++i){
      v[i] = x[i]
    }
    if(x.TAG !== undefined){
      v.TAG = x.TAG // TODO this can be removed eventually
    }  
    return v 
  } 
  return Object.assign({},x)    
});

var update_dummy = (function(x,y){
  var k  
  if(Array.isArray(y)){
    for(k = 0; k < y.length ; ++k){
      x[k] = y[k]
    }
    if(y.TAG !== undefined){
      x.TAG = y.TAG
    }
  } else {
    for (var k in y){
      x[k] = y[k]
    }
  }
});

function caml_compare(a, b) {
  if (a === b) {
    return 0;
  }
  var a_type = typeof a;
  var b_type = typeof b;
  switch (a_type) {
    case "boolean" :
        if (b_type === "boolean") {
          return _caml_js__WEBPACK_IMPORTED_MODULE_0__.caml_bool_compare(a, b);
        }
        break;
    case "function" :
        if (b_type === "function") {
          throw {
                RE_EXN_ID: "Invalid_argument",
                _1: "compare: functional value",
                Error: new Error()
              };
        }
        break;
    case "number" :
        if (b_type === "number") {
          return _caml_js__WEBPACK_IMPORTED_MODULE_0__.caml_int_compare(a, b);
        }
        break;
    case "string" :
        if (b_type === "string") {
          return _caml_js__WEBPACK_IMPORTED_MODULE_0__.caml_string_compare(a, b);
        } else {
          return 1;
        }
    case "undefined" :
        return -1;
    default:
      
  }
  switch (b_type) {
    case "string" :
        return -1;
    case "undefined" :
        return 1;
    default:
      if (a_type === "boolean") {
        return 1;
      }
      if (b_type === "boolean") {
        return -1;
      }
      if (a_type === "function") {
        return 1;
      }
      if (b_type === "function") {
        return -1;
      }
      if (a_type === "number") {
        if (b === null || b.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
          return 1;
        } else {
          return -1;
        }
      }
      if (b_type === "number") {
        if (a === null || a.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
          return -1;
        } else {
          return 1;
        }
      }
      if (a === null) {
        if (b.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
          return 1;
        } else {
          return -1;
        }
      }
      if (b === null) {
        if (a.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
          return -1;
        } else {
          return 1;
        }
      }
      if (a.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
        if (b.BS_PRIVATE_NESTED_SOME_NONE !== undefined) {
          return aux_obj_compare(a, b);
        } else {
          return -1;
        }
      }
      var tag_a = a.TAG | 0;
      var tag_b = b.TAG | 0;
      if (tag_a === 248) {
        return _caml_js__WEBPACK_IMPORTED_MODULE_0__.caml_int_compare(a[1], b[1]);
      }
      if (tag_a === 251) {
        throw {
              RE_EXN_ID: "Invalid_argument",
              _1: "equal: abstract value",
              Error: new Error()
            };
      }
      if (tag_a !== tag_b) {
        if (tag_a < tag_b) {
          return -1;
        } else {
          return 1;
        }
      }
      var len_a = a.length | 0;
      var len_b = b.length | 0;
      if (len_a === len_b) {
        if (Array.isArray(a)) {
          var _i = 0;
          while(true) {
            var i = _i;
            if (i === len_a) {
              return 0;
            }
            var res = caml_compare(a[i], b[i]);
            if (res !== 0) {
              return res;
            }
            _i = i + 1 | 0;
            continue ;
          };
        } else if ((a instanceof Date && b instanceof Date)) {
          return (a - b);
        } else {
          return aux_obj_compare(a, b);
        }
      } else if (len_a < len_b) {
        var _i$1 = 0;
        while(true) {
          var i$1 = _i$1;
          if (i$1 === len_a) {
            return -1;
          }
          var res$1 = caml_compare(a[i$1], b[i$1]);
          if (res$1 !== 0) {
            return res$1;
          }
          _i$1 = i$1 + 1 | 0;
          continue ;
        };
      } else {
        var _i$2 = 0;
        while(true) {
          var i$2 = _i$2;
          if (i$2 === len_b) {
            return 1;
          }
          var res$2 = caml_compare(a[i$2], b[i$2]);
          if (res$2 !== 0) {
            return res$2;
          }
          _i$2 = i$2 + 1 | 0;
          continue ;
        };
      }
  }
}

function aux_obj_compare(a, b) {
  var min_key_lhs = {
    contents: undefined
  };
  var min_key_rhs = {
    contents: undefined
  };
  var do_key = function (param, key) {
    var min_key = param[2];
    var b = param[1];
    if (!(!b.hasOwnProperty(key) || caml_compare(param[0][key], b[key]) > 0)) {
      return ;
    }
    var mk = min_key.contents;
    if (mk !== undefined && key >= mk) {
      return ;
    } else {
      min_key.contents = key;
      return ;
    }
  };
  var partial_arg = [
    a,
    b,
    min_key_rhs
  ];
  var do_key_a = function (param) {
    return do_key(partial_arg, param);
  };
  var partial_arg$1 = [
    b,
    a,
    min_key_lhs
  ];
  var do_key_b = function (param) {
    return do_key(partial_arg$1, param);
  };
  for_in(a, do_key_a);
  for_in(b, do_key_b);
  var match = min_key_lhs.contents;
  var match$1 = min_key_rhs.contents;
  if (match !== undefined) {
    if (match$1 !== undefined) {
      return _caml_js__WEBPACK_IMPORTED_MODULE_0__.caml_string_compare(match, match$1);
    } else {
      return -1;
    }
  } else if (match$1 !== undefined) {
    return 1;
  } else {
    return 0;
  }
}

function caml_equal(a, b) {
  if (a === b) {
    return true;
  }
  var a_type = typeof a;
  if (a_type === "string" || a_type === "number" || a_type === "boolean" || a_type === "undefined" || a === null) {
    return false;
  }
  var b_type = typeof b;
  if (a_type === "function" || b_type === "function") {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "equal: functional value",
          Error: new Error()
        };
  }
  if (b_type === "number" || b_type === "undefined" || b === null) {
    return false;
  }
  var tag_a = a.TAG | 0;
  var tag_b = b.TAG | 0;
  if (tag_a === 248) {
    return a[1] === b[1];
  }
  if (tag_a === 251) {
    throw {
          RE_EXN_ID: "Invalid_argument",
          _1: "equal: abstract value",
          Error: new Error()
        };
  }
  if (tag_a !== tag_b) {
    return false;
  }
  var len_a = a.length | 0;
  var len_b = b.length | 0;
  if (len_a === len_b) {
    if (Array.isArray(a)) {
      var _i = 0;
      while(true) {
        var i = _i;
        if (i === len_a) {
          return true;
        }
        if (!caml_equal(a[i], b[i])) {
          return false;
        }
        _i = i + 1 | 0;
        continue ;
      };
    } else if ((a instanceof Date && b instanceof Date)) {
      return !(a > b || a < b);
    } else {
      var result = {
        contents: true
      };
      var do_key_a = function (key) {
        if (!b.hasOwnProperty(key)) {
          result.contents = false;
          return ;
        }
        
      };
      var do_key_b = function (key) {
        if (!a.hasOwnProperty(key) || !caml_equal(b[key], a[key])) {
          result.contents = false;
          return ;
        }
        
      };
      for_in(a, do_key_a);
      if (result.contents) {
        for_in(b, do_key_b);
      }
      return result.contents;
    }
  } else {
    return false;
  }
}

function caml_equal_null(x, y) {
  if (y !== null) {
    return caml_equal(x, y);
  } else {
    return x === y;
  }
}

function caml_equal_undefined(x, y) {
  if (y !== undefined) {
    return caml_equal(x, y);
  } else {
    return x === y;
  }
}

function caml_equal_nullable(x, y) {
  if (y == null) {
    return x === y;
  } else {
    return caml_equal(x, y);
  }
}

function caml_notequal(a, b) {
  return !caml_equal(a, b);
}

function caml_greaterequal(a, b) {
  return caml_compare(a, b) >= 0;
}

function caml_greaterthan(a, b) {
  return caml_compare(a, b) > 0;
}

function caml_lessequal(a, b) {
  return caml_compare(a, b) <= 0;
}

function caml_lessthan(a, b) {
  return caml_compare(a, b) < 0;
}

function caml_min(x, y) {
  if (caml_compare(x, y) <= 0) {
    return x;
  } else {
    return y;
  }
}

function caml_max(x, y) {
  if (caml_compare(x, y) >= 0) {
    return x;
  } else {
    return y;
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

/***/ "./node_modules/rescript/lib/es6/js_dict.js":
/*!**************************************************!*\
  !*** ./node_modules/rescript/lib/es6/js_dict.js ***!
  \**************************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "unsafeDeleteKey": function() { return /* binding */ unsafeDeleteKey; },
/* harmony export */   "entries": function() { return /* binding */ entries; },
/* harmony export */   "values": function() { return /* binding */ values; },
/* harmony export */   "fromList": function() { return /* binding */ fromList; },
/* harmony export */   "fromArray": function() { return /* binding */ fromArray; },
/* harmony export */   "map": function() { return /* binding */ map; }
/* harmony export */ });
/* harmony import */ var _caml_option_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./caml_option.js */ "./node_modules/rescript/lib/es6/caml_option.js");




function get(dict, k) {
  if ((k in dict)) {
    return _caml_option_js__WEBPACK_IMPORTED_MODULE_0__.some(dict[k]);
  }
  
}

var unsafeDeleteKey = (function (dict,key){
      delete dict[key];
     });

function entries(dict) {
  var keys = Object.keys(dict);
  var l = keys.length;
  var values = new Array(l);
  for(var i = 0; i < l; ++i){
    var key = keys[i];
    values[i] = [
      key,
      dict[key]
    ];
  }
  return values;
}

function values(dict) {
  var keys = Object.keys(dict);
  var l = keys.length;
  var values$1 = new Array(l);
  for(var i = 0; i < l; ++i){
    values$1[i] = dict[keys[i]];
  }
  return values$1;
}

function fromList(entries) {
  var dict = {};
  var _param = entries;
  while(true) {
    var param = _param;
    if (!param) {
      return dict;
    }
    var match = param.hd;
    dict[match[0]] = match[1];
    _param = param.tl;
    continue ;
  };
}

function fromArray(entries) {
  var dict = {};
  var l = entries.length;
  for(var i = 0; i < l; ++i){
    var match = entries[i];
    dict[match[0]] = match[1];
  }
  return dict;
}

function map(f, source) {
  var target = {};
  var keys = Object.keys(source);
  var l = keys.length;
  for(var i = 0; i < l; ++i){
    var key = keys[i];
    target[key] = f(source[key]);
  }
  return target;
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


/***/ }),

/***/ "./src/core/calc/DNA.bs.js":
/*!*********************************!*\
  !*** ./src/core/calc/DNA.bs.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": function() { return /* binding */ get; },
/* harmony export */   "getUnsafe": function() { return /* binding */ getUnsafe; },
/* harmony export */   "getLength": function() { return /* binding */ getLength; },
/* harmony export */   "getSize": function() { return /* binding */ getSize; },
/* harmony export */   "isValidLength": function() { return /* binding */ isValidLength; },
/* harmony export */   "make": function() { return /* binding */ make; },
/* harmony export */   "makeUnsafe": function() { return /* binding */ makeUnsafe; },
/* harmony export */   "genRandom": function() { return /* binding */ genRandom; },
/* harmony export */   "toArray": function() { return /* binding */ toArray; },
/* harmony export */   "reorderToNMUI": function() { return /* binding */ reorderToNMUI; },
/* harmony export */   "fromIntArr": function() { return /* binding */ fromIntArr; },
/* harmony export */   "fromIntArrUnsafe": function() { return /* binding */ fromIntArrUnsafe; },
/* harmony export */   "fromStrArr": function() { return /* binding */ fromStrArr; },
/* harmony export */   "fromStrArrUnsafe": function() { return /* binding */ fromStrArrUnsafe; },
/* harmony export */   "show": function() { return /* binding */ show; },
/* harmony export */   "raw": function() { return /* binding */ raw; },
/* harmony export */   "Perspective": function() { return /* binding */ Perspective; },
/* harmony export */   "inv": function() { return /* binding */ inv; },
/* harmony export */   "rel": function() { return /* binding */ rel; }
/* harmony export */ });
/* harmony import */ var rescript_lib_es6_caml_obj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rescript/lib/es6/caml_obj.js */ "./node_modules/rescript/lib/es6/caml_obj.js");
/* harmony import */ var rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rescript/lib/es6/belt_Array.js */ "./node_modules/rescript/lib/es6/belt_Array.js");
/* harmony import */ var rescript_lib_es6_caml_array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rescript/lib/es6/caml_array.js */ "./node_modules/rescript/lib/es6/caml_array.js");
/* harmony import */ var rescript_lib_es6_belt_SetInt_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rescript/lib/es6/belt_SetInt.js */ "./node_modules/rescript/lib/es6/belt_SetInt.js");
/* harmony import */ var _Calc_bs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Calc.bs.js */ "./src/core/calc/Calc.bs.js");
/* harmony import */ var _utils_JsRaw_bs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../../utils/JsRaw.bs.js */ "./src/utils/JsRaw.bs.js");
/* harmony import */ var _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../../utils/Helper.bs.js */ "./src/utils/Helper.bs.js");
// Generated by ReScript, PLEASE EDIT WITH CARE









var get = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.get;

function getUnsafe(dna, i) {
  return dna[i];
}

function getLength(dna) {
  return dna.length;
}

function getSize(dna) {
  var len = dna.length;
  return Math.log(len) / Math.log(4.0) | 0;
}

function getSizeFromLength(len) {
  var x = Math.log(len) / Math.log(4.0);
  if (!Number.isFinite(x) || _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_6__.hasDecimal(x)) {
    return ;
  } else {
    return x | 0;
  }
}

function isValidLength(len) {
  return getSizeFromLength(len) !== undefined;
}

function make(arr) {
  var len = arr.length;
  if (isValidLength(len)) {
    return arr;
  }
  
}

function makeUnsafe(arr) {
  var len = arr.length;
  if (isValidLength(len)) {
    return arr;
  }
  throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
}

function genRandom(size) {
  return [];
}

function toArray(dna) {
  return dna;
}

function reorderToNMUI(undoOpt, dna) {
  var undo = undoOpt !== undefined ? undoOpt : false;
  var len = dna.length;
  if (len < 4) {
    return dna;
  }
  var partLen = len / 4 | 0;
  return rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concatMany(rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.makeBy(4, (function (i) {
                    var i_reordered;
                    switch (i) {
                      case 0 :
                          i_reordered = undo ? 2 : 1;
                          break;
                      case 1 :
                          i_reordered = undo ? 0 : 2;
                          break;
                      case 2 :
                          i_reordered = undo ? 1 : 0;
                          break;
                      default:
                        i_reordered = i;
                    }
                    var index = Math.imul(i_reordered, partLen);
                    var part_reordered = dna.slice(index, index + partLen | 0);
                    if (len > 4) {
                      return reorderToNMUI(undo, part_reordered);
                    } else {
                      return part_reordered;
                    }
                  })));
}

function fromIntArr(sortNMUIOpt, arr) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  if (isValidLength(arr.length) === false) {
    return ;
  }
  var dna = arr.map(function (n) {
        var c = _Calc_bs_js__WEBPACK_IMPORTED_MODULE_4__.Const.fromInt(sortNMUI, n);
        if (c !== undefined) {
          return c;
        }
        throw {
              RE_EXN_ID: "Not_found",
              Error: new Error()
            };
      });
  return sortNMUI ? reorderToNMUI(true, dna) : dna;
}

function fromIntArrUnsafe(sortNMUIOpt, arr) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  var dna = fromIntArr(sortNMUI, arr);
  if (dna !== undefined) {
    return dna;
  }
  throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
}

function fromStrArr(sortNMUIOpt, arr) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  if (isValidLength(arr.length) === false) {
    return ;
  }
  var dna = arr.map(function (n) {
        var c = _Calc_bs_js__WEBPACK_IMPORTED_MODULE_4__.Const.tFromStr(sortNMUI, n);
        if (c !== undefined) {
          return c;
        }
        throw {
              RE_EXN_ID: "Not_found",
              Error: new Error()
            };
      });
  return sortNMUI ? reorderToNMUI(true, dna) : dna;
}

function fromStrArrUnsafe(sortNMUIOpt, arr) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  var dna = fromStrArr(sortNMUI, arr);
  if (dna !== undefined) {
    return dna;
  }
  throw {
        RE_EXN_ID: "Not_found",
        Error: new Error()
      };
}

function show(sortNMUIOpt, spacedOpt, dna) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  var spaced = spacedOpt !== undefined ? spacedOpt : false;
  var dna_sorted = sortNMUI ? reorderToNMUI(undefined, dna) : dna;
  var prefix = (
    sortNMUI ? "::" : "⁘"
  ) + (
    spaced ? " " : ""
  );
  if (rescript_lib_es6_caml_obj_js__WEBPACK_IMPORTED_MODULE_0__.caml_equal(dna_sorted, [])) {
    return prefix + _Calc_bs_js__WEBPACK_IMPORTED_MODULE_4__.Const.toInt(sortNMUI, /* N */0).toString();
  } else {
    return prefix + dna_sorted.reduce((function (str, c, i) {
                  var spc = spaced && i > 0 && i % 4 === 0 ? " " : "";
                  return str + spc + _Calc_bs_js__WEBPACK_IMPORTED_MODULE_4__.Const.toInt(sortNMUI, c).toString();
                }), "");
  }
}

function raw(dna) {
  if (rescript_lib_es6_caml_obj_js__WEBPACK_IMPORTED_MODULE_0__.caml_equal(dna, [])) {
    return _Calc_bs_js__WEBPACK_IMPORTED_MODULE_4__.Const.showAsKey(/* N */0);
  } else {
    return dna.map(function (c) {
                  return _Calc_bs_js__WEBPACK_IMPORTED_MODULE_4__.Const.showAsKey(c);
                }).join("");
  }
}

function getPermOrder(psp) {
  return psp.permOrder;
}

function getDna(psp) {
  return psp.dna;
}

function isValidPermOrder(permOrder) {
  var len = permOrder.length;
  if (len !== 1) {
    if (len === 0) {
      return true;
    }
    
  } else {
    var match = permOrder[0];
    if (match === 0) {
      return true;
    }
    
  }
  var orderSetArr = rescript_lib_es6_belt_SetInt_js__WEBPACK_IMPORTED_MODULE_3__.toArray(rescript_lib_es6_belt_SetInt_js__WEBPACK_IMPORTED_MODULE_3__.fromArray(permOrder));
  var len$1 = orderSetArr.length;
  if (permOrder.length === len$1 && rescript_lib_es6_caml_array_js__WEBPACK_IMPORTED_MODULE_2__.get(orderSetArr, 0) === 0) {
    return rescript_lib_es6_caml_array_js__WEBPACK_IMPORTED_MODULE_2__.get(orderSetArr, len$1 - 1 | 0) === (len$1 - 1 | 0);
  } else {
    return false;
  }
}

function permute(dna, permOrder) {
  var size = getSize(dna);
  if (size !== permOrder.length || !isValidPermOrder(permOrder)) {
    return ;
  }
  if (size < 2) {
    return {
            permOrder: permOrder,
            dna: dna
          };
  }
  var toQuaternaryStr = function (n) {
    return _utils_JsRaw_bs_js__WEBPACK_IMPORTED_MODULE_5__.padStart(n.toString(4), size, "0");
  };
  var dnaLen = dna.length;
  var dnaPermuted = makeUnsafe(rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.makeByU(dnaLen, (function (i) {
              var qtnKey = toQuaternaryStr(i).split("");
              var permKey = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.makeByU(size, (function (j) {
                        var swap_i = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.get(permOrder, j);
                        if (swap_i !== undefined) {
                          var qtnStr = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.get(qtnKey, swap_i);
                          if (qtnStr !== undefined) {
                            return qtnStr;
                          }
                          throw {
                                RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_6__.IndexExc,
                                _1: [
                                  "Couldn't get qtn string from swapped index",
                                  swap_i
                                ],
                                Error: new Error()
                              };
                        }
                        throw {
                              RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_6__.IndexExc,
                              _1: [
                                "Couldn't get index from permutation ordering!",
                                j
                              ],
                              Error: new Error()
                            };
                      })).join("");
              var i_perm = _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_6__.intFromStrWithRadix(4, permKey);
              if (i_perm !== undefined) {
                var c = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.get(dna, i_perm);
                if (c !== undefined) {
                  return c;
                }
                throw {
                      RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_6__.IndexExc,
                      _1: [
                        "Couldn't get Const value from DNA.",
                        i_perm
                      ],
                      Error: new Error()
                    };
              }
              throw {
                    RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_6__.Debug,
                    _1: "permKey \"" + permKey + "\" could not be converted to int!",
                    Error: new Error()
                  };
            })));
  return {
          permOrder: permOrder,
          dna: dnaPermuted
        };
}

function permuteAll(dna) {
  return [{
            permOrder: [],
            dna: dna
          }];
}

function makeUnsafe$1(permOrder, dna) {
  return {
          permOrder: permOrder,
          dna: dna
        };
}

var Perspective = {
  getPermOrder: getPermOrder,
  getDna: getDna,
  isValidPermOrder: isValidPermOrder,
  permute: permute,
  permuteAll: permuteAll,
  makeUnsafe: makeUnsafe$1
};

function inv(dna) {
  if (rescript_lib_es6_caml_obj_js__WEBPACK_IMPORTED_MODULE_0__.caml_equal(dna, [])) {
    return [_Calc_bs_js__WEBPACK_IMPORTED_MODULE_4__.Const.inv(/* N */0)];
  } else {
    return dna.map(function (c) {
                return _Calc_bs_js__WEBPACK_IMPORTED_MODULE_4__.Const.inv(c);
              });
  }
}

function rel(dna_a, dna_b) {
  var len_a = dna_a.length;
  var len_b = dna_b.length;
  var match = len_a <= len_b ? [
      dna_a,
      dna_b,
      len_a,
      len_b
    ] : [
      dna_b,
      dna_a,
      len_b,
      len_a
    ];
  var supLen = match[3];
  var subLen = match[2];
  var sup = match[1];
  var result = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.zipBy(sup, match[0], (function (a, b) {
          return _Calc_bs_js__WEBPACK_IMPORTED_MODULE_4__.Const.rel(a, b);
        }));
  if (subLen === supLen) {
    return result;
  } else {
    return rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(result, rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.slice(sup, subLen, supLen));
  }
}


/* Helper-Formform Not a pure module */


/***/ }),

/***/ "./src/core/calc/SeqRE.bs.js":
/*!***********************************!*\
  !*** ./src/core/calc/SeqRE.bs.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "recInstr": function() { return /* binding */ recInstr; },
/* harmony export */   "recIdent": function() { return /* binding */ recIdent; },
/* harmony export */   "sigToJs": function() { return /* binding */ sigToJs; },
/* harmony export */   "sigFromJs": function() { return /* binding */ sigFromJs; },
/* harmony export */   "mnFromStr": function() { return /* binding */ mnFromStr; },
/* harmony export */   "showSig": function() { return /* binding */ showSig; },
/* harmony export */   "showMN": function() { return /* binding */ showMN; },
/* harmony export */   "showUType": function() { return /* binding */ showUType; },
/* harmony export */   "getUType": function() { return /* binding */ getUType; },
/* harmony export */   "calcRE": function() { return /* binding */ calcRE; }
/* harmony export */ });
/* harmony import */ var rescript_lib_es6_js_list_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rescript/lib/es6/js_list.js */ "./node_modules/rescript/lib/es6/js_list.js");
/* harmony import */ var rescript_lib_es6_caml_obj_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rescript/lib/es6/caml_obj.js */ "./node_modules/rescript/lib/es6/caml_obj.js");
/* harmony import */ var rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rescript/lib/es6/belt_List.js */ "./node_modules/rescript/lib/es6/belt_List.js");
/* harmony import */ var _Calc_bs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Calc.bs.js */ "./src/core/calc/Calc.bs.js");
// Generated by ReScript, PLEASE EDIT WITH CARE






function sigToJs(param) {
  return {
          reEntryPar: param.reEntryPar,
          unmarked: param.unmarked,
          interpr: param.interpr
        };
}

function sigFromJs(param) {
  return {
          reEntryPar: param.reEntryPar,
          unmarked: param.unmarked,
          interpr: param.interpr
        };
}

function mnFromStr(str) {
  switch (str) {
    case "RecIdent" :
    case "Recursive Identity" :
    case "id" :
    case "rId" :
    case "recIdent" :
        return /* RecIdent */1;
    case "RecInstr" :
    case "Recursive Instruction" :
    case "in" :
    case "rIn" :
    case "recInstr" :
        return /* RecInstr */0;
    default:
      throw {
            RE_EXN_ID: "Not_found",
            Error: new Error()
          };
  }
}

function showSig(param) {
  var match;
  switch (param.reEntryPar) {
    case /* Even */0 :
        match = [
          "..",
          ""
        ];
        break;
    case /* Odd */1 :
        match = [
          "..",
          "."
        ];
        break;
    case /* Any */2 :
        match = [
          "",
          ""
        ];
        break;
    
  }
  var reMark = param.interpr ? "@~" : "@";
  return match[0] + reMark + match[1] + (
          param.unmarked ? "_" : ""
        );
}

function showMN(mn) {
  if (mn) {
    return "recursive identity";
  } else {
    return "recursive instruction";
  }
}

function showUType(uType) {
  if (uType) {
    return "iFORM";
  } else {
    return "uFORM";
  }
}

function getUType(param, resPar) {
  switch (resPar) {
    case /* Even */0 :
        if (param.unmarked) {
          return /* IFORM */1;
        } else {
          return /* UFORM */0;
        }
    case /* Odd */1 :
        switch (param.reEntryPar) {
          case /* Even */0 :
              return /* UFORM */0;
          case /* Odd */1 :
          case /* Any */2 :
              return /* IFORM */1;
          
        }
    case /* Any */2 :
        return /* IFORM */1;
    
  }
}

function calcRE(param, param$1) {
  var nestedC = param$1.VAL;
  var interpr = param.interpr;
  var unmarked = param.unmarked;
  var reEntryPar = param.reEntryPar;
  var resPar = nestedC === /* [] */0 || rescript_lib_es6_js_list_js__WEBPACK_IMPORTED_MODULE_0__.length(nestedC) % 2 !== 0 ? /* Odd */1 : /* Even */0;
  var reType = getUType({
        reEntryPar: reEntryPar,
        unmarked: unmarked,
        interpr: interpr
      }, resPar);
  if (nestedC === /* [] */0 || rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__.every(nestedC, (function (c) {
            return c === /* N */0;
          }))) {
    if (reType) {
      return /* I */2;
    } else {
      return /* U */1;
    }
  }
  var nestedC$1 = !unmarked && resPar === /* Odd */1 && reEntryPar === /* Even */0 ? rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__.concat(nestedC, nestedC) : nestedC;
  if (rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__.some(nestedC$1, (function (c) {
            return c === /* M */3;
          })) || rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__.some(nestedC$1, (function (c) {
            return c === /* U */1;
          })) && rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__.some(nestedC$1, (function (c) {
            return c === /* I */2;
          }))) {
    var r = _Calc_bs_js__WEBPACK_IMPORTED_MODULE_3__.Nested.calcR(_Calc_bs_js__WEBPACK_IMPORTED_MODULE_3__.Nested.reduceR({
              NAME: "NestToR",
              VAL: nestedC$1
            }));
    if (unmarked) {
      return _Calc_bs_js__WEBPACK_IMPORTED_MODULE_3__.Const.inv(r);
    } else {
      return r;
    }
  }
  var match = _Calc_bs_js__WEBPACK_IMPORTED_MODULE_3__.Nested.reduceR({
        NAME: "NestToR",
        VAL: nestedC$1
      });
  var nestedC$2 = match.VAL;
  var bottom_c = rescript_lib_es6_js_list_js__WEBPACK_IMPORTED_MODULE_0__.hd(nestedC$2);
  if (interpr === /* RecIdent */1 && !unmarked && rescript_lib_es6_caml_obj_js__WEBPACK_IMPORTED_MODULE_1__.caml_equal(bottom_c, /* N */0)) {
    if (nestedC$2) {
      var match$1 = nestedC$2.tl;
      if (match$1) {
        var c = match$1.hd;
        if (reType) {
          return _Calc_bs_js__WEBPACK_IMPORTED_MODULE_3__.Const.rel(/* I */2, c);
        } else {
          return _Calc_bs_js__WEBPACK_IMPORTED_MODULE_3__.Const.rel(/* U */1, c);
        }
      }
      throw {
            RE_EXN_ID: "Assert_failure",
            _1: [
              "SeqRE.res",
              144,
              58
            ],
            Error: new Error()
          };
    }
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "SeqRE.res",
            144,
            58
          ],
          Error: new Error()
        };
  }
  if (interpr === /* RecIdent */1 && unmarked && rescript_lib_es6_caml_obj_js__WEBPACK_IMPORTED_MODULE_1__.caml_notequal(bottom_c, /* N */0)) {
    if (bottom_c !== undefined) {
      if (reType) {
        return _Calc_bs_js__WEBPACK_IMPORTED_MODULE_3__.Const.rel(/* I */2, bottom_c);
      } else {
        return _Calc_bs_js__WEBPACK_IMPORTED_MODULE_3__.Const.rel(/* U */1, bottom_c);
      }
    }
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "SeqRE.res",
            163,
            58
          ],
          Error: new Error()
        };
  }
  if (unmarked) {
    if (nestedC$2) {
      var match$2 = nestedC$2.hd;
      if (match$2 !== 0) {
        if (match$2 < 3) {
          var match$3 = nestedC$2.tl;
          if (!match$3) {
            if (reEntryPar === /* Even */0) {
              return /* I */2;
            } else {
              return /* U */1;
            }
          }
          if (match$3.hd === 0 && !match$3.tl) {
            return /* U */1;
          }
          
        }
        
      } else {
        var match$4 = nestedC$2.tl;
        if (match$4 && (match$4.hd - 1 >>> 0) <= 1) {
          var match$5 = match$4.tl;
          if (!match$5) {
            return /* I */2;
          }
          if (match$5.hd === 0 && !match$5.tl) {
            if (reEntryPar === /* Even */0) {
              return /* U */1;
            } else {
              return /* I */2;
            }
          }
          
        }
        
      }
    }
    throw {
          RE_EXN_ID: "Assert_failure",
          _1: [
            "SeqRE.res",
            198,
            60
          ],
          Error: new Error()
        };
  }
  if (nestedC$2) {
    var match$6 = nestedC$2.hd;
    if (match$6 !== 0) {
      if (match$6 < 3) {
        var match$7 = nestedC$2.tl;
        if (!match$7) {
          if (reEntryPar === /* Even */0) {
            return /* U */1;
          } else {
            return /* I */2;
          }
        }
        if (match$7.hd === 0 && !match$7.tl) {
          return /* U */1;
        }
        
      }
      
    } else {
      var match$8 = nestedC$2.tl;
      if (match$8 && (match$8.hd - 1 >>> 0) <= 1) {
        var match$9 = match$8.tl;
        if (!match$9) {
          return /* I */2;
        }
        if (match$9.hd === 0 && !match$9.tl) {
          if (reEntryPar === /* Even */0) {
            return /* I */2;
          } else {
            return /* U */1;
          }
        }
        
      }
      
    }
  }
  throw {
        RE_EXN_ID: "Assert_failure",
        _1: [
          "SeqRE.res",
          189,
          60
        ],
        Error: new Error()
      };
}

var recInstr = /* RecInstr */0;

var recIdent = /* RecIdent */1;


/* No side effect */


/***/ }),

/***/ "./src/core/form/Expr.bs.js":
/*!**********************************!*\
  !*** ./src/core/form/Expr.bs.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "lblClass_unquoted": function() { return /* binding */ lblClass_unquoted; },
/* harmony export */   "idxClass_unquoted": function() { return /* binding */ idxClass_unquoted; },
/* harmony export */   "FORM": function() { return /* binding */ FORM; },
/* harmony export */   "DepthTree": function() { return /* binding */ DepthTree; },
/* harmony export */   "FormDNA": function() { return /* binding */ FormDNA; },
/* harmony export */   "Sequence": function() { return /* binding */ Sequence; }
/* harmony export */ });
/* harmony import */ var rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rescript/lib/es6/curry.js */ "./node_modules/rescript/lib/es6/curry.js");
/* harmony import */ var rescript_lib_es6_belt_Id_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rescript/lib/es6/belt_Id.js */ "./node_modules/rescript/lib/es6/belt_Id.js");
/* harmony import */ var rescript_lib_es6_belt_Set_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rescript/lib/es6/belt_Set.js */ "./node_modules/rescript/lib/es6/belt_Set.js");
/* harmony import */ var rescript_lib_es6_caml_obj_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rescript/lib/es6/caml_obj.js */ "./node_modules/rescript/lib/es6/caml_obj.js");
/* harmony import */ var rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rescript/lib/es6/belt_List.js */ "./node_modules/rescript/lib/es6/belt_List.js");
/* harmony import */ var rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rescript/lib/es6/belt_Array.js */ "./node_modules/rescript/lib/es6/belt_Array.js");
/* harmony import */ var _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../calc/DNA.bs.js */ "./src/core/calc/DNA.bs.js");
/* harmony import */ var _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../calc/Calc.bs.js */ "./src/core/calc/Calc.bs.js");
/* harmony import */ var _calc_SeqRE_bs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../calc/SeqRE.bs.js */ "./src/core/calc/SeqRE.bs.js");
/* harmony import */ var _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/Helper.bs.js */ "./src/utils/Helper.bs.js");
// Generated by ReScript, PLEASE EDIT WITH CARE












var lblClass_unquoted = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "α",
  "β",
  "γ",
  "δ",
  "ε",
  "ζ",
  "η",
  "θ",
  "ι",
  "κ",
  "λ",
  "μ",
  "ν",
  "ξ",
  "ο",
  "π",
  "ρ",
  "ς",
  "σ",
  "τ",
  "υ",
  "φ",
  "χ",
  "ψ",
  "ω"
];

var idxClass_unquoted = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_5__.concat([
      "0",
      "1",
      "2",
      "3",
      "4",
      "5",
      "6",
      "7",
      "8",
      "9"
    ], lblClass_unquoted);

function mark(expr) {
  return {
          TAG: /* Mark */0,
          _0: expr
        };
}

function cVal(c) {
  return {
          TAG: /* CVal */1,
          _0: c
        };
}

function seqRE(sig, seq) {
  return {
          TAG: /* SeqRE */2,
          _0: sig,
          _1: seq
        };
}

function uncl(lbl) {
  return {
          TAG: /* Uncl */3,
          _0: lbl
        };
}

function fVar(lbl) {
  return {
          TAG: /* FVar */4,
          _0: lbl
        };
}

function fDna(fdna) {
  return {
          TAG: /* FDna */5,
          _0: fdna
        };
}

function is_unquotedVar(lbl) {
  var len = lbl.length;
  if (len === 3 && lbl[1] === "_") {
    if (lblClass_unquoted.includes(lbl[0])) {
      return idxClass_unquoted.includes(lbl[2]);
    } else {
      return false;
    }
  } else if (len === 1) {
    return lblClass_unquoted.includes(lbl[0]);
  } else {
    return false;
  }
}

function showForm(sortNMUIOpt, form) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  switch (form.TAG | 0) {
    case /* Mark */0 :
        return "(" + showExpr(sortNMUI, form._0) + ")";
    case /* CVal */1 :
        return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_7__.Const.show(form._0);
    case /* SeqRE */2 :
        return "{" + _calc_SeqRE_bs_js__WEBPACK_IMPORTED_MODULE_8__.showSig(form._0) + " " + showSeq(sortNMUI, form._1) + "}";
    case /* Uncl */3 :
        var lbl = form._0;
        return "/" + _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_9__.cleanStr(lbl) + "/";
    case /* FVar */4 :
        var lbl$1 = form._0;
        if (is_unquotedVar(lbl$1)) {
          return _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_9__.cleanStr(lbl$1);
        } else {
          return "\"" + _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_9__.cleanStr(lbl$1) + "\"";
        }
    case /* FDna */5 :
        return "[" + showFdna(sortNMUI, form._0) + "]";
    
  }
}

function showExpr(sortNMUIOpt, expr) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  return expr.map(function (form) {
                return showForm(sortNMUI, form);
              }).join("");
}

function showSeq(sortNMUIOpt, seq) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  return _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_9__.ListExtensions.joinWith(rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_4__.map(rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_4__.reverse(seq), (function (expr) {
                    return showExpr(sortNMUI, expr);
                  })), ",");
}

function showFdna($staropt$star, param) {
  var vars = param.vars;
  var form = param.form;
  var sortNMUI = $staropt$star !== undefined ? $staropt$star : false;
  var formStr;
  if (form !== undefined) {
    if (vars !== undefined) {
      var varsStr = vars.join(",");
      formStr = showExpr(sortNMUI, form) + ".[" + varsStr + "]";
    } else {
      formStr = showExpr(sortNMUI, form);
    }
  } else {
    formStr = "";
  }
  return formStr + _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_6__.show(sortNMUI, undefined, param.dna);
}

function reduceExpr(reducerFn, init, expr) {
  return rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_5__.reduce(expr, init, (function (param, param$1) {
                var acc = rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._2(reducerFn, param, param$1);
                switch (param$1.TAG | 0) {
                  case /* Mark */0 :
                      return reduceExpr(reducerFn, acc, param$1._0);
                  case /* SeqRE */2 :
                      var seq = param$1._1;
                      return rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_4__.reduce(seq, acc, (function (param, param$1) {
                                    return reduceExpr(reducerFn, param, param$1);
                                  }));
                  default:
                    return acc;
                }
              }));
}

function reduce(expr, reducerFn, init) {
  return reduceExpr(reducerFn, init, expr);
}

function toVarFORM_form(form) {
  switch (form.TAG | 0) {
    case /* Mark */0 :
        return {
                TAG: /* Mark */0,
                _0: form._0.map(toVarFORM_form)
              };
    case /* CVal */1 :
        return {
                TAG: /* CVal */1,
                _0: form._0
              };
    case /* SeqRE */2 :
        return {
                TAG: /* SeqRE */2,
                _0: form._0,
                _1: rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_4__.map(form._1, (function (expr) {
                        return expr.map(toVarFORM_form);
                      }))
              };
    case /* Uncl */3 :
        return {
                TAG: /* Uncl */3,
                _0: form._0
              };
    case /* FDna */5 :
        return {
                TAG: /* FDna */5,
                _0: toVarFORM_fdna(form._0)
              };
    
  }
}

function toVarFORM_fdna(param) {
  var form = param.form;
  var formVar = form !== undefined ? form.map(toVarFORM_form) : undefined;
  return {
          dna: param.dna,
          form: formVar,
          vars: param.vars
        };
}

function toVarFORM_expr(expr) {
  return expr.map(toVarFORM_form);
}

function reduceExpr$1(reducerFn, init, expr) {
  return rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_5__.reduce(expr, init, (function (param, param$1) {
                var acc = rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._2(reducerFn, param, param$1);
                switch (param$1.TAG | 0) {
                  case /* Mark */0 :
                      return reduceExpr$1(reducerFn, acc, param$1._0);
                  case /* SeqRE */2 :
                      var seq = param$1._1;
                      return rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_4__.reduce(seq, acc, (function (param, param$1) {
                                    return reduceExpr$1(reducerFn, param, param$1);
                                  }));
                  default:
                    return acc;
                }
              }));
}

function reduce$1(expr, reducerFn, init) {
  return reduceExpr$1(reducerFn, init, expr);
}

function getVars(expr) {
  var cmp = rescript_lib_es6_caml_obj_js__WEBPACK_IMPORTED_MODULE_3__.caml_compare;
  var VarCmp = rescript_lib_es6_belt_Id_js__WEBPACK_IMPORTED_MODULE_1__.MakeComparable({
        cmp: cmp
      });
  var _getVars = function (vars, form) {
    if (form.TAG === /* FVar */4) {
      return rescript_lib_es6_belt_Set_js__WEBPACK_IMPORTED_MODULE_2__.add(vars, form._0);
    } else {
      return vars;
    }
  };
  var init = rescript_lib_es6_belt_Set_js__WEBPACK_IMPORTED_MODULE_2__.make(VarCmp);
  return rescript_lib_es6_belt_Set_js__WEBPACK_IMPORTED_MODULE_2__.toArray(reduceExpr$1(_getVars, init, expr));
}

function countVars(expr) {
  var _countVars = function (n, form) {
    if (form.TAG === /* FVar */4) {
      return n + 1 | 0;
    } else {
      return n;
    }
  };
  return reduceExpr$1(_countVars, 0, expr);
}

function showSubtree(subtree) {
  if (subtree.TAG === /* Branch */0) {
    return "{ index: " + subtree.index.join("") + ", form: '" + showForm(undefined, subtree.form) + "', children: [" + subtree.children.map(showSubtree).join(", ") + "] }";
  } else {
    return "{ index: " + subtree.index.join("") + ", form: '" + showForm(undefined, subtree.form) + "' }";
  }
}

function show(param) {
  return "{ root, form: '" + showExpr(undefined, param.form) + "', children: [" + param.children.map(showSubtree).join(", ") + "] }";
}

function parseSubtree(form, index) {
  if (form.TAG === /* Mark */0) {
    return {
            TAG: /* Branch */0,
            index: index,
            form: form,
            children: form._0.map(function (cnt, i) {
                  return parseSubtree(cnt, index.concat([i]));
                })
          };
  } else {
    return {
            TAG: /* Leaf */1,
            index: index,
            form: form
          };
  }
}

function parse(expr) {
  return {
          form: expr,
          children: expr.map(function (cnt, i) {
                return parseSubtree(cnt, [i]);
              })
        };
}

var testTrees = [
  {
    form: [],
    children: []
  },
  {
    form: [{
        TAG: /* CVal */1,
        _0: /* U */1
      }],
    children: [{
        TAG: /* Leaf */1,
        index: [0],
        form: {
          TAG: /* CVal */1,
          _0: /* U */1
        }
      }]
  },
  {
    form: [{
        TAG: /* Mark */0,
        _0: []
      }],
    children: [{
        TAG: /* Branch */0,
        index: [0],
        form: {
          TAG: /* Mark */0,
          _0: []
        },
        children: []
      }]
  },
  {
    form: [{
        TAG: /* Mark */0,
        _0: [
          {
            TAG: /* CVal */1,
            _0: /* M */3
          },
          {
            TAG: /* Mark */0,
            _0: []
          }
        ]
      }],
    children: [{
        TAG: /* Branch */0,
        index: [0],
        form: {
          TAG: /* Mark */0,
          _0: [
            {
              TAG: /* CVal */1,
              _0: /* M */3
            },
            {
              TAG: /* Mark */0,
              _0: []
            }
          ]
        },
        children: [
          {
            TAG: /* Leaf */1,
            index: [
              0,
              0
            ],
            form: {
              TAG: /* CVal */1,
              _0: /* M */3
            }
          },
          {
            TAG: /* Branch */0,
            index: [
              0,
              1
            ],
            form: {
              TAG: /* Mark */0,
              _0: []
            },
            children: []
          }
        ]
      }]
  }
];

function dnaToFORM(dna) {
  return [];
}

function toFORM(param) {
  return [];
}

function permute(param) {
  return {
          dna: param.dna,
          form: param.form,
          vars: param.vars
        };
}

function perspectives(param) {
  return [];
}

var FormDNA = {
  show: showFdna,
  dnaToFORM: dnaToFORM,
  toFORM: toFORM,
  permute: permute,
  perspectives: perspectives
};

function toFORMt(seq) {
  if (!seq) {
    return {
            TAG: /* Mark */0,
            _0: []
          };
  }
  var seq$p = seq.tl;
  var expr = seq.hd;
  if (seq$p) {
    return {
            TAG: /* Mark */0,
            _0: rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_5__.concat(expr, [toFORMt(seq$p)])
          };
  } else {
    return {
            TAG: /* Mark */0,
            _0: expr
          };
  }
}

var Sequence = {
  show: showSeq,
  toFORMt: toFORMt
};

var FORM_ConstFORM = {
  reduce: reduce,
  toVarFORM: toVarFORM_expr
};

var FORM_VarFORM = {
  reduce: reduce$1
};

var FORM = {
  mark: mark,
  cVal: cVal,
  seqRE: seqRE,
  uncl: uncl,
  fVar: fVar,
  fDna: fDna,
  show: showExpr,
  ConstFORM: FORM_ConstFORM,
  VarFORM: FORM_VarFORM,
  getVars: getVars,
  countVars: countVars
};

var DepthTree = {
  show: show,
  parse: parse,
  testTrees: testTrees
};


/* idxClass_unquoted Not a pure module */


/***/ }),

/***/ "./src/core/form/Formula.bs.js":
/*!*************************************!*\
  !*** ./src/core/form/Formula.bs.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Token": function() { return /* binding */ Token; },
/* harmony export */   "Lexer": function() { return /* binding */ Lexer; },
/* harmony export */   "Parser": function() { return /* binding */ Parser; },
/* harmony export */   "read": function() { return /* binding */ read; }
/* harmony export */ });
/* harmony import */ var rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rescript/lib/es6/belt_List.js */ "./node_modules/rescript/lib/es6/belt_List.js");
/* harmony import */ var rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rescript/lib/es6/belt_Array.js */ "./node_modules/rescript/lib/es6/belt_Array.js");
/* harmony import */ var _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../calc/DNA.bs.js */ "./src/core/calc/DNA.bs.js");
/* harmony import */ var _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calc/Calc.bs.js */ "./src/core/calc/Calc.bs.js");
/* harmony import */ var _Expr_bs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Expr.bs.js */ "./src/core/form/Expr.bs.js");
/* harmony import */ var _calc_SeqRE_bs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calc/SeqRE.bs.js */ "./src/core/calc/SeqRE.bs.js");
/* harmony import */ var rescript_lib_es6_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! rescript/lib/es6/caml_exceptions.js */ "./node_modules/rescript/lib/es6/caml_exceptions.js");
// Generated by ReScript, PLEASE EDIT WITH CARE









function toString(token) {
  if (typeof token === "number") {
    switch (token) {
      case /* OptSep */0 :
          return "|";
      case /* SeqSep */1 :
          return ",";
      case /* SeqRE_open */2 :
          return "open";
      case /* SeqRE_alt */3 :
          return "alt";
      case /* ExprSep */4 :
          return ".";
      
    }
  } else {
    switch (token.TAG | 0) {
      case /* Mark */0 :
          if (token._0) {
            return ")";
          } else {
            return "(";
          }
      case /* SeqRE */1 :
          if (token._0) {
            return "}";
          } else {
            return "{";
          }
      case /* Const */2 :
          return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_3__.Const.show(token._0);
      case /* Var */3 :
          var lbl = token._0;
          if (lbl.length > 1) {
            return "\"" + lbl + "\"";
          } else {
            return lbl;
          }
      case /* Uncl */4 :
          return "/" + token._0 + "/";
      case /* SeqRE_sig */5 :
          return _calc_SeqRE_bs_js__WEBPACK_IMPORTED_MODULE_5__.showSig(token._0);
      case /* SeqRE_par */6 :
          switch (token._0) {
            case /* Even */0 :
                return "2r";
            case /* Odd */1 :
                return "2r+1";
            case /* Any */2 :
                return "";
            
          }
      case /* DNA */7 :
          return _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_2__.show(token.sortNMUI, undefined, token.code);
      case /* VarList */8 :
          return "[" + token._0.join(",") + "]";
      
    }
  }
}

var Token = {
  toString: toString
};

var LexError = /* @__PURE__ */rescript_lib_es6_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_6__.create("Formula-Formform.Lexer.LexError");

function scanLabel(delim, stream) {
  var _scan = function (_stream, _lbl) {
    while(true) {
      var lbl = _lbl;
      var stream = _stream;
      if (stream) {
        var r = stream.tl;
        var d = stream.hd;
        if (d === delim) {
          return [
                  lbl,
                  r
                ];
        }
        _lbl = lbl + d;
        _stream = r;
        continue ;
      }
      throw {
            RE_EXN_ID: LexError,
            msg: "Closing '" + delim + "' is missing!",
            Error: new Error()
          };
    };
  };
  var match = _scan(stream, "");
  var lbl = match[0];
  if (lbl !== "") {
    return [
            lbl,
            match[1]
          ];
  }
  throw {
        RE_EXN_ID: LexError,
        msg: "Label should not be empty!",
        Error: new Error()
      };
}

function scanList(delim, stream) {
  var _scan = function (_stream, arr) {
    while(true) {
      var stream = _stream;
      if (stream) {
        var d = stream.hd;
        if (d === " ") {
          _stream = stream.tl;
          continue ;
        }
        if (d === delim) {
          if (arr.length !== 0) {
            throw {
                  RE_EXN_ID: LexError,
                  msg: "comma-separated list item must not be empty!",
                  Error: new Error()
                };
          }
          return [
                  arr,
                  stream.tl
                ];
        }
        if (d === "\"") {
          var match = scanLabel("\"", stream.tl);
          return _scanNext(match[1], rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(arr, [match[0]]));
        }
        var r = stream.tl;
        if (r && r.hd === "_") {
          var match$1 = r.tl;
          if (match$1) {
            var idx = match$1.hd;
            if (_Expr_bs_js__WEBPACK_IMPORTED_MODULE_4__.lblClass_unquoted.includes(d) && _Expr_bs_js__WEBPACK_IMPORTED_MODULE_4__.idxClass_unquoted.includes(idx)) {
              return _scanNext(match$1.tl, rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(arr, [d + "_" + idx]));
            }
            
          }
          
        }
        if (_Expr_bs_js__WEBPACK_IMPORTED_MODULE_4__.lblClass_unquoted.includes(d)) {
          return _scanNext(r, rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(arr, [d]));
        }
        throw {
              RE_EXN_ID: LexError,
              msg: "Unable to interpret '" + d + "'.",
              Error: new Error()
            };
      }
      throw {
            RE_EXN_ID: LexError,
            msg: "Closing '" + delim + "' is missing!",
            Error: new Error()
          };
    };
  };
  var _scanNext = function (_stream, arr) {
    while(true) {
      var stream = _stream;
      if (stream) {
        var d = stream.hd;
        switch (d) {
          case " " :
              _stream = stream.tl;
              continue ;
          case "," :
              return _scan(stream.tl, arr);
          default:
            if (d === delim) {
              return [
                      arr,
                      stream.tl
                    ];
            }
            
        }
      }
      throw {
            RE_EXN_ID: LexError,
            msg: "Expected ',' or '" + delim + "'.",
            Error: new Error()
          };
    };
  };
  return _scan(stream, []);
}

function scanDNA(sortNMUI, stream) {
  var _scan = function (_stream, _arr) {
    while(true) {
      var arr = _arr;
      var stream = _stream;
      if (!stream) {
        return [
                arr,
                stream
              ];
      }
      switch (stream.hd) {
        case " " :
            _stream = stream.tl;
            continue ;
        case "0" :
            _arr = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(arr, [0]);
            _stream = stream.tl;
            continue ;
        case "1" :
            _arr = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(arr, [1]);
            _stream = stream.tl;
            continue ;
        case "2" :
            _arr = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(arr, [2]);
            _stream = stream.tl;
            continue ;
        case "3" :
            _arr = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(arr, [3]);
            _stream = stream.tl;
            continue ;
        default:
          return [
                  arr,
                  stream
                ];
      }
    };
  };
  var match = _scan(stream, []);
  var dna = _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_2__.fromIntArr(sortNMUI, match[0]);
  if (dna !== undefined) {
    return [
            dna,
            match[1]
          ];
  }
  throw {
        RE_EXN_ID: LexError,
        msg: "Invalid formDNA!",
        Error: new Error()
      };
}

function scanFml(_stream) {
  while(true) {
    var stream = _stream;
    if (!stream) {
      return /* [] */0;
    }
    var unicode = stream.hd;
    var exit = 0;
    var exit$1 = 0;
    switch (unicode) {
      case " " :
          _stream = stream.tl;
          continue ;
      case "(" :
          return {
                  hd: {
                    TAG: /* Mark */0,
                    _0: /* Open */0
                  },
                  tl: scanFml(stream.tl)
                };
      case ")" :
          return {
                  hd: {
                    TAG: /* Mark */0,
                    _0: /* Close */1
                  },
                  tl: scanFml(stream.tl)
                };
      case ":" :
          var match = stream.tl;
          if (match) {
            if (match.hd === ":") {
              var match$1 = scanDNA(true, match.tl);
              return {
                      hd: {
                        TAG: /* DNA */7,
                        sortNMUI: true,
                        code: match$1[0]
                      },
                      tl: scanFml(match$1[1])
                    };
            }
            exit$1 = 2;
          } else {
            exit$1 = 2;
          }
          break;
      case "I" :
          return {
                  hd: {
                    TAG: /* Const */2,
                    _0: /* I */2
                  },
                  tl: scanFml(stream.tl)
                };
      case "M" :
          return {
                  hd: {
                    TAG: /* Const */2,
                    _0: /* M */3
                  },
                  tl: scanFml(stream.tl)
                };
      case "N" :
          return {
                  hd: {
                    TAG: /* Const */2,
                    _0: /* N */0
                  },
                  tl: scanFml(stream.tl)
                };
      case "U" :
          return {
                  hd: {
                    TAG: /* Const */2,
                    _0: /* U */1
                  },
                  tl: scanFml(stream.tl)
                };
      case "{" :
          return {
                  hd: {
                    TAG: /* SeqRE */1,
                    _0: /* Open */0
                  },
                  tl: scanFml(stream.tl)
                };
      case "}" :
          return {
                  hd: {
                    TAG: /* SeqRE */1,
                    _0: /* Close */1
                  },
                  tl: scanFml(stream.tl)
                };
      default:
        exit$1 = 2;
    }
    if (exit$1 === 2) {
      if (unicode === "⁘") {
        var match$2 = scanDNA(false, stream.tl);
        return {
                hd: {
                  TAG: /* DNA */7,
                  sortNMUI: false,
                  code: match$2[0]
                },
                tl: scanFml(match$2[1])
              };
      }
      switch (unicode) {
        case "\"" :
            var match$3 = scanLabel("\"", stream.tl);
            return {
                    hd: {
                      TAG: /* Var */3,
                      _0: match$3[0]
                    },
                    tl: scanFml(match$3[1])
                  };
        case "," :
            return {
                    hd: /* SeqSep */1,
                    tl: scanFml(stream.tl)
                  };
        case "." :
            var r = stream.tl;
            if (!r) {
              return {
                      hd: /* ExprSep */4,
                      tl: scanFml(r)
                    };
            }
            if (r.hd !== ".") {
              return {
                      hd: /* ExprSep */4,
                      tl: scanFml(r)
                    };
            }
            var match$4 = r.tl;
            if (!match$4) {
              return {
                      hd: /* ExprSep */4,
                      tl: scanFml(r)
                    };
            }
            if (match$4.hd !== "@") {
              return {
                      hd: /* ExprSep */4,
                      tl: scanFml(r)
                    };
            }
            var r$1 = match$4.tl;
            if (!r$1) {
              return {
                      hd: {
                        TAG: /* SeqRE_sig */5,
                        _0: {
                          reEntryPar: /* Even */0,
                          unmarked: false,
                          interpr: /* RecInstr */0
                        }
                      },
                      tl: scanFml(r$1)
                    };
            }
            switch (r$1.hd) {
              case "." :
                  var r$2 = r$1.tl;
                  if (r$2 && r$2.hd === "_") {
                    return {
                            hd: {
                              TAG: /* SeqRE_sig */5,
                              _0: {
                                reEntryPar: /* Odd */1,
                                unmarked: true,
                                interpr: /* RecInstr */0
                              }
                            },
                            tl: scanFml(r$2.tl)
                          };
                  } else {
                    return {
                            hd: {
                              TAG: /* SeqRE_sig */5,
                              _0: {
                                reEntryPar: /* Odd */1,
                                unmarked: false,
                                interpr: /* RecInstr */0
                              }
                            },
                            tl: scanFml(r$2)
                          };
                  }
              case "_" :
                  return {
                          hd: {
                            TAG: /* SeqRE_sig */5,
                            _0: {
                              reEntryPar: /* Even */0,
                              unmarked: true,
                              interpr: /* RecInstr */0
                            }
                          },
                          tl: scanFml(r$1.tl)
                        };
              case "~" :
                  var r$3 = r$1.tl;
                  if (!r$3) {
                    return {
                            hd: {
                              TAG: /* SeqRE_sig */5,
                              _0: {
                                reEntryPar: /* Even */0,
                                unmarked: false,
                                interpr: /* RecIdent */1
                              }
                            },
                            tl: scanFml(r$3)
                          };
                  }
                  switch (r$3.hd) {
                    case "." :
                        var r$4 = r$3.tl;
                        if (r$4 && r$4.hd === "_") {
                          return {
                                  hd: {
                                    TAG: /* SeqRE_sig */5,
                                    _0: {
                                      reEntryPar: /* Odd */1,
                                      unmarked: true,
                                      interpr: /* RecIdent */1
                                    }
                                  },
                                  tl: scanFml(r$4.tl)
                                };
                        } else {
                          return {
                                  hd: {
                                    TAG: /* SeqRE_sig */5,
                                    _0: {
                                      reEntryPar: /* Odd */1,
                                      unmarked: false,
                                      interpr: /* RecIdent */1
                                    }
                                  },
                                  tl: scanFml(r$4)
                                };
                        }
                    case "_" :
                        return {
                                hd: {
                                  TAG: /* SeqRE_sig */5,
                                  _0: {
                                    reEntryPar: /* Even */0,
                                    unmarked: true,
                                    interpr: /* RecIdent */1
                                  }
                                },
                                tl: scanFml(r$3.tl)
                              };
                    default:
                      return {
                              hd: {
                                TAG: /* SeqRE_sig */5,
                                _0: {
                                  reEntryPar: /* Even */0,
                                  unmarked: false,
                                  interpr: /* RecIdent */1
                                }
                              },
                              tl: scanFml(r$3)
                            };
                  }
              default:
                return {
                        hd: {
                          TAG: /* SeqRE_sig */5,
                          _0: {
                            reEntryPar: /* Even */0,
                            unmarked: false,
                            interpr: /* RecInstr */0
                          }
                        },
                        tl: scanFml(r$1)
                      };
            }
        case "/" :
            var match$5 = scanLabel("/", stream.tl);
            return {
                    hd: {
                      TAG: /* Uncl */4,
                      _0: match$5[0]
                    },
                    tl: scanFml(match$5[1])
                  };
        case "2" :
            var match$6 = stream.tl;
            if (match$6) {
              if (match$6.hd === "r") {
                var r$5 = match$6.tl;
                if (!r$5) {
                  return {
                          hd: {
                            TAG: /* SeqRE_par */6,
                            _0: /* Even */0
                          },
                          tl: scanFml(r$5)
                        };
                }
                if (r$5.hd !== "+") {
                  return {
                          hd: {
                            TAG: /* SeqRE_par */6,
                            _0: /* Even */0
                          },
                          tl: scanFml(r$5)
                        };
                }
                var match$7 = r$5.tl;
                if (match$7 && match$7.hd === "1") {
                  return {
                          hd: {
                            TAG: /* SeqRE_par */6,
                            _0: /* Odd */1
                          },
                          tl: scanFml(match$7.tl)
                        };
                } else {
                  return {
                          hd: {
                            TAG: /* SeqRE_par */6,
                            _0: /* Even */0
                          },
                          tl: scanFml(r$5)
                        };
                }
              }
              exit = 1;
            } else {
              exit = 1;
            }
            break;
        case "@" :
            var r$6 = stream.tl;
            if (!r$6) {
              return {
                      hd: {
                        TAG: /* SeqRE_sig */5,
                        _0: {
                          reEntryPar: /* Any */2,
                          unmarked: false,
                          interpr: /* RecInstr */0
                        }
                      },
                      tl: scanFml(r$6)
                    };
            }
            switch (r$6.hd) {
              case "_" :
                  return {
                          hd: {
                            TAG: /* SeqRE_sig */5,
                            _0: {
                              reEntryPar: /* Any */2,
                              unmarked: true,
                              interpr: /* RecInstr */0
                            }
                          },
                          tl: scanFml(r$6.tl)
                        };
              case "~" :
                  var r$7 = r$6.tl;
                  if (r$7 && r$7.hd === "_") {
                    return {
                            hd: {
                              TAG: /* SeqRE_sig */5,
                              _0: {
                                reEntryPar: /* Any */2,
                                unmarked: true,
                                interpr: /* RecIdent */1
                              }
                            },
                            tl: scanFml(r$7.tl)
                          };
                  } else {
                    return {
                            hd: {
                              TAG: /* SeqRE_sig */5,
                              _0: {
                                reEntryPar: /* Any */2,
                                unmarked: false,
                                interpr: /* RecIdent */1
                              }
                            },
                            tl: scanFml(r$7)
                          };
                  }
              default:
                return {
                        hd: {
                          TAG: /* SeqRE_sig */5,
                          _0: {
                            reEntryPar: /* Any */2,
                            unmarked: false,
                            interpr: /* RecInstr */0
                          }
                        },
                        tl: scanFml(r$6)
                      };
            }
        case "[" :
            var match$8 = scanList("]", stream.tl);
            return {
                    hd: {
                      TAG: /* VarList */8,
                      _0: match$8[0]
                    },
                    tl: scanFml(match$8[1])
                  };
        case "a" :
            var match$9 = stream.tl;
            if (match$9 && match$9.hd === "l") {
              var match$10 = match$9.tl;
              if (match$10) {
                if (match$10.hd === "t") {
                  return {
                          hd: /* SeqRE_alt */3,
                          tl: scanFml(match$10.tl)
                        };
                }
                exit = 1;
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case "o" :
            var match$11 = stream.tl;
            if (match$11 && match$11.hd === "p") {
              var match$12 = match$11.tl;
              if (match$12 && match$12.hd === "e") {
                var match$13 = match$12.tl;
                if (match$13) {
                  if (match$13.hd === "n") {
                    return {
                            hd: /* SeqRE_open */2,
                            tl: scanFml(match$13.tl)
                          };
                  }
                  exit = 1;
                } else {
                  exit = 1;
                }
              } else {
                exit = 1;
              }
            } else {
              exit = 1;
            }
            break;
        case "|" :
            return {
                    hd: /* OptSep */0,
                    tl: scanFml(stream.tl)
                  };
        default:
          exit = 1;
      }
    }
    if (exit === 1) {
      var r$8 = stream.tl;
      var exit$2 = 0;
      if (r$8 && r$8.hd === "_") {
        var match$14 = r$8.tl;
        if (match$14) {
          var idx = match$14.hd;
          if (_Expr_bs_js__WEBPACK_IMPORTED_MODULE_4__.lblClass_unquoted.includes(unicode) && _Expr_bs_js__WEBPACK_IMPORTED_MODULE_4__.idxClass_unquoted.includes(idx)) {
            return {
                    hd: {
                      TAG: /* Var */3,
                      _0: unicode + "_" + idx
                    },
                    tl: scanFml(match$14.tl)
                  };
          }
          exit$2 = 2;
        } else {
          exit$2 = 2;
        }
      } else {
        exit$2 = 2;
      }
      if (exit$2 === 2) {
        if (_Expr_bs_js__WEBPACK_IMPORTED_MODULE_4__.lblClass_unquoted.includes(unicode)) {
          return {
                  hd: {
                    TAG: /* Var */3,
                    _0: unicode
                  },
                  tl: scanFml(r$8)
                };
        }
        throw {
              RE_EXN_ID: LexError,
              msg: "Unable to interpret '" + unicode + "'.",
              Error: new Error()
            };
      }
      
    }
    
  };
}

function scan(input) {
  return scanFml(rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_0__.fromArray(input.split("")));
}

var ParseError = /* @__PURE__ */rescript_lib_es6_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_6__.create("Formula-Formform.Parser.ParseError");

function parseSeqRE_sig(stream) {
  if (stream) {
    var sig = stream.hd;
    if (typeof sig === "number") {
      switch (sig) {
        case /* SeqRE_open */2 :
            var match = stream.tl;
            if (match && match.hd === 0) {
              var r = match.tl;
              var exit = 0;
              if (r) {
                var par = r.hd;
                if (typeof par === "number") {
                  if (par === /* SeqRE_alt */3) {
                    var match$1 = r.tl;
                    if (match$1 && match$1.hd === 0) {
                      var r$p = match$1.tl;
                      var exit$1 = 0;
                      if (r$p) {
                        var par$1 = r$p.hd;
                        if (typeof par$1 === "number" || par$1.TAG !== /* SeqRE_par */6) {
                          exit$1 = 3;
                        } else {
                          var match$2 = r$p.tl;
                          if (match$2) {
                            if (match$2.hd === 0) {
                              return [
                                      {
                                        reEntryPar: par$1._0,
                                        unmarked: true,
                                        interpr: /* RecIdent */1
                                      },
                                      match$2.tl
                                    ];
                            }
                            exit$1 = 3;
                          } else {
                            exit$1 = 3;
                          }
                        }
                      } else {
                        exit$1 = 3;
                      }
                      if (exit$1 === 3) {
                        return [
                                {
                                  reEntryPar: /* Any */2,
                                  unmarked: true,
                                  interpr: /* RecIdent */1
                                },
                                r$p
                              ];
                      }
                      
                    } else {
                      exit = 2;
                    }
                  } else {
                    exit = 2;
                  }
                } else if (par.TAG === /* SeqRE_par */6) {
                  var match$3 = r.tl;
                  if (match$3 && match$3.hd === 0) {
                    var r$p$1 = match$3.tl;
                    var par$2 = par._0;
                    var exit$2 = 0;
                    if (r$p$1 && r$p$1.hd === 3) {
                      var match$4 = r$p$1.tl;
                      if (match$4) {
                        if (match$4.hd === 0) {
                          return [
                                  {
                                    reEntryPar: par$2,
                                    unmarked: true,
                                    interpr: /* RecIdent */1
                                  },
                                  match$4.tl
                                ];
                        }
                        exit$2 = 3;
                      } else {
                        exit$2 = 3;
                      }
                    } else {
                      exit$2 = 3;
                    }
                    if (exit$2 === 3) {
                      return [
                              {
                                reEntryPar: par$2,
                                unmarked: true,
                                interpr: /* RecInstr */0
                              },
                              r$p$1
                            ];
                    }
                    
                  } else {
                    exit = 2;
                  }
                } else {
                  exit = 2;
                }
              } else {
                exit = 2;
              }
              if (exit === 2) {
                return [
                        {
                          reEntryPar: /* Any */2,
                          unmarked: true,
                          interpr: /* RecInstr */0
                        },
                        r
                      ];
              }
              
            }
            break;
        case /* SeqRE_alt */3 :
            var match$5 = stream.tl;
            if (match$5 && match$5.hd === 0) {
              var r$1 = match$5.tl;
              var exit$3 = 0;
              if (r$1) {
                var par$3 = r$1.hd;
                if (typeof par$3 === "number") {
                  if (par$3 === /* SeqRE_open */2) {
                    var match$6 = r$1.tl;
                    if (match$6 && match$6.hd === 0) {
                      var r$p$2 = match$6.tl;
                      var exit$4 = 0;
                      if (r$p$2) {
                        var par$4 = r$p$2.hd;
                        if (typeof par$4 === "number" || par$4.TAG !== /* SeqRE_par */6) {
                          exit$4 = 3;
                        } else {
                          var match$7 = r$p$2.tl;
                          if (match$7) {
                            if (match$7.hd === 0) {
                              return [
                                      {
                                        reEntryPar: par$4._0,
                                        unmarked: true,
                                        interpr: /* RecIdent */1
                                      },
                                      match$7.tl
                                    ];
                            }
                            exit$4 = 3;
                          } else {
                            exit$4 = 3;
                          }
                        }
                      } else {
                        exit$4 = 3;
                      }
                      if (exit$4 === 3) {
                        return [
                                {
                                  reEntryPar: /* Any */2,
                                  unmarked: true,
                                  interpr: /* RecIdent */1
                                },
                                r$p$2
                              ];
                      }
                      
                    } else {
                      exit$3 = 2;
                    }
                  } else {
                    exit$3 = 2;
                  }
                } else if (par$3.TAG === /* SeqRE_par */6) {
                  var match$8 = r$1.tl;
                  if (match$8 && match$8.hd === 0) {
                    var r$p$3 = match$8.tl;
                    var par$5 = par$3._0;
                    var exit$5 = 0;
                    if (r$p$3 && r$p$3.hd === 2) {
                      var match$9 = r$p$3.tl;
                      if (match$9) {
                        if (match$9.hd === 0) {
                          return [
                                  {
                                    reEntryPar: par$5,
                                    unmarked: true,
                                    interpr: /* RecIdent */1
                                  },
                                  match$9.tl
                                ];
                        }
                        exit$5 = 3;
                      } else {
                        exit$5 = 3;
                      }
                    } else {
                      exit$5 = 3;
                    }
                    if (exit$5 === 3) {
                      return [
                              {
                                reEntryPar: par$5,
                                unmarked: false,
                                interpr: /* RecIdent */1
                              },
                              r$p$3
                            ];
                    }
                    
                  } else {
                    exit$3 = 2;
                  }
                } else {
                  exit$3 = 2;
                }
              } else {
                exit$3 = 2;
              }
              if (exit$3 === 2) {
                return [
                        {
                          reEntryPar: /* Any */2,
                          unmarked: false,
                          interpr: /* RecIdent */1
                        },
                        r$1
                      ];
              }
              
            }
            break;
        default:
          
      }
    } else {
      switch (sig.TAG | 0) {
        case /* SeqRE_sig */5 :
            return [
                    sig._0,
                    stream.tl
                  ];
        case /* SeqRE_par */6 :
            var match$10 = stream.tl;
            if (match$10 && match$10.hd === 0) {
              var r$2 = match$10.tl;
              var par$6 = sig._0;
              var exit$6 = 0;
              if (r$2) {
                var match$11 = r$2.hd;
                if (typeof match$11 === "number" && match$11 >= 2) {
                  switch (match$11) {
                    case /* SeqRE_open */2 :
                        var match$12 = r$2.tl;
                        if (match$12 && match$12.hd === 0) {
                          var r$p$4 = match$12.tl;
                          var exit$7 = 0;
                          if (r$p$4 && r$p$4.hd === 3) {
                            var match$13 = r$p$4.tl;
                            if (match$13) {
                              if (match$13.hd === 0) {
                                return [
                                        {
                                          reEntryPar: par$6,
                                          unmarked: true,
                                          interpr: /* RecIdent */1
                                        },
                                        match$13.tl
                                      ];
                              }
                              exit$7 = 3;
                            } else {
                              exit$7 = 3;
                            }
                          } else {
                            exit$7 = 3;
                          }
                          if (exit$7 === 3) {
                            return [
                                    {
                                      reEntryPar: par$6,
                                      unmarked: true,
                                      interpr: /* RecInstr */0
                                    },
                                    r$p$4
                                  ];
                          }
                          
                        } else {
                          exit$6 = 2;
                        }
                        break;
                    case /* SeqRE_alt */3 :
                        var match$14 = r$2.tl;
                        if (match$14 && match$14.hd === 0) {
                          var r$p$5 = match$14.tl;
                          var exit$8 = 0;
                          if (r$p$5 && r$p$5.hd === 2) {
                            var match$15 = r$p$5.tl;
                            if (match$15) {
                              if (match$15.hd === 0) {
                                return [
                                        {
                                          reEntryPar: par$6,
                                          unmarked: true,
                                          interpr: /* RecIdent */1
                                        },
                                        match$15.tl
                                      ];
                              }
                              exit$8 = 3;
                            } else {
                              exit$8 = 3;
                            }
                          } else {
                            exit$8 = 3;
                          }
                          if (exit$8 === 3) {
                            return [
                                    {
                                      reEntryPar: par$6,
                                      unmarked: false,
                                      interpr: /* RecIdent */1
                                    },
                                    r$p$5
                                  ];
                          }
                          
                        } else {
                          exit$6 = 2;
                        }
                        break;
                    case /* ExprSep */4 :
                        exit$6 = 2;
                        break;
                    
                  }
                } else {
                  exit$6 = 2;
                }
              } else {
                exit$6 = 2;
              }
              if (exit$6 === 2) {
                return [
                        {
                          reEntryPar: par$6,
                          unmarked: false,
                          interpr: /* RecInstr */0
                        },
                        r$2
                      ];
              }
              
            }
            break;
        default:
          
      }
    }
  }
  return [
          {
            reEntryPar: /* Any */2,
            unmarked: false,
            interpr: /* RecInstr */0
          },
          stream
        ];
}

function parseExpr(_unmarkedOpt, _inSeqOpt, _stream, _expr) {
  while(true) {
    var unmarkedOpt = _unmarkedOpt;
    var inSeqOpt = _inSeqOpt;
    var expr = _expr;
    var stream = _stream;
    var unmarked = unmarkedOpt !== undefined ? unmarkedOpt : false;
    var inSeq = inSeqOpt !== undefined ? inSeqOpt : false;
    if (stream) {
      var c = stream.hd;
      if (typeof c === "number") {
        switch (c) {
          case /* SeqSep */1 :
              if (inSeq) {
                return [
                        expr,
                        stream
                      ];
              }
              break;
          case /* ExprSep */4 :
              var match = stream.tl;
              if (match) {
                var arr = match.hd;
                if (typeof arr !== "number" && arr.TAG === /* VarList */8) {
                  var match$1 = match.tl;
                  if (match$1) {
                    var match$2 = match$1.hd;
                    if (typeof match$2 !== "number" && match$2.TAG === /* DNA */7) {
                      _expr = [{
                          TAG: /* FDna */5,
                          _0: {
                            dna: match$2.code,
                            form: expr,
                            vars: arr._0
                          }
                        }];
                      _stream = match$1.tl;
                      _inSeqOpt = inSeq;
                      _unmarkedOpt = unmarked;
                      continue ;
                    }
                    
                  }
                  
                }
                
              }
              break;
          default:
            
        }
      } else {
        switch (c.TAG | 0) {
          case /* Mark */0 :
              if (c._0) {
                if (!unmarked) {
                  return [
                          expr,
                          stream.tl
                        ];
                }
                if (unmarked) {
                  throw {
                        RE_EXN_ID: ParseError,
                        msg: "Missing '(' to open FORM.",
                        Error: new Error()
                      };
                }
                
              } else {
                var match$3 = parseExpr(undefined, undefined, stream.tl, []);
                _expr = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(expr, [{
                        TAG: /* Mark */0,
                        _0: match$3[0]
                      }]);
                _stream = match$3[1];
                _inSeqOpt = inSeq;
                _unmarkedOpt = unmarked;
                continue ;
              }
              break;
          case /* SeqRE */1 :
              if (c._0) {
                if (inSeq) {
                  return [
                          expr,
                          stream
                        ];
                }
                if (!inSeq) {
                  throw {
                        RE_EXN_ID: ParseError,
                        msg: "Missing '{' to open re-entry FORM.",
                        Error: new Error()
                      };
                }
                
              } else {
                var match$4 = parseSeqRE_sig(stream.tl);
                var match$5 = parseSeq(match$4[1], /* [] */0);
                _expr = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(expr, [{
                        TAG: /* SeqRE */2,
                        _0: match$4[0],
                        _1: match$5[0]
                      }]);
                _stream = match$5[1];
                _inSeqOpt = inSeq;
                _unmarkedOpt = unmarked;
                continue ;
              }
              break;
          case /* Const */2 :
              _expr = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(expr, [{
                      TAG: /* CVal */1,
                      _0: c._0
                    }]);
              _stream = stream.tl;
              _inSeqOpt = inSeq;
              _unmarkedOpt = unmarked;
              continue ;
          case /* Var */3 :
              _expr = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(expr, [{
                      TAG: /* FVar */4,
                      _0: c._0
                    }]);
              _stream = stream.tl;
              _inSeqOpt = inSeq;
              _unmarkedOpt = unmarked;
              continue ;
          case /* Uncl */4 :
              _expr = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(expr, [{
                      TAG: /* Uncl */3,
                      _0: c._0
                    }]);
              _stream = stream.tl;
              _inSeqOpt = inSeq;
              _unmarkedOpt = unmarked;
              continue ;
          case /* DNA */7 :
              _expr = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(expr, [{
                      TAG: /* FDna */5,
                      _0: {
                        dna: c.code,
                        form: undefined,
                        vars: undefined
                      }
                    }]);
              _stream = stream.tl;
              _inSeqOpt = inSeq;
              _unmarkedOpt = unmarked;
              continue ;
          case /* VarList */8 :
              var match$6 = stream.tl;
              if (match$6) {
                var match$7 = match$6.hd;
                if (typeof match$7 !== "number" && match$7.TAG === /* DNA */7) {
                  _expr = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(expr, [{
                          TAG: /* FDna */5,
                          _0: {
                            dna: match$7.code,
                            form: undefined,
                            vars: c._0
                          }
                        }]);
                  _stream = match$6.tl;
                  _inSeqOpt = inSeq;
                  _unmarkedOpt = unmarked;
                  continue ;
                }
                
              }
              break;
          default:
            
        }
      }
      throw {
            RE_EXN_ID: ParseError,
            msg: "Invalid token '" + toString(c) + "'!",
            Error: new Error()
          };
    }
    if (unmarked) {
      return [
              expr,
              /* [] */0
            ];
    }
    throw {
          RE_EXN_ID: ParseError,
          msg: "Missing ')' to close FORM.",
          Error: new Error()
        };
  };
}

function parseSeq(_stream, _seq) {
  while(true) {
    var seq = _seq;
    var stream = _stream;
    if (stream) {
      var match = parseExpr(true, true, stream, []);
      var r$p = match[1];
      var expr = match[0];
      if (r$p) {
        var match$1 = r$p.hd;
        if (typeof match$1 === "number") {
          if (match$1 === /* SeqSep */1) {
            var r$p$p = r$p.tl;
            if (r$p$p) {
              var match$2 = r$p$p.hd;
              if (typeof match$2 !== "number" && match$2.TAG === /* SeqRE */1 && match$2._0) {
                return [
                        {
                          hd: [],
                          tl: {
                            hd: expr,
                            tl: seq
                          }
                        },
                        r$p$p.tl
                      ];
              }
              
            }
            _seq = {
              hd: expr,
              tl: seq
            };
            _stream = r$p$p;
            continue ;
          }
          throw {
                RE_EXN_ID: ParseError,
                msg: "Missing '}' to close re-entry FORM.",
                Error: new Error()
              };
        } else {
          if (match$1.TAG === /* SeqRE */1) {
            if (match$1._0) {
              return [
                      {
                        hd: expr,
                        tl: seq
                      },
                      r$p.tl
                    ];
            }
            throw {
                  RE_EXN_ID: ParseError,
                  msg: "Missing '}' to close re-entry FORM.",
                  Error: new Error()
                };
          }
          throw {
                RE_EXN_ID: ParseError,
                msg: "Missing '}' to close re-entry FORM.",
                Error: new Error()
              };
        }
      } else {
        throw {
              RE_EXN_ID: ParseError,
              msg: "Missing '}' to close re-entry FORM.",
              Error: new Error()
            };
      }
    } else {
      throw {
            RE_EXN_ID: ParseError,
            msg: "Missing '}' to close re-entry FORM.",
            Error: new Error()
          };
    }
  };
}

function parse(stream) {
  var match = parseExpr(true, undefined, stream, []);
  if (rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_0__.length(match[1]) > 0) {
    throw {
          RE_EXN_ID: ParseError,
          msg: "Broken parse tree!",
          Error: new Error()
        };
  }
  return match[0];
}

function read(formula) {
  return parse(scan(formula));
}

var Lexer = {
  LexError: LexError,
  scan: scan
};

var Parser = {
  ParseError: ParseError,
  parse: parse
};


/* DNA-Formform Not a pure module */


/***/ }),

/***/ "./src/core/form/Value.bs.js":
/*!***********************************!*\
  !*** ./src/core/form/Value.bs.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "VPoint": function() { return /* binding */ VPoint; },
/* harmony export */   "VSpace": function() { return /* binding */ VSpace; },
/* harmony export */   "VMap": function() { return /* binding */ VMap; },
/* harmony export */   "VDict": function() { return /* binding */ VDict; }
/* harmony export */ });
/* harmony import */ var rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rescript/lib/es6/curry.js */ "./node_modules/rescript/lib/es6/curry.js");
/* harmony import */ var rescript_lib_es6_js_dict_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rescript/lib/es6/js_dict.js */ "./node_modules/rescript/lib/es6/js_dict.js");
/* harmony import */ var rescript_lib_es6_js_math_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rescript/lib/es6/js_math.js */ "./node_modules/rescript/lib/es6/js_math.js");
/* harmony import */ var rescript_lib_es6_belt_Int_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rescript/lib/es6/belt_Int.js */ "./node_modules/rescript/lib/es6/belt_Int.js");
/* harmony import */ var rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rescript/lib/es6/belt_Array.js */ "./node_modules/rescript/lib/es6/belt_Array.js");
/* harmony import */ var rescript_lib_es6_caml_array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rescript/lib/es6/caml_array.js */ "./node_modules/rescript/lib/es6/caml_array.js");
/* harmony import */ var _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../calc/DNA.bs.js */ "./src/core/calc/DNA.bs.js");
/* harmony import */ var _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../calc/Calc.bs.js */ "./src/core/calc/Calc.bs.js");
/* harmony import */ var _utils_JsRaw_bs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/JsRaw.bs.js */ "./src/utils/JsRaw.bs.js");
// Generated by ReScript, PLEASE EDIT WITH CARE











function show(vp) {
  return "[" + rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_4__.map(vp, (function (c) {
                  return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_7__.Const.show(c);
                })).join(",") + "]";
}

function showAsKey(vp) {
  return rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_4__.map(vp, (function (c) {
                  return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_7__.Const.showAsKey(c);
                })).join("");
}

function tFromStr(sortNMUIOpt, str) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  var maybe_vpoint = str.split("").map(function (val) {
        var n = rescript_lib_es6_belt_Int_js__WEBPACK_IMPORTED_MODULE_3__.fromString(val);
        if (n !== undefined) {
          return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_7__.Const.fromInt(sortNMUI, n);
        } else {
          return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_7__.Const.tFromStr(undefined, val);
        }
      });
  if (maybe_vpoint.every(function (v) {
          return v !== undefined;
        })) {
    return maybe_vpoint.map(function (v) {
                return v;
              });
  }
  
}

var VPoint = {
  show: show,
  showAsKey: showAsKey,
  tFromStr: tFromStr
};

function getPoints(vspace) {
  return vspace.points;
}

function getDimension(vspace) {
  return vspace.dim;
}

function make(sortNMUIOpt, dim) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  var resolution = rescript_lib_es6_js_math_js__WEBPACK_IMPORTED_MODULE_2__.floor_int(Math.pow(4.0, dim));
  var points = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_4__.makeBy(resolution, (function (i) {
          var vp_str = _utils_JsRaw_bs_js__WEBPACK_IMPORTED_MODULE_8__.padStart(i.toString(4), dim, "0");
          var vpoint = tFromStr(sortNMUI, vp_str);
          if (vpoint !== undefined) {
            return vpoint;
          }
          throw {
                RE_EXN_ID: "Not_found",
                Error: new Error()
              };
        }));
  return {
          points: points,
          dim: dim
        };
}

function toDNA(vspace, map) {
  return _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_6__.makeUnsafe(vspace.points.map(rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(map)).reverse());
}

var VSpace = {
  getPoints: getPoints,
  getDimension: getDimension,
  make: make,
  toDNA: toDNA
};

function show$1(depthOpt, vmap) {
  var depth = depthOpt !== undefined ? depthOpt : 0;
  if (vmap.TAG === /* Cell */0) {
    return "<" + _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_7__.Const.show(vmap._0) + ">";
  }
  var coords = vmap._0;
  var match = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_4__.get(coords, 0);
  var depthMax = match !== undefined && match[1].TAG === /* Cell */0 ? true : false;
  var br = depthMax ? "" : "\n";
  var indent = depthMax ? "" : "  ";
  return "[" + br + rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_4__.map(coords, (function (param) {
                  return indent.repeat(depth + 1 | 0) + (_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_7__.Const.show(param[0]) + ": " + show$1(depth + 1 | 0, param[1]));
                })).join(", " + br) + br + indent.repeat(depth) + "]";
}

function makeUnsafe_Cell(c) {
  return {
          TAG: /* Cell */0,
          _0: c
        };
}

function makeUnsafe_Map(coords) {
  return {
          TAG: /* Map */1,
          _0: coords
        };
}

function make$1(vspace, map) {
  var dim = vspace.dim;
  var aux = function (points, pos) {
    if (pos >= dim) {
      return {
              TAG: /* Cell */0,
              _0: rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(map, rescript_lib_es6_caml_array_js__WEBPACK_IMPORTED_MODULE_5__.get(points, 0))
            };
    } else {
      return {
              TAG: /* Map */1,
              _0: rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_4__.map(_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_7__.Const.tEnum(undefined, undefined), (function (posVal) {
                      var match = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_4__.partition(points, (function (vp) {
                              return rescript_lib_es6_caml_array_js__WEBPACK_IMPORTED_MODULE_5__.get(vp, pos) === posVal;
                            }));
                      return [
                              posVal,
                              aux(match[0], pos + 1 | 0)
                            ];
                    }))
            };
    }
  };
  return aux(vspace.points, 0);
}

function fromDNA(dna) {
  var dnaArr = _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_6__.toArray(dna);
  var len = Math.log(dnaArr.length) / Math.log(4.0);
  var vspace = make(undefined, rescript_lib_es6_js_math_js__WEBPACK_IMPORTED_MODULE_2__.floor_int(len));
  return make$1(vspace, (function (vp) {
                var height = vspace.dim - 1 | 0;
                var index = (_calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_6__.getLength(dna) - 1 | 0) - (
                  height < 0 ? 0 : rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_4__.reduceWithIndex(vp, 0, (function (pos, c, i) {
                            var offset = Math.pow(4.0, height - i | 0) | 0;
                            return pos + Math.imul(offset, _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_7__.Const.toInt(undefined, c)) | 0;
                          }))
                ) | 0;
                var c = _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_6__.get(dna, index);
                if (c !== undefined) {
                  return c;
                }
                throw {
                      RE_EXN_ID: "Not_found",
                      Error: new Error()
                    };
              }));
}

var VMap = {
  show: show$1,
  makeUnsafe_Cell: makeUnsafe_Cell,
  makeUnsafe_Map: makeUnsafe_Map,
  make: make$1,
  fromDNA: fromDNA
};

function show$2(vdict) {
  return "VSpace -> DNA\n" + "-------------\n" + rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_4__.map(rescript_lib_es6_js_dict_js__WEBPACK_IMPORTED_MODULE_1__.entries(vdict), (function (param) {
                  return param[0] + " -> " + _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_7__.Const.show(param[1]);
                })).join("\n");
}

function make$2(vspace, map) {
  return rescript_lib_es6_js_dict_js__WEBPACK_IMPORTED_MODULE_1__.fromArray(rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_4__.map(vspace.points, (function (vpoint) {
                    return [
                            showAsKey(vpoint),
                            rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(map, vpoint)
                          ];
                  })));
}

function fromDictUnsafe(dict) {
  return dict;
}

function fromDNA$1(dna) {
  var dnaArr = _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_6__.toArray(dna);
  var len = Math.log(dnaArr.length) / Math.log(4.0);
  var vspace = make(undefined, rescript_lib_es6_js_math_js__WEBPACK_IMPORTED_MODULE_2__.floor_int(len));
  return rescript_lib_es6_js_dict_js__WEBPACK_IMPORTED_MODULE_1__.fromArray(rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_4__.zipBy(vspace.points, dnaArr.reverse(), (function (vpoint, result) {
                    return [
                            showAsKey(vpoint),
                            result
                          ];
                  })));
}

var VDict = {
  fromDictUnsafe: fromDictUnsafe,
  show: show$2,
  make: make$2,
  fromDNA: fromDNA$1
};


/* DNA-Formform Not a pure module */


/***/ }),

/***/ "./src/core/logic/Alg.bs.js":
/*!**********************************!*\
  !*** ./src/core/logic/Alg.bs.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Isolator": function() { return /* binding */ Isolator; },
/* harmony export */   "Pattern": function() { return /* binding */ Pattern; },
/* harmony export */   "PrimAlg": function() { return /* binding */ PrimAlg; }
/* harmony export */ });
/* harmony import */ var rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rescript/lib/es6/curry.js */ "./node_modules/rescript/lib/es6/curry.js");
/* harmony import */ var rescript_lib_es6_js_exn_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rescript/lib/es6/js_exn.js */ "./node_modules/rescript/lib/es6/js_exn.js");
/* harmony import */ var rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rescript/lib/es6/belt_Array.js */ "./node_modules/rescript/lib/es6/belt_Array.js");
/* harmony import */ var rescript_lib_es6_caml_array_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rescript/lib/es6/caml_array.js */ "./node_modules/rescript/lib/es6/caml_array.js");
/* harmony import */ var _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Helper.bs.js */ "./src/utils/Helper.bs.js");
// Generated by ReScript, PLEASE EDIT WITH CARE







function n($$var) {
  return {
          TAG: /* Mark */0,
          _0: [
            {
              TAG: /* SeqRE */2,
              _0: {
                reEntryPar: /* Any */2,
                unmarked: false,
                interpr: /* RecInstr */0
              },
              _1: {
                hd: [{
                    TAG: /* Mark */0,
                    _0: [{
                        TAG: /* FVar */4,
                        _0: $$var
                      }]
                  }],
                tl: /* [] */0
              }
            },
            {
              TAG: /* SeqRE */2,
              _0: {
                reEntryPar: /* Even */0,
                unmarked: false,
                interpr: /* RecInstr */0
              },
              _1: {
                hd: [{
                    TAG: /* Mark */0,
                    _0: [{
                        TAG: /* FVar */4,
                        _0: $$var
                      }]
                  }],
                tl: /* [] */0
              }
            }
          ]
        };
}

function m($$var) {
  return {
          TAG: /* Mark */0,
          _0: [
            {
              TAG: /* SeqRE */2,
              _0: {
                reEntryPar: /* Any */2,
                unmarked: false,
                interpr: /* RecInstr */0
              },
              _1: {
                hd: [{
                    TAG: /* FVar */4,
                    _0: $$var
                  }],
                tl: /* [] */0
              }
            },
            {
              TAG: /* SeqRE */2,
              _0: {
                reEntryPar: /* Even */0,
                unmarked: false,
                interpr: /* RecInstr */0
              },
              _1: {
                hd: [{
                    TAG: /* FVar */4,
                    _0: $$var
                  }],
                tl: /* [] */0
              }
            }
          ]
        };
}

function u($$var) {
  return {
          TAG: /* Mark */0,
          _0: [
            {
              TAG: /* Mark */0,
              _0: [
                {
                  TAG: /* SeqRE */2,
                  _0: {
                    reEntryPar: /* Any */2,
                    unmarked: false,
                    interpr: /* RecInstr */0
                  },
                  _1: {
                    hd: [{
                        TAG: /* Mark */0,
                        _0: [{
                            TAG: /* FVar */4,
                            _0: $$var
                          }]
                      }],
                    tl: /* [] */0
                  }
                },
                {
                  TAG: /* FVar */4,
                  _0: $$var
                }
              ]
            },
            {
              TAG: /* Mark */0,
              _0: [
                {
                  TAG: /* SeqRE */2,
                  _0: {
                    reEntryPar: /* Even */0,
                    unmarked: false,
                    interpr: /* RecInstr */0
                  },
                  _1: {
                    hd: [{
                        TAG: /* FVar */4,
                        _0: $$var
                      }],
                    tl: /* [] */0
                  }
                },
                {
                  TAG: /* Mark */0,
                  _0: [{
                      TAG: /* FVar */4,
                      _0: $$var
                    }]
                }
              ]
            }
          ]
        };
}

function i($$var) {
  return {
          TAG: /* Mark */0,
          _0: [
            {
              TAG: /* Mark */0,
              _0: [
                {
                  TAG: /* SeqRE */2,
                  _0: {
                    reEntryPar: /* Any */2,
                    unmarked: false,
                    interpr: /* RecInstr */0
                  },
                  _1: {
                    hd: [{
                        TAG: /* FVar */4,
                        _0: $$var
                      }],
                    tl: /* [] */0
                  }
                },
                {
                  TAG: /* Mark */0,
                  _0: [{
                      TAG: /* FVar */4,
                      _0: $$var
                    }]
                }
              ]
            },
            {
              TAG: /* Mark */0,
              _0: [
                {
                  TAG: /* SeqRE */2,
                  _0: {
                    reEntryPar: /* Even */0,
                    unmarked: false,
                    interpr: /* RecInstr */0
                  },
                  _1: {
                    hd: [{
                        TAG: /* Mark */0,
                        _0: [{
                            TAG: /* FVar */4,
                            _0: $$var
                          }]
                      }],
                    tl: /* [] */0
                  }
                },
                {
                  TAG: /* FVar */4,
                  _0: $$var
                }
              ]
            }
          ]
        };
}

function get(c, $$var) {
  switch (c) {
    case /* N */0 :
        return n($$var);
    case /* U */1 :
        return u($$var);
    case /* I */2 :
        return i($$var);
    case /* M */3 :
        return m($$var);
    
  }
}

function fromVPoint(varsOpt, vp) {
  var vars = varsOpt !== undefined ? varsOpt : _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.common_vars;
  if (vars.length < vp.length) {
    throw rescript_lib_es6_js_exn_js__WEBPACK_IMPORTED_MODULE_1__.raiseRangeError("Insufficient variables in given list!");
  }
  return {
          TAG: /* Mark */0,
          _0: rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_2__.mapWithIndex(vp, (function (i, c) {
                  return {
                          TAG: /* Mark */0,
                          _0: [get(c, rescript_lib_es6_caml_array_js__WEBPACK_IMPORTED_MODULE_3__.get(vars, i))]
                        };
                }))
        };
}

var Isolator = {
  n: n,
  m: m,
  u: u,
  i: i,
  get: get,
  fromVPoint: fromVPoint
};

function apply(form, ptn) {
  var form$p = rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(ptn, form);
  if (form$p !== undefined) {
    return form$p;
  } else {
    return form;
  }
}

var Imply = {
  apply: apply
};

function applyL(form, param) {
  var form$p = rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(param[0], form);
  if (form$p !== undefined) {
    return form$p;
  } else {
    return form;
  }
}

function applyR(form, param) {
  var form$p = rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(param[1], form);
  if (form$p !== undefined) {
    return form$p;
  } else {
    return form;
  }
}

var Equiv = {
  applyL: applyL,
  applyR: applyR
};

var Pattern = {
  Imply: Imply,
  Equiv: Equiv
};

function refl$pout(form) {
  if (form.length !== 1) {
    return ;
  }
  var match = form[0];
  if (match.TAG !== /* Mark */0) {
    return ;
  }
  var match$1 = match._0;
  if (match$1.length !== 1) {
    return ;
  }
  var a = match$1[0];
  if (a.TAG === /* Mark */0) {
    return a._0;
  }
  
}

function refl$pin(form) {
  return [{
            TAG: /* Mark */0,
            _0: [{
                TAG: /* Mark */0,
                _0: form
              }]
          }];
}

var refl = [
  refl$pin,
  refl$pout
];

var PrimAlg = {
  refl: refl
};


/* Helper-Formform Not a pure module */


/***/ }),

/***/ "./src/core/logic/Eval.bs.js":
/*!***********************************!*\
  !*** ./src/core/logic/Eval.bs.js ***!
  \***********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Interpr": function() { return /* binding */ Interpr; },
/* harmony export */   "$$eval": function() { return /* binding */ $$eval; },
/* harmony export */   "evalSeq": function() { return /* binding */ evalSeq; },
/* harmony export */   "interEval": function() { return /* binding */ interEval; },
/* harmony export */   "evalAll": function() { return /* binding */ evalAll; }
/* harmony export */ });
/* harmony import */ var rescript_lib_es6_js_dict_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rescript/lib/es6/js_dict.js */ "./node_modules/rescript/lib/es6/js_dict.js");
/* harmony import */ var rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rescript/lib/es6/belt_List.js */ "./node_modules/rescript/lib/es6/belt_List.js");
/* harmony import */ var rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rescript/lib/es6/belt_Array.js */ "./node_modules/rescript/lib/es6/belt_Array.js");
/* harmony import */ var rescript_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rescript/lib/es6/caml_option.js */ "./node_modules/rescript/lib/es6/caml_option.js");
/* harmony import */ var _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../calc/DNA.bs.js */ "./src/core/calc/DNA.bs.js");
/* harmony import */ var _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../calc/Calc.bs.js */ "./src/core/calc/Calc.bs.js");
/* harmony import */ var _form_Expr_bs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../form/Expr.bs.js */ "./src/core/form/Expr.bs.js");
/* harmony import */ var _calc_SeqRE_bs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../calc/SeqRE.bs.js */ "./src/core/calc/SeqRE.bs.js");
/* harmony import */ var _form_Value_bs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../form/Value.bs.js */ "./src/core/form/Value.bs.js");
// Generated by ReScript, PLEASE EDIT WITH CARE











var toVPoint = rescript_lib_es6_js_dict_js__WEBPACK_IMPORTED_MODULE_0__.values;

function fromVPoint(vp, vars) {
  if (vp.length !== vars.length) {
    return ;
  }
  var interpr_arr = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_2__.mapWithIndex(vp, (function (i, c) {
          return [
                  vars[i],
                  c
                ];
        }));
  return rescript_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_3__.some(rescript_lib_es6_js_dict_js__WEBPACK_IMPORTED_MODULE_0__.fromArray(interpr_arr));
}

function interpretExpr(expr, intpr) {
  return expr.map(function (form) {
              switch (form.TAG | 0) {
                case /* Mark */0 :
                    return {
                            TAG: /* Mark */0,
                            _0: interpretExpr(form._0, intpr)
                          };
                case /* CVal */1 :
                    return {
                            TAG: /* CVal */1,
                            _0: form._0
                          };
                case /* SeqRE */2 :
                    return {
                            TAG: /* SeqRE */2,
                            _0: form._0,
                            _1: interpretSeq(form._1, intpr)
                          };
                case /* Uncl */3 :
                    return {
                            TAG: /* Uncl */3,
                            _0: form._0
                          };
                case /* FVar */4 :
                    var maybeVal = rescript_lib_es6_js_dict_js__WEBPACK_IMPORTED_MODULE_0__.get(intpr, form._0);
                    if (maybeVal !== undefined) {
                      return {
                              TAG: /* CVal */1,
                              _0: maybeVal
                            };
                    }
                    throw {
                          RE_EXN_ID: "Not_found",
                          Error: new Error()
                        };
                case /* FDna */5 :
                    return {
                            TAG: /* FDna */5,
                            _0: interpretFdna(form._0, intpr)
                          };
                
              }
            });
}

function interpretFdna(param, intpr) {
  var form = param.form;
  var formCon = form !== undefined ? interpretExpr(form, intpr) : undefined;
  return {
          dna: param.dna,
          form: formCon,
          vars: undefined
        };
}

function interpretSeq(seq, intpr) {
  return rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_1__.map(seq, (function (expr) {
                return interpretExpr(expr, intpr);
              }));
}

function evalForm(form) {
  switch (form.TAG | 0) {
    case /* Mark */0 :
        var expr = form._0;
        if (expr.length !== 0) {
          return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_5__.Const.inv(evalExpr(expr));
        } else {
          return /* M */3;
        }
    case /* CVal */1 :
        return form._0;
    case /* SeqRE */2 :
        return _calc_SeqRE_bs_js__WEBPACK_IMPORTED_MODULE_7__.calcRE(form._0, nestedEval(form._1));
    case /* Uncl */3 :
        return /* U */1;
    case /* FDna */5 :
        return /* N */0;
    
  }
}

function evalExpr(expr) {
  return expr.reduce((function (val, form) {
                return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_5__.Const.rel(val, evalForm(form));
              }), /* N */0);
}

function nestedEval(seq) {
  return {
          NAME: "NestToR",
          VAL: rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_1__.map(seq, evalExpr)
        };
}

function evalSeq(seq) {
  if (!seq) {
    return /* M */3;
  }
  var seq$p = seq.tl;
  var expr = seq.hd;
  if (seq$p) {
    return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_5__.Const.inv(_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_5__.Const.rel(evalExpr(expr), evalSeq(seq$p)));
  } else {
    return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_5__.Const.inv(evalExpr(expr));
  }
}

function interEval(expr, intpr) {
  return evalExpr(interpretExpr(expr, intpr));
}

function evalAll(expr) {
  var vars = _form_Expr_bs_js__WEBPACK_IMPORTED_MODULE_6__.FORM.getVars(expr);
  var vnum = vars.length;
  var vspace = _form_Value_bs_js__WEBPACK_IMPORTED_MODULE_8__.VSpace.make(undefined, vnum);
  var dna = _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_4__.makeUnsafe(_form_Value_bs_js__WEBPACK_IMPORTED_MODULE_8__.VSpace.getPoints(vspace).map(function (vpoint) {
              var interpr = fromVPoint(vpoint, vars);
              if (interpr !== undefined) {
                return evalExpr(interpretExpr(expr, rescript_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_3__.valFromOption(interpr)));
              }
              throw {
                    RE_EXN_ID: "Not_found",
                    Error: new Error()
                  };
            }).reverse());
  return {
          dna: dna,
          form: expr,
          vars: vars
        };
}

var Interpr = {
  toVPoint: toVPoint,
  fromVPoint: fromVPoint,
  interpret: interpretExpr
};

var $$eval = evalExpr;


/* DNA-Formform Not a pure module */


/***/ }),

/***/ "./src/utils/Helper.bs.js":
/*!********************************!*\
  !*** ./src/utils/Helper.bs.js ***!
  \********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Unreachable": function() { return /* binding */ Unreachable; },
/* harmony export */   "IndexExc": function() { return /* binding */ IndexExc; },
/* harmony export */   "Debug": function() { return /* binding */ Debug; },
/* harmony export */   "cleanStr": function() { return /* binding */ cleanStr; },
/* harmony export */   "intFromStrWithRadix": function() { return /* binding */ intFromStrWithRadix; },
/* harmony export */   "hasDecimal": function() { return /* binding */ hasDecimal; },
/* harmony export */   "Parity": function() { return /* binding */ Parity; },
/* harmony export */   "ListExtensions": function() { return /* binding */ ListExtensions; },
/* harmony export */   "ListMonads": function() { return /* binding */ ListMonads; },
/* harmony export */   "common_vars": function() { return /* binding */ common_vars; }
/* harmony export */ });
/* harmony import */ var rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rescript/lib/es6/curry.js */ "./node_modules/rescript/lib/es6/curry.js");
/* harmony import */ var rescript_lib_es6_belt_Int_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rescript/lib/es6/belt_Int.js */ "./node_modules/rescript/lib/es6/belt_Int.js");
/* harmony import */ var rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rescript/lib/es6/belt_List.js */ "./node_modules/rescript/lib/es6/belt_List.js");
/* harmony import */ var rescript_lib_es6_belt_Option_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rescript/lib/es6/belt_Option.js */ "./node_modules/rescript/lib/es6/belt_Option.js");
/* harmony import */ var rescript_lib_es6_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rescript/lib/es6/caml_exceptions.js */ "./node_modules/rescript/lib/es6/caml_exceptions.js");
// Generated by ReScript, PLEASE EDIT WITH CARE







var Unreachable = /* @__PURE__ */rescript_lib_es6_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_4__.create("Helper-Formform.Unreachable");

var IndexExc = /* @__PURE__ */rescript_lib_es6_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_4__.create("Helper-Formform.IndexExc");

var Debug = /* @__PURE__ */rescript_lib_es6_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_4__.create("Helper-Formform.Debug");

function cleanStr(str) {
  return str;
}

function intFromStrWithRadix(radix, str) {
  return str.split("").reverse().reduce((function (maybeSum, n_str, i) {
                return rescript_lib_es6_belt_Option_js__WEBPACK_IMPORTED_MODULE_3__.flatMap(maybeSum, (function (sum) {
                              return rescript_lib_es6_belt_Option_js__WEBPACK_IMPORTED_MODULE_3__.map(rescript_lib_es6_belt_Int_js__WEBPACK_IMPORTED_MODULE_1__.fromString(n_str), (function (n) {
                                            return sum + Math.imul(n, Math.pow(radix, i) | 0) | 0;
                                          }));
                            }));
              }), 0);
}

function hasDecimal(x) {
  return (x | 0) < x;
}

function show(parity) {
  switch (parity) {
    case /* Even */0 :
        return "2r";
    case /* Odd */1 :
        return "2r+1";
    case /* Any */2 :
        return "";
    
  }
}

var Parity = {
  show: show
};

function prependToAll(l, sep) {
  if (l) {
    return {
            hd: sep,
            tl: {
              hd: l.hd,
              tl: prependToAll(l.tl, sep)
            }
          };
  } else {
    return /* [] */0;
  }
}

function intersperse(l, sep) {
  if (l) {
    return {
            hd: l.hd,
            tl: prependToAll(l.tl, sep)
          };
  } else {
    return /* [] */0;
  }
}

function intercalate(l1, l2) {
  return rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__.flatten(intersperse(l1, l2));
}

function join(l) {
  if (l) {
    return l.hd + join(l.tl);
  } else {
    return "";
  }
}

function joinWith(l, sep) {
  return join(intersperse(l, sep));
}

var ListExtensions = {
  prependToAll: prependToAll,
  intersperse: intersperse,
  intercalate: intercalate,
  join: join,
  joinWith: joinWith
};

function fmap(l, fn) {
  if (l) {
    return rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__.concat(rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(fn, l.hd), fmap(l.tl, fn));
  } else {
    return /* [] */0;
  }
}

function liftM2(mf2, ma, mb) {
  return fmap(ma, (function (x1) {
                return fmap(mb, (function (x2) {
                              return {
                                      hd: rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._2(mf2, x1, x2),
                                      tl: /* [] */0
                                    };
                            }));
              }));
}

function cartesProd(l, dim) {
  var fn = function (l, seq, n) {
    if (n > 0) {
      return fmap(l, (function (x) {
                    return fn(l, rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__.concat(seq, {
                                    hd: x,
                                    tl: /* [] */0
                                  }), n - 1 | 0);
                  }));
    } else {
      return {
              hd: seq,
              tl: /* [] */0
            };
    }
  };
  return fn(l, /* [] */0, dim);
}

var ListMonads = {
  fmap: fmap,
  liftM2: liftM2,
  cartesProd: cartesProd
};

var common_vars = "abcdefghijklmnopqrstuvwxyz".split("");


/* common_vars Not a pure module */


/***/ }),

/***/ "./src/utils/JsRaw.bs.js":
/*!*******************************!*\
  !*** ./src/utils/JsRaw.bs.js ***!
  \*******************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "padStart": function() { return /* binding */ padStart; }
/* harmony export */ });
// Generated by ReScript, PLEASE EDIT WITH CARE


var padStart = ((str, maxLength, fillString) => str.padStart(maxLength, fillString));


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
/*!************************!*\
  !*** ./src/mainRAW.js ***!
  \************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./core/calc/Calc.bs.js */ "./src/core/calc/Calc.bs.js");
/* harmony import */ var _core_calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./core/calc/DNA.bs.js */ "./src/core/calc/DNA.bs.js");
/* harmony import */ var _core_calc_SeqRE_bs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./core/calc/SeqRE.bs.js */ "./src/core/calc/SeqRE.bs.js");
/* harmony import */ var _core_form_Expr_bs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./core/form/Expr.bs.js */ "./src/core/form/Expr.bs.js");
/* harmony import */ var _core_form_Formula_bs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./core/form/Formula.bs.js */ "./src/core/form/Formula.bs.js");
/* harmony import */ var _core_form_Value_bs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./core/form/Value.bs.js */ "./src/core/form/Value.bs.js");
/* harmony import */ var _core_logic_Alg_bs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./core/logic/Alg.bs.js */ "./src/core/logic/Alg.bs.js");
/* harmony import */ var _core_logic_Eval_bs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./core/logic/Eval.bs.js */ "./src/core/logic/Eval.bs.js");











// import * as Test from './Test.bs.js';

/* harmony default export */ __webpack_exports__["default"] = ({ Calc: _core_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_0__, DNA: _core_calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_1__, SeqRE: _core_calc_SeqRE_bs_js__WEBPACK_IMPORTED_MODULE_2__,  Expr: _core_form_Expr_bs_js__WEBPACK_IMPORTED_MODULE_3__, Formula: _core_form_Formula_bs_js__WEBPACK_IMPORTED_MODULE_4__, Value: _core_form_Value_bs_js__WEBPACK_IMPORTED_MODULE_5__,  Alg: _core_logic_Alg_bs_js__WEBPACK_IMPORTED_MODULE_6__, Eval: _core_logic_Eval_bs_js__WEBPACK_IMPORTED_MODULE_7__ });

}();
__webpack_exports__ = __webpack_exports__.default;
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9iZWx0X0FycmF5LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvYmVsdF9JZC5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2JlbHRfSW50LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvYmVsdF9MaXN0LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvYmVsdF9PcHRpb24uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9iZWx0X1NldC5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2JlbHRfU2V0RGljdC5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2JlbHRfU2V0SW50LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvYmVsdF9Tb3J0QXJyYXkuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9iZWx0X1NvcnRBcnJheUludC5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2JlbHRfaW50ZXJuYWxBVkxzZXQuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9iZWx0X2ludGVybmFsU2V0SW50LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvY2FtbC5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2NhbWxfYXJyYXkuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9jYW1sX2V4Y2VwdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9jYW1sX2pzX2V4Y2VwdGlvbnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9jYW1sX29iai5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2NhbWxfb3B0aW9uLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvY3VycnkuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9qc19kaWN0LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvanNfZXhuLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvanNfaW50LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvanNfbGlzdC5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2pzX21hdGguanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9qc192ZWN0b3IuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvY29yZS9jYWxjL0NhbGMuYnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvY29yZS9jYWxjL0ROQS5icy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb3JlL2NhbGMvU2VxUkUuYnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvY29yZS9mb3JtL0V4cHIuYnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvY29yZS9mb3JtL0Zvcm11bGEuYnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvY29yZS9mb3JtL1ZhbHVlLmJzLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2NvcmUvbG9naWMvQWxnLmJzLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2NvcmUvbG9naWMvRXZhbC5icy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy91dGlscy9IZWxwZXIuYnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvdXRpbHMvSnNSYXcuYnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ydW50aW1lL2RlZmluZSBwcm9wZXJ0eSBnZXR0ZXJzIiwid2VicGFjazovL2Zvcm1mb3JtL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ydW50aW1lL21ha2UgbmFtZXNwYWNlIG9iamVjdCIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9tYWluUkFXLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLENBQUM7QUFDRCxPOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNSa0M7QUFDRTtBQUNJO0FBQ1E7O0FBRWhE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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNkb0M7QUFDVTtBQUNFO0FBQ007O0FBRXREO0FBQ0E7QUFDQSxXQUFXLGlEQUFnQjtBQUMzQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxpREFBZ0I7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUF5QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDBDQUFTO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSx3QkFBd0IsMENBQVM7QUFDakM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJCQUEyQiwwQ0FBUztBQUNwQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxvQkFBb0IsMENBQVM7QUFDN0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLEVBQUUsMERBQXlCO0FBQzNCO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQ0FBbUMsMENBQVM7QUFDNUM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0JBQXNCLDBDQUFTO0FBQy9COztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGVBQWUsc0RBQXFCO0FBQ3BDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsc0RBQXFCO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzREFBcUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxzREFBcUI7QUFDL0I7QUFDQSxTQUFTO0FBQ1QsVUFBVSxzREFBcUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFxQjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSw0RUFBNEUsMENBQVM7QUFDckY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsZ0ZBQWdGLDBDQUFTO0FBQ3pGOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVCxVQUFVLHNEQUFxQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFxQjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyRUFBMkUsMENBQVM7QUFDcEY7O0FBRUE7QUFDQSxnQkFBZ0IsU0FBUztBQUN6QjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGlDQUFpQywwQ0FBUztBQUMxQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDBDQUFTO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsV0FBVztBQUNYO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esc0NBQXNDLDBDQUFTO0FBQy9DOztBQUVBOztBQUVBOztBQXNCQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMWE4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZUFBZSxzREFBcUI7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxzREFBcUI7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsTUFBTSxzREFBcUI7QUFDM0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsVUFBVSxzREFBcUI7QUFDL0I7QUFDQSxTQUFTO0FBQ1QsVUFBVSxzREFBcUI7QUFDL0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxJQUFJLHNEQUFxQjtBQUN6QjtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFVBQVUsc0RBQXFCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQXFCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBWUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNyWG9DO0FBQ1k7QUFDTTs7QUFFdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGlEQUFnQjtBQUMzQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQSxXQUFXLGlEQUFnQjtBQUMzQjs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHFCQUFxQiwwQ0FBUztBQUM5Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsMENBQVM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxtQkFBbUIsMENBQVM7QUFDNUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMENBQVM7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsNkJBQTZCLDBDQUFTO0FBQ3RDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0Esd0JBQXdCLDBDQUFTO0FBQ2pDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwwQ0FBUztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwyQkFBMkIsMENBQVM7QUFDcEM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWEsaURBQWdCO0FBQzdCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtB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R0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7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O0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSx5REFBd0I7QUFDckMsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQWtCQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMVpBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBWUM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ3BGOEM7O0FBRTlDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0EsWUFBWSwrQ0FBYztBQUMxQix1QkFBdUIsK0NBQWM7QUFDckM7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQXFCQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM1Z0JnRDs7QUFFaEQ7QUFDQTtBQUNBLFdBQVcsaURBQWdCO0FBQzNCOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxNQUFNOztBQUVOO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsZ0JBQWdCLE9BQU87QUFDdkI7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdCQUFnQixPQUFPO0FBQ3ZCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBV0M7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuRjhEOztBQUU5RCx1QkFBdUIsNEVBQTJDOztBQUVsRTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUEsZ0JBQWdCLDJEQUEwQjs7QUFhekM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUM3Q0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQU9DO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ2Y0QztBQUNJOztBQUVoRDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBLFdBQVcsaURBQWdCO0FBQzNCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxpREFBZ0I7QUFDN0I7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsWUFBWSwwREFBeUI7QUFDckM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsbUJBQW1CLHdFQUF1QjtBQUMxQztBQUNBO0FBQ0E7QUFDQSxtQkFBbUI7QUFDbkIsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpQkFBaUIsaUVBQWdCO0FBQ2pDO0FBQ0E7QUFDQTtBQUNBLGlCQUFpQjtBQUNqQixHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLG9FQUFtQjtB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RTs7Ozs7V0NBckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOK0M7QUFDRjtBQUNJOztBQUVGO0FBQ007QUFDSjs7QUFFSDtBQUNFOztBQUVoRDs7QUFFQSwrREFBZSxDQUFDLEtBQUsseURBQUssMERBQU8sNERBQU8sNkRBQVMsOERBQU8sMkRBQU0sMERBQU0sdURBQUUsRUFBQyIsImZpbGUiOiJmb3JtZm9ybVJBVy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvcm1mb3JtXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZvcm1mb3JtXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiXG5cbmltcG9ydCAqIGFzIENhbWwgZnJvbSBcIi4vY2FtbC5qc1wiO1xuaW1wb3J0ICogYXMgQ3VycnkgZnJvbSBcIi4vY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIEpzX21hdGggZnJvbSBcIi4vanNfbWF0aC5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vcHRpb24gZnJvbSBcIi4vY2FtbF9vcHRpb24uanNcIjtcblxuZnVuY3Rpb24gZ2V0KGFyciwgaSkge1xuICBpZiAoaSA+PSAwICYmIGkgPCBhcnIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoYXJyW2ldKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gZ2V0RXhuKGFyciwgaSkge1xuICBpZiAoIShpID49IDAgJiYgaSA8IGFyci5sZW5ndGgpKSB7XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJBc3NlcnRfZmFpbHVyZVwiLFxuICAgICAgICAgIF8xOiBbXG4gICAgICAgICAgICBcImJlbHRfQXJyYXkubWxcIixcbiAgICAgICAgICAgIDI3LFxuICAgICAgICAgICAgNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH1cbiAgcmV0dXJuIGFycltpXTtcbn1cblxuZnVuY3Rpb24gc2V0KGFyciwgaSwgdikge1xuICBpZiAoaSA+PSAwICYmIGkgPCBhcnIubGVuZ3RoKSB7XG4gICAgYXJyW2ldID0gdjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RXhuKGFyciwgaSwgdikge1xuICBpZiAoIShpID49IDAgJiYgaSA8IGFyci5sZW5ndGgpKSB7XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJBc3NlcnRfZmFpbHVyZVwiLFxuICAgICAgICAgIF8xOiBbXG4gICAgICAgICAgICBcImJlbHRfQXJyYXkubWxcIixcbiAgICAgICAgICAgIDMzLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH1cbiAgYXJyW2ldID0gdjtcbiAgXG59XG5cbmZ1bmN0aW9uIHN3YXBVbnNhZmUoeHMsIGksIGopIHtcbiAgdmFyIHRtcCA9IHhzW2ldO1xuICB4c1tpXSA9IHhzW2pdO1xuICB4c1tqXSA9IHRtcDtcbiAgXG59XG5cbmZ1bmN0aW9uIHNodWZmbGVJblBsYWNlKHhzKSB7XG4gIHZhciBsZW4gPSB4cy5sZW5ndGg7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgc3dhcFVuc2FmZSh4cywgaSwgSnNfbWF0aC5yYW5kb21faW50KGksIGxlbikpO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBzaHVmZmxlKHhzKSB7XG4gIHZhciByZXN1bHQgPSB4cy5zbGljZSgwKTtcbiAgc2h1ZmZsZUluUGxhY2UocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcmV2ZXJzZUluUGxhY2UoeHMpIHtcbiAgdmFyIGxlbiA9IHhzLmxlbmd0aDtcbiAgdmFyIG9mcyA9IDA7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gbGVuIC8gMiB8IDA7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBzd2FwVW5zYWZlKHhzLCBvZnMgKyBpIHwgMCwgKChvZnMgKyBsZW4gfCAwKSAtIGkgfCAwKSAtIDEgfCAwKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gcmV2ZXJzZSh4cykge1xuICB2YXIgbGVuID0geHMubGVuZ3RoO1xuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgcmVzdWx0W2ldID0geHNbKGxlbiAtIDEgfCAwKSAtIGkgfCAwXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtYWtlKGwsIGYpIHtcbiAgaWYgKGwgPD0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgcmVzID0gbmV3IEFycmF5KGwpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICByZXNbaV0gPSBmO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIG1ha2VCeVUobCwgZikge1xuICBpZiAobCA8PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciByZXMgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHJlc1tpXSA9IGYoaSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gbWFrZUJ5KGwsIGYpIHtcbiAgcmV0dXJuIG1ha2VCeVUobCwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gbWFrZUJ5QW5kU2h1ZmZsZVUobCwgZikge1xuICB2YXIgdSA9IG1ha2VCeVUobCwgZik7XG4gIHNodWZmbGVJblBsYWNlKHUpO1xuICByZXR1cm4gdTtcbn1cblxuZnVuY3Rpb24gbWFrZUJ5QW5kU2h1ZmZsZShsLCBmKSB7XG4gIHJldHVybiBtYWtlQnlBbmRTaHVmZmxlVShsLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiByYW5nZShzdGFydCwgZmluaXNoKSB7XG4gIHZhciBjdXQgPSBmaW5pc2ggLSBzdGFydCB8IDA7XG4gIGlmIChjdXQgPCAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBhcnIgPSBuZXcgQXJyYXkoY3V0ICsgMSB8IDApO1xuICBmb3IodmFyIGkgPSAwOyBpIDw9IGN1dDsgKytpKXtcbiAgICBhcnJbaV0gPSBzdGFydCArIGkgfCAwO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIHJhbmdlQnkoc3RhcnQsIGZpbmlzaCwgc3RlcCkge1xuICB2YXIgY3V0ID0gZmluaXNoIC0gc3RhcnQgfCAwO1xuICBpZiAoY3V0IDwgMCB8fCBzdGVwIDw9IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIG5iID0gKGN1dCAvIHN0ZXAgfCAwKSArIDEgfCAwO1xuICB2YXIgYXJyID0gbmV3IEFycmF5KG5iKTtcbiAgdmFyIGN1ciA9IHN0YXJ0O1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbmI7ICsraSl7XG4gICAgYXJyW2ldID0gY3VyO1xuICAgIGN1ciA9IGN1ciArIHN0ZXAgfCAwO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIHppcCh4cywgeXMpIHtcbiAgdmFyIGxlbnggPSB4cy5sZW5ndGg7XG4gIHZhciBsZW55ID0geXMubGVuZ3RoO1xuICB2YXIgbGVuID0gbGVueCA8IGxlbnkgPyBsZW54IDogbGVueTtcbiAgdmFyIHMgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICBzW2ldID0gW1xuICAgICAgeHNbaV0sXG4gICAgICB5c1tpXVxuICAgIF07XG4gIH1cbiAgcmV0dXJuIHM7XG59XG5cbmZ1bmN0aW9uIHppcEJ5VSh4cywgeXMsIGYpIHtcbiAgdmFyIGxlbnggPSB4cy5sZW5ndGg7XG4gIHZhciBsZW55ID0geXMubGVuZ3RoO1xuICB2YXIgbGVuID0gbGVueCA8IGxlbnkgPyBsZW54IDogbGVueTtcbiAgdmFyIHMgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICBzW2ldID0gZih4c1tpXSwgeXNbaV0pO1xuICB9XG4gIHJldHVybiBzO1xufVxuXG5mdW5jdGlvbiB6aXBCeSh4cywgeXMsIGYpIHtcbiAgcmV0dXJuIHppcEJ5VSh4cywgeXMsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIGNvbmNhdChhMSwgYTIpIHtcbiAgdmFyIGwxID0gYTEubGVuZ3RoO1xuICB2YXIgbDIgPSBhMi5sZW5ndGg7XG4gIHZhciBhMWEyID0gbmV3IEFycmF5KGwxICsgbDIgfCAwKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGwxOyArK2kpe1xuICAgIGExYTJbaV0gPSBhMVtpXTtcbiAgfVxuICBmb3IodmFyIGkkMSA9IDA7IGkkMSA8IGwyOyArK2kkMSl7XG4gICAgYTFhMltsMSArIGkkMSB8IDBdID0gYTJbaSQxXTtcbiAgfVxuICByZXR1cm4gYTFhMjtcbn1cblxuZnVuY3Rpb24gY29uY2F0TWFueShhcnJzKSB7XG4gIHZhciBsZW5BcnJzID0gYXJycy5sZW5ndGg7XG4gIHZhciB0b3RhbExlbiA9IDA7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW5BcnJzOyArK2kpe1xuICAgIHRvdGFsTGVuID0gdG90YWxMZW4gKyBhcnJzW2ldLmxlbmd0aCB8IDA7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheSh0b3RhbExlbik7XG4gIHRvdGFsTGVuID0gMDtcbiAgZm9yKHZhciBqID0gMDsgaiA8IGxlbkFycnM7ICsrail7XG4gICAgdmFyIGN1ciA9IGFycnNbal07XG4gICAgZm9yKHZhciBrID0gMCAsa19maW5pc2ggPSBjdXIubGVuZ3RoOyBrIDwga19maW5pc2g7ICsrayl7XG4gICAgICByZXN1bHRbdG90YWxMZW5dID0gY3VyW2tdO1xuICAgICAgdG90YWxMZW4gPSB0b3RhbExlbiArIDEgfCAwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzbGljZShhLCBvZmZzZXQsIGxlbikge1xuICBpZiAobGVuIDw9IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIGxlbmEgPSBhLmxlbmd0aDtcbiAgdmFyIG9mcyA9IG9mZnNldCA8IDAgPyBDYW1sLmNhbWxfaW50X21heChsZW5hICsgb2Zmc2V0IHwgMCwgMCkgOiBvZmZzZXQ7XG4gIHZhciBoYXNMZW4gPSBsZW5hIC0gb2ZzIHwgMDtcbiAgdmFyIGNvcHlMZW5ndGggPSBoYXNMZW4gPCBsZW4gPyBoYXNMZW4gOiBsZW47XG4gIGlmIChjb3B5TGVuZ3RoIDw9IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShjb3B5TGVuZ3RoKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGNvcHlMZW5ndGg7ICsraSl7XG4gICAgcmVzdWx0W2ldID0gYVtvZnMgKyBpIHwgMF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc2xpY2VUb0VuZChhLCBvZmZzZXQpIHtcbiAgdmFyIGxlbmEgPSBhLmxlbmd0aDtcbiAgdmFyIG9mcyA9IG9mZnNldCA8IDAgPyBDYW1sLmNhbWxfaW50X21heChsZW5hICsgb2Zmc2V0IHwgMCwgMCkgOiBvZmZzZXQ7XG4gIHZhciBsZW4gPSBsZW5hIC0gb2ZzIHwgMDtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgIHJlc3VsdFtpXSA9IGFbb2ZzICsgaSB8IDBdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZpbGwoYSwgb2Zmc2V0LCBsZW4sIHYpIHtcbiAgaWYgKGxlbiA8PSAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgbGVuYSA9IGEubGVuZ3RoO1xuICB2YXIgb2ZzID0gb2Zmc2V0IDwgMCA/IENhbWwuY2FtbF9pbnRfbWF4KGxlbmEgKyBvZmZzZXQgfCAwLCAwKSA6IG9mZnNldDtcbiAgdmFyIGhhc0xlbiA9IGxlbmEgLSBvZnMgfCAwO1xuICB2YXIgZmlsbExlbmd0aCA9IGhhc0xlbiA8IGxlbiA/IGhhc0xlbiA6IGxlbjtcbiAgaWYgKGZpbGxMZW5ndGggPD0gMCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgZm9yKHZhciBpID0gb2ZzICxpX2ZpbmlzaCA9IG9mcyArIGZpbGxMZW5ndGggfCAwOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgYVtpXSA9IHY7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGJsaXRVbnNhZmUoYTEsIHNyY29mczEsIGEyLCBzcmNvZnMyLCBibGl0TGVuZ3RoKSB7XG4gIGlmIChzcmNvZnMyIDw9IHNyY29mczEpIHtcbiAgICBmb3IodmFyIGogPSAwOyBqIDwgYmxpdExlbmd0aDsgKytqKXtcbiAgICAgIGEyW2ogKyBzcmNvZnMyIHwgMF0gPSBhMVtqICsgc3Jjb2ZzMSB8IDBdO1xuICAgIH1cbiAgICByZXR1cm4gO1xuICB9XG4gIGZvcih2YXIgaiQxID0gYmxpdExlbmd0aCAtIDEgfCAwOyBqJDEgPj0gMDsgLS1qJDEpe1xuICAgIGEyW2okMSArIHNyY29mczIgfCAwXSA9IGExW2okMSArIHNyY29mczEgfCAwXTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gYmxpdChhMSwgb2ZzMSwgYTIsIG9mczIsIGxlbikge1xuICB2YXIgbGVuYTEgPSBhMS5sZW5ndGg7XG4gIHZhciBsZW5hMiA9IGEyLmxlbmd0aDtcbiAgdmFyIHNyY29mczEgPSBvZnMxIDwgMCA/IENhbWwuY2FtbF9pbnRfbWF4KGxlbmExICsgb2ZzMSB8IDAsIDApIDogb2ZzMTtcbiAgdmFyIHNyY29mczIgPSBvZnMyIDwgMCA/IENhbWwuY2FtbF9pbnRfbWF4KGxlbmEyICsgb2ZzMiB8IDAsIDApIDogb2ZzMjtcbiAgdmFyIGJsaXRMZW5ndGggPSBDYW1sLmNhbWxfaW50X21pbihsZW4sIENhbWwuY2FtbF9pbnRfbWluKGxlbmExIC0gc3Jjb2ZzMSB8IDAsIGxlbmEyIC0gc3Jjb2ZzMiB8IDApKTtcbiAgaWYgKHNyY29mczIgPD0gc3Jjb2ZzMSkge1xuICAgIGZvcih2YXIgaiA9IDA7IGogPCBibGl0TGVuZ3RoOyArK2ope1xuICAgICAgYTJbaiArIHNyY29mczIgfCAwXSA9IGExW2ogKyBzcmNvZnMxIHwgMF07XG4gICAgfVxuICAgIHJldHVybiA7XG4gIH1cbiAgZm9yKHZhciBqJDEgPSBibGl0TGVuZ3RoIC0gMSB8IDA7IGokMSA+PSAwOyAtLWokMSl7XG4gICAgYTJbaiQxICsgc3Jjb2ZzMiB8IDBdID0gYTFbaiQxICsgc3Jjb2ZzMSB8IDBdO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBmb3JFYWNoVShhLCBmKSB7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBmKGFbaV0pO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBmb3JFYWNoKGEsIGYpIHtcbiAgcmV0dXJuIGZvckVhY2hVKGEsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIG1hcFUoYSwgZikge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgciA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgcltpXSA9IGYoYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIG1hcChhLCBmKSB7XG4gIHJldHVybiBtYXBVKGEsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIGdldEJ5VShhLCBwKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIHI7XG4gIHdoaWxlKHIgPT09IHVuZGVmaW5lZCAmJiBpIDwgbCkge1xuICAgIHZhciB2ID0gYVtpXTtcbiAgICBpZiAocCh2KSkge1xuICAgICAgciA9IENhbWxfb3B0aW9uLnNvbWUodik7XG4gICAgfVxuICAgIGkgPSBpICsgMSB8IDA7XG4gIH07XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBnZXRCeShhLCBwKSB7XG4gIHJldHVybiBnZXRCeVUoYSwgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5kZXhCeVUoYSwgcCkge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciByO1xuICB3aGlsZShyID09PSB1bmRlZmluZWQgJiYgaSA8IGwpIHtcbiAgICB2YXIgdiA9IGFbaV07XG4gICAgaWYgKHAodikpIHtcbiAgICAgIHIgPSBpO1xuICAgIH1cbiAgICBpID0gaSArIDEgfCAwO1xuICB9O1xuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gZ2V0SW5kZXhCeShhLCBwKSB7XG4gIHJldHVybiBnZXRJbmRleEJ5VShhLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBrZWVwVShhLCBmKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciByID0gbmV3IEFycmF5KGwpO1xuICB2YXIgaiA9IDA7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHZhciB2ID0gYVtpXTtcbiAgICBpZiAoZih2KSkge1xuICAgICAgcltqXSA9IHY7XG4gICAgICBqID0gaiArIDEgfCAwO1xuICAgIH1cbiAgICBcbiAgfVxuICByLmxlbmd0aCA9IGo7XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBrZWVwKGEsIGYpIHtcbiAgcmV0dXJuIGtlZXBVKGEsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIGtlZXBXaXRoSW5kZXhVKGEsIGYpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIHIgPSBuZXcgQXJyYXkobCk7XG4gIHZhciBqID0gMDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgdmFyIHYgPSBhW2ldO1xuICAgIGlmIChmKHYsIGkpKSB7XG4gICAgICByW2pdID0gdjtcbiAgICAgIGogPSBqICsgMSB8IDA7XG4gICAgfVxuICAgIFxuICB9XG4gIHIubGVuZ3RoID0gajtcbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGtlZXBXaXRoSW5kZXgoYSwgZikge1xuICByZXR1cm4ga2VlcFdpdGhJbmRleFUoYSwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24ga2VlcE1hcFUoYSwgZikge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgciA9IG5ldyBBcnJheShsKTtcbiAgdmFyIGogPSAwO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICB2YXIgdiA9IGFbaV07XG4gICAgdmFyIHYkMSA9IGYodik7XG4gICAgaWYgKHYkMSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByW2pdID0gQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbih2JDEpO1xuICAgICAgaiA9IGogKyAxIHwgMDtcbiAgICB9XG4gICAgXG4gIH1cbiAgci5sZW5ndGggPSBqO1xuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24ga2VlcE1hcChhLCBmKSB7XG4gIHJldHVybiBrZWVwTWFwVShhLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoV2l0aEluZGV4VShhLCBmKSB7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBmKGksIGFbaV0pO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBmb3JFYWNoV2l0aEluZGV4KGEsIGYpIHtcbiAgcmV0dXJuIGZvckVhY2hXaXRoSW5kZXhVKGEsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIG1hcFdpdGhJbmRleFUoYSwgZikge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgciA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgcltpXSA9IGYoaSwgYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIG1hcFdpdGhJbmRleChhLCBmKSB7XG4gIHJldHVybiBtYXBXaXRoSW5kZXhVKGEsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVUoYSwgeCwgZikge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICByID0gZihyLCBhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gcmVkdWNlKGEsIHgsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVUoYSwgeCwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZVUoYSwgeCwgZikge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IGEubGVuZ3RoIC0gMSB8IDA7IGkgPj0gMDsgLS1pKXtcbiAgICByID0gZihyLCBhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZShhLCB4LCBmKSB7XG4gIHJldHVybiByZWR1Y2VSZXZlcnNlVShhLCB4LCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlMlUoYSwgYiwgeCwgZikge1xuICB2YXIgciA9IHg7XG4gIHZhciBsZW4gPSBDYW1sLmNhbWxfaW50X21pbihhLmxlbmd0aCwgYi5sZW5ndGgpO1xuICBmb3IodmFyIGkgPSBsZW4gLSAxIHwgMDsgaSA+PSAwOyAtLWkpe1xuICAgIHIgPSBmKHIsIGFbaV0sIGJbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlMihhLCBiLCB4LCBmKSB7XG4gIHJldHVybiByZWR1Y2VSZXZlcnNlMlUoYSwgYiwgeCwgQ3VycnkuX18zKGYpKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlV2l0aEluZGV4VShhLCB4LCBmKSB7XG4gIHZhciByID0geDtcbiAgZm9yKHZhciBpID0gMCAsaV9maW5pc2ggPSBhLmxlbmd0aDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIHIgPSBmKHIsIGFbaV0sIGkpO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VXaXRoSW5kZXgoYSwgeCwgZikge1xuICByZXR1cm4gcmVkdWNlV2l0aEluZGV4VShhLCB4LCBDdXJyeS5fXzMoZikpO1xufVxuXG5mdW5jdGlvbiBldmVyeVUoYXJyLCBiKSB7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICB2YXIgX2kgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA9PT0gbGVuKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFiKGFycltpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBldmVyeShhcnIsIGYpIHtcbiAgcmV0dXJuIGV2ZXJ5VShhcnIsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIHNvbWVVKGFyciwgYikge1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIF9pID0gMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPT09IGxlbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYihhcnJbaV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzb21lKGFyciwgZikge1xuICByZXR1cm4gc29tZVUoYXJyLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBldmVyeUF1eDIoYXJyMSwgYXJyMiwgX2ksIGIsIGxlbikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA9PT0gbGVuKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFiKGFycjFbaV0sIGFycjJbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXZlcnkyVShhLCBiLCBwKSB7XG4gIHJldHVybiBldmVyeUF1eDIoYSwgYiwgMCwgcCwgQ2FtbC5jYW1sX2ludF9taW4oYS5sZW5ndGgsIGIubGVuZ3RoKSk7XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5MihhLCBiLCBwKSB7XG4gIHJldHVybiBldmVyeTJVKGEsIGIsIEN1cnJ5Ll9fMihwKSk7XG59XG5cbmZ1bmN0aW9uIHNvbWUyVShhLCBiLCBwKSB7XG4gIHZhciBfaSA9IDA7XG4gIHZhciBsZW4gPSBDYW1sLmNhbWxfaW50X21pbihhLmxlbmd0aCwgYi5sZW5ndGgpO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA9PT0gbGVuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwKGFbaV0sIGJbaV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzb21lMihhLCBiLCBwKSB7XG4gIHJldHVybiBzb21lMlUoYSwgYiwgQ3VycnkuX18yKHApKTtcbn1cblxuZnVuY3Rpb24gZXFVKGEsIGIsIHApIHtcbiAgdmFyIGxlbmEgPSBhLmxlbmd0aDtcbiAgdmFyIGxlbmIgPSBiLmxlbmd0aDtcbiAgaWYgKGxlbmEgPT09IGxlbmIpIHtcbiAgICByZXR1cm4gZXZlcnlBdXgyKGEsIGIsIDAsIHAsIGxlbmEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlcShhLCBiLCBwKSB7XG4gIHJldHVybiBlcVUoYSwgYiwgQ3VycnkuX18yKHApKTtcbn1cblxuZnVuY3Rpb24gY21wVShhLCBiLCBwKSB7XG4gIHZhciBsZW5hID0gYS5sZW5ndGg7XG4gIHZhciBsZW5iID0gYi5sZW5ndGg7XG4gIGlmIChsZW5hID4gbGVuYikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKGxlbmEgPCBsZW5iKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHZhciBfaSA9IDA7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIGkgPSBfaTtcbiAgICAgIGlmIChpID09PSBsZW5hKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgdmFyIGMgPSBwKGFbaV0sIGJbaV0pO1xuICAgICAgaWYgKGMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9XG4gICAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNtcChhLCBiLCBwKSB7XG4gIHJldHVybiBjbXBVKGEsIGIsIEN1cnJ5Ll9fMihwKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnRpdGlvblUoYSwgZikge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBqID0gMDtcbiAgdmFyIGExID0gbmV3IEFycmF5KGwpO1xuICB2YXIgYTIgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaWkgPSAwOyBpaSA8IGw7ICsraWkpe1xuICAgIHZhciB2ID0gYVtpaV07XG4gICAgaWYgKGYodikpIHtcbiAgICAgIGExW2ldID0gdjtcbiAgICAgIGkgPSBpICsgMSB8IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGEyW2pdID0gdjtcbiAgICAgIGogPSBqICsgMSB8IDA7XG4gICAgfVxuICB9XG4gIGExLmxlbmd0aCA9IGk7XG4gIGEyLmxlbmd0aCA9IGo7XG4gIHJldHVybiBbXG4gICAgICAgICAgYTEsXG4gICAgICAgICAgYTJcbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uKGEsIGYpIHtcbiAgcmV0dXJuIHBhcnRpdGlvblUoYSwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gdW56aXAoYSkge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgYTEgPSBuZXcgQXJyYXkobCk7XG4gIHZhciBhMiA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgdmFyIG1hdGNoID0gYVtpXTtcbiAgICBhMVtpXSA9IG1hdGNoWzBdO1xuICAgIGEyW2ldID0gbWF0Y2hbMV07XG4gIH1cbiAgcmV0dXJuIFtcbiAgICAgICAgICBhMSxcbiAgICAgICAgICBhMlxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBqb2luV2l0aFUoYSwgc2VwLCB0b1N0cmluZykge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICBpZiAobCA9PT0gMCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBsIC0gMSB8IDA7XG4gIHZhciBfaSA9IDA7XG4gIHZhciBfcmVzID0gXCJcIjtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciByZXMgPSBfcmVzO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPT09IGxhc3RJbmRleCkge1xuICAgICAgcmV0dXJuIHJlcyArIHRvU3RyaW5nKGFbaV0pO1xuICAgIH1cbiAgICBfcmVzID0gcmVzICsgKHRvU3RyaW5nKGFbaV0pICsgc2VwKTtcbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGpvaW5XaXRoKGEsIHNlcCwgdG9TdHJpbmcpIHtcbiAgcmV0dXJuIGpvaW5XaXRoVShhLCBzZXAsIEN1cnJ5Ll9fMSh0b1N0cmluZykpO1xufVxuXG5leHBvcnQge1xuICBnZXQgLFxuICBnZXRFeG4gLFxuICBzZXQgLFxuICBzZXRFeG4gLFxuICBzaHVmZmxlSW5QbGFjZSAsXG4gIHNodWZmbGUgLFxuICByZXZlcnNlSW5QbGFjZSAsXG4gIHJldmVyc2UgLFxuICBtYWtlICxcbiAgcmFuZ2UgLFxuICByYW5nZUJ5ICxcbiAgbWFrZUJ5VSAsXG4gIG1ha2VCeSAsXG4gIG1ha2VCeUFuZFNodWZmbGVVICxcbiAgbWFrZUJ5QW5kU2h1ZmZsZSAsXG4gIHppcCAsXG4gIHppcEJ5VSAsXG4gIHppcEJ5ICxcbiAgdW56aXAgLFxuICBjb25jYXQgLFxuICBjb25jYXRNYW55ICxcbiAgc2xpY2UgLFxuICBzbGljZVRvRW5kICxcbiAgZmlsbCAsXG4gIGJsaXQgLFxuICBibGl0VW5zYWZlICxcbiAgZm9yRWFjaFUgLFxuICBmb3JFYWNoICxcbiAgbWFwVSAsXG4gIG1hcCAsXG4gIGdldEJ5VSAsXG4gIGdldEJ5ICxcbiAgZ2V0SW5kZXhCeVUgLFxuICBnZXRJbmRleEJ5ICxcbiAga2VlcFUgLFxuICBrZWVwICxcbiAga2VlcFdpdGhJbmRleFUgLFxuICBrZWVwV2l0aEluZGV4ICxcbiAga2VlcE1hcFUgLFxuICBrZWVwTWFwICxcbiAgZm9yRWFjaFdpdGhJbmRleFUgLFxuICBmb3JFYWNoV2l0aEluZGV4ICxcbiAgbWFwV2l0aEluZGV4VSAsXG4gIG1hcFdpdGhJbmRleCAsXG4gIHBhcnRpdGlvblUgLFxuICBwYXJ0aXRpb24gLFxuICByZWR1Y2VVICxcbiAgcmVkdWNlICxcbiAgcmVkdWNlUmV2ZXJzZVUgLFxuICByZWR1Y2VSZXZlcnNlICxcbiAgcmVkdWNlUmV2ZXJzZTJVICxcbiAgcmVkdWNlUmV2ZXJzZTIgLFxuICByZWR1Y2VXaXRoSW5kZXhVICxcbiAgcmVkdWNlV2l0aEluZGV4ICxcbiAgam9pbldpdGhVICxcbiAgam9pbldpdGggLFxuICBzb21lVSAsXG4gIHNvbWUgLFxuICBldmVyeVUgLFxuICBldmVyeSAsXG4gIGV2ZXJ5MlUgLFxuICBldmVyeTIgLFxuICBzb21lMlUgLFxuICBzb21lMiAsXG4gIGNtcFUgLFxuICBjbXAgLFxuICBlcVUgLFxuICBlcSAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwiLi9jdXJyeS5qc1wiO1xuXG5mdW5jdGlvbiBNYWtlQ29tcGFyYWJsZVUoTSkge1xuICByZXR1cm4gTTtcbn1cblxuZnVuY3Rpb24gTWFrZUNvbXBhcmFibGUoTSkge1xuICB2YXIgY21wID0gTS5jbXA7XG4gIHZhciBjbXAkMSA9IEN1cnJ5Ll9fMihjbXApO1xuICByZXR1cm4ge1xuICAgICAgICAgIGNtcDogY21wJDFcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gY29tcGFyYWJsZVUoY21wKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgY21wOiBjbXBcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gY29tcGFyYWJsZShjbXApIHtcbiAgdmFyIGNtcCQxID0gQ3VycnkuX18yKGNtcCk7XG4gIHJldHVybiB7XG4gICAgICAgICAgY21wOiBjbXAkMVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBNYWtlSGFzaGFibGVVKE0pIHtcbiAgcmV0dXJuIE07XG59XG5cbmZ1bmN0aW9uIE1ha2VIYXNoYWJsZShNKSB7XG4gIHZhciBoYXNoID0gTS5oYXNoO1xuICB2YXIgaGFzaCQxID0gQ3VycnkuX18xKGhhc2gpO1xuICB2YXIgZXEgPSBNLmVxO1xuICB2YXIgZXEkMSA9IEN1cnJ5Ll9fMihlcSk7XG4gIHJldHVybiB7XG4gICAgICAgICAgaGFzaDogaGFzaCQxLFxuICAgICAgICAgIGVxOiBlcSQxXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhc2hhYmxlVShoYXNoLCBlcSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIGhhc2g6IGhhc2gsXG4gICAgICAgICAgZXE6IGVxXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhc2hhYmxlKGhhc2gsIGVxKSB7XG4gIHZhciBoYXNoJDEgPSBDdXJyeS5fXzEoaGFzaCk7XG4gIHZhciBlcSQxID0gQ3VycnkuX18yKGVxKTtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNoOiBoYXNoJDEsXG4gICAgICAgICAgZXE6IGVxJDFcbiAgICAgICAgfTtcbn1cblxuZXhwb3J0IHtcbiAgTWFrZUNvbXBhcmFibGVVICxcbiAgTWFrZUNvbXBhcmFibGUgLFxuICBjb21wYXJhYmxlVSAsXG4gIGNvbXBhcmFibGUgLFxuICBNYWtlSGFzaGFibGVVICxcbiAgTWFrZUhhc2hhYmxlICxcbiAgaGFzaGFibGVVICxcbiAgaGFzaGFibGUgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nKGkpIHtcbiAgdmFyIGkkMSA9IHBhcnNlSW50KGksIDEwKTtcbiAgaWYgKGlzTmFOKGkkMSkpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpJDE7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgZnJvbVN0cmluZyAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwiLi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9BcnJheSBmcm9tIFwiLi9iZWx0X0FycmF5LmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX29wdGlvbiBmcm9tIFwiLi9jYW1sX29wdGlvbi5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9Tb3J0QXJyYXkgZnJvbSBcIi4vYmVsdF9Tb3J0QXJyYXkuanNcIjtcblxuZnVuY3Rpb24gaGVhZCh4KSB7XG4gIGlmICh4KSB7XG4gICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoeC5oZCk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGhlYWRFeG4oeCkge1xuICBpZiAoeCkge1xuICAgIHJldHVybiB4LmhkO1xuICB9XG4gIHRocm93IHtcbiAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHRhaWwoeCkge1xuICBpZiAoeCkge1xuICAgIHJldHVybiB4LnRsO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiB0YWlsRXhuKHgpIHtcbiAgaWYgKHgpIHtcbiAgICByZXR1cm4geC50bDtcbiAgfVxuICB0aHJvdyB7XG4gICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICB9O1xufVxuXG5mdW5jdGlvbiBhZGQoeHMsIHgpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBoZDogeCxcbiAgICAgICAgICB0bDogeHNcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0KHgsIG4pIHtcbiAgaWYgKG4gPCAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX3ggPSB4O1xuICAgIHZhciBfbiA9IG47XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIG4kMSA9IF9uO1xuICAgICAgdmFyIHgkMSA9IF94O1xuICAgICAgaWYgKCF4JDEpIHtcbiAgICAgICAgcmV0dXJuIDtcbiAgICAgIH1cbiAgICAgIGlmIChuJDEgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoeCQxLmhkKTtcbiAgICAgIH1cbiAgICAgIF9uID0gbiQxIC0gMSB8IDA7XG4gICAgICBfeCA9IHgkMS50bDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEV4bih4LCBuKSB7XG4gIGlmIChuIDwgMCkge1xuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IFwiTm90X2ZvdW5kXCIsXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH1cbiAgdmFyIF94ID0geDtcbiAgdmFyIF9uID0gbjtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBuJDEgPSBfbjtcbiAgICB2YXIgeCQxID0gX3g7XG4gICAgaWYgKHgkMSkge1xuICAgICAgaWYgKG4kMSA9PT0gMCkge1xuICAgICAgICByZXR1cm4geCQxLmhkO1xuICAgICAgfVxuICAgICAgX24gPSBuJDEgLSAxIHwgMDtcbiAgICAgIF94ID0geCQxLnRsO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICB0aHJvdyB7XG4gICAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb25BdXgocCwgX2NlbGwsIF9wcmVjWCwgX3ByZWNZKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlY1kgPSBfcHJlY1k7XG4gICAgdmFyIHByZWNYID0gX3ByZWNYO1xuICAgIHZhciBjZWxsID0gX2NlbGw7XG4gICAgaWYgKCFjZWxsKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgdCA9IGNlbGwudGw7XG4gICAgdmFyIGggPSBjZWxsLmhkO1xuICAgIHZhciBuZXh0ID0ge1xuICAgICAgaGQ6IGgsXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBpZiAocChoKSkge1xuICAgICAgcHJlY1gudGwgPSBuZXh0O1xuICAgICAgX3ByZWNYID0gbmV4dDtcbiAgICAgIF9jZWxsID0gdDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgcHJlY1kudGwgPSBuZXh0O1xuICAgIF9wcmVjWSA9IG5leHQ7XG4gICAgX2NlbGwgPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3BsaXRBdXgoX2NlbGwsIF9wcmVjWCwgX3ByZWNZKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlY1kgPSBfcHJlY1k7XG4gICAgdmFyIHByZWNYID0gX3ByZWNYO1xuICAgIHZhciBjZWxsID0gX2NlbGw7XG4gICAgaWYgKCFjZWxsKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgbWF0Y2ggPSBjZWxsLmhkO1xuICAgIHZhciBuZXh0QSA9IHtcbiAgICAgIGhkOiBtYXRjaFswXSxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHZhciBuZXh0QiA9IHtcbiAgICAgIGhkOiBtYXRjaFsxXSxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWNYLnRsID0gbmV4dEE7XG4gICAgcHJlY1kudGwgPSBuZXh0QjtcbiAgICBfcHJlY1kgPSBuZXh0QjtcbiAgICBfcHJlY1ggPSBuZXh0QTtcbiAgICBfY2VsbCA9IGNlbGwudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb3B5QXV4Q29udChfY2VsbFgsIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gcHJlYztcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogY2VsbFguaGQsXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gbmV4dDtcbiAgICBfcHJlYyA9IG5leHQ7XG4gICAgX2NlbGxYID0gY2VsbFgudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb3B5QXV4V2l0RmlsdGVyKGYsIF9jZWxsWCwgX3ByZWMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciB0ID0gY2VsbFgudGw7XG4gICAgdmFyIGggPSBjZWxsWC5oZDtcbiAgICBpZiAoZihoKSkge1xuICAgICAgdmFyIG5leHQgPSB7XG4gICAgICAgIGhkOiBoLFxuICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICB9O1xuICAgICAgcHJlYy50bCA9IG5leHQ7XG4gICAgICBfcHJlYyA9IG5leHQ7XG4gICAgICBfY2VsbFggPSB0O1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBfY2VsbFggPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eFdpdGhGaWx0ZXJJbmRleChmLCBfY2VsbFgsIF9wcmVjLCBfaSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgdCA9IGNlbGxYLnRsO1xuICAgIHZhciBoID0gY2VsbFguaGQ7XG4gICAgaWYgKGYoaCwgaSkpIHtcbiAgICAgIHZhciBuZXh0ID0ge1xuICAgICAgICBoZDogaCxcbiAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgfTtcbiAgICAgIHByZWMudGwgPSBuZXh0O1xuICAgICAgX2kgPSBpICsgMSB8IDA7XG4gICAgICBfcHJlYyA9IG5leHQ7XG4gICAgICBfY2VsbFggPSB0O1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBfY2VsbFggPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eFdpdEZpbHRlck1hcChmLCBfY2VsbFgsIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgdCA9IGNlbGxYLnRsO1xuICAgIHZhciBoID0gZihjZWxsWC5oZCk7XG4gICAgaWYgKGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIG5leHQgPSB7XG4gICAgICAgIGhkOiBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKGgpLFxuICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICB9O1xuICAgICAgcHJlYy50bCA9IG5leHQ7XG4gICAgICBfcHJlYyA9IG5leHQ7XG4gICAgICBfY2VsbFggPSB0O1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBfY2VsbFggPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXNzb2NBdXhXaXRoTWFwKF9jZWxsWCwgeCwgX3ByZWMsIGYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHQgPSBjZWxsWC50bDtcbiAgICB2YXIgaCA9IGNlbGxYLmhkO1xuICAgIGlmIChmKGhbMF0sIHgpKSB7XG4gICAgICBwcmVjLnRsID0gdDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgbmV4dCA9IHtcbiAgICAgIGhkOiBoLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IG5leHQ7XG4gICAgX3ByZWMgPSBuZXh0O1xuICAgIF9jZWxsWCA9IHQ7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzZXRBc3NvY0F1eFdpdGhNYXAoX2NlbGxYLCB4LCBrLCBfcHJlYywgZXEpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHQgPSBjZWxsWC50bDtcbiAgICB2YXIgaCA9IGNlbGxYLmhkO1xuICAgIGlmIChlcShoWzBdLCB4KSkge1xuICAgICAgcHJlYy50bCA9IHtcbiAgICAgICAgaGQ6IFtcbiAgICAgICAgICB4LFxuICAgICAgICAgIGtcbiAgICAgICAgXSxcbiAgICAgICAgdGw6IHRcbiAgICAgIH07XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogaCxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWMudGwgPSBuZXh0O1xuICAgIF9wcmVjID0gbmV4dDtcbiAgICBfY2VsbFggPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eFdpdGhNYXAoX2NlbGxYLCBfcHJlYywgZikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogZihjZWxsWC5oZCksXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gbmV4dDtcbiAgICBfcHJlYyA9IG5leHQ7XG4gICAgX2NlbGxYID0gY2VsbFgudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiB6aXBBdXgoX2NlbGxYLCBfY2VsbFksIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWSA9IF9jZWxsWTtcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgaWYgKCFjZWxsWSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogW1xuICAgICAgICBjZWxsWC5oZCxcbiAgICAgICAgY2VsbFkuaGRcbiAgICAgIF0sXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gbmV4dDtcbiAgICBfcHJlYyA9IG5leHQ7XG4gICAgX2NlbGxZID0gY2VsbFkudGw7XG4gICAgX2NlbGxYID0gY2VsbFgudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb3B5QXV4V2l0aE1hcDIoZiwgX2NlbGxYLCBfY2VsbFksIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWSA9IF9jZWxsWTtcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgaWYgKCFjZWxsWSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogZihjZWxsWC5oZCwgY2VsbFkuaGQpLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IG5leHQ7XG4gICAgX3ByZWMgPSBuZXh0O1xuICAgIF9jZWxsWSA9IGNlbGxZLnRsO1xuICAgIF9jZWxsWCA9IGNlbGxYLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eFdpdGhNYXBJKGYsIF9pLCBfY2VsbFgsIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciBuZXh0ID0ge1xuICAgICAgaGQ6IGYoaSwgY2VsbFguaGQpLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IG5leHQ7XG4gICAgX3ByZWMgPSBuZXh0O1xuICAgIF9jZWxsWCA9IGNlbGxYLnRsO1xuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGFrZUF1eChfbiwgX2NlbGwsIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsID0gX2NlbGw7XG4gICAgdmFyIG4gPSBfbjtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghY2VsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgY2VsbCQxID0ge1xuICAgICAgaGQ6IGNlbGwuaGQsXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gY2VsbCQxO1xuICAgIF9wcmVjID0gY2VsbCQxO1xuICAgIF9jZWxsID0gY2VsbC50bDtcbiAgICBfbiA9IG4gLSAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNwbGl0QXRBdXgoX24sIF9jZWxsLCBfcHJlYykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbCA9IF9jZWxsO1xuICAgIHZhciBuID0gX247XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cbiAgICBpZiAoIWNlbGwpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciBjZWxsJDEgPSB7XG4gICAgICBoZDogY2VsbC5oZCxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWMudGwgPSBjZWxsJDE7XG4gICAgX3ByZWMgPSBjZWxsJDE7XG4gICAgX2NlbGwgPSBjZWxsLnRsO1xuICAgIF9uID0gbiAtIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGFrZShsc3QsIG4pIHtcbiAgaWYgKG4gPCAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICBpZiAobiA9PT0gMCkge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgaWYgKCFsc3QpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiBsc3QuaGQsXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgaGFzID0gdGFrZUF1eChuIC0gMSB8IDAsIGxzdC50bCwgY2VsbCk7XG4gIGlmIChoYXMpIHtcbiAgICByZXR1cm4gY2VsbDtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gZHJvcChsc3QsIG4pIHtcbiAgaWYgKG4gPCAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2wgPSBsc3Q7XG4gICAgdmFyIF9uID0gbjtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgbiQxID0gX247XG4gICAgICB2YXIgbCA9IF9sO1xuICAgICAgaWYgKG4kMSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbDtcbiAgICAgIH1cbiAgICAgIGlmICghbCkge1xuICAgICAgICByZXR1cm4gO1xuICAgICAgfVxuICAgICAgX24gPSBuJDEgLSAxIHwgMDtcbiAgICAgIF9sID0gbC50bDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNwbGl0QXQobHN0LCBuKSB7XG4gIGlmIChuIDwgMCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgaWYgKG4gPT09IDApIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgLyogW10gKi8wLFxuICAgICAgICAgICAgbHN0XG4gICAgICAgICAgXTtcbiAgfVxuICBpZiAoIWxzdCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IGxzdC5oZCxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciByZXN0ID0gc3BsaXRBdEF1eChuIC0gMSB8IDAsIGxzdC50bCwgY2VsbCk7XG4gIGlmIChyZXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgY2VsbCxcbiAgICAgICAgICAgIHJlc3RcbiAgICAgICAgICBdO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBjb25jYXQoeHMsIHlzKSB7XG4gIGlmICgheHMpIHtcbiAgICByZXR1cm4geXM7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IHhzLmhkLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgY29weUF1eENvbnQoeHMudGwsIGNlbGwpLnRsID0geXM7XG4gIHJldHVybiBjZWxsO1xufVxuXG5mdW5jdGlvbiBtYXBVKHhzLCBmKSB7XG4gIGlmICgheHMpIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiBmKHhzLmhkKSxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIGNvcHlBdXhXaXRoTWFwKHhzLnRsLCBjZWxsLCBmKTtcbiAgcmV0dXJuIGNlbGw7XG59XG5cbmZ1bmN0aW9uIG1hcCh4cywgZikge1xuICByZXR1cm4gbWFwVSh4cywgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gemlwQnlVKGwxLCBsMiwgZikge1xuICBpZiAoIWwxKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICBpZiAoIWwyKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICB2YXIgY2VsbCA9IHtcbiAgICBoZDogZihsMS5oZCwgbDIuaGQpLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgY29weUF1eFdpdGhNYXAyKGYsIGwxLnRsLCBsMi50bCwgY2VsbCk7XG4gIHJldHVybiBjZWxsO1xufVxuXG5mdW5jdGlvbiB6aXBCeShsMSwgbDIsIGYpIHtcbiAgcmV0dXJuIHppcEJ5VShsMSwgbDIsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIG1hcFdpdGhJbmRleFUoeHMsIGYpIHtcbiAgaWYgKCF4cykge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IGYoMCwgeHMuaGQpLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgY29weUF1eFdpdGhNYXBJKGYsIDEsIHhzLnRsLCBjZWxsKTtcbiAgcmV0dXJuIGNlbGw7XG59XG5cbmZ1bmN0aW9uIG1hcFdpdGhJbmRleCh4cywgZikge1xuICByZXR1cm4gbWFwV2l0aEluZGV4VSh4cywgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gbWFrZUJ5VShuLCBmKSB7XG4gIGlmIChuIDw9IDApIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIHZhciBoZWFkWCA9IHtcbiAgICBoZDogZigwKSxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciBjdXIgPSBoZWFkWDtcbiAgdmFyIGkgPSAxO1xuICB3aGlsZShpIDwgbikge1xuICAgIHZhciB2ID0ge1xuICAgICAgaGQ6IGYoaSksXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBjdXIudGwgPSB2O1xuICAgIGN1ciA9IHY7XG4gICAgaSA9IGkgKyAxIHwgMDtcbiAgfTtcbiAgcmV0dXJuIGhlYWRYO1xufVxuXG5mdW5jdGlvbiBtYWtlQnkobiwgZikge1xuICByZXR1cm4gbWFrZUJ5VShuLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBtYWtlKG4sIHYpIHtcbiAgaWYgKG4gPD0gMCkge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgdmFyIGhlYWRYID0ge1xuICAgIGhkOiB2LFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIGN1ciA9IGhlYWRYO1xuICB2YXIgaSA9IDE7XG4gIHdoaWxlKGkgPCBuKSB7XG4gICAgdmFyIHYkMSA9IHtcbiAgICAgIGhkOiB2LFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgY3VyLnRsID0gdiQxO1xuICAgIGN1ciA9IHYkMTtcbiAgICBpID0gaSArIDEgfCAwO1xuICB9O1xuICByZXR1cm4gaGVhZFg7XG59XG5cbmZ1bmN0aW9uIGxlbmd0aCh4cykge1xuICB2YXIgX3ggPSB4cztcbiAgdmFyIF9hY2MgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgdmFyIHggPSBfeDtcbiAgICBpZiAoIXgpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIF9hY2MgPSBhY2MgKyAxIHwgMDtcbiAgICBfeCA9IHgudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWxsQXV4KGFyciwgX2ksIF94KSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeCA9IF94O1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKCF4KSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBhcnJbaV0gPSB4LmhkO1xuICAgIF94ID0geC50bDtcbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheShhKSB7XG4gIHZhciBfaSA9IGEubGVuZ3RoIC0gMSB8IDA7XG4gIHZhciBfcmVzID0gLyogW10gKi8wO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHJlcyA9IF9yZXM7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIF9yZXMgPSB7XG4gICAgICBoZDogYVtpXSxcbiAgICAgIHRsOiByZXNcbiAgICB9O1xuICAgIF9pID0gaSAtIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheSh4KSB7XG4gIHZhciBsZW4gPSBsZW5ndGgoeCk7XG4gIHZhciBhcnIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZmlsbEF1eChhcnIsIDAsIHgpO1xuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBzaHVmZmxlKHhzKSB7XG4gIHZhciB2ID0gdG9BcnJheSh4cyk7XG4gIEJlbHRfQXJyYXkuc2h1ZmZsZUluUGxhY2Uodik7XG4gIHJldHVybiBmcm9tQXJyYXkodik7XG59XG5cbmZ1bmN0aW9uIHJldmVyc2VDb25jYXQoX2wxLCBfbDIpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKCFsMSkge1xuICAgICAgcmV0dXJuIGwyO1xuICAgIH1cbiAgICBfbDIgPSB7XG4gICAgICBoZDogbDEuaGQsXG4gICAgICB0bDogbDJcbiAgICB9O1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmV2ZXJzZShsKSB7XG4gIHJldHVybiByZXZlcnNlQ29uY2F0KGwsIC8qIFtdICovMCk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5BdXgoX3ByZWMsIF94cykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgaWYgKHhzKSB7XG4gICAgICBfeHMgPSB4cy50bDtcbiAgICAgIF9wcmVjID0gY29weUF1eENvbnQoeHMuaGQsIHByZWMpO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBwcmVjLnRsID0gLyogW10gKi8wO1xuICAgIHJldHVybiA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oX3hzKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIC8qIFtdICovMDtcbiAgICB9XG4gICAgdmFyIG1hdGNoID0geHMuaGQ7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICB2YXIgY2VsbCA9IHtcbiAgICAgICAgaGQ6IG1hdGNoLmhkLFxuICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICB9O1xuICAgICAgZmxhdHRlbkF1eChjb3B5QXV4Q29udChtYXRjaC50bCwgY2VsbCksIHhzLnRsKTtcbiAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbmNhdE1hbnkoeHMpIHtcbiAgdmFyIGxlbiA9IHhzLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMSkge1xuICAgIHJldHVybiB4c1swXTtcbiAgfVxuICBpZiAobGVuID09PSAwKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICB2YXIgbGVuJDEgPSB4cy5sZW5ndGg7XG4gIHZhciB2ID0geHNbbGVuJDEgLSAxIHwgMF07XG4gIGZvcih2YXIgaSA9IGxlbiQxIC0gMiB8IDA7IGkgPj0gMDsgLS1pKXtcbiAgICB2ID0gY29uY2F0KHhzW2ldLCB2KTtcbiAgfVxuICByZXR1cm4gdjtcbn1cblxuZnVuY3Rpb24gbWFwUmV2ZXJzZVUobCwgZikge1xuICB2YXIgX2FjY3UgPSAvKiBbXSAqLzA7XG4gIHZhciBfeHMgPSBsO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIF94cyA9IHhzLnRsO1xuICAgIF9hY2N1ID0ge1xuICAgICAgaGQ6IGYoeHMuaGQpLFxuICAgICAgdGw6IGFjY3VcbiAgICB9O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwUmV2ZXJzZShsLCBmKSB7XG4gIHJldHVybiBtYXBSZXZlcnNlVShsLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoVShfeHMsIGYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBmKHhzLmhkKTtcbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvckVhY2goeHMsIGYpIHtcbiAgcmV0dXJuIGZvckVhY2hVKHhzLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoV2l0aEluZGV4VShsLCBmKSB7XG4gIHZhciBfeHMgPSBsO1xuICB2YXIgX2kgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgZihpLCB4cy5oZCk7XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoV2l0aEluZGV4KGwsIGYpIHtcbiAgcmV0dXJuIGZvckVhY2hXaXRoSW5kZXhVKGwsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVUoX2wsIF9hY2N1LCBmKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYWNjdSA9IF9hY2N1O1xuICAgIHZhciBsID0gX2w7XG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9XG4gICAgX2FjY3UgPSBmKGFjY3UsIGwuaGQpO1xuICAgIF9sID0gbC50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZShsLCBhY2N1LCBmKSB7XG4gIHJldHVybiByZWR1Y2VVKGwsIGFjY3UsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2VVbnNhZmVVKGwsIGFjY3UsIGYpIHtcbiAgaWYgKGwpIHtcbiAgICByZXR1cm4gZihyZWR1Y2VSZXZlcnNlVW5zYWZlVShsLnRsLCBhY2N1LCBmKSwgbC5oZCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFjY3U7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZVUobCwgYWNjLCBmKSB7XG4gIHZhciBsZW4gPSBsZW5ndGgobCk7XG4gIGlmIChsZW4gPCAxMDAwKSB7XG4gICAgcmV0dXJuIHJlZHVjZVJldmVyc2VVbnNhZmVVKGwsIGFjYywgZik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEJlbHRfQXJyYXkucmVkdWNlUmV2ZXJzZVUodG9BcnJheShsKSwgYWNjLCBmKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlKGwsIGFjY3UsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVJldmVyc2VVKGwsIGFjY3UsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVdpdGhJbmRleFUobCwgYWNjLCBmKSB7XG4gIHZhciBfbCA9IGw7XG4gIHZhciBfYWNjID0gYWNjO1xuICB2YXIgX2kgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICB2YXIgYWNjJDEgPSBfYWNjO1xuICAgIHZhciBsJDEgPSBfbDtcbiAgICBpZiAoIWwkMSkge1xuICAgICAgcmV0dXJuIGFjYyQxO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBfYWNjID0gZihhY2MkMSwgbCQxLmhkLCBpKTtcbiAgICBfbCA9IGwkMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVdpdGhJbmRleChsLCBhY2MsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVdpdGhJbmRleFUobCwgYWNjLCBDdXJyeS5fXzMoZikpO1xufVxuXG5mdW5jdGlvbiBtYXBSZXZlcnNlMlUobDEsIGwyLCBmKSB7XG4gIHZhciBfbDEgPSBsMTtcbiAgdmFyIF9sMiA9IGwyO1xuICB2YXIgX2FjY3UgPSAvKiBbXSAqLzA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYWNjdSA9IF9hY2N1O1xuICAgIHZhciBsMiQxID0gX2wyO1xuICAgIHZhciBsMSQxID0gX2wxO1xuICAgIGlmICghbDEkMSkge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIGlmICghbDIkMSkge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIF9hY2N1ID0ge1xuICAgICAgaGQ6IGYobDEkMS5oZCwgbDIkMS5oZCksXG4gICAgICB0bDogYWNjdVxuICAgIH07XG4gICAgX2wyID0gbDIkMS50bDtcbiAgICBfbDEgPSBsMSQxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwUmV2ZXJzZTIobDEsIGwyLCBmKSB7XG4gIHJldHVybiBtYXBSZXZlcnNlMlUobDEsIGwyLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoMlUoX2wxLCBfbDIsIGYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKCFsMSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgZihsMS5oZCwgbDIuaGQpO1xuICAgIF9sMiA9IGwyLnRsO1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaDIobDEsIGwyLCBmKSB7XG4gIHJldHVybiBmb3JFYWNoMlUobDEsIGwyLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2UyVShfbDEsIF9sMiwgX2FjY3UsIGYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgdmFyIGwyID0gX2wyO1xuICAgIHZhciBsMSA9IF9sMTtcbiAgICBpZiAoIWwxKSB7XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIF9hY2N1ID0gZihhY2N1LCBsMS5oZCwgbDIuaGQpO1xuICAgIF9sMiA9IGwyLnRsO1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlMihsMSwgbDIsIGFjYywgZikge1xuICByZXR1cm4gcmVkdWNlMlUobDEsIGwyLCBhY2MsIEN1cnJ5Ll9fMyhmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2UyVW5zYWZlVShsMSwgbDIsIGFjY3UsIGYpIHtcbiAgaWYgKGwxICYmIGwyKSB7XG4gICAgcmV0dXJuIGYocmVkdWNlUmV2ZXJzZTJVbnNhZmVVKGwxLnRsLCBsMi50bCwgYWNjdSwgZiksIGwxLmhkLCBsMi5oZCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFjY3U7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZTJVKGwxLCBsMiwgYWNjLCBmKSB7XG4gIHZhciBsZW4gPSBsZW5ndGgobDEpO1xuICBpZiAobGVuIDwgMTAwMCkge1xuICAgIHJldHVybiByZWR1Y2VSZXZlcnNlMlVuc2FmZVUobDEsIGwyLCBhY2MsIGYpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBCZWx0X0FycmF5LnJlZHVjZVJldmVyc2UyVSh0b0FycmF5KGwxKSwgdG9BcnJheShsMiksIGFjYywgZik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZTIobDEsIGwyLCBhY2MsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVJldmVyc2UyVShsMSwgbDIsIGFjYywgQ3VycnkuX18zKGYpKTtcbn1cblxuZnVuY3Rpb24gZXZlcnlVKF94cywgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXAoeHMuaGQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF94cyA9IHhzLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXZlcnkoeHMsIHApIHtcbiAgcmV0dXJuIGV2ZXJ5VSh4cywgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gc29tZVUoX3hzLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocCh4cy5oZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNvbWUoeHMsIHApIHtcbiAgcmV0dXJuIHNvbWVVKHhzLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBldmVyeTJVKF9sMSwgX2wyLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWwyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFwKGwxLmhkLCBsMi5oZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX2wyID0gbDIudGw7XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBldmVyeTIobDEsIGwyLCBwKSB7XG4gIHJldHVybiBldmVyeTJVKGwxLCBsMiwgQ3VycnkuX18yKHApKTtcbn1cblxuZnVuY3Rpb24gY21wQnlMZW5ndGgoX2wxLCBfbDIpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKCFsMSkge1xuICAgICAgaWYgKGwyKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWwyKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgX2wyID0gbDIudGw7XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjbXBVKF9sMSwgX2wyLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIGlmIChsMikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHZhciBjID0gcChsMS5oZCwgbDIuaGQpO1xuICAgIGlmIChjICE9PSAwKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgX2wyID0gbDIudGw7XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjbXAobDEsIGwyLCBmKSB7XG4gIHJldHVybiBjbXBVKGwxLCBsMiwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gZXFVKF9sMSwgX2wyLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIGlmIChsMikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXAobDEuaGQsIGwyLmhkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfbDIgPSBsMi50bDtcbiAgICBfbDEgPSBsMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVxKGwxLCBsMiwgZikge1xuICByZXR1cm4gZXFVKGwxLCBsMiwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gc29tZTJVKF9sMSwgX2wyLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocChsMS5oZCwgbDIuaGQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX2wyID0gbDIudGw7XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzb21lMihsMSwgbDIsIHApIHtcbiAgcmV0dXJuIHNvbWUyVShsMSwgbDIsIEN1cnJ5Ll9fMihwKSk7XG59XG5cbmZ1bmN0aW9uIGhhc1UoX3hzLCB4LCBlcSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGVxKHhzLmhkLCB4KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF94cyA9IHhzLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaGFzKHhzLCB4LCBlcSkge1xuICByZXR1cm4gaGFzVSh4cywgeCwgQ3VycnkuX18yKGVxKSk7XG59XG5cbmZ1bmN0aW9uIGdldEFzc29jVShfeHMsIHgsIGVxKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIG1hdGNoID0geHMuaGQ7XG4gICAgaWYgKGVxKG1hdGNoWzBdLCB4KSkge1xuICAgICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUobWF0Y2hbMV0pO1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEFzc29jKHhzLCB4LCBlcSkge1xuICByZXR1cm4gZ2V0QXNzb2NVKHhzLCB4LCBDdXJyeS5fXzIoZXEpKTtcbn1cblxuZnVuY3Rpb24gaGFzQXNzb2NVKF94cywgeCwgZXEpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChlcSh4cy5oZFswXSwgeCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGhhc0Fzc29jKHhzLCB4LCBlcSkge1xuICByZXR1cm4gaGFzQXNzb2NVKHhzLCB4LCBDdXJyeS5fXzIoZXEpKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXNzb2NVKHhzLCB4LCBlcSkge1xuICBpZiAoIXhzKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICB2YXIgbCA9IHhzLnRsO1xuICB2YXIgcGFpciA9IHhzLmhkO1xuICBpZiAoZXEocGFpclswXSwgeCkpIHtcbiAgICByZXR1cm4gbDtcbiAgfVxuICB2YXIgY2VsbCA9IHtcbiAgICBoZDogcGFpcixcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciByZW1vdmVkID0gcmVtb3ZlQXNzb2NBdXhXaXRoTWFwKGwsIHgsIGNlbGwsIGVxKTtcbiAgaWYgKHJlbW92ZWQpIHtcbiAgICByZXR1cm4gY2VsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXNzb2MoeHMsIHgsIGVxKSB7XG4gIHJldHVybiByZW1vdmVBc3NvY1UoeHMsIHgsIEN1cnJ5Ll9fMihlcSkpO1xufVxuXG5mdW5jdGlvbiBzZXRBc3NvY1UoeHMsIHgsIGssIGVxKSB7XG4gIGlmICgheHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IFtcbiAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAga1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICB9O1xuICB9XG4gIHZhciBsID0geHMudGw7XG4gIHZhciBwYWlyID0geHMuaGQ7XG4gIGlmIChlcShwYWlyWzBdLCB4KSkge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZDogW1xuICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICBrXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdGw6IGxcbiAgICAgICAgICB9O1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiBwYWlyLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIHJlcGxhY2VkID0gc2V0QXNzb2NBdXhXaXRoTWFwKGwsIHgsIGssIGNlbGwsIGVxKTtcbiAgaWYgKHJlcGxhY2VkKSB7XG4gICAgcmV0dXJuIGNlbGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiBbXG4gICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgIGtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0bDogeHNcbiAgICAgICAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEFzc29jKHhzLCB4LCBrLCBlcSkge1xuICByZXR1cm4gc2V0QXNzb2NVKHhzLCB4LCBrLCBDdXJyeS5fXzIoZXEpKTtcbn1cblxuZnVuY3Rpb24gc29ydFUoeHMsIGNtcCkge1xuICB2YXIgYXJyID0gdG9BcnJheSh4cyk7XG4gIEJlbHRfU29ydEFycmF5LnN0YWJsZVNvcnRJblBsYWNlQnlVKGFyciwgY21wKTtcbiAgcmV0dXJuIGZyb21BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBzb3J0KHhzLCBjbXApIHtcbiAgcmV0dXJuIHNvcnRVKHhzLCBDdXJyeS5fXzIoY21wKSk7XG59XG5cbmZ1bmN0aW9uIGdldEJ5VShfeHMsIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgeCA9IHhzLmhkO1xuICAgIGlmIChwKHgpKSB7XG4gICAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZSh4KTtcbiAgICB9XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRCeSh4cywgcCkge1xuICByZXR1cm4gZ2V0QnlVKHhzLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBrZWVwVShfeHMsIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gLyogW10gKi8wO1xuICAgIH1cbiAgICB2YXIgdCA9IHhzLnRsO1xuICAgIHZhciBoID0geHMuaGQ7XG4gICAgaWYgKHAoaCkpIHtcbiAgICAgIHZhciBjZWxsID0ge1xuICAgICAgICBoZDogaCxcbiAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgfTtcbiAgICAgIGNvcHlBdXhXaXRGaWx0ZXIocCwgdCwgY2VsbCk7XG4gICAgICByZXR1cm4gY2VsbDtcbiAgICB9XG4gICAgX3hzID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGtlZXAoeHMsIHApIHtcbiAgcmV0dXJuIGtlZXBVKHhzLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBrZWVwV2l0aEluZGV4VSh4cywgcCkge1xuICB2YXIgX3hzID0geHM7XG4gIHZhciBfaSA9IDA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIHZhciB4cyQxID0gX3hzO1xuICAgIGlmICgheHMkMSkge1xuICAgICAgcmV0dXJuIC8qIFtdICovMDtcbiAgICB9XG4gICAgdmFyIHQgPSB4cyQxLnRsO1xuICAgIHZhciBoID0geHMkMS5oZDtcbiAgICBpZiAocChoLCBpKSkge1xuICAgICAgdmFyIGNlbGwgPSB7XG4gICAgICAgIGhkOiBoLFxuICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICB9O1xuICAgICAgY29weUF1eFdpdGhGaWx0ZXJJbmRleChwLCB0LCBjZWxsLCBpICsgMSB8IDApO1xuICAgICAgcmV0dXJuIGNlbGw7XG4gICAgfVxuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIF94cyA9IHQ7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBrZWVwV2l0aEluZGV4KHhzLCBwKSB7XG4gIHJldHVybiBrZWVwV2l0aEluZGV4VSh4cywgQ3VycnkuX18yKHApKTtcbn1cblxuZnVuY3Rpb24ga2VlcE1hcFUoX3hzLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIC8qIFtdICovMDtcbiAgICB9XG4gICAgdmFyIHQgPSB4cy50bDtcbiAgICB2YXIgaCA9IHAoeHMuaGQpO1xuICAgIGlmIChoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBjZWxsID0ge1xuICAgICAgICBoZDogQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbihoKSxcbiAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgfTtcbiAgICAgIGNvcHlBdXhXaXRGaWx0ZXJNYXAocCwgdCwgY2VsbCk7XG4gICAgICByZXR1cm4gY2VsbDtcbiAgICB9XG4gICAgX3hzID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGtlZXBNYXAoeHMsIHApIHtcbiAgcmV0dXJuIGtlZXBNYXBVKHhzLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb25VKGwsIHApIHtcbiAgaWYgKCFsKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC8qIFtdICovMCxcbiAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgIF07XG4gIH1cbiAgdmFyIGggPSBsLmhkO1xuICB2YXIgbmV4dFggPSB7XG4gICAgaGQ6IGgsXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgbmV4dFkgPSB7XG4gICAgaGQ6IGgsXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgYiA9IHAoaCk7XG4gIHBhcnRpdGlvbkF1eChwLCBsLnRsLCBuZXh0WCwgbmV4dFkpO1xuICBpZiAoYikge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBuZXh0WCxcbiAgICAgICAgICAgIG5leHRZLnRsXG4gICAgICAgICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgbmV4dFgudGwsXG4gICAgICAgICAgICBuZXh0WVxuICAgICAgICAgIF07XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uKGwsIHApIHtcbiAgcmV0dXJuIHBhcnRpdGlvblUobCwgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gdW56aXAoeHMpIHtcbiAgaWYgKCF4cykge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICAvKiBbXSAqLzAsXG4gICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICBdO1xuICB9XG4gIHZhciBtYXRjaCA9IHhzLmhkO1xuICB2YXIgY2VsbFggPSB7XG4gICAgaGQ6IG1hdGNoWzBdLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIGNlbGxZID0ge1xuICAgIGhkOiBtYXRjaFsxXSxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHNwbGl0QXV4KHhzLnRsLCBjZWxsWCwgY2VsbFkpO1xuICByZXR1cm4gW1xuICAgICAgICAgIGNlbGxYLFxuICAgICAgICAgIGNlbGxZXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIHppcChsMSwgbDIpIHtcbiAgaWYgKCFsMSkge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgaWYgKCFsMikge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IFtcbiAgICAgIGwxLmhkLFxuICAgICAgbDIuaGRcbiAgICBdLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgemlwQXV4KGwxLnRsLCBsMi50bCwgY2VsbCk7XG4gIHJldHVybiBjZWxsO1xufVxuXG52YXIgc2l6ZSA9IGxlbmd0aDtcblxudmFyIGZpbHRlciA9IGtlZXA7XG5cbnZhciBmaWx0ZXJXaXRoSW5kZXggPSBrZWVwV2l0aEluZGV4O1xuXG5leHBvcnQge1xuICBsZW5ndGggLFxuICBzaXplICxcbiAgaGVhZCAsXG4gIGhlYWRFeG4gLFxuICB0YWlsICxcbiAgdGFpbEV4biAsXG4gIGFkZCAsXG4gIGdldCAsXG4gIGdldEV4biAsXG4gIG1ha2UgLFxuICBtYWtlQnlVICxcbiAgbWFrZUJ5ICxcbiAgc2h1ZmZsZSAsXG4gIGRyb3AgLFxuICB0YWtlICxcbiAgc3BsaXRBdCAsXG4gIGNvbmNhdCAsXG4gIGNvbmNhdE1hbnkgLFxuICByZXZlcnNlQ29uY2F0ICxcbiAgZmxhdHRlbiAsXG4gIG1hcFUgLFxuICBtYXAgLFxuICB6aXAgLFxuICB6aXBCeVUgLFxuICB6aXBCeSAsXG4gIG1hcFdpdGhJbmRleFUgLFxuICBtYXBXaXRoSW5kZXggLFxuICBmcm9tQXJyYXkgLFxuICB0b0FycmF5ICxcbiAgcmV2ZXJzZSAsXG4gIG1hcFJldmVyc2VVICxcbiAgbWFwUmV2ZXJzZSAsXG4gIGZvckVhY2hVICxcbiAgZm9yRWFjaCAsXG4gIGZvckVhY2hXaXRoSW5kZXhVICxcbiAgZm9yRWFjaFdpdGhJbmRleCAsXG4gIHJlZHVjZVUgLFxuICByZWR1Y2UgLFxuICByZWR1Y2VXaXRoSW5kZXhVICxcbiAgcmVkdWNlV2l0aEluZGV4ICxcbiAgcmVkdWNlUmV2ZXJzZVUgLFxuICByZWR1Y2VSZXZlcnNlICxcbiAgbWFwUmV2ZXJzZTJVICxcbiAgbWFwUmV2ZXJzZTIgLFxuICBmb3JFYWNoMlUgLFxuICBmb3JFYWNoMiAsXG4gIHJlZHVjZTJVICxcbiAgcmVkdWNlMiAsXG4gIHJlZHVjZVJldmVyc2UyVSAsXG4gIHJlZHVjZVJldmVyc2UyICxcbiAgZXZlcnlVICxcbiAgZXZlcnkgLFxuICBzb21lVSAsXG4gIHNvbWUgLFxuICBldmVyeTJVICxcbiAgZXZlcnkyICxcbiAgc29tZTJVICxcbiAgc29tZTIgLFxuICBjbXBCeUxlbmd0aCAsXG4gIGNtcFUgLFxuICBjbXAgLFxuICBlcVUgLFxuICBlcSAsXG4gIGhhc1UgLFxuICBoYXMgLFxuICBnZXRCeVUgLFxuICBnZXRCeSAsXG4gIGtlZXBVICxcbiAga2VlcCAsXG4gIGZpbHRlciAsXG4gIGtlZXBXaXRoSW5kZXhVICxcbiAga2VlcFdpdGhJbmRleCAsXG4gIGZpbHRlcldpdGhJbmRleCAsXG4gIGtlZXBNYXBVICxcbiAga2VlcE1hcCAsXG4gIHBhcnRpdGlvblUgLFxuICBwYXJ0aXRpb24gLFxuICB1bnppcCAsXG4gIGdldEFzc29jVSAsXG4gIGdldEFzc29jICxcbiAgaGFzQXNzb2NVICxcbiAgaGFzQXNzb2MgLFxuICByZW1vdmVBc3NvY1UgLFxuICByZW1vdmVBc3NvYyAsXG4gIHNldEFzc29jVSAsXG4gIHNldEFzc29jICxcbiAgc29ydFUgLFxuICBzb3J0ICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCIuL2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX29wdGlvbiBmcm9tIFwiLi9jYW1sX29wdGlvbi5qc1wiO1xuXG5mdW5jdGlvbiBrZWVwVShvcHQsIHApIHtcbiAgaWYgKG9wdCAhPT0gdW5kZWZpbmVkICYmIHAoQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbihvcHQpKSkge1xuICAgIHJldHVybiBvcHQ7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGtlZXAob3B0LCBwKSB7XG4gIHJldHVybiBrZWVwVShvcHQsIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hVKG9wdCwgZikge1xuICBpZiAob3B0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZihDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKG9wdCkpO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBmb3JFYWNoKG9wdCwgZikge1xuICByZXR1cm4gZm9yRWFjaFUob3B0LCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBnZXRFeG4oeCkge1xuICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24oeCk7XG4gIH1cbiAgdGhyb3cge1xuICAgICAgICBSRV9FWE5fSUQ6IFwiTm90X2ZvdW5kXCIsXG4gICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgfTtcbn1cblxuZnVuY3Rpb24gbWFwV2l0aERlZmF1bHRVKG9wdCwgJCRkZWZhdWx0LCBmKSB7XG4gIGlmIChvcHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmKENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24ob3B0KSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICQkZGVmYXVsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBtYXBXaXRoRGVmYXVsdChvcHQsICQkZGVmYXVsdCwgZikge1xuICByZXR1cm4gbWFwV2l0aERlZmF1bHRVKG9wdCwgJCRkZWZhdWx0LCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBtYXBVKG9wdCwgZikge1xuICBpZiAob3B0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZShmKENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24ob3B0KSkpO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBtYXAob3B0LCBmKSB7XG4gIHJldHVybiBtYXBVKG9wdCwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gZmxhdE1hcFUob3B0LCBmKSB7XG4gIGlmIChvcHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmKENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24ob3B0KSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGZsYXRNYXAob3B0LCBmKSB7XG4gIHJldHVybiBmbGF0TWFwVShvcHQsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIGdldFdpdGhEZWZhdWx0KG9wdCwgJCRkZWZhdWx0KSB7XG4gIGlmIChvcHQgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKG9wdCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuICQkZGVmYXVsdDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1NvbWUocGFyYW0pIHtcbiAgcmV0dXJuIHBhcmFtICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGlzTm9uZSh4KSB7XG4gIHJldHVybiB4ID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIGVxVShhLCBiLCBmKSB7XG4gIGlmIChhICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAoYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZihDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKGEpLCBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKGIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYiA9PT0gdW5kZWZpbmVkO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVxKGEsIGIsIGYpIHtcbiAgcmV0dXJuIGVxVShhLCBiLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiBjbXBVKGEsIGIsIGYpIHtcbiAgaWYgKGEgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChiICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmKENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24oYSksIENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24oYikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoYiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNtcChhLCBiLCBmKSB7XG4gIHJldHVybiBjbXBVKGEsIGIsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmV4cG9ydCB7XG4gIGtlZXBVICxcbiAga2VlcCAsXG4gIGZvckVhY2hVICxcbiAgZm9yRWFjaCAsXG4gIGdldEV4biAsXG4gIG1hcFdpdGhEZWZhdWx0VSAsXG4gIG1hcFdpdGhEZWZhdWx0ICxcbiAgbWFwVSAsXG4gIG1hcCAsXG4gIGZsYXRNYXBVICxcbiAgZmxhdE1hcCAsXG4gIGdldFdpdGhEZWZhdWx0ICxcbiAgaXNTb21lICxcbiAgaXNOb25lICxcbiAgZXFVICxcbiAgZXEgLFxuICBjbXBVICxcbiAgY21wICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCIuL2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X1NldERpY3QgZnJvbSBcIi4vYmVsdF9TZXREaWN0LmpzXCI7XG5cbmZ1bmN0aW9uIGZyb21BcnJheShkYXRhLCBpZCkge1xuICB2YXIgY21wID0gaWQuY21wO1xuICByZXR1cm4ge1xuICAgICAgICAgIGNtcDogY21wLFxuICAgICAgICAgIGRhdGE6IEJlbHRfU2V0RGljdC5mcm9tQXJyYXkoZGF0YSwgY21wKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmUobSwgZSkge1xuICB2YXIgZGF0YSA9IG0uZGF0YTtcbiAgdmFyIGNtcCA9IG0uY21wO1xuICB2YXIgbmV3RGF0YSA9IEJlbHRfU2V0RGljdC5yZW1vdmUoZGF0YSwgZSwgY21wKTtcbiAgaWYgKG5ld0RhdGEgPT09IGRhdGEpIHtcbiAgICByZXR1cm4gbTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgY21wOiBjbXAsXG4gICAgICAgICAgICBkYXRhOiBuZXdEYXRhXG4gICAgICAgICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGQobSwgZSkge1xuICB2YXIgZGF0YSA9IG0uZGF0YTtcbiAgdmFyIGNtcCA9IG0uY21wO1xuICB2YXIgbmV3RGF0YSA9IEJlbHRfU2V0RGljdC5hZGQoZGF0YSwgZSwgY21wKTtcbiAgaWYgKG5ld0RhdGEgPT09IGRhdGEpIHtcbiAgICByZXR1cm4gbTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgY21wOiBjbXAsXG4gICAgICAgICAgICBkYXRhOiBuZXdEYXRhXG4gICAgICAgICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZU1hbnkobSwgZSkge1xuICB2YXIgY21wID0gbS5jbXA7XG4gIHJldHVybiB7XG4gICAgICAgICAgY21wOiBjbXAsXG4gICAgICAgICAgZGF0YTogQmVsdF9TZXREaWN0Lm1lcmdlTWFueShtLmRhdGEsIGUsIGNtcClcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTWFueShtLCBlKSB7XG4gIHZhciBjbXAgPSBtLmNtcDtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBjbXA6IGNtcCxcbiAgICAgICAgICBkYXRhOiBCZWx0X1NldERpY3QucmVtb3ZlTWFueShtLmRhdGEsIGUsIGNtcClcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gdW5pb24obSwgbikge1xuICB2YXIgY21wID0gbS5jbXA7XG4gIHJldHVybiB7XG4gICAgICAgICAgY21wOiBjbXAsXG4gICAgICAgICAgZGF0YTogQmVsdF9TZXREaWN0LnVuaW9uKG0uZGF0YSwgbi5kYXRhLCBjbXApXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGludGVyc2VjdChtLCBuKSB7XG4gIHZhciBjbXAgPSBtLmNtcDtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBjbXA6IGNtcCxcbiAgICAgICAgICBkYXRhOiBCZWx0X1NldERpY3QuaW50ZXJzZWN0KG0uZGF0YSwgbi5kYXRhLCBjbXApXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGRpZmYobSwgbikge1xuICB2YXIgY21wID0gbS5jbXA7XG4gIHJldHVybiB7XG4gICAgICAgICAgY21wOiBjbXAsXG4gICAgICAgICAgZGF0YTogQmVsdF9TZXREaWN0LmRpZmYobS5kYXRhLCBuLmRhdGEsIGNtcClcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gc3Vic2V0KG0sIG4pIHtcbiAgdmFyIGNtcCA9IG0uY21wO1xuICByZXR1cm4gQmVsdF9TZXREaWN0LnN1YnNldChtLmRhdGEsIG4uZGF0YSwgY21wKTtcbn1cblxuZnVuY3Rpb24gc3BsaXQobSwgZSkge1xuICB2YXIgY21wID0gbS5jbXA7XG4gIHZhciBtYXRjaCA9IEJlbHRfU2V0RGljdC5zcGxpdChtLmRhdGEsIGUsIGNtcCk7XG4gIHZhciBtYXRjaCQxID0gbWF0Y2hbMF07XG4gIHJldHVybiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbXA6IGNtcCxcbiAgICAgICAgICAgICAgZGF0YTogbWF0Y2gkMVswXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY21wOiBjbXAsXG4gICAgICAgICAgICAgIGRhdGE6IG1hdGNoJDFbMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIG1hdGNoWzFdXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIG1ha2UoaWQpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBjbXA6IGlkLmNtcCxcbiAgICAgICAgICBkYXRhOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eShtKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QuaXNFbXB0eShtLmRhdGEpO1xufVxuXG5mdW5jdGlvbiBjbXAobSwgbikge1xuICB2YXIgY21wJDEgPSBtLmNtcDtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5jbXAobS5kYXRhLCBuLmRhdGEsIGNtcCQxKTtcbn1cblxuZnVuY3Rpb24gZXEobSwgbikge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LmVxKG0uZGF0YSwgbi5kYXRhLCBtLmNtcCk7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hVKG0sIGYpIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5mb3JFYWNoVShtLmRhdGEsIGYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoKG0sIGYpIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5mb3JFYWNoVShtLmRhdGEsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVUobSwgYWNjLCBmKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QucmVkdWNlVShtLmRhdGEsIGFjYywgZik7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZShtLCBhY2MsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVUobSwgYWNjLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiBldmVyeVUobSwgZikge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LmV2ZXJ5VShtLmRhdGEsIGYpO1xufVxuXG5mdW5jdGlvbiBldmVyeShtLCBmKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QuZXZlcnlVKG0uZGF0YSwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gc29tZVUobSwgZikge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LnNvbWVVKG0uZGF0YSwgZik7XG59XG5cbmZ1bmN0aW9uIHNvbWUobSwgZikge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LnNvbWVVKG0uZGF0YSwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24ga2VlcFUobSwgZikge1xuICByZXR1cm4ge1xuICAgICAgICAgIGNtcDogbS5jbXAsXG4gICAgICAgICAgZGF0YTogQmVsdF9TZXREaWN0LmtlZXBVKG0uZGF0YSwgZilcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24ga2VlcChtLCBmKSB7XG4gIHJldHVybiBrZWVwVShtLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb25VKG0sIGYpIHtcbiAgdmFyIG1hdGNoID0gQmVsdF9TZXREaWN0LnBhcnRpdGlvblUobS5kYXRhLCBmKTtcbiAgdmFyIGNtcCA9IG0uY21wO1xuICByZXR1cm4gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNtcDogY21wLFxuICAgICAgICAgICAgZGF0YTogbWF0Y2hbMF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNtcDogY21wLFxuICAgICAgICAgICAgZGF0YTogbWF0Y2hbMV1cbiAgICAgICAgICB9XG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIHBhcnRpdGlvbihtLCBmKSB7XG4gIHJldHVybiBwYXJ0aXRpb25VKG0sIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIHNpemUobSkge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LnNpemUobS5kYXRhKTtcbn1cblxuZnVuY3Rpb24gdG9MaXN0KG0pIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC50b0xpc3QobS5kYXRhKTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheShtKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QudG9BcnJheShtLmRhdGEpO1xufVxuXG5mdW5jdGlvbiBtaW5pbXVtKG0pIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5taW5pbXVtKG0uZGF0YSk7XG59XG5cbmZ1bmN0aW9uIG1pblVuZGVmaW5lZChtKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QubWluVW5kZWZpbmVkKG0uZGF0YSk7XG59XG5cbmZ1bmN0aW9uIG1heGltdW0obSkge1xuICByZXR1cm4gQmVsdF9TZXREaWN0Lm1heGltdW0obS5kYXRhKTtcbn1cblxuZnVuY3Rpb24gbWF4VW5kZWZpbmVkKG0pIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5tYXhVbmRlZmluZWQobS5kYXRhKTtcbn1cblxuZnVuY3Rpb24gZ2V0KG0sIGUpIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5nZXQobS5kYXRhLCBlLCBtLmNtcCk7XG59XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZChtLCBlKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QuZ2V0VW5kZWZpbmVkKG0uZGF0YSwgZSwgbS5jbXApO1xufVxuXG5mdW5jdGlvbiBnZXRFeG4obSwgZSkge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LmdldEV4bihtLmRhdGEsIGUsIG0uY21wKTtcbn1cblxuZnVuY3Rpb24gaGFzKG0sIGUpIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5oYXMobS5kYXRhLCBlLCBtLmNtcCk7XG59XG5cbmZ1bmN0aW9uIGZyb21Tb3J0ZWRBcnJheVVuc2FmZSh4cywgaWQpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBjbXA6IGlkLmNtcCxcbiAgICAgICAgICBkYXRhOiBCZWx0X1NldERpY3QuZnJvbVNvcnRlZEFycmF5VW5zYWZlKHhzKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXREYXRhKG0pIHtcbiAgcmV0dXJuIG0uZGF0YTtcbn1cblxuZnVuY3Rpb24gZ2V0SWQobSkge1xuICB2YXIgY21wID0gbS5jbXA7XG4gIHJldHVybiB7XG4gICAgICAgICAgY21wOiBjbXBcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gcGFja0lkRGF0YShpZCwgZGF0YSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIGNtcDogaWQuY21wLFxuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnZhcmlhbnRJbnRlcm5hbChkKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QuY2hlY2tJbnZhcmlhbnRJbnRlcm5hbChkLmRhdGEpO1xufVxuXG52YXIgSW50O1xuXG52YXIgJCRTdHJpbmc7XG5cbnZhciBEaWN0O1xuXG5leHBvcnQge1xuICBJbnQgLFxuICAkJFN0cmluZyAsXG4gIERpY3QgLFxuICBtYWtlICxcbiAgZnJvbUFycmF5ICxcbiAgZnJvbVNvcnRlZEFycmF5VW5zYWZlICxcbiAgaXNFbXB0eSAsXG4gIGhhcyAsXG4gIGFkZCAsXG4gIG1lcmdlTWFueSAsXG4gIHJlbW92ZSAsXG4gIHJlbW92ZU1hbnkgLFxuICB1bmlvbiAsXG4gIGludGVyc2VjdCAsXG4gIGRpZmYgLFxuICBzdWJzZXQgLFxuICBjbXAgLFxuICBlcSAsXG4gIGZvckVhY2hVICxcbiAgZm9yRWFjaCAsXG4gIHJlZHVjZVUgLFxuICByZWR1Y2UgLFxuICBldmVyeVUgLFxuICBldmVyeSAsXG4gIHNvbWVVICxcbiAgc29tZSAsXG4gIGtlZXBVICxcbiAga2VlcCAsXG4gIHBhcnRpdGlvblUgLFxuICBwYXJ0aXRpb24gLFxuICBzaXplICxcbiAgdG9BcnJheSAsXG4gIHRvTGlzdCAsXG4gIG1pbmltdW0gLFxuICBtaW5VbmRlZmluZWQgLFxuICBtYXhpbXVtICxcbiAgbWF4VW5kZWZpbmVkICxcbiAgZ2V0ICxcbiAgZ2V0VW5kZWZpbmVkICxcbiAgZ2V0RXhuICxcbiAgc3BsaXQgLFxuICBjaGVja0ludmFyaWFudEludGVybmFsICxcbiAgZ2V0RGF0YSAsXG4gIGdldElkICxcbiAgcGFja0lkRGF0YSAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBCZWx0X2ludGVybmFsQVZMc2V0IGZyb20gXCIuL2JlbHRfaW50ZXJuYWxBVkxzZXQuanNcIjtcblxuZnVuY3Rpb24gYWRkKHQsIHgsIGNtcCkge1xuICBpZiAodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIEJlbHRfaW50ZXJuYWxBVkxzZXQuc2luZ2xldG9uKHgpO1xuICB9XG4gIHZhciBrID0gdC52O1xuICB2YXIgYyA9IGNtcCh4LCBrKTtcbiAgaWYgKGMgPT09IDApIHtcbiAgICByZXR1cm4gdDtcbiAgfVxuICB2YXIgbCA9IHQubDtcbiAgdmFyIHIgPSB0LnI7XG4gIGlmIChjIDwgMCkge1xuICAgIHZhciBsbCA9IGFkZChsLCB4LCBjbXApO1xuICAgIGlmIChsbCA9PT0gbCkge1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LmJhbChsbCwgaywgcik7XG4gICAgfVxuICB9XG4gIHZhciByciA9IGFkZChyLCB4LCBjbXApO1xuICBpZiAocnIgPT09IHIpIHtcbiAgICByZXR1cm4gdDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5iYWwobCwgaywgcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSh0LCB4LCBjbXApIHtcbiAgaWYgKHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0O1xuICB9XG4gIHZhciB2ID0gdC52O1xuICB2YXIgbCA9IHQubDtcbiAgdmFyIHIgPSB0LnI7XG4gIHZhciBjID0gY21wKHgsIHYpO1xuICBpZiAoYyA9PT0gMCkge1xuICAgIGlmIChsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiByO1xuICAgIH1cbiAgICBpZiAociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbDtcbiAgICB9XG4gICAgdmFyIHYkMSA9IHtcbiAgICAgIGNvbnRlbnRzOiByLnZcbiAgICB9O1xuICAgIHZhciByJDEgPSBCZWx0X2ludGVybmFsQVZMc2V0LnJlbW92ZU1pbkF1eFdpdGhSZWYociwgdiQxKTtcbiAgICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5iYWwobCwgdiQxLmNvbnRlbnRzLCByJDEpO1xuICB9XG4gIGlmIChjIDwgMCkge1xuICAgIHZhciBsbCA9IHJlbW92ZShsLCB4LCBjbXApO1xuICAgIGlmIChsbCA9PT0gbCkge1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LmJhbChsbCwgdiwgcik7XG4gICAgfVxuICB9XG4gIHZhciByciA9IHJlbW92ZShyLCB4LCBjbXApO1xuICBpZiAocnIgPT09IHIpIHtcbiAgICByZXR1cm4gdDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5iYWwobCwgdiwgcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlTWFueShoLCBhcnIsIGNtcCkge1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIHYgPSBoO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgIHZhciBrZXkgPSBhcnJbaV07XG4gICAgdiA9IGFkZCh2LCBrZXksIGNtcCk7XG4gIH1cbiAgcmV0dXJuIHY7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1hbnkoaCwgYXJyLCBjbXApIHtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciB2ID0gaDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICB2YXIga2V5ID0gYXJyW2ldO1xuICAgIHYgPSByZW1vdmUodiwga2V5LCBjbXApO1xuICB9XG4gIHJldHVybiB2O1xufVxuXG5mdW5jdGlvbiBzcGxpdEF1eE5vUGl2b3QoY21wLCBuLCB4KSB7XG4gIHZhciB2ID0gbi52O1xuICB2YXIgbCA9IG4ubDtcbiAgdmFyIHIgPSBuLnI7XG4gIHZhciBjID0gY21wKHgsIHYpO1xuICBpZiAoYyA9PT0gMCkge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBsLFxuICAgICAgICAgICAgclxuICAgICAgICAgIF07XG4gIH1cbiAgaWYgKGMgPCAwKSB7XG4gICAgaWYgKGwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBuXG4gICAgICAgICAgICBdO1xuICAgIH1cbiAgICB2YXIgbWF0Y2ggPSBzcGxpdEF1eE5vUGl2b3QoY21wLCBsLCB4KTtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgbWF0Y2hbMF0sXG4gICAgICAgICAgICBCZWx0X2ludGVybmFsQVZMc2V0LmpvaW5TaGFyZWQobWF0Y2hbMV0sIHYsIHIpXG4gICAgICAgICAgXTtcbiAgfVxuICBpZiAociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICBdO1xuICB9XG4gIHZhciBtYXRjaCQxID0gc3BsaXRBdXhOb1Bpdm90KGNtcCwgciwgeCk7XG4gIHJldHVybiBbXG4gICAgICAgICAgQmVsdF9pbnRlcm5hbEFWTHNldC5qb2luU2hhcmVkKGwsIHYsIG1hdGNoJDFbMF0pLFxuICAgICAgICAgIG1hdGNoJDFbMV1cbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gc3BsaXRBdXhQaXZvdChjbXAsIG4sIHgsIHByZXMpIHtcbiAgdmFyIHYgPSBuLnY7XG4gIHZhciBsID0gbi5sO1xuICB2YXIgciA9IG4ucjtcbiAgdmFyIGMgPSBjbXAoeCwgdik7XG4gIGlmIChjID09PSAwKSB7XG4gICAgcHJlcy5jb250ZW50cyA9IHRydWU7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICByXG4gICAgICAgICAgXTtcbiAgfVxuICBpZiAoYyA8IDApIHtcbiAgICBpZiAobCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIG5cbiAgICAgICAgICAgIF07XG4gICAgfVxuICAgIHZhciBtYXRjaCA9IHNwbGl0QXV4UGl2b3QoY21wLCBsLCB4LCBwcmVzKTtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgbWF0Y2hbMF0sXG4gICAgICAgICAgICBCZWx0X2ludGVybmFsQVZMc2V0LmpvaW5TaGFyZWQobWF0Y2hbMV0sIHYsIHIpXG4gICAgICAgICAgXTtcbiAgfVxuICBpZiAociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICBdO1xuICB9XG4gIHZhciBtYXRjaCQxID0gc3BsaXRBdXhQaXZvdChjbXAsIHIsIHgsIHByZXMpO1xuICByZXR1cm4gW1xuICAgICAgICAgIEJlbHRfaW50ZXJuYWxBVkxzZXQuam9pblNoYXJlZChsLCB2LCBtYXRjaCQxWzBdKSxcbiAgICAgICAgICBtYXRjaCQxWzFdXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIHNwbGl0KHQsIHgsIGNtcCkge1xuICBpZiAodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgIF07XG4gIH1cbiAgdmFyIHByZXMgPSB7XG4gICAgY29udGVudHM6IGZhbHNlXG4gIH07XG4gIHZhciB2ID0gc3BsaXRBdXhQaXZvdChjbXAsIHQsIHgsIHByZXMpO1xuICByZXR1cm4gW1xuICAgICAgICAgIHYsXG4gICAgICAgICAgcHJlcy5jb250ZW50c1xuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiB1bmlvbihzMSwgczIsIGNtcCkge1xuICBpZiAoczEgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBzMjtcbiAgfVxuICBpZiAoczIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBzMTtcbiAgfVxuICB2YXIgaDEgPSBzMS5oO1xuICB2YXIgaDIgPSBzMi5oO1xuICBpZiAoaDEgPj0gaDIpIHtcbiAgICBpZiAoaDIgPT09IDEpIHtcbiAgICAgIHJldHVybiBhZGQoczEsIHMyLnYsIGNtcCk7XG4gICAgfVxuICAgIHZhciB2MSA9IHMxLnY7XG4gICAgdmFyIGwxID0gczEubDtcbiAgICB2YXIgcjEgPSBzMS5yO1xuICAgIHZhciBtYXRjaCA9IHNwbGl0QXV4Tm9QaXZvdChjbXAsIHMyLCB2MSk7XG4gICAgcmV0dXJuIEJlbHRfaW50ZXJuYWxBVkxzZXQuam9pblNoYXJlZCh1bmlvbihsMSwgbWF0Y2hbMF0sIGNtcCksIHYxLCB1bmlvbihyMSwgbWF0Y2hbMV0sIGNtcCkpO1xuICB9XG4gIGlmIChoMSA9PT0gMSkge1xuICAgIHJldHVybiBhZGQoczIsIHMxLnYsIGNtcCk7XG4gIH1cbiAgdmFyIHYyID0gczIudjtcbiAgdmFyIGwyID0gczIubDtcbiAgdmFyIHIyID0gczIucjtcbiAgdmFyIG1hdGNoJDEgPSBzcGxpdEF1eE5vUGl2b3QoY21wLCBzMSwgdjIpO1xuICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5qb2luU2hhcmVkKHVuaW9uKG1hdGNoJDFbMF0sIGwyLCBjbXApLCB2MiwgdW5pb24obWF0Y2gkMVsxXSwgcjIsIGNtcCkpO1xufVxuXG5mdW5jdGlvbiBpbnRlcnNlY3QoczEsIHMyLCBjbXApIHtcbiAgaWYgKHMxID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIGlmIChzMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgdjEgPSBzMS52O1xuICB2YXIgbDEgPSBzMS5sO1xuICB2YXIgcjEgPSBzMS5yO1xuICB2YXIgcHJlcyA9IHtcbiAgICBjb250ZW50czogZmFsc2VcbiAgfTtcbiAgdmFyIG1hdGNoID0gc3BsaXRBdXhQaXZvdChjbXAsIHMyLCB2MSwgcHJlcyk7XG4gIHZhciBsbCA9IGludGVyc2VjdChsMSwgbWF0Y2hbMF0sIGNtcCk7XG4gIHZhciByciA9IGludGVyc2VjdChyMSwgbWF0Y2hbMV0sIGNtcCk7XG4gIGlmIChwcmVzLmNvbnRlbnRzKSB7XG4gICAgcmV0dXJuIEJlbHRfaW50ZXJuYWxBVkxzZXQuam9pblNoYXJlZChsbCwgdjEsIHJyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5jb25jYXRTaGFyZWQobGwsIHJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaWZmKHMxLCBzMiwgY21wKSB7XG4gIGlmIChzMSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHMxO1xuICB9XG4gIGlmIChzMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHMxO1xuICB9XG4gIHZhciB2MSA9IHMxLnY7XG4gIHZhciBsMSA9IHMxLmw7XG4gIHZhciByMSA9IHMxLnI7XG4gIHZhciBwcmVzID0ge1xuICAgIGNvbnRlbnRzOiBmYWxzZVxuICB9O1xuICB2YXIgbWF0Y2ggPSBzcGxpdEF1eFBpdm90KGNtcCwgczIsIHYxLCBwcmVzKTtcbiAgdmFyIGxsID0gZGlmZihsMSwgbWF0Y2hbMF0sIGNtcCk7XG4gIHZhciByciA9IGRpZmYocjEsIG1hdGNoWzFdLCBjbXApO1xuICBpZiAocHJlcy5jb250ZW50cykge1xuICAgIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LmNvbmNhdFNoYXJlZChsbCwgcnIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LmpvaW5TaGFyZWQobGwsIHYxLCBycik7XG4gIH1cbn1cblxudmFyIGVtcHR5O1xuXG52YXIgZnJvbUFycmF5ID0gQmVsdF9pbnRlcm5hbEFWTHNldC5mcm9tQXJyYXk7XG5cbnZhciBmcm9tU29ydGVkQXJyYXlVbnNhZmUgPSBCZWx0X2ludGVybmFsQVZMc2V0LmZyb21Tb3J0ZWRBcnJheVVuc2FmZTtcblxudmFyIGlzRW1wdHkgPSBCZWx0X2ludGVybmFsQVZMc2V0LmlzRW1wdHk7XG5cbnZhciBoYXMgPSBCZWx0X2ludGVybmFsQVZMc2V0LmhhcztcblxudmFyIHN1YnNldCA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuc3Vic2V0O1xuXG52YXIgY21wID0gQmVsdF9pbnRlcm5hbEFWTHNldC5jbXA7XG5cbnZhciBlcSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuZXE7XG5cbnZhciBmb3JFYWNoVSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuZm9yRWFjaFU7XG5cbnZhciBmb3JFYWNoID0gQmVsdF9pbnRlcm5hbEFWTHNldC5mb3JFYWNoO1xuXG52YXIgcmVkdWNlVSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQucmVkdWNlVTtcblxudmFyIHJlZHVjZSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQucmVkdWNlO1xuXG52YXIgZXZlcnlVID0gQmVsdF9pbnRlcm5hbEFWTHNldC5ldmVyeVU7XG5cbnZhciBldmVyeSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuZXZlcnk7XG5cbnZhciBzb21lVSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuc29tZVU7XG5cbnZhciBzb21lID0gQmVsdF9pbnRlcm5hbEFWTHNldC5zb21lO1xuXG52YXIga2VlcFUgPSBCZWx0X2ludGVybmFsQVZMc2V0LmtlZXBTaGFyZWRVO1xuXG52YXIga2VlcCA9IEJlbHRfaW50ZXJuYWxBVkxzZXQua2VlcFNoYXJlZDtcblxudmFyIHBhcnRpdGlvblUgPSBCZWx0X2ludGVybmFsQVZMc2V0LnBhcnRpdGlvblNoYXJlZFU7XG5cbnZhciBwYXJ0aXRpb24gPSBCZWx0X2ludGVybmFsQVZMc2V0LnBhcnRpdGlvblNoYXJlZDtcblxudmFyIHNpemUgPSBCZWx0X2ludGVybmFsQVZMc2V0LnNpemU7XG5cbnZhciB0b0xpc3QgPSBCZWx0X2ludGVybmFsQVZMc2V0LnRvTGlzdDtcblxudmFyIHRvQXJyYXkgPSBCZWx0X2ludGVybmFsQVZMc2V0LnRvQXJyYXk7XG5cbnZhciBtaW5pbXVtID0gQmVsdF9pbnRlcm5hbEFWTHNldC5taW5pbXVtO1xuXG52YXIgbWluVW5kZWZpbmVkID0gQmVsdF9pbnRlcm5hbEFWTHNldC5taW5VbmRlZmluZWQ7XG5cbnZhciBtYXhpbXVtID0gQmVsdF9pbnRlcm5hbEFWTHNldC5tYXhpbXVtO1xuXG52YXIgbWF4VW5kZWZpbmVkID0gQmVsdF9pbnRlcm5hbEFWTHNldC5tYXhVbmRlZmluZWQ7XG5cbnZhciBnZXQgPSBCZWx0X2ludGVybmFsQVZMc2V0LmdldDtcblxudmFyIGdldFVuZGVmaW5lZCA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuZ2V0VW5kZWZpbmVkO1xuXG52YXIgZ2V0RXhuID0gQmVsdF9pbnRlcm5hbEFWTHNldC5nZXRFeG47XG5cbnZhciBjaGVja0ludmFyaWFudEludGVybmFsID0gQmVsdF9pbnRlcm5hbEFWTHNldC5jaGVja0ludmFyaWFudEludGVybmFsO1xuXG5leHBvcnQge1xuICBlbXB0eSAsXG4gIGZyb21BcnJheSAsXG4gIGZyb21Tb3J0ZWRBcnJheVVuc2FmZSAsXG4gIGlzRW1wdHkgLFxuICBoYXMgLFxuICBhZGQgLFxuICBtZXJnZU1hbnkgLFxuICByZW1vdmUgLFxuICByZW1vdmVNYW55ICxcbiAgdW5pb24gLFxuICBpbnRlcnNlY3QgLFxuICBkaWZmICxcbiAgc3Vic2V0ICxcbiAgY21wICxcbiAgZXEgLFxuICBmb3JFYWNoVSAsXG4gIGZvckVhY2ggLFxuICByZWR1Y2VVICxcbiAgcmVkdWNlICxcbiAgZXZlcnlVICxcbiAgZXZlcnkgLFxuICBzb21lVSAsXG4gIHNvbWUgLFxuICBrZWVwVSAsXG4gIGtlZXAgLFxuICBwYXJ0aXRpb25VICxcbiAgcGFydGl0aW9uICxcbiAgc2l6ZSAsXG4gIHRvTGlzdCAsXG4gIHRvQXJyYXkgLFxuICBtaW5pbXVtICxcbiAgbWluVW5kZWZpbmVkICxcbiAgbWF4aW11bSAsXG4gIG1heFVuZGVmaW5lZCAsXG4gIGdldCAsXG4gIGdldFVuZGVmaW5lZCAsXG4gIGdldEV4biAsXG4gIHNwbGl0ICxcbiAgY2hlY2tJbnZhcmlhbnRJbnRlcm5hbCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBCZWx0X2ludGVybmFsQVZMc2V0IGZyb20gXCIuL2JlbHRfaW50ZXJuYWxBVkxzZXQuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfaW50ZXJuYWxTZXRJbnQgZnJvbSBcIi4vYmVsdF9pbnRlcm5hbFNldEludC5qc1wiO1xuXG5mdW5jdGlvbiBhZGQodCwgeCkge1xuICBpZiAodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIEJlbHRfaW50ZXJuYWxBVkxzZXQuc2luZ2xldG9uKHgpO1xuICB9XG4gIHZhciB2ID0gdC52O1xuICBpZiAoeCA9PT0gdikge1xuICAgIHJldHVybiB0O1xuICB9XG4gIHZhciBsID0gdC5sO1xuICB2YXIgciA9IHQucjtcbiAgaWYgKHggPCB2KSB7XG4gICAgdmFyIGxsID0gYWRkKGwsIHgpO1xuICAgIGlmIChsbCA9PT0gbCkge1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LmJhbChsbCwgdiwgcik7XG4gICAgfVxuICB9XG4gIHZhciByciA9IGFkZChyLCB4KTtcbiAgaWYgKHJyID09PSByKSB7XG4gICAgcmV0dXJuIHQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEJlbHRfaW50ZXJuYWxBVkxzZXQuYmFsKGwsIHYsIHJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZU1hbnkoaCwgYXJyKSB7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICB2YXIgdiA9IGg7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgdmFyIGtleSA9IGFycltpXTtcbiAgICB2ID0gYWRkKHYsIGtleSk7XG4gIH1cbiAgcmV0dXJuIHY7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSh0LCB4KSB7XG4gIGlmICh0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdDtcbiAgfVxuICB2YXIgdiA9IHQudjtcbiAgdmFyIGwgPSB0Lmw7XG4gIHZhciByID0gdC5yO1xuICBpZiAoeCA9PT0gdikge1xuICAgIGlmIChsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiByO1xuICAgIH1cbiAgICBpZiAociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbDtcbiAgICB9XG4gICAgdmFyIHYkMSA9IHtcbiAgICAgIGNvbnRlbnRzOiByLnZcbiAgICB9O1xuICAgIHZhciByJDEgPSBCZWx0X2ludGVybmFsQVZMc2V0LnJlbW92ZU1pbkF1eFdpdGhSZWYociwgdiQxKTtcbiAgICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5iYWwobCwgdiQxLmNvbnRlbnRzLCByJDEpO1xuICB9XG4gIGlmICh4IDwgdikge1xuICAgIHZhciBsbCA9IHJlbW92ZShsLCB4KTtcbiAgICBpZiAobGwgPT09IGwpIHtcbiAgICAgIHJldHVybiB0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5iYWwobGwsIHYsIHIpO1xuICAgIH1cbiAgfVxuICB2YXIgcnIgPSByZW1vdmUociwgeCk7XG4gIGlmIChyciA9PT0gcikge1xuICAgIHJldHVybiB0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LmJhbChsLCB2LCBycik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlTWFueShoLCBhcnIpIHtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciB2ID0gaDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICB2YXIga2V5ID0gYXJyW2ldO1xuICAgIHYgPSByZW1vdmUodiwga2V5KTtcbiAgfVxuICByZXR1cm4gdjtcbn1cblxuZnVuY3Rpb24gc3BsaXRBdXhOb1Bpdm90KG4sIHgpIHtcbiAgdmFyIHYgPSBuLnY7XG4gIHZhciBsID0gbi5sO1xuICB2YXIgciA9IG4ucjtcbiAgaWYgKHggPT09IHYpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIHJcbiAgICAgICAgICBdO1xuICB9XG4gIGlmICh4IDwgdikge1xuICAgIGlmIChsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgblxuICAgICAgICAgICAgXTtcbiAgICB9XG4gICAgdmFyIG1hdGNoID0gc3BsaXRBdXhOb1Bpdm90KGwsIHgpO1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBtYXRjaFswXSxcbiAgICAgICAgICAgIEJlbHRfaW50ZXJuYWxBVkxzZXQuam9pblNoYXJlZChtYXRjaFsxXSwgdiwgcilcbiAgICAgICAgICBdO1xuICB9XG4gIGlmIChyID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgbixcbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgIF07XG4gIH1cbiAgdmFyIG1hdGNoJDEgPSBzcGxpdEF1eE5vUGl2b3QociwgeCk7XG4gIHJldHVybiBbXG4gICAgICAgICAgQmVsdF9pbnRlcm5hbEFWTHNldC5qb2luU2hhcmVkKGwsIHYsIG1hdGNoJDFbMF0pLFxuICAgICAgICAgIG1hdGNoJDFbMV1cbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gc3BsaXRBdXhQaXZvdChuLCB4LCBwcmVzKSB7XG4gIHZhciB2ID0gbi52O1xuICB2YXIgbCA9IG4ubDtcbiAgdmFyIHIgPSBuLnI7XG4gIGlmICh4ID09PSB2KSB7XG4gICAgcHJlcy5jb250ZW50cyA9IHRydWU7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICByXG4gICAgICAgICAgXTtcbiAgfVxuICBpZiAoeCA8IHYpIHtcbiAgICBpZiAobCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIG5cbiAgICAgICAgICAgIF07XG4gICAgfVxuICAgIHZhciBtYXRjaCA9IHNwbGl0QXV4UGl2b3QobCwgeCwgcHJlcyk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG1hdGNoWzBdLFxuICAgICAgICAgICAgQmVsdF9pbnRlcm5hbEFWTHNldC5qb2luU2hhcmVkKG1hdGNoWzFdLCB2LCByKVxuICAgICAgICAgIF07XG4gIH1cbiAgaWYgKHIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgXTtcbiAgfVxuICB2YXIgbWF0Y2gkMSA9IHNwbGl0QXV4UGl2b3QociwgeCwgcHJlcyk7XG4gIHJldHVybiBbXG4gICAgICAgICAgQmVsdF9pbnRlcm5hbEFWTHNldC5qb2luU2hhcmVkKGwsIHYsIG1hdGNoJDFbMF0pLFxuICAgICAgICAgIG1hdGNoJDFbMV1cbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gc3BsaXQodCwgeCkge1xuICBpZiAodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgIF07XG4gIH1cbiAgdmFyIHByZXMgPSB7XG4gICAgY29udGVudHM6IGZhbHNlXG4gIH07XG4gIHZhciB2ID0gc3BsaXRBdXhQaXZvdCh0LCB4LCBwcmVzKTtcbiAgcmV0dXJuIFtcbiAgICAgICAgICB2LFxuICAgICAgICAgIHByZXMuY29udGVudHNcbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gdW5pb24oczEsIHMyKSB7XG4gIGlmIChzMSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHMyO1xuICB9XG4gIGlmIChzMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHMxO1xuICB9XG4gIHZhciBoMSA9IHMxLmg7XG4gIHZhciBoMiA9IHMyLmg7XG4gIGlmIChoMSA+PSBoMikge1xuICAgIGlmIChoMiA9PT0gMSkge1xuICAgICAgcmV0dXJuIGFkZChzMSwgczIudik7XG4gICAgfVxuICAgIHZhciB2MSA9IHMxLnY7XG4gICAgdmFyIGwxID0gczEubDtcbiAgICB2YXIgcjEgPSBzMS5yO1xuICAgIHZhciBtYXRjaCA9IHNwbGl0QXV4Tm9QaXZvdChzMiwgdjEpO1xuICAgIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LmpvaW5TaGFyZWQodW5pb24obDEsIG1hdGNoWzBdKSwgdjEsIHVuaW9uKHIxLCBtYXRjaFsxXSkpO1xuICB9XG4gIGlmIChoMSA9PT0gMSkge1xuICAgIHJldHVybiBhZGQoczIsIHMxLnYpO1xuICB9XG4gIHZhciB2MiA9IHMyLnY7XG4gIHZhciBsMiA9IHMyLmw7XG4gIHZhciByMiA9IHMyLnI7XG4gIHZhciBtYXRjaCQxID0gc3BsaXRBdXhOb1Bpdm90KHMxLCB2Mik7XG4gIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LmpvaW5TaGFyZWQodW5pb24obWF0Y2gkMVswXSwgbDIpLCB2MiwgdW5pb24obWF0Y2gkMVsxXSwgcjIpKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJzZWN0KHMxLCBzMikge1xuICBpZiAoczEgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgaWYgKHMyID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciB2MSA9IHMxLnY7XG4gIHZhciBsMSA9IHMxLmw7XG4gIHZhciByMSA9IHMxLnI7XG4gIHZhciBwcmVzID0ge1xuICAgIGNvbnRlbnRzOiBmYWxzZVxuICB9O1xuICB2YXIgbWF0Y2ggPSBzcGxpdEF1eFBpdm90KHMyLCB2MSwgcHJlcyk7XG4gIHZhciBsbCA9IGludGVyc2VjdChsMSwgbWF0Y2hbMF0pO1xuICB2YXIgcnIgPSBpbnRlcnNlY3QocjEsIG1hdGNoWzFdKTtcbiAgaWYgKHByZXMuY29udGVudHMpIHtcbiAgICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5qb2luU2hhcmVkKGxsLCB2MSwgcnIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LmNvbmNhdFNoYXJlZChsbCwgcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGRpZmYoczEsIHMyKSB7XG4gIGlmIChzMSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHMxO1xuICB9XG4gIGlmIChzMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHMxO1xuICB9XG4gIHZhciB2MSA9IHMxLnY7XG4gIHZhciBsMSA9IHMxLmw7XG4gIHZhciByMSA9IHMxLnI7XG4gIHZhciBwcmVzID0ge1xuICAgIGNvbnRlbnRzOiBmYWxzZVxuICB9O1xuICB2YXIgbWF0Y2ggPSBzcGxpdEF1eFBpdm90KHMyLCB2MSwgcHJlcyk7XG4gIHZhciBsbCA9IGRpZmYobDEsIG1hdGNoWzBdKTtcbiAgdmFyIHJyID0gZGlmZihyMSwgbWF0Y2hbMV0pO1xuICBpZiAocHJlcy5jb250ZW50cykge1xuICAgIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LmNvbmNhdFNoYXJlZChsbCwgcnIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LmpvaW5TaGFyZWQobGwsIHYxLCBycik7XG4gIH1cbn1cblxudmFyIGVtcHR5O1xuXG52YXIgZnJvbUFycmF5ID0gQmVsdF9pbnRlcm5hbFNldEludC5mcm9tQXJyYXk7XG5cbnZhciBmcm9tU29ydGVkQXJyYXlVbnNhZmUgPSBCZWx0X2ludGVybmFsQVZMc2V0LmZyb21Tb3J0ZWRBcnJheVVuc2FmZTtcblxudmFyIGlzRW1wdHkgPSBCZWx0X2ludGVybmFsQVZMc2V0LmlzRW1wdHk7XG5cbnZhciBoYXMgPSBCZWx0X2ludGVybmFsU2V0SW50LmhhcztcblxudmFyIHN1YnNldCA9IEJlbHRfaW50ZXJuYWxTZXRJbnQuc3Vic2V0O1xuXG52YXIgY21wID0gQmVsdF9pbnRlcm5hbFNldEludC5jbXA7XG5cbnZhciBlcSA9IEJlbHRfaW50ZXJuYWxTZXRJbnQuZXE7XG5cbnZhciBmb3JFYWNoVSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuZm9yRWFjaFU7XG5cbnZhciBmb3JFYWNoID0gQmVsdF9pbnRlcm5hbEFWTHNldC5mb3JFYWNoO1xuXG52YXIgcmVkdWNlVSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQucmVkdWNlVTtcblxudmFyIHJlZHVjZSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQucmVkdWNlO1xuXG52YXIgZXZlcnlVID0gQmVsdF9pbnRlcm5hbEFWTHNldC5ldmVyeVU7XG5cbnZhciBldmVyeSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuZXZlcnk7XG5cbnZhciBzb21lVSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuc29tZVU7XG5cbnZhciBzb21lID0gQmVsdF9pbnRlcm5hbEFWTHNldC5zb21lO1xuXG52YXIga2VlcFUgPSBCZWx0X2ludGVybmFsQVZMc2V0LmtlZXBTaGFyZWRVO1xuXG52YXIga2VlcCA9IEJlbHRfaW50ZXJuYWxBVkxzZXQua2VlcFNoYXJlZDtcblxudmFyIHBhcnRpdGlvblUgPSBCZWx0X2ludGVybmFsQVZMc2V0LnBhcnRpdGlvblNoYXJlZFU7XG5cbnZhciBwYXJ0aXRpb24gPSBCZWx0X2ludGVybmFsQVZMc2V0LnBhcnRpdGlvblNoYXJlZDtcblxudmFyIHNpemUgPSBCZWx0X2ludGVybmFsQVZMc2V0LnNpemU7XG5cbnZhciB0b0xpc3QgPSBCZWx0X2ludGVybmFsQVZMc2V0LnRvTGlzdDtcblxudmFyIHRvQXJyYXkgPSBCZWx0X2ludGVybmFsQVZMc2V0LnRvQXJyYXk7XG5cbnZhciBtaW5pbXVtID0gQmVsdF9pbnRlcm5hbEFWTHNldC5taW5pbXVtO1xuXG52YXIgbWluVW5kZWZpbmVkID0gQmVsdF9pbnRlcm5hbEFWTHNldC5taW5VbmRlZmluZWQ7XG5cbnZhciBtYXhpbXVtID0gQmVsdF9pbnRlcm5hbEFWTHNldC5tYXhpbXVtO1xuXG52YXIgbWF4VW5kZWZpbmVkID0gQmVsdF9pbnRlcm5hbEFWTHNldC5tYXhVbmRlZmluZWQ7XG5cbnZhciBnZXQgPSBCZWx0X2ludGVybmFsU2V0SW50LmdldDtcblxudmFyIGdldFVuZGVmaW5lZCA9IEJlbHRfaW50ZXJuYWxTZXRJbnQuZ2V0VW5kZWZpbmVkO1xuXG52YXIgZ2V0RXhuID0gQmVsdF9pbnRlcm5hbFNldEludC5nZXRFeG47XG5cbnZhciBjaGVja0ludmFyaWFudEludGVybmFsID0gQmVsdF9pbnRlcm5hbEFWTHNldC5jaGVja0ludmFyaWFudEludGVybmFsO1xuXG5leHBvcnQge1xuICBlbXB0eSAsXG4gIGZyb21BcnJheSAsXG4gIGZyb21Tb3J0ZWRBcnJheVVuc2FmZSAsXG4gIGlzRW1wdHkgLFxuICBoYXMgLFxuICBhZGQgLFxuICBtZXJnZU1hbnkgLFxuICByZW1vdmUgLFxuICByZW1vdmVNYW55ICxcbiAgdW5pb24gLFxuICBpbnRlcnNlY3QgLFxuICBkaWZmICxcbiAgc3Vic2V0ICxcbiAgY21wICxcbiAgZXEgLFxuICBmb3JFYWNoVSAsXG4gIGZvckVhY2ggLFxuICByZWR1Y2VVICxcbiAgcmVkdWNlICxcbiAgZXZlcnlVICxcbiAgZXZlcnkgLFxuICBzb21lVSAsXG4gIHNvbWUgLFxuICBrZWVwVSAsXG4gIGtlZXAgLFxuICBwYXJ0aXRpb25VICxcbiAgcGFydGl0aW9uICxcbiAgc2l6ZSAsXG4gIHRvTGlzdCAsXG4gIHRvQXJyYXkgLFxuICBtaW5pbXVtICxcbiAgbWluVW5kZWZpbmVkICxcbiAgbWF4aW11bSAsXG4gIG1heFVuZGVmaW5lZCAsXG4gIGdldCAsXG4gIGdldFVuZGVmaW5lZCAsXG4gIGdldEV4biAsXG4gIHNwbGl0ICxcbiAgY2hlY2tJbnZhcmlhbnRJbnRlcm5hbCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwiLi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9BcnJheSBmcm9tIFwiLi9iZWx0X0FycmF5LmpzXCI7XG5cbmZ1bmN0aW9uIHNvcnRlZExlbmd0aEF1eE1vcmUoeHMsIF9wcmVjLCBfYWNjLCBsZW4sIGx0KSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYWNjID0gX2FjYztcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIGlmIChhY2MgPj0gbGVuKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICB2YXIgdiA9IHhzW2FjY107XG4gICAgaWYgKCFsdCh2LCBwcmVjKSkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgX2FjYyA9IGFjYyArIDEgfCAwO1xuICAgIF9wcmVjID0gdjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0cmljdGx5U29ydGVkTGVuZ3RoVSh4cywgbHQpIHtcbiAgdmFyIGxlbiA9IHhzLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMCB8fCBsZW4gPT09IDEpIHtcbiAgICByZXR1cm4gbGVuO1xuICB9XG4gIHZhciB4MCA9IHhzWzBdO1xuICB2YXIgeDEgPSB4c1sxXTtcbiAgaWYgKGx0KHgwLCB4MSkpIHtcbiAgICB2YXIgX3ByZWMgPSB4MTtcbiAgICB2YXIgX2FjYyA9IDI7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgICAgaWYgKGFjYyA+PSBsZW4pIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cbiAgICAgIHZhciB2ID0geHNbYWNjXTtcbiAgICAgIGlmICghbHQocHJlYywgdikpIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cbiAgICAgIF9hY2MgPSBhY2MgKyAxIHwgMDtcbiAgICAgIF9wcmVjID0gdjtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9IGVsc2UgaWYgKGx0KHgxLCB4MCkpIHtcbiAgICByZXR1cm4gLXNvcnRlZExlbmd0aEF1eE1vcmUoeHMsIHgxLCAyLCBsZW4sIGx0KSB8IDA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaWN0bHlTb3J0ZWRMZW5ndGgoeHMsIGx0KSB7XG4gIHJldHVybiBzdHJpY3RseVNvcnRlZExlbmd0aFUoeHMsIEN1cnJ5Ll9fMihsdCkpO1xufVxuXG5mdW5jdGlvbiBpc1NvcnRlZFUoYSwgY21wKSB7XG4gIHZhciBsZW4gPSBhLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBfaSA9IDA7XG4gICAgdmFyIGxhc3RfYm91bmQgPSBsZW4gLSAxIHwgMDtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgaSA9IF9pO1xuICAgICAgaWYgKGkgPT09IGxhc3RfYm91bmQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoY21wKGFbaV0sIGFbaSArIDEgfCAwXSkgPiAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIF9pID0gaSArIDEgfCAwO1xuICAgICAgY29udGludWUgO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTb3J0ZWQoYSwgY21wKSB7XG4gIHJldHVybiBpc1NvcnRlZFUoYSwgQ3VycnkuX18yKGNtcCkpO1xufVxuXG5mdW5jdGlvbiBtZXJnZShzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBjbXApIHtcbiAgdmFyIHNyYzFyID0gc3JjMW9mcyArIHNyYzFsZW4gfCAwO1xuICB2YXIgc3JjMnIgPSBzcmMyb2ZzICsgc3JjMmxlbiB8IDA7XG4gIHZhciBfaTEgPSBzcmMxb2ZzO1xuICB2YXIgX3MxID0gc3JjW3NyYzFvZnNdO1xuICB2YXIgX2kyID0gc3JjMm9mcztcbiAgdmFyIF9zMiA9IHNyYzJbc3JjMm9mc107XG4gIHZhciBfZCA9IGRzdG9mcztcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBkID0gX2Q7XG4gICAgdmFyIHMyID0gX3MyO1xuICAgIHZhciBpMiA9IF9pMjtcbiAgICB2YXIgczEgPSBfczE7XG4gICAgdmFyIGkxID0gX2kxO1xuICAgIGlmIChjbXAoczEsIHMyKSA8PSAwKSB7XG4gICAgICBkc3RbZF0gPSBzMTtcbiAgICAgIHZhciBpMSQxID0gaTEgKyAxIHwgMDtcbiAgICAgIGlmIChpMSQxID49IHNyYzFyKSB7XG4gICAgICAgIHJldHVybiBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjMiwgaTIsIGRzdCwgZCArIDEgfCAwLCBzcmMyciAtIGkyIHwgMCk7XG4gICAgICB9XG4gICAgICBfZCA9IGQgKyAxIHwgMDtcbiAgICAgIF9zMSA9IHNyY1tpMSQxXTtcbiAgICAgIF9pMSA9IGkxJDE7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIGRzdFtkXSA9IHMyO1xuICAgIHZhciBpMiQxID0gaTIgKyAxIHwgMDtcbiAgICBpZiAoaTIkMSA+PSBzcmMycikge1xuICAgICAgcmV0dXJuIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMsIGkxLCBkc3QsIGQgKyAxIHwgMCwgc3JjMXIgLSBpMSB8IDApO1xuICAgIH1cbiAgICBfZCA9IGQgKyAxIHwgMDtcbiAgICBfczIgPSBzcmMyW2kyJDFdO1xuICAgIF9pMiA9IGkyJDE7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1bmlvblUoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgY21wKSB7XG4gIHZhciBzcmMxciA9IHNyYzFvZnMgKyBzcmMxbGVuIHwgMDtcbiAgdmFyIHNyYzJyID0gc3JjMm9mcyArIHNyYzJsZW4gfCAwO1xuICB2YXIgX2kxID0gc3JjMW9mcztcbiAgdmFyIF9zMSA9IHNyY1tzcmMxb2ZzXTtcbiAgdmFyIF9pMiA9IHNyYzJvZnM7XG4gIHZhciBfczIgPSBzcmMyW3NyYzJvZnNdO1xuICB2YXIgX2QgPSBkc3RvZnM7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgZCA9IF9kO1xuICAgIHZhciBzMiA9IF9zMjtcbiAgICB2YXIgaTIgPSBfaTI7XG4gICAgdmFyIHMxID0gX3MxO1xuICAgIHZhciBpMSA9IF9pMTtcbiAgICB2YXIgYyA9IGNtcChzMSwgczIpO1xuICAgIGlmIChjIDwgMCkge1xuICAgICAgZHN0W2RdID0gczE7XG4gICAgICB2YXIgaTEkMSA9IGkxICsgMSB8IDA7XG4gICAgICB2YXIgZCQxID0gZCArIDEgfCAwO1xuICAgICAgaWYgKGkxJDEgPCBzcmMxcikge1xuICAgICAgICBfZCA9IGQkMTtcbiAgICAgICAgX3MxID0gc3JjW2kxJDFdO1xuICAgICAgICBfaTEgPSBpMSQxO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICB9XG4gICAgICBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjMiwgaTIsIGRzdCwgZCQxLCBzcmMyciAtIGkyIHwgMCk7XG4gICAgICByZXR1cm4gKGQkMSArIHNyYzJyIHwgMCkgLSBpMiB8IDA7XG4gICAgfVxuICAgIGlmIChjID09PSAwKSB7XG4gICAgICBkc3RbZF0gPSBzMTtcbiAgICAgIHZhciBpMSQyID0gaTEgKyAxIHwgMDtcbiAgICAgIHZhciBpMiQxID0gaTIgKyAxIHwgMDtcbiAgICAgIHZhciBkJDIgPSBkICsgMSB8IDA7XG4gICAgICBpZiAoIShpMSQyIDwgc3JjMXIgJiYgaTIkMSA8IHNyYzJyKSkge1xuICAgICAgICBpZiAoaTEkMiA9PT0gc3JjMXIpIHtcbiAgICAgICAgICBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjMiwgaTIkMSwgZHN0LCBkJDIsIHNyYzJyIC0gaTIkMSB8IDApO1xuICAgICAgICAgIHJldHVybiAoZCQyICsgc3JjMnIgfCAwKSAtIGkyJDEgfCAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMsIGkxJDIsIGRzdCwgZCQyLCBzcmMxciAtIGkxJDIgfCAwKTtcbiAgICAgICAgICByZXR1cm4gKGQkMiArIHNyYzFyIHwgMCkgLSBpMSQyIHwgMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX2QgPSBkJDI7XG4gICAgICBfczIgPSBzcmMyW2kyJDFdO1xuICAgICAgX2kyID0gaTIkMTtcbiAgICAgIF9zMSA9IHNyY1tpMSQyXTtcbiAgICAgIF9pMSA9IGkxJDI7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIGRzdFtkXSA9IHMyO1xuICAgIHZhciBpMiQyID0gaTIgKyAxIHwgMDtcbiAgICB2YXIgZCQzID0gZCArIDEgfCAwO1xuICAgIGlmIChpMiQyIDwgc3JjMnIpIHtcbiAgICAgIF9kID0gZCQzO1xuICAgICAgX3MyID0gc3JjMltpMiQyXTtcbiAgICAgIF9pMiA9IGkyJDI7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMsIGkxLCBkc3QsIGQkMywgc3JjMXIgLSBpMSB8IDApO1xuICAgIHJldHVybiAoZCQzICsgc3JjMXIgfCAwKSAtIGkxIHwgMDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdW5pb24oc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgY21wKSB7XG4gIHJldHVybiB1bmlvblUoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgQ3VycnkuX18yKGNtcCkpO1xufVxuXG5mdW5jdGlvbiBpbnRlcnNlY3RVKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIGNtcCkge1xuICB2YXIgc3JjMXIgPSBzcmMxb2ZzICsgc3JjMWxlbiB8IDA7XG4gIHZhciBzcmMyciA9IHNyYzJvZnMgKyBzcmMybGVuIHwgMDtcbiAgdmFyIF9pMSA9IHNyYzFvZnM7XG4gIHZhciBfczEgPSBzcmNbc3JjMW9mc107XG4gIHZhciBfaTIgPSBzcmMyb2ZzO1xuICB2YXIgX3MyID0gc3JjMltzcmMyb2ZzXTtcbiAgdmFyIF9kID0gZHN0b2ZzO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGQgPSBfZDtcbiAgICB2YXIgczIgPSBfczI7XG4gICAgdmFyIGkyID0gX2kyO1xuICAgIHZhciBzMSA9IF9zMTtcbiAgICB2YXIgaTEgPSBfaTE7XG4gICAgdmFyIGMgPSBjbXAoczEsIHMyKTtcbiAgICBpZiAoYyA8IDApIHtcbiAgICAgIHZhciBpMSQxID0gaTEgKyAxIHwgMDtcbiAgICAgIGlmIChpMSQxID49IHNyYzFyKSB7XG4gICAgICAgIHJldHVybiBkO1xuICAgICAgfVxuICAgICAgX3MxID0gc3JjW2kxJDFdO1xuICAgICAgX2kxID0gaTEkMTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgaWYgKGMgPT09IDApIHtcbiAgICAgIGRzdFtkXSA9IHMxO1xuICAgICAgdmFyIGkxJDIgPSBpMSArIDEgfCAwO1xuICAgICAgdmFyIGkyJDEgPSBpMiArIDEgfCAwO1xuICAgICAgdmFyIGQkMSA9IGQgKyAxIHwgMDtcbiAgICAgIGlmICghKGkxJDIgPCBzcmMxciAmJiBpMiQxIDwgc3JjMnIpKSB7XG4gICAgICAgIHJldHVybiBkJDE7XG4gICAgICB9XG4gICAgICBfZCA9IGQkMTtcbiAgICAgIF9zMiA9IHNyYzJbaTIkMV07XG4gICAgICBfaTIgPSBpMiQxO1xuICAgICAgX3MxID0gc3JjW2kxJDJdO1xuICAgICAgX2kxID0gaTEkMjtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgdmFyIGkyJDIgPSBpMiArIDEgfCAwO1xuICAgIGlmIChpMiQyID49IHNyYzJyKSB7XG4gICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgX3MyID0gc3JjMltpMiQyXTtcbiAgICBfaTIgPSBpMiQyO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW50ZXJzZWN0KHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIGNtcCkge1xuICByZXR1cm4gaW50ZXJzZWN0VShzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBDdXJyeS5fXzIoY21wKSk7XG59XG5cbmZ1bmN0aW9uIGRpZmZVKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIGNtcCkge1xuICB2YXIgc3JjMXIgPSBzcmMxb2ZzICsgc3JjMWxlbiB8IDA7XG4gIHZhciBzcmMyciA9IHNyYzJvZnMgKyBzcmMybGVuIHwgMDtcbiAgdmFyIF9pMSA9IHNyYzFvZnM7XG4gIHZhciBfczEgPSBzcmNbc3JjMW9mc107XG4gIHZhciBfaTIgPSBzcmMyb2ZzO1xuICB2YXIgX3MyID0gc3JjMltzcmMyb2ZzXTtcbiAgdmFyIF9kID0gZHN0b2ZzO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGQgPSBfZDtcbiAgICB2YXIgczIgPSBfczI7XG4gICAgdmFyIGkyID0gX2kyO1xuICAgIHZhciBzMSA9IF9zMTtcbiAgICB2YXIgaTEgPSBfaTE7XG4gICAgdmFyIGMgPSBjbXAoczEsIHMyKTtcbiAgICBpZiAoYyA8IDApIHtcbiAgICAgIGRzdFtkXSA9IHMxO1xuICAgICAgdmFyIGQkMSA9IGQgKyAxIHwgMDtcbiAgICAgIHZhciBpMSQxID0gaTEgKyAxIHwgMDtcbiAgICAgIGlmIChpMSQxID49IHNyYzFyKSB7XG4gICAgICAgIHJldHVybiBkJDE7XG4gICAgICB9XG4gICAgICBfZCA9IGQkMTtcbiAgICAgIF9zMSA9IHNyY1tpMSQxXTtcbiAgICAgIF9pMSA9IGkxJDE7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIGlmIChjID09PSAwKSB7XG4gICAgICB2YXIgaTEkMiA9IGkxICsgMSB8IDA7XG4gICAgICB2YXIgaTIkMSA9IGkyICsgMSB8IDA7XG4gICAgICBpZiAoIShpMSQyIDwgc3JjMXIgJiYgaTIkMSA8IHNyYzJyKSkge1xuICAgICAgICBpZiAoaTEkMiA9PT0gc3JjMXIpIHtcbiAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjLCBpMSQyLCBkc3QsIGQsIHNyYzFyIC0gaTEkMiB8IDApO1xuICAgICAgICAgIHJldHVybiAoZCArIHNyYzFyIHwgMCkgLSBpMSQyIHwgMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX3MyID0gc3JjMltpMiQxXTtcbiAgICAgIF9pMiA9IGkyJDE7XG4gICAgICBfczEgPSBzcmNbaTEkMl07XG4gICAgICBfaTEgPSBpMSQyO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICB2YXIgaTIkMiA9IGkyICsgMSB8IDA7XG4gICAgaWYgKGkyJDIgPCBzcmMycikge1xuICAgICAgX3MyID0gc3JjMltpMiQyXTtcbiAgICAgIF9pMiA9IGkyJDI7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMsIGkxLCBkc3QsIGQsIHNyYzFyIC0gaTEgfCAwKTtcbiAgICByZXR1cm4gKGQgKyBzcmMxciB8IDApIC0gaTEgfCAwO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkaWZmKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIGNtcCkge1xuICByZXR1cm4gZGlmZlUoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgQ3VycnkuX18yKGNtcCkpO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRpb25Tb3J0KHNyYywgc3Jjb2ZzLCBkc3QsIGRzdG9mcywgbGVuLCBjbXApIHtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICB2YXIgZSA9IHNyY1tzcmNvZnMgKyBpIHwgMF07XG4gICAgdmFyIGogPSAoZHN0b2ZzICsgaSB8IDApIC0gMSB8IDA7XG4gICAgd2hpbGUoaiA+PSBkc3RvZnMgJiYgY21wKGRzdFtqXSwgZSkgPiAwKSB7XG4gICAgICBkc3RbaiArIDEgfCAwXSA9IGRzdFtqXTtcbiAgICAgIGogPSBqIC0gMSB8IDA7XG4gICAgfTtcbiAgICBkc3RbaiArIDEgfCAwXSA9IGU7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIHNvcnRUbyhzcmMsIHNyY29mcywgZHN0LCBkc3RvZnMsIGxlbiwgY21wKSB7XG4gIGlmIChsZW4gPD0gNSkge1xuICAgIHJldHVybiBpbnNlcnRpb25Tb3J0KHNyYywgc3Jjb2ZzLCBkc3QsIGRzdG9mcywgbGVuLCBjbXApO1xuICB9XG4gIHZhciBsMSA9IGxlbiAvIDIgfCAwO1xuICB2YXIgbDIgPSBsZW4gLSBsMSB8IDA7XG4gIHNvcnRUbyhzcmMsIHNyY29mcyArIGwxIHwgMCwgZHN0LCBkc3RvZnMgKyBsMSB8IDAsIGwyLCBjbXApO1xuICBzb3J0VG8oc3JjLCBzcmNvZnMsIHNyYywgc3Jjb2ZzICsgbDIgfCAwLCBsMSwgY21wKTtcbiAgcmV0dXJuIG1lcmdlKHNyYywgc3Jjb2ZzICsgbDIgfCAwLCBsMSwgZHN0LCBkc3RvZnMgKyBsMSB8IDAsIGwyLCBkc3QsIGRzdG9mcywgY21wKTtcbn1cblxuZnVuY3Rpb24gc3RhYmxlU29ydEluUGxhY2VCeVUoYSwgY21wKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIGlmIChsIDw9IDUpIHtcbiAgICByZXR1cm4gaW5zZXJ0aW9uU29ydChhLCAwLCBhLCAwLCBsLCBjbXApO1xuICB9XG4gIHZhciBsMSA9IGwgLyAyIHwgMDtcbiAgdmFyIGwyID0gbCAtIGwxIHwgMDtcbiAgdmFyIHQgPSBuZXcgQXJyYXkobDIpO1xuICBzb3J0VG8oYSwgbDEsIHQsIDAsIGwyLCBjbXApO1xuICBzb3J0VG8oYSwgMCwgYSwgbDIsIGwxLCBjbXApO1xuICByZXR1cm4gbWVyZ2UoYSwgbDIsIGwxLCB0LCAwLCBsMiwgYSwgMCwgY21wKTtcbn1cblxuZnVuY3Rpb24gc3RhYmxlU29ydEluUGxhY2VCeShhLCBjbXApIHtcbiAgcmV0dXJuIHN0YWJsZVNvcnRJblBsYWNlQnlVKGEsIEN1cnJ5Ll9fMihjbXApKTtcbn1cblxuZnVuY3Rpb24gc3RhYmxlU29ydEJ5VShhLCBjbXApIHtcbiAgdmFyIGIgPSBhLnNsaWNlKDApO1xuICBzdGFibGVTb3J0SW5QbGFjZUJ5VShiLCBjbXApO1xuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gc3RhYmxlU29ydEJ5KGEsIGNtcCkge1xuICByZXR1cm4gc3RhYmxlU29ydEJ5VShhLCBDdXJyeS5fXzIoY21wKSk7XG59XG5cbmZ1bmN0aW9uIGJpbmFyeVNlYXJjaEJ5VShzb3J0ZWQsIGtleSwgY21wKSB7XG4gIHZhciBsZW4gPSBzb3J0ZWQubGVuZ3RoO1xuICBpZiAobGVuID09PSAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHZhciBsbyA9IHNvcnRlZFswXTtcbiAgdmFyIGMgPSBjbXAoa2V5LCBsbyk7XG4gIGlmIChjIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICB2YXIgaGkgPSBzb3J0ZWRbbGVuIC0gMSB8IDBdO1xuICB2YXIgYzIgPSBjbXAoa2V5LCBoaSk7XG4gIGlmIChjMiA+IDApIHtcbiAgICByZXR1cm4gLShsZW4gKyAxIHwgMCkgfCAwO1xuICB9IGVsc2Uge1xuICAgIHZhciBfbG8gPSAwO1xuICAgIHZhciBfaGkgPSBsZW4gLSAxIHwgMDtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgaGkkMSA9IF9oaTtcbiAgICAgIHZhciBsbyQxID0gX2xvO1xuICAgICAgdmFyIG1pZCA9IChsbyQxICsgaGkkMSB8IDApIC8gMiB8IDA7XG4gICAgICB2YXIgbWlkVmFsID0gc29ydGVkW21pZF07XG4gICAgICB2YXIgYyQxID0gY21wKGtleSwgbWlkVmFsKTtcbiAgICAgIGlmIChjJDEgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG1pZDtcbiAgICAgIH1cbiAgICAgIGlmIChjJDEgPCAwKSB7XG4gICAgICAgIGlmIChoaSQxID09PSBtaWQpIHtcbiAgICAgICAgICBpZiAoY21wKHNvcnRlZFtsbyQxXSwga2V5KSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGxvJDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtKGhpJDEgKyAxIHwgMCkgfCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfaGkgPSBtaWQ7XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgIH1cbiAgICAgIGlmIChsbyQxID09PSBtaWQpIHtcbiAgICAgICAgaWYgKGNtcChzb3J0ZWRbaGkkMV0sIGtleSkgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gaGkkMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gLShoaSQxICsgMSB8IDApIHwgMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX2xvID0gbWlkO1xuICAgICAgY29udGludWUgO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gYmluYXJ5U2VhcmNoQnkoc29ydGVkLCBrZXksIGNtcCkge1xuICByZXR1cm4gYmluYXJ5U2VhcmNoQnlVKHNvcnRlZCwga2V5LCBDdXJyeS5fXzIoY21wKSk7XG59XG5cbnZhciBJbnQ7XG5cbnZhciAkJFN0cmluZztcblxuZXhwb3J0IHtcbiAgSW50ICxcbiAgJCRTdHJpbmcgLFxuICBzdHJpY3RseVNvcnRlZExlbmd0aFUgLFxuICBzdHJpY3RseVNvcnRlZExlbmd0aCAsXG4gIGlzU29ydGVkVSAsXG4gIGlzU29ydGVkICxcbiAgc3RhYmxlU29ydEluUGxhY2VCeVUgLFxuICBzdGFibGVTb3J0SW5QbGFjZUJ5ICxcbiAgc3RhYmxlU29ydEJ5VSAsXG4gIHN0YWJsZVNvcnRCeSAsXG4gIGJpbmFyeVNlYXJjaEJ5VSAsXG4gIGJpbmFyeVNlYXJjaEJ5ICxcbiAgdW5pb25VICxcbiAgdW5pb24gLFxuICBpbnRlcnNlY3RVICxcbiAgaW50ZXJzZWN0ICxcbiAgZGlmZlUgLFxuICBkaWZmICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIEJlbHRfQXJyYXkgZnJvbSBcIi4vYmVsdF9BcnJheS5qc1wiO1xuXG5mdW5jdGlvbiBzb3J0ZWRMZW5ndGhBdXhNb3JlKHhzLCBfcHJlYywgX2FjYywgbGVuKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYWNjID0gX2FjYztcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIGlmIChhY2MgPj0gbGVuKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICB2YXIgdiA9IHhzW2FjY107XG4gICAgaWYgKHByZWMgPD0gdikge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgX2FjYyA9IGFjYyArIDEgfCAwO1xuICAgIF9wcmVjID0gdjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0cmljdGx5U29ydGVkTGVuZ3RoKHhzKSB7XG4gIHZhciBsZW4gPSB4cy5sZW5ndGg7XG4gIGlmIChsZW4gPT09IDAgfHwgbGVuID09PSAxKSB7XG4gICAgcmV0dXJuIGxlbjtcbiAgfVxuICB2YXIgeDAgPSB4c1swXTtcbiAgdmFyIHgxID0geHNbMV07XG4gIGlmICh4MCA8IHgxKSB7XG4gICAgdmFyIF9wcmVjID0geDE7XG4gICAgdmFyIF9hY2MgPSAyO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBhY2MgPSBfYWNjO1xuICAgICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICAgIGlmIChhY2MgPj0gbGVuKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgICB2YXIgdiA9IHhzW2FjY107XG4gICAgICBpZiAocHJlYyA+PSB2KSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgICBfYWNjID0gYWNjICsgMSB8IDA7XG4gICAgICBfcHJlYyA9IHY7XG4gICAgICBjb250aW51ZSA7XG4gICAgfTtcbiAgfSBlbHNlIGlmICh4MCA+IHgxKSB7XG4gICAgcmV0dXJuIC1zb3J0ZWRMZW5ndGhBdXhNb3JlKHhzLCB4MSwgMiwgbGVuKSB8IDA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTb3J0ZWQoYSkge1xuICB2YXIgbGVuID0gYS5sZW5ndGg7XG4gIGlmIChsZW4gPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2kgPSAwO1xuICAgIHZhciBsYXN0X2JvdW5kID0gbGVuIC0gMSB8IDA7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIGkgPSBfaTtcbiAgICAgIGlmIChpID09PSBsYXN0X2JvdW5kKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGFbaV0gPiBhW2kgKyAxIHwgMF0pIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgX2kgPSBpICsgMSB8IDA7XG4gICAgICBjb250aW51ZSA7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZShzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzKSB7XG4gIHZhciBzcmMxciA9IHNyYzFvZnMgKyBzcmMxbGVuIHwgMDtcbiAgdmFyIHNyYzJyID0gc3JjMm9mcyArIHNyYzJsZW4gfCAwO1xuICB2YXIgX2kxID0gc3JjMW9mcztcbiAgdmFyIF9zMSA9IHNyY1tzcmMxb2ZzXTtcbiAgdmFyIF9pMiA9IHNyYzJvZnM7XG4gIHZhciBfczIgPSBzcmMyW3NyYzJvZnNdO1xuICB2YXIgX2QgPSBkc3RvZnM7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgZCA9IF9kO1xuICAgIHZhciBzMiA9IF9zMjtcbiAgICB2YXIgaTIgPSBfaTI7XG4gICAgdmFyIHMxID0gX3MxO1xuICAgIHZhciBpMSA9IF9pMTtcbiAgICBpZiAoczEgPD0gczIpIHtcbiAgICAgIGRzdFtkXSA9IHMxO1xuICAgICAgdmFyIGkxJDEgPSBpMSArIDEgfCAwO1xuICAgICAgaWYgKGkxJDEgPj0gc3JjMXIpIHtcbiAgICAgICAgcmV0dXJuIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMyLCBpMiwgZHN0LCBkICsgMSB8IDAsIHNyYzJyIC0gaTIgfCAwKTtcbiAgICAgIH1cbiAgICAgIF9kID0gZCArIDEgfCAwO1xuICAgICAgX3MxID0gc3JjW2kxJDFdO1xuICAgICAgX2kxID0gaTEkMTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgZHN0W2RdID0gczI7XG4gICAgdmFyIGkyJDEgPSBpMiArIDEgfCAwO1xuICAgIGlmIChpMiQxID49IHNyYzJyKSB7XG4gICAgICByZXR1cm4gQmVsdF9BcnJheS5ibGl0VW5zYWZlKHNyYywgaTEsIGRzdCwgZCArIDEgfCAwLCBzcmMxciAtIGkxIHwgMCk7XG4gICAgfVxuICAgIF9kID0gZCArIDEgfCAwO1xuICAgIF9zMiA9IHNyYzJbaTIkMV07XG4gICAgX2kyID0gaTIkMTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVuaW9uKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMpIHtcbiAgdmFyIHNyYzFyID0gc3JjMW9mcyArIHNyYzFsZW4gfCAwO1xuICB2YXIgc3JjMnIgPSBzcmMyb2ZzICsgc3JjMmxlbiB8IDA7XG4gIHZhciBfaTEgPSBzcmMxb2ZzO1xuICB2YXIgX3MxID0gc3JjW3NyYzFvZnNdO1xuICB2YXIgX2kyID0gc3JjMm9mcztcbiAgdmFyIF9zMiA9IHNyYzJbc3JjMm9mc107XG4gIHZhciBfZCA9IGRzdG9mcztcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBkID0gX2Q7XG4gICAgdmFyIHMyID0gX3MyO1xuICAgIHZhciBpMiA9IF9pMjtcbiAgICB2YXIgczEgPSBfczE7XG4gICAgdmFyIGkxID0gX2kxO1xuICAgIGlmIChzMSA8IHMyKSB7XG4gICAgICBkc3RbZF0gPSBzMTtcbiAgICAgIHZhciBpMSQxID0gaTEgKyAxIHwgMDtcbiAgICAgIHZhciBkJDEgPSBkICsgMSB8IDA7XG4gICAgICBpZiAoaTEkMSA8IHNyYzFyKSB7XG4gICAgICAgIF9kID0gZCQxO1xuICAgICAgICBfczEgPSBzcmNbaTEkMV07XG4gICAgICAgIF9pMSA9IGkxJDE7XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgIH1cbiAgICAgIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMyLCBpMiwgZHN0LCBkJDEsIHNyYzJyIC0gaTIgfCAwKTtcbiAgICAgIHJldHVybiAoZCQxICsgc3JjMnIgfCAwKSAtIGkyIHwgMDtcbiAgICB9XG4gICAgaWYgKHMxID09PSBzMikge1xuICAgICAgZHN0W2RdID0gczE7XG4gICAgICB2YXIgaTEkMiA9IGkxICsgMSB8IDA7XG4gICAgICB2YXIgaTIkMSA9IGkyICsgMSB8IDA7XG4gICAgICB2YXIgZCQyID0gZCArIDEgfCAwO1xuICAgICAgaWYgKCEoaTEkMiA8IHNyYzFyICYmIGkyJDEgPCBzcmMycikpIHtcbiAgICAgICAgaWYgKGkxJDIgPT09IHNyYzFyKSB7XG4gICAgICAgICAgQmVsdF9BcnJheS5ibGl0VW5zYWZlKHNyYzIsIGkyJDEsIGRzdCwgZCQyLCBzcmMyciAtIGkyJDEgfCAwKTtcbiAgICAgICAgICByZXR1cm4gKGQkMiArIHNyYzJyIHwgMCkgLSBpMiQxIHwgMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjLCBpMSQyLCBkc3QsIGQkMiwgc3JjMXIgLSBpMSQyIHwgMCk7XG4gICAgICAgICAgcmV0dXJuIChkJDIgKyBzcmMxciB8IDApIC0gaTEkMiB8IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF9kID0gZCQyO1xuICAgICAgX3MyID0gc3JjMltpMiQxXTtcbiAgICAgIF9pMiA9IGkyJDE7XG4gICAgICBfczEgPSBzcmNbaTEkMl07XG4gICAgICBfaTEgPSBpMSQyO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBkc3RbZF0gPSBzMjtcbiAgICB2YXIgaTIkMiA9IGkyICsgMSB8IDA7XG4gICAgdmFyIGQkMyA9IGQgKyAxIHwgMDtcbiAgICBpZiAoaTIkMiA8IHNyYzJyKSB7XG4gICAgICBfZCA9IGQkMztcbiAgICAgIF9zMiA9IHNyYzJbaTIkMl07XG4gICAgICBfaTIgPSBpMiQyO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjLCBpMSwgZHN0LCBkJDMsIHNyYzFyIC0gaTEgfCAwKTtcbiAgICByZXR1cm4gKGQkMyArIHNyYzFyIHwgMCkgLSBpMSB8IDA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludGVyc2VjdChzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzKSB7XG4gIHZhciBzcmMxciA9IHNyYzFvZnMgKyBzcmMxbGVuIHwgMDtcbiAgdmFyIHNyYzJyID0gc3JjMm9mcyArIHNyYzJsZW4gfCAwO1xuICB2YXIgX2kxID0gc3JjMW9mcztcbiAgdmFyIF9zMSA9IHNyY1tzcmMxb2ZzXTtcbiAgdmFyIF9pMiA9IHNyYzJvZnM7XG4gIHZhciBfczIgPSBzcmMyW3NyYzJvZnNdO1xuICB2YXIgX2QgPSBkc3RvZnM7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgZCA9IF9kO1xuICAgIHZhciBzMiA9IF9zMjtcbiAgICB2YXIgaTIgPSBfaTI7XG4gICAgdmFyIHMxID0gX3MxO1xuICAgIHZhciBpMSA9IF9pMTtcbiAgICBpZiAoczEgPCBzMikge1xuICAgICAgdmFyIGkxJDEgPSBpMSArIDEgfCAwO1xuICAgICAgaWYgKGkxJDEgPj0gc3JjMXIpIHtcbiAgICAgICAgcmV0dXJuIGQ7XG4gICAgICB9XG4gICAgICBfczEgPSBzcmNbaTEkMV07XG4gICAgICBfaTEgPSBpMSQxO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBpZiAoczEgPT09IHMyKSB7XG4gICAgICBkc3RbZF0gPSBzMTtcbiAgICAgIHZhciBpMSQyID0gaTEgKyAxIHwgMDtcbiAgICAgIHZhciBpMiQxID0gaTIgKyAxIHwgMDtcbiAgICAgIHZhciBkJDEgPSBkICsgMSB8IDA7XG4gICAgICBpZiAoIShpMSQyIDwgc3JjMXIgJiYgaTIkMSA8IHNyYzJyKSkge1xuICAgICAgICByZXR1cm4gZCQxO1xuICAgICAgfVxuICAgICAgX2QgPSBkJDE7XG4gICAgICBfczIgPSBzcmMyW2kyJDFdO1xuICAgICAgX2kyID0gaTIkMTtcbiAgICAgIF9zMSA9IHNyY1tpMSQyXTtcbiAgICAgIF9pMSA9IGkxJDI7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIHZhciBpMiQyID0gaTIgKyAxIHwgMDtcbiAgICBpZiAoaTIkMiA+PSBzcmMycikge1xuICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIF9zMiA9IHNyYzJbaTIkMl07XG4gICAgX2kyID0gaTIkMjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGRpZmYoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcykge1xuICB2YXIgc3JjMXIgPSBzcmMxb2ZzICsgc3JjMWxlbiB8IDA7XG4gIHZhciBzcmMyciA9IHNyYzJvZnMgKyBzcmMybGVuIHwgMDtcbiAgdmFyIF9pMSA9IHNyYzFvZnM7XG4gIHZhciBfczEgPSBzcmNbc3JjMW9mc107XG4gIHZhciBfaTIgPSBzcmMyb2ZzO1xuICB2YXIgX3MyID0gc3JjMltzcmMyb2ZzXTtcbiAgdmFyIF9kID0gZHN0b2ZzO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGQgPSBfZDtcbiAgICB2YXIgczIgPSBfczI7XG4gICAgdmFyIGkyID0gX2kyO1xuICAgIHZhciBzMSA9IF9zMTtcbiAgICB2YXIgaTEgPSBfaTE7XG4gICAgaWYgKHMxIDwgczIpIHtcbiAgICAgIGRzdFtkXSA9IHMxO1xuICAgICAgdmFyIGQkMSA9IGQgKyAxIHwgMDtcbiAgICAgIHZhciBpMSQxID0gaTEgKyAxIHwgMDtcbiAgICAgIGlmIChpMSQxID49IHNyYzFyKSB7XG4gICAgICAgIHJldHVybiBkJDE7XG4gICAgICB9XG4gICAgICBfZCA9IGQkMTtcbiAgICAgIF9zMSA9IHNyY1tpMSQxXTtcbiAgICAgIF9pMSA9IGkxJDE7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIGlmIChzMSA9PT0gczIpIHtcbiAgICAgIHZhciBpMSQyID0gaTEgKyAxIHwgMDtcbiAgICAgIHZhciBpMiQxID0gaTIgKyAxIHwgMDtcbiAgICAgIGlmICghKGkxJDIgPCBzcmMxciAmJiBpMiQxIDwgc3JjMnIpKSB7XG4gICAgICAgIGlmIChpMSQyID09PSBzcmMxcikge1xuICAgICAgICAgIHJldHVybiBkO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMsIGkxJDIsIGRzdCwgZCwgc3JjMXIgLSBpMSQyIHwgMCk7XG4gICAgICAgICAgcmV0dXJuIChkICsgc3JjMXIgfCAwKSAtIGkxJDIgfCAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBfczIgPSBzcmMyW2kyJDFdO1xuICAgICAgX2kyID0gaTIkMTtcbiAgICAgIF9zMSA9IHNyY1tpMSQyXTtcbiAgICAgIF9pMSA9IGkxJDI7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIHZhciBpMiQyID0gaTIgKyAxIHwgMDtcbiAgICBpZiAoaTIkMiA8IHNyYzJyKSB7XG4gICAgICBfczIgPSBzcmMyW2kyJDJdO1xuICAgICAgX2kyID0gaTIkMjtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgQmVsdF9BcnJheS5ibGl0VW5zYWZlKHNyYywgaTEsIGRzdCwgZCwgc3JjMXIgLSBpMSB8IDApO1xuICAgIHJldHVybiAoZCArIHNyYzFyIHwgMCkgLSBpMSB8IDA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluc2VydGlvblNvcnQoc3JjLCBzcmNvZnMsIGRzdCwgZHN0b2ZzLCBsZW4pIHtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICB2YXIgZSA9IHNyY1tzcmNvZnMgKyBpIHwgMF07XG4gICAgdmFyIGogPSAoZHN0b2ZzICsgaSB8IDApIC0gMSB8IDA7XG4gICAgd2hpbGUoaiA+PSBkc3RvZnMgJiYgZHN0W2pdID4gZSkge1xuICAgICAgZHN0W2ogKyAxIHwgMF0gPSBkc3Rbal07XG4gICAgICBqID0gaiAtIDEgfCAwO1xuICAgIH07XG4gICAgZHN0W2ogKyAxIHwgMF0gPSBlO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBzb3J0VG8oc3JjLCBzcmNvZnMsIGRzdCwgZHN0b2ZzLCBsZW4pIHtcbiAgaWYgKGxlbiA8PSA1KSB7XG4gICAgcmV0dXJuIGluc2VydGlvblNvcnQoc3JjLCBzcmNvZnMsIGRzdCwgZHN0b2ZzLCBsZW4pO1xuICB9XG4gIHZhciBsMSA9IGxlbiAvIDIgfCAwO1xuICB2YXIgbDIgPSBsZW4gLSBsMSB8IDA7XG4gIHNvcnRUbyhzcmMsIHNyY29mcyArIGwxIHwgMCwgZHN0LCBkc3RvZnMgKyBsMSB8IDAsIGwyKTtcbiAgc29ydFRvKHNyYywgc3Jjb2ZzLCBzcmMsIHNyY29mcyArIGwyIHwgMCwgbDEpO1xuICByZXR1cm4gbWVyZ2Uoc3JjLCBzcmNvZnMgKyBsMiB8IDAsIGwxLCBkc3QsIGRzdG9mcyArIGwxIHwgMCwgbDIsIGRzdCwgZHN0b2ZzKTtcbn1cblxuZnVuY3Rpb24gc3RhYmxlU29ydEluUGxhY2UoYSkge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICBpZiAobCA8PSA1KSB7XG4gICAgcmV0dXJuIGluc2VydGlvblNvcnQoYSwgMCwgYSwgMCwgbCk7XG4gIH1cbiAgdmFyIGwxID0gbCAvIDIgfCAwO1xuICB2YXIgbDIgPSBsIC0gbDEgfCAwO1xuICB2YXIgdCA9IG5ldyBBcnJheShsMik7XG4gIHNvcnRUbyhhLCBsMSwgdCwgMCwgbDIpO1xuICBzb3J0VG8oYSwgMCwgYSwgbDIsIGwxKTtcbiAgcmV0dXJuIG1lcmdlKGEsIGwyLCBsMSwgdCwgMCwgbDIsIGEsIDApO1xufVxuXG5mdW5jdGlvbiBzdGFibGVTb3J0KGEpIHtcbiAgdmFyIGIgPSBhLnNsaWNlKDApO1xuICBzdGFibGVTb3J0SW5QbGFjZShiKTtcbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIGJpbmFyeVNlYXJjaChzb3J0ZWQsIGtleSkge1xuICB2YXIgbGVuID0gc29ydGVkLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICB2YXIgbG8gPSBzb3J0ZWRbMF07XG4gIGlmIChrZXkgPCBsbykge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICB2YXIgaGkgPSBzb3J0ZWRbbGVuIC0gMSB8IDBdO1xuICBpZiAoa2V5ID4gaGkpIHtcbiAgICByZXR1cm4gLShsZW4gKyAxIHwgMCkgfCAwO1xuICB9IGVsc2Uge1xuICAgIHZhciBfbG8gPSAwO1xuICAgIHZhciBfaGkgPSBsZW4gLSAxIHwgMDtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgaGkkMSA9IF9oaTtcbiAgICAgIHZhciBsbyQxID0gX2xvO1xuICAgICAgdmFyIG1pZCA9IChsbyQxICsgaGkkMSB8IDApIC8gMiB8IDA7XG4gICAgICB2YXIgbWlkVmFsID0gc29ydGVkW21pZF07XG4gICAgICBpZiAoa2V5ID09PSBtaWRWYWwpIHtcbiAgICAgICAgcmV0dXJuIG1pZDtcbiAgICAgIH1cbiAgICAgIGlmIChrZXkgPCBtaWRWYWwpIHtcbiAgICAgICAgaWYgKGhpJDEgPT09IG1pZCkge1xuICAgICAgICAgIGlmIChzb3J0ZWRbbG8kMV0gPT09IGtleSkge1xuICAgICAgICAgICAgcmV0dXJuIGxvJDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtKGhpJDEgKyAxIHwgMCkgfCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfaGkgPSBtaWQ7XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgIH1cbiAgICAgIGlmIChsbyQxID09PSBtaWQpIHtcbiAgICAgICAgaWYgKHNvcnRlZFtoaSQxXSA9PT0ga2V5KSB7XG4gICAgICAgICAgcmV0dXJuIGhpJDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC0oaGkkMSArIDEgfCAwKSB8IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF9sbyA9IG1pZDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIHN0cmljdGx5U29ydGVkTGVuZ3RoICxcbiAgaXNTb3J0ZWQgLFxuICBzdGFibGVTb3J0SW5QbGFjZSAsXG4gIHN0YWJsZVNvcnQgLFxuICBiaW5hcnlTZWFyY2ggLFxuICB1bmlvbiAsXG4gIGludGVyc2VjdCAsXG4gIGRpZmYgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQ3VycnkgZnJvbSBcIi4vY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfb3B0aW9uIGZyb20gXCIuL2NhbWxfb3B0aW9uLmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X1NvcnRBcnJheSBmcm9tIFwiLi9iZWx0X1NvcnRBcnJheS5qc1wiO1xuXG5mdW5jdGlvbiBjb3B5KG4pIHtcbiAgaWYgKG4gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICB2OiBuLnYsXG4gICAgICAgICAgICBoOiBuLmgsXG4gICAgICAgICAgICBsOiBjb3B5KG4ubCksXG4gICAgICAgICAgICByOiBjb3B5KG4ucilcbiAgICAgICAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBuO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNyZWF0ZShsLCB2LCByKSB7XG4gIHZhciBobCA9IGwgIT09IHVuZGVmaW5lZCA/IGwuaCA6IDA7XG4gIHZhciBociA9IHIgIT09IHVuZGVmaW5lZCA/IHIuaCA6IDA7XG4gIHJldHVybiB7XG4gICAgICAgICAgdjogdixcbiAgICAgICAgICBoOiAoXG4gICAgICAgICAgICBobCA+PSBociA/IGhsIDogaHJcbiAgICAgICAgICApICsgMSB8IDAsXG4gICAgICAgICAgbDogbCxcbiAgICAgICAgICByOiByXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHNpbmdsZXRvbih4KSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgdjogeCxcbiAgICAgICAgICBoOiAxLFxuICAgICAgICAgIGw6IHVuZGVmaW5lZCxcbiAgICAgICAgICByOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0R2UobCwgcikge1xuICBpZiAociAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGwuaCA+PSByLmg7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbn1cblxuZnVuY3Rpb24gYmFsKGwsIHYsIHIpIHtcbiAgdmFyIGhsID0gbCAhPT0gdW5kZWZpbmVkID8gbC5oIDogMDtcbiAgdmFyIGhyID0gciAhPT0gdW5kZWZpbmVkID8gci5oIDogMDtcbiAgaWYgKGhsID4gKGhyICsgMiB8IDApKSB7XG4gICAgdmFyIGxsID0gbC5sO1xuICAgIHZhciBsciA9IGwucjtcbiAgICBpZiAoaGVpZ2h0R2UobGwsIGxyKSkge1xuICAgICAgcmV0dXJuIGNyZWF0ZShsbCwgbC52LCBjcmVhdGUobHIsIHYsIHIpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGNyZWF0ZShjcmVhdGUobGwsIGwudiwgbHIubCksIGxyLnYsIGNyZWF0ZShsci5yLCB2LCByKSk7XG4gICAgfVxuICB9XG4gIGlmIChociA8PSAoaGwgKyAyIHwgMCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgdjogdixcbiAgICAgICAgICAgIGg6IChcbiAgICAgICAgICAgICAgaGwgPj0gaHIgPyBobCA6IGhyXG4gICAgICAgICAgICApICsgMSB8IDAsXG4gICAgICAgICAgICBsOiBsLFxuICAgICAgICAgICAgcjogclxuICAgICAgICAgIH07XG4gIH1cbiAgdmFyIHJsID0gci5sO1xuICB2YXIgcnIgPSByLnI7XG4gIGlmIChoZWlnaHRHZShyciwgcmwpKSB7XG4gICAgcmV0dXJuIGNyZWF0ZShjcmVhdGUobCwgdiwgcmwpLCByLnYsIHJyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY3JlYXRlKGNyZWF0ZShsLCB2LCBybC5sKSwgcmwudiwgY3JlYXRlKHJsLnIsIHIudiwgcnIpKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtaW4wQXV4KF9uKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbiA9IF9uO1xuICAgIHZhciBuJDEgPSBuLmw7XG4gICAgaWYgKG4kMSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbi52O1xuICAgIH1cbiAgICBfbiA9IG4kMTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1pbmltdW0obikge1xuICBpZiAobiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUobWluMEF1eChuKSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIG1pblVuZGVmaW5lZChuKSB7XG4gIGlmIChuICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbWluMEF1eChuKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gbWF4MEF1eChfbikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIG4gPSBfbjtcbiAgICB2YXIgbiQxID0gbi5yO1xuICAgIGlmIChuJDEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG4udjtcbiAgICB9XG4gICAgX24gPSBuJDE7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtYXhpbXVtKG4pIHtcbiAgaWYgKG4gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKG1heDBBdXgobikpO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBtYXhVbmRlZmluZWQobikge1xuICBpZiAobiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG1heDBBdXgobik7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1pbkF1eFdpdGhSZWYobiwgdikge1xuICB2YXIgbG4gPSBuLmw7XG4gIGlmIChsbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGJhbChyZW1vdmVNaW5BdXhXaXRoUmVmKGxuLCB2KSwgbi52LCBuLnIpO1xuICB9IGVsc2Uge1xuICAgIHYuY29udGVudHMgPSBuLnY7XG4gICAgcmV0dXJuIG4ucjtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc0VtcHR5KG4pIHtcbiAgcmV0dXJuIG4gPT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gc3RhY2tBbGxMZWZ0KF92LCBfcykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHMgPSBfcztcbiAgICB2YXIgdiA9IF92O1xuICAgIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBzO1xuICAgIH1cbiAgICBfcyA9IHtcbiAgICAgIGhkOiB2LFxuICAgICAgdGw6IHNcbiAgICB9O1xuICAgIF92ID0gdi5sO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFUoX24sIGYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBuID0gX247XG4gICAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgZm9yRWFjaFUobi5sLCBmKTtcbiAgICBmKG4udik7XG4gICAgX24gPSBuLnI7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoKG4sIGYpIHtcbiAgcmV0dXJuIGZvckVhY2hVKG4sIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVUoX3MsIF9hY2N1LCBmKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYWNjdSA9IF9hY2N1O1xuICAgIHZhciBzID0gX3M7XG4gICAgaWYgKHMgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIF9hY2N1ID0gZihyZWR1Y2VVKHMubCwgYWNjdSwgZiksIHMudik7XG4gICAgX3MgPSBzLnI7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2UocywgYWNjdSwgZikge1xuICByZXR1cm4gcmVkdWNlVShzLCBhY2N1LCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiBldmVyeVUoX24sIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBuID0gX247XG4gICAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghcChuLnYpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghZXZlcnlVKG4ubCwgcCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX24gPSBuLnI7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBldmVyeShuLCBwKSB7XG4gIHJldHVybiBldmVyeVUobiwgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gc29tZVUoX24sIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBuID0gX247XG4gICAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocChuLnYpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHNvbWVVKG4ubCwgcCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBfbiA9IG4ucjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNvbWUobiwgcCkge1xuICByZXR1cm4gc29tZVUobiwgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gYWRkTWluRWxlbWVudChuLCB2KSB7XG4gIGlmIChuICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYmFsKGFkZE1pbkVsZW1lbnQobi5sLCB2KSwgbi52LCBuLnIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzaW5nbGV0b24odik7XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkTWF4RWxlbWVudChuLCB2KSB7XG4gIGlmIChuICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYmFsKG4ubCwgbi52LCBhZGRNYXhFbGVtZW50KG4uciwgdikpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzaW5nbGV0b24odik7XG4gIH1cbn1cblxuZnVuY3Rpb24gam9pblNoYXJlZChsbiwgdiwgcm4pIHtcbiAgaWYgKGxuID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYWRkTWluRWxlbWVudChybiwgdik7XG4gIH1cbiAgaWYgKHJuID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYWRkTWF4RWxlbWVudChsbiwgdik7XG4gIH1cbiAgdmFyIGxoID0gbG4uaDtcbiAgdmFyIHJoID0gcm4uaDtcbiAgaWYgKGxoID4gKHJoICsgMiB8IDApKSB7XG4gICAgcmV0dXJuIGJhbChsbi5sLCBsbi52LCBqb2luU2hhcmVkKGxuLnIsIHYsIHJuKSk7XG4gIH0gZWxzZSBpZiAocmggPiAobGggKyAyIHwgMCkpIHtcbiAgICByZXR1cm4gYmFsKGpvaW5TaGFyZWQobG4sIHYsIHJuLmwpLCBybi52LCBybi5yKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY3JlYXRlKGxuLCB2LCBybik7XG4gIH1cbn1cblxuZnVuY3Rpb24gY29uY2F0U2hhcmVkKHQxLCB0Mikge1xuICBpZiAodDEgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0MjtcbiAgfVxuICBpZiAodDIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0MTtcbiAgfVxuICB2YXIgdiA9IHtcbiAgICBjb250ZW50czogdDIudlxuICB9O1xuICB2YXIgdDJyID0gcmVtb3ZlTWluQXV4V2l0aFJlZih0Miwgdik7XG4gIHJldHVybiBqb2luU2hhcmVkKHQxLCB2LmNvbnRlbnRzLCB0MnIpO1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb25TaGFyZWRVKG4sIHApIHtcbiAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICBdO1xuICB9XG4gIHZhciB2YWx1ZSA9IG4udjtcbiAgdmFyIG1hdGNoID0gcGFydGl0aW9uU2hhcmVkVShuLmwsIHApO1xuICB2YXIgbGYgPSBtYXRjaFsxXTtcbiAgdmFyIGx0ID0gbWF0Y2hbMF07XG4gIHZhciBwdiA9IHAodmFsdWUpO1xuICB2YXIgbWF0Y2gkMSA9IHBhcnRpdGlvblNoYXJlZFUobi5yLCBwKTtcbiAgdmFyIHJmID0gbWF0Y2gkMVsxXTtcbiAgdmFyIHJ0ID0gbWF0Y2gkMVswXTtcbiAgaWYgKHB2KSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGpvaW5TaGFyZWQobHQsIHZhbHVlLCBydCksXG4gICAgICAgICAgICBjb25jYXRTaGFyZWQobGYsIHJmKVxuICAgICAgICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGNvbmNhdFNoYXJlZChsdCwgcnQpLFxuICAgICAgICAgICAgam9pblNoYXJlZChsZiwgdmFsdWUsIHJmKVxuICAgICAgICAgIF07XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uU2hhcmVkKG4sIHApIHtcbiAgcmV0dXJuIHBhcnRpdGlvblNoYXJlZFUobiwgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gbGVuZ3RoTm9kZShuKSB7XG4gIHZhciBsID0gbi5sO1xuICB2YXIgciA9IG4ucjtcbiAgdmFyIHNpemVMID0gbCAhPT0gdW5kZWZpbmVkID8gbGVuZ3RoTm9kZShsKSA6IDA7XG4gIHZhciBzaXplUiA9IHIgIT09IHVuZGVmaW5lZCA/IGxlbmd0aE5vZGUocikgOiAwO1xuICByZXR1cm4gKDEgKyBzaXplTCB8IDApICsgc2l6ZVIgfCAwO1xufVxuXG5mdW5jdGlvbiBzaXplKG4pIHtcbiAgaWYgKG4gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBsZW5ndGhOb2RlKG4pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIHRvTGlzdEF1eChfbiwgX2FjY3UpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgdmFyIG4gPSBfbjtcbiAgICBpZiAobiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9XG4gICAgX2FjY3UgPSB7XG4gICAgICBoZDogbi52LFxuICAgICAgdGw6IHRvTGlzdEF1eChuLnIsIGFjY3UpXG4gICAgfTtcbiAgICBfbiA9IG4ubDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvTGlzdChzKSB7XG4gIHJldHVybiB0b0xpc3RBdXgocywgLyogW10gKi8wKTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnZhcmlhbnRJbnRlcm5hbChfdikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHYgPSBfdjtcbiAgICBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgbCA9IHYubDtcbiAgICB2YXIgciA9IHYucjtcbiAgICB2YXIgZGlmZiA9IChcbiAgICAgIGwgIT09IHVuZGVmaW5lZCA/IGwuaCA6IDBcbiAgICApIC0gKFxuICAgICAgciAhPT0gdW5kZWZpbmVkID8gci5oIDogMFxuICAgICkgfCAwO1xuICAgIGlmICghKGRpZmYgPD0gMiAmJiBkaWZmID49IC0yKSkge1xuICAgICAgdGhyb3cge1xuICAgICAgICAgICAgUkVfRVhOX0lEOiBcIkFzc2VydF9mYWlsdXJlXCIsXG4gICAgICAgICAgICBfMTogW1xuICAgICAgICAgICAgICBcImJlbHRfaW50ZXJuYWxBVkxzZXQubWxcIixcbiAgICAgICAgICAgICAgMjkwLFxuICAgICAgICAgICAgICA0XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgfTtcbiAgICB9XG4gICAgY2hlY2tJbnZhcmlhbnRJbnRlcm5hbChsKTtcbiAgICBfdiA9IHI7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWxsQXJyYXkoX24sIF9pLCBhcnIpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgdmFyIG4gPSBfbjtcbiAgICB2YXIgdiA9IG4udjtcbiAgICB2YXIgbCA9IG4ubDtcbiAgICB2YXIgciA9IG4ucjtcbiAgICB2YXIgbmV4dCA9IGwgIT09IHVuZGVmaW5lZCA/IGZpbGxBcnJheShsLCBpLCBhcnIpIDogaTtcbiAgICBhcnJbbmV4dF0gPSB2O1xuICAgIHZhciBybmV4dCA9IG5leHQgKyAxIHwgMDtcbiAgICBpZiAociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gcm5leHQ7XG4gICAgfVxuICAgIF9pID0gcm5leHQ7XG4gICAgX24gPSByO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsbEFycmF5V2l0aFBhcnRpdGlvbihfbiwgY3Vyc29yLCBhcnIsIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBuID0gX247XG4gICAgdmFyIHYgPSBuLnY7XG4gICAgdmFyIGwgPSBuLmw7XG4gICAgdmFyIHIgPSBuLnI7XG4gICAgaWYgKGwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgZmlsbEFycmF5V2l0aFBhcnRpdGlvbihsLCBjdXJzb3IsIGFyciwgcCk7XG4gICAgfVxuICAgIGlmIChwKHYpKSB7XG4gICAgICB2YXIgYyA9IGN1cnNvci5mb3J3YXJkO1xuICAgICAgYXJyW2NdID0gdjtcbiAgICAgIGN1cnNvci5mb3J3YXJkID0gYyArIDEgfCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgYyQxID0gY3Vyc29yLmJhY2t3YXJkO1xuICAgICAgYXJyW2MkMV0gPSB2O1xuICAgICAgY3Vyc29yLmJhY2t3YXJkID0gYyQxIC0gMSB8IDA7XG4gICAgfVxuICAgIGlmIChyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIF9uID0gcjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbGxBcnJheVdpdGhGaWx0ZXIoX24sIF9pLCBhcnIsIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgdmFyIG4gPSBfbjtcbiAgICB2YXIgdiA9IG4udjtcbiAgICB2YXIgbCA9IG4ubDtcbiAgICB2YXIgciA9IG4ucjtcbiAgICB2YXIgbmV4dCA9IGwgIT09IHVuZGVmaW5lZCA/IGZpbGxBcnJheVdpdGhGaWx0ZXIobCwgaSwgYXJyLCBwKSA6IGk7XG4gICAgdmFyIHJuZXh0ID0gcCh2KSA/IChhcnJbbmV4dF0gPSB2LCBuZXh0ICsgMSB8IDApIDogbmV4dDtcbiAgICBpZiAociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gcm5leHQ7XG4gICAgfVxuICAgIF9pID0gcm5leHQ7XG4gICAgX24gPSByO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheShuKSB7XG4gIGlmIChuID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHNpemUgPSBsZW5ndGhOb2RlKG4pO1xuICB2YXIgdiA9IG5ldyBBcnJheShzaXplKTtcbiAgZmlsbEFycmF5KG4sIDAsIHYpO1xuICByZXR1cm4gdjtcbn1cblxuZnVuY3Rpb24gZnJvbVNvcnRlZEFycmF5UmV2QXV4KGFyciwgb2ZmLCBsZW4pIHtcbiAgc3dpdGNoIChsZW4pIHtcbiAgICBjYXNlIDAgOlxuICAgICAgICByZXR1cm4gO1xuICAgIGNhc2UgMSA6XG4gICAgICAgIHJldHVybiBzaW5nbGV0b24oYXJyW29mZl0pO1xuICAgIGNhc2UgMiA6XG4gICAgICAgIHZhciB4MCA9IGFycltvZmZdO1xuICAgICAgICB2YXIgeDEgPSBhcnJbb2ZmIC0gMSB8IDBdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHY6IHgxLFxuICAgICAgICAgICAgICAgIGg6IDIsXG4gICAgICAgICAgICAgICAgbDogc2luZ2xldG9uKHgwKSxcbiAgICAgICAgICAgICAgICByOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgfTtcbiAgICBjYXNlIDMgOlxuICAgICAgICB2YXIgeDAkMSA9IGFycltvZmZdO1xuICAgICAgICB2YXIgeDEkMSA9IGFycltvZmYgLSAxIHwgMF07XG4gICAgICAgIHZhciB4MiA9IGFycltvZmYgLSAyIHwgMF07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdjogeDEkMSxcbiAgICAgICAgICAgICAgICBoOiAyLFxuICAgICAgICAgICAgICAgIGw6IHNpbmdsZXRvbih4MCQxKSxcbiAgICAgICAgICAgICAgICByOiBzaW5nbGV0b24oeDIpXG4gICAgICAgICAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBubCA9IGxlbiAvIDIgfCAwO1xuICAgICAgdmFyIGxlZnQgPSBmcm9tU29ydGVkQXJyYXlSZXZBdXgoYXJyLCBvZmYsIG5sKTtcbiAgICAgIHZhciBtaWQgPSBhcnJbb2ZmIC0gbmwgfCAwXTtcbiAgICAgIHZhciByaWdodCA9IGZyb21Tb3J0ZWRBcnJheVJldkF1eChhcnIsIChvZmYgLSBubCB8IDApIC0gMSB8IDAsIChsZW4gLSBubCB8IDApIC0gMSB8IDApO1xuICAgICAgcmV0dXJuIGNyZWF0ZShsZWZ0LCBtaWQsIHJpZ2h0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmcm9tU29ydGVkQXJyYXlBdXgoYXJyLCBvZmYsIGxlbikge1xuICBzd2l0Y2ggKGxlbikge1xuICAgIGNhc2UgMCA6XG4gICAgICAgIHJldHVybiA7XG4gICAgY2FzZSAxIDpcbiAgICAgICAgcmV0dXJuIHNpbmdsZXRvbihhcnJbb2ZmXSk7XG4gICAgY2FzZSAyIDpcbiAgICAgICAgdmFyIHgwID0gYXJyW29mZl07XG4gICAgICAgIHZhciB4MSA9IGFycltvZmYgKyAxIHwgMF07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdjogeDEsXG4gICAgICAgICAgICAgICAgaDogMixcbiAgICAgICAgICAgICAgICBsOiBzaW5nbGV0b24oeDApLFxuICAgICAgICAgICAgICAgIHI6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICB9O1xuICAgIGNhc2UgMyA6XG4gICAgICAgIHZhciB4MCQxID0gYXJyW29mZl07XG4gICAgICAgIHZhciB4MSQxID0gYXJyW29mZiArIDEgfCAwXTtcbiAgICAgICAgdmFyIHgyID0gYXJyW29mZiArIDIgfCAwXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2OiB4MSQxLFxuICAgICAgICAgICAgICAgIGg6IDIsXG4gICAgICAgICAgICAgICAgbDogc2luZ2xldG9uKHgwJDEpLFxuICAgICAgICAgICAgICAgIHI6IHNpbmdsZXRvbih4MilcbiAgICAgICAgICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIG5sID0gbGVuIC8gMiB8IDA7XG4gICAgICB2YXIgbGVmdCA9IGZyb21Tb3J0ZWRBcnJheUF1eChhcnIsIG9mZiwgbmwpO1xuICAgICAgdmFyIG1pZCA9IGFycltvZmYgKyBubCB8IDBdO1xuICAgICAgdmFyIHJpZ2h0ID0gZnJvbVNvcnRlZEFycmF5QXV4KGFyciwgKG9mZiArIG5sIHwgMCkgKyAxIHwgMCwgKGxlbiAtIG5sIHwgMCkgLSAxIHwgMCk7XG4gICAgICByZXR1cm4gY3JlYXRlKGxlZnQsIG1pZCwgcmlnaHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZyb21Tb3J0ZWRBcnJheVVuc2FmZShhcnIpIHtcbiAgcmV0dXJuIGZyb21Tb3J0ZWRBcnJheUF1eChhcnIsIDAsIGFyci5sZW5ndGgpO1xufVxuXG5mdW5jdGlvbiBrZWVwU2hhcmVkVShuLCBwKSB7XG4gIGlmIChuID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciB2ID0gbi52O1xuICB2YXIgbCA9IG4ubDtcbiAgdmFyIHIgPSBuLnI7XG4gIHZhciBuZXdMID0ga2VlcFNoYXJlZFUobCwgcCk7XG4gIHZhciBwdiA9IHAodik7XG4gIHZhciBuZXdSID0ga2VlcFNoYXJlZFUociwgcCk7XG4gIGlmIChwdikge1xuICAgIGlmIChsID09PSBuZXdMICYmIHIgPT09IG5ld1IpIHtcbiAgICAgIHJldHVybiBuO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gam9pblNoYXJlZChuZXdMLCB2LCBuZXdSKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNvbmNhdFNoYXJlZChuZXdMLCBuZXdSKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBrZWVwU2hhcmVkKG4sIHApIHtcbiAgcmV0dXJuIGtlZXBTaGFyZWRVKG4sIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIGtlZXBDb3B5VShuLCBwKSB7XG4gIGlmIChuID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciBzaXplID0gbGVuZ3RoTm9kZShuKTtcbiAgdmFyIHYgPSBuZXcgQXJyYXkoc2l6ZSk7XG4gIHZhciBsYXN0ID0gZmlsbEFycmF5V2l0aEZpbHRlcihuLCAwLCB2LCBwKTtcbiAgcmV0dXJuIGZyb21Tb3J0ZWRBcnJheUF1eCh2LCAwLCBsYXN0KTtcbn1cblxuZnVuY3Rpb24ga2VlcENvcHkobiwgcCkge1xuICByZXR1cm4ga2VlcENvcHlVKG4sIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnRpdGlvbkNvcHlVKG4sIHApIHtcbiAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICBdO1xuICB9XG4gIHZhciBzaXplID0gbGVuZ3RoTm9kZShuKTtcbiAgdmFyIHYgPSBuZXcgQXJyYXkoc2l6ZSk7XG4gIHZhciBiYWNrd2FyZCA9IHNpemUgLSAxIHwgMDtcbiAgdmFyIGN1cnNvciA9IHtcbiAgICBmb3J3YXJkOiAwLFxuICAgIGJhY2t3YXJkOiBiYWNrd2FyZFxuICB9O1xuICBmaWxsQXJyYXlXaXRoUGFydGl0aW9uKG4sIGN1cnNvciwgdiwgcCk7XG4gIHZhciBmb3J3YXJkTGVuID0gY3Vyc29yLmZvcndhcmQ7XG4gIHJldHVybiBbXG4gICAgICAgICAgZnJvbVNvcnRlZEFycmF5QXV4KHYsIDAsIGZvcndhcmRMZW4pLFxuICAgICAgICAgIGZyb21Tb3J0ZWRBcnJheVJldkF1eCh2LCBiYWNrd2FyZCwgc2l6ZSAtIGZvcndhcmRMZW4gfCAwKVxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb25Db3B5KG4sIHApIHtcbiAgcmV0dXJuIHBhcnRpdGlvbkNvcHlVKG4sIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIGhhcyhfdCwgeCwgY21wKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgdCA9IF90O1xuICAgIGlmICh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHYgPSB0LnY7XG4gICAgdmFyIGMgPSBjbXAoeCwgdik7XG4gICAgaWYgKGMgPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBfdCA9IGMgPCAwID8gdC5sIDogdC5yO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY21wKHMxLCBzMiwgY21wJDEpIHtcbiAgdmFyIGxlbjEgPSBzaXplKHMxKTtcbiAgdmFyIGxlbjIgPSBzaXplKHMyKTtcbiAgaWYgKGxlbjEgPT09IGxlbjIpIHtcbiAgICB2YXIgX2UxID0gc3RhY2tBbGxMZWZ0KHMxLCAvKiBbXSAqLzApO1xuICAgIHZhciBfZTIgPSBzdGFja0FsbExlZnQoczIsIC8qIFtdICovMCk7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIGUyID0gX2UyO1xuICAgICAgdmFyIGUxID0gX2UxO1xuICAgICAgaWYgKCFlMSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIGlmICghZTIpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICB2YXIgaDIgPSBlMi5oZDtcbiAgICAgIHZhciBoMSA9IGUxLmhkO1xuICAgICAgdmFyIGMgPSBjbXAkMShoMS52LCBoMi52KTtcbiAgICAgIGlmIChjICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfVxuICAgICAgX2UyID0gc3RhY2tBbGxMZWZ0KGgyLnIsIGUyLnRsKTtcbiAgICAgIF9lMSA9IHN0YWNrQWxsTGVmdChoMS5yLCBlMS50bCk7XG4gICAgICBjb250aW51ZSA7XG4gICAgfTtcbiAgfSBlbHNlIGlmIChsZW4xIDwgbGVuMikge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlcShzMSwgczIsIGMpIHtcbiAgcmV0dXJuIGNtcChzMSwgczIsIGMpID09PSAwO1xufVxuXG5mdW5jdGlvbiBzdWJzZXQoX3MxLCBfczIsIGNtcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHMyID0gX3MyO1xuICAgIHZhciBzMSA9IF9zMTtcbiAgICBpZiAoczEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChzMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciB2MSA9IHMxLnY7XG4gICAgdmFyIGwxID0gczEubDtcbiAgICB2YXIgcjEgPSBzMS5yO1xuICAgIHZhciB2MiA9IHMyLnY7XG4gICAgdmFyIGwyID0gczIubDtcbiAgICB2YXIgcjIgPSBzMi5yO1xuICAgIHZhciBjID0gY21wKHYxLCB2Mik7XG4gICAgaWYgKGMgPT09IDApIHtcbiAgICAgIGlmICghc3Vic2V0KGwxLCBsMiwgY21wKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBfczIgPSByMjtcbiAgICAgIF9zMSA9IHIxO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBpZiAoYyA8IDApIHtcbiAgICAgIGlmICghc3Vic2V0KGNyZWF0ZShsMSwgdjEsIHVuZGVmaW5lZCksIGwyLCBjbXApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIF9zMSA9IHIxO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBpZiAoIXN1YnNldChjcmVhdGUodW5kZWZpbmVkLCB2MSwgcjEpLCByMiwgY21wKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfczEgPSBsMTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldChfbiwgeCwgY21wKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbiA9IF9uO1xuICAgIGlmIChuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciB2ID0gbi52O1xuICAgIHZhciBjID0gY21wKHgsIHYpO1xuICAgIGlmIChjID09PSAwKSB7XG4gICAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZSh2KTtcbiAgICB9XG4gICAgX24gPSBjIDwgMCA/IG4ubCA6IG4ucjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZChfbiwgeCwgY21wKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbiA9IF9uO1xuICAgIGlmIChuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciB2ID0gbi52O1xuICAgIHZhciBjID0gY21wKHgsIHYpO1xuICAgIGlmIChjID09PSAwKSB7XG4gICAgICByZXR1cm4gdjtcbiAgICB9XG4gICAgX24gPSBjIDwgMCA/IG4ubCA6IG4ucjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEV4bihfbiwgeCwgY21wKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbiA9IF9uO1xuICAgIGlmIChuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB2ID0gbi52O1xuICAgICAgdmFyIGMgPSBjbXAoeCwgdik7XG4gICAgICBpZiAoYyA9PT0gMCkge1xuICAgICAgICByZXR1cm4gdjtcbiAgICAgIH1cbiAgICAgIF9uID0gYyA8IDAgPyBuLmwgOiBuLnI7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IFwiTm90X2ZvdW5kXCIsXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVdpdGhMZWZ0Q2hpbGQoazIpIHtcbiAgdmFyIGsxID0gazIubDtcbiAgazIubCA9IGsxLnI7XG4gIGsxLnIgPSBrMjtcbiAgdmFyIG4gPSBrMi5sO1xuICB2YXIgaGxrMiA9IG4gIT09IHVuZGVmaW5lZCA/IG4uaCA6IDA7XG4gIHZhciBuJDEgPSBrMi5yO1xuICB2YXIgaHJrMiA9IG4kMSAhPT0gdW5kZWZpbmVkID8gbiQxLmggOiAwO1xuICBrMi5oID0gKFxuICAgIGhsazIgPiBocmsyID8gaGxrMiA6IGhyazJcbiAgKSArIDEgfCAwO1xuICB2YXIgbiQyID0gazEubDtcbiAgdmFyIGhsazEgPSBuJDIgIT09IHVuZGVmaW5lZCA/IG4kMi5oIDogMDtcbiAgdmFyIGhrMiA9IGsyLmg7XG4gIGsxLmggPSAoXG4gICAgaGxrMSA+IGhrMiA/IGhsazEgOiBoazJcbiAgKSArIDEgfCAwO1xuICByZXR1cm4gazE7XG59XG5cbmZ1bmN0aW9uIHJvdGF0ZVdpdGhSaWdodENoaWxkKGsxKSB7XG4gIHZhciBrMiA9IGsxLnI7XG4gIGsxLnIgPSBrMi5sO1xuICBrMi5sID0gazE7XG4gIHZhciBuID0gazEubDtcbiAgdmFyIGhsazEgPSBuICE9PSB1bmRlZmluZWQgPyBuLmggOiAwO1xuICB2YXIgbiQxID0gazEucjtcbiAgdmFyIGhyazEgPSBuJDEgIT09IHVuZGVmaW5lZCA/IG4kMS5oIDogMDtcbiAgazEuaCA9IChcbiAgICBobGsxID4gaHJrMSA/IGhsazEgOiBocmsxXG4gICkgKyAxIHwgMDtcbiAgdmFyIG4kMiA9IGsyLnI7XG4gIHZhciBocmsyID0gbiQyICE9PSB1bmRlZmluZWQgPyBuJDIuaCA6IDA7XG4gIHZhciBoazEgPSBrMS5oO1xuICBrMi5oID0gKFxuICAgIGhyazIgPiBoazEgPyBocmsyIDogaGsxXG4gICkgKyAxIHwgMDtcbiAgcmV0dXJuIGsyO1xufVxuXG5mdW5jdGlvbiBkb3VibGVXaXRoTGVmdENoaWxkKGszKSB7XG4gIHZhciBrM2wgPSBrMy5sO1xuICB2YXIgdiA9IHJvdGF0ZVdpdGhSaWdodENoaWxkKGszbCk7XG4gIGszLmwgPSB2O1xuICByZXR1cm4gcm90YXRlV2l0aExlZnRDaGlsZChrMyk7XG59XG5cbmZ1bmN0aW9uIGRvdWJsZVdpdGhSaWdodENoaWxkKGsyKSB7XG4gIHZhciBrMnIgPSBrMi5yO1xuICB2YXIgdiA9IHJvdGF0ZVdpdGhMZWZ0Q2hpbGQoazJyKTtcbiAgazIuciA9IHY7XG4gIHJldHVybiByb3RhdGVXaXRoUmlnaHRDaGlsZChrMik7XG59XG5cbmZ1bmN0aW9uIGhlaWdodFVwZGF0ZU11dGF0ZSh0KSB7XG4gIHZhciBuID0gdC5sO1xuICB2YXIgaGx0ID0gbiAhPT0gdW5kZWZpbmVkID8gbi5oIDogMDtcbiAgdmFyIG4kMSA9IHQucjtcbiAgdmFyIGhydCA9IG4kMSAhPT0gdW5kZWZpbmVkID8gbiQxLmggOiAwO1xuICB0LmggPSAoXG4gICAgaGx0ID4gaHJ0ID8gaGx0IDogaHJ0XG4gICkgKyAxIHwgMDtcbiAgcmV0dXJuIHQ7XG59XG5cbmZ1bmN0aW9uIGJhbE11dGF0ZShudCkge1xuICB2YXIgbCA9IG50Lmw7XG4gIHZhciByID0gbnQucjtcbiAgdmFyIGhsID0gbCAhPT0gdW5kZWZpbmVkID8gbC5oIDogMDtcbiAgdmFyIGhyID0gciAhPT0gdW5kZWZpbmVkID8gci5oIDogMDtcbiAgaWYgKGhsID4gKDIgKyBociB8IDApKSB7XG4gICAgdmFyIGxsID0gbC5sO1xuICAgIHZhciBsciA9IGwucjtcbiAgICBpZiAoaGVpZ2h0R2UobGwsIGxyKSkge1xuICAgICAgcmV0dXJuIGhlaWdodFVwZGF0ZU11dGF0ZShyb3RhdGVXaXRoTGVmdENoaWxkKG50KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBoZWlnaHRVcGRhdGVNdXRhdGUoZG91YmxlV2l0aExlZnRDaGlsZChudCkpO1xuICAgIH1cbiAgfVxuICBpZiAoaHIgPiAoMiArIGhsIHwgMCkpIHtcbiAgICB2YXIgcmwgPSByLmw7XG4gICAgdmFyIHJyID0gci5yO1xuICAgIGlmIChoZWlnaHRHZShyciwgcmwpKSB7XG4gICAgICByZXR1cm4gaGVpZ2h0VXBkYXRlTXV0YXRlKHJvdGF0ZVdpdGhSaWdodENoaWxkKG50KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBoZWlnaHRVcGRhdGVNdXRhdGUoZG91YmxlV2l0aFJpZ2h0Q2hpbGQobnQpKTtcbiAgICB9XG4gIH1cbiAgbnQuaCA9IChcbiAgICBobCA+IGhyID8gaGwgOiBoclxuICApICsgMSB8IDA7XG4gIHJldHVybiBudDtcbn1cblxuZnVuY3Rpb24gYWRkTXV0YXRlKGNtcCwgdCwgeCkge1xuICBpZiAodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHNpbmdsZXRvbih4KTtcbiAgfVxuICB2YXIgayA9IHQudjtcbiAgdmFyIGMgPSBjbXAoeCwgayk7XG4gIGlmIChjID09PSAwKSB7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgdmFyIGwgPSB0Lmw7XG4gIHZhciByID0gdC5yO1xuICBpZiAoYyA8IDApIHtcbiAgICB2YXIgbGwgPSBhZGRNdXRhdGUoY21wLCBsLCB4KTtcbiAgICB0LmwgPSBsbDtcbiAgfSBlbHNlIHtcbiAgICB0LnIgPSBhZGRNdXRhdGUoY21wLCByLCB4KTtcbiAgfVxuICByZXR1cm4gYmFsTXV0YXRlKHQpO1xufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXkoeHMsIGNtcCkge1xuICB2YXIgbGVuID0geHMubGVuZ3RoO1xuICBpZiAobGVuID09PSAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgbmV4dCA9IEJlbHRfU29ydEFycmF5LnN0cmljdGx5U29ydGVkTGVuZ3RoVSh4cywgKGZ1bmN0aW9uICh4LCB5KSB7XG4gICAgICAgICAgcmV0dXJuIGNtcCh4LCB5KSA8IDA7XG4gICAgICAgIH0pKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKG5leHQgPj0gMCkge1xuICAgIHJlc3VsdCA9IGZyb21Tb3J0ZWRBcnJheUF1eCh4cywgMCwgbmV4dCk7XG4gIH0gZWxzZSB7XG4gICAgbmV4dCA9IC1uZXh0IHwgMDtcbiAgICByZXN1bHQgPSBmcm9tU29ydGVkQXJyYXlSZXZBdXgoeHMsIG5leHQgLSAxIHwgMCwgbmV4dCk7XG4gIH1cbiAgZm9yKHZhciBpID0gbmV4dDsgaSA8IGxlbjsgKytpKXtcbiAgICByZXN1bHQgPSBhZGRNdXRhdGUoY21wLCByZXN1bHQsIHhzW2ldKTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiByZW1vdmVNaW5BdXhXaXRoUm9vdE11dGF0ZShudCwgbikge1xuICB2YXIgbG4gPSBuLmw7XG4gIHZhciBybiA9IG4ucjtcbiAgaWYgKGxuICE9PSB1bmRlZmluZWQpIHtcbiAgICBuLmwgPSByZW1vdmVNaW5BdXhXaXRoUm9vdE11dGF0ZShudCwgbG4pO1xuICAgIHJldHVybiBiYWxNdXRhdGUobik7XG4gIH0gZWxzZSB7XG4gICAgbnQudiA9IG4udjtcbiAgICByZXR1cm4gcm47XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgY29weSAsXG4gIGNyZWF0ZSAsXG4gIGJhbCAsXG4gIHNpbmdsZXRvbiAsXG4gIG1pbmltdW0gLFxuICBtaW5VbmRlZmluZWQgLFxuICBtYXhpbXVtICxcbiAgbWF4VW5kZWZpbmVkICxcbiAgcmVtb3ZlTWluQXV4V2l0aFJlZiAsXG4gIGlzRW1wdHkgLFxuICBzdGFja0FsbExlZnQgLFxuICBmb3JFYWNoVSAsXG4gIGZvckVhY2ggLFxuICByZWR1Y2VVICxcbiAgcmVkdWNlICxcbiAgZXZlcnlVICxcbiAgZXZlcnkgLFxuICBzb21lVSAsXG4gIHNvbWUgLFxuICBqb2luU2hhcmVkICxcbiAgY29uY2F0U2hhcmVkICxcbiAga2VlcFNoYXJlZFUgLFxuICBrZWVwU2hhcmVkICxcbiAga2VlcENvcHlVICxcbiAga2VlcENvcHkgLFxuICBwYXJ0aXRpb25TaGFyZWRVICxcbiAgcGFydGl0aW9uU2hhcmVkICxcbiAgcGFydGl0aW9uQ29weVUgLFxuICBwYXJ0aXRpb25Db3B5ICxcbiAgbGVuZ3RoTm9kZSAsXG4gIHNpemUgLFxuICB0b0xpc3QgLFxuICBjaGVja0ludmFyaWFudEludGVybmFsICxcbiAgZmlsbEFycmF5ICxcbiAgdG9BcnJheSAsXG4gIGZyb21Tb3J0ZWRBcnJheUF1eCAsXG4gIGZyb21Tb3J0ZWRBcnJheVJldkF1eCAsXG4gIGZyb21Tb3J0ZWRBcnJheVVuc2FmZSAsXG4gIGhhcyAsXG4gIGNtcCAsXG4gIGVxICxcbiAgc3Vic2V0ICxcbiAgZ2V0ICxcbiAgZ2V0VW5kZWZpbmVkICxcbiAgZ2V0RXhuICxcbiAgZnJvbUFycmF5ICxcbiAgYWRkTXV0YXRlICxcbiAgYmFsTXV0YXRlICxcbiAgcmVtb3ZlTWluQXV4V2l0aFJvb3RNdXRhdGUgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQmVsdF9Tb3J0QXJyYXlJbnQgZnJvbSBcIi4vYmVsdF9Tb3J0QXJyYXlJbnQuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfaW50ZXJuYWxBVkxzZXQgZnJvbSBcIi4vYmVsdF9pbnRlcm5hbEFWTHNldC5qc1wiO1xuXG5mdW5jdGlvbiBoYXMoX3QsIHgpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB0ID0gX3Q7XG4gICAgaWYgKHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgdiA9IHQudjtcbiAgICBpZiAoeCA9PT0gdikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF90ID0geCA8IHYgPyB0LmwgOiB0LnI7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb21wYXJlQXV4KF9lMSwgX2UyKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgZTIgPSBfZTI7XG4gICAgdmFyIGUxID0gX2UxO1xuICAgIGlmICghZTEpIHtcbiAgICAgIHJldHVybiAwO1xuICAgIH1cbiAgICBpZiAoIWUyKSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9XG4gICAgdmFyIGgyID0gZTIuaGQ7XG4gICAgdmFyIGgxID0gZTEuaGQ7XG4gICAgdmFyIGsxID0gaDEudjtcbiAgICB2YXIgazIgPSBoMi52O1xuICAgIGlmIChrMSAhPT0gazIpIHtcbiAgICAgIGlmIChrMSA8IGsyKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAxO1xuICAgICAgfVxuICAgIH1cbiAgICBfZTIgPSBCZWx0X2ludGVybmFsQVZMc2V0LnN0YWNrQWxsTGVmdChoMi5yLCBlMi50bCk7XG4gICAgX2UxID0gQmVsdF9pbnRlcm5hbEFWTHNldC5zdGFja0FsbExlZnQoaDEuciwgZTEudGwpO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY21wKHMxLCBzMikge1xuICB2YXIgbGVuMSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuc2l6ZShzMSk7XG4gIHZhciBsZW4yID0gQmVsdF9pbnRlcm5hbEFWTHNldC5zaXplKHMyKTtcbiAgaWYgKGxlbjEgPT09IGxlbjIpIHtcbiAgICByZXR1cm4gY29tcGFyZUF1eChCZWx0X2ludGVybmFsQVZMc2V0LnN0YWNrQWxsTGVmdChzMSwgLyogW10gKi8wKSwgQmVsdF9pbnRlcm5hbEFWTHNldC5zdGFja0FsbExlZnQoczIsIC8qIFtdICovMCkpO1xuICB9IGVsc2UgaWYgKGxlbjEgPCBsZW4yKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVxKHMxLCBzMikge1xuICByZXR1cm4gY21wKHMxLCBzMikgPT09IDA7XG59XG5cbmZ1bmN0aW9uIHN1YnNldChfczEsIF9zMikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHMyID0gX3MyO1xuICAgIHZhciBzMSA9IF9zMTtcbiAgICBpZiAoczEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChzMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciB2MSA9IHMxLnY7XG4gICAgdmFyIGwxID0gczEubDtcbiAgICB2YXIgcjEgPSBzMS5yO1xuICAgIHZhciB2MiA9IHMyLnY7XG4gICAgdmFyIGwyID0gczIubDtcbiAgICB2YXIgcjIgPSBzMi5yO1xuICAgIGlmICh2MSA9PT0gdjIpIHtcbiAgICAgIGlmICghc3Vic2V0KGwxLCBsMikpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgX3MyID0gcjI7XG4gICAgICBfczEgPSByMTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgaWYgKHYxIDwgdjIpIHtcbiAgICAgIGlmICghc3Vic2V0KEJlbHRfaW50ZXJuYWxBVkxzZXQuY3JlYXRlKGwxLCB2MSwgdW5kZWZpbmVkKSwgbDIpKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIF9zMSA9IHIxO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBpZiAoIXN1YnNldChCZWx0X2ludGVybmFsQVZMc2V0LmNyZWF0ZSh1bmRlZmluZWQsIHYxLCByMSksIHIyKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfczEgPSBsMTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldChfbiwgeCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIG4gPSBfbjtcbiAgICBpZiAobiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgdiA9IG4udjtcbiAgICBpZiAoeCA9PT0gdikge1xuICAgICAgcmV0dXJuIHY7XG4gICAgfVxuICAgIF9uID0geCA8IHYgPyBuLmwgOiBuLnI7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRVbmRlZmluZWQoX24sIHgpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBuID0gX247XG4gICAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIHYgPSBuLnY7XG4gICAgaWYgKHggPT09IHYpIHtcbiAgICAgIHJldHVybiB2O1xuICAgIH1cbiAgICBfbiA9IHggPCB2ID8gbi5sIDogbi5yO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RXhuKF9uLCB4KSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbiA9IF9uO1xuICAgIGlmIChuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB2ID0gbi52O1xuICAgICAgaWYgKHggPT09IHYpIHtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgICB9XG4gICAgICBfbiA9IHggPCB2ID8gbi5sIDogbi5yO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICB0aHJvdyB7XG4gICAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBhZGRNdXRhdGUodCwgeCkge1xuICBpZiAodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIEJlbHRfaW50ZXJuYWxBVkxzZXQuc2luZ2xldG9uKHgpO1xuICB9XG4gIHZhciBrID0gdC52O1xuICBpZiAoeCA9PT0gaykge1xuICAgIHJldHVybiB0O1xuICB9XG4gIHZhciBsID0gdC5sO1xuICB2YXIgciA9IHQucjtcbiAgaWYgKHggPCBrKSB7XG4gICAgdC5sID0gYWRkTXV0YXRlKGwsIHgpO1xuICB9IGVsc2Uge1xuICAgIHQuciA9IGFkZE11dGF0ZShyLCB4KTtcbiAgfVxuICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5iYWxNdXRhdGUodCk7XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheSh4cykge1xuICB2YXIgbGVuID0geHMubGVuZ3RoO1xuICBpZiAobGVuID09PSAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgbmV4dCA9IEJlbHRfU29ydEFycmF5SW50LnN0cmljdGx5U29ydGVkTGVuZ3RoKHhzKTtcbiAgdmFyIHJlc3VsdDtcbiAgaWYgKG5leHQgPj0gMCkge1xuICAgIHJlc3VsdCA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuZnJvbVNvcnRlZEFycmF5QXV4KHhzLCAwLCBuZXh0KTtcbiAgfSBlbHNlIHtcbiAgICBuZXh0ID0gLW5leHQgfCAwO1xuICAgIHJlc3VsdCA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuZnJvbVNvcnRlZEFycmF5UmV2QXV4KHhzLCBuZXh0IC0gMSB8IDAsIG5leHQpO1xuICB9XG4gIGZvcih2YXIgaSA9IG5leHQ7IGkgPCBsZW47ICsraSl7XG4gICAgcmVzdWx0ID0gYWRkTXV0YXRlKHJlc3VsdCwgeHNbaV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbnZhciBTO1xuXG52YXIgTjtcblxudmFyIEE7XG5cbmV4cG9ydCB7XG4gIFMgLFxuICBOICxcbiAgQSAsXG4gIGhhcyAsXG4gIGNvbXBhcmVBdXggLFxuICBjbXAgLFxuICBlcSAsXG4gIHN1YnNldCAsXG4gIGdldCAsXG4gIGdldFVuZGVmaW5lZCAsXG4gIGdldEV4biAsXG4gIGFkZE11dGF0ZSAsXG4gIGZyb21BcnJheSAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbmZ1bmN0aW9uIGNhbWxfaW50X2NvbXBhcmUoeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYm9vbF9jb21wYXJlKHgsIHkpIHtcbiAgaWYgKHgpIHtcbiAgICBpZiAoeSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfSBlbHNlIGlmICh5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZmxvYXRfY29tcGFyZSh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoeCA+IHkgfHwgeCA9PT0geCkge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKHkgPT09IHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9zdHJpbmdfY29tcGFyZShzMSwgczIpIHtcbiAgaWYgKHMxID09PSBzMikge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKHMxIDwgczIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9ib29sX21pbih4LCB5KSB7XG4gIGlmICh4KSB7XG4gICAgcmV0dXJuIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9pbnRfbWluKHgsIHkpIHtcbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9mbG9hdF9taW4oeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX3N0cmluZ19taW4oeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2ludDMyX21pbih4LCB5KSB7XG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYm9vbF9tYXgoeCwgeSkge1xuICBpZiAoeCkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfaW50X21heCh4LCB5KSB7XG4gIGlmICh4ID4geSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZmxvYXRfbWF4KHgsIHkpIHtcbiAgaWYgKHggPiB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9zdHJpbmdfbWF4KHgsIHkpIHtcbiAgaWYgKHggPiB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9pbnQzMl9tYXgoeCwgeSkge1xuICBpZiAoeCA+IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpNjRfZXEoeCwgeSkge1xuICBpZiAoeFsxXSA9PT0geVsxXSkge1xuICAgIHJldHVybiB4WzBdID09PSB5WzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpNjRfZ2UocGFyYW0sIHBhcmFtJDEpIHtcbiAgdmFyIG90aGVyX2hpID0gcGFyYW0kMVswXTtcbiAgdmFyIGhpID0gcGFyYW1bMF07XG4gIGlmIChoaSA+IG90aGVyX2hpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoaGkgPCBvdGhlcl9oaSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFyYW1bMV0gPj0gcGFyYW0kMVsxXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpNjRfbmVxKHgsIHkpIHtcbiAgcmV0dXJuICFpNjRfZXEoeCwgeSk7XG59XG5cbmZ1bmN0aW9uIGk2NF9sdCh4LCB5KSB7XG4gIHJldHVybiAhaTY0X2dlKHgsIHkpO1xufVxuXG5mdW5jdGlvbiBpNjRfZ3QoeCwgeSkge1xuICBpZiAoeFswXSA+IHlbMF0pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmICh4WzBdIDwgeVswXSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geFsxXSA+IHlbMV07XG4gIH1cbn1cblxuZnVuY3Rpb24gaTY0X2xlKHgsIHkpIHtcbiAgcmV0dXJuICFpNjRfZ3QoeCwgeSk7XG59XG5cbmZ1bmN0aW9uIGk2NF9taW4oeCwgeSkge1xuICBpZiAoaTY0X2dlKHgsIHkpKSB7XG4gICAgcmV0dXJuIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbn1cblxuZnVuY3Rpb24gaTY0X21heCh4LCB5KSB7XG4gIGlmIChpNjRfZ3QoeCwgeSkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBjYW1sX2ludF9jb21wYXJlICxcbiAgY2FtbF9ib29sX2NvbXBhcmUgLFxuICBjYW1sX2Zsb2F0X2NvbXBhcmUgLFxuICBjYW1sX3N0cmluZ19jb21wYXJlICxcbiAgY2FtbF9ib29sX21pbiAsXG4gIGNhbWxfaW50X21pbiAsXG4gIGNhbWxfZmxvYXRfbWluICxcbiAgY2FtbF9zdHJpbmdfbWluICxcbiAgY2FtbF9pbnQzMl9taW4gLFxuICBjYW1sX2Jvb2xfbWF4ICxcbiAgY2FtbF9pbnRfbWF4ICxcbiAgY2FtbF9mbG9hdF9tYXggLFxuICBjYW1sX3N0cmluZ19tYXggLFxuICBjYW1sX2ludDMyX21heCAsXG4gIGk2NF9lcSAsXG4gIGk2NF9uZXEgLFxuICBpNjRfbHQgLFxuICBpNjRfZ3QgLFxuICBpNjRfbGUgLFxuICBpNjRfZ2UgLFxuICBpNjRfbWluICxcbiAgaTY0X21heCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbmZ1bmN0aW9uIHN1Yih4LCBvZmZzZXQsIGxlbikge1xuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGxlbik7XG4gIHZhciBqID0gMDtcbiAgdmFyIGkgPSBvZmZzZXQ7XG4gIHdoaWxlKGogPCBsZW4pIHtcbiAgICByZXN1bHRbal0gPSB4W2ldO1xuICAgIGogPSBqICsgMSB8IDA7XG4gICAgaSA9IGkgKyAxIHwgMDtcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbGVuKF9hY2MsIF9sKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbCA9IF9sO1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICghbCkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgX2wgPSBsLnRsO1xuICAgIF9hY2MgPSBsLmhkLmxlbmd0aCArIGFjYyB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWxsKGFyciwgX2ksIF9sKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbCA9IF9sO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgeCA9IGwuaGQ7XG4gICAgdmFyIGwkMSA9IHgubGVuZ3RoO1xuICAgIHZhciBrID0gaTtcbiAgICB2YXIgaiA9IDA7XG4gICAgd2hpbGUoaiA8IGwkMSkge1xuICAgICAgYXJyW2tdID0geFtqXTtcbiAgICAgIGsgPSBrICsgMSB8IDA7XG4gICAgICBqID0gaiArIDEgfCAwO1xuICAgIH07XG4gICAgX2wgPSBsLnRsO1xuICAgIF9pID0gaztcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbmNhdChsKSB7XG4gIHZhciB2ID0gbGVuKDAsIGwpO1xuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KHYpO1xuICBmaWxsKHJlc3VsdCwgMCwgbCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNldCh4cywgaW5kZXgsIG5ld3ZhbCkge1xuICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHhzLmxlbmd0aCkge1xuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IFwiSW52YWxpZF9hcmd1bWVudFwiLFxuICAgICAgICAgIF8xOiBcImluZGV4IG91dCBvZiBib3VuZHNcIixcbiAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgfTtcbiAgfVxuICB4c1tpbmRleF0gPSBuZXd2YWw7XG4gIFxufVxuXG5mdW5jdGlvbiBnZXQoeHMsIGluZGV4KSB7XG4gIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0geHMubGVuZ3RoKSB7XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJJbnZhbGlkX2FyZ3VtZW50XCIsXG4gICAgICAgICAgXzE6IFwiaW5kZXggb3V0IG9mIGJvdW5kc1wiLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIHJldHVybiB4c1tpbmRleF07XG59XG5cbmZ1bmN0aW9uIG1ha2UobGVuLCBpbml0KSB7XG4gIHZhciBiID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgYltpXSA9IGluaXQ7XG4gIH1cbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIG1ha2VfZmxvYXQobGVuKSB7XG4gIHZhciBiID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgYltpXSA9IDA7XG4gIH1cbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIGJsaXQoYTEsIGkxLCBhMiwgaTIsIGxlbikge1xuICBpZiAoaTIgPD0gaTEpIHtcbiAgICBmb3IodmFyIGogPSAwOyBqIDwgbGVuOyArK2ope1xuICAgICAgYTJbaiArIGkyIHwgMF0gPSBhMVtqICsgaTEgfCAwXTtcbiAgICB9XG4gICAgcmV0dXJuIDtcbiAgfVxuICBmb3IodmFyIGokMSA9IGxlbiAtIDEgfCAwOyBqJDEgPj0gMDsgLS1qJDEpe1xuICAgIGEyW2okMSArIGkyIHwgMF0gPSBhMVtqJDEgKyBpMSB8IDBdO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBkdXAocHJpbSkge1xuICByZXR1cm4gcHJpbS5zbGljZSgwKTtcbn1cblxuZXhwb3J0IHtcbiAgZHVwICxcbiAgc3ViICxcbiAgY29uY2F0ICxcbiAgbWFrZSAsXG4gIG1ha2VfZmxvYXQgLFxuICBibGl0ICxcbiAgZ2V0ICxcbiAgc2V0ICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cblxudmFyIGlkID0ge1xuICBjb250ZW50czogMFxufTtcblxuZnVuY3Rpb24gY3JlYXRlKHN0cikge1xuICBpZC5jb250ZW50cyA9IGlkLmNvbnRlbnRzICsgMSB8IDA7XG4gIHJldHVybiBzdHIgKyAoXCIvXCIgKyBpZC5jb250ZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNhbWxfaXNfZXh0ZW5zaW9uKGUpIHtcbiAgaWYgKGUgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHlwZW9mIGUuUkVfRVhOX0lEID09PSBcInN0cmluZ1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZXhuX3Nsb3RfbmFtZSh4KSB7XG4gIHJldHVybiB4LlJFX0VYTl9JRDtcbn1cblxuZXhwb3J0IHtcbiAgaWQgLFxuICBjcmVhdGUgLFxuICBjYW1sX2lzX2V4dGVuc2lvbiAsXG4gIGNhbWxfZXhuX3Nsb3RfbmFtZSAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDYW1sX29wdGlvbiBmcm9tIFwiLi9jYW1sX29wdGlvbi5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfZXhjZXB0aW9ucy5qc1wiO1xuXG52YXIgJCRFcnJvciA9IC8qIEBfX1BVUkVfXyAqL0NhbWxfZXhjZXB0aW9ucy5jcmVhdGUoXCJDYW1sX2pzX2V4Y2VwdGlvbnMuRXJyb3JcIik7XG5cbmZ1bmN0aW9uIGludGVybmFsVG9PQ2FtbEV4Y2VwdGlvbihlKSB7XG4gIGlmIChDYW1sX2V4Y2VwdGlvbnMuY2FtbF9pc19leHRlbnNpb24oZSkpIHtcbiAgICByZXR1cm4gZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgUkVfRVhOX0lEOiAkJEVycm9yLFxuICAgICAgICAgICAgXzE6IGVcbiAgICAgICAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYXNfanNfZXhuKGV4bikge1xuICBpZiAoZXhuLlJFX0VYTl9JRCA9PT0gJCRFcnJvcikge1xuICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKGV4bi5fMSk7XG4gIH1cbiAgXG59XG5cbmV4cG9ydCB7XG4gICQkRXJyb3IgLFxuICBpbnRlcm5hbFRvT0NhbWxFeGNlcHRpb24gLFxuICBjYW1sX2FzX2pzX2V4biAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDYW1sIGZyb20gXCIuL2NhbWwuanNcIjtcblxudmFyIGZvcl9pbiA9IChmdW5jdGlvbihvLGZvbyl7XG4gICAgICAgIGZvciAodmFyIHggaW4gbykgeyBmb28oeCkgfX0pO1xuXG52YXIgY2FtbF9vYmpfZHVwID0gKGZ1bmN0aW9uKHgpe1xuICBpZihBcnJheS5pc0FycmF5KHgpKXtcbiAgICB2YXIgbGVuID0geC5sZW5ndGggIFxuICAgIHZhciB2ID0gbmV3IEFycmF5KGxlbilcbiAgICBmb3IodmFyIGkgPSAwIDsgaSA8IGxlbiA7ICsraSl7XG4gICAgICB2W2ldID0geFtpXVxuICAgIH1cbiAgICBpZih4LlRBRyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIHYuVEFHID0geC5UQUcgLy8gVE9ETyB0aGlzIGNhbiBiZSByZW1vdmVkIGV2ZW50dWFsbHlcbiAgICB9ICBcbiAgICByZXR1cm4gdiBcbiAgfSBcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30seCkgICAgXG59KTtcblxudmFyIHVwZGF0ZV9kdW1teSA9IChmdW5jdGlvbih4LHkpe1xuICB2YXIgayAgXG4gIGlmKEFycmF5LmlzQXJyYXkoeSkpe1xuICAgIGZvcihrID0gMDsgayA8IHkubGVuZ3RoIDsgKytrKXtcbiAgICAgIHhba10gPSB5W2tdXG4gICAgfVxuICAgIGlmKHkuVEFHICE9PSB1bmRlZmluZWQpe1xuICAgICAgeC5UQUcgPSB5LlRBR1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBrIGluIHkpe1xuICAgICAgeFtrXSA9IHlba11cbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjYW1sX2NvbXBhcmUoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHZhciBhX3R5cGUgPSB0eXBlb2YgYTtcbiAgdmFyIGJfdHlwZSA9IHR5cGVvZiBiO1xuICBzd2l0Y2ggKGFfdHlwZSkge1xuICAgIGNhc2UgXCJib29sZWFuXCIgOlxuICAgICAgICBpZiAoYl90eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgIHJldHVybiBDYW1sLmNhbWxfYm9vbF9jb21wYXJlKGEsIGIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJmdW5jdGlvblwiIDpcbiAgICAgICAgaWYgKGJfdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIFJFX0VYTl9JRDogXCJJbnZhbGlkX2FyZ3VtZW50XCIsXG4gICAgICAgICAgICAgICAgXzE6IFwiY29tcGFyZTogZnVuY3Rpb25hbCB2YWx1ZVwiLFxuICAgICAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJudW1iZXJcIiA6XG4gICAgICAgIGlmIChiX3R5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICByZXR1cm4gQ2FtbC5jYW1sX2ludF9jb21wYXJlKGEsIGIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdHJpbmdcIiA6XG4gICAgICAgIGlmIChiX3R5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gQ2FtbC5jYW1sX3N0cmluZ19jb21wYXJlKGEsIGIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgY2FzZSBcInVuZGVmaW5lZFwiIDpcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIGRlZmF1bHQ6XG4gICAgICBcbiAgfVxuICBzd2l0Y2ggKGJfdHlwZSkge1xuICAgIGNhc2UgXCJzdHJpbmdcIiA6XG4gICAgICAgIHJldHVybiAtMTtcbiAgICBjYXNlIFwidW5kZWZpbmVkXCIgOlxuICAgICAgICByZXR1cm4gMTtcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKGFfdHlwZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBpZiAoYl90eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAoYV90eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBpZiAoYl90eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKGFfdHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBpZiAoYiA9PT0gbnVsbCB8fCBiLkJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYl90eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGlmIChhID09PSBudWxsIHx8IGEuQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChhID09PSBudWxsKSB7XG4gICAgICAgIGlmIChiLkJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYiA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoYS5CU19QUklWQVRFX05FU1RFRF9TT01FX05PTkUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGEuQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGIuQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gYXV4X29ial9jb21wYXJlKGEsIGIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIHRhZ19hID0gYS5UQUcgfCAwO1xuICAgICAgdmFyIHRhZ19iID0gYi5UQUcgfCAwO1xuICAgICAgaWYgKHRhZ19hID09PSAyNDgpIHtcbiAgICAgICAgcmV0dXJuIENhbWwuY2FtbF9pbnRfY29tcGFyZShhWzFdLCBiWzFdKTtcbiAgICAgIH1cbiAgICAgIGlmICh0YWdfYSA9PT0gMjUxKSB7XG4gICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgUkVfRVhOX0lEOiBcIkludmFsaWRfYXJndW1lbnRcIixcbiAgICAgICAgICAgICAgXzE6IFwiZXF1YWw6IGFic3RyYWN0IHZhbHVlXCIsXG4gICAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0YWdfYSAhPT0gdGFnX2IpIHtcbiAgICAgICAgaWYgKHRhZ19hIDwgdGFnX2IpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBsZW5fYSA9IGEubGVuZ3RoIHwgMDtcbiAgICAgIHZhciBsZW5fYiA9IGIubGVuZ3RoIHwgMDtcbiAgICAgIGlmIChsZW5fYSA9PT0gbGVuX2IpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgICB2YXIgX2kgPSAwO1xuICAgICAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBpID0gX2k7XG4gICAgICAgICAgICBpZiAoaSA9PT0gbGVuX2EpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzID0gY2FtbF9jb21wYXJlKGFbaV0sIGJbaV0pO1xuICAgICAgICAgICAgaWYgKHJlcyAhPT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2kgPSBpICsgMSB8IDA7XG4gICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmICgoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICAgICAgcmV0dXJuIChhIC0gYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGF1eF9vYmpfY29tcGFyZShhLCBiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsZW5fYSA8IGxlbl9iKSB7XG4gICAgICAgIHZhciBfaSQxID0gMDtcbiAgICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICAgIHZhciBpJDEgPSBfaSQxO1xuICAgICAgICAgIGlmIChpJDEgPT09IGxlbl9hKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciByZXMkMSA9IGNhbWxfY29tcGFyZShhW2kkMV0sIGJbaSQxXSk7XG4gICAgICAgICAgaWYgKHJlcyQxICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzJDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIF9pJDEgPSBpJDEgKyAxIHwgMDtcbiAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX2kkMiA9IDA7XG4gICAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgICB2YXIgaSQyID0gX2kkMjtcbiAgICAgICAgICBpZiAoaSQyID09PSBsZW5fYikge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciByZXMkMiA9IGNhbWxfY29tcGFyZShhW2kkMl0sIGJbaSQyXSk7XG4gICAgICAgICAgaWYgKHJlcyQyICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzJDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIF9pJDIgPSBpJDIgKyAxIHwgMDtcbiAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIH07XG4gICAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXV4X29ial9jb21wYXJlKGEsIGIpIHtcbiAgdmFyIG1pbl9rZXlfbGhzID0ge1xuICAgIGNvbnRlbnRzOiB1bmRlZmluZWRcbiAgfTtcbiAgdmFyIG1pbl9rZXlfcmhzID0ge1xuICAgIGNvbnRlbnRzOiB1bmRlZmluZWRcbiAgfTtcbiAgdmFyIGRvX2tleSA9IGZ1bmN0aW9uIChwYXJhbSwga2V5KSB7XG4gICAgdmFyIG1pbl9rZXkgPSBwYXJhbVsyXTtcbiAgICB2YXIgYiA9IHBhcmFtWzFdO1xuICAgIGlmICghKCFiLmhhc093blByb3BlcnR5KGtleSkgfHwgY2FtbF9jb21wYXJlKHBhcmFtWzBdW2tleV0sIGJba2V5XSkgPiAwKSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIG1rID0gbWluX2tleS5jb250ZW50cztcbiAgICBpZiAobWsgIT09IHVuZGVmaW5lZCAmJiBrZXkgPj0gbWspIHtcbiAgICAgIHJldHVybiA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbl9rZXkuY29udGVudHMgPSBrZXk7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgfTtcbiAgdmFyIHBhcnRpYWxfYXJnID0gW1xuICAgIGEsXG4gICAgYixcbiAgICBtaW5fa2V5X3Joc1xuICBdO1xuICB2YXIgZG9fa2V5X2EgPSBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICByZXR1cm4gZG9fa2V5KHBhcnRpYWxfYXJnLCBwYXJhbSk7XG4gIH07XG4gIHZhciBwYXJ0aWFsX2FyZyQxID0gW1xuICAgIGIsXG4gICAgYSxcbiAgICBtaW5fa2V5X2xoc1xuICBdO1xuICB2YXIgZG9fa2V5X2IgPSBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICByZXR1cm4gZG9fa2V5KHBhcnRpYWxfYXJnJDEsIHBhcmFtKTtcbiAgfTtcbiAgZm9yX2luKGEsIGRvX2tleV9hKTtcbiAgZm9yX2luKGIsIGRvX2tleV9iKTtcbiAgdmFyIG1hdGNoID0gbWluX2tleV9saHMuY29udGVudHM7XG4gIHZhciBtYXRjaCQxID0gbWluX2tleV9yaHMuY29udGVudHM7XG4gIGlmIChtYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKG1hdGNoJDEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIENhbWwuY2FtbF9zdHJpbmdfY29tcGFyZShtYXRjaCwgbWF0Y2gkMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobWF0Y2gkMSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9lcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGFfdHlwZSA9IHR5cGVvZiBhO1xuICBpZiAoYV90eXBlID09PSBcInN0cmluZ1wiIHx8IGFfdHlwZSA9PT0gXCJudW1iZXJcIiB8fCBhX3R5cGUgPT09IFwiYm9vbGVhblwiIHx8IGFfdHlwZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBhID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBiX3R5cGUgPSB0eXBlb2YgYjtcbiAgaWYgKGFfdHlwZSA9PT0gXCJmdW5jdGlvblwiIHx8IGJfdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJJbnZhbGlkX2FyZ3VtZW50XCIsXG4gICAgICAgICAgXzE6IFwiZXF1YWw6IGZ1bmN0aW9uYWwgdmFsdWVcIixcbiAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgfTtcbiAgfVxuICBpZiAoYl90eXBlID09PSBcIm51bWJlclwiIHx8IGJfdHlwZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBiID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0YWdfYSA9IGEuVEFHIHwgMDtcbiAgdmFyIHRhZ19iID0gYi5UQUcgfCAwO1xuICBpZiAodGFnX2EgPT09IDI0OCkge1xuICAgIHJldHVybiBhWzFdID09PSBiWzFdO1xuICB9XG4gIGlmICh0YWdfYSA9PT0gMjUxKSB7XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJJbnZhbGlkX2FyZ3VtZW50XCIsXG4gICAgICAgICAgXzE6IFwiZXF1YWw6IGFic3RyYWN0IHZhbHVlXCIsXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH1cbiAgaWYgKHRhZ19hICE9PSB0YWdfYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGVuX2EgPSBhLmxlbmd0aCB8IDA7XG4gIHZhciBsZW5fYiA9IGIubGVuZ3RoIHwgMDtcbiAgaWYgKGxlbl9hID09PSBsZW5fYikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICB2YXIgX2kgPSAwO1xuICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICB2YXIgaSA9IF9pO1xuICAgICAgICBpZiAoaSA9PT0gbGVuX2EpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNhbWxfZXF1YWwoYVtpXSwgYltpXSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgX2kgPSBpICsgMSB8IDA7XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICgoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICByZXR1cm4gIShhID4gYiB8fCBhIDwgYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIGNvbnRlbnRzOiB0cnVlXG4gICAgICB9O1xuICAgICAgdmFyIGRvX2tleV9hID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIWIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHJlc3VsdC5jb250ZW50cyA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9O1xuICAgICAgdmFyIGRvX2tleV9iID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIWEuaGFzT3duUHJvcGVydHkoa2V5KSB8fCAhY2FtbF9lcXVhbChiW2tleV0sIGFba2V5XSkpIHtcbiAgICAgICAgICByZXN1bHQuY29udGVudHMgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfTtcbiAgICAgIGZvcl9pbihhLCBkb19rZXlfYSk7XG4gICAgICBpZiAocmVzdWx0LmNvbnRlbnRzKSB7XG4gICAgICAgIGZvcl9pbihiLCBkb19rZXlfYik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0LmNvbnRlbnRzO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9lcXVhbF9udWxsKHgsIHkpIHtcbiAgaWYgKHkgIT09IG51bGwpIHtcbiAgICByZXR1cm4gY2FtbF9lcXVhbCh4LCB5KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCA9PT0geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2VxdWFsX3VuZGVmaW5lZCh4LCB5KSB7XG4gIGlmICh5ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gY2FtbF9lcXVhbCh4LCB5KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCA9PT0geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2VxdWFsX251bGxhYmxlKHgsIHkpIHtcbiAgaWYgKHkgPT0gbnVsbCkge1xuICAgIHJldHVybiB4ID09PSB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjYW1sX2VxdWFsKHgsIHkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfbm90ZXF1YWwoYSwgYikge1xuICByZXR1cm4gIWNhbWxfZXF1YWwoYSwgYik7XG59XG5cbmZ1bmN0aW9uIGNhbWxfZ3JlYXRlcmVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGNhbWxfY29tcGFyZShhLCBiKSA+PSAwO1xufVxuXG5mdW5jdGlvbiBjYW1sX2dyZWF0ZXJ0aGFuKGEsIGIpIHtcbiAgcmV0dXJuIGNhbWxfY29tcGFyZShhLCBiKSA+IDA7XG59XG5cbmZ1bmN0aW9uIGNhbWxfbGVzc2VxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGNhbWxfY29tcGFyZShhLCBiKSA8PSAwO1xufVxuXG5mdW5jdGlvbiBjYW1sX2xlc3N0aGFuKGEsIGIpIHtcbiAgcmV0dXJuIGNhbWxfY29tcGFyZShhLCBiKSA8IDA7XG59XG5cbmZ1bmN0aW9uIGNhbWxfbWluKHgsIHkpIHtcbiAgaWYgKGNhbWxfY29tcGFyZSh4LCB5KSA8PSAwKSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9tYXgoeCwgeSkge1xuICBpZiAoY2FtbF9jb21wYXJlKHgsIHkpID49IDApIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBjYW1sX29ial9kdXAgLFxuICB1cGRhdGVfZHVtbXkgLFxuICBjYW1sX2NvbXBhcmUgLFxuICBjYW1sX2VxdWFsICxcbiAgY2FtbF9lcXVhbF9udWxsICxcbiAgY2FtbF9lcXVhbF91bmRlZmluZWQgLFxuICBjYW1sX2VxdWFsX251bGxhYmxlICxcbiAgY2FtbF9ub3RlcXVhbCAsXG4gIGNhbWxfZ3JlYXRlcmVxdWFsICxcbiAgY2FtbF9ncmVhdGVydGhhbiAsXG4gIGNhbWxfbGVzc3RoYW4gLFxuICBjYW1sX2xlc3NlcXVhbCAsXG4gIGNhbWxfbWluICxcbiAgY2FtbF9tYXggLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG5mdW5jdGlvbiBpc05lc3RlZCh4KSB7XG4gIHJldHVybiB4LkJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBzb21lKHgpIHtcbiAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBCU19QUklWQVRFX05FU1RFRF9TT01FX05PTkU6IDBcbiAgICAgICAgICB9O1xuICB9IGVsc2UgaWYgKHggIT09IG51bGwgJiYgeC5CU19QUklWQVRFX05FU1RFRF9TT01FX05PTkUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBCU19QUklWQVRFX05FU1RFRF9TT01FX05PTkU6IHguQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FICsgMSB8IDBcbiAgICAgICAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4O1xuICB9XG59XG5cbmZ1bmN0aW9uIG51bGxhYmxlX3RvX29wdCh4KSB7XG4gIGlmICh4ID09IG51bGwpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzb21lKHgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuZGVmaW5lZF90b19vcHQoeCkge1xuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc29tZSh4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBudWxsX3RvX29wdCh4KSB7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc29tZSh4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxGcm9tT3B0aW9uKHgpIHtcbiAgaWYgKCEoeCAhPT0gbnVsbCAmJiB4LkJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJldHVybiB4O1xuICB9XG4gIHZhciBkZXB0aCA9IHguQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FO1xuICBpZiAoZGVwdGggPT09IDApIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBCU19QUklWQVRFX05FU1RFRF9TT01FX05PTkU6IGRlcHRoIC0gMSB8IDBcbiAgICAgICAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wdGlvbl9nZXQoeCkge1xuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsRnJvbU9wdGlvbih4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcHRpb25fdW53cmFwKHgpIHtcbiAgaWYgKHggIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB4LlZBTDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geDtcbiAgfVxufVxuXG5leHBvcnQge1xuICBudWxsYWJsZV90b19vcHQgLFxuICB1bmRlZmluZWRfdG9fb3B0ICxcbiAgbnVsbF90b19vcHQgLFxuICB2YWxGcm9tT3B0aW9uICxcbiAgc29tZSAsXG4gIGlzTmVzdGVkICxcbiAgb3B0aW9uX2dldCAsXG4gIG9wdGlvbl91bndyYXAgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQ2FtbF9hcnJheSBmcm9tIFwiLi9jYW1sX2FycmF5LmpzXCI7XG5cbmZ1bmN0aW9uIGFwcChfZiwgX2FyZ3MpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBhcmdzID0gX2FyZ3M7XG4gICAgdmFyIGYgPSBfZjtcbiAgICB2YXIgaW5pdF9hcml0eSA9IGYubGVuZ3RoO1xuICAgIHZhciBhcml0eSA9IGluaXRfYXJpdHkgPT09IDAgPyAxIDogaW5pdF9hcml0eTtcbiAgICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gICAgdmFyIGQgPSBhcml0eSAtIGxlbiB8IDA7XG4gICAgaWYgKGQgPT09IDApIHtcbiAgICAgIHJldHVybiBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgICBpZiAoZCA+PSAwKSB7XG4gICAgICByZXR1cm4gKGZ1bmN0aW9uKGYsYXJncyl7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIGFwcChmLCBhcmdzLmNvbmNhdChbeF0pKTtcbiAgICAgIH1cbiAgICAgIH0oZixhcmdzKSk7XG4gICAgfVxuICAgIF9hcmdzID0gQ2FtbF9hcnJheS5zdWIoYXJncywgYXJpdHksIC1kIHwgMCk7XG4gICAgX2YgPSBmLmFwcGx5KG51bGwsIENhbWxfYXJyYXkuc3ViKGFyZ3MsIDAsIGFyaXR5KSk7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBfMShvLCBhMCkge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAxKSB7XG4gICAgcmV0dXJuIG8oYTApO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIG8oYTApO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0pO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMikge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMsIHBhcmFtJDQpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCwgcGFyYW0kNSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0LCBwYXJhbSQ1KTtcbiAgICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbYTBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX18xKG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMSkge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYTApIHtcbiAgICAgIHJldHVybiBfMShvLCBhMCk7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfMihvLCBhMCwgYTEpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMikge1xuICAgIHJldHVybiBvKGEwLCBhMSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbYTFdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMikge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMik7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMykge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMyk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCk7XG4gICAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTFcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzIobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAyKSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEpIHtcbiAgICAgIHJldHVybiBfMihvLCBhMCwgYTEpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gXzMobywgYTAsIGExLCBhMikge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAzKSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMik7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTJcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbYTJdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMik7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIHBhcmFtKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMikge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKTtcbiAgICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgYTJcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzMobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAzKSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEsIGEyKSB7XG4gICAgICByZXR1cm4gXzMobywgYTAsIGExLCBhMik7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfNChvLCBhMCwgYTEsIGEyLCBhMykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA0KSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiksIFthM10pO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMyk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBwYXJhbSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpO1xuICAgICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgYTNcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzQobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA0KSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEsIGEyLCBhMykge1xuICAgICAgcmV0dXJuIF80KG8sIGEwLCBhMSwgYTIsIGEzKTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF81KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCkge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA1KSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0KTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTRcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMyksIFthNF0pO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQpO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIHBhcmFtKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICBhNFxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fNShvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDUpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCkge1xuICAgICAgcmV0dXJuIF81KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCk7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfNihvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDYpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1KTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTVcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMyksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCksIFthNV0pO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1KTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgcGFyYW0pO1xuICAgICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fNihvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDYpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgICAgIHJldHVybiBfNihvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1KTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF83KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDcpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNik7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgW2E2XSk7XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fNyhvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDcpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSB7XG4gICAgICByZXR1cm4gXzcobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gXzgobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDgpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0KSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSwgW2E3XSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX184KG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gOCkge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KSB7XG4gICAgICByZXR1cm4gXzgobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGFwcCAsXG4gIF8xICxcbiAgX18xICxcbiAgXzIgLFxuICBfXzIgLFxuICBfMyAsXG4gIF9fMyAsXG4gIF80ICxcbiAgX180ICxcbiAgXzUgLFxuICBfXzUgLFxuICBfNiAsXG4gIF9fNiAsXG4gIF83ICxcbiAgX183ICxcbiAgXzggLFxuICBfXzggLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQ2FtbF9vcHRpb24gZnJvbSBcIi4vY2FtbF9vcHRpb24uanNcIjtcblxuZnVuY3Rpb24gZ2V0KGRpY3QsIGspIHtcbiAgaWYgKChrIGluIGRpY3QpKSB7XG4gICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoZGljdFtrXSk7XG4gIH1cbiAgXG59XG5cbnZhciB1bnNhZmVEZWxldGVLZXkgPSAoZnVuY3Rpb24gKGRpY3Qsa2V5KXtcbiAgICAgIGRlbGV0ZSBkaWN0W2tleV07XG4gICAgIH0pO1xuXG5mdW5jdGlvbiBlbnRyaWVzKGRpY3QpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkaWN0KTtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIHZhbHVlcyA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFsdWVzW2ldID0gW1xuICAgICAga2V5LFxuICAgICAgZGljdFtrZXldXG4gICAgXTtcbiAgfVxuICByZXR1cm4gdmFsdWVzO1xufVxuXG5mdW5jdGlvbiB2YWx1ZXMoZGljdCkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRpY3QpO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIgdmFsdWVzJDEgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHZhbHVlcyQxW2ldID0gZGljdFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gdmFsdWVzJDE7XG59XG5cbmZ1bmN0aW9uIGZyb21MaXN0KGVudHJpZXMpIHtcbiAgdmFyIGRpY3QgPSB7fTtcbiAgdmFyIF9wYXJhbSA9IGVudHJpZXM7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIGRpY3Q7XG4gICAgfVxuICAgIHZhciBtYXRjaCA9IHBhcmFtLmhkO1xuICAgIGRpY3RbbWF0Y2hbMF1dID0gbWF0Y2hbMV07XG4gICAgX3BhcmFtID0gcGFyYW0udGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXkoZW50cmllcykge1xuICB2YXIgZGljdCA9IHt9O1xuICB2YXIgbCA9IGVudHJpZXMubGVuZ3RoO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICB2YXIgbWF0Y2ggPSBlbnRyaWVzW2ldO1xuICAgIGRpY3RbbWF0Y2hbMF1dID0gbWF0Y2hbMV07XG4gIH1cbiAgcmV0dXJuIGRpY3Q7XG59XG5cbmZ1bmN0aW9uIG1hcChmLCBzb3VyY2UpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHRhcmdldFtrZXldID0gZihzb3VyY2Vba2V5XSk7XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IHtcbiAgZ2V0ICxcbiAgdW5zYWZlRGVsZXRlS2V5ICxcbiAgZW50cmllcyAsXG4gIHZhbHVlcyAsXG4gIGZyb21MaXN0ICxcbiAgZnJvbUFycmF5ICxcbiAgbWFwICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIENhbWxfanNfZXhjZXB0aW9ucyBmcm9tIFwiLi9jYW1sX2pzX2V4Y2VwdGlvbnMuanNcIjtcblxudmFyIGFueVRvRXhuSW50ZXJuYWwgPSBDYW1sX2pzX2V4Y2VwdGlvbnMuaW50ZXJuYWxUb09DYW1sRXhjZXB0aW9uO1xuXG5mdW5jdGlvbiByYWlzZUVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgRXJyb3Ioc3RyKTtcbn1cblxuZnVuY3Rpb24gcmFpc2VFdmFsRXJyb3Ioc3RyKSB7XG4gIHRocm93IG5ldyBFdmFsRXJyb3Ioc3RyKTtcbn1cblxuZnVuY3Rpb24gcmFpc2VSYW5nZUVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihzdHIpO1xufVxuXG5mdW5jdGlvbiByYWlzZVJlZmVyZW5jZUVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3Ioc3RyKTtcbn1cblxuZnVuY3Rpb24gcmFpc2VTeW50YXhFcnJvcihzdHIpIHtcbiAgdGhyb3cgbmV3IFN5bnRheEVycm9yKHN0cik7XG59XG5cbmZ1bmN0aW9uIHJhaXNlVHlwZUVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKHN0cik7XG59XG5cbmZ1bmN0aW9uIHJhaXNlVXJpRXJyb3Ioc3RyKSB7XG4gIHRocm93IG5ldyBVUklFcnJvcihzdHIpO1xufVxuXG52YXIgJCRFcnJvciQxID0gQ2FtbF9qc19leGNlcHRpb25zLiQkRXJyb3I7XG5cbmV4cG9ydCB7XG4gICQkRXJyb3IkMSBhcyAkJEVycm9yLFxuICBhbnlUb0V4bkludGVybmFsICxcbiAgcmFpc2VFcnJvciAsXG4gIHJhaXNlRXZhbEVycm9yICxcbiAgcmFpc2VSYW5nZUVycm9yICxcbiAgcmFpc2VSZWZlcmVuY2VFcnJvciAsXG4gIHJhaXNlU3ludGF4RXJyb3IgLFxuICByYWlzZVR5cGVFcnJvciAsXG4gIHJhaXNlVXJpRXJyb3IgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG5mdW5jdGlvbiBlcXVhbCh4LCB5KSB7XG4gIHJldHVybiB4ID09PSB5O1xufVxuXG52YXIgbWF4ID0gMjE0NzQ4MzY0NztcblxudmFyIG1pbiA9IC0yMTQ3NDgzNjQ4O1xuXG5leHBvcnQge1xuICBlcXVhbCAsXG4gIG1heCAsXG4gIG1pbiAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBKc192ZWN0b3IgZnJvbSBcIi4vanNfdmVjdG9yLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX29wdGlvbiBmcm9tIFwiLi9jYW1sX29wdGlvbi5qc1wiO1xuXG5mdW5jdGlvbiBsZW5ndGgobCkge1xuICB2YXIgX2xlbiA9IDA7XG4gIHZhciBfcGFyYW0gPSBsO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIHZhciBsZW4gPSBfbGVuO1xuICAgIGlmICghcGFyYW0pIHtcbiAgICAgIHJldHVybiBsZW47XG4gICAgfVxuICAgIF9wYXJhbSA9IHBhcmFtLnRsO1xuICAgIF9sZW4gPSBsZW4gKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnMoeCwgeHMpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBoZDogeCxcbiAgICAgICAgICB0bDogeHNcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eSh4KSB7XG4gIHJldHVybiB4ID09PSAvKiBbXSAqLzA7XG59XG5cbmZ1bmN0aW9uIGhkKHBhcmFtKSB7XG4gIGlmIChwYXJhbSkge1xuICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKHBhcmFtLmhkKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gdGwocGFyYW0pIHtcbiAgaWYgKHBhcmFtKSB7XG4gICAgcmV0dXJuIHBhcmFtLnRsO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBudGgobCwgbikge1xuICBpZiAobiA8IDApIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciBfbCA9IGw7XG4gIHZhciBfbiA9IG47XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbiQxID0gX247XG4gICAgdmFyIGwkMSA9IF9sO1xuICAgIGlmICghbCQxKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBpZiAobiQxID09PSAwKSB7XG4gICAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZShsJDEuaGQpO1xuICAgIH1cbiAgICBfbiA9IG4kMSAtIDEgfCAwO1xuICAgIF9sID0gbCQxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmV2QXBwZW5kKF9sMSwgX2wyKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIHJldHVybiBsMjtcbiAgICB9XG4gICAgX2wyID0ge1xuICAgICAgaGQ6IGwxLmhkLFxuICAgICAgdGw6IGwyXG4gICAgfTtcbiAgICBfbDEgPSBsMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJldihsKSB7XG4gIHJldHVybiByZXZBcHBlbmQobCwgLyogW10gKi8wKTtcbn1cblxuZnVuY3Rpb24gbWFwUmV2QXV4KGYsIF9hY2MsIF9scykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGxzID0gX2xzO1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICghbHMpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIF9scyA9IGxzLnRsO1xuICAgIF9hY2MgPSB7XG4gICAgICBoZDogZihscy5oZCksXG4gICAgICB0bDogYWNjXG4gICAgfTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcFJldihmLCBscykge1xuICByZXR1cm4gbWFwUmV2QXV4KGYsIC8qIFtdICovMCwgbHMpO1xufVxuXG5mdW5jdGlvbiBtYXAoZiwgbHMpIHtcbiAgcmV0dXJuIHJldkFwcGVuZChtYXBSZXZBdXgoZiwgLyogW10gKi8wLCBscyksIC8qIFtdICovMCk7XG59XG5cbmZ1bmN0aW9uIGl0ZXIoZiwgX3BhcmFtKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgZihwYXJhbS5oZCk7XG4gICAgX3BhcmFtID0gcGFyYW0udGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpdGVyaShmLCBsKSB7XG4gIHZhciBfaSA9IDA7XG4gIHZhciBfcGFyYW0gPSBsO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgZihpLCBwYXJhbS5oZCk7XG4gICAgX3BhcmFtID0gcGFyYW0udGw7XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb2xkTGVmdChmLCBfYWNjdSwgX2wpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsID0gX2w7XG4gICAgdmFyIGFjY3UgPSBfYWNjdTtcbiAgICBpZiAoIWwpIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgICBfbCA9IGwudGw7XG4gICAgX2FjY3UgPSBmKGFjY3UsIGwuaGQpO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGFpbExvb3AoZiwgX2FjYywgX3BhcmFtKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgX3BhcmFtID0gcGFyYW0udGw7XG4gICAgX2FjYyA9IGYocGFyYW0uaGQsIGFjYyk7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb2xkUmlnaHQoZiwgbCwgaW5pdCkge1xuICB2YXIgbG9vcCA9IGZ1bmN0aW9uIChuLCBwYXJhbSkge1xuICAgIGlmICghcGFyYW0pIHtcbiAgICAgIHJldHVybiBpbml0O1xuICAgIH1cbiAgICB2YXIgdCA9IHBhcmFtLnRsO1xuICAgIHZhciBoID0gcGFyYW0uaGQ7XG4gICAgaWYgKG4gPCAxMDAwKSB7XG4gICAgICByZXR1cm4gZihoLCBsb29wKG4gKyAxIHwgMCwgdCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZihoLCB0YWlsTG9vcChmLCBpbml0LCByZXZBcHBlbmQodCwgLyogW10gKi8wKSkpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxvb3AoMCwgbCk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4obHgpIHtcbiAgdmFyIF9hY2MgPSAvKiBbXSAqLzA7XG4gIHZhciBfbHggPSBseDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBseCQxID0gX2x4O1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICghbHgkMSkge1xuICAgICAgcmV0dXJuIHJldkFwcGVuZChhY2MsIC8qIFtdICovMCk7XG4gICAgfVxuICAgIF9seCA9IGx4JDEudGw7XG4gICAgX2FjYyA9IHJldkFwcGVuZChseCQxLmhkLCBhY2MpO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyUmV2QXV4KGYsIF9hY2MsIF94cykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIHZhciB5cyA9IHhzLnRsO1xuICAgIHZhciB5ID0geHMuaGQ7XG4gICAgaWYgKGYoeSkpIHtcbiAgICAgIF94cyA9IHlzO1xuICAgICAgX2FjYyA9IHtcbiAgICAgICAgaGQ6IHksXG4gICAgICAgIHRsOiBhY2NcbiAgICAgIH07XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIF94cyA9IHlzO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGYsIHhzKSB7XG4gIHJldHVybiByZXZBcHBlbmQoZmlsdGVyUmV2QXV4KGYsIC8qIFtdICovMCwgeHMpLCAvKiBbXSAqLzApO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJNYXBSZXZBdXgoZiwgX2FjYywgX3hzKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgdmFyIHlzID0geHMudGw7XG4gICAgdmFyIHogPSBmKHhzLmhkKTtcbiAgICBpZiAoeiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfeHMgPSB5cztcbiAgICAgIF9hY2MgPSB7XG4gICAgICAgIGhkOiBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKHopLFxuICAgICAgICB0bDogYWNjXG4gICAgICB9O1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBfeHMgPSB5cztcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbHRlck1hcChmLCB4cykge1xuICByZXR1cm4gcmV2QXBwZW5kKGZpbHRlck1hcFJldkF1eChmLCAvKiBbXSAqLzAsIHhzKSwgLyogW10gKi8wKTtcbn1cblxuZnVuY3Rpb24gY291bnRCeShmLCB4cykge1xuICB2YXIgX2FjYyA9IDA7XG4gIHZhciBfeHMgPSB4cztcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyQxID0gX3hzO1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICgheHMkMSkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgX3hzID0geHMkMS50bDtcbiAgICBfYWNjID0gZih4cyQxLmhkKSA/IGFjYyArIDEgfCAwIDogYWNjO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdChuLCBmKSB7XG4gIHJldHVybiBKc192ZWN0b3IudG9MaXN0KEpzX3ZlY3Rvci5pbml0KG4sIGYpKTtcbn1cblxuZnVuY3Rpb24gdG9WZWN0b3IoeHMpIHtcbiAgaWYgKCF4cykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgYSA9IG5ldyBBcnJheShsZW5ndGgoeHMpKTtcbiAgdmFyIF9pID0gMDtcbiAgdmFyIF9wYXJhbSA9IHhzO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGFbaV0gPSBwYXJhbS5oZDtcbiAgICBfcGFyYW0gPSBwYXJhbS50bDtcbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVxdWFsKGNtcCwgX3hzLCBfeXMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB5cyA9IF95cztcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgaWYgKHlzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXlzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghY21wKHhzLmhkLCB5cy5oZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX3lzID0geXMudGw7XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5leHBvcnQge1xuICBsZW5ndGggLFxuICBjb25zICxcbiAgaXNFbXB0eSAsXG4gIGhkICxcbiAgdGwgLFxuICBudGggLFxuICByZXZBcHBlbmQgLFxuICByZXYgLFxuICBtYXBSZXYgLFxuICBtYXAgLFxuICBpdGVyICxcbiAgaXRlcmkgLFxuICBmb2xkTGVmdCAsXG4gIGZvbGRSaWdodCAsXG4gIGZsYXR0ZW4gLFxuICBmaWx0ZXIgLFxuICBmaWx0ZXJNYXAgLFxuICBjb3VudEJ5ICxcbiAgaW5pdCAsXG4gIHRvVmVjdG9yICxcbiAgZXF1YWwgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgSnNfaW50IGZyb20gXCIuL2pzX2ludC5qc1wiO1xuXG5mdW5jdGlvbiB1bnNhZmVfY2VpbChwcmltKSB7XG4gIHJldHVybiBNYXRoLmNlaWwocHJpbSk7XG59XG5cbmZ1bmN0aW9uIGNlaWxfaW50KGYpIHtcbiAgaWYgKGYgPiBKc19pbnQubWF4KSB7XG4gICAgcmV0dXJuIEpzX2ludC5tYXg7XG4gIH0gZWxzZSBpZiAoZiA8IEpzX2ludC5taW4pIHtcbiAgICByZXR1cm4gSnNfaW50Lm1pbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKGYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc2FmZV9mbG9vcihwcmltKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKHByaW0pO1xufVxuXG5mdW5jdGlvbiBmbG9vcl9pbnQoZikge1xuICBpZiAoZiA+IEpzX2ludC5tYXgpIHtcbiAgICByZXR1cm4gSnNfaW50Lm1heDtcbiAgfSBlbHNlIGlmIChmIDwgSnNfaW50Lm1pbikge1xuICAgIHJldHVybiBKc19pbnQubWluO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBNYXRoLmZsb29yKGYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJhbmRvbV9pbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIGZsb29yX2ludChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiB8IDApKSArIG1pbiB8IDA7XG59XG5cbnZhciBjZWlsID0gY2VpbF9pbnQ7XG5cbnZhciBmbG9vciA9IGZsb29yX2ludDtcblxuZXhwb3J0IHtcbiAgdW5zYWZlX2NlaWwgLFxuICBjZWlsX2ludCAsXG4gIGNlaWwgLFxuICB1bnNhZmVfZmxvb3IgLFxuICBmbG9vcl9pbnQgLFxuICBmbG9vciAsXG4gIHJhbmRvbV9pbnQgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG5mdW5jdGlvbiBmaWx0ZXJJblBsYWNlKHAsIGEpIHtcbiAgdmFyIGkgPSAwO1xuICB2YXIgaiA9IDA7XG4gIHdoaWxlKGkgPCBhLmxlbmd0aCkge1xuICAgIHZhciB2ID0gYVtpXTtcbiAgICBpZiAocCh2KSkge1xuICAgICAgYVtqXSA9IHY7XG4gICAgICBqID0gaiArIDEgfCAwO1xuICAgIH1cbiAgICBpID0gaSArIDEgfCAwO1xuICB9O1xuICBhLnNwbGljZShqKTtcbiAgXG59XG5cbmZ1bmN0aW9uIGVtcHR5KGEpIHtcbiAgYS5zcGxpY2UoMCk7XG4gIFxufVxuXG5mdW5jdGlvbiBwdXNoQmFjayh4LCB4cykge1xuICB4cy5wdXNoKHgpO1xuICBcbn1cblxuZnVuY3Rpb24gbWVtQnlSZWYoeCwgeHMpIHtcbiAgcmV0dXJuIHhzLmluZGV4T2YoeCkgPj0gMDtcbn1cblxuZnVuY3Rpb24gaXRlcihmLCB4cykge1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IHhzLmxlbmd0aDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIGYoeHNbaV0pO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBpdGVyaShmLCBhKSB7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBmKGksIGFbaV0pO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiB0b0xpc3QoYSkge1xuICB2YXIgX2kgPSBhLmxlbmd0aCAtIDEgfCAwO1xuICB2YXIgX3JlcyA9IC8qIFtdICovMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciByZXMgPSBfcmVzO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBfcmVzID0ge1xuICAgICAgaGQ6IGFbaV0sXG4gICAgICB0bDogcmVzXG4gICAgfTtcbiAgICBfaSA9IGkgLSAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXQobiwgZikge1xuICB2YXIgdiA9IG5ldyBBcnJheShuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IG47ICsraSl7XG4gICAgdltpXSA9IGYoaSk7XG4gIH1cbiAgcmV0dXJuIHY7XG59XG5cbmZ1bmN0aW9uIGNvcHkoeCkge1xuICB2YXIgbGVuID0geC5sZW5ndGg7XG4gIHZhciBiID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgYltpXSA9IHhbaV07XG4gIH1cbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIG1hcChmLCBhKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciByID0gbmV3IEFycmF5KGwpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICByW2ldID0gZihhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gZm9sZExlZnQoZiwgeCwgYSkge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICByID0gZihyLCBhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gZm9sZFJpZ2h0KGYsIGEsIHgpIHtcbiAgdmFyIHIgPSB4O1xuICBmb3IodmFyIGkgPSBhLmxlbmd0aCAtIDEgfCAwOyBpID49IDA7IC0taSl7XG4gICAgciA9IGYoYVtpXSwgcik7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIG1hcGkoZiwgYSkge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICBpZiAobCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgciA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgcltpXSA9IGYoaSwgYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZCh4LCBhKSB7XG4gIHJldHVybiBhLmNvbmNhdChbeF0pO1xufVxuXG5leHBvcnQge1xuICBmaWx0ZXJJblBsYWNlICxcbiAgZW1wdHkgLFxuICBwdXNoQmFjayAsXG4gIGNvcHkgLFxuICBtZW1CeVJlZiAsXG4gIGl0ZXIgLFxuICBpdGVyaSAsXG4gIHRvTGlzdCAsXG4gIG1hcCAsXG4gIG1hcGkgLFxuICBmb2xkTGVmdCAsXG4gIGZvbGRSaWdodCAsXG4gIGluaXQgLFxuICBhcHBlbmQgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgUmVTY3JpcHQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgSnNfbGlzdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9qc19saXN0LmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X0xpc3QgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvYmVsdF9MaXN0LmpzXCI7XG5cbmZ1bmN0aW9uIHRUb0pzKHBhcmFtKSB7XG4gIHJldHVybiBwYXJhbSArIDAgfCAwO1xufVxuXG5mdW5jdGlvbiB0RnJvbUpzKHBhcmFtKSB7XG4gIGlmIChwYXJhbSA8PSAzICYmIDAgPD0gcGFyYW0pIHtcbiAgICByZXR1cm4gcGFyYW0gLSAwIHwgMDtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gdEVudW0oc29ydE5NVUlPcHQsIHBhcmFtKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICBpZiAoc29ydE5NVUkpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgLyogTiAqLzAsXG4gICAgICAgICAgICAvKiBNICovMyxcbiAgICAgICAgICAgIC8qIFUgKi8xLFxuICAgICAgICAgICAgLyogSSAqLzJcbiAgICAgICAgICBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICAvKiBOICovMCxcbiAgICAgICAgICAgIC8qIFUgKi8xLFxuICAgICAgICAgICAgLyogSSAqLzIsXG4gICAgICAgICAgICAvKiBNICovM1xuICAgICAgICAgIF07XG4gIH1cbn1cblxuZnVuY3Rpb24gdEVudW1MaXN0KHNvcnROTVVJT3B0LCBwYXJhbSkge1xuICB2YXIgc29ydE5NVUkgPSBzb3J0Tk1VSU9wdCAhPT0gdW5kZWZpbmVkID8gc29ydE5NVUlPcHQgOiBmYWxzZTtcbiAgaWYgKHNvcnROTVVJKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiAvKiBOICovMCxcbiAgICAgICAgICAgIHRsOiB7XG4gICAgICAgICAgICAgIGhkOiAvKiBNICovMyxcbiAgICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgICBoZDogLyogVSAqLzEsXG4gICAgICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgICAgIGhkOiAvKiBJICovMixcbiAgICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZDogLyogTiAqLzAsXG4gICAgICAgICAgICB0bDoge1xuICAgICAgICAgICAgICBoZDogLyogVSAqLzEsXG4gICAgICAgICAgICAgIHRsOiB7XG4gICAgICAgICAgICAgICAgaGQ6IC8qIEkgKi8yLFxuICAgICAgICAgICAgICAgIHRsOiB7XG4gICAgICAgICAgICAgICAgICBoZDogLyogTSAqLzMsXG4gICAgICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93KHgpIHtcbiAgc3dpdGNoICh4KSB7XG4gICAgY2FzZSAvKiBOICovMCA6XG4gICAgICAgIHJldHVybiBcIk5cIjtcbiAgICBjYXNlIC8qIFUgKi8xIDpcbiAgICAgICAgcmV0dXJuIFwiVVwiO1xuICAgIGNhc2UgLyogSSAqLzIgOlxuICAgICAgICByZXR1cm4gXCJJXCI7XG4gICAgY2FzZSAvKiBNICovMyA6XG4gICAgICAgIHJldHVybiBcIk1cIjtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93QXNLZXkoeCkge1xuICBzd2l0Y2ggKHgpIHtcbiAgICBjYXNlIC8qIE4gKi8wIDpcbiAgICAgICAgcmV0dXJuIFwiTlwiO1xuICAgIGNhc2UgLyogVSAqLzEgOlxuICAgICAgICByZXR1cm4gXCJVXCI7XG4gICAgY2FzZSAvKiBJICovMiA6XG4gICAgICAgIHJldHVybiBcIklcIjtcbiAgICBjYXNlIC8qIE0gKi8zIDpcbiAgICAgICAgcmV0dXJuIFwiTVwiO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIHRvSW50KHNvcnROTVVJT3B0LCBjKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICB2YXIgbiA9IGMgKyAwIHwgMDtcbiAgc3dpdGNoIChuKSB7XG4gICAgY2FzZSAwIDpcbiAgICAgICAgcmV0dXJuIG47XG4gICAgY2FzZSAxIDpcbiAgICAgICAgaWYgKHNvcnROTVVJKSB7XG4gICAgICAgICAgcmV0dXJuIDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgIH1cbiAgICBjYXNlIDIgOlxuICAgICAgICBpZiAoc29ydE5NVUkpIHtcbiAgICAgICAgICByZXR1cm4gMztcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfVxuICAgIGNhc2UgMyA6XG4gICAgICAgIGlmIChzb3J0Tk1VSSkge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICB9XG4gICAgZGVmYXVsdDpcbiAgICAgIHJldHVybiAtOTk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZnJvbUludChzb3J0Tk1VSU9wdCwgbikge1xuICB2YXIgc29ydE5NVUkgPSBzb3J0Tk1VSU9wdCAhPT0gdW5kZWZpbmVkID8gc29ydE5NVUlPcHQgOiBmYWxzZTtcbiAgdmFyIF9jID0gdEZyb21KcyhuKTtcbiAgaWYgKCFzb3J0Tk1VSSkge1xuICAgIHJldHVybiBfYztcbiAgfVxuICBpZiAoX2MgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBfYztcbiAgfVxuICBzd2l0Y2ggKF9jKSB7XG4gICAgY2FzZSAvKiBOICovMCA6XG4gICAgICAgIHJldHVybiBfYztcbiAgICBjYXNlIC8qIFUgKi8xIDpcbiAgICAgICAgcmV0dXJuIC8qIE0gKi8zO1xuICAgIGNhc2UgLyogSSAqLzIgOlxuICAgICAgICByZXR1cm4gLyogVSAqLzE7XG4gICAgY2FzZSAvKiBNICovMyA6XG4gICAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiB0RnJvbVN0cihzb3J0Tk1VSU9wdCwgc3RyKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICBzd2l0Y2ggKHN0cikge1xuICAgIGNhc2UgXCIxXCIgOlxuICAgICAgICBpZiAoc29ydE5NVUkpIHtcbiAgICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgICAgICB9XG4gICAgY2FzZSBcIjJcIiA6XG4gICAgICAgIGlmIChzb3J0Tk1VSSkge1xuICAgICAgICAgIHJldHVybiAvKiBVICovMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gLyogSSAqLzI7XG4gICAgICAgIH1cbiAgICBjYXNlIFwiM1wiIDpcbiAgICAgICAgaWYgKHNvcnROTVVJKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAvKiBNICovMztcbiAgICAgICAgfVxuICAgIGNhc2UgXCIobW4pXCIgOlxuICAgIGNhc2UgXCJJXCIgOlxuICAgIGNhc2UgXCJpXCIgOlxuICAgICAgICByZXR1cm4gLyogSSAqLzI7XG4gICAgY2FzZSBcIigpXCIgOlxuICAgIGNhc2UgXCJNXCIgOlxuICAgIGNhc2UgXCJtXCIgOlxuICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgY2FzZSBcIlwiIDpcbiAgICBjYXNlIFwiKCgpKVwiIDpcbiAgICBjYXNlIFwiLlwiIDpcbiAgICBjYXNlIFwiMFwiIDpcbiAgICBjYXNlIFwiTlwiIDpcbiAgICBjYXNlIFwiblwiIDpcbiAgICAgICAgcmV0dXJuIC8qIE4gKi8wO1xuICAgIGNhc2UgXCJVXCIgOlxuICAgIGNhc2UgXCJtblwiIDpcbiAgICBjYXNlIFwidVwiIDpcbiAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludih4KSB7XG4gIHN3aXRjaCAoeCkge1xuICAgIGNhc2UgLyogTiAqLzAgOlxuICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgY2FzZSAvKiBVICovMSA6XG4gICAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICBjYXNlIC8qIEkgKi8yIDpcbiAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgIGNhc2UgLyogTSAqLzMgOlxuICAgICAgICByZXR1cm4gLyogTiAqLzA7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsKHgsIHkpIHtcbiAgaWYgKHkgPT09IDApIHtcbiAgICByZXR1cm4geDtcbiAgfVxuICBzd2l0Y2ggKHgpIHtcbiAgICBjYXNlIC8qIE4gKi8wIDpcbiAgICAgICAgcmV0dXJuIHk7XG4gICAgY2FzZSAvKiBVICovMSA6XG4gICAgICAgIGlmICh5ID49IDIpIHtcbiAgICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgICAgICB9XG4gICAgY2FzZSAvKiBJICovMiA6XG4gICAgICAgIGlmICh5ICE9PSAyKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIE0gKi8zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICAgICAgfVxuICAgIGNhc2UgLyogTSAqLzMgOlxuICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgXG4gIH1cbn1cblxudmFyIENvbnN0ID0ge1xuICB0VG9KczogdFRvSnMsXG4gIHRGcm9tSnM6IHRGcm9tSnMsXG4gIHRFbnVtOiB0RW51bSxcbiAgdEVudW1MaXN0OiB0RW51bUxpc3QsXG4gIHNob3c6IHNob3csXG4gIHNob3dBc0tleTogc2hvd0FzS2V5LFxuICB0b0ludDogdG9JbnQsXG4gIGZyb21JbnQ6IGZyb21JbnQsXG4gIHRGcm9tU3RyOiB0RnJvbVN0cixcbiAgaW52OiBpbnYsXG4gIHJlbDogcmVsXG59O1xuXG5mdW5jdGlvbiBzaG93JDEobmVzdCkge1xuICBpZiAobmVzdC5OQU1FID09PSBcIk5lc3RUb1JcIikge1xuICAgIHZhciBjbGlzdCA9IG5lc3QuVkFMO1xuICAgIGlmIChjbGlzdCkge1xuICAgICAgcmV0dXJuIFwiKFwiICsgQmVsdF9MaXN0LnJlZHVjZVJldmVyc2UoY2xpc3QsIFwiXCIsIChmdW5jdGlvbiAoc3RyLCBjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaG93KGMpICsgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ci5sZW5ndGggPiAwID8gXCIoXCIgKyBzdHIgKyBcIilcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pKSArIFwiKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJNXCI7XG4gICAgfVxuICB9XG4gIHZhciBjbGlzdCQxID0gbmVzdC5WQUw7XG4gIGlmIChjbGlzdCQxKSB7XG4gICAgcmV0dXJuIFwiKFwiICsgQmVsdF9MaXN0LnJlZHVjZShjbGlzdCQxLCBcIlwiLCAoZnVuY3Rpb24gKHN0ciwgYykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyLmxlbmd0aCA+IDAgPyBcIihcIiArIHN0ciArIFwiKVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSArIHNob3coYyk7XG4gICAgICAgICAgICAgICAgfSkpICsgXCIpXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiTVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldExpc3QobmVzdCkge1xuICByZXR1cm4gbmVzdC5WQUw7XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheVRvTChhcnIpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBOQU1FOiBcIk5lc3RUb0xcIixcbiAgICAgICAgICBWQUw6IEJlbHRfTGlzdC5mcm9tQXJyYXkoYXJyKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlUb1IoYXJyKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgVkFMOiBCZWx0X0xpc3QuZnJvbUFycmF5KGFycilcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheShuZXN0KSB7XG4gIHJldHVybiBCZWx0X0xpc3QudG9BcnJheShuZXN0LlZBTCk7XG59XG5cbmZ1bmN0aW9uIGZtYXBMKHBhcmFtLCBmbikge1xuICByZXR1cm4ge1xuICAgICAgICAgIE5BTUU6IFwiTmVzdFRvTFwiLFxuICAgICAgICAgIFZBTDogQ3VycnkuXzEoZm4sIHBhcmFtLlZBTClcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZm1hcFIocGFyYW0sIGZuKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgVkFMOiBDdXJyeS5fMShmbiwgcGFyYW0uVkFMKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBfcmVkdWNlQnlDcm9zc2luZyhfY2xpc3QpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBjbGlzdCA9IF9jbGlzdDtcbiAgICBpZiAoIWNsaXN0KSB7XG4gICAgICByZXR1cm4gY2xpc3Q7XG4gICAgfVxuICAgIHZhciBjID0gY2xpc3QuaGQ7XG4gICAgaWYgKGMgPT09IDApIHtcbiAgICAgIHZhciBtYXRjaCA9IGNsaXN0LnRsO1xuICAgICAgaWYgKG1hdGNoICYmIG1hdGNoLmhkID09PSAwKSB7XG4gICAgICAgIF9jbGlzdCA9IG1hdGNoLnRsO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiBjLFxuICAgICAgICAgICAgdGw6IF9yZWR1Y2VCeUNyb3NzaW5nKGNsaXN0LnRsKVxuICAgICAgICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZUJ5Q3Jvc3NpbmdMKHBhcmFtKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9MXCIsXG4gICAgICAgICAgVkFMOiBfcmVkdWNlQnlDcm9zc2luZyhwYXJhbS5WQUwpXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZUJ5Q3Jvc3NpbmdSKHBhcmFtKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgVkFMOiBfcmVkdWNlQnlDcm9zc2luZyhwYXJhbS5WQUwpXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIF9yZWR1Y2VCeUNhbGxpbmcoY2xpc3QsIHNvbWVVSSkge1xuICBpZiAoIWNsaXN0KSB7XG4gICAgcmV0dXJuIGNsaXN0O1xuICB9XG4gIHZhciBjcyA9IGNsaXN0LnRsO1xuICB2YXIgYyA9IGNsaXN0LmhkO1xuICBpZiAoY3MpIHtcbiAgICBpZiAoYyAhPT0gMCkge1xuICAgICAgaWYgKGMgPj0gMykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhkOiAvKiBNICovMyxcbiAgICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHNvbWVVSSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzb21lVUkgPT09IGMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgaGQ6IC8qIE4gKi8wLFxuICAgICAgICAgICAgICAgICAgdGw6IF9yZWR1Y2VCeUNhbGxpbmcoY3MsIHNvbWVVSSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBoZDogLyogTSAqLzMsXG4gICAgICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZDogYyxcbiAgICAgICAgICAgICAgICB0bDogX3JlZHVjZUJ5Q2FsbGluZyhjcywgYylcbiAgICAgICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaGQ6IC8qIE4gKi8wLFxuICAgICAgICAgICAgICB0bDogX3JlZHVjZUJ5Q2FsbGluZyhjcywgc29tZVVJKVxuICAgICAgICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIShjID09PSAyIHx8IGMgPT09IDEpIHx8IHNvbWVVSSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGNsaXN0O1xuICB9IGVsc2UgaWYgKHNvbWVVSSA9PT0gYykge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZDogLyogTiAqLzAsXG4gICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IC8qIE0gKi8zLFxuICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlQnlDYWxsaW5nTChwYXJhbSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIE5BTUU6IFwiTmVzdFRvTFwiLFxuICAgICAgICAgIFZBTDogSnNfbGlzdC5yZXYoX3JlZHVjZUJ5Q2FsbGluZyhKc19saXN0LnJldihwYXJhbS5WQUwpLCB1bmRlZmluZWQpKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VCeUNhbGxpbmdSKHBhcmFtKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgVkFMOiBfcmVkdWNlQnlDYWxsaW5nKHBhcmFtLlZBTCwgdW5kZWZpbmVkKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VMKHBhcmFtKSB7XG4gIHJldHVybiByZWR1Y2VCeUNyb3NzaW5nTChyZWR1Y2VCeUNhbGxpbmdMKHtcbiAgICAgICAgICAgICAgICAgIE5BTUU6IFwiTmVzdFRvTFwiLFxuICAgICAgICAgICAgICAgICAgVkFMOiBwYXJhbS5WQUxcbiAgICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVIocGFyYW0pIHtcbiAgcmV0dXJuIHJlZHVjZUJ5Q3Jvc3NpbmdSKHJlZHVjZUJ5Q2FsbGluZ1Ioe1xuICAgICAgICAgICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgICAgICAgICBWQUw6IHBhcmFtLlZBTFxuICAgICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gX2NhbGMoY2xpc3QpIHtcbiAgaWYgKCFjbGlzdCkge1xuICAgIHJldHVybiAvKiBOICovMDtcbiAgfVxuICB2YXIgY3MgPSBjbGlzdC50bDtcbiAgdmFyIGMgPSBjbGlzdC5oZDtcbiAgaWYgKGNzKSB7XG4gICAgaWYgKGMgIT09IDApIHtcbiAgICAgIGlmIChjID49IDMpIHtcbiAgICAgICAgcmV0dXJuIC8qIE0gKi8zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlbChjLCBpbnYoX2NhbGMoY3MpKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpbnYoX2NhbGMoY3MpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGM7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY0wocGFyYW0pIHtcbiAgdmFyIGNsaXN0ID0gcGFyYW0uVkFMO1xuICBpZiAoY2xpc3QpIHtcbiAgICByZXR1cm4gaW52KF9jYWxjKEpzX2xpc3QucmV2KGNsaXN0KSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiBNICovMztcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjUihwYXJhbSkge1xuICB2YXIgY2xpc3QgPSBwYXJhbS5WQUw7XG4gIGlmIChjbGlzdCkge1xuICAgIHJldHVybiBpbnYoX2NhbGMoY2xpc3QpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogTSAqLzM7XG4gIH1cbn1cblxudmFyIE5lc3RlZCA9IHtcbiAgc2hvdzogc2hvdyQxLFxuICBnZXRMaXN0OiBnZXRMaXN0LFxuICBmcm9tQXJyYXlUb0w6IGZyb21BcnJheVRvTCxcbiAgZnJvbUFycmF5VG9SOiBmcm9tQXJyYXlUb1IsXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIGZtYXBMOiBmbWFwTCxcbiAgZm1hcFI6IGZtYXBSLFxuICByZWR1Y2VCeUNyb3NzaW5nTDogcmVkdWNlQnlDcm9zc2luZ0wsXG4gIHJlZHVjZUJ5Q3Jvc3NpbmdSOiByZWR1Y2VCeUNyb3NzaW5nUixcbiAgcmVkdWNlQnlDYWxsaW5nTDogcmVkdWNlQnlDYWxsaW5nTCxcbiAgcmVkdWNlQnlDYWxsaW5nUjogcmVkdWNlQnlDYWxsaW5nUixcbiAgcmVkdWNlTDogcmVkdWNlTCxcbiAgcmVkdWNlUjogcmVkdWNlUixcbiAgY2FsY0w6IGNhbGNMLFxuICBjYWxjUjogY2FsY1Jcbn07XG5cbmV4cG9ydCB7XG4gIENvbnN0ICxcbiAgTmVzdGVkICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IFJlU2NyaXB0LCBQTEVBU0UgRURJVCBXSVRIIENBUkVcblxuaW1wb3J0ICogYXMgQ2FtbF9vYmogZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvY2FtbF9vYmouanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfQXJyYXkgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvYmVsdF9BcnJheS5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9hcnJheSBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9jYW1sX2FycmF5LmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X1NldEludCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X1NldEludC5qc1wiO1xuaW1wb3J0ICogYXMgQ2FsYyRGb3JtZm9ybSBmcm9tIFwiLi9DYWxjLmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBKc1JhdyRGb3JtZm9ybSBmcm9tIFwiLi4vLi4vdXRpbHMvSnNSYXcuYnMuanNcIjtcbmltcG9ydCAqIGFzIEhlbHBlciRGb3JtZm9ybSBmcm9tIFwiLi4vLi4vdXRpbHMvSGVscGVyLmJzLmpzXCI7XG5cbnZhciBnZXQgPSBCZWx0X0FycmF5LmdldDtcblxuZnVuY3Rpb24gZ2V0VW5zYWZlKGRuYSwgaSkge1xuICByZXR1cm4gZG5hW2ldO1xufVxuXG5mdW5jdGlvbiBnZXRMZW5ndGgoZG5hKSB7XG4gIHJldHVybiBkbmEubGVuZ3RoO1xufVxuXG5mdW5jdGlvbiBnZXRTaXplKGRuYSkge1xuICB2YXIgbGVuID0gZG5hLmxlbmd0aDtcbiAgcmV0dXJuIE1hdGgubG9nKGxlbikgLyBNYXRoLmxvZyg0LjApIHwgMDtcbn1cblxuZnVuY3Rpb24gZ2V0U2l6ZUZyb21MZW5ndGgobGVuKSB7XG4gIHZhciB4ID0gTWF0aC5sb2cobGVuKSAvIE1hdGgubG9nKDQuMCk7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHgpIHx8IEhlbHBlciRGb3JtZm9ybS5oYXNEZWNpbWFsKHgpKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCB8IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZExlbmd0aChsZW4pIHtcbiAgcmV0dXJuIGdldFNpemVGcm9tTGVuZ3RoKGxlbikgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gbWFrZShhcnIpIHtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIGlmIChpc1ZhbGlkTGVuZ3RoKGxlbikpIHtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBtYWtlVW5zYWZlKGFycikge1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgaWYgKGlzVmFsaWRMZW5ndGgobGVuKSkge1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgdGhyb3cge1xuICAgICAgICBSRV9FWE5fSUQ6IFwiTm90X2ZvdW5kXCIsXG4gICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZ2VuUmFuZG9tKHNpemUpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5mdW5jdGlvbiB0b0FycmF5KGRuYSkge1xuICByZXR1cm4gZG5hO1xufVxuXG5mdW5jdGlvbiByZW9yZGVyVG9OTVVJKHVuZG9PcHQsIGRuYSkge1xuICB2YXIgdW5kbyA9IHVuZG9PcHQgIT09IHVuZGVmaW5lZCA/IHVuZG9PcHQgOiBmYWxzZTtcbiAgdmFyIGxlbiA9IGRuYS5sZW5ndGg7XG4gIGlmIChsZW4gPCA0KSB7XG4gICAgcmV0dXJuIGRuYTtcbiAgfVxuICB2YXIgcGFydExlbiA9IGxlbiAvIDQgfCAwO1xuICByZXR1cm4gQmVsdF9BcnJheS5jb25jYXRNYW55KEJlbHRfQXJyYXkubWFrZUJ5KDQsIChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgaV9yZW9yZGVyZWQ7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlfcmVvcmRlcmVkID0gdW5kbyA/IDIgOiAxO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICBjYXNlIDEgOlxuICAgICAgICAgICAgICAgICAgICAgICAgICBpX3Jlb3JkZXJlZCA9IHVuZG8gPyAwIDogMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaV9yZW9yZGVyZWQgPSB1bmRvID8gMSA6IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpX3Jlb3JkZXJlZCA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gTWF0aC5pbXVsKGlfcmVvcmRlcmVkLCBwYXJ0TGVuKTtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhcnRfcmVvcmRlcmVkID0gZG5hLnNsaWNlKGluZGV4LCBpbmRleCArIHBhcnRMZW4gfCAwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxlbiA+IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVvcmRlclRvTk1VSSh1bmRvLCBwYXJ0X3Jlb3JkZXJlZCk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnRfcmVvcmRlcmVkO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9KSkpO1xufVxuXG5mdW5jdGlvbiBmcm9tSW50QXJyKHNvcnROTVVJT3B0LCBhcnIpIHtcbiAgdmFyIHNvcnROTVVJID0gc29ydE5NVUlPcHQgIT09IHVuZGVmaW5lZCA/IHNvcnROTVVJT3B0IDogZmFsc2U7XG4gIGlmIChpc1ZhbGlkTGVuZ3RoKGFyci5sZW5ndGgpID09PSBmYWxzZSkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIGRuYSA9IGFyci5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgdmFyIGMgPSBDYWxjJEZvcm1mb3JtLkNvbnN0LmZyb21JbnQoc29ydE5NVUksIG4pO1xuICAgICAgICBpZiAoYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICBSRV9FWE5fSUQ6IFwiTm90X2ZvdW5kXCIsXG4gICAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgICAgfTtcbiAgICAgIH0pO1xuICByZXR1cm4gc29ydE5NVUkgPyByZW9yZGVyVG9OTVVJKHRydWUsIGRuYSkgOiBkbmE7XG59XG5cbmZ1bmN0aW9uIGZyb21JbnRBcnJVbnNhZmUoc29ydE5NVUlPcHQsIGFycikge1xuICB2YXIgc29ydE5NVUkgPSBzb3J0Tk1VSU9wdCAhPT0gdW5kZWZpbmVkID8gc29ydE5NVUlPcHQgOiBmYWxzZTtcbiAgdmFyIGRuYSA9IGZyb21JbnRBcnIoc29ydE5NVUksIGFycik7XG4gIGlmIChkbmEgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBkbmE7XG4gIH1cbiAgdGhyb3cge1xuICAgICAgICBSRV9FWE5fSUQ6IFwiTm90X2ZvdW5kXCIsXG4gICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZnJvbVN0ckFycihzb3J0Tk1VSU9wdCwgYXJyKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICBpZiAoaXNWYWxpZExlbmd0aChhcnIubGVuZ3RoKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciBkbmEgPSBhcnIubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgIHZhciBjID0gQ2FsYyRGb3JtZm9ybS5Db25zdC50RnJvbVN0cihzb3J0Tk1VSSwgbik7XG4gICAgICAgIGlmIChjICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICB9O1xuICAgICAgfSk7XG4gIHJldHVybiBzb3J0Tk1VSSA/IHJlb3JkZXJUb05NVUkodHJ1ZSwgZG5hKSA6IGRuYTtcbn1cblxuZnVuY3Rpb24gZnJvbVN0ckFyclVuc2FmZShzb3J0Tk1VSU9wdCwgYXJyKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICB2YXIgZG5hID0gZnJvbVN0ckFycihzb3J0Tk1VSSwgYXJyKTtcbiAgaWYgKGRuYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGRuYTtcbiAgfVxuICB0aHJvdyB7XG4gICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICB9O1xufVxuXG5mdW5jdGlvbiBzaG93KHNvcnROTVVJT3B0LCBzcGFjZWRPcHQsIGRuYSkge1xuICB2YXIgc29ydE5NVUkgPSBzb3J0Tk1VSU9wdCAhPT0gdW5kZWZpbmVkID8gc29ydE5NVUlPcHQgOiBmYWxzZTtcbiAgdmFyIHNwYWNlZCA9IHNwYWNlZE9wdCAhPT0gdW5kZWZpbmVkID8gc3BhY2VkT3B0IDogZmFsc2U7XG4gIHZhciBkbmFfc29ydGVkID0gc29ydE5NVUkgPyByZW9yZGVyVG9OTVVJKHVuZGVmaW5lZCwgZG5hKSA6IGRuYTtcbiAgdmFyIHByZWZpeCA9IChcbiAgICBzb3J0Tk1VSSA/IFwiOjpcIiA6IFwi4oGYXCJcbiAgKSArIChcbiAgICBzcGFjZWQgPyBcIiBcIiA6IFwiXCJcbiAgKTtcbiAgaWYgKENhbWxfb2JqLmNhbWxfZXF1YWwoZG5hX3NvcnRlZCwgW10pKSB7XG4gICAgcmV0dXJuIHByZWZpeCArIENhbGMkRm9ybWZvcm0uQ29uc3QudG9JbnQoc29ydE5NVUksIC8qIE4gKi8wKS50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwcmVmaXggKyBkbmFfc29ydGVkLnJlZHVjZSgoZnVuY3Rpb24gKHN0ciwgYywgaSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHNwYyA9IHNwYWNlZCAmJiBpID4gMCAmJiBpICUgNCA9PT0gMCA/IFwiIFwiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBzdHIgKyBzcGMgKyBDYWxjJEZvcm1mb3JtLkNvbnN0LnRvSW50KHNvcnROTVVJLCBjKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH0pLCBcIlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByYXcoZG5hKSB7XG4gIGlmIChDYW1sX29iai5jYW1sX2VxdWFsKGRuYSwgW10pKSB7XG4gICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3Quc2hvd0FzS2V5KC8qIE4gKi8wKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZG5hLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3Quc2hvd0FzS2V5KGMpO1xuICAgICAgICAgICAgICAgIH0pLmpvaW4oXCJcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0UGVybU9yZGVyKHBzcCkge1xuICByZXR1cm4gcHNwLnBlcm1PcmRlcjtcbn1cblxuZnVuY3Rpb24gZ2V0RG5hKHBzcCkge1xuICByZXR1cm4gcHNwLmRuYTtcbn1cblxuZnVuY3Rpb24gaXNWYWxpZFBlcm1PcmRlcihwZXJtT3JkZXIpIHtcbiAgdmFyIGxlbiA9IHBlcm1PcmRlci5sZW5ndGg7XG4gIGlmIChsZW4gIT09IDEpIHtcbiAgICBpZiAobGVuID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgXG4gIH0gZWxzZSB7XG4gICAgdmFyIG1hdGNoID0gcGVybU9yZGVyWzBdO1xuICAgIGlmIChtYXRjaCA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIFxuICB9XG4gIHZhciBvcmRlclNldEFyciA9IEJlbHRfU2V0SW50LnRvQXJyYXkoQmVsdF9TZXRJbnQuZnJvbUFycmF5KHBlcm1PcmRlcikpO1xuICB2YXIgbGVuJDEgPSBvcmRlclNldEFyci5sZW5ndGg7XG4gIGlmIChwZXJtT3JkZXIubGVuZ3RoID09PSBsZW4kMSAmJiBDYW1sX2FycmF5LmdldChvcmRlclNldEFyciwgMCkgPT09IDApIHtcbiAgICByZXR1cm4gQ2FtbF9hcnJheS5nZXQob3JkZXJTZXRBcnIsIGxlbiQxIC0gMSB8IDApID09PSAobGVuJDEgLSAxIHwgMCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBlcm11dGUoZG5hLCBwZXJtT3JkZXIpIHtcbiAgdmFyIHNpemUgPSBnZXRTaXplKGRuYSk7XG4gIGlmIChzaXplICE9PSBwZXJtT3JkZXIubGVuZ3RoIHx8ICFpc1ZhbGlkUGVybU9yZGVyKHBlcm1PcmRlcikpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIGlmIChzaXplIDwgMikge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBwZXJtT3JkZXI6IHBlcm1PcmRlcixcbiAgICAgICAgICAgIGRuYTogZG5hXG4gICAgICAgICAgfTtcbiAgfVxuICB2YXIgdG9RdWF0ZXJuYXJ5U3RyID0gZnVuY3Rpb24gKG4pIHtcbiAgICByZXR1cm4gSnNSYXckRm9ybWZvcm0ucGFkU3RhcnQobi50b1N0cmluZyg0KSwgc2l6ZSwgXCIwXCIpO1xuICB9O1xuICB2YXIgZG5hTGVuID0gZG5hLmxlbmd0aDtcbiAgdmFyIGRuYVBlcm11dGVkID0gbWFrZVVuc2FmZShCZWx0X0FycmF5Lm1ha2VCeVUoZG5hTGVuLCAoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgdmFyIHF0bktleSA9IHRvUXVhdGVybmFyeVN0cihpKS5zcGxpdChcIlwiKTtcbiAgICAgICAgICAgICAgdmFyIHBlcm1LZXkgPSBCZWx0X0FycmF5Lm1ha2VCeVUoc2l6ZSwgKGZ1bmN0aW9uIChqKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgc3dhcF9pID0gQmVsdF9BcnJheS5nZXQocGVybU9yZGVyLCBqKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzd2FwX2kgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgcXRuU3RyID0gQmVsdF9BcnJheS5nZXQocXRuS2V5LCBzd2FwX2kpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAocXRuU3RyICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcXRuU3RyO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkVfRVhOX0lEOiBIZWxwZXIkRm9ybWZvcm0uSW5kZXhFeGMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8xOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXCJDb3VsZG4ndCBnZXQgcXRuIHN0cmluZyBmcm9tIHN3YXBwZWQgaW5kZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzd2FwX2lcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgUkVfRVhOX0lEOiBIZWxwZXIkRm9ybWZvcm0uSW5kZXhFeGMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMTogW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBcIkNvdWxkbid0IGdldCBpbmRleCBmcm9tIHBlcm11dGF0aW9uIG9yZGVyaW5nIVwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICB9KSkuam9pbihcIlwiKTtcbiAgICAgICAgICAgICAgdmFyIGlfcGVybSA9IEhlbHBlciRGb3JtZm9ybS5pbnRGcm9tU3RyV2l0aFJhZGl4KDQsIHBlcm1LZXkpO1xuICAgICAgICAgICAgICBpZiAoaV9wZXJtICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IEJlbHRfQXJyYXkuZ2V0KGRuYSwgaV9wZXJtKTtcbiAgICAgICAgICAgICAgICBpZiAoYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgIFJFX0VYTl9JRDogSGVscGVyJEZvcm1mb3JtLkluZGV4RXhjLFxuICAgICAgICAgICAgICAgICAgICAgIF8xOiBbXG4gICAgICAgICAgICAgICAgICAgICAgICBcIkNvdWxkbid0IGdldCBDb25zdCB2YWx1ZSBmcm9tIEROQS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIGlfcGVybVxuICAgICAgICAgICAgICAgICAgICAgIF0sXG4gICAgICAgICAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICBSRV9FWE5fSUQ6IEhlbHBlciRGb3JtZm9ybS5EZWJ1ZyxcbiAgICAgICAgICAgICAgICAgICAgXzE6IFwicGVybUtleSBcXFwiXCIgKyBwZXJtS2V5ICsgXCJcXFwiIGNvdWxkIG5vdCBiZSBjb252ZXJ0ZWQgdG8gaW50IVwiLFxuICAgICAgICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KSkpO1xuICByZXR1cm4ge1xuICAgICAgICAgIHBlcm1PcmRlcjogcGVybU9yZGVyLFxuICAgICAgICAgIGRuYTogZG5hUGVybXV0ZWRcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gcGVybXV0ZUFsbChkbmEpIHtcbiAgcmV0dXJuIFt7XG4gICAgICAgICAgICBwZXJtT3JkZXI6IFtdLFxuICAgICAgICAgICAgZG5hOiBkbmFcbiAgICAgICAgICB9XTtcbn1cblxuZnVuY3Rpb24gbWFrZVVuc2FmZSQxKHBlcm1PcmRlciwgZG5hKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgcGVybU9yZGVyOiBwZXJtT3JkZXIsXG4gICAgICAgICAgZG5hOiBkbmFcbiAgICAgICAgfTtcbn1cblxudmFyIFBlcnNwZWN0aXZlID0ge1xuICBnZXRQZXJtT3JkZXI6IGdldFBlcm1PcmRlcixcbiAgZ2V0RG5hOiBnZXREbmEsXG4gIGlzVmFsaWRQZXJtT3JkZXI6IGlzVmFsaWRQZXJtT3JkZXIsXG4gIHBlcm11dGU6IHBlcm11dGUsXG4gIHBlcm11dGVBbGw6IHBlcm11dGVBbGwsXG4gIG1ha2VVbnNhZmU6IG1ha2VVbnNhZmUkMVxufTtcblxuZnVuY3Rpb24gaW52KGRuYSkge1xuICBpZiAoQ2FtbF9vYmouY2FtbF9lcXVhbChkbmEsIFtdKSkge1xuICAgIHJldHVybiBbQ2FsYyRGb3JtZm9ybS5Db25zdC5pbnYoLyogTiAqLzApXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZG5hLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LmludihjKTtcbiAgICAgICAgICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsKGRuYV9hLCBkbmFfYikge1xuICB2YXIgbGVuX2EgPSBkbmFfYS5sZW5ndGg7XG4gIHZhciBsZW5fYiA9IGRuYV9iLmxlbmd0aDtcbiAgdmFyIG1hdGNoID0gbGVuX2EgPD0gbGVuX2IgPyBbXG4gICAgICBkbmFfYSxcbiAgICAgIGRuYV9iLFxuICAgICAgbGVuX2EsXG4gICAgICBsZW5fYlxuICAgIF0gOiBbXG4gICAgICBkbmFfYixcbiAgICAgIGRuYV9hLFxuICAgICAgbGVuX2IsXG4gICAgICBsZW5fYVxuICAgIF07XG4gIHZhciBzdXBMZW4gPSBtYXRjaFszXTtcbiAgdmFyIHN1YkxlbiA9IG1hdGNoWzJdO1xuICB2YXIgc3VwID0gbWF0Y2hbMV07XG4gIHZhciByZXN1bHQgPSBCZWx0X0FycmF5LnppcEJ5KHN1cCwgbWF0Y2hbMF0sIChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LnJlbChhLCBiKTtcbiAgICAgICAgfSkpO1xuICBpZiAoc3ViTGVuID09PSBzdXBMZW4pIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBCZWx0X0FycmF5LmNvbmNhdChyZXN1bHQsIEJlbHRfQXJyYXkuc2xpY2Uoc3VwLCBzdWJMZW4sIHN1cExlbikpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGdldCAsXG4gIGdldFVuc2FmZSAsXG4gIGdldExlbmd0aCAsXG4gIGdldFNpemUgLFxuICBpc1ZhbGlkTGVuZ3RoICxcbiAgbWFrZSAsXG4gIG1ha2VVbnNhZmUgLFxuICBnZW5SYW5kb20gLFxuICB0b0FycmF5ICxcbiAgcmVvcmRlclRvTk1VSSAsXG4gIGZyb21JbnRBcnIgLFxuICBmcm9tSW50QXJyVW5zYWZlICxcbiAgZnJvbVN0ckFyciAsXG4gIGZyb21TdHJBcnJVbnNhZmUgLFxuICBzaG93ICxcbiAgcmF3ICxcbiAgUGVyc3BlY3RpdmUgLFxuICBpbnYgLFxuICByZWwgLFxuICBcbn1cbi8qIEhlbHBlci1Gb3JtZm9ybSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IFJlU2NyaXB0LCBQTEVBU0UgRURJVCBXSVRIIENBUkVcblxuaW1wb3J0ICogYXMgSnNfbGlzdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9qc19saXN0LmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX29iaiBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9jYW1sX29iai5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9MaXN0IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2JlbHRfTGlzdC5qc1wiO1xuaW1wb3J0ICogYXMgQ2FsYyRGb3JtZm9ybSBmcm9tIFwiLi9DYWxjLmJzLmpzXCI7XG5cbmZ1bmN0aW9uIHNpZ1RvSnMocGFyYW0pIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICByZUVudHJ5UGFyOiBwYXJhbS5yZUVudHJ5UGFyLFxuICAgICAgICAgIHVubWFya2VkOiBwYXJhbS51bm1hcmtlZCxcbiAgICAgICAgICBpbnRlcnByOiBwYXJhbS5pbnRlcnByXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHNpZ0Zyb21KcyhwYXJhbSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIHJlRW50cnlQYXI6IHBhcmFtLnJlRW50cnlQYXIsXG4gICAgICAgICAgdW5tYXJrZWQ6IHBhcmFtLnVubWFya2VkLFxuICAgICAgICAgIGludGVycHI6IHBhcmFtLmludGVycHJcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gbW5Gcm9tU3RyKHN0cikge1xuICBzd2l0Y2ggKHN0cikge1xuICAgIGNhc2UgXCJSZWNJZGVudFwiIDpcbiAgICBjYXNlIFwiUmVjdXJzaXZlIElkZW50aXR5XCIgOlxuICAgIGNhc2UgXCJpZFwiIDpcbiAgICBjYXNlIFwicklkXCIgOlxuICAgIGNhc2UgXCJyZWNJZGVudFwiIDpcbiAgICAgICAgcmV0dXJuIC8qIFJlY0lkZW50ICovMTtcbiAgICBjYXNlIFwiUmVjSW5zdHJcIiA6XG4gICAgY2FzZSBcIlJlY3Vyc2l2ZSBJbnN0cnVjdGlvblwiIDpcbiAgICBjYXNlIFwiaW5cIiA6XG4gICAgY2FzZSBcInJJblwiIDpcbiAgICBjYXNlIFwicmVjSW5zdHJcIiA6XG4gICAgICAgIHJldHVybiAvKiBSZWNJbnN0ciAqLzA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IHtcbiAgICAgICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd1NpZyhwYXJhbSkge1xuICB2YXIgbWF0Y2g7XG4gIHN3aXRjaCAocGFyYW0ucmVFbnRyeVBhcikge1xuICAgIGNhc2UgLyogRXZlbiAqLzAgOlxuICAgICAgICBtYXRjaCA9IFtcbiAgICAgICAgICBcIi4uXCIsXG4gICAgICAgICAgXCJcIlxuICAgICAgICBdO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIC8qIE9kZCAqLzEgOlxuICAgICAgICBtYXRjaCA9IFtcbiAgICAgICAgICBcIi4uXCIsXG4gICAgICAgICAgXCIuXCJcbiAgICAgICAgXTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAvKiBBbnkgKi8yIDpcbiAgICAgICAgbWF0Y2ggPSBbXG4gICAgICAgICAgXCJcIixcbiAgICAgICAgICBcIlwiXG4gICAgICAgIF07XG4gICAgICAgIGJyZWFrO1xuICAgIFxuICB9XG4gIHZhciByZU1hcmsgPSBwYXJhbS5pbnRlcnByID8gXCJAflwiIDogXCJAXCI7XG4gIHJldHVybiBtYXRjaFswXSArIHJlTWFyayArIG1hdGNoWzFdICsgKFxuICAgICAgICAgIHBhcmFtLnVubWFya2VkID8gXCJfXCIgOiBcIlwiXG4gICAgICAgICk7XG59XG5cbmZ1bmN0aW9uIHNob3dNTihtbikge1xuICBpZiAobW4pIHtcbiAgICByZXR1cm4gXCJyZWN1cnNpdmUgaWRlbnRpdHlcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJyZWN1cnNpdmUgaW5zdHJ1Y3Rpb25cIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93VVR5cGUodVR5cGUpIHtcbiAgaWYgKHVUeXBlKSB7XG4gICAgcmV0dXJuIFwiaUZPUk1cIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJ1Rk9STVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFVUeXBlKHBhcmFtLCByZXNQYXIpIHtcbiAgc3dpdGNoIChyZXNQYXIpIHtcbiAgICBjYXNlIC8qIEV2ZW4gKi8wIDpcbiAgICAgICAgaWYgKHBhcmFtLnVubWFya2VkKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIElGT1JNICovMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gLyogVUZPUk0gKi8wO1xuICAgICAgICB9XG4gICAgY2FzZSAvKiBPZGQgKi8xIDpcbiAgICAgICAgc3dpdGNoIChwYXJhbS5yZUVudHJ5UGFyKSB7XG4gICAgICAgICAgY2FzZSAvKiBFdmVuICovMCA6XG4gICAgICAgICAgICAgIHJldHVybiAvKiBVRk9STSAqLzA7XG4gICAgICAgICAgY2FzZSAvKiBPZGQgKi8xIDpcbiAgICAgICAgICBjYXNlIC8qIEFueSAqLzIgOlxuICAgICAgICAgICAgICByZXR1cm4gLyogSUZPUk0gKi8xO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgY2FzZSAvKiBBbnkgKi8yIDpcbiAgICAgICAgcmV0dXJuIC8qIElGT1JNICovMTtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjUkUocGFyYW0sIHBhcmFtJDEpIHtcbiAgdmFyIG5lc3RlZEMgPSBwYXJhbSQxLlZBTDtcbiAgdmFyIGludGVycHIgPSBwYXJhbS5pbnRlcnByO1xuICB2YXIgdW5tYXJrZWQgPSBwYXJhbS51bm1hcmtlZDtcbiAgdmFyIHJlRW50cnlQYXIgPSBwYXJhbS5yZUVudHJ5UGFyO1xuICB2YXIgcmVzUGFyID0gbmVzdGVkQyA9PT0gLyogW10gKi8wIHx8IEpzX2xpc3QubGVuZ3RoKG5lc3RlZEMpICUgMiAhPT0gMCA/IC8qIE9kZCAqLzEgOiAvKiBFdmVuICovMDtcbiAgdmFyIHJlVHlwZSA9IGdldFVUeXBlKHtcbiAgICAgICAgcmVFbnRyeVBhcjogcmVFbnRyeVBhcixcbiAgICAgICAgdW5tYXJrZWQ6IHVubWFya2VkLFxuICAgICAgICBpbnRlcnByOiBpbnRlcnByXG4gICAgICB9LCByZXNQYXIpO1xuICBpZiAobmVzdGVkQyA9PT0gLyogW10gKi8wIHx8IEJlbHRfTGlzdC5ldmVyeShuZXN0ZWRDLCAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBjID09PSAvKiBOICovMDtcbiAgICAgICAgICB9KSkpIHtcbiAgICBpZiAocmVUeXBlKSB7XG4gICAgICByZXR1cm4gLyogSSAqLzI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAvKiBVICovMTtcbiAgICB9XG4gIH1cbiAgdmFyIG5lc3RlZEMkMSA9ICF1bm1hcmtlZCAmJiByZXNQYXIgPT09IC8qIE9kZCAqLzEgJiYgcmVFbnRyeVBhciA9PT0gLyogRXZlbiAqLzAgPyBCZWx0X0xpc3QuY29uY2F0KG5lc3RlZEMsIG5lc3RlZEMpIDogbmVzdGVkQztcbiAgaWYgKEJlbHRfTGlzdC5zb21lKG5lc3RlZEMkMSwgKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gYyA9PT0gLyogTSAqLzM7XG4gICAgICAgICAgfSkpIHx8IEJlbHRfTGlzdC5zb21lKG5lc3RlZEMkMSwgKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gYyA9PT0gLyogVSAqLzE7XG4gICAgICAgICAgfSkpICYmIEJlbHRfTGlzdC5zb21lKG5lc3RlZEMkMSwgKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gYyA9PT0gLyogSSAqLzI7XG4gICAgICAgICAgfSkpKSB7XG4gICAgdmFyIHIgPSBDYWxjJEZvcm1mb3JtLk5lc3RlZC5jYWxjUihDYWxjJEZvcm1mb3JtLk5lc3RlZC5yZWR1Y2VSKHtcbiAgICAgICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgICAgIFZBTDogbmVzdGVkQyQxXG4gICAgICAgICAgICB9KSk7XG4gICAgaWYgKHVubWFya2VkKSB7XG4gICAgICByZXR1cm4gQ2FsYyRGb3JtZm9ybS5Db25zdC5pbnYocik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByO1xuICAgIH1cbiAgfVxuICB2YXIgbWF0Y2ggPSBDYWxjJEZvcm1mb3JtLk5lc3RlZC5yZWR1Y2VSKHtcbiAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgIFZBTDogbmVzdGVkQyQxXG4gICAgICB9KTtcbiAgdmFyIG5lc3RlZEMkMiA9IG1hdGNoLlZBTDtcbiAgdmFyIGJvdHRvbV9jID0gSnNfbGlzdC5oZChuZXN0ZWRDJDIpO1xuICBpZiAoaW50ZXJwciA9PT0gLyogUmVjSWRlbnQgKi8xICYmICF1bm1hcmtlZCAmJiBDYW1sX29iai5jYW1sX2VxdWFsKGJvdHRvbV9jLCAvKiBOICovMCkpIHtcbiAgICBpZiAobmVzdGVkQyQyKSB7XG4gICAgICB2YXIgbWF0Y2gkMSA9IG5lc3RlZEMkMi50bDtcbiAgICAgIGlmIChtYXRjaCQxKSB7XG4gICAgICAgIHZhciBjID0gbWF0Y2gkMS5oZDtcbiAgICAgICAgaWYgKHJlVHlwZSkge1xuICAgICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LnJlbCgvKiBJICovMiwgYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3QucmVsKC8qIFUgKi8xLCBjKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cge1xuICAgICAgICAgICAgUkVfRVhOX0lEOiBcIkFzc2VydF9mYWlsdXJlXCIsXG4gICAgICAgICAgICBfMTogW1xuICAgICAgICAgICAgICBcIlNlcVJFLnJlc1wiLFxuICAgICAgICAgICAgICAxNDQsXG4gICAgICAgICAgICAgIDU4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgfTtcbiAgICB9XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJBc3NlcnRfZmFpbHVyZVwiLFxuICAgICAgICAgIF8xOiBbXG4gICAgICAgICAgICBcIlNlcVJFLnJlc1wiLFxuICAgICAgICAgICAgMTQ0LFxuICAgICAgICAgICAgNThcbiAgICAgICAgICBdLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIGlmIChpbnRlcnByID09PSAvKiBSZWNJZGVudCAqLzEgJiYgdW5tYXJrZWQgJiYgQ2FtbF9vYmouY2FtbF9ub3RlcXVhbChib3R0b21fYywgLyogTiAqLzApKSB7XG4gICAgaWYgKGJvdHRvbV9jICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChyZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3QucmVsKC8qIEkgKi8yLCBib3R0b21fYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gQ2FsYyRGb3JtZm9ybS5Db25zdC5yZWwoLyogVSAqLzEsIGJvdHRvbV9jKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJBc3NlcnRfZmFpbHVyZVwiLFxuICAgICAgICAgIF8xOiBbXG4gICAgICAgICAgICBcIlNlcVJFLnJlc1wiLFxuICAgICAgICAgICAgMTYzLFxuICAgICAgICAgICAgNThcbiAgICAgICAgICBdLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIGlmICh1bm1hcmtlZCkge1xuICAgIGlmIChuZXN0ZWRDJDIpIHtcbiAgICAgIHZhciBtYXRjaCQyID0gbmVzdGVkQyQyLmhkO1xuICAgICAgaWYgKG1hdGNoJDIgIT09IDApIHtcbiAgICAgICAgaWYgKG1hdGNoJDIgPCAzKSB7XG4gICAgICAgICAgdmFyIG1hdGNoJDMgPSBuZXN0ZWRDJDIudGw7XG4gICAgICAgICAgaWYgKCFtYXRjaCQzKSB7XG4gICAgICAgICAgICBpZiAocmVFbnRyeVBhciA9PT0gLyogRXZlbiAqLzApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWF0Y2gkMy5oZCA9PT0gMCAmJiAhbWF0Y2gkMy50bCkge1xuICAgICAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtYXRjaCQ0ID0gbmVzdGVkQyQyLnRsO1xuICAgICAgICBpZiAobWF0Y2gkNCAmJiAobWF0Y2gkNC5oZCAtIDEgPj4+IDApIDw9IDEpIHtcbiAgICAgICAgICB2YXIgbWF0Y2gkNSA9IG1hdGNoJDQudGw7XG4gICAgICAgICAgaWYgKCFtYXRjaCQ1KSB7XG4gICAgICAgICAgICByZXR1cm4gLyogSSAqLzI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtYXRjaCQ1LmhkID09PSAwICYmICFtYXRjaCQ1LnRsKSB7XG4gICAgICAgICAgICBpZiAocmVFbnRyeVBhciA9PT0gLyogRXZlbiAqLzApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJBc3NlcnRfZmFpbHVyZVwiLFxuICAgICAgICAgIF8xOiBbXG4gICAgICAgICAgICBcIlNlcVJFLnJlc1wiLFxuICAgICAgICAgICAgMTk4LFxuICAgICAgICAgICAgNjBcbiAgICAgICAgICBdLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIGlmIChuZXN0ZWRDJDIpIHtcbiAgICB2YXIgbWF0Y2gkNiA9IG5lc3RlZEMkMi5oZDtcbiAgICBpZiAobWF0Y2gkNiAhPT0gMCkge1xuICAgICAgaWYgKG1hdGNoJDYgPCAzKSB7XG4gICAgICAgIHZhciBtYXRjaCQ3ID0gbmVzdGVkQyQyLnRsO1xuICAgICAgICBpZiAoIW1hdGNoJDcpIHtcbiAgICAgICAgICBpZiAocmVFbnRyeVBhciA9PT0gLyogRXZlbiAqLzApIHtcbiAgICAgICAgICAgIHJldHVybiAvKiBVICovMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2gkNy5oZCA9PT0gMCAmJiAhbWF0Y2gkNy50bCkge1xuICAgICAgICAgIHJldHVybiAvKiBVICovMTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWF0Y2gkOCA9IG5lc3RlZEMkMi50bDtcbiAgICAgIGlmIChtYXRjaCQ4ICYmIChtYXRjaCQ4LmhkIC0gMSA+Pj4gMCkgPD0gMSkge1xuICAgICAgICB2YXIgbWF0Y2gkOSA9IG1hdGNoJDgudGw7XG4gICAgICAgIGlmICghbWF0Y2gkOSkge1xuICAgICAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2gkOS5oZCA9PT0gMCAmJiAhbWF0Y2gkOS50bCkge1xuICAgICAgICAgIGlmIChyZUVudHJ5UGFyID09PSAvKiBFdmVuICovMCkge1xuICAgICAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLyogVSAqLzE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgfVxuICB9XG4gIHRocm93IHtcbiAgICAgICAgUkVfRVhOX0lEOiBcIkFzc2VydF9mYWlsdXJlXCIsXG4gICAgICAgIF8xOiBbXG4gICAgICAgICAgXCJTZXFSRS5yZXNcIixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjBcbiAgICAgICAgXSxcbiAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICB9O1xufVxuXG52YXIgcmVjSW5zdHIgPSAvKiBSZWNJbnN0ciAqLzA7XG5cbnZhciByZWNJZGVudCA9IC8qIFJlY0lkZW50ICovMTtcblxuZXhwb3J0IHtcbiAgcmVjSW5zdHIgLFxuICByZWNJZGVudCAsXG4gIHNpZ1RvSnMgLFxuICBzaWdGcm9tSnMgLFxuICBtbkZyb21TdHIgLFxuICBzaG93U2lnICxcbiAgc2hvd01OICxcbiAgc2hvd1VUeXBlICxcbiAgZ2V0VVR5cGUgLFxuICBjYWxjUkUgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgUmVTY3JpcHQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9JZCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0lkLmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X1NldCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X1NldC5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vYmogZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvY2FtbF9vYmouanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfTGlzdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0xpc3QuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfQXJyYXkgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvYmVsdF9BcnJheS5qc1wiO1xuaW1wb3J0ICogYXMgRE5BJEZvcm1mb3JtIGZyb20gXCIuLi9jYWxjL0ROQS5icy5qc1wiO1xuaW1wb3J0ICogYXMgQ2FsYyRGb3JtZm9ybSBmcm9tIFwiLi4vY2FsYy9DYWxjLmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBTZXFSRSRGb3JtZm9ybSBmcm9tIFwiLi4vY2FsYy9TZXFSRS5icy5qc1wiO1xuaW1wb3J0ICogYXMgSGVscGVyJEZvcm1mb3JtIGZyb20gXCIuLi8uLi91dGlscy9IZWxwZXIuYnMuanNcIjtcblxudmFyIGxibENsYXNzX3VucXVvdGVkID0gW1xuICBcImFcIixcbiAgXCJiXCIsXG4gIFwiY1wiLFxuICBcImRcIixcbiAgXCJlXCIsXG4gIFwiZlwiLFxuICBcImdcIixcbiAgXCJoXCIsXG4gIFwiaVwiLFxuICBcImpcIixcbiAgXCJrXCIsXG4gIFwibFwiLFxuICBcIm1cIixcbiAgXCJuXCIsXG4gIFwib1wiLFxuICBcInBcIixcbiAgXCJxXCIsXG4gIFwiclwiLFxuICBcInNcIixcbiAgXCJ0XCIsXG4gIFwidVwiLFxuICBcInZcIixcbiAgXCJ3XCIsXG4gIFwieFwiLFxuICBcInlcIixcbiAgXCJ6XCIsXG4gIFwizrFcIixcbiAgXCLOslwiLFxuICBcIs6zXCIsXG4gIFwizrRcIixcbiAgXCLOtVwiLFxuICBcIs62XCIsXG4gIFwizrdcIixcbiAgXCLOuFwiLFxuICBcIs65XCIsXG4gIFwizrpcIixcbiAgXCLOu1wiLFxuICBcIs68XCIsXG4gIFwizr1cIixcbiAgXCLOvlwiLFxuICBcIs6/XCIsXG4gIFwiz4BcIixcbiAgXCLPgVwiLFxuICBcIs+CXCIsXG4gIFwiz4NcIixcbiAgXCLPhFwiLFxuICBcIs+FXCIsXG4gIFwiz4ZcIixcbiAgXCLPh1wiLFxuICBcIs+IXCIsXG4gIFwiz4lcIlxuXTtcblxudmFyIGlkeENsYXNzX3VucXVvdGVkID0gQmVsdF9BcnJheS5jb25jYXQoW1xuICAgICAgXCIwXCIsXG4gICAgICBcIjFcIixcbiAgICAgIFwiMlwiLFxuICAgICAgXCIzXCIsXG4gICAgICBcIjRcIixcbiAgICAgIFwiNVwiLFxuICAgICAgXCI2XCIsXG4gICAgICBcIjdcIixcbiAgICAgIFwiOFwiLFxuICAgICAgXCI5XCJcbiAgICBdLCBsYmxDbGFzc191bnF1b3RlZCk7XG5cbmZ1bmN0aW9uIG1hcmsoZXhwcikge1xuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgXzA6IGV4cHJcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gY1ZhbChjKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgVEFHOiAvKiBDVmFsICovMSxcbiAgICAgICAgICBfMDogY1xuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBzZXFSRShzaWcsIHNlcSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogU2VxUkUgKi8yLFxuICAgICAgICAgIF8wOiBzaWcsXG4gICAgICAgICAgXzE6IHNlcVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiB1bmNsKGxibCkge1xuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogVW5jbCAqLzMsXG4gICAgICAgICAgXzA6IGxibFxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBmVmFyKGxibCkge1xuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgXzA6IGxibFxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBmRG5hKGZkbmEpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBUQUc6IC8qIEZEbmEgKi81LFxuICAgICAgICAgIF8wOiBmZG5hXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGlzX3VucXVvdGVkVmFyKGxibCkge1xuICB2YXIgbGVuID0gbGJsLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMyAmJiBsYmxbMV0gPT09IFwiX1wiKSB7XG4gICAgaWYgKGxibENsYXNzX3VucXVvdGVkLmluY2x1ZGVzKGxibFswXSkpIHtcbiAgICAgIHJldHVybiBpZHhDbGFzc191bnF1b3RlZC5pbmNsdWRlcyhsYmxbMl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA9PT0gMSkge1xuICAgIHJldHVybiBsYmxDbGFzc191bnF1b3RlZC5pbmNsdWRlcyhsYmxbMF0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93Rm9ybShzb3J0Tk1VSU9wdCwgZm9ybSkge1xuICB2YXIgc29ydE5NVUkgPSBzb3J0Tk1VSU9wdCAhPT0gdW5kZWZpbmVkID8gc29ydE5NVUlPcHQgOiBmYWxzZTtcbiAgc3dpdGNoIChmb3JtLlRBRyB8IDApIHtcbiAgICBjYXNlIC8qIE1hcmsgKi8wIDpcbiAgICAgICAgcmV0dXJuIFwiKFwiICsgc2hvd0V4cHIoc29ydE5NVUksIGZvcm0uXzApICsgXCIpXCI7XG4gICAgY2FzZSAvKiBDVmFsICovMSA6XG4gICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LnNob3coZm9ybS5fMCk7XG4gICAgY2FzZSAvKiBTZXFSRSAqLzIgOlxuICAgICAgICByZXR1cm4gXCJ7XCIgKyBTZXFSRSRGb3JtZm9ybS5zaG93U2lnKGZvcm0uXzApICsgXCIgXCIgKyBzaG93U2VxKHNvcnROTVVJLCBmb3JtLl8xKSArIFwifVwiO1xuICAgIGNhc2UgLyogVW5jbCAqLzMgOlxuICAgICAgICB2YXIgbGJsID0gZm9ybS5fMDtcbiAgICAgICAgcmV0dXJuIFwiL1wiICsgSGVscGVyJEZvcm1mb3JtLmNsZWFuU3RyKGxibCkgKyBcIi9cIjtcbiAgICBjYXNlIC8qIEZWYXIgKi80IDpcbiAgICAgICAgdmFyIGxibCQxID0gZm9ybS5fMDtcbiAgICAgICAgaWYgKGlzX3VucXVvdGVkVmFyKGxibCQxKSkge1xuICAgICAgICAgIHJldHVybiBIZWxwZXIkRm9ybWZvcm0uY2xlYW5TdHIobGJsJDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIlxcXCJcIiArIEhlbHBlciRGb3JtZm9ybS5jbGVhblN0cihsYmwkMSkgKyBcIlxcXCJcIjtcbiAgICAgICAgfVxuICAgIGNhc2UgLyogRkRuYSAqLzUgOlxuICAgICAgICByZXR1cm4gXCJbXCIgKyBzaG93RmRuYShzb3J0Tk1VSSwgZm9ybS5fMCkgKyBcIl1cIjtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93RXhwcihzb3J0Tk1VSU9wdCwgZXhwcikge1xuICB2YXIgc29ydE5NVUkgPSBzb3J0Tk1VSU9wdCAhPT0gdW5kZWZpbmVkID8gc29ydE5NVUlPcHQgOiBmYWxzZTtcbiAgcmV0dXJuIGV4cHIubWFwKGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dGb3JtKHNvcnROTVVJLCBmb3JtKTtcbiAgICAgICAgICAgICAgfSkuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gc2hvd1NlcShzb3J0Tk1VSU9wdCwgc2VxKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICByZXR1cm4gSGVscGVyJEZvcm1mb3JtLkxpc3RFeHRlbnNpb25zLmpvaW5XaXRoKEJlbHRfTGlzdC5tYXAoQmVsdF9MaXN0LnJldmVyc2Uoc2VxKSwgKGZ1bmN0aW9uIChleHByKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaG93RXhwcihzb3J0Tk1VSSwgZXhwcik7XG4gICAgICAgICAgICAgICAgICB9KSksIFwiLFwiKTtcbn1cblxuZnVuY3Rpb24gc2hvd0ZkbmEoJHN0YXJvcHQkc3RhciwgcGFyYW0pIHtcbiAgdmFyIHZhcnMgPSBwYXJhbS52YXJzO1xuICB2YXIgZm9ybSA9IHBhcmFtLmZvcm07XG4gIHZhciBzb3J0Tk1VSSA9ICRzdGFyb3B0JHN0YXIgIT09IHVuZGVmaW5lZCA/ICRzdGFyb3B0JHN0YXIgOiBmYWxzZTtcbiAgdmFyIGZvcm1TdHI7XG4gIGlmIChmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgdmFyc1N0ciA9IHZhcnMuam9pbihcIixcIik7XG4gICAgICBmb3JtU3RyID0gc2hvd0V4cHIoc29ydE5NVUksIGZvcm0pICsgXCIuW1wiICsgdmFyc1N0ciArIFwiXVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtU3RyID0gc2hvd0V4cHIoc29ydE5NVUksIGZvcm0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3JtU3RyID0gXCJcIjtcbiAgfVxuICByZXR1cm4gZm9ybVN0ciArIEROQSRGb3JtZm9ybS5zaG93KHNvcnROTVVJLCB1bmRlZmluZWQsIHBhcmFtLmRuYSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZUV4cHIocmVkdWNlckZuLCBpbml0LCBleHByKSB7XG4gIHJldHVybiBCZWx0X0FycmF5LnJlZHVjZShleHByLCBpbml0LCAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjYyA9IEN1cnJ5Ll8yKHJlZHVjZXJGbiwgcGFyYW0sIHBhcmFtJDEpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocGFyYW0kMS5UQUcgfCAwKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIC8qIE1hcmsgKi8wIDpcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVkdWNlRXhwcihyZWR1Y2VyRm4sIGFjYywgcGFyYW0kMS5fMCk7XG4gICAgICAgICAgICAgICAgICBjYXNlIC8qIFNlcVJFICovMiA6XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHNlcSA9IHBhcmFtJDEuXzE7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJlbHRfTGlzdC5yZWR1Y2Uoc2VxLCBhY2MsIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWR1Y2VFeHByKHJlZHVjZXJGbiwgcGFyYW0sIHBhcmFtJDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZShleHByLCByZWR1Y2VyRm4sIGluaXQpIHtcbiAgcmV0dXJuIHJlZHVjZUV4cHIocmVkdWNlckZuLCBpbml0LCBleHByKTtcbn1cblxuZnVuY3Rpb24gdG9WYXJGT1JNX2Zvcm0oZm9ybSkge1xuICBzd2l0Y2ggKGZvcm0uVEFHIHwgMCkge1xuICAgIGNhc2UgLyogTWFyayAqLzAgOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgICAgXzA6IGZvcm0uXzAubWFwKHRvVmFyRk9STV9mb3JtKVxuICAgICAgICAgICAgICB9O1xuICAgIGNhc2UgLyogQ1ZhbCAqLzEgOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFRBRzogLyogQ1ZhbCAqLzEsXG4gICAgICAgICAgICAgICAgXzA6IGZvcm0uXzBcbiAgICAgICAgICAgICAgfTtcbiAgICBjYXNlIC8qIFNlcVJFICovMiA6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRSAqLzIsXG4gICAgICAgICAgICAgICAgXzA6IGZvcm0uXzAsXG4gICAgICAgICAgICAgICAgXzE6IEJlbHRfTGlzdC5tYXAoZm9ybS5fMSwgKGZ1bmN0aW9uIChleHByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhwci5tYXAodG9WYXJGT1JNX2Zvcm0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICB9O1xuICAgIGNhc2UgLyogVW5jbCAqLzMgOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFRBRzogLyogVW5jbCAqLzMsXG4gICAgICAgICAgICAgICAgXzA6IGZvcm0uXzBcbiAgICAgICAgICAgICAgfTtcbiAgICBjYXNlIC8qIEZEbmEgKi81IDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBUQUc6IC8qIEZEbmEgKi81LFxuICAgICAgICAgICAgICAgIF8wOiB0b1ZhckZPUk1fZmRuYShmb3JtLl8wKVxuICAgICAgICAgICAgICB9O1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIHRvVmFyRk9STV9mZG5hKHBhcmFtKSB7XG4gIHZhciBmb3JtID0gcGFyYW0uZm9ybTtcbiAgdmFyIGZvcm1WYXIgPSBmb3JtICE9PSB1bmRlZmluZWQgPyBmb3JtLm1hcCh0b1ZhckZPUk1fZm9ybSkgOiB1bmRlZmluZWQ7XG4gIHJldHVybiB7XG4gICAgICAgICAgZG5hOiBwYXJhbS5kbmEsXG4gICAgICAgICAgZm9ybTogZm9ybVZhcixcbiAgICAgICAgICB2YXJzOiBwYXJhbS52YXJzXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHRvVmFyRk9STV9leHByKGV4cHIpIHtcbiAgcmV0dXJuIGV4cHIubWFwKHRvVmFyRk9STV9mb3JtKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlRXhwciQxKHJlZHVjZXJGbiwgaW5pdCwgZXhwcikge1xuICByZXR1cm4gQmVsdF9BcnJheS5yZWR1Y2UoZXhwciwgaW5pdCwgKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgICAgIHZhciBhY2MgPSBDdXJyeS5fMihyZWR1Y2VyRm4sIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcmFtJDEuVEFHIHwgMCkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAvKiBNYXJrICovMCA6XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZHVjZUV4cHIkMShyZWR1Y2VyRm4sIGFjYywgcGFyYW0kMS5fMCk7XG4gICAgICAgICAgICAgICAgICBjYXNlIC8qIFNlcVJFICovMiA6XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHNlcSA9IHBhcmFtJDEuXzE7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJlbHRfTGlzdC5yZWR1Y2Uoc2VxLCBhY2MsIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWR1Y2VFeHByJDEocmVkdWNlckZuLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlJDEoZXhwciwgcmVkdWNlckZuLCBpbml0KSB7XG4gIHJldHVybiByZWR1Y2VFeHByJDEocmVkdWNlckZuLCBpbml0LCBleHByKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFycyhleHByKSB7XG4gIHZhciBjbXAgPSBDYW1sX29iai5jYW1sX2NvbXBhcmU7XG4gIHZhciBWYXJDbXAgPSBCZWx0X0lkLk1ha2VDb21wYXJhYmxlKHtcbiAgICAgICAgY21wOiBjbXBcbiAgICAgIH0pO1xuICB2YXIgX2dldFZhcnMgPSBmdW5jdGlvbiAodmFycywgZm9ybSkge1xuICAgIGlmIChmb3JtLlRBRyA9PT0gLyogRlZhciAqLzQpIHtcbiAgICAgIHJldHVybiBCZWx0X1NldC5hZGQodmFycywgZm9ybS5fMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YXJzO1xuICAgIH1cbiAgfTtcbiAgdmFyIGluaXQgPSBCZWx0X1NldC5tYWtlKFZhckNtcCk7XG4gIHJldHVybiBCZWx0X1NldC50b0FycmF5KHJlZHVjZUV4cHIkMShfZ2V0VmFycywgaW5pdCwgZXhwcikpO1xufVxuXG5mdW5jdGlvbiBjb3VudFZhcnMoZXhwcikge1xuICB2YXIgX2NvdW50VmFycyA9IGZ1bmN0aW9uIChuLCBmb3JtKSB7XG4gICAgaWYgKGZvcm0uVEFHID09PSAvKiBGVmFyICovNCkge1xuICAgICAgcmV0dXJuIG4gKyAxIHwgMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG47XG4gICAgfVxuICB9O1xuICByZXR1cm4gcmVkdWNlRXhwciQxKF9jb3VudFZhcnMsIDAsIGV4cHIpO1xufVxuXG5mdW5jdGlvbiBzaG93U3VidHJlZShzdWJ0cmVlKSB7XG4gIGlmIChzdWJ0cmVlLlRBRyA9PT0gLyogQnJhbmNoICovMCkge1xuICAgIHJldHVybiBcInsgaW5kZXg6IFwiICsgc3VidHJlZS5pbmRleC5qb2luKFwiXCIpICsgXCIsIGZvcm06ICdcIiArIHNob3dGb3JtKHVuZGVmaW5lZCwgc3VidHJlZS5mb3JtKSArIFwiJywgY2hpbGRyZW46IFtcIiArIHN1YnRyZWUuY2hpbGRyZW4ubWFwKHNob3dTdWJ0cmVlKS5qb2luKFwiLCBcIikgKyBcIl0gfVwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcInsgaW5kZXg6IFwiICsgc3VidHJlZS5pbmRleC5qb2luKFwiXCIpICsgXCIsIGZvcm06ICdcIiArIHNob3dGb3JtKHVuZGVmaW5lZCwgc3VidHJlZS5mb3JtKSArIFwiJyB9XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdyhwYXJhbSkge1xuICByZXR1cm4gXCJ7IHJvb3QsIGZvcm06ICdcIiArIHNob3dFeHByKHVuZGVmaW5lZCwgcGFyYW0uZm9ybSkgKyBcIicsIGNoaWxkcmVuOiBbXCIgKyBwYXJhbS5jaGlsZHJlbi5tYXAoc2hvd1N1YnRyZWUpLmpvaW4oXCIsIFwiKSArIFwiXSB9XCI7XG59XG5cbmZ1bmN0aW9uIHBhcnNlU3VidHJlZShmb3JtLCBpbmRleCkge1xuICBpZiAoZm9ybS5UQUcgPT09IC8qIE1hcmsgKi8wKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFRBRzogLyogQnJhbmNoICovMCxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGZvcm06IGZvcm0sXG4gICAgICAgICAgICBjaGlsZHJlbjogZm9ybS5fMC5tYXAoZnVuY3Rpb24gKGNudCwgaSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlU3VidHJlZShjbnQsIGluZGV4LmNvbmNhdChbaV0pKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFRBRzogLyogTGVhZiAqLzEsXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICBmb3JtOiBmb3JtXG4gICAgICAgICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZShleHByKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgZm9ybTogZXhwcixcbiAgICAgICAgICBjaGlsZHJlbjogZXhwci5tYXAoZnVuY3Rpb24gKGNudCwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZVN1YnRyZWUoY250LCBbaV0pO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICB9O1xufVxuXG52YXIgdGVzdFRyZWVzID0gW1xuICB7XG4gICAgZm9ybTogW10sXG4gICAgY2hpbGRyZW46IFtdXG4gIH0sXG4gIHtcbiAgICBmb3JtOiBbe1xuICAgICAgICBUQUc6IC8qIENWYWwgKi8xLFxuICAgICAgICBfMDogLyogVSAqLzFcbiAgICAgIH1dLFxuICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICBUQUc6IC8qIExlYWYgKi8xLFxuICAgICAgICBpbmRleDogWzBdLFxuICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgVEFHOiAvKiBDVmFsICovMSxcbiAgICAgICAgICBfMDogLyogVSAqLzFcbiAgICAgICAgfVxuICAgICAgfV1cbiAgfSxcbiAge1xuICAgIGZvcm06IFt7XG4gICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgIF8wOiBbXVxuICAgICAgfV0sXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICAgIFRBRzogLyogQnJhbmNoICovMCxcbiAgICAgICAgaW5kZXg6IFswXSxcbiAgICAgICAgZm9ybToge1xuICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgXzA6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgfV1cbiAgfSxcbiAge1xuICAgIGZvcm06IFt7XG4gICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgIF8wOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgVEFHOiAvKiBDVmFsICovMSxcbiAgICAgICAgICAgIF8wOiAvKiBNICovM1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgIF8wOiBbXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfV0sXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICAgIFRBRzogLyogQnJhbmNoICovMCxcbiAgICAgICAgaW5kZXg6IFswXSxcbiAgICAgICAgZm9ybToge1xuICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgXzA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgVEFHOiAvKiBDVmFsICovMSxcbiAgICAgICAgICAgICAgXzA6IC8qIE0gKi8zXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgICBfMDogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgVEFHOiAvKiBMZWFmICovMSxcbiAgICAgICAgICAgIGluZGV4OiBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgIFRBRzogLyogQ1ZhbCAqLzEsXG4gICAgICAgICAgICAgIF8wOiAvKiBNICovM1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgVEFHOiAvKiBCcmFuY2ggKi8wLFxuICAgICAgICAgICAgaW5kZXg6IFtcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgXzA6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XVxuICB9XG5dO1xuXG5mdW5jdGlvbiBkbmFUb0ZPUk0oZG5hKSB7XG4gIHJldHVybiBbXTtcbn1cblxuZnVuY3Rpb24gdG9GT1JNKHBhcmFtKSB7XG4gIHJldHVybiBbXTtcbn1cblxuZnVuY3Rpb24gcGVybXV0ZShwYXJhbSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIGRuYTogcGFyYW0uZG5hLFxuICAgICAgICAgIGZvcm06IHBhcmFtLmZvcm0sXG4gICAgICAgICAgdmFyczogcGFyYW0udmFyc1xuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBwZXJzcGVjdGl2ZXMocGFyYW0pIHtcbiAgcmV0dXJuIFtdO1xufVxuXG52YXIgRm9ybUROQSA9IHtcbiAgc2hvdzogc2hvd0ZkbmEsXG4gIGRuYVRvRk9STTogZG5hVG9GT1JNLFxuICB0b0ZPUk06IHRvRk9STSxcbiAgcGVybXV0ZTogcGVybXV0ZSxcbiAgcGVyc3BlY3RpdmVzOiBwZXJzcGVjdGl2ZXNcbn07XG5cbmZ1bmN0aW9uIHRvRk9STXQoc2VxKSB7XG4gIGlmICghc2VxKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICBfMDogW11cbiAgICAgICAgICB9O1xuICB9XG4gIHZhciBzZXEkcCA9IHNlcS50bDtcbiAgdmFyIGV4cHIgPSBzZXEuaGQ7XG4gIGlmIChzZXEkcCkge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgXzA6IEJlbHRfQXJyYXkuY29uY2F0KGV4cHIsIFt0b0ZPUk10KHNlcSRwKV0pXG4gICAgICAgICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgIF8wOiBleHByXG4gICAgICAgICAgfTtcbiAgfVxufVxuXG52YXIgU2VxdWVuY2UgPSB7XG4gIHNob3c6IHNob3dTZXEsXG4gIHRvRk9STXQ6IHRvRk9STXRcbn07XG5cbnZhciBGT1JNX0NvbnN0Rk9STSA9IHtcbiAgcmVkdWNlOiByZWR1Y2UsXG4gIHRvVmFyRk9STTogdG9WYXJGT1JNX2V4cHJcbn07XG5cbnZhciBGT1JNX1ZhckZPUk0gPSB7XG4gIHJlZHVjZTogcmVkdWNlJDFcbn07XG5cbnZhciBGT1JNID0ge1xuICBtYXJrOiBtYXJrLFxuICBjVmFsOiBjVmFsLFxuICBzZXFSRTogc2VxUkUsXG4gIHVuY2w6IHVuY2wsXG4gIGZWYXI6IGZWYXIsXG4gIGZEbmE6IGZEbmEsXG4gIHNob3c6IHNob3dFeHByLFxuICBDb25zdEZPUk06IEZPUk1fQ29uc3RGT1JNLFxuICBWYXJGT1JNOiBGT1JNX1ZhckZPUk0sXG4gIGdldFZhcnM6IGdldFZhcnMsXG4gIGNvdW50VmFyczogY291bnRWYXJzXG59O1xuXG52YXIgRGVwdGhUcmVlID0ge1xuICBzaG93OiBzaG93LFxuICBwYXJzZTogcGFyc2UsXG4gIHRlc3RUcmVlczogdGVzdFRyZWVzXG59O1xuXG5leHBvcnQge1xuICBsYmxDbGFzc191bnF1b3RlZCAsXG4gIGlkeENsYXNzX3VucXVvdGVkICxcbiAgRk9STSAsXG4gIERlcHRoVHJlZSAsXG4gIEZvcm1ETkEgLFxuICBTZXF1ZW5jZSAsXG4gIFxufVxuLyogaWR4Q2xhc3NfdW5xdW90ZWQgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBSZVNjcmlwdCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG5cbmltcG9ydCAqIGFzIEJlbHRfTGlzdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0xpc3QuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfQXJyYXkgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvYmVsdF9BcnJheS5qc1wiO1xuaW1wb3J0ICogYXMgRE5BJEZvcm1mb3JtIGZyb20gXCIuLi9jYWxjL0ROQS5icy5qc1wiO1xuaW1wb3J0ICogYXMgQ2FsYyRGb3JtZm9ybSBmcm9tIFwiLi4vY2FsYy9DYWxjLmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBFeHByJEZvcm1mb3JtIGZyb20gXCIuL0V4cHIuYnMuanNcIjtcbmltcG9ydCAqIGFzIFNlcVJFJEZvcm1mb3JtIGZyb20gXCIuLi9jYWxjL1NlcVJFLmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2V4Y2VwdGlvbnMgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvY2FtbF9leGNlcHRpb25zLmpzXCI7XG5cbmZ1bmN0aW9uIHRvU3RyaW5nKHRva2VuKSB7XG4gIGlmICh0eXBlb2YgdG9rZW4gPT09IFwibnVtYmVyXCIpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIC8qIE9wdFNlcCAqLzAgOlxuICAgICAgICAgIHJldHVybiBcInxcIjtcbiAgICAgIGNhc2UgLyogU2VxU2VwICovMSA6XG4gICAgICAgICAgcmV0dXJuIFwiLFwiO1xuICAgICAgY2FzZSAvKiBTZXFSRV9vcGVuICovMiA6XG4gICAgICAgICAgcmV0dXJuIFwib3BlblwiO1xuICAgICAgY2FzZSAvKiBTZXFSRV9hbHQgKi8zIDpcbiAgICAgICAgICByZXR1cm4gXCJhbHRcIjtcbiAgICAgIGNhc2UgLyogRXhwclNlcCAqLzQgOlxuICAgICAgICAgIHJldHVybiBcIi5cIjtcbiAgICAgIFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHRva2VuLlRBRyB8IDApIHtcbiAgICAgIGNhc2UgLyogTWFyayAqLzAgOlxuICAgICAgICAgIGlmICh0b2tlbi5fMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiKVwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCIoXCI7XG4gICAgICAgICAgfVxuICAgICAgY2FzZSAvKiBTZXFSRSAqLzEgOlxuICAgICAgICAgIGlmICh0b2tlbi5fMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwifVwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ7XCI7XG4gICAgICAgICAgfVxuICAgICAgY2FzZSAvKiBDb25zdCAqLzIgOlxuICAgICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LnNob3codG9rZW4uXzApO1xuICAgICAgY2FzZSAvKiBWYXIgKi8zIDpcbiAgICAgICAgICB2YXIgbGJsID0gdG9rZW4uXzA7XG4gICAgICAgICAgaWYgKGxibC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcXFwiXCIgKyBsYmwgKyBcIlxcXCJcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGxibDtcbiAgICAgICAgICB9XG4gICAgICBjYXNlIC8qIFVuY2wgKi80IDpcbiAgICAgICAgICByZXR1cm4gXCIvXCIgKyB0b2tlbi5fMCArIFwiL1wiO1xuICAgICAgY2FzZSAvKiBTZXFSRV9zaWcgKi81IDpcbiAgICAgICAgICByZXR1cm4gU2VxUkUkRm9ybWZvcm0uc2hvd1NpZyh0b2tlbi5fMCk7XG4gICAgICBjYXNlIC8qIFNlcVJFX3BhciAqLzYgOlxuICAgICAgICAgIHN3aXRjaCAodG9rZW4uXzApIHtcbiAgICAgICAgICAgIGNhc2UgLyogRXZlbiAqLzAgOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjJyXCI7XG4gICAgICAgICAgICBjYXNlIC8qIE9kZCAqLzEgOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjJyKzFcIjtcbiAgICAgICAgICAgIGNhc2UgLyogQW55ICovMiA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICBjYXNlIC8qIEROQSAqLzcgOlxuICAgICAgICAgIHJldHVybiBETkEkRm9ybWZvcm0uc2hvdyh0b2tlbi5zb3J0Tk1VSSwgdW5kZWZpbmVkLCB0b2tlbi5jb2RlKTtcbiAgICAgIGNhc2UgLyogVmFyTGlzdCAqLzggOlxuICAgICAgICAgIHJldHVybiBcIltcIiArIHRva2VuLl8wLmpvaW4oXCIsXCIpICsgXCJdXCI7XG4gICAgICBcbiAgICB9XG4gIH1cbn1cblxudmFyIFRva2VuID0ge1xuICB0b1N0cmluZzogdG9TdHJpbmdcbn07XG5cbnZhciBMZXhFcnJvciA9IC8qIEBfX1BVUkVfXyAqL0NhbWxfZXhjZXB0aW9ucy5jcmVhdGUoXCJGb3JtdWxhLUZvcm1mb3JtLkxleGVyLkxleEVycm9yXCIpO1xuXG5mdW5jdGlvbiBzY2FuTGFiZWwoZGVsaW0sIHN0cmVhbSkge1xuICB2YXIgX3NjYW4gPSBmdW5jdGlvbiAoX3N0cmVhbSwgX2xibCkge1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBsYmwgPSBfbGJsO1xuICAgICAgdmFyIHN0cmVhbSA9IF9zdHJlYW07XG4gICAgICBpZiAoc3RyZWFtKSB7XG4gICAgICAgIHZhciByID0gc3RyZWFtLnRsO1xuICAgICAgICB2YXIgZCA9IHN0cmVhbS5oZDtcbiAgICAgICAgaWYgKGQgPT09IGRlbGltKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIGxibCxcbiAgICAgICAgICAgICAgICAgIHJcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIF9sYmwgPSBsYmwgKyBkO1xuICAgICAgICBfc3RyZWFtID0gcjtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgfVxuICAgICAgdGhyb3cge1xuICAgICAgICAgICAgUkVfRVhOX0lEOiBMZXhFcnJvcixcbiAgICAgICAgICAgIG1zZzogXCJDbG9zaW5nICdcIiArIGRlbGltICsgXCInIGlzIG1pc3NpbmchXCIsXG4gICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICB9O1xuICAgIH07XG4gIH07XG4gIHZhciBtYXRjaCA9IF9zY2FuKHN0cmVhbSwgXCJcIik7XG4gIHZhciBsYmwgPSBtYXRjaFswXTtcbiAgaWYgKGxibCAhPT0gXCJcIikge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBsYmwsXG4gICAgICAgICAgICBtYXRjaFsxXVxuICAgICAgICAgIF07XG4gIH1cbiAgdGhyb3cge1xuICAgICAgICBSRV9FWE5fSUQ6IExleEVycm9yLFxuICAgICAgICBtc2c6IFwiTGFiZWwgc2hvdWxkIG5vdCBiZSBlbXB0eSFcIixcbiAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICB9O1xufVxuXG5mdW5jdGlvbiBzY2FuTGlzdChkZWxpbSwgc3RyZWFtKSB7XG4gIHZhciBfc2NhbiA9IGZ1bmN0aW9uIChfc3RyZWFtLCBhcnIpIHtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgc3RyZWFtID0gX3N0cmVhbTtcbiAgICAgIGlmIChzdHJlYW0pIHtcbiAgICAgICAgdmFyIGQgPSBzdHJlYW0uaGQ7XG4gICAgICAgIGlmIChkID09PSBcIiBcIikge1xuICAgICAgICAgIF9zdHJlYW0gPSBzdHJlYW0udGw7XG4gICAgICAgICAgY29udGludWUgO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkID09PSBkZWxpbSkge1xuICAgICAgICAgIGlmIChhcnIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICBSRV9FWE5fSUQ6IExleEVycm9yLFxuICAgICAgICAgICAgICAgICAgbXNnOiBcImNvbW1hLXNlcGFyYXRlZCBsaXN0IGl0ZW0gbXVzdCBub3QgYmUgZW1wdHkhXCIsXG4gICAgICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgYXJyLFxuICAgICAgICAgICAgICAgICAgc3RyZWFtLnRsXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZCA9PT0gXCJcXFwiXCIpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBzY2FuTGFiZWwoXCJcXFwiXCIsIHN0cmVhbS50bCk7XG4gICAgICAgICAgcmV0dXJuIF9zY2FuTmV4dChtYXRjaFsxXSwgQmVsdF9BcnJheS5jb25jYXQoYXJyLCBbbWF0Y2hbMF1dKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSBzdHJlYW0udGw7XG4gICAgICAgIGlmIChyICYmIHIuaGQgPT09IFwiX1wiKSB7XG4gICAgICAgICAgdmFyIG1hdGNoJDEgPSByLnRsO1xuICAgICAgICAgIGlmIChtYXRjaCQxKSB7XG4gICAgICAgICAgICB2YXIgaWR4ID0gbWF0Y2gkMS5oZDtcbiAgICAgICAgICAgIGlmIChFeHByJEZvcm1mb3JtLmxibENsYXNzX3VucXVvdGVkLmluY2x1ZGVzKGQpICYmIEV4cHIkRm9ybWZvcm0uaWR4Q2xhc3NfdW5xdW90ZWQuaW5jbHVkZXMoaWR4KSkge1xuICAgICAgICAgICAgICByZXR1cm4gX3NjYW5OZXh0KG1hdGNoJDEudGwsIEJlbHRfQXJyYXkuY29uY2F0KGFyciwgW2QgKyBcIl9cIiArIGlkeF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpZiAoRXhwciRGb3JtZm9ybS5sYmxDbGFzc191bnF1b3RlZC5pbmNsdWRlcyhkKSkge1xuICAgICAgICAgIHJldHVybiBfc2Nhbk5leHQociwgQmVsdF9BcnJheS5jb25jYXQoYXJyLCBbZF0pKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgIFJFX0VYTl9JRDogTGV4RXJyb3IsXG4gICAgICAgICAgICAgIG1zZzogXCJVbmFibGUgdG8gaW50ZXJwcmV0ICdcIiArIGQgKyBcIicuXCIsXG4gICAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRocm93IHtcbiAgICAgICAgICAgIFJFX0VYTl9JRDogTGV4RXJyb3IsXG4gICAgICAgICAgICBtc2c6IFwiQ2xvc2luZyAnXCIgKyBkZWxpbSArIFwiJyBpcyBtaXNzaW5nIVwiLFxuICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgfTtcbiAgICB9O1xuICB9O1xuICB2YXIgX3NjYW5OZXh0ID0gZnVuY3Rpb24gKF9zdHJlYW0sIGFycikge1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBzdHJlYW0gPSBfc3RyZWFtO1xuICAgICAgaWYgKHN0cmVhbSkge1xuICAgICAgICB2YXIgZCA9IHN0cmVhbS5oZDtcbiAgICAgICAgc3dpdGNoIChkKSB7XG4gICAgICAgICAgY2FzZSBcIiBcIiA6XG4gICAgICAgICAgICAgIF9zdHJlYW0gPSBzdHJlYW0udGw7XG4gICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICBjYXNlIFwiLFwiIDpcbiAgICAgICAgICAgICAgcmV0dXJuIF9zY2FuKHN0cmVhbS50bCwgYXJyKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYgKGQgPT09IGRlbGltKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgYXJyLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmVhbS50bFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IHtcbiAgICAgICAgICAgIFJFX0VYTl9JRDogTGV4RXJyb3IsXG4gICAgICAgICAgICBtc2c6IFwiRXhwZWN0ZWQgJywnIG9yICdcIiArIGRlbGltICsgXCInLlwiLFxuICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgfTtcbiAgICB9O1xuICB9O1xuICByZXR1cm4gX3NjYW4oc3RyZWFtLCBbXSk7XG59XG5cbmZ1bmN0aW9uIHNjYW5ETkEoc29ydE5NVUksIHN0cmVhbSkge1xuICB2YXIgX3NjYW4gPSBmdW5jdGlvbiAoX3N0cmVhbSwgX2Fycikge1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBhcnIgPSBfYXJyO1xuICAgICAgdmFyIHN0cmVhbSA9IF9zdHJlYW07XG4gICAgICBpZiAoIXN0cmVhbSkge1xuICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgIGFycixcbiAgICAgICAgICAgICAgICBzdHJlYW1cbiAgICAgICAgICAgICAgXTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAoc3RyZWFtLmhkKSB7XG4gICAgICAgIGNhc2UgXCIgXCIgOlxuICAgICAgICAgICAgX3N0cmVhbSA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgY2FzZSBcIjBcIiA6XG4gICAgICAgICAgICBfYXJyID0gQmVsdF9BcnJheS5jb25jYXQoYXJyLCBbMF0pO1xuICAgICAgICAgICAgX3N0cmVhbSA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgY2FzZSBcIjFcIiA6XG4gICAgICAgICAgICBfYXJyID0gQmVsdF9BcnJheS5jb25jYXQoYXJyLCBbMV0pO1xuICAgICAgICAgICAgX3N0cmVhbSA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgY2FzZSBcIjJcIiA6XG4gICAgICAgICAgICBfYXJyID0gQmVsdF9BcnJheS5jb25jYXQoYXJyLCBbMl0pO1xuICAgICAgICAgICAgX3N0cmVhbSA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgY2FzZSBcIjNcIiA6XG4gICAgICAgICAgICBfYXJyID0gQmVsdF9BcnJheS5jb25jYXQoYXJyLCBbM10pO1xuICAgICAgICAgICAgX3N0cmVhbSA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgYXJyLFxuICAgICAgICAgICAgICAgICAgc3RyZWFtXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgIH1cbiAgICB9O1xuICB9O1xuICB2YXIgbWF0Y2ggPSBfc2NhbihzdHJlYW0sIFtdKTtcbiAgdmFyIGRuYSA9IEROQSRGb3JtZm9ybS5mcm9tSW50QXJyKHNvcnROTVVJLCBtYXRjaFswXSk7XG4gIGlmIChkbmEgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBkbmEsXG4gICAgICAgICAgICBtYXRjaFsxXVxuICAgICAgICAgIF07XG4gIH1cbiAgdGhyb3cge1xuICAgICAgICBSRV9FWE5fSUQ6IExleEVycm9yLFxuICAgICAgICBtc2c6IFwiSW52YWxpZCBmb3JtRE5BIVwiLFxuICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHNjYW5GbWwoX3N0cmVhbSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHN0cmVhbSA9IF9zdHJlYW07XG4gICAgaWYgKCFzdHJlYW0pIHtcbiAgICAgIHJldHVybiAvKiBbXSAqLzA7XG4gICAgfVxuICAgIHZhciB1bmljb2RlID0gc3RyZWFtLmhkO1xuICAgIHZhciBleGl0ID0gMDtcbiAgICB2YXIgZXhpdCQxID0gMDtcbiAgICBzd2l0Y2ggKHVuaWNvZGUpIHtcbiAgICAgIGNhc2UgXCIgXCIgOlxuICAgICAgICAgIF9zdHJlYW0gPSBzdHJlYW0udGw7XG4gICAgICAgICAgY29udGludWUgO1xuICAgICAgY2FzZSBcIihcIiA6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgICAgICAgIF8wOiAvKiBPcGVuICovMFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHN0cmVhbS50bClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgY2FzZSBcIilcIiA6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgICAgICAgIF8wOiAvKiBDbG9zZSAqLzFcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChzdHJlYW0udGwpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgIGNhc2UgXCI6XCIgOlxuICAgICAgICAgIHZhciBtYXRjaCA9IHN0cmVhbS50bDtcbiAgICAgICAgICBpZiAobWF0Y2gpIHtcbiAgICAgICAgICAgIGlmIChtYXRjaC5oZCA9PT0gXCI6XCIpIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoJDEgPSBzY2FuRE5BKHRydWUsIG1hdGNoLnRsKTtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBETkEgKi83LFxuICAgICAgICAgICAgICAgICAgICAgICAgc29ydE5NVUk6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb2RlOiBtYXRjaCQxWzBdXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChtYXRjaCQxWzFdKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZXhpdCQxID0gMjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgZXhpdCQxID0gMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgYnJlYWs7XG4gICAgICBjYXNlIFwiSVwiIDpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgaGQ6IHtcbiAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBDb25zdCAqLzIsXG4gICAgICAgICAgICAgICAgICAgIF8wOiAvKiBJICovMlxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHN0cmVhbS50bClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgY2FzZSBcIk1cIiA6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgIFRBRzogLyogQ29uc3QgKi8yLFxuICAgICAgICAgICAgICAgICAgICBfMDogLyogTSAqLzNcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChzdHJlYW0udGwpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgIGNhc2UgXCJOXCIgOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIENvbnN0ICovMixcbiAgICAgICAgICAgICAgICAgICAgXzA6IC8qIE4gKi8wXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwoc3RyZWFtLnRsKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICBjYXNlIFwiVVwiIDpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgaGQ6IHtcbiAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBDb25zdCAqLzIsXG4gICAgICAgICAgICAgICAgICAgIF8wOiAvKiBVICovMVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHN0cmVhbS50bClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgY2FzZSBcIntcIiA6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkUgKi8xLFxuICAgICAgICAgICAgICAgICAgICBfMDogLyogT3BlbiAqLzBcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChzdHJlYW0udGwpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgIGNhc2UgXCJ9XCIgOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFICovMSxcbiAgICAgICAgICAgICAgICAgICAgXzA6IC8qIENsb3NlICovMVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHN0cmVhbS50bClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgZXhpdCQxID0gMjtcbiAgICB9XG4gICAgaWYgKGV4aXQkMSA9PT0gMikge1xuICAgICAgaWYgKHVuaWNvZGUgPT09IFwi4oGYXCIpIHtcbiAgICAgICAgdmFyIG1hdGNoJDIgPSBzY2FuRE5BKGZhbHNlLCBzdHJlYW0udGwpO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICBUQUc6IC8qIEROQSAqLzcsXG4gICAgICAgICAgICAgICAgICBzb3J0Tk1VSTogZmFsc2UsXG4gICAgICAgICAgICAgICAgICBjb2RlOiBtYXRjaCQyWzBdXG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChtYXRjaCQyWzFdKVxuICAgICAgICAgICAgICB9O1xuICAgICAgfVxuICAgICAgc3dpdGNoICh1bmljb2RlKSB7XG4gICAgICAgIGNhc2UgXCJcXFwiXCIgOlxuICAgICAgICAgICAgdmFyIG1hdGNoJDMgPSBzY2FuTGFiZWwoXCJcXFwiXCIsIHN0cmVhbS50bCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogVmFyICovMyxcbiAgICAgICAgICAgICAgICAgICAgICBfMDogbWF0Y2gkM1swXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChtYXRjaCQzWzFdKVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcIixcIiA6XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBoZDogLyogU2VxU2VwICovMSxcbiAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwoc3RyZWFtLnRsKVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcIi5cIiA6XG4gICAgICAgICAgICB2YXIgciA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgIGlmICghcikge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgIGhkOiAvKiBFeHByU2VwICovNCxcbiAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChyKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgaWYgKHIuaGQgIT09IFwiLlwiKSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGQ6IC8qIEV4cHJTZXAgKi80LFxuICAgICAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHIpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgbWF0Y2gkNCA9IHIudGw7XG4gICAgICAgICAgICBpZiAoIW1hdGNoJDQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBoZDogLyogRXhwclNlcCAqLzQsXG4gICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwocilcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChtYXRjaCQ0LmhkICE9PSBcIkBcIikge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgIGhkOiAvKiBFeHByU2VwICovNCxcbiAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChyKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIHIkMSA9IG1hdGNoJDQudGw7XG4gICAgICAgICAgICBpZiAoIXIkMSkge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFX3NpZyAqLzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBFdmVuICovMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJbnN0ciAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHIkMSlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHN3aXRjaCAociQxLmhkKSB7XG4gICAgICAgICAgICAgIGNhc2UgXCIuXCIgOlxuICAgICAgICAgICAgICAgICAgdmFyIHIkMiA9IHIkMS50bDtcbiAgICAgICAgICAgICAgICAgIGlmIChyJDIgJiYgciQyLmhkID09PSBcIl9cIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFX3NpZyAqLzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBPZGQgKi8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChyJDIudGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFX3NpZyAqLzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBPZGQgKi8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0luc3RyICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwociQyKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBjYXNlIFwiX1wiIDpcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRV9zaWcgKi81LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBFdmVuICovMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChyJDEudGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBjYXNlIFwiflwiIDpcbiAgICAgICAgICAgICAgICAgIHZhciByJDMgPSByJDEudGw7XG4gICAgICAgICAgICAgICAgICBpZiAoIXIkMykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFX3NpZyAqLzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBFdmVuICovMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJZGVudCAqLzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHIkMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAociQzLmhkKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgXCIuXCIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIkNCA9IHIkMy50bDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyJDQgJiYgciQ0LmhkID09PSBcIl9cIikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFX3NpZyAqLzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBPZGQgKi8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSWRlbnQgKi8xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChyJDQudGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFX3NpZyAqLzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBPZGQgKi8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0lkZW50ICovMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwociQ0KVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiX1wiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRV9zaWcgKi81LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBFdmVuICovMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSWRlbnQgKi8xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChyJDMudGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFX3NpZyAqLzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogRXZlbiAqLzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0lkZW50ICovMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwociQzKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkVfc2lnICovNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBFdmVuICovMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChyJDEpXG4gICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcIi9cIiA6XG4gICAgICAgICAgICB2YXIgbWF0Y2gkNSA9IHNjYW5MYWJlbChcIi9cIiwgc3RyZWFtLnRsKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBVbmNsICovNCxcbiAgICAgICAgICAgICAgICAgICAgICBfMDogbWF0Y2gkNVswXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChtYXRjaCQ1WzFdKVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcIjJcIiA6XG4gICAgICAgICAgICB2YXIgbWF0Y2gkNiA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgIGlmIChtYXRjaCQ2KSB7XG4gICAgICAgICAgICAgIGlmIChtYXRjaCQ2LmhkID09PSBcInJcIikge1xuICAgICAgICAgICAgICAgIHZhciByJDUgPSBtYXRjaCQ2LnRsO1xuICAgICAgICAgICAgICAgIGlmICghciQ1KSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkVfcGFyICovNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDogLyogRXZlbiAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwociQ1KVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKHIkNS5oZCAhPT0gXCIrXCIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRV9wYXIgKi82LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiAvKiBFdmVuICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChyJDUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkNyA9IHIkNS50bDtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gkNyAmJiBtYXRjaCQ3LmhkID09PSBcIjFcIikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFX3BhciAqLzYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6IC8qIE9kZCAqLzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwobWF0Y2gkNy50bClcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRV9wYXIgKi82LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiAvKiBFdmVuICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChyJDUpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBleGl0ID0gMTtcbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4aXQgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJAXCIgOlxuICAgICAgICAgICAgdmFyIHIkNiA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgIGlmICghciQ2KSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkVfc2lnICovNSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IC8qIEFueSAqLzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChyJDYpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKHIkNi5oZCkge1xuICAgICAgICAgICAgICBjYXNlIFwiX1wiIDpcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRV9zaWcgKi81LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBBbnkgKi8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJbnN0ciAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHIkNi50bClcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIGNhc2UgXCJ+XCIgOlxuICAgICAgICAgICAgICAgICAgdmFyIHIkNyA9IHIkNi50bDtcbiAgICAgICAgICAgICAgICAgIGlmIChyJDcgJiYgciQ3LmhkID09PSBcIl9cIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFX3NpZyAqLzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBBbnkgKi8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSWRlbnQgKi8xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChyJDcudGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFX3NpZyAqLzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBBbnkgKi8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0lkZW50ICovMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwociQ3KVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFX3NpZyAqLzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogQW55ICovMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChyJDYpXG4gICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgY2FzZSBcIltcIiA6XG4gICAgICAgICAgICB2YXIgbWF0Y2gkOCA9IHNjYW5MaXN0KFwiXVwiLCBzdHJlYW0udGwpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaGQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFZhckxpc3QgKi84LFxuICAgICAgICAgICAgICAgICAgICAgIF8wOiBtYXRjaCQ4WzBdXG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKG1hdGNoJDhbMV0pXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiYVwiIDpcbiAgICAgICAgICAgIHZhciBtYXRjaCQ5ID0gc3RyZWFtLnRsO1xuICAgICAgICAgICAgaWYgKG1hdGNoJDkgJiYgbWF0Y2gkOS5oZCA9PT0gXCJsXCIpIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoJDEwID0gbWF0Y2gkOS50bDtcbiAgICAgICAgICAgICAgaWYgKG1hdGNoJDEwKSB7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoJDEwLmhkID09PSBcInRcIikge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGQ6IC8qIFNlcVJFX2FsdCAqLzMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKG1hdGNoJDEwLnRsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZXhpdCA9IDE7XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhpdCA9IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4aXQgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJvXCIgOlxuICAgICAgICAgICAgdmFyIG1hdGNoJDExID0gc3RyZWFtLnRsO1xuICAgICAgICAgICAgaWYgKG1hdGNoJDExICYmIG1hdGNoJDExLmhkID09PSBcInBcIikge1xuICAgICAgICAgICAgICB2YXIgbWF0Y2gkMTIgPSBtYXRjaCQxMS50bDtcbiAgICAgICAgICAgICAgaWYgKG1hdGNoJDEyICYmIG1hdGNoJDEyLmhkID09PSBcImVcIikge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCQxMyA9IG1hdGNoJDEyLnRsO1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCQxMykge1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoJDEzLmhkID09PSBcIm5cIikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiAvKiBTZXFSRV9vcGVuICovMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChtYXRjaCQxMy50bClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIGV4aXQgPSAxO1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBleGl0ID0gMTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhpdCA9IDE7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgIGV4aXQgPSAxO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgXCJ8XCIgOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaGQ6IC8qIE9wdFNlcCAqLzAsXG4gICAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHN0cmVhbS50bClcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgZXhpdCA9IDE7XG4gICAgICB9XG4gICAgfVxuICAgIGlmIChleGl0ID09PSAxKSB7XG4gICAgICB2YXIgciQ4ID0gc3RyZWFtLnRsO1xuICAgICAgdmFyIGV4aXQkMiA9IDA7XG4gICAgICBpZiAociQ4ICYmIHIkOC5oZCA9PT0gXCJfXCIpIHtcbiAgICAgICAgdmFyIG1hdGNoJDE0ID0gciQ4LnRsO1xuICAgICAgICBpZiAobWF0Y2gkMTQpIHtcbiAgICAgICAgICB2YXIgaWR4ID0gbWF0Y2gkMTQuaGQ7XG4gICAgICAgICAgaWYgKEV4cHIkRm9ybWZvcm0ubGJsQ2xhc3NfdW5xdW90ZWQuaW5jbHVkZXModW5pY29kZSkgJiYgRXhwciRGb3JtZm9ybS5pZHhDbGFzc191bnF1b3RlZC5pbmNsdWRlcyhpZHgpKSB7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogVmFyICovMyxcbiAgICAgICAgICAgICAgICAgICAgICBfMDogdW5pY29kZSArIFwiX1wiICsgaWR4XG4gICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKG1hdGNoJDE0LnRsKVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgZXhpdCQyID0gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBleGl0JDIgPSAyO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICBleGl0JDIgPSAyO1xuICAgICAgfVxuICAgICAgaWYgKGV4aXQkMiA9PT0gMikge1xuICAgICAgICBpZiAoRXhwciRGb3JtZm9ybS5sYmxDbGFzc191bnF1b3RlZC5pbmNsdWRlcyh1bmljb2RlKSkge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFZhciAqLzMsXG4gICAgICAgICAgICAgICAgICAgIF8wOiB1bmljb2RlXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwociQ4KVxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICBSRV9FWE5fSUQ6IExleEVycm9yLFxuICAgICAgICAgICAgICBtc2c6IFwiVW5hYmxlIHRvIGludGVycHJldCAnXCIgKyB1bmljb2RlICsgXCInLlwiLFxuICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgIH07XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgXG4gIH07XG59XG5cbmZ1bmN0aW9uIHNjYW4oaW5wdXQpIHtcbiAgcmV0dXJuIHNjYW5GbWwoQmVsdF9MaXN0LmZyb21BcnJheShpbnB1dC5zcGxpdChcIlwiKSkpO1xufVxuXG52YXIgUGFyc2VFcnJvciA9IC8qIEBfX1BVUkVfXyAqL0NhbWxfZXhjZXB0aW9ucy5jcmVhdGUoXCJGb3JtdWxhLUZvcm1mb3JtLlBhcnNlci5QYXJzZUVycm9yXCIpO1xuXG5mdW5jdGlvbiBwYXJzZVNlcVJFX3NpZyhzdHJlYW0pIHtcbiAgaWYgKHN0cmVhbSkge1xuICAgIHZhciBzaWcgPSBzdHJlYW0uaGQ7XG4gICAgaWYgKHR5cGVvZiBzaWcgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgIHN3aXRjaCAoc2lnKSB7XG4gICAgICAgIGNhc2UgLyogU2VxUkVfb3BlbiAqLzIgOlxuICAgICAgICAgICAgdmFyIG1hdGNoID0gc3RyZWFtLnRsO1xuICAgICAgICAgICAgaWYgKG1hdGNoICYmIG1hdGNoLmhkID09PSAwKSB7XG4gICAgICAgICAgICAgIHZhciByID0gbWF0Y2gudGw7XG4gICAgICAgICAgICAgIHZhciBleGl0ID0gMDtcbiAgICAgICAgICAgICAgaWYgKHIpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyID0gci5oZDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhciA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgaWYgKHBhciA9PT0gLyogU2VxUkVfYWx0ICovMykge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkMSA9IHIudGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCQxICYmIG1hdGNoJDEuaGQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgciRwID0gbWF0Y2gkMS50bDtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhpdCQxID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAociRwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyJDEgPSByJHAuaGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhciQxID09PSBcIm51bWJlclwiIHx8IHBhciQxLlRBRyAhPT0gLyogU2VxUkVfcGFyICovNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0JDEgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoJDIgPSByJHAudGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCQyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoJDIuaGQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiBwYXIkMS5fMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJZGVudCAqLzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2gkMi50bFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCQxID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0JDEgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQkMSA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIGlmIChleGl0JDEgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBBbnkgKi8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0lkZW50ICovMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByJHBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGV4aXQgPSAyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleGl0ID0gMjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2UgaWYgKHBhci5UQUcgPT09IC8qIFNlcVJFX3BhciAqLzYpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCQzID0gci50bDtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCQzICYmIG1hdGNoJDMuaGQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIkcCQxID0gbWF0Y2gkMy50bDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhciQyID0gcGFyLl8wO1xuICAgICAgICAgICAgICAgICAgICB2YXIgZXhpdCQyID0gMDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIkcCQxICYmIHIkcCQxLmhkID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoJDQgPSByJHAkMS50bDtcbiAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gkNCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoJDQuaGQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiBwYXIkMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSWRlbnQgKi8xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCQ0LnRsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0JDIgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0JDIgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBleGl0JDIgPSAzO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGlmIChleGl0JDIgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiBwYXIkMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0luc3RyICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIkcCQxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQgPSAyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBleGl0ID0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhpdCA9IDI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGV4aXQgPT09IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBBbnkgKi8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgclxuICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgY2FzZSAvKiBTZXFSRV9hbHQgKi8zIDpcbiAgICAgICAgICAgIHZhciBtYXRjaCQ1ID0gc3RyZWFtLnRsO1xuICAgICAgICAgICAgaWYgKG1hdGNoJDUgJiYgbWF0Y2gkNS5oZCA9PT0gMCkge1xuICAgICAgICAgICAgICB2YXIgciQxID0gbWF0Y2gkNS50bDtcbiAgICAgICAgICAgICAgdmFyIGV4aXQkMyA9IDA7XG4gICAgICAgICAgICAgIGlmIChyJDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgcGFyJDMgPSByJDEuaGQ7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXIkMyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgICAgICAgICAgaWYgKHBhciQzID09PSAvKiBTZXFSRV9vcGVuICovMikge1xuICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkNiA9IHIkMS50bDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoJDYgJiYgbWF0Y2gkNi5oZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciByJHAkMiA9IG1hdGNoJDYudGw7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXQkNCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHIkcCQyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgcGFyJDQgPSByJHAkMi5oZDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyJDQgPT09IFwibnVtYmVyXCIgfHwgcGFyJDQuVEFHICE9PSAvKiBTZXFSRV9wYXIgKi82KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQkNCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkNyA9IHIkcCQyLnRsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gkNykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCQ3LmhkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogcGFyJDQuXzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSWRlbnQgKi8xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoJDcudGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQkNCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCQ0ID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0JDQgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpdCQ0ID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogQW55ICovMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJZGVudCAqLzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgciRwJDJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGV4aXQkMyA9IDI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQkMyA9IDI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXIkMy5UQUcgPT09IC8qIFNlcVJFX3BhciAqLzYpIHtcbiAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCQ4ID0gciQxLnRsO1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoJDggJiYgbWF0Y2gkOC5oZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICB2YXIgciRwJDMgPSBtYXRjaCQ4LnRsO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFyJDUgPSBwYXIkMy5fMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXQkNSA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyJHAkMyAmJiByJHAkMy5oZCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCQ5ID0gciRwJDMudGw7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoJDkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCQ5LmhkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogcGFyJDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0lkZW50ICovMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2gkOS50bFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCQ1ID0gMztcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCQ1ID0gMztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgZXhpdCQ1ID0gMztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpdCQ1ID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogcGFyJDUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSWRlbnQgKi8xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgciRwJDNcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCQzID0gMjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZXhpdCQzID0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhpdCQzID0gMjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoZXhpdCQzID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogQW55ICovMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJZGVudCAqLzFcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByJDFcbiAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgXG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHN3aXRjaCAoc2lnLlRBRyB8IDApIHtcbiAgICAgICAgY2FzZSAvKiBTZXFSRV9zaWcgKi81IDpcbiAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgIHNpZy5fMCxcbiAgICAgICAgICAgICAgICAgICAgc3RyZWFtLnRsXG4gICAgICAgICAgICAgICAgICBdO1xuICAgICAgICBjYXNlIC8qIFNlcVJFX3BhciAqLzYgOlxuICAgICAgICAgICAgdmFyIG1hdGNoJDEwID0gc3RyZWFtLnRsO1xuICAgICAgICAgICAgaWYgKG1hdGNoJDEwICYmIG1hdGNoJDEwLmhkID09PSAwKSB7XG4gICAgICAgICAgICAgIHZhciByJDIgPSBtYXRjaCQxMC50bDtcbiAgICAgICAgICAgICAgdmFyIHBhciQ2ID0gc2lnLl8wO1xuICAgICAgICAgICAgICB2YXIgZXhpdCQ2ID0gMDtcbiAgICAgICAgICAgICAgaWYgKHIkMikge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCQxMSA9IHIkMi5oZDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1hdGNoJDExID09PSBcIm51bWJlclwiICYmIG1hdGNoJDExID49IDIpIHtcbiAgICAgICAgICAgICAgICAgIHN3aXRjaCAobWF0Y2gkMTEpIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAvKiBTZXFSRV9vcGVuICovMiA6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkMTIgPSByJDIudGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gkMTIgJiYgbWF0Y2gkMTIuaGQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIkcCQ0ID0gbWF0Y2gkMTIudGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleGl0JDcgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAociRwJDQgJiYgciRwJDQuaGQgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkMTMgPSByJHAkNC50bDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gkMTMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCQxMy5oZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IHBhciQ2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJZGVudCAqLzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoJDEzLnRsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0JDcgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0JDcgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0JDcgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGl0JDcgPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiBwYXIkNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0luc3RyICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIkcCQ0XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQkNiA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAvKiBTZXFSRV9hbHQgKi8zIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCQxNCA9IHIkMi50bDtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCQxNCAmJiBtYXRjaCQxNC5oZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgciRwJDUgPSBtYXRjaCQxNC50bDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXQkOCA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChyJHAkNSAmJiByJHAkNS5oZCA9PT0gMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCQxNSA9IHIkcCQ1LnRsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCQxNSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoJDE1LmhkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogcGFyJDYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0lkZW50ICovMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2gkMTUudGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQkOCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQkOCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQkOCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXQkOCA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IHBhciQ2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0lkZW50ICovMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIkcCQ1XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQkNiA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAvKiBFeHByU2VwICovNCA6XG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0JDYgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICBleGl0JDYgPSAyO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICBleGl0JDYgPSAyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChleGl0JDYgPT09IDIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiBwYXIkNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJbnN0ciAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByJDJcbiAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgXG4gICAgICB9XG4gICAgfVxuICB9XG4gIHJldHVybiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogQW55ICovMixcbiAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0luc3RyICovMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgc3RyZWFtXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIHBhcnNlRXhwcihfdW5tYXJrZWRPcHQsIF9pblNlcU9wdCwgX3N0cmVhbSwgX2V4cHIpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB1bm1hcmtlZE9wdCA9IF91bm1hcmtlZE9wdDtcbiAgICB2YXIgaW5TZXFPcHQgPSBfaW5TZXFPcHQ7XG4gICAgdmFyIGV4cHIgPSBfZXhwcjtcbiAgICB2YXIgc3RyZWFtID0gX3N0cmVhbTtcbiAgICB2YXIgdW5tYXJrZWQgPSB1bm1hcmtlZE9wdCAhPT0gdW5kZWZpbmVkID8gdW5tYXJrZWRPcHQgOiBmYWxzZTtcbiAgICB2YXIgaW5TZXEgPSBpblNlcU9wdCAhPT0gdW5kZWZpbmVkID8gaW5TZXFPcHQgOiBmYWxzZTtcbiAgICBpZiAoc3RyZWFtKSB7XG4gICAgICB2YXIgYyA9IHN0cmVhbS5oZDtcbiAgICAgIGlmICh0eXBlb2YgYyA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBzd2l0Y2ggKGMpIHtcbiAgICAgICAgICBjYXNlIC8qIFNlcVNlcCAqLzEgOlxuICAgICAgICAgICAgICBpZiAoaW5TZXEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhwcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVhbVxuICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAvKiBFeHByU2VwICovNCA6XG4gICAgICAgICAgICAgIHZhciBtYXRjaCA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFyciA9IG1hdGNoLmhkO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgYXJyICE9PSBcIm51bWJlclwiICYmIGFyci5UQUcgPT09IC8qIFZhckxpc3QgKi84KSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkMSA9IG1hdGNoLnRsO1xuICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoJDEpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoJDIgPSBtYXRjaCQxLmhkO1xuICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1hdGNoJDIgIT09IFwibnVtYmVyXCIgJiYgbWF0Y2gkMi5UQUcgPT09IC8qIEROQSAqLzcpIHtcbiAgICAgICAgICAgICAgICAgICAgICBfZXhwciA9IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogRkRuYSAqLzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG5hOiBtYXRjaCQyLmNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybTogZXhwcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXJzOiBhcnIuXzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfV07XG4gICAgICAgICAgICAgICAgICAgICAgX3N0cmVhbSA9IG1hdGNoJDEudGw7XG4gICAgICAgICAgICAgICAgICAgICAgX2luU2VxT3B0ID0gaW5TZXE7XG4gICAgICAgICAgICAgICAgICAgICAgX3VubWFya2VkT3B0ID0gdW5tYXJrZWQ7XG4gICAgICAgICAgICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgc3dpdGNoIChjLlRBRyB8IDApIHtcbiAgICAgICAgICBjYXNlIC8qIE1hcmsgKi8wIDpcbiAgICAgICAgICAgICAgaWYgKGMuXzApIHtcbiAgICAgICAgICAgICAgICBpZiAoIXVubWFya2VkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJlYW0udGxcbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICh1bm1hcmtlZCkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgUkVfRVhOX0lEOiBQYXJzZUVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnOiBcIk1pc3NpbmcgJygnIHRvIG9wZW4gRk9STS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCQzID0gcGFyc2VFeHByKHVuZGVmaW5lZCwgdW5kZWZpbmVkLCBzdHJlYW0udGwsIFtdKTtcbiAgICAgICAgICAgICAgICBfZXhwciA9IEJlbHRfQXJyYXkuY29uY2F0KGV4cHIsIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgICAgICAgICAgICAgXzA6IG1hdGNoJDNbMF1cbiAgICAgICAgICAgICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICAgICAgX3N0cmVhbSA9IG1hdGNoJDNbMV07XG4gICAgICAgICAgICAgICAgX2luU2VxT3B0ID0gaW5TZXE7XG4gICAgICAgICAgICAgICAgX3VubWFya2VkT3B0ID0gdW5tYXJrZWQ7XG4gICAgICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgLyogU2VxUkUgKi8xIDpcbiAgICAgICAgICAgICAgaWYgKGMuXzApIHtcbiAgICAgICAgICAgICAgICBpZiAoaW5TZXEpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGV4cHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0cmVhbVxuICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgaWYgKCFpblNlcSkge1xuICAgICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgICAgUkVfRVhOX0lEOiBQYXJzZUVycm9yLFxuICAgICAgICAgICAgICAgICAgICAgICAgbXNnOiBcIk1pc3NpbmcgJ3snIHRvIG9wZW4gcmUtZW50cnkgRk9STS5cIixcbiAgICAgICAgICAgICAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCQ0ID0gcGFyc2VTZXFSRV9zaWcoc3RyZWFtLnRsKTtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkNSA9IHBhcnNlU2VxKG1hdGNoJDRbMV0sIC8qIFtdICovMCk7XG4gICAgICAgICAgICAgICAgX2V4cHIgPSBCZWx0X0FycmF5LmNvbmNhdChleHByLCBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRSAqLzIsXG4gICAgICAgICAgICAgICAgICAgICAgICBfMDogbWF0Y2gkNFswXSxcbiAgICAgICAgICAgICAgICAgICAgICAgIF8xOiBtYXRjaCQ1WzBdXG4gICAgICAgICAgICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgICAgIF9zdHJlYW0gPSBtYXRjaCQ1WzFdO1xuICAgICAgICAgICAgICAgIF9pblNlcU9wdCA9IGluU2VxO1xuICAgICAgICAgICAgICAgIF91bm1hcmtlZE9wdCA9IHVubWFya2VkO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIC8qIENvbnN0ICovMiA6XG4gICAgICAgICAgICAgIF9leHByID0gQmVsdF9BcnJheS5jb25jYXQoZXhwciwgW3tcbiAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIENWYWwgKi8xLFxuICAgICAgICAgICAgICAgICAgICAgIF8wOiBjLl8wXG4gICAgICAgICAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgICAgX3N0cmVhbSA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgICAgX2luU2VxT3B0ID0gaW5TZXE7XG4gICAgICAgICAgICAgIF91bm1hcmtlZE9wdCA9IHVubWFya2VkO1xuICAgICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgY2FzZSAvKiBWYXIgKi8zIDpcbiAgICAgICAgICAgICAgX2V4cHIgPSBCZWx0X0FycmF5LmNvbmNhdChleHByLCBbe1xuICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgICAgICAgICAgICAgXzA6IGMuXzBcbiAgICAgICAgICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgICBfc3RyZWFtID0gc3RyZWFtLnRsO1xuICAgICAgICAgICAgICBfaW5TZXFPcHQgPSBpblNlcTtcbiAgICAgICAgICAgICAgX3VubWFya2VkT3B0ID0gdW5tYXJrZWQ7XG4gICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICBjYXNlIC8qIFVuY2wgKi80IDpcbiAgICAgICAgICAgICAgX2V4cHIgPSBCZWx0X0FycmF5LmNvbmNhdChleHByLCBbe1xuICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogVW5jbCAqLzMsXG4gICAgICAgICAgICAgICAgICAgICAgXzA6IGMuXzBcbiAgICAgICAgICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgICBfc3RyZWFtID0gc3RyZWFtLnRsO1xuICAgICAgICAgICAgICBfaW5TZXFPcHQgPSBpblNlcTtcbiAgICAgICAgICAgICAgX3VubWFya2VkT3B0ID0gdW5tYXJrZWQ7XG4gICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICBjYXNlIC8qIEROQSAqLzcgOlxuICAgICAgICAgICAgICBfZXhwciA9IEJlbHRfQXJyYXkuY29uY2F0KGV4cHIsIFt7XG4gICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBGRG5hICovNSxcbiAgICAgICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgZG5hOiBjLmNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3JtOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICB2YXJzOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgICAgX3N0cmVhbSA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgICAgX2luU2VxT3B0ID0gaW5TZXE7XG4gICAgICAgICAgICAgIF91bm1hcmtlZE9wdCA9IHVubWFya2VkO1xuICAgICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgY2FzZSAvKiBWYXJMaXN0ICovOCA6XG4gICAgICAgICAgICAgIHZhciBtYXRjaCQ2ID0gc3RyZWFtLnRsO1xuICAgICAgICAgICAgICBpZiAobWF0Y2gkNikge1xuICAgICAgICAgICAgICAgIHZhciBtYXRjaCQ3ID0gbWF0Y2gkNi5oZDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIG1hdGNoJDcgIT09IFwibnVtYmVyXCIgJiYgbWF0Y2gkNy5UQUcgPT09IC8qIEROQSAqLzcpIHtcbiAgICAgICAgICAgICAgICAgIF9leHByID0gQmVsdF9BcnJheS5jb25jYXQoZXhwciwgW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBGRG5hICovNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkbmE6IG1hdGNoJDcuY29kZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3JtOiB1bmRlZmluZWQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyczogYy5fMFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICAgICAgICBfc3RyZWFtID0gbWF0Y2gkNi50bDtcbiAgICAgICAgICAgICAgICAgIF9pblNlcU9wdCA9IGluU2VxO1xuICAgICAgICAgICAgICAgICAgX3VubWFya2VkT3B0ID0gdW5tYXJrZWQ7XG4gICAgICAgICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cge1xuICAgICAgICAgICAgUkVfRVhOX0lEOiBQYXJzZUVycm9yLFxuICAgICAgICAgICAgbXNnOiBcIkludmFsaWQgdG9rZW4gJ1wiICsgdG9TdHJpbmcoYykgKyBcIichXCIsXG4gICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICB9O1xuICAgIH1cbiAgICBpZiAodW5tYXJrZWQpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIGV4cHIsXG4gICAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgICAgXTtcbiAgICB9XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogUGFyc2VFcnJvcixcbiAgICAgICAgICBtc2c6IFwiTWlzc2luZyAnKScgdG8gY2xvc2UgRk9STS5cIixcbiAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2VTZXEoX3N0cmVhbSwgX3NlcSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHNlcSA9IF9zZXE7XG4gICAgdmFyIHN0cmVhbSA9IF9zdHJlYW07XG4gICAgaWYgKHN0cmVhbSkge1xuICAgICAgdmFyIG1hdGNoID0gcGFyc2VFeHByKHRydWUsIHRydWUsIHN0cmVhbSwgW10pO1xuICAgICAgdmFyIHIkcCA9IG1hdGNoWzFdO1xuICAgICAgdmFyIGV4cHIgPSBtYXRjaFswXTtcbiAgICAgIGlmIChyJHApIHtcbiAgICAgICAgdmFyIG1hdGNoJDEgPSByJHAuaGQ7XG4gICAgICAgIGlmICh0eXBlb2YgbWF0Y2gkMSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIGlmIChtYXRjaCQxID09PSAvKiBTZXFTZXAgKi8xKSB7XG4gICAgICAgICAgICB2YXIgciRwJHAgPSByJHAudGw7XG4gICAgICAgICAgICBpZiAociRwJHApIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoJDIgPSByJHAkcC5oZDtcbiAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXRjaCQyICE9PSBcIm51bWJlclwiICYmIG1hdGNoJDIuVEFHID09PSAvKiBTZXFSRSAqLzEgJiYgbWF0Y2gkMi5fMCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiBbXSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZDogZXhwcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bDogc2VxXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICByJHAkcC50bFxuICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfc2VxID0ge1xuICAgICAgICAgICAgICBoZDogZXhwcixcbiAgICAgICAgICAgICAgdGw6IHNlcVxuICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIF9zdHJlYW0gPSByJHAkcDtcbiAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIFJFX0VYTl9JRDogUGFyc2VFcnJvcixcbiAgICAgICAgICAgICAgICBtc2c6IFwiTWlzc2luZyAnfScgdG8gY2xvc2UgcmUtZW50cnkgRk9STS5cIixcbiAgICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBpZiAobWF0Y2gkMS5UQUcgPT09IC8qIFNlcVJFICovMSkge1xuICAgICAgICAgICAgaWYgKG1hdGNoJDEuXzApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZDogZXhwcixcbiAgICAgICAgICAgICAgICAgICAgICAgIHRsOiBzZXFcbiAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgIHIkcC50bFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgUkVfRVhOX0lEOiBQYXJzZUVycm9yLFxuICAgICAgICAgICAgICAgICAgbXNnOiBcIk1pc3NpbmcgJ30nIHRvIGNsb3NlIHJlLWVudHJ5IEZPUk0uXCIsXG4gICAgICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgUkVfRVhOX0lEOiBQYXJzZUVycm9yLFxuICAgICAgICAgICAgICAgIG1zZzogXCJNaXNzaW5nICd9JyB0byBjbG9zZSByZS1lbnRyeSBGT1JNLlwiLFxuICAgICAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgIFJFX0VYTl9JRDogUGFyc2VFcnJvcixcbiAgICAgICAgICAgICAgbXNnOiBcIk1pc3NpbmcgJ30nIHRvIGNsb3NlIHJlLWVudHJ5IEZPUk0uXCIsXG4gICAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgdGhyb3cge1xuICAgICAgICAgICAgUkVfRVhOX0lEOiBQYXJzZUVycm9yLFxuICAgICAgICAgICAgbXNnOiBcIk1pc3NpbmcgJ30nIHRvIGNsb3NlIHJlLWVudHJ5IEZPUk0uXCIsXG4gICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICB9O1xuICAgIH1cbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFyc2Uoc3RyZWFtKSB7XG4gIHZhciBtYXRjaCA9IHBhcnNlRXhwcih0cnVlLCB1bmRlZmluZWQsIHN0cmVhbSwgW10pO1xuICBpZiAoQmVsdF9MaXN0Lmxlbmd0aChtYXRjaFsxXSkgPiAwKSB7XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogUGFyc2VFcnJvcixcbiAgICAgICAgICBtc2c6IFwiQnJva2VuIHBhcnNlIHRyZWUhXCIsXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH1cbiAgcmV0dXJuIG1hdGNoWzBdO1xufVxuXG5mdW5jdGlvbiByZWFkKGZvcm11bGEpIHtcbiAgcmV0dXJuIHBhcnNlKHNjYW4oZm9ybXVsYSkpO1xufVxuXG52YXIgTGV4ZXIgPSB7XG4gIExleEVycm9yOiBMZXhFcnJvcixcbiAgc2Nhbjogc2NhblxufTtcblxudmFyIFBhcnNlciA9IHtcbiAgUGFyc2VFcnJvcjogUGFyc2VFcnJvcixcbiAgcGFyc2U6IHBhcnNlXG59O1xuXG5leHBvcnQge1xuICBUb2tlbiAsXG4gIExleGVyICxcbiAgUGFyc2VyICxcbiAgcmVhZCAsXG4gIFxufVxuLyogRE5BLUZvcm1mb3JtIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgUmVTY3JpcHQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgSnNfZGljdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9qc19kaWN0LmpzXCI7XG5pbXBvcnQgKiBhcyBKc19tYXRoIGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2pzX21hdGguanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfSW50IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2JlbHRfSW50LmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X0FycmF5IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2JlbHRfQXJyYXkuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfYXJyYXkgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvY2FtbF9hcnJheS5qc1wiO1xuaW1wb3J0ICogYXMgRE5BJEZvcm1mb3JtIGZyb20gXCIuLi9jYWxjL0ROQS5icy5qc1wiO1xuaW1wb3J0ICogYXMgQ2FsYyRGb3JtZm9ybSBmcm9tIFwiLi4vY2FsYy9DYWxjLmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBKc1JhdyRGb3JtZm9ybSBmcm9tIFwiLi4vLi4vdXRpbHMvSnNSYXcuYnMuanNcIjtcblxuZnVuY3Rpb24gc2hvdyh2cCkge1xuICByZXR1cm4gXCJbXCIgKyBCZWx0X0FycmF5Lm1hcCh2cCwgKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gQ2FsYyRGb3JtZm9ybS5Db25zdC5zaG93KGMpO1xuICAgICAgICAgICAgICAgIH0pKS5qb2luKFwiLFwiKSArIFwiXVwiO1xufVxuXG5mdW5jdGlvbiBzaG93QXNLZXkodnApIHtcbiAgcmV0dXJuIEJlbHRfQXJyYXkubWFwKHZwLCAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LnNob3dBc0tleShjKTtcbiAgICAgICAgICAgICAgICB9KSkuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gdEZyb21TdHIoc29ydE5NVUlPcHQsIHN0cikge1xuICB2YXIgc29ydE5NVUkgPSBzb3J0Tk1VSU9wdCAhPT0gdW5kZWZpbmVkID8gc29ydE5NVUlPcHQgOiBmYWxzZTtcbiAgdmFyIG1heWJlX3Zwb2ludCA9IHN0ci5zcGxpdChcIlwiKS5tYXAoZnVuY3Rpb24gKHZhbCkge1xuICAgICAgICB2YXIgbiA9IEJlbHRfSW50LmZyb21TdHJpbmcodmFsKTtcbiAgICAgICAgaWYgKG4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LmZyb21JbnQoc29ydE5NVUksIG4pO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LnRGcm9tU3RyKHVuZGVmaW5lZCwgdmFsKTtcbiAgICAgICAgfVxuICAgICAgfSk7XG4gIGlmIChtYXliZV92cG9pbnQuZXZlcnkoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICByZXR1cm4gdiAhPT0gdW5kZWZpbmVkO1xuICAgICAgICB9KSkge1xuICAgIHJldHVybiBtYXliZV92cG9pbnQubWFwKGZ1bmN0aW9uICh2KSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgICAgICAgIH0pO1xuICB9XG4gIFxufVxuXG52YXIgVlBvaW50ID0ge1xuICBzaG93OiBzaG93LFxuICBzaG93QXNLZXk6IHNob3dBc0tleSxcbiAgdEZyb21TdHI6IHRGcm9tU3RyXG59O1xuXG5mdW5jdGlvbiBnZXRQb2ludHModnNwYWNlKSB7XG4gIHJldHVybiB2c3BhY2UucG9pbnRzO1xufVxuXG5mdW5jdGlvbiBnZXREaW1lbnNpb24odnNwYWNlKSB7XG4gIHJldHVybiB2c3BhY2UuZGltO1xufVxuXG5mdW5jdGlvbiBtYWtlKHNvcnROTVVJT3B0LCBkaW0pIHtcbiAgdmFyIHNvcnROTVVJID0gc29ydE5NVUlPcHQgIT09IHVuZGVmaW5lZCA/IHNvcnROTVVJT3B0IDogZmFsc2U7XG4gIHZhciByZXNvbHV0aW9uID0gSnNfbWF0aC5mbG9vcl9pbnQoTWF0aC5wb3coNC4wLCBkaW0pKTtcbiAgdmFyIHBvaW50cyA9IEJlbHRfQXJyYXkubWFrZUJ5KHJlc29sdXRpb24sIChmdW5jdGlvbiAoaSkge1xuICAgICAgICAgIHZhciB2cF9zdHIgPSBKc1JhdyRGb3JtZm9ybS5wYWRTdGFydChpLnRvU3RyaW5nKDQpLCBkaW0sIFwiMFwiKTtcbiAgICAgICAgICB2YXIgdnBvaW50ID0gdEZyb21TdHIoc29ydE5NVUksIHZwX3N0cik7XG4gICAgICAgICAgaWYgKHZwb2ludCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICByZXR1cm4gdnBvaW50O1xuICAgICAgICAgIH1cbiAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICB9KSk7XG4gIHJldHVybiB7XG4gICAgICAgICAgcG9pbnRzOiBwb2ludHMsXG4gICAgICAgICAgZGltOiBkaW1cbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gdG9ETkEodnNwYWNlLCBtYXApIHtcbiAgcmV0dXJuIEROQSRGb3JtZm9ybS5tYWtlVW5zYWZlKHZzcGFjZS5wb2ludHMubWFwKEN1cnJ5Ll9fMShtYXApKS5yZXZlcnNlKCkpO1xufVxuXG52YXIgVlNwYWNlID0ge1xuICBnZXRQb2ludHM6IGdldFBvaW50cyxcbiAgZ2V0RGltZW5zaW9uOiBnZXREaW1lbnNpb24sXG4gIG1ha2U6IG1ha2UsXG4gIHRvRE5BOiB0b0ROQVxufTtcblxuZnVuY3Rpb24gc2hvdyQxKGRlcHRoT3B0LCB2bWFwKSB7XG4gIHZhciBkZXB0aCA9IGRlcHRoT3B0ICE9PSB1bmRlZmluZWQgPyBkZXB0aE9wdCA6IDA7XG4gIGlmICh2bWFwLlRBRyA9PT0gLyogQ2VsbCAqLzApIHtcbiAgICByZXR1cm4gXCI8XCIgKyBDYWxjJEZvcm1mb3JtLkNvbnN0LnNob3codm1hcC5fMCkgKyBcIj5cIjtcbiAgfVxuICB2YXIgY29vcmRzID0gdm1hcC5fMDtcbiAgdmFyIG1hdGNoID0gQmVsdF9BcnJheS5nZXQoY29vcmRzLCAwKTtcbiAgdmFyIGRlcHRoTWF4ID0gbWF0Y2ggIT09IHVuZGVmaW5lZCAmJiBtYXRjaFsxXS5UQUcgPT09IC8qIENlbGwgKi8wID8gdHJ1ZSA6IGZhbHNlO1xuICB2YXIgYnIgPSBkZXB0aE1heCA/IFwiXCIgOiBcIlxcblwiO1xuICB2YXIgaW5kZW50ID0gZGVwdGhNYXggPyBcIlwiIDogXCIgIFwiO1xuICByZXR1cm4gXCJbXCIgKyBiciArIEJlbHRfQXJyYXkubWFwKGNvb3JkcywgKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGluZGVudC5yZXBlYXQoZGVwdGggKyAxIHwgMCkgKyAoQ2FsYyRGb3JtZm9ybS5Db25zdC5zaG93KHBhcmFtWzBdKSArIFwiOiBcIiArIHNob3ckMShkZXB0aCArIDEgfCAwLCBwYXJhbVsxXSkpO1xuICAgICAgICAgICAgICAgIH0pKS5qb2luKFwiLCBcIiArIGJyKSArIGJyICsgaW5kZW50LnJlcGVhdChkZXB0aCkgKyBcIl1cIjtcbn1cblxuZnVuY3Rpb24gbWFrZVVuc2FmZV9DZWxsKGMpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBUQUc6IC8qIENlbGwgKi8wLFxuICAgICAgICAgIF8wOiBjXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIG1ha2VVbnNhZmVfTWFwKGNvb3Jkcykge1xuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogTWFwICovMSxcbiAgICAgICAgICBfMDogY29vcmRzXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIG1ha2UkMSh2c3BhY2UsIG1hcCkge1xuICB2YXIgZGltID0gdnNwYWNlLmRpbTtcbiAgdmFyIGF1eCA9IGZ1bmN0aW9uIChwb2ludHMsIHBvcykge1xuICAgIGlmIChwb3MgPj0gZGltKSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBUQUc6IC8qIENlbGwgKi8wLFxuICAgICAgICAgICAgICBfMDogQ3VycnkuXzEobWFwLCBDYW1sX2FycmF5LmdldChwb2ludHMsIDApKVxuICAgICAgICAgICAgfTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgVEFHOiAvKiBNYXAgKi8xLFxuICAgICAgICAgICAgICBfMDogQmVsdF9BcnJheS5tYXAoQ2FsYyRGb3JtZm9ybS5Db25zdC50RW51bSh1bmRlZmluZWQsIHVuZGVmaW5lZCksIChmdW5jdGlvbiAocG9zVmFsKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoID0gQmVsdF9BcnJheS5wYXJ0aXRpb24ocG9pbnRzLCAoZnVuY3Rpb24gKHZwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ2FtbF9hcnJheS5nZXQodnAsIHBvcykgPT09IHBvc1ZhbDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHBvc1ZhbCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF1eChtYXRjaFswXSwgcG9zICsgMSB8IDApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICB9O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGF1eCh2c3BhY2UucG9pbnRzLCAwKTtcbn1cblxuZnVuY3Rpb24gZnJvbUROQShkbmEpIHtcbiAgdmFyIGRuYUFyciA9IEROQSRGb3JtZm9ybS50b0FycmF5KGRuYSk7XG4gIHZhciBsZW4gPSBNYXRoLmxvZyhkbmFBcnIubGVuZ3RoKSAvIE1hdGgubG9nKDQuMCk7XG4gIHZhciB2c3BhY2UgPSBtYWtlKHVuZGVmaW5lZCwgSnNfbWF0aC5mbG9vcl9pbnQobGVuKSk7XG4gIHJldHVybiBtYWtlJDEodnNwYWNlLCAoZnVuY3Rpb24gKHZwKSB7XG4gICAgICAgICAgICAgICAgdmFyIGhlaWdodCA9IHZzcGFjZS5kaW0gLSAxIHwgMDtcbiAgICAgICAgICAgICAgICB2YXIgaW5kZXggPSAoRE5BJEZvcm1mb3JtLmdldExlbmd0aChkbmEpIC0gMSB8IDApIC0gKFxuICAgICAgICAgICAgICAgICAgaGVpZ2h0IDwgMCA/IDAgOiBCZWx0X0FycmF5LnJlZHVjZVdpdGhJbmRleCh2cCwgMCwgKGZ1bmN0aW9uIChwb3MsIGMsIGkpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgb2Zmc2V0ID0gTWF0aC5wb3coNC4wLCBoZWlnaHQgLSBpIHwgMCkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwb3MgKyBNYXRoLmltdWwob2Zmc2V0LCBDYWxjJEZvcm1mb3JtLkNvbnN0LnRvSW50KHVuZGVmaW5lZCwgYykpIHwgMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgICAgKSB8IDA7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBETkEkRm9ybWZvcm0uZ2V0KGRuYSwgaW5kZXgpO1xuICAgICAgICAgICAgICAgIGlmIChjICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9KSk7XG59XG5cbnZhciBWTWFwID0ge1xuICBzaG93OiBzaG93JDEsXG4gIG1ha2VVbnNhZmVfQ2VsbDogbWFrZVVuc2FmZV9DZWxsLFxuICBtYWtlVW5zYWZlX01hcDogbWFrZVVuc2FmZV9NYXAsXG4gIG1ha2U6IG1ha2UkMSxcbiAgZnJvbUROQTogZnJvbUROQVxufTtcblxuZnVuY3Rpb24gc2hvdyQyKHZkaWN0KSB7XG4gIHJldHVybiBcIlZTcGFjZSAtPiBETkFcXG5cIiArIFwiLS0tLS0tLS0tLS0tLVxcblwiICsgQmVsdF9BcnJheS5tYXAoSnNfZGljdC5lbnRyaWVzKHZkaWN0KSwgKGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcmFtWzBdICsgXCIgLT4gXCIgKyBDYWxjJEZvcm1mb3JtLkNvbnN0LnNob3cocGFyYW1bMV0pO1xuICAgICAgICAgICAgICAgIH0pKS5qb2luKFwiXFxuXCIpO1xufVxuXG5mdW5jdGlvbiBtYWtlJDIodnNwYWNlLCBtYXApIHtcbiAgcmV0dXJuIEpzX2RpY3QuZnJvbUFycmF5KEJlbHRfQXJyYXkubWFwKHZzcGFjZS5wb2ludHMsIChmdW5jdGlvbiAodnBvaW50KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0FzS2V5KHZwb2ludCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgQ3VycnkuXzEobWFwLCB2cG9pbnQpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICB9KSkpO1xufVxuXG5mdW5jdGlvbiBmcm9tRGljdFVuc2FmZShkaWN0KSB7XG4gIHJldHVybiBkaWN0O1xufVxuXG5mdW5jdGlvbiBmcm9tRE5BJDEoZG5hKSB7XG4gIHZhciBkbmFBcnIgPSBETkEkRm9ybWZvcm0udG9BcnJheShkbmEpO1xuICB2YXIgbGVuID0gTWF0aC5sb2coZG5hQXJyLmxlbmd0aCkgLyBNYXRoLmxvZyg0LjApO1xuICB2YXIgdnNwYWNlID0gbWFrZSh1bmRlZmluZWQsIEpzX21hdGguZmxvb3JfaW50KGxlbikpO1xuICByZXR1cm4gSnNfZGljdC5mcm9tQXJyYXkoQmVsdF9BcnJheS56aXBCeSh2c3BhY2UucG9pbnRzLCBkbmFBcnIucmV2ZXJzZSgpLCAoZnVuY3Rpb24gKHZwb2ludCwgcmVzdWx0KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgc2hvd0FzS2V5KHZwb2ludCksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVzdWx0XG4gICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICB9KSkpO1xufVxuXG52YXIgVkRpY3QgPSB7XG4gIGZyb21EaWN0VW5zYWZlOiBmcm9tRGljdFVuc2FmZSxcbiAgc2hvdzogc2hvdyQyLFxuICBtYWtlOiBtYWtlJDIsXG4gIGZyb21ETkE6IGZyb21ETkEkMVxufTtcblxuZXhwb3J0IHtcbiAgVlBvaW50ICxcbiAgVlNwYWNlICxcbiAgVk1hcCAsXG4gIFZEaWN0ICxcbiAgXG59XG4vKiBETkEtRm9ybWZvcm0gTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBSZVNjcmlwdCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG5cbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBKc19leG4gZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvanNfZXhuLmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X0FycmF5IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2JlbHRfQXJyYXkuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfYXJyYXkgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvY2FtbF9hcnJheS5qc1wiO1xuaW1wb3J0ICogYXMgSGVscGVyJEZvcm1mb3JtIGZyb20gXCIuLi8uLi91dGlscy9IZWxwZXIuYnMuanNcIjtcblxuZnVuY3Rpb24gbigkJHZhcikge1xuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgXzA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRSAqLzIsXG4gICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogQW55ICovMixcbiAgICAgICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF8xOiB7XG4gICAgICAgICAgICAgICAgaGQ6IFt7XG4gICAgICAgICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgICAgICAgIF8wOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBGVmFyICovNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIF8wOiAkJHZhclxuICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFRBRzogLyogU2VxUkUgKi8yLFxuICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IC8qIEV2ZW4gKi8wLFxuICAgICAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJbnN0ciAqLzBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXzE6IHtcbiAgICAgICAgICAgICAgICBoZDogW3tcbiAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgICAgICAgXzA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIEZWYXIgKi80LFxuICAgICAgICAgICAgICAgICAgICAgICAgXzA6ICQkdmFyXG4gICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gbSgkJHZhcikge1xuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgXzA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRSAqLzIsXG4gICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogQW55ICovMixcbiAgICAgICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF8xOiB7XG4gICAgICAgICAgICAgICAgaGQ6IFt7XG4gICAgICAgICAgICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgICAgICAgICAgIF8wOiAkJHZhclxuICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFICovMixcbiAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBFdmVuICovMCxcbiAgICAgICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF8xOiB7XG4gICAgICAgICAgICAgICAgaGQ6IFt7XG4gICAgICAgICAgICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgICAgICAgICAgIF8wOiAkJHZhclxuICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiB1KCQkdmFyKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICBfMDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgICBfMDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkUgKi8yLFxuICAgICAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogQW55ICovMixcbiAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJbnN0ciAqLzBcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBfMToge1xuICAgICAgICAgICAgICAgICAgICBoZDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgICAgICAgICAgICBfMDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIEZWYXIgKi80LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiAkJHZhclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBUQUc6IC8qIEZWYXIgKi80LFxuICAgICAgICAgICAgICAgICAgXzA6ICQkdmFyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgICBfMDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkUgKi8yLFxuICAgICAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogRXZlbiAqLzAsXG4gICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXzE6IHtcbiAgICAgICAgICAgICAgICAgICAgaGQ6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIEZWYXIgKi80LFxuICAgICAgICAgICAgICAgICAgICAgICAgXzA6ICQkdmFyXG4gICAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgICAgICBfMDogW3tcbiAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIEZWYXIgKi80LFxuICAgICAgICAgICAgICAgICAgICAgIF8wOiAkJHZhclxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gaSgkJHZhcikge1xuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgXzA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgXzA6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFICovMixcbiAgICAgICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IC8qIEFueSAqLzIsXG4gICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXzE6IHtcbiAgICAgICAgICAgICAgICAgICAgaGQ6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIEZWYXIgKi80LFxuICAgICAgICAgICAgICAgICAgICAgICAgXzA6ICQkdmFyXG4gICAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgICAgICBfMDogW3tcbiAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIEZWYXIgKi80LFxuICAgICAgICAgICAgICAgICAgICAgIF8wOiAkJHZhclxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgXzA6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFICovMixcbiAgICAgICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IC8qIEV2ZW4gKi8wLFxuICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0luc3RyICovMFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF8xOiB7XG4gICAgICAgICAgICAgICAgICAgIGhkOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIF8wOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6ICQkdmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgICAgICAgICBfMDogJCR2YXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldChjLCAkJHZhcikge1xuICBzd2l0Y2ggKGMpIHtcbiAgICBjYXNlIC8qIE4gKi8wIDpcbiAgICAgICAgcmV0dXJuIG4oJCR2YXIpO1xuICAgIGNhc2UgLyogVSAqLzEgOlxuICAgICAgICByZXR1cm4gdSgkJHZhcik7XG4gICAgY2FzZSAvKiBJICovMiA6XG4gICAgICAgIHJldHVybiBpKCQkdmFyKTtcbiAgICBjYXNlIC8qIE0gKi8zIDpcbiAgICAgICAgcmV0dXJuIG0oJCR2YXIpO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIGZyb21WUG9pbnQodmFyc09wdCwgdnApIHtcbiAgdmFyIHZhcnMgPSB2YXJzT3B0ICE9PSB1bmRlZmluZWQgPyB2YXJzT3B0IDogSGVscGVyJEZvcm1mb3JtLmNvbW1vbl92YXJzO1xuICBpZiAodmFycy5sZW5ndGggPCB2cC5sZW5ndGgpIHtcbiAgICB0aHJvdyBKc19leG4ucmFpc2VSYW5nZUVycm9yKFwiSW5zdWZmaWNpZW50IHZhcmlhYmxlcyBpbiBnaXZlbiBsaXN0IVwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgXzA6IEJlbHRfQXJyYXkubWFwV2l0aEluZGV4KHZwLCAoZnVuY3Rpb24gKGksIGMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiBbZ2V0KGMsIENhbWxfYXJyYXkuZ2V0KHZhcnMsIGkpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgIH07XG59XG5cbnZhciBJc29sYXRvciA9IHtcbiAgbjogbixcbiAgbTogbSxcbiAgdTogdSxcbiAgaTogaSxcbiAgZ2V0OiBnZXQsXG4gIGZyb21WUG9pbnQ6IGZyb21WUG9pbnRcbn07XG5cbmZ1bmN0aW9uIGFwcGx5KGZvcm0sIHB0bikge1xuICB2YXIgZm9ybSRwID0gQ3VycnkuXzEocHRuLCBmb3JtKTtcbiAgaWYgKGZvcm0kcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZvcm0kcDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZm9ybTtcbiAgfVxufVxuXG52YXIgSW1wbHkgPSB7XG4gIGFwcGx5OiBhcHBseVxufTtcblxuZnVuY3Rpb24gYXBwbHlMKGZvcm0sIHBhcmFtKSB7XG4gIHZhciBmb3JtJHAgPSBDdXJyeS5fMShwYXJhbVswXSwgZm9ybSk7XG4gIGlmIChmb3JtJHAgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmb3JtJHA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZvcm07XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlSKGZvcm0sIHBhcmFtKSB7XG4gIHZhciBmb3JtJHAgPSBDdXJyeS5fMShwYXJhbVsxXSwgZm9ybSk7XG4gIGlmIChmb3JtJHAgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmb3JtJHA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZvcm07XG4gIH1cbn1cblxudmFyIEVxdWl2ID0ge1xuICBhcHBseUw6IGFwcGx5TCxcbiAgYXBwbHlSOiBhcHBseVJcbn07XG5cbnZhciBQYXR0ZXJuID0ge1xuICBJbXBseTogSW1wbHksXG4gIEVxdWl2OiBFcXVpdlxufTtcblxuZnVuY3Rpb24gcmVmbCRwb3V0KGZvcm0pIHtcbiAgaWYgKGZvcm0ubGVuZ3RoICE9PSAxKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgbWF0Y2ggPSBmb3JtWzBdO1xuICBpZiAobWF0Y2guVEFHICE9PSAvKiBNYXJrICovMCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIG1hdGNoJDEgPSBtYXRjaC5fMDtcbiAgaWYgKG1hdGNoJDEubGVuZ3RoICE9PSAxKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgYSA9IG1hdGNoJDFbMF07XG4gIGlmIChhLlRBRyA9PT0gLyogTWFyayAqLzApIHtcbiAgICByZXR1cm4gYS5fMDtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gcmVmbCRwaW4oZm9ybSkge1xuICByZXR1cm4gW3tcbiAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICBfMDogW3tcbiAgICAgICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgICAgIF8wOiBmb3JtXG4gICAgICAgICAgICAgIH1dXG4gICAgICAgICAgfV07XG59XG5cbnZhciByZWZsID0gW1xuICByZWZsJHBpbixcbiAgcmVmbCRwb3V0XG5dO1xuXG52YXIgUHJpbUFsZyA9IHtcbiAgcmVmbDogcmVmbFxufTtcblxuZXhwb3J0IHtcbiAgSXNvbGF0b3IgLFxuICBQYXR0ZXJuICxcbiAgUHJpbUFsZyAsXG4gIFxufVxuLyogSGVscGVyLUZvcm1mb3JtIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgUmVTY3JpcHQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuXG5pbXBvcnQgKiBhcyBKc19kaWN0IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2pzX2RpY3QuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfTGlzdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0xpc3QuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfQXJyYXkgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvYmVsdF9BcnJheS5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vcHRpb24gZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvY2FtbF9vcHRpb24uanNcIjtcbmltcG9ydCAqIGFzIEROQSRGb3JtZm9ybSBmcm9tIFwiLi4vY2FsYy9ETkEuYnMuanNcIjtcbmltcG9ydCAqIGFzIENhbGMkRm9ybWZvcm0gZnJvbSBcIi4uL2NhbGMvQ2FsYy5icy5qc1wiO1xuaW1wb3J0ICogYXMgRXhwciRGb3JtZm9ybSBmcm9tIFwiLi4vZm9ybS9FeHByLmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBTZXFSRSRGb3JtZm9ybSBmcm9tIFwiLi4vY2FsYy9TZXFSRS5icy5qc1wiO1xuaW1wb3J0ICogYXMgVmFsdWUkRm9ybWZvcm0gZnJvbSBcIi4uL2Zvcm0vVmFsdWUuYnMuanNcIjtcblxudmFyIHRvVlBvaW50ID0gSnNfZGljdC52YWx1ZXM7XG5cbmZ1bmN0aW9uIGZyb21WUG9pbnQodnAsIHZhcnMpIHtcbiAgaWYgKHZwLmxlbmd0aCAhPT0gdmFycy5sZW5ndGgpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciBpbnRlcnByX2FyciA9IEJlbHRfQXJyYXkubWFwV2l0aEluZGV4KHZwLCAoZnVuY3Rpb24gKGksIGMpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgdmFyc1tpXSxcbiAgICAgICAgICAgICAgICAgIGNcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICB9KSk7XG4gIHJldHVybiBDYW1sX29wdGlvbi5zb21lKEpzX2RpY3QuZnJvbUFycmF5KGludGVycHJfYXJyKSk7XG59XG5cbmZ1bmN0aW9uIGludGVycHJldEV4cHIoZXhwciwgaW50cHIpIHtcbiAgcmV0dXJuIGV4cHIubWFwKGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoZm9ybS5UQUcgfCAwKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAvKiBNYXJrICovMCA6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDogaW50ZXJwcmV0RXhwcihmb3JtLl8wLCBpbnRwcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjYXNlIC8qIENWYWwgKi8xIDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIENWYWwgKi8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiBmb3JtLl8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2FzZSAvKiBTZXFSRSAqLzIgOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkUgKi8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiBmb3JtLl8wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8xOiBpbnRlcnByZXRTZXEoZm9ybS5fMSwgaW50cHIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2FzZSAvKiBVbmNsICovMyA6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBVbmNsICovMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDogZm9ybS5fMFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNhc2UgLyogRlZhciAqLzQgOlxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF5YmVWYWwgPSBKc19kaWN0LmdldChpbnRwciwgZm9ybS5fMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXliZVZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogQ1ZhbCAqLzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDogbWF5YmVWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2FzZSAvKiBGRG5hICovNSA6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBGRG5hICovNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDogaW50ZXJwcmV0RmRuYShmb3JtLl8wLCBpbnRwcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIGludGVycHJldEZkbmEocGFyYW0sIGludHByKSB7XG4gIHZhciBmb3JtID0gcGFyYW0uZm9ybTtcbiAgdmFyIGZvcm1Db24gPSBmb3JtICE9PSB1bmRlZmluZWQgPyBpbnRlcnByZXRFeHByKGZvcm0sIGludHByKSA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBkbmE6IHBhcmFtLmRuYSxcbiAgICAgICAgICBmb3JtOiBmb3JtQ29uLFxuICAgICAgICAgIHZhcnM6IHVuZGVmaW5lZFxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBpbnRlcnByZXRTZXEoc2VxLCBpbnRwcikge1xuICByZXR1cm4gQmVsdF9MaXN0Lm1hcChzZXEsIChmdW5jdGlvbiAoZXhwcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnRlcnByZXRFeHByKGV4cHIsIGludHByKTtcbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBldmFsRm9ybShmb3JtKSB7XG4gIHN3aXRjaCAoZm9ybS5UQUcgfCAwKSB7XG4gICAgY2FzZSAvKiBNYXJrICovMCA6XG4gICAgICAgIHZhciBleHByID0gZm9ybS5fMDtcbiAgICAgICAgaWYgKGV4cHIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3QuaW52KGV2YWxFeHByKGV4cHIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgICAgIH1cbiAgICBjYXNlIC8qIENWYWwgKi8xIDpcbiAgICAgICAgcmV0dXJuIGZvcm0uXzA7XG4gICAgY2FzZSAvKiBTZXFSRSAqLzIgOlxuICAgICAgICByZXR1cm4gU2VxUkUkRm9ybWZvcm0uY2FsY1JFKGZvcm0uXzAsIG5lc3RlZEV2YWwoZm9ybS5fMSkpO1xuICAgIGNhc2UgLyogVW5jbCAqLzMgOlxuICAgICAgICByZXR1cm4gLyogVSAqLzE7XG4gICAgY2FzZSAvKiBGRG5hICovNSA6XG4gICAgICAgIHJldHVybiAvKiBOICovMDtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiBldmFsRXhwcihleHByKSB7XG4gIHJldHVybiBleHByLnJlZHVjZSgoZnVuY3Rpb24gKHZhbCwgZm9ybSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LnJlbCh2YWwsIGV2YWxGb3JtKGZvcm0pKTtcbiAgICAgICAgICAgICAgfSksIC8qIE4gKi8wKTtcbn1cblxuZnVuY3Rpb24gbmVzdGVkRXZhbChzZXEpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBOQU1FOiBcIk5lc3RUb1JcIixcbiAgICAgICAgICBWQUw6IEJlbHRfTGlzdC5tYXAoc2VxLCBldmFsRXhwcilcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZXZhbFNlcShzZXEpIHtcbiAgaWYgKCFzZXEpIHtcbiAgICByZXR1cm4gLyogTSAqLzM7XG4gIH1cbiAgdmFyIHNlcSRwID0gc2VxLnRsO1xuICB2YXIgZXhwciA9IHNlcS5oZDtcbiAgaWYgKHNlcSRwKSB7XG4gICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3QuaW52KENhbGMkRm9ybWZvcm0uQ29uc3QucmVsKGV2YWxFeHByKGV4cHIpLCBldmFsU2VxKHNlcSRwKSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LmludihldmFsRXhwcihleHByKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW50ZXJFdmFsKGV4cHIsIGludHByKSB7XG4gIHJldHVybiBldmFsRXhwcihpbnRlcnByZXRFeHByKGV4cHIsIGludHByKSk7XG59XG5cbmZ1bmN0aW9uIGV2YWxBbGwoZXhwcikge1xuICB2YXIgdmFycyA9IEV4cHIkRm9ybWZvcm0uRk9STS5nZXRWYXJzKGV4cHIpO1xuICB2YXIgdm51bSA9IHZhcnMubGVuZ3RoO1xuICB2YXIgdnNwYWNlID0gVmFsdWUkRm9ybWZvcm0uVlNwYWNlLm1ha2UodW5kZWZpbmVkLCB2bnVtKTtcbiAgdmFyIGRuYSA9IEROQSRGb3JtZm9ybS5tYWtlVW5zYWZlKFZhbHVlJEZvcm1mb3JtLlZTcGFjZS5nZXRQb2ludHModnNwYWNlKS5tYXAoZnVuY3Rpb24gKHZwb2ludCkge1xuICAgICAgICAgICAgICB2YXIgaW50ZXJwciA9IGZyb21WUG9pbnQodnBvaW50LCB2YXJzKTtcbiAgICAgICAgICAgICAgaWYgKGludGVycHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmFsRXhwcihpbnRlcnByZXRFeHByKGV4cHIsIENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24oaW50ZXJwcikpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkucmV2ZXJzZSgpKTtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBkbmE6IGRuYSxcbiAgICAgICAgICBmb3JtOiBleHByLFxuICAgICAgICAgIHZhcnM6IHZhcnNcbiAgICAgICAgfTtcbn1cblxudmFyIEludGVycHIgPSB7XG4gIHRvVlBvaW50OiB0b1ZQb2ludCxcbiAgZnJvbVZQb2ludDogZnJvbVZQb2ludCxcbiAgaW50ZXJwcmV0OiBpbnRlcnByZXRFeHByXG59O1xuXG52YXIgJCRldmFsID0gZXZhbEV4cHI7XG5cbmV4cG9ydCB7XG4gIEludGVycHIgLFxuICAkJGV2YWwgLFxuICBldmFsU2VxICxcbiAgaW50ZXJFdmFsICxcbiAgZXZhbEFsbCAsXG4gIFxufVxuLyogRE5BLUZvcm1mb3JtIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgUmVTY3JpcHQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9JbnQgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvYmVsdF9JbnQuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfTGlzdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0xpc3QuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfT3B0aW9uIGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2JlbHRfT3B0aW9uLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2V4Y2VwdGlvbnMgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvY2FtbF9leGNlcHRpb25zLmpzXCI7XG5cbnZhciBVbnJlYWNoYWJsZSA9IC8qIEBfX1BVUkVfXyAqL0NhbWxfZXhjZXB0aW9ucy5jcmVhdGUoXCJIZWxwZXItRm9ybWZvcm0uVW5yZWFjaGFibGVcIik7XG5cbnZhciBJbmRleEV4YyA9IC8qIEBfX1BVUkVfXyAqL0NhbWxfZXhjZXB0aW9ucy5jcmVhdGUoXCJIZWxwZXItRm9ybWZvcm0uSW5kZXhFeGNcIik7XG5cbnZhciBEZWJ1ZyA9IC8qIEBfX1BVUkVfXyAqL0NhbWxfZXhjZXB0aW9ucy5jcmVhdGUoXCJIZWxwZXItRm9ybWZvcm0uRGVidWdcIik7XG5cbmZ1bmN0aW9uIGNsZWFuU3RyKHN0cikge1xuICByZXR1cm4gc3RyO1xufVxuXG5mdW5jdGlvbiBpbnRGcm9tU3RyV2l0aFJhZGl4KHJhZGl4LCBzdHIpIHtcbiAgcmV0dXJuIHN0ci5zcGxpdChcIlwiKS5yZXZlcnNlKCkucmVkdWNlKChmdW5jdGlvbiAobWF5YmVTdW0sIG5fc3RyLCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIEJlbHRfT3B0aW9uLmZsYXRNYXAobWF5YmVTdW0sIChmdW5jdGlvbiAoc3VtKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQmVsdF9PcHRpb24ubWFwKEJlbHRfSW50LmZyb21TdHJpbmcobl9zdHIpLCAoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHN1bSArIE1hdGguaW11bChuLCBNYXRoLnBvdyhyYWRpeCwgaSkgfCAwKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICB9KSwgMCk7XG59XG5cbmZ1bmN0aW9uIGhhc0RlY2ltYWwoeCkge1xuICByZXR1cm4gKHggfCAwKSA8IHg7XG59XG5cbmZ1bmN0aW9uIHNob3cocGFyaXR5KSB7XG4gIHN3aXRjaCAocGFyaXR5KSB7XG4gICAgY2FzZSAvKiBFdmVuICovMCA6XG4gICAgICAgIHJldHVybiBcIjJyXCI7XG4gICAgY2FzZSAvKiBPZGQgKi8xIDpcbiAgICAgICAgcmV0dXJuIFwiMnIrMVwiO1xuICAgIGNhc2UgLyogQW55ICovMiA6XG4gICAgICAgIHJldHVybiBcIlwiO1xuICAgIFxuICB9XG59XG5cbnZhciBQYXJpdHkgPSB7XG4gIHNob3c6IHNob3dcbn07XG5cbmZ1bmN0aW9uIHByZXBlbmRUb0FsbChsLCBzZXApIHtcbiAgaWYgKGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IHNlcCxcbiAgICAgICAgICAgIHRsOiB7XG4gICAgICAgICAgICAgIGhkOiBsLmhkLFxuICAgICAgICAgICAgICB0bDogcHJlcGVuZFRvQWxsKGwudGwsIHNlcClcbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW50ZXJzcGVyc2UobCwgc2VwKSB7XG4gIGlmIChsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiBsLmhkLFxuICAgICAgICAgICAgdGw6IHByZXBlbmRUb0FsbChsLnRsLCBzZXApXG4gICAgICAgICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludGVyY2FsYXRlKGwxLCBsMikge1xuICByZXR1cm4gQmVsdF9MaXN0LmZsYXR0ZW4oaW50ZXJzcGVyc2UobDEsIGwyKSk7XG59XG5cbmZ1bmN0aW9uIGpvaW4obCkge1xuICBpZiAobCkge1xuICAgIHJldHVybiBsLmhkICsgam9pbihsLnRsKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBqb2luV2l0aChsLCBzZXApIHtcbiAgcmV0dXJuIGpvaW4oaW50ZXJzcGVyc2UobCwgc2VwKSk7XG59XG5cbnZhciBMaXN0RXh0ZW5zaW9ucyA9IHtcbiAgcHJlcGVuZFRvQWxsOiBwcmVwZW5kVG9BbGwsXG4gIGludGVyc3BlcnNlOiBpbnRlcnNwZXJzZSxcbiAgaW50ZXJjYWxhdGU6IGludGVyY2FsYXRlLFxuICBqb2luOiBqb2luLFxuICBqb2luV2l0aDogam9pbldpdGhcbn07XG5cbmZ1bmN0aW9uIGZtYXAobCwgZm4pIHtcbiAgaWYgKGwpIHtcbiAgICByZXR1cm4gQmVsdF9MaXN0LmNvbmNhdChDdXJyeS5fMShmbiwgbC5oZCksIGZtYXAobC50bCwgZm4pKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG59XG5cbmZ1bmN0aW9uIGxpZnRNMihtZjIsIG1hLCBtYikge1xuICByZXR1cm4gZm1hcChtYSwgKGZ1bmN0aW9uICh4MSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBmbWFwKG1iLCAoZnVuY3Rpb24gKHgyKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZDogQ3VycnkuXzIobWYyLCB4MSwgeDIpLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBjYXJ0ZXNQcm9kKGwsIGRpbSkge1xuICB2YXIgZm4gPSBmdW5jdGlvbiAobCwgc2VxLCBuKSB7XG4gICAgaWYgKG4gPiAwKSB7XG4gICAgICByZXR1cm4gZm1hcChsLCAoZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZuKGwsIEJlbHRfTGlzdC5jb25jYXQoc2VxLCB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZDogeCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSwgbiAtIDEgfCAwKTtcbiAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaGQ6IHNlcSxcbiAgICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgICAgfTtcbiAgICB9XG4gIH07XG4gIHJldHVybiBmbihsLCAvKiBbXSAqLzAsIGRpbSk7XG59XG5cbnZhciBMaXN0TW9uYWRzID0ge1xuICBmbWFwOiBmbWFwLFxuICBsaWZ0TTI6IGxpZnRNMixcbiAgY2FydGVzUHJvZDogY2FydGVzUHJvZFxufTtcblxudmFyIGNvbW1vbl92YXJzID0gXCJhYmNkZWZnaGlqa2xtbm9wcXJzdHV2d3h5elwiLnNwbGl0KFwiXCIpO1xuXG5leHBvcnQge1xuICBVbnJlYWNoYWJsZSAsXG4gIEluZGV4RXhjICxcbiAgRGVidWcgLFxuICBjbGVhblN0ciAsXG4gIGludEZyb21TdHJXaXRoUmFkaXggLFxuICBoYXNEZWNpbWFsICxcbiAgUGFyaXR5ICxcbiAgTGlzdEV4dGVuc2lvbnMgLFxuICBMaXN0TW9uYWRzICxcbiAgY29tbW9uX3ZhcnMgLFxuICBcbn1cbi8qIGNvbW1vbl92YXJzIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgUmVTY3JpcHQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuXG5cbnZhciBwYWRTdGFydCA9ICgoc3RyLCBtYXhMZW5ndGgsIGZpbGxTdHJpbmcpID0+IHN0ci5wYWRTdGFydChtYXhMZW5ndGgsIGZpbGxTdHJpbmcpKTtcblxuZXhwb3J0IHtcbiAgcGFkU3RhcnQgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBDYWxjIGZyb20gJy4vY29yZS9jYWxjL0NhbGMuYnMuanMnO1xuaW1wb3J0ICogYXMgRE5BIGZyb20gJy4vY29yZS9jYWxjL0ROQS5icy5qcyc7XG5pbXBvcnQgKiBhcyBTZXFSRSBmcm9tICcuL2NvcmUvY2FsYy9TZXFSRS5icy5qcyc7XG5cbmltcG9ydCAqIGFzIEV4cHIgZnJvbSAnLi9jb3JlL2Zvcm0vRXhwci5icy5qcyc7XG5pbXBvcnQgKiBhcyBGb3JtdWxhIGZyb20gJy4vY29yZS9mb3JtL0Zvcm11bGEuYnMuanMnO1xuaW1wb3J0ICogYXMgVmFsdWUgZnJvbSAnLi9jb3JlL2Zvcm0vVmFsdWUuYnMuanMnO1xuXG5pbXBvcnQgKiBhcyBBbGcgZnJvbSAnLi9jb3JlL2xvZ2ljL0FsZy5icy5qcyc7XG5pbXBvcnQgKiBhcyBFdmFsIGZyb20gJy4vY29yZS9sb2dpYy9FdmFsLmJzLmpzJztcblxuLy8gaW1wb3J0ICogYXMgVGVzdCBmcm9tICcuL1Rlc3QuYnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7IENhbGMsIEROQSwgU2VxUkUsICBFeHByLCBGb3JtdWxhLCBWYWx1ZSwgIEFsZywgRXZhbCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==