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


/***/ }),

/***/ "./src/core/calc/DNA.bs.js":
/*!*********************************!*\
  !*** ./src/core/calc/DNA.bs.js ***!
  \*********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "get": function() { return /* binding */ get; },
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
/* harmony export */   "inv": function() { return /* binding */ inv; },
/* harmony export */   "rel": function() { return /* binding */ rel; }
/* harmony export */ });
/* harmony import */ var rescript_lib_es6_caml_obj_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rescript/lib/es6/caml_obj.js */ "./node_modules/rescript/lib/es6/caml_obj.js");
/* harmony import */ var rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rescript/lib/es6/belt_Array.js */ "./node_modules/rescript/lib/es6/belt_Array.js");
/* harmony import */ var _Calc_bs_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Calc.bs.js */ "./src/core/calc/Calc.bs.js");
/* harmony import */ var _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../../utils/Helper.bs.js */ "./src/utils/Helper.bs.js");
// Generated by ReScript, PLEASE EDIT WITH CARE






var get = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.get;

function getLength(dna) {
  return dna.length;
}

function getSize(dna) {
  var len = dna.length;
  return Math.log(len) / Math.log(4.0) | 0;
}

function getSizeFromLength(len) {
  var x = Math.log(len) / Math.log(4.0);
  if (!Number.isFinite(x) || _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_3__.hasDecimal(x)) {
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

function reorderToNMUI(dna) {
  var len = dna.length;
  if (len < 4) {
    return dna;
  }
  var partLen = len / 4 | 0;
  return rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concatMany(rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.makeBy(4, (function (i) {
                    var i_nmui;
                    switch (i) {
                      case 0 :
                          i_nmui = 1;
                          break;
                      case 1 :
                          i_nmui = 2;
                          break;
                      case 2 :
                          i_nmui = 0;
                          break;
                      default:
                        i_nmui = i;
                    }
                    var index = Math.imul(i_nmui, partLen);
                    var part_nmui = dna.slice(index, index + partLen | 0);
                    if (len > 4) {
                      return reorderToNMUI(part_nmui);
                    } else {
                      return part_nmui;
                    }
                  })));
}

function fromIntArr(sortNMUIOpt, arr) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  if (isValidLength(arr.length) === false) {
    return ;
  } else {
    return arr.map(function (n) {
                var c = _Calc_bs_js__WEBPACK_IMPORTED_MODULE_2__.Const.fromInt(sortNMUI, n);
                if (c !== undefined) {
                  return c;
                }
                throw {
                      RE_EXN_ID: "Not_found",
                      Error: new Error()
                    };
              });
  }
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

function fromStrArr(arr) {
  if (isValidLength(arr.length) === false) {
    return ;
  } else {
    return arr.map(function (n) {
                var c = _Calc_bs_js__WEBPACK_IMPORTED_MODULE_2__.Const.tFromStr(n);
                if (c !== undefined) {
                  return c;
                }
                throw {
                      RE_EXN_ID: "Not_found",
                      Error: new Error()
                    };
              });
  }
}

function fromStrArrUnsafe(arr) {
  var dna = fromStrArr(arr);
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
  var dna_sorted = sortNMUI ? reorderToNMUI(dna) : dna;
  var prefix = (
    sortNMUI ? "::" : "⁘"
  ) + (
    spaced ? " " : ""
  );
  if (rescript_lib_es6_caml_obj_js__WEBPACK_IMPORTED_MODULE_0__.caml_equal(dna_sorted, [])) {
    return prefix + _Calc_bs_js__WEBPACK_IMPORTED_MODULE_2__.Const.toInt(sortNMUI, /* N */0).toString();
  } else {
    return prefix + dna_sorted.reduce((function (str, c, i) {
                  var spc = spaced && i > 0 && i % 4 === 0 ? " " : "";
                  return str + spc + _Calc_bs_js__WEBPACK_IMPORTED_MODULE_2__.Const.toInt(sortNMUI, c).toString();
                }), "");
  }
}

function raw(dna) {
  if (rescript_lib_es6_caml_obj_js__WEBPACK_IMPORTED_MODULE_0__.caml_equal(dna, [])) {
    return _Calc_bs_js__WEBPACK_IMPORTED_MODULE_2__.Const.showAsKey(/* N */0);
  } else {
    return dna.map(function (c) {
                  return _Calc_bs_js__WEBPACK_IMPORTED_MODULE_2__.Const.showAsKey(c);
                }).join("");
  }
}

function inv(dna) {
  if (rescript_lib_es6_caml_obj_js__WEBPACK_IMPORTED_MODULE_0__.caml_equal(dna, [])) {
    return [_Calc_bs_js__WEBPACK_IMPORTED_MODULE_2__.Const.inv(/* N */0)];
  } else {
    return dna.map(function (c) {
                return _Calc_bs_js__WEBPACK_IMPORTED_MODULE_2__.Const.inv(c);
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
          return _Calc_bs_js__WEBPACK_IMPORTED_MODULE_2__.Const.rel(a, b);
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
/* harmony export */   "FCON": function() { return /* binding */ FCON; },
/* harmony export */   "FVAR": function() { return /* binding */ FVAR; },
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

function toFVAR_form(form) {
  switch (form.TAG | 0) {
    case /* Mark */0 :
        return {
                TAG: /* Mark */0,
                _0: form._0.map(toFVAR_form)
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
                        return expr.map(toFVAR_form);
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
                _0: toFVAR_fdna(form._0)
              };
    
  }
}

function toFVAR_fdna(param) {
  var form = param.form;
  var formVar = form !== undefined ? form.map(toFVAR_form) : undefined;
  return {
          dna: param.dna,
          form: formVar,
          vars: param.vars
        };
}

function toFVAR_expr(expr) {
  return expr.map(toFVAR_form);
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

var FormDNA = {
  show: showFdna,
  dnaToFORM: dnaToFORM,
  toFORM: toFORM
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

var FORM = {
  mark: mark,
  cVal: cVal,
  seqRE: seqRE,
  uncl: uncl,
  fVar: fVar,
  fDna: fDna,
  show: showExpr
};

var FCON = {
  reduce: reduce,
  toFVAR: toFVAR_expr
};

var FVAR = {
  reduce: reduce$1,
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
  var conv = function (n) {
    return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_3__.Const.fromInt(sortNMUI, n);
  };
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
            _arr = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(arr, [conv(0)]);
            _stream = stream.tl;
            continue ;
        case "1" :
            _arr = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(arr, [conv(1)]);
            _stream = stream.tl;
            continue ;
        case "2" :
            _arr = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(arr, [conv(2)]);
            _stream = stream.tl;
            continue ;
        case "3" :
            _arr = rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_1__.concat(arr, [conv(3)]);
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
  var dna = _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_2__.make(match[0]);
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
/* harmony export */   "VTable": function() { return /* binding */ VTable; }
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
          return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_7__.Const.tFromStr(val);
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

function show$2(vtable) {
  return "";
}

function makeFromDNA(dna) {
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

var VTable = {
  show: show$2,
  makeFromDNA: makeFromDNA
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
  var vars = _form_Expr_bs_js__WEBPACK_IMPORTED_MODULE_6__.FVAR.getVars(expr);
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
/* harmony export */   "cleanStr": function() { return /* binding */ cleanStr; },
/* harmony export */   "hasDecimal": function() { return /* binding */ hasDecimal; },
/* harmony export */   "Parity": function() { return /* binding */ Parity; },
/* harmony export */   "ListExtensions": function() { return /* binding */ ListExtensions; },
/* harmony export */   "ListMonads": function() { return /* binding */ ListMonads; },
/* harmony export */   "common_vars": function() { return /* binding */ common_vars; }
/* harmony export */ });
/* harmony import */ var rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rescript/lib/es6/curry.js */ "./node_modules/rescript/lib/es6/curry.js");
/* harmony import */ var rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rescript/lib/es6/belt_List.js */ "./node_modules/rescript/lib/es6/belt_List.js");
/* harmony import */ var rescript_lib_es6_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rescript/lib/es6/caml_exceptions.js */ "./node_modules/rescript/lib/es6/caml_exceptions.js");
// Generated by ReScript, PLEASE EDIT WITH CARE





var Unreachable = /* @__PURE__ */rescript_lib_es6_caml_exceptions_js__WEBPACK_IMPORTED_MODULE_2__.create("Helper-Formform.Unreachable");

function cleanStr(str) {
  return str;
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
  return rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_1__.flatten(intersperse(l1, l2));
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
    return rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_1__.concat(rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__._1(fn, l.hd), fmap(l.tl, fn));
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
                    return fn(l, rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_1__.concat(seq, {
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9iZWx0X0FycmF5LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvYmVsdF9JZC5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2JlbHRfSW50LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvYmVsdF9MaXN0LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvYmVsdF9TZXQuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9iZWx0X1NldERpY3QuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9iZWx0X1NvcnRBcnJheS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2JlbHRfaW50ZXJuYWxBVkxzZXQuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9jYW1sLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvY2FtbF9hcnJheS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2NhbWxfZXhjZXB0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2NhbWxfanNfZXhjZXB0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2NhbWxfb2JqLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvY2FtbF9vcHRpb24uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9jdXJyeS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2pzX2RpY3QuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9qc19leG4uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9qc19pbnQuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9qc19saXN0LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvanNfbWF0aC5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2pzX3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb3JlL2NhbGMvQ2FsYy5icy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb3JlL2NhbGMvRE5BLmJzLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2NvcmUvY2FsYy9TZXFSRS5icy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb3JlL2Zvcm0vRXhwci5icy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb3JlL2Zvcm0vRm9ybXVsYS5icy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb3JlL2Zvcm0vVmFsdWUuYnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvY29yZS9sb2dpYy9BbGcuYnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvY29yZS9sb2dpYy9FdmFsLmJzLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL3V0aWxzL0hlbHBlci5icy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy91dGlscy9Kc1Jhdy5icy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL21haW5SQVcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JrQztBQUNFO0FBQ0k7QUFDUTs7QUFFaEQ7QUFDQTtBQUNBLFdBQVcsaURBQWdCO0FBQzNCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6Qixz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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQXlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMENBQVM7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwQ0FBUztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDBDQUFTO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwwQ0FBUztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSwwREFBeUI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwQ0FBUztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDBDQUFTO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QiwwQ0FBUztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQXlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwwQ0FBUztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwwQ0FBUztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQTRGQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0K0NvQztBQUNjOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdC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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFxQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHNEQUFxQjtBQUMvQjtBQUNBLFNBQVM7QUFDVCxVQUFVLHNEQUFxQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQXFCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRFQUE0RSwwQ0FBUztBQUNyRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnRkFBZ0YsMENBQVM7QUFDekY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFVBQVUsc0RBQXFCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQXFCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRSwwQ0FBUztBQUNwRjs7QUFFQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLDBDQUFTO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsMENBQVM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsMENBQVM7QUFDL0M7O0FBRUE7O0FBRUE7O0FBc0JDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMWFvQztBQUNZO0FBQ007O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxpREFBZ0I7QUFDM0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxpREFBZ0I7QUFDM0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsMENBQVM7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDBDQUFTO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDBDQUFTO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDBDQUFTO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QiwwQ0FBUztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwQ0FBUztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsMENBQVM7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDBDQUFTO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlEQUFnQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxRUFBb0M7QUFDakQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFxREM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDejZCQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBMEJDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTkE7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlEQUF3QjtBQUNyQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBa0JDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxWkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFZQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEY4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxZQUFZLCtDQUFjO0FBQzFCLHVCQUF1QiwrQ0FBYztBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUF5QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxpREFBZ0IsQ0FBQywrQ0FBYztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGFBQWE7QUFDYjtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUEsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFdBQVc7QUFDWDtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQWNDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDL1RBOztBQUVtRDtBQUNJO0FBQ0U7QUFDQTtBQUNFO0FBQ0U7QUFDWDtBQUNFO0FBQ0U7QUFDTTs7QUFFNUQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQSx3QkFBd0Isa0VBQWlCO0FBQ3pDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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Q0E7QUFDQSxtQ0FBbUM7QUFDbkMsbUJBQW1CO0FBQ25CLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBV0M7QUFDRDs7Ozs7Ozs7Ozs7Ozs7O0FDeklBOzs7QUFHQTs7QUFLQztBQUNEOzs7Ozs7O1VDVEE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTs7VUFFQTtVQUNBOztVQUVBO1VBQ0E7VUFDQTs7Ozs7V0N0QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx3Q0FBd0MseUNBQXlDO1dBQ2pGO1dBQ0E7V0FDQSxFOzs7OztXQ1BBLDZDQUE2Qyx3REFBd0QsRTs7Ozs7V0NBckc7V0FDQTtXQUNBO1dBQ0Esc0RBQXNELGtCQUFrQjtXQUN4RTtXQUNBLCtDQUErQyxjQUFjO1dBQzdELEU7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNOK0M7QUFDRjtBQUNJOztBQUVGO0FBQ007QUFDSjs7QUFFSDtBQUNFOztBQUVoRDs7QUFFQSwrREFBZSxDQUFDLEtBQUsseURBQUssMERBQU8sNERBQU8sNkRBQVMsOERBQU8sMkRBQU0sMERBQU0sdURBQUUsRUFBQyIsImZpbGUiOiJmb3JtZm9ybVJBVy5qcyIsInNvdXJjZXNDb250ZW50IjpbIihmdW5jdGlvbiB3ZWJwYWNrVW5pdmVyc2FsTW9kdWxlRGVmaW5pdGlvbihyb290LCBmYWN0b3J5KSB7XG5cdGlmKHR5cGVvZiBleHBvcnRzID09PSAnb2JqZWN0JyAmJiB0eXBlb2YgbW9kdWxlID09PSAnb2JqZWN0Jylcblx0XHRtb2R1bGUuZXhwb3J0cyA9IGZhY3RvcnkoKTtcblx0ZWxzZSBpZih0eXBlb2YgZGVmaW5lID09PSAnZnVuY3Rpb24nICYmIGRlZmluZS5hbWQpXG5cdFx0ZGVmaW5lKFtdLCBmYWN0b3J5KTtcblx0ZWxzZSBpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcpXG5cdFx0ZXhwb3J0c1tcImZvcm1mb3JtXCJdID0gZmFjdG9yeSgpO1xuXHRlbHNlXG5cdFx0cm9vdFtcImZvcm1mb3JtXCJdID0gZmFjdG9yeSgpO1xufSkodGhpcywgZnVuY3Rpb24oKSB7XG5yZXR1cm4gIiwiXG5cbmltcG9ydCAqIGFzIENhbWwgZnJvbSBcIi4vY2FtbC5qc1wiO1xuaW1wb3J0ICogYXMgQ3VycnkgZnJvbSBcIi4vY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIEpzX21hdGggZnJvbSBcIi4vanNfbWF0aC5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vcHRpb24gZnJvbSBcIi4vY2FtbF9vcHRpb24uanNcIjtcblxuZnVuY3Rpb24gZ2V0KGFyciwgaSkge1xuICBpZiAoaSA+PSAwICYmIGkgPCBhcnIubGVuZ3RoKSB7XG4gICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoYXJyW2ldKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gZ2V0RXhuKGFyciwgaSkge1xuICBpZiAoIShpID49IDAgJiYgaSA8IGFyci5sZW5ndGgpKSB7XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJBc3NlcnRfZmFpbHVyZVwiLFxuICAgICAgICAgIF8xOiBbXG4gICAgICAgICAgICBcImJlbHRfQXJyYXkubWxcIixcbiAgICAgICAgICAgIDI3LFxuICAgICAgICAgICAgNFxuICAgICAgICAgIF0sXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH1cbiAgcmV0dXJuIGFycltpXTtcbn1cblxuZnVuY3Rpb24gc2V0KGFyciwgaSwgdikge1xuICBpZiAoaSA+PSAwICYmIGkgPCBhcnIubGVuZ3RoKSB7XG4gICAgYXJyW2ldID0gdjtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2V0RXhuKGFyciwgaSwgdikge1xuICBpZiAoIShpID49IDAgJiYgaSA8IGFyci5sZW5ndGgpKSB7XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJBc3NlcnRfZmFpbHVyZVwiLFxuICAgICAgICAgIF8xOiBbXG4gICAgICAgICAgICBcImJlbHRfQXJyYXkubWxcIixcbiAgICAgICAgICAgIDMzLFxuICAgICAgICAgICAgMlxuICAgICAgICAgIF0sXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH1cbiAgYXJyW2ldID0gdjtcbiAgXG59XG5cbmZ1bmN0aW9uIHN3YXBVbnNhZmUoeHMsIGksIGopIHtcbiAgdmFyIHRtcCA9IHhzW2ldO1xuICB4c1tpXSA9IHhzW2pdO1xuICB4c1tqXSA9IHRtcDtcbiAgXG59XG5cbmZ1bmN0aW9uIHNodWZmbGVJblBsYWNlKHhzKSB7XG4gIHZhciBsZW4gPSB4cy5sZW5ndGg7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgc3dhcFVuc2FmZSh4cywgaSwgSnNfbWF0aC5yYW5kb21faW50KGksIGxlbikpO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBzaHVmZmxlKHhzKSB7XG4gIHZhciByZXN1bHQgPSB4cy5zbGljZSgwKTtcbiAgc2h1ZmZsZUluUGxhY2UocmVzdWx0KTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcmV2ZXJzZUluUGxhY2UoeHMpIHtcbiAgdmFyIGxlbiA9IHhzLmxlbmd0aDtcbiAgdmFyIG9mcyA9IDA7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gbGVuIC8gMiB8IDA7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBzd2FwVW5zYWZlKHhzLCBvZnMgKyBpIHwgMCwgKChvZnMgKyBsZW4gfCAwKSAtIGkgfCAwKSAtIDEgfCAwKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gcmV2ZXJzZSh4cykge1xuICB2YXIgbGVuID0geHMubGVuZ3RoO1xuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgcmVzdWx0W2ldID0geHNbKGxlbiAtIDEgfCAwKSAtIGkgfCAwXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBtYWtlKGwsIGYpIHtcbiAgaWYgKGwgPD0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgcmVzID0gbmV3IEFycmF5KGwpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICByZXNbaV0gPSBmO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIG1ha2VCeVUobCwgZikge1xuICBpZiAobCA8PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciByZXMgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHJlc1tpXSA9IGYoaSk7XG4gIH1cbiAgcmV0dXJuIHJlcztcbn1cblxuZnVuY3Rpb24gbWFrZUJ5KGwsIGYpIHtcbiAgcmV0dXJuIG1ha2VCeVUobCwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gbWFrZUJ5QW5kU2h1ZmZsZVUobCwgZikge1xuICB2YXIgdSA9IG1ha2VCeVUobCwgZik7XG4gIHNodWZmbGVJblBsYWNlKHUpO1xuICByZXR1cm4gdTtcbn1cblxuZnVuY3Rpb24gbWFrZUJ5QW5kU2h1ZmZsZShsLCBmKSB7XG4gIHJldHVybiBtYWtlQnlBbmRTaHVmZmxlVShsLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiByYW5nZShzdGFydCwgZmluaXNoKSB7XG4gIHZhciBjdXQgPSBmaW5pc2ggLSBzdGFydCB8IDA7XG4gIGlmIChjdXQgPCAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBhcnIgPSBuZXcgQXJyYXkoY3V0ICsgMSB8IDApO1xuICBmb3IodmFyIGkgPSAwOyBpIDw9IGN1dDsgKytpKXtcbiAgICBhcnJbaV0gPSBzdGFydCArIGkgfCAwO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIHJhbmdlQnkoc3RhcnQsIGZpbmlzaCwgc3RlcCkge1xuICB2YXIgY3V0ID0gZmluaXNoIC0gc3RhcnQgfCAwO1xuICBpZiAoY3V0IDwgMCB8fCBzdGVwIDw9IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIG5iID0gKGN1dCAvIHN0ZXAgfCAwKSArIDEgfCAwO1xuICB2YXIgYXJyID0gbmV3IEFycmF5KG5iKTtcbiAgdmFyIGN1ciA9IHN0YXJ0O1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbmI7ICsraSl7XG4gICAgYXJyW2ldID0gY3VyO1xuICAgIGN1ciA9IGN1ciArIHN0ZXAgfCAwO1xuICB9XG4gIHJldHVybiBhcnI7XG59XG5cbmZ1bmN0aW9uIHppcCh4cywgeXMpIHtcbiAgdmFyIGxlbnggPSB4cy5sZW5ndGg7XG4gIHZhciBsZW55ID0geXMubGVuZ3RoO1xuICB2YXIgbGVuID0gbGVueCA8IGxlbnkgPyBsZW54IDogbGVueTtcbiAgdmFyIHMgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICBzW2ldID0gW1xuICAgICAgeHNbaV0sXG4gICAgICB5c1tpXVxuICAgIF07XG4gIH1cbiAgcmV0dXJuIHM7XG59XG5cbmZ1bmN0aW9uIHppcEJ5VSh4cywgeXMsIGYpIHtcbiAgdmFyIGxlbnggPSB4cy5sZW5ndGg7XG4gIHZhciBsZW55ID0geXMubGVuZ3RoO1xuICB2YXIgbGVuID0gbGVueCA8IGxlbnkgPyBsZW54IDogbGVueTtcbiAgdmFyIHMgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICBzW2ldID0gZih4c1tpXSwgeXNbaV0pO1xuICB9XG4gIHJldHVybiBzO1xufVxuXG5mdW5jdGlvbiB6aXBCeSh4cywgeXMsIGYpIHtcbiAgcmV0dXJuIHppcEJ5VSh4cywgeXMsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIGNvbmNhdChhMSwgYTIpIHtcbiAgdmFyIGwxID0gYTEubGVuZ3RoO1xuICB2YXIgbDIgPSBhMi5sZW5ndGg7XG4gIHZhciBhMWEyID0gbmV3IEFycmF5KGwxICsgbDIgfCAwKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGwxOyArK2kpe1xuICAgIGExYTJbaV0gPSBhMVtpXTtcbiAgfVxuICBmb3IodmFyIGkkMSA9IDA7IGkkMSA8IGwyOyArK2kkMSl7XG4gICAgYTFhMltsMSArIGkkMSB8IDBdID0gYTJbaSQxXTtcbiAgfVxuICByZXR1cm4gYTFhMjtcbn1cblxuZnVuY3Rpb24gY29uY2F0TWFueShhcnJzKSB7XG4gIHZhciBsZW5BcnJzID0gYXJycy5sZW5ndGg7XG4gIHZhciB0b3RhbExlbiA9IDA7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW5BcnJzOyArK2kpe1xuICAgIHRvdGFsTGVuID0gdG90YWxMZW4gKyBhcnJzW2ldLmxlbmd0aCB8IDA7XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheSh0b3RhbExlbik7XG4gIHRvdGFsTGVuID0gMDtcbiAgZm9yKHZhciBqID0gMDsgaiA8IGxlbkFycnM7ICsrail7XG4gICAgdmFyIGN1ciA9IGFycnNbal07XG4gICAgZm9yKHZhciBrID0gMCAsa19maW5pc2ggPSBjdXIubGVuZ3RoOyBrIDwga19maW5pc2g7ICsrayl7XG4gICAgICByZXN1bHRbdG90YWxMZW5dID0gY3VyW2tdO1xuICAgICAgdG90YWxMZW4gPSB0b3RhbExlbiArIDEgfCAwO1xuICAgIH1cbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBzbGljZShhLCBvZmZzZXQsIGxlbikge1xuICBpZiAobGVuIDw9IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIGxlbmEgPSBhLmxlbmd0aDtcbiAgdmFyIG9mcyA9IG9mZnNldCA8IDAgPyBDYW1sLmNhbWxfaW50X21heChsZW5hICsgb2Zmc2V0IHwgMCwgMCkgOiBvZmZzZXQ7XG4gIHZhciBoYXNMZW4gPSBsZW5hIC0gb2ZzIHwgMDtcbiAgdmFyIGNvcHlMZW5ndGggPSBoYXNMZW4gPCBsZW4gPyBoYXNMZW4gOiBsZW47XG4gIGlmIChjb3B5TGVuZ3RoIDw9IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShjb3B5TGVuZ3RoKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGNvcHlMZW5ndGg7ICsraSl7XG4gICAgcmVzdWx0W2ldID0gYVtvZnMgKyBpIHwgMF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc2xpY2VUb0VuZChhLCBvZmZzZXQpIHtcbiAgdmFyIGxlbmEgPSBhLmxlbmd0aDtcbiAgdmFyIG9mcyA9IG9mZnNldCA8IDAgPyBDYW1sLmNhbWxfaW50X21heChsZW5hICsgb2Zmc2V0IHwgMCwgMCkgOiBvZmZzZXQ7XG4gIHZhciBsZW4gPSBsZW5hIC0gb2ZzIHwgMDtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgIHJlc3VsdFtpXSA9IGFbb2ZzICsgaSB8IDBdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIGZpbGwoYSwgb2Zmc2V0LCBsZW4sIHYpIHtcbiAgaWYgKGxlbiA8PSAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgbGVuYSA9IGEubGVuZ3RoO1xuICB2YXIgb2ZzID0gb2Zmc2V0IDwgMCA/IENhbWwuY2FtbF9pbnRfbWF4KGxlbmEgKyBvZmZzZXQgfCAwLCAwKSA6IG9mZnNldDtcbiAgdmFyIGhhc0xlbiA9IGxlbmEgLSBvZnMgfCAwO1xuICB2YXIgZmlsbExlbmd0aCA9IGhhc0xlbiA8IGxlbiA/IGhhc0xlbiA6IGxlbjtcbiAgaWYgKGZpbGxMZW5ndGggPD0gMCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgZm9yKHZhciBpID0gb2ZzICxpX2ZpbmlzaCA9IG9mcyArIGZpbGxMZW5ndGggfCAwOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgYVtpXSA9IHY7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGJsaXRVbnNhZmUoYTEsIHNyY29mczEsIGEyLCBzcmNvZnMyLCBibGl0TGVuZ3RoKSB7XG4gIGlmIChzcmNvZnMyIDw9IHNyY29mczEpIHtcbiAgICBmb3IodmFyIGogPSAwOyBqIDwgYmxpdExlbmd0aDsgKytqKXtcbiAgICAgIGEyW2ogKyBzcmNvZnMyIHwgMF0gPSBhMVtqICsgc3Jjb2ZzMSB8IDBdO1xuICAgIH1cbiAgICByZXR1cm4gO1xuICB9XG4gIGZvcih2YXIgaiQxID0gYmxpdExlbmd0aCAtIDEgfCAwOyBqJDEgPj0gMDsgLS1qJDEpe1xuICAgIGEyW2okMSArIHNyY29mczIgfCAwXSA9IGExW2okMSArIHNyY29mczEgfCAwXTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gYmxpdChhMSwgb2ZzMSwgYTIsIG9mczIsIGxlbikge1xuICB2YXIgbGVuYTEgPSBhMS5sZW5ndGg7XG4gIHZhciBsZW5hMiA9IGEyLmxlbmd0aDtcbiAgdmFyIHNyY29mczEgPSBvZnMxIDwgMCA/IENhbWwuY2FtbF9pbnRfbWF4KGxlbmExICsgb2ZzMSB8IDAsIDApIDogb2ZzMTtcbiAgdmFyIHNyY29mczIgPSBvZnMyIDwgMCA/IENhbWwuY2FtbF9pbnRfbWF4KGxlbmEyICsgb2ZzMiB8IDAsIDApIDogb2ZzMjtcbiAgdmFyIGJsaXRMZW5ndGggPSBDYW1sLmNhbWxfaW50X21pbihsZW4sIENhbWwuY2FtbF9pbnRfbWluKGxlbmExIC0gc3Jjb2ZzMSB8IDAsIGxlbmEyIC0gc3Jjb2ZzMiB8IDApKTtcbiAgaWYgKHNyY29mczIgPD0gc3Jjb2ZzMSkge1xuICAgIGZvcih2YXIgaiA9IDA7IGogPCBibGl0TGVuZ3RoOyArK2ope1xuICAgICAgYTJbaiArIHNyY29mczIgfCAwXSA9IGExW2ogKyBzcmNvZnMxIHwgMF07XG4gICAgfVxuICAgIHJldHVybiA7XG4gIH1cbiAgZm9yKHZhciBqJDEgPSBibGl0TGVuZ3RoIC0gMSB8IDA7IGokMSA+PSAwOyAtLWokMSl7XG4gICAgYTJbaiQxICsgc3Jjb2ZzMiB8IDBdID0gYTFbaiQxICsgc3Jjb2ZzMSB8IDBdO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBmb3JFYWNoVShhLCBmKSB7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBmKGFbaV0pO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBmb3JFYWNoKGEsIGYpIHtcbiAgcmV0dXJuIGZvckVhY2hVKGEsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIG1hcFUoYSwgZikge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgciA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgcltpXSA9IGYoYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIG1hcChhLCBmKSB7XG4gIHJldHVybiBtYXBVKGEsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIGdldEJ5VShhLCBwKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciBpID0gMDtcbiAgdmFyIHI7XG4gIHdoaWxlKHIgPT09IHVuZGVmaW5lZCAmJiBpIDwgbCkge1xuICAgIHZhciB2ID0gYVtpXTtcbiAgICBpZiAocCh2KSkge1xuICAgICAgciA9IENhbWxfb3B0aW9uLnNvbWUodik7XG4gICAgfVxuICAgIGkgPSBpICsgMSB8IDA7XG4gIH07XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBnZXRCeShhLCBwKSB7XG4gIHJldHVybiBnZXRCeVUoYSwgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gZ2V0SW5kZXhCeVUoYSwgcCkge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciByO1xuICB3aGlsZShyID09PSB1bmRlZmluZWQgJiYgaSA8IGwpIHtcbiAgICB2YXIgdiA9IGFbaV07XG4gICAgaWYgKHAodikpIHtcbiAgICAgIHIgPSBpO1xuICAgIH1cbiAgICBpID0gaSArIDEgfCAwO1xuICB9O1xuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gZ2V0SW5kZXhCeShhLCBwKSB7XG4gIHJldHVybiBnZXRJbmRleEJ5VShhLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBrZWVwVShhLCBmKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciByID0gbmV3IEFycmF5KGwpO1xuICB2YXIgaiA9IDA7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHZhciB2ID0gYVtpXTtcbiAgICBpZiAoZih2KSkge1xuICAgICAgcltqXSA9IHY7XG4gICAgICBqID0gaiArIDEgfCAwO1xuICAgIH1cbiAgICBcbiAgfVxuICByLmxlbmd0aCA9IGo7XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBrZWVwKGEsIGYpIHtcbiAgcmV0dXJuIGtlZXBVKGEsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIGtlZXBXaXRoSW5kZXhVKGEsIGYpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIHIgPSBuZXcgQXJyYXkobCk7XG4gIHZhciBqID0gMDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgdmFyIHYgPSBhW2ldO1xuICAgIGlmIChmKHYsIGkpKSB7XG4gICAgICByW2pdID0gdjtcbiAgICAgIGogPSBqICsgMSB8IDA7XG4gICAgfVxuICAgIFxuICB9XG4gIHIubGVuZ3RoID0gajtcbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGtlZXBXaXRoSW5kZXgoYSwgZikge1xuICByZXR1cm4ga2VlcFdpdGhJbmRleFUoYSwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24ga2VlcE1hcFUoYSwgZikge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgciA9IG5ldyBBcnJheShsKTtcbiAgdmFyIGogPSAwO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICB2YXIgdiA9IGFbaV07XG4gICAgdmFyIHYkMSA9IGYodik7XG4gICAgaWYgKHYkMSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByW2pdID0gQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbih2JDEpO1xuICAgICAgaiA9IGogKyAxIHwgMDtcbiAgICB9XG4gICAgXG4gIH1cbiAgci5sZW5ndGggPSBqO1xuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24ga2VlcE1hcChhLCBmKSB7XG4gIHJldHVybiBrZWVwTWFwVShhLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoV2l0aEluZGV4VShhLCBmKSB7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBmKGksIGFbaV0pO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBmb3JFYWNoV2l0aEluZGV4KGEsIGYpIHtcbiAgcmV0dXJuIGZvckVhY2hXaXRoSW5kZXhVKGEsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIG1hcFdpdGhJbmRleFUoYSwgZikge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgciA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgcltpXSA9IGYoaSwgYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIG1hcFdpdGhJbmRleChhLCBmKSB7XG4gIHJldHVybiBtYXBXaXRoSW5kZXhVKGEsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVUoYSwgeCwgZikge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICByID0gZihyLCBhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gcmVkdWNlKGEsIHgsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVUoYSwgeCwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZVUoYSwgeCwgZikge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IGEubGVuZ3RoIC0gMSB8IDA7IGkgPj0gMDsgLS1pKXtcbiAgICByID0gZihyLCBhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZShhLCB4LCBmKSB7XG4gIHJldHVybiByZWR1Y2VSZXZlcnNlVShhLCB4LCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlMlUoYSwgYiwgeCwgZikge1xuICB2YXIgciA9IHg7XG4gIHZhciBsZW4gPSBDYW1sLmNhbWxfaW50X21pbihhLmxlbmd0aCwgYi5sZW5ndGgpO1xuICBmb3IodmFyIGkgPSBsZW4gLSAxIHwgMDsgaSA+PSAwOyAtLWkpe1xuICAgIHIgPSBmKHIsIGFbaV0sIGJbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlMihhLCBiLCB4LCBmKSB7XG4gIHJldHVybiByZWR1Y2VSZXZlcnNlMlUoYSwgYiwgeCwgQ3VycnkuX18zKGYpKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlV2l0aEluZGV4VShhLCB4LCBmKSB7XG4gIHZhciByID0geDtcbiAgZm9yKHZhciBpID0gMCAsaV9maW5pc2ggPSBhLmxlbmd0aDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIHIgPSBmKHIsIGFbaV0sIGkpO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VXaXRoSW5kZXgoYSwgeCwgZikge1xuICByZXR1cm4gcmVkdWNlV2l0aEluZGV4VShhLCB4LCBDdXJyeS5fXzMoZikpO1xufVxuXG5mdW5jdGlvbiBldmVyeVUoYXJyLCBiKSB7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICB2YXIgX2kgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA9PT0gbGVuKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFiKGFycltpXSkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBldmVyeShhcnIsIGYpIHtcbiAgcmV0dXJuIGV2ZXJ5VShhcnIsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIHNvbWVVKGFyciwgYikge1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIF9pID0gMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPT09IGxlbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoYihhcnJbaV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzb21lKGFyciwgZikge1xuICByZXR1cm4gc29tZVUoYXJyLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBldmVyeUF1eDIoYXJyMSwgYXJyMiwgX2ksIGIsIGxlbikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA9PT0gbGVuKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFiKGFycjFbaV0sIGFycjJbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXZlcnkyVShhLCBiLCBwKSB7XG4gIHJldHVybiBldmVyeUF1eDIoYSwgYiwgMCwgcCwgQ2FtbC5jYW1sX2ludF9taW4oYS5sZW5ndGgsIGIubGVuZ3RoKSk7XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5MihhLCBiLCBwKSB7XG4gIHJldHVybiBldmVyeTJVKGEsIGIsIEN1cnJ5Ll9fMihwKSk7XG59XG5cbmZ1bmN0aW9uIHNvbWUyVShhLCBiLCBwKSB7XG4gIHZhciBfaSA9IDA7XG4gIHZhciBsZW4gPSBDYW1sLmNhbWxfaW50X21pbihhLmxlbmd0aCwgYi5sZW5ndGgpO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA9PT0gbGVuKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwKGFbaV0sIGJbaV0pKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzb21lMihhLCBiLCBwKSB7XG4gIHJldHVybiBzb21lMlUoYSwgYiwgQ3VycnkuX18yKHApKTtcbn1cblxuZnVuY3Rpb24gZXFVKGEsIGIsIHApIHtcbiAgdmFyIGxlbmEgPSBhLmxlbmd0aDtcbiAgdmFyIGxlbmIgPSBiLmxlbmd0aDtcbiAgaWYgKGxlbmEgPT09IGxlbmIpIHtcbiAgICByZXR1cm4gZXZlcnlBdXgyKGEsIGIsIDAsIHAsIGxlbmEpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBlcShhLCBiLCBwKSB7XG4gIHJldHVybiBlcVUoYSwgYiwgQ3VycnkuX18yKHApKTtcbn1cblxuZnVuY3Rpb24gY21wVShhLCBiLCBwKSB7XG4gIHZhciBsZW5hID0gYS5sZW5ndGg7XG4gIHZhciBsZW5iID0gYi5sZW5ndGg7XG4gIGlmIChsZW5hID4gbGVuYikge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKGxlbmEgPCBsZW5iKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHZhciBfaSA9IDA7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIGkgPSBfaTtcbiAgICAgIGlmIChpID09PSBsZW5hKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgdmFyIGMgPSBwKGFbaV0sIGJbaV0pO1xuICAgICAgaWYgKGMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9XG4gICAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNtcChhLCBiLCBwKSB7XG4gIHJldHVybiBjbXBVKGEsIGIsIEN1cnJ5Ll9fMihwKSk7XG59XG5cbmZ1bmN0aW9uIHBhcnRpdGlvblUoYSwgZikge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciBqID0gMDtcbiAgdmFyIGExID0gbmV3IEFycmF5KGwpO1xuICB2YXIgYTIgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaWkgPSAwOyBpaSA8IGw7ICsraWkpe1xuICAgIHZhciB2ID0gYVtpaV07XG4gICAgaWYgKGYodikpIHtcbiAgICAgIGExW2ldID0gdjtcbiAgICAgIGkgPSBpICsgMSB8IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIGEyW2pdID0gdjtcbiAgICAgIGogPSBqICsgMSB8IDA7XG4gICAgfVxuICB9XG4gIGExLmxlbmd0aCA9IGk7XG4gIGEyLmxlbmd0aCA9IGo7XG4gIHJldHVybiBbXG4gICAgICAgICAgYTEsXG4gICAgICAgICAgYTJcbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uKGEsIGYpIHtcbiAgcmV0dXJuIHBhcnRpdGlvblUoYSwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gdW56aXAoYSkge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgYTEgPSBuZXcgQXJyYXkobCk7XG4gIHZhciBhMiA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgdmFyIG1hdGNoID0gYVtpXTtcbiAgICBhMVtpXSA9IG1hdGNoWzBdO1xuICAgIGEyW2ldID0gbWF0Y2hbMV07XG4gIH1cbiAgcmV0dXJuIFtcbiAgICAgICAgICBhMSxcbiAgICAgICAgICBhMlxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBqb2luV2l0aFUoYSwgc2VwLCB0b1N0cmluZykge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICBpZiAobCA9PT0gMCkge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG4gIHZhciBsYXN0SW5kZXggPSBsIC0gMSB8IDA7XG4gIHZhciBfaSA9IDA7XG4gIHZhciBfcmVzID0gXCJcIjtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciByZXMgPSBfcmVzO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPT09IGxhc3RJbmRleCkge1xuICAgICAgcmV0dXJuIHJlcyArIHRvU3RyaW5nKGFbaV0pO1xuICAgIH1cbiAgICBfcmVzID0gcmVzICsgKHRvU3RyaW5nKGFbaV0pICsgc2VwKTtcbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGpvaW5XaXRoKGEsIHNlcCwgdG9TdHJpbmcpIHtcbiAgcmV0dXJuIGpvaW5XaXRoVShhLCBzZXAsIEN1cnJ5Ll9fMSh0b1N0cmluZykpO1xufVxuXG5leHBvcnQge1xuICBnZXQgLFxuICBnZXRFeG4gLFxuICBzZXQgLFxuICBzZXRFeG4gLFxuICBzaHVmZmxlSW5QbGFjZSAsXG4gIHNodWZmbGUgLFxuICByZXZlcnNlSW5QbGFjZSAsXG4gIHJldmVyc2UgLFxuICBtYWtlICxcbiAgcmFuZ2UgLFxuICByYW5nZUJ5ICxcbiAgbWFrZUJ5VSAsXG4gIG1ha2VCeSAsXG4gIG1ha2VCeUFuZFNodWZmbGVVICxcbiAgbWFrZUJ5QW5kU2h1ZmZsZSAsXG4gIHppcCAsXG4gIHppcEJ5VSAsXG4gIHppcEJ5ICxcbiAgdW56aXAgLFxuICBjb25jYXQgLFxuICBjb25jYXRNYW55ICxcbiAgc2xpY2UgLFxuICBzbGljZVRvRW5kICxcbiAgZmlsbCAsXG4gIGJsaXQgLFxuICBibGl0VW5zYWZlICxcbiAgZm9yRWFjaFUgLFxuICBmb3JFYWNoICxcbiAgbWFwVSAsXG4gIG1hcCAsXG4gIGdldEJ5VSAsXG4gIGdldEJ5ICxcbiAgZ2V0SW5kZXhCeVUgLFxuICBnZXRJbmRleEJ5ICxcbiAga2VlcFUgLFxuICBrZWVwICxcbiAga2VlcFdpdGhJbmRleFUgLFxuICBrZWVwV2l0aEluZGV4ICxcbiAga2VlcE1hcFUgLFxuICBrZWVwTWFwICxcbiAgZm9yRWFjaFdpdGhJbmRleFUgLFxuICBmb3JFYWNoV2l0aEluZGV4ICxcbiAgbWFwV2l0aEluZGV4VSAsXG4gIG1hcFdpdGhJbmRleCAsXG4gIHBhcnRpdGlvblUgLFxuICBwYXJ0aXRpb24gLFxuICByZWR1Y2VVICxcbiAgcmVkdWNlICxcbiAgcmVkdWNlUmV2ZXJzZVUgLFxuICByZWR1Y2VSZXZlcnNlICxcbiAgcmVkdWNlUmV2ZXJzZTJVICxcbiAgcmVkdWNlUmV2ZXJzZTIgLFxuICByZWR1Y2VXaXRoSW5kZXhVICxcbiAgcmVkdWNlV2l0aEluZGV4ICxcbiAgam9pbldpdGhVICxcbiAgam9pbldpdGggLFxuICBzb21lVSAsXG4gIHNvbWUgLFxuICBldmVyeVUgLFxuICBldmVyeSAsXG4gIGV2ZXJ5MlUgLFxuICBldmVyeTIgLFxuICBzb21lMlUgLFxuICBzb21lMiAsXG4gIGNtcFUgLFxuICBjbXAgLFxuICBlcVUgLFxuICBlcSAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwiLi9jdXJyeS5qc1wiO1xuXG5mdW5jdGlvbiBNYWtlQ29tcGFyYWJsZVUoTSkge1xuICByZXR1cm4gTTtcbn1cblxuZnVuY3Rpb24gTWFrZUNvbXBhcmFibGUoTSkge1xuICB2YXIgY21wID0gTS5jbXA7XG4gIHZhciBjbXAkMSA9IEN1cnJ5Ll9fMihjbXApO1xuICByZXR1cm4ge1xuICAgICAgICAgIGNtcDogY21wJDFcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gY29tcGFyYWJsZVUoY21wKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgY21wOiBjbXBcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gY29tcGFyYWJsZShjbXApIHtcbiAgdmFyIGNtcCQxID0gQ3VycnkuX18yKGNtcCk7XG4gIHJldHVybiB7XG4gICAgICAgICAgY21wOiBjbXAkMVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBNYWtlSGFzaGFibGVVKE0pIHtcbiAgcmV0dXJuIE07XG59XG5cbmZ1bmN0aW9uIE1ha2VIYXNoYWJsZShNKSB7XG4gIHZhciBoYXNoID0gTS5oYXNoO1xuICB2YXIgaGFzaCQxID0gQ3VycnkuX18xKGhhc2gpO1xuICB2YXIgZXEgPSBNLmVxO1xuICB2YXIgZXEkMSA9IEN1cnJ5Ll9fMihlcSk7XG4gIHJldHVybiB7XG4gICAgICAgICAgaGFzaDogaGFzaCQxLFxuICAgICAgICAgIGVxOiBlcSQxXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhc2hhYmxlVShoYXNoLCBlcSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIGhhc2g6IGhhc2gsXG4gICAgICAgICAgZXE6IGVxXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGhhc2hhYmxlKGhhc2gsIGVxKSB7XG4gIHZhciBoYXNoJDEgPSBDdXJyeS5fXzEoaGFzaCk7XG4gIHZhciBlcSQxID0gQ3VycnkuX18yKGVxKTtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNoOiBoYXNoJDEsXG4gICAgICAgICAgZXE6IGVxJDFcbiAgICAgICAgfTtcbn1cblxuZXhwb3J0IHtcbiAgTWFrZUNvbXBhcmFibGVVICxcbiAgTWFrZUNvbXBhcmFibGUgLFxuICBjb21wYXJhYmxlVSAsXG4gIGNvbXBhcmFibGUgLFxuICBNYWtlSGFzaGFibGVVICxcbiAgTWFrZUhhc2hhYmxlICxcbiAgaGFzaGFibGVVICxcbiAgaGFzaGFibGUgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG5mdW5jdGlvbiBmcm9tU3RyaW5nKGkpIHtcbiAgdmFyIGkkMSA9IHBhcnNlSW50KGksIDEwKTtcbiAgaWYgKGlzTmFOKGkkMSkpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBpJDE7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgZnJvbVN0cmluZyAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwiLi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9BcnJheSBmcm9tIFwiLi9iZWx0X0FycmF5LmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX29wdGlvbiBmcm9tIFwiLi9jYW1sX29wdGlvbi5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9Tb3J0QXJyYXkgZnJvbSBcIi4vYmVsdF9Tb3J0QXJyYXkuanNcIjtcblxuZnVuY3Rpb24gaGVhZCh4KSB7XG4gIGlmICh4KSB7XG4gICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoeC5oZCk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGhlYWRFeG4oeCkge1xuICBpZiAoeCkge1xuICAgIHJldHVybiB4LmhkO1xuICB9XG4gIHRocm93IHtcbiAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHRhaWwoeCkge1xuICBpZiAoeCkge1xuICAgIHJldHVybiB4LnRsO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiB0YWlsRXhuKHgpIHtcbiAgaWYgKHgpIHtcbiAgICByZXR1cm4geC50bDtcbiAgfVxuICB0aHJvdyB7XG4gICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICB9O1xufVxuXG5mdW5jdGlvbiBhZGQoeHMsIHgpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBoZDogeCxcbiAgICAgICAgICB0bDogeHNcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0KHgsIG4pIHtcbiAgaWYgKG4gPCAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX3ggPSB4O1xuICAgIHZhciBfbiA9IG47XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIG4kMSA9IF9uO1xuICAgICAgdmFyIHgkMSA9IF94O1xuICAgICAgaWYgKCF4JDEpIHtcbiAgICAgICAgcmV0dXJuIDtcbiAgICAgIH1cbiAgICAgIGlmIChuJDEgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoeCQxLmhkKTtcbiAgICAgIH1cbiAgICAgIF9uID0gbiQxIC0gMSB8IDA7XG4gICAgICBfeCA9IHgkMS50bDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldEV4bih4LCBuKSB7XG4gIGlmIChuIDwgMCkge1xuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IFwiTm90X2ZvdW5kXCIsXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH1cbiAgdmFyIF94ID0geDtcbiAgdmFyIF9uID0gbjtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBuJDEgPSBfbjtcbiAgICB2YXIgeCQxID0gX3g7XG4gICAgaWYgKHgkMSkge1xuICAgICAgaWYgKG4kMSA9PT0gMCkge1xuICAgICAgICByZXR1cm4geCQxLmhkO1xuICAgICAgfVxuICAgICAgX24gPSBuJDEgLSAxIHwgMDtcbiAgICAgIF94ID0geCQxLnRsO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICB0aHJvdyB7XG4gICAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb25BdXgocCwgX2NlbGwsIF9wcmVjWCwgX3ByZWNZKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlY1kgPSBfcHJlY1k7XG4gICAgdmFyIHByZWNYID0gX3ByZWNYO1xuICAgIHZhciBjZWxsID0gX2NlbGw7XG4gICAgaWYgKCFjZWxsKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgdCA9IGNlbGwudGw7XG4gICAgdmFyIGggPSBjZWxsLmhkO1xuICAgIHZhciBuZXh0ID0ge1xuICAgICAgaGQ6IGgsXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBpZiAocChoKSkge1xuICAgICAgcHJlY1gudGwgPSBuZXh0O1xuICAgICAgX3ByZWNYID0gbmV4dDtcbiAgICAgIF9jZWxsID0gdDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgcHJlY1kudGwgPSBuZXh0O1xuICAgIF9wcmVjWSA9IG5leHQ7XG4gICAgX2NlbGwgPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc3BsaXRBdXgoX2NlbGwsIF9wcmVjWCwgX3ByZWNZKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlY1kgPSBfcHJlY1k7XG4gICAgdmFyIHByZWNYID0gX3ByZWNYO1xuICAgIHZhciBjZWxsID0gX2NlbGw7XG4gICAgaWYgKCFjZWxsKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgbWF0Y2ggPSBjZWxsLmhkO1xuICAgIHZhciBuZXh0QSA9IHtcbiAgICAgIGhkOiBtYXRjaFswXSxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHZhciBuZXh0QiA9IHtcbiAgICAgIGhkOiBtYXRjaFsxXSxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWNYLnRsID0gbmV4dEE7XG4gICAgcHJlY1kudGwgPSBuZXh0QjtcbiAgICBfcHJlY1kgPSBuZXh0QjtcbiAgICBfcHJlY1ggPSBuZXh0QTtcbiAgICBfY2VsbCA9IGNlbGwudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb3B5QXV4Q29udChfY2VsbFgsIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gcHJlYztcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogY2VsbFguaGQsXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gbmV4dDtcbiAgICBfcHJlYyA9IG5leHQ7XG4gICAgX2NlbGxYID0gY2VsbFgudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb3B5QXV4V2l0RmlsdGVyKGYsIF9jZWxsWCwgX3ByZWMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciB0ID0gY2VsbFgudGw7XG4gICAgdmFyIGggPSBjZWxsWC5oZDtcbiAgICBpZiAoZihoKSkge1xuICAgICAgdmFyIG5leHQgPSB7XG4gICAgICAgIGhkOiBoLFxuICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICB9O1xuICAgICAgcHJlYy50bCA9IG5leHQ7XG4gICAgICBfcHJlYyA9IG5leHQ7XG4gICAgICBfY2VsbFggPSB0O1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBfY2VsbFggPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eFdpdGhGaWx0ZXJJbmRleChmLCBfY2VsbFgsIF9wcmVjLCBfaSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgdCA9IGNlbGxYLnRsO1xuICAgIHZhciBoID0gY2VsbFguaGQ7XG4gICAgaWYgKGYoaCwgaSkpIHtcbiAgICAgIHZhciBuZXh0ID0ge1xuICAgICAgICBoZDogaCxcbiAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgfTtcbiAgICAgIHByZWMudGwgPSBuZXh0O1xuICAgICAgX2kgPSBpICsgMSB8IDA7XG4gICAgICBfcHJlYyA9IG5leHQ7XG4gICAgICBfY2VsbFggPSB0O1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBfY2VsbFggPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eFdpdEZpbHRlck1hcChmLCBfY2VsbFgsIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgdCA9IGNlbGxYLnRsO1xuICAgIHZhciBoID0gZihjZWxsWC5oZCk7XG4gICAgaWYgKGggIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIG5leHQgPSB7XG4gICAgICAgIGhkOiBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKGgpLFxuICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICB9O1xuICAgICAgcHJlYy50bCA9IG5leHQ7XG4gICAgICBfcHJlYyA9IG5leHQ7XG4gICAgICBfY2VsbFggPSB0O1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBfY2VsbFggPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXNzb2NBdXhXaXRoTWFwKF9jZWxsWCwgeCwgX3ByZWMsIGYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHQgPSBjZWxsWC50bDtcbiAgICB2YXIgaCA9IGNlbGxYLmhkO1xuICAgIGlmIChmKGhbMF0sIHgpKSB7XG4gICAgICBwcmVjLnRsID0gdDtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICB2YXIgbmV4dCA9IHtcbiAgICAgIGhkOiBoLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IG5leHQ7XG4gICAgX3ByZWMgPSBuZXh0O1xuICAgIF9jZWxsWCA9IHQ7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzZXRBc3NvY0F1eFdpdGhNYXAoX2NlbGxYLCB4LCBrLCBfcHJlYywgZXEpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHQgPSBjZWxsWC50bDtcbiAgICB2YXIgaCA9IGNlbGxYLmhkO1xuICAgIGlmIChlcShoWzBdLCB4KSkge1xuICAgICAgcHJlYy50bCA9IHtcbiAgICAgICAgaGQ6IFtcbiAgICAgICAgICB4LFxuICAgICAgICAgIGtcbiAgICAgICAgXSxcbiAgICAgICAgdGw6IHRcbiAgICAgIH07XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogaCxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWMudGwgPSBuZXh0O1xuICAgIF9wcmVjID0gbmV4dDtcbiAgICBfY2VsbFggPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eFdpdGhNYXAoX2NlbGxYLCBfcHJlYywgZikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogZihjZWxsWC5oZCksXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gbmV4dDtcbiAgICBfcHJlYyA9IG5leHQ7XG4gICAgX2NlbGxYID0gY2VsbFgudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiB6aXBBdXgoX2NlbGxYLCBfY2VsbFksIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWSA9IF9jZWxsWTtcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgaWYgKCFjZWxsWSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogW1xuICAgICAgICBjZWxsWC5oZCxcbiAgICAgICAgY2VsbFkuaGRcbiAgICAgIF0sXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gbmV4dDtcbiAgICBfcHJlYyA9IG5leHQ7XG4gICAgX2NlbGxZID0gY2VsbFkudGw7XG4gICAgX2NlbGxYID0gY2VsbFgudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb3B5QXV4V2l0aE1hcDIoZiwgX2NlbGxYLCBfY2VsbFksIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWSA9IF9jZWxsWTtcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgaWYgKCFjZWxsWSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogZihjZWxsWC5oZCwgY2VsbFkuaGQpLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IG5leHQ7XG4gICAgX3ByZWMgPSBuZXh0O1xuICAgIF9jZWxsWSA9IGNlbGxZLnRsO1xuICAgIF9jZWxsWCA9IGNlbGxYLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eFdpdGhNYXBJKGYsIF9pLCBfY2VsbFgsIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciBuZXh0ID0ge1xuICAgICAgaGQ6IGYoaSwgY2VsbFguaGQpLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IG5leHQ7XG4gICAgX3ByZWMgPSBuZXh0O1xuICAgIF9jZWxsWCA9IGNlbGxYLnRsO1xuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGFrZUF1eChfbiwgX2NlbGwsIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsID0gX2NlbGw7XG4gICAgdmFyIG4gPSBfbjtcbiAgICBpZiAobiA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghY2VsbCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgY2VsbCQxID0ge1xuICAgICAgaGQ6IGNlbGwuaGQsXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gY2VsbCQxO1xuICAgIF9wcmVjID0gY2VsbCQxO1xuICAgIF9jZWxsID0gY2VsbC50bDtcbiAgICBfbiA9IG4gLSAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNwbGl0QXRBdXgoX24sIF9jZWxsLCBfcHJlYykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbCA9IF9jZWxsO1xuICAgIHZhciBuID0gX247XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cbiAgICBpZiAoIWNlbGwpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciBjZWxsJDEgPSB7XG4gICAgICBoZDogY2VsbC5oZCxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWMudGwgPSBjZWxsJDE7XG4gICAgX3ByZWMgPSBjZWxsJDE7XG4gICAgX2NlbGwgPSBjZWxsLnRsO1xuICAgIF9uID0gbiAtIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGFrZShsc3QsIG4pIHtcbiAgaWYgKG4gPCAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICBpZiAobiA9PT0gMCkge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgaWYgKCFsc3QpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiBsc3QuaGQsXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgaGFzID0gdGFrZUF1eChuIC0gMSB8IDAsIGxzdC50bCwgY2VsbCk7XG4gIGlmIChoYXMpIHtcbiAgICByZXR1cm4gY2VsbDtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gZHJvcChsc3QsIG4pIHtcbiAgaWYgKG4gPCAwKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2wgPSBsc3Q7XG4gICAgdmFyIF9uID0gbjtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgbiQxID0gX247XG4gICAgICB2YXIgbCA9IF9sO1xuICAgICAgaWYgKG4kMSA9PT0gMCkge1xuICAgICAgICByZXR1cm4gbDtcbiAgICAgIH1cbiAgICAgIGlmICghbCkge1xuICAgICAgICByZXR1cm4gO1xuICAgICAgfVxuICAgICAgX24gPSBuJDEgLSAxIHwgMDtcbiAgICAgIF9sID0gbC50bDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNwbGl0QXQobHN0LCBuKSB7XG4gIGlmIChuIDwgMCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgaWYgKG4gPT09IDApIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgLyogW10gKi8wLFxuICAgICAgICAgICAgbHN0XG4gICAgICAgICAgXTtcbiAgfVxuICBpZiAoIWxzdCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IGxzdC5oZCxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciByZXN0ID0gc3BsaXRBdEF1eChuIC0gMSB8IDAsIGxzdC50bCwgY2VsbCk7XG4gIGlmIChyZXN0ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgY2VsbCxcbiAgICAgICAgICAgIHJlc3RcbiAgICAgICAgICBdO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBjb25jYXQoeHMsIHlzKSB7XG4gIGlmICgheHMpIHtcbiAgICByZXR1cm4geXM7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IHhzLmhkLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgY29weUF1eENvbnQoeHMudGwsIGNlbGwpLnRsID0geXM7XG4gIHJldHVybiBjZWxsO1xufVxuXG5mdW5jdGlvbiBtYXBVKHhzLCBmKSB7XG4gIGlmICgheHMpIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiBmKHhzLmhkKSxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIGNvcHlBdXhXaXRoTWFwKHhzLnRsLCBjZWxsLCBmKTtcbiAgcmV0dXJuIGNlbGw7XG59XG5cbmZ1bmN0aW9uIG1hcCh4cywgZikge1xuICByZXR1cm4gbWFwVSh4cywgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gemlwQnlVKGwxLCBsMiwgZikge1xuICBpZiAoIWwxKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICBpZiAoIWwyKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICB2YXIgY2VsbCA9IHtcbiAgICBoZDogZihsMS5oZCwgbDIuaGQpLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgY29weUF1eFdpdGhNYXAyKGYsIGwxLnRsLCBsMi50bCwgY2VsbCk7XG4gIHJldHVybiBjZWxsO1xufVxuXG5mdW5jdGlvbiB6aXBCeShsMSwgbDIsIGYpIHtcbiAgcmV0dXJuIHppcEJ5VShsMSwgbDIsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIG1hcFdpdGhJbmRleFUoeHMsIGYpIHtcbiAgaWYgKCF4cykge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IGYoMCwgeHMuaGQpLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgY29weUF1eFdpdGhNYXBJKGYsIDEsIHhzLnRsLCBjZWxsKTtcbiAgcmV0dXJuIGNlbGw7XG59XG5cbmZ1bmN0aW9uIG1hcFdpdGhJbmRleCh4cywgZikge1xuICByZXR1cm4gbWFwV2l0aEluZGV4VSh4cywgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gbWFrZUJ5VShuLCBmKSB7XG4gIGlmIChuIDw9IDApIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIHZhciBoZWFkWCA9IHtcbiAgICBoZDogZigwKSxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciBjdXIgPSBoZWFkWDtcbiAgdmFyIGkgPSAxO1xuICB3aGlsZShpIDwgbikge1xuICAgIHZhciB2ID0ge1xuICAgICAgaGQ6IGYoaSksXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBjdXIudGwgPSB2O1xuICAgIGN1ciA9IHY7XG4gICAgaSA9IGkgKyAxIHwgMDtcbiAgfTtcbiAgcmV0dXJuIGhlYWRYO1xufVxuXG5mdW5jdGlvbiBtYWtlQnkobiwgZikge1xuICByZXR1cm4gbWFrZUJ5VShuLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBtYWtlKG4sIHYpIHtcbiAgaWYgKG4gPD0gMCkge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgdmFyIGhlYWRYID0ge1xuICAgIGhkOiB2LFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIGN1ciA9IGhlYWRYO1xuICB2YXIgaSA9IDE7XG4gIHdoaWxlKGkgPCBuKSB7XG4gICAgdmFyIHYkMSA9IHtcbiAgICAgIGhkOiB2LFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgY3VyLnRsID0gdiQxO1xuICAgIGN1ciA9IHYkMTtcbiAgICBpID0gaSArIDEgfCAwO1xuICB9O1xuICByZXR1cm4gaGVhZFg7XG59XG5cbmZ1bmN0aW9uIGxlbmd0aCh4cykge1xuICB2YXIgX3ggPSB4cztcbiAgdmFyIF9hY2MgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgdmFyIHggPSBfeDtcbiAgICBpZiAoIXgpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIF9hY2MgPSBhY2MgKyAxIHwgMDtcbiAgICBfeCA9IHgudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWxsQXV4KGFyciwgX2ksIF94KSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeCA9IF94O1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKCF4KSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBhcnJbaV0gPSB4LmhkO1xuICAgIF94ID0geC50bDtcbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheShhKSB7XG4gIHZhciBfaSA9IGEubGVuZ3RoIC0gMSB8IDA7XG4gIHZhciBfcmVzID0gLyogW10gKi8wO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHJlcyA9IF9yZXM7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIF9yZXMgPSB7XG4gICAgICBoZDogYVtpXSxcbiAgICAgIHRsOiByZXNcbiAgICB9O1xuICAgIF9pID0gaSAtIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheSh4KSB7XG4gIHZhciBsZW4gPSBsZW5ndGgoeCk7XG4gIHZhciBhcnIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZmlsbEF1eChhcnIsIDAsIHgpO1xuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiBzaHVmZmxlKHhzKSB7XG4gIHZhciB2ID0gdG9BcnJheSh4cyk7XG4gIEJlbHRfQXJyYXkuc2h1ZmZsZUluUGxhY2Uodik7XG4gIHJldHVybiBmcm9tQXJyYXkodik7XG59XG5cbmZ1bmN0aW9uIHJldmVyc2VDb25jYXQoX2wxLCBfbDIpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKCFsMSkge1xuICAgICAgcmV0dXJuIGwyO1xuICAgIH1cbiAgICBfbDIgPSB7XG4gICAgICBoZDogbDEuaGQsXG4gICAgICB0bDogbDJcbiAgICB9O1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmV2ZXJzZShsKSB7XG4gIHJldHVybiByZXZlcnNlQ29uY2F0KGwsIC8qIFtdICovMCk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW5BdXgoX3ByZWMsIF94cykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgaWYgKHhzKSB7XG4gICAgICBfeHMgPSB4cy50bDtcbiAgICAgIF9wcmVjID0gY29weUF1eENvbnQoeHMuaGQsIHByZWMpO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBwcmVjLnRsID0gLyogW10gKi8wO1xuICAgIHJldHVybiA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4oX3hzKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIC8qIFtdICovMDtcbiAgICB9XG4gICAgdmFyIG1hdGNoID0geHMuaGQ7XG4gICAgaWYgKG1hdGNoKSB7XG4gICAgICB2YXIgY2VsbCA9IHtcbiAgICAgICAgaGQ6IG1hdGNoLmhkLFxuICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICB9O1xuICAgICAgZmxhdHRlbkF1eChjb3B5QXV4Q29udChtYXRjaC50bCwgY2VsbCksIHhzLnRsKTtcbiAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbmNhdE1hbnkoeHMpIHtcbiAgdmFyIGxlbiA9IHhzLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMSkge1xuICAgIHJldHVybiB4c1swXTtcbiAgfVxuICBpZiAobGVuID09PSAwKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICB2YXIgbGVuJDEgPSB4cy5sZW5ndGg7XG4gIHZhciB2ID0geHNbbGVuJDEgLSAxIHwgMF07XG4gIGZvcih2YXIgaSA9IGxlbiQxIC0gMiB8IDA7IGkgPj0gMDsgLS1pKXtcbiAgICB2ID0gY29uY2F0KHhzW2ldLCB2KTtcbiAgfVxuICByZXR1cm4gdjtcbn1cblxuZnVuY3Rpb24gbWFwUmV2ZXJzZVUobCwgZikge1xuICB2YXIgX2FjY3UgPSAvKiBbXSAqLzA7XG4gIHZhciBfeHMgPSBsO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIF94cyA9IHhzLnRsO1xuICAgIF9hY2N1ID0ge1xuICAgICAgaGQ6IGYoeHMuaGQpLFxuICAgICAgdGw6IGFjY3VcbiAgICB9O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwUmV2ZXJzZShsLCBmKSB7XG4gIHJldHVybiBtYXBSZXZlcnNlVShsLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoVShfeHMsIGYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBmKHhzLmhkKTtcbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvckVhY2goeHMsIGYpIHtcbiAgcmV0dXJuIGZvckVhY2hVKHhzLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoV2l0aEluZGV4VShsLCBmKSB7XG4gIHZhciBfeHMgPSBsO1xuICB2YXIgX2kgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgZihpLCB4cy5oZCk7XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoV2l0aEluZGV4KGwsIGYpIHtcbiAgcmV0dXJuIGZvckVhY2hXaXRoSW5kZXhVKGwsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVUoX2wsIF9hY2N1LCBmKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYWNjdSA9IF9hY2N1O1xuICAgIHZhciBsID0gX2w7XG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9XG4gICAgX2FjY3UgPSBmKGFjY3UsIGwuaGQpO1xuICAgIF9sID0gbC50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZShsLCBhY2N1LCBmKSB7XG4gIHJldHVybiByZWR1Y2VVKGwsIGFjY3UsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2VVbnNhZmVVKGwsIGFjY3UsIGYpIHtcbiAgaWYgKGwpIHtcbiAgICByZXR1cm4gZihyZWR1Y2VSZXZlcnNlVW5zYWZlVShsLnRsLCBhY2N1LCBmKSwgbC5oZCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFjY3U7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZVUobCwgYWNjLCBmKSB7XG4gIHZhciBsZW4gPSBsZW5ndGgobCk7XG4gIGlmIChsZW4gPCAxMDAwKSB7XG4gICAgcmV0dXJuIHJlZHVjZVJldmVyc2VVbnNhZmVVKGwsIGFjYywgZik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEJlbHRfQXJyYXkucmVkdWNlUmV2ZXJzZVUodG9BcnJheShsKSwgYWNjLCBmKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlKGwsIGFjY3UsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVJldmVyc2VVKGwsIGFjY3UsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVdpdGhJbmRleFUobCwgYWNjLCBmKSB7XG4gIHZhciBfbCA9IGw7XG4gIHZhciBfYWNjID0gYWNjO1xuICB2YXIgX2kgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICB2YXIgYWNjJDEgPSBfYWNjO1xuICAgIHZhciBsJDEgPSBfbDtcbiAgICBpZiAoIWwkMSkge1xuICAgICAgcmV0dXJuIGFjYyQxO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBfYWNjID0gZihhY2MkMSwgbCQxLmhkLCBpKTtcbiAgICBfbCA9IGwkMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVdpdGhJbmRleChsLCBhY2MsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVdpdGhJbmRleFUobCwgYWNjLCBDdXJyeS5fXzMoZikpO1xufVxuXG5mdW5jdGlvbiBtYXBSZXZlcnNlMlUobDEsIGwyLCBmKSB7XG4gIHZhciBfbDEgPSBsMTtcbiAgdmFyIF9sMiA9IGwyO1xuICB2YXIgX2FjY3UgPSAvKiBbXSAqLzA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYWNjdSA9IF9hY2N1O1xuICAgIHZhciBsMiQxID0gX2wyO1xuICAgIHZhciBsMSQxID0gX2wxO1xuICAgIGlmICghbDEkMSkge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIGlmICghbDIkMSkge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIF9hY2N1ID0ge1xuICAgICAgaGQ6IGYobDEkMS5oZCwgbDIkMS5oZCksXG4gICAgICB0bDogYWNjdVxuICAgIH07XG4gICAgX2wyID0gbDIkMS50bDtcbiAgICBfbDEgPSBsMSQxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwUmV2ZXJzZTIobDEsIGwyLCBmKSB7XG4gIHJldHVybiBtYXBSZXZlcnNlMlUobDEsIGwyLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoMlUoX2wxLCBfbDIsIGYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKCFsMSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgZihsMS5oZCwgbDIuaGQpO1xuICAgIF9sMiA9IGwyLnRsO1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaDIobDEsIGwyLCBmKSB7XG4gIHJldHVybiBmb3JFYWNoMlUobDEsIGwyLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2UyVShfbDEsIF9sMiwgX2FjY3UsIGYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgdmFyIGwyID0gX2wyO1xuICAgIHZhciBsMSA9IF9sMTtcbiAgICBpZiAoIWwxKSB7XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIF9hY2N1ID0gZihhY2N1LCBsMS5oZCwgbDIuaGQpO1xuICAgIF9sMiA9IGwyLnRsO1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlMihsMSwgbDIsIGFjYywgZikge1xuICByZXR1cm4gcmVkdWNlMlUobDEsIGwyLCBhY2MsIEN1cnJ5Ll9fMyhmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2UyVW5zYWZlVShsMSwgbDIsIGFjY3UsIGYpIHtcbiAgaWYgKGwxICYmIGwyKSB7XG4gICAgcmV0dXJuIGYocmVkdWNlUmV2ZXJzZTJVbnNhZmVVKGwxLnRsLCBsMi50bCwgYWNjdSwgZiksIGwxLmhkLCBsMi5oZCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFjY3U7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZTJVKGwxLCBsMiwgYWNjLCBmKSB7XG4gIHZhciBsZW4gPSBsZW5ndGgobDEpO1xuICBpZiAobGVuIDwgMTAwMCkge1xuICAgIHJldHVybiByZWR1Y2VSZXZlcnNlMlVuc2FmZVUobDEsIGwyLCBhY2MsIGYpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBCZWx0X0FycmF5LnJlZHVjZVJldmVyc2UyVSh0b0FycmF5KGwxKSwgdG9BcnJheShsMiksIGFjYywgZik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZTIobDEsIGwyLCBhY2MsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVJldmVyc2UyVShsMSwgbDIsIGFjYywgQ3VycnkuX18zKGYpKTtcbn1cblxuZnVuY3Rpb24gZXZlcnlVKF94cywgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXAoeHMuaGQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF94cyA9IHhzLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXZlcnkoeHMsIHApIHtcbiAgcmV0dXJuIGV2ZXJ5VSh4cywgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gc29tZVUoX3hzLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocCh4cy5oZCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNvbWUoeHMsIHApIHtcbiAgcmV0dXJuIHNvbWVVKHhzLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBldmVyeTJVKF9sMSwgX2wyLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWwyKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFwKGwxLmhkLCBsMi5oZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX2wyID0gbDIudGw7XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBldmVyeTIobDEsIGwyLCBwKSB7XG4gIHJldHVybiBldmVyeTJVKGwxLCBsMiwgQ3VycnkuX18yKHApKTtcbn1cblxuZnVuY3Rpb24gY21wQnlMZW5ndGgoX2wxLCBfbDIpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKCFsMSkge1xuICAgICAgaWYgKGwyKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIWwyKSB7XG4gICAgICByZXR1cm4gMTtcbiAgICB9XG4gICAgX2wyID0gbDIudGw7XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjbXBVKF9sMSwgX2wyLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIGlmIChsMikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIHZhciBjID0gcChsMS5oZCwgbDIuaGQpO1xuICAgIGlmIChjICE9PSAwKSB7XG4gICAgICByZXR1cm4gYztcbiAgICB9XG4gICAgX2wyID0gbDIudGw7XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjbXAobDEsIGwyLCBmKSB7XG4gIHJldHVybiBjbXBVKGwxLCBsMiwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gZXFVKF9sMSwgX2wyLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIGlmIChsMikge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIXAobDEuaGQsIGwyLmhkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfbDIgPSBsMi50bDtcbiAgICBfbDEgPSBsMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVxKGwxLCBsMiwgZikge1xuICByZXR1cm4gZXFVKGwxLCBsMiwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gc29tZTJVKF9sMSwgX2wyLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocChsMS5oZCwgbDIuaGQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX2wyID0gbDIudGw7XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzb21lMihsMSwgbDIsIHApIHtcbiAgcmV0dXJuIHNvbWUyVShsMSwgbDIsIEN1cnJ5Ll9fMihwKSk7XG59XG5cbmZ1bmN0aW9uIGhhc1UoX3hzLCB4LCBlcSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGVxKHhzLmhkLCB4KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF94cyA9IHhzLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaGFzKHhzLCB4LCBlcSkge1xuICByZXR1cm4gaGFzVSh4cywgeCwgQ3VycnkuX18yKGVxKSk7XG59XG5cbmZ1bmN0aW9uIGdldEFzc29jVShfeHMsIHgsIGVxKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIG1hdGNoID0geHMuaGQ7XG4gICAgaWYgKGVxKG1hdGNoWzBdLCB4KSkge1xuICAgICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUobWF0Y2hbMV0pO1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGdldEFzc29jKHhzLCB4LCBlcSkge1xuICByZXR1cm4gZ2V0QXNzb2NVKHhzLCB4LCBDdXJyeS5fXzIoZXEpKTtcbn1cblxuZnVuY3Rpb24gaGFzQXNzb2NVKF94cywgeCwgZXEpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChlcSh4cy5oZFswXSwgeCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGhhc0Fzc29jKHhzLCB4LCBlcSkge1xuICByZXR1cm4gaGFzQXNzb2NVKHhzLCB4LCBDdXJyeS5fXzIoZXEpKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXNzb2NVKHhzLCB4LCBlcSkge1xuICBpZiAoIXhzKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICB2YXIgbCA9IHhzLnRsO1xuICB2YXIgcGFpciA9IHhzLmhkO1xuICBpZiAoZXEocGFpclswXSwgeCkpIHtcbiAgICByZXR1cm4gbDtcbiAgfVxuICB2YXIgY2VsbCA9IHtcbiAgICBoZDogcGFpcixcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciByZW1vdmVkID0gcmVtb3ZlQXNzb2NBdXhXaXRoTWFwKGwsIHgsIGNlbGwsIGVxKTtcbiAgaWYgKHJlbW92ZWQpIHtcbiAgICByZXR1cm4gY2VsbDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geHM7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVtb3ZlQXNzb2MoeHMsIHgsIGVxKSB7XG4gIHJldHVybiByZW1vdmVBc3NvY1UoeHMsIHgsIEN1cnJ5Ll9fMihlcSkpO1xufVxuXG5mdW5jdGlvbiBzZXRBc3NvY1UoeHMsIHgsIGssIGVxKSB7XG4gIGlmICgheHMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IFtcbiAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAga1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICB9O1xuICB9XG4gIHZhciBsID0geHMudGw7XG4gIHZhciBwYWlyID0geHMuaGQ7XG4gIGlmIChlcShwYWlyWzBdLCB4KSkge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZDogW1xuICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICBrXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdGw6IGxcbiAgICAgICAgICB9O1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiBwYWlyLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIHJlcGxhY2VkID0gc2V0QXNzb2NBdXhXaXRoTWFwKGwsIHgsIGssIGNlbGwsIGVxKTtcbiAgaWYgKHJlcGxhY2VkKSB7XG4gICAgcmV0dXJuIGNlbGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiBbXG4gICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgIGtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0bDogeHNcbiAgICAgICAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEFzc29jKHhzLCB4LCBrLCBlcSkge1xuICByZXR1cm4gc2V0QXNzb2NVKHhzLCB4LCBrLCBDdXJyeS5fXzIoZXEpKTtcbn1cblxuZnVuY3Rpb24gc29ydFUoeHMsIGNtcCkge1xuICB2YXIgYXJyID0gdG9BcnJheSh4cyk7XG4gIEJlbHRfU29ydEFycmF5LnN0YWJsZVNvcnRJblBsYWNlQnlVKGFyciwgY21wKTtcbiAgcmV0dXJuIGZyb21BcnJheShhcnIpO1xufVxuXG5mdW5jdGlvbiBzb3J0KHhzLCBjbXApIHtcbiAgcmV0dXJuIHNvcnRVKHhzLCBDdXJyeS5fXzIoY21wKSk7XG59XG5cbmZ1bmN0aW9uIGdldEJ5VShfeHMsIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgeCA9IHhzLmhkO1xuICAgIGlmIChwKHgpKSB7XG4gICAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZSh4KTtcbiAgICB9XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRCeSh4cywgcCkge1xuICByZXR1cm4gZ2V0QnlVKHhzLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBrZWVwVShfeHMsIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gLyogW10gKi8wO1xuICAgIH1cbiAgICB2YXIgdCA9IHhzLnRsO1xuICAgIHZhciBoID0geHMuaGQ7XG4gICAgaWYgKHAoaCkpIHtcbiAgICAgIHZhciBjZWxsID0ge1xuICAgICAgICBoZDogaCxcbiAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgfTtcbiAgICAgIGNvcHlBdXhXaXRGaWx0ZXIocCwgdCwgY2VsbCk7XG4gICAgICByZXR1cm4gY2VsbDtcbiAgICB9XG4gICAgX3hzID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGtlZXAoeHMsIHApIHtcbiAgcmV0dXJuIGtlZXBVKHhzLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBrZWVwV2l0aEluZGV4VSh4cywgcCkge1xuICB2YXIgX3hzID0geHM7XG4gIHZhciBfaSA9IDA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIHZhciB4cyQxID0gX3hzO1xuICAgIGlmICgheHMkMSkge1xuICAgICAgcmV0dXJuIC8qIFtdICovMDtcbiAgICB9XG4gICAgdmFyIHQgPSB4cyQxLnRsO1xuICAgIHZhciBoID0geHMkMS5oZDtcbiAgICBpZiAocChoLCBpKSkge1xuICAgICAgdmFyIGNlbGwgPSB7XG4gICAgICAgIGhkOiBoLFxuICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICB9O1xuICAgICAgY29weUF1eFdpdGhGaWx0ZXJJbmRleChwLCB0LCBjZWxsLCBpICsgMSB8IDApO1xuICAgICAgcmV0dXJuIGNlbGw7XG4gICAgfVxuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIF94cyA9IHQ7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBrZWVwV2l0aEluZGV4KHhzLCBwKSB7XG4gIHJldHVybiBrZWVwV2l0aEluZGV4VSh4cywgQ3VycnkuX18yKHApKTtcbn1cblxuZnVuY3Rpb24ga2VlcE1hcFUoX3hzLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIC8qIFtdICovMDtcbiAgICB9XG4gICAgdmFyIHQgPSB4cy50bDtcbiAgICB2YXIgaCA9IHAoeHMuaGQpO1xuICAgIGlmIChoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBjZWxsID0ge1xuICAgICAgICBoZDogQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbihoKSxcbiAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgfTtcbiAgICAgIGNvcHlBdXhXaXRGaWx0ZXJNYXAocCwgdCwgY2VsbCk7XG4gICAgICByZXR1cm4gY2VsbDtcbiAgICB9XG4gICAgX3hzID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGtlZXBNYXAoeHMsIHApIHtcbiAgcmV0dXJuIGtlZXBNYXBVKHhzLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb25VKGwsIHApIHtcbiAgaWYgKCFsKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC8qIFtdICovMCxcbiAgICAgICAgICAgIC8qIFtdICovMFxuICAgICAgICAgIF07XG4gIH1cbiAgdmFyIGggPSBsLmhkO1xuICB2YXIgbmV4dFggPSB7XG4gICAgaGQ6IGgsXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgbmV4dFkgPSB7XG4gICAgaGQ6IGgsXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgYiA9IHAoaCk7XG4gIHBhcnRpdGlvbkF1eChwLCBsLnRsLCBuZXh0WCwgbmV4dFkpO1xuICBpZiAoYikge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBuZXh0WCxcbiAgICAgICAgICAgIG5leHRZLnRsXG4gICAgICAgICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgbmV4dFgudGwsXG4gICAgICAgICAgICBuZXh0WVxuICAgICAgICAgIF07XG4gIH1cbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uKGwsIHApIHtcbiAgcmV0dXJuIHBhcnRpdGlvblUobCwgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gdW56aXAoeHMpIHtcbiAgaWYgKCF4cykge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICAvKiBbXSAqLzAsXG4gICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICBdO1xuICB9XG4gIHZhciBtYXRjaCA9IHhzLmhkO1xuICB2YXIgY2VsbFggPSB7XG4gICAgaGQ6IG1hdGNoWzBdLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIGNlbGxZID0ge1xuICAgIGhkOiBtYXRjaFsxXSxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHNwbGl0QXV4KHhzLnRsLCBjZWxsWCwgY2VsbFkpO1xuICByZXR1cm4gW1xuICAgICAgICAgIGNlbGxYLFxuICAgICAgICAgIGNlbGxZXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIHppcChsMSwgbDIpIHtcbiAgaWYgKCFsMSkge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgaWYgKCFsMikge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IFtcbiAgICAgIGwxLmhkLFxuICAgICAgbDIuaGRcbiAgICBdLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgemlwQXV4KGwxLnRsLCBsMi50bCwgY2VsbCk7XG4gIHJldHVybiBjZWxsO1xufVxuXG52YXIgc2l6ZSA9IGxlbmd0aDtcblxudmFyIGZpbHRlciA9IGtlZXA7XG5cbnZhciBmaWx0ZXJXaXRoSW5kZXggPSBrZWVwV2l0aEluZGV4O1xuXG5leHBvcnQge1xuICBsZW5ndGggLFxuICBzaXplICxcbiAgaGVhZCAsXG4gIGhlYWRFeG4gLFxuICB0YWlsICxcbiAgdGFpbEV4biAsXG4gIGFkZCAsXG4gIGdldCAsXG4gIGdldEV4biAsXG4gIG1ha2UgLFxuICBtYWtlQnlVICxcbiAgbWFrZUJ5ICxcbiAgc2h1ZmZsZSAsXG4gIGRyb3AgLFxuICB0YWtlICxcbiAgc3BsaXRBdCAsXG4gIGNvbmNhdCAsXG4gIGNvbmNhdE1hbnkgLFxuICByZXZlcnNlQ29uY2F0ICxcbiAgZmxhdHRlbiAsXG4gIG1hcFUgLFxuICBtYXAgLFxuICB6aXAgLFxuICB6aXBCeVUgLFxuICB6aXBCeSAsXG4gIG1hcFdpdGhJbmRleFUgLFxuICBtYXBXaXRoSW5kZXggLFxuICBmcm9tQXJyYXkgLFxuICB0b0FycmF5ICxcbiAgcmV2ZXJzZSAsXG4gIG1hcFJldmVyc2VVICxcbiAgbWFwUmV2ZXJzZSAsXG4gIGZvckVhY2hVICxcbiAgZm9yRWFjaCAsXG4gIGZvckVhY2hXaXRoSW5kZXhVICxcbiAgZm9yRWFjaFdpdGhJbmRleCAsXG4gIHJlZHVjZVUgLFxuICByZWR1Y2UgLFxuICByZWR1Y2VXaXRoSW5kZXhVICxcbiAgcmVkdWNlV2l0aEluZGV4ICxcbiAgcmVkdWNlUmV2ZXJzZVUgLFxuICByZWR1Y2VSZXZlcnNlICxcbiAgbWFwUmV2ZXJzZTJVICxcbiAgbWFwUmV2ZXJzZTIgLFxuICBmb3JFYWNoMlUgLFxuICBmb3JFYWNoMiAsXG4gIHJlZHVjZTJVICxcbiAgcmVkdWNlMiAsXG4gIHJlZHVjZVJldmVyc2UyVSAsXG4gIHJlZHVjZVJldmVyc2UyICxcbiAgZXZlcnlVICxcbiAgZXZlcnkgLFxuICBzb21lVSAsXG4gIHNvbWUgLFxuICBldmVyeTJVICxcbiAgZXZlcnkyICxcbiAgc29tZTJVICxcbiAgc29tZTIgLFxuICBjbXBCeUxlbmd0aCAsXG4gIGNtcFUgLFxuICBjbXAgLFxuICBlcVUgLFxuICBlcSAsXG4gIGhhc1UgLFxuICBoYXMgLFxuICBnZXRCeVUgLFxuICBnZXRCeSAsXG4gIGtlZXBVICxcbiAga2VlcCAsXG4gIGZpbHRlciAsXG4gIGtlZXBXaXRoSW5kZXhVICxcbiAga2VlcFdpdGhJbmRleCAsXG4gIGZpbHRlcldpdGhJbmRleCAsXG4gIGtlZXBNYXBVICxcbiAga2VlcE1hcCAsXG4gIHBhcnRpdGlvblUgLFxuICBwYXJ0aXRpb24gLFxuICB1bnppcCAsXG4gIGdldEFzc29jVSAsXG4gIGdldEFzc29jICxcbiAgaGFzQXNzb2NVICxcbiAgaGFzQXNzb2MgLFxuICByZW1vdmVBc3NvY1UgLFxuICByZW1vdmVBc3NvYyAsXG4gIHNldEFzc29jVSAsXG4gIHNldEFzc29jICxcbiAgc29ydFUgLFxuICBzb3J0ICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCIuL2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X1NldERpY3QgZnJvbSBcIi4vYmVsdF9TZXREaWN0LmpzXCI7XG5cbmZ1bmN0aW9uIGZyb21BcnJheShkYXRhLCBpZCkge1xuICB2YXIgY21wID0gaWQuY21wO1xuICByZXR1cm4ge1xuICAgICAgICAgIGNtcDogY21wLFxuICAgICAgICAgIGRhdGE6IEJlbHRfU2V0RGljdC5mcm9tQXJyYXkoZGF0YSwgY21wKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiByZW1vdmUobSwgZSkge1xuICB2YXIgZGF0YSA9IG0uZGF0YTtcbiAgdmFyIGNtcCA9IG0uY21wO1xuICB2YXIgbmV3RGF0YSA9IEJlbHRfU2V0RGljdC5yZW1vdmUoZGF0YSwgZSwgY21wKTtcbiAgaWYgKG5ld0RhdGEgPT09IGRhdGEpIHtcbiAgICByZXR1cm4gbTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgY21wOiBjbXAsXG4gICAgICAgICAgICBkYXRhOiBuZXdEYXRhXG4gICAgICAgICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGQobSwgZSkge1xuICB2YXIgZGF0YSA9IG0uZGF0YTtcbiAgdmFyIGNtcCA9IG0uY21wO1xuICB2YXIgbmV3RGF0YSA9IEJlbHRfU2V0RGljdC5hZGQoZGF0YSwgZSwgY21wKTtcbiAgaWYgKG5ld0RhdGEgPT09IGRhdGEpIHtcbiAgICByZXR1cm4gbTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgY21wOiBjbXAsXG4gICAgICAgICAgICBkYXRhOiBuZXdEYXRhXG4gICAgICAgICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZU1hbnkobSwgZSkge1xuICB2YXIgY21wID0gbS5jbXA7XG4gIHJldHVybiB7XG4gICAgICAgICAgY21wOiBjbXAsXG4gICAgICAgICAgZGF0YTogQmVsdF9TZXREaWN0Lm1lcmdlTWFueShtLmRhdGEsIGUsIGNtcClcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTWFueShtLCBlKSB7XG4gIHZhciBjbXAgPSBtLmNtcDtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBjbXA6IGNtcCxcbiAgICAgICAgICBkYXRhOiBCZWx0X1NldERpY3QucmVtb3ZlTWFueShtLmRhdGEsIGUsIGNtcClcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gdW5pb24obSwgbikge1xuICB2YXIgY21wID0gbS5jbXA7XG4gIHJldHVybiB7XG4gICAgICAgICAgY21wOiBjbXAsXG4gICAgICAgICAgZGF0YTogQmVsdF9TZXREaWN0LnVuaW9uKG0uZGF0YSwgbi5kYXRhLCBjbXApXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGludGVyc2VjdChtLCBuKSB7XG4gIHZhciBjbXAgPSBtLmNtcDtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBjbXA6IGNtcCxcbiAgICAgICAgICBkYXRhOiBCZWx0X1NldERpY3QuaW50ZXJzZWN0KG0uZGF0YSwgbi5kYXRhLCBjbXApXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGRpZmYobSwgbikge1xuICB2YXIgY21wID0gbS5jbXA7XG4gIHJldHVybiB7XG4gICAgICAgICAgY21wOiBjbXAsXG4gICAgICAgICAgZGF0YTogQmVsdF9TZXREaWN0LmRpZmYobS5kYXRhLCBuLmRhdGEsIGNtcClcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gc3Vic2V0KG0sIG4pIHtcbiAgdmFyIGNtcCA9IG0uY21wO1xuICByZXR1cm4gQmVsdF9TZXREaWN0LnN1YnNldChtLmRhdGEsIG4uZGF0YSwgY21wKTtcbn1cblxuZnVuY3Rpb24gc3BsaXQobSwgZSkge1xuICB2YXIgY21wID0gbS5jbXA7XG4gIHZhciBtYXRjaCA9IEJlbHRfU2V0RGljdC5zcGxpdChtLmRhdGEsIGUsIGNtcCk7XG4gIHZhciBtYXRjaCQxID0gbWF0Y2hbMF07XG4gIHJldHVybiBbXG4gICAgICAgICAgW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBjbXA6IGNtcCxcbiAgICAgICAgICAgICAgZGF0YTogbWF0Y2gkMVswXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY21wOiBjbXAsXG4gICAgICAgICAgICAgIGRhdGE6IG1hdGNoJDFbMV1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdLFxuICAgICAgICAgIG1hdGNoWzFdXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIG1ha2UoaWQpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBjbXA6IGlkLmNtcCxcbiAgICAgICAgICBkYXRhOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eShtKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QuaXNFbXB0eShtLmRhdGEpO1xufVxuXG5mdW5jdGlvbiBjbXAobSwgbikge1xuICB2YXIgY21wJDEgPSBtLmNtcDtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5jbXAobS5kYXRhLCBuLmRhdGEsIGNtcCQxKTtcbn1cblxuZnVuY3Rpb24gZXEobSwgbikge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LmVxKG0uZGF0YSwgbi5kYXRhLCBtLmNtcCk7XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hVKG0sIGYpIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5mb3JFYWNoVShtLmRhdGEsIGYpO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoKG0sIGYpIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5mb3JFYWNoVShtLmRhdGEsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVUobSwgYWNjLCBmKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QucmVkdWNlVShtLmRhdGEsIGFjYywgZik7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZShtLCBhY2MsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVUobSwgYWNjLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiBldmVyeVUobSwgZikge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LmV2ZXJ5VShtLmRhdGEsIGYpO1xufVxuXG5mdW5jdGlvbiBldmVyeShtLCBmKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QuZXZlcnlVKG0uZGF0YSwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gc29tZVUobSwgZikge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LnNvbWVVKG0uZGF0YSwgZik7XG59XG5cbmZ1bmN0aW9uIHNvbWUobSwgZikge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LnNvbWVVKG0uZGF0YSwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24ga2VlcFUobSwgZikge1xuICByZXR1cm4ge1xuICAgICAgICAgIGNtcDogbS5jbXAsXG4gICAgICAgICAgZGF0YTogQmVsdF9TZXREaWN0LmtlZXBVKG0uZGF0YSwgZilcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24ga2VlcChtLCBmKSB7XG4gIHJldHVybiBrZWVwVShtLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb25VKG0sIGYpIHtcbiAgdmFyIG1hdGNoID0gQmVsdF9TZXREaWN0LnBhcnRpdGlvblUobS5kYXRhLCBmKTtcbiAgdmFyIGNtcCA9IG0uY21wO1xuICByZXR1cm4gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNtcDogY21wLFxuICAgICAgICAgICAgZGF0YTogbWF0Y2hbMF1cbiAgICAgICAgICB9LFxuICAgICAgICAgIHtcbiAgICAgICAgICAgIGNtcDogY21wLFxuICAgICAgICAgICAgZGF0YTogbWF0Y2hbMV1cbiAgICAgICAgICB9XG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIHBhcnRpdGlvbihtLCBmKSB7XG4gIHJldHVybiBwYXJ0aXRpb25VKG0sIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIHNpemUobSkge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LnNpemUobS5kYXRhKTtcbn1cblxuZnVuY3Rpb24gdG9MaXN0KG0pIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC50b0xpc3QobS5kYXRhKTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheShtKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QudG9BcnJheShtLmRhdGEpO1xufVxuXG5mdW5jdGlvbiBtaW5pbXVtKG0pIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5taW5pbXVtKG0uZGF0YSk7XG59XG5cbmZ1bmN0aW9uIG1pblVuZGVmaW5lZChtKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QubWluVW5kZWZpbmVkKG0uZGF0YSk7XG59XG5cbmZ1bmN0aW9uIG1heGltdW0obSkge1xuICByZXR1cm4gQmVsdF9TZXREaWN0Lm1heGltdW0obS5kYXRhKTtcbn1cblxuZnVuY3Rpb24gbWF4VW5kZWZpbmVkKG0pIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5tYXhVbmRlZmluZWQobS5kYXRhKTtcbn1cblxuZnVuY3Rpb24gZ2V0KG0sIGUpIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5nZXQobS5kYXRhLCBlLCBtLmNtcCk7XG59XG5cbmZ1bmN0aW9uIGdldFVuZGVmaW5lZChtLCBlKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QuZ2V0VW5kZWZpbmVkKG0uZGF0YSwgZSwgbS5jbXApO1xufVxuXG5mdW5jdGlvbiBnZXRFeG4obSwgZSkge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LmdldEV4bihtLmRhdGEsIGUsIG0uY21wKTtcbn1cblxuZnVuY3Rpb24gaGFzKG0sIGUpIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5oYXMobS5kYXRhLCBlLCBtLmNtcCk7XG59XG5cbmZ1bmN0aW9uIGZyb21Tb3J0ZWRBcnJheVVuc2FmZSh4cywgaWQpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBjbXA6IGlkLmNtcCxcbiAgICAgICAgICBkYXRhOiBCZWx0X1NldERpY3QuZnJvbVNvcnRlZEFycmF5VW5zYWZlKHhzKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBnZXREYXRhKG0pIHtcbiAgcmV0dXJuIG0uZGF0YTtcbn1cblxuZnVuY3Rpb24gZ2V0SWQobSkge1xuICB2YXIgY21wID0gbS5jbXA7XG4gIHJldHVybiB7XG4gICAgICAgICAgY21wOiBjbXBcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gcGFja0lkRGF0YShpZCwgZGF0YSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIGNtcDogaWQuY21wLFxuICAgICAgICAgIGRhdGE6IGRhdGFcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gY2hlY2tJbnZhcmlhbnRJbnRlcm5hbChkKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QuY2hlY2tJbnZhcmlhbnRJbnRlcm5hbChkLmRhdGEpO1xufVxuXG52YXIgSW50O1xuXG52YXIgJCRTdHJpbmc7XG5cbnZhciBEaWN0O1xuXG5leHBvcnQge1xuICBJbnQgLFxuICAkJFN0cmluZyAsXG4gIERpY3QgLFxuICBtYWtlICxcbiAgZnJvbUFycmF5ICxcbiAgZnJvbVNvcnRlZEFycmF5VW5zYWZlICxcbiAgaXNFbXB0eSAsXG4gIGhhcyAsXG4gIGFkZCAsXG4gIG1lcmdlTWFueSAsXG4gIHJlbW92ZSAsXG4gIHJlbW92ZU1hbnkgLFxuICB1bmlvbiAsXG4gIGludGVyc2VjdCAsXG4gIGRpZmYgLFxuICBzdWJzZXQgLFxuICBjbXAgLFxuICBlcSAsXG4gIGZvckVhY2hVICxcbiAgZm9yRWFjaCAsXG4gIHJlZHVjZVUgLFxuICByZWR1Y2UgLFxuICBldmVyeVUgLFxuICBldmVyeSAsXG4gIHNvbWVVICxcbiAgc29tZSAsXG4gIGtlZXBVICxcbiAga2VlcCAsXG4gIHBhcnRpdGlvblUgLFxuICBwYXJ0aXRpb24gLFxuICBzaXplICxcbiAgdG9BcnJheSAsXG4gIHRvTGlzdCAsXG4gIG1pbmltdW0gLFxuICBtaW5VbmRlZmluZWQgLFxuICBtYXhpbXVtICxcbiAgbWF4VW5kZWZpbmVkICxcbiAgZ2V0ICxcbiAgZ2V0VW5kZWZpbmVkICxcbiAgZ2V0RXhuICxcbiAgc3BsaXQgLFxuICBjaGVja0ludmFyaWFudEludGVybmFsICxcbiAgZ2V0RGF0YSAsXG4gIGdldElkICxcbiAgcGFja0lkRGF0YSAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBCZWx0X2ludGVybmFsQVZMc2V0IGZyb20gXCIuL2JlbHRfaW50ZXJuYWxBVkxzZXQuanNcIjtcblxuZnVuY3Rpb24gYWRkKHQsIHgsIGNtcCkge1xuICBpZiAodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIEJlbHRfaW50ZXJuYWxBVkxzZXQuc2luZ2xldG9uKHgpO1xuICB9XG4gIHZhciBrID0gdC52O1xuICB2YXIgYyA9IGNtcCh4LCBrKTtcbiAgaWYgKGMgPT09IDApIHtcbiAgICByZXR1cm4gdDtcbiAgfVxuICB2YXIgbCA9IHQubDtcbiAgdmFyIHIgPSB0LnI7XG4gIGlmIChjIDwgMCkge1xuICAgIHZhciBsbCA9IGFkZChsLCB4LCBjbXApO1xuICAgIGlmIChsbCA9PT0gbCkge1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LmJhbChsbCwgaywgcik7XG4gICAgfVxuICB9XG4gIHZhciByciA9IGFkZChyLCB4LCBjbXApO1xuICBpZiAocnIgPT09IHIpIHtcbiAgICByZXR1cm4gdDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5iYWwobCwgaywgcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZSh0LCB4LCBjbXApIHtcbiAgaWYgKHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB0O1xuICB9XG4gIHZhciB2ID0gdC52O1xuICB2YXIgbCA9IHQubDtcbiAgdmFyIHIgPSB0LnI7XG4gIHZhciBjID0gY21wKHgsIHYpO1xuICBpZiAoYyA9PT0gMCkge1xuICAgIGlmIChsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiByO1xuICAgIH1cbiAgICBpZiAociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbDtcbiAgICB9XG4gICAgdmFyIHYkMSA9IHtcbiAgICAgIGNvbnRlbnRzOiByLnZcbiAgICB9O1xuICAgIHZhciByJDEgPSBCZWx0X2ludGVybmFsQVZMc2V0LnJlbW92ZU1pbkF1eFdpdGhSZWYociwgdiQxKTtcbiAgICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5iYWwobCwgdiQxLmNvbnRlbnRzLCByJDEpO1xuICB9XG4gIGlmIChjIDwgMCkge1xuICAgIHZhciBsbCA9IHJlbW92ZShsLCB4LCBjbXApO1xuICAgIGlmIChsbCA9PT0gbCkge1xuICAgICAgcmV0dXJuIHQ7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LmJhbChsbCwgdiwgcik7XG4gICAgfVxuICB9XG4gIHZhciByciA9IHJlbW92ZShyLCB4LCBjbXApO1xuICBpZiAocnIgPT09IHIpIHtcbiAgICByZXR1cm4gdDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5iYWwobCwgdiwgcnIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1lcmdlTWFueShoLCBhcnIsIGNtcCkge1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIHYgPSBoO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgIHZhciBrZXkgPSBhcnJbaV07XG4gICAgdiA9IGFkZCh2LCBrZXksIGNtcCk7XG4gIH1cbiAgcmV0dXJuIHY7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1hbnkoaCwgYXJyLCBjbXApIHtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciB2ID0gaDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICB2YXIga2V5ID0gYXJyW2ldO1xuICAgIHYgPSByZW1vdmUodiwga2V5LCBjbXApO1xuICB9XG4gIHJldHVybiB2O1xufVxuXG5mdW5jdGlvbiBzcGxpdEF1eE5vUGl2b3QoY21wLCBuLCB4KSB7XG4gIHZhciB2ID0gbi52O1xuICB2YXIgbCA9IG4ubDtcbiAgdmFyIHIgPSBuLnI7XG4gIHZhciBjID0gY21wKHgsIHYpO1xuICBpZiAoYyA9PT0gMCkge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBsLFxuICAgICAgICAgICAgclxuICAgICAgICAgIF07XG4gIH1cbiAgaWYgKGMgPCAwKSB7XG4gICAgaWYgKGwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBuXG4gICAgICAgICAgICBdO1xuICAgIH1cbiAgICB2YXIgbWF0Y2ggPSBzcGxpdEF1eE5vUGl2b3QoY21wLCBsLCB4KTtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgbWF0Y2hbMF0sXG4gICAgICAgICAgICBCZWx0X2ludGVybmFsQVZMc2V0LmpvaW5TaGFyZWQobWF0Y2hbMV0sIHYsIHIpXG4gICAgICAgICAgXTtcbiAgfVxuICBpZiAociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICBdO1xuICB9XG4gIHZhciBtYXRjaCQxID0gc3BsaXRBdXhOb1Bpdm90KGNtcCwgciwgeCk7XG4gIHJldHVybiBbXG4gICAgICAgICAgQmVsdF9pbnRlcm5hbEFWTHNldC5qb2luU2hhcmVkKGwsIHYsIG1hdGNoJDFbMF0pLFxuICAgICAgICAgIG1hdGNoJDFbMV1cbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gc3BsaXRBdXhQaXZvdChjbXAsIG4sIHgsIHByZXMpIHtcbiAgdmFyIHYgPSBuLnY7XG4gIHZhciBsID0gbi5sO1xuICB2YXIgciA9IG4ucjtcbiAgdmFyIGMgPSBjbXAoeCwgdik7XG4gIGlmIChjID09PSAwKSB7XG4gICAgcHJlcy5jb250ZW50cyA9IHRydWU7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGwsXG4gICAgICAgICAgICByXG4gICAgICAgICAgXTtcbiAgfVxuICBpZiAoYyA8IDApIHtcbiAgICBpZiAobCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICB1bmRlZmluZWQsXG4gICAgICAgICAgICAgIG5cbiAgICAgICAgICAgIF07XG4gICAgfVxuICAgIHZhciBtYXRjaCA9IHNwbGl0QXV4UGl2b3QoY21wLCBsLCB4LCBwcmVzKTtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgbWF0Y2hbMF0sXG4gICAgICAgICAgICBCZWx0X2ludGVybmFsQVZMc2V0LmpvaW5TaGFyZWQobWF0Y2hbMV0sIHYsIHIpXG4gICAgICAgICAgXTtcbiAgfVxuICBpZiAociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG4sXG4gICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICBdO1xuICB9XG4gIHZhciBtYXRjaCQxID0gc3BsaXRBdXhQaXZvdChjbXAsIHIsIHgsIHByZXMpO1xuICByZXR1cm4gW1xuICAgICAgICAgIEJlbHRfaW50ZXJuYWxBVkxzZXQuam9pblNoYXJlZChsLCB2LCBtYXRjaCQxWzBdKSxcbiAgICAgICAgICBtYXRjaCQxWzFdXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIHNwbGl0KHQsIHgsIGNtcCkge1xuICBpZiAodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICB1bmRlZmluZWRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmYWxzZVxuICAgICAgICAgIF07XG4gIH1cbiAgdmFyIHByZXMgPSB7XG4gICAgY29udGVudHM6IGZhbHNlXG4gIH07XG4gIHZhciB2ID0gc3BsaXRBdXhQaXZvdChjbXAsIHQsIHgsIHByZXMpO1xuICByZXR1cm4gW1xuICAgICAgICAgIHYsXG4gICAgICAgICAgcHJlcy5jb250ZW50c1xuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiB1bmlvbihzMSwgczIsIGNtcCkge1xuICBpZiAoczEgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBzMjtcbiAgfVxuICBpZiAoczIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBzMTtcbiAgfVxuICB2YXIgaDEgPSBzMS5oO1xuICB2YXIgaDIgPSBzMi5oO1xuICBpZiAoaDEgPj0gaDIpIHtcbiAgICBpZiAoaDIgPT09IDEpIHtcbiAgICAgIHJldHVybiBhZGQoczEsIHMyLnYsIGNtcCk7XG4gICAgfVxuICAgIHZhciB2MSA9IHMxLnY7XG4gICAgdmFyIGwxID0gczEubDtcbiAgICB2YXIgcjEgPSBzMS5yO1xuICAgIHZhciBtYXRjaCA9IHNwbGl0QXV4Tm9QaXZvdChjbXAsIHMyLCB2MSk7XG4gICAgcmV0dXJuIEJlbHRfaW50ZXJuYWxBVkxzZXQuam9pblNoYXJlZCh1bmlvbihsMSwgbWF0Y2hbMF0sIGNtcCksIHYxLCB1bmlvbihyMSwgbWF0Y2hbMV0sIGNtcCkpO1xuICB9XG4gIGlmIChoMSA9PT0gMSkge1xuICAgIHJldHVybiBhZGQoczIsIHMxLnYsIGNtcCk7XG4gIH1cbiAgdmFyIHYyID0gczIudjtcbiAgdmFyIGwyID0gczIubDtcbiAgdmFyIHIyID0gczIucjtcbiAgdmFyIG1hdGNoJDEgPSBzcGxpdEF1eE5vUGl2b3QoY21wLCBzMSwgdjIpO1xuICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5qb2luU2hhcmVkKHVuaW9uKG1hdGNoJDFbMF0sIGwyLCBjbXApLCB2MiwgdW5pb24obWF0Y2gkMVsxXSwgcjIsIGNtcCkpO1xufVxuXG5mdW5jdGlvbiBpbnRlcnNlY3QoczEsIHMyLCBjbXApIHtcbiAgaWYgKHMxID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIGlmIChzMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgdjEgPSBzMS52O1xuICB2YXIgbDEgPSBzMS5sO1xuICB2YXIgcjEgPSBzMS5yO1xuICB2YXIgcHJlcyA9IHtcbiAgICBjb250ZW50czogZmFsc2VcbiAgfTtcbiAgdmFyIG1hdGNoID0gc3BsaXRBdXhQaXZvdChjbXAsIHMyLCB2MSwgcHJlcyk7XG4gIHZhciBsbCA9IGludGVyc2VjdChsMSwgbWF0Y2hbMF0sIGNtcCk7XG4gIHZhciByciA9IGludGVyc2VjdChyMSwgbWF0Y2hbMV0sIGNtcCk7XG4gIGlmIChwcmVzLmNvbnRlbnRzKSB7XG4gICAgcmV0dXJuIEJlbHRfaW50ZXJuYWxBVkxzZXQuam9pblNoYXJlZChsbCwgdjEsIHJyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5jb25jYXRTaGFyZWQobGwsIHJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBkaWZmKHMxLCBzMiwgY21wKSB7XG4gIGlmIChzMSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHMxO1xuICB9XG4gIGlmIChzMiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHMxO1xuICB9XG4gIHZhciB2MSA9IHMxLnY7XG4gIHZhciBsMSA9IHMxLmw7XG4gIHZhciByMSA9IHMxLnI7XG4gIHZhciBwcmVzID0ge1xuICAgIGNvbnRlbnRzOiBmYWxzZVxuICB9O1xuICB2YXIgbWF0Y2ggPSBzcGxpdEF1eFBpdm90KGNtcCwgczIsIHYxLCBwcmVzKTtcbiAgdmFyIGxsID0gZGlmZihsMSwgbWF0Y2hbMF0sIGNtcCk7XG4gIHZhciByciA9IGRpZmYocjEsIG1hdGNoWzFdLCBjbXApO1xuICBpZiAocHJlcy5jb250ZW50cykge1xuICAgIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LmNvbmNhdFNoYXJlZChsbCwgcnIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LmpvaW5TaGFyZWQobGwsIHYxLCBycik7XG4gIH1cbn1cblxudmFyIGVtcHR5O1xuXG52YXIgZnJvbUFycmF5ID0gQmVsdF9pbnRlcm5hbEFWTHNldC5mcm9tQXJyYXk7XG5cbnZhciBmcm9tU29ydGVkQXJyYXlVbnNhZmUgPSBCZWx0X2ludGVybmFsQVZMc2V0LmZyb21Tb3J0ZWRBcnJheVVuc2FmZTtcblxudmFyIGlzRW1wdHkgPSBCZWx0X2ludGVybmFsQVZMc2V0LmlzRW1wdHk7XG5cbnZhciBoYXMgPSBCZWx0X2ludGVybmFsQVZMc2V0LmhhcztcblxudmFyIHN1YnNldCA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuc3Vic2V0O1xuXG52YXIgY21wID0gQmVsdF9pbnRlcm5hbEFWTHNldC5jbXA7XG5cbnZhciBlcSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuZXE7XG5cbnZhciBmb3JFYWNoVSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuZm9yRWFjaFU7XG5cbnZhciBmb3JFYWNoID0gQmVsdF9pbnRlcm5hbEFWTHNldC5mb3JFYWNoO1xuXG52YXIgcmVkdWNlVSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQucmVkdWNlVTtcblxudmFyIHJlZHVjZSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQucmVkdWNlO1xuXG52YXIgZXZlcnlVID0gQmVsdF9pbnRlcm5hbEFWTHNldC5ldmVyeVU7XG5cbnZhciBldmVyeSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuZXZlcnk7XG5cbnZhciBzb21lVSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuc29tZVU7XG5cbnZhciBzb21lID0gQmVsdF9pbnRlcm5hbEFWTHNldC5zb21lO1xuXG52YXIga2VlcFUgPSBCZWx0X2ludGVybmFsQVZMc2V0LmtlZXBTaGFyZWRVO1xuXG52YXIga2VlcCA9IEJlbHRfaW50ZXJuYWxBVkxzZXQua2VlcFNoYXJlZDtcblxudmFyIHBhcnRpdGlvblUgPSBCZWx0X2ludGVybmFsQVZMc2V0LnBhcnRpdGlvblNoYXJlZFU7XG5cbnZhciBwYXJ0aXRpb24gPSBCZWx0X2ludGVybmFsQVZMc2V0LnBhcnRpdGlvblNoYXJlZDtcblxudmFyIHNpemUgPSBCZWx0X2ludGVybmFsQVZMc2V0LnNpemU7XG5cbnZhciB0b0xpc3QgPSBCZWx0X2ludGVybmFsQVZMc2V0LnRvTGlzdDtcblxudmFyIHRvQXJyYXkgPSBCZWx0X2ludGVybmFsQVZMc2V0LnRvQXJyYXk7XG5cbnZhciBtaW5pbXVtID0gQmVsdF9pbnRlcm5hbEFWTHNldC5taW5pbXVtO1xuXG52YXIgbWluVW5kZWZpbmVkID0gQmVsdF9pbnRlcm5hbEFWTHNldC5taW5VbmRlZmluZWQ7XG5cbnZhciBtYXhpbXVtID0gQmVsdF9pbnRlcm5hbEFWTHNldC5tYXhpbXVtO1xuXG52YXIgbWF4VW5kZWZpbmVkID0gQmVsdF9pbnRlcm5hbEFWTHNldC5tYXhVbmRlZmluZWQ7XG5cbnZhciBnZXQgPSBCZWx0X2ludGVybmFsQVZMc2V0LmdldDtcblxudmFyIGdldFVuZGVmaW5lZCA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuZ2V0VW5kZWZpbmVkO1xuXG52YXIgZ2V0RXhuID0gQmVsdF9pbnRlcm5hbEFWTHNldC5nZXRFeG47XG5cbnZhciBjaGVja0ludmFyaWFudEludGVybmFsID0gQmVsdF9pbnRlcm5hbEFWTHNldC5jaGVja0ludmFyaWFudEludGVybmFsO1xuXG5leHBvcnQge1xuICBlbXB0eSAsXG4gIGZyb21BcnJheSAsXG4gIGZyb21Tb3J0ZWRBcnJheVVuc2FmZSAsXG4gIGlzRW1wdHkgLFxuICBoYXMgLFxuICBhZGQgLFxuICBtZXJnZU1hbnkgLFxuICByZW1vdmUgLFxuICByZW1vdmVNYW55ICxcbiAgdW5pb24gLFxuICBpbnRlcnNlY3QgLFxuICBkaWZmICxcbiAgc3Vic2V0ICxcbiAgY21wICxcbiAgZXEgLFxuICBmb3JFYWNoVSAsXG4gIGZvckVhY2ggLFxuICByZWR1Y2VVICxcbiAgcmVkdWNlICxcbiAgZXZlcnlVICxcbiAgZXZlcnkgLFxuICBzb21lVSAsXG4gIHNvbWUgLFxuICBrZWVwVSAsXG4gIGtlZXAgLFxuICBwYXJ0aXRpb25VICxcbiAgcGFydGl0aW9uICxcbiAgc2l6ZSAsXG4gIHRvTGlzdCAsXG4gIHRvQXJyYXkgLFxuICBtaW5pbXVtICxcbiAgbWluVW5kZWZpbmVkICxcbiAgbWF4aW11bSAsXG4gIG1heFVuZGVmaW5lZCAsXG4gIGdldCAsXG4gIGdldFVuZGVmaW5lZCAsXG4gIGdldEV4biAsXG4gIHNwbGl0ICxcbiAgY2hlY2tJbnZhcmlhbnRJbnRlcm5hbCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwiLi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9BcnJheSBmcm9tIFwiLi9iZWx0X0FycmF5LmpzXCI7XG5cbmZ1bmN0aW9uIHNvcnRlZExlbmd0aEF1eE1vcmUoeHMsIF9wcmVjLCBfYWNjLCBsZW4sIGx0KSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYWNjID0gX2FjYztcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIGlmIChhY2MgPj0gbGVuKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICB2YXIgdiA9IHhzW2FjY107XG4gICAgaWYgKCFsdCh2LCBwcmVjKSkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgX2FjYyA9IGFjYyArIDEgfCAwO1xuICAgIF9wcmVjID0gdjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHN0cmljdGx5U29ydGVkTGVuZ3RoVSh4cywgbHQpIHtcbiAgdmFyIGxlbiA9IHhzLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMCB8fCBsZW4gPT09IDEpIHtcbiAgICByZXR1cm4gbGVuO1xuICB9XG4gIHZhciB4MCA9IHhzWzBdO1xuICB2YXIgeDEgPSB4c1sxXTtcbiAgaWYgKGx0KHgwLCB4MSkpIHtcbiAgICB2YXIgX3ByZWMgPSB4MTtcbiAgICB2YXIgX2FjYyA9IDI7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgICAgaWYgKGFjYyA+PSBsZW4pIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cbiAgICAgIHZhciB2ID0geHNbYWNjXTtcbiAgICAgIGlmICghbHQocHJlYywgdikpIHtcbiAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgIH1cbiAgICAgIF9hY2MgPSBhY2MgKyAxIHwgMDtcbiAgICAgIF9wcmVjID0gdjtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9IGVsc2UgaWYgKGx0KHgxLCB4MCkpIHtcbiAgICByZXR1cm4gLXNvcnRlZExlbmd0aEF1eE1vcmUoeHMsIHgxLCAyLCBsZW4sIGx0KSB8IDA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gc3RyaWN0bHlTb3J0ZWRMZW5ndGgoeHMsIGx0KSB7XG4gIHJldHVybiBzdHJpY3RseVNvcnRlZExlbmd0aFUoeHMsIEN1cnJ5Ll9fMihsdCkpO1xufVxuXG5mdW5jdGlvbiBpc1NvcnRlZFUoYSwgY21wKSB7XG4gIHZhciBsZW4gPSBhLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMCkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2Uge1xuICAgIHZhciBfaSA9IDA7XG4gICAgdmFyIGxhc3RfYm91bmQgPSBsZW4gLSAxIHwgMDtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgaSA9IF9pO1xuICAgICAgaWYgKGkgPT09IGxhc3RfYm91bmQpIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgICBpZiAoY21wKGFbaV0sIGFbaSArIDEgfCAwXSkgPiAwKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIF9pID0gaSArIDEgfCAwO1xuICAgICAgY29udGludWUgO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNTb3J0ZWQoYSwgY21wKSB7XG4gIHJldHVybiBpc1NvcnRlZFUoYSwgQ3VycnkuX18yKGNtcCkpO1xufVxuXG5mdW5jdGlvbiBtZXJnZShzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBjbXApIHtcbiAgdmFyIHNyYzFyID0gc3JjMW9mcyArIHNyYzFsZW4gfCAwO1xuICB2YXIgc3JjMnIgPSBzcmMyb2ZzICsgc3JjMmxlbiB8IDA7XG4gIHZhciBfaTEgPSBzcmMxb2ZzO1xuICB2YXIgX3MxID0gc3JjW3NyYzFvZnNdO1xuICB2YXIgX2kyID0gc3JjMm9mcztcbiAgdmFyIF9zMiA9IHNyYzJbc3JjMm9mc107XG4gIHZhciBfZCA9IGRzdG9mcztcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBkID0gX2Q7XG4gICAgdmFyIHMyID0gX3MyO1xuICAgIHZhciBpMiA9IF9pMjtcbiAgICB2YXIgczEgPSBfczE7XG4gICAgdmFyIGkxID0gX2kxO1xuICAgIGlmIChjbXAoczEsIHMyKSA8PSAwKSB7XG4gICAgICBkc3RbZF0gPSBzMTtcbiAgICAgIHZhciBpMSQxID0gaTEgKyAxIHwgMDtcbiAgICAgIGlmIChpMSQxID49IHNyYzFyKSB7XG4gICAgICAgIHJldHVybiBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjMiwgaTIsIGRzdCwgZCArIDEgfCAwLCBzcmMyciAtIGkyIHwgMCk7XG4gICAgICB9XG4gICAgICBfZCA9IGQgKyAxIHwgMDtcbiAgICAgIF9zMSA9IHNyY1tpMSQxXTtcbiAgICAgIF9pMSA9IGkxJDE7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIGRzdFtkXSA9IHMyO1xuICAgIHZhciBpMiQxID0gaTIgKyAxIHwgMDtcbiAgICBpZiAoaTIkMSA+PSBzcmMycikge1xuICAgICAgcmV0dXJuIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMsIGkxLCBkc3QsIGQgKyAxIHwgMCwgc3JjMXIgLSBpMSB8IDApO1xuICAgIH1cbiAgICBfZCA9IGQgKyAxIHwgMDtcbiAgICBfczIgPSBzcmMyW2kyJDFdO1xuICAgIF9pMiA9IGkyJDE7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiB1bmlvblUoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgY21wKSB7XG4gIHZhciBzcmMxciA9IHNyYzFvZnMgKyBzcmMxbGVuIHwgMDtcbiAgdmFyIHNyYzJyID0gc3JjMm9mcyArIHNyYzJsZW4gfCAwO1xuICB2YXIgX2kxID0gc3JjMW9mcztcbiAgdmFyIF9zMSA9IHNyY1tzcmMxb2ZzXTtcbiAgdmFyIF9pMiA9IHNyYzJvZnM7XG4gIHZhciBfczIgPSBzcmMyW3NyYzJvZnNdO1xuICB2YXIgX2QgPSBkc3RvZnM7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgZCA9IF9kO1xuICAgIHZhciBzMiA9IF9zMjtcbiAgICB2YXIgaTIgPSBfaTI7XG4gICAgdmFyIHMxID0gX3MxO1xuICAgIHZhciBpMSA9IF9pMTtcbiAgICB2YXIgYyA9IGNtcChzMSwgczIpO1xuICAgIGlmIChjIDwgMCkge1xuICAgICAgZHN0W2RdID0gczE7XG4gICAgICB2YXIgaTEkMSA9IGkxICsgMSB8IDA7XG4gICAgICB2YXIgZCQxID0gZCArIDEgfCAwO1xuICAgICAgaWYgKGkxJDEgPCBzcmMxcikge1xuICAgICAgICBfZCA9IGQkMTtcbiAgICAgICAgX3MxID0gc3JjW2kxJDFdO1xuICAgICAgICBfaTEgPSBpMSQxO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICB9XG4gICAgICBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjMiwgaTIsIGRzdCwgZCQxLCBzcmMyciAtIGkyIHwgMCk7XG4gICAgICByZXR1cm4gKGQkMSArIHNyYzJyIHwgMCkgLSBpMiB8IDA7XG4gICAgfVxuICAgIGlmIChjID09PSAwKSB7XG4gICAgICBkc3RbZF0gPSBzMTtcbiAgICAgIHZhciBpMSQyID0gaTEgKyAxIHwgMDtcbiAgICAgIHZhciBpMiQxID0gaTIgKyAxIHwgMDtcbiAgICAgIHZhciBkJDIgPSBkICsgMSB8IDA7XG4gICAgICBpZiAoIShpMSQyIDwgc3JjMXIgJiYgaTIkMSA8IHNyYzJyKSkge1xuICAgICAgICBpZiAoaTEkMiA9PT0gc3JjMXIpIHtcbiAgICAgICAgICBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjMiwgaTIkMSwgZHN0LCBkJDIsIHNyYzJyIC0gaTIkMSB8IDApO1xuICAgICAgICAgIHJldHVybiAoZCQyICsgc3JjMnIgfCAwKSAtIGkyJDEgfCAwO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMsIGkxJDIsIGRzdCwgZCQyLCBzcmMxciAtIGkxJDIgfCAwKTtcbiAgICAgICAgICByZXR1cm4gKGQkMiArIHNyYzFyIHwgMCkgLSBpMSQyIHwgMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX2QgPSBkJDI7XG4gICAgICBfczIgPSBzcmMyW2kyJDFdO1xuICAgICAgX2kyID0gaTIkMTtcbiAgICAgIF9zMSA9IHNyY1tpMSQyXTtcbiAgICAgIF9pMSA9IGkxJDI7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIGRzdFtkXSA9IHMyO1xuICAgIHZhciBpMiQyID0gaTIgKyAxIHwgMDtcbiAgICB2YXIgZCQzID0gZCArIDEgfCAwO1xuICAgIGlmIChpMiQyIDwgc3JjMnIpIHtcbiAgICAgIF9kID0gZCQzO1xuICAgICAgX3MyID0gc3JjMltpMiQyXTtcbiAgICAgIF9pMiA9IGkyJDI7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMsIGkxLCBkc3QsIGQkMywgc3JjMXIgLSBpMSB8IDApO1xuICAgIHJldHVybiAoZCQzICsgc3JjMXIgfCAwKSAtIGkxIHwgMDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdW5pb24oc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgY21wKSB7XG4gIHJldHVybiB1bmlvblUoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgQ3VycnkuX18yKGNtcCkpO1xufVxuXG5mdW5jdGlvbiBpbnRlcnNlY3RVKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIGNtcCkge1xuICB2YXIgc3JjMXIgPSBzcmMxb2ZzICsgc3JjMWxlbiB8IDA7XG4gIHZhciBzcmMyciA9IHNyYzJvZnMgKyBzcmMybGVuIHwgMDtcbiAgdmFyIF9pMSA9IHNyYzFvZnM7XG4gIHZhciBfczEgPSBzcmNbc3JjMW9mc107XG4gIHZhciBfaTIgPSBzcmMyb2ZzO1xuICB2YXIgX3MyID0gc3JjMltzcmMyb2ZzXTtcbiAgdmFyIF9kID0gZHN0b2ZzO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGQgPSBfZDtcbiAgICB2YXIgczIgPSBfczI7XG4gICAgdmFyIGkyID0gX2kyO1xuICAgIHZhciBzMSA9IF9zMTtcbiAgICB2YXIgaTEgPSBfaTE7XG4gICAgdmFyIGMgPSBjbXAoczEsIHMyKTtcbiAgICBpZiAoYyA8IDApIHtcbiAgICAgIHZhciBpMSQxID0gaTEgKyAxIHwgMDtcbiAgICAgIGlmIChpMSQxID49IHNyYzFyKSB7XG4gICAgICAgIHJldHVybiBkO1xuICAgICAgfVxuICAgICAgX3MxID0gc3JjW2kxJDFdO1xuICAgICAgX2kxID0gaTEkMTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgaWYgKGMgPT09IDApIHtcbiAgICAgIGRzdFtkXSA9IHMxO1xuICAgICAgdmFyIGkxJDIgPSBpMSArIDEgfCAwO1xuICAgICAgdmFyIGkyJDEgPSBpMiArIDEgfCAwO1xuICAgICAgdmFyIGQkMSA9IGQgKyAxIHwgMDtcbiAgICAgIGlmICghKGkxJDIgPCBzcmMxciAmJiBpMiQxIDwgc3JjMnIpKSB7XG4gICAgICAgIHJldHVybiBkJDE7XG4gICAgICB9XG4gICAgICBfZCA9IGQkMTtcbiAgICAgIF9zMiA9IHNyYzJbaTIkMV07XG4gICAgICBfaTIgPSBpMiQxO1xuICAgICAgX3MxID0gc3JjW2kxJDJdO1xuICAgICAgX2kxID0gaTEkMjtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgdmFyIGkyJDIgPSBpMiArIDEgfCAwO1xuICAgIGlmIChpMiQyID49IHNyYzJyKSB7XG4gICAgICByZXR1cm4gZDtcbiAgICB9XG4gICAgX3MyID0gc3JjMltpMiQyXTtcbiAgICBfaTIgPSBpMiQyO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW50ZXJzZWN0KHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIGNtcCkge1xuICByZXR1cm4gaW50ZXJzZWN0VShzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBDdXJyeS5fXzIoY21wKSk7XG59XG5cbmZ1bmN0aW9uIGRpZmZVKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIGNtcCkge1xuICB2YXIgc3JjMXIgPSBzcmMxb2ZzICsgc3JjMWxlbiB8IDA7XG4gIHZhciBzcmMyciA9IHNyYzJvZnMgKyBzcmMybGVuIHwgMDtcbiAgdmFyIF9pMSA9IHNyYzFvZnM7XG4gIHZhciBfczEgPSBzcmNbc3JjMW9mc107XG4gIHZhciBfaTIgPSBzcmMyb2ZzO1xuICB2YXIgX3MyID0gc3JjMltzcmMyb2ZzXTtcbiAgdmFyIF9kID0gZHN0b2ZzO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGQgPSBfZDtcbiAgICB2YXIgczIgPSBfczI7XG4gICAgdmFyIGkyID0gX2kyO1xuICAgIHZhciBzMSA9IF9zMTtcbiAgICB2YXIgaTEgPSBfaTE7XG4gICAgdmFyIGMgPSBjbXAoczEsIHMyKTtcbiAgICBpZiAoYyA8IDApIHtcbiAgICAgIGRzdFtkXSA9IHMxO1xuICAgICAgdmFyIGQkMSA9IGQgKyAxIHwgMDtcbiAgICAgIHZhciBpMSQxID0gaTEgKyAxIHwgMDtcbiAgICAgIGlmIChpMSQxID49IHNyYzFyKSB7XG4gICAgICAgIHJldHVybiBkJDE7XG4gICAgICB9XG4gICAgICBfZCA9IGQkMTtcbiAgICAgIF9zMSA9IHNyY1tpMSQxXTtcbiAgICAgIF9pMSA9IGkxJDE7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIGlmIChjID09PSAwKSB7XG4gICAgICB2YXIgaTEkMiA9IGkxICsgMSB8IDA7XG4gICAgICB2YXIgaTIkMSA9IGkyICsgMSB8IDA7XG4gICAgICBpZiAoIShpMSQyIDwgc3JjMXIgJiYgaTIkMSA8IHNyYzJyKSkge1xuICAgICAgICBpZiAoaTEkMiA9PT0gc3JjMXIpIHtcbiAgICAgICAgICByZXR1cm4gZDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjLCBpMSQyLCBkc3QsIGQsIHNyYzFyIC0gaTEkMiB8IDApO1xuICAgICAgICAgIHJldHVybiAoZCArIHNyYzFyIHwgMCkgLSBpMSQyIHwgMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX3MyID0gc3JjMltpMiQxXTtcbiAgICAgIF9pMiA9IGkyJDE7XG4gICAgICBfczEgPSBzcmNbaTEkMl07XG4gICAgICBfaTEgPSBpMSQyO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICB2YXIgaTIkMiA9IGkyICsgMSB8IDA7XG4gICAgaWYgKGkyJDIgPCBzcmMycikge1xuICAgICAgX3MyID0gc3JjMltpMiQyXTtcbiAgICAgIF9pMiA9IGkyJDI7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIEJlbHRfQXJyYXkuYmxpdFVuc2FmZShzcmMsIGkxLCBkc3QsIGQsIHNyYzFyIC0gaTEgfCAwKTtcbiAgICByZXR1cm4gKGQgKyBzcmMxciB8IDApIC0gaTEgfCAwO1xuICB9O1xufVxuXG5mdW5jdGlvbiBkaWZmKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIGNtcCkge1xuICByZXR1cm4gZGlmZlUoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgQ3VycnkuX18yKGNtcCkpO1xufVxuXG5mdW5jdGlvbiBpbnNlcnRpb25Tb3J0KHNyYywgc3Jjb2ZzLCBkc3QsIGRzdG9mcywgbGVuLCBjbXApIHtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICB2YXIgZSA9IHNyY1tzcmNvZnMgKyBpIHwgMF07XG4gICAgdmFyIGogPSAoZHN0b2ZzICsgaSB8IDApIC0gMSB8IDA7XG4gICAgd2hpbGUoaiA+PSBkc3RvZnMgJiYgY21wKGRzdFtqXSwgZSkgPiAwKSB7XG4gICAgICBkc3RbaiArIDEgfCAwXSA9IGRzdFtqXTtcbiAgICAgIGogPSBqIC0gMSB8IDA7XG4gICAgfTtcbiAgICBkc3RbaiArIDEgfCAwXSA9IGU7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIHNvcnRUbyhzcmMsIHNyY29mcywgZHN0LCBkc3RvZnMsIGxlbiwgY21wKSB7XG4gIGlmIChsZW4gPD0gNSkge1xuICAgIHJldHVybiBpbnNlcnRpb25Tb3J0KHNyYywgc3Jjb2ZzLCBkc3QsIGRzdG9mcywgbGVuLCBjbXApO1xuICB9XG4gIHZhciBsMSA9IGxlbiAvIDIgfCAwO1xuICB2YXIgbDIgPSBsZW4gLSBsMSB8IDA7XG4gIHNvcnRUbyhzcmMsIHNyY29mcyArIGwxIHwgMCwgZHN0LCBkc3RvZnMgKyBsMSB8IDAsIGwyLCBjbXApO1xuICBzb3J0VG8oc3JjLCBzcmNvZnMsIHNyYywgc3Jjb2ZzICsgbDIgfCAwLCBsMSwgY21wKTtcbiAgcmV0dXJuIG1lcmdlKHNyYywgc3Jjb2ZzICsgbDIgfCAwLCBsMSwgZHN0LCBkc3RvZnMgKyBsMSB8IDAsIGwyLCBkc3QsIGRzdG9mcywgY21wKTtcbn1cblxuZnVuY3Rpb24gc3RhYmxlU29ydEluUGxhY2VCeVUoYSwgY21wKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIGlmIChsIDw9IDUpIHtcbiAgICByZXR1cm4gaW5zZXJ0aW9uU29ydChhLCAwLCBhLCAwLCBsLCBjbXApO1xuICB9XG4gIHZhciBsMSA9IGwgLyAyIHwgMDtcbiAgdmFyIGwyID0gbCAtIGwxIHwgMDtcbiAgdmFyIHQgPSBuZXcgQXJyYXkobDIpO1xuICBzb3J0VG8oYSwgbDEsIHQsIDAsIGwyLCBjbXApO1xuICBzb3J0VG8oYSwgMCwgYSwgbDIsIGwxLCBjbXApO1xuICByZXR1cm4gbWVyZ2UoYSwgbDIsIGwxLCB0LCAwLCBsMiwgYSwgMCwgY21wKTtcbn1cblxuZnVuY3Rpb24gc3RhYmxlU29ydEluUGxhY2VCeShhLCBjbXApIHtcbiAgcmV0dXJuIHN0YWJsZVNvcnRJblBsYWNlQnlVKGEsIEN1cnJ5Ll9fMihjbXApKTtcbn1cblxuZnVuY3Rpb24gc3RhYmxlU29ydEJ5VShhLCBjbXApIHtcbiAgdmFyIGIgPSBhLnNsaWNlKDApO1xuICBzdGFibGVTb3J0SW5QbGFjZUJ5VShiLCBjbXApO1xuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gc3RhYmxlU29ydEJ5KGEsIGNtcCkge1xuICByZXR1cm4gc3RhYmxlU29ydEJ5VShhLCBDdXJyeS5fXzIoY21wKSk7XG59XG5cbmZ1bmN0aW9uIGJpbmFyeVNlYXJjaEJ5VShzb3J0ZWQsIGtleSwgY21wKSB7XG4gIHZhciBsZW4gPSBzb3J0ZWQubGVuZ3RoO1xuICBpZiAobGVuID09PSAwKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9XG4gIHZhciBsbyA9IHNvcnRlZFswXTtcbiAgdmFyIGMgPSBjbXAoa2V5LCBsbyk7XG4gIGlmIChjIDwgMCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICB2YXIgaGkgPSBzb3J0ZWRbbGVuIC0gMSB8IDBdO1xuICB2YXIgYzIgPSBjbXAoa2V5LCBoaSk7XG4gIGlmIChjMiA+IDApIHtcbiAgICByZXR1cm4gLShsZW4gKyAxIHwgMCkgfCAwO1xuICB9IGVsc2Uge1xuICAgIHZhciBfbG8gPSAwO1xuICAgIHZhciBfaGkgPSBsZW4gLSAxIHwgMDtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgaGkkMSA9IF9oaTtcbiAgICAgIHZhciBsbyQxID0gX2xvO1xuICAgICAgdmFyIG1pZCA9IChsbyQxICsgaGkkMSB8IDApIC8gMiB8IDA7XG4gICAgICB2YXIgbWlkVmFsID0gc29ydGVkW21pZF07XG4gICAgICB2YXIgYyQxID0gY21wKGtleSwgbWlkVmFsKTtcbiAgICAgIGlmIChjJDEgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIG1pZDtcbiAgICAgIH1cbiAgICAgIGlmIChjJDEgPCAwKSB7XG4gICAgICAgIGlmIChoaSQxID09PSBtaWQpIHtcbiAgICAgICAgICBpZiAoY21wKHNvcnRlZFtsbyQxXSwga2V5KSA9PT0gMCkge1xuICAgICAgICAgICAgcmV0dXJuIGxvJDE7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIHJldHVybiAtKGhpJDEgKyAxIHwgMCkgfCAwO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBfaGkgPSBtaWQ7XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgIH1cbiAgICAgIGlmIChsbyQxID09PSBtaWQpIHtcbiAgICAgICAgaWYgKGNtcChzb3J0ZWRbaGkkMV0sIGtleSkgPT09IDApIHtcbiAgICAgICAgICByZXR1cm4gaGkkMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gLShoaSQxICsgMSB8IDApIHwgMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgX2xvID0gbWlkO1xuICAgICAgY29udGludWUgO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gYmluYXJ5U2VhcmNoQnkoc29ydGVkLCBrZXksIGNtcCkge1xuICByZXR1cm4gYmluYXJ5U2VhcmNoQnlVKHNvcnRlZCwga2V5LCBDdXJyeS5fXzIoY21wKSk7XG59XG5cbnZhciBJbnQ7XG5cbnZhciAkJFN0cmluZztcblxuZXhwb3J0IHtcbiAgSW50ICxcbiAgJCRTdHJpbmcgLFxuICBzdHJpY3RseVNvcnRlZExlbmd0aFUgLFxuICBzdHJpY3RseVNvcnRlZExlbmd0aCAsXG4gIGlzU29ydGVkVSAsXG4gIGlzU29ydGVkICxcbiAgc3RhYmxlU29ydEluUGxhY2VCeVUgLFxuICBzdGFibGVTb3J0SW5QbGFjZUJ5ICxcbiAgc3RhYmxlU29ydEJ5VSAsXG4gIHN0YWJsZVNvcnRCeSAsXG4gIGJpbmFyeVNlYXJjaEJ5VSAsXG4gIGJpbmFyeVNlYXJjaEJ5ICxcbiAgdW5pb25VICxcbiAgdW5pb24gLFxuICBpbnRlcnNlY3RVICxcbiAgaW50ZXJzZWN0ICxcbiAgZGlmZlUgLFxuICBkaWZmICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCIuL2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX29wdGlvbiBmcm9tIFwiLi9jYW1sX29wdGlvbi5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9Tb3J0QXJyYXkgZnJvbSBcIi4vYmVsdF9Tb3J0QXJyYXkuanNcIjtcblxuZnVuY3Rpb24gY29weShuKSB7XG4gIGlmIChuICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgdjogbi52LFxuICAgICAgICAgICAgaDogbi5oLFxuICAgICAgICAgICAgbDogY29weShuLmwpLFxuICAgICAgICAgICAgcjogY29weShuLnIpXG4gICAgICAgICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gbjtcbiAgfVxufVxuXG5mdW5jdGlvbiBjcmVhdGUobCwgdiwgcikge1xuICB2YXIgaGwgPSBsICE9PSB1bmRlZmluZWQgPyBsLmggOiAwO1xuICB2YXIgaHIgPSByICE9PSB1bmRlZmluZWQgPyByLmggOiAwO1xuICByZXR1cm4ge1xuICAgICAgICAgIHY6IHYsXG4gICAgICAgICAgaDogKFxuICAgICAgICAgICAgaGwgPj0gaHIgPyBobCA6IGhyXG4gICAgICAgICAgKSArIDEgfCAwLFxuICAgICAgICAgIGw6IGwsXG4gICAgICAgICAgcjogclxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBzaW5nbGV0b24oeCkge1xuICByZXR1cm4ge1xuICAgICAgICAgIHY6IHgsXG4gICAgICAgICAgaDogMSxcbiAgICAgICAgICBsOiB1bmRlZmluZWQsXG4gICAgICAgICAgcjogdW5kZWZpbmVkXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGhlaWdodEdlKGwsIHIpIHtcbiAgaWYgKHIgIT09IHVuZGVmaW5lZCkge1xuICAgIGlmIChsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBsLmggPj0gci5oO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiB0cnVlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGJhbChsLCB2LCByKSB7XG4gIHZhciBobCA9IGwgIT09IHVuZGVmaW5lZCA/IGwuaCA6IDA7XG4gIHZhciBociA9IHIgIT09IHVuZGVmaW5lZCA/IHIuaCA6IDA7XG4gIGlmIChobCA+IChociArIDIgfCAwKSkge1xuICAgIHZhciBsbCA9IGwubDtcbiAgICB2YXIgbHIgPSBsLnI7XG4gICAgaWYgKGhlaWdodEdlKGxsLCBscikpIHtcbiAgICAgIHJldHVybiBjcmVhdGUobGwsIGwudiwgY3JlYXRlKGxyLCB2LCByKSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBjcmVhdGUoY3JlYXRlKGxsLCBsLnYsIGxyLmwpLCBsci52LCBjcmVhdGUobHIuciwgdiwgcikpO1xuICAgIH1cbiAgfVxuICBpZiAoaHIgPD0gKGhsICsgMiB8IDApKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHY6IHYsXG4gICAgICAgICAgICBoOiAoXG4gICAgICAgICAgICAgIGhsID49IGhyID8gaGwgOiBoclxuICAgICAgICAgICAgKSArIDEgfCAwLFxuICAgICAgICAgICAgbDogbCxcbiAgICAgICAgICAgIHI6IHJcbiAgICAgICAgICB9O1xuICB9XG4gIHZhciBybCA9IHIubDtcbiAgdmFyIHJyID0gci5yO1xuICBpZiAoaGVpZ2h0R2UocnIsIHJsKSkge1xuICAgIHJldHVybiBjcmVhdGUoY3JlYXRlKGwsIHYsIHJsKSwgci52LCBycik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNyZWF0ZShjcmVhdGUobCwgdiwgcmwubCksIHJsLnYsIGNyZWF0ZShybC5yLCByLnYsIHJyKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gbWluMEF1eChfbikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIG4gPSBfbjtcbiAgICB2YXIgbiQxID0gbi5sO1xuICAgIGlmIChuJDEgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIG4udjtcbiAgICB9XG4gICAgX24gPSBuJDE7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBtaW5pbXVtKG4pIHtcbiAgaWYgKG4gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKG1pbjBBdXgobikpO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBtaW5VbmRlZmluZWQobikge1xuICBpZiAobiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIG1pbjBBdXgobik7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIG1heDBBdXgoX24pIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBuID0gX247XG4gICAgdmFyIG4kMSA9IG4ucjtcbiAgICBpZiAobiQxID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuLnY7XG4gICAgfVxuICAgIF9uID0gbiQxO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWF4aW11bShuKSB7XG4gIGlmIChuICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZShtYXgwQXV4KG4pKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gbWF4VW5kZWZpbmVkKG4pIHtcbiAgaWYgKG4gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBtYXgwQXV4KG4pO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiByZW1vdmVNaW5BdXhXaXRoUmVmKG4sIHYpIHtcbiAgdmFyIGxuID0gbi5sO1xuICBpZiAobG4gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBiYWwocmVtb3ZlTWluQXV4V2l0aFJlZihsbiwgdiksIG4udiwgbi5yKTtcbiAgfSBlbHNlIHtcbiAgICB2LmNvbnRlbnRzID0gbi52O1xuICAgIHJldHVybiBuLnI7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNFbXB0eShuKSB7XG4gIHJldHVybiBuID09PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHN0YWNrQWxsTGVmdChfdiwgX3MpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBzID0gX3M7XG4gICAgdmFyIHYgPSBfdjtcbiAgICBpZiAodiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gcztcbiAgICB9XG4gICAgX3MgPSB7XG4gICAgICBoZDogdixcbiAgICAgIHRsOiBzXG4gICAgfTtcbiAgICBfdiA9IHYubDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvckVhY2hVKF9uLCBmKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbiA9IF9uO1xuICAgIGlmIChuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGZvckVhY2hVKG4ubCwgZik7XG4gICAgZihuLnYpO1xuICAgIF9uID0gbi5yO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaChuLCBmKSB7XG4gIHJldHVybiBmb3JFYWNoVShuLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VVKF9zLCBfYWNjdSwgZikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGFjY3UgPSBfYWNjdTtcbiAgICB2YXIgcyA9IF9zO1xuICAgIGlmIChzID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgICBfYWNjdSA9IGYocmVkdWNlVShzLmwsIGFjY3UsIGYpLCBzLnYpO1xuICAgIF9zID0gcy5yO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlKHMsIGFjY3UsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVUocywgYWNjdSwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gZXZlcnlVKF9uLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbiA9IF9uO1xuICAgIGlmIChuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIXAobi52KSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoIWV2ZXJ5VShuLmwsIHApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF9uID0gbi5yO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXZlcnkobiwgcCkge1xuICByZXR1cm4gZXZlcnlVKG4sIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIHNvbWVVKF9uLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbiA9IF9uO1xuICAgIGlmIChuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHAobi52KSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmIChzb21lVShuLmwsIHApKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX24gPSBuLnI7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzb21lKG4sIHApIHtcbiAgcmV0dXJuIHNvbWVVKG4sIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIGFkZE1pbkVsZW1lbnQobiwgdikge1xuICBpZiAobiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGJhbChhZGRNaW5FbGVtZW50KG4ubCwgdiksIG4udiwgbi5yKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc2luZ2xldG9uKHYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGFkZE1heEVsZW1lbnQobiwgdikge1xuICBpZiAobiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGJhbChuLmwsIG4udiwgYWRkTWF4RWxlbWVudChuLnIsIHYpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc2luZ2xldG9uKHYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGpvaW5TaGFyZWQobG4sIHYsIHJuKSB7XG4gIGlmIChsbiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGFkZE1pbkVsZW1lbnQocm4sIHYpO1xuICB9XG4gIGlmIChybiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGFkZE1heEVsZW1lbnQobG4sIHYpO1xuICB9XG4gIHZhciBsaCA9IGxuLmg7XG4gIHZhciByaCA9IHJuLmg7XG4gIGlmIChsaCA+IChyaCArIDIgfCAwKSkge1xuICAgIHJldHVybiBiYWwobG4ubCwgbG4udiwgam9pblNoYXJlZChsbi5yLCB2LCBybikpO1xuICB9IGVsc2UgaWYgKHJoID4gKGxoICsgMiB8IDApKSB7XG4gICAgcmV0dXJuIGJhbChqb2luU2hhcmVkKGxuLCB2LCBybi5sKSwgcm4udiwgcm4ucik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNyZWF0ZShsbiwgdiwgcm4pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNvbmNhdFNoYXJlZCh0MSwgdDIpIHtcbiAgaWYgKHQxID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdDI7XG4gIH1cbiAgaWYgKHQyID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdDE7XG4gIH1cbiAgdmFyIHYgPSB7XG4gICAgY29udGVudHM6IHQyLnZcbiAgfTtcbiAgdmFyIHQyciA9IHJlbW92ZU1pbkF1eFdpdGhSZWYodDIsIHYpO1xuICByZXR1cm4gam9pblNoYXJlZCh0MSwgdi5jb250ZW50cywgdDJyKTtcbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uU2hhcmVkVShuLCBwKSB7XG4gIGlmIChuID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgXTtcbiAgfVxuICB2YXIgdmFsdWUgPSBuLnY7XG4gIHZhciBtYXRjaCA9IHBhcnRpdGlvblNoYXJlZFUobi5sLCBwKTtcbiAgdmFyIGxmID0gbWF0Y2hbMV07XG4gIHZhciBsdCA9IG1hdGNoWzBdO1xuICB2YXIgcHYgPSBwKHZhbHVlKTtcbiAgdmFyIG1hdGNoJDEgPSBwYXJ0aXRpb25TaGFyZWRVKG4uciwgcCk7XG4gIHZhciByZiA9IG1hdGNoJDFbMV07XG4gIHZhciBydCA9IG1hdGNoJDFbMF07XG4gIGlmIChwdikge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBqb2luU2hhcmVkKGx0LCB2YWx1ZSwgcnQpLFxuICAgICAgICAgICAgY29uY2F0U2hhcmVkKGxmLCByZilcbiAgICAgICAgICBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBjb25jYXRTaGFyZWQobHQsIHJ0KSxcbiAgICAgICAgICAgIGpvaW5TaGFyZWQobGYsIHZhbHVlLCByZilcbiAgICAgICAgICBdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnRpdGlvblNoYXJlZChuLCBwKSB7XG4gIHJldHVybiBwYXJ0aXRpb25TaGFyZWRVKG4sIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIGxlbmd0aE5vZGUobikge1xuICB2YXIgbCA9IG4ubDtcbiAgdmFyIHIgPSBuLnI7XG4gIHZhciBzaXplTCA9IGwgIT09IHVuZGVmaW5lZCA/IGxlbmd0aE5vZGUobCkgOiAwO1xuICB2YXIgc2l6ZVIgPSByICE9PSB1bmRlZmluZWQgPyBsZW5ndGhOb2RlKHIpIDogMDtcbiAgcmV0dXJuICgxICsgc2l6ZUwgfCAwKSArIHNpemVSIHwgMDtcbn1cblxuZnVuY3Rpb24gc2l6ZShuKSB7XG4gIGlmIChuICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbGVuZ3RoTm9kZShuKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiB0b0xpc3RBdXgoX24sIF9hY2N1KSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYWNjdSA9IF9hY2N1O1xuICAgIHZhciBuID0gX247XG4gICAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIF9hY2N1ID0ge1xuICAgICAgaGQ6IG4udixcbiAgICAgIHRsOiB0b0xpc3RBdXgobi5yLCBhY2N1KVxuICAgIH07XG4gICAgX24gPSBuLmw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0b0xpc3Qocykge1xuICByZXR1cm4gdG9MaXN0QXV4KHMsIC8qIFtdICovMCk7XG59XG5cbmZ1bmN0aW9uIGNoZWNrSW52YXJpYW50SW50ZXJuYWwoX3YpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB2ID0gX3Y7XG4gICAgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIGwgPSB2Lmw7XG4gICAgdmFyIHIgPSB2LnI7XG4gICAgdmFyIGRpZmYgPSAoXG4gICAgICBsICE9PSB1bmRlZmluZWQgPyBsLmggOiAwXG4gICAgKSAtIChcbiAgICAgIHIgIT09IHVuZGVmaW5lZCA/IHIuaCA6IDBcbiAgICApIHwgMDtcbiAgICBpZiAoIShkaWZmIDw9IDIgJiYgZGlmZiA+PSAtMikpIHtcbiAgICAgIHRocm93IHtcbiAgICAgICAgICAgIFJFX0VYTl9JRDogXCJBc3NlcnRfZmFpbHVyZVwiLFxuICAgICAgICAgICAgXzE6IFtcbiAgICAgICAgICAgICAgXCJiZWx0X2ludGVybmFsQVZMc2V0Lm1sXCIsXG4gICAgICAgICAgICAgIDI5MCxcbiAgICAgICAgICAgICAgNFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgIH07XG4gICAgfVxuICAgIGNoZWNrSW52YXJpYW50SW50ZXJuYWwobCk7XG4gICAgX3YgPSByO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsbEFycmF5KF9uLCBfaSwgYXJyKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIHZhciBuID0gX247XG4gICAgdmFyIHYgPSBuLnY7XG4gICAgdmFyIGwgPSBuLmw7XG4gICAgdmFyIHIgPSBuLnI7XG4gICAgdmFyIG5leHQgPSBsICE9PSB1bmRlZmluZWQgPyBmaWxsQXJyYXkobCwgaSwgYXJyKSA6IGk7XG4gICAgYXJyW25leHRdID0gdjtcbiAgICB2YXIgcm5leHQgPSBuZXh0ICsgMSB8IDA7XG4gICAgaWYgKHIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHJuZXh0O1xuICAgIH1cbiAgICBfaSA9IHJuZXh0O1xuICAgIF9uID0gcjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbGxBcnJheVdpdGhQYXJ0aXRpb24oX24sIGN1cnNvciwgYXJyLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbiA9IF9uO1xuICAgIHZhciB2ID0gbi52O1xuICAgIHZhciBsID0gbi5sO1xuICAgIHZhciByID0gbi5yO1xuICAgIGlmIChsICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGZpbGxBcnJheVdpdGhQYXJ0aXRpb24obCwgY3Vyc29yLCBhcnIsIHApO1xuICAgIH1cbiAgICBpZiAocCh2KSkge1xuICAgICAgdmFyIGMgPSBjdXJzb3IuZm9yd2FyZDtcbiAgICAgIGFycltjXSA9IHY7XG4gICAgICBjdXJzb3IuZm9yd2FyZCA9IGMgKyAxIHwgMDtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIGMkMSA9IGN1cnNvci5iYWNrd2FyZDtcbiAgICAgIGFycltjJDFdID0gdjtcbiAgICAgIGN1cnNvci5iYWNrd2FyZCA9IGMkMSAtIDEgfCAwO1xuICAgIH1cbiAgICBpZiAociA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBfbiA9IHI7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWxsQXJyYXlXaXRoRmlsdGVyKF9uLCBfaSwgYXJyLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIHZhciBuID0gX247XG4gICAgdmFyIHYgPSBuLnY7XG4gICAgdmFyIGwgPSBuLmw7XG4gICAgdmFyIHIgPSBuLnI7XG4gICAgdmFyIG5leHQgPSBsICE9PSB1bmRlZmluZWQgPyBmaWxsQXJyYXlXaXRoRmlsdGVyKGwsIGksIGFyciwgcCkgOiBpO1xuICAgIHZhciBybmV4dCA9IHAodikgPyAoYXJyW25leHRdID0gdiwgbmV4dCArIDEgfCAwKSA6IG5leHQ7XG4gICAgaWYgKHIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHJuZXh0O1xuICAgIH1cbiAgICBfaSA9IHJuZXh0O1xuICAgIF9uID0gcjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkobikge1xuICBpZiAobiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBzaXplID0gbGVuZ3RoTm9kZShuKTtcbiAgdmFyIHYgPSBuZXcgQXJyYXkoc2l6ZSk7XG4gIGZpbGxBcnJheShuLCAwLCB2KTtcbiAgcmV0dXJuIHY7XG59XG5cbmZ1bmN0aW9uIGZyb21Tb3J0ZWRBcnJheVJldkF1eChhcnIsIG9mZiwgbGVuKSB7XG4gIHN3aXRjaCAobGVuKSB7XG4gICAgY2FzZSAwIDpcbiAgICAgICAgcmV0dXJuIDtcbiAgICBjYXNlIDEgOlxuICAgICAgICByZXR1cm4gc2luZ2xldG9uKGFycltvZmZdKTtcbiAgICBjYXNlIDIgOlxuICAgICAgICB2YXIgeDAgPSBhcnJbb2ZmXTtcbiAgICAgICAgdmFyIHgxID0gYXJyW29mZiAtIDEgfCAwXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2OiB4MSxcbiAgICAgICAgICAgICAgICBoOiAyLFxuICAgICAgICAgICAgICAgIGw6IHNpbmdsZXRvbih4MCksXG4gICAgICAgICAgICAgICAgcjogdW5kZWZpbmVkXG4gICAgICAgICAgICAgIH07XG4gICAgY2FzZSAzIDpcbiAgICAgICAgdmFyIHgwJDEgPSBhcnJbb2ZmXTtcbiAgICAgICAgdmFyIHgxJDEgPSBhcnJbb2ZmIC0gMSB8IDBdO1xuICAgICAgICB2YXIgeDIgPSBhcnJbb2ZmIC0gMiB8IDBdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHY6IHgxJDEsXG4gICAgICAgICAgICAgICAgaDogMixcbiAgICAgICAgICAgICAgICBsOiBzaW5nbGV0b24oeDAkMSksXG4gICAgICAgICAgICAgICAgcjogc2luZ2xldG9uKHgyKVxuICAgICAgICAgICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgbmwgPSBsZW4gLyAyIHwgMDtcbiAgICAgIHZhciBsZWZ0ID0gZnJvbVNvcnRlZEFycmF5UmV2QXV4KGFyciwgb2ZmLCBubCk7XG4gICAgICB2YXIgbWlkID0gYXJyW29mZiAtIG5sIHwgMF07XG4gICAgICB2YXIgcmlnaHQgPSBmcm9tU29ydGVkQXJyYXlSZXZBdXgoYXJyLCAob2ZmIC0gbmwgfCAwKSAtIDEgfCAwLCAobGVuIC0gbmwgfCAwKSAtIDEgfCAwKTtcbiAgICAgIHJldHVybiBjcmVhdGUobGVmdCwgbWlkLCByaWdodCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZnJvbVNvcnRlZEFycmF5QXV4KGFyciwgb2ZmLCBsZW4pIHtcbiAgc3dpdGNoIChsZW4pIHtcbiAgICBjYXNlIDAgOlxuICAgICAgICByZXR1cm4gO1xuICAgIGNhc2UgMSA6XG4gICAgICAgIHJldHVybiBzaW5nbGV0b24oYXJyW29mZl0pO1xuICAgIGNhc2UgMiA6XG4gICAgICAgIHZhciB4MCA9IGFycltvZmZdO1xuICAgICAgICB2YXIgeDEgPSBhcnJbb2ZmICsgMSB8IDBdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHY6IHgxLFxuICAgICAgICAgICAgICAgIGg6IDIsXG4gICAgICAgICAgICAgICAgbDogc2luZ2xldG9uKHgwKSxcbiAgICAgICAgICAgICAgICByOiB1bmRlZmluZWRcbiAgICAgICAgICAgICAgfTtcbiAgICBjYXNlIDMgOlxuICAgICAgICB2YXIgeDAkMSA9IGFycltvZmZdO1xuICAgICAgICB2YXIgeDEkMSA9IGFycltvZmYgKyAxIHwgMF07XG4gICAgICAgIHZhciB4MiA9IGFycltvZmYgKyAyIHwgMF07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdjogeDEkMSxcbiAgICAgICAgICAgICAgICBoOiAyLFxuICAgICAgICAgICAgICAgIGw6IHNpbmdsZXRvbih4MCQxKSxcbiAgICAgICAgICAgICAgICByOiBzaW5nbGV0b24oeDIpXG4gICAgICAgICAgICAgIH07XG4gICAgZGVmYXVsdDpcbiAgICAgIHZhciBubCA9IGxlbiAvIDIgfCAwO1xuICAgICAgdmFyIGxlZnQgPSBmcm9tU29ydGVkQXJyYXlBdXgoYXJyLCBvZmYsIG5sKTtcbiAgICAgIHZhciBtaWQgPSBhcnJbb2ZmICsgbmwgfCAwXTtcbiAgICAgIHZhciByaWdodCA9IGZyb21Tb3J0ZWRBcnJheUF1eChhcnIsIChvZmYgKyBubCB8IDApICsgMSB8IDAsIChsZW4gLSBubCB8IDApIC0gMSB8IDApO1xuICAgICAgcmV0dXJuIGNyZWF0ZShsZWZ0LCBtaWQsIHJpZ2h0KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmcm9tU29ydGVkQXJyYXlVbnNhZmUoYXJyKSB7XG4gIHJldHVybiBmcm9tU29ydGVkQXJyYXlBdXgoYXJyLCAwLCBhcnIubGVuZ3RoKTtcbn1cblxuZnVuY3Rpb24ga2VlcFNoYXJlZFUobiwgcCkge1xuICBpZiAobiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgdiA9IG4udjtcbiAgdmFyIGwgPSBuLmw7XG4gIHZhciByID0gbi5yO1xuICB2YXIgbmV3TCA9IGtlZXBTaGFyZWRVKGwsIHApO1xuICB2YXIgcHYgPSBwKHYpO1xuICB2YXIgbmV3UiA9IGtlZXBTaGFyZWRVKHIsIHApO1xuICBpZiAocHYpIHtcbiAgICBpZiAobCA9PT0gbmV3TCAmJiByID09PSBuZXdSKSB7XG4gICAgICByZXR1cm4gbjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGpvaW5TaGFyZWQobmV3TCwgdiwgbmV3Uik7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBjb25jYXRTaGFyZWQobmV3TCwgbmV3Uik7XG4gIH1cbn1cblxuZnVuY3Rpb24ga2VlcFNoYXJlZChuLCBwKSB7XG4gIHJldHVybiBrZWVwU2hhcmVkVShuLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBrZWVwQ29weVUobiwgcCkge1xuICBpZiAobiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgc2l6ZSA9IGxlbmd0aE5vZGUobik7XG4gIHZhciB2ID0gbmV3IEFycmF5KHNpemUpO1xuICB2YXIgbGFzdCA9IGZpbGxBcnJheVdpdGhGaWx0ZXIobiwgMCwgdiwgcCk7XG4gIHJldHVybiBmcm9tU29ydGVkQXJyYXlBdXgodiwgMCwgbGFzdCk7XG59XG5cbmZ1bmN0aW9uIGtlZXBDb3B5KG4sIHApIHtcbiAgcmV0dXJuIGtlZXBDb3B5VShuLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb25Db3B5VShuLCBwKSB7XG4gIGlmIChuID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgXTtcbiAgfVxuICB2YXIgc2l6ZSA9IGxlbmd0aE5vZGUobik7XG4gIHZhciB2ID0gbmV3IEFycmF5KHNpemUpO1xuICB2YXIgYmFja3dhcmQgPSBzaXplIC0gMSB8IDA7XG4gIHZhciBjdXJzb3IgPSB7XG4gICAgZm9yd2FyZDogMCxcbiAgICBiYWNrd2FyZDogYmFja3dhcmRcbiAgfTtcbiAgZmlsbEFycmF5V2l0aFBhcnRpdGlvbihuLCBjdXJzb3IsIHYsIHApO1xuICB2YXIgZm9yd2FyZExlbiA9IGN1cnNvci5mb3J3YXJkO1xuICByZXR1cm4gW1xuICAgICAgICAgIGZyb21Tb3J0ZWRBcnJheUF1eCh2LCAwLCBmb3J3YXJkTGVuKSxcbiAgICAgICAgICBmcm9tU29ydGVkQXJyYXlSZXZBdXgodiwgYmFja3dhcmQsIHNpemUgLSBmb3J3YXJkTGVuIHwgMClcbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uQ29weShuLCBwKSB7XG4gIHJldHVybiBwYXJ0aXRpb25Db3B5VShuLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBoYXMoX3QsIHgsIGNtcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHQgPSBfdDtcbiAgICBpZiAodCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciB2ID0gdC52O1xuICAgIHZhciBjID0gY21wKHgsIHYpO1xuICAgIGlmIChjID09PSAwKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX3QgPSBjIDwgMCA/IHQubCA6IHQucjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNtcChzMSwgczIsIGNtcCQxKSB7XG4gIHZhciBsZW4xID0gc2l6ZShzMSk7XG4gIHZhciBsZW4yID0gc2l6ZShzMik7XG4gIGlmIChsZW4xID09PSBsZW4yKSB7XG4gICAgdmFyIF9lMSA9IHN0YWNrQWxsTGVmdChzMSwgLyogW10gKi8wKTtcbiAgICB2YXIgX2UyID0gc3RhY2tBbGxMZWZ0KHMyLCAvKiBbXSAqLzApO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBlMiA9IF9lMjtcbiAgICAgIHZhciBlMSA9IF9lMTtcbiAgICAgIGlmICghZTEpIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgICBpZiAoIWUyKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgdmFyIGgyID0gZTIuaGQ7XG4gICAgICB2YXIgaDEgPSBlMS5oZDtcbiAgICAgIHZhciBjID0gY21wJDEoaDEudiwgaDIudik7XG4gICAgICBpZiAoYyAhPT0gMCkge1xuICAgICAgICByZXR1cm4gYztcbiAgICAgIH1cbiAgICAgIF9lMiA9IHN0YWNrQWxsTGVmdChoMi5yLCBlMi50bCk7XG4gICAgICBfZTEgPSBzdGFja0FsbExlZnQoaDEuciwgZTEudGwpO1xuICAgICAgY29udGludWUgO1xuICAgIH07XG4gIH0gZWxzZSBpZiAobGVuMSA8IGxlbjIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXEoczEsIHMyLCBjKSB7XG4gIHJldHVybiBjbXAoczEsIHMyLCBjKSA9PT0gMDtcbn1cblxuZnVuY3Rpb24gc3Vic2V0KF9zMSwgX3MyLCBjbXApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBzMiA9IF9zMjtcbiAgICB2YXIgczEgPSBfczE7XG4gICAgaWYgKHMxID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoczIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgdjEgPSBzMS52O1xuICAgIHZhciBsMSA9IHMxLmw7XG4gICAgdmFyIHIxID0gczEucjtcbiAgICB2YXIgdjIgPSBzMi52O1xuICAgIHZhciBsMiA9IHMyLmw7XG4gICAgdmFyIHIyID0gczIucjtcbiAgICB2YXIgYyA9IGNtcCh2MSwgdjIpO1xuICAgIGlmIChjID09PSAwKSB7XG4gICAgICBpZiAoIXN1YnNldChsMSwgbDIsIGNtcCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgX3MyID0gcjI7XG4gICAgICBfczEgPSByMTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgaWYgKGMgPCAwKSB7XG4gICAgICBpZiAoIXN1YnNldChjcmVhdGUobDEsIHYxLCB1bmRlZmluZWQpLCBsMiwgY21wKSkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBfczEgPSByMTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgaWYgKCFzdWJzZXQoY3JlYXRlKHVuZGVmaW5lZCwgdjEsIHIxKSwgcjIsIGNtcCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX3MxID0gbDE7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXQoX24sIHgsIGNtcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIG4gPSBfbjtcbiAgICBpZiAobiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgdiA9IG4udjtcbiAgICB2YXIgYyA9IGNtcCh4LCB2KTtcbiAgICBpZiAoYyA9PT0gMCkge1xuICAgICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUodik7XG4gICAgfVxuICAgIF9uID0gYyA8IDAgPyBuLmwgOiBuLnI7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRVbmRlZmluZWQoX24sIHgsIGNtcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIG4gPSBfbjtcbiAgICBpZiAobiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgdiA9IG4udjtcbiAgICB2YXIgYyA9IGNtcCh4LCB2KTtcbiAgICBpZiAoYyA9PT0gMCkge1xuICAgICAgcmV0dXJuIHY7XG4gICAgfVxuICAgIF9uID0gYyA8IDAgPyBuLmwgOiBuLnI7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRFeG4oX24sIHgsIGNtcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIG4gPSBfbjtcbiAgICBpZiAobiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgdiA9IG4udjtcbiAgICAgIHZhciBjID0gY21wKHgsIHYpO1xuICAgICAgaWYgKGMgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHY7XG4gICAgICB9XG4gICAgICBfbiA9IGMgPCAwID8gbi5sIDogbi5yO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICB0aHJvdyB7XG4gICAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiByb3RhdGVXaXRoTGVmdENoaWxkKGsyKSB7XG4gIHZhciBrMSA9IGsyLmw7XG4gIGsyLmwgPSBrMS5yO1xuICBrMS5yID0gazI7XG4gIHZhciBuID0gazIubDtcbiAgdmFyIGhsazIgPSBuICE9PSB1bmRlZmluZWQgPyBuLmggOiAwO1xuICB2YXIgbiQxID0gazIucjtcbiAgdmFyIGhyazIgPSBuJDEgIT09IHVuZGVmaW5lZCA/IG4kMS5oIDogMDtcbiAgazIuaCA9IChcbiAgICBobGsyID4gaHJrMiA/IGhsazIgOiBocmsyXG4gICkgKyAxIHwgMDtcbiAgdmFyIG4kMiA9IGsxLmw7XG4gIHZhciBobGsxID0gbiQyICE9PSB1bmRlZmluZWQgPyBuJDIuaCA6IDA7XG4gIHZhciBoazIgPSBrMi5oO1xuICBrMS5oID0gKFxuICAgIGhsazEgPiBoazIgPyBobGsxIDogaGsyXG4gICkgKyAxIHwgMDtcbiAgcmV0dXJuIGsxO1xufVxuXG5mdW5jdGlvbiByb3RhdGVXaXRoUmlnaHRDaGlsZChrMSkge1xuICB2YXIgazIgPSBrMS5yO1xuICBrMS5yID0gazIubDtcbiAgazIubCA9IGsxO1xuICB2YXIgbiA9IGsxLmw7XG4gIHZhciBobGsxID0gbiAhPT0gdW5kZWZpbmVkID8gbi5oIDogMDtcbiAgdmFyIG4kMSA9IGsxLnI7XG4gIHZhciBocmsxID0gbiQxICE9PSB1bmRlZmluZWQgPyBuJDEuaCA6IDA7XG4gIGsxLmggPSAoXG4gICAgaGxrMSA+IGhyazEgPyBobGsxIDogaHJrMVxuICApICsgMSB8IDA7XG4gIHZhciBuJDIgPSBrMi5yO1xuICB2YXIgaHJrMiA9IG4kMiAhPT0gdW5kZWZpbmVkID8gbiQyLmggOiAwO1xuICB2YXIgaGsxID0gazEuaDtcbiAgazIuaCA9IChcbiAgICBocmsyID4gaGsxID8gaHJrMiA6IGhrMVxuICApICsgMSB8IDA7XG4gIHJldHVybiBrMjtcbn1cblxuZnVuY3Rpb24gZG91YmxlV2l0aExlZnRDaGlsZChrMykge1xuICB2YXIgazNsID0gazMubDtcbiAgdmFyIHYgPSByb3RhdGVXaXRoUmlnaHRDaGlsZChrM2wpO1xuICBrMy5sID0gdjtcbiAgcmV0dXJuIHJvdGF0ZVdpdGhMZWZ0Q2hpbGQoazMpO1xufVxuXG5mdW5jdGlvbiBkb3VibGVXaXRoUmlnaHRDaGlsZChrMikge1xuICB2YXIgazJyID0gazIucjtcbiAgdmFyIHYgPSByb3RhdGVXaXRoTGVmdENoaWxkKGsycik7XG4gIGsyLnIgPSB2O1xuICByZXR1cm4gcm90YXRlV2l0aFJpZ2h0Q2hpbGQoazIpO1xufVxuXG5mdW5jdGlvbiBoZWlnaHRVcGRhdGVNdXRhdGUodCkge1xuICB2YXIgbiA9IHQubDtcbiAgdmFyIGhsdCA9IG4gIT09IHVuZGVmaW5lZCA/IG4uaCA6IDA7XG4gIHZhciBuJDEgPSB0LnI7XG4gIHZhciBocnQgPSBuJDEgIT09IHVuZGVmaW5lZCA/IG4kMS5oIDogMDtcbiAgdC5oID0gKFxuICAgIGhsdCA+IGhydCA/IGhsdCA6IGhydFxuICApICsgMSB8IDA7XG4gIHJldHVybiB0O1xufVxuXG5mdW5jdGlvbiBiYWxNdXRhdGUobnQpIHtcbiAgdmFyIGwgPSBudC5sO1xuICB2YXIgciA9IG50LnI7XG4gIHZhciBobCA9IGwgIT09IHVuZGVmaW5lZCA/IGwuaCA6IDA7XG4gIHZhciBociA9IHIgIT09IHVuZGVmaW5lZCA/IHIuaCA6IDA7XG4gIGlmIChobCA+ICgyICsgaHIgfCAwKSkge1xuICAgIHZhciBsbCA9IGwubDtcbiAgICB2YXIgbHIgPSBsLnI7XG4gICAgaWYgKGhlaWdodEdlKGxsLCBscikpIHtcbiAgICAgIHJldHVybiBoZWlnaHRVcGRhdGVNdXRhdGUocm90YXRlV2l0aExlZnRDaGlsZChudCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaGVpZ2h0VXBkYXRlTXV0YXRlKGRvdWJsZVdpdGhMZWZ0Q2hpbGQobnQpKTtcbiAgICB9XG4gIH1cbiAgaWYgKGhyID4gKDIgKyBobCB8IDApKSB7XG4gICAgdmFyIHJsID0gci5sO1xuICAgIHZhciByciA9IHIucjtcbiAgICBpZiAoaGVpZ2h0R2UocnIsIHJsKSkge1xuICAgICAgcmV0dXJuIGhlaWdodFVwZGF0ZU11dGF0ZShyb3RhdGVXaXRoUmlnaHRDaGlsZChudCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaGVpZ2h0VXBkYXRlTXV0YXRlKGRvdWJsZVdpdGhSaWdodENoaWxkKG50KSk7XG4gICAgfVxuICB9XG4gIG50LmggPSAoXG4gICAgaGwgPiBociA/IGhsIDogaHJcbiAgKSArIDEgfCAwO1xuICByZXR1cm4gbnQ7XG59XG5cbmZ1bmN0aW9uIGFkZE11dGF0ZShjbXAsIHQsIHgpIHtcbiAgaWYgKHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBzaW5nbGV0b24oeCk7XG4gIH1cbiAgdmFyIGsgPSB0LnY7XG4gIHZhciBjID0gY21wKHgsIGspO1xuICBpZiAoYyA9PT0gMCkge1xuICAgIHJldHVybiB0O1xuICB9XG4gIHZhciBsID0gdC5sO1xuICB2YXIgciA9IHQucjtcbiAgaWYgKGMgPCAwKSB7XG4gICAgdmFyIGxsID0gYWRkTXV0YXRlKGNtcCwgbCwgeCk7XG4gICAgdC5sID0gbGw7XG4gIH0gZWxzZSB7XG4gICAgdC5yID0gYWRkTXV0YXRlKGNtcCwgciwgeCk7XG4gIH1cbiAgcmV0dXJuIGJhbE11dGF0ZSh0KTtcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5KHhzLCBjbXApIHtcbiAgdmFyIGxlbiA9IHhzLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIG5leHQgPSBCZWx0X1NvcnRBcnJheS5zdHJpY3RseVNvcnRlZExlbmd0aFUoeHMsIChmdW5jdGlvbiAoeCwgeSkge1xuICAgICAgICAgIHJldHVybiBjbXAoeCwgeSkgPCAwO1xuICAgICAgICB9KSk7XG4gIHZhciByZXN1bHQ7XG4gIGlmIChuZXh0ID49IDApIHtcbiAgICByZXN1bHQgPSBmcm9tU29ydGVkQXJyYXlBdXgoeHMsIDAsIG5leHQpO1xuICB9IGVsc2Uge1xuICAgIG5leHQgPSAtbmV4dCB8IDA7XG4gICAgcmVzdWx0ID0gZnJvbVNvcnRlZEFycmF5UmV2QXV4KHhzLCBuZXh0IC0gMSB8IDAsIG5leHQpO1xuICB9XG4gIGZvcih2YXIgaSA9IG5leHQ7IGkgPCBsZW47ICsraSl7XG4gICAgcmVzdWx0ID0gYWRkTXV0YXRlKGNtcCwgcmVzdWx0LCB4c1tpXSk7XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTWluQXV4V2l0aFJvb3RNdXRhdGUobnQsIG4pIHtcbiAgdmFyIGxuID0gbi5sO1xuICB2YXIgcm4gPSBuLnI7XG4gIGlmIChsbiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgbi5sID0gcmVtb3ZlTWluQXV4V2l0aFJvb3RNdXRhdGUobnQsIGxuKTtcbiAgICByZXR1cm4gYmFsTXV0YXRlKG4pO1xuICB9IGVsc2Uge1xuICAgIG50LnYgPSBuLnY7XG4gICAgcmV0dXJuIHJuO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNvcHkgLFxuICBjcmVhdGUgLFxuICBiYWwgLFxuICBzaW5nbGV0b24gLFxuICBtaW5pbXVtICxcbiAgbWluVW5kZWZpbmVkICxcbiAgbWF4aW11bSAsXG4gIG1heFVuZGVmaW5lZCAsXG4gIHJlbW92ZU1pbkF1eFdpdGhSZWYgLFxuICBpc0VtcHR5ICxcbiAgc3RhY2tBbGxMZWZ0ICxcbiAgZm9yRWFjaFUgLFxuICBmb3JFYWNoICxcbiAgcmVkdWNlVSAsXG4gIHJlZHVjZSAsXG4gIGV2ZXJ5VSAsXG4gIGV2ZXJ5ICxcbiAgc29tZVUgLFxuICBzb21lICxcbiAgam9pblNoYXJlZCAsXG4gIGNvbmNhdFNoYXJlZCAsXG4gIGtlZXBTaGFyZWRVICxcbiAga2VlcFNoYXJlZCAsXG4gIGtlZXBDb3B5VSAsXG4gIGtlZXBDb3B5ICxcbiAgcGFydGl0aW9uU2hhcmVkVSAsXG4gIHBhcnRpdGlvblNoYXJlZCAsXG4gIHBhcnRpdGlvbkNvcHlVICxcbiAgcGFydGl0aW9uQ29weSAsXG4gIGxlbmd0aE5vZGUgLFxuICBzaXplICxcbiAgdG9MaXN0ICxcbiAgY2hlY2tJbnZhcmlhbnRJbnRlcm5hbCAsXG4gIGZpbGxBcnJheSAsXG4gIHRvQXJyYXkgLFxuICBmcm9tU29ydGVkQXJyYXlBdXggLFxuICBmcm9tU29ydGVkQXJyYXlSZXZBdXggLFxuICBmcm9tU29ydGVkQXJyYXlVbnNhZmUgLFxuICBoYXMgLFxuICBjbXAgLFxuICBlcSAsXG4gIHN1YnNldCAsXG4gIGdldCAsXG4gIGdldFVuZGVmaW5lZCAsXG4gIGdldEV4biAsXG4gIGZyb21BcnJheSAsXG4gIGFkZE11dGF0ZSAsXG4gIGJhbE11dGF0ZSAsXG4gIHJlbW92ZU1pbkF1eFdpdGhSb290TXV0YXRlICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cblxuZnVuY3Rpb24gY2FtbF9pbnRfY29tcGFyZSh4LCB5KSB7XG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9ib29sX2NvbXBhcmUoeCwgeSkge1xuICBpZiAoeCkge1xuICAgIGlmICh5KSB7XG4gICAgICByZXR1cm4gMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICB9IGVsc2UgaWYgKHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9mbG9hdF9jb21wYXJlKHgsIHkpIHtcbiAgaWYgKHggPT09IHkpIHtcbiAgICByZXR1cm4gMDtcbiAgfSBlbHNlIGlmICh4IDwgeSkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIGlmICh4ID4geSB8fCB4ID09PSB4KSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSBpZiAoeSA9PT0geSkge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX3N0cmluZ19jb21wYXJlKHMxLCBzMikge1xuICBpZiAoczEgPT09IHMyKSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAoczEgPCBzMikge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2Jvb2xfbWluKHgsIHkpIHtcbiAgaWYgKHgpIHtcbiAgICByZXR1cm4geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2ludF9taW4oeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2Zsb2F0X21pbih4LCB5KSB7XG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfc3RyaW5nX21pbih4LCB5KSB7XG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfaW50MzJfbWluKHgsIHkpIHtcbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9ib29sX21heCh4LCB5KSB7XG4gIGlmICh4KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9pbnRfbWF4KHgsIHkpIHtcbiAgaWYgKHggPiB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9mbG9hdF9tYXgoeCwgeSkge1xuICBpZiAoeCA+IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX3N0cmluZ19tYXgoeCwgeSkge1xuICBpZiAoeCA+IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2ludDMyX21heCh4LCB5KSB7XG4gIGlmICh4ID4geSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGk2NF9lcSh4LCB5KSB7XG4gIGlmICh4WzFdID09PSB5WzFdKSB7XG4gICAgcmV0dXJuIHhbMF0gPT09IHlbMF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIGk2NF9nZShwYXJhbSwgcGFyYW0kMSkge1xuICB2YXIgb3RoZXJfaGkgPSBwYXJhbSQxWzBdO1xuICB2YXIgaGkgPSBwYXJhbVswXTtcbiAgaWYgKGhpID4gb3RoZXJfaGkpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmIChoaSA8IG90aGVyX2hpKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwYXJhbVsxXSA+PSBwYXJhbSQxWzFdO1xuICB9XG59XG5cbmZ1bmN0aW9uIGk2NF9uZXEoeCwgeSkge1xuICByZXR1cm4gIWk2NF9lcSh4LCB5KTtcbn1cblxuZnVuY3Rpb24gaTY0X2x0KHgsIHkpIHtcbiAgcmV0dXJuICFpNjRfZ2UoeCwgeSk7XG59XG5cbmZ1bmN0aW9uIGk2NF9ndCh4LCB5KSB7XG4gIGlmICh4WzBdID4geVswXSkge1xuICAgIHJldHVybiB0cnVlO1xuICB9IGVsc2UgaWYgKHhbMF0gPCB5WzBdKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4WzFdID4geVsxXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpNjRfbGUoeCwgeSkge1xuICByZXR1cm4gIWk2NF9ndCh4LCB5KTtcbn1cblxuZnVuY3Rpb24gaTY0X21pbih4LCB5KSB7XG4gIGlmIChpNjRfZ2UoeCwgeSkpIHtcbiAgICByZXR1cm4geTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpNjRfbWF4KHgsIHkpIHtcbiAgaWYgKGk2NF9ndCh4LCB5KSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNhbWxfaW50X2NvbXBhcmUgLFxuICBjYW1sX2Jvb2xfY29tcGFyZSAsXG4gIGNhbWxfZmxvYXRfY29tcGFyZSAsXG4gIGNhbWxfc3RyaW5nX2NvbXBhcmUgLFxuICBjYW1sX2Jvb2xfbWluICxcbiAgY2FtbF9pbnRfbWluICxcbiAgY2FtbF9mbG9hdF9taW4gLFxuICBjYW1sX3N0cmluZ19taW4gLFxuICBjYW1sX2ludDMyX21pbiAsXG4gIGNhbWxfYm9vbF9tYXggLFxuICBjYW1sX2ludF9tYXggLFxuICBjYW1sX2Zsb2F0X21heCAsXG4gIGNhbWxfc3RyaW5nX21heCAsXG4gIGNhbWxfaW50MzJfbWF4ICxcbiAgaTY0X2VxICxcbiAgaTY0X25lcSAsXG4gIGk2NF9sdCAsXG4gIGk2NF9ndCAsXG4gIGk2NF9sZSAsXG4gIGk2NF9nZSAsXG4gIGk2NF9taW4gLFxuICBpNjRfbWF4ICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cblxuZnVuY3Rpb24gc3ViKHgsIG9mZnNldCwgbGVuKSB7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuKTtcbiAgdmFyIGogPSAwO1xuICB2YXIgaSA9IG9mZnNldDtcbiAgd2hpbGUoaiA8IGxlbikge1xuICAgIHJlc3VsdFtqXSA9IHhbaV07XG4gICAgaiA9IGogKyAxIHwgMDtcbiAgICBpID0gaSArIDEgfCAwO1xuICB9O1xuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBsZW4oX2FjYywgX2wpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsID0gX2w7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICBfbCA9IGwudGw7XG4gICAgX2FjYyA9IGwuaGQubGVuZ3RoICsgYWNjIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbGwoYXJyLCBfaSwgX2wpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsID0gX2w7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoIWwpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciB4ID0gbC5oZDtcbiAgICB2YXIgbCQxID0geC5sZW5ndGg7XG4gICAgdmFyIGsgPSBpO1xuICAgIHZhciBqID0gMDtcbiAgICB3aGlsZShqIDwgbCQxKSB7XG4gICAgICBhcnJba10gPSB4W2pdO1xuICAgICAgayA9IGsgKyAxIHwgMDtcbiAgICAgIGogPSBqICsgMSB8IDA7XG4gICAgfTtcbiAgICBfbCA9IGwudGw7XG4gICAgX2kgPSBrO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29uY2F0KGwpIHtcbiAgdmFyIHYgPSBsZW4oMCwgbCk7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkodik7XG4gIGZpbGwocmVzdWx0LCAwLCBsKTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc2V0KHhzLCBpbmRleCwgbmV3dmFsKSB7XG4gIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0geHMubGVuZ3RoKSB7XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJJbnZhbGlkX2FyZ3VtZW50XCIsXG4gICAgICAgICAgXzE6IFwiaW5kZXggb3V0IG9mIGJvdW5kc1wiLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIHhzW2luZGV4XSA9IG5ld3ZhbDtcbiAgXG59XG5cbmZ1bmN0aW9uIGdldCh4cywgaW5kZXgpIHtcbiAgaWYgKGluZGV4IDwgMCB8fCBpbmRleCA+PSB4cy5sZW5ndGgpIHtcbiAgICB0aHJvdyB7XG4gICAgICAgICAgUkVfRVhOX0lEOiBcIkludmFsaWRfYXJndW1lbnRcIixcbiAgICAgICAgICBfMTogXCJpbmRleCBvdXQgb2YgYm91bmRzXCIsXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH1cbiAgcmV0dXJuIHhzW2luZGV4XTtcbn1cblxuZnVuY3Rpb24gbWFrZShsZW4sIGluaXQpIHtcbiAgdmFyIGIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICBiW2ldID0gaW5pdDtcbiAgfVxuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gbWFrZV9mbG9hdChsZW4pIHtcbiAgdmFyIGIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICBiW2ldID0gMDtcbiAgfVxuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gYmxpdChhMSwgaTEsIGEyLCBpMiwgbGVuKSB7XG4gIGlmIChpMiA8PSBpMSkge1xuICAgIGZvcih2YXIgaiA9IDA7IGogPCBsZW47ICsrail7XG4gICAgICBhMltqICsgaTIgfCAwXSA9IGExW2ogKyBpMSB8IDBdO1xuICAgIH1cbiAgICByZXR1cm4gO1xuICB9XG4gIGZvcih2YXIgaiQxID0gbGVuIC0gMSB8IDA7IGokMSA+PSAwOyAtLWokMSl7XG4gICAgYTJbaiQxICsgaTIgfCAwXSA9IGExW2okMSArIGkxIHwgMF07XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGR1cChwcmltKSB7XG4gIHJldHVybiBwcmltLnNsaWNlKDApO1xufVxuXG5leHBvcnQge1xuICBkdXAgLFxuICBzdWIgLFxuICBjb25jYXQgLFxuICBtYWtlICxcbiAgbWFrZV9mbG9hdCAsXG4gIGJsaXQgLFxuICBnZXQgLFxuICBzZXQgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG52YXIgaWQgPSB7XG4gIGNvbnRlbnRzOiAwXG59O1xuXG5mdW5jdGlvbiBjcmVhdGUoc3RyKSB7XG4gIGlkLmNvbnRlbnRzID0gaWQuY29udGVudHMgKyAxIHwgMDtcbiAgcmV0dXJuIHN0ciArIChcIi9cIiArIGlkLmNvbnRlbnRzKTtcbn1cblxuZnVuY3Rpb24gY2FtbF9pc19leHRlbnNpb24oZSkge1xuICBpZiAoZSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB0eXBlb2YgZS5SRV9FWE5fSUQgPT09IFwic3RyaW5nXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9leG5fc2xvdF9uYW1lKHgpIHtcbiAgcmV0dXJuIHguUkVfRVhOX0lEO1xufVxuXG5leHBvcnQge1xuICBpZCAsXG4gIGNyZWF0ZSAsXG4gIGNhbWxfaXNfZXh0ZW5zaW9uICxcbiAgY2FtbF9leG5fc2xvdF9uYW1lICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIENhbWxfb3B0aW9uIGZyb20gXCIuL2NhbWxfb3B0aW9uLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2V4Y2VwdGlvbnMgZnJvbSBcIi4vY2FtbF9leGNlcHRpb25zLmpzXCI7XG5cbnZhciAkJEVycm9yID0gLyogQF9fUFVSRV9fICovQ2FtbF9leGNlcHRpb25zLmNyZWF0ZShcIkNhbWxfanNfZXhjZXB0aW9ucy5FcnJvclwiKTtcblxuZnVuY3Rpb24gaW50ZXJuYWxUb09DYW1sRXhjZXB0aW9uKGUpIHtcbiAgaWYgKENhbWxfZXhjZXB0aW9ucy5jYW1sX2lzX2V4dGVuc2lvbihlKSkge1xuICAgIHJldHVybiBlO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBSRV9FWE5fSUQ6ICQkRXJyb3IsXG4gICAgICAgICAgICBfMTogZVxuICAgICAgICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9hc19qc19leG4oZXhuKSB7XG4gIGlmIChleG4uUkVfRVhOX0lEID09PSAkJEVycm9yKSB7XG4gICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoZXhuLl8xKTtcbiAgfVxuICBcbn1cblxuZXhwb3J0IHtcbiAgJCRFcnJvciAsXG4gIGludGVybmFsVG9PQ2FtbEV4Y2VwdGlvbiAsXG4gIGNhbWxfYXNfanNfZXhuICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIENhbWwgZnJvbSBcIi4vY2FtbC5qc1wiO1xuXG52YXIgZm9yX2luID0gKGZ1bmN0aW9uKG8sZm9vKXtcbiAgICAgICAgZm9yICh2YXIgeCBpbiBvKSB7IGZvbyh4KSB9fSk7XG5cbnZhciBjYW1sX29ial9kdXAgPSAoZnVuY3Rpb24oeCl7XG4gIGlmKEFycmF5LmlzQXJyYXkoeCkpe1xuICAgIHZhciBsZW4gPSB4Lmxlbmd0aCAgXG4gICAgdmFyIHYgPSBuZXcgQXJyYXkobGVuKVxuICAgIGZvcih2YXIgaSA9IDAgOyBpIDwgbGVuIDsgKytpKXtcbiAgICAgIHZbaV0gPSB4W2ldXG4gICAgfVxuICAgIGlmKHguVEFHICE9PSB1bmRlZmluZWQpe1xuICAgICAgdi5UQUcgPSB4LlRBRyAvLyBUT0RPIHRoaXMgY2FuIGJlIHJlbW92ZWQgZXZlbnR1YWxseVxuICAgIH0gIFxuICAgIHJldHVybiB2IFxuICB9IFxuICByZXR1cm4gT2JqZWN0LmFzc2lnbih7fSx4KSAgICBcbn0pO1xuXG52YXIgdXBkYXRlX2R1bW15ID0gKGZ1bmN0aW9uKHgseSl7XG4gIHZhciBrICBcbiAgaWYoQXJyYXkuaXNBcnJheSh5KSl7XG4gICAgZm9yKGsgPSAwOyBrIDwgeS5sZW5ndGggOyArK2spe1xuICAgICAgeFtrXSA9IHlba11cbiAgICB9XG4gICAgaWYoeS5UQUcgIT09IHVuZGVmaW5lZCl7XG4gICAgICB4LlRBRyA9IHkuVEFHXG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvciAodmFyIGsgaW4geSl7XG4gICAgICB4W2tdID0geVtrXVxuICAgIH1cbiAgfVxufSk7XG5cbmZ1bmN0aW9uIGNhbWxfY29tcGFyZShhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbiAgdmFyIGFfdHlwZSA9IHR5cGVvZiBhO1xuICB2YXIgYl90eXBlID0gdHlwZW9mIGI7XG4gIHN3aXRjaCAoYV90eXBlKSB7XG4gICAgY2FzZSBcImJvb2xlYW5cIiA6XG4gICAgICAgIGlmIChiX3R5cGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgICAgcmV0dXJuIENhbWwuY2FtbF9ib29sX2NvbXBhcmUoYSwgYik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBcImZ1bmN0aW9uXCIgOlxuICAgICAgICBpZiAoYl90eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgUkVfRVhOX0lEOiBcIkludmFsaWRfYXJndW1lbnRcIixcbiAgICAgICAgICAgICAgICBfMTogXCJjb21wYXJlOiBmdW5jdGlvbmFsIHZhbHVlXCIsXG4gICAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBcIm51bWJlclwiIDpcbiAgICAgICAgaWYgKGJfdHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICAgIHJldHVybiBDYW1sLmNhbWxfaW50X2NvbXBhcmUoYSwgYik7XG4gICAgICAgIH1cbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSBcInN0cmluZ1wiIDpcbiAgICAgICAgaWYgKGJfdHlwZSA9PT0gXCJzdHJpbmdcIikge1xuICAgICAgICAgIHJldHVybiBDYW1sLmNhbWxfc3RyaW5nX2NvbXBhcmUoYSwgYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICBjYXNlIFwidW5kZWZpbmVkXCIgOlxuICAgICAgICByZXR1cm4gLTE7XG4gICAgZGVmYXVsdDpcbiAgICAgIFxuICB9XG4gIHN3aXRjaCAoYl90eXBlKSB7XG4gICAgY2FzZSBcInN0cmluZ1wiIDpcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIGNhc2UgXCJ1bmRlZmluZWRcIiA6XG4gICAgICAgIHJldHVybiAxO1xuICAgIGRlZmF1bHQ6XG4gICAgICBpZiAoYV90eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGlmIChiX3R5cGUgPT09IFwiYm9vbGVhblwiKSB7XG4gICAgICAgIHJldHVybiAtMTtcbiAgICAgIH1cbiAgICAgIGlmIChhX3R5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gMTtcbiAgICAgIH1cbiAgICAgIGlmIChiX3R5cGUgPT09IFwiZnVuY3Rpb25cIikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAoYV90eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGlmIChiID09PSBudWxsIHx8IGIuQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChiX3R5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgaWYgKGEgPT09IG51bGwgfHwgYS5CU19QUklWQVRFX05FU1RFRF9TT01FX05PTkUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGEgPT09IG51bGwpIHtcbiAgICAgICAgaWYgKGIuQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChiID09PSBudWxsKSB7XG4gICAgICAgIGlmIChhLkJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYS5CU19QUklWQVRFX05FU1RFRF9TT01FX05PTkUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoYi5CU19QUklWQVRFX05FU1RFRF9TT01FX05PTkUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiBhdXhfb2JqX2NvbXBhcmUoYSwgYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB2YXIgdGFnX2EgPSBhLlRBRyB8IDA7XG4gICAgICB2YXIgdGFnX2IgPSBiLlRBRyB8IDA7XG4gICAgICBpZiAodGFnX2EgPT09IDI0OCkge1xuICAgICAgICByZXR1cm4gQ2FtbC5jYW1sX2ludF9jb21wYXJlKGFbMV0sIGJbMV0pO1xuICAgICAgfVxuICAgICAgaWYgKHRhZ19hID09PSAyNTEpIHtcbiAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICBSRV9FWE5fSUQ6IFwiSW52YWxpZF9hcmd1bWVudFwiLFxuICAgICAgICAgICAgICBfMTogXCJlcXVhbDogYWJzdHJhY3QgdmFsdWVcIixcbiAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKHRhZ19hICE9PSB0YWdfYikge1xuICAgICAgICBpZiAodGFnX2EgPCB0YWdfYikge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIGxlbl9hID0gYS5sZW5ndGggfCAwO1xuICAgICAgdmFyIGxlbl9iID0gYi5sZW5ndGggfCAwO1xuICAgICAgaWYgKGxlbl9hID09PSBsZW5fYikge1xuICAgICAgICBpZiAoQXJyYXkuaXNBcnJheShhKSkge1xuICAgICAgICAgIHZhciBfaSA9IDA7XG4gICAgICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICAgICAgdmFyIGkgPSBfaTtcbiAgICAgICAgICAgIGlmIChpID09PSBsZW5fYSkge1xuICAgICAgICAgICAgICByZXR1cm4gMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByZXMgPSBjYW1sX2NvbXBhcmUoYVtpXSwgYltpXSk7XG4gICAgICAgICAgICBpZiAocmVzICE9PSAwKSB7XG4gICAgICAgICAgICAgIHJldHVybiByZXM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2UgaWYgKChhIGluc3RhbmNlb2YgRGF0ZSAmJiBiIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgICAgICByZXR1cm4gKGEgLSBiKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gYXV4X29ial9jb21wYXJlKGEsIGIpO1xuICAgICAgICB9XG4gICAgICB9IGVsc2UgaWYgKGxlbl9hIDwgbGVuX2IpIHtcbiAgICAgICAgdmFyIF9pJDEgPSAwO1xuICAgICAgICB3aGlsZSh0cnVlKSB7XG4gICAgICAgICAgdmFyIGkkMSA9IF9pJDE7XG4gICAgICAgICAgaWYgKGkkMSA9PT0gbGVuX2EpIHtcbiAgICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHJlcyQxID0gY2FtbF9jb21wYXJlKGFbaSQxXSwgYltpJDFdKTtcbiAgICAgICAgICBpZiAocmVzJDEgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXMkMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgX2kkMSA9IGkkMSArIDEgfCAwO1xuICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgfTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBfaSQyID0gMDtcbiAgICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICAgIHZhciBpJDIgPSBfaSQyO1xuICAgICAgICAgIGlmIChpJDIgPT09IGxlbl9iKSB7XG4gICAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdmFyIHJlcyQyID0gY2FtbF9jb21wYXJlKGFbaSQyXSwgYltpJDJdKTtcbiAgICAgICAgICBpZiAocmVzJDIgIT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiByZXMkMjtcbiAgICAgICAgICB9XG4gICAgICAgICAgX2kkMiA9IGkkMiArIDEgfCAwO1xuICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgfTtcbiAgICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBhdXhfb2JqX2NvbXBhcmUoYSwgYikge1xuICB2YXIgbWluX2tleV9saHMgPSB7XG4gICAgY29udGVudHM6IHVuZGVmaW5lZFxuICB9O1xuICB2YXIgbWluX2tleV9yaHMgPSB7XG4gICAgY29udGVudHM6IHVuZGVmaW5lZFxuICB9O1xuICB2YXIgZG9fa2V5ID0gZnVuY3Rpb24gKHBhcmFtLCBrZXkpIHtcbiAgICB2YXIgbWluX2tleSA9IHBhcmFtWzJdO1xuICAgIHZhciBiID0gcGFyYW1bMV07XG4gICAgaWYgKCEoIWIuaGFzT3duUHJvcGVydHkoa2V5KSB8fCBjYW1sX2NvbXBhcmUocGFyYW1bMF1ba2V5XSwgYltrZXldKSA+IDApKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgbWsgPSBtaW5fa2V5LmNvbnRlbnRzO1xuICAgIGlmIChtayAhPT0gdW5kZWZpbmVkICYmIGtleSA+PSBtaykge1xuICAgICAgcmV0dXJuIDtcbiAgICB9IGVsc2Uge1xuICAgICAgbWluX2tleS5jb250ZW50cyA9IGtleTtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICB9O1xuICB2YXIgcGFydGlhbF9hcmcgPSBbXG4gICAgYSxcbiAgICBiLFxuICAgIG1pbl9rZXlfcmhzXG4gIF07XG4gIHZhciBkb19rZXlfYSA9IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgIHJldHVybiBkb19rZXkocGFydGlhbF9hcmcsIHBhcmFtKTtcbiAgfTtcbiAgdmFyIHBhcnRpYWxfYXJnJDEgPSBbXG4gICAgYixcbiAgICBhLFxuICAgIG1pbl9rZXlfbGhzXG4gIF07XG4gIHZhciBkb19rZXlfYiA9IGZ1bmN0aW9uIChwYXJhbSkge1xuICAgIHJldHVybiBkb19rZXkocGFydGlhbF9hcmckMSwgcGFyYW0pO1xuICB9O1xuICBmb3JfaW4oYSwgZG9fa2V5X2EpO1xuICBmb3JfaW4oYiwgZG9fa2V5X2IpO1xuICB2YXIgbWF0Y2ggPSBtaW5fa2V5X2xocy5jb250ZW50cztcbiAgdmFyIG1hdGNoJDEgPSBtaW5fa2V5X3Jocy5jb250ZW50cztcbiAgaWYgKG1hdGNoICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAobWF0Y2gkMSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gQ2FtbC5jYW1sX3N0cmluZ19jb21wYXJlKG1hdGNoLCBtYXRjaCQxKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC0xO1xuICAgIH1cbiAgfSBlbHNlIGlmIChtYXRjaCQxICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2VxdWFsKGEsIGIpIHtcbiAgaWYgKGEgPT09IGIpIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxuICB2YXIgYV90eXBlID0gdHlwZW9mIGE7XG4gIGlmIChhX3R5cGUgPT09IFwic3RyaW5nXCIgfHwgYV90eXBlID09PSBcIm51bWJlclwiIHx8IGFfdHlwZSA9PT0gXCJib29sZWFuXCIgfHwgYV90eXBlID09PSBcInVuZGVmaW5lZFwiIHx8IGEgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIGJfdHlwZSA9IHR5cGVvZiBiO1xuICBpZiAoYV90eXBlID09PSBcImZ1bmN0aW9uXCIgfHwgYl90eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICB0aHJvdyB7XG4gICAgICAgICAgUkVfRVhOX0lEOiBcIkludmFsaWRfYXJndW1lbnRcIixcbiAgICAgICAgICBfMTogXCJlcXVhbDogZnVuY3Rpb25hbCB2YWx1ZVwiLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIGlmIChiX3R5cGUgPT09IFwibnVtYmVyXCIgfHwgYl90eXBlID09PSBcInVuZGVmaW5lZFwiIHx8IGIgPT09IG51bGwpIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbiAgdmFyIHRhZ19hID0gYS5UQUcgfCAwO1xuICB2YXIgdGFnX2IgPSBiLlRBRyB8IDA7XG4gIGlmICh0YWdfYSA9PT0gMjQ4KSB7XG4gICAgcmV0dXJuIGFbMV0gPT09IGJbMV07XG4gIH1cbiAgaWYgKHRhZ19hID09PSAyNTEpIHtcbiAgICB0aHJvdyB7XG4gICAgICAgICAgUkVfRVhOX0lEOiBcIkludmFsaWRfYXJndW1lbnRcIixcbiAgICAgICAgICBfMTogXCJlcXVhbDogYWJzdHJhY3QgdmFsdWVcIixcbiAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgfTtcbiAgfVxuICBpZiAodGFnX2EgIT09IHRhZ19iKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBsZW5fYSA9IGEubGVuZ3RoIHwgMDtcbiAgdmFyIGxlbl9iID0gYi5sZW5ndGggfCAwO1xuICBpZiAobGVuX2EgPT09IGxlbl9iKSB7XG4gICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgIHZhciBfaSA9IDA7XG4gICAgICB3aGlsZSh0cnVlKSB7XG4gICAgICAgIHZhciBpID0gX2k7XG4gICAgICAgIGlmIChpID09PSBsZW5fYSkge1xuICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG4gICAgICAgIGlmICghY2FtbF9lcXVhbChhW2ldLCBiW2ldKSkge1xuICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgfTtcbiAgICB9IGVsc2UgaWYgKChhIGluc3RhbmNlb2YgRGF0ZSAmJiBiIGluc3RhbmNlb2YgRGF0ZSkpIHtcbiAgICAgIHJldHVybiAhKGEgPiBiIHx8IGEgPCBiKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHJlc3VsdCA9IHtcbiAgICAgICAgY29udGVudHM6IHRydWVcbiAgICAgIH07XG4gICAgICB2YXIgZG9fa2V5X2EgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghYi5oYXNPd25Qcm9wZXJ0eShrZXkpKSB7XG4gICAgICAgICAgcmVzdWx0LmNvbnRlbnRzID0gZmFsc2U7XG4gICAgICAgICAgcmV0dXJuIDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH07XG4gICAgICB2YXIgZG9fa2V5X2IgPSBmdW5jdGlvbiAoa2V5KSB7XG4gICAgICAgIGlmICghYS5oYXNPd25Qcm9wZXJ0eShrZXkpIHx8ICFjYW1sX2VxdWFsKGJba2V5XSwgYVtrZXldKSkge1xuICAgICAgICAgIHJlc3VsdC5jb250ZW50cyA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9O1xuICAgICAgZm9yX2luKGEsIGRvX2tleV9hKTtcbiAgICAgIGlmIChyZXN1bHQuY29udGVudHMpIHtcbiAgICAgICAgZm9yX2luKGIsIGRvX2tleV9iKTtcbiAgICAgIH1cbiAgICAgIHJldHVybiByZXN1bHQuY29udGVudHM7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2VxdWFsX251bGwoeCwgeSkge1xuICBpZiAoeSAhPT0gbnVsbCkge1xuICAgIHJldHVybiBjYW1sX2VxdWFsKHgsIHkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ID09PSB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZXF1YWxfdW5kZWZpbmVkKHgsIHkpIHtcbiAgaWYgKHkgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBjYW1sX2VxdWFsKHgsIHkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4ID09PSB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZXF1YWxfbnVsbGFibGUoeCwgeSkge1xuICBpZiAoeSA9PSBudWxsKSB7XG4gICAgcmV0dXJuIHggPT09IHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGNhbWxfZXF1YWwoeCwgeSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9ub3RlcXVhbChhLCBiKSB7XG4gIHJldHVybiAhY2FtbF9lcXVhbChhLCBiKTtcbn1cblxuZnVuY3Rpb24gY2FtbF9ncmVhdGVyZXF1YWwoYSwgYikge1xuICByZXR1cm4gY2FtbF9jb21wYXJlKGEsIGIpID49IDA7XG59XG5cbmZ1bmN0aW9uIGNhbWxfZ3JlYXRlcnRoYW4oYSwgYikge1xuICByZXR1cm4gY2FtbF9jb21wYXJlKGEsIGIpID4gMDtcbn1cblxuZnVuY3Rpb24gY2FtbF9sZXNzZXF1YWwoYSwgYikge1xuICByZXR1cm4gY2FtbF9jb21wYXJlKGEsIGIpIDw9IDA7XG59XG5cbmZ1bmN0aW9uIGNhbWxfbGVzc3RoYW4oYSwgYikge1xuICByZXR1cm4gY2FtbF9jb21wYXJlKGEsIGIpIDwgMDtcbn1cblxuZnVuY3Rpb24gY2FtbF9taW4oeCwgeSkge1xuICBpZiAoY2FtbF9jb21wYXJlKHgsIHkpIDw9IDApIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX21heCh4LCB5KSB7XG4gIGlmIChjYW1sX2NvbXBhcmUoeCwgeSkgPj0gMCkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGNhbWxfb2JqX2R1cCAsXG4gIHVwZGF0ZV9kdW1teSAsXG4gIGNhbWxfY29tcGFyZSAsXG4gIGNhbWxfZXF1YWwgLFxuICBjYW1sX2VxdWFsX251bGwgLFxuICBjYW1sX2VxdWFsX3VuZGVmaW5lZCAsXG4gIGNhbWxfZXF1YWxfbnVsbGFibGUgLFxuICBjYW1sX25vdGVxdWFsICxcbiAgY2FtbF9ncmVhdGVyZXF1YWwgLFxuICBjYW1sX2dyZWF0ZXJ0aGFuICxcbiAgY2FtbF9sZXNzdGhhbiAsXG4gIGNhbWxfbGVzc2VxdWFsICxcbiAgY2FtbF9taW4gLFxuICBjYW1sX21heCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbmZ1bmN0aW9uIGlzTmVzdGVkKHgpIHtcbiAgcmV0dXJuIHguQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FICE9PSB1bmRlZmluZWQ7XG59XG5cbmZ1bmN0aW9uIHNvbWUoeCkge1xuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIEJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORTogMFxuICAgICAgICAgIH07XG4gIH0gZWxzZSBpZiAoeCAhPT0gbnVsbCAmJiB4LkJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIEJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORTogeC5CU19QUklWQVRFX05FU1RFRF9TT01FX05PTkUgKyAxIHwgMFxuICAgICAgICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbn1cblxuZnVuY3Rpb24gbnVsbGFibGVfdG9fb3B0KHgpIHtcbiAgaWYgKHggPT0gbnVsbCkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNvbWUoeCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5kZWZpbmVkX3RvX29wdCh4KSB7XG4gIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzb21lKHgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG51bGxfdG9fb3B0KHgpIHtcbiAgaWYgKHggPT09IG51bGwpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzb21lKHgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHZhbEZyb21PcHRpb24oeCkge1xuICBpZiAoISh4ICE9PSBudWxsICYmIHguQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FICE9PSB1bmRlZmluZWQpKSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbiAgdmFyIGRlcHRoID0geC5CU19QUklWQVRFX05FU1RFRF9TT01FX05PTkU7XG4gIGlmIChkZXB0aCA9PT0gMCkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIEJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORTogZGVwdGggLSAxIHwgMFxuICAgICAgICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gb3B0aW9uX2dldCh4KSB7XG4gIGlmICh4ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB2YWxGcm9tT3B0aW9uKHgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wdGlvbl91bndyYXAoeCkge1xuICBpZiAoeCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHguVkFMO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIG51bGxhYmxlX3RvX29wdCAsXG4gIHVuZGVmaW5lZF90b19vcHQgLFxuICBudWxsX3RvX29wdCAsXG4gIHZhbEZyb21PcHRpb24gLFxuICBzb21lICxcbiAgaXNOZXN0ZWQgLFxuICBvcHRpb25fZ2V0ICxcbiAgb3B0aW9uX3Vud3JhcCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDYW1sX2FycmF5IGZyb20gXCIuL2NhbWxfYXJyYXkuanNcIjtcblxuZnVuY3Rpb24gYXBwKF9mLCBfYXJncykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGFyZ3MgPSBfYXJncztcbiAgICB2YXIgZiA9IF9mO1xuICAgIHZhciBpbml0X2FyaXR5ID0gZi5sZW5ndGg7XG4gICAgdmFyIGFyaXR5ID0gaW5pdF9hcml0eSA9PT0gMCA/IDEgOiBpbml0X2FyaXR5O1xuICAgIHZhciBsZW4gPSBhcmdzLmxlbmd0aDtcbiAgICB2YXIgZCA9IGFyaXR5IC0gbGVuIHwgMDtcbiAgICBpZiAoZCA9PT0gMCkge1xuICAgICAgcmV0dXJuIGYuYXBwbHkobnVsbCwgYXJncyk7XG4gICAgfVxuICAgIGlmIChkID49IDApIHtcbiAgICAgIHJldHVybiAoZnVuY3Rpb24oZixhcmdzKXtcbiAgICAgIHJldHVybiBmdW5jdGlvbiAoeCkge1xuICAgICAgICByZXR1cm4gYXBwKGYsIGFyZ3MuY29uY2F0KFt4XSkpO1xuICAgICAgfVxuICAgICAgfShmLGFyZ3MpKTtcbiAgICB9XG4gICAgX2FyZ3MgPSBDYW1sX2FycmF5LnN1YihhcmdzLCBhcml0eSwgLWQgfCAwKTtcbiAgICBfZiA9IGYuYXBwbHkobnVsbCwgQ2FtbF9hcnJheS5zdWIoYXJncywgMCwgYXJpdHkpKTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIF8xKG8sIGEwKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDEpIHtcbiAgICByZXR1cm4gbyhhMCk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gbyhhMCk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMyk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0KTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0LCBwYXJhbSQ1KSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMsIHBhcmFtJDQsIHBhcmFtJDUpO1xuICAgICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFthMF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzEobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAxKSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhMCkge1xuICAgICAgcmV0dXJuIF8xKG8sIGEwKTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF8yKG8sIGEwLCBhMSkge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAyKSB7XG4gICAgcmV0dXJuIG8oYTAsIGExKTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFthMV0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEpO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIHBhcmFtKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0KSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0KTtcbiAgICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMVxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fMihvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDIpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSkge1xuICAgICAgcmV0dXJuIF8yKG8sIGEwLCBhMSk7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfMyhvLCBhMCwgYTEsIGEyKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDMpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyKTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFthMl0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyKTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgcGFyYW0pO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMik7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMykge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpO1xuICAgICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMlxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fMyhvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDMpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIpIHtcbiAgICAgIHJldHVybiBfMyhvLCBhMCwgYTEsIGEyKTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF80KG8sIGEwLCBhMSwgYTIsIGEzKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDQpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMyk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTNcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTNcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyKSwgW2EzXSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzKTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIHBhcmFtKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgcGFyYW0sIHBhcmFtJDEpO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMik7XG4gICAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICBhM1xuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fNChvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDQpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzKSB7XG4gICAgICByZXR1cm4gXzQobywgYTAsIGExLCBhMiwgYTMpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gXzUobywgYTAsIGExLCBhMiwgYTMsIGE0KSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDUpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzKSwgW2E0XSk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCk7XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgcGFyYW0pO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgcGFyYW0sIHBhcmFtJDEpO1xuICAgICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgIGE0XG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX181KG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNSkge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0KSB7XG4gICAgICByZXR1cm4gXzUobywgYTAsIGExLCBhMiwgYTMsIGE0KTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF82KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNikge1xuICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0KSwgW2E1XSk7XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpO1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBwYXJhbSk7XG4gICAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgIGE1XG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX182KG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNikge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0LCBhNSkge1xuICAgICAgcmV0dXJuIF82KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gXzcobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNykge1xuICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMyksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpLCBbYTZdKTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpO1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX183KG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gNykge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpIHtcbiAgICAgIHJldHVybiBfNyhvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNik7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfOChvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gOCkge1xuICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2LCBhNyk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpLCBbYTddKTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgYTdcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzgobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA4KSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpIHtcbiAgICAgIHJldHVybiBfOChvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpO1xuICAgIH07XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgYXBwICxcbiAgXzEgLFxuICBfXzEgLFxuICBfMiAsXG4gIF9fMiAsXG4gIF8zICxcbiAgX18zICxcbiAgXzQgLFxuICBfXzQgLFxuICBfNSAsXG4gIF9fNSAsXG4gIF82ICxcbiAgX182ICxcbiAgXzcgLFxuICBfXzcgLFxuICBfOCAsXG4gIF9fOCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDYW1sX29wdGlvbiBmcm9tIFwiLi9jYW1sX29wdGlvbi5qc1wiO1xuXG5mdW5jdGlvbiBnZXQoZGljdCwgaykge1xuICBpZiAoKGsgaW4gZGljdCkpIHtcbiAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZShkaWN0W2tdKTtcbiAgfVxuICBcbn1cblxudmFyIHVuc2FmZURlbGV0ZUtleSA9IChmdW5jdGlvbiAoZGljdCxrZXkpe1xuICAgICAgZGVsZXRlIGRpY3Rba2V5XTtcbiAgICAgfSk7XG5cbmZ1bmN0aW9uIGVudHJpZXMoZGljdCkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRpY3QpO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIgdmFsdWVzID0gbmV3IEFycmF5KGwpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICB2YXIga2V5ID0ga2V5c1tpXTtcbiAgICB2YWx1ZXNbaV0gPSBbXG4gICAgICBrZXksXG4gICAgICBkaWN0W2tleV1cbiAgICBdO1xuICB9XG4gIHJldHVybiB2YWx1ZXM7XG59XG5cbmZ1bmN0aW9uIHZhbHVlcyhkaWN0KSB7XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoZGljdCk7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIHZhciB2YWx1ZXMkMSA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgdmFsdWVzJDFbaV0gPSBkaWN0W2tleXNbaV1dO1xuICB9XG4gIHJldHVybiB2YWx1ZXMkMTtcbn1cblxuZnVuY3Rpb24gZnJvbUxpc3QoZW50cmllcykge1xuICB2YXIgZGljdCA9IHt9O1xuICB2YXIgX3BhcmFtID0gZW50cmllcztcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbTtcbiAgICBpZiAoIXBhcmFtKSB7XG4gICAgICByZXR1cm4gZGljdDtcbiAgICB9XG4gICAgdmFyIG1hdGNoID0gcGFyYW0uaGQ7XG4gICAgZGljdFttYXRjaFswXV0gPSBtYXRjaFsxXTtcbiAgICBfcGFyYW0gPSBwYXJhbS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheShlbnRyaWVzKSB7XG4gIHZhciBkaWN0ID0ge307XG4gIHZhciBsID0gZW50cmllcy5sZW5ndGg7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHZhciBtYXRjaCA9IGVudHJpZXNbaV07XG4gICAgZGljdFttYXRjaFswXV0gPSBtYXRjaFsxXTtcbiAgfVxuICByZXR1cm4gZGljdDtcbn1cblxuZnVuY3Rpb24gbWFwKGYsIHNvdXJjZSkge1xuICB2YXIgdGFyZ2V0ID0ge307XG4gIHZhciBrZXlzID0gT2JqZWN0LmtleXMoc291cmNlKTtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdGFyZ2V0W2tleV0gPSBmKHNvdXJjZVtrZXldKTtcbiAgfVxuICByZXR1cm4gdGFyZ2V0O1xufVxuXG5leHBvcnQge1xuICBnZXQgLFxuICB1bnNhZmVEZWxldGVLZXkgLFxuICBlbnRyaWVzICxcbiAgdmFsdWVzICxcbiAgZnJvbUxpc3QgLFxuICBmcm9tQXJyYXkgLFxuICBtYXAgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQ2FtbF9qc19leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfanNfZXhjZXB0aW9ucy5qc1wiO1xuXG52YXIgYW55VG9FeG5JbnRlcm5hbCA9IENhbWxfanNfZXhjZXB0aW9ucy5pbnRlcm5hbFRvT0NhbWxFeGNlcHRpb247XG5cbmZ1bmN0aW9uIHJhaXNlRXJyb3Ioc3RyKSB7XG4gIHRocm93IG5ldyBFcnJvcihzdHIpO1xufVxuXG5mdW5jdGlvbiByYWlzZUV2YWxFcnJvcihzdHIpIHtcbiAgdGhyb3cgbmV3IEV2YWxFcnJvcihzdHIpO1xufVxuXG5mdW5jdGlvbiByYWlzZVJhbmdlRXJyb3Ioc3RyKSB7XG4gIHRocm93IG5ldyBSYW5nZUVycm9yKHN0cik7XG59XG5cbmZ1bmN0aW9uIHJhaXNlUmVmZXJlbmNlRXJyb3Ioc3RyKSB7XG4gIHRocm93IG5ldyBSZWZlcmVuY2VFcnJvcihzdHIpO1xufVxuXG5mdW5jdGlvbiByYWlzZVN5bnRheEVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgU3ludGF4RXJyb3Ioc3RyKTtcbn1cblxuZnVuY3Rpb24gcmFpc2VUeXBlRXJyb3Ioc3RyKSB7XG4gIHRocm93IG5ldyBUeXBlRXJyb3Ioc3RyKTtcbn1cblxuZnVuY3Rpb24gcmFpc2VVcmlFcnJvcihzdHIpIHtcbiAgdGhyb3cgbmV3IFVSSUVycm9yKHN0cik7XG59XG5cbnZhciAkJEVycm9yJDEgPSBDYW1sX2pzX2V4Y2VwdGlvbnMuJCRFcnJvcjtcblxuZXhwb3J0IHtcbiAgJCRFcnJvciQxIGFzICQkRXJyb3IsXG4gIGFueVRvRXhuSW50ZXJuYWwgLFxuICByYWlzZUVycm9yICxcbiAgcmFpc2VFdmFsRXJyb3IgLFxuICByYWlzZVJhbmdlRXJyb3IgLFxuICByYWlzZVJlZmVyZW5jZUVycm9yICxcbiAgcmFpc2VTeW50YXhFcnJvciAsXG4gIHJhaXNlVHlwZUVycm9yICxcbiAgcmFpc2VVcmlFcnJvciAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbmZ1bmN0aW9uIGVxdWFsKHgsIHkpIHtcbiAgcmV0dXJuIHggPT09IHk7XG59XG5cbnZhciBtYXggPSAyMTQ3NDgzNjQ3O1xuXG52YXIgbWluID0gLTIxNDc0ODM2NDg7XG5cbmV4cG9ydCB7XG4gIGVxdWFsICxcbiAgbWF4ICxcbiAgbWluICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIEpzX3ZlY3RvciBmcm9tIFwiLi9qc192ZWN0b3IuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfb3B0aW9uIGZyb20gXCIuL2NhbWxfb3B0aW9uLmpzXCI7XG5cbmZ1bmN0aW9uIGxlbmd0aChsKSB7XG4gIHZhciBfbGVuID0gMDtcbiAgdmFyIF9wYXJhbSA9IGw7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgdmFyIGxlbiA9IF9sZW47XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIGxlbjtcbiAgICB9XG4gICAgX3BhcmFtID0gcGFyYW0udGw7XG4gICAgX2xlbiA9IGxlbiArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29ucyh4LCB4cykge1xuICByZXR1cm4ge1xuICAgICAgICAgIGhkOiB4LFxuICAgICAgICAgIHRsOiB4c1xuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBpc0VtcHR5KHgpIHtcbiAgcmV0dXJuIHggPT09IC8qIFtdICovMDtcbn1cblxuZnVuY3Rpb24gaGQocGFyYW0pIHtcbiAgaWYgKHBhcmFtKSB7XG4gICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUocGFyYW0uaGQpO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiB0bChwYXJhbSkge1xuICBpZiAocGFyYW0pIHtcbiAgICByZXR1cm4gcGFyYW0udGw7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIG50aChsLCBuKSB7XG4gIGlmIChuIDwgMCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIF9sID0gbDtcbiAgdmFyIF9uID0gbjtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBuJDEgPSBfbjtcbiAgICB2YXIgbCQxID0gX2w7XG4gICAgaWYgKCFsJDEpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGlmIChuJDEgPT09IDApIHtcbiAgICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKGwkMS5oZCk7XG4gICAgfVxuICAgIF9uID0gbiQxIC0gMSB8IDA7XG4gICAgX2wgPSBsJDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZXZBcHBlbmQoX2wxLCBfbDIpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKCFsMSkge1xuICAgICAgcmV0dXJuIGwyO1xuICAgIH1cbiAgICBfbDIgPSB7XG4gICAgICBoZDogbDEuaGQsXG4gICAgICB0bDogbDJcbiAgICB9O1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmV2KGwpIHtcbiAgcmV0dXJuIHJldkFwcGVuZChsLCAvKiBbXSAqLzApO1xufVxuXG5mdW5jdGlvbiBtYXBSZXZBdXgoZiwgX2FjYywgX2xzKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbHMgPSBfbHM7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCFscykge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgX2xzID0gbHMudGw7XG4gICAgX2FjYyA9IHtcbiAgICAgIGhkOiBmKGxzLmhkKSxcbiAgICAgIHRsOiBhY2NcbiAgICB9O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWFwUmV2KGYsIGxzKSB7XG4gIHJldHVybiBtYXBSZXZBdXgoZiwgLyogW10gKi8wLCBscyk7XG59XG5cbmZ1bmN0aW9uIG1hcChmLCBscykge1xuICByZXR1cm4gcmV2QXBwZW5kKG1hcFJldkF1eChmLCAvKiBbXSAqLzAsIGxzKSwgLyogW10gKi8wKTtcbn1cblxuZnVuY3Rpb24gaXRlcihmLCBfcGFyYW0pIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbTtcbiAgICBpZiAoIXBhcmFtKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBmKHBhcmFtLmhkKTtcbiAgICBfcGFyYW0gPSBwYXJhbS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGl0ZXJpKGYsIGwpIHtcbiAgdmFyIF9pID0gMDtcbiAgdmFyIF9wYXJhbSA9IGw7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoIXBhcmFtKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBmKGksIHBhcmFtLmhkKTtcbiAgICBfcGFyYW0gPSBwYXJhbS50bDtcbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvbGRMZWZ0KGYsIF9hY2N1LCBfbCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwgPSBfbDtcbiAgICB2YXIgYWNjdSA9IF9hY2N1O1xuICAgIGlmICghbCkge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIF9sID0gbC50bDtcbiAgICBfYWNjdSA9IGYoYWNjdSwgbC5oZCk7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0YWlsTG9vcChmLCBfYWNjLCBfcGFyYW0pIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwYXJhbSA9IF9wYXJhbTtcbiAgICB2YXIgYWNjID0gX2FjYztcbiAgICBpZiAoIXBhcmFtKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICBfcGFyYW0gPSBwYXJhbS50bDtcbiAgICBfYWNjID0gZihwYXJhbS5oZCwgYWNjKTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvbGRSaWdodChmLCBsLCBpbml0KSB7XG4gIHZhciBsb29wID0gZnVuY3Rpb24gKG4sIHBhcmFtKSB7XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIGluaXQ7XG4gICAgfVxuICAgIHZhciB0ID0gcGFyYW0udGw7XG4gICAgdmFyIGggPSBwYXJhbS5oZDtcbiAgICBpZiAobiA8IDEwMDApIHtcbiAgICAgIHJldHVybiBmKGgsIGxvb3AobiArIDEgfCAwLCB0KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBmKGgsIHRhaWxMb29wKGYsIGluaXQsIHJldkFwcGVuZCh0LCAvKiBbXSAqLzApKSk7XG4gICAgfVxuICB9O1xuICByZXR1cm4gbG9vcCgwLCBsKTtcbn1cblxuZnVuY3Rpb24gZmxhdHRlbihseCkge1xuICB2YXIgX2FjYyA9IC8qIFtdICovMDtcbiAgdmFyIF9seCA9IGx4O1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGx4JDEgPSBfbHg7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCFseCQxKSB7XG4gICAgICByZXR1cm4gcmV2QXBwZW5kKGFjYywgLyogW10gKi8wKTtcbiAgICB9XG4gICAgX2x4ID0gbHgkMS50bDtcbiAgICBfYWNjID0gcmV2QXBwZW5kKGx4JDEuaGQsIGFjYyk7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJSZXZBdXgoZiwgX2FjYywgX3hzKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgdmFyIHlzID0geHMudGw7XG4gICAgdmFyIHkgPSB4cy5oZDtcbiAgICBpZiAoZih5KSkge1xuICAgICAgX3hzID0geXM7XG4gICAgICBfYWNjID0ge1xuICAgICAgICBoZDogeSxcbiAgICAgICAgdGw6IGFjY1xuICAgICAgfTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgX3hzID0geXM7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWx0ZXIoZiwgeHMpIHtcbiAgcmV0dXJuIHJldkFwcGVuZChmaWx0ZXJSZXZBdXgoZiwgLyogW10gKi8wLCB4cyksIC8qIFtdICovMCk7XG59XG5cbmZ1bmN0aW9uIGZpbHRlck1hcFJldkF1eChmLCBfYWNjLCBfeHMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICB2YXIgYWNjID0gX2FjYztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICB2YXIgeXMgPSB4cy50bDtcbiAgICB2YXIgeiA9IGYoeHMuaGQpO1xuICAgIGlmICh6ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIF94cyA9IHlzO1xuICAgICAgX2FjYyA9IHtcbiAgICAgICAgaGQ6IENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24oeiksXG4gICAgICAgIHRsOiBhY2NcbiAgICAgIH07XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIF94cyA9IHlzO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyTWFwKGYsIHhzKSB7XG4gIHJldHVybiByZXZBcHBlbmQoZmlsdGVyTWFwUmV2QXV4KGYsIC8qIFtdICovMCwgeHMpLCAvKiBbXSAqLzApO1xufVxuXG5mdW5jdGlvbiBjb3VudEJ5KGYsIHhzKSB7XG4gIHZhciBfYWNjID0gMDtcbiAgdmFyIF94cyA9IHhzO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzJDEgPSBfeHM7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCF4cyQxKSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICBfeHMgPSB4cyQxLnRsO1xuICAgIF9hY2MgPSBmKHhzJDEuaGQpID8gYWNjICsgMSB8IDAgOiBhY2M7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpbml0KG4sIGYpIHtcbiAgcmV0dXJuIEpzX3ZlY3Rvci50b0xpc3QoSnNfdmVjdG9yLmluaXQobiwgZikpO1xufVxuXG5mdW5jdGlvbiB0b1ZlY3Rvcih4cykge1xuICBpZiAoIXhzKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBhID0gbmV3IEFycmF5KGxlbmd0aCh4cykpO1xuICB2YXIgX2kgPSAwO1xuICB2YXIgX3BhcmFtID0geHM7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoIXBhcmFtKSB7XG4gICAgICByZXR1cm4gYTtcbiAgICB9XG4gICAgYVtpXSA9IHBhcmFtLmhkO1xuICAgIF9wYXJhbSA9IHBhcmFtLnRsO1xuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXF1YWwoY21wLCBfeHMsIF95cykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHlzID0gX3lzO1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICBpZiAoeXMpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICgheXMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFjbXAoeHMuaGQsIHlzLmhkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfeXMgPSB5cy50bDtcbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmV4cG9ydCB7XG4gIGxlbmd0aCAsXG4gIGNvbnMgLFxuICBpc0VtcHR5ICxcbiAgaGQgLFxuICB0bCAsXG4gIG50aCAsXG4gIHJldkFwcGVuZCAsXG4gIHJldiAsXG4gIG1hcFJldiAsXG4gIG1hcCAsXG4gIGl0ZXIgLFxuICBpdGVyaSAsXG4gIGZvbGRMZWZ0ICxcbiAgZm9sZFJpZ2h0ICxcbiAgZmxhdHRlbiAsXG4gIGZpbHRlciAsXG4gIGZpbHRlck1hcCAsXG4gIGNvdW50QnkgLFxuICBpbml0ICxcbiAgdG9WZWN0b3IgLFxuICBlcXVhbCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBKc19pbnQgZnJvbSBcIi4vanNfaW50LmpzXCI7XG5cbmZ1bmN0aW9uIHVuc2FmZV9jZWlsKHByaW0pIHtcbiAgcmV0dXJuIE1hdGguY2VpbChwcmltKTtcbn1cblxuZnVuY3Rpb24gY2VpbF9pbnQoZikge1xuICBpZiAoZiA+IEpzX2ludC5tYXgpIHtcbiAgICByZXR1cm4gSnNfaW50Lm1heDtcbiAgfSBlbHNlIGlmIChmIDwgSnNfaW50Lm1pbikge1xuICAgIHJldHVybiBKc19pbnQubWluO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBNYXRoLmNlaWwoZik7XG4gIH1cbn1cblxuZnVuY3Rpb24gdW5zYWZlX2Zsb29yKHByaW0pIHtcbiAgcmV0dXJuIE1hdGguZmxvb3IocHJpbSk7XG59XG5cbmZ1bmN0aW9uIGZsb29yX2ludChmKSB7XG4gIGlmIChmID4gSnNfaW50Lm1heCkge1xuICAgIHJldHVybiBKc19pbnQubWF4O1xuICB9IGVsc2UgaWYgKGYgPCBKc19pbnQubWluKSB7XG4gICAgcmV0dXJuIEpzX2ludC5taW47XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIE1hdGguZmxvb3IoZik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmFuZG9tX2ludChtaW4sIG1heCkge1xuICByZXR1cm4gZmxvb3JfaW50KE1hdGgucmFuZG9tKCkgKiAobWF4IC0gbWluIHwgMCkpICsgbWluIHwgMDtcbn1cblxudmFyIGNlaWwgPSBjZWlsX2ludDtcblxudmFyIGZsb29yID0gZmxvb3JfaW50O1xuXG5leHBvcnQge1xuICB1bnNhZmVfY2VpbCAsXG4gIGNlaWxfaW50ICxcbiAgY2VpbCAsXG4gIHVuc2FmZV9mbG9vciAsXG4gIGZsb29yX2ludCAsXG4gIGZsb29yICxcbiAgcmFuZG9tX2ludCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbmZ1bmN0aW9uIGZpbHRlckluUGxhY2UocCwgYSkge1xuICB2YXIgaSA9IDA7XG4gIHZhciBqID0gMDtcbiAgd2hpbGUoaSA8IGEubGVuZ3RoKSB7XG4gICAgdmFyIHYgPSBhW2ldO1xuICAgIGlmIChwKHYpKSB7XG4gICAgICBhW2pdID0gdjtcbiAgICAgIGogPSBqICsgMSB8IDA7XG4gICAgfVxuICAgIGkgPSBpICsgMSB8IDA7XG4gIH07XG4gIGEuc3BsaWNlKGopO1xuICBcbn1cblxuZnVuY3Rpb24gZW1wdHkoYSkge1xuICBhLnNwbGljZSgwKTtcbiAgXG59XG5cbmZ1bmN0aW9uIHB1c2hCYWNrKHgsIHhzKSB7XG4gIHhzLnB1c2goeCk7XG4gIFxufVxuXG5mdW5jdGlvbiBtZW1CeVJlZih4LCB4cykge1xuICByZXR1cm4geHMuaW5kZXhPZih4KSA+PSAwO1xufVxuXG5mdW5jdGlvbiBpdGVyKGYsIHhzKSB7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0geHMubGVuZ3RoOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgZih4c1tpXSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGl0ZXJpKGYsIGEpIHtcbiAgZm9yKHZhciBpID0gMCAsaV9maW5pc2ggPSBhLmxlbmd0aDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIGYoaSwgYVtpXSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIHRvTGlzdChhKSB7XG4gIHZhciBfaSA9IGEubGVuZ3RoIC0gMSB8IDA7XG4gIHZhciBfcmVzID0gLyogW10gKi8wO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHJlcyA9IF9yZXM7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoaSA8IDApIHtcbiAgICAgIHJldHVybiByZXM7XG4gICAgfVxuICAgIF9yZXMgPSB7XG4gICAgICBoZDogYVtpXSxcbiAgICAgIHRsOiByZXNcbiAgICB9O1xuICAgIF9pID0gaSAtIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdChuLCBmKSB7XG4gIHZhciB2ID0gbmV3IEFycmF5KG4pO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbjsgKytpKXtcbiAgICB2W2ldID0gZihpKTtcbiAgfVxuICByZXR1cm4gdjtcbn1cblxuZnVuY3Rpb24gY29weSh4KSB7XG4gIHZhciBsZW4gPSB4Lmxlbmd0aDtcbiAgdmFyIGIgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICBiW2ldID0geFtpXTtcbiAgfVxuICByZXR1cm4gYjtcbn1cblxuZnVuY3Rpb24gbWFwKGYsIGEpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIHIgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHJbaV0gPSBmKGFbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBmb2xkTGVmdChmLCB4LCBhKSB7XG4gIHZhciByID0geDtcbiAgZm9yKHZhciBpID0gMCAsaV9maW5pc2ggPSBhLmxlbmd0aDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIHIgPSBmKHIsIGFbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBmb2xkUmlnaHQoZiwgYSwgeCkge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IGEubGVuZ3RoIC0gMSB8IDA7IGkgPj0gMDsgLS1pKXtcbiAgICByID0gZihhW2ldLCByKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gbWFwaShmLCBhKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIGlmIChsID09PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciByID0gbmV3IEFycmF5KGwpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICByW2ldID0gZihpLCBhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gYXBwZW5kKHgsIGEpIHtcbiAgcmV0dXJuIGEuY29uY2F0KFt4XSk7XG59XG5cbmV4cG9ydCB7XG4gIGZpbHRlckluUGxhY2UgLFxuICBlbXB0eSAsXG4gIHB1c2hCYWNrICxcbiAgY29weSAsXG4gIG1lbUJ5UmVmICxcbiAgaXRlciAsXG4gIGl0ZXJpICxcbiAgdG9MaXN0ICxcbiAgbWFwICxcbiAgbWFwaSAsXG4gIGZvbGRMZWZ0ICxcbiAgZm9sZFJpZ2h0ICxcbiAgaW5pdCAsXG4gIGFwcGVuZCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBSZVNjcmlwdCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG5cbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBKc19saXN0IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2pzX2xpc3QuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfTGlzdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0xpc3QuanNcIjtcblxuZnVuY3Rpb24gdFRvSnMocGFyYW0pIHtcbiAgcmV0dXJuIHBhcmFtICsgMCB8IDA7XG59XG5cbmZ1bmN0aW9uIHRGcm9tSnMocGFyYW0pIHtcbiAgaWYgKHBhcmFtIDw9IDMgJiYgMCA8PSBwYXJhbSkge1xuICAgIHJldHVybiBwYXJhbSAtIDAgfCAwO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiB0RW51bShzb3J0Tk1VSU9wdCwgcGFyYW0pIHtcbiAgdmFyIHNvcnROTVVJID0gc29ydE5NVUlPcHQgIT09IHVuZGVmaW5lZCA/IHNvcnROTVVJT3B0IDogZmFsc2U7XG4gIGlmIChzb3J0Tk1VSSkge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICAvKiBOICovMCxcbiAgICAgICAgICAgIC8qIE0gKi8zLFxuICAgICAgICAgICAgLyogVSAqLzEsXG4gICAgICAgICAgICAvKiBJICovMlxuICAgICAgICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC8qIE4gKi8wLFxuICAgICAgICAgICAgLyogVSAqLzEsXG4gICAgICAgICAgICAvKiBJICovMixcbiAgICAgICAgICAgIC8qIE0gKi8zXG4gICAgICAgICAgXTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0RW51bUxpc3Qoc29ydE5NVUlPcHQsIHBhcmFtKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICBpZiAoc29ydE5NVUkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IC8qIE4gKi8wLFxuICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgaGQ6IC8qIE0gKi8zLFxuICAgICAgICAgICAgICB0bDoge1xuICAgICAgICAgICAgICAgIGhkOiAvKiBVICovMSxcbiAgICAgICAgICAgICAgICB0bDoge1xuICAgICAgICAgICAgICAgICAgaGQ6IC8qIEkgKi8yLFxuICAgICAgICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiAvKiBOICovMCxcbiAgICAgICAgICAgIHRsOiB7XG4gICAgICAgICAgICAgIGhkOiAvKiBVICovMSxcbiAgICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgICBoZDogLyogSSAqLzIsXG4gICAgICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgICAgIGhkOiAvKiBNICovMyxcbiAgICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3coeCkge1xuICBzd2l0Y2ggKHgpIHtcbiAgICBjYXNlIC8qIE4gKi8wIDpcbiAgICAgICAgcmV0dXJuIFwiTlwiO1xuICAgIGNhc2UgLyogVSAqLzEgOlxuICAgICAgICByZXR1cm4gXCJVXCI7XG4gICAgY2FzZSAvKiBJICovMiA6XG4gICAgICAgIHJldHVybiBcIklcIjtcbiAgICBjYXNlIC8qIE0gKi8zIDpcbiAgICAgICAgcmV0dXJuIFwiTVwiO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dBc0tleSh4KSB7XG4gIHN3aXRjaCAoeCkge1xuICAgIGNhc2UgLyogTiAqLzAgOlxuICAgICAgICByZXR1cm4gXCJOXCI7XG4gICAgY2FzZSAvKiBVICovMSA6XG4gICAgICAgIHJldHVybiBcIlVcIjtcbiAgICBjYXNlIC8qIEkgKi8yIDpcbiAgICAgICAgcmV0dXJuIFwiSVwiO1xuICAgIGNhc2UgLyogTSAqLzMgOlxuICAgICAgICByZXR1cm4gXCJNXCI7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9JbnQoc29ydE5NVUlPcHQsIGMpIHtcbiAgdmFyIHNvcnROTVVJID0gc29ydE5NVUlPcHQgIT09IHVuZGVmaW5lZCA/IHNvcnROTVVJT3B0IDogZmFsc2U7XG4gIHZhciBuID0gYyArIDAgfCAwO1xuICBzd2l0Y2ggKG4pIHtcbiAgICBjYXNlIDAgOlxuICAgICAgICByZXR1cm4gbjtcbiAgICBjYXNlIDEgOlxuICAgICAgICBpZiAoc29ydE5NVUkpIHtcbiAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfVxuICAgIGNhc2UgMiA6XG4gICAgICAgIGlmIChzb3J0Tk1VSSkge1xuICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICB9XG4gICAgY2FzZSAzIDpcbiAgICAgICAgaWYgKHNvcnROTVVJKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIC05OTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmcm9tSW50KHNvcnROTVVJT3B0LCBuKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICB2YXIgX2MgPSB0RnJvbUpzKG4pO1xuICBpZiAoIXNvcnROTVVJKSB7XG4gICAgcmV0dXJuIF9jO1xuICB9XG4gIGlmIChfYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIF9jO1xuICB9XG4gIHN3aXRjaCAoX2MpIHtcbiAgICBjYXNlIC8qIE4gKi8wIDpcbiAgICAgICAgcmV0dXJuIF9jO1xuICAgIGNhc2UgLyogVSAqLzEgOlxuICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgY2FzZSAvKiBJICovMiA6XG4gICAgICAgIHJldHVybiAvKiBVICovMTtcbiAgICBjYXNlIC8qIE0gKi8zIDpcbiAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIHRGcm9tU3RyKHN0cikge1xuICBzd2l0Y2ggKHN0cikge1xuICAgIGNhc2UgXCIobW4pXCIgOlxuICAgIGNhc2UgXCJJXCIgOlxuICAgIGNhc2UgXCJpXCIgOlxuICAgICAgICByZXR1cm4gLyogSSAqLzI7XG4gICAgY2FzZSBcIigpXCIgOlxuICAgIGNhc2UgXCJNXCIgOlxuICAgIGNhc2UgXCJtXCIgOlxuICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgY2FzZSBcIlwiIDpcbiAgICBjYXNlIFwiKCgpKVwiIDpcbiAgICBjYXNlIFwiLlwiIDpcbiAgICBjYXNlIFwiTlwiIDpcbiAgICBjYXNlIFwiblwiIDpcbiAgICAgICAgcmV0dXJuIC8qIE4gKi8wO1xuICAgIGNhc2UgXCJVXCIgOlxuICAgIGNhc2UgXCJtblwiIDpcbiAgICBjYXNlIFwidVwiIDpcbiAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludih4KSB7XG4gIHN3aXRjaCAoeCkge1xuICAgIGNhc2UgLyogTiAqLzAgOlxuICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgY2FzZSAvKiBVICovMSA6XG4gICAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICBjYXNlIC8qIEkgKi8yIDpcbiAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgIGNhc2UgLyogTSAqLzMgOlxuICAgICAgICByZXR1cm4gLyogTiAqLzA7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsKHgsIHkpIHtcbiAgaWYgKHkgPT09IDApIHtcbiAgICByZXR1cm4geDtcbiAgfVxuICBzd2l0Y2ggKHgpIHtcbiAgICBjYXNlIC8qIE4gKi8wIDpcbiAgICAgICAgcmV0dXJuIHk7XG4gICAgY2FzZSAvKiBVICovMSA6XG4gICAgICAgIGlmICh5ID49IDIpIHtcbiAgICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgICAgICB9XG4gICAgY2FzZSAvKiBJICovMiA6XG4gICAgICAgIGlmICh5ICE9PSAyKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIE0gKi8zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICAgICAgfVxuICAgIGNhc2UgLyogTSAqLzMgOlxuICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgXG4gIH1cbn1cblxudmFyIENvbnN0ID0ge1xuICB0VG9KczogdFRvSnMsXG4gIHRGcm9tSnM6IHRGcm9tSnMsXG4gIHRFbnVtOiB0RW51bSxcbiAgdEVudW1MaXN0OiB0RW51bUxpc3QsXG4gIHNob3c6IHNob3csXG4gIHNob3dBc0tleTogc2hvd0FzS2V5LFxuICB0b0ludDogdG9JbnQsXG4gIGZyb21JbnQ6IGZyb21JbnQsXG4gIHRGcm9tU3RyOiB0RnJvbVN0cixcbiAgaW52OiBpbnYsXG4gIHJlbDogcmVsXG59O1xuXG5mdW5jdGlvbiBzaG93JDEobmVzdCkge1xuICBpZiAobmVzdC5OQU1FID09PSBcIk5lc3RUb1JcIikge1xuICAgIHZhciBjbGlzdCA9IG5lc3QuVkFMO1xuICAgIGlmIChjbGlzdCkge1xuICAgICAgcmV0dXJuIFwiKFwiICsgQmVsdF9MaXN0LnJlZHVjZVJldmVyc2UoY2xpc3QsIFwiXCIsIChmdW5jdGlvbiAoc3RyLCBjKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaG93KGMpICsgKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN0ci5sZW5ndGggPiAwID8gXCIoXCIgKyBzdHIgKyBcIilcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pKSArIFwiKVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gXCJNXCI7XG4gICAgfVxuICB9XG4gIHZhciBjbGlzdCQxID0gbmVzdC5WQUw7XG4gIGlmIChjbGlzdCQxKSB7XG4gICAgcmV0dXJuIFwiKFwiICsgQmVsdF9MaXN0LnJlZHVjZShjbGlzdCQxLCBcIlwiLCAoZnVuY3Rpb24gKHN0ciwgYykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyLmxlbmd0aCA+IDAgPyBcIihcIiArIHN0ciArIFwiKVwiIDogXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgKSArIHNob3coYyk7XG4gICAgICAgICAgICAgICAgfSkpICsgXCIpXCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiTVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldExpc3QobmVzdCkge1xuICByZXR1cm4gbmVzdC5WQUw7XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheVRvTChhcnIpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBOQU1FOiBcIk5lc3RUb0xcIixcbiAgICAgICAgICBWQUw6IEJlbHRfTGlzdC5mcm9tQXJyYXkoYXJyKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlUb1IoYXJyKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgVkFMOiBCZWx0X0xpc3QuZnJvbUFycmF5KGFycilcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gdG9BcnJheShuZXN0KSB7XG4gIHJldHVybiBCZWx0X0xpc3QudG9BcnJheShuZXN0LlZBTCk7XG59XG5cbmZ1bmN0aW9uIGZtYXBMKHBhcmFtLCBmbikge1xuICByZXR1cm4ge1xuICAgICAgICAgIE5BTUU6IFwiTmVzdFRvTFwiLFxuICAgICAgICAgIFZBTDogQ3VycnkuXzEoZm4sIHBhcmFtLlZBTClcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZm1hcFIocGFyYW0sIGZuKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgVkFMOiBDdXJyeS5fMShmbiwgcGFyYW0uVkFMKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBfcmVkdWNlQnlDcm9zc2luZyhfY2xpc3QpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBjbGlzdCA9IF9jbGlzdDtcbiAgICBpZiAoIWNsaXN0KSB7XG4gICAgICByZXR1cm4gY2xpc3Q7XG4gICAgfVxuICAgIHZhciBjID0gY2xpc3QuaGQ7XG4gICAgaWYgKGMgPT09IDApIHtcbiAgICAgIHZhciBtYXRjaCA9IGNsaXN0LnRsO1xuICAgICAgaWYgKG1hdGNoICYmIG1hdGNoLmhkID09PSAwKSB7XG4gICAgICAgIF9jbGlzdCA9IG1hdGNoLnRsO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICB9XG4gICAgICBcbiAgICB9XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiBjLFxuICAgICAgICAgICAgdGw6IF9yZWR1Y2VCeUNyb3NzaW5nKGNsaXN0LnRsKVxuICAgICAgICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZUJ5Q3Jvc3NpbmdMKHBhcmFtKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9MXCIsXG4gICAgICAgICAgVkFMOiBfcmVkdWNlQnlDcm9zc2luZyhwYXJhbS5WQUwpXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZUJ5Q3Jvc3NpbmdSKHBhcmFtKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgVkFMOiBfcmVkdWNlQnlDcm9zc2luZyhwYXJhbS5WQUwpXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIF9yZWR1Y2VCeUNhbGxpbmcoY2xpc3QsIHNvbWVVSSkge1xuICBpZiAoIWNsaXN0KSB7XG4gICAgcmV0dXJuIGNsaXN0O1xuICB9XG4gIHZhciBjcyA9IGNsaXN0LnRsO1xuICB2YXIgYyA9IGNsaXN0LmhkO1xuICBpZiAoY3MpIHtcbiAgICBpZiAoYyAhPT0gMCkge1xuICAgICAgaWYgKGMgPj0gMykge1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIGhkOiAvKiBNICovMyxcbiAgICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICAgIH07XG4gICAgICB9IGVsc2UgaWYgKHNvbWVVSSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgIGlmIChzb21lVUkgPT09IGMpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgaGQ6IC8qIE4gKi8wLFxuICAgICAgICAgICAgICAgICAgdGw6IF9yZWR1Y2VCeUNhbGxpbmcoY3MsIHNvbWVVSSlcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBoZDogLyogTSAqLzMsXG4gICAgICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZDogYyxcbiAgICAgICAgICAgICAgICB0bDogX3JlZHVjZUJ5Q2FsbGluZyhjcywgYylcbiAgICAgICAgICAgICAgfTtcbiAgICAgIH1cbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgaGQ6IC8qIE4gKi8wLFxuICAgICAgICAgICAgICB0bDogX3JlZHVjZUJ5Q2FsbGluZyhjcywgc29tZVVJKVxuICAgICAgICAgICAgfTtcbiAgICB9XG4gIH0gZWxzZSBpZiAoIShjID09PSAyIHx8IGMgPT09IDEpIHx8IHNvbWVVSSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGNsaXN0O1xuICB9IGVsc2UgaWYgKHNvbWVVSSA9PT0gYykge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZDogLyogTiAqLzAsXG4gICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IC8qIE0gKi8zLFxuICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlQnlDYWxsaW5nTChwYXJhbSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIE5BTUU6IFwiTmVzdFRvTFwiLFxuICAgICAgICAgIFZBTDogSnNfbGlzdC5yZXYoX3JlZHVjZUJ5Q2FsbGluZyhKc19saXN0LnJldihwYXJhbS5WQUwpLCB1bmRlZmluZWQpKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VCeUNhbGxpbmdSKHBhcmFtKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgVkFMOiBfcmVkdWNlQnlDYWxsaW5nKHBhcmFtLlZBTCwgdW5kZWZpbmVkKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VMKHBhcmFtKSB7XG4gIHJldHVybiByZWR1Y2VCeUNyb3NzaW5nTChyZWR1Y2VCeUNhbGxpbmdMKHtcbiAgICAgICAgICAgICAgICAgIE5BTUU6IFwiTmVzdFRvTFwiLFxuICAgICAgICAgICAgICAgICAgVkFMOiBwYXJhbS5WQUxcbiAgICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVIocGFyYW0pIHtcbiAgcmV0dXJuIHJlZHVjZUJ5Q3Jvc3NpbmdSKHJlZHVjZUJ5Q2FsbGluZ1Ioe1xuICAgICAgICAgICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgICAgICAgICBWQUw6IHBhcmFtLlZBTFxuICAgICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gX2NhbGMoY2xpc3QpIHtcbiAgaWYgKCFjbGlzdCkge1xuICAgIHJldHVybiAvKiBOICovMDtcbiAgfVxuICB2YXIgY3MgPSBjbGlzdC50bDtcbiAgdmFyIGMgPSBjbGlzdC5oZDtcbiAgaWYgKGNzKSB7XG4gICAgaWYgKGMgIT09IDApIHtcbiAgICAgIGlmIChjID49IDMpIHtcbiAgICAgICAgcmV0dXJuIC8qIE0gKi8zO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHJlbChjLCBpbnYoX2NhbGMoY3MpKSk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBpbnYoX2NhbGMoY3MpKTtcbiAgICB9XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGM7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY0wocGFyYW0pIHtcbiAgdmFyIGNsaXN0ID0gcGFyYW0uVkFMO1xuICBpZiAoY2xpc3QpIHtcbiAgICByZXR1cm4gaW52KF9jYWxjKEpzX2xpc3QucmV2KGNsaXN0KSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiBNICovMztcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjUihwYXJhbSkge1xuICB2YXIgY2xpc3QgPSBwYXJhbS5WQUw7XG4gIGlmIChjbGlzdCkge1xuICAgIHJldHVybiBpbnYoX2NhbGMoY2xpc3QpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogTSAqLzM7XG4gIH1cbn1cblxudmFyIE5lc3RlZCA9IHtcbiAgc2hvdzogc2hvdyQxLFxuICBnZXRMaXN0OiBnZXRMaXN0LFxuICBmcm9tQXJyYXlUb0w6IGZyb21BcnJheVRvTCxcbiAgZnJvbUFycmF5VG9SOiBmcm9tQXJyYXlUb1IsXG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIGZtYXBMOiBmbWFwTCxcbiAgZm1hcFI6IGZtYXBSLFxuICByZWR1Y2VCeUNyb3NzaW5nTDogcmVkdWNlQnlDcm9zc2luZ0wsXG4gIHJlZHVjZUJ5Q3Jvc3NpbmdSOiByZWR1Y2VCeUNyb3NzaW5nUixcbiAgcmVkdWNlQnlDYWxsaW5nTDogcmVkdWNlQnlDYWxsaW5nTCxcbiAgcmVkdWNlQnlDYWxsaW5nUjogcmVkdWNlQnlDYWxsaW5nUixcbiAgcmVkdWNlTDogcmVkdWNlTCxcbiAgcmVkdWNlUjogcmVkdWNlUixcbiAgY2FsY0w6IGNhbGNMLFxuICBjYWxjUjogY2FsY1Jcbn07XG5cbmV4cG9ydCB7XG4gIENvbnN0ICxcbiAgTmVzdGVkICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IFJlU2NyaXB0LCBQTEVBU0UgRURJVCBXSVRIIENBUkVcblxuaW1wb3J0ICogYXMgQ2FtbF9vYmogZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvY2FtbF9vYmouanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfQXJyYXkgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvYmVsdF9BcnJheS5qc1wiO1xuaW1wb3J0ICogYXMgQ2FsYyRGb3JtZm9ybSBmcm9tIFwiLi9DYWxjLmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBIZWxwZXIkRm9ybWZvcm0gZnJvbSBcIi4uLy4uL3V0aWxzL0hlbHBlci5icy5qc1wiO1xuXG52YXIgZ2V0ID0gQmVsdF9BcnJheS5nZXQ7XG5cbmZ1bmN0aW9uIGdldExlbmd0aChkbmEpIHtcbiAgcmV0dXJuIGRuYS5sZW5ndGg7XG59XG5cbmZ1bmN0aW9uIGdldFNpemUoZG5hKSB7XG4gIHZhciBsZW4gPSBkbmEubGVuZ3RoO1xuICByZXR1cm4gTWF0aC5sb2cobGVuKSAvIE1hdGgubG9nKDQuMCkgfCAwO1xufVxuXG5mdW5jdGlvbiBnZXRTaXplRnJvbUxlbmd0aChsZW4pIHtcbiAgdmFyIHggPSBNYXRoLmxvZyhsZW4pIC8gTWF0aC5sb2coNC4wKTtcbiAgaWYgKCFOdW1iZXIuaXNGaW5pdGUoeCkgfHwgSGVscGVyJEZvcm1mb3JtLmhhc0RlY2ltYWwoeCkpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4IHwgMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpc1ZhbGlkTGVuZ3RoKGxlbikge1xuICByZXR1cm4gZ2V0U2l6ZUZyb21MZW5ndGgobGVuKSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBtYWtlKGFycikge1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgaWYgKGlzVmFsaWRMZW5ndGgobGVuKSkge1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIG1ha2VVbnNhZmUoYXJyKSB7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICBpZiAoaXNWYWxpZExlbmd0aChsZW4pKSB7XG4gICAgcmV0dXJuIGFycjtcbiAgfVxuICB0aHJvdyB7XG4gICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICB9O1xufVxuXG5mdW5jdGlvbiBnZW5SYW5kb20oc2l6ZSkge1xuICByZXR1cm4gW107XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkoZG5hKSB7XG4gIHJldHVybiBkbmE7XG59XG5cbmZ1bmN0aW9uIHJlb3JkZXJUb05NVUkoZG5hKSB7XG4gIHZhciBsZW4gPSBkbmEubGVuZ3RoO1xuICBpZiAobGVuIDwgNCkge1xuICAgIHJldHVybiBkbmE7XG4gIH1cbiAgdmFyIHBhcnRMZW4gPSBsZW4gLyA0IHwgMDtcbiAgcmV0dXJuIEJlbHRfQXJyYXkuY29uY2F0TWFueShCZWx0X0FycmF5Lm1ha2VCeSg0LCAoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGlfbm11aTtcbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoIChpKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAwIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaV9ubXVpID0gMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAxIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaV9ubXVpID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgY2FzZSAyIDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaV9ubXVpID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGlfbm11aSA9IGk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgdmFyIGluZGV4ID0gTWF0aC5pbXVsKGlfbm11aSwgcGFydExlbik7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXJ0X25tdWkgPSBkbmEuc2xpY2UoaW5kZXgsIGluZGV4ICsgcGFydExlbiB8IDApO1xuICAgICAgICAgICAgICAgICAgICBpZiAobGVuID4gNCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW9yZGVyVG9OTVVJKHBhcnRfbm11aSk7XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnRfbm11aTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSkpKTtcbn1cblxuZnVuY3Rpb24gZnJvbUludEFycihzb3J0Tk1VSU9wdCwgYXJyKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICBpZiAoaXNWYWxpZExlbmd0aChhcnIubGVuZ3RoKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhcnIubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBDYWxjJEZvcm1mb3JtLkNvbnN0LmZyb21JbnQoc29ydE5NVUksIG4pO1xuICAgICAgICAgICAgICAgIGlmIChjICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmcm9tSW50QXJyVW5zYWZlKHNvcnROTVVJT3B0LCBhcnIpIHtcbiAgdmFyIHNvcnROTVVJID0gc29ydE5NVUlPcHQgIT09IHVuZGVmaW5lZCA/IHNvcnROTVVJT3B0IDogZmFsc2U7XG4gIHZhciBkbmEgPSBmcm9tSW50QXJyKHNvcnROTVVJLCBhcnIpO1xuICBpZiAoZG5hICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZG5hO1xuICB9XG4gIHRocm93IHtcbiAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGZyb21TdHJBcnIoYXJyKSB7XG4gIGlmIChpc1ZhbGlkTGVuZ3RoKGFyci5sZW5ndGgpID09PSBmYWxzZSkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGFyci5tYXAoZnVuY3Rpb24gKG4pIHtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IENhbGMkRm9ybWZvcm0uQ29uc3QudEZyb21TdHIobik7XG4gICAgICAgICAgICAgICAgaWYgKGMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICBSRV9FWE5fSUQ6IFwiTm90X2ZvdW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0pO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZyb21TdHJBcnJVbnNhZmUoYXJyKSB7XG4gIHZhciBkbmEgPSBmcm9tU3RyQXJyKGFycik7XG4gIGlmIChkbmEgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBkbmE7XG4gIH1cbiAgdGhyb3cge1xuICAgICAgICBSRV9FWE5fSUQ6IFwiTm90X2ZvdW5kXCIsXG4gICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgfTtcbn1cblxuZnVuY3Rpb24gc2hvdyhzb3J0Tk1VSU9wdCwgc3BhY2VkT3B0LCBkbmEpIHtcbiAgdmFyIHNvcnROTVVJID0gc29ydE5NVUlPcHQgIT09IHVuZGVmaW5lZCA/IHNvcnROTVVJT3B0IDogZmFsc2U7XG4gIHZhciBzcGFjZWQgPSBzcGFjZWRPcHQgIT09IHVuZGVmaW5lZCA/IHNwYWNlZE9wdCA6IGZhbHNlO1xuICB2YXIgZG5hX3NvcnRlZCA9IHNvcnROTVVJID8gcmVvcmRlclRvTk1VSShkbmEpIDogZG5hO1xuICB2YXIgcHJlZml4ID0gKFxuICAgIHNvcnROTVVJID8gXCI6OlwiIDogXCLigZhcIlxuICApICsgKFxuICAgIHNwYWNlZCA/IFwiIFwiIDogXCJcIlxuICApO1xuICBpZiAoQ2FtbF9vYmouY2FtbF9lcXVhbChkbmFfc29ydGVkLCBbXSkpIHtcbiAgICByZXR1cm4gcHJlZml4ICsgQ2FsYyRGb3JtZm9ybS5Db25zdC50b0ludChzb3J0Tk1VSSwgLyogTiAqLzApLnRvU3RyaW5nKCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHByZWZpeCArIGRuYV9zb3J0ZWQucmVkdWNlKChmdW5jdGlvbiAoc3RyLCBjLCBpKSB7XG4gICAgICAgICAgICAgICAgICB2YXIgc3BjID0gc3BhY2VkICYmIGkgPiAwICYmIGkgJSA0ID09PSAwID8gXCIgXCIgOiBcIlwiO1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHN0ciArIHNwYyArIENhbGMkRm9ybWZvcm0uQ29uc3QudG9JbnQoc29ydE5NVUksIGMpLnRvU3RyaW5nKCk7XG4gICAgICAgICAgICAgICAgfSksIFwiXCIpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJhdyhkbmEpIHtcbiAgaWYgKENhbWxfb2JqLmNhbWxfZXF1YWwoZG5hLCBbXSkpIHtcbiAgICByZXR1cm4gQ2FsYyRGb3JtZm9ybS5Db25zdC5zaG93QXNLZXkoLyogTiAqLzApO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkbmEubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gQ2FsYyRGb3JtZm9ybS5Db25zdC5zaG93QXNLZXkoYyk7XG4gICAgICAgICAgICAgICAgfSkuam9pbihcIlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnYoZG5hKSB7XG4gIGlmIChDYW1sX29iai5jYW1sX2VxdWFsKGRuYSwgW10pKSB7XG4gICAgcmV0dXJuIFtDYWxjJEZvcm1mb3JtLkNvbnN0LmludigvKiBOICovMCldO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBkbmEubWFwKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3QuaW52KGMpO1xuICAgICAgICAgICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZWwoZG5hX2EsIGRuYV9iKSB7XG4gIHZhciBsZW5fYSA9IGRuYV9hLmxlbmd0aDtcbiAgdmFyIGxlbl9iID0gZG5hX2IubGVuZ3RoO1xuICB2YXIgbWF0Y2ggPSBsZW5fYSA8PSBsZW5fYiA/IFtcbiAgICAgIGRuYV9hLFxuICAgICAgZG5hX2IsXG4gICAgICBsZW5fYSxcbiAgICAgIGxlbl9iXG4gICAgXSA6IFtcbiAgICAgIGRuYV9iLFxuICAgICAgZG5hX2EsXG4gICAgICBsZW5fYixcbiAgICAgIGxlbl9hXG4gICAgXTtcbiAgdmFyIHN1cExlbiA9IG1hdGNoWzNdO1xuICB2YXIgc3ViTGVuID0gbWF0Y2hbMl07XG4gIHZhciBzdXAgPSBtYXRjaFsxXTtcbiAgdmFyIHJlc3VsdCA9IEJlbHRfQXJyYXkuemlwQnkoc3VwLCBtYXRjaFswXSwgKGZ1bmN0aW9uIChhLCBiKSB7XG4gICAgICAgICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3QucmVsKGEsIGIpO1xuICAgICAgICB9KSk7XG4gIGlmIChzdWJMZW4gPT09IHN1cExlbikge1xuICAgIHJldHVybiByZXN1bHQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEJlbHRfQXJyYXkuY29uY2F0KHJlc3VsdCwgQmVsdF9BcnJheS5zbGljZShzdXAsIHN1Ykxlbiwgc3VwTGVuKSk7XG4gIH1cbn1cblxuZXhwb3J0IHtcbiAgZ2V0ICxcbiAgZ2V0TGVuZ3RoICxcbiAgZ2V0U2l6ZSAsXG4gIGlzVmFsaWRMZW5ndGggLFxuICBtYWtlICxcbiAgbWFrZVVuc2FmZSAsXG4gIGdlblJhbmRvbSAsXG4gIHRvQXJyYXkgLFxuICByZW9yZGVyVG9OTVVJICxcbiAgZnJvbUludEFyciAsXG4gIGZyb21JbnRBcnJVbnNhZmUgLFxuICBmcm9tU3RyQXJyICxcbiAgZnJvbVN0ckFyclVuc2FmZSAsXG4gIHNob3cgLFxuICByYXcgLFxuICBpbnYgLFxuICByZWwgLFxuICBcbn1cbi8qIEhlbHBlci1Gb3JtZm9ybSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IFJlU2NyaXB0LCBQTEVBU0UgRURJVCBXSVRIIENBUkVcblxuaW1wb3J0ICogYXMgSnNfbGlzdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9qc19saXN0LmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX29iaiBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9jYW1sX29iai5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9MaXN0IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2JlbHRfTGlzdC5qc1wiO1xuaW1wb3J0ICogYXMgQ2FsYyRGb3JtZm9ybSBmcm9tIFwiLi9DYWxjLmJzLmpzXCI7XG5cbmZ1bmN0aW9uIHNpZ1RvSnMocGFyYW0pIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICByZUVudHJ5UGFyOiBwYXJhbS5yZUVudHJ5UGFyLFxuICAgICAgICAgIHVubWFya2VkOiBwYXJhbS51bm1hcmtlZCxcbiAgICAgICAgICBpbnRlcnByOiBwYXJhbS5pbnRlcnByXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHNpZ0Zyb21KcyhwYXJhbSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIHJlRW50cnlQYXI6IHBhcmFtLnJlRW50cnlQYXIsXG4gICAgICAgICAgdW5tYXJrZWQ6IHBhcmFtLnVubWFya2VkLFxuICAgICAgICAgIGludGVycHI6IHBhcmFtLmludGVycHJcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gbW5Gcm9tU3RyKHN0cikge1xuICBzd2l0Y2ggKHN0cikge1xuICAgIGNhc2UgXCJSZWNJZGVudFwiIDpcbiAgICBjYXNlIFwiUmVjdXJzaXZlIElkZW50aXR5XCIgOlxuICAgIGNhc2UgXCJpZFwiIDpcbiAgICBjYXNlIFwicklkXCIgOlxuICAgIGNhc2UgXCJyZWNJZGVudFwiIDpcbiAgICAgICAgcmV0dXJuIC8qIFJlY0lkZW50ICovMTtcbiAgICBjYXNlIFwiUmVjSW5zdHJcIiA6XG4gICAgY2FzZSBcIlJlY3Vyc2l2ZSBJbnN0cnVjdGlvblwiIDpcbiAgICBjYXNlIFwiaW5cIiA6XG4gICAgY2FzZSBcInJJblwiIDpcbiAgICBjYXNlIFwicmVjSW5zdHJcIiA6XG4gICAgICAgIHJldHVybiAvKiBSZWNJbnN0ciAqLzA7XG4gICAgZGVmYXVsdDpcbiAgICAgIHRocm93IHtcbiAgICAgICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvd1NpZyhwYXJhbSkge1xuICB2YXIgbWF0Y2g7XG4gIHN3aXRjaCAocGFyYW0ucmVFbnRyeVBhcikge1xuICAgIGNhc2UgLyogRXZlbiAqLzAgOlxuICAgICAgICBtYXRjaCA9IFtcbiAgICAgICAgICBcIi4uXCIsXG4gICAgICAgICAgXCJcIlxuICAgICAgICBdO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIC8qIE9kZCAqLzEgOlxuICAgICAgICBtYXRjaCA9IFtcbiAgICAgICAgICBcIi4uXCIsXG4gICAgICAgICAgXCIuXCJcbiAgICAgICAgXTtcbiAgICAgICAgYnJlYWs7XG4gICAgY2FzZSAvKiBBbnkgKi8yIDpcbiAgICAgICAgbWF0Y2ggPSBbXG4gICAgICAgICAgXCJcIixcbiAgICAgICAgICBcIlwiXG4gICAgICAgIF07XG4gICAgICAgIGJyZWFrO1xuICAgIFxuICB9XG4gIHZhciByZU1hcmsgPSBwYXJhbS5pbnRlcnByID8gXCJAflwiIDogXCJAXCI7XG4gIHJldHVybiBtYXRjaFswXSArIHJlTWFyayArIG1hdGNoWzFdICsgKFxuICAgICAgICAgIHBhcmFtLnVubWFya2VkID8gXCJfXCIgOiBcIlwiXG4gICAgICAgICk7XG59XG5cbmZ1bmN0aW9uIHNob3dNTihtbikge1xuICBpZiAobW4pIHtcbiAgICByZXR1cm4gXCJyZWN1cnNpdmUgaWRlbnRpdHlcIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJyZWN1cnNpdmUgaW5zdHJ1Y3Rpb25cIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93VVR5cGUodVR5cGUpIHtcbiAgaWYgKHVUeXBlKSB7XG4gICAgcmV0dXJuIFwiaUZPUk1cIjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gXCJ1Rk9STVwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGdldFVUeXBlKHBhcmFtLCByZXNQYXIpIHtcbiAgc3dpdGNoIChyZXNQYXIpIHtcbiAgICBjYXNlIC8qIEV2ZW4gKi8wIDpcbiAgICAgICAgaWYgKHBhcmFtLnVubWFya2VkKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIElGT1JNICovMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gLyogVUZPUk0gKi8wO1xuICAgICAgICB9XG4gICAgY2FzZSAvKiBPZGQgKi8xIDpcbiAgICAgICAgc3dpdGNoIChwYXJhbS5yZUVudHJ5UGFyKSB7XG4gICAgICAgICAgY2FzZSAvKiBFdmVuICovMCA6XG4gICAgICAgICAgICAgIHJldHVybiAvKiBVRk9STSAqLzA7XG4gICAgICAgICAgY2FzZSAvKiBPZGQgKi8xIDpcbiAgICAgICAgICBjYXNlIC8qIEFueSAqLzIgOlxuICAgICAgICAgICAgICByZXR1cm4gLyogSUZPUk0gKi8xO1xuICAgICAgICAgIFxuICAgICAgICB9XG4gICAgY2FzZSAvKiBBbnkgKi8yIDpcbiAgICAgICAgcmV0dXJuIC8qIElGT1JNICovMTtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiBjYWxjUkUocGFyYW0sIHBhcmFtJDEpIHtcbiAgdmFyIG5lc3RlZEMgPSBwYXJhbSQxLlZBTDtcbiAgdmFyIGludGVycHIgPSBwYXJhbS5pbnRlcnByO1xuICB2YXIgdW5tYXJrZWQgPSBwYXJhbS51bm1hcmtlZDtcbiAgdmFyIHJlRW50cnlQYXIgPSBwYXJhbS5yZUVudHJ5UGFyO1xuICB2YXIgcmVzUGFyID0gbmVzdGVkQyA9PT0gLyogW10gKi8wIHx8IEpzX2xpc3QubGVuZ3RoKG5lc3RlZEMpICUgMiAhPT0gMCA/IC8qIE9kZCAqLzEgOiAvKiBFdmVuICovMDtcbiAgdmFyIHJlVHlwZSA9IGdldFVUeXBlKHtcbiAgICAgICAgcmVFbnRyeVBhcjogcmVFbnRyeVBhcixcbiAgICAgICAgdW5tYXJrZWQ6IHVubWFya2VkLFxuICAgICAgICBpbnRlcnByOiBpbnRlcnByXG4gICAgICB9LCByZXNQYXIpO1xuICBpZiAobmVzdGVkQyA9PT0gLyogW10gKi8wIHx8IEJlbHRfTGlzdC5ldmVyeShuZXN0ZWRDLCAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBjID09PSAvKiBOICovMDtcbiAgICAgICAgICB9KSkpIHtcbiAgICBpZiAocmVUeXBlKSB7XG4gICAgICByZXR1cm4gLyogSSAqLzI7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAvKiBVICovMTtcbiAgICB9XG4gIH1cbiAgdmFyIG5lc3RlZEMkMSA9ICF1bm1hcmtlZCAmJiByZXNQYXIgPT09IC8qIE9kZCAqLzEgJiYgcmVFbnRyeVBhciA9PT0gLyogRXZlbiAqLzAgPyBCZWx0X0xpc3QuY29uY2F0KG5lc3RlZEMsIG5lc3RlZEMpIDogbmVzdGVkQztcbiAgaWYgKEJlbHRfTGlzdC5zb21lKG5lc3RlZEMkMSwgKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gYyA9PT0gLyogTSAqLzM7XG4gICAgICAgICAgfSkpIHx8IEJlbHRfTGlzdC5zb21lKG5lc3RlZEMkMSwgKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gYyA9PT0gLyogVSAqLzE7XG4gICAgICAgICAgfSkpICYmIEJlbHRfTGlzdC5zb21lKG5lc3RlZEMkMSwgKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICByZXR1cm4gYyA9PT0gLyogSSAqLzI7XG4gICAgICAgICAgfSkpKSB7XG4gICAgdmFyIHIgPSBDYWxjJEZvcm1mb3JtLk5lc3RlZC5jYWxjUihDYWxjJEZvcm1mb3JtLk5lc3RlZC5yZWR1Y2VSKHtcbiAgICAgICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgICAgIFZBTDogbmVzdGVkQyQxXG4gICAgICAgICAgICB9KSk7XG4gICAgaWYgKHVubWFya2VkKSB7XG4gICAgICByZXR1cm4gQ2FsYyRGb3JtZm9ybS5Db25zdC5pbnYocik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiByO1xuICAgIH1cbiAgfVxuICB2YXIgbWF0Y2ggPSBDYWxjJEZvcm1mb3JtLk5lc3RlZC5yZWR1Y2VSKHtcbiAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgIFZBTDogbmVzdGVkQyQxXG4gICAgICB9KTtcbiAgdmFyIG5lc3RlZEMkMiA9IG1hdGNoLlZBTDtcbiAgdmFyIGJvdHRvbV9jID0gSnNfbGlzdC5oZChuZXN0ZWRDJDIpO1xuICBpZiAoaW50ZXJwciA9PT0gLyogUmVjSWRlbnQgKi8xICYmICF1bm1hcmtlZCAmJiBDYW1sX29iai5jYW1sX2VxdWFsKGJvdHRvbV9jLCAvKiBOICovMCkpIHtcbiAgICBpZiAobmVzdGVkQyQyKSB7XG4gICAgICB2YXIgbWF0Y2gkMSA9IG5lc3RlZEMkMi50bDtcbiAgICAgIGlmIChtYXRjaCQxKSB7XG4gICAgICAgIHZhciBjID0gbWF0Y2gkMS5oZDtcbiAgICAgICAgaWYgKHJlVHlwZSkge1xuICAgICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LnJlbCgvKiBJICovMiwgYyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3QucmVsKC8qIFUgKi8xLCBjKTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhyb3cge1xuICAgICAgICAgICAgUkVfRVhOX0lEOiBcIkFzc2VydF9mYWlsdXJlXCIsXG4gICAgICAgICAgICBfMTogW1xuICAgICAgICAgICAgICBcIlNlcVJFLnJlc1wiLFxuICAgICAgICAgICAgICAxNDQsXG4gICAgICAgICAgICAgIDU4XG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgfTtcbiAgICB9XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJBc3NlcnRfZmFpbHVyZVwiLFxuICAgICAgICAgIF8xOiBbXG4gICAgICAgICAgICBcIlNlcVJFLnJlc1wiLFxuICAgICAgICAgICAgMTQ0LFxuICAgICAgICAgICAgNThcbiAgICAgICAgICBdLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIGlmIChpbnRlcnByID09PSAvKiBSZWNJZGVudCAqLzEgJiYgdW5tYXJrZWQgJiYgQ2FtbF9vYmouY2FtbF9ub3RlcXVhbChib3R0b21fYywgLyogTiAqLzApKSB7XG4gICAgaWYgKGJvdHRvbV9jICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIGlmIChyZVR5cGUpIHtcbiAgICAgICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3QucmVsKC8qIEkgKi8yLCBib3R0b21fYyk7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gQ2FsYyRGb3JtZm9ybS5Db25zdC5yZWwoLyogVSAqLzEsIGJvdHRvbV9jKTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJBc3NlcnRfZmFpbHVyZVwiLFxuICAgICAgICAgIF8xOiBbXG4gICAgICAgICAgICBcIlNlcVJFLnJlc1wiLFxuICAgICAgICAgICAgMTYzLFxuICAgICAgICAgICAgNThcbiAgICAgICAgICBdLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIGlmICh1bm1hcmtlZCkge1xuICAgIGlmIChuZXN0ZWRDJDIpIHtcbiAgICAgIHZhciBtYXRjaCQyID0gbmVzdGVkQyQyLmhkO1xuICAgICAgaWYgKG1hdGNoJDIgIT09IDApIHtcbiAgICAgICAgaWYgKG1hdGNoJDIgPCAzKSB7XG4gICAgICAgICAgdmFyIG1hdGNoJDMgPSBuZXN0ZWRDJDIudGw7XG4gICAgICAgICAgaWYgKCFtYXRjaCQzKSB7XG4gICAgICAgICAgICBpZiAocmVFbnRyeVBhciA9PT0gLyogRXZlbiAqLzApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBpZiAobWF0Y2gkMy5oZCA9PT0gMCAmJiAhbWF0Y2gkMy50bCkge1xuICAgICAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHZhciBtYXRjaCQ0ID0gbmVzdGVkQyQyLnRsO1xuICAgICAgICBpZiAobWF0Y2gkNCAmJiAobWF0Y2gkNC5oZCAtIDEgPj4+IDApIDw9IDEpIHtcbiAgICAgICAgICB2YXIgbWF0Y2gkNSA9IG1hdGNoJDQudGw7XG4gICAgICAgICAgaWYgKCFtYXRjaCQ1KSB7XG4gICAgICAgICAgICByZXR1cm4gLyogSSAqLzI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGlmIChtYXRjaCQ1LmhkID09PSAwICYmICFtYXRjaCQ1LnRsKSB7XG4gICAgICAgICAgICBpZiAocmVFbnRyeVBhciA9PT0gLyogRXZlbiAqLzApIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJBc3NlcnRfZmFpbHVyZVwiLFxuICAgICAgICAgIF8xOiBbXG4gICAgICAgICAgICBcIlNlcVJFLnJlc1wiLFxuICAgICAgICAgICAgMTk4LFxuICAgICAgICAgICAgNjBcbiAgICAgICAgICBdLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIGlmIChuZXN0ZWRDJDIpIHtcbiAgICB2YXIgbWF0Y2gkNiA9IG5lc3RlZEMkMi5oZDtcbiAgICBpZiAobWF0Y2gkNiAhPT0gMCkge1xuICAgICAgaWYgKG1hdGNoJDYgPCAzKSB7XG4gICAgICAgIHZhciBtYXRjaCQ3ID0gbmVzdGVkQyQyLnRsO1xuICAgICAgICBpZiAoIW1hdGNoJDcpIHtcbiAgICAgICAgICBpZiAocmVFbnRyeVBhciA9PT0gLyogRXZlbiAqLzApIHtcbiAgICAgICAgICAgIHJldHVybiAvKiBVICovMTtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2gkNy5oZCA9PT0gMCAmJiAhbWF0Y2gkNy50bCkge1xuICAgICAgICAgIHJldHVybiAvKiBVICovMTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgIH1cbiAgICAgIFxuICAgIH0gZWxzZSB7XG4gICAgICB2YXIgbWF0Y2gkOCA9IG5lc3RlZEMkMi50bDtcbiAgICAgIGlmIChtYXRjaCQ4ICYmIChtYXRjaCQ4LmhkIC0gMSA+Pj4gMCkgPD0gMSkge1xuICAgICAgICB2YXIgbWF0Y2gkOSA9IG1hdGNoJDgudGw7XG4gICAgICAgIGlmICghbWF0Y2gkOSkge1xuICAgICAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2gkOS5oZCA9PT0gMCAmJiAhbWF0Y2gkOS50bCkge1xuICAgICAgICAgIGlmIChyZUVudHJ5UGFyID09PSAvKiBFdmVuICovMCkge1xuICAgICAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLyogVSAqLzE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfVxuICAgICAgXG4gICAgfVxuICB9XG4gIHRocm93IHtcbiAgICAgICAgUkVfRVhOX0lEOiBcIkFzc2VydF9mYWlsdXJlXCIsXG4gICAgICAgIF8xOiBbXG4gICAgICAgICAgXCJTZXFSRS5yZXNcIixcbiAgICAgICAgICAxODksXG4gICAgICAgICAgNjBcbiAgICAgICAgXSxcbiAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICB9O1xufVxuXG52YXIgcmVjSW5zdHIgPSAvKiBSZWNJbnN0ciAqLzA7XG5cbnZhciByZWNJZGVudCA9IC8qIFJlY0lkZW50ICovMTtcblxuZXhwb3J0IHtcbiAgcmVjSW5zdHIgLFxuICByZWNJZGVudCAsXG4gIHNpZ1RvSnMgLFxuICBzaWdGcm9tSnMgLFxuICBtbkZyb21TdHIgLFxuICBzaG93U2lnICxcbiAgc2hvd01OICxcbiAgc2hvd1VUeXBlICxcbiAgZ2V0VVR5cGUgLFxuICBjYWxjUkUgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgUmVTY3JpcHQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9JZCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0lkLmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X1NldCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X1NldC5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vYmogZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvY2FtbF9vYmouanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfTGlzdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0xpc3QuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfQXJyYXkgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvYmVsdF9BcnJheS5qc1wiO1xuaW1wb3J0ICogYXMgRE5BJEZvcm1mb3JtIGZyb20gXCIuLi9jYWxjL0ROQS5icy5qc1wiO1xuaW1wb3J0ICogYXMgQ2FsYyRGb3JtZm9ybSBmcm9tIFwiLi4vY2FsYy9DYWxjLmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBTZXFSRSRGb3JtZm9ybSBmcm9tIFwiLi4vY2FsYy9TZXFSRS5icy5qc1wiO1xuaW1wb3J0ICogYXMgSGVscGVyJEZvcm1mb3JtIGZyb20gXCIuLi8uLi91dGlscy9IZWxwZXIuYnMuanNcIjtcblxudmFyIGxibENsYXNzX3VucXVvdGVkID0gW1xuICBcImFcIixcbiAgXCJiXCIsXG4gIFwiY1wiLFxuICBcImRcIixcbiAgXCJlXCIsXG4gIFwiZlwiLFxuICBcImdcIixcbiAgXCJoXCIsXG4gIFwiaVwiLFxuICBcImpcIixcbiAgXCJrXCIsXG4gIFwibFwiLFxuICBcIm1cIixcbiAgXCJuXCIsXG4gIFwib1wiLFxuICBcInBcIixcbiAgXCJxXCIsXG4gIFwiclwiLFxuICBcInNcIixcbiAgXCJ0XCIsXG4gIFwidVwiLFxuICBcInZcIixcbiAgXCJ3XCIsXG4gIFwieFwiLFxuICBcInlcIixcbiAgXCJ6XCIsXG4gIFwizrFcIixcbiAgXCLOslwiLFxuICBcIs6zXCIsXG4gIFwizrRcIixcbiAgXCLOtVwiLFxuICBcIs62XCIsXG4gIFwizrdcIixcbiAgXCLOuFwiLFxuICBcIs65XCIsXG4gIFwizrpcIixcbiAgXCLOu1wiLFxuICBcIs68XCIsXG4gIFwizr1cIixcbiAgXCLOvlwiLFxuICBcIs6/XCIsXG4gIFwiz4BcIixcbiAgXCLPgVwiLFxuICBcIs+CXCIsXG4gIFwiz4NcIixcbiAgXCLPhFwiLFxuICBcIs+FXCIsXG4gIFwiz4ZcIixcbiAgXCLPh1wiLFxuICBcIs+IXCIsXG4gIFwiz4lcIlxuXTtcblxudmFyIGlkeENsYXNzX3VucXVvdGVkID0gQmVsdF9BcnJheS5jb25jYXQoW1xuICAgICAgXCIwXCIsXG4gICAgICBcIjFcIixcbiAgICAgIFwiMlwiLFxuICAgICAgXCIzXCIsXG4gICAgICBcIjRcIixcbiAgICAgIFwiNVwiLFxuICAgICAgXCI2XCIsXG4gICAgICBcIjdcIixcbiAgICAgIFwiOFwiLFxuICAgICAgXCI5XCJcbiAgICBdLCBsYmxDbGFzc191bnF1b3RlZCk7XG5cbmZ1bmN0aW9uIG1hcmsoZXhwcikge1xuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgXzA6IGV4cHJcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gY1ZhbChjKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgVEFHOiAvKiBDVmFsICovMSxcbiAgICAgICAgICBfMDogY1xuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBzZXFSRShzaWcsIHNlcSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogU2VxUkUgKi8yLFxuICAgICAgICAgIF8wOiBzaWcsXG4gICAgICAgICAgXzE6IHNlcVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiB1bmNsKGxibCkge1xuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogVW5jbCAqLzMsXG4gICAgICAgICAgXzA6IGxibFxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBmVmFyKGxibCkge1xuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgXzA6IGxibFxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBmRG5hKGZkbmEpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBUQUc6IC8qIEZEbmEgKi81LFxuICAgICAgICAgIF8wOiBmZG5hXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGlzX3VucXVvdGVkVmFyKGxibCkge1xuICB2YXIgbGVuID0gbGJsLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMyAmJiBsYmxbMV0gPT09IFwiX1wiKSB7XG4gICAgaWYgKGxibENsYXNzX3VucXVvdGVkLmluY2x1ZGVzKGxibFswXSkpIHtcbiAgICAgIHJldHVybiBpZHhDbGFzc191bnF1b3RlZC5pbmNsdWRlcyhsYmxbMl0pO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICB9IGVsc2UgaWYgKGxlbiA9PT0gMSkge1xuICAgIHJldHVybiBsYmxDbGFzc191bnF1b3RlZC5pbmNsdWRlcyhsYmxbMF0pO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93Rm9ybShzb3J0Tk1VSU9wdCwgZm9ybSkge1xuICB2YXIgc29ydE5NVUkgPSBzb3J0Tk1VSU9wdCAhPT0gdW5kZWZpbmVkID8gc29ydE5NVUlPcHQgOiBmYWxzZTtcbiAgc3dpdGNoIChmb3JtLlRBRyB8IDApIHtcbiAgICBjYXNlIC8qIE1hcmsgKi8wIDpcbiAgICAgICAgcmV0dXJuIFwiKFwiICsgc2hvd0V4cHIoc29ydE5NVUksIGZvcm0uXzApICsgXCIpXCI7XG4gICAgY2FzZSAvKiBDVmFsICovMSA6XG4gICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LnNob3coZm9ybS5fMCk7XG4gICAgY2FzZSAvKiBTZXFSRSAqLzIgOlxuICAgICAgICByZXR1cm4gXCJ7XCIgKyBTZXFSRSRGb3JtZm9ybS5zaG93U2lnKGZvcm0uXzApICsgXCIgXCIgKyBzaG93U2VxKHNvcnROTVVJLCBmb3JtLl8xKSArIFwifVwiO1xuICAgIGNhc2UgLyogVW5jbCAqLzMgOlxuICAgICAgICB2YXIgbGJsID0gZm9ybS5fMDtcbiAgICAgICAgcmV0dXJuIFwiL1wiICsgSGVscGVyJEZvcm1mb3JtLmNsZWFuU3RyKGxibCkgKyBcIi9cIjtcbiAgICBjYXNlIC8qIEZWYXIgKi80IDpcbiAgICAgICAgdmFyIGxibCQxID0gZm9ybS5fMDtcbiAgICAgICAgaWYgKGlzX3VucXVvdGVkVmFyKGxibCQxKSkge1xuICAgICAgICAgIHJldHVybiBIZWxwZXIkRm9ybWZvcm0uY2xlYW5TdHIobGJsJDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIlxcXCJcIiArIEhlbHBlciRGb3JtZm9ybS5jbGVhblN0cihsYmwkMSkgKyBcIlxcXCJcIjtcbiAgICAgICAgfVxuICAgIGNhc2UgLyogRkRuYSAqLzUgOlxuICAgICAgICByZXR1cm4gXCJbXCIgKyBzaG93RmRuYShzb3J0Tk1VSSwgZm9ybS5fMCkgKyBcIl1cIjtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93RXhwcihzb3J0Tk1VSU9wdCwgZXhwcikge1xuICB2YXIgc29ydE5NVUkgPSBzb3J0Tk1VSU9wdCAhPT0gdW5kZWZpbmVkID8gc29ydE5NVUlPcHQgOiBmYWxzZTtcbiAgcmV0dXJuIGV4cHIubWFwKGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dGb3JtKHNvcnROTVVJLCBmb3JtKTtcbiAgICAgICAgICAgICAgfSkuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gc2hvd1NlcShzb3J0Tk1VSU9wdCwgc2VxKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICByZXR1cm4gSGVscGVyJEZvcm1mb3JtLkxpc3RFeHRlbnNpb25zLmpvaW5XaXRoKEJlbHRfTGlzdC5tYXAoQmVsdF9MaXN0LnJldmVyc2Uoc2VxKSwgKGZ1bmN0aW9uIChleHByKSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBzaG93RXhwcihzb3J0Tk1VSSwgZXhwcik7XG4gICAgICAgICAgICAgICAgICB9KSksIFwiLFwiKTtcbn1cblxuZnVuY3Rpb24gc2hvd0ZkbmEoJHN0YXJvcHQkc3RhciwgcGFyYW0pIHtcbiAgdmFyIHZhcnMgPSBwYXJhbS52YXJzO1xuICB2YXIgZm9ybSA9IHBhcmFtLmZvcm07XG4gIHZhciBzb3J0Tk1VSSA9ICRzdGFyb3B0JHN0YXIgIT09IHVuZGVmaW5lZCA/ICRzdGFyb3B0JHN0YXIgOiBmYWxzZTtcbiAgdmFyIGZvcm1TdHI7XG4gIGlmIChmb3JtICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAodmFycyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgdmFyc1N0ciA9IHZhcnMuam9pbihcIixcIik7XG4gICAgICBmb3JtU3RyID0gc2hvd0V4cHIoc29ydE5NVUksIGZvcm0pICsgXCIuW1wiICsgdmFyc1N0ciArIFwiXVwiO1xuICAgIH0gZWxzZSB7XG4gICAgICBmb3JtU3RyID0gc2hvd0V4cHIoc29ydE5NVUksIGZvcm0pO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3JtU3RyID0gXCJcIjtcbiAgfVxuICByZXR1cm4gZm9ybVN0ciArIEROQSRGb3JtZm9ybS5zaG93KHNvcnROTVVJLCB1bmRlZmluZWQsIHBhcmFtLmRuYSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZUV4cHIocmVkdWNlckZuLCBpbml0LCBleHByKSB7XG4gIHJldHVybiBCZWx0X0FycmF5LnJlZHVjZShleHByLCBpbml0LCAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjYyA9IEN1cnJ5Ll8yKHJlZHVjZXJGbiwgcGFyYW0sIHBhcmFtJDEpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocGFyYW0kMS5UQUcgfCAwKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIC8qIE1hcmsgKi8wIDpcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVkdWNlRXhwcihyZWR1Y2VyRm4sIGFjYywgcGFyYW0kMS5fMCk7XG4gICAgICAgICAgICAgICAgICBjYXNlIC8qIFNlcVJFICovMiA6XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHNlcSA9IHBhcmFtJDEuXzE7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJlbHRfTGlzdC5yZWR1Y2Uoc2VxLCBhY2MsIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWR1Y2VFeHByKHJlZHVjZXJGbiwgcGFyYW0sIHBhcmFtJDEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBhY2M7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZShleHByLCByZWR1Y2VyRm4sIGluaXQpIHtcbiAgcmV0dXJuIHJlZHVjZUV4cHIocmVkdWNlckZuLCBpbml0LCBleHByKTtcbn1cblxuZnVuY3Rpb24gdG9GVkFSX2Zvcm0oZm9ybSkge1xuICBzd2l0Y2ggKGZvcm0uVEFHIHwgMCkge1xuICAgIGNhc2UgLyogTWFyayAqLzAgOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgICAgXzA6IGZvcm0uXzAubWFwKHRvRlZBUl9mb3JtKVxuICAgICAgICAgICAgICB9O1xuICAgIGNhc2UgLyogQ1ZhbCAqLzEgOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFRBRzogLyogQ1ZhbCAqLzEsXG4gICAgICAgICAgICAgICAgXzA6IGZvcm0uXzBcbiAgICAgICAgICAgICAgfTtcbiAgICBjYXNlIC8qIFNlcVJFICovMiA6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRSAqLzIsXG4gICAgICAgICAgICAgICAgXzA6IGZvcm0uXzAsXG4gICAgICAgICAgICAgICAgXzE6IEJlbHRfTGlzdC5tYXAoZm9ybS5fMSwgKGZ1bmN0aW9uIChleHByKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZXhwci5tYXAodG9GVkFSX2Zvcm0pO1xuICAgICAgICAgICAgICAgICAgICAgIH0pKVxuICAgICAgICAgICAgICB9O1xuICAgIGNhc2UgLyogVW5jbCAqLzMgOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFRBRzogLyogVW5jbCAqLzMsXG4gICAgICAgICAgICAgICAgXzA6IGZvcm0uXzBcbiAgICAgICAgICAgICAgfTtcbiAgICBjYXNlIC8qIEZEbmEgKi81IDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBUQUc6IC8qIEZEbmEgKi81LFxuICAgICAgICAgICAgICAgIF8wOiB0b0ZWQVJfZmRuYShmb3JtLl8wKVxuICAgICAgICAgICAgICB9O1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIHRvRlZBUl9mZG5hKHBhcmFtKSB7XG4gIHZhciBmb3JtID0gcGFyYW0uZm9ybTtcbiAgdmFyIGZvcm1WYXIgPSBmb3JtICE9PSB1bmRlZmluZWQgPyBmb3JtLm1hcCh0b0ZWQVJfZm9ybSkgOiB1bmRlZmluZWQ7XG4gIHJldHVybiB7XG4gICAgICAgICAgZG5hOiBwYXJhbS5kbmEsXG4gICAgICAgICAgZm9ybTogZm9ybVZhcixcbiAgICAgICAgICB2YXJzOiBwYXJhbS52YXJzXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHRvRlZBUl9leHByKGV4cHIpIHtcbiAgcmV0dXJuIGV4cHIubWFwKHRvRlZBUl9mb3JtKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlRXhwciQxKHJlZHVjZXJGbiwgaW5pdCwgZXhwcikge1xuICByZXR1cm4gQmVsdF9BcnJheS5yZWR1Y2UoZXhwciwgaW5pdCwgKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgICAgIHZhciBhY2MgPSBDdXJyeS5fMihyZWR1Y2VyRm4sIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICAgICAgICBzd2l0Y2ggKHBhcmFtJDEuVEFHIHwgMCkge1xuICAgICAgICAgICAgICAgICAgY2FzZSAvKiBNYXJrICovMCA6XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZHVjZUV4cHIkMShyZWR1Y2VyRm4sIGFjYywgcGFyYW0kMS5fMCk7XG4gICAgICAgICAgICAgICAgICBjYXNlIC8qIFNlcVJFICovMiA6XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHNlcSA9IHBhcmFtJDEuXzE7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIEJlbHRfTGlzdC5yZWR1Y2Uoc2VxLCBhY2MsIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWR1Y2VFeHByJDEocmVkdWNlckZuLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlJDEoZXhwciwgcmVkdWNlckZuLCBpbml0KSB7XG4gIHJldHVybiByZWR1Y2VFeHByJDEocmVkdWNlckZuLCBpbml0LCBleHByKTtcbn1cblxuZnVuY3Rpb24gZ2V0VmFycyhleHByKSB7XG4gIHZhciBjbXAgPSBDYW1sX29iai5jYW1sX2NvbXBhcmU7XG4gIHZhciBWYXJDbXAgPSBCZWx0X0lkLk1ha2VDb21wYXJhYmxlKHtcbiAgICAgICAgY21wOiBjbXBcbiAgICAgIH0pO1xuICB2YXIgX2dldFZhcnMgPSBmdW5jdGlvbiAodmFycywgZm9ybSkge1xuICAgIGlmIChmb3JtLlRBRyA9PT0gLyogRlZhciAqLzQpIHtcbiAgICAgIHJldHVybiBCZWx0X1NldC5hZGQodmFycywgZm9ybS5fMCk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB2YXJzO1xuICAgIH1cbiAgfTtcbiAgdmFyIGluaXQgPSBCZWx0X1NldC5tYWtlKFZhckNtcCk7XG4gIHJldHVybiBCZWx0X1NldC50b0FycmF5KHJlZHVjZUV4cHIkMShfZ2V0VmFycywgaW5pdCwgZXhwcikpO1xufVxuXG5mdW5jdGlvbiBjb3VudFZhcnMoZXhwcikge1xuICB2YXIgX2NvdW50VmFycyA9IGZ1bmN0aW9uIChuLCBmb3JtKSB7XG4gICAgaWYgKGZvcm0uVEFHID09PSAvKiBGVmFyICovNCkge1xuICAgICAgcmV0dXJuIG4gKyAxIHwgMDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIG47XG4gICAgfVxuICB9O1xuICByZXR1cm4gcmVkdWNlRXhwciQxKF9jb3VudFZhcnMsIDAsIGV4cHIpO1xufVxuXG5mdW5jdGlvbiBzaG93U3VidHJlZShzdWJ0cmVlKSB7XG4gIGlmIChzdWJ0cmVlLlRBRyA9PT0gLyogQnJhbmNoICovMCkge1xuICAgIHJldHVybiBcInsgaW5kZXg6IFwiICsgc3VidHJlZS5pbmRleC5qb2luKFwiXCIpICsgXCIsIGZvcm06ICdcIiArIHNob3dGb3JtKHVuZGVmaW5lZCwgc3VidHJlZS5mb3JtKSArIFwiJywgY2hpbGRyZW46IFtcIiArIHN1YnRyZWUuY2hpbGRyZW4ubWFwKHNob3dTdWJ0cmVlKS5qb2luKFwiLCBcIikgKyBcIl0gfVwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcInsgaW5kZXg6IFwiICsgc3VidHJlZS5pbmRleC5qb2luKFwiXCIpICsgXCIsIGZvcm06ICdcIiArIHNob3dGb3JtKHVuZGVmaW5lZCwgc3VidHJlZS5mb3JtKSArIFwiJyB9XCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdyhwYXJhbSkge1xuICByZXR1cm4gXCJ7IHJvb3QsIGZvcm06ICdcIiArIHNob3dFeHByKHVuZGVmaW5lZCwgcGFyYW0uZm9ybSkgKyBcIicsIGNoaWxkcmVuOiBbXCIgKyBwYXJhbS5jaGlsZHJlbi5tYXAoc2hvd1N1YnRyZWUpLmpvaW4oXCIsIFwiKSArIFwiXSB9XCI7XG59XG5cbmZ1bmN0aW9uIHBhcnNlU3VidHJlZShmb3JtLCBpbmRleCkge1xuICBpZiAoZm9ybS5UQUcgPT09IC8qIE1hcmsgKi8wKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFRBRzogLyogQnJhbmNoICovMCxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGZvcm06IGZvcm0sXG4gICAgICAgICAgICBjaGlsZHJlbjogZm9ybS5fMC5tYXAoZnVuY3Rpb24gKGNudCwgaSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlU3VidHJlZShjbnQsIGluZGV4LmNvbmNhdChbaV0pKTtcbiAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFRBRzogLyogTGVhZiAqLzEsXG4gICAgICAgICAgICBpbmRleDogaW5kZXgsXG4gICAgICAgICAgICBmb3JtOiBmb3JtXG4gICAgICAgICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJzZShleHByKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgZm9ybTogZXhwcixcbiAgICAgICAgICBjaGlsZHJlbjogZXhwci5tYXAoZnVuY3Rpb24gKGNudCwgaSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBwYXJzZVN1YnRyZWUoY250LCBbaV0pO1xuICAgICAgICAgICAgICB9KVxuICAgICAgICB9O1xufVxuXG52YXIgdGVzdFRyZWVzID0gW1xuICB7XG4gICAgZm9ybTogW10sXG4gICAgY2hpbGRyZW46IFtdXG4gIH0sXG4gIHtcbiAgICBmb3JtOiBbe1xuICAgICAgICBUQUc6IC8qIENWYWwgKi8xLFxuICAgICAgICBfMDogLyogVSAqLzFcbiAgICAgIH1dLFxuICAgIGNoaWxkcmVuOiBbe1xuICAgICAgICBUQUc6IC8qIExlYWYgKi8xLFxuICAgICAgICBpbmRleDogWzBdLFxuICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgVEFHOiAvKiBDVmFsICovMSxcbiAgICAgICAgICBfMDogLyogVSAqLzFcbiAgICAgICAgfVxuICAgICAgfV1cbiAgfSxcbiAge1xuICAgIGZvcm06IFt7XG4gICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgIF8wOiBbXVxuICAgICAgfV0sXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICAgIFRBRzogLyogQnJhbmNoICovMCxcbiAgICAgICAgaW5kZXg6IFswXSxcbiAgICAgICAgZm9ybToge1xuICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgXzA6IFtdXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXVxuICAgICAgfV1cbiAgfSxcbiAge1xuICAgIGZvcm06IFt7XG4gICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgIF8wOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgVEFHOiAvKiBDVmFsICovMSxcbiAgICAgICAgICAgIF8wOiAvKiBNICovM1xuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgIF8wOiBbXVxuICAgICAgICAgIH1cbiAgICAgICAgXVxuICAgICAgfV0sXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICAgIFRBRzogLyogQnJhbmNoICovMCxcbiAgICAgICAgaW5kZXg6IFswXSxcbiAgICAgICAgZm9ybToge1xuICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgXzA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgVEFHOiAvKiBDVmFsICovMSxcbiAgICAgICAgICAgICAgXzA6IC8qIE0gKi8zXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgICBfMDogW11cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH0sXG4gICAgICAgIGNoaWxkcmVuOiBbXG4gICAgICAgICAge1xuICAgICAgICAgICAgVEFHOiAvKiBMZWFmICovMSxcbiAgICAgICAgICAgIGluZGV4OiBbXG4gICAgICAgICAgICAgIDAsXG4gICAgICAgICAgICAgIDBcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgICAgIFRBRzogLyogQ1ZhbCAqLzEsXG4gICAgICAgICAgICAgIF8wOiAvKiBNICovM1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH0sXG4gICAgICAgICAge1xuICAgICAgICAgICAgVEFHOiAvKiBCcmFuY2ggKi8wLFxuICAgICAgICAgICAgaW5kZXg6IFtcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMVxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgXzA6IFtdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XVxuICB9XG5dO1xuXG5mdW5jdGlvbiBkbmFUb0ZPUk0oZG5hKSB7XG4gIHJldHVybiBbXTtcbn1cblxuZnVuY3Rpb24gdG9GT1JNKHBhcmFtKSB7XG4gIHJldHVybiBbXTtcbn1cblxudmFyIEZvcm1ETkEgPSB7XG4gIHNob3c6IHNob3dGZG5hLFxuICBkbmFUb0ZPUk06IGRuYVRvRk9STSxcbiAgdG9GT1JNOiB0b0ZPUk1cbn07XG5cbmZ1bmN0aW9uIHRvRk9STXQoc2VxKSB7XG4gIGlmICghc2VxKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICBfMDogW11cbiAgICAgICAgICB9O1xuICB9XG4gIHZhciBzZXEkcCA9IHNlcS50bDtcbiAgdmFyIGV4cHIgPSBzZXEuaGQ7XG4gIGlmIChzZXEkcCkge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgXzA6IEJlbHRfQXJyYXkuY29uY2F0KGV4cHIsIFt0b0ZPUk10KHNlcSRwKV0pXG4gICAgICAgICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgIF8wOiBleHByXG4gICAgICAgICAgfTtcbiAgfVxufVxuXG52YXIgU2VxdWVuY2UgPSB7XG4gIHNob3c6IHNob3dTZXEsXG4gIHRvRk9STXQ6IHRvRk9STXRcbn07XG5cbnZhciBGT1JNID0ge1xuICBtYXJrOiBtYXJrLFxuICBjVmFsOiBjVmFsLFxuICBzZXFSRTogc2VxUkUsXG4gIHVuY2w6IHVuY2wsXG4gIGZWYXI6IGZWYXIsXG4gIGZEbmE6IGZEbmEsXG4gIHNob3c6IHNob3dFeHByXG59O1xuXG52YXIgRkNPTiA9IHtcbiAgcmVkdWNlOiByZWR1Y2UsXG4gIHRvRlZBUjogdG9GVkFSX2V4cHJcbn07XG5cbnZhciBGVkFSID0ge1xuICByZWR1Y2U6IHJlZHVjZSQxLFxuICBnZXRWYXJzOiBnZXRWYXJzLFxuICBjb3VudFZhcnM6IGNvdW50VmFyc1xufTtcblxudmFyIERlcHRoVHJlZSA9IHtcbiAgc2hvdzogc2hvdyxcbiAgcGFyc2U6IHBhcnNlLFxuICB0ZXN0VHJlZXM6IHRlc3RUcmVlc1xufTtcblxuZXhwb3J0IHtcbiAgbGJsQ2xhc3NfdW5xdW90ZWQgLFxuICBpZHhDbGFzc191bnF1b3RlZCAsXG4gIEZPUk0gLFxuICBGQ09OICxcbiAgRlZBUiAsXG4gIERlcHRoVHJlZSAsXG4gIEZvcm1ETkEgLFxuICBTZXF1ZW5jZSAsXG4gIFxufVxuLyogaWR4Q2xhc3NfdW5xdW90ZWQgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBSZVNjcmlwdCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG5cbmltcG9ydCAqIGFzIEJlbHRfTGlzdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0xpc3QuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfQXJyYXkgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvYmVsdF9BcnJheS5qc1wiO1xuaW1wb3J0ICogYXMgRE5BJEZvcm1mb3JtIGZyb20gXCIuLi9jYWxjL0ROQS5icy5qc1wiO1xuaW1wb3J0ICogYXMgQ2FsYyRGb3JtZm9ybSBmcm9tIFwiLi4vY2FsYy9DYWxjLmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBFeHByJEZvcm1mb3JtIGZyb20gXCIuL0V4cHIuYnMuanNcIjtcbmltcG9ydCAqIGFzIFNlcVJFJEZvcm1mb3JtIGZyb20gXCIuLi9jYWxjL1NlcVJFLmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2V4Y2VwdGlvbnMgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvY2FtbF9leGNlcHRpb25zLmpzXCI7XG5cbmZ1bmN0aW9uIHRvU3RyaW5nKHRva2VuKSB7XG4gIGlmICh0eXBlb2YgdG9rZW4gPT09IFwibnVtYmVyXCIpIHtcbiAgICBzd2l0Y2ggKHRva2VuKSB7XG4gICAgICBjYXNlIC8qIE9wdFNlcCAqLzAgOlxuICAgICAgICAgIHJldHVybiBcInxcIjtcbiAgICAgIGNhc2UgLyogU2VxU2VwICovMSA6XG4gICAgICAgICAgcmV0dXJuIFwiLFwiO1xuICAgICAgY2FzZSAvKiBTZXFSRV9vcGVuICovMiA6XG4gICAgICAgICAgcmV0dXJuIFwib3BlblwiO1xuICAgICAgY2FzZSAvKiBTZXFSRV9hbHQgKi8zIDpcbiAgICAgICAgICByZXR1cm4gXCJhbHRcIjtcbiAgICAgIGNhc2UgLyogRXhwclNlcCAqLzQgOlxuICAgICAgICAgIHJldHVybiBcIi5cIjtcbiAgICAgIFxuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKHRva2VuLlRBRyB8IDApIHtcbiAgICAgIGNhc2UgLyogTWFyayAqLzAgOlxuICAgICAgICAgIGlmICh0b2tlbi5fMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwiKVwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCIoXCI7XG4gICAgICAgICAgfVxuICAgICAgY2FzZSAvKiBTZXFSRSAqLzEgOlxuICAgICAgICAgIGlmICh0b2tlbi5fMCkge1xuICAgICAgICAgICAgcmV0dXJuIFwifVwiO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gXCJ7XCI7XG4gICAgICAgICAgfVxuICAgICAgY2FzZSAvKiBDb25zdCAqLzIgOlxuICAgICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LnNob3codG9rZW4uXzApO1xuICAgICAgY2FzZSAvKiBWYXIgKi8zIDpcbiAgICAgICAgICB2YXIgbGJsID0gdG9rZW4uXzA7XG4gICAgICAgICAgaWYgKGxibC5sZW5ndGggPiAxKSB7XG4gICAgICAgICAgICByZXR1cm4gXCJcXFwiXCIgKyBsYmwgKyBcIlxcXCJcIjtcbiAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgcmV0dXJuIGxibDtcbiAgICAgICAgICB9XG4gICAgICBjYXNlIC8qIFVuY2wgKi80IDpcbiAgICAgICAgICByZXR1cm4gXCIvXCIgKyB0b2tlbi5fMCArIFwiL1wiO1xuICAgICAgY2FzZSAvKiBTZXFSRV9zaWcgKi81IDpcbiAgICAgICAgICByZXR1cm4gU2VxUkUkRm9ybWZvcm0uc2hvd1NpZyh0b2tlbi5fMCk7XG4gICAgICBjYXNlIC8qIFNlcVJFX3BhciAqLzYgOlxuICAgICAgICAgIHN3aXRjaCAodG9rZW4uXzApIHtcbiAgICAgICAgICAgIGNhc2UgLyogRXZlbiAqLzAgOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjJyXCI7XG4gICAgICAgICAgICBjYXNlIC8qIE9kZCAqLzEgOlxuICAgICAgICAgICAgICAgIHJldHVybiBcIjJyKzFcIjtcbiAgICAgICAgICAgIGNhc2UgLyogQW55ICovMiA6XG4gICAgICAgICAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgICAgICAgICBcbiAgICAgICAgICB9XG4gICAgICBjYXNlIC8qIEROQSAqLzcgOlxuICAgICAgICAgIHJldHVybiBETkEkRm9ybWZvcm0uc2hvdyh0b2tlbi5zb3J0Tk1VSSwgdW5kZWZpbmVkLCB0b2tlbi5jb2RlKTtcbiAgICAgIGNhc2UgLyogVmFyTGlzdCAqLzggOlxuICAgICAgICAgIHJldHVybiBcIltcIiArIHRva2VuLl8wLmpvaW4oXCIsXCIpICsgXCJdXCI7XG4gICAgICBcbiAgICB9XG4gIH1cbn1cblxudmFyIFRva2VuID0ge1xuICB0b1N0cmluZzogdG9TdHJpbmdcbn07XG5cbnZhciBMZXhFcnJvciA9IC8qIEBfX1BVUkVfXyAqL0NhbWxfZXhjZXB0aW9ucy5jcmVhdGUoXCJGb3JtdWxhLUZvcm1mb3JtLkxleGVyLkxleEVycm9yXCIpO1xuXG5mdW5jdGlvbiBzY2FuTGFiZWwoZGVsaW0sIHN0cmVhbSkge1xuICB2YXIgX3NjYW4gPSBmdW5jdGlvbiAoX3N0cmVhbSwgX2xibCkge1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBsYmwgPSBfbGJsO1xuICAgICAgdmFyIHN0cmVhbSA9IF9zdHJlYW07XG4gICAgICBpZiAoc3RyZWFtKSB7XG4gICAgICAgIHZhciByID0gc3RyZWFtLnRsO1xuICAgICAgICB2YXIgZCA9IHN0cmVhbS5oZDtcbiAgICAgICAgaWYgKGQgPT09IGRlbGltKSB7XG4gICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgIGxibCxcbiAgICAgICAgICAgICAgICAgIHJcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICB9XG4gICAgICAgIF9sYmwgPSBsYmwgKyBkO1xuICAgICAgICBfc3RyZWFtID0gcjtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgfVxuICAgICAgdGhyb3cge1xuICAgICAgICAgICAgUkVfRVhOX0lEOiBMZXhFcnJvcixcbiAgICAgICAgICAgIG1zZzogXCJDbG9zaW5nICdcIiArIGRlbGltICsgXCInIGlzIG1pc3NpbmchXCIsXG4gICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICB9O1xuICAgIH07XG4gIH07XG4gIHZhciBtYXRjaCA9IF9zY2FuKHN0cmVhbSwgXCJcIik7XG4gIHZhciBsYmwgPSBtYXRjaFswXTtcbiAgaWYgKGxibCAhPT0gXCJcIikge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBsYmwsXG4gICAgICAgICAgICBtYXRjaFsxXVxuICAgICAgICAgIF07XG4gIH1cbiAgdGhyb3cge1xuICAgICAgICBSRV9FWE5fSUQ6IExleEVycm9yLFxuICAgICAgICBtc2c6IFwiTGFiZWwgc2hvdWxkIG5vdCBiZSBlbXB0eSFcIixcbiAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICB9O1xufVxuXG5mdW5jdGlvbiBzY2FuTGlzdChkZWxpbSwgc3RyZWFtKSB7XG4gIHZhciBfc2NhbiA9IGZ1bmN0aW9uIChfc3RyZWFtLCBhcnIpIHtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgc3RyZWFtID0gX3N0cmVhbTtcbiAgICAgIGlmIChzdHJlYW0pIHtcbiAgICAgICAgdmFyIGQgPSBzdHJlYW0uaGQ7XG4gICAgICAgIGlmIChkID09PSBcIiBcIikge1xuICAgICAgICAgIF9zdHJlYW0gPSBzdHJlYW0udGw7XG4gICAgICAgICAgY29udGludWUgO1xuICAgICAgICB9XG4gICAgICAgIGlmIChkID09PSBkZWxpbSkge1xuICAgICAgICAgIGlmIChhcnIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICBSRV9FWE5fSUQ6IExleEVycm9yLFxuICAgICAgICAgICAgICAgICAgbXNnOiBcImNvbW1hLXNlcGFyYXRlZCBsaXN0IGl0ZW0gbXVzdCBub3QgYmUgZW1wdHkhXCIsXG4gICAgICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgIH1cbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgYXJyLFxuICAgICAgICAgICAgICAgICAgc3RyZWFtLnRsXG4gICAgICAgICAgICAgICAgXTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoZCA9PT0gXCJcXFwiXCIpIHtcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBzY2FuTGFiZWwoXCJcXFwiXCIsIHN0cmVhbS50bCk7XG4gICAgICAgICAgcmV0dXJuIF9zY2FuTmV4dChtYXRjaFsxXSwgQmVsdF9BcnJheS5jb25jYXQoYXJyLCBbbWF0Y2hbMF1dKSk7XG4gICAgICAgIH1cbiAgICAgICAgdmFyIHIgPSBzdHJlYW0udGw7XG4gICAgICAgIGlmIChyICYmIHIuaGQgPT09IFwiX1wiKSB7XG4gICAgICAgICAgdmFyIG1hdGNoJDEgPSByLnRsO1xuICAgICAgICAgIGlmIChtYXRjaCQxKSB7XG4gICAgICAgICAgICB2YXIgaWR4ID0gbWF0Y2gkMS5oZDtcbiAgICAgICAgICAgIGlmIChFeHByJEZvcm1mb3JtLmxibENsYXNzX3VucXVvdGVkLmluY2x1ZGVzKGQpICYmIEV4cHIkRm9ybWZvcm0uaWR4Q2xhc3NfdW5xdW90ZWQuaW5jbHVkZXMoaWR4KSkge1xuICAgICAgICAgICAgICByZXR1cm4gX3NjYW5OZXh0KG1hdGNoJDEudGwsIEJlbHRfQXJyYXkuY29uY2F0KGFyciwgW2QgKyBcIl9cIiArIGlkeF0pKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgIH1cbiAgICAgICAgICBcbiAgICAgICAgfVxuICAgICAgICBpZiAoRXhwciRGb3JtZm9ybS5sYmxDbGFzc191bnF1b3RlZC5pbmNsdWRlcyhkKSkge1xuICAgICAgICAgIHJldHVybiBfc2Nhbk5leHQociwgQmVsdF9BcnJheS5jb25jYXQoYXJyLCBbZF0pKTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgIFJFX0VYTl9JRDogTGV4RXJyb3IsXG4gICAgICAgICAgICAgIG1zZzogXCJVbmFibGUgdG8gaW50ZXJwcmV0ICdcIiArIGQgKyBcIicuXCIsXG4gICAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHRocm93IHtcbiAgICAgICAgICAgIFJFX0VYTl9JRDogTGV4RXJyb3IsXG4gICAgICAgICAgICBtc2c6IFwiQ2xvc2luZyAnXCIgKyBkZWxpbSArIFwiJyBpcyBtaXNzaW5nIVwiLFxuICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgfTtcbiAgICB9O1xuICB9O1xuICB2YXIgX3NjYW5OZXh0ID0gZnVuY3Rpb24gKF9zdHJlYW0sIGFycikge1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBzdHJlYW0gPSBfc3RyZWFtO1xuICAgICAgaWYgKHN0cmVhbSkge1xuICAgICAgICB2YXIgZCA9IHN0cmVhbS5oZDtcbiAgICAgICAgc3dpdGNoIChkKSB7XG4gICAgICAgICAgY2FzZSBcIiBcIiA6XG4gICAgICAgICAgICAgIF9zdHJlYW0gPSBzdHJlYW0udGw7XG4gICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICBjYXNlIFwiLFwiIDpcbiAgICAgICAgICAgICAgcmV0dXJuIF9zY2FuKHN0cmVhbS50bCwgYXJyKTtcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgaWYgKGQgPT09IGRlbGltKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgYXJyLFxuICAgICAgICAgICAgICAgICAgICAgIHN0cmVhbS50bFxuICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IHtcbiAgICAgICAgICAgIFJFX0VYTl9JRDogTGV4RXJyb3IsXG4gICAgICAgICAgICBtc2c6IFwiRXhwZWN0ZWQgJywnIG9yICdcIiArIGRlbGltICsgXCInLlwiLFxuICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgfTtcbiAgICB9O1xuICB9O1xuICByZXR1cm4gX3NjYW4oc3RyZWFtLCBbXSk7XG59XG5cbmZ1bmN0aW9uIHNjYW5ETkEoc29ydE5NVUksIHN0cmVhbSkge1xuICB2YXIgY29udiA9IGZ1bmN0aW9uIChuKSB7XG4gICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3QuZnJvbUludChzb3J0Tk1VSSwgbik7XG4gIH07XG4gIHZhciBfc2NhbiA9IGZ1bmN0aW9uIChfc3RyZWFtLCBfYXJyKSB7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIGFyciA9IF9hcnI7XG4gICAgICB2YXIgc3RyZWFtID0gX3N0cmVhbTtcbiAgICAgIGlmICghc3RyZWFtKSB7XG4gICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgYXJyLFxuICAgICAgICAgICAgICAgIHN0cmVhbVxuICAgICAgICAgICAgICBdO1xuICAgICAgfVxuICAgICAgc3dpdGNoIChzdHJlYW0uaGQpIHtcbiAgICAgICAgY2FzZSBcIiBcIiA6XG4gICAgICAgICAgICBfc3RyZWFtID0gc3RyZWFtLnRsO1xuICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICBjYXNlIFwiMFwiIDpcbiAgICAgICAgICAgIF9hcnIgPSBCZWx0X0FycmF5LmNvbmNhdChhcnIsIFtjb252KDApXSk7XG4gICAgICAgICAgICBfc3RyZWFtID0gc3RyZWFtLnRsO1xuICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICBjYXNlIFwiMVwiIDpcbiAgICAgICAgICAgIF9hcnIgPSBCZWx0X0FycmF5LmNvbmNhdChhcnIsIFtjb252KDEpXSk7XG4gICAgICAgICAgICBfc3RyZWFtID0gc3RyZWFtLnRsO1xuICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICBjYXNlIFwiMlwiIDpcbiAgICAgICAgICAgIF9hcnIgPSBCZWx0X0FycmF5LmNvbmNhdChhcnIsIFtjb252KDIpXSk7XG4gICAgICAgICAgICBfc3RyZWFtID0gc3RyZWFtLnRsO1xuICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICBjYXNlIFwiM1wiIDpcbiAgICAgICAgICAgIF9hcnIgPSBCZWx0X0FycmF5LmNvbmNhdChhcnIsIFtjb252KDMpXSk7XG4gICAgICAgICAgICBfc3RyZWFtID0gc3RyZWFtLnRsO1xuICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICBhcnIsXG4gICAgICAgICAgICAgICAgICBzdHJlYW1cbiAgICAgICAgICAgICAgICBdO1xuICAgICAgfVxuICAgIH07XG4gIH07XG4gIHZhciBtYXRjaCA9IF9zY2FuKHN0cmVhbSwgW10pO1xuICB2YXIgZG5hID0gRE5BJEZvcm1mb3JtLm1ha2UobWF0Y2hbMF0pO1xuICBpZiAoZG5hICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgZG5hLFxuICAgICAgICAgICAgbWF0Y2hbMV1cbiAgICAgICAgICBdO1xuICB9XG4gIHRocm93IHtcbiAgICAgICAgUkVfRVhOX0lEOiBMZXhFcnJvcixcbiAgICAgICAgbXNnOiBcIkludmFsaWQgZm9ybUROQSFcIixcbiAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICB9O1xufVxuXG5mdW5jdGlvbiBzY2FuRm1sKF9zdHJlYW0pIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBzdHJlYW0gPSBfc3RyZWFtO1xuICAgIGlmICghc3RyZWFtKSB7XG4gICAgICByZXR1cm4gLyogW10gKi8wO1xuICAgIH1cbiAgICB2YXIgdW5pY29kZSA9IHN0cmVhbS5oZDtcbiAgICB2YXIgZXhpdCA9IDA7XG4gICAgdmFyIGV4aXQkMSA9IDA7XG4gICAgc3dpdGNoICh1bmljb2RlKSB7XG4gICAgICBjYXNlIFwiIFwiIDpcbiAgICAgICAgICBfc3RyZWFtID0gc3RyZWFtLnRsO1xuICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgIGNhc2UgXCIoXCIgOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgICAgICAgICBfMDogLyogT3BlbiAqLzBcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChzdHJlYW0udGwpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgIGNhc2UgXCIpXCIgOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgICAgICAgICBfMDogLyogQ2xvc2UgKi8xXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwoc3RyZWFtLnRsKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICBjYXNlIFwiOlwiIDpcbiAgICAgICAgICB2YXIgbWF0Y2ggPSBzdHJlYW0udGw7XG4gICAgICAgICAgaWYgKG1hdGNoKSB7XG4gICAgICAgICAgICBpZiAobWF0Y2guaGQgPT09IFwiOlwiKSB7XG4gICAgICAgICAgICAgIHZhciBtYXRjaCQxID0gc2NhbkROQSh0cnVlLCBtYXRjaC50bCk7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogRE5BICovNyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHNvcnROTVVJOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgY29kZTogbWF0Y2gkMVswXVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwobWF0Y2gkMVsxXSlcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGV4aXQkMSA9IDI7XG4gICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgIGV4aXQkMSA9IDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIGJyZWFrO1xuICAgICAgY2FzZSBcIklcIiA6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgIFRBRzogLyogQ29uc3QgKi8yLFxuICAgICAgICAgICAgICAgICAgICBfMDogLyogSSAqLzJcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChzdHJlYW0udGwpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgIGNhc2UgXCJNXCIgOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIENvbnN0ICovMixcbiAgICAgICAgICAgICAgICAgICAgXzA6IC8qIE0gKi8zXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwoc3RyZWFtLnRsKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICBjYXNlIFwiTlwiIDpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgaGQ6IHtcbiAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBDb25zdCAqLzIsXG4gICAgICAgICAgICAgICAgICAgIF8wOiAvKiBOICovMFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHN0cmVhbS50bClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgY2FzZSBcIlVcIiA6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgIFRBRzogLyogQ29uc3QgKi8yLFxuICAgICAgICAgICAgICAgICAgICBfMDogLyogVSAqLzFcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChzdHJlYW0udGwpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgIGNhc2UgXCJ7XCIgOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFICovMSxcbiAgICAgICAgICAgICAgICAgICAgXzA6IC8qIE9wZW4gKi8wXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwoc3RyZWFtLnRsKVxuICAgICAgICAgICAgICAgIH07XG4gICAgICBjYXNlIFwifVwiIDpcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgaGQ6IHtcbiAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRSAqLzEsXG4gICAgICAgICAgICAgICAgICAgIF8wOiAvKiBDbG9zZSAqLzFcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChzdHJlYW0udGwpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIGV4aXQkMSA9IDI7XG4gICAgfVxuICAgIGlmIChleGl0JDEgPT09IDIpIHtcbiAgICAgIGlmICh1bmljb2RlID09PSBcIuKBmFwiKSB7XG4gICAgICAgIHZhciBtYXRjaCQyID0gc2NhbkROQShmYWxzZSwgc3RyZWFtLnRsKTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgVEFHOiAvKiBETkEgKi83LFxuICAgICAgICAgICAgICAgICAgc29ydE5NVUk6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgY29kZTogbWF0Y2gkMlswXVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwobWF0Y2gkMlsxXSlcbiAgICAgICAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIHN3aXRjaCAodW5pY29kZSkge1xuICAgICAgICBjYXNlIFwiXFxcIlwiIDpcbiAgICAgICAgICAgIHZhciBtYXRjaCQzID0gc2NhbkxhYmVsKFwiXFxcIlwiLCBzdHJlYW0udGwpO1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaGQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFZhciAqLzMsXG4gICAgICAgICAgICAgICAgICAgICAgXzA6IG1hdGNoJDNbMF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwobWF0Y2gkM1sxXSlcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCIsXCIgOlxuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaGQ6IC8qIFNlcVNlcCAqLzEsXG4gICAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHN0cmVhbS50bClcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCIuXCIgOlxuICAgICAgICAgICAgdmFyIHIgPSBzdHJlYW0udGw7XG4gICAgICAgICAgICBpZiAoIXIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBoZDogLyogRXhwclNlcCAqLzQsXG4gICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwocilcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGlmIChyLmhkICE9PSBcIi5cIikge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgIGhkOiAvKiBFeHByU2VwICovNCxcbiAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChyKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgdmFyIG1hdGNoJDQgPSByLnRsO1xuICAgICAgICAgICAgaWYgKCFtYXRjaCQ0KSB7XG4gICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgaGQ6IC8qIEV4cHJTZXAgKi80LFxuICAgICAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHIpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBpZiAobWF0Y2gkNC5oZCAhPT0gXCJAXCIpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBoZDogLyogRXhwclNlcCAqLzQsXG4gICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwocilcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHZhciByJDEgPSBtYXRjaCQ0LnRsO1xuICAgICAgICAgICAgaWYgKCFyJDEpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRV9zaWcgKi81LFxuICAgICAgICAgICAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogRXZlbiAqLzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChyJDEpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBzd2l0Y2ggKHIkMS5oZCkge1xuICAgICAgICAgICAgICBjYXNlIFwiLlwiIDpcbiAgICAgICAgICAgICAgICAgIHZhciByJDIgPSByJDEudGw7XG4gICAgICAgICAgICAgICAgICBpZiAociQyICYmIHIkMi5oZCA9PT0gXCJfXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRV9zaWcgKi81LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogT2RkICovMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0luc3RyICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwociQyLnRsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRV9zaWcgKi81LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogT2RkICovMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJbnN0ciAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHIkMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgY2FzZSBcIl9cIiA6XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkVfc2lnICovNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogRXZlbiAqLzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0luc3RyICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwociQxLnRsKVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgY2FzZSBcIn5cIiA6XG4gICAgICAgICAgICAgICAgICB2YXIgciQzID0gciQxLnRsO1xuICAgICAgICAgICAgICAgICAgaWYgKCFyJDMpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRV9zaWcgKi81LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogRXZlbiAqLzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSWRlbnQgKi8xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChyJDMpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKHIkMy5oZCkge1xuICAgICAgICAgICAgICAgICAgICBjYXNlIFwiLlwiIDpcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhciByJDQgPSByJDMudGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAociQ0ICYmIHIkNC5oZCA9PT0gXCJfXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRV9zaWcgKi81LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogT2RkICovMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0lkZW50ICovMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwociQ0LnRsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRV9zaWcgKi81LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogT2RkICovMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJZGVudCAqLzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHIkNClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgY2FzZSBcIl9cIiA6XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkVfc2lnICovNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogRXZlbiAqLzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0lkZW50ICovMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwociQzLnRsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRV9zaWcgKi81LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IC8qIEV2ZW4gKi8wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJZGVudCAqLzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHIkMylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFX3NpZyAqLzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogRXZlbiAqLzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0luc3RyICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwociQxKVxuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCIvXCIgOlxuICAgICAgICAgICAgdmFyIG1hdGNoJDUgPSBzY2FuTGFiZWwoXCIvXCIsIHN0cmVhbS50bCk7XG4gICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogVW5jbCAqLzQsXG4gICAgICAgICAgICAgICAgICAgICAgXzA6IG1hdGNoJDVbMF1cbiAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwobWF0Y2gkNVsxXSlcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCIyXCIgOlxuICAgICAgICAgICAgdmFyIG1hdGNoJDYgPSBzdHJlYW0udGw7XG4gICAgICAgICAgICBpZiAobWF0Y2gkNikge1xuICAgICAgICAgICAgICBpZiAobWF0Y2gkNi5oZCA9PT0gXCJyXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgciQ1ID0gbWF0Y2gkNi50bDtcbiAgICAgICAgICAgICAgICBpZiAoIXIkNSkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaGQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFX3BhciAqLzYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6IC8qIEV2ZW4gKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHIkNSlcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmIChyJDUuaGQgIT09IFwiK1wiKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkVfcGFyICovNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDogLyogRXZlbiAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwociQ1KVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoJDcgPSByJDUudGw7XG4gICAgICAgICAgICAgICAgaWYgKG1hdGNoJDcgJiYgbWF0Y2gkNy5oZCA9PT0gXCIxXCIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRV9wYXIgKi82LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiAvKiBPZGQgKi8xXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKG1hdGNoJDcudGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkVfcGFyICovNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDogLyogRXZlbiAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwociQ1KVxuICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZXhpdCA9IDE7XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleGl0ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwiQFwiIDpcbiAgICAgICAgICAgIHZhciByJDYgPSBzdHJlYW0udGw7XG4gICAgICAgICAgICBpZiAoIXIkNikge1xuICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFX3NpZyAqLzUsXG4gICAgICAgICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBBbnkgKi8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0luc3RyICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwociQ2KVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgc3dpdGNoIChyJDYuaGQpIHtcbiAgICAgICAgICAgICAgY2FzZSBcIl9cIiA6XG4gICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkVfc2lnICovNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogQW55ICovMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChyJDYudGwpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICBjYXNlIFwiflwiIDpcbiAgICAgICAgICAgICAgICAgIHZhciByJDcgPSByJDYudGw7XG4gICAgICAgICAgICAgICAgICBpZiAociQ3ICYmIHIkNy5oZCA9PT0gXCJfXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRV9zaWcgKi81LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogQW55ICovMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0lkZW50ICovMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwociQ3LnRsKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRV9zaWcgKi81LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogQW55ICovMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJZGVudCAqLzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHIkNylcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRV9zaWcgKi81LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IC8qIEFueSAqLzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0luc3RyICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwociQ2KVxuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9XG4gICAgICAgIGNhc2UgXCJbXCIgOlxuICAgICAgICAgICAgdmFyIG1hdGNoJDggPSBzY2FuTGlzdChcIl1cIiwgc3RyZWFtLnRsKTtcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGhkOiB7XG4gICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBWYXJMaXN0ICovOCxcbiAgICAgICAgICAgICAgICAgICAgICBfMDogbWF0Y2gkOFswXVxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChtYXRjaCQ4WzFdKVxuICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgY2FzZSBcImFcIiA6XG4gICAgICAgICAgICB2YXIgbWF0Y2gkOSA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgIGlmIChtYXRjaCQ5ICYmIG1hdGNoJDkuaGQgPT09IFwibFwiKSB7XG4gICAgICAgICAgICAgIHZhciBtYXRjaCQxMCA9IG1hdGNoJDkudGw7XG4gICAgICAgICAgICAgIGlmIChtYXRjaCQxMCkge1xuICAgICAgICAgICAgICAgIGlmIChtYXRjaCQxMC5oZCA9PT0gXCJ0XCIpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiAvKiBTZXFSRV9hbHQgKi8zLFxuICAgICAgICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChtYXRjaCQxMC50bClcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGV4aXQgPSAxO1xuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4aXQgPSAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleGl0ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwib1wiIDpcbiAgICAgICAgICAgIHZhciBtYXRjaCQxMSA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgIGlmIChtYXRjaCQxMSAmJiBtYXRjaCQxMS5oZCA9PT0gXCJwXCIpIHtcbiAgICAgICAgICAgICAgdmFyIG1hdGNoJDEyID0gbWF0Y2gkMTEudGw7XG4gICAgICAgICAgICAgIGlmIChtYXRjaCQxMiAmJiBtYXRjaCQxMi5oZCA9PT0gXCJlXCIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkMTMgPSBtYXRjaCQxMi50bDtcbiAgICAgICAgICAgICAgICBpZiAobWF0Y2gkMTMpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCQxMy5oZCA9PT0gXCJuXCIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZDogLyogU2VxUkVfb3BlbiAqLzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHNjYW5GbWwobWF0Y2gkMTMudGwpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICBleGl0ID0gMTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZXhpdCA9IDE7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4aXQgPSAxO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICBleGl0ID0gMTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBjYXNlIFwifFwiIDpcbiAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgIGhkOiAvKiBPcHRTZXAgKi8wLFxuICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChzdHJlYW0udGwpXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIGV4aXQgPSAxO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoZXhpdCA9PT0gMSkge1xuICAgICAgdmFyIHIkOCA9IHN0cmVhbS50bDtcbiAgICAgIHZhciBleGl0JDIgPSAwO1xuICAgICAgaWYgKHIkOCAmJiByJDguaGQgPT09IFwiX1wiKSB7XG4gICAgICAgIHZhciBtYXRjaCQxNCA9IHIkOC50bDtcbiAgICAgICAgaWYgKG1hdGNoJDE0KSB7XG4gICAgICAgICAgdmFyIGlkeCA9IG1hdGNoJDE0LmhkO1xuICAgICAgICAgIGlmIChFeHByJEZvcm1mb3JtLmxibENsYXNzX3VucXVvdGVkLmluY2x1ZGVzKHVuaWNvZGUpICYmIEV4cHIkRm9ybWZvcm0uaWR4Q2xhc3NfdW5xdW90ZWQuaW5jbHVkZXMoaWR4KSkge1xuICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgaGQ6IHtcbiAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFZhciAqLzMsXG4gICAgICAgICAgICAgICAgICAgICAgXzA6IHVuaWNvZGUgKyBcIl9cIiArIGlkeFxuICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICB0bDogc2NhbkZtbChtYXRjaCQxNC50bClcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgfVxuICAgICAgICAgIGV4aXQkMiA9IDI7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgZXhpdCQyID0gMjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgZXhpdCQyID0gMjtcbiAgICAgIH1cbiAgICAgIGlmIChleGl0JDIgPT09IDIpIHtcbiAgICAgICAgaWYgKEV4cHIkRm9ybWZvcm0ubGJsQ2xhc3NfdW5xdW90ZWQuaW5jbHVkZXModW5pY29kZSkpIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgaGQ6IHtcbiAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBWYXIgKi8zLFxuICAgICAgICAgICAgICAgICAgICBfMDogdW5pY29kZVxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIHRsOiBzY2FuRm1sKHIkOClcbiAgICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgUkVfRVhOX0lEOiBMZXhFcnJvcixcbiAgICAgICAgICAgICAgbXNnOiBcIlVuYWJsZSB0byBpbnRlcnByZXQgJ1wiICsgdW5pY29kZSArIFwiJy5cIixcbiAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICB9O1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuICAgIFxuICB9O1xufVxuXG5mdW5jdGlvbiBzY2FuKGlucHV0KSB7XG4gIHJldHVybiBzY2FuRm1sKEJlbHRfTGlzdC5mcm9tQXJyYXkoaW5wdXQuc3BsaXQoXCJcIikpKTtcbn1cblxudmFyIFBhcnNlRXJyb3IgPSAvKiBAX19QVVJFX18gKi9DYW1sX2V4Y2VwdGlvbnMuY3JlYXRlKFwiRm9ybXVsYS1Gb3JtZm9ybS5QYXJzZXIuUGFyc2VFcnJvclwiKTtcblxuZnVuY3Rpb24gcGFyc2VTZXFSRV9zaWcoc3RyZWFtKSB7XG4gIGlmIChzdHJlYW0pIHtcbiAgICB2YXIgc2lnID0gc3RyZWFtLmhkO1xuICAgIGlmICh0eXBlb2Ygc2lnID09PSBcIm51bWJlclwiKSB7XG4gICAgICBzd2l0Y2ggKHNpZykge1xuICAgICAgICBjYXNlIC8qIFNlcVJFX29wZW4gKi8yIDpcbiAgICAgICAgICAgIHZhciBtYXRjaCA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgIGlmIChtYXRjaCAmJiBtYXRjaC5oZCA9PT0gMCkge1xuICAgICAgICAgICAgICB2YXIgciA9IG1hdGNoLnRsO1xuICAgICAgICAgICAgICB2YXIgZXhpdCA9IDA7XG4gICAgICAgICAgICAgIGlmIChyKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhciA9IHIuaGQ7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXIgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChwYXIgPT09IC8qIFNlcVJFX2FsdCAqLzMpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoJDEgPSByLnRsO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gkMSAmJiBtYXRjaCQxLmhkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIHIkcCA9IG1hdGNoJDEudGw7XG4gICAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXQkMSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKHIkcCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhciQxID0gciRwLmhkO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBwYXIkMSA9PT0gXCJudW1iZXJcIiB8fCBwYXIkMS5UQUcgIT09IC8qIFNlcVJFX3BhciAqLzYpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCQxID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCQyID0gciRwLnRsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gkMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCQyLmhkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogcGFyJDEuXzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSWRlbnQgKi8xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoJDIudGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQkMSA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCQxID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBleGl0JDEgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpdCQxID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogQW55ICovMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJZGVudCAqLzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgciRwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBleGl0ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgZXhpdCA9IDI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIGlmIChwYXIuVEFHID09PSAvKiBTZXFSRV9wYXIgKi82KSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkMyA9IHIudGw7XG4gICAgICAgICAgICAgICAgICBpZiAobWF0Y2gkMyAmJiBtYXRjaCQzLmhkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciByJHAkMSA9IG1hdGNoJDMudGw7XG4gICAgICAgICAgICAgICAgICAgIHZhciBwYXIkMiA9IHBhci5fMDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIGV4aXQkMiA9IDA7XG4gICAgICAgICAgICAgICAgICAgIGlmIChyJHAkMSAmJiByJHAkMS5oZCA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCQ0ID0gciRwJDEudGw7XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoJDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCQ0LmhkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogcGFyJDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogdHJ1ZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0lkZW50ICovMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWF0Y2gkNC50bFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCQyID0gMztcbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCQyID0gMztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgZXhpdCQyID0gMztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBpZiAoZXhpdCQyID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogcGFyJDIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJbnN0ciAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICByJHAkMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleGl0ID0gMjtcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZXhpdCA9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4aXQgPSAyO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGlmIChleGl0ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogQW55ICovMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0luc3RyICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgIHJcbiAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgIGNhc2UgLyogU2VxUkVfYWx0ICovMyA6XG4gICAgICAgICAgICB2YXIgbWF0Y2gkNSA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgIGlmIChtYXRjaCQ1ICYmIG1hdGNoJDUuaGQgPT09IDApIHtcbiAgICAgICAgICAgICAgdmFyIHIkMSA9IG1hdGNoJDUudGw7XG4gICAgICAgICAgICAgIHZhciBleGl0JDMgPSAwO1xuICAgICAgICAgICAgICBpZiAociQxKSB7XG4gICAgICAgICAgICAgICAgdmFyIHBhciQzID0gciQxLmhkO1xuICAgICAgICAgICAgICAgIGlmICh0eXBlb2YgcGFyJDMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICAgICAgICAgIGlmIChwYXIkMyA9PT0gLyogU2VxUkVfb3BlbiAqLzIpIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoJDYgPSByJDEudGw7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCQ2ICYmIG1hdGNoJDYuaGQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgciRwJDIgPSBtYXRjaCQ2LnRsO1xuICAgICAgICAgICAgICAgICAgICAgIHZhciBleGl0JDQgPSAwO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChyJHAkMikge1xuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHBhciQ0ID0gciRwJDIuaGQ7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAodHlwZW9mIHBhciQ0ID09PSBcIm51bWJlclwiIHx8IHBhciQ0LlRBRyAhPT0gLyogU2VxUkVfcGFyICovNikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0JDQgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoJDcgPSByJHAkMi50bDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoJDcpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gkNy5oZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IHBhciQ0Ll8wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0lkZW50ICovMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCQ3LnRsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0JDQgPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQkNCA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCQ0ID0gMztcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXQkNCA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IC8qIEFueSAqLzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSWRlbnQgKi8xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIkcCQyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICBleGl0JDMgPSAyO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBleGl0JDMgPSAyO1xuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAocGFyJDMuVEFHID09PSAvKiBTZXFSRV9wYXIgKi82KSB7XG4gICAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkOCA9IHIkMS50bDtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCQ4ICYmIG1hdGNoJDguaGQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHIkcCQzID0gbWF0Y2gkOC50bDtcbiAgICAgICAgICAgICAgICAgICAgdmFyIHBhciQ1ID0gcGFyJDMuXzA7XG4gICAgICAgICAgICAgICAgICAgIHZhciBleGl0JDUgPSAwO1xuICAgICAgICAgICAgICAgICAgICBpZiAociRwJDMgJiYgciRwJDMuaGQgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkOSA9IHIkcCQzLnRsO1xuICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCQ5KSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gkOS5oZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IHBhciQ1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJZGVudCAqLzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoJDkudGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQkNSA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4aXQkNSA9IDM7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIGV4aXQkNSA9IDM7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXQkNSA9PT0gMykge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IHBhciQ1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0lkZW50ICovMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHIkcCQzXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgIGV4aXQkMyA9IDI7XG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgIGV4aXQkMyA9IDI7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGV4aXQkMyA9IDI7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgaWYgKGV4aXQkMyA9PT0gMikge1xuICAgICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IC8qIEFueSAqLzIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSWRlbnQgKi8xXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgciQxXG4gICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIFxuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICBzd2l0Y2ggKHNpZy5UQUcgfCAwKSB7XG4gICAgICAgIGNhc2UgLyogU2VxUkVfc2lnICovNSA6XG4gICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICBzaWcuXzAsXG4gICAgICAgICAgICAgICAgICAgIHN0cmVhbS50bFxuICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgY2FzZSAvKiBTZXFSRV9wYXIgKi82IDpcbiAgICAgICAgICAgIHZhciBtYXRjaCQxMCA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgIGlmIChtYXRjaCQxMCAmJiBtYXRjaCQxMC5oZCA9PT0gMCkge1xuICAgICAgICAgICAgICB2YXIgciQyID0gbWF0Y2gkMTAudGw7XG4gICAgICAgICAgICAgIHZhciBwYXIkNiA9IHNpZy5fMDtcbiAgICAgICAgICAgICAgdmFyIGV4aXQkNiA9IDA7XG4gICAgICAgICAgICAgIGlmIChyJDIpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkMTEgPSByJDIuaGQ7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXRjaCQxMSA9PT0gXCJudW1iZXJcIiAmJiBtYXRjaCQxMSA+PSAyKSB7XG4gICAgICAgICAgICAgICAgICBzd2l0Y2ggKG1hdGNoJDExKSB7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgLyogU2VxUkVfb3BlbiAqLzIgOlxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoJDEyID0gciQyLnRsO1xuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoJDEyICYmIG1hdGNoJDEyLmhkID09PSAwKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciByJHAkNCA9IG1hdGNoJDEyLnRsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgZXhpdCQ3ID0gMDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHIkcCQ0ICYmIHIkcCQ0LmhkID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoJDEzID0gciRwJDQudGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKG1hdGNoJDEzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gkMTMuaGQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiBwYXIkNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSWRlbnQgKi8xXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtYXRjaCQxMy50bFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCQ3ID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCQ3ID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCQ3ID0gMztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpdCQ3ID09PSAzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogcGFyJDYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJbnN0ciAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByJHAkNFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0JDYgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgLyogU2VxUkVfYWx0ICovMyA6XG4gICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkMTQgPSByJDIudGw7XG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gkMTQgJiYgbWF0Y2gkMTQuaGQgPT09IDApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyIHIkcCQ1ID0gbWF0Y2gkMTQudGw7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBleGl0JDggPSAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAociRwJDUgJiYgciRwJDUuaGQgPT09IDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkMTUgPSByJHAkNS50bDtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAobWF0Y2gkMTUpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCQxNS5oZCA9PT0gMCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IHBhciQ2LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJZGVudCAqLzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG1hdGNoJDE1LnRsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0JDggPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0JDggPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0JDggPSAzO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChleGl0JDggPT09IDMpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiBwYXIkNixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJZGVudCAqLzFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByJHAkNVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleGl0JDYgPSAyO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgLyogRXhwclNlcCAqLzQgOlxuICAgICAgICAgICAgICAgICAgICAgICAgZXhpdCQ2ID0gMjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgZXhpdCQ2ID0gMjtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgZXhpdCQ2ID0gMjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBpZiAoZXhpdCQ2ID09PSAyKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogcGFyJDYsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgciQyXG4gICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIFxuICAgICAgfVxuICAgIH1cbiAgfVxuICByZXR1cm4gW1xuICAgICAgICAgIHtcbiAgICAgICAgICAgIHJlRW50cnlQYXI6IC8qIEFueSAqLzIsXG4gICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJbnN0ciAqLzBcbiAgICAgICAgICB9LFxuICAgICAgICAgIHN0cmVhbVxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBwYXJzZUV4cHIoX3VubWFya2VkT3B0LCBfaW5TZXFPcHQsIF9zdHJlYW0sIF9leHByKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgdW5tYXJrZWRPcHQgPSBfdW5tYXJrZWRPcHQ7XG4gICAgdmFyIGluU2VxT3B0ID0gX2luU2VxT3B0O1xuICAgIHZhciBleHByID0gX2V4cHI7XG4gICAgdmFyIHN0cmVhbSA9IF9zdHJlYW07XG4gICAgdmFyIHVubWFya2VkID0gdW5tYXJrZWRPcHQgIT09IHVuZGVmaW5lZCA/IHVubWFya2VkT3B0IDogZmFsc2U7XG4gICAgdmFyIGluU2VxID0gaW5TZXFPcHQgIT09IHVuZGVmaW5lZCA/IGluU2VxT3B0IDogZmFsc2U7XG4gICAgaWYgKHN0cmVhbSkge1xuICAgICAgdmFyIGMgPSBzdHJlYW0uaGQ7XG4gICAgICBpZiAodHlwZW9mIGMgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgc3dpdGNoIChjKSB7XG4gICAgICAgICAgY2FzZSAvKiBTZXFTZXAgKi8xIDpcbiAgICAgICAgICAgICAgaWYgKGluU2VxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgIGV4cHIsXG4gICAgICAgICAgICAgICAgICAgICAgICBzdHJlYW1cbiAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgIGNhc2UgLyogRXhwclNlcCAqLzQgOlxuICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBzdHJlYW0udGw7XG4gICAgICAgICAgICAgIGlmIChtYXRjaCkge1xuICAgICAgICAgICAgICAgIHZhciBhcnIgPSBtYXRjaC5oZDtcbiAgICAgICAgICAgICAgICBpZiAodHlwZW9mIGFyciAhPT0gXCJudW1iZXJcIiAmJiBhcnIuVEFHID09PSAvKiBWYXJMaXN0ICovOCkge1xuICAgICAgICAgICAgICAgICAgdmFyIG1hdGNoJDEgPSBtYXRjaC50bDtcbiAgICAgICAgICAgICAgICAgIGlmIChtYXRjaCQxKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBtYXRjaCQyID0gbWF0Y2gkMS5oZDtcbiAgICAgICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXRjaCQyICE9PSBcIm51bWJlclwiICYmIG1hdGNoJDIuVEFHID09PSAvKiBETkEgKi83KSB7XG4gICAgICAgICAgICAgICAgICAgICAgX2V4cHIgPSBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIEZEbmEgKi81LFxuICAgICAgICAgICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRuYTogbWF0Y2gkMi5jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGZvcm06IGV4cHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdmFyczogYXJyLl8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIH1dO1xuICAgICAgICAgICAgICAgICAgICAgIF9zdHJlYW0gPSBtYXRjaCQxLnRsO1xuICAgICAgICAgICAgICAgICAgICAgIF9pblNlcU9wdCA9IGluU2VxO1xuICAgICAgICAgICAgICAgICAgICAgIF91bm1hcmtlZE9wdCA9IHVubWFya2VkO1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHN3aXRjaCAoYy5UQUcgfCAwKSB7XG4gICAgICAgICAgY2FzZSAvKiBNYXJrICovMCA6XG4gICAgICAgICAgICAgIGlmIChjLl8wKSB7XG4gICAgICAgICAgICAgICAgaWYgKCF1bm1hcmtlZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgZXhwcixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc3RyZWFtLnRsXG4gICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBpZiAodW5tYXJrZWQpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFJFX0VYTl9JRDogUGFyc2VFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZzogXCJNaXNzaW5nICcoJyB0byBvcGVuIEZPUk0uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkMyA9IHBhcnNlRXhwcih1bmRlZmluZWQsIHVuZGVmaW5lZCwgc3RyZWFtLnRsLCBbXSk7XG4gICAgICAgICAgICAgICAgX2V4cHIgPSBCZWx0X0FycmF5LmNvbmNhdChleHByLCBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIF8wOiBtYXRjaCQzWzBdXG4gICAgICAgICAgICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgICAgIF9zdHJlYW0gPSBtYXRjaCQzWzFdO1xuICAgICAgICAgICAgICAgIF9pblNlcU9wdCA9IGluU2VxO1xuICAgICAgICAgICAgICAgIF91bm1hcmtlZE9wdCA9IHVubWFya2VkO1xuICAgICAgICAgICAgICAgIGNvbnRpbnVlIDtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlIC8qIFNlcVJFICovMSA6XG4gICAgICAgICAgICAgIGlmIChjLl8wKSB7XG4gICAgICAgICAgICAgICAgaWYgKGluU2VxKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICBleHByLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBzdHJlYW1cbiAgICAgICAgICAgICAgICAgICAgICAgIF07XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmICghaW5TZXEpIHtcbiAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIFJFX0VYTl9JRDogUGFyc2VFcnJvcixcbiAgICAgICAgICAgICAgICAgICAgICAgIG1zZzogXCJNaXNzaW5nICd7JyB0byBvcGVuIHJlLWVudHJ5IEZPUk0uXCIsXG4gICAgICAgICAgICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkNCA9IHBhcnNlU2VxUkVfc2lnKHN0cmVhbS50bCk7XG4gICAgICAgICAgICAgICAgdmFyIG1hdGNoJDUgPSBwYXJzZVNlcShtYXRjaCQ0WzFdLCAvKiBbXSAqLzApO1xuICAgICAgICAgICAgICAgIF9leHByID0gQmVsdF9BcnJheS5jb25jYXQoZXhwciwgW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkUgKi8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgXzA6IG1hdGNoJDRbMF0sXG4gICAgICAgICAgICAgICAgICAgICAgICBfMTogbWF0Y2gkNVswXVxuICAgICAgICAgICAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgICAgICBfc3RyZWFtID0gbWF0Y2gkNVsxXTtcbiAgICAgICAgICAgICAgICBfaW5TZXFPcHQgPSBpblNlcTtcbiAgICAgICAgICAgICAgICBfdW5tYXJrZWRPcHQgPSB1bm1hcmtlZDtcbiAgICAgICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgY2FzZSAvKiBDb25zdCAqLzIgOlxuICAgICAgICAgICAgICBfZXhwciA9IEJlbHRfQXJyYXkuY29uY2F0KGV4cHIsIFt7XG4gICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBDVmFsICovMSxcbiAgICAgICAgICAgICAgICAgICAgICBfMDogYy5fMFxuICAgICAgICAgICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICAgIF9zdHJlYW0gPSBzdHJlYW0udGw7XG4gICAgICAgICAgICAgIF9pblNlcU9wdCA9IGluU2VxO1xuICAgICAgICAgICAgICBfdW5tYXJrZWRPcHQgPSB1bm1hcmtlZDtcbiAgICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgIGNhc2UgLyogVmFyICovMyA6XG4gICAgICAgICAgICAgIF9leHByID0gQmVsdF9BcnJheS5jb25jYXQoZXhwciwgW3tcbiAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIEZWYXIgKi80LFxuICAgICAgICAgICAgICAgICAgICAgIF8wOiBjLl8wXG4gICAgICAgICAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgICAgX3N0cmVhbSA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgICAgX2luU2VxT3B0ID0gaW5TZXE7XG4gICAgICAgICAgICAgIF91bm1hcmtlZE9wdCA9IHVubWFya2VkO1xuICAgICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgY2FzZSAvKiBVbmNsICovNCA6XG4gICAgICAgICAgICAgIF9leHByID0gQmVsdF9BcnJheS5jb25jYXQoZXhwciwgW3tcbiAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFVuY2wgKi8zLFxuICAgICAgICAgICAgICAgICAgICAgIF8wOiBjLl8wXG4gICAgICAgICAgICAgICAgICAgIH1dKTtcbiAgICAgICAgICAgICAgX3N0cmVhbSA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgICAgX2luU2VxT3B0ID0gaW5TZXE7XG4gICAgICAgICAgICAgIF91bm1hcmtlZE9wdCA9IHVubWFya2VkO1xuICAgICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgY2FzZSAvKiBETkEgKi83IDpcbiAgICAgICAgICAgICAgX2V4cHIgPSBCZWx0X0FycmF5LmNvbmNhdChleHByLCBbe1xuICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogRkRuYSAqLzUsXG4gICAgICAgICAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGRuYTogYy5jb2RlLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm9ybTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgdmFyczogdW5kZWZpbmVkXG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9XSk7XG4gICAgICAgICAgICAgIF9zdHJlYW0gPSBzdHJlYW0udGw7XG4gICAgICAgICAgICAgIF9pblNlcU9wdCA9IGluU2VxO1xuICAgICAgICAgICAgICBfdW5tYXJrZWRPcHQgPSB1bm1hcmtlZDtcbiAgICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgIGNhc2UgLyogVmFyTGlzdCAqLzggOlxuICAgICAgICAgICAgICB2YXIgbWF0Y2gkNiA9IHN0cmVhbS50bDtcbiAgICAgICAgICAgICAgaWYgKG1hdGNoJDYpIHtcbiAgICAgICAgICAgICAgICB2YXIgbWF0Y2gkNyA9IG1hdGNoJDYuaGQ7XG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBtYXRjaCQ3ICE9PSBcIm51bWJlclwiICYmIG1hdGNoJDcuVEFHID09PSAvKiBETkEgKi83KSB7XG4gICAgICAgICAgICAgICAgICBfZXhwciA9IEJlbHRfQXJyYXkuY29uY2F0KGV4cHIsIFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogRkRuYSAqLzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZG5hOiBtYXRjaCQ3LmNvZGUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZm9ybTogdW5kZWZpbmVkLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhcnM6IGMuXzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfV0pO1xuICAgICAgICAgICAgICAgICAgX3N0cmVhbSA9IG1hdGNoJDYudGw7XG4gICAgICAgICAgICAgICAgICBfaW5TZXFPcHQgPSBpblNlcTtcbiAgICAgICAgICAgICAgICAgIF91bm1hcmtlZE9wdCA9IHVubWFya2VkO1xuICAgICAgICAgICAgICAgICAgY29udGludWUgO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgXG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHRocm93IHtcbiAgICAgICAgICAgIFJFX0VYTl9JRDogUGFyc2VFcnJvcixcbiAgICAgICAgICAgIG1zZzogXCJJbnZhbGlkIHRva2VuICdcIiArIHRvU3RyaW5nKGMpICsgXCInIVwiLFxuICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgfTtcbiAgICB9XG4gICAgaWYgKHVubWFya2VkKSB7XG4gICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICBleHByLFxuICAgICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICAgIF07XG4gICAgfVxuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IFBhcnNlRXJyb3IsXG4gICAgICAgICAgbXNnOiBcIk1pc3NpbmcgJyknIHRvIGNsb3NlIEZPUk0uXCIsXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlU2VxKF9zdHJlYW0sIF9zZXEpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBzZXEgPSBfc2VxO1xuICAgIHZhciBzdHJlYW0gPSBfc3RyZWFtO1xuICAgIGlmIChzdHJlYW0pIHtcbiAgICAgIHZhciBtYXRjaCA9IHBhcnNlRXhwcih0cnVlLCB0cnVlLCBzdHJlYW0sIFtdKTtcbiAgICAgIHZhciByJHAgPSBtYXRjaFsxXTtcbiAgICAgIHZhciBleHByID0gbWF0Y2hbMF07XG4gICAgICBpZiAociRwKSB7XG4gICAgICAgIHZhciBtYXRjaCQxID0gciRwLmhkO1xuICAgICAgICBpZiAodHlwZW9mIG1hdGNoJDEgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICBpZiAobWF0Y2gkMSA9PT0gLyogU2VxU2VwICovMSkge1xuICAgICAgICAgICAgdmFyIHIkcCRwID0gciRwLnRsO1xuICAgICAgICAgICAgaWYgKHIkcCRwKSB7XG4gICAgICAgICAgICAgIHZhciBtYXRjaCQyID0gciRwJHAuaGQ7XG4gICAgICAgICAgICAgIGlmICh0eXBlb2YgbWF0Y2gkMiAhPT0gXCJudW1iZXJcIiAmJiBtYXRjaCQyLlRBRyA9PT0gLyogU2VxUkUgKi8xICYmIG1hdGNoJDIuXzApIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBoZDogW10sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHRsOiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaGQ6IGV4cHIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IHNlcVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgICAgICAgciRwJHAudGxcbiAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX3NlcSA9IHtcbiAgICAgICAgICAgICAgaGQ6IGV4cHIsXG4gICAgICAgICAgICAgIHRsOiBzZXFcbiAgICAgICAgICAgIH07XG4gICAgICAgICAgICBfc3RyZWFtID0gciRwJHA7XG4gICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBSRV9FWE5fSUQ6IFBhcnNlRXJyb3IsXG4gICAgICAgICAgICAgICAgbXNnOiBcIk1pc3NpbmcgJ30nIHRvIGNsb3NlIHJlLWVudHJ5IEZPUk0uXCIsXG4gICAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaWYgKG1hdGNoJDEuVEFHID09PSAvKiBTZXFSRSAqLzEpIHtcbiAgICAgICAgICAgIGlmIChtYXRjaCQxLl8wKSB7XG4gICAgICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgaGQ6IGV4cHIsXG4gICAgICAgICAgICAgICAgICAgICAgICB0bDogc2VxXG4gICAgICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgICAgICByJHAudGxcbiAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgIFJFX0VYTl9JRDogUGFyc2VFcnJvcixcbiAgICAgICAgICAgICAgICAgIG1zZzogXCJNaXNzaW5nICd9JyB0byBjbG9zZSByZS1lbnRyeSBGT1JNLlwiLFxuICAgICAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICB9XG4gICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIFJFX0VYTl9JRDogUGFyc2VFcnJvcixcbiAgICAgICAgICAgICAgICBtc2c6IFwiTWlzc2luZyAnfScgdG8gY2xvc2UgcmUtZW50cnkgRk9STS5cIixcbiAgICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICBSRV9FWE5fSUQ6IFBhcnNlRXJyb3IsXG4gICAgICAgICAgICAgIG1zZzogXCJNaXNzaW5nICd9JyB0byBjbG9zZSByZS1lbnRyeSBGT1JNLlwiLFxuICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHRocm93IHtcbiAgICAgICAgICAgIFJFX0VYTl9JRDogUGFyc2VFcnJvcixcbiAgICAgICAgICAgIG1zZzogXCJNaXNzaW5nICd9JyB0byBjbG9zZSByZS1lbnRyeSBGT1JNLlwiLFxuICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgfTtcbiAgICB9XG4gIH07XG59XG5cbmZ1bmN0aW9uIHBhcnNlKHN0cmVhbSkge1xuICB2YXIgbWF0Y2ggPSBwYXJzZUV4cHIodHJ1ZSwgdW5kZWZpbmVkLCBzdHJlYW0sIFtdKTtcbiAgaWYgKEJlbHRfTGlzdC5sZW5ndGgobWF0Y2hbMV0pID4gMCkge1xuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IFBhcnNlRXJyb3IsXG4gICAgICAgICAgbXNnOiBcIkJyb2tlbiBwYXJzZSB0cmVlIVwiLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIHJldHVybiBtYXRjaFswXTtcbn1cblxuZnVuY3Rpb24gcmVhZChmb3JtdWxhKSB7XG4gIHJldHVybiBwYXJzZShzY2FuKGZvcm11bGEpKTtcbn1cblxudmFyIExleGVyID0ge1xuICBMZXhFcnJvcjogTGV4RXJyb3IsXG4gIHNjYW46IHNjYW5cbn07XG5cbnZhciBQYXJzZXIgPSB7XG4gIFBhcnNlRXJyb3I6IFBhcnNlRXJyb3IsXG4gIHBhcnNlOiBwYXJzZVxufTtcblxuZXhwb3J0IHtcbiAgVG9rZW4gLFxuICBMZXhlciAsXG4gIFBhcnNlciAsXG4gIHJlYWQgLFxuICBcbn1cbi8qIEROQS1Gb3JtZm9ybSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IFJlU2NyaXB0LCBQTEVBU0UgRURJVCBXSVRIIENBUkVcblxuaW1wb3J0ICogYXMgQ3VycnkgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIEpzX2RpY3QgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvanNfZGljdC5qc1wiO1xuaW1wb3J0ICogYXMgSnNfbWF0aCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9qc19tYXRoLmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X0ludCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0ludC5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9BcnJheSBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0FycmF5LmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2FycmF5IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2NhbWxfYXJyYXkuanNcIjtcbmltcG9ydCAqIGFzIEROQSRGb3JtZm9ybSBmcm9tIFwiLi4vY2FsYy9ETkEuYnMuanNcIjtcbmltcG9ydCAqIGFzIENhbGMkRm9ybWZvcm0gZnJvbSBcIi4uL2NhbGMvQ2FsYy5icy5qc1wiO1xuaW1wb3J0ICogYXMgSnNSYXckRm9ybWZvcm0gZnJvbSBcIi4uLy4uL3V0aWxzL0pzUmF3LmJzLmpzXCI7XG5cbmZ1bmN0aW9uIHNob3codnApIHtcbiAgcmV0dXJuIFwiW1wiICsgQmVsdF9BcnJheS5tYXAodnAsIChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3Quc2hvdyhjKTtcbiAgICAgICAgICAgICAgICB9KSkuam9pbihcIixcIikgKyBcIl1cIjtcbn1cblxuZnVuY3Rpb24gc2hvd0FzS2V5KHZwKSB7XG4gIHJldHVybiBCZWx0X0FycmF5Lm1hcCh2cCwgKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gQ2FsYyRGb3JtZm9ybS5Db25zdC5zaG93QXNLZXkoYyk7XG4gICAgICAgICAgICAgICAgfSkpLmpvaW4oXCJcIik7XG59XG5cbmZ1bmN0aW9uIHRGcm9tU3RyKHNvcnROTVVJT3B0LCBzdHIpIHtcbiAgdmFyIHNvcnROTVVJID0gc29ydE5NVUlPcHQgIT09IHVuZGVmaW5lZCA/IHNvcnROTVVJT3B0IDogZmFsc2U7XG4gIHZhciBtYXliZV92cG9pbnQgPSBzdHIuc3BsaXQoXCJcIikubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdmFyIG4gPSBCZWx0X0ludC5mcm9tU3RyaW5nKHZhbCk7XG4gICAgICAgIGlmIChuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gQ2FsYyRGb3JtZm9ybS5Db25zdC5mcm9tSW50KHNvcnROTVVJLCBuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gQ2FsYyRGb3JtZm9ybS5Db25zdC50RnJvbVN0cih2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgaWYgKG1heWJlX3Zwb2ludC5ldmVyeShmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiB2ICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIH0pKSB7XG4gICAgcmV0dXJuIG1heWJlX3Zwb2ludC5tYXAoZnVuY3Rpb24gKHYpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgICAgfSk7XG4gIH1cbiAgXG59XG5cbnZhciBWUG9pbnQgPSB7XG4gIHNob3c6IHNob3csXG4gIHNob3dBc0tleTogc2hvd0FzS2V5LFxuICB0RnJvbVN0cjogdEZyb21TdHJcbn07XG5cbmZ1bmN0aW9uIGdldFBvaW50cyh2c3BhY2UpIHtcbiAgcmV0dXJuIHZzcGFjZS5wb2ludHM7XG59XG5cbmZ1bmN0aW9uIGdldERpbWVuc2lvbih2c3BhY2UpIHtcbiAgcmV0dXJuIHZzcGFjZS5kaW07XG59XG5cbmZ1bmN0aW9uIG1ha2Uoc29ydE5NVUlPcHQsIGRpbSkge1xuICB2YXIgc29ydE5NVUkgPSBzb3J0Tk1VSU9wdCAhPT0gdW5kZWZpbmVkID8gc29ydE5NVUlPcHQgOiBmYWxzZTtcbiAgdmFyIHJlc29sdXRpb24gPSBKc19tYXRoLmZsb29yX2ludChNYXRoLnBvdyg0LjAsIGRpbSkpO1xuICB2YXIgcG9pbnRzID0gQmVsdF9BcnJheS5tYWtlQnkocmVzb2x1dGlvbiwgKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgdmFyIHZwX3N0ciA9IEpzUmF3JEZvcm1mb3JtLnBhZFN0YXJ0KGkudG9TdHJpbmcoNCksIGRpbSwgXCIwXCIpO1xuICAgICAgICAgIHZhciB2cG9pbnQgPSB0RnJvbVN0cihzb3J0Tk1VSSwgdnBfc3RyKTtcbiAgICAgICAgICBpZiAodnBvaW50ICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgIHJldHVybiB2cG9pbnQ7XG4gICAgICAgICAgfVxuICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBSRV9FWE5fSUQ6IFwiTm90X2ZvdW5kXCIsXG4gICAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgIH0pKTtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBwb2ludHM6IHBvaW50cyxcbiAgICAgICAgICBkaW06IGRpbVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiB0b0ROQSh2c3BhY2UsIG1hcCkge1xuICByZXR1cm4gRE5BJEZvcm1mb3JtLm1ha2VVbnNhZmUodnNwYWNlLnBvaW50cy5tYXAoQ3VycnkuX18xKG1hcCkpLnJldmVyc2UoKSk7XG59XG5cbnZhciBWU3BhY2UgPSB7XG4gIGdldFBvaW50czogZ2V0UG9pbnRzLFxuICBnZXREaW1lbnNpb246IGdldERpbWVuc2lvbixcbiAgbWFrZTogbWFrZSxcbiAgdG9ETkE6IHRvRE5BXG59O1xuXG5mdW5jdGlvbiBzaG93JDEoZGVwdGhPcHQsIHZtYXApIHtcbiAgdmFyIGRlcHRoID0gZGVwdGhPcHQgIT09IHVuZGVmaW5lZCA/IGRlcHRoT3B0IDogMDtcbiAgaWYgKHZtYXAuVEFHID09PSAvKiBDZWxsICovMCkge1xuICAgIHJldHVybiBcIjxcIiArIENhbGMkRm9ybWZvcm0uQ29uc3Quc2hvdyh2bWFwLl8wKSArIFwiPlwiO1xuICB9XG4gIHZhciBjb29yZHMgPSB2bWFwLl8wO1xuICB2YXIgbWF0Y2ggPSBCZWx0X0FycmF5LmdldChjb29yZHMsIDApO1xuICB2YXIgZGVwdGhNYXggPSBtYXRjaCAhPT0gdW5kZWZpbmVkICYmIG1hdGNoWzFdLlRBRyA9PT0gLyogQ2VsbCAqLzAgPyB0cnVlIDogZmFsc2U7XG4gIHZhciBiciA9IGRlcHRoTWF4ID8gXCJcIiA6IFwiXFxuXCI7XG4gIHZhciBpbmRlbnQgPSBkZXB0aE1heCA/IFwiXCIgOiBcIiAgXCI7XG4gIHJldHVybiBcIltcIiArIGJyICsgQmVsdF9BcnJheS5tYXAoY29vcmRzLCAoZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gaW5kZW50LnJlcGVhdChkZXB0aCArIDEgfCAwKSArIChDYWxjJEZvcm1mb3JtLkNvbnN0LnNob3cocGFyYW1bMF0pICsgXCI6IFwiICsgc2hvdyQxKGRlcHRoICsgMSB8IDAsIHBhcmFtWzFdKSk7XG4gICAgICAgICAgICAgICAgfSkpLmpvaW4oXCIsIFwiICsgYnIpICsgYnIgKyBpbmRlbnQucmVwZWF0KGRlcHRoKSArIFwiXVwiO1xufVxuXG5mdW5jdGlvbiBtYWtlVW5zYWZlX0NlbGwoYykge1xuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogQ2VsbCAqLzAsXG4gICAgICAgICAgXzA6IGNcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZVVuc2FmZV9NYXAoY29vcmRzKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgVEFHOiAvKiBNYXAgKi8xLFxuICAgICAgICAgIF8wOiBjb29yZHNcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gbWFrZSQxKHZzcGFjZSwgbWFwKSB7XG4gIHZhciBkaW0gPSB2c3BhY2UuZGltO1xuICB2YXIgYXV4ID0gZnVuY3Rpb24gKHBvaW50cywgcG9zKSB7XG4gICAgaWYgKHBvcyA+PSBkaW0pIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIFRBRzogLyogQ2VsbCAqLzAsXG4gICAgICAgICAgICAgIF8wOiBDdXJyeS5fMShtYXAsIENhbWxfYXJyYXkuZ2V0KHBvaW50cywgMCkpXG4gICAgICAgICAgICB9O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBUQUc6IC8qIE1hcCAqLzEsXG4gICAgICAgICAgICAgIF8wOiBCZWx0X0FycmF5Lm1hcChDYWxjJEZvcm1mb3JtLkNvbnN0LnRFbnVtKHVuZGVmaW5lZCwgdW5kZWZpbmVkKSwgKGZ1bmN0aW9uIChwb3NWYWwpIHtcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgbWF0Y2ggPSBCZWx0X0FycmF5LnBhcnRpdGlvbihwb2ludHMsIChmdW5jdGlvbiAodnApIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBDYW1sX2FycmF5LmdldCh2cCwgcG9zKSA9PT0gcG9zVmFsO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pKTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcG9zVmFsLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXV4KG1hdGNoWzBdLCBwb3MgKyAxIHwgMClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgIH07XG4gICAgfVxuICB9O1xuICByZXR1cm4gYXV4KHZzcGFjZS5wb2ludHMsIDApO1xufVxuXG5mdW5jdGlvbiBmcm9tRE5BKGRuYSkge1xuICB2YXIgZG5hQXJyID0gRE5BJEZvcm1mb3JtLnRvQXJyYXkoZG5hKTtcbiAgdmFyIGxlbiA9IE1hdGgubG9nKGRuYUFyci5sZW5ndGgpIC8gTWF0aC5sb2coNC4wKTtcbiAgdmFyIHZzcGFjZSA9IG1ha2UodW5kZWZpbmVkLCBKc19tYXRoLmZsb29yX2ludChsZW4pKTtcbiAgcmV0dXJuIG1ha2UkMSh2c3BhY2UsIChmdW5jdGlvbiAodnApIHtcbiAgICAgICAgICAgICAgICB2YXIgaGVpZ2h0ID0gdnNwYWNlLmRpbSAtIDEgfCAwO1xuICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IChETkEkRm9ybWZvcm0uZ2V0TGVuZ3RoKGRuYSkgLSAxIHwgMCkgLSAoXG4gICAgICAgICAgICAgICAgICBoZWlnaHQgPCAwID8gMCA6IEJlbHRfQXJyYXkucmVkdWNlV2l0aEluZGV4KHZwLCAwLCAoZnVuY3Rpb24gKHBvcywgYywgaSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHZhciBvZmZzZXQgPSBNYXRoLnBvdyg0LjAsIGhlaWdodCAtIGkgfCAwKSB8IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHBvcyArIE1hdGguaW11bChvZmZzZXQsIENhbGMkRm9ybWZvcm0uQ29uc3QudG9JbnQodW5kZWZpbmVkLCBjKSkgfCAwO1xuICAgICAgICAgICAgICAgICAgICAgICAgICB9KSlcbiAgICAgICAgICAgICAgICApIHwgMDtcbiAgICAgICAgICAgICAgICB2YXIgYyA9IEROQSRGb3JtZm9ybS5nZXQoZG5hLCBpbmRleCk7XG4gICAgICAgICAgICAgICAgaWYgKGMgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIGM7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICBSRV9FWE5fSUQ6IFwiTm90X2ZvdW5kXCIsXG4gICAgICAgICAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxudmFyIFZNYXAgPSB7XG4gIHNob3c6IHNob3ckMSxcbiAgbWFrZVVuc2FmZV9DZWxsOiBtYWtlVW5zYWZlX0NlbGwsXG4gIG1ha2VVbnNhZmVfTWFwOiBtYWtlVW5zYWZlX01hcCxcbiAgbWFrZTogbWFrZSQxLFxuICBmcm9tRE5BOiBmcm9tRE5BXG59O1xuXG5mdW5jdGlvbiBzaG93JDIodnRhYmxlKSB7XG4gIHJldHVybiBcIlwiO1xufVxuXG5mdW5jdGlvbiBtYWtlRnJvbUROQShkbmEpIHtcbiAgdmFyIGRuYUFyciA9IEROQSRGb3JtZm9ybS50b0FycmF5KGRuYSk7XG4gIHZhciBsZW4gPSBNYXRoLmxvZyhkbmFBcnIubGVuZ3RoKSAvIE1hdGgubG9nKDQuMCk7XG4gIHZhciB2c3BhY2UgPSBtYWtlKHVuZGVmaW5lZCwgSnNfbWF0aC5mbG9vcl9pbnQobGVuKSk7XG4gIHJldHVybiBKc19kaWN0LmZyb21BcnJheShCZWx0X0FycmF5LnppcEJ5KHZzcGFjZS5wb2ludHMsIGRuYUFyci5yZXZlcnNlKCksIChmdW5jdGlvbiAodnBvaW50LCByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QXNLZXkodnBvaW50KSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXN1bHRcbiAgICAgICAgICAgICAgICAgICAgICAgICAgXTtcbiAgICAgICAgICAgICAgICAgIH0pKSk7XG59XG5cbnZhciBWVGFibGUgPSB7XG4gIHNob3c6IHNob3ckMixcbiAgbWFrZUZyb21ETkE6IG1ha2VGcm9tRE5BXG59O1xuXG5leHBvcnQge1xuICBWUG9pbnQgLFxuICBWU3BhY2UgLFxuICBWTWFwICxcbiAgVlRhYmxlICxcbiAgXG59XG4vKiBETkEtRm9ybWZvcm0gTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBSZVNjcmlwdCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG5cbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBKc19leG4gZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvanNfZXhuLmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X0FycmF5IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2JlbHRfQXJyYXkuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfYXJyYXkgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvY2FtbF9hcnJheS5qc1wiO1xuaW1wb3J0ICogYXMgSGVscGVyJEZvcm1mb3JtIGZyb20gXCIuLi8uLi91dGlscy9IZWxwZXIuYnMuanNcIjtcblxuZnVuY3Rpb24gbigkJHZhcikge1xuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgXzA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRSAqLzIsXG4gICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogQW55ICovMixcbiAgICAgICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF8xOiB7XG4gICAgICAgICAgICAgICAgaGQ6IFt7XG4gICAgICAgICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgICAgICAgIF8wOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBGVmFyICovNCxcbiAgICAgICAgICAgICAgICAgICAgICAgIF8wOiAkJHZhclxuICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFRBRzogLyogU2VxUkUgKi8yLFxuICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IC8qIEV2ZW4gKi8wLFxuICAgICAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJbnN0ciAqLzBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXzE6IHtcbiAgICAgICAgICAgICAgICBoZDogW3tcbiAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgICAgICAgXzA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIEZWYXIgKi80LFxuICAgICAgICAgICAgICAgICAgICAgICAgXzA6ICQkdmFyXG4gICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gbSgkJHZhcikge1xuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgXzA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRSAqLzIsXG4gICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogQW55ICovMixcbiAgICAgICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF8xOiB7XG4gICAgICAgICAgICAgICAgaGQ6IFt7XG4gICAgICAgICAgICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgICAgICAgICAgIF8wOiAkJHZhclxuICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFICovMixcbiAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBFdmVuICovMCxcbiAgICAgICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIF8xOiB7XG4gICAgICAgICAgICAgICAgaGQ6IFt7XG4gICAgICAgICAgICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgICAgICAgICAgIF8wOiAkJHZhclxuICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiB1KCQkdmFyKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICBfMDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgICBfMDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkUgKi8yLFxuICAgICAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogQW55ICovMixcbiAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJbnN0ciAqLzBcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBfMToge1xuICAgICAgICAgICAgICAgICAgICBoZDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgICAgICAgICAgICBfMDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIEZWYXIgKi80LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiAkJHZhclxuICAgICAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBUQUc6IC8qIEZWYXIgKi80LFxuICAgICAgICAgICAgICAgICAgXzA6ICQkdmFyXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgICBfMDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkUgKi8yLFxuICAgICAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogRXZlbiAqLzAsXG4gICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXzE6IHtcbiAgICAgICAgICAgICAgICAgICAgaGQ6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIEZWYXIgKi80LFxuICAgICAgICAgICAgICAgICAgICAgICAgXzA6ICQkdmFyXG4gICAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgICAgICBfMDogW3tcbiAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIEZWYXIgKi80LFxuICAgICAgICAgICAgICAgICAgICAgIF8wOiAkJHZhclxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gaSgkJHZhcikge1xuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgXzA6IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgXzA6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFICovMixcbiAgICAgICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IC8qIEFueSAqLzIsXG4gICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXzE6IHtcbiAgICAgICAgICAgICAgICAgICAgaGQ6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIEZWYXIgKi80LFxuICAgICAgICAgICAgICAgICAgICAgICAgXzA6ICQkdmFyXG4gICAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgICAgICBfMDogW3tcbiAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIEZWYXIgKi80LFxuICAgICAgICAgICAgICAgICAgICAgIF8wOiAkJHZhclxuICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgXzA6IFtcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFICovMixcbiAgICAgICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IC8qIEV2ZW4gKi8wLFxuICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0luc3RyICovMFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF8xOiB7XG4gICAgICAgICAgICAgICAgICAgIGhkOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIF8wOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6ICQkdmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgICAgICAgICBfMDogJCR2YXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldChjLCAkJHZhcikge1xuICBzd2l0Y2ggKGMpIHtcbiAgICBjYXNlIC8qIE4gKi8wIDpcbiAgICAgICAgcmV0dXJuIG4oJCR2YXIpO1xuICAgIGNhc2UgLyogVSAqLzEgOlxuICAgICAgICByZXR1cm4gdSgkJHZhcik7XG4gICAgY2FzZSAvKiBJICovMiA6XG4gICAgICAgIHJldHVybiBpKCQkdmFyKTtcbiAgICBjYXNlIC8qIE0gKi8zIDpcbiAgICAgICAgcmV0dXJuIG0oJCR2YXIpO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIGZyb21WUG9pbnQodmFyc09wdCwgdnApIHtcbiAgdmFyIHZhcnMgPSB2YXJzT3B0ICE9PSB1bmRlZmluZWQgPyB2YXJzT3B0IDogSGVscGVyJEZvcm1mb3JtLmNvbW1vbl92YXJzO1xuICBpZiAodmFycy5sZW5ndGggPCB2cC5sZW5ndGgpIHtcbiAgICB0aHJvdyBKc19leG4ucmFpc2VSYW5nZUVycm9yKFwiSW5zdWZmaWNpZW50IHZhcmlhYmxlcyBpbiBnaXZlbiBsaXN0IVwiKTtcbiAgfVxuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgXzA6IEJlbHRfQXJyYXkubWFwV2l0aEluZGV4KHZwLCAoZnVuY3Rpb24gKGksIGMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiBbZ2V0KGMsIENhbWxfYXJyYXkuZ2V0KHZhcnMsIGkpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgfSkpXG4gICAgICAgIH07XG59XG5cbnZhciBJc29sYXRvciA9IHtcbiAgbjogbixcbiAgbTogbSxcbiAgdTogdSxcbiAgaTogaSxcbiAgZ2V0OiBnZXQsXG4gIGZyb21WUG9pbnQ6IGZyb21WUG9pbnRcbn07XG5cbmZ1bmN0aW9uIGFwcGx5KGZvcm0sIHB0bikge1xuICB2YXIgZm9ybSRwID0gQ3VycnkuXzEocHRuLCBmb3JtKTtcbiAgaWYgKGZvcm0kcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZvcm0kcDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZm9ybTtcbiAgfVxufVxuXG52YXIgSW1wbHkgPSB7XG4gIGFwcGx5OiBhcHBseVxufTtcblxuZnVuY3Rpb24gYXBwbHlMKGZvcm0sIHBhcmFtKSB7XG4gIHZhciBmb3JtJHAgPSBDdXJyeS5fMShwYXJhbVswXSwgZm9ybSk7XG4gIGlmIChmb3JtJHAgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmb3JtJHA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZvcm07XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlSKGZvcm0sIHBhcmFtKSB7XG4gIHZhciBmb3JtJHAgPSBDdXJyeS5fMShwYXJhbVsxXSwgZm9ybSk7XG4gIGlmIChmb3JtJHAgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmb3JtJHA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZvcm07XG4gIH1cbn1cblxudmFyIEVxdWl2ID0ge1xuICBhcHBseUw6IGFwcGx5TCxcbiAgYXBwbHlSOiBhcHBseVJcbn07XG5cbnZhciBQYXR0ZXJuID0ge1xuICBJbXBseTogSW1wbHksXG4gIEVxdWl2OiBFcXVpdlxufTtcblxuZnVuY3Rpb24gcmVmbCRwb3V0KGZvcm0pIHtcbiAgaWYgKGZvcm0ubGVuZ3RoICE9PSAxKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgbWF0Y2ggPSBmb3JtWzBdO1xuICBpZiAobWF0Y2guVEFHICE9PSAvKiBNYXJrICovMCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIG1hdGNoJDEgPSBtYXRjaC5fMDtcbiAgaWYgKG1hdGNoJDEubGVuZ3RoICE9PSAxKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgYSA9IG1hdGNoJDFbMF07XG4gIGlmIChhLlRBRyA9PT0gLyogTWFyayAqLzApIHtcbiAgICByZXR1cm4gYS5fMDtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gcmVmbCRwaW4oZm9ybSkge1xuICByZXR1cm4gW3tcbiAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICBfMDogW3tcbiAgICAgICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgICAgIF8wOiBmb3JtXG4gICAgICAgICAgICAgIH1dXG4gICAgICAgICAgfV07XG59XG5cbnZhciByZWZsID0gW1xuICByZWZsJHBpbixcbiAgcmVmbCRwb3V0XG5dO1xuXG52YXIgUHJpbUFsZyA9IHtcbiAgcmVmbDogcmVmbFxufTtcblxuZXhwb3J0IHtcbiAgSXNvbGF0b3IgLFxuICBQYXR0ZXJuICxcbiAgUHJpbUFsZyAsXG4gIFxufVxuLyogSGVscGVyLUZvcm1mb3JtIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgUmVTY3JpcHQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuXG5pbXBvcnQgKiBhcyBKc19kaWN0IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2pzX2RpY3QuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfTGlzdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0xpc3QuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfQXJyYXkgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvYmVsdF9BcnJheS5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vcHRpb24gZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvY2FtbF9vcHRpb24uanNcIjtcbmltcG9ydCAqIGFzIEROQSRGb3JtZm9ybSBmcm9tIFwiLi4vY2FsYy9ETkEuYnMuanNcIjtcbmltcG9ydCAqIGFzIENhbGMkRm9ybWZvcm0gZnJvbSBcIi4uL2NhbGMvQ2FsYy5icy5qc1wiO1xuaW1wb3J0ICogYXMgRXhwciRGb3JtZm9ybSBmcm9tIFwiLi4vZm9ybS9FeHByLmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBTZXFSRSRGb3JtZm9ybSBmcm9tIFwiLi4vY2FsYy9TZXFSRS5icy5qc1wiO1xuaW1wb3J0ICogYXMgVmFsdWUkRm9ybWZvcm0gZnJvbSBcIi4uL2Zvcm0vVmFsdWUuYnMuanNcIjtcblxudmFyIHRvVlBvaW50ID0gSnNfZGljdC52YWx1ZXM7XG5cbmZ1bmN0aW9uIGZyb21WUG9pbnQodnAsIHZhcnMpIHtcbiAgaWYgKHZwLmxlbmd0aCAhPT0gdmFycy5sZW5ndGgpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciBpbnRlcnByX2FyciA9IEJlbHRfQXJyYXkubWFwV2l0aEluZGV4KHZwLCAoZnVuY3Rpb24gKGksIGMpIHtcbiAgICAgICAgICByZXR1cm4gW1xuICAgICAgICAgICAgICAgICAgdmFyc1tpXSxcbiAgICAgICAgICAgICAgICAgIGNcbiAgICAgICAgICAgICAgICBdO1xuICAgICAgICB9KSk7XG4gIHJldHVybiBDYW1sX29wdGlvbi5zb21lKEpzX2RpY3QuZnJvbUFycmF5KGludGVycHJfYXJyKSk7XG59XG5cbmZ1bmN0aW9uIGludGVycHJldEV4cHIoZXhwciwgaW50cHIpIHtcbiAgcmV0dXJuIGV4cHIubWFwKGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgICAgICAgIHN3aXRjaCAoZm9ybS5UQUcgfCAwKSB7XG4gICAgICAgICAgICAgICAgY2FzZSAvKiBNYXJrICovMCA6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDogaW50ZXJwcmV0RXhwcihmb3JtLl8wLCBpbnRwcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjYXNlIC8qIENWYWwgKi8xIDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIENWYWwgKi8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiBmb3JtLl8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2FzZSAvKiBTZXFSRSAqLzIgOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkUgKi8yLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiBmb3JtLl8wLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8xOiBpbnRlcnByZXRTZXEoZm9ybS5fMSwgaW50cHIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2FzZSAvKiBVbmNsICovMyA6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBVbmNsICovMyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDogZm9ybS5fMFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNhc2UgLyogRlZhciAqLzQgOlxuICAgICAgICAgICAgICAgICAgICB2YXIgbWF5YmVWYWwgPSBKc19kaWN0LmdldChpbnRwciwgZm9ybS5fMCk7XG4gICAgICAgICAgICAgICAgICAgIGlmIChtYXliZVZhbCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogQ1ZhbCAqLzEsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDogbWF5YmVWYWxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2FzZSAvKiBGRG5hICovNSA6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBGRG5hICovNSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDogaW50ZXJwcmV0RmRuYShmb3JtLl8wLCBpbnRwcilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG59XG5cbmZ1bmN0aW9uIGludGVycHJldEZkbmEocGFyYW0sIGludHByKSB7XG4gIHZhciBmb3JtID0gcGFyYW0uZm9ybTtcbiAgdmFyIGZvcm1Db24gPSBmb3JtICE9PSB1bmRlZmluZWQgPyBpbnRlcnByZXRFeHByKGZvcm0sIGludHByKSA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBkbmE6IHBhcmFtLmRuYSxcbiAgICAgICAgICBmb3JtOiBmb3JtQ29uLFxuICAgICAgICAgIHZhcnM6IHVuZGVmaW5lZFxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBpbnRlcnByZXRTZXEoc2VxLCBpbnRwcikge1xuICByZXR1cm4gQmVsdF9MaXN0Lm1hcChzZXEsIChmdW5jdGlvbiAoZXhwcikge1xuICAgICAgICAgICAgICAgIHJldHVybiBpbnRlcnByZXRFeHByKGV4cHIsIGludHByKTtcbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiBldmFsRm9ybShmb3JtKSB7XG4gIHN3aXRjaCAoZm9ybS5UQUcgfCAwKSB7XG4gICAgY2FzZSAvKiBNYXJrICovMCA6XG4gICAgICAgIHZhciBleHByID0gZm9ybS5fMDtcbiAgICAgICAgaWYgKGV4cHIubGVuZ3RoICE9PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3QuaW52KGV2YWxFeHByKGV4cHIpKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgICAgIH1cbiAgICBjYXNlIC8qIENWYWwgKi8xIDpcbiAgICAgICAgcmV0dXJuIGZvcm0uXzA7XG4gICAgY2FzZSAvKiBTZXFSRSAqLzIgOlxuICAgICAgICByZXR1cm4gU2VxUkUkRm9ybWZvcm0uY2FsY1JFKGZvcm0uXzAsIG5lc3RlZEV2YWwoZm9ybS5fMSkpO1xuICAgIGNhc2UgLyogVW5jbCAqLzMgOlxuICAgICAgICByZXR1cm4gLyogVSAqLzE7XG4gICAgY2FzZSAvKiBGRG5hICovNSA6XG4gICAgICAgIHJldHVybiAvKiBOICovMDtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiBldmFsRXhwcihleHByKSB7XG4gIHJldHVybiBleHByLnJlZHVjZSgoZnVuY3Rpb24gKHZhbCwgZm9ybSkge1xuICAgICAgICAgICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LnJlbCh2YWwsIGV2YWxGb3JtKGZvcm0pKTtcbiAgICAgICAgICAgICAgfSksIC8qIE4gKi8wKTtcbn1cblxuZnVuY3Rpb24gbmVzdGVkRXZhbChzZXEpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBOQU1FOiBcIk5lc3RUb1JcIixcbiAgICAgICAgICBWQUw6IEJlbHRfTGlzdC5tYXAoc2VxLCBldmFsRXhwcilcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZXZhbFNlcShzZXEpIHtcbiAgaWYgKCFzZXEpIHtcbiAgICByZXR1cm4gLyogTSAqLzM7XG4gIH1cbiAgdmFyIHNlcSRwID0gc2VxLnRsO1xuICB2YXIgZXhwciA9IHNlcS5oZDtcbiAgaWYgKHNlcSRwKSB7XG4gICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3QuaW52KENhbGMkRm9ybWZvcm0uQ29uc3QucmVsKGV2YWxFeHByKGV4cHIpLCBldmFsU2VxKHNlcSRwKSkpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LmludihldmFsRXhwcihleHByKSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW50ZXJFdmFsKGV4cHIsIGludHByKSB7XG4gIHJldHVybiBldmFsRXhwcihpbnRlcnByZXRFeHByKGV4cHIsIGludHByKSk7XG59XG5cbmZ1bmN0aW9uIGV2YWxBbGwoZXhwcikge1xuICB2YXIgdmFycyA9IEV4cHIkRm9ybWZvcm0uRlZBUi5nZXRWYXJzKGV4cHIpO1xuICB2YXIgdm51bSA9IHZhcnMubGVuZ3RoO1xuICB2YXIgdnNwYWNlID0gVmFsdWUkRm9ybWZvcm0uVlNwYWNlLm1ha2UodW5kZWZpbmVkLCB2bnVtKTtcbiAgdmFyIGRuYSA9IEROQSRGb3JtZm9ybS5tYWtlVW5zYWZlKFZhbHVlJEZvcm1mb3JtLlZTcGFjZS5nZXRQb2ludHModnNwYWNlKS5tYXAoZnVuY3Rpb24gKHZwb2ludCkge1xuICAgICAgICAgICAgICB2YXIgaW50ZXJwciA9IGZyb21WUG9pbnQodnBvaW50LCB2YXJzKTtcbiAgICAgICAgICAgICAgaWYgKGludGVycHIgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgIHJldHVybiBldmFsRXhwcihpbnRlcnByZXRFeHByKGV4cHIsIENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24oaW50ZXJwcikpKTtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgfSkucmV2ZXJzZSgpKTtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBkbmE6IGRuYSxcbiAgICAgICAgICBmb3JtOiBleHByLFxuICAgICAgICAgIHZhcnM6IHZhcnNcbiAgICAgICAgfTtcbn1cblxudmFyIEludGVycHIgPSB7XG4gIHRvVlBvaW50OiB0b1ZQb2ludCxcbiAgZnJvbVZQb2ludDogZnJvbVZQb2ludCxcbiAgaW50ZXJwcmV0OiBpbnRlcnByZXRFeHByXG59O1xuXG52YXIgJCRldmFsID0gZXZhbEV4cHI7XG5cbmV4cG9ydCB7XG4gIEludGVycHIgLFxuICAkJGV2YWwgLFxuICBldmFsU2VxICxcbiAgaW50ZXJFdmFsICxcbiAgZXZhbEFsbCAsXG4gIFxufVxuLyogRE5BLUZvcm1mb3JtIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgUmVTY3JpcHQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9MaXN0IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2JlbHRfTGlzdC5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9leGNlcHRpb25zIGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2NhbWxfZXhjZXB0aW9ucy5qc1wiO1xuXG52YXIgVW5yZWFjaGFibGUgPSAvKiBAX19QVVJFX18gKi9DYW1sX2V4Y2VwdGlvbnMuY3JlYXRlKFwiSGVscGVyLUZvcm1mb3JtLlVucmVhY2hhYmxlXCIpO1xuXG5mdW5jdGlvbiBjbGVhblN0cihzdHIpIHtcbiAgcmV0dXJuIHN0cjtcbn1cblxuZnVuY3Rpb24gaGFzRGVjaW1hbCh4KSB7XG4gIHJldHVybiAoeCB8IDApIDwgeDtcbn1cblxuZnVuY3Rpb24gc2hvdyhwYXJpdHkpIHtcbiAgc3dpdGNoIChwYXJpdHkpIHtcbiAgICBjYXNlIC8qIEV2ZW4gKi8wIDpcbiAgICAgICAgcmV0dXJuIFwiMnJcIjtcbiAgICBjYXNlIC8qIE9kZCAqLzEgOlxuICAgICAgICByZXR1cm4gXCIycisxXCI7XG4gICAgY2FzZSAvKiBBbnkgKi8yIDpcbiAgICAgICAgcmV0dXJuIFwiXCI7XG4gICAgXG4gIH1cbn1cblxudmFyIFBhcml0eSA9IHtcbiAgc2hvdzogc2hvd1xufTtcblxuZnVuY3Rpb24gcHJlcGVuZFRvQWxsKGwsIHNlcCkge1xuICBpZiAobCkge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZDogc2VwLFxuICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgaGQ6IGwuaGQsXG4gICAgICAgICAgICAgIHRsOiBwcmVwZW5kVG9BbGwobC50bCwgc2VwKVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnRlcnNwZXJzZShsLCBzZXApIHtcbiAgaWYgKGwpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IGwuaGQsXG4gICAgICAgICAgICB0bDogcHJlcGVuZFRvQWxsKGwudGwsIHNlcClcbiAgICAgICAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW50ZXJjYWxhdGUobDEsIGwyKSB7XG4gIHJldHVybiBCZWx0X0xpc3QuZmxhdHRlbihpbnRlcnNwZXJzZShsMSwgbDIpKTtcbn1cblxuZnVuY3Rpb24gam9pbihsKSB7XG4gIGlmIChsKSB7XG4gICAgcmV0dXJuIGwuaGQgKyBqb2luKGwudGwpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIlwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGpvaW5XaXRoKGwsIHNlcCkge1xuICByZXR1cm4gam9pbihpbnRlcnNwZXJzZShsLCBzZXApKTtcbn1cblxudmFyIExpc3RFeHRlbnNpb25zID0ge1xuICBwcmVwZW5kVG9BbGw6IHByZXBlbmRUb0FsbCxcbiAgaW50ZXJzcGVyc2U6IGludGVyc3BlcnNlLFxuICBpbnRlcmNhbGF0ZTogaW50ZXJjYWxhdGUsXG4gIGpvaW46IGpvaW4sXG4gIGpvaW5XaXRoOiBqb2luV2l0aFxufTtcblxuZnVuY3Rpb24gZm1hcChsLCBmbikge1xuICBpZiAobCkge1xuICAgIHJldHVybiBCZWx0X0xpc3QuY29uY2F0KEN1cnJ5Ll8xKGZuLCBsLmhkKSwgZm1hcChsLnRsLCBmbikpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbn1cblxuZnVuY3Rpb24gbGlmdE0yKG1mMiwgbWEsIG1iKSB7XG4gIHJldHVybiBmbWFwKG1hLCAoZnVuY3Rpb24gKHgxKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZtYXAobWIsIChmdW5jdGlvbiAoeDIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiBDdXJyeS5fMihtZjIsIHgxLCB4MiksXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIGNhcnRlc1Byb2QobCwgZGltKSB7XG4gIHZhciBmbiA9IGZ1bmN0aW9uIChsLCBzZXEsIG4pIHtcbiAgICBpZiAobiA+IDApIHtcbiAgICAgIHJldHVybiBmbWFwKGwsIChmdW5jdGlvbiAoeCkge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZm4obCwgQmVsdF9MaXN0LmNvbmNhdChzZXEsIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhkOiB4LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pLCBuIC0gMSB8IDApO1xuICAgICAgICAgICAgICAgICAgfSkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICBoZDogc2VxLFxuICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICB9O1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGZuKGwsIC8qIFtdICovMCwgZGltKTtcbn1cblxudmFyIExpc3RNb25hZHMgPSB7XG4gIGZtYXA6IGZtYXAsXG4gIGxpZnRNMjogbGlmdE0yLFxuICBjYXJ0ZXNQcm9kOiBjYXJ0ZXNQcm9kXG59O1xuXG52YXIgY29tbW9uX3ZhcnMgPSBcImFiY2RlZmdoaWprbG1ub3BxcnN0dXZ3eHl6XCIuc3BsaXQoXCJcIik7XG5cbmV4cG9ydCB7XG4gIFVucmVhY2hhYmxlICxcbiAgY2xlYW5TdHIgLFxuICBoYXNEZWNpbWFsICxcbiAgUGFyaXR5ICxcbiAgTGlzdEV4dGVuc2lvbnMgLFxuICBMaXN0TW9uYWRzICxcbiAgY29tbW9uX3ZhcnMgLFxuICBcbn1cbi8qIGNvbW1vbl92YXJzIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgUmVTY3JpcHQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuXG5cbnZhciBwYWRTdGFydCA9ICgoc3RyLCBtYXhMZW5ndGgsIGZpbGxTdHJpbmcpID0+IHN0ci5wYWRTdGFydChtYXhMZW5ndGgsIGZpbGxTdHJpbmcpKTtcblxuZXhwb3J0IHtcbiAgcGFkU3RhcnQgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBUaGUgbW9kdWxlIGNhY2hlXG52YXIgX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fID0ge307XG5cbi8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG5mdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cdC8vIENoZWNrIGlmIG1vZHVsZSBpcyBpbiBjYWNoZVxuXHR2YXIgY2FjaGVkTW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXTtcblx0aWYgKGNhY2hlZE1vZHVsZSAhPT0gdW5kZWZpbmVkKSB7XG5cdFx0cmV0dXJuIGNhY2hlZE1vZHVsZS5leHBvcnRzO1xuXHR9XG5cdC8vIENyZWF0ZSBhIG5ldyBtb2R1bGUgKGFuZCBwdXQgaXQgaW50byB0aGUgY2FjaGUpXG5cdHZhciBtb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdID0ge1xuXHRcdC8vIG5vIG1vZHVsZS5pZCBuZWVkZWRcblx0XHQvLyBubyBtb2R1bGUubG9hZGVkIG5lZWRlZFxuXHRcdGV4cG9ydHM6IHt9XG5cdH07XG5cblx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG5cdF9fd2VicGFja19tb2R1bGVzX19bbW9kdWxlSWRdKG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG5cdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG5cdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbn1cblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgZGVmaW5pdGlvbikge1xuXHRmb3IodmFyIGtleSBpbiBkZWZpbml0aW9uKSB7XG5cdFx0aWYoX193ZWJwYWNrX3JlcXVpcmVfXy5vKGRlZmluaXRpb24sIGtleSkgJiYgIV9fd2VicGFja19yZXF1aXJlX18ubyhleHBvcnRzLCBrZXkpKSB7XG5cdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywga2V5LCB7IGVudW1lcmFibGU6IHRydWUsIGdldDogZGVmaW5pdGlvbltrZXldIH0pO1xuXHRcdH1cblx0fVxufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmosIHByb3ApIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApOyB9IiwiLy8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJpbXBvcnQgKiBhcyBDYWxjIGZyb20gJy4vY29yZS9jYWxjL0NhbGMuYnMuanMnO1xuaW1wb3J0ICogYXMgRE5BIGZyb20gJy4vY29yZS9jYWxjL0ROQS5icy5qcyc7XG5pbXBvcnQgKiBhcyBTZXFSRSBmcm9tICcuL2NvcmUvY2FsYy9TZXFSRS5icy5qcyc7XG5cbmltcG9ydCAqIGFzIEV4cHIgZnJvbSAnLi9jb3JlL2Zvcm0vRXhwci5icy5qcyc7XG5pbXBvcnQgKiBhcyBGb3JtdWxhIGZyb20gJy4vY29yZS9mb3JtL0Zvcm11bGEuYnMuanMnO1xuaW1wb3J0ICogYXMgVmFsdWUgZnJvbSAnLi9jb3JlL2Zvcm0vVmFsdWUuYnMuanMnO1xuXG5pbXBvcnQgKiBhcyBBbGcgZnJvbSAnLi9jb3JlL2xvZ2ljL0FsZy5icy5qcyc7XG5pbXBvcnQgKiBhcyBFdmFsIGZyb20gJy4vY29yZS9sb2dpYy9FdmFsLmJzLmpzJztcblxuLy8gaW1wb3J0ICogYXMgVGVzdCBmcm9tICcuL1Rlc3QuYnMuanMnO1xuXG5leHBvcnQgZGVmYXVsdCB7IENhbGMsIEROQSwgU2VxUkUsICBFeHByLCBGb3JtdWxhLCBWYWx1ZSwgIEFsZywgRXZhbCB9O1xuIl0sInNvdXJjZVJvb3QiOiIifQ==