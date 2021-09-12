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
/* harmony export */   "Nested": function() { return /* binding */ Nested; },
/* harmony export */   "jsConst": function() { return /* binding */ jsConst; }
/* harmony export */ });
/* harmony import */ var rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! rescript/lib/es6/curry.js */ "./node_modules/rescript/lib/es6/curry.js");
/* harmony import */ var rescript_lib_es6_js_list_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! rescript/lib/es6/js_list.js */ "./node_modules/rescript/lib/es6/js_list.js");
/* harmony import */ var rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rescript/lib/es6/belt_List.js */ "./node_modules/rescript/lib/es6/belt_List.js");
// Generated by ReScript, PLEASE EDIT WITH CARE





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

var jsConst = {
  tEnum: tEnum,
  show: show,
  tFromStr: tFromStr,
  inv: inv,
  rel: rel
};

var Const = {
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
/* harmony import */ var _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../../utils/Helper.bs.js */ "./src/utils/Helper.bs.js");
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
  var reMark = param.interpr ? "@'" : "@";
  return (
          param.unmarked ? "_" : ""
        ) + match[1] + reMark + match[0];
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
            RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
            Error: new Error()
          };
    }
    throw {
          RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
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
          RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
          Error: new Error()
        };
  }
  if (unmarked) {
    if (nestedC$2) {
      var match$2 = nestedC$2.hd;
      if (match$2 !== 0) {
        if (match$2 >= 3) {
          throw {
                RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
                Error: new Error()
              };
        }
        var match$3 = nestedC$2.tl;
        if (!match$3) {
          if (reEntryPar === /* Even */0) {
            return /* I */2;
          } else {
            return /* U */1;
          }
        }
        if (match$3.hd !== 0) {
          throw {
                RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
                Error: new Error()
              };
        }
        if (!match$3.tl) {
          return /* U */1;
        }
        throw {
              RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
              Error: new Error()
            };
      }
      var match$4 = nestedC$2.tl;
      if (match$4) {
        if ((match$4.hd - 1 >>> 0) > 1) {
          throw {
                RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
                Error: new Error()
              };
        }
        var match$5 = match$4.tl;
        if (!match$5) {
          return /* I */2;
        }
        if (match$5.hd !== 0) {
          throw {
                RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
                Error: new Error()
              };
        }
        if (match$5.tl) {
          throw {
                RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
                Error: new Error()
              };
        }
        if (reEntryPar === /* Even */0) {
          return /* U */1;
        } else {
          return /* I */2;
        }
      }
      throw {
            RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
            Error: new Error()
          };
    }
    throw {
          RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
          Error: new Error()
        };
  }
  if (nestedC$2) {
    var match$6 = nestedC$2.hd;
    if (match$6 !== 0) {
      if (match$6 >= 3) {
        throw {
              RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
              Error: new Error()
            };
      }
      var match$7 = nestedC$2.tl;
      if (!match$7) {
        if (reEntryPar === /* Even */0) {
          return /* U */1;
        } else {
          return /* I */2;
        }
      }
      if (match$7.hd !== 0) {
        throw {
              RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
              Error: new Error()
            };
      }
      if (!match$7.tl) {
        return /* U */1;
      }
      throw {
            RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
            Error: new Error()
          };
    }
    var match$8 = nestedC$2.tl;
    if (match$8) {
      if ((match$8.hd - 1 >>> 0) > 1) {
        throw {
              RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
              Error: new Error()
            };
      }
      var match$9 = match$8.tl;
      if (!match$9) {
        return /* I */2;
      }
      if (match$9.hd !== 0) {
        throw {
              RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
              Error: new Error()
            };
      }
      if (match$9.tl) {
        throw {
              RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
              Error: new Error()
            };
      }
      if (reEntryPar === /* Even */0) {
        return /* I */2;
      } else {
        return /* U */1;
      }
    }
    throw {
          RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
          Error: new Error()
        };
  }
  throw {
        RE_EXN_ID: _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_4__.Unreachable,
        Error: new Error()
      };
}

var recInstr = /* RecInstr */0;

var recIdent = /* RecIdent */1;


/* Helper-Formform Not a pure module */


/***/ }),

/***/ "./src/core/form/Expr.bs.js":
/*!**********************************!*\
  !*** ./src/core/form/Expr.bs.js ***!
  \**********************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
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

function showForm(sortNMUIOpt, form) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  switch (form.TAG | 0) {
    case /* Mark */0 :
        return "(" + showExpr(sortNMUI, form._0) + ")";
    case /* CVal */1 :
        return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_7__.Const.show(form._0);
    case /* SeqRE */2 :
        return "{" + showSeq(sortNMUI, form._1) + " " + _calc_SeqRE_bs_js__WEBPACK_IMPORTED_MODULE_8__.showSig(form._0) + "}";
    case /* Uncl */3 :
        var lbl = form._0;
        return "/" + _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_9__.cleanStr(lbl) + "/";
    case /* FVar */4 :
        var lbl$1 = form._0;
        if (lbl$1.length === 1) {
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
  return _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_9__.ListExtensions.joinWith(rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_4__.map(seq, (function (expr) {
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


/* DNA-Formform Not a pure module */


/***/ }),

/***/ "./src/core/form/Formula.bs.js":
/*!*************************************!*\
  !*** ./src/core/form/Formula.bs.js ***!
  \*************************************/
/***/ (function(__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Lexer": function() { return /* binding */ Lexer; },
/* harmony export */   "Parser": function() { return /* binding */ Parser; }
/* harmony export */ });
// Generated by ReScript, PLEASE EDIT WITH CARE


var Lexer = {};

function parse(fm) {
  return [];
}

var Parser = {
  parse: parse
};


/* No side effect */


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
/* harmony import */ var rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rescript/lib/es6/belt_List.js */ "./node_modules/rescript/lib/es6/belt_List.js");
/* harmony import */ var rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! rescript/lib/es6/belt_Array.js */ "./node_modules/rescript/lib/es6/belt_Array.js");
/* harmony import */ var _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../calc/DNA.bs.js */ "./src/core/calc/DNA.bs.js");
/* harmony import */ var _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../calc/Calc.bs.js */ "./src/core/calc/Calc.bs.js");
/* harmony import */ var _utils_JsRaw_bs_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../../utils/JsRaw.bs.js */ "./src/utils/JsRaw.bs.js");
/* harmony import */ var _utils_Helper_bs_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../utils/Helper.bs.js */ "./src/utils/Helper.bs.js");
// Generated by ReScript, PLEASE EDIT WITH CARE












function show(vp) {
  return "[" + rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_4__.toArray(rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_4__.map(vp, (function (c) {
                      return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_7__.Const.show(c);
                    }))).join(",") + "]";
}

function showAsKey(vp) {
  return rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_4__.toArray(rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_4__.map(vp, (function (c) {
                      return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_7__.Const.showAsKey(c);
                    }))).join("");
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
    return rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_4__.fromArray(maybe_vpoint.map(function (v) {
                    return v;
                  }));
  }
  
}

var VPoint = {
  show: show,
  showAsKey: showAsKey,
  tFromStr: tFromStr
};

function toArray(vspace) {
  return vspace;
}

function make(sortNMUIOpt, dim) {
  var sortNMUI = sortNMUIOpt !== undefined ? sortNMUIOpt : false;
  var resolution = rescript_lib_es6_js_math_js__WEBPACK_IMPORTED_MODULE_2__.floor_int(Math.pow(4.0, dim));
  return rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_5__.makeBy(resolution, (function (i) {
                var vp_str = _utils_JsRaw_bs_js__WEBPACK_IMPORTED_MODULE_8__.padStart(i.toString(4), dim, "0");
                var vvec = tFromStr(sortNMUI, vp_str);
                if (vvec !== undefined) {
                  return vvec;
                }
                throw {
                      RE_EXN_ID: "Not_found",
                      Error: new Error()
                    };
              }));
}

function toDNA(vspc, map) {
  return _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_6__.makeUnsafe(vspc.map(rescript_lib_es6_curry_js__WEBPACK_IMPORTED_MODULE_0__.__1(map)).reverse());
}

var VMap = {};

function show$1(vtable) {
  return "";
}

function makeFromDNA(dna) {
  var dnaArr = _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_6__.toArray(dna);
  var len = Math.log(dnaArr.length) / Math.log(4.0);
  var vspc = make(undefined, rescript_lib_es6_js_math_js__WEBPACK_IMPORTED_MODULE_2__.floor_int(len));
  return rescript_lib_es6_js_dict_js__WEBPACK_IMPORTED_MODULE_1__.fromArray(rescript_lib_es6_belt_Array_js__WEBPACK_IMPORTED_MODULE_5__.zipBy(vspc, dnaArr.reverse(), (function (vp, result) {
                    return [
                            showAsKey(vp),
                            result
                          ];
                  })));
}

var VTable = {
  show: show$1,
  makeFromDNA: makeFromDNA
};

var VSpace = {
  toArray: toArray,
  make: make,
  toDNA: toDNA
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
/* harmony import */ var rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rescript/lib/es6/belt_List.js */ "./node_modules/rescript/lib/es6/belt_List.js");
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
  if (vars.length < rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__.length(vp)) {
    throw rescript_lib_es6_js_exn_js__WEBPACK_IMPORTED_MODULE_1__.raiseRangeError("Insufficient variables in given list!");
  }
  return {
          TAG: /* Mark */0,
          _0: rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__.toArray(rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_2__.mapWithIndex(vp, (function (i, c) {
                      return {
                              TAG: /* Mark */0,
                              _0: [get(c, rescript_lib_es6_caml_array_js__WEBPACK_IMPORTED_MODULE_3__.get(vars, i))]
                            };
                    })))
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
/* harmony import */ var rescript_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rescript/lib/es6/caml_option.js */ "./node_modules/rescript/lib/es6/caml_option.js");
/* harmony import */ var _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../calc/DNA.bs.js */ "./src/core/calc/DNA.bs.js");
/* harmony import */ var _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../calc/Calc.bs.js */ "./src/core/calc/Calc.bs.js");
/* harmony import */ var _form_Expr_bs_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../form/Expr.bs.js */ "./src/core/form/Expr.bs.js");
/* harmony import */ var _calc_SeqRE_bs_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../calc/SeqRE.bs.js */ "./src/core/calc/SeqRE.bs.js");
/* harmony import */ var _form_Value_bs_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../form/Value.bs.js */ "./src/core/form/Value.bs.js");
// Generated by ReScript, PLEASE EDIT WITH CARE










function toVPoint(interpr) {
  return rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_1__.fromArray(rescript_lib_es6_js_dict_js__WEBPACK_IMPORTED_MODULE_0__.values(interpr));
}

function fromVPoint(vp, vars) {
  if (rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_1__.length(vp) !== vars.length) {
    return ;
  }
  var interpr_arr = rescript_lib_es6_belt_List_js__WEBPACK_IMPORTED_MODULE_1__.mapWithIndex(vp, (function (i, c) {
          return [
                  vars[i],
                  c
                ];
        }));
  return rescript_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_2__.some(rescript_lib_es6_js_dict_js__WEBPACK_IMPORTED_MODULE_0__.fromList(interpr_arr));
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
          return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_4__.Const.inv(evalExpr(expr));
        } else {
          return /* M */3;
        }
    case /* CVal */1 :
        return form._0;
    case /* SeqRE */2 :
        return _calc_SeqRE_bs_js__WEBPACK_IMPORTED_MODULE_6__.calcRE(form._0, nestedEval(form._1));
    case /* Uncl */3 :
        return /* U */1;
    case /* FDna */5 :
        return /* N */0;
    
  }
}

function evalExpr(expr) {
  return expr.reduce((function (val, form) {
                return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_4__.Const.rel(val, evalForm(form));
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
    return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_4__.Const.inv(_calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_4__.Const.rel(evalExpr(expr), evalSeq(seq$p)));
  } else {
    return _calc_Calc_bs_js__WEBPACK_IMPORTED_MODULE_4__.Const.inv(evalExpr(expr));
  }
}

function interEval(expr, intpr) {
  return evalExpr(interpretExpr(expr, intpr));
}

function evalAll(expr) {
  var vars = _form_Expr_bs_js__WEBPACK_IMPORTED_MODULE_5__.FVAR.getVars(expr);
  var vnum = vars.length;
  var vspace = _form_Value_bs_js__WEBPACK_IMPORTED_MODULE_7__.VSpace.make(undefined, vnum);
  var dna = _calc_DNA_bs_js__WEBPACK_IMPORTED_MODULE_3__.makeUnsafe(_form_Value_bs_js__WEBPACK_IMPORTED_MODULE_7__.VSpace.toArray(vspace).map(function (vpoint) {
              var interpr = fromVPoint(vpoint, vars);
              if (interpr !== undefined) {
                return evalExpr(interpretExpr(expr, rescript_lib_es6_caml_option_js__WEBPACK_IMPORTED_MODULE_2__.valFromOption(interpr)));
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
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24iLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9iZWx0X0FycmF5LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvYmVsdF9JZC5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2JlbHRfSW50LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvYmVsdF9MaXN0LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvYmVsdF9TZXQuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9iZWx0X1NldERpY3QuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9iZWx0X1NvcnRBcnJheS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2JlbHRfaW50ZXJuYWxBVkxzZXQuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9jYW1sLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvY2FtbF9hcnJheS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2NhbWxfZXhjZXB0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2NhbWxfanNfZXhjZXB0aW9ucy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2NhbWxfb2JqLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvY2FtbF9vcHRpb24uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9jdXJyeS5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2pzX2RpY3QuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9qc19leG4uanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9qc19pbnQuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9ub2RlX21vZHVsZXMvcmVzY3JpcHQvbGliL2VzNi9qc19saXN0LmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vbm9kZV9tb2R1bGVzL3Jlc2NyaXB0L2xpYi9lczYvanNfbWF0aC5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL25vZGVfbW9kdWxlcy9yZXNjcmlwdC9saWIvZXM2L2pzX3ZlY3Rvci5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb3JlL2NhbGMvQ2FsYy5icy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb3JlL2NhbGMvRE5BLmJzLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL2NvcmUvY2FsYy9TZXFSRS5icy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb3JlL2Zvcm0vRXhwci5icy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb3JlL2Zvcm0vRm9ybXVsYS5icy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy9jb3JlL2Zvcm0vVmFsdWUuYnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvY29yZS9sb2dpYy9BbGcuYnMuanMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vLi9zcmMvY29yZS9sb2dpYy9FdmFsLmJzLmpzIiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL3V0aWxzL0hlbHBlci5icy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS8uL3NyYy91dGlscy9Kc1Jhdy5icy5qcyIsIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vZm9ybWZvcm0vd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9mb3JtZm9ybS93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL2Zvcm1mb3JtLy4vc3JjL21haW5SQVcuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsQ0FBQztBQUNELE87Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQ1JrQztBQUNFO0FBQ0k7QUFDUTs7QUFFaEQ7QUFDQTtBQUNBLFdBQVcsaURBQWdCO0FBQzNCOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQSxnQkFBZ0IsU0FBUztBQUN6Qixz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QTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxlQUFlLGlEQUFnQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQXlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxrQkFBa0IsMENBQVM7QUFDM0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwQ0FBUztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDBDQUFTO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG9CQUFvQiwwQ0FBUztBQUM3Qjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsRUFBRSwwREFBeUI7QUFDM0I7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsNEJBQTRCLFFBQVE7QUFDcEM7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwQ0FBUztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztB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Q0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDBDQUFTO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRCQUE0QiwwQ0FBUztBQUNyQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFlBQVksMERBQXlCO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHNCQUFzQiwwQ0FBUztBQUMvQjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHVCQUF1QiwwQ0FBUztBQUNoQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQUVBOztBQUVBOztBQTRGQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUN0K0NvQztBQUNjOztBQUVsRDtBQUNBO0FBQ0E7QUFDQTtBQUNBLGdC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QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNLHNEQUFxQjtBQUMzQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxVQUFVLHNEQUFxQjtBQUMvQjtBQUNBLFNBQVM7QUFDVCxVQUFVLHNEQUFxQjtBQUMvQjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQXFCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDRFQUE0RSwwQ0FBUztBQUNyRjs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxnRkFBZ0YsMENBQVM7QUFDekY7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNULFVBQVUsc0RBQXFCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLElBQUksc0RBQXFCO0FBQ3pCO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDJFQUEyRSwwQ0FBUztBQUNwRjs7QUFFQTtBQUNBLGdCQUFnQixTQUFTO0FBQ3pCO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsaUNBQWlDLDBDQUFTO0FBQzFDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSwwQkFBMEIsMENBQVM7QUFDbkM7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxXQUFXO0FBQ1g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsU0FBUztBQUNUO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQ0FBc0MsMENBQVM7QUFDL0M7O0FBRUE7O0FBRUE7O0FBc0JDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDMWFvQztBQUNZO0FBQ007O0FBRXREO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxpREFBZ0I7QUFDM0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0EsV0FBVyxpREFBZ0I7QUFDM0I7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxxQkFBcUIsMENBQVM7QUFDOUI7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMEJBQTBCLDBDQUFTO0FBQ25DOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsbUJBQW1CLDBDQUFTO0FBQzVCOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0Esa0JBQWtCLDBDQUFTO0FBQzNCOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLDZCQUE2QiwwQ0FBUztBQUN0Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLHdCQUF3QiwwQ0FBUztBQUNqQzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQSxzQkFBc0IsMENBQVM7QUFDL0I7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsMkJBQTJCLDBDQUFTO0FBQ3BDOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLGlEQUFnQjtBQUM3QjtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsYUFBYSxxRUFBb0M7QUFDakQ7QUFDQSxTQUFTO0FBQ1Q7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBLG1CQUFtQixTQUFTO0FBQzVCO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTs7QUFxREM7QUFDRDs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDejZCQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBMEJDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuTkE7QUFD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QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsS0FBSztBQUNMO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxhQUFhLHlEQUF3QjtBQUNyQyxLQUFLO0FBQ0w7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBa0JDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUMxWkE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTs7QUFZQztBQUNEOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDcEY4Qzs7QUFFOUM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQSxZQUFZLCtDQUFjO0FBQzFCLHVCQUF1QiwrQ0FBYztBQUNyQztBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEdBQUc7QUFDSDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsR0FBRztBQUNIO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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QTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLEtBQUs7QUFDTDtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxZQUFZLDBEQUF5QjtBQUNyQztBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0EsU0FBUyxpREFBZ0IsQ0FBQywrQ0FBYztBQUN4Qzs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtB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QW1DO0FBQ25DLG1CQUFtQjtBQUNuQixLQUFLO0FBQ0w7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBOztBQVdDO0FBQ0Q7Ozs7Ozs7Ozs7Ozs7OztBQ3pJQTs7O0FBR0E7O0FBS0M7QUFDRDs7Ozs7OztVQ1RBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0Esd0NBQXdDLHlDQUF5QztXQUNqRjtXQUNBO1dBQ0EsRTs7Ozs7V0NQQSw2Q0FBNkMsd0RBQXdELEU7Ozs7O1dDQXJHO1dBQ0E7V0FDQTtXQUNBLHNEQUFzRCxrQkFBa0I7V0FDeEU7V0FDQSwrQ0FBK0MsY0FBYztXQUM3RCxFOzs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FDTitDO0FBQ0Y7QUFDSTs7QUFFRjtBQUNNO0FBQ0o7O0FBRUg7QUFDRTs7QUFFaEQ7O0FBRUEsK0RBQWUsQ0FBQyxLQUFLLHlEQUFLLDBEQUFPLDREQUFPLDZEQUFTLDhEQUFPLDJEQUFNLDBEQUFNLHVEQUFFLEVBQUMiLCJmaWxlIjoiZm9ybWZvcm1SQVcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIoZnVuY3Rpb24gd2VicGFja1VuaXZlcnNhbE1vZHVsZURlZmluaXRpb24ocm9vdCwgZmFjdG9yeSkge1xuXHRpZih0eXBlb2YgZXhwb3J0cyA9PT0gJ29iamVjdCcgJiYgdHlwZW9mIG1vZHVsZSA9PT0gJ29iamVjdCcpXG5cdFx0bW9kdWxlLmV4cG9ydHMgPSBmYWN0b3J5KCk7XG5cdGVsc2UgaWYodHlwZW9mIGRlZmluZSA9PT0gJ2Z1bmN0aW9uJyAmJiBkZWZpbmUuYW1kKVxuXHRcdGRlZmluZShbXSwgZmFjdG9yeSk7XG5cdGVsc2UgaWYodHlwZW9mIGV4cG9ydHMgPT09ICdvYmplY3QnKVxuXHRcdGV4cG9ydHNbXCJmb3JtZm9ybVwiXSA9IGZhY3RvcnkoKTtcblx0ZWxzZVxuXHRcdHJvb3RbXCJmb3JtZm9ybVwiXSA9IGZhY3RvcnkoKTtcbn0pKHRoaXMsIGZ1bmN0aW9uKCkge1xucmV0dXJuICIsIlxuXG5pbXBvcnQgKiBhcyBDYW1sIGZyb20gXCIuL2NhbWwuanNcIjtcbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCIuL2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBKc19tYXRoIGZyb20gXCIuL2pzX21hdGguanNcIjtcbmltcG9ydCAqIGFzIENhbWxfb3B0aW9uIGZyb20gXCIuL2NhbWxfb3B0aW9uLmpzXCI7XG5cbmZ1bmN0aW9uIGdldChhcnIsIGkpIHtcbiAgaWYgKGkgPj0gMCAmJiBpIDwgYXJyLmxlbmd0aCkge1xuICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKGFycltpXSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGdldEV4bihhcnIsIGkpIHtcbiAgaWYgKCEoaSA+PSAwICYmIGkgPCBhcnIubGVuZ3RoKSkge1xuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IFwiQXNzZXJ0X2ZhaWx1cmVcIixcbiAgICAgICAgICBfMTogW1xuICAgICAgICAgICAgXCJiZWx0X0FycmF5Lm1sXCIsXG4gICAgICAgICAgICAyNyxcbiAgICAgICAgICAgIDRcbiAgICAgICAgICBdLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIHJldHVybiBhcnJbaV07XG59XG5cbmZ1bmN0aW9uIHNldChhcnIsIGksIHYpIHtcbiAgaWYgKGkgPj0gMCAmJiBpIDwgYXJyLmxlbmd0aCkge1xuICAgIGFycltpXSA9IHY7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNldEV4bihhcnIsIGksIHYpIHtcbiAgaWYgKCEoaSA+PSAwICYmIGkgPCBhcnIubGVuZ3RoKSkge1xuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IFwiQXNzZXJ0X2ZhaWx1cmVcIixcbiAgICAgICAgICBfMTogW1xuICAgICAgICAgICAgXCJiZWx0X0FycmF5Lm1sXCIsXG4gICAgICAgICAgICAzMyxcbiAgICAgICAgICAgIDJcbiAgICAgICAgICBdLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIGFycltpXSA9IHY7XG4gIFxufVxuXG5mdW5jdGlvbiBzd2FwVW5zYWZlKHhzLCBpLCBqKSB7XG4gIHZhciB0bXAgPSB4c1tpXTtcbiAgeHNbaV0gPSB4c1tqXTtcbiAgeHNbal0gPSB0bXA7XG4gIFxufVxuXG5mdW5jdGlvbiBzaHVmZmxlSW5QbGFjZSh4cykge1xuICB2YXIgbGVuID0geHMubGVuZ3RoO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgIHN3YXBVbnNhZmUoeHMsIGksIEpzX21hdGgucmFuZG9tX2ludChpLCBsZW4pKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSh4cykge1xuICB2YXIgcmVzdWx0ID0geHMuc2xpY2UoMCk7XG4gIHNodWZmbGVJblBsYWNlKHJlc3VsdCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHJldmVyc2VJblBsYWNlKHhzKSB7XG4gIHZhciBsZW4gPSB4cy5sZW5ndGg7XG4gIHZhciBvZnMgPSAwO1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGxlbiAvIDIgfCAwOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgc3dhcFVuc2FmZSh4cywgb2ZzICsgaSB8IDAsICgob2ZzICsgbGVuIHwgMCkgLSBpIHwgMCkgLSAxIHwgMCk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIHJldmVyc2UoeHMpIHtcbiAgdmFyIGxlbiA9IHhzLmxlbmd0aDtcbiAgdmFyIHJlc3VsdCA9IG5ldyBBcnJheShsZW4pO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuOyArK2kpe1xuICAgIHJlc3VsdFtpXSA9IHhzWyhsZW4gLSAxIHwgMCkgLSBpIHwgMF07XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbWFrZShsLCBmKSB7XG4gIGlmIChsIDw9IDApIHtcbiAgICByZXR1cm4gW107XG4gIH1cbiAgdmFyIHJlcyA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgcmVzW2ldID0gZjtcbiAgfVxuICByZXR1cm4gcmVzO1xufVxuXG5mdW5jdGlvbiBtYWtlQnlVKGwsIGYpIHtcbiAgaWYgKGwgPD0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgcmVzID0gbmV3IEFycmF5KGwpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICByZXNbaV0gPSBmKGkpO1xuICB9XG4gIHJldHVybiByZXM7XG59XG5cbmZ1bmN0aW9uIG1ha2VCeShsLCBmKSB7XG4gIHJldHVybiBtYWtlQnlVKGwsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VCeUFuZFNodWZmbGVVKGwsIGYpIHtcbiAgdmFyIHUgPSBtYWtlQnlVKGwsIGYpO1xuICBzaHVmZmxlSW5QbGFjZSh1KTtcbiAgcmV0dXJuIHU7XG59XG5cbmZ1bmN0aW9uIG1ha2VCeUFuZFNodWZmbGUobCwgZikge1xuICByZXR1cm4gbWFrZUJ5QW5kU2h1ZmZsZVUobCwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gcmFuZ2Uoc3RhcnQsIGZpbmlzaCkge1xuICB2YXIgY3V0ID0gZmluaXNoIC0gc3RhcnQgfCAwO1xuICBpZiAoY3V0IDwgMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgYXJyID0gbmV3IEFycmF5KGN1dCArIDEgfCAwKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8PSBjdXQ7ICsraSl7XG4gICAgYXJyW2ldID0gc3RhcnQgKyBpIHwgMDtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiByYW5nZUJ5KHN0YXJ0LCBmaW5pc2gsIHN0ZXApIHtcbiAgdmFyIGN1dCA9IGZpbmlzaCAtIHN0YXJ0IHwgMDtcbiAgaWYgKGN1dCA8IDAgfHwgc3RlcCA8PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBuYiA9IChjdXQgLyBzdGVwIHwgMCkgKyAxIHwgMDtcbiAgdmFyIGFyciA9IG5ldyBBcnJheShuYik7XG4gIHZhciBjdXIgPSBzdGFydDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IG5iOyArK2kpe1xuICAgIGFycltpXSA9IGN1cjtcbiAgICBjdXIgPSBjdXIgKyBzdGVwIHwgMDtcbiAgfVxuICByZXR1cm4gYXJyO1xufVxuXG5mdW5jdGlvbiB6aXAoeHMsIHlzKSB7XG4gIHZhciBsZW54ID0geHMubGVuZ3RoO1xuICB2YXIgbGVueSA9IHlzLmxlbmd0aDtcbiAgdmFyIGxlbiA9IGxlbnggPCBsZW55ID8gbGVueCA6IGxlbnk7XG4gIHZhciBzID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgc1tpXSA9IFtcbiAgICAgIHhzW2ldLFxuICAgICAgeXNbaV1cbiAgICBdO1xuICB9XG4gIHJldHVybiBzO1xufVxuXG5mdW5jdGlvbiB6aXBCeVUoeHMsIHlzLCBmKSB7XG4gIHZhciBsZW54ID0geHMubGVuZ3RoO1xuICB2YXIgbGVueSA9IHlzLmxlbmd0aDtcbiAgdmFyIGxlbiA9IGxlbnggPCBsZW55ID8gbGVueCA6IGxlbnk7XG4gIHZhciBzID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgc1tpXSA9IGYoeHNbaV0sIHlzW2ldKTtcbiAgfVxuICByZXR1cm4gcztcbn1cblxuZnVuY3Rpb24gemlwQnkoeHMsIHlzLCBmKSB7XG4gIHJldHVybiB6aXBCeVUoeHMsIHlzLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiBjb25jYXQoYTEsIGEyKSB7XG4gIHZhciBsMSA9IGExLmxlbmd0aDtcbiAgdmFyIGwyID0gYTIubGVuZ3RoO1xuICB2YXIgYTFhMiA9IG5ldyBBcnJheShsMSArIGwyIHwgMCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsMTsgKytpKXtcbiAgICBhMWEyW2ldID0gYTFbaV07XG4gIH1cbiAgZm9yKHZhciBpJDEgPSAwOyBpJDEgPCBsMjsgKytpJDEpe1xuICAgIGExYTJbbDEgKyBpJDEgfCAwXSA9IGEyW2kkMV07XG4gIH1cbiAgcmV0dXJuIGExYTI7XG59XG5cbmZ1bmN0aW9uIGNvbmNhdE1hbnkoYXJycykge1xuICB2YXIgbGVuQXJycyA9IGFycnMubGVuZ3RoO1xuICB2YXIgdG90YWxMZW4gPSAwO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbGVuQXJyczsgKytpKXtcbiAgICB0b3RhbExlbiA9IHRvdGFsTGVuICsgYXJyc1tpXS5sZW5ndGggfCAwO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkodG90YWxMZW4pO1xuICB0b3RhbExlbiA9IDA7XG4gIGZvcih2YXIgaiA9IDA7IGogPCBsZW5BcnJzOyArK2ope1xuICAgIHZhciBjdXIgPSBhcnJzW2pdO1xuICAgIGZvcih2YXIgayA9IDAgLGtfZmluaXNoID0gY3VyLmxlbmd0aDsgayA8IGtfZmluaXNoOyArK2spe1xuICAgICAgcmVzdWx0W3RvdGFsTGVuXSA9IGN1cltrXTtcbiAgICAgIHRvdGFsTGVuID0gdG90YWxMZW4gKyAxIHwgMDtcbiAgICB9XG4gIH1cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gc2xpY2UoYSwgb2Zmc2V0LCBsZW4pIHtcbiAgaWYgKGxlbiA8PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciBsZW5hID0gYS5sZW5ndGg7XG4gIHZhciBvZnMgPSBvZmZzZXQgPCAwID8gQ2FtbC5jYW1sX2ludF9tYXgobGVuYSArIG9mZnNldCB8IDAsIDApIDogb2Zmc2V0O1xuICB2YXIgaGFzTGVuID0gbGVuYSAtIG9mcyB8IDA7XG4gIHZhciBjb3B5TGVuZ3RoID0gaGFzTGVuIDwgbGVuID8gaGFzTGVuIDogbGVuO1xuICBpZiAoY29weUxlbmd0aCA8PSAwKSB7XG4gICAgcmV0dXJuIFtdO1xuICB9XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkoY29weUxlbmd0aCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBjb3B5TGVuZ3RoOyArK2kpe1xuICAgIHJlc3VsdFtpXSA9IGFbb2ZzICsgaSB8IDBdO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNsaWNlVG9FbmQoYSwgb2Zmc2V0KSB7XG4gIHZhciBsZW5hID0gYS5sZW5ndGg7XG4gIHZhciBvZnMgPSBvZmZzZXQgPCAwID8gQ2FtbC5jYW1sX2ludF9tYXgobGVuYSArIG9mZnNldCB8IDAsIDApIDogb2Zmc2V0O1xuICB2YXIgbGVuID0gbGVuYSAtIG9mcyB8IDA7XG4gIHZhciByZXN1bHQgPSBuZXcgQXJyYXkobGVuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICByZXN1bHRbaV0gPSBhW29mcyArIGkgfCAwXTtcbiAgfVxuICByZXR1cm4gcmVzdWx0O1xufVxuXG5mdW5jdGlvbiBmaWxsKGEsIG9mZnNldCwgbGVuLCB2KSB7XG4gIGlmIChsZW4gPD0gMCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIGxlbmEgPSBhLmxlbmd0aDtcbiAgdmFyIG9mcyA9IG9mZnNldCA8IDAgPyBDYW1sLmNhbWxfaW50X21heChsZW5hICsgb2Zmc2V0IHwgMCwgMCkgOiBvZmZzZXQ7XG4gIHZhciBoYXNMZW4gPSBsZW5hIC0gb2ZzIHwgMDtcbiAgdmFyIGZpbGxMZW5ndGggPSBoYXNMZW4gPCBsZW4gPyBoYXNMZW4gOiBsZW47XG4gIGlmIChmaWxsTGVuZ3RoIDw9IDApIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIGZvcih2YXIgaSA9IG9mcyAsaV9maW5pc2ggPSBvZnMgKyBmaWxsTGVuZ3RoIHwgMDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIGFbaV0gPSB2O1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBibGl0VW5zYWZlKGExLCBzcmNvZnMxLCBhMiwgc3Jjb2ZzMiwgYmxpdExlbmd0aCkge1xuICBpZiAoc3Jjb2ZzMiA8PSBzcmNvZnMxKSB7XG4gICAgZm9yKHZhciBqID0gMDsgaiA8IGJsaXRMZW5ndGg7ICsrail7XG4gICAgICBhMltqICsgc3Jjb2ZzMiB8IDBdID0gYTFbaiArIHNyY29mczEgfCAwXTtcbiAgICB9XG4gICAgcmV0dXJuIDtcbiAgfVxuICBmb3IodmFyIGokMSA9IGJsaXRMZW5ndGggLSAxIHwgMDsgaiQxID49IDA7IC0taiQxKXtcbiAgICBhMltqJDEgKyBzcmNvZnMyIHwgMF0gPSBhMVtqJDEgKyBzcmNvZnMxIHwgMF07XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGJsaXQoYTEsIG9mczEsIGEyLCBvZnMyLCBsZW4pIHtcbiAgdmFyIGxlbmExID0gYTEubGVuZ3RoO1xuICB2YXIgbGVuYTIgPSBhMi5sZW5ndGg7XG4gIHZhciBzcmNvZnMxID0gb2ZzMSA8IDAgPyBDYW1sLmNhbWxfaW50X21heChsZW5hMSArIG9mczEgfCAwLCAwKSA6IG9mczE7XG4gIHZhciBzcmNvZnMyID0gb2ZzMiA8IDAgPyBDYW1sLmNhbWxfaW50X21heChsZW5hMiArIG9mczIgfCAwLCAwKSA6IG9mczI7XG4gIHZhciBibGl0TGVuZ3RoID0gQ2FtbC5jYW1sX2ludF9taW4obGVuLCBDYW1sLmNhbWxfaW50X21pbihsZW5hMSAtIHNyY29mczEgfCAwLCBsZW5hMiAtIHNyY29mczIgfCAwKSk7XG4gIGlmIChzcmNvZnMyIDw9IHNyY29mczEpIHtcbiAgICBmb3IodmFyIGogPSAwOyBqIDwgYmxpdExlbmd0aDsgKytqKXtcbiAgICAgIGEyW2ogKyBzcmNvZnMyIHwgMF0gPSBhMVtqICsgc3Jjb2ZzMSB8IDBdO1xuICAgIH1cbiAgICByZXR1cm4gO1xuICB9XG4gIGZvcih2YXIgaiQxID0gYmxpdExlbmd0aCAtIDEgfCAwOyBqJDEgPj0gMDsgLS1qJDEpe1xuICAgIGEyW2okMSArIHNyY29mczIgfCAwXSA9IGExW2okMSArIHNyY29mczEgfCAwXTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFUoYSwgZikge1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGEubGVuZ3RoOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgZihhW2ldKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gZm9yRWFjaChhLCBmKSB7XG4gIHJldHVybiBmb3JFYWNoVShhLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBtYXBVKGEsIGYpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIHIgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHJbaV0gPSBmKGFbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBtYXAoYSwgZikge1xuICByZXR1cm4gbWFwVShhLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBnZXRCeVUoYSwgcCkge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgaSA9IDA7XG4gIHZhciByO1xuICB3aGlsZShyID09PSB1bmRlZmluZWQgJiYgaSA8IGwpIHtcbiAgICB2YXIgdiA9IGFbaV07XG4gICAgaWYgKHAodikpIHtcbiAgICAgIHIgPSBDYW1sX29wdGlvbi5zb21lKHYpO1xuICAgIH1cbiAgICBpID0gaSArIDEgfCAwO1xuICB9O1xuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gZ2V0QnkoYSwgcCkge1xuICByZXR1cm4gZ2V0QnlVKGEsIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIGdldEluZGV4QnlVKGEsIHApIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgcjtcbiAgd2hpbGUociA9PT0gdW5kZWZpbmVkICYmIGkgPCBsKSB7XG4gICAgdmFyIHYgPSBhW2ldO1xuICAgIGlmIChwKHYpKSB7XG4gICAgICByID0gaTtcbiAgICB9XG4gICAgaSA9IGkgKyAxIHwgMDtcbiAgfTtcbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGdldEluZGV4QnkoYSwgcCkge1xuICByZXR1cm4gZ2V0SW5kZXhCeVUoYSwgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24ga2VlcFUoYSwgZikge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICB2YXIgciA9IG5ldyBBcnJheShsKTtcbiAgdmFyIGogPSAwO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICB2YXIgdiA9IGFbaV07XG4gICAgaWYgKGYodikpIHtcbiAgICAgIHJbal0gPSB2O1xuICAgICAgaiA9IGogKyAxIHwgMDtcbiAgICB9XG4gICAgXG4gIH1cbiAgci5sZW5ndGggPSBqO1xuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24ga2VlcChhLCBmKSB7XG4gIHJldHVybiBrZWVwVShhLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBrZWVwV2l0aEluZGV4VShhLCBmKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciByID0gbmV3IEFycmF5KGwpO1xuICB2YXIgaiA9IDA7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHZhciB2ID0gYVtpXTtcbiAgICBpZiAoZih2LCBpKSkge1xuICAgICAgcltqXSA9IHY7XG4gICAgICBqID0gaiArIDEgfCAwO1xuICAgIH1cbiAgICBcbiAgfVxuICByLmxlbmd0aCA9IGo7XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBrZWVwV2l0aEluZGV4KGEsIGYpIHtcbiAgcmV0dXJuIGtlZXBXaXRoSW5kZXhVKGEsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIGtlZXBNYXBVKGEsIGYpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIHIgPSBuZXcgQXJyYXkobCk7XG4gIHZhciBqID0gMDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgdmFyIHYgPSBhW2ldO1xuICAgIHZhciB2JDEgPSBmKHYpO1xuICAgIGlmICh2JDEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcltqXSA9IENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24odiQxKTtcbiAgICAgIGogPSBqICsgMSB8IDA7XG4gICAgfVxuICAgIFxuICB9XG4gIHIubGVuZ3RoID0gajtcbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGtlZXBNYXAoYSwgZikge1xuICByZXR1cm4ga2VlcE1hcFUoYSwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFdpdGhJbmRleFUoYSwgZikge1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGEubGVuZ3RoOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgZihpLCBhW2ldKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFdpdGhJbmRleChhLCBmKSB7XG4gIHJldHVybiBmb3JFYWNoV2l0aEluZGV4VShhLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiBtYXBXaXRoSW5kZXhVKGEsIGYpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIHIgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHJbaV0gPSBmKGksIGFbaV0pO1xuICB9XG4gIHJldHVybiByO1xufVxuXG5mdW5jdGlvbiBtYXBXaXRoSW5kZXgoYSwgZikge1xuICByZXR1cm4gbWFwV2l0aEluZGV4VShhLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VVKGEsIHgsIGYpIHtcbiAgdmFyIHIgPSB4O1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IGEubGVuZ3RoOyBpIDwgaV9maW5pc2g7ICsraSl7XG4gICAgciA9IGYociwgYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZShhLCB4LCBmKSB7XG4gIHJldHVybiByZWR1Y2VVKGEsIHgsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2VVKGEsIHgsIGYpIHtcbiAgdmFyIHIgPSB4O1xuICBmb3IodmFyIGkgPSBhLmxlbmd0aCAtIDEgfCAwOyBpID49IDA7IC0taSl7XG4gICAgciA9IGYociwgYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2UoYSwgeCwgZikge1xuICByZXR1cm4gcmVkdWNlUmV2ZXJzZVUoYSwgeCwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZTJVKGEsIGIsIHgsIGYpIHtcbiAgdmFyIHIgPSB4O1xuICB2YXIgbGVuID0gQ2FtbC5jYW1sX2ludF9taW4oYS5sZW5ndGgsIGIubGVuZ3RoKTtcbiAgZm9yKHZhciBpID0gbGVuIC0gMSB8IDA7IGkgPj0gMDsgLS1pKXtcbiAgICByID0gZihyLCBhW2ldLCBiW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZTIoYSwgYiwgeCwgZikge1xuICByZXR1cm4gcmVkdWNlUmV2ZXJzZTJVKGEsIGIsIHgsIEN1cnJ5Ll9fMyhmKSk7XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVdpdGhJbmRleFUoYSwgeCwgZikge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICByID0gZihyLCBhW2ldLCBpKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gcmVkdWNlV2l0aEluZGV4KGEsIHgsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZVdpdGhJbmRleFUoYSwgeCwgQ3VycnkuX18zKGYpKTtcbn1cblxuZnVuY3Rpb24gZXZlcnlVKGFyciwgYikge1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgdmFyIF9pID0gMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPT09IGxlbikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghYihhcnJbaV0pKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXZlcnkoYXJyLCBmKSB7XG4gIHJldHVybiBldmVyeVUoYXJyLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBzb21lVShhcnIsIGIpIHtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciBfaSA9IDA7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmIChpID09PSBsZW4pIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKGIoYXJyW2ldKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc29tZShhcnIsIGYpIHtcbiAgcmV0dXJuIHNvbWVVKGFyciwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gZXZlcnlBdXgyKGFycjEsIGFycjIsIF9pLCBiLCBsZW4pIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPT09IGxlbikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghYihhcnIxW2ldLCBhcnIyW2ldKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5MlUoYSwgYiwgcCkge1xuICByZXR1cm4gZXZlcnlBdXgyKGEsIGIsIDAsIHAsIENhbWwuY2FtbF9pbnRfbWluKGEubGVuZ3RoLCBiLmxlbmd0aCkpO1xufVxuXG5mdW5jdGlvbiBldmVyeTIoYSwgYiwgcCkge1xuICByZXR1cm4gZXZlcnkyVShhLCBiLCBDdXJyeS5fXzIocCkpO1xufVxuXG5mdW5jdGlvbiBzb21lMlUoYSwgYiwgcCkge1xuICB2YXIgX2kgPSAwO1xuICB2YXIgbGVuID0gQ2FtbC5jYW1sX2ludF9taW4oYS5sZW5ndGgsIGIubGVuZ3RoKTtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPT09IGxlbikge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAocChhW2ldLCBiW2ldKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc29tZTIoYSwgYiwgcCkge1xuICByZXR1cm4gc29tZTJVKGEsIGIsIEN1cnJ5Ll9fMihwKSk7XG59XG5cbmZ1bmN0aW9uIGVxVShhLCBiLCBwKSB7XG4gIHZhciBsZW5hID0gYS5sZW5ndGg7XG4gIHZhciBsZW5iID0gYi5sZW5ndGg7XG4gIGlmIChsZW5hID09PSBsZW5iKSB7XG4gICAgcmV0dXJuIGV2ZXJ5QXV4MihhLCBiLCAwLCBwLCBsZW5hKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gZXEoYSwgYiwgcCkge1xuICByZXR1cm4gZXFVKGEsIGIsIEN1cnJ5Ll9fMihwKSk7XG59XG5cbmZ1bmN0aW9uIGNtcFUoYSwgYiwgcCkge1xuICB2YXIgbGVuYSA9IGEubGVuZ3RoO1xuICB2YXIgbGVuYiA9IGIubGVuZ3RoO1xuICBpZiAobGVuYSA+IGxlbmIpIHtcbiAgICByZXR1cm4gMTtcbiAgfSBlbHNlIGlmIChsZW5hIDwgbGVuYikge1xuICAgIHJldHVybiAtMTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2kgPSAwO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBpID0gX2k7XG4gICAgICBpZiAoaSA9PT0gbGVuYSkge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIHZhciBjID0gcChhW2ldLCBiW2ldKTtcbiAgICAgIGlmIChjICE9PSAwKSB7XG4gICAgICAgIHJldHVybiBjO1xuICAgICAgfVxuICAgICAgX2kgPSBpICsgMSB8IDA7XG4gICAgICBjb250aW51ZSA7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjbXAoYSwgYiwgcCkge1xuICByZXR1cm4gY21wVShhLCBiLCBDdXJyeS5fXzIocCkpO1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb25VKGEsIGYpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIGkgPSAwO1xuICB2YXIgaiA9IDA7XG4gIHZhciBhMSA9IG5ldyBBcnJheShsKTtcbiAgdmFyIGEyID0gbmV3IEFycmF5KGwpO1xuICBmb3IodmFyIGlpID0gMDsgaWkgPCBsOyArK2lpKXtcbiAgICB2YXIgdiA9IGFbaWldO1xuICAgIGlmIChmKHYpKSB7XG4gICAgICBhMVtpXSA9IHY7XG4gICAgICBpID0gaSArIDEgfCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICBhMltqXSA9IHY7XG4gICAgICBqID0gaiArIDEgfCAwO1xuICAgIH1cbiAgfVxuICBhMS5sZW5ndGggPSBpO1xuICBhMi5sZW5ndGggPSBqO1xuICByZXR1cm4gW1xuICAgICAgICAgIGExLFxuICAgICAgICAgIGEyXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIHBhcnRpdGlvbihhLCBmKSB7XG4gIHJldHVybiBwYXJ0aXRpb25VKGEsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIHVuemlwKGEpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgdmFyIGExID0gbmV3IEFycmF5KGwpO1xuICB2YXIgYTIgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHZhciBtYXRjaCA9IGFbaV07XG4gICAgYTFbaV0gPSBtYXRjaFswXTtcbiAgICBhMltpXSA9IG1hdGNoWzFdO1xuICB9XG4gIHJldHVybiBbXG4gICAgICAgICAgYTEsXG4gICAgICAgICAgYTJcbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gam9pbldpdGhVKGEsIHNlcCwgdG9TdHJpbmcpIHtcbiAgdmFyIGwgPSBhLmxlbmd0aDtcbiAgaWYgKGwgPT09IDApIHtcbiAgICByZXR1cm4gXCJcIjtcbiAgfVxuICB2YXIgbGFzdEluZGV4ID0gbCAtIDEgfCAwO1xuICB2YXIgX2kgPSAwO1xuICB2YXIgX3JlcyA9IFwiXCI7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcmVzID0gX3JlcztcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmIChpID09PSBsYXN0SW5kZXgpIHtcbiAgICAgIHJldHVybiByZXMgKyB0b1N0cmluZyhhW2ldKTtcbiAgICB9XG4gICAgX3JlcyA9IHJlcyArICh0b1N0cmluZyhhW2ldKSArIHNlcCk7XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBqb2luV2l0aChhLCBzZXAsIHRvU3RyaW5nKSB7XG4gIHJldHVybiBqb2luV2l0aFUoYSwgc2VwLCBDdXJyeS5fXzEodG9TdHJpbmcpKTtcbn1cblxuZXhwb3J0IHtcbiAgZ2V0ICxcbiAgZ2V0RXhuICxcbiAgc2V0ICxcbiAgc2V0RXhuICxcbiAgc2h1ZmZsZUluUGxhY2UgLFxuICBzaHVmZmxlICxcbiAgcmV2ZXJzZUluUGxhY2UgLFxuICByZXZlcnNlICxcbiAgbWFrZSAsXG4gIHJhbmdlICxcbiAgcmFuZ2VCeSAsXG4gIG1ha2VCeVUgLFxuICBtYWtlQnkgLFxuICBtYWtlQnlBbmRTaHVmZmxlVSAsXG4gIG1ha2VCeUFuZFNodWZmbGUgLFxuICB6aXAgLFxuICB6aXBCeVUgLFxuICB6aXBCeSAsXG4gIHVuemlwICxcbiAgY29uY2F0ICxcbiAgY29uY2F0TWFueSAsXG4gIHNsaWNlICxcbiAgc2xpY2VUb0VuZCAsXG4gIGZpbGwgLFxuICBibGl0ICxcbiAgYmxpdFVuc2FmZSAsXG4gIGZvckVhY2hVICxcbiAgZm9yRWFjaCAsXG4gIG1hcFUgLFxuICBtYXAgLFxuICBnZXRCeVUgLFxuICBnZXRCeSAsXG4gIGdldEluZGV4QnlVICxcbiAgZ2V0SW5kZXhCeSAsXG4gIGtlZXBVICxcbiAga2VlcCAsXG4gIGtlZXBXaXRoSW5kZXhVICxcbiAga2VlcFdpdGhJbmRleCAsXG4gIGtlZXBNYXBVICxcbiAga2VlcE1hcCAsXG4gIGZvckVhY2hXaXRoSW5kZXhVICxcbiAgZm9yRWFjaFdpdGhJbmRleCAsXG4gIG1hcFdpdGhJbmRleFUgLFxuICBtYXBXaXRoSW5kZXggLFxuICBwYXJ0aXRpb25VICxcbiAgcGFydGl0aW9uICxcbiAgcmVkdWNlVSAsXG4gIHJlZHVjZSAsXG4gIHJlZHVjZVJldmVyc2VVICxcbiAgcmVkdWNlUmV2ZXJzZSAsXG4gIHJlZHVjZVJldmVyc2UyVSAsXG4gIHJlZHVjZVJldmVyc2UyICxcbiAgcmVkdWNlV2l0aEluZGV4VSAsXG4gIHJlZHVjZVdpdGhJbmRleCAsXG4gIGpvaW5XaXRoVSAsXG4gIGpvaW5XaXRoICxcbiAgc29tZVUgLFxuICBzb21lICxcbiAgZXZlcnlVICxcbiAgZXZlcnkgLFxuICBldmVyeTJVICxcbiAgZXZlcnkyICxcbiAgc29tZTJVICxcbiAgc29tZTIgLFxuICBjbXBVICxcbiAgY21wICxcbiAgZXFVICxcbiAgZXEgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQ3VycnkgZnJvbSBcIi4vY3VycnkuanNcIjtcblxuZnVuY3Rpb24gTWFrZUNvbXBhcmFibGVVKE0pIHtcbiAgcmV0dXJuIE07XG59XG5cbmZ1bmN0aW9uIE1ha2VDb21wYXJhYmxlKE0pIHtcbiAgdmFyIGNtcCA9IE0uY21wO1xuICB2YXIgY21wJDEgPSBDdXJyeS5fXzIoY21wKTtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBjbXA6IGNtcCQxXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmFibGVVKGNtcCkge1xuICByZXR1cm4ge1xuICAgICAgICAgIGNtcDogY21wXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGNvbXBhcmFibGUoY21wKSB7XG4gIHZhciBjbXAkMSA9IEN1cnJ5Ll9fMihjbXApO1xuICByZXR1cm4ge1xuICAgICAgICAgIGNtcDogY21wJDFcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gTWFrZUhhc2hhYmxlVShNKSB7XG4gIHJldHVybiBNO1xufVxuXG5mdW5jdGlvbiBNYWtlSGFzaGFibGUoTSkge1xuICB2YXIgaGFzaCA9IE0uaGFzaDtcbiAgdmFyIGhhc2gkMSA9IEN1cnJ5Ll9fMShoYXNoKTtcbiAgdmFyIGVxID0gTS5lcTtcbiAgdmFyIGVxJDEgPSBDdXJyeS5fXzIoZXEpO1xuICByZXR1cm4ge1xuICAgICAgICAgIGhhc2g6IGhhc2gkMSxcbiAgICAgICAgICBlcTogZXEkMVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBoYXNoYWJsZVUoaGFzaCwgZXEpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBoYXNoOiBoYXNoLFxuICAgICAgICAgIGVxOiBlcVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBoYXNoYWJsZShoYXNoLCBlcSkge1xuICB2YXIgaGFzaCQxID0gQ3VycnkuX18xKGhhc2gpO1xuICB2YXIgZXEkMSA9IEN1cnJ5Ll9fMihlcSk7XG4gIHJldHVybiB7XG4gICAgICAgICAgaGFzaDogaGFzaCQxLFxuICAgICAgICAgIGVxOiBlcSQxXG4gICAgICAgIH07XG59XG5cbmV4cG9ydCB7XG4gIE1ha2VDb21wYXJhYmxlVSAsXG4gIE1ha2VDb21wYXJhYmxlICxcbiAgY29tcGFyYWJsZVUgLFxuICBjb21wYXJhYmxlICxcbiAgTWFrZUhhc2hhYmxlVSAsXG4gIE1ha2VIYXNoYWJsZSAsXG4gIGhhc2hhYmxlVSAsXG4gIGhhc2hhYmxlICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cblxuZnVuY3Rpb24gZnJvbVN0cmluZyhpKSB7XG4gIHZhciBpJDEgPSBwYXJzZUludChpLCAxMCk7XG4gIGlmIChpc05hTihpJDEpKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gaSQxO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGZyb21TdHJpbmcgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQ3VycnkgZnJvbSBcIi4vY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfQXJyYXkgZnJvbSBcIi4vYmVsdF9BcnJheS5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vcHRpb24gZnJvbSBcIi4vY2FtbF9vcHRpb24uanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfU29ydEFycmF5IGZyb20gXCIuL2JlbHRfU29ydEFycmF5LmpzXCI7XG5cbmZ1bmN0aW9uIGhlYWQoeCkge1xuICBpZiAoeCkge1xuICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKHguaGQpO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBoZWFkRXhuKHgpIHtcbiAgaWYgKHgpIHtcbiAgICByZXR1cm4geC5oZDtcbiAgfVxuICB0aHJvdyB7XG4gICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICB9O1xufVxuXG5mdW5jdGlvbiB0YWlsKHgpIHtcbiAgaWYgKHgpIHtcbiAgICByZXR1cm4geC50bDtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gdGFpbEV4bih4KSB7XG4gIGlmICh4KSB7XG4gICAgcmV0dXJuIHgudGw7XG4gIH1cbiAgdGhyb3cge1xuICAgICAgICBSRV9FWE5fSUQ6IFwiTm90X2ZvdW5kXCIsXG4gICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgfTtcbn1cblxuZnVuY3Rpb24gYWRkKHhzLCB4KSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgaGQ6IHgsXG4gICAgICAgICAgdGw6IHhzXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGdldCh4LCBuKSB7XG4gIGlmIChuIDwgMCkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgdmFyIF94ID0geDtcbiAgICB2YXIgX24gPSBuO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBuJDEgPSBfbjtcbiAgICAgIHZhciB4JDEgPSBfeDtcbiAgICAgIGlmICgheCQxKSB7XG4gICAgICAgIHJldHVybiA7XG4gICAgICB9XG4gICAgICBpZiAobiQxID09PSAwKSB7XG4gICAgICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKHgkMS5oZCk7XG4gICAgICB9XG4gICAgICBfbiA9IG4kMSAtIDEgfCAwO1xuICAgICAgX3ggPSB4JDEudGw7XG4gICAgICBjb250aW51ZSA7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRFeG4oeCwgbikge1xuICBpZiAobiA8IDApIHtcbiAgICB0aHJvdyB7XG4gICAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIHZhciBfeCA9IHg7XG4gIHZhciBfbiA9IG47XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbiQxID0gX247XG4gICAgdmFyIHgkMSA9IF94O1xuICAgIGlmICh4JDEpIHtcbiAgICAgIGlmIChuJDEgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIHgkMS5oZDtcbiAgICAgIH1cbiAgICAgIF9uID0gbiQxIC0gMSB8IDA7XG4gICAgICBfeCA9IHgkMS50bDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uQXV4KHAsIF9jZWxsLCBfcHJlY1gsIF9wcmVjWSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWNZID0gX3ByZWNZO1xuICAgIHZhciBwcmVjWCA9IF9wcmVjWDtcbiAgICB2YXIgY2VsbCA9IF9jZWxsO1xuICAgIGlmICghY2VsbCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIHQgPSBjZWxsLnRsO1xuICAgIHZhciBoID0gY2VsbC5oZDtcbiAgICB2YXIgbmV4dCA9IHtcbiAgICAgIGhkOiBoLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgaWYgKHAoaCkpIHtcbiAgICAgIHByZWNYLnRsID0gbmV4dDtcbiAgICAgIF9wcmVjWCA9IG5leHQ7XG4gICAgICBfY2VsbCA9IHQ7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIHByZWNZLnRsID0gbmV4dDtcbiAgICBfcHJlY1kgPSBuZXh0O1xuICAgIF9jZWxsID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHNwbGl0QXV4KF9jZWxsLCBfcHJlY1gsIF9wcmVjWSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWNZID0gX3ByZWNZO1xuICAgIHZhciBwcmVjWCA9IF9wcmVjWDtcbiAgICB2YXIgY2VsbCA9IF9jZWxsO1xuICAgIGlmICghY2VsbCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIG1hdGNoID0gY2VsbC5oZDtcbiAgICB2YXIgbmV4dEEgPSB7XG4gICAgICBoZDogbWF0Y2hbMF0sXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICB2YXIgbmV4dEIgPSB7XG4gICAgICBoZDogbWF0Y2hbMV0sXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjWC50bCA9IG5leHRBO1xuICAgIHByZWNZLnRsID0gbmV4dEI7XG4gICAgX3ByZWNZID0gbmV4dEI7XG4gICAgX3ByZWNYID0gbmV4dEE7XG4gICAgX2NlbGwgPSBjZWxsLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eENvbnQoX2NlbGxYLCBfcHJlYykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIHByZWM7XG4gICAgfVxuICAgIHZhciBuZXh0ID0ge1xuICAgICAgaGQ6IGNlbGxYLmhkLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IG5leHQ7XG4gICAgX3ByZWMgPSBuZXh0O1xuICAgIF9jZWxsWCA9IGNlbGxYLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eFdpdEZpbHRlcihmLCBfY2VsbFgsIF9wcmVjKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgdCA9IGNlbGxYLnRsO1xuICAgIHZhciBoID0gY2VsbFguaGQ7XG4gICAgaWYgKGYoaCkpIHtcbiAgICAgIHZhciBuZXh0ID0ge1xuICAgICAgICBoZDogaCxcbiAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgfTtcbiAgICAgIHByZWMudGwgPSBuZXh0O1xuICAgICAgX3ByZWMgPSBuZXh0O1xuICAgICAgX2NlbGxYID0gdDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgX2NlbGxYID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvcHlBdXhXaXRoRmlsdGVySW5kZXgoZiwgX2NlbGxYLCBfcHJlYywgX2kpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIHQgPSBjZWxsWC50bDtcbiAgICB2YXIgaCA9IGNlbGxYLmhkO1xuICAgIGlmIChmKGgsIGkpKSB7XG4gICAgICB2YXIgbmV4dCA9IHtcbiAgICAgICAgaGQ6IGgsXG4gICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgIH07XG4gICAgICBwcmVjLnRsID0gbmV4dDtcbiAgICAgIF9pID0gaSArIDEgfCAwO1xuICAgICAgX3ByZWMgPSBuZXh0O1xuICAgICAgX2NlbGxYID0gdDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgX2NlbGxYID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvcHlBdXhXaXRGaWx0ZXJNYXAoZiwgX2NlbGxYLCBfcHJlYykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgaWYgKCFjZWxsWCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIHQgPSBjZWxsWC50bDtcbiAgICB2YXIgaCA9IGYoY2VsbFguaGQpO1xuICAgIGlmIChoICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciBuZXh0ID0ge1xuICAgICAgICBoZDogQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbihoKSxcbiAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgfTtcbiAgICAgIHByZWMudGwgPSBuZXh0O1xuICAgICAgX3ByZWMgPSBuZXh0O1xuICAgICAgX2NlbGxYID0gdDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgX2NlbGxYID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFzc29jQXV4V2l0aE1hcChfY2VsbFgsIHgsIF9wcmVjLCBmKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciB0ID0gY2VsbFgudGw7XG4gICAgdmFyIGggPSBjZWxsWC5oZDtcbiAgICBpZiAoZihoWzBdLCB4KSkge1xuICAgICAgcHJlYy50bCA9IHQ7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgdmFyIG5leHQgPSB7XG4gICAgICBoZDogaCxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWMudGwgPSBuZXh0O1xuICAgIF9wcmVjID0gbmV4dDtcbiAgICBfY2VsbFggPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc2V0QXNzb2NBdXhXaXRoTWFwKF9jZWxsWCwgeCwgaywgX3ByZWMsIGVxKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIHZhciBjZWxsWCA9IF9jZWxsWDtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIHZhciB0ID0gY2VsbFgudGw7XG4gICAgdmFyIGggPSBjZWxsWC5oZDtcbiAgICBpZiAoZXEoaFswXSwgeCkpIHtcbiAgICAgIHByZWMudGwgPSB7XG4gICAgICAgIGhkOiBbXG4gICAgICAgICAgeCxcbiAgICAgICAgICBrXG4gICAgICAgIF0sXG4gICAgICAgIHRsOiB0XG4gICAgICB9O1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIHZhciBuZXh0ID0ge1xuICAgICAgaGQ6IGgsXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gbmV4dDtcbiAgICBfcHJlYyA9IG5leHQ7XG4gICAgX2NlbGxYID0gdDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvcHlBdXhXaXRoTWFwKF9jZWxsWCwgX3ByZWMsIGYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciBuZXh0ID0ge1xuICAgICAgaGQ6IGYoY2VsbFguaGQpLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IG5leHQ7XG4gICAgX3ByZWMgPSBuZXh0O1xuICAgIF9jZWxsWCA9IGNlbGxYLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gemlwQXV4KF9jZWxsWCwgX2NlbGxZLCBfcHJlYykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFkgPSBfY2VsbFk7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGlmICghY2VsbFkpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciBuZXh0ID0ge1xuICAgICAgaGQ6IFtcbiAgICAgICAgY2VsbFguaGQsXG4gICAgICAgIGNlbGxZLmhkXG4gICAgICBdLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IG5leHQ7XG4gICAgX3ByZWMgPSBuZXh0O1xuICAgIF9jZWxsWSA9IGNlbGxZLnRsO1xuICAgIF9jZWxsWCA9IGNlbGxYLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY29weUF1eFdpdGhNYXAyKGYsIF9jZWxsWCwgX2NlbGxZLCBfcHJlYykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFkgPSBfY2VsbFk7XG4gICAgdmFyIGNlbGxYID0gX2NlbGxYO1xuICAgIGlmICghY2VsbFgpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGlmICghY2VsbFkpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciBuZXh0ID0ge1xuICAgICAgaGQ6IGYoY2VsbFguaGQsIGNlbGxZLmhkKSxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWMudGwgPSBuZXh0O1xuICAgIF9wcmVjID0gbmV4dDtcbiAgICBfY2VsbFkgPSBjZWxsWS50bDtcbiAgICBfY2VsbFggPSBjZWxsWC50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvcHlBdXhXaXRoTWFwSShmLCBfaSwgX2NlbGxYLCBfcHJlYykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbFggPSBfY2VsbFg7XG4gICAgdmFyIGkgPSBfaTtcbiAgICBpZiAoIWNlbGxYKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgbmV4dCA9IHtcbiAgICAgIGhkOiBmKGksIGNlbGxYLmhkKSxcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIHByZWMudGwgPSBuZXh0O1xuICAgIF9wcmVjID0gbmV4dDtcbiAgICBfY2VsbFggPSBjZWxsWC50bDtcbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRha2VBdXgoX24sIF9jZWxsLCBfcHJlYykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICB2YXIgY2VsbCA9IF9jZWxsO1xuICAgIHZhciBuID0gX247XG4gICAgaWYgKG4gPT09IDApIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoIWNlbGwpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIGNlbGwkMSA9IHtcbiAgICAgIGhkOiBjZWxsLmhkLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgcHJlYy50bCA9IGNlbGwkMTtcbiAgICBfcHJlYyA9IGNlbGwkMTtcbiAgICBfY2VsbCA9IGNlbGwudGw7XG4gICAgX24gPSBuIC0gMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzcGxpdEF0QXV4KF9uLCBfY2VsbCwgX3ByZWMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBwcmVjID0gX3ByZWM7XG4gICAgdmFyIGNlbGwgPSBfY2VsbDtcbiAgICB2YXIgbiA9IF9uO1xuICAgIGlmIChuID09PSAwKSB7XG4gICAgICByZXR1cm4gY2VsbDtcbiAgICB9XG4gICAgaWYgKCFjZWxsKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgY2VsbCQxID0ge1xuICAgICAgaGQ6IGNlbGwuaGQsXG4gICAgICB0bDogLyogW10gKi8wXG4gICAgfTtcbiAgICBwcmVjLnRsID0gY2VsbCQxO1xuICAgIF9wcmVjID0gY2VsbCQxO1xuICAgIF9jZWxsID0gY2VsbC50bDtcbiAgICBfbiA9IG4gLSAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRha2UobHN0LCBuKSB7XG4gIGlmIChuIDwgMCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgaWYgKG4gPT09IDApIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIGlmICghbHN0KSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgY2VsbCA9IHtcbiAgICBoZDogbHN0LmhkLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIGhhcyA9IHRha2VBdXgobiAtIDEgfCAwLCBsc3QudGwsIGNlbGwpO1xuICBpZiAoaGFzKSB7XG4gICAgcmV0dXJuIGNlbGw7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIGRyb3AobHN0LCBuKSB7XG4gIGlmIChuIDwgMCkge1xuICAgIHJldHVybiA7XG4gIH0gZWxzZSB7XG4gICAgdmFyIF9sID0gbHN0O1xuICAgIHZhciBfbiA9IG47XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIG4kMSA9IF9uO1xuICAgICAgdmFyIGwgPSBfbDtcbiAgICAgIGlmIChuJDEgPT09IDApIHtcbiAgICAgICAgcmV0dXJuIGw7XG4gICAgICB9XG4gICAgICBpZiAoIWwpIHtcbiAgICAgICAgcmV0dXJuIDtcbiAgICAgIH1cbiAgICAgIF9uID0gbiQxIC0gMSB8IDA7XG4gICAgICBfbCA9IGwudGw7XG4gICAgICBjb250aW51ZSA7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzcGxpdEF0KGxzdCwgbikge1xuICBpZiAobiA8IDApIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIGlmIChuID09PSAwKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC8qIFtdICovMCxcbiAgICAgICAgICAgIGxzdFxuICAgICAgICAgIF07XG4gIH1cbiAgaWYgKCFsc3QpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiBsc3QuaGQsXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgcmVzdCA9IHNwbGl0QXRBdXgobiAtIDEgfCAwLCBsc3QudGwsIGNlbGwpO1xuICBpZiAocmVzdCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIGNlbGwsXG4gICAgICAgICAgICByZXN0XG4gICAgICAgICAgXTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gY29uY2F0KHhzLCB5cykge1xuICBpZiAoIXhzKSB7XG4gICAgcmV0dXJuIHlzO1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiB4cy5oZCxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIGNvcHlBdXhDb250KHhzLnRsLCBjZWxsKS50bCA9IHlzO1xuICByZXR1cm4gY2VsbDtcbn1cblxuZnVuY3Rpb24gbWFwVSh4cywgZikge1xuICBpZiAoIXhzKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICB2YXIgY2VsbCA9IHtcbiAgICBoZDogZih4cy5oZCksXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICBjb3B5QXV4V2l0aE1hcCh4cy50bCwgY2VsbCwgZik7XG4gIHJldHVybiBjZWxsO1xufVxuXG5mdW5jdGlvbiBtYXAoeHMsIGYpIHtcbiAgcmV0dXJuIG1hcFUoeHMsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIHppcEJ5VShsMSwgbDIsIGYpIHtcbiAgaWYgKCFsMSkge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgaWYgKCFsMikge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IGYobDEuaGQsIGwyLmhkKSxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIGNvcHlBdXhXaXRoTWFwMihmLCBsMS50bCwgbDIudGwsIGNlbGwpO1xuICByZXR1cm4gY2VsbDtcbn1cblxuZnVuY3Rpb24gemlwQnkobDEsIGwyLCBmKSB7XG4gIHJldHVybiB6aXBCeVUobDEsIGwyLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiBtYXBXaXRoSW5kZXhVKHhzLCBmKSB7XG4gIGlmICgheHMpIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiBmKDAsIHhzLmhkKSxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIGNvcHlBdXhXaXRoTWFwSShmLCAxLCB4cy50bCwgY2VsbCk7XG4gIHJldHVybiBjZWxsO1xufVxuXG5mdW5jdGlvbiBtYXBXaXRoSW5kZXgoeHMsIGYpIHtcbiAgcmV0dXJuIG1hcFdpdGhJbmRleFUoeHMsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIG1ha2VCeVUobiwgZikge1xuICBpZiAobiA8PSAwKSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxuICB2YXIgaGVhZFggPSB7XG4gICAgaGQ6IGYoMCksXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgY3VyID0gaGVhZFg7XG4gIHZhciBpID0gMTtcbiAgd2hpbGUoaSA8IG4pIHtcbiAgICB2YXIgdiA9IHtcbiAgICAgIGhkOiBmKGkpLFxuICAgICAgdGw6IC8qIFtdICovMFxuICAgIH07XG4gICAgY3VyLnRsID0gdjtcbiAgICBjdXIgPSB2O1xuICAgIGkgPSBpICsgMSB8IDA7XG4gIH07XG4gIHJldHVybiBoZWFkWDtcbn1cblxuZnVuY3Rpb24gbWFrZUJ5KG4sIGYpIHtcbiAgcmV0dXJuIG1ha2VCeVUobiwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gbWFrZShuLCB2KSB7XG4gIGlmIChuIDw9IDApIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIHZhciBoZWFkWCA9IHtcbiAgICBoZDogdixcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciBjdXIgPSBoZWFkWDtcbiAgdmFyIGkgPSAxO1xuICB3aGlsZShpIDwgbikge1xuICAgIHZhciB2JDEgPSB7XG4gICAgICBoZDogdixcbiAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICB9O1xuICAgIGN1ci50bCA9IHYkMTtcbiAgICBjdXIgPSB2JDE7XG4gICAgaSA9IGkgKyAxIHwgMDtcbiAgfTtcbiAgcmV0dXJuIGhlYWRYO1xufVxuXG5mdW5jdGlvbiBsZW5ndGgoeHMpIHtcbiAgdmFyIF94ID0geHM7XG4gIHZhciBfYWNjID0gMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIHZhciB4ID0gX3g7XG4gICAgaWYgKCF4KSB7XG4gICAgICByZXR1cm4gYWNjO1xuICAgIH1cbiAgICBfYWNjID0gYWNjICsgMSB8IDA7XG4gICAgX3ggPSB4LnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsbEF1eChhcnIsIF9pLCBfeCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHggPSBfeDtcbiAgICB2YXIgaSA9IF9pO1xuICAgIGlmICgheCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgYXJyW2ldID0geC5oZDtcbiAgICBfeCA9IHgudGw7XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXkoYSkge1xuICB2YXIgX2kgPSBhLmxlbmd0aCAtIDEgfCAwO1xuICB2YXIgX3JlcyA9IC8qIFtdICovMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciByZXMgPSBfcmVzO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBfcmVzID0ge1xuICAgICAgaGQ6IGFbaV0sXG4gICAgICB0bDogcmVzXG4gICAgfTtcbiAgICBfaSA9IGkgLSAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkoeCkge1xuICB2YXIgbGVuID0gbGVuZ3RoKHgpO1xuICB2YXIgYXJyID0gbmV3IEFycmF5KGxlbik7XG4gIGZpbGxBdXgoYXJyLCAwLCB4KTtcbiAgcmV0dXJuIGFycjtcbn1cblxuZnVuY3Rpb24gc2h1ZmZsZSh4cykge1xuICB2YXIgdiA9IHRvQXJyYXkoeHMpO1xuICBCZWx0X0FycmF5LnNodWZmbGVJblBsYWNlKHYpO1xuICByZXR1cm4gZnJvbUFycmF5KHYpO1xufVxuXG5mdW5jdGlvbiByZXZlcnNlQ29uY2F0KF9sMSwgX2wyKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIHJldHVybiBsMjtcbiAgICB9XG4gICAgX2wyID0ge1xuICAgICAgaGQ6IGwxLmhkLFxuICAgICAgdGw6IGwyXG4gICAgfTtcbiAgICBfbDEgPSBsMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJldmVyc2UobCkge1xuICByZXR1cm4gcmV2ZXJzZUNvbmNhdChsLCAvKiBbXSAqLzApO1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuQXV4KF9wcmVjLCBfeHMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICB2YXIgcHJlYyA9IF9wcmVjO1xuICAgIGlmICh4cykge1xuICAgICAgX3hzID0geHMudGw7XG4gICAgICBfcHJlYyA9IGNvcHlBdXhDb250KHhzLmhkLCBwcmVjKTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgcHJlYy50bCA9IC8qIFtdICovMDtcbiAgICByZXR1cm4gO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmbGF0dGVuKF94cykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiAvKiBbXSAqLzA7XG4gICAgfVxuICAgIHZhciBtYXRjaCA9IHhzLmhkO1xuICAgIGlmIChtYXRjaCkge1xuICAgICAgdmFyIGNlbGwgPSB7XG4gICAgICAgIGhkOiBtYXRjaC5oZCxcbiAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgfTtcbiAgICAgIGZsYXR0ZW5BdXgoY29weUF1eENvbnQobWF0Y2gudGwsIGNlbGwpLCB4cy50bCk7XG4gICAgICByZXR1cm4gY2VsbDtcbiAgICB9XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjb25jYXRNYW55KHhzKSB7XG4gIHZhciBsZW4gPSB4cy5sZW5ndGg7XG4gIGlmIChsZW4gPT09IDEpIHtcbiAgICByZXR1cm4geHNbMF07XG4gIH1cbiAgaWYgKGxlbiA9PT0gMCkge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgdmFyIGxlbiQxID0geHMubGVuZ3RoO1xuICB2YXIgdiA9IHhzW2xlbiQxIC0gMSB8IDBdO1xuICBmb3IodmFyIGkgPSBsZW4kMSAtIDIgfCAwOyBpID49IDA7IC0taSl7XG4gICAgdiA9IGNvbmNhdCh4c1tpXSwgdik7XG4gIH1cbiAgcmV0dXJuIHY7XG59XG5cbmZ1bmN0aW9uIG1hcFJldmVyc2VVKGwsIGYpIHtcbiAgdmFyIF9hY2N1ID0gLyogW10gKi8wO1xuICB2YXIgX3hzID0gbDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICB2YXIgYWNjdSA9IF9hY2N1O1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBfYWNjdSA9IHtcbiAgICAgIGhkOiBmKHhzLmhkKSxcbiAgICAgIHRsOiBhY2N1XG4gICAgfTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcFJldmVyc2UobCwgZikge1xuICByZXR1cm4gbWFwUmV2ZXJzZVUobCwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFUoX3hzLCBmKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgZih4cy5oZCk7XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoKHhzLCBmKSB7XG4gIHJldHVybiBmb3JFYWNoVSh4cywgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFdpdGhJbmRleFUobCwgZikge1xuICB2YXIgX3hzID0gbDtcbiAgdmFyIF9pID0gMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGYoaSwgeHMuaGQpO1xuICAgIF9pID0gaSArIDEgfCAwO1xuICAgIF94cyA9IHhzLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaFdpdGhJbmRleChsLCBmKSB7XG4gIHJldHVybiBmb3JFYWNoV2l0aEluZGV4VShsLCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VVKF9sLCBfYWNjdSwgZikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGFjY3UgPSBfYWNjdTtcbiAgICB2YXIgbCA9IF9sO1xuICAgIGlmICghbCkge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIF9hY2N1ID0gZihhY2N1LCBsLmhkKTtcbiAgICBfbCA9IGwudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2UobCwgYWNjdSwgZikge1xuICByZXR1cm4gcmVkdWNlVShsLCBhY2N1LCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlVW5zYWZlVShsLCBhY2N1LCBmKSB7XG4gIGlmIChsKSB7XG4gICAgcmV0dXJuIGYocmVkdWNlUmV2ZXJzZVVuc2FmZVUobC50bCwgYWNjdSwgZiksIGwuaGQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhY2N1O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2VVKGwsIGFjYywgZikge1xuICB2YXIgbGVuID0gbGVuZ3RoKGwpO1xuICBpZiAobGVuIDwgMTAwMCkge1xuICAgIHJldHVybiByZWR1Y2VSZXZlcnNlVW5zYWZlVShsLCBhY2MsIGYpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBCZWx0X0FycmF5LnJlZHVjZVJldmVyc2VVKHRvQXJyYXkobCksIGFjYywgZik7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVkdWNlUmV2ZXJzZShsLCBhY2N1LCBmKSB7XG4gIHJldHVybiByZWR1Y2VSZXZlcnNlVShsLCBhY2N1LCBDdXJyeS5fXzIoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VXaXRoSW5kZXhVKGwsIGFjYywgZikge1xuICB2YXIgX2wgPSBsO1xuICB2YXIgX2FjYyA9IGFjYztcbiAgdmFyIF9pID0gMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBpID0gX2k7XG4gICAgdmFyIGFjYyQxID0gX2FjYztcbiAgICB2YXIgbCQxID0gX2w7XG4gICAgaWYgKCFsJDEpIHtcbiAgICAgIHJldHVybiBhY2MkMTtcbiAgICB9XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgX2FjYyA9IGYoYWNjJDEsIGwkMS5oZCwgaSk7XG4gICAgX2wgPSBsJDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VXaXRoSW5kZXgobCwgYWNjLCBmKSB7XG4gIHJldHVybiByZWR1Y2VXaXRoSW5kZXhVKGwsIGFjYywgQ3VycnkuX18zKGYpKTtcbn1cblxuZnVuY3Rpb24gbWFwUmV2ZXJzZTJVKGwxLCBsMiwgZikge1xuICB2YXIgX2wxID0gbDE7XG4gIHZhciBfbDIgPSBsMjtcbiAgdmFyIF9hY2N1ID0gLyogW10gKi8wO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGFjY3UgPSBfYWNjdTtcbiAgICB2YXIgbDIkMSA9IF9sMjtcbiAgICB2YXIgbDEkMSA9IF9sMTtcbiAgICBpZiAoIWwxJDEpIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgICBpZiAoIWwyJDEpIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgICBfYWNjdSA9IHtcbiAgICAgIGhkOiBmKGwxJDEuaGQsIGwyJDEuaGQpLFxuICAgICAgdGw6IGFjY3VcbiAgICB9O1xuICAgIF9sMiA9IGwyJDEudGw7XG4gICAgX2wxID0gbDEkMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcFJldmVyc2UyKGwxLCBsMiwgZikge1xuICByZXR1cm4gbWFwUmV2ZXJzZTJVKGwxLCBsMiwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaDJVKF9sMSwgX2wyLCBmKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGlmICghbDIpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIGYobDEuaGQsIGwyLmhkKTtcbiAgICBfbDIgPSBsMi50bDtcbiAgICBfbDEgPSBsMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvckVhY2gyKGwxLCBsMiwgZikge1xuICByZXR1cm4gZm9yRWFjaDJVKGwxLCBsMiwgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlMlUoX2wxLCBfbDIsIF9hY2N1LCBmKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgYWNjdSA9IF9hY2N1O1xuICAgIHZhciBsMiA9IF9sMjtcbiAgICB2YXIgbDEgPSBfbDE7XG4gICAgaWYgKCFsMSkge1xuICAgICAgcmV0dXJuIGFjY3U7XG4gICAgfVxuICAgIGlmICghbDIpIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgICBfYWNjdSA9IGYoYWNjdSwgbDEuaGQsIGwyLmhkKTtcbiAgICBfbDIgPSBsMi50bDtcbiAgICBfbDEgPSBsMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZTIobDEsIGwyLCBhY2MsIGYpIHtcbiAgcmV0dXJuIHJlZHVjZTJVKGwxLCBsMiwgYWNjLCBDdXJyeS5fXzMoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VSZXZlcnNlMlVuc2FmZVUobDEsIGwyLCBhY2N1LCBmKSB7XG4gIGlmIChsMSAmJiBsMikge1xuICAgIHJldHVybiBmKHJlZHVjZVJldmVyc2UyVW5zYWZlVShsMS50bCwgbDIudGwsIGFjY3UsIGYpLCBsMS5oZCwgbDIuaGQpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhY2N1O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2UyVShsMSwgbDIsIGFjYywgZikge1xuICB2YXIgbGVuID0gbGVuZ3RoKGwxKTtcbiAgaWYgKGxlbiA8IDEwMDApIHtcbiAgICByZXR1cm4gcmVkdWNlUmV2ZXJzZTJVbnNhZmVVKGwxLCBsMiwgYWNjLCBmKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQmVsdF9BcnJheS5yZWR1Y2VSZXZlcnNlMlUodG9BcnJheShsMSksIHRvQXJyYXkobDIpLCBhY2MsIGYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZVJldmVyc2UyKGwxLCBsMiwgYWNjLCBmKSB7XG4gIHJldHVybiByZWR1Y2VSZXZlcnNlMlUobDEsIGwyLCBhY2MsIEN1cnJ5Ll9fMyhmKSk7XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5VShfeHMsIHApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFwKHhzLmhkKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5KHhzLCBwKSB7XG4gIHJldHVybiBldmVyeVUoeHMsIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIHNvbWVVKF94cywgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHAoeHMuaGQpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzb21lKHhzLCBwKSB7XG4gIHJldHVybiBzb21lVSh4cywgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gZXZlcnkyVShfbDEsIF9sMiwgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwyID0gX2wyO1xuICAgIHZhciBsMSA9IF9sMTtcbiAgICBpZiAoIWwxKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGlmICghcChsMS5oZCwgbDIuaGQpKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF9sMiA9IGwyLnRsO1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZXZlcnkyKGwxLCBsMiwgcCkge1xuICByZXR1cm4gZXZlcnkyVShsMSwgbDIsIEN1cnJ5Ll9fMihwKSk7XG59XG5cbmZ1bmN0aW9uIGNtcEJ5TGVuZ3RoKF9sMSwgX2wyKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIGlmIChsMikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9IGVsc2Uge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICB9XG4gICAgaWYgKCFsMikge1xuICAgICAgcmV0dXJuIDE7XG4gICAgfVxuICAgIF9sMiA9IGwyLnRsO1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY21wVShfbDEsIF9sMiwgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwyID0gX2wyO1xuICAgIHZhciBsMSA9IF9sMTtcbiAgICBpZiAoIWwxKSB7XG4gICAgICBpZiAobDIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIDA7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbDIpIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgICB2YXIgYyA9IHAobDEuaGQsIGwyLmhkKTtcbiAgICBpZiAoYyAhPT0gMCkge1xuICAgICAgcmV0dXJuIGM7XG4gICAgfVxuICAgIF9sMiA9IGwyLnRsO1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gY21wKGwxLCBsMiwgZikge1xuICByZXR1cm4gY21wVShsMSwgbDIsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIGVxVShfbDEsIF9sMiwgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwyID0gX2wyO1xuICAgIHZhciBsMSA9IF9sMTtcbiAgICBpZiAoIWwxKSB7XG4gICAgICBpZiAobDIpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICB9XG4gICAgfVxuICAgIGlmICghbDIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFwKGwxLmhkLCBsMi5oZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX2wyID0gbDIudGw7XG4gICAgX2wxID0gbDEudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBlcShsMSwgbDIsIGYpIHtcbiAgcmV0dXJuIGVxVShsMSwgbDIsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIHNvbWUyVShfbDEsIF9sMiwgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGwyID0gX2wyO1xuICAgIHZhciBsMSA9IF9sMTtcbiAgICBpZiAoIWwxKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghbDIpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKHAobDEuaGQsIGwyLmhkKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF9sMiA9IGwyLnRsO1xuICAgIF9sMSA9IGwxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc29tZTIobDEsIGwyLCBwKSB7XG4gIHJldHVybiBzb21lMlUobDEsIGwyLCBDdXJyeS5fXzIocCkpO1xufVxuXG5mdW5jdGlvbiBoYXNVKF94cywgeCwgZXEpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyA9IF94cztcbiAgICBpZiAoIXhzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChlcSh4cy5oZCwgeCkpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBfeHMgPSB4cy50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGhhcyh4cywgeCwgZXEpIHtcbiAgcmV0dXJuIGhhc1UoeHMsIHgsIEN1cnJ5Ll9fMihlcSkpO1xufVxuXG5mdW5jdGlvbiBnZXRBc3NvY1UoX3hzLCB4LCBlcSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciBtYXRjaCA9IHhzLmhkO1xuICAgIGlmIChlcShtYXRjaFswXSwgeCkpIHtcbiAgICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKG1hdGNoWzFdKTtcbiAgICB9XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBnZXRBc3NvYyh4cywgeCwgZXEpIHtcbiAgcmV0dXJuIGdldEFzc29jVSh4cywgeCwgQ3VycnkuX18yKGVxKSk7XG59XG5cbmZ1bmN0aW9uIGhhc0Fzc29jVShfeHMsIHgsIGVxKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBpZiAoZXEoeHMuaGRbMF0sIHgpKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBoYXNBc3NvYyh4cywgeCwgZXEpIHtcbiAgcmV0dXJuIGhhc0Fzc29jVSh4cywgeCwgQ3VycnkuX18yKGVxKSk7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFzc29jVSh4cywgeCwgZXEpIHtcbiAgaWYgKCF4cykge1xuICAgIHJldHVybiAvKiBbXSAqLzA7XG4gIH1cbiAgdmFyIGwgPSB4cy50bDtcbiAgdmFyIHBhaXIgPSB4cy5oZDtcbiAgaWYgKGVxKHBhaXJbMF0sIHgpKSB7XG4gICAgcmV0dXJuIGw7XG4gIH1cbiAgdmFyIGNlbGwgPSB7XG4gICAgaGQ6IHBhaXIsXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICB2YXIgcmVtb3ZlZCA9IHJlbW92ZUFzc29jQXV4V2l0aE1hcChsLCB4LCBjZWxsLCBlcSk7XG4gIGlmIChyZW1vdmVkKSB7XG4gICAgcmV0dXJuIGNlbGw7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHhzO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlbW92ZUFzc29jKHhzLCB4LCBlcSkge1xuICByZXR1cm4gcmVtb3ZlQXNzb2NVKHhzLCB4LCBDdXJyeS5fXzIoZXEpKTtcbn1cblxuZnVuY3Rpb24gc2V0QXNzb2NVKHhzLCB4LCBrLCBlcSkge1xuICBpZiAoIXhzKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiBbXG4gICAgICAgICAgICAgIHgsXG4gICAgICAgICAgICAgIGtcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgfTtcbiAgfVxuICB2YXIgbCA9IHhzLnRsO1xuICB2YXIgcGFpciA9IHhzLmhkO1xuICBpZiAoZXEocGFpclswXSwgeCkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IFtcbiAgICAgICAgICAgICAgeCxcbiAgICAgICAgICAgICAga1xuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIHRsOiBsXG4gICAgICAgICAgfTtcbiAgfVxuICB2YXIgY2VsbCA9IHtcbiAgICBoZDogcGFpcixcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciByZXBsYWNlZCA9IHNldEFzc29jQXV4V2l0aE1hcChsLCB4LCBrLCBjZWxsLCBlcSk7XG4gIGlmIChyZXBsYWNlZCkge1xuICAgIHJldHVybiBjZWxsO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZDogW1xuICAgICAgICAgICAgICB4LFxuICAgICAgICAgICAgICBrXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgdGw6IHhzXG4gICAgICAgICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzZXRBc3NvYyh4cywgeCwgaywgZXEpIHtcbiAgcmV0dXJuIHNldEFzc29jVSh4cywgeCwgaywgQ3VycnkuX18yKGVxKSk7XG59XG5cbmZ1bmN0aW9uIHNvcnRVKHhzLCBjbXApIHtcbiAgdmFyIGFyciA9IHRvQXJyYXkoeHMpO1xuICBCZWx0X1NvcnRBcnJheS5zdGFibGVTb3J0SW5QbGFjZUJ5VShhcnIsIGNtcCk7XG4gIHJldHVybiBmcm9tQXJyYXkoYXJyKTtcbn1cblxuZnVuY3Rpb24gc29ydCh4cywgY21wKSB7XG4gIHJldHVybiBzb3J0VSh4cywgQ3VycnkuX18yKGNtcCkpO1xufVxuXG5mdW5jdGlvbiBnZXRCeVUoX3hzLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIHggPSB4cy5oZDtcbiAgICBpZiAocCh4KSkge1xuICAgICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoeCk7XG4gICAgfVxuICAgIF94cyA9IHhzLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0QnkoeHMsIHApIHtcbiAgcmV0dXJuIGdldEJ5VSh4cywgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24ga2VlcFUoX3hzLCBwKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIC8qIFtdICovMDtcbiAgICB9XG4gICAgdmFyIHQgPSB4cy50bDtcbiAgICB2YXIgaCA9IHhzLmhkO1xuICAgIGlmIChwKGgpKSB7XG4gICAgICB2YXIgY2VsbCA9IHtcbiAgICAgICAgaGQ6IGgsXG4gICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgIH07XG4gICAgICBjb3B5QXV4V2l0RmlsdGVyKHAsIHQsIGNlbGwpO1xuICAgICAgcmV0dXJuIGNlbGw7XG4gICAgfVxuICAgIF94cyA9IHQ7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBrZWVwKHhzLCBwKSB7XG4gIHJldHVybiBrZWVwVSh4cywgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24ga2VlcFdpdGhJbmRleFUoeHMsIHApIHtcbiAgdmFyIF94cyA9IHhzO1xuICB2YXIgX2kgPSAwO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICB2YXIgeHMkMSA9IF94cztcbiAgICBpZiAoIXhzJDEpIHtcbiAgICAgIHJldHVybiAvKiBbXSAqLzA7XG4gICAgfVxuICAgIHZhciB0ID0geHMkMS50bDtcbiAgICB2YXIgaCA9IHhzJDEuaGQ7XG4gICAgaWYgKHAoaCwgaSkpIHtcbiAgICAgIHZhciBjZWxsID0ge1xuICAgICAgICBoZDogaCxcbiAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgfTtcbiAgICAgIGNvcHlBdXhXaXRoRmlsdGVySW5kZXgocCwgdCwgY2VsbCwgaSArIDEgfCAwKTtcbiAgICAgIHJldHVybiBjZWxsO1xuICAgIH1cbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBfeHMgPSB0O1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24ga2VlcFdpdGhJbmRleCh4cywgcCkge1xuICByZXR1cm4ga2VlcFdpdGhJbmRleFUoeHMsIEN1cnJ5Ll9fMihwKSk7XG59XG5cbmZ1bmN0aW9uIGtlZXBNYXBVKF94cywgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiAvKiBbXSAqLzA7XG4gICAgfVxuICAgIHZhciB0ID0geHMudGw7XG4gICAgdmFyIGggPSBwKHhzLmhkKTtcbiAgICBpZiAoaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICB2YXIgY2VsbCA9IHtcbiAgICAgICAgaGQ6IENhbWxfb3B0aW9uLnZhbEZyb21PcHRpb24oaCksXG4gICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgIH07XG4gICAgICBjb3B5QXV4V2l0RmlsdGVyTWFwKHAsIHQsIGNlbGwpO1xuICAgICAgcmV0dXJuIGNlbGw7XG4gICAgfVxuICAgIF94cyA9IHQ7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBrZWVwTWFwKHhzLCBwKSB7XG4gIHJldHVybiBrZWVwTWFwVSh4cywgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uVShsLCBwKSB7XG4gIGlmICghbCkge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICAvKiBbXSAqLzAsXG4gICAgICAgICAgICAvKiBbXSAqLzBcbiAgICAgICAgICBdO1xuICB9XG4gIHZhciBoID0gbC5oZDtcbiAgdmFyIG5leHRYID0ge1xuICAgIGhkOiBoLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIG5leHRZID0ge1xuICAgIGhkOiBoLFxuICAgIHRsOiAvKiBbXSAqLzBcbiAgfTtcbiAgdmFyIGIgPSBwKGgpO1xuICBwYXJ0aXRpb25BdXgocCwgbC50bCwgbmV4dFgsIG5leHRZKTtcbiAgaWYgKGIpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgbmV4dFgsXG4gICAgICAgICAgICBuZXh0WS50bFxuICAgICAgICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG5leHRYLnRsLFxuICAgICAgICAgICAgbmV4dFlcbiAgICAgICAgICBdO1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnRpdGlvbihsLCBwKSB7XG4gIHJldHVybiBwYXJ0aXRpb25VKGwsIEN1cnJ5Ll9fMShwKSk7XG59XG5cbmZ1bmN0aW9uIHVuemlwKHhzKSB7XG4gIGlmICgheHMpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgLyogW10gKi8wLFxuICAgICAgICAgICAgLyogW10gKi8wXG4gICAgICAgICAgXTtcbiAgfVxuICB2YXIgbWF0Y2ggPSB4cy5oZDtcbiAgdmFyIGNlbGxYID0ge1xuICAgIGhkOiBtYXRjaFswXSxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHZhciBjZWxsWSA9IHtcbiAgICBoZDogbWF0Y2hbMV0sXG4gICAgdGw6IC8qIFtdICovMFxuICB9O1xuICBzcGxpdEF1eCh4cy50bCwgY2VsbFgsIGNlbGxZKTtcbiAgcmV0dXJuIFtcbiAgICAgICAgICBjZWxsWCxcbiAgICAgICAgICBjZWxsWVxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiB6aXAobDEsIGwyKSB7XG4gIGlmICghbDEpIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIGlmICghbDIpIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG4gIHZhciBjZWxsID0ge1xuICAgIGhkOiBbXG4gICAgICBsMS5oZCxcbiAgICAgIGwyLmhkXG4gICAgXSxcbiAgICB0bDogLyogW10gKi8wXG4gIH07XG4gIHppcEF1eChsMS50bCwgbDIudGwsIGNlbGwpO1xuICByZXR1cm4gY2VsbDtcbn1cblxudmFyIHNpemUgPSBsZW5ndGg7XG5cbnZhciBmaWx0ZXIgPSBrZWVwO1xuXG52YXIgZmlsdGVyV2l0aEluZGV4ID0ga2VlcFdpdGhJbmRleDtcblxuZXhwb3J0IHtcbiAgbGVuZ3RoICxcbiAgc2l6ZSAsXG4gIGhlYWQgLFxuICBoZWFkRXhuICxcbiAgdGFpbCAsXG4gIHRhaWxFeG4gLFxuICBhZGQgLFxuICBnZXQgLFxuICBnZXRFeG4gLFxuICBtYWtlICxcbiAgbWFrZUJ5VSAsXG4gIG1ha2VCeSAsXG4gIHNodWZmbGUgLFxuICBkcm9wICxcbiAgdGFrZSAsXG4gIHNwbGl0QXQgLFxuICBjb25jYXQgLFxuICBjb25jYXRNYW55ICxcbiAgcmV2ZXJzZUNvbmNhdCAsXG4gIGZsYXR0ZW4gLFxuICBtYXBVICxcbiAgbWFwICxcbiAgemlwICxcbiAgemlwQnlVICxcbiAgemlwQnkgLFxuICBtYXBXaXRoSW5kZXhVICxcbiAgbWFwV2l0aEluZGV4ICxcbiAgZnJvbUFycmF5ICxcbiAgdG9BcnJheSAsXG4gIHJldmVyc2UgLFxuICBtYXBSZXZlcnNlVSAsXG4gIG1hcFJldmVyc2UgLFxuICBmb3JFYWNoVSAsXG4gIGZvckVhY2ggLFxuICBmb3JFYWNoV2l0aEluZGV4VSAsXG4gIGZvckVhY2hXaXRoSW5kZXggLFxuICByZWR1Y2VVICxcbiAgcmVkdWNlICxcbiAgcmVkdWNlV2l0aEluZGV4VSAsXG4gIHJlZHVjZVdpdGhJbmRleCAsXG4gIHJlZHVjZVJldmVyc2VVICxcbiAgcmVkdWNlUmV2ZXJzZSAsXG4gIG1hcFJldmVyc2UyVSAsXG4gIG1hcFJldmVyc2UyICxcbiAgZm9yRWFjaDJVICxcbiAgZm9yRWFjaDIgLFxuICByZWR1Y2UyVSAsXG4gIHJlZHVjZTIgLFxuICByZWR1Y2VSZXZlcnNlMlUgLFxuICByZWR1Y2VSZXZlcnNlMiAsXG4gIGV2ZXJ5VSAsXG4gIGV2ZXJ5ICxcbiAgc29tZVUgLFxuICBzb21lICxcbiAgZXZlcnkyVSAsXG4gIGV2ZXJ5MiAsXG4gIHNvbWUyVSAsXG4gIHNvbWUyICxcbiAgY21wQnlMZW5ndGggLFxuICBjbXBVICxcbiAgY21wICxcbiAgZXFVICxcbiAgZXEgLFxuICBoYXNVICxcbiAgaGFzICxcbiAgZ2V0QnlVICxcbiAgZ2V0QnkgLFxuICBrZWVwVSAsXG4gIGtlZXAgLFxuICBmaWx0ZXIgLFxuICBrZWVwV2l0aEluZGV4VSAsXG4gIGtlZXBXaXRoSW5kZXggLFxuICBmaWx0ZXJXaXRoSW5kZXggLFxuICBrZWVwTWFwVSAsXG4gIGtlZXBNYXAgLFxuICBwYXJ0aXRpb25VICxcbiAgcGFydGl0aW9uICxcbiAgdW56aXAgLFxuICBnZXRBc3NvY1UgLFxuICBnZXRBc3NvYyAsXG4gIGhhc0Fzc29jVSAsXG4gIGhhc0Fzc29jICxcbiAgcmVtb3ZlQXNzb2NVICxcbiAgcmVtb3ZlQXNzb2MgLFxuICBzZXRBc3NvY1UgLFxuICBzZXRBc3NvYyAsXG4gIHNvcnRVICxcbiAgc29ydCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwiLi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9TZXREaWN0IGZyb20gXCIuL2JlbHRfU2V0RGljdC5qc1wiO1xuXG5mdW5jdGlvbiBmcm9tQXJyYXkoZGF0YSwgaWQpIHtcbiAgdmFyIGNtcCA9IGlkLmNtcDtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBjbXA6IGNtcCxcbiAgICAgICAgICBkYXRhOiBCZWx0X1NldERpY3QuZnJvbUFycmF5KGRhdGEsIGNtcClcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlKG0sIGUpIHtcbiAgdmFyIGRhdGEgPSBtLmRhdGE7XG4gIHZhciBjbXAgPSBtLmNtcDtcbiAgdmFyIG5ld0RhdGEgPSBCZWx0X1NldERpY3QucmVtb3ZlKGRhdGEsIGUsIGNtcCk7XG4gIGlmIChuZXdEYXRhID09PSBkYXRhKSB7XG4gICAgcmV0dXJuIG07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNtcDogY21wLFxuICAgICAgICAgICAgZGF0YTogbmV3RGF0YVxuICAgICAgICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gYWRkKG0sIGUpIHtcbiAgdmFyIGRhdGEgPSBtLmRhdGE7XG4gIHZhciBjbXAgPSBtLmNtcDtcbiAgdmFyIG5ld0RhdGEgPSBCZWx0X1NldERpY3QuYWRkKGRhdGEsIGUsIGNtcCk7XG4gIGlmIChuZXdEYXRhID09PSBkYXRhKSB7XG4gICAgcmV0dXJuIG07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGNtcDogY21wLFxuICAgICAgICAgICAgZGF0YTogbmV3RGF0YVxuICAgICAgICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gbWVyZ2VNYW55KG0sIGUpIHtcbiAgdmFyIGNtcCA9IG0uY21wO1xuICByZXR1cm4ge1xuICAgICAgICAgIGNtcDogY21wLFxuICAgICAgICAgIGRhdGE6IEJlbHRfU2V0RGljdC5tZXJnZU1hbnkobS5kYXRhLCBlLCBjbXApXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1hbnkobSwgZSkge1xuICB2YXIgY21wID0gbS5jbXA7XG4gIHJldHVybiB7XG4gICAgICAgICAgY21wOiBjbXAsXG4gICAgICAgICAgZGF0YTogQmVsdF9TZXREaWN0LnJlbW92ZU1hbnkobS5kYXRhLCBlLCBjbXApXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHVuaW9uKG0sIG4pIHtcbiAgdmFyIGNtcCA9IG0uY21wO1xuICByZXR1cm4ge1xuICAgICAgICAgIGNtcDogY21wLFxuICAgICAgICAgIGRhdGE6IEJlbHRfU2V0RGljdC51bmlvbihtLmRhdGEsIG4uZGF0YSwgY21wKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBpbnRlcnNlY3QobSwgbikge1xuICB2YXIgY21wID0gbS5jbXA7XG4gIHJldHVybiB7XG4gICAgICAgICAgY21wOiBjbXAsXG4gICAgICAgICAgZGF0YTogQmVsdF9TZXREaWN0LmludGVyc2VjdChtLmRhdGEsIG4uZGF0YSwgY21wKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBkaWZmKG0sIG4pIHtcbiAgdmFyIGNtcCA9IG0uY21wO1xuICByZXR1cm4ge1xuICAgICAgICAgIGNtcDogY21wLFxuICAgICAgICAgIGRhdGE6IEJlbHRfU2V0RGljdC5kaWZmKG0uZGF0YSwgbi5kYXRhLCBjbXApXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHN1YnNldChtLCBuKSB7XG4gIHZhciBjbXAgPSBtLmNtcDtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5zdWJzZXQobS5kYXRhLCBuLmRhdGEsIGNtcCk7XG59XG5cbmZ1bmN0aW9uIHNwbGl0KG0sIGUpIHtcbiAgdmFyIGNtcCA9IG0uY21wO1xuICB2YXIgbWF0Y2ggPSBCZWx0X1NldERpY3Quc3BsaXQobS5kYXRhLCBlLCBjbXApO1xuICB2YXIgbWF0Y2gkMSA9IG1hdGNoWzBdO1xuICByZXR1cm4gW1xuICAgICAgICAgIFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgY21wOiBjbXAsXG4gICAgICAgICAgICAgIGRhdGE6IG1hdGNoJDFbMF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIGNtcDogY21wLFxuICAgICAgICAgICAgICBkYXRhOiBtYXRjaCQxWzFdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXSxcbiAgICAgICAgICBtYXRjaFsxXVxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBtYWtlKGlkKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgY21wOiBpZC5jbXAsXG4gICAgICAgICAgZGF0YTogdW5kZWZpbmVkXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkobSkge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LmlzRW1wdHkobS5kYXRhKTtcbn1cblxuZnVuY3Rpb24gY21wKG0sIG4pIHtcbiAgdmFyIGNtcCQxID0gbS5jbXA7XG4gIHJldHVybiBCZWx0X1NldERpY3QuY21wKG0uZGF0YSwgbi5kYXRhLCBjbXAkMSk7XG59XG5cbmZ1bmN0aW9uIGVxKG0sIG4pIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5lcShtLmRhdGEsIG4uZGF0YSwgbS5jbXApO1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoVShtLCBmKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QuZm9yRWFjaFUobS5kYXRhLCBmKTtcbn1cblxuZnVuY3Rpb24gZm9yRWFjaChtLCBmKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QuZm9yRWFjaFUobS5kYXRhLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VVKG0sIGFjYywgZikge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LnJlZHVjZVUobS5kYXRhLCBhY2MsIGYpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2UobSwgYWNjLCBmKSB7XG4gIHJldHVybiByZWR1Y2VVKG0sIGFjYywgQ3VycnkuX18yKGYpKTtcbn1cblxuZnVuY3Rpb24gZXZlcnlVKG0sIGYpIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5ldmVyeVUobS5kYXRhLCBmKTtcbn1cblxuZnVuY3Rpb24gZXZlcnkobSwgZikge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LmV2ZXJ5VShtLmRhdGEsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIHNvbWVVKG0sIGYpIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5zb21lVShtLmRhdGEsIGYpO1xufVxuXG5mdW5jdGlvbiBzb21lKG0sIGYpIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5zb21lVShtLmRhdGEsIEN1cnJ5Ll9fMShmKSk7XG59XG5cbmZ1bmN0aW9uIGtlZXBVKG0sIGYpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBjbXA6IG0uY21wLFxuICAgICAgICAgIGRhdGE6IEJlbHRfU2V0RGljdC5rZWVwVShtLmRhdGEsIGYpXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGtlZXAobSwgZikge1xuICByZXR1cm4ga2VlcFUobSwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uVShtLCBmKSB7XG4gIHZhciBtYXRjaCA9IEJlbHRfU2V0RGljdC5wYXJ0aXRpb25VKG0uZGF0YSwgZik7XG4gIHZhciBjbXAgPSBtLmNtcDtcbiAgcmV0dXJuIFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbXA6IGNtcCxcbiAgICAgICAgICAgIGRhdGE6IG1hdGNoWzBdXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBjbXA6IGNtcCxcbiAgICAgICAgICAgIGRhdGE6IG1hdGNoWzFdXG4gICAgICAgICAgfVxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb24obSwgZikge1xuICByZXR1cm4gcGFydGl0aW9uVShtLCBDdXJyeS5fXzEoZikpO1xufVxuXG5mdW5jdGlvbiBzaXplKG0pIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5zaXplKG0uZGF0YSk7XG59XG5cbmZ1bmN0aW9uIHRvTGlzdChtKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QudG9MaXN0KG0uZGF0YSk7XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkobSkge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LnRvQXJyYXkobS5kYXRhKTtcbn1cblxuZnVuY3Rpb24gbWluaW11bShtKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QubWluaW11bShtLmRhdGEpO1xufVxuXG5mdW5jdGlvbiBtaW5VbmRlZmluZWQobSkge1xuICByZXR1cm4gQmVsdF9TZXREaWN0Lm1pblVuZGVmaW5lZChtLmRhdGEpO1xufVxuXG5mdW5jdGlvbiBtYXhpbXVtKG0pIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5tYXhpbXVtKG0uZGF0YSk7XG59XG5cbmZ1bmN0aW9uIG1heFVuZGVmaW5lZChtKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QubWF4VW5kZWZpbmVkKG0uZGF0YSk7XG59XG5cbmZ1bmN0aW9uIGdldChtLCBlKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QuZ2V0KG0uZGF0YSwgZSwgbS5jbXApO1xufVxuXG5mdW5jdGlvbiBnZXRVbmRlZmluZWQobSwgZSkge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LmdldFVuZGVmaW5lZChtLmRhdGEsIGUsIG0uY21wKTtcbn1cblxuZnVuY3Rpb24gZ2V0RXhuKG0sIGUpIHtcbiAgcmV0dXJuIEJlbHRfU2V0RGljdC5nZXRFeG4obS5kYXRhLCBlLCBtLmNtcCk7XG59XG5cbmZ1bmN0aW9uIGhhcyhtLCBlKSB7XG4gIHJldHVybiBCZWx0X1NldERpY3QuaGFzKG0uZGF0YSwgZSwgbS5jbXApO1xufVxuXG5mdW5jdGlvbiBmcm9tU29ydGVkQXJyYXlVbnNhZmUoeHMsIGlkKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgY21wOiBpZC5jbXAsXG4gICAgICAgICAgZGF0YTogQmVsdF9TZXREaWN0LmZyb21Tb3J0ZWRBcnJheVVuc2FmZSh4cylcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RGF0YShtKSB7XG4gIHJldHVybiBtLmRhdGE7XG59XG5cbmZ1bmN0aW9uIGdldElkKG0pIHtcbiAgdmFyIGNtcCA9IG0uY21wO1xuICByZXR1cm4ge1xuICAgICAgICAgIGNtcDogY21wXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHBhY2tJZERhdGEoaWQsIGRhdGEpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBjbXA6IGlkLmNtcCxcbiAgICAgICAgICBkYXRhOiBkYXRhXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGNoZWNrSW52YXJpYW50SW50ZXJuYWwoZCkge1xuICByZXR1cm4gQmVsdF9TZXREaWN0LmNoZWNrSW52YXJpYW50SW50ZXJuYWwoZC5kYXRhKTtcbn1cblxudmFyIEludDtcblxudmFyICQkU3RyaW5nO1xuXG52YXIgRGljdDtcblxuZXhwb3J0IHtcbiAgSW50ICxcbiAgJCRTdHJpbmcgLFxuICBEaWN0ICxcbiAgbWFrZSAsXG4gIGZyb21BcnJheSAsXG4gIGZyb21Tb3J0ZWRBcnJheVVuc2FmZSAsXG4gIGlzRW1wdHkgLFxuICBoYXMgLFxuICBhZGQgLFxuICBtZXJnZU1hbnkgLFxuICByZW1vdmUgLFxuICByZW1vdmVNYW55ICxcbiAgdW5pb24gLFxuICBpbnRlcnNlY3QgLFxuICBkaWZmICxcbiAgc3Vic2V0ICxcbiAgY21wICxcbiAgZXEgLFxuICBmb3JFYWNoVSAsXG4gIGZvckVhY2ggLFxuICByZWR1Y2VVICxcbiAgcmVkdWNlICxcbiAgZXZlcnlVICxcbiAgZXZlcnkgLFxuICBzb21lVSAsXG4gIHNvbWUgLFxuICBrZWVwVSAsXG4gIGtlZXAgLFxuICBwYXJ0aXRpb25VICxcbiAgcGFydGl0aW9uICxcbiAgc2l6ZSAsXG4gIHRvQXJyYXkgLFxuICB0b0xpc3QgLFxuICBtaW5pbXVtICxcbiAgbWluVW5kZWZpbmVkICxcbiAgbWF4aW11bSAsXG4gIG1heFVuZGVmaW5lZCAsXG4gIGdldCAsXG4gIGdldFVuZGVmaW5lZCAsXG4gIGdldEV4biAsXG4gIHNwbGl0ICxcbiAgY2hlY2tJbnZhcmlhbnRJbnRlcm5hbCAsXG4gIGdldERhdGEgLFxuICBnZXRJZCAsXG4gIHBhY2tJZERhdGEgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQmVsdF9pbnRlcm5hbEFWTHNldCBmcm9tIFwiLi9iZWx0X2ludGVybmFsQVZMc2V0LmpzXCI7XG5cbmZ1bmN0aW9uIGFkZCh0LCB4LCBjbXApIHtcbiAgaWYgKHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LnNpbmdsZXRvbih4KTtcbiAgfVxuICB2YXIgayA9IHQudjtcbiAgdmFyIGMgPSBjbXAoeCwgayk7XG4gIGlmIChjID09PSAwKSB7XG4gICAgcmV0dXJuIHQ7XG4gIH1cbiAgdmFyIGwgPSB0Lmw7XG4gIHZhciByID0gdC5yO1xuICBpZiAoYyA8IDApIHtcbiAgICB2YXIgbGwgPSBhZGQobCwgeCwgY21wKTtcbiAgICBpZiAobGwgPT09IGwpIHtcbiAgICAgIHJldHVybiB0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5iYWwobGwsIGssIHIpO1xuICAgIH1cbiAgfVxuICB2YXIgcnIgPSBhZGQociwgeCwgY21wKTtcbiAgaWYgKHJyID09PSByKSB7XG4gICAgcmV0dXJuIHQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEJlbHRfaW50ZXJuYWxBVkxzZXQuYmFsKGwsIGssIHJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByZW1vdmUodCwgeCwgY21wKSB7XG4gIGlmICh0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gdDtcbiAgfVxuICB2YXIgdiA9IHQudjtcbiAgdmFyIGwgPSB0Lmw7XG4gIHZhciByID0gdC5yO1xuICB2YXIgYyA9IGNtcCh4LCB2KTtcbiAgaWYgKGMgPT09IDApIHtcbiAgICBpZiAobCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gcjtcbiAgICB9XG4gICAgaWYgKHIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGw7XG4gICAgfVxuICAgIHZhciB2JDEgPSB7XG4gICAgICBjb250ZW50czogci52XG4gICAgfTtcbiAgICB2YXIgciQxID0gQmVsdF9pbnRlcm5hbEFWTHNldC5yZW1vdmVNaW5BdXhXaXRoUmVmKHIsIHYkMSk7XG4gICAgcmV0dXJuIEJlbHRfaW50ZXJuYWxBVkxzZXQuYmFsKGwsIHYkMS5jb250ZW50cywgciQxKTtcbiAgfVxuICBpZiAoYyA8IDApIHtcbiAgICB2YXIgbGwgPSByZW1vdmUobCwgeCwgY21wKTtcbiAgICBpZiAobGwgPT09IGwpIHtcbiAgICAgIHJldHVybiB0O1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5iYWwobGwsIHYsIHIpO1xuICAgIH1cbiAgfVxuICB2YXIgcnIgPSByZW1vdmUociwgeCwgY21wKTtcbiAgaWYgKHJyID09PSByKSB7XG4gICAgcmV0dXJuIHQ7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEJlbHRfaW50ZXJuYWxBVkxzZXQuYmFsKGwsIHYsIHJyKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBtZXJnZU1hbnkoaCwgYXJyLCBjbXApIHtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIHZhciB2ID0gaDtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGxlbjsgKytpKXtcbiAgICB2YXIga2V5ID0gYXJyW2ldO1xuICAgIHYgPSBhZGQodiwga2V5LCBjbXApO1xuICB9XG4gIHJldHVybiB2O1xufVxuXG5mdW5jdGlvbiByZW1vdmVNYW55KGgsIGFyciwgY21wKSB7XG4gIHZhciBsZW4gPSBhcnIubGVuZ3RoO1xuICB2YXIgdiA9IGg7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgdmFyIGtleSA9IGFycltpXTtcbiAgICB2ID0gcmVtb3ZlKHYsIGtleSwgY21wKTtcbiAgfVxuICByZXR1cm4gdjtcbn1cblxuZnVuY3Rpb24gc3BsaXRBdXhOb1Bpdm90KGNtcCwgbiwgeCkge1xuICB2YXIgdiA9IG4udjtcbiAgdmFyIGwgPSBuLmw7XG4gIHZhciByID0gbi5yO1xuICB2YXIgYyA9IGNtcCh4LCB2KTtcbiAgaWYgKGMgPT09IDApIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgbCxcbiAgICAgICAgICAgIHJcbiAgICAgICAgICBdO1xuICB9XG4gIGlmIChjIDwgMCkge1xuICAgIGlmIChsID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgblxuICAgICAgICAgICAgXTtcbiAgICB9XG4gICAgdmFyIG1hdGNoID0gc3BsaXRBdXhOb1Bpdm90KGNtcCwgbCwgeCk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG1hdGNoWzBdLFxuICAgICAgICAgICAgQmVsdF9pbnRlcm5hbEFWTHNldC5qb2luU2hhcmVkKG1hdGNoWzFdLCB2LCByKVxuICAgICAgICAgIF07XG4gIH1cbiAgaWYgKHIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgXTtcbiAgfVxuICB2YXIgbWF0Y2gkMSA9IHNwbGl0QXV4Tm9QaXZvdChjbXAsIHIsIHgpO1xuICByZXR1cm4gW1xuICAgICAgICAgIEJlbHRfaW50ZXJuYWxBVkxzZXQuam9pblNoYXJlZChsLCB2LCBtYXRjaCQxWzBdKSxcbiAgICAgICAgICBtYXRjaCQxWzFdXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIHNwbGl0QXV4UGl2b3QoY21wLCBuLCB4LCBwcmVzKSB7XG4gIHZhciB2ID0gbi52O1xuICB2YXIgbCA9IG4ubDtcbiAgdmFyIHIgPSBuLnI7XG4gIHZhciBjID0gY21wKHgsIHYpO1xuICBpZiAoYyA9PT0gMCkge1xuICAgIHByZXMuY29udGVudHMgPSB0cnVlO1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBsLFxuICAgICAgICAgICAgclxuICAgICAgICAgIF07XG4gIH1cbiAgaWYgKGMgPCAwKSB7XG4gICAgaWYgKGwgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgdW5kZWZpbmVkLFxuICAgICAgICAgICAgICBuXG4gICAgICAgICAgICBdO1xuICAgIH1cbiAgICB2YXIgbWF0Y2ggPSBzcGxpdEF1eFBpdm90KGNtcCwgbCwgeCwgcHJlcyk7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIG1hdGNoWzBdLFxuICAgICAgICAgICAgQmVsdF9pbnRlcm5hbEFWTHNldC5qb2luU2hhcmVkKG1hdGNoWzFdLCB2LCByKVxuICAgICAgICAgIF07XG4gIH1cbiAgaWYgKHIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBuLFxuICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgXTtcbiAgfVxuICB2YXIgbWF0Y2gkMSA9IHNwbGl0QXV4UGl2b3QoY21wLCByLCB4LCBwcmVzKTtcbiAgcmV0dXJuIFtcbiAgICAgICAgICBCZWx0X2ludGVybmFsQVZMc2V0LmpvaW5TaGFyZWQobCwgdiwgbWF0Y2gkMVswXSksXG4gICAgICAgICAgbWF0Y2gkMVsxXVxuICAgICAgICBdO1xufVxuXG5mdW5jdGlvbiBzcGxpdCh0LCB4LCBjbXApIHtcbiAgaWYgKHQgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICBbXG4gICAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgICAgdW5kZWZpbmVkXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZmFsc2VcbiAgICAgICAgICBdO1xuICB9XG4gIHZhciBwcmVzID0ge1xuICAgIGNvbnRlbnRzOiBmYWxzZVxuICB9O1xuICB2YXIgdiA9IHNwbGl0QXV4UGl2b3QoY21wLCB0LCB4LCBwcmVzKTtcbiAgcmV0dXJuIFtcbiAgICAgICAgICB2LFxuICAgICAgICAgIHByZXMuY29udGVudHNcbiAgICAgICAgXTtcbn1cblxuZnVuY3Rpb24gdW5pb24oczEsIHMyLCBjbXApIHtcbiAgaWYgKHMxID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gczI7XG4gIH1cbiAgaWYgKHMyID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gczE7XG4gIH1cbiAgdmFyIGgxID0gczEuaDtcbiAgdmFyIGgyID0gczIuaDtcbiAgaWYgKGgxID49IGgyKSB7XG4gICAgaWYgKGgyID09PSAxKSB7XG4gICAgICByZXR1cm4gYWRkKHMxLCBzMi52LCBjbXApO1xuICAgIH1cbiAgICB2YXIgdjEgPSBzMS52O1xuICAgIHZhciBsMSA9IHMxLmw7XG4gICAgdmFyIHIxID0gczEucjtcbiAgICB2YXIgbWF0Y2ggPSBzcGxpdEF1eE5vUGl2b3QoY21wLCBzMiwgdjEpO1xuICAgIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LmpvaW5TaGFyZWQodW5pb24obDEsIG1hdGNoWzBdLCBjbXApLCB2MSwgdW5pb24ocjEsIG1hdGNoWzFdLCBjbXApKTtcbiAgfVxuICBpZiAoaDEgPT09IDEpIHtcbiAgICByZXR1cm4gYWRkKHMyLCBzMS52LCBjbXApO1xuICB9XG4gIHZhciB2MiA9IHMyLnY7XG4gIHZhciBsMiA9IHMyLmw7XG4gIHZhciByMiA9IHMyLnI7XG4gIHZhciBtYXRjaCQxID0gc3BsaXRBdXhOb1Bpdm90KGNtcCwgczEsIHYyKTtcbiAgcmV0dXJuIEJlbHRfaW50ZXJuYWxBVkxzZXQuam9pblNoYXJlZCh1bmlvbihtYXRjaCQxWzBdLCBsMiwgY21wKSwgdjIsIHVuaW9uKG1hdGNoJDFbMV0sIHIyLCBjbXApKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJzZWN0KHMxLCBzMiwgY21wKSB7XG4gIGlmIChzMSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICBpZiAoczIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIHYxID0gczEudjtcbiAgdmFyIGwxID0gczEubDtcbiAgdmFyIHIxID0gczEucjtcbiAgdmFyIHByZXMgPSB7XG4gICAgY29udGVudHM6IGZhbHNlXG4gIH07XG4gIHZhciBtYXRjaCA9IHNwbGl0QXV4UGl2b3QoY21wLCBzMiwgdjEsIHByZXMpO1xuICB2YXIgbGwgPSBpbnRlcnNlY3QobDEsIG1hdGNoWzBdLCBjbXApO1xuICB2YXIgcnIgPSBpbnRlcnNlY3QocjEsIG1hdGNoWzFdLCBjbXApO1xuICBpZiAocHJlcy5jb250ZW50cykge1xuICAgIHJldHVybiBCZWx0X2ludGVybmFsQVZMc2V0LmpvaW5TaGFyZWQobGwsIHYxLCBycik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIEJlbHRfaW50ZXJuYWxBVkxzZXQuY29uY2F0U2hhcmVkKGxsLCBycik7XG4gIH1cbn1cblxuZnVuY3Rpb24gZGlmZihzMSwgczIsIGNtcCkge1xuICBpZiAoczEgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBzMTtcbiAgfVxuICBpZiAoczIgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBzMTtcbiAgfVxuICB2YXIgdjEgPSBzMS52O1xuICB2YXIgbDEgPSBzMS5sO1xuICB2YXIgcjEgPSBzMS5yO1xuICB2YXIgcHJlcyA9IHtcbiAgICBjb250ZW50czogZmFsc2VcbiAgfTtcbiAgdmFyIG1hdGNoID0gc3BsaXRBdXhQaXZvdChjbXAsIHMyLCB2MSwgcHJlcyk7XG4gIHZhciBsbCA9IGRpZmYobDEsIG1hdGNoWzBdLCBjbXApO1xuICB2YXIgcnIgPSBkaWZmKHIxLCBtYXRjaFsxXSwgY21wKTtcbiAgaWYgKHByZXMuY29udGVudHMpIHtcbiAgICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5jb25jYXRTaGFyZWQobGwsIHJyKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQmVsdF9pbnRlcm5hbEFWTHNldC5qb2luU2hhcmVkKGxsLCB2MSwgcnIpO1xuICB9XG59XG5cbnZhciBlbXB0eTtcblxudmFyIGZyb21BcnJheSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuZnJvbUFycmF5O1xuXG52YXIgZnJvbVNvcnRlZEFycmF5VW5zYWZlID0gQmVsdF9pbnRlcm5hbEFWTHNldC5mcm9tU29ydGVkQXJyYXlVbnNhZmU7XG5cbnZhciBpc0VtcHR5ID0gQmVsdF9pbnRlcm5hbEFWTHNldC5pc0VtcHR5O1xuXG52YXIgaGFzID0gQmVsdF9pbnRlcm5hbEFWTHNldC5oYXM7XG5cbnZhciBzdWJzZXQgPSBCZWx0X2ludGVybmFsQVZMc2V0LnN1YnNldDtcblxudmFyIGNtcCA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuY21wO1xuXG52YXIgZXEgPSBCZWx0X2ludGVybmFsQVZMc2V0LmVxO1xuXG52YXIgZm9yRWFjaFUgPSBCZWx0X2ludGVybmFsQVZMc2V0LmZvckVhY2hVO1xuXG52YXIgZm9yRWFjaCA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuZm9yRWFjaDtcblxudmFyIHJlZHVjZVUgPSBCZWx0X2ludGVybmFsQVZMc2V0LnJlZHVjZVU7XG5cbnZhciByZWR1Y2UgPSBCZWx0X2ludGVybmFsQVZMc2V0LnJlZHVjZTtcblxudmFyIGV2ZXJ5VSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuZXZlcnlVO1xuXG52YXIgZXZlcnkgPSBCZWx0X2ludGVybmFsQVZMc2V0LmV2ZXJ5O1xuXG52YXIgc29tZVUgPSBCZWx0X2ludGVybmFsQVZMc2V0LnNvbWVVO1xuXG52YXIgc29tZSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuc29tZTtcblxudmFyIGtlZXBVID0gQmVsdF9pbnRlcm5hbEFWTHNldC5rZWVwU2hhcmVkVTtcblxudmFyIGtlZXAgPSBCZWx0X2ludGVybmFsQVZMc2V0LmtlZXBTaGFyZWQ7XG5cbnZhciBwYXJ0aXRpb25VID0gQmVsdF9pbnRlcm5hbEFWTHNldC5wYXJ0aXRpb25TaGFyZWRVO1xuXG52YXIgcGFydGl0aW9uID0gQmVsdF9pbnRlcm5hbEFWTHNldC5wYXJ0aXRpb25TaGFyZWQ7XG5cbnZhciBzaXplID0gQmVsdF9pbnRlcm5hbEFWTHNldC5zaXplO1xuXG52YXIgdG9MaXN0ID0gQmVsdF9pbnRlcm5hbEFWTHNldC50b0xpc3Q7XG5cbnZhciB0b0FycmF5ID0gQmVsdF9pbnRlcm5hbEFWTHNldC50b0FycmF5O1xuXG52YXIgbWluaW11bSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQubWluaW11bTtcblxudmFyIG1pblVuZGVmaW5lZCA9IEJlbHRfaW50ZXJuYWxBVkxzZXQubWluVW5kZWZpbmVkO1xuXG52YXIgbWF4aW11bSA9IEJlbHRfaW50ZXJuYWxBVkxzZXQubWF4aW11bTtcblxudmFyIG1heFVuZGVmaW5lZCA9IEJlbHRfaW50ZXJuYWxBVkxzZXQubWF4VW5kZWZpbmVkO1xuXG52YXIgZ2V0ID0gQmVsdF9pbnRlcm5hbEFWTHNldC5nZXQ7XG5cbnZhciBnZXRVbmRlZmluZWQgPSBCZWx0X2ludGVybmFsQVZMc2V0LmdldFVuZGVmaW5lZDtcblxudmFyIGdldEV4biA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuZ2V0RXhuO1xuXG52YXIgY2hlY2tJbnZhcmlhbnRJbnRlcm5hbCA9IEJlbHRfaW50ZXJuYWxBVkxzZXQuY2hlY2tJbnZhcmlhbnRJbnRlcm5hbDtcblxuZXhwb3J0IHtcbiAgZW1wdHkgLFxuICBmcm9tQXJyYXkgLFxuICBmcm9tU29ydGVkQXJyYXlVbnNhZmUgLFxuICBpc0VtcHR5ICxcbiAgaGFzICxcbiAgYWRkICxcbiAgbWVyZ2VNYW55ICxcbiAgcmVtb3ZlICxcbiAgcmVtb3ZlTWFueSAsXG4gIHVuaW9uICxcbiAgaW50ZXJzZWN0ICxcbiAgZGlmZiAsXG4gIHN1YnNldCAsXG4gIGNtcCAsXG4gIGVxICxcbiAgZm9yRWFjaFUgLFxuICBmb3JFYWNoICxcbiAgcmVkdWNlVSAsXG4gIHJlZHVjZSAsXG4gIGV2ZXJ5VSAsXG4gIGV2ZXJ5ICxcbiAgc29tZVUgLFxuICBzb21lICxcbiAga2VlcFUgLFxuICBrZWVwICxcbiAgcGFydGl0aW9uVSAsXG4gIHBhcnRpdGlvbiAsXG4gIHNpemUgLFxuICB0b0xpc3QgLFxuICB0b0FycmF5ICxcbiAgbWluaW11bSAsXG4gIG1pblVuZGVmaW5lZCAsXG4gIG1heGltdW0gLFxuICBtYXhVbmRlZmluZWQgLFxuICBnZXQgLFxuICBnZXRVbmRlZmluZWQgLFxuICBnZXRFeG4gLFxuICBzcGxpdCAsXG4gIGNoZWNrSW52YXJpYW50SW50ZXJuYWwgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQ3VycnkgZnJvbSBcIi4vY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfQXJyYXkgZnJvbSBcIi4vYmVsdF9BcnJheS5qc1wiO1xuXG5mdW5jdGlvbiBzb3J0ZWRMZW5ndGhBdXhNb3JlKHhzLCBfcHJlYywgX2FjYywgbGVuLCBsdCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICBpZiAoYWNjID49IGxlbikge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgdmFyIHYgPSB4c1thY2NdO1xuICAgIGlmICghbHQodiwgcHJlYykpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIF9hY2MgPSBhY2MgKyAxIHwgMDtcbiAgICBfcHJlYyA9IHY7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBzdHJpY3RseVNvcnRlZExlbmd0aFUoeHMsIGx0KSB7XG4gIHZhciBsZW4gPSB4cy5sZW5ndGg7XG4gIGlmIChsZW4gPT09IDAgfHwgbGVuID09PSAxKSB7XG4gICAgcmV0dXJuIGxlbjtcbiAgfVxuICB2YXIgeDAgPSB4c1swXTtcbiAgdmFyIHgxID0geHNbMV07XG4gIGlmIChsdCh4MCwgeDEpKSB7XG4gICAgdmFyIF9wcmVjID0geDE7XG4gICAgdmFyIF9hY2MgPSAyO1xuICAgIHdoaWxlKHRydWUpIHtcbiAgICAgIHZhciBhY2MgPSBfYWNjO1xuICAgICAgdmFyIHByZWMgPSBfcHJlYztcbiAgICAgIGlmIChhY2MgPj0gbGVuKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgICB2YXIgdiA9IHhzW2FjY107XG4gICAgICBpZiAoIWx0KHByZWMsIHYpKSB7XG4gICAgICAgIHJldHVybiBhY2M7XG4gICAgICB9XG4gICAgICBfYWNjID0gYWNjICsgMSB8IDA7XG4gICAgICBfcHJlYyA9IHY7XG4gICAgICBjb250aW51ZSA7XG4gICAgfTtcbiAgfSBlbHNlIGlmIChsdCh4MSwgeDApKSB7XG4gICAgcmV0dXJuIC1zb3J0ZWRMZW5ndGhBdXhNb3JlKHhzLCB4MSwgMiwgbGVuLCBsdCkgfCAwO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIHN0cmljdGx5U29ydGVkTGVuZ3RoKHhzLCBsdCkge1xuICByZXR1cm4gc3RyaWN0bHlTb3J0ZWRMZW5ndGhVKHhzLCBDdXJyeS5fXzIobHQpKTtcbn1cblxuZnVuY3Rpb24gaXNTb3J0ZWRVKGEsIGNtcCkge1xuICB2YXIgbGVuID0gYS5sZW5ndGg7XG4gIGlmIChsZW4gPT09IDApIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2kgPSAwO1xuICAgIHZhciBsYXN0X2JvdW5kID0gbGVuIC0gMSB8IDA7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIGkgPSBfaTtcbiAgICAgIGlmIChpID09PSBsYXN0X2JvdW5kKSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgICAgaWYgKGNtcChhW2ldLCBhW2kgKyAxIHwgMF0pID4gMCkge1xuICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICB9XG4gICAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzU29ydGVkKGEsIGNtcCkge1xuICByZXR1cm4gaXNTb3J0ZWRVKGEsIEN1cnJ5Ll9fMihjbXApKTtcbn1cblxuZnVuY3Rpb24gbWVyZ2Uoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgY21wKSB7XG4gIHZhciBzcmMxciA9IHNyYzFvZnMgKyBzcmMxbGVuIHwgMDtcbiAgdmFyIHNyYzJyID0gc3JjMm9mcyArIHNyYzJsZW4gfCAwO1xuICB2YXIgX2kxID0gc3JjMW9mcztcbiAgdmFyIF9zMSA9IHNyY1tzcmMxb2ZzXTtcbiAgdmFyIF9pMiA9IHNyYzJvZnM7XG4gIHZhciBfczIgPSBzcmMyW3NyYzJvZnNdO1xuICB2YXIgX2QgPSBkc3RvZnM7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgZCA9IF9kO1xuICAgIHZhciBzMiA9IF9zMjtcbiAgICB2YXIgaTIgPSBfaTI7XG4gICAgdmFyIHMxID0gX3MxO1xuICAgIHZhciBpMSA9IF9pMTtcbiAgICBpZiAoY21wKHMxLCBzMikgPD0gMCkge1xuICAgICAgZHN0W2RdID0gczE7XG4gICAgICB2YXIgaTEkMSA9IGkxICsgMSB8IDA7XG4gICAgICBpZiAoaTEkMSA+PSBzcmMxcikge1xuICAgICAgICByZXR1cm4gQmVsdF9BcnJheS5ibGl0VW5zYWZlKHNyYzIsIGkyLCBkc3QsIGQgKyAxIHwgMCwgc3JjMnIgLSBpMiB8IDApO1xuICAgICAgfVxuICAgICAgX2QgPSBkICsgMSB8IDA7XG4gICAgICBfczEgPSBzcmNbaTEkMV07XG4gICAgICBfaTEgPSBpMSQxO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBkc3RbZF0gPSBzMjtcbiAgICB2YXIgaTIkMSA9IGkyICsgMSB8IDA7XG4gICAgaWYgKGkyJDEgPj0gc3JjMnIpIHtcbiAgICAgIHJldHVybiBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjLCBpMSwgZHN0LCBkICsgMSB8IDAsIHNyYzFyIC0gaTEgfCAwKTtcbiAgICB9XG4gICAgX2QgPSBkICsgMSB8IDA7XG4gICAgX3MyID0gc3JjMltpMiQxXTtcbiAgICBfaTIgPSBpMiQxO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdW5pb25VKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIGNtcCkge1xuICB2YXIgc3JjMXIgPSBzcmMxb2ZzICsgc3JjMWxlbiB8IDA7XG4gIHZhciBzcmMyciA9IHNyYzJvZnMgKyBzcmMybGVuIHwgMDtcbiAgdmFyIF9pMSA9IHNyYzFvZnM7XG4gIHZhciBfczEgPSBzcmNbc3JjMW9mc107XG4gIHZhciBfaTIgPSBzcmMyb2ZzO1xuICB2YXIgX3MyID0gc3JjMltzcmMyb2ZzXTtcbiAgdmFyIF9kID0gZHN0b2ZzO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGQgPSBfZDtcbiAgICB2YXIgczIgPSBfczI7XG4gICAgdmFyIGkyID0gX2kyO1xuICAgIHZhciBzMSA9IF9zMTtcbiAgICB2YXIgaTEgPSBfaTE7XG4gICAgdmFyIGMgPSBjbXAoczEsIHMyKTtcbiAgICBpZiAoYyA8IDApIHtcbiAgICAgIGRzdFtkXSA9IHMxO1xuICAgICAgdmFyIGkxJDEgPSBpMSArIDEgfCAwO1xuICAgICAgdmFyIGQkMSA9IGQgKyAxIHwgMDtcbiAgICAgIGlmIChpMSQxIDwgc3JjMXIpIHtcbiAgICAgICAgX2QgPSBkJDE7XG4gICAgICAgIF9zMSA9IHNyY1tpMSQxXTtcbiAgICAgICAgX2kxID0gaTEkMTtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgfVxuICAgICAgQmVsdF9BcnJheS5ibGl0VW5zYWZlKHNyYzIsIGkyLCBkc3QsIGQkMSwgc3JjMnIgLSBpMiB8IDApO1xuICAgICAgcmV0dXJuIChkJDEgKyBzcmMyciB8IDApIC0gaTIgfCAwO1xuICAgIH1cbiAgICBpZiAoYyA9PT0gMCkge1xuICAgICAgZHN0W2RdID0gczE7XG4gICAgICB2YXIgaTEkMiA9IGkxICsgMSB8IDA7XG4gICAgICB2YXIgaTIkMSA9IGkyICsgMSB8IDA7XG4gICAgICB2YXIgZCQyID0gZCArIDEgfCAwO1xuICAgICAgaWYgKCEoaTEkMiA8IHNyYzFyICYmIGkyJDEgPCBzcmMycikpIHtcbiAgICAgICAgaWYgKGkxJDIgPT09IHNyYzFyKSB7XG4gICAgICAgICAgQmVsdF9BcnJheS5ibGl0VW5zYWZlKHNyYzIsIGkyJDEsIGRzdCwgZCQyLCBzcmMyciAtIGkyJDEgfCAwKTtcbiAgICAgICAgICByZXR1cm4gKGQkMiArIHNyYzJyIHwgMCkgLSBpMiQxIHwgMDtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjLCBpMSQyLCBkc3QsIGQkMiwgc3JjMXIgLSBpMSQyIHwgMCk7XG4gICAgICAgICAgcmV0dXJuIChkJDIgKyBzcmMxciB8IDApIC0gaTEkMiB8IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF9kID0gZCQyO1xuICAgICAgX3MyID0gc3JjMltpMiQxXTtcbiAgICAgIF9pMiA9IGkyJDE7XG4gICAgICBfczEgPSBzcmNbaTEkMl07XG4gICAgICBfaTEgPSBpMSQyO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBkc3RbZF0gPSBzMjtcbiAgICB2YXIgaTIkMiA9IGkyICsgMSB8IDA7XG4gICAgdmFyIGQkMyA9IGQgKyAxIHwgMDtcbiAgICBpZiAoaTIkMiA8IHNyYzJyKSB7XG4gICAgICBfZCA9IGQkMztcbiAgICAgIF9zMiA9IHNyYzJbaTIkMl07XG4gICAgICBfaTIgPSBpMiQyO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjLCBpMSwgZHN0LCBkJDMsIHNyYzFyIC0gaTEgfCAwKTtcbiAgICByZXR1cm4gKGQkMyArIHNyYzFyIHwgMCkgLSBpMSB8IDA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHVuaW9uKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIGNtcCkge1xuICByZXR1cm4gdW5pb25VKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIEN1cnJ5Ll9fMihjbXApKTtcbn1cblxuZnVuY3Rpb24gaW50ZXJzZWN0VShzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBjbXApIHtcbiAgdmFyIHNyYzFyID0gc3JjMW9mcyArIHNyYzFsZW4gfCAwO1xuICB2YXIgc3JjMnIgPSBzcmMyb2ZzICsgc3JjMmxlbiB8IDA7XG4gIHZhciBfaTEgPSBzcmMxb2ZzO1xuICB2YXIgX3MxID0gc3JjW3NyYzFvZnNdO1xuICB2YXIgX2kyID0gc3JjMm9mcztcbiAgdmFyIF9zMiA9IHNyYzJbc3JjMm9mc107XG4gIHZhciBfZCA9IGRzdG9mcztcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBkID0gX2Q7XG4gICAgdmFyIHMyID0gX3MyO1xuICAgIHZhciBpMiA9IF9pMjtcbiAgICB2YXIgczEgPSBfczE7XG4gICAgdmFyIGkxID0gX2kxO1xuICAgIHZhciBjID0gY21wKHMxLCBzMik7XG4gICAgaWYgKGMgPCAwKSB7XG4gICAgICB2YXIgaTEkMSA9IGkxICsgMSB8IDA7XG4gICAgICBpZiAoaTEkMSA+PSBzcmMxcikge1xuICAgICAgICByZXR1cm4gZDtcbiAgICAgIH1cbiAgICAgIF9zMSA9IHNyY1tpMSQxXTtcbiAgICAgIF9pMSA9IGkxJDE7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIGlmIChjID09PSAwKSB7XG4gICAgICBkc3RbZF0gPSBzMTtcbiAgICAgIHZhciBpMSQyID0gaTEgKyAxIHwgMDtcbiAgICAgIHZhciBpMiQxID0gaTIgKyAxIHwgMDtcbiAgICAgIHZhciBkJDEgPSBkICsgMSB8IDA7XG4gICAgICBpZiAoIShpMSQyIDwgc3JjMXIgJiYgaTIkMSA8IHNyYzJyKSkge1xuICAgICAgICByZXR1cm4gZCQxO1xuICAgICAgfVxuICAgICAgX2QgPSBkJDE7XG4gICAgICBfczIgPSBzcmMyW2kyJDFdO1xuICAgICAgX2kyID0gaTIkMTtcbiAgICAgIF9zMSA9IHNyY1tpMSQyXTtcbiAgICAgIF9pMSA9IGkxJDI7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIHZhciBpMiQyID0gaTIgKyAxIHwgMDtcbiAgICBpZiAoaTIkMiA+PSBzcmMycikge1xuICAgICAgcmV0dXJuIGQ7XG4gICAgfVxuICAgIF9zMiA9IHNyYzJbaTIkMl07XG4gICAgX2kyID0gaTIkMjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGludGVyc2VjdChzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBjbXApIHtcbiAgcmV0dXJuIGludGVyc2VjdFUoc3JjLCBzcmMxb2ZzLCBzcmMxbGVuLCBzcmMyLCBzcmMyb2ZzLCBzcmMybGVuLCBkc3QsIGRzdG9mcywgQ3VycnkuX18yKGNtcCkpO1xufVxuXG5mdW5jdGlvbiBkaWZmVShzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBjbXApIHtcbiAgdmFyIHNyYzFyID0gc3JjMW9mcyArIHNyYzFsZW4gfCAwO1xuICB2YXIgc3JjMnIgPSBzcmMyb2ZzICsgc3JjMmxlbiB8IDA7XG4gIHZhciBfaTEgPSBzcmMxb2ZzO1xuICB2YXIgX3MxID0gc3JjW3NyYzFvZnNdO1xuICB2YXIgX2kyID0gc3JjMm9mcztcbiAgdmFyIF9zMiA9IHNyYzJbc3JjMm9mc107XG4gIHZhciBfZCA9IGRzdG9mcztcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBkID0gX2Q7XG4gICAgdmFyIHMyID0gX3MyO1xuICAgIHZhciBpMiA9IF9pMjtcbiAgICB2YXIgczEgPSBfczE7XG4gICAgdmFyIGkxID0gX2kxO1xuICAgIHZhciBjID0gY21wKHMxLCBzMik7XG4gICAgaWYgKGMgPCAwKSB7XG4gICAgICBkc3RbZF0gPSBzMTtcbiAgICAgIHZhciBkJDEgPSBkICsgMSB8IDA7XG4gICAgICB2YXIgaTEkMSA9IGkxICsgMSB8IDA7XG4gICAgICBpZiAoaTEkMSA+PSBzcmMxcikge1xuICAgICAgICByZXR1cm4gZCQxO1xuICAgICAgfVxuICAgICAgX2QgPSBkJDE7XG4gICAgICBfczEgPSBzcmNbaTEkMV07XG4gICAgICBfaTEgPSBpMSQxO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBpZiAoYyA9PT0gMCkge1xuICAgICAgdmFyIGkxJDIgPSBpMSArIDEgfCAwO1xuICAgICAgdmFyIGkyJDEgPSBpMiArIDEgfCAwO1xuICAgICAgaWYgKCEoaTEkMiA8IHNyYzFyICYmIGkyJDEgPCBzcmMycikpIHtcbiAgICAgICAgaWYgKGkxJDIgPT09IHNyYzFyKSB7XG4gICAgICAgICAgcmV0dXJuIGQ7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgQmVsdF9BcnJheS5ibGl0VW5zYWZlKHNyYywgaTEkMiwgZHN0LCBkLCBzcmMxciAtIGkxJDIgfCAwKTtcbiAgICAgICAgICByZXR1cm4gKGQgKyBzcmMxciB8IDApIC0gaTEkMiB8IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF9zMiA9IHNyYzJbaTIkMV07XG4gICAgICBfaTIgPSBpMiQxO1xuICAgICAgX3MxID0gc3JjW2kxJDJdO1xuICAgICAgX2kxID0gaTEkMjtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgdmFyIGkyJDIgPSBpMiArIDEgfCAwO1xuICAgIGlmIChpMiQyIDwgc3JjMnIpIHtcbiAgICAgIF9zMiA9IHNyYzJbaTIkMl07XG4gICAgICBfaTIgPSBpMiQyO1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBCZWx0X0FycmF5LmJsaXRVbnNhZmUoc3JjLCBpMSwgZHN0LCBkLCBzcmMxciAtIGkxIHwgMCk7XG4gICAgcmV0dXJuIChkICsgc3JjMXIgfCAwKSAtIGkxIHwgMDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZGlmZihzcmMsIHNyYzFvZnMsIHNyYzFsZW4sIHNyYzIsIHNyYzJvZnMsIHNyYzJsZW4sIGRzdCwgZHN0b2ZzLCBjbXApIHtcbiAgcmV0dXJuIGRpZmZVKHNyYywgc3JjMW9mcywgc3JjMWxlbiwgc3JjMiwgc3JjMm9mcywgc3JjMmxlbiwgZHN0LCBkc3RvZnMsIEN1cnJ5Ll9fMihjbXApKTtcbn1cblxuZnVuY3Rpb24gaW5zZXJ0aW9uU29ydChzcmMsIHNyY29mcywgZHN0LCBkc3RvZnMsIGxlbiwgY21wKSB7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgdmFyIGUgPSBzcmNbc3Jjb2ZzICsgaSB8IDBdO1xuICAgIHZhciBqID0gKGRzdG9mcyArIGkgfCAwKSAtIDEgfCAwO1xuICAgIHdoaWxlKGogPj0gZHN0b2ZzICYmIGNtcChkc3Rbal0sIGUpID4gMCkge1xuICAgICAgZHN0W2ogKyAxIHwgMF0gPSBkc3Rbal07XG4gICAgICBqID0gaiAtIDEgfCAwO1xuICAgIH07XG4gICAgZHN0W2ogKyAxIHwgMF0gPSBlO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBzb3J0VG8oc3JjLCBzcmNvZnMsIGRzdCwgZHN0b2ZzLCBsZW4sIGNtcCkge1xuICBpZiAobGVuIDw9IDUpIHtcbiAgICByZXR1cm4gaW5zZXJ0aW9uU29ydChzcmMsIHNyY29mcywgZHN0LCBkc3RvZnMsIGxlbiwgY21wKTtcbiAgfVxuICB2YXIgbDEgPSBsZW4gLyAyIHwgMDtcbiAgdmFyIGwyID0gbGVuIC0gbDEgfCAwO1xuICBzb3J0VG8oc3JjLCBzcmNvZnMgKyBsMSB8IDAsIGRzdCwgZHN0b2ZzICsgbDEgfCAwLCBsMiwgY21wKTtcbiAgc29ydFRvKHNyYywgc3Jjb2ZzLCBzcmMsIHNyY29mcyArIGwyIHwgMCwgbDEsIGNtcCk7XG4gIHJldHVybiBtZXJnZShzcmMsIHNyY29mcyArIGwyIHwgMCwgbDEsIGRzdCwgZHN0b2ZzICsgbDEgfCAwLCBsMiwgZHN0LCBkc3RvZnMsIGNtcCk7XG59XG5cbmZ1bmN0aW9uIHN0YWJsZVNvcnRJblBsYWNlQnlVKGEsIGNtcCkge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICBpZiAobCA8PSA1KSB7XG4gICAgcmV0dXJuIGluc2VydGlvblNvcnQoYSwgMCwgYSwgMCwgbCwgY21wKTtcbiAgfVxuICB2YXIgbDEgPSBsIC8gMiB8IDA7XG4gIHZhciBsMiA9IGwgLSBsMSB8IDA7XG4gIHZhciB0ID0gbmV3IEFycmF5KGwyKTtcbiAgc29ydFRvKGEsIGwxLCB0LCAwLCBsMiwgY21wKTtcbiAgc29ydFRvKGEsIDAsIGEsIGwyLCBsMSwgY21wKTtcbiAgcmV0dXJuIG1lcmdlKGEsIGwyLCBsMSwgdCwgMCwgbDIsIGEsIDAsIGNtcCk7XG59XG5cbmZ1bmN0aW9uIHN0YWJsZVNvcnRJblBsYWNlQnkoYSwgY21wKSB7XG4gIHJldHVybiBzdGFibGVTb3J0SW5QbGFjZUJ5VShhLCBDdXJyeS5fXzIoY21wKSk7XG59XG5cbmZ1bmN0aW9uIHN0YWJsZVNvcnRCeVUoYSwgY21wKSB7XG4gIHZhciBiID0gYS5zbGljZSgwKTtcbiAgc3RhYmxlU29ydEluUGxhY2VCeVUoYiwgY21wKTtcbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIHN0YWJsZVNvcnRCeShhLCBjbXApIHtcbiAgcmV0dXJuIHN0YWJsZVNvcnRCeVUoYSwgQ3VycnkuX18yKGNtcCkpO1xufVxuXG5mdW5jdGlvbiBiaW5hcnlTZWFyY2hCeVUoc29ydGVkLCBrZXksIGNtcCkge1xuICB2YXIgbGVuID0gc29ydGVkLmxlbmd0aDtcbiAgaWYgKGxlbiA9PT0gMCkge1xuICAgIHJldHVybiAtMTtcbiAgfVxuICB2YXIgbG8gPSBzb3J0ZWRbMF07XG4gIHZhciBjID0gY21wKGtleSwgbG8pO1xuICBpZiAoYyA8IDApIHtcbiAgICByZXR1cm4gLTE7XG4gIH1cbiAgdmFyIGhpID0gc29ydGVkW2xlbiAtIDEgfCAwXTtcbiAgdmFyIGMyID0gY21wKGtleSwgaGkpO1xuICBpZiAoYzIgPiAwKSB7XG4gICAgcmV0dXJuIC0obGVuICsgMSB8IDApIHwgMDtcbiAgfSBlbHNlIHtcbiAgICB2YXIgX2xvID0gMDtcbiAgICB2YXIgX2hpID0gbGVuIC0gMSB8IDA7XG4gICAgd2hpbGUodHJ1ZSkge1xuICAgICAgdmFyIGhpJDEgPSBfaGk7XG4gICAgICB2YXIgbG8kMSA9IF9sbztcbiAgICAgIHZhciBtaWQgPSAobG8kMSArIGhpJDEgfCAwKSAvIDIgfCAwO1xuICAgICAgdmFyIG1pZFZhbCA9IHNvcnRlZFttaWRdO1xuICAgICAgdmFyIGMkMSA9IGNtcChrZXksIG1pZFZhbCk7XG4gICAgICBpZiAoYyQxID09PSAwKSB7XG4gICAgICAgIHJldHVybiBtaWQ7XG4gICAgICB9XG4gICAgICBpZiAoYyQxIDwgMCkge1xuICAgICAgICBpZiAoaGkkMSA9PT0gbWlkKSB7XG4gICAgICAgICAgaWYgKGNtcChzb3J0ZWRbbG8kMV0sIGtleSkgPT09IDApIHtcbiAgICAgICAgICAgIHJldHVybiBsbyQxO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLShoaSQxICsgMSB8IDApIHwgMDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cbiAgICAgICAgX2hpID0gbWlkO1xuICAgICAgICBjb250aW51ZSA7XG4gICAgICB9XG4gICAgICBpZiAobG8kMSA9PT0gbWlkKSB7XG4gICAgICAgIGlmIChjbXAoc29ydGVkW2hpJDFdLCBrZXkpID09PSAwKSB7XG4gICAgICAgICAgcmV0dXJuIGhpJDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC0oaGkkMSArIDEgfCAwKSB8IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIF9sbyA9IG1pZDtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGJpbmFyeVNlYXJjaEJ5KHNvcnRlZCwga2V5LCBjbXApIHtcbiAgcmV0dXJuIGJpbmFyeVNlYXJjaEJ5VShzb3J0ZWQsIGtleSwgQ3VycnkuX18yKGNtcCkpO1xufVxuXG52YXIgSW50O1xuXG52YXIgJCRTdHJpbmc7XG5cbmV4cG9ydCB7XG4gIEludCAsXG4gICQkU3RyaW5nICxcbiAgc3RyaWN0bHlTb3J0ZWRMZW5ndGhVICxcbiAgc3RyaWN0bHlTb3J0ZWRMZW5ndGggLFxuICBpc1NvcnRlZFUgLFxuICBpc1NvcnRlZCAsXG4gIHN0YWJsZVNvcnRJblBsYWNlQnlVICxcbiAgc3RhYmxlU29ydEluUGxhY2VCeSAsXG4gIHN0YWJsZVNvcnRCeVUgLFxuICBzdGFibGVTb3J0QnkgLFxuICBiaW5hcnlTZWFyY2hCeVUgLFxuICBiaW5hcnlTZWFyY2hCeSAsXG4gIHVuaW9uVSAsXG4gIHVuaW9uICxcbiAgaW50ZXJzZWN0VSAsXG4gIGludGVyc2VjdCAsXG4gIGRpZmZVICxcbiAgZGlmZiAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwiLi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vcHRpb24gZnJvbSBcIi4vY2FtbF9vcHRpb24uanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfU29ydEFycmF5IGZyb20gXCIuL2JlbHRfU29ydEFycmF5LmpzXCI7XG5cbmZ1bmN0aW9uIGNvcHkobikge1xuICBpZiAobiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIHY6IG4udixcbiAgICAgICAgICAgIGg6IG4uaCxcbiAgICAgICAgICAgIGw6IGNvcHkobi5sKSxcbiAgICAgICAgICAgIHI6IGNvcHkobi5yKVxuICAgICAgICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIG47XG4gIH1cbn1cblxuZnVuY3Rpb24gY3JlYXRlKGwsIHYsIHIpIHtcbiAgdmFyIGhsID0gbCAhPT0gdW5kZWZpbmVkID8gbC5oIDogMDtcbiAgdmFyIGhyID0gciAhPT0gdW5kZWZpbmVkID8gci5oIDogMDtcbiAgcmV0dXJuIHtcbiAgICAgICAgICB2OiB2LFxuICAgICAgICAgIGg6IChcbiAgICAgICAgICAgIGhsID49IGhyID8gaGwgOiBoclxuICAgICAgICAgICkgKyAxIHwgMCxcbiAgICAgICAgICBsOiBsLFxuICAgICAgICAgIHI6IHJcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gc2luZ2xldG9uKHgpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICB2OiB4LFxuICAgICAgICAgIGg6IDEsXG4gICAgICAgICAgbDogdW5kZWZpbmVkLFxuICAgICAgICAgIHI6IHVuZGVmaW5lZFxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBoZWlnaHRHZShsLCByKSB7XG4gIGlmIChyICE9PSB1bmRlZmluZWQpIHtcbiAgICBpZiAobCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbC5oID49IHIuaDtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBiYWwobCwgdiwgcikge1xuICB2YXIgaGwgPSBsICE9PSB1bmRlZmluZWQgPyBsLmggOiAwO1xuICB2YXIgaHIgPSByICE9PSB1bmRlZmluZWQgPyByLmggOiAwO1xuICBpZiAoaGwgPiAoaHIgKyAyIHwgMCkpIHtcbiAgICB2YXIgbGwgPSBsLmw7XG4gICAgdmFyIGxyID0gbC5yO1xuICAgIGlmIChoZWlnaHRHZShsbCwgbHIpKSB7XG4gICAgICByZXR1cm4gY3JlYXRlKGxsLCBsLnYsIGNyZWF0ZShsciwgdiwgcikpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gY3JlYXRlKGNyZWF0ZShsbCwgbC52LCBsci5sKSwgbHIudiwgY3JlYXRlKGxyLnIsIHYsIHIpKTtcbiAgICB9XG4gIH1cbiAgaWYgKGhyIDw9IChobCArIDIgfCAwKSkge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICB2OiB2LFxuICAgICAgICAgICAgaDogKFxuICAgICAgICAgICAgICBobCA+PSBociA/IGhsIDogaHJcbiAgICAgICAgICAgICkgKyAxIHwgMCxcbiAgICAgICAgICAgIGw6IGwsXG4gICAgICAgICAgICByOiByXG4gICAgICAgICAgfTtcbiAgfVxuICB2YXIgcmwgPSByLmw7XG4gIHZhciByciA9IHIucjtcbiAgaWYgKGhlaWdodEdlKHJyLCBybCkpIHtcbiAgICByZXR1cm4gY3JlYXRlKGNyZWF0ZShsLCB2LCBybCksIHIudiwgcnIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjcmVhdGUoY3JlYXRlKGwsIHYsIHJsLmwpLCBybC52LCBjcmVhdGUocmwuciwgci52LCBycikpO1xuICB9XG59XG5cbmZ1bmN0aW9uIG1pbjBBdXgoX24pIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBuID0gX247XG4gICAgdmFyIG4kMSA9IG4ubDtcbiAgICBpZiAobiQxID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBuLnY7XG4gICAgfVxuICAgIF9uID0gbiQxO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gbWluaW11bShuKSB7XG4gIGlmIChuICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZShtaW4wQXV4KG4pKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gbWluVW5kZWZpbmVkKG4pIHtcbiAgaWYgKG4gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBtaW4wQXV4KG4pO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBtYXgwQXV4KF9uKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbiA9IF9uO1xuICAgIHZhciBuJDEgPSBuLnI7XG4gICAgaWYgKG4kMSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gbi52O1xuICAgIH1cbiAgICBfbiA9IG4kMTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1heGltdW0obikge1xuICBpZiAobiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUobWF4MEF1eChuKSk7XG4gIH1cbiAgXG59XG5cbmZ1bmN0aW9uIG1heFVuZGVmaW5lZChuKSB7XG4gIGlmIChuICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gbWF4MEF1eChuKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gcmVtb3ZlTWluQXV4V2l0aFJlZihuLCB2KSB7XG4gIHZhciBsbiA9IG4ubDtcbiAgaWYgKGxuICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gYmFsKHJlbW92ZU1pbkF1eFdpdGhSZWYobG4sIHYpLCBuLnYsIG4ucik7XG4gIH0gZWxzZSB7XG4gICAgdi5jb250ZW50cyA9IG4udjtcbiAgICByZXR1cm4gbi5yO1xuICB9XG59XG5cbmZ1bmN0aW9uIGlzRW1wdHkobikge1xuICByZXR1cm4gbiA9PT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBzdGFja0FsbExlZnQoX3YsIF9zKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcyA9IF9zO1xuICAgIHZhciB2ID0gX3Y7XG4gICAgaWYgKHYgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIHM7XG4gICAgfVxuICAgIF9zID0ge1xuICAgICAgaGQ6IHYsXG4gICAgICB0bDogc1xuICAgIH07XG4gICAgX3YgPSB2Lmw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb3JFYWNoVShfbiwgZikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIG4gPSBfbjtcbiAgICBpZiAobiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBmb3JFYWNoVShuLmwsIGYpO1xuICAgIGYobi52KTtcbiAgICBfbiA9IG4ucjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZvckVhY2gobiwgZikge1xuICByZXR1cm4gZm9yRWFjaFUobiwgQ3VycnkuX18xKGYpKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlVShfcywgX2FjY3UsIGYpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBhY2N1ID0gX2FjY3U7XG4gICAgdmFyIHMgPSBfcztcbiAgICBpZiAocyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gYWNjdTtcbiAgICB9XG4gICAgX2FjY3UgPSBmKHJlZHVjZVUocy5sLCBhY2N1LCBmKSwgcy52KTtcbiAgICBfcyA9IHMucjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJlZHVjZShzLCBhY2N1LCBmKSB7XG4gIHJldHVybiByZWR1Y2VVKHMsIGFjY3UsIEN1cnJ5Ll9fMihmKSk7XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5VShfbiwgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIG4gPSBfbjtcbiAgICBpZiAobiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKCFwKG4udikpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgaWYgKCFldmVyeVUobi5sLCBwKSkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICBfbiA9IG4ucjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGV2ZXJ5KG4sIHApIHtcbiAgcmV0dXJuIGV2ZXJ5VShuLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBzb21lVShfbiwgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIG4gPSBfbjtcbiAgICBpZiAobiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmIChwKG4udikpIHtcbiAgICAgIHJldHVybiB0cnVlO1xuICAgIH1cbiAgICBpZiAoc29tZVUobi5sLCBwKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF9uID0gbi5yO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gc29tZShuLCBwKSB7XG4gIHJldHVybiBzb21lVShuLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBhZGRNaW5FbGVtZW50KG4sIHYpIHtcbiAgaWYgKG4gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBiYWwoYWRkTWluRWxlbWVudChuLmwsIHYpLCBuLnYsIG4ucik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNpbmdsZXRvbih2KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBhZGRNYXhFbGVtZW50KG4sIHYpIHtcbiAgaWYgKG4gIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBiYWwobi5sLCBuLnYsIGFkZE1heEVsZW1lbnQobi5yLCB2KSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHNpbmdsZXRvbih2KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBqb2luU2hhcmVkKGxuLCB2LCBybikge1xuICBpZiAobG4gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBhZGRNaW5FbGVtZW50KHJuLCB2KTtcbiAgfVxuICBpZiAocm4gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBhZGRNYXhFbGVtZW50KGxuLCB2KTtcbiAgfVxuICB2YXIgbGggPSBsbi5oO1xuICB2YXIgcmggPSBybi5oO1xuICBpZiAobGggPiAocmggKyAyIHwgMCkpIHtcbiAgICByZXR1cm4gYmFsKGxuLmwsIGxuLnYsIGpvaW5TaGFyZWQobG4uciwgdiwgcm4pKTtcbiAgfSBlbHNlIGlmIChyaCA+IChsaCArIDIgfCAwKSkge1xuICAgIHJldHVybiBiYWwoam9pblNoYXJlZChsbiwgdiwgcm4ubCksIHJuLnYsIHJuLnIpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjcmVhdGUobG4sIHYsIHJuKTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjb25jYXRTaGFyZWQodDEsIHQyKSB7XG4gIGlmICh0MSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHQyO1xuICB9XG4gIGlmICh0MiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIHQxO1xuICB9XG4gIHZhciB2ID0ge1xuICAgIGNvbnRlbnRzOiB0Mi52XG4gIH07XG4gIHZhciB0MnIgPSByZW1vdmVNaW5BdXhXaXRoUmVmKHQyLCB2KTtcbiAgcmV0dXJuIGpvaW5TaGFyZWQodDEsIHYuY29udGVudHMsIHQycik7XG59XG5cbmZ1bmN0aW9uIHBhcnRpdGlvblNoYXJlZFUobiwgcCkge1xuICBpZiAobiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgIF07XG4gIH1cbiAgdmFyIHZhbHVlID0gbi52O1xuICB2YXIgbWF0Y2ggPSBwYXJ0aXRpb25TaGFyZWRVKG4ubCwgcCk7XG4gIHZhciBsZiA9IG1hdGNoWzFdO1xuICB2YXIgbHQgPSBtYXRjaFswXTtcbiAgdmFyIHB2ID0gcCh2YWx1ZSk7XG4gIHZhciBtYXRjaCQxID0gcGFydGl0aW9uU2hhcmVkVShuLnIsIHApO1xuICB2YXIgcmYgPSBtYXRjaCQxWzFdO1xuICB2YXIgcnQgPSBtYXRjaCQxWzBdO1xuICBpZiAocHYpIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgam9pblNoYXJlZChsdCwgdmFsdWUsIHJ0KSxcbiAgICAgICAgICAgIGNvbmNhdFNoYXJlZChsZiwgcmYpXG4gICAgICAgICAgXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gW1xuICAgICAgICAgICAgY29uY2F0U2hhcmVkKGx0LCBydCksXG4gICAgICAgICAgICBqb2luU2hhcmVkKGxmLCB2YWx1ZSwgcmYpXG4gICAgICAgICAgXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBwYXJ0aXRpb25TaGFyZWQobiwgcCkge1xuICByZXR1cm4gcGFydGl0aW9uU2hhcmVkVShuLCBDdXJyeS5fXzEocCkpO1xufVxuXG5mdW5jdGlvbiBsZW5ndGhOb2RlKG4pIHtcbiAgdmFyIGwgPSBuLmw7XG4gIHZhciByID0gbi5yO1xuICB2YXIgc2l6ZUwgPSBsICE9PSB1bmRlZmluZWQgPyBsZW5ndGhOb2RlKGwpIDogMDtcbiAgdmFyIHNpemVSID0gciAhPT0gdW5kZWZpbmVkID8gbGVuZ3RoTm9kZShyKSA6IDA7XG4gIHJldHVybiAoMSArIHNpemVMIHwgMCkgKyBzaXplUiB8IDA7XG59XG5cbmZ1bmN0aW9uIHNpemUobikge1xuICBpZiAobiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGxlbmd0aE5vZGUobik7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gdG9MaXN0QXV4KF9uLCBfYWNjdSkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGFjY3UgPSBfYWNjdTtcbiAgICB2YXIgbiA9IF9uO1xuICAgIGlmIChuID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgICBfYWNjdSA9IHtcbiAgICAgIGhkOiBuLnYsXG4gICAgICB0bDogdG9MaXN0QXV4KG4uciwgYWNjdSlcbiAgICB9O1xuICAgIF9uID0gbi5sO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdG9MaXN0KHMpIHtcbiAgcmV0dXJuIHRvTGlzdEF1eChzLCAvKiBbXSAqLzApO1xufVxuXG5mdW5jdGlvbiBjaGVja0ludmFyaWFudEludGVybmFsKF92KSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgdiA9IF92O1xuICAgIGlmICh2ID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiA7XG4gICAgfVxuICAgIHZhciBsID0gdi5sO1xuICAgIHZhciByID0gdi5yO1xuICAgIHZhciBkaWZmID0gKFxuICAgICAgbCAhPT0gdW5kZWZpbmVkID8gbC5oIDogMFxuICAgICkgLSAoXG4gICAgICByICE9PSB1bmRlZmluZWQgPyByLmggOiAwXG4gICAgKSB8IDA7XG4gICAgaWYgKCEoZGlmZiA8PSAyICYmIGRpZmYgPj0gLTIpKSB7XG4gICAgICB0aHJvdyB7XG4gICAgICAgICAgICBSRV9FWE5fSUQ6IFwiQXNzZXJ0X2ZhaWx1cmVcIixcbiAgICAgICAgICAgIF8xOiBbXG4gICAgICAgICAgICAgIFwiYmVsdF9pbnRlcm5hbEFWTHNldC5tbFwiLFxuICAgICAgICAgICAgICAyOTAsXG4gICAgICAgICAgICAgIDRcbiAgICAgICAgICAgIF0sXG4gICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICB9O1xuICAgIH1cbiAgICBjaGVja0ludmFyaWFudEludGVybmFsKGwpO1xuICAgIF92ID0gcjtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbGxBcnJheShfbiwgX2ksIGFycikge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICB2YXIgbiA9IF9uO1xuICAgIHZhciB2ID0gbi52O1xuICAgIHZhciBsID0gbi5sO1xuICAgIHZhciByID0gbi5yO1xuICAgIHZhciBuZXh0ID0gbCAhPT0gdW5kZWZpbmVkID8gZmlsbEFycmF5KGwsIGksIGFycikgOiBpO1xuICAgIGFycltuZXh0XSA9IHY7XG4gICAgdmFyIHJuZXh0ID0gbmV4dCArIDEgfCAwO1xuICAgIGlmIChyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBybmV4dDtcbiAgICB9XG4gICAgX2kgPSBybmV4dDtcbiAgICBfbiA9IHI7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWxsQXJyYXlXaXRoUGFydGl0aW9uKF9uLCBjdXJzb3IsIGFyciwgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIG4gPSBfbjtcbiAgICB2YXIgdiA9IG4udjtcbiAgICB2YXIgbCA9IG4ubDtcbiAgICB2YXIgciA9IG4ucjtcbiAgICBpZiAobCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBmaWxsQXJyYXlXaXRoUGFydGl0aW9uKGwsIGN1cnNvciwgYXJyLCBwKTtcbiAgICB9XG4gICAgaWYgKHAodikpIHtcbiAgICAgIHZhciBjID0gY3Vyc29yLmZvcndhcmQ7XG4gICAgICBhcnJbY10gPSB2O1xuICAgICAgY3Vyc29yLmZvcndhcmQgPSBjICsgMSB8IDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciBjJDEgPSBjdXJzb3IuYmFja3dhcmQ7XG4gICAgICBhcnJbYyQxXSA9IHY7XG4gICAgICBjdXJzb3IuYmFja3dhcmQgPSBjJDEgLSAxIHwgMDtcbiAgICB9XG4gICAgaWYgKHIgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgX24gPSByO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsbEFycmF5V2l0aEZpbHRlcihfbiwgX2ksIGFyciwgcCkge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGkgPSBfaTtcbiAgICB2YXIgbiA9IF9uO1xuICAgIHZhciB2ID0gbi52O1xuICAgIHZhciBsID0gbi5sO1xuICAgIHZhciByID0gbi5yO1xuICAgIHZhciBuZXh0ID0gbCAhPT0gdW5kZWZpbmVkID8gZmlsbEFycmF5V2l0aEZpbHRlcihsLCBpLCBhcnIsIHApIDogaTtcbiAgICB2YXIgcm5leHQgPSBwKHYpID8gKGFycltuZXh0XSA9IHYsIG5leHQgKyAxIHwgMCkgOiBuZXh0O1xuICAgIGlmIChyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBybmV4dDtcbiAgICB9XG4gICAgX2kgPSBybmV4dDtcbiAgICBfbiA9IHI7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiB0b0FycmF5KG4pIHtcbiAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgc2l6ZSA9IGxlbmd0aE5vZGUobik7XG4gIHZhciB2ID0gbmV3IEFycmF5KHNpemUpO1xuICBmaWxsQXJyYXkobiwgMCwgdik7XG4gIHJldHVybiB2O1xufVxuXG5mdW5jdGlvbiBmcm9tU29ydGVkQXJyYXlSZXZBdXgoYXJyLCBvZmYsIGxlbikge1xuICBzd2l0Y2ggKGxlbikge1xuICAgIGNhc2UgMCA6XG4gICAgICAgIHJldHVybiA7XG4gICAgY2FzZSAxIDpcbiAgICAgICAgcmV0dXJuIHNpbmdsZXRvbihhcnJbb2ZmXSk7XG4gICAgY2FzZSAyIDpcbiAgICAgICAgdmFyIHgwID0gYXJyW29mZl07XG4gICAgICAgIHZhciB4MSA9IGFycltvZmYgLSAxIHwgMF07XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgdjogeDEsXG4gICAgICAgICAgICAgICAgaDogMixcbiAgICAgICAgICAgICAgICBsOiBzaW5nbGV0b24oeDApLFxuICAgICAgICAgICAgICAgIHI6IHVuZGVmaW5lZFxuICAgICAgICAgICAgICB9O1xuICAgIGNhc2UgMyA6XG4gICAgICAgIHZhciB4MCQxID0gYXJyW29mZl07XG4gICAgICAgIHZhciB4MSQxID0gYXJyW29mZiAtIDEgfCAwXTtcbiAgICAgICAgdmFyIHgyID0gYXJyW29mZiAtIDIgfCAwXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2OiB4MSQxLFxuICAgICAgICAgICAgICAgIGg6IDIsXG4gICAgICAgICAgICAgICAgbDogc2luZ2xldG9uKHgwJDEpLFxuICAgICAgICAgICAgICAgIHI6IHNpbmdsZXRvbih4MilcbiAgICAgICAgICAgICAgfTtcbiAgICBkZWZhdWx0OlxuICAgICAgdmFyIG5sID0gbGVuIC8gMiB8IDA7XG4gICAgICB2YXIgbGVmdCA9IGZyb21Tb3J0ZWRBcnJheVJldkF1eChhcnIsIG9mZiwgbmwpO1xuICAgICAgdmFyIG1pZCA9IGFycltvZmYgLSBubCB8IDBdO1xuICAgICAgdmFyIHJpZ2h0ID0gZnJvbVNvcnRlZEFycmF5UmV2QXV4KGFyciwgKG9mZiAtIG5sIHwgMCkgLSAxIHwgMCwgKGxlbiAtIG5sIHwgMCkgLSAxIHwgMCk7XG4gICAgICByZXR1cm4gY3JlYXRlKGxlZnQsIG1pZCwgcmlnaHQpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGZyb21Tb3J0ZWRBcnJheUF1eChhcnIsIG9mZiwgbGVuKSB7XG4gIHN3aXRjaCAobGVuKSB7XG4gICAgY2FzZSAwIDpcbiAgICAgICAgcmV0dXJuIDtcbiAgICBjYXNlIDEgOlxuICAgICAgICByZXR1cm4gc2luZ2xldG9uKGFycltvZmZdKTtcbiAgICBjYXNlIDIgOlxuICAgICAgICB2YXIgeDAgPSBhcnJbb2ZmXTtcbiAgICAgICAgdmFyIHgxID0gYXJyW29mZiArIDEgfCAwXTtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICB2OiB4MSxcbiAgICAgICAgICAgICAgICBoOiAyLFxuICAgICAgICAgICAgICAgIGw6IHNpbmdsZXRvbih4MCksXG4gICAgICAgICAgICAgICAgcjogdW5kZWZpbmVkXG4gICAgICAgICAgICAgIH07XG4gICAgY2FzZSAzIDpcbiAgICAgICAgdmFyIHgwJDEgPSBhcnJbb2ZmXTtcbiAgICAgICAgdmFyIHgxJDEgPSBhcnJbb2ZmICsgMSB8IDBdO1xuICAgICAgICB2YXIgeDIgPSBhcnJbb2ZmICsgMiB8IDBdO1xuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIHY6IHgxJDEsXG4gICAgICAgICAgICAgICAgaDogMixcbiAgICAgICAgICAgICAgICBsOiBzaW5nbGV0b24oeDAkMSksXG4gICAgICAgICAgICAgICAgcjogc2luZ2xldG9uKHgyKVxuICAgICAgICAgICAgICB9O1xuICAgIGRlZmF1bHQ6XG4gICAgICB2YXIgbmwgPSBsZW4gLyAyIHwgMDtcbiAgICAgIHZhciBsZWZ0ID0gZnJvbVNvcnRlZEFycmF5QXV4KGFyciwgb2ZmLCBubCk7XG4gICAgICB2YXIgbWlkID0gYXJyW29mZiArIG5sIHwgMF07XG4gICAgICB2YXIgcmlnaHQgPSBmcm9tU29ydGVkQXJyYXlBdXgoYXJyLCAob2ZmICsgbmwgfCAwKSArIDEgfCAwLCAobGVuIC0gbmwgfCAwKSAtIDEgfCAwKTtcbiAgICAgIHJldHVybiBjcmVhdGUobGVmdCwgbWlkLCByaWdodCk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZnJvbVNvcnRlZEFycmF5VW5zYWZlKGFycikge1xuICByZXR1cm4gZnJvbVNvcnRlZEFycmF5QXV4KGFyciwgMCwgYXJyLmxlbmd0aCk7XG59XG5cbmZ1bmN0aW9uIGtlZXBTaGFyZWRVKG4sIHApIHtcbiAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIHYgPSBuLnY7XG4gIHZhciBsID0gbi5sO1xuICB2YXIgciA9IG4ucjtcbiAgdmFyIG5ld0wgPSBrZWVwU2hhcmVkVShsLCBwKTtcbiAgdmFyIHB2ID0gcCh2KTtcbiAgdmFyIG5ld1IgPSBrZWVwU2hhcmVkVShyLCBwKTtcbiAgaWYgKHB2KSB7XG4gICAgaWYgKGwgPT09IG5ld0wgJiYgciA9PT0gbmV3Uikge1xuICAgICAgcmV0dXJuIG47XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiBqb2luU2hhcmVkKG5ld0wsIHYsIG5ld1IpO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gY29uY2F0U2hhcmVkKG5ld0wsIG5ld1IpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGtlZXBTaGFyZWQobiwgcCkge1xuICByZXR1cm4ga2VlcFNoYXJlZFUobiwgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24ga2VlcENvcHlVKG4sIHApIHtcbiAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIHNpemUgPSBsZW5ndGhOb2RlKG4pO1xuICB2YXIgdiA9IG5ldyBBcnJheShzaXplKTtcbiAgdmFyIGxhc3QgPSBmaWxsQXJyYXlXaXRoRmlsdGVyKG4sIDAsIHYsIHApO1xuICByZXR1cm4gZnJvbVNvcnRlZEFycmF5QXV4KHYsIDAsIGxhc3QpO1xufVxuXG5mdW5jdGlvbiBrZWVwQ29weShuLCBwKSB7XG4gIHJldHVybiBrZWVwQ29weVUobiwgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gcGFydGl0aW9uQ29weVUobiwgcCkge1xuICBpZiAobiA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIHVuZGVmaW5lZCxcbiAgICAgICAgICAgIHVuZGVmaW5lZFxuICAgICAgICAgIF07XG4gIH1cbiAgdmFyIHNpemUgPSBsZW5ndGhOb2RlKG4pO1xuICB2YXIgdiA9IG5ldyBBcnJheShzaXplKTtcbiAgdmFyIGJhY2t3YXJkID0gc2l6ZSAtIDEgfCAwO1xuICB2YXIgY3Vyc29yID0ge1xuICAgIGZvcndhcmQ6IDAsXG4gICAgYmFja3dhcmQ6IGJhY2t3YXJkXG4gIH07XG4gIGZpbGxBcnJheVdpdGhQYXJ0aXRpb24obiwgY3Vyc29yLCB2LCBwKTtcbiAgdmFyIGZvcndhcmRMZW4gPSBjdXJzb3IuZm9yd2FyZDtcbiAgcmV0dXJuIFtcbiAgICAgICAgICBmcm9tU29ydGVkQXJyYXlBdXgodiwgMCwgZm9yd2FyZExlbiksXG4gICAgICAgICAgZnJvbVNvcnRlZEFycmF5UmV2QXV4KHYsIGJhY2t3YXJkLCBzaXplIC0gZm9yd2FyZExlbiB8IDApXG4gICAgICAgIF07XG59XG5cbmZ1bmN0aW9uIHBhcnRpdGlvbkNvcHkobiwgcCkge1xuICByZXR1cm4gcGFydGl0aW9uQ29weVUobiwgQ3VycnkuX18xKHApKTtcbn1cblxuZnVuY3Rpb24gaGFzKF90LCB4LCBjbXApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB0ID0gX3Q7XG4gICAgaWYgKHQgPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgICB2YXIgdiA9IHQudjtcbiAgICB2YXIgYyA9IGNtcCh4LCB2KTtcbiAgICBpZiAoYyA9PT0gMCkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIF90ID0gYyA8IDAgPyB0LmwgOiB0LnI7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBjbXAoczEsIHMyLCBjbXAkMSkge1xuICB2YXIgbGVuMSA9IHNpemUoczEpO1xuICB2YXIgbGVuMiA9IHNpemUoczIpO1xuICBpZiAobGVuMSA9PT0gbGVuMikge1xuICAgIHZhciBfZTEgPSBzdGFja0FsbExlZnQoczEsIC8qIFtdICovMCk7XG4gICAgdmFyIF9lMiA9IHN0YWNrQWxsTGVmdChzMiwgLyogW10gKi8wKTtcbiAgICB3aGlsZSh0cnVlKSB7XG4gICAgICB2YXIgZTIgPSBfZTI7XG4gICAgICB2YXIgZTEgPSBfZTE7XG4gICAgICBpZiAoIWUxKSB7XG4gICAgICAgIHJldHVybiAwO1xuICAgICAgfVxuICAgICAgaWYgKCFlMikge1xuICAgICAgICByZXR1cm4gMDtcbiAgICAgIH1cbiAgICAgIHZhciBoMiA9IGUyLmhkO1xuICAgICAgdmFyIGgxID0gZTEuaGQ7XG4gICAgICB2YXIgYyA9IGNtcCQxKGgxLnYsIGgyLnYpO1xuICAgICAgaWYgKGMgIT09IDApIHtcbiAgICAgICAgcmV0dXJuIGM7XG4gICAgICB9XG4gICAgICBfZTIgPSBzdGFja0FsbExlZnQoaDIuciwgZTIudGwpO1xuICAgICAgX2UxID0gc3RhY2tBbGxMZWZ0KGgxLnIsIGUxLnRsKTtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9O1xuICB9IGVsc2UgaWYgKGxlbjEgPCBsZW4yKSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIGVxKHMxLCBzMiwgYykge1xuICByZXR1cm4gY21wKHMxLCBzMiwgYykgPT09IDA7XG59XG5cbmZ1bmN0aW9uIHN1YnNldChfczEsIF9zMiwgY21wKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgczIgPSBfczI7XG4gICAgdmFyIHMxID0gX3MxO1xuICAgIGlmIChzMSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICByZXR1cm4gdHJ1ZTtcbiAgICB9XG4gICAgaWYgKHMyID09PSB1bmRlZmluZWQpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgdmFyIHYxID0gczEudjtcbiAgICB2YXIgbDEgPSBzMS5sO1xuICAgIHZhciByMSA9IHMxLnI7XG4gICAgdmFyIHYyID0gczIudjtcbiAgICB2YXIgbDIgPSBzMi5sO1xuICAgIHZhciByMiA9IHMyLnI7XG4gICAgdmFyIGMgPSBjbXAodjEsIHYyKTtcbiAgICBpZiAoYyA9PT0gMCkge1xuICAgICAgaWYgKCFzdWJzZXQobDEsIGwyLCBjbXApKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH1cbiAgICAgIF9zMiA9IHIyO1xuICAgICAgX3MxID0gcjE7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIGlmIChjIDwgMCkge1xuICAgICAgaWYgKCFzdWJzZXQoY3JlYXRlKGwxLCB2MSwgdW5kZWZpbmVkKSwgbDIsIGNtcCkpIHtcbiAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgfVxuICAgICAgX3MxID0gcjE7XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIGlmICghc3Vic2V0KGNyZWF0ZSh1bmRlZmluZWQsIHYxLCByMSksIHIyLCBjbXApKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIF9zMSA9IGwxO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0KF9uLCB4LCBjbXApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBuID0gX247XG4gICAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIHYgPSBuLnY7XG4gICAgdmFyIGMgPSBjbXAoeCwgdik7XG4gICAgaWYgKGMgPT09IDApIHtcbiAgICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKHYpO1xuICAgIH1cbiAgICBfbiA9IGMgPCAwID8gbi5sIDogbi5yO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0VW5kZWZpbmVkKF9uLCB4LCBjbXApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBuID0gX247XG4gICAgaWYgKG4gPT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIHYgPSBuLnY7XG4gICAgdmFyIGMgPSBjbXAoeCwgdik7XG4gICAgaWYgKGMgPT09IDApIHtcbiAgICAgIHJldHVybiB2O1xuICAgIH1cbiAgICBfbiA9IGMgPCAwID8gbi5sIDogbi5yO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0RXhuKF9uLCB4LCBjbXApIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBuID0gX247XG4gICAgaWYgKG4gIT09IHVuZGVmaW5lZCkge1xuICAgICAgdmFyIHYgPSBuLnY7XG4gICAgICB2YXIgYyA9IGNtcCh4LCB2KTtcbiAgICAgIGlmIChjID09PSAwKSB7XG4gICAgICAgIHJldHVybiB2O1xuICAgICAgfVxuICAgICAgX24gPSBjIDwgMCA/IG4ubCA6IG4ucjtcbiAgICAgIGNvbnRpbnVlIDtcbiAgICB9XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgfTtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcm90YXRlV2l0aExlZnRDaGlsZChrMikge1xuICB2YXIgazEgPSBrMi5sO1xuICBrMi5sID0gazEucjtcbiAgazEuciA9IGsyO1xuICB2YXIgbiA9IGsyLmw7XG4gIHZhciBobGsyID0gbiAhPT0gdW5kZWZpbmVkID8gbi5oIDogMDtcbiAgdmFyIG4kMSA9IGsyLnI7XG4gIHZhciBocmsyID0gbiQxICE9PSB1bmRlZmluZWQgPyBuJDEuaCA6IDA7XG4gIGsyLmggPSAoXG4gICAgaGxrMiA+IGhyazIgPyBobGsyIDogaHJrMlxuICApICsgMSB8IDA7XG4gIHZhciBuJDIgPSBrMS5sO1xuICB2YXIgaGxrMSA9IG4kMiAhPT0gdW5kZWZpbmVkID8gbiQyLmggOiAwO1xuICB2YXIgaGsyID0gazIuaDtcbiAgazEuaCA9IChcbiAgICBobGsxID4gaGsyID8gaGxrMSA6IGhrMlxuICApICsgMSB8IDA7XG4gIHJldHVybiBrMTtcbn1cblxuZnVuY3Rpb24gcm90YXRlV2l0aFJpZ2h0Q2hpbGQoazEpIHtcbiAgdmFyIGsyID0gazEucjtcbiAgazEuciA9IGsyLmw7XG4gIGsyLmwgPSBrMTtcbiAgdmFyIG4gPSBrMS5sO1xuICB2YXIgaGxrMSA9IG4gIT09IHVuZGVmaW5lZCA/IG4uaCA6IDA7XG4gIHZhciBuJDEgPSBrMS5yO1xuICB2YXIgaHJrMSA9IG4kMSAhPT0gdW5kZWZpbmVkID8gbiQxLmggOiAwO1xuICBrMS5oID0gKFxuICAgIGhsazEgPiBocmsxID8gaGxrMSA6IGhyazFcbiAgKSArIDEgfCAwO1xuICB2YXIgbiQyID0gazIucjtcbiAgdmFyIGhyazIgPSBuJDIgIT09IHVuZGVmaW5lZCA/IG4kMi5oIDogMDtcbiAgdmFyIGhrMSA9IGsxLmg7XG4gIGsyLmggPSAoXG4gICAgaHJrMiA+IGhrMSA/IGhyazIgOiBoazFcbiAgKSArIDEgfCAwO1xuICByZXR1cm4gazI7XG59XG5cbmZ1bmN0aW9uIGRvdWJsZVdpdGhMZWZ0Q2hpbGQoazMpIHtcbiAgdmFyIGszbCA9IGszLmw7XG4gIHZhciB2ID0gcm90YXRlV2l0aFJpZ2h0Q2hpbGQoazNsKTtcbiAgazMubCA9IHY7XG4gIHJldHVybiByb3RhdGVXaXRoTGVmdENoaWxkKGszKTtcbn1cblxuZnVuY3Rpb24gZG91YmxlV2l0aFJpZ2h0Q2hpbGQoazIpIHtcbiAgdmFyIGsyciA9IGsyLnI7XG4gIHZhciB2ID0gcm90YXRlV2l0aExlZnRDaGlsZChrMnIpO1xuICBrMi5yID0gdjtcbiAgcmV0dXJuIHJvdGF0ZVdpdGhSaWdodENoaWxkKGsyKTtcbn1cblxuZnVuY3Rpb24gaGVpZ2h0VXBkYXRlTXV0YXRlKHQpIHtcbiAgdmFyIG4gPSB0Lmw7XG4gIHZhciBobHQgPSBuICE9PSB1bmRlZmluZWQgPyBuLmggOiAwO1xuICB2YXIgbiQxID0gdC5yO1xuICB2YXIgaHJ0ID0gbiQxICE9PSB1bmRlZmluZWQgPyBuJDEuaCA6IDA7XG4gIHQuaCA9IChcbiAgICBobHQgPiBocnQgPyBobHQgOiBocnRcbiAgKSArIDEgfCAwO1xuICByZXR1cm4gdDtcbn1cblxuZnVuY3Rpb24gYmFsTXV0YXRlKG50KSB7XG4gIHZhciBsID0gbnQubDtcbiAgdmFyIHIgPSBudC5yO1xuICB2YXIgaGwgPSBsICE9PSB1bmRlZmluZWQgPyBsLmggOiAwO1xuICB2YXIgaHIgPSByICE9PSB1bmRlZmluZWQgPyByLmggOiAwO1xuICBpZiAoaGwgPiAoMiArIGhyIHwgMCkpIHtcbiAgICB2YXIgbGwgPSBsLmw7XG4gICAgdmFyIGxyID0gbC5yO1xuICAgIGlmIChoZWlnaHRHZShsbCwgbHIpKSB7XG4gICAgICByZXR1cm4gaGVpZ2h0VXBkYXRlTXV0YXRlKHJvdGF0ZVdpdGhMZWZ0Q2hpbGQobnQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGhlaWdodFVwZGF0ZU11dGF0ZShkb3VibGVXaXRoTGVmdENoaWxkKG50KSk7XG4gICAgfVxuICB9XG4gIGlmIChociA+ICgyICsgaGwgfCAwKSkge1xuICAgIHZhciBybCA9IHIubDtcbiAgICB2YXIgcnIgPSByLnI7XG4gICAgaWYgKGhlaWdodEdlKHJyLCBybCkpIHtcbiAgICAgIHJldHVybiBoZWlnaHRVcGRhdGVNdXRhdGUocm90YXRlV2l0aFJpZ2h0Q2hpbGQobnQpKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIGhlaWdodFVwZGF0ZU11dGF0ZShkb3VibGVXaXRoUmlnaHRDaGlsZChudCkpO1xuICAgIH1cbiAgfVxuICBudC5oID0gKFxuICAgIGhsID4gaHIgPyBobCA6IGhyXG4gICkgKyAxIHwgMDtcbiAgcmV0dXJuIG50O1xufVxuXG5mdW5jdGlvbiBhZGRNdXRhdGUoY21wLCB0LCB4KSB7XG4gIGlmICh0ID09PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gc2luZ2xldG9uKHgpO1xuICB9XG4gIHZhciBrID0gdC52O1xuICB2YXIgYyA9IGNtcCh4LCBrKTtcbiAgaWYgKGMgPT09IDApIHtcbiAgICByZXR1cm4gdDtcbiAgfVxuICB2YXIgbCA9IHQubDtcbiAgdmFyIHIgPSB0LnI7XG4gIGlmIChjIDwgMCkge1xuICAgIHZhciBsbCA9IGFkZE11dGF0ZShjbXAsIGwsIHgpO1xuICAgIHQubCA9IGxsO1xuICB9IGVsc2Uge1xuICAgIHQuciA9IGFkZE11dGF0ZShjbXAsIHIsIHgpO1xuICB9XG4gIHJldHVybiBiYWxNdXRhdGUodCk7XG59XG5cbmZ1bmN0aW9uIGZyb21BcnJheSh4cywgY21wKSB7XG4gIHZhciBsZW4gPSB4cy5sZW5ndGg7XG4gIGlmIChsZW4gPT09IDApIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciBuZXh0ID0gQmVsdF9Tb3J0QXJyYXkuc3RyaWN0bHlTb3J0ZWRMZW5ndGhVKHhzLCAoZnVuY3Rpb24gKHgsIHkpIHtcbiAgICAgICAgICByZXR1cm4gY21wKHgsIHkpIDwgMDtcbiAgICAgICAgfSkpO1xuICB2YXIgcmVzdWx0O1xuICBpZiAobmV4dCA+PSAwKSB7XG4gICAgcmVzdWx0ID0gZnJvbVNvcnRlZEFycmF5QXV4KHhzLCAwLCBuZXh0KTtcbiAgfSBlbHNlIHtcbiAgICBuZXh0ID0gLW5leHQgfCAwO1xuICAgIHJlc3VsdCA9IGZyb21Tb3J0ZWRBcnJheVJldkF1eCh4cywgbmV4dCAtIDEgfCAwLCBuZXh0KTtcbiAgfVxuICBmb3IodmFyIGkgPSBuZXh0OyBpIDwgbGVuOyArK2kpe1xuICAgIHJlc3VsdCA9IGFkZE11dGF0ZShjbXAsIHJlc3VsdCwgeHNbaV0pO1xuICB9XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHJlbW92ZU1pbkF1eFdpdGhSb290TXV0YXRlKG50LCBuKSB7XG4gIHZhciBsbiA9IG4ubDtcbiAgdmFyIHJuID0gbi5yO1xuICBpZiAobG4gIT09IHVuZGVmaW5lZCkge1xuICAgIG4ubCA9IHJlbW92ZU1pbkF1eFdpdGhSb290TXV0YXRlKG50LCBsbik7XG4gICAgcmV0dXJuIGJhbE11dGF0ZShuKTtcbiAgfSBlbHNlIHtcbiAgICBudC52ID0gbi52O1xuICAgIHJldHVybiBybjtcbiAgfVxufVxuXG5leHBvcnQge1xuICBjb3B5ICxcbiAgY3JlYXRlICxcbiAgYmFsICxcbiAgc2luZ2xldG9uICxcbiAgbWluaW11bSAsXG4gIG1pblVuZGVmaW5lZCAsXG4gIG1heGltdW0gLFxuICBtYXhVbmRlZmluZWQgLFxuICByZW1vdmVNaW5BdXhXaXRoUmVmICxcbiAgaXNFbXB0eSAsXG4gIHN0YWNrQWxsTGVmdCAsXG4gIGZvckVhY2hVICxcbiAgZm9yRWFjaCAsXG4gIHJlZHVjZVUgLFxuICByZWR1Y2UgLFxuICBldmVyeVUgLFxuICBldmVyeSAsXG4gIHNvbWVVICxcbiAgc29tZSAsXG4gIGpvaW5TaGFyZWQgLFxuICBjb25jYXRTaGFyZWQgLFxuICBrZWVwU2hhcmVkVSAsXG4gIGtlZXBTaGFyZWQgLFxuICBrZWVwQ29weVUgLFxuICBrZWVwQ29weSAsXG4gIHBhcnRpdGlvblNoYXJlZFUgLFxuICBwYXJ0aXRpb25TaGFyZWQgLFxuICBwYXJ0aXRpb25Db3B5VSAsXG4gIHBhcnRpdGlvbkNvcHkgLFxuICBsZW5ndGhOb2RlICxcbiAgc2l6ZSAsXG4gIHRvTGlzdCAsXG4gIGNoZWNrSW52YXJpYW50SW50ZXJuYWwgLFxuICBmaWxsQXJyYXkgLFxuICB0b0FycmF5ICxcbiAgZnJvbVNvcnRlZEFycmF5QXV4ICxcbiAgZnJvbVNvcnRlZEFycmF5UmV2QXV4ICxcbiAgZnJvbVNvcnRlZEFycmF5VW5zYWZlICxcbiAgaGFzICxcbiAgY21wICxcbiAgZXEgLFxuICBzdWJzZXQgLFxuICBnZXQgLFxuICBnZXRVbmRlZmluZWQgLFxuICBnZXRFeG4gLFxuICBmcm9tQXJyYXkgLFxuICBhZGRNdXRhdGUgLFxuICBiYWxNdXRhdGUgLFxuICByZW1vdmVNaW5BdXhXaXRoUm9vdE11dGF0ZSAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbmZ1bmN0aW9uIGNhbWxfaW50X2NvbXBhcmUoeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoeCA9PT0geSkge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAxO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYm9vbF9jb21wYXJlKHgsIHkpIHtcbiAgaWYgKHgpIHtcbiAgICBpZiAoeSkge1xuICAgICAgcmV0dXJuIDA7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAxO1xuICAgIH1cbiAgfSBlbHNlIGlmICh5KSB7XG4gICAgcmV0dXJuIC0xO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiAwO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZmxvYXRfY29tcGFyZSh4LCB5KSB7XG4gIGlmICh4ID09PSB5KSB7XG4gICAgcmV0dXJuIDA7XG4gIH0gZWxzZSBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSBpZiAoeCA+IHkgfHwgeCA9PT0geCkge1xuICAgIHJldHVybiAxO1xuICB9IGVsc2UgaWYgKHkgPT09IHkpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9zdHJpbmdfY29tcGFyZShzMSwgczIpIHtcbiAgaWYgKHMxID09PSBzMikge1xuICAgIHJldHVybiAwO1xuICB9IGVsc2UgaWYgKHMxIDwgczIpIHtcbiAgICByZXR1cm4gLTE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDE7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9ib29sX21pbih4LCB5KSB7XG4gIGlmICh4KSB7XG4gICAgcmV0dXJuIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9pbnRfbWluKHgsIHkpIHtcbiAgaWYgKHggPCB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9mbG9hdF9taW4oeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX3N0cmluZ19taW4oeCwgeSkge1xuICBpZiAoeCA8IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2ludDMyX21pbih4LCB5KSB7XG4gIGlmICh4IDwgeSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYm9vbF9tYXgoeCwgeSkge1xuICBpZiAoeCkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfaW50X21heCh4LCB5KSB7XG4gIGlmICh4ID4geSkge1xuICAgIHJldHVybiB4O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB5O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZmxvYXRfbWF4KHgsIHkpIHtcbiAgaWYgKHggPiB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9zdHJpbmdfbWF4KHgsIHkpIHtcbiAgaWYgKHggPiB5KSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9pbnQzMl9tYXgoeCwgeSkge1xuICBpZiAoeCA+IHkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpNjRfZXEoeCwgeSkge1xuICBpZiAoeFsxXSA9PT0geVsxXSkge1xuICAgIHJldHVybiB4WzBdID09PSB5WzBdO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpNjRfZ2UocGFyYW0sIHBhcmFtJDEpIHtcbiAgdmFyIG90aGVyX2hpID0gcGFyYW0kMVswXTtcbiAgdmFyIGhpID0gcGFyYW1bMF07XG4gIGlmIChoaSA+IG90aGVyX2hpKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH0gZWxzZSBpZiAoaGkgPCBvdGhlcl9oaSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gcGFyYW1bMV0gPj0gcGFyYW0kMVsxXTtcbiAgfVxufVxuXG5mdW5jdGlvbiBpNjRfbmVxKHgsIHkpIHtcbiAgcmV0dXJuICFpNjRfZXEoeCwgeSk7XG59XG5cbmZ1bmN0aW9uIGk2NF9sdCh4LCB5KSB7XG4gIHJldHVybiAhaTY0X2dlKHgsIHkpO1xufVxuXG5mdW5jdGlvbiBpNjRfZ3QoeCwgeSkge1xuICBpZiAoeFswXSA+IHlbMF0pIHtcbiAgICByZXR1cm4gdHJ1ZTtcbiAgfSBlbHNlIGlmICh4WzBdIDwgeVswXSkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geFsxXSA+IHlbMV07XG4gIH1cbn1cblxuZnVuY3Rpb24gaTY0X2xlKHgsIHkpIHtcbiAgcmV0dXJuICFpNjRfZ3QoeCwgeSk7XG59XG5cbmZ1bmN0aW9uIGk2NF9taW4oeCwgeSkge1xuICBpZiAoaTY0X2dlKHgsIHkpKSB7XG4gICAgcmV0dXJuIHk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHg7XG4gIH1cbn1cblxuZnVuY3Rpb24gaTY0X21heCh4LCB5KSB7XG4gIGlmIChpNjRfZ3QoeCwgeSkpIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBjYW1sX2ludF9jb21wYXJlICxcbiAgY2FtbF9ib29sX2NvbXBhcmUgLFxuICBjYW1sX2Zsb2F0X2NvbXBhcmUgLFxuICBjYW1sX3N0cmluZ19jb21wYXJlICxcbiAgY2FtbF9ib29sX21pbiAsXG4gIGNhbWxfaW50X21pbiAsXG4gIGNhbWxfZmxvYXRfbWluICxcbiAgY2FtbF9zdHJpbmdfbWluICxcbiAgY2FtbF9pbnQzMl9taW4gLFxuICBjYW1sX2Jvb2xfbWF4ICxcbiAgY2FtbF9pbnRfbWF4ICxcbiAgY2FtbF9mbG9hdF9tYXggLFxuICBjYW1sX3N0cmluZ19tYXggLFxuICBjYW1sX2ludDMyX21heCAsXG4gIGk2NF9lcSAsXG4gIGk2NF9uZXEgLFxuICBpNjRfbHQgLFxuICBpNjRfZ3QgLFxuICBpNjRfbGUgLFxuICBpNjRfZ2UgLFxuICBpNjRfbWluICxcbiAgaTY0X21heCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5cbmZ1bmN0aW9uIHN1Yih4LCBvZmZzZXQsIGxlbikge1xuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KGxlbik7XG4gIHZhciBqID0gMDtcbiAgdmFyIGkgPSBvZmZzZXQ7XG4gIHdoaWxlKGogPCBsZW4pIHtcbiAgICByZXN1bHRbal0gPSB4W2ldO1xuICAgIGogPSBqICsgMSB8IDA7XG4gICAgaSA9IGkgKyAxIHwgMDtcbiAgfTtcbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbGVuKF9hY2MsIF9sKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbCA9IF9sO1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICghbCkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgX2wgPSBsLnRsO1xuICAgIF9hY2MgPSBsLmhkLmxlbmd0aCArIGFjYyB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmaWxsKGFyciwgX2ksIF9sKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbCA9IF9sO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKCFsKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICB2YXIgeCA9IGwuaGQ7XG4gICAgdmFyIGwkMSA9IHgubGVuZ3RoO1xuICAgIHZhciBrID0gaTtcbiAgICB2YXIgaiA9IDA7XG4gICAgd2hpbGUoaiA8IGwkMSkge1xuICAgICAgYXJyW2tdID0geFtqXTtcbiAgICAgIGsgPSBrICsgMSB8IDA7XG4gICAgICBqID0gaiArIDEgfCAwO1xuICAgIH07XG4gICAgX2wgPSBsLnRsO1xuICAgIF9pID0gaztcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbmNhdChsKSB7XG4gIHZhciB2ID0gbGVuKDAsIGwpO1xuICB2YXIgcmVzdWx0ID0gbmV3IEFycmF5KHYpO1xuICBmaWxsKHJlc3VsdCwgMCwgbCk7XG4gIHJldHVybiByZXN1bHQ7XG59XG5cbmZ1bmN0aW9uIHNldCh4cywgaW5kZXgsIG5ld3ZhbCkge1xuICBpZiAoaW5kZXggPCAwIHx8IGluZGV4ID49IHhzLmxlbmd0aCkge1xuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IFwiSW52YWxpZF9hcmd1bWVudFwiLFxuICAgICAgICAgIF8xOiBcImluZGV4IG91dCBvZiBib3VuZHNcIixcbiAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgfTtcbiAgfVxuICB4c1tpbmRleF0gPSBuZXd2YWw7XG4gIFxufVxuXG5mdW5jdGlvbiBnZXQoeHMsIGluZGV4KSB7XG4gIGlmIChpbmRleCA8IDAgfHwgaW5kZXggPj0geHMubGVuZ3RoKSB7XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJJbnZhbGlkX2FyZ3VtZW50XCIsXG4gICAgICAgICAgXzE6IFwiaW5kZXggb3V0IG9mIGJvdW5kc1wiLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIHJldHVybiB4c1tpbmRleF07XG59XG5cbmZ1bmN0aW9uIG1ha2UobGVuLCBpbml0KSB7XG4gIHZhciBiID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgYltpXSA9IGluaXQ7XG4gIH1cbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIG1ha2VfZmxvYXQobGVuKSB7XG4gIHZhciBiID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgYltpXSA9IDA7XG4gIH1cbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIGJsaXQoYTEsIGkxLCBhMiwgaTIsIGxlbikge1xuICBpZiAoaTIgPD0gaTEpIHtcbiAgICBmb3IodmFyIGogPSAwOyBqIDwgbGVuOyArK2ope1xuICAgICAgYTJbaiArIGkyIHwgMF0gPSBhMVtqICsgaTEgfCAwXTtcbiAgICB9XG4gICAgcmV0dXJuIDtcbiAgfVxuICBmb3IodmFyIGokMSA9IGxlbiAtIDEgfCAwOyBqJDEgPj0gMDsgLS1qJDEpe1xuICAgIGEyW2okMSArIGkyIHwgMF0gPSBhMVtqJDEgKyBpMSB8IDBdO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBkdXAocHJpbSkge1xuICByZXR1cm4gcHJpbS5zbGljZSgwKTtcbn1cblxuZXhwb3J0IHtcbiAgZHVwICxcbiAgc3ViICxcbiAgY29uY2F0ICxcbiAgbWFrZSAsXG4gIG1ha2VfZmxvYXQgLFxuICBibGl0ICxcbiAgZ2V0ICxcbiAgc2V0ICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cblxudmFyIGlkID0ge1xuICBjb250ZW50czogMFxufTtcblxuZnVuY3Rpb24gY3JlYXRlKHN0cikge1xuICBpZC5jb250ZW50cyA9IGlkLmNvbnRlbnRzICsgMSB8IDA7XG4gIHJldHVybiBzdHIgKyAoXCIvXCIgKyBpZC5jb250ZW50cyk7XG59XG5cbmZ1bmN0aW9uIGNhbWxfaXNfZXh0ZW5zaW9uKGUpIHtcbiAgaWYgKGUgPT0gbnVsbCkge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdHlwZW9mIGUuUkVfRVhOX0lEID09PSBcInN0cmluZ1wiO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfZXhuX3Nsb3RfbmFtZSh4KSB7XG4gIHJldHVybiB4LlJFX0VYTl9JRDtcbn1cblxuZXhwb3J0IHtcbiAgaWQgLFxuICBjcmVhdGUgLFxuICBjYW1sX2lzX2V4dGVuc2lvbiAsXG4gIGNhbWxfZXhuX3Nsb3RfbmFtZSAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDYW1sX29wdGlvbiBmcm9tIFwiLi9jYW1sX29wdGlvbi5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9leGNlcHRpb25zIGZyb20gXCIuL2NhbWxfZXhjZXB0aW9ucy5qc1wiO1xuXG52YXIgJCRFcnJvciA9IC8qIEBfX1BVUkVfXyAqL0NhbWxfZXhjZXB0aW9ucy5jcmVhdGUoXCJDYW1sX2pzX2V4Y2VwdGlvbnMuRXJyb3JcIik7XG5cbmZ1bmN0aW9uIGludGVybmFsVG9PQ2FtbEV4Y2VwdGlvbihlKSB7XG4gIGlmIChDYW1sX2V4Y2VwdGlvbnMuY2FtbF9pc19leHRlbnNpb24oZSkpIHtcbiAgICByZXR1cm4gZTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgUkVfRVhOX0lEOiAkJEVycm9yLFxuICAgICAgICAgICAgXzE6IGVcbiAgICAgICAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfYXNfanNfZXhuKGV4bikge1xuICBpZiAoZXhuLlJFX0VYTl9JRCA9PT0gJCRFcnJvcikge1xuICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKGV4bi5fMSk7XG4gIH1cbiAgXG59XG5cbmV4cG9ydCB7XG4gICQkRXJyb3IgLFxuICBpbnRlcm5hbFRvT0NhbWxFeGNlcHRpb24gLFxuICBjYW1sX2FzX2pzX2V4biAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBDYW1sIGZyb20gXCIuL2NhbWwuanNcIjtcblxudmFyIGZvcl9pbiA9IChmdW5jdGlvbihvLGZvbyl7XG4gICAgICAgIGZvciAodmFyIHggaW4gbykgeyBmb28oeCkgfX0pO1xuXG52YXIgY2FtbF9vYmpfZHVwID0gKGZ1bmN0aW9uKHgpe1xuICBpZihBcnJheS5pc0FycmF5KHgpKXtcbiAgICB2YXIgbGVuID0geC5sZW5ndGggIFxuICAgIHZhciB2ID0gbmV3IEFycmF5KGxlbilcbiAgICBmb3IodmFyIGkgPSAwIDsgaSA8IGxlbiA7ICsraSl7XG4gICAgICB2W2ldID0geFtpXVxuICAgIH1cbiAgICBpZih4LlRBRyAhPT0gdW5kZWZpbmVkKXtcbiAgICAgIHYuVEFHID0geC5UQUcgLy8gVE9ETyB0aGlzIGNhbiBiZSByZW1vdmVkIGV2ZW50dWFsbHlcbiAgICB9ICBcbiAgICByZXR1cm4gdiBcbiAgfSBcbiAgcmV0dXJuIE9iamVjdC5hc3NpZ24oe30seCkgICAgXG59KTtcblxudmFyIHVwZGF0ZV9kdW1teSA9IChmdW5jdGlvbih4LHkpe1xuICB2YXIgayAgXG4gIGlmKEFycmF5LmlzQXJyYXkoeSkpe1xuICAgIGZvcihrID0gMDsgayA8IHkubGVuZ3RoIDsgKytrKXtcbiAgICAgIHhba10gPSB5W2tdXG4gICAgfVxuICAgIGlmKHkuVEFHICE9PSB1bmRlZmluZWQpe1xuICAgICAgeC5UQUcgPSB5LlRBR1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICBmb3IgKHZhciBrIGluIHkpe1xuICAgICAgeFtrXSA9IHlba11cbiAgICB9XG4gIH1cbn0pO1xuXG5mdW5jdGlvbiBjYW1sX2NvbXBhcmUoYSwgYikge1xuICBpZiAoYSA9PT0gYikge1xuICAgIHJldHVybiAwO1xuICB9XG4gIHZhciBhX3R5cGUgPSB0eXBlb2YgYTtcbiAgdmFyIGJfdHlwZSA9IHR5cGVvZiBiO1xuICBzd2l0Y2ggKGFfdHlwZSkge1xuICAgIGNhc2UgXCJib29sZWFuXCIgOlxuICAgICAgICBpZiAoYl90eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICAgIHJldHVybiBDYW1sLmNhbWxfYm9vbF9jb21wYXJlKGEsIGIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJmdW5jdGlvblwiIDpcbiAgICAgICAgaWYgKGJfdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIFJFX0VYTl9JRDogXCJJbnZhbGlkX2FyZ3VtZW50XCIsXG4gICAgICAgICAgICAgICAgXzE6IFwiY29tcGFyZTogZnVuY3Rpb25hbCB2YWx1ZVwiLFxuICAgICAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJudW1iZXJcIiA6XG4gICAgICAgIGlmIChiX3R5cGUgPT09IFwibnVtYmVyXCIpIHtcbiAgICAgICAgICByZXR1cm4gQ2FtbC5jYW1sX2ludF9jb21wYXJlKGEsIGIpO1xuICAgICAgICB9XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgXCJzdHJpbmdcIiA6XG4gICAgICAgIGlmIChiX3R5cGUgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgICAgICByZXR1cm4gQ2FtbC5jYW1sX3N0cmluZ19jb21wYXJlKGEsIGIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAxO1xuICAgICAgICB9XG4gICAgY2FzZSBcInVuZGVmaW5lZFwiIDpcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgIGRlZmF1bHQ6XG4gICAgICBcbiAgfVxuICBzd2l0Y2ggKGJfdHlwZSkge1xuICAgIGNhc2UgXCJzdHJpbmdcIiA6XG4gICAgICAgIHJldHVybiAtMTtcbiAgICBjYXNlIFwidW5kZWZpbmVkXCIgOlxuICAgICAgICByZXR1cm4gMTtcbiAgICBkZWZhdWx0OlxuICAgICAgaWYgKGFfdHlwZSA9PT0gXCJib29sZWFuXCIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBpZiAoYl90eXBlID09PSBcImJvb2xlYW5cIikge1xuICAgICAgICByZXR1cm4gLTE7XG4gICAgICB9XG4gICAgICBpZiAoYV90eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIDE7XG4gICAgICB9XG4gICAgICBpZiAoYl90eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcbiAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgfVxuICAgICAgaWYgKGFfdHlwZSA9PT0gXCJudW1iZXJcIikge1xuICAgICAgICBpZiAoYiA9PT0gbnVsbCB8fCBiLkJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYl90eXBlID09PSBcIm51bWJlclwiKSB7XG4gICAgICAgIGlmIChhID09PSBudWxsIHx8IGEuQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIGlmIChhID09PSBudWxsKSB7XG4gICAgICAgIGlmIChiLkJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC0xO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICBpZiAoYiA9PT0gbnVsbCkge1xuICAgICAgICBpZiAoYS5CU19QUklWQVRFX05FU1RFRF9TT01FX05PTkUgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKGEuQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgaWYgKGIuQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gYXV4X29ial9jb21wYXJlKGEsIGIpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAtMTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdmFyIHRhZ19hID0gYS5UQUcgfCAwO1xuICAgICAgdmFyIHRhZ19iID0gYi5UQUcgfCAwO1xuICAgICAgaWYgKHRhZ19hID09PSAyNDgpIHtcbiAgICAgICAgcmV0dXJuIENhbWwuY2FtbF9pbnRfY29tcGFyZShhWzFdLCBiWzFdKTtcbiAgICAgIH1cbiAgICAgIGlmICh0YWdfYSA9PT0gMjUxKSB7XG4gICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgUkVfRVhOX0lEOiBcIkludmFsaWRfYXJndW1lbnRcIixcbiAgICAgICAgICAgICAgXzE6IFwiZXF1YWw6IGFic3RyYWN0IHZhbHVlXCIsXG4gICAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgICAgfTtcbiAgICAgIH1cbiAgICAgIGlmICh0YWdfYSAhPT0gdGFnX2IpIHtcbiAgICAgICAgaWYgKHRhZ19hIDwgdGFnX2IpIHtcbiAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICAgIHZhciBsZW5fYSA9IGEubGVuZ3RoIHwgMDtcbiAgICAgIHZhciBsZW5fYiA9IGIubGVuZ3RoIHwgMDtcbiAgICAgIGlmIChsZW5fYSA9PT0gbGVuX2IpIHtcbiAgICAgICAgaWYgKEFycmF5LmlzQXJyYXkoYSkpIHtcbiAgICAgICAgICB2YXIgX2kgPSAwO1xuICAgICAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgICAgIHZhciBpID0gX2k7XG4gICAgICAgICAgICBpZiAoaSA9PT0gbGVuX2EpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB2YXIgcmVzID0gY2FtbF9jb21wYXJlKGFbaV0sIGJbaV0pO1xuICAgICAgICAgICAgaWYgKHJlcyAhPT0gMCkge1xuICAgICAgICAgICAgICByZXR1cm4gcmVzO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgX2kgPSBpICsgMSB8IDA7XG4gICAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIGlmICgoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICAgICAgcmV0dXJuIChhIC0gYik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIGF1eF9vYmpfY29tcGFyZShhLCBiKTtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIGlmIChsZW5fYSA8IGxlbl9iKSB7XG4gICAgICAgIHZhciBfaSQxID0gMDtcbiAgICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICAgIHZhciBpJDEgPSBfaSQxO1xuICAgICAgICAgIGlmIChpJDEgPT09IGxlbl9hKSB7XG4gICAgICAgICAgICByZXR1cm4gLTE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciByZXMkMSA9IGNhbWxfY29tcGFyZShhW2kkMV0sIGJbaSQxXSk7XG4gICAgICAgICAgaWYgKHJlcyQxICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzJDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIF9pJDEgPSBpJDEgKyAxIHwgMDtcbiAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIH07XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB2YXIgX2kkMiA9IDA7XG4gICAgICAgIHdoaWxlKHRydWUpIHtcbiAgICAgICAgICB2YXIgaSQyID0gX2kkMjtcbiAgICAgICAgICBpZiAoaSQyID09PSBsZW5fYikge1xuICAgICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgICAgfVxuICAgICAgICAgIHZhciByZXMkMiA9IGNhbWxfY29tcGFyZShhW2kkMl0sIGJbaSQyXSk7XG4gICAgICAgICAgaWYgKHJlcyQyICE9PSAwKSB7XG4gICAgICAgICAgICByZXR1cm4gcmVzJDI7XG4gICAgICAgICAgfVxuICAgICAgICAgIF9pJDIgPSBpJDIgKyAxIHwgMDtcbiAgICAgICAgICBjb250aW51ZSA7XG4gICAgICAgIH07XG4gICAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gYXV4X29ial9jb21wYXJlKGEsIGIpIHtcbiAgdmFyIG1pbl9rZXlfbGhzID0ge1xuICAgIGNvbnRlbnRzOiB1bmRlZmluZWRcbiAgfTtcbiAgdmFyIG1pbl9rZXlfcmhzID0ge1xuICAgIGNvbnRlbnRzOiB1bmRlZmluZWRcbiAgfTtcbiAgdmFyIGRvX2tleSA9IGZ1bmN0aW9uIChwYXJhbSwga2V5KSB7XG4gICAgdmFyIG1pbl9rZXkgPSBwYXJhbVsyXTtcbiAgICB2YXIgYiA9IHBhcmFtWzFdO1xuICAgIGlmICghKCFiLmhhc093blByb3BlcnR5KGtleSkgfHwgY2FtbF9jb21wYXJlKHBhcmFtWzBdW2tleV0sIGJba2V5XSkgPiAwKSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgdmFyIG1rID0gbWluX2tleS5jb250ZW50cztcbiAgICBpZiAobWsgIT09IHVuZGVmaW5lZCAmJiBrZXkgPj0gbWspIHtcbiAgICAgIHJldHVybiA7XG4gICAgfSBlbHNlIHtcbiAgICAgIG1pbl9rZXkuY29udGVudHMgPSBrZXk7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgfTtcbiAgdmFyIHBhcnRpYWxfYXJnID0gW1xuICAgIGEsXG4gICAgYixcbiAgICBtaW5fa2V5X3Joc1xuICBdO1xuICB2YXIgZG9fa2V5X2EgPSBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICByZXR1cm4gZG9fa2V5KHBhcnRpYWxfYXJnLCBwYXJhbSk7XG4gIH07XG4gIHZhciBwYXJ0aWFsX2FyZyQxID0gW1xuICAgIGIsXG4gICAgYSxcbiAgICBtaW5fa2V5X2xoc1xuICBdO1xuICB2YXIgZG9fa2V5X2IgPSBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICByZXR1cm4gZG9fa2V5KHBhcnRpYWxfYXJnJDEsIHBhcmFtKTtcbiAgfTtcbiAgZm9yX2luKGEsIGRvX2tleV9hKTtcbiAgZm9yX2luKGIsIGRvX2tleV9iKTtcbiAgdmFyIG1hdGNoID0gbWluX2tleV9saHMuY29udGVudHM7XG4gIHZhciBtYXRjaCQxID0gbWluX2tleV9yaHMuY29udGVudHM7XG4gIGlmIChtYXRjaCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgaWYgKG1hdGNoJDEgIT09IHVuZGVmaW5lZCkge1xuICAgICAgcmV0dXJuIENhbWwuY2FtbF9zdHJpbmdfY29tcGFyZShtYXRjaCwgbWF0Y2gkMSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiAtMTtcbiAgICB9XG4gIH0gZWxzZSBpZiAobWF0Y2gkMSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDE7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9lcXVhbChhLCBiKSB7XG4gIGlmIChhID09PSBiKSB7XG4gICAgcmV0dXJuIHRydWU7XG4gIH1cbiAgdmFyIGFfdHlwZSA9IHR5cGVvZiBhO1xuICBpZiAoYV90eXBlID09PSBcInN0cmluZ1wiIHx8IGFfdHlwZSA9PT0gXCJudW1iZXJcIiB8fCBhX3R5cGUgPT09IFwiYm9vbGVhblwiIHx8IGFfdHlwZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBhID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciBiX3R5cGUgPSB0eXBlb2YgYjtcbiAgaWYgKGFfdHlwZSA9PT0gXCJmdW5jdGlvblwiIHx8IGJfdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJJbnZhbGlkX2FyZ3VtZW50XCIsXG4gICAgICAgICAgXzE6IFwiZXF1YWw6IGZ1bmN0aW9uYWwgdmFsdWVcIixcbiAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgfTtcbiAgfVxuICBpZiAoYl90eXBlID09PSBcIm51bWJlclwiIHx8IGJfdHlwZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCBiID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG4gIHZhciB0YWdfYSA9IGEuVEFHIHwgMDtcbiAgdmFyIHRhZ19iID0gYi5UQUcgfCAwO1xuICBpZiAodGFnX2EgPT09IDI0OCkge1xuICAgIHJldHVybiBhWzFdID09PSBiWzFdO1xuICB9XG4gIGlmICh0YWdfYSA9PT0gMjUxKSB7XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogXCJJbnZhbGlkX2FyZ3VtZW50XCIsXG4gICAgICAgICAgXzE6IFwiZXF1YWw6IGFic3RyYWN0IHZhbHVlXCIsXG4gICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgIH07XG4gIH1cbiAgaWYgKHRhZ19hICE9PSB0YWdfYikge1xuICAgIHJldHVybiBmYWxzZTtcbiAgfVxuICB2YXIgbGVuX2EgPSBhLmxlbmd0aCB8IDA7XG4gIHZhciBsZW5fYiA9IGIubGVuZ3RoIHwgMDtcbiAgaWYgKGxlbl9hID09PSBsZW5fYikge1xuICAgIGlmIChBcnJheS5pc0FycmF5KGEpKSB7XG4gICAgICB2YXIgX2kgPSAwO1xuICAgICAgd2hpbGUodHJ1ZSkge1xuICAgICAgICB2YXIgaSA9IF9pO1xuICAgICAgICBpZiAoaSA9PT0gbGVuX2EpIHtcbiAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgICBpZiAoIWNhbWxfZXF1YWwoYVtpXSwgYltpXSkpIHtcbiAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICAgICAgX2kgPSBpICsgMSB8IDA7XG4gICAgICAgIGNvbnRpbnVlIDtcbiAgICAgIH07XG4gICAgfSBlbHNlIGlmICgoYSBpbnN0YW5jZW9mIERhdGUgJiYgYiBpbnN0YW5jZW9mIERhdGUpKSB7XG4gICAgICByZXR1cm4gIShhID4gYiB8fCBhIDwgYik7XG4gICAgfSBlbHNlIHtcbiAgICAgIHZhciByZXN1bHQgPSB7XG4gICAgICAgIGNvbnRlbnRzOiB0cnVlXG4gICAgICB9O1xuICAgICAgdmFyIGRvX2tleV9hID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIWIuaGFzT3duUHJvcGVydHkoa2V5KSkge1xuICAgICAgICAgIHJlc3VsdC5jb250ZW50cyA9IGZhbHNlO1xuICAgICAgICAgIHJldHVybiA7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICB9O1xuICAgICAgdmFyIGRvX2tleV9iID0gZnVuY3Rpb24gKGtleSkge1xuICAgICAgICBpZiAoIWEuaGFzT3duUHJvcGVydHkoa2V5KSB8fCAhY2FtbF9lcXVhbChiW2tleV0sIGFba2V5XSkpIHtcbiAgICAgICAgICByZXN1bHQuY29udGVudHMgPSBmYWxzZTtcbiAgICAgICAgICByZXR1cm4gO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgfTtcbiAgICAgIGZvcl9pbihhLCBkb19rZXlfYSk7XG4gICAgICBpZiAocmVzdWx0LmNvbnRlbnRzKSB7XG4gICAgICAgIGZvcl9pbihiLCBkb19rZXlfYik7XG4gICAgICB9XG4gICAgICByZXR1cm4gcmVzdWx0LmNvbnRlbnRzO1xuICAgIH1cbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZmFsc2U7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9lcXVhbF9udWxsKHgsIHkpIHtcbiAgaWYgKHkgIT09IG51bGwpIHtcbiAgICByZXR1cm4gY2FtbF9lcXVhbCh4LCB5KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCA9PT0geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2VxdWFsX3VuZGVmaW5lZCh4LCB5KSB7XG4gIGlmICh5ICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gY2FtbF9lcXVhbCh4LCB5KTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCA9PT0geTtcbiAgfVxufVxuXG5mdW5jdGlvbiBjYW1sX2VxdWFsX251bGxhYmxlKHgsIHkpIHtcbiAgaWYgKHkgPT0gbnVsbCkge1xuICAgIHJldHVybiB4ID09PSB5O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBjYW1sX2VxdWFsKHgsIHkpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbWxfbm90ZXF1YWwoYSwgYikge1xuICByZXR1cm4gIWNhbWxfZXF1YWwoYSwgYik7XG59XG5cbmZ1bmN0aW9uIGNhbWxfZ3JlYXRlcmVxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGNhbWxfY29tcGFyZShhLCBiKSA+PSAwO1xufVxuXG5mdW5jdGlvbiBjYW1sX2dyZWF0ZXJ0aGFuKGEsIGIpIHtcbiAgcmV0dXJuIGNhbWxfY29tcGFyZShhLCBiKSA+IDA7XG59XG5cbmZ1bmN0aW9uIGNhbWxfbGVzc2VxdWFsKGEsIGIpIHtcbiAgcmV0dXJuIGNhbWxfY29tcGFyZShhLCBiKSA8PSAwO1xufVxuXG5mdW5jdGlvbiBjYW1sX2xlc3N0aGFuKGEsIGIpIHtcbiAgcmV0dXJuIGNhbWxfY29tcGFyZShhLCBiKSA8IDA7XG59XG5cbmZ1bmN0aW9uIGNhbWxfbWluKHgsIHkpIHtcbiAgaWYgKGNhbWxfY29tcGFyZSh4LCB5KSA8PSAwKSB7XG4gICAgcmV0dXJuIHg7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHk7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FtbF9tYXgoeCwgeSkge1xuICBpZiAoY2FtbF9jb21wYXJlKHgsIHkpID49IDApIHtcbiAgICByZXR1cm4geDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geTtcbiAgfVxufVxuXG5leHBvcnQge1xuICBjYW1sX29ial9kdXAgLFxuICB1cGRhdGVfZHVtbXkgLFxuICBjYW1sX2NvbXBhcmUgLFxuICBjYW1sX2VxdWFsICxcbiAgY2FtbF9lcXVhbF9udWxsICxcbiAgY2FtbF9lcXVhbF91bmRlZmluZWQgLFxuICBjYW1sX2VxdWFsX251bGxhYmxlICxcbiAgY2FtbF9ub3RlcXVhbCAsXG4gIGNhbWxfZ3JlYXRlcmVxdWFsICxcbiAgY2FtbF9ncmVhdGVydGhhbiAsXG4gIGNhbWxfbGVzc3RoYW4gLFxuICBjYW1sX2xlc3NlcXVhbCAsXG4gIGNhbWxfbWluICxcbiAgY2FtbF9tYXggLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG5mdW5jdGlvbiBpc05lc3RlZCh4KSB7XG4gIHJldHVybiB4LkJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORSAhPT0gdW5kZWZpbmVkO1xufVxuXG5mdW5jdGlvbiBzb21lKHgpIHtcbiAgaWYgKHggPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBCU19QUklWQVRFX05FU1RFRF9TT01FX05PTkU6IDBcbiAgICAgICAgICB9O1xuICB9IGVsc2UgaWYgKHggIT09IG51bGwgJiYgeC5CU19QUklWQVRFX05FU1RFRF9TT01FX05PTkUgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBCU19QUklWQVRFX05FU1RFRF9TT01FX05PTkU6IHguQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FICsgMSB8IDBcbiAgICAgICAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB4O1xuICB9XG59XG5cbmZ1bmN0aW9uIG51bGxhYmxlX3RvX29wdCh4KSB7XG4gIGlmICh4ID09IG51bGwpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBzb21lKHgpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuZGVmaW5lZF90b19vcHQoeCkge1xuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc29tZSh4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBudWxsX3RvX29wdCh4KSB7XG4gIGlmICh4ID09PSBudWxsKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gc29tZSh4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiB2YWxGcm9tT3B0aW9uKHgpIHtcbiAgaWYgKCEoeCAhPT0gbnVsbCAmJiB4LkJTX1BSSVZBVEVfTkVTVEVEX1NPTUVfTk9ORSAhPT0gdW5kZWZpbmVkKSkge1xuICAgIHJldHVybiB4O1xuICB9XG4gIHZhciBkZXB0aCA9IHguQlNfUFJJVkFURV9ORVNURURfU09NRV9OT05FO1xuICBpZiAoZGVwdGggPT09IDApIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBCU19QUklWQVRFX05FU1RFRF9TT01FX05PTkU6IGRlcHRoIC0gMSB8IDBcbiAgICAgICAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIG9wdGlvbl9nZXQoeCkge1xuICBpZiAoeCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gdmFsRnJvbU9wdGlvbih4KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBvcHRpb25fdW53cmFwKHgpIHtcbiAgaWYgKHggIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiB4LlZBTDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geDtcbiAgfVxufVxuXG5leHBvcnQge1xuICBudWxsYWJsZV90b19vcHQgLFxuICB1bmRlZmluZWRfdG9fb3B0ICxcbiAgbnVsbF90b19vcHQgLFxuICB2YWxGcm9tT3B0aW9uICxcbiAgc29tZSAsXG4gIGlzTmVzdGVkICxcbiAgb3B0aW9uX2dldCAsXG4gIG9wdGlvbl91bndyYXAgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQ2FtbF9hcnJheSBmcm9tIFwiLi9jYW1sX2FycmF5LmpzXCI7XG5cbmZ1bmN0aW9uIGFwcChfZiwgX2FyZ3MpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBhcmdzID0gX2FyZ3M7XG4gICAgdmFyIGYgPSBfZjtcbiAgICB2YXIgaW5pdF9hcml0eSA9IGYubGVuZ3RoO1xuICAgIHZhciBhcml0eSA9IGluaXRfYXJpdHkgPT09IDAgPyAxIDogaW5pdF9hcml0eTtcbiAgICB2YXIgbGVuID0gYXJncy5sZW5ndGg7XG4gICAgdmFyIGQgPSBhcml0eSAtIGxlbiB8IDA7XG4gICAgaWYgKGQgPT09IDApIHtcbiAgICAgIHJldHVybiBmLmFwcGx5KG51bGwsIGFyZ3MpO1xuICAgIH1cbiAgICBpZiAoZCA+PSAwKSB7XG4gICAgICByZXR1cm4gKGZ1bmN0aW9uKGYsYXJncyl7XG4gICAgICByZXR1cm4gZnVuY3Rpb24gKHgpIHtcbiAgICAgICAgcmV0dXJuIGFwcChmLCBhcmdzLmNvbmNhdChbeF0pKTtcbiAgICAgIH1cbiAgICAgIH0oZixhcmdzKSk7XG4gICAgfVxuICAgIF9hcmdzID0gQ2FtbF9hcnJheS5zdWIoYXJncywgYXJpdHksIC1kIHwgMCk7XG4gICAgX2YgPSBmLmFwcGx5KG51bGwsIENhbWxfYXJyYXkuc3ViKGFyZ3MsIDAsIGFyaXR5KSk7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBfMShvLCBhMCkge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAxKSB7XG4gICAgcmV0dXJuIG8oYTApO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIG8oYTApO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0pO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMikge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMsIHBhcmFtJDQpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCwgcGFyYW0kNSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzLCBwYXJhbSQ0LCBwYXJhbSQ1KTtcbiAgICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbYTBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX18xKG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMSkge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYTApIHtcbiAgICAgIHJldHVybiBfMShvLCBhMCk7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfMihvLCBhMCwgYTEpIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gMikge1xuICAgIHJldHVybiBvKGEwLCBhMSk7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbYTFdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMikge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMik7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMykge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMyk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMiwgcGFyYW0kMywgcGFyYW0kNCk7XG4gICAgICAgICAgfTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTFcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzIobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAyKSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEpIHtcbiAgICAgIHJldHVybiBfMihvLCBhMCwgYTEpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gXzMobywgYTAsIGExLCBhMikge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAzKSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMik7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTJcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbYTJdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMik7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIHBhcmFtKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSwgcGFyYW0kMikge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpO1xuICAgICAgICAgIH07XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIsIHBhcmFtJDMpIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyLCBwYXJhbSQzKTtcbiAgICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgYTJcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzMobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSAzKSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEsIGEyKSB7XG4gICAgICByZXR1cm4gXzMobywgYTAsIGExLCBhMik7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfNChvLCBhMCwgYTEsIGEyLCBhMykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA0KSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzXG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiksIFthM10pO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMyk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBmdW5jdGlvbiAocGFyYW0pIHtcbiAgICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBwYXJhbSk7XG4gICAgICAgICAgfTtcbiAgICAgIGNhc2UgNiA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxLCBwYXJhbSQyKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgcGFyYW0sIHBhcmFtJDEsIHBhcmFtJDIpO1xuICAgICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgYTNcbiAgICAgICAgICAgICAgICAgIF0pO1xuICAgIH1cbiAgfVxufVxuXG5mdW5jdGlvbiBfXzQobykge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA0KSB7XG4gICAgcmV0dXJuIG87XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZ1bmN0aW9uIChhMCwgYTEsIGEyLCBhMykge1xuICAgICAgcmV0dXJuIF80KG8sIGEwLCBhMSwgYTIsIGEzKTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF81KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCkge1xuICB2YXIgYXJpdHkgPSBvLmxlbmd0aDtcbiAgaWYgKGFyaXR5ID09PSA1KSB7XG4gICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0KTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNFxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTRcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMyksIFthNF0pO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQpO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIHBhcmFtKTtcbiAgICAgICAgICB9O1xuICAgICAgY2FzZSA3IDpcbiAgICAgICAgICByZXR1cm4gZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICB9O1xuICAgICAgZGVmYXVsdDpcbiAgICAgICAgcmV0dXJuIGFwcChvLCBbXG4gICAgICAgICAgICAgICAgICAgIGEwLFxuICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICBhNFxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fNShvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDUpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCkge1xuICAgICAgcmV0dXJuIF81KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCk7XG4gICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBfNihvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1KSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDYpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1KTtcbiAgfSBlbHNlIHtcbiAgICBzd2l0Y2ggKGFyaXR5KSB7XG4gICAgICBjYXNlIDEgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMSxcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgMyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTVcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDQgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMyksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCksIFthNV0pO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1KTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChwYXJhbSkge1xuICAgICAgICAgICAgcmV0dXJuIG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgcGFyYW0pO1xuICAgICAgICAgIH07XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICBhNVxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fNihvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDYpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUpIHtcbiAgICAgIHJldHVybiBfNihvLCBhMCwgYTEsIGEyLCBhMywgYTQsIGE1KTtcbiAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIF83KG8sIGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDcpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNik7XG4gIH0gZWxzZSB7XG4gICAgc3dpdGNoIChhcml0eSkge1xuICAgICAgY2FzZSAxIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTApLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDIgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTIsXG4gICAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDMgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA0IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDUgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQpLCBbXG4gICAgICAgICAgICAgICAgICAgICAgYTUsXG4gICAgICAgICAgICAgICAgICAgICAgYTZcbiAgICAgICAgICAgICAgICAgICAgXSk7XG4gICAgICBjYXNlIDYgOlxuICAgICAgICAgIHJldHVybiBhcHAobyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1KSwgW2E2XSk7XG4gICAgICBjYXNlIDcgOlxuICAgICAgICAgIHJldHVybiBvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KTtcbiAgICAgIGRlZmF1bHQ6XG4gICAgICAgIHJldHVybiBhcHAobywgW1xuICAgICAgICAgICAgICAgICAgICBhMCxcbiAgICAgICAgICAgICAgICAgICAgYTEsXG4gICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgYTQsXG4gICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICBhNlxuICAgICAgICAgICAgICAgICAgXSk7XG4gICAgfVxuICB9XG59XG5cbmZ1bmN0aW9uIF9fNyhvKSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDcpIHtcbiAgICByZXR1cm4gbztcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZnVuY3Rpb24gKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSB7XG4gICAgICByZXR1cm4gXzcobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYpO1xuICAgIH07XG4gIH1cbn1cblxuZnVuY3Rpb24gXzgobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KSB7XG4gIHZhciBhcml0eSA9IG8ubGVuZ3RoO1xuICBpZiAoYXJpdHkgPT09IDgpIHtcbiAgICByZXR1cm4gbyhhMCwgYTEsIGEyLCBhMywgYTQsIGE1LCBhNiwgYTcpO1xuICB9IGVsc2Uge1xuICAgIHN3aXRjaCAoYXJpdHkpIHtcbiAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAyIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGEyLFxuICAgICAgICAgICAgICAgICAgICAgIGEzLFxuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSAzIDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhMyxcbiAgICAgICAgICAgICAgICAgICAgICBhNCxcbiAgICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNCA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzKSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA1IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0KSwgW1xuICAgICAgICAgICAgICAgICAgICAgIGE1LFxuICAgICAgICAgICAgICAgICAgICAgIGE2LFxuICAgICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICAgIF0pO1xuICAgICAgY2FzZSA2IDpcbiAgICAgICAgICByZXR1cm4gYXBwKG8oYTAsIGExLCBhMiwgYTMsIGE0LCBhNSksIFtcbiAgICAgICAgICAgICAgICAgICAgICBhNixcbiAgICAgICAgICAgICAgICAgICAgICBhN1xuICAgICAgICAgICAgICAgICAgICBdKTtcbiAgICAgIGNhc2UgNyA6XG4gICAgICAgICAgcmV0dXJuIGFwcChvKGEwLCBhMSwgYTIsIGEzLCBhNCwgYTUsIGE2KSwgW2E3XSk7XG4gICAgICBkZWZhdWx0OlxuICAgICAgICByZXR1cm4gYXBwKG8sIFtcbiAgICAgICAgICAgICAgICAgICAgYTAsXG4gICAgICAgICAgICAgICAgICAgIGExLFxuICAgICAgICAgICAgICAgICAgICBhMixcbiAgICAgICAgICAgICAgICAgICAgYTMsXG4gICAgICAgICAgICAgICAgICAgIGE0LFxuICAgICAgICAgICAgICAgICAgICBhNSxcbiAgICAgICAgICAgICAgICAgICAgYTYsXG4gICAgICAgICAgICAgICAgICAgIGE3XG4gICAgICAgICAgICAgICAgICBdKTtcbiAgICB9XG4gIH1cbn1cblxuZnVuY3Rpb24gX184KG8pIHtcbiAgdmFyIGFyaXR5ID0gby5sZW5ndGg7XG4gIGlmIChhcml0eSA9PT0gOCkge1xuICAgIHJldHVybiBvO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBmdW5jdGlvbiAoYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KSB7XG4gICAgICByZXR1cm4gXzgobywgYTAsIGExLCBhMiwgYTMsIGE0LCBhNSwgYTYsIGE3KTtcbiAgICB9O1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGFwcCAsXG4gIF8xICxcbiAgX18xICxcbiAgXzIgLFxuICBfXzIgLFxuICBfMyAsXG4gIF9fMyAsXG4gIF80ICxcbiAgX180ICxcbiAgXzUgLFxuICBfXzUgLFxuICBfNiAsXG4gIF9fNiAsXG4gIF83ICxcbiAgX183ICxcbiAgXzggLFxuICBfXzggLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgQ2FtbF9vcHRpb24gZnJvbSBcIi4vY2FtbF9vcHRpb24uanNcIjtcblxuZnVuY3Rpb24gZ2V0KGRpY3QsIGspIHtcbiAgaWYgKChrIGluIGRpY3QpKSB7XG4gICAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoZGljdFtrXSk7XG4gIH1cbiAgXG59XG5cbnZhciB1bnNhZmVEZWxldGVLZXkgPSAoZnVuY3Rpb24gKGRpY3Qsa2V5KXtcbiAgICAgIGRlbGV0ZSBkaWN0W2tleV07XG4gICAgIH0pO1xuXG5mdW5jdGlvbiBlbnRyaWVzKGRpY3QpIHtcbiAgdmFyIGtleXMgPSBPYmplY3Qua2V5cyhkaWN0KTtcbiAgdmFyIGwgPSBrZXlzLmxlbmd0aDtcbiAgdmFyIHZhbHVlcyA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgdmFyIGtleSA9IGtleXNbaV07XG4gICAgdmFsdWVzW2ldID0gW1xuICAgICAga2V5LFxuICAgICAgZGljdFtrZXldXG4gICAgXTtcbiAgfVxuICByZXR1cm4gdmFsdWVzO1xufVxuXG5mdW5jdGlvbiB2YWx1ZXMoZGljdCkge1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKGRpY3QpO1xuICB2YXIgbCA9IGtleXMubGVuZ3RoO1xuICB2YXIgdmFsdWVzJDEgPSBuZXcgQXJyYXkobCk7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHZhbHVlcyQxW2ldID0gZGljdFtrZXlzW2ldXTtcbiAgfVxuICByZXR1cm4gdmFsdWVzJDE7XG59XG5cbmZ1bmN0aW9uIGZyb21MaXN0KGVudHJpZXMpIHtcbiAgdmFyIGRpY3QgPSB7fTtcbiAgdmFyIF9wYXJhbSA9IGVudHJpZXM7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIGRpY3Q7XG4gICAgfVxuICAgIHZhciBtYXRjaCA9IHBhcmFtLmhkO1xuICAgIGRpY3RbbWF0Y2hbMF1dID0gbWF0Y2hbMV07XG4gICAgX3BhcmFtID0gcGFyYW0udGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXkoZW50cmllcykge1xuICB2YXIgZGljdCA9IHt9O1xuICB2YXIgbCA9IGVudHJpZXMubGVuZ3RoO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICB2YXIgbWF0Y2ggPSBlbnRyaWVzW2ldO1xuICAgIGRpY3RbbWF0Y2hbMF1dID0gbWF0Y2hbMV07XG4gIH1cbiAgcmV0dXJuIGRpY3Q7XG59XG5cbmZ1bmN0aW9uIG1hcChmLCBzb3VyY2UpIHtcbiAgdmFyIHRhcmdldCA9IHt9O1xuICB2YXIga2V5cyA9IE9iamVjdC5rZXlzKHNvdXJjZSk7XG4gIHZhciBsID0ga2V5cy5sZW5ndGg7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsOyArK2kpe1xuICAgIHZhciBrZXkgPSBrZXlzW2ldO1xuICAgIHRhcmdldFtrZXldID0gZihzb3VyY2Vba2V5XSk7XG4gIH1cbiAgcmV0dXJuIHRhcmdldDtcbn1cblxuZXhwb3J0IHtcbiAgZ2V0ICxcbiAgdW5zYWZlRGVsZXRlS2V5ICxcbiAgZW50cmllcyAsXG4gIHZhbHVlcyAsXG4gIGZyb21MaXN0ICxcbiAgZnJvbUFycmF5ICxcbiAgbWFwICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiXG5cbmltcG9ydCAqIGFzIENhbWxfanNfZXhjZXB0aW9ucyBmcm9tIFwiLi9jYW1sX2pzX2V4Y2VwdGlvbnMuanNcIjtcblxudmFyIGFueVRvRXhuSW50ZXJuYWwgPSBDYW1sX2pzX2V4Y2VwdGlvbnMuaW50ZXJuYWxUb09DYW1sRXhjZXB0aW9uO1xuXG5mdW5jdGlvbiByYWlzZUVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgRXJyb3Ioc3RyKTtcbn1cblxuZnVuY3Rpb24gcmFpc2VFdmFsRXJyb3Ioc3RyKSB7XG4gIHRocm93IG5ldyBFdmFsRXJyb3Ioc3RyKTtcbn1cblxuZnVuY3Rpb24gcmFpc2VSYW5nZUVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgUmFuZ2VFcnJvcihzdHIpO1xufVxuXG5mdW5jdGlvbiByYWlzZVJlZmVyZW5jZUVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgUmVmZXJlbmNlRXJyb3Ioc3RyKTtcbn1cblxuZnVuY3Rpb24gcmFpc2VTeW50YXhFcnJvcihzdHIpIHtcbiAgdGhyb3cgbmV3IFN5bnRheEVycm9yKHN0cik7XG59XG5cbmZ1bmN0aW9uIHJhaXNlVHlwZUVycm9yKHN0cikge1xuICB0aHJvdyBuZXcgVHlwZUVycm9yKHN0cik7XG59XG5cbmZ1bmN0aW9uIHJhaXNlVXJpRXJyb3Ioc3RyKSB7XG4gIHRocm93IG5ldyBVUklFcnJvcihzdHIpO1xufVxuXG52YXIgJCRFcnJvciQxID0gQ2FtbF9qc19leGNlcHRpb25zLiQkRXJyb3I7XG5cbmV4cG9ydCB7XG4gICQkRXJyb3IkMSBhcyAkJEVycm9yLFxuICBhbnlUb0V4bkludGVybmFsICxcbiAgcmFpc2VFcnJvciAsXG4gIHJhaXNlRXZhbEVycm9yICxcbiAgcmFpc2VSYW5nZUVycm9yICxcbiAgcmFpc2VSZWZlcmVuY2VFcnJvciAsXG4gIHJhaXNlU3ludGF4RXJyb3IgLFxuICByYWlzZVR5cGVFcnJvciAsXG4gIHJhaXNlVXJpRXJyb3IgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG5mdW5jdGlvbiBlcXVhbCh4LCB5KSB7XG4gIHJldHVybiB4ID09PSB5O1xufVxuXG52YXIgbWF4ID0gMjE0NzQ4MzY0NztcblxudmFyIG1pbiA9IC0yMTQ3NDgzNjQ4O1xuXG5leHBvcnQge1xuICBlcXVhbCAsXG4gIG1heCAsXG4gIG1pbiAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIlxuXG5pbXBvcnQgKiBhcyBKc192ZWN0b3IgZnJvbSBcIi4vanNfdmVjdG9yLmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX29wdGlvbiBmcm9tIFwiLi9jYW1sX29wdGlvbi5qc1wiO1xuXG5mdW5jdGlvbiBsZW5ndGgobCkge1xuICB2YXIgX2xlbiA9IDA7XG4gIHZhciBfcGFyYW0gPSBsO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIHZhciBsZW4gPSBfbGVuO1xuICAgIGlmICghcGFyYW0pIHtcbiAgICAgIHJldHVybiBsZW47XG4gICAgfVxuICAgIF9wYXJhbSA9IHBhcmFtLnRsO1xuICAgIF9sZW4gPSBsZW4gKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGNvbnMoeCwgeHMpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBoZDogeCxcbiAgICAgICAgICB0bDogeHNcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gaXNFbXB0eSh4KSB7XG4gIHJldHVybiB4ID09PSAvKiBbXSAqLzA7XG59XG5cbmZ1bmN0aW9uIGhkKHBhcmFtKSB7XG4gIGlmIChwYXJhbSkge1xuICAgIHJldHVybiBDYW1sX29wdGlvbi5zb21lKHBhcmFtLmhkKTtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gdGwocGFyYW0pIHtcbiAgaWYgKHBhcmFtKSB7XG4gICAgcmV0dXJuIHBhcmFtLnRsO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBudGgobCwgbikge1xuICBpZiAobiA8IDApIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciBfbCA9IGw7XG4gIHZhciBfbiA9IG47XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbiQxID0gX247XG4gICAgdmFyIGwkMSA9IF9sO1xuICAgIGlmICghbCQxKSB7XG4gICAgICByZXR1cm4gO1xuICAgIH1cbiAgICBpZiAobiQxID09PSAwKSB7XG4gICAgICByZXR1cm4gQ2FtbF9vcHRpb24uc29tZShsJDEuaGQpO1xuICAgIH1cbiAgICBfbiA9IG4kMSAtIDEgfCAwO1xuICAgIF9sID0gbCQxLnRsO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gcmV2QXBwZW5kKF9sMSwgX2wyKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgbDIgPSBfbDI7XG4gICAgdmFyIGwxID0gX2wxO1xuICAgIGlmICghbDEpIHtcbiAgICAgIHJldHVybiBsMjtcbiAgICB9XG4gICAgX2wyID0ge1xuICAgICAgaGQ6IGwxLmhkLFxuICAgICAgdGw6IGwyXG4gICAgfTtcbiAgICBfbDEgPSBsMS50bDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIHJldihsKSB7XG4gIHJldHVybiByZXZBcHBlbmQobCwgLyogW10gKi8wKTtcbn1cblxuZnVuY3Rpb24gbWFwUmV2QXV4KGYsIF9hY2MsIF9scykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIGxzID0gX2xzO1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICghbHMpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIF9scyA9IGxzLnRsO1xuICAgIF9hY2MgPSB7XG4gICAgICBoZDogZihscy5oZCksXG4gICAgICB0bDogYWNjXG4gICAgfTtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIG1hcFJldihmLCBscykge1xuICByZXR1cm4gbWFwUmV2QXV4KGYsIC8qIFtdICovMCwgbHMpO1xufVxuXG5mdW5jdGlvbiBtYXAoZiwgbHMpIHtcbiAgcmV0dXJuIHJldkFwcGVuZChtYXBSZXZBdXgoZiwgLyogW10gKi8wLCBscyksIC8qIFtdICovMCk7XG59XG5cbmZ1bmN0aW9uIGl0ZXIoZiwgX3BhcmFtKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgZihwYXJhbS5oZCk7XG4gICAgX3BhcmFtID0gcGFyYW0udGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBpdGVyaShmLCBsKSB7XG4gIHZhciBfaSA9IDA7XG4gIHZhciBfcGFyYW0gPSBsO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIDtcbiAgICB9XG4gICAgZihpLCBwYXJhbS5oZCk7XG4gICAgX3BhcmFtID0gcGFyYW0udGw7XG4gICAgX2kgPSBpICsgMSB8IDA7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb2xkTGVmdChmLCBfYWNjdSwgX2wpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBsID0gX2w7XG4gICAgdmFyIGFjY3UgPSBfYWNjdTtcbiAgICBpZiAoIWwpIHtcbiAgICAgIHJldHVybiBhY2N1O1xuICAgIH1cbiAgICBfbCA9IGwudGw7XG4gICAgX2FjY3UgPSBmKGFjY3UsIGwuaGQpO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gdGFpbExvb3AoZiwgX2FjYywgX3BhcmFtKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgcGFyYW0gPSBfcGFyYW07XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgX3BhcmFtID0gcGFyYW0udGw7XG4gICAgX2FjYyA9IGYocGFyYW0uaGQsIGFjYyk7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5mdW5jdGlvbiBmb2xkUmlnaHQoZiwgbCwgaW5pdCkge1xuICB2YXIgbG9vcCA9IGZ1bmN0aW9uIChuLCBwYXJhbSkge1xuICAgIGlmICghcGFyYW0pIHtcbiAgICAgIHJldHVybiBpbml0O1xuICAgIH1cbiAgICB2YXIgdCA9IHBhcmFtLnRsO1xuICAgIHZhciBoID0gcGFyYW0uaGQ7XG4gICAgaWYgKG4gPCAxMDAwKSB7XG4gICAgICByZXR1cm4gZihoLCBsb29wKG4gKyAxIHwgMCwgdCkpO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gZihoLCB0YWlsTG9vcChmLCBpbml0LCByZXZBcHBlbmQodCwgLyogW10gKi8wKSkpO1xuICAgIH1cbiAgfTtcbiAgcmV0dXJuIGxvb3AoMCwgbCk7XG59XG5cbmZ1bmN0aW9uIGZsYXR0ZW4obHgpIHtcbiAgdmFyIF9hY2MgPSAvKiBbXSAqLzA7XG4gIHZhciBfbHggPSBseDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciBseCQxID0gX2x4O1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICghbHgkMSkge1xuICAgICAgcmV0dXJuIHJldkFwcGVuZChhY2MsIC8qIFtdICovMCk7XG4gICAgfVxuICAgIF9seCA9IGx4JDEudGw7XG4gICAgX2FjYyA9IHJldkFwcGVuZChseCQxLmhkLCBhY2MpO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyUmV2QXV4KGYsIF9hY2MsIF94cykge1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHhzID0gX3hzO1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICgheHMpIHtcbiAgICAgIHJldHVybiBhY2M7XG4gICAgfVxuICAgIHZhciB5cyA9IHhzLnRsO1xuICAgIHZhciB5ID0geHMuaGQ7XG4gICAgaWYgKGYoeSkpIHtcbiAgICAgIF94cyA9IHlzO1xuICAgICAgX2FjYyA9IHtcbiAgICAgICAgaGQ6IHksXG4gICAgICAgIHRsOiBhY2NcbiAgICAgIH07XG4gICAgICBjb250aW51ZSA7XG4gICAgfVxuICAgIF94cyA9IHlzO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gZmlsdGVyKGYsIHhzKSB7XG4gIHJldHVybiByZXZBcHBlbmQoZmlsdGVyUmV2QXV4KGYsIC8qIFtdICovMCwgeHMpLCAvKiBbXSAqLzApO1xufVxuXG5mdW5jdGlvbiBmaWx0ZXJNYXBSZXZBdXgoZiwgX2FjYywgX3hzKSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgdmFyIGFjYyA9IF9hY2M7XG4gICAgaWYgKCF4cykge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgdmFyIHlzID0geHMudGw7XG4gICAgdmFyIHogPSBmKHhzLmhkKTtcbiAgICBpZiAoeiAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBfeHMgPSB5cztcbiAgICAgIF9hY2MgPSB7XG4gICAgICAgIGhkOiBDYW1sX29wdGlvbi52YWxGcm9tT3B0aW9uKHopLFxuICAgICAgICB0bDogYWNjXG4gICAgICB9O1xuICAgICAgY29udGludWUgO1xuICAgIH1cbiAgICBfeHMgPSB5cztcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGZpbHRlck1hcChmLCB4cykge1xuICByZXR1cm4gcmV2QXBwZW5kKGZpbHRlck1hcFJldkF1eChmLCAvKiBbXSAqLzAsIHhzKSwgLyogW10gKi8wKTtcbn1cblxuZnVuY3Rpb24gY291bnRCeShmLCB4cykge1xuICB2YXIgX2FjYyA9IDA7XG4gIHZhciBfeHMgPSB4cztcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB4cyQxID0gX3hzO1xuICAgIHZhciBhY2MgPSBfYWNjO1xuICAgIGlmICgheHMkMSkge1xuICAgICAgcmV0dXJuIGFjYztcbiAgICB9XG4gICAgX3hzID0geHMkMS50bDtcbiAgICBfYWNjID0gZih4cyQxLmhkKSA/IGFjYyArIDEgfCAwIDogYWNjO1xuICAgIGNvbnRpbnVlIDtcbiAgfTtcbn1cblxuZnVuY3Rpb24gaW5pdChuLCBmKSB7XG4gIHJldHVybiBKc192ZWN0b3IudG9MaXN0KEpzX3ZlY3Rvci5pbml0KG4sIGYpKTtcbn1cblxuZnVuY3Rpb24gdG9WZWN0b3IoeHMpIHtcbiAgaWYgKCF4cykge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgYSA9IG5ldyBBcnJheShsZW5ndGgoeHMpKTtcbiAgdmFyIF9pID0gMDtcbiAgdmFyIF9wYXJhbSA9IHhzO1xuICB3aGlsZSh0cnVlKSB7XG4gICAgdmFyIHBhcmFtID0gX3BhcmFtO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKCFwYXJhbSkge1xuICAgICAgcmV0dXJuIGE7XG4gICAgfVxuICAgIGFbaV0gPSBwYXJhbS5oZDtcbiAgICBfcGFyYW0gPSBwYXJhbS50bDtcbiAgICBfaSA9IGkgKyAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGVxdWFsKGNtcCwgX3hzLCBfeXMpIHtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciB5cyA9IF95cztcbiAgICB2YXIgeHMgPSBfeHM7XG4gICAgaWYgKCF4cykge1xuICAgICAgaWYgKHlzKSB7XG4gICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgfVxuICAgIH1cbiAgICBpZiAoIXlzKSB7XG4gICAgICByZXR1cm4gZmFsc2U7XG4gICAgfVxuICAgIGlmICghY21wKHhzLmhkLCB5cy5oZCkpIHtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gICAgX3lzID0geXMudGw7XG4gICAgX3hzID0geHMudGw7XG4gICAgY29udGludWUgO1xuICB9O1xufVxuXG5leHBvcnQge1xuICBsZW5ndGggLFxuICBjb25zICxcbiAgaXNFbXB0eSAsXG4gIGhkICxcbiAgdGwgLFxuICBudGggLFxuICByZXZBcHBlbmQgLFxuICByZXYgLFxuICBtYXBSZXYgLFxuICBtYXAgLFxuICBpdGVyICxcbiAgaXRlcmkgLFxuICBmb2xkTGVmdCAsXG4gIGZvbGRSaWdodCAsXG4gIGZsYXR0ZW4gLFxuICBmaWx0ZXIgLFxuICBmaWx0ZXJNYXAgLFxuICBjb3VudEJ5ICxcbiAgaW5pdCAsXG4gIHRvVmVjdG9yICxcbiAgZXF1YWwgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuaW1wb3J0ICogYXMgSnNfaW50IGZyb20gXCIuL2pzX2ludC5qc1wiO1xuXG5mdW5jdGlvbiB1bnNhZmVfY2VpbChwcmltKSB7XG4gIHJldHVybiBNYXRoLmNlaWwocHJpbSk7XG59XG5cbmZ1bmN0aW9uIGNlaWxfaW50KGYpIHtcbiAgaWYgKGYgPiBKc19pbnQubWF4KSB7XG4gICAgcmV0dXJuIEpzX2ludC5tYXg7XG4gIH0gZWxzZSBpZiAoZiA8IEpzX2ludC5taW4pIHtcbiAgICByZXR1cm4gSnNfaW50Lm1pbjtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gTWF0aC5jZWlsKGYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHVuc2FmZV9mbG9vcihwcmltKSB7XG4gIHJldHVybiBNYXRoLmZsb29yKHByaW0pO1xufVxuXG5mdW5jdGlvbiBmbG9vcl9pbnQoZikge1xuICBpZiAoZiA+IEpzX2ludC5tYXgpIHtcbiAgICByZXR1cm4gSnNfaW50Lm1heDtcbiAgfSBlbHNlIGlmIChmIDwgSnNfaW50Lm1pbikge1xuICAgIHJldHVybiBKc19pbnQubWluO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBNYXRoLmZsb29yKGYpO1xuICB9XG59XG5cbmZ1bmN0aW9uIHJhbmRvbV9pbnQobWluLCBtYXgpIHtcbiAgcmV0dXJuIGZsb29yX2ludChNYXRoLnJhbmRvbSgpICogKG1heCAtIG1pbiB8IDApKSArIG1pbiB8IDA7XG59XG5cbnZhciBjZWlsID0gY2VpbF9pbnQ7XG5cbnZhciBmbG9vciA9IGZsb29yX2ludDtcblxuZXhwb3J0IHtcbiAgdW5zYWZlX2NlaWwgLFxuICBjZWlsX2ludCAsXG4gIGNlaWwgLFxuICB1bnNhZmVfZmxvb3IgLFxuICBmbG9vcl9pbnQgLFxuICBmbG9vciAsXG4gIHJhbmRvbV9pbnQgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCJcblxuXG5mdW5jdGlvbiBmaWx0ZXJJblBsYWNlKHAsIGEpIHtcbiAgdmFyIGkgPSAwO1xuICB2YXIgaiA9IDA7XG4gIHdoaWxlKGkgPCBhLmxlbmd0aCkge1xuICAgIHZhciB2ID0gYVtpXTtcbiAgICBpZiAocCh2KSkge1xuICAgICAgYVtqXSA9IHY7XG4gICAgICBqID0gaiArIDEgfCAwO1xuICAgIH1cbiAgICBpID0gaSArIDEgfCAwO1xuICB9O1xuICBhLnNwbGljZShqKTtcbiAgXG59XG5cbmZ1bmN0aW9uIGVtcHR5KGEpIHtcbiAgYS5zcGxpY2UoMCk7XG4gIFxufVxuXG5mdW5jdGlvbiBwdXNoQmFjayh4LCB4cykge1xuICB4cy5wdXNoKHgpO1xuICBcbn1cblxuZnVuY3Rpb24gbWVtQnlSZWYoeCwgeHMpIHtcbiAgcmV0dXJuIHhzLmluZGV4T2YoeCkgPj0gMDtcbn1cblxuZnVuY3Rpb24gaXRlcihmLCB4cykge1xuICBmb3IodmFyIGkgPSAwICxpX2ZpbmlzaCA9IHhzLmxlbmd0aDsgaSA8IGlfZmluaXNoOyArK2kpe1xuICAgIGYoeHNbaV0pO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBpdGVyaShmLCBhKSB7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICBmKGksIGFbaV0pO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiB0b0xpc3QoYSkge1xuICB2YXIgX2kgPSBhLmxlbmd0aCAtIDEgfCAwO1xuICB2YXIgX3JlcyA9IC8qIFtdICovMDtcbiAgd2hpbGUodHJ1ZSkge1xuICAgIHZhciByZXMgPSBfcmVzO1xuICAgIHZhciBpID0gX2k7XG4gICAgaWYgKGkgPCAwKSB7XG4gICAgICByZXR1cm4gcmVzO1xuICAgIH1cbiAgICBfcmVzID0ge1xuICAgICAgaGQ6IGFbaV0sXG4gICAgICB0bDogcmVzXG4gICAgfTtcbiAgICBfaSA9IGkgLSAxIHwgMDtcbiAgICBjb250aW51ZSA7XG4gIH07XG59XG5cbmZ1bmN0aW9uIGluaXQobiwgZikge1xuICB2YXIgdiA9IG5ldyBBcnJheShuKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IG47ICsraSl7XG4gICAgdltpXSA9IGYoaSk7XG4gIH1cbiAgcmV0dXJuIHY7XG59XG5cbmZ1bmN0aW9uIGNvcHkoeCkge1xuICB2YXIgbGVuID0geC5sZW5ndGg7XG4gIHZhciBiID0gbmV3IEFycmF5KGxlbik7XG4gIGZvcih2YXIgaSA9IDA7IGkgPCBsZW47ICsraSl7XG4gICAgYltpXSA9IHhbaV07XG4gIH1cbiAgcmV0dXJuIGI7XG59XG5cbmZ1bmN0aW9uIG1hcChmLCBhKSB7XG4gIHZhciBsID0gYS5sZW5ndGg7XG4gIHZhciByID0gbmV3IEFycmF5KGwpO1xuICBmb3IodmFyIGkgPSAwOyBpIDwgbDsgKytpKXtcbiAgICByW2ldID0gZihhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gZm9sZExlZnQoZiwgeCwgYSkge1xuICB2YXIgciA9IHg7XG4gIGZvcih2YXIgaSA9IDAgLGlfZmluaXNoID0gYS5sZW5ndGg7IGkgPCBpX2ZpbmlzaDsgKytpKXtcbiAgICByID0gZihyLCBhW2ldKTtcbiAgfVxuICByZXR1cm4gcjtcbn1cblxuZnVuY3Rpb24gZm9sZFJpZ2h0KGYsIGEsIHgpIHtcbiAgdmFyIHIgPSB4O1xuICBmb3IodmFyIGkgPSBhLmxlbmd0aCAtIDEgfCAwOyBpID49IDA7IC0taSl7XG4gICAgciA9IGYoYVtpXSwgcik7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIG1hcGkoZiwgYSkge1xuICB2YXIgbCA9IGEubGVuZ3RoO1xuICBpZiAobCA9PT0gMCkge1xuICAgIHJldHVybiBbXTtcbiAgfVxuICB2YXIgciA9IG5ldyBBcnJheShsKTtcbiAgZm9yKHZhciBpID0gMDsgaSA8IGw7ICsraSl7XG4gICAgcltpXSA9IGYoaSwgYVtpXSk7XG4gIH1cbiAgcmV0dXJuIHI7XG59XG5cbmZ1bmN0aW9uIGFwcGVuZCh4LCBhKSB7XG4gIHJldHVybiBhLmNvbmNhdChbeF0pO1xufVxuXG5leHBvcnQge1xuICBmaWx0ZXJJblBsYWNlICxcbiAgZW1wdHkgLFxuICBwdXNoQmFjayAsXG4gIGNvcHkgLFxuICBtZW1CeVJlZiAsXG4gIGl0ZXIgLFxuICBpdGVyaSAsXG4gIHRvTGlzdCAsXG4gIG1hcCAsXG4gIG1hcGkgLFxuICBmb2xkTGVmdCAsXG4gIGZvbGRSaWdodCAsXG4gIGluaXQgLFxuICBhcHBlbmQgLFxuICBcbn1cbi8qIE5vIHNpZGUgZWZmZWN0ICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgUmVTY3JpcHQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgSnNfbGlzdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9qc19saXN0LmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X0xpc3QgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvYmVsdF9MaXN0LmpzXCI7XG5cbmZ1bmN0aW9uIHRGcm9tSnMocGFyYW0pIHtcbiAgaWYgKHBhcmFtIDw9IDMgJiYgMCA8PSBwYXJhbSkge1xuICAgIHJldHVybiBwYXJhbSAtIDAgfCAwO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiB0RW51bShzb3J0Tk1VSU9wdCwgcGFyYW0pIHtcbiAgdmFyIHNvcnROTVVJID0gc29ydE5NVUlPcHQgIT09IHVuZGVmaW5lZCA/IHNvcnROTVVJT3B0IDogZmFsc2U7XG4gIGlmIChzb3J0Tk1VSSkge1xuICAgIHJldHVybiBbXG4gICAgICAgICAgICAvKiBOICovMCxcbiAgICAgICAgICAgIC8qIE0gKi8zLFxuICAgICAgICAgICAgLyogVSAqLzEsXG4gICAgICAgICAgICAvKiBJICovMlxuICAgICAgICAgIF07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFtcbiAgICAgICAgICAgIC8qIE4gKi8wLFxuICAgICAgICAgICAgLyogVSAqLzEsXG4gICAgICAgICAgICAvKiBJICovMixcbiAgICAgICAgICAgIC8qIE0gKi8zXG4gICAgICAgICAgXTtcbiAgfVxufVxuXG5mdW5jdGlvbiB0RW51bUxpc3Qoc29ydE5NVUlPcHQsIHBhcmFtKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICBpZiAoc29ydE5NVUkpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IC8qIE4gKi8wLFxuICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgaGQ6IC8qIE0gKi8zLFxuICAgICAgICAgICAgICB0bDoge1xuICAgICAgICAgICAgICAgIGhkOiAvKiBVICovMSxcbiAgICAgICAgICAgICAgICB0bDoge1xuICAgICAgICAgICAgICAgICAgaGQ6IC8qIEkgKi8yLFxuICAgICAgICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiAvKiBOICovMCxcbiAgICAgICAgICAgIHRsOiB7XG4gICAgICAgICAgICAgIGhkOiAvKiBVICovMSxcbiAgICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgICBoZDogLyogSSAqLzIsXG4gICAgICAgICAgICAgICAgdGw6IHtcbiAgICAgICAgICAgICAgICAgIGhkOiAvKiBNICovMyxcbiAgICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3coeCkge1xuICBzd2l0Y2ggKHgpIHtcbiAgICBjYXNlIC8qIE4gKi8wIDpcbiAgICAgICAgcmV0dXJuIFwiTlwiO1xuICAgIGNhc2UgLyogVSAqLzEgOlxuICAgICAgICByZXR1cm4gXCJVXCI7XG4gICAgY2FzZSAvKiBJICovMiA6XG4gICAgICAgIHJldHVybiBcIklcIjtcbiAgICBjYXNlIC8qIE0gKi8zIDpcbiAgICAgICAgcmV0dXJuIFwiTVwiO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dBc0tleSh4KSB7XG4gIHN3aXRjaCAoeCkge1xuICAgIGNhc2UgLyogTiAqLzAgOlxuICAgICAgICByZXR1cm4gXCJOXCI7XG4gICAgY2FzZSAvKiBVICovMSA6XG4gICAgICAgIHJldHVybiBcIlVcIjtcbiAgICBjYXNlIC8qIEkgKi8yIDpcbiAgICAgICAgcmV0dXJuIFwiSVwiO1xuICAgIGNhc2UgLyogTSAqLzMgOlxuICAgICAgICByZXR1cm4gXCJNXCI7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9JbnQoc29ydE5NVUlPcHQsIGMpIHtcbiAgdmFyIHNvcnROTVVJID0gc29ydE5NVUlPcHQgIT09IHVuZGVmaW5lZCA/IHNvcnROTVVJT3B0IDogZmFsc2U7XG4gIHZhciBuID0gYyArIDAgfCAwO1xuICBzd2l0Y2ggKG4pIHtcbiAgICBjYXNlIDAgOlxuICAgICAgICByZXR1cm4gbjtcbiAgICBjYXNlIDEgOlxuICAgICAgICBpZiAoc29ydE5NVUkpIHtcbiAgICAgICAgICByZXR1cm4gMjtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gbjtcbiAgICAgICAgfVxuICAgIGNhc2UgMiA6XG4gICAgICAgIGlmIChzb3J0Tk1VSSkge1xuICAgICAgICAgIHJldHVybiAzO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBuO1xuICAgICAgICB9XG4gICAgY2FzZSAzIDpcbiAgICAgICAgaWYgKHNvcnROTVVJKSB7XG4gICAgICAgICAgcmV0dXJuIDE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIG47XG4gICAgICAgIH1cbiAgICBkZWZhdWx0OlxuICAgICAgcmV0dXJuIC05OTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmcm9tSW50KHNvcnROTVVJT3B0LCBuKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICB2YXIgX2MgPSB0RnJvbUpzKG4pO1xuICBpZiAoIXNvcnROTVVJKSB7XG4gICAgcmV0dXJuIF9jO1xuICB9XG4gIGlmIChfYyA9PT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIF9jO1xuICB9XG4gIHN3aXRjaCAoX2MpIHtcbiAgICBjYXNlIC8qIE4gKi8wIDpcbiAgICAgICAgcmV0dXJuIF9jO1xuICAgIGNhc2UgLyogVSAqLzEgOlxuICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgY2FzZSAvKiBJICovMiA6XG4gICAgICAgIHJldHVybiAvKiBVICovMTtcbiAgICBjYXNlIC8qIE0gKi8zIDpcbiAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIHRGcm9tU3RyKHN0cikge1xuICBzd2l0Y2ggKHN0cikge1xuICAgIGNhc2UgXCIobW4pXCIgOlxuICAgIGNhc2UgXCJJXCIgOlxuICAgIGNhc2UgXCJpXCIgOlxuICAgICAgICByZXR1cm4gLyogSSAqLzI7XG4gICAgY2FzZSBcIigpXCIgOlxuICAgIGNhc2UgXCJNXCIgOlxuICAgIGNhc2UgXCJtXCIgOlxuICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgY2FzZSBcIlwiIDpcbiAgICBjYXNlIFwiKCgpKVwiIDpcbiAgICBjYXNlIFwiLlwiIDpcbiAgICBjYXNlIFwiTlwiIDpcbiAgICBjYXNlIFwiblwiIDpcbiAgICAgICAgcmV0dXJuIC8qIE4gKi8wO1xuICAgIGNhc2UgXCJVXCIgOlxuICAgIGNhc2UgXCJtblwiIDpcbiAgICBjYXNlIFwidVwiIDpcbiAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgIGRlZmF1bHQ6XG4gICAgICByZXR1cm4gO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludih4KSB7XG4gIHN3aXRjaCAoeCkge1xuICAgIGNhc2UgLyogTiAqLzAgOlxuICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgY2FzZSAvKiBVICovMSA6XG4gICAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICBjYXNlIC8qIEkgKi8yIDpcbiAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgIGNhc2UgLyogTSAqLzMgOlxuICAgICAgICByZXR1cm4gLyogTiAqLzA7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsKHgsIHkpIHtcbiAgaWYgKHkgPT09IDApIHtcbiAgICByZXR1cm4geDtcbiAgfVxuICBzd2l0Y2ggKHgpIHtcbiAgICBjYXNlIC8qIE4gKi8wIDpcbiAgICAgICAgcmV0dXJuIHk7XG4gICAgY2FzZSAvKiBVICovMSA6XG4gICAgICAgIGlmICh5ID49IDIpIHtcbiAgICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgICAgICB9XG4gICAgY2FzZSAvKiBJICovMiA6XG4gICAgICAgIGlmICh5ICE9PSAyKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIE0gKi8zO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICAgICAgfVxuICAgIGNhc2UgLyogTSAqLzMgOlxuICAgICAgICByZXR1cm4gLyogTSAqLzM7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gc2hvdyQxKG5lc3QpIHtcbiAgaWYgKG5lc3QuTkFNRSA9PT0gXCJOZXN0VG9SXCIpIHtcbiAgICB2YXIgY2xpc3QgPSBuZXN0LlZBTDtcbiAgICBpZiAoY2xpc3QpIHtcbiAgICAgIHJldHVybiBcIihcIiArIEJlbHRfTGlzdC5yZWR1Y2VSZXZlcnNlKGNsaXN0LCBcIlwiLCAoZnVuY3Rpb24gKHN0ciwgYykge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gc2hvdyhjKSArIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHIubGVuZ3RoID4gMCA/IFwiKFwiICsgc3RyICsgXCIpXCIgOiBcIlwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KSkgKyBcIilcIjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIFwiTVwiO1xuICAgIH1cbiAgfVxuICB2YXIgY2xpc3QkMSA9IG5lc3QuVkFMO1xuICBpZiAoY2xpc3QkMSkge1xuICAgIHJldHVybiBcIihcIiArIEJlbHRfTGlzdC5yZWR1Y2UoY2xpc3QkMSwgXCJcIiwgKGZ1bmN0aW9uIChzdHIsIGMpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHN0ci5sZW5ndGggPiAwID8gXCIoXCIgKyBzdHIgKyBcIilcIiA6IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICkgKyBzaG93KGMpO1xuICAgICAgICAgICAgICAgIH0pKSArIFwiKVwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcIk1cIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBnZXRMaXN0KG5lc3QpIHtcbiAgcmV0dXJuIG5lc3QuVkFMO1xufVxuXG5mdW5jdGlvbiBmcm9tQXJyYXlUb0woYXJyKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9MXCIsXG4gICAgICAgICAgVkFMOiBCZWx0X0xpc3QuZnJvbUFycmF5KGFycilcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZnJvbUFycmF5VG9SKGFycikge1xuICByZXR1cm4ge1xuICAgICAgICAgIE5BTUU6IFwiTmVzdFRvUlwiLFxuICAgICAgICAgIFZBTDogQmVsdF9MaXN0LmZyb21BcnJheShhcnIpXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHRvQXJyYXkobmVzdCkge1xuICByZXR1cm4gQmVsdF9MaXN0LnRvQXJyYXkobmVzdC5WQUwpO1xufVxuXG5mdW5jdGlvbiBmbWFwTChwYXJhbSwgZm4pIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBOQU1FOiBcIk5lc3RUb0xcIixcbiAgICAgICAgICBWQUw6IEN1cnJ5Ll8xKGZuLCBwYXJhbS5WQUwpXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGZtYXBSKHBhcmFtLCBmbikge1xuICByZXR1cm4ge1xuICAgICAgICAgIE5BTUU6IFwiTmVzdFRvUlwiLFxuICAgICAgICAgIFZBTDogQ3VycnkuXzEoZm4sIHBhcmFtLlZBTClcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gX3JlZHVjZUJ5Q3Jvc3NpbmcoX2NsaXN0KSB7XG4gIHdoaWxlKHRydWUpIHtcbiAgICB2YXIgY2xpc3QgPSBfY2xpc3Q7XG4gICAgaWYgKCFjbGlzdCkge1xuICAgICAgcmV0dXJuIGNsaXN0O1xuICAgIH1cbiAgICB2YXIgYyA9IGNsaXN0LmhkO1xuICAgIGlmIChjID09PSAwKSB7XG4gICAgICB2YXIgbWF0Y2ggPSBjbGlzdC50bDtcbiAgICAgIGlmIChtYXRjaCAmJiBtYXRjaC5oZCA9PT0gMCkge1xuICAgICAgICBfY2xpc3QgPSBtYXRjaC50bDtcbiAgICAgICAgY29udGludWUgO1xuICAgICAgfVxuICAgICAgXG4gICAgfVxuICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZDogYyxcbiAgICAgICAgICAgIHRsOiBfcmVkdWNlQnlDcm9zc2luZyhjbGlzdC50bClcbiAgICAgICAgICB9O1xuICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VCeUNyb3NzaW5nTChwYXJhbSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIE5BTUU6IFwiTmVzdFRvTFwiLFxuICAgICAgICAgIFZBTDogX3JlZHVjZUJ5Q3Jvc3NpbmcocGFyYW0uVkFMKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiByZWR1Y2VCeUNyb3NzaW5nUihwYXJhbSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIE5BTUU6IFwiTmVzdFRvUlwiLFxuICAgICAgICAgIFZBTDogX3JlZHVjZUJ5Q3Jvc3NpbmcocGFyYW0uVkFMKVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBfcmVkdWNlQnlDYWxsaW5nKGNsaXN0LCBzb21lVUkpIHtcbiAgaWYgKCFjbGlzdCkge1xuICAgIHJldHVybiBjbGlzdDtcbiAgfVxuICB2YXIgY3MgPSBjbGlzdC50bDtcbiAgdmFyIGMgPSBjbGlzdC5oZDtcbiAgaWYgKGNzKSB7XG4gICAgaWYgKGMgIT09IDApIHtcbiAgICAgIGlmIChjID49IDMpIHtcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBoZDogLyogTSAqLzMsXG4gICAgICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgICAgICB9O1xuICAgICAgfSBlbHNlIGlmIChzb21lVUkgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICBpZiAoc29tZVVJID09PSBjKSB7XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgIGhkOiAvKiBOICovMCxcbiAgICAgICAgICAgICAgICAgIHRsOiBfcmVkdWNlQnlDYWxsaW5nKGNzLCBzb21lVUkpXG4gICAgICAgICAgICAgICAgfTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgaGQ6IC8qIE0gKi8zLFxuICAgICAgICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgaGQ6IGMsXG4gICAgICAgICAgICAgICAgdGw6IF9yZWR1Y2VCeUNhbGxpbmcoY3MsIGMpXG4gICAgICAgICAgICAgIH07XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGhkOiAvKiBOICovMCxcbiAgICAgICAgICAgICAgdGw6IF9yZWR1Y2VCeUNhbGxpbmcoY3MsIHNvbWVVSSlcbiAgICAgICAgICAgIH07XG4gICAgfVxuICB9IGVsc2UgaWYgKCEoYyA9PT0gMiB8fCBjID09PSAxKSB8fCBzb21lVUkgPT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBjbGlzdDtcbiAgfSBlbHNlIGlmIChzb21lVUkgPT09IGMpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgaGQ6IC8qIE4gKi8wLFxuICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiAvKiBNICovMyxcbiAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHJlZHVjZUJ5Q2FsbGluZ0wocGFyYW0pIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBOQU1FOiBcIk5lc3RUb0xcIixcbiAgICAgICAgICBWQUw6IEpzX2xpc3QucmV2KF9yZWR1Y2VCeUNhbGxpbmcoSnNfbGlzdC5yZXYocGFyYW0uVkFMKSwgdW5kZWZpbmVkKSlcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlQnlDYWxsaW5nUihwYXJhbSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIE5BTUU6IFwiTmVzdFRvUlwiLFxuICAgICAgICAgIFZBTDogX3JlZHVjZUJ5Q2FsbGluZyhwYXJhbS5WQUwsIHVuZGVmaW5lZClcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlTChwYXJhbSkge1xuICByZXR1cm4gcmVkdWNlQnlDcm9zc2luZ0wocmVkdWNlQnlDYWxsaW5nTCh7XG4gICAgICAgICAgICAgICAgICBOQU1FOiBcIk5lc3RUb0xcIixcbiAgICAgICAgICAgICAgICAgIFZBTDogcGFyYW0uVkFMXG4gICAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VSKHBhcmFtKSB7XG4gIHJldHVybiByZWR1Y2VCeUNyb3NzaW5nUihyZWR1Y2VCeUNhbGxpbmdSKHtcbiAgICAgICAgICAgICAgICAgIE5BTUU6IFwiTmVzdFRvUlwiLFxuICAgICAgICAgICAgICAgICAgVkFMOiBwYXJhbS5WQUxcbiAgICAgICAgICAgICAgICB9KSk7XG59XG5cbmZ1bmN0aW9uIF9jYWxjKGNsaXN0KSB7XG4gIGlmICghY2xpc3QpIHtcbiAgICByZXR1cm4gLyogTiAqLzA7XG4gIH1cbiAgdmFyIGNzID0gY2xpc3QudGw7XG4gIHZhciBjID0gY2xpc3QuaGQ7XG4gIGlmIChjcykge1xuICAgIGlmIChjICE9PSAwKSB7XG4gICAgICBpZiAoYyA+PSAzKSB7XG4gICAgICAgIHJldHVybiAvKiBNICovMztcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiByZWwoYywgaW52KF9jYWxjKGNzKSkpO1xuICAgICAgfVxuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gaW52KF9jYWxjKGNzKSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIHJldHVybiBjO1xuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGNMKHBhcmFtKSB7XG4gIHZhciBjbGlzdCA9IHBhcmFtLlZBTDtcbiAgaWYgKGNsaXN0KSB7XG4gICAgcmV0dXJuIGludihfY2FsYyhKc19saXN0LnJldihjbGlzdCkpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogTSAqLzM7XG4gIH1cbn1cblxuZnVuY3Rpb24gY2FsY1IocGFyYW0pIHtcbiAgdmFyIGNsaXN0ID0gcGFyYW0uVkFMO1xuICBpZiAoY2xpc3QpIHtcbiAgICByZXR1cm4gaW52KF9jYWxjKGNsaXN0KSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qIE0gKi8zO1xuICB9XG59XG5cbnZhciBqc0NvbnN0ID0ge1xuICB0RW51bTogdEVudW0sXG4gIHNob3c6IHNob3csXG4gIHRGcm9tU3RyOiB0RnJvbVN0cixcbiAgaW52OiBpbnYsXG4gIHJlbDogcmVsXG59O1xuXG52YXIgQ29uc3QgPSB7XG4gIHRFbnVtOiB0RW51bSxcbiAgdEVudW1MaXN0OiB0RW51bUxpc3QsXG4gIHNob3c6IHNob3csXG4gIHNob3dBc0tleTogc2hvd0FzS2V5LFxuICB0b0ludDogdG9JbnQsXG4gIGZyb21JbnQ6IGZyb21JbnQsXG4gIHRGcm9tU3RyOiB0RnJvbVN0cixcbiAgaW52OiBpbnYsXG4gIHJlbDogcmVsXG59O1xuXG52YXIgTmVzdGVkID0ge1xuICBzaG93OiBzaG93JDEsXG4gIGdldExpc3Q6IGdldExpc3QsXG4gIGZyb21BcnJheVRvTDogZnJvbUFycmF5VG9MLFxuICBmcm9tQXJyYXlUb1I6IGZyb21BcnJheVRvUixcbiAgdG9BcnJheTogdG9BcnJheSxcbiAgZm1hcEw6IGZtYXBMLFxuICBmbWFwUjogZm1hcFIsXG4gIHJlZHVjZUJ5Q3Jvc3NpbmdMOiByZWR1Y2VCeUNyb3NzaW5nTCxcbiAgcmVkdWNlQnlDcm9zc2luZ1I6IHJlZHVjZUJ5Q3Jvc3NpbmdSLFxuICByZWR1Y2VCeUNhbGxpbmdMOiByZWR1Y2VCeUNhbGxpbmdMLFxuICByZWR1Y2VCeUNhbGxpbmdSOiByZWR1Y2VCeUNhbGxpbmdSLFxuICByZWR1Y2VMOiByZWR1Y2VMLFxuICByZWR1Y2VSOiByZWR1Y2VSLFxuICBjYWxjTDogY2FsY0wsXG4gIGNhbGNSOiBjYWxjUlxufTtcblxuZXhwb3J0IHtcbiAgQ29uc3QgLFxuICBOZXN0ZWQgLFxuICBqc0NvbnN0ICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IFJlU2NyaXB0LCBQTEVBU0UgRURJVCBXSVRIIENBUkVcblxuaW1wb3J0ICogYXMgQ2FtbF9vYmogZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvY2FtbF9vYmouanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfQXJyYXkgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvYmVsdF9BcnJheS5qc1wiO1xuaW1wb3J0ICogYXMgQ2FsYyRGb3JtZm9ybSBmcm9tIFwiLi9DYWxjLmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBIZWxwZXIkRm9ybWZvcm0gZnJvbSBcIi4uLy4uL3V0aWxzL0hlbHBlci5icy5qc1wiO1xuXG5mdW5jdGlvbiBnZXRTaXplKGRuYSkge1xuICB2YXIgbGVuID0gZG5hLmxlbmd0aDtcbiAgcmV0dXJuIE1hdGgubG9nKGxlbikgLyBNYXRoLmxvZyg0LjApIHwgMDtcbn1cblxuZnVuY3Rpb24gZ2V0U2l6ZUZyb21MZW5ndGgobGVuKSB7XG4gIHZhciB4ID0gTWF0aC5sb2cobGVuKSAvIE1hdGgubG9nKDQuMCk7XG4gIGlmICghTnVtYmVyLmlzRmluaXRlKHgpIHx8IEhlbHBlciRGb3JtZm9ybS5oYXNEZWNpbWFsKHgpKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4geCB8IDA7XG4gIH1cbn1cblxuZnVuY3Rpb24gaXNWYWxpZExlbmd0aChsZW4pIHtcbiAgcmV0dXJuIGdldFNpemVGcm9tTGVuZ3RoKGxlbikgIT09IHVuZGVmaW5lZDtcbn1cblxuZnVuY3Rpb24gbWFrZShhcnIpIHtcbiAgdmFyIGxlbiA9IGFyci5sZW5ndGg7XG4gIGlmIChpc1ZhbGlkTGVuZ3RoKGxlbikpIHtcbiAgICByZXR1cm4gYXJyO1xuICB9XG4gIFxufVxuXG5mdW5jdGlvbiBtYWtlVW5zYWZlKGFycikge1xuICB2YXIgbGVuID0gYXJyLmxlbmd0aDtcbiAgaWYgKGlzVmFsaWRMZW5ndGgobGVuKSkge1xuICAgIHJldHVybiBhcnI7XG4gIH1cbiAgdGhyb3cge1xuICAgICAgICBSRV9FWE5fSUQ6IFwiTm90X2ZvdW5kXCIsXG4gICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZ2VuUmFuZG9tKHNpemUpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5mdW5jdGlvbiB0b0FycmF5KGRuYSkge1xuICByZXR1cm4gZG5hO1xufVxuXG5mdW5jdGlvbiByZW9yZGVyVG9OTVVJKGRuYSkge1xuICB2YXIgbGVuID0gZG5hLmxlbmd0aDtcbiAgaWYgKGxlbiA8IDQpIHtcbiAgICByZXR1cm4gZG5hO1xuICB9XG4gIHZhciBwYXJ0TGVuID0gbGVuIC8gNCB8IDA7XG4gIHJldHVybiBCZWx0X0FycmF5LmNvbmNhdE1hbnkoQmVsdF9BcnJheS5tYWtlQnkoNCwgKGZ1bmN0aW9uIChpKSB7XG4gICAgICAgICAgICAgICAgICAgIHZhciBpX25tdWk7XG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaCAoaSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMCA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlfbm11aSA9IDE7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMSA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlfbm11aSA9IDI7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGNhc2UgMiA6XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGlfbm11aSA9IDA7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBpX25tdWkgPSBpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHZhciBpbmRleCA9IE1hdGguaW11bChpX25tdWksIHBhcnRMZW4pO1xuICAgICAgICAgICAgICAgICAgICB2YXIgcGFydF9ubXVpID0gZG5hLnNsaWNlKGluZGV4LCBpbmRleCArIHBhcnRMZW4gfCAwKTtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxlbiA+IDQpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVvcmRlclRvTk1VSShwYXJ0X25tdWkpO1xuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBwYXJ0X25tdWk7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgIH0pKSk7XG59XG5cbmZ1bmN0aW9uIGZyb21JbnRBcnIoc29ydE5NVUlPcHQsIGFycikge1xuICB2YXIgc29ydE5NVUkgPSBzb3J0Tk1VSU9wdCAhPT0gdW5kZWZpbmVkID8gc29ydE5NVUlPcHQgOiBmYWxzZTtcbiAgaWYgKGlzVmFsaWRMZW5ndGgoYXJyLmxlbmd0aCkgPT09IGZhbHNlKSB7XG4gICAgcmV0dXJuIDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gYXJyLm1hcChmdW5jdGlvbiAobikge1xuICAgICAgICAgICAgICAgIHZhciBjID0gQ2FsYyRGb3JtZm9ybS5Db25zdC5mcm9tSW50KHNvcnROTVVJLCBuKTtcbiAgICAgICAgICAgICAgICBpZiAoYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gZnJvbUludEFyclVuc2FmZShzb3J0Tk1VSU9wdCwgYXJyKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICB2YXIgZG5hID0gZnJvbUludEFycihzb3J0Tk1VSSwgYXJyKTtcbiAgaWYgKGRuYSAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGRuYTtcbiAgfVxuICB0aHJvdyB7XG4gICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICB9O1xufVxuXG5mdW5jdGlvbiBmcm9tU3RyQXJyKGFycikge1xuICBpZiAoaXNWYWxpZExlbmd0aChhcnIubGVuZ3RoKSA9PT0gZmFsc2UpIHtcbiAgICByZXR1cm4gO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBhcnIubWFwKGZ1bmN0aW9uIChuKSB7XG4gICAgICAgICAgICAgICAgdmFyIGMgPSBDYWxjJEZvcm1mb3JtLkNvbnN0LnRGcm9tU3RyKG4pO1xuICAgICAgICAgICAgICAgIGlmIChjICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICB9KTtcbiAgfVxufVxuXG5mdW5jdGlvbiBmcm9tU3RyQXJyVW5zYWZlKGFycikge1xuICB2YXIgZG5hID0gZnJvbVN0ckFycihhcnIpO1xuICBpZiAoZG5hICE9PSB1bmRlZmluZWQpIHtcbiAgICByZXR1cm4gZG5hO1xuICB9XG4gIHRocm93IHtcbiAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHNob3coc29ydE5NVUlPcHQsIHNwYWNlZE9wdCwgZG5hKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICB2YXIgc3BhY2VkID0gc3BhY2VkT3B0ICE9PSB1bmRlZmluZWQgPyBzcGFjZWRPcHQgOiBmYWxzZTtcbiAgdmFyIGRuYV9zb3J0ZWQgPSBzb3J0Tk1VSSA/IHJlb3JkZXJUb05NVUkoZG5hKSA6IGRuYTtcbiAgdmFyIHByZWZpeCA9IChcbiAgICBzb3J0Tk1VSSA/IFwiOjpcIiA6IFwi4oGYXCJcbiAgKSArIChcbiAgICBzcGFjZWQgPyBcIiBcIiA6IFwiXCJcbiAgKTtcbiAgaWYgKENhbWxfb2JqLmNhbWxfZXF1YWwoZG5hX3NvcnRlZCwgW10pKSB7XG4gICAgcmV0dXJuIHByZWZpeCArIENhbGMkRm9ybWZvcm0uQ29uc3QudG9JbnQoc29ydE5NVUksIC8qIE4gKi8wKS50b1N0cmluZygpO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBwcmVmaXggKyBkbmFfc29ydGVkLnJlZHVjZSgoZnVuY3Rpb24gKHN0ciwgYywgaSkge1xuICAgICAgICAgICAgICAgICAgdmFyIHNwYyA9IHNwYWNlZCAmJiBpID4gMCAmJiBpICUgNCA9PT0gMCA/IFwiIFwiIDogXCJcIjtcbiAgICAgICAgICAgICAgICAgIHJldHVybiBzdHIgKyBzcGMgKyBDYWxjJEZvcm1mb3JtLkNvbnN0LnRvSW50KHNvcnROTVVJLCBjKS50b1N0cmluZygpO1xuICAgICAgICAgICAgICAgIH0pLCBcIlwiKTtcbiAgfVxufVxuXG5mdW5jdGlvbiByYXcoZG5hKSB7XG4gIGlmIChDYW1sX29iai5jYW1sX2VxdWFsKGRuYSwgW10pKSB7XG4gICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3Quc2hvd0FzS2V5KC8qIE4gKi8wKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZG5hLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3Quc2hvd0FzS2V5KGMpO1xuICAgICAgICAgICAgICAgIH0pLmpvaW4oXCJcIik7XG4gIH1cbn1cblxuZnVuY3Rpb24gaW52KGRuYSkge1xuICBpZiAoQ2FtbF9vYmouY2FtbF9lcXVhbChkbmEsIFtdKSkge1xuICAgIHJldHVybiBbQ2FsYyRGb3JtZm9ybS5Db25zdC5pbnYoLyogTiAqLzApXTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZG5hLm1hcChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LmludihjKTtcbiAgICAgICAgICAgICAgfSk7XG4gIH1cbn1cblxuZnVuY3Rpb24gcmVsKGRuYV9hLCBkbmFfYikge1xuICB2YXIgbGVuX2EgPSBkbmFfYS5sZW5ndGg7XG4gIHZhciBsZW5fYiA9IGRuYV9iLmxlbmd0aDtcbiAgdmFyIG1hdGNoID0gbGVuX2EgPD0gbGVuX2IgPyBbXG4gICAgICBkbmFfYSxcbiAgICAgIGRuYV9iLFxuICAgICAgbGVuX2EsXG4gICAgICBsZW5fYlxuICAgIF0gOiBbXG4gICAgICBkbmFfYixcbiAgICAgIGRuYV9hLFxuICAgICAgbGVuX2IsXG4gICAgICBsZW5fYVxuICAgIF07XG4gIHZhciBzdXBMZW4gPSBtYXRjaFszXTtcbiAgdmFyIHN1YkxlbiA9IG1hdGNoWzJdO1xuICB2YXIgc3VwID0gbWF0Y2hbMV07XG4gIHZhciByZXN1bHQgPSBCZWx0X0FycmF5LnppcEJ5KHN1cCwgbWF0Y2hbMF0sIChmdW5jdGlvbiAoYSwgYikge1xuICAgICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LnJlbChhLCBiKTtcbiAgICAgICAgfSkpO1xuICBpZiAoc3ViTGVuID09PSBzdXBMZW4pIHtcbiAgICByZXR1cm4gcmVzdWx0O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBCZWx0X0FycmF5LmNvbmNhdChyZXN1bHQsIEJlbHRfQXJyYXkuc2xpY2Uoc3VwLCBzdWJMZW4sIHN1cExlbikpO1xuICB9XG59XG5cbmV4cG9ydCB7XG4gIGdldFNpemUgLFxuICBpc1ZhbGlkTGVuZ3RoICxcbiAgbWFrZSAsXG4gIG1ha2VVbnNhZmUgLFxuICBnZW5SYW5kb20gLFxuICB0b0FycmF5ICxcbiAgcmVvcmRlclRvTk1VSSAsXG4gIGZyb21JbnRBcnIgLFxuICBmcm9tSW50QXJyVW5zYWZlICxcbiAgZnJvbVN0ckFyciAsXG4gIGZyb21TdHJBcnJVbnNhZmUgLFxuICBzaG93ICxcbiAgcmF3ICxcbiAgaW52ICxcbiAgcmVsICxcbiAgXG59XG4vKiBIZWxwZXItRm9ybWZvcm0gTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBSZVNjcmlwdCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG5cbmltcG9ydCAqIGFzIEpzX2xpc3QgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvanNfbGlzdC5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9vYmogZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvY2FtbF9vYmouanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfTGlzdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0xpc3QuanNcIjtcbmltcG9ydCAqIGFzIENhbGMkRm9ybWZvcm0gZnJvbSBcIi4vQ2FsYy5icy5qc1wiO1xuaW1wb3J0ICogYXMgSGVscGVyJEZvcm1mb3JtIGZyb20gXCIuLi8uLi91dGlscy9IZWxwZXIuYnMuanNcIjtcblxuZnVuY3Rpb24gc2lnVG9KcyhwYXJhbSkge1xuICByZXR1cm4ge1xuICAgICAgICAgIHJlRW50cnlQYXI6IHBhcmFtLnJlRW50cnlQYXIsXG4gICAgICAgICAgdW5tYXJrZWQ6IHBhcmFtLnVubWFya2VkLFxuICAgICAgICAgIGludGVycHI6IHBhcmFtLmludGVycHJcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gc2lnRnJvbUpzKHBhcmFtKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgcmVFbnRyeVBhcjogcGFyYW0ucmVFbnRyeVBhcixcbiAgICAgICAgICB1bm1hcmtlZDogcGFyYW0udW5tYXJrZWQsXG4gICAgICAgICAgaW50ZXJwcjogcGFyYW0uaW50ZXJwclxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBtbkZyb21TdHIoc3RyKSB7XG4gIHN3aXRjaCAoc3RyKSB7XG4gICAgY2FzZSBcIlJlY0lkZW50XCIgOlxuICAgIGNhc2UgXCJSZWN1cnNpdmUgSWRlbnRpdHlcIiA6XG4gICAgY2FzZSBcImlkXCIgOlxuICAgIGNhc2UgXCJySWRcIiA6XG4gICAgY2FzZSBcInJlY0lkZW50XCIgOlxuICAgICAgICByZXR1cm4gLyogUmVjSWRlbnQgKi8xO1xuICAgIGNhc2UgXCJSZWNJbnN0clwiIDpcbiAgICBjYXNlIFwiUmVjdXJzaXZlIEluc3RydWN0aW9uXCIgOlxuICAgIGNhc2UgXCJpblwiIDpcbiAgICBjYXNlIFwickluXCIgOlxuICAgIGNhc2UgXCJyZWNJbnN0clwiIDpcbiAgICAgICAgcmV0dXJuIC8qIFJlY0luc3RyICovMDtcbiAgICBkZWZhdWx0OlxuICAgICAgdGhyb3cge1xuICAgICAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgfTtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93U2lnKHBhcmFtKSB7XG4gIHZhciBtYXRjaDtcbiAgc3dpdGNoIChwYXJhbS5yZUVudHJ5UGFyKSB7XG4gICAgY2FzZSAvKiBFdmVuICovMCA6XG4gICAgICAgIG1hdGNoID0gW1xuICAgICAgICAgIFwiLi5cIixcbiAgICAgICAgICBcIlwiXG4gICAgICAgIF07XG4gICAgICAgIGJyZWFrO1xuICAgIGNhc2UgLyogT2RkICovMSA6XG4gICAgICAgIG1hdGNoID0gW1xuICAgICAgICAgIFwiLi5cIixcbiAgICAgICAgICBcIi5cIlxuICAgICAgICBdO1xuICAgICAgICBicmVhaztcbiAgICBjYXNlIC8qIEFueSAqLzIgOlxuICAgICAgICBtYXRjaCA9IFtcbiAgICAgICAgICBcIlwiLFxuICAgICAgICAgIFwiXCJcbiAgICAgICAgXTtcbiAgICAgICAgYnJlYWs7XG4gICAgXG4gIH1cbiAgdmFyIHJlTWFyayA9IHBhcmFtLmludGVycHIgPyBcIkAnXCIgOiBcIkBcIjtcbiAgcmV0dXJuIChcbiAgICAgICAgICBwYXJhbS51bm1hcmtlZCA/IFwiX1wiIDogXCJcIlxuICAgICAgICApICsgbWF0Y2hbMV0gKyByZU1hcmsgKyBtYXRjaFswXTtcbn1cblxuZnVuY3Rpb24gc2hvd01OKG1uKSB7XG4gIGlmIChtbikge1xuICAgIHJldHVybiBcInJlY3Vyc2l2ZSBpZGVudGl0eVwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcInJlY3Vyc2l2ZSBpbnN0cnVjdGlvblwiO1xuICB9XG59XG5cbmZ1bmN0aW9uIHNob3dVVHlwZSh1VHlwZSkge1xuICBpZiAodVR5cGUpIHtcbiAgICByZXR1cm4gXCJpRk9STVwiO1xuICB9IGVsc2Uge1xuICAgIHJldHVybiBcInVGT1JNXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gZ2V0VVR5cGUocGFyYW0sIHJlc1Bhcikge1xuICBzd2l0Y2ggKHJlc1Bhcikge1xuICAgIGNhc2UgLyogRXZlbiAqLzAgOlxuICAgICAgICBpZiAocGFyYW0udW5tYXJrZWQpIHtcbiAgICAgICAgICByZXR1cm4gLyogSUZPUk0gKi8xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAvKiBVRk9STSAqLzA7XG4gICAgICAgIH1cbiAgICBjYXNlIC8qIE9kZCAqLzEgOlxuICAgICAgICBzd2l0Y2ggKHBhcmFtLnJlRW50cnlQYXIpIHtcbiAgICAgICAgICBjYXNlIC8qIEV2ZW4gKi8wIDpcbiAgICAgICAgICAgICAgcmV0dXJuIC8qIFVGT1JNICovMDtcbiAgICAgICAgICBjYXNlIC8qIE9kZCAqLzEgOlxuICAgICAgICAgIGNhc2UgLyogQW55ICovMiA6XG4gICAgICAgICAgICAgIHJldHVybiAvKiBJRk9STSAqLzE7XG4gICAgICAgICAgXG4gICAgICAgIH1cbiAgICBjYXNlIC8qIEFueSAqLzIgOlxuICAgICAgICByZXR1cm4gLyogSUZPUk0gKi8xO1xuICAgIFxuICB9XG59XG5cbmZ1bmN0aW9uIGNhbGNSRShwYXJhbSwgcGFyYW0kMSkge1xuICB2YXIgbmVzdGVkQyA9IHBhcmFtJDEuVkFMO1xuICB2YXIgaW50ZXJwciA9IHBhcmFtLmludGVycHI7XG4gIHZhciB1bm1hcmtlZCA9IHBhcmFtLnVubWFya2VkO1xuICB2YXIgcmVFbnRyeVBhciA9IHBhcmFtLnJlRW50cnlQYXI7XG4gIHZhciByZXNQYXIgPSBuZXN0ZWRDID09PSAvKiBbXSAqLzAgfHwgSnNfbGlzdC5sZW5ndGgobmVzdGVkQykgJSAyICE9PSAwID8gLyogT2RkICovMSA6IC8qIEV2ZW4gKi8wO1xuICB2YXIgcmVUeXBlID0gZ2V0VVR5cGUoe1xuICAgICAgICByZUVudHJ5UGFyOiByZUVudHJ5UGFyLFxuICAgICAgICB1bm1hcmtlZDogdW5tYXJrZWQsXG4gICAgICAgIGludGVycHI6IGludGVycHJcbiAgICAgIH0sIHJlc1Bhcik7XG4gIGlmIChuZXN0ZWRDID09PSAvKiBbXSAqLzAgfHwgQmVsdF9MaXN0LmV2ZXJ5KG5lc3RlZEMsIChmdW5jdGlvbiAoYykge1xuICAgICAgICAgICAgcmV0dXJuIGMgPT09IC8qIE4gKi8wO1xuICAgICAgICAgIH0pKSkge1xuICAgIGlmIChyZVR5cGUpIHtcbiAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgIH1cbiAgfVxuICB2YXIgbmVzdGVkQyQxID0gIXVubWFya2VkICYmIHJlc1BhciA9PT0gLyogT2RkICovMSAmJiByZUVudHJ5UGFyID09PSAvKiBFdmVuICovMCA/IEJlbHRfTGlzdC5jb25jYXQobmVzdGVkQywgbmVzdGVkQykgOiBuZXN0ZWRDO1xuICBpZiAoQmVsdF9MaXN0LnNvbWUobmVzdGVkQyQxLCAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBjID09PSAvKiBNICovMztcbiAgICAgICAgICB9KSkgfHwgQmVsdF9MaXN0LnNvbWUobmVzdGVkQyQxLCAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBjID09PSAvKiBVICovMTtcbiAgICAgICAgICB9KSkgJiYgQmVsdF9MaXN0LnNvbWUobmVzdGVkQyQxLCAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgIHJldHVybiBjID09PSAvKiBJICovMjtcbiAgICAgICAgICB9KSkpIHtcbiAgICB2YXIgciA9IENhbGMkRm9ybWZvcm0uTmVzdGVkLmNhbGNSKENhbGMkRm9ybWZvcm0uTmVzdGVkLnJlZHVjZVIoe1xuICAgICAgICAgICAgICBOQU1FOiBcIk5lc3RUb1JcIixcbiAgICAgICAgICAgICAgVkFMOiBuZXN0ZWRDJDFcbiAgICAgICAgICAgIH0pKTtcbiAgICBpZiAodW5tYXJrZWQpIHtcbiAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LmludihyKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHI7XG4gICAgfVxuICB9XG4gIHZhciBtYXRjaCA9IENhbGMkRm9ybWZvcm0uTmVzdGVkLnJlZHVjZVIoe1xuICAgICAgICBOQU1FOiBcIk5lc3RUb1JcIixcbiAgICAgICAgVkFMOiBuZXN0ZWRDJDFcbiAgICAgIH0pO1xuICB2YXIgbmVzdGVkQyQyID0gbWF0Y2guVkFMO1xuICB2YXIgYm90dG9tX2MgPSBKc19saXN0LmhkKG5lc3RlZEMkMik7XG4gIGlmIChpbnRlcnByID09PSAvKiBSZWNJZGVudCAqLzEgJiYgIXVubWFya2VkICYmIENhbWxfb2JqLmNhbWxfZXF1YWwoYm90dG9tX2MsIC8qIE4gKi8wKSkge1xuICAgIGlmIChuZXN0ZWRDJDIpIHtcbiAgICAgIHZhciBtYXRjaCQxID0gbmVzdGVkQyQyLnRsO1xuICAgICAgaWYgKG1hdGNoJDEpIHtcbiAgICAgICAgdmFyIGMgPSBtYXRjaCQxLmhkO1xuICAgICAgICBpZiAocmVUeXBlKSB7XG4gICAgICAgICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3QucmVsKC8qIEkgKi8yLCBjKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gQ2FsYyRGb3JtZm9ybS5Db25zdC5yZWwoLyogVSAqLzEsIGMpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyB7XG4gICAgICAgICAgICBSRV9FWE5fSUQ6IEhlbHBlciRGb3JtZm9ybS5VbnJlYWNoYWJsZSxcbiAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgIH07XG4gICAgfVxuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IEhlbHBlciRGb3JtZm9ybS5VbnJlYWNoYWJsZSxcbiAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgfTtcbiAgfVxuICBpZiAoaW50ZXJwciA9PT0gLyogUmVjSWRlbnQgKi8xICYmIHVubWFya2VkICYmIENhbWxfb2JqLmNhbWxfbm90ZXF1YWwoYm90dG9tX2MsIC8qIE4gKi8wKSkge1xuICAgIGlmIChib3R0b21fYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICBpZiAocmVUeXBlKSB7XG4gICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LnJlbCgvKiBJICovMiwgYm90dG9tX2MpO1xuICAgICAgfSBlbHNlIHtcbiAgICAgICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3QucmVsKC8qIFUgKi8xLCBib3R0b21fYyk7XG4gICAgICB9XG4gICAgfVxuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IEhlbHBlciRGb3JtZm9ybS5VbnJlYWNoYWJsZSxcbiAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgfTtcbiAgfVxuICBpZiAodW5tYXJrZWQpIHtcbiAgICBpZiAobmVzdGVkQyQyKSB7XG4gICAgICB2YXIgbWF0Y2gkMiA9IG5lc3RlZEMkMi5oZDtcbiAgICAgIGlmIChtYXRjaCQyICE9PSAwKSB7XG4gICAgICAgIGlmIChtYXRjaCQyID49IDMpIHtcbiAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgUkVfRVhOX0lEOiBIZWxwZXIkRm9ybWZvcm0uVW5yZWFjaGFibGUsXG4gICAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICAgIH07XG4gICAgICAgIH1cbiAgICAgICAgdmFyIG1hdGNoJDMgPSBuZXN0ZWRDJDIudGw7XG4gICAgICAgIGlmICghbWF0Y2gkMykge1xuICAgICAgICAgIGlmIChyZUVudHJ5UGFyID09PSAvKiBFdmVuICovMCkge1xuICAgICAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICByZXR1cm4gLyogVSAqLzE7XG4gICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGlmIChtYXRjaCQzLmhkICE9PSAwKSB7XG4gICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgIFJFX0VYTl9JRDogSGVscGVyJEZvcm1mb3JtLlVucmVhY2hhYmxlLFxuICAgICAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgICAgICB9O1xuICAgICAgICB9XG4gICAgICAgIGlmICghbWF0Y2gkMy50bCkge1xuICAgICAgICAgIHJldHVybiAvKiBVICovMTtcbiAgICAgICAgfVxuICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgIFJFX0VYTl9JRDogSGVscGVyJEZvcm1mb3JtLlVucmVhY2hhYmxlLFxuICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgIH07XG4gICAgICB9XG4gICAgICB2YXIgbWF0Y2gkNCA9IG5lc3RlZEMkMi50bDtcbiAgICAgIGlmIChtYXRjaCQ0KSB7XG4gICAgICAgIGlmICgobWF0Y2gkNC5oZCAtIDEgPj4+IDApID4gMSkge1xuICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBSRV9FWE5fSUQ6IEhlbHBlciRGb3JtZm9ybS5VbnJlYWNoYWJsZSxcbiAgICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICB2YXIgbWF0Y2gkNSA9IG1hdGNoJDQudGw7XG4gICAgICAgIGlmICghbWF0Y2gkNSkge1xuICAgICAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2gkNS5oZCAhPT0gMCkge1xuICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBSRV9FWE5fSUQ6IEhlbHBlciRGb3JtZm9ybS5VbnJlYWNoYWJsZSxcbiAgICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAobWF0Y2gkNS50bCkge1xuICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICBSRV9FWE5fSUQ6IEhlbHBlciRGb3JtZm9ybS5VbnJlYWNoYWJsZSxcbiAgICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgICAgfTtcbiAgICAgICAgfVxuICAgICAgICBpZiAocmVFbnRyeVBhciA9PT0gLyogRXZlbiAqLzApIHtcbiAgICAgICAgICByZXR1cm4gLyogVSAqLzE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aHJvdyB7XG4gICAgICAgICAgICBSRV9FWE5fSUQ6IEhlbHBlciRGb3JtZm9ybS5VbnJlYWNoYWJsZSxcbiAgICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICAgIH07XG4gICAgfVxuICAgIHRocm93IHtcbiAgICAgICAgICBSRV9FWE5fSUQ6IEhlbHBlciRGb3JtZm9ybS5VbnJlYWNoYWJsZSxcbiAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgfTtcbiAgfVxuICBpZiAobmVzdGVkQyQyKSB7XG4gICAgdmFyIG1hdGNoJDYgPSBuZXN0ZWRDJDIuaGQ7XG4gICAgaWYgKG1hdGNoJDYgIT09IDApIHtcbiAgICAgIGlmIChtYXRjaCQ2ID49IDMpIHtcbiAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICBSRV9FWE5fSUQ6IEhlbHBlciRGb3JtZm9ybS5VbnJlYWNoYWJsZSxcbiAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICB9O1xuICAgICAgfVxuICAgICAgdmFyIG1hdGNoJDcgPSBuZXN0ZWRDJDIudGw7XG4gICAgICBpZiAoIW1hdGNoJDcpIHtcbiAgICAgICAgaWYgKHJlRW50cnlQYXIgPT09IC8qIEV2ZW4gKi8wKSB7XG4gICAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgaWYgKG1hdGNoJDcuaGQgIT09IDApIHtcbiAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICBSRV9FWE5fSUQ6IEhlbHBlciRGb3JtZm9ybS5VbnJlYWNoYWJsZSxcbiAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKCFtYXRjaCQ3LnRsKSB7XG4gICAgICAgIHJldHVybiAvKiBVICovMTtcbiAgICAgIH1cbiAgICAgIHRocm93IHtcbiAgICAgICAgICAgIFJFX0VYTl9JRDogSGVscGVyJEZvcm1mb3JtLlVucmVhY2hhYmxlLFxuICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgfTtcbiAgICB9XG4gICAgdmFyIG1hdGNoJDggPSBuZXN0ZWRDJDIudGw7XG4gICAgaWYgKG1hdGNoJDgpIHtcbiAgICAgIGlmICgobWF0Y2gkOC5oZCAtIDEgPj4+IDApID4gMSkge1xuICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgIFJFX0VYTl9JRDogSGVscGVyJEZvcm1mb3JtLlVucmVhY2hhYmxlLFxuICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgIH07XG4gICAgICB9XG4gICAgICB2YXIgbWF0Y2gkOSA9IG1hdGNoJDgudGw7XG4gICAgICBpZiAoIW1hdGNoJDkpIHtcbiAgICAgICAgcmV0dXJuIC8qIEkgKi8yO1xuICAgICAgfVxuICAgICAgaWYgKG1hdGNoJDkuaGQgIT09IDApIHtcbiAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICBSRV9FWE5fSUQ6IEhlbHBlciRGb3JtZm9ybS5VbnJlYWNoYWJsZSxcbiAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKG1hdGNoJDkudGwpIHtcbiAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICBSRV9FWE5fSUQ6IEhlbHBlciRGb3JtZm9ybS5VbnJlYWNoYWJsZSxcbiAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICB9O1xuICAgICAgfVxuICAgICAgaWYgKHJlRW50cnlQYXIgPT09IC8qIEV2ZW4gKi8wKSB7XG4gICAgICAgIHJldHVybiAvKiBJICovMjtcbiAgICAgIH0gZWxzZSB7XG4gICAgICAgIHJldHVybiAvKiBVICovMTtcbiAgICAgIH1cbiAgICB9XG4gICAgdGhyb3cge1xuICAgICAgICAgIFJFX0VYTl9JRDogSGVscGVyJEZvcm1mb3JtLlVucmVhY2hhYmxlLFxuICAgICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgICB9O1xuICB9XG4gIHRocm93IHtcbiAgICAgICAgUkVfRVhOX0lEOiBIZWxwZXIkRm9ybWZvcm0uVW5yZWFjaGFibGUsXG4gICAgICAgIEVycm9yOiBuZXcgRXJyb3IoKVxuICAgICAgfTtcbn1cblxudmFyIHJlY0luc3RyID0gLyogUmVjSW5zdHIgKi8wO1xuXG52YXIgcmVjSWRlbnQgPSAvKiBSZWNJZGVudCAqLzE7XG5cbmV4cG9ydCB7XG4gIHJlY0luc3RyICxcbiAgcmVjSWRlbnQgLFxuICBzaWdUb0pzICxcbiAgc2lnRnJvbUpzICxcbiAgbW5Gcm9tU3RyICxcbiAgc2hvd1NpZyAsXG4gIHNob3dNTiAsXG4gIHNob3dVVHlwZSAsXG4gIGdldFVUeXBlICxcbiAgY2FsY1JFICxcbiAgXG59XG4vKiBIZWxwZXItRm9ybWZvcm0gTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBSZVNjcmlwdCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG5cbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X0lkIGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2JlbHRfSWQuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfU2V0IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2JlbHRfU2V0LmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX29iaiBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9jYW1sX29iai5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9MaXN0IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2JlbHRfTGlzdC5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9BcnJheSBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0FycmF5LmpzXCI7XG5pbXBvcnQgKiBhcyBETkEkRm9ybWZvcm0gZnJvbSBcIi4uL2NhbGMvRE5BLmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBDYWxjJEZvcm1mb3JtIGZyb20gXCIuLi9jYWxjL0NhbGMuYnMuanNcIjtcbmltcG9ydCAqIGFzIFNlcVJFJEZvcm1mb3JtIGZyb20gXCIuLi9jYWxjL1NlcVJFLmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBIZWxwZXIkRm9ybWZvcm0gZnJvbSBcIi4uLy4uL3V0aWxzL0hlbHBlci5icy5qc1wiO1xuXG5mdW5jdGlvbiBtYXJrKGV4cHIpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgIF8wOiBleHByXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGNWYWwoYykge1xuICByZXR1cm4ge1xuICAgICAgICAgIFRBRzogLyogQ1ZhbCAqLzEsXG4gICAgICAgICAgXzA6IGNcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gc2VxUkUoc2lnLCBzZXEpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBUQUc6IC8qIFNlcVJFICovMixcbiAgICAgICAgICBfMDogc2lnLFxuICAgICAgICAgIF8xOiBzZXFcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gdW5jbChsYmwpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBUQUc6IC8qIFVuY2wgKi8zLFxuICAgICAgICAgIF8wOiBsYmxcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZlZhcihsYmwpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBUQUc6IC8qIEZWYXIgKi80LFxuICAgICAgICAgIF8wOiBsYmxcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZkRuYShmZG5hKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgVEFHOiAvKiBGRG5hICovNSxcbiAgICAgICAgICBfMDogZmRuYVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBzaG93Rm9ybShzb3J0Tk1VSU9wdCwgZm9ybSkge1xuICB2YXIgc29ydE5NVUkgPSBzb3J0Tk1VSU9wdCAhPT0gdW5kZWZpbmVkID8gc29ydE5NVUlPcHQgOiBmYWxzZTtcbiAgc3dpdGNoIChmb3JtLlRBRyB8IDApIHtcbiAgICBjYXNlIC8qIE1hcmsgKi8wIDpcbiAgICAgICAgcmV0dXJuIFwiKFwiICsgc2hvd0V4cHIoc29ydE5NVUksIGZvcm0uXzApICsgXCIpXCI7XG4gICAgY2FzZSAvKiBDVmFsICovMSA6XG4gICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LnNob3coZm9ybS5fMCk7XG4gICAgY2FzZSAvKiBTZXFSRSAqLzIgOlxuICAgICAgICByZXR1cm4gXCJ7XCIgKyBzaG93U2VxKHNvcnROTVVJLCBmb3JtLl8xKSArIFwiIFwiICsgU2VxUkUkRm9ybWZvcm0uc2hvd1NpZyhmb3JtLl8wKSArIFwifVwiO1xuICAgIGNhc2UgLyogVW5jbCAqLzMgOlxuICAgICAgICB2YXIgbGJsID0gZm9ybS5fMDtcbiAgICAgICAgcmV0dXJuIFwiL1wiICsgSGVscGVyJEZvcm1mb3JtLmNsZWFuU3RyKGxibCkgKyBcIi9cIjtcbiAgICBjYXNlIC8qIEZWYXIgKi80IDpcbiAgICAgICAgdmFyIGxibCQxID0gZm9ybS5fMDtcbiAgICAgICAgaWYgKGxibCQxLmxlbmd0aCA9PT0gMSkge1xuICAgICAgICAgIHJldHVybiBIZWxwZXIkRm9ybWZvcm0uY2xlYW5TdHIobGJsJDEpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIHJldHVybiBcIlxcXCJcIiArIEhlbHBlciRGb3JtZm9ybS5jbGVhblN0cihsYmwkMSkgKyBcIlxcXCJcIjtcbiAgICAgICAgfVxuICAgIGNhc2UgLyogRkRuYSAqLzUgOlxuICAgICAgICByZXR1cm4gXCJbXCIgKyBzaG93RmRuYShzb3J0Tk1VSSwgZm9ybS5fMCkgKyBcIl1cIjtcbiAgICBcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93RXhwcihzb3J0Tk1VSU9wdCwgZXhwcikge1xuICB2YXIgc29ydE5NVUkgPSBzb3J0Tk1VSU9wdCAhPT0gdW5kZWZpbmVkID8gc29ydE5NVUlPcHQgOiBmYWxzZTtcbiAgcmV0dXJuIGV4cHIubWFwKGZ1bmN0aW9uIChmb3JtKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNob3dGb3JtKHNvcnROTVVJLCBmb3JtKTtcbiAgICAgICAgICAgICAgfSkuam9pbihcIlwiKTtcbn1cblxuZnVuY3Rpb24gc2hvd1NlcShzb3J0Tk1VSU9wdCwgc2VxKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICByZXR1cm4gSGVscGVyJEZvcm1mb3JtLkxpc3RFeHRlbnNpb25zLmpvaW5XaXRoKEJlbHRfTGlzdC5tYXAoc2VxLCAoZnVuY3Rpb24gKGV4cHIpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHNob3dFeHByKHNvcnROTVVJLCBleHByKTtcbiAgICAgICAgICAgICAgICAgIH0pKSwgXCIsXCIpO1xufVxuXG5mdW5jdGlvbiBzaG93RmRuYSgkc3Rhcm9wdCRzdGFyLCBwYXJhbSkge1xuICB2YXIgdmFycyA9IHBhcmFtLnZhcnM7XG4gIHZhciBmb3JtID0gcGFyYW0uZm9ybTtcbiAgdmFyIHNvcnROTVVJID0gJHN0YXJvcHQkc3RhciAhPT0gdW5kZWZpbmVkID8gJHN0YXJvcHQkc3RhciA6IGZhbHNlO1xuICB2YXIgZm9ybVN0cjtcbiAgaWYgKGZvcm0gIT09IHVuZGVmaW5lZCkge1xuICAgIGlmICh2YXJzICE9PSB1bmRlZmluZWQpIHtcbiAgICAgIHZhciB2YXJzU3RyID0gdmFycy5qb2luKFwiLFwiKTtcbiAgICAgIGZvcm1TdHIgPSBzaG93RXhwcihzb3J0Tk1VSSwgZm9ybSkgKyBcIi5bXCIgKyB2YXJzU3RyICsgXCJdXCI7XG4gICAgfSBlbHNlIHtcbiAgICAgIGZvcm1TdHIgPSBzaG93RXhwcihzb3J0Tk1VSSwgZm9ybSk7XG4gICAgfVxuICB9IGVsc2Uge1xuICAgIGZvcm1TdHIgPSBcIlwiO1xuICB9XG4gIHJldHVybiBmb3JtU3RyICsgRE5BJEZvcm1mb3JtLnNob3coc29ydE5NVUksIHVuZGVmaW5lZCwgcGFyYW0uZG5hKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlRXhwcihyZWR1Y2VyRm4sIGluaXQsIGV4cHIpIHtcbiAgcmV0dXJuIEJlbHRfQXJyYXkucmVkdWNlKGV4cHIsIGluaXQsIChmdW5jdGlvbiAocGFyYW0sIHBhcmFtJDEpIHtcbiAgICAgICAgICAgICAgICB2YXIgYWNjID0gQ3VycnkuXzIocmVkdWNlckZuLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgICAgICAgc3dpdGNoIChwYXJhbSQxLlRBRyB8IDApIHtcbiAgICAgICAgICAgICAgICAgIGNhc2UgLyogTWFyayAqLzAgOlxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZWR1Y2VFeHByKHJlZHVjZXJGbiwgYWNjLCBwYXJhbSQxLl8wKTtcbiAgICAgICAgICAgICAgICAgIGNhc2UgLyogU2VxUkUgKi8yIDpcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VxID0gcGFyYW0kMS5fMTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQmVsdF9MaXN0LnJlZHVjZShzZXEsIGFjYywgKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZHVjZUV4cHIocmVkdWNlckZuLCBwYXJhbSwgcGFyYW0kMSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSkpO1xuICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGFjYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gcmVkdWNlKGV4cHIsIHJlZHVjZXJGbiwgaW5pdCkge1xuICByZXR1cm4gcmVkdWNlRXhwcihyZWR1Y2VyRm4sIGluaXQsIGV4cHIpO1xufVxuXG5mdW5jdGlvbiB0b0ZWQVJfZm9ybShmb3JtKSB7XG4gIHN3aXRjaCAoZm9ybS5UQUcgfCAwKSB7XG4gICAgY2FzZSAvKiBNYXJrICovMCA6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgICBfMDogZm9ybS5fMC5tYXAodG9GVkFSX2Zvcm0pXG4gICAgICAgICAgICAgIH07XG4gICAgY2FzZSAvKiBDVmFsICovMSA6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgVEFHOiAvKiBDVmFsICovMSxcbiAgICAgICAgICAgICAgICBfMDogZm9ybS5fMFxuICAgICAgICAgICAgICB9O1xuICAgIGNhc2UgLyogU2VxUkUgKi8yIDpcbiAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFICovMixcbiAgICAgICAgICAgICAgICBfMDogZm9ybS5fMCxcbiAgICAgICAgICAgICAgICBfMTogQmVsdF9MaXN0Lm1hcChmb3JtLl8xLCAoZnVuY3Rpb24gKGV4cHIpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBleHByLm1hcCh0b0ZWQVJfZm9ybSk7XG4gICAgICAgICAgICAgICAgICAgICAgfSkpXG4gICAgICAgICAgICAgIH07XG4gICAgY2FzZSAvKiBVbmNsICovMyA6XG4gICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgVEFHOiAvKiBVbmNsICovMyxcbiAgICAgICAgICAgICAgICBfMDogZm9ybS5fMFxuICAgICAgICAgICAgICB9O1xuICAgIGNhc2UgLyogRkRuYSAqLzUgOlxuICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgIFRBRzogLyogRkRuYSAqLzUsXG4gICAgICAgICAgICAgICAgXzA6IHRvRlZBUl9mZG5hKGZvcm0uXzApXG4gICAgICAgICAgICAgIH07XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gdG9GVkFSX2ZkbmEocGFyYW0pIHtcbiAgdmFyIGZvcm0gPSBwYXJhbS5mb3JtO1xuICB2YXIgZm9ybVZhciA9IGZvcm0gIT09IHVuZGVmaW5lZCA/IGZvcm0ubWFwKHRvRlZBUl9mb3JtKSA6IHVuZGVmaW5lZDtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBkbmE6IHBhcmFtLmRuYSxcbiAgICAgICAgICBmb3JtOiBmb3JtVmFyLFxuICAgICAgICAgIHZhcnM6IHBhcmFtLnZhcnNcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gdG9GVkFSX2V4cHIoZXhwcikge1xuICByZXR1cm4gZXhwci5tYXAodG9GVkFSX2Zvcm0pO1xufVxuXG5mdW5jdGlvbiByZWR1Y2VFeHByJDEocmVkdWNlckZuLCBpbml0LCBleHByKSB7XG4gIHJldHVybiBCZWx0X0FycmF5LnJlZHVjZShleHByLCBpbml0LCAoZnVuY3Rpb24gKHBhcmFtLCBwYXJhbSQxKSB7XG4gICAgICAgICAgICAgICAgdmFyIGFjYyA9IEN1cnJ5Ll8yKHJlZHVjZXJGbiwgcGFyYW0sIHBhcmFtJDEpO1xuICAgICAgICAgICAgICAgIHN3aXRjaCAocGFyYW0kMS5UQUcgfCAwKSB7XG4gICAgICAgICAgICAgICAgICBjYXNlIC8qIE1hcmsgKi8wIDpcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVkdWNlRXhwciQxKHJlZHVjZXJGbiwgYWNjLCBwYXJhbSQxLl8wKTtcbiAgICAgICAgICAgICAgICAgIGNhc2UgLyogU2VxUkUgKi8yIDpcbiAgICAgICAgICAgICAgICAgICAgICB2YXIgc2VxID0gcGFyYW0kMS5fMTtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQmVsdF9MaXN0LnJlZHVjZShzZXEsIGFjYywgKGZ1bmN0aW9uIChwYXJhbSwgcGFyYW0kMSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlZHVjZUV4cHIkMShyZWR1Y2VyRm4sIHBhcmFtLCBwYXJhbSQxKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gYWNjO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiByZWR1Y2UkMShleHByLCByZWR1Y2VyRm4sIGluaXQpIHtcbiAgcmV0dXJuIHJlZHVjZUV4cHIkMShyZWR1Y2VyRm4sIGluaXQsIGV4cHIpO1xufVxuXG5mdW5jdGlvbiBnZXRWYXJzKGV4cHIpIHtcbiAgdmFyIGNtcCA9IENhbWxfb2JqLmNhbWxfY29tcGFyZTtcbiAgdmFyIFZhckNtcCA9IEJlbHRfSWQuTWFrZUNvbXBhcmFibGUoe1xuICAgICAgICBjbXA6IGNtcFxuICAgICAgfSk7XG4gIHZhciBfZ2V0VmFycyA9IGZ1bmN0aW9uICh2YXJzLCBmb3JtKSB7XG4gICAgaWYgKGZvcm0uVEFHID09PSAvKiBGVmFyICovNCkge1xuICAgICAgcmV0dXJuIEJlbHRfU2V0LmFkZCh2YXJzLCBmb3JtLl8wKTtcbiAgICB9IGVsc2Uge1xuICAgICAgcmV0dXJuIHZhcnM7XG4gICAgfVxuICB9O1xuICB2YXIgaW5pdCA9IEJlbHRfU2V0Lm1ha2UoVmFyQ21wKTtcbiAgcmV0dXJuIEJlbHRfU2V0LnRvQXJyYXkocmVkdWNlRXhwciQxKF9nZXRWYXJzLCBpbml0LCBleHByKSk7XG59XG5cbmZ1bmN0aW9uIGNvdW50VmFycyhleHByKSB7XG4gIHZhciBfY291bnRWYXJzID0gZnVuY3Rpb24gKG4sIGZvcm0pIHtcbiAgICBpZiAoZm9ybS5UQUcgPT09IC8qIEZWYXIgKi80KSB7XG4gICAgICByZXR1cm4gbiArIDEgfCAwO1xuICAgIH0gZWxzZSB7XG4gICAgICByZXR1cm4gbjtcbiAgICB9XG4gIH07XG4gIHJldHVybiByZWR1Y2VFeHByJDEoX2NvdW50VmFycywgMCwgZXhwcik7XG59XG5cbmZ1bmN0aW9uIHNob3dTdWJ0cmVlKHN1YnRyZWUpIHtcbiAgaWYgKHN1YnRyZWUuVEFHID09PSAvKiBCcmFuY2ggKi8wKSB7XG4gICAgcmV0dXJuIFwieyBpbmRleDogXCIgKyBzdWJ0cmVlLmluZGV4LmpvaW4oXCJcIikgKyBcIiwgZm9ybTogJ1wiICsgc2hvd0Zvcm0odW5kZWZpbmVkLCBzdWJ0cmVlLmZvcm0pICsgXCInLCBjaGlsZHJlbjogW1wiICsgc3VidHJlZS5jaGlsZHJlbi5tYXAoc2hvd1N1YnRyZWUpLmpvaW4oXCIsIFwiKSArIFwiXSB9XCI7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwieyBpbmRleDogXCIgKyBzdWJ0cmVlLmluZGV4LmpvaW4oXCJcIikgKyBcIiwgZm9ybTogJ1wiICsgc2hvd0Zvcm0odW5kZWZpbmVkLCBzdWJ0cmVlLmZvcm0pICsgXCInIH1cIjtcbiAgfVxufVxuXG5mdW5jdGlvbiBzaG93KHBhcmFtKSB7XG4gIHJldHVybiBcInsgcm9vdCwgZm9ybTogJ1wiICsgc2hvd0V4cHIodW5kZWZpbmVkLCBwYXJhbS5mb3JtKSArIFwiJywgY2hpbGRyZW46IFtcIiArIHBhcmFtLmNoaWxkcmVuLm1hcChzaG93U3VidHJlZSkuam9pbihcIiwgXCIpICsgXCJdIH1cIjtcbn1cblxuZnVuY3Rpb24gcGFyc2VTdWJ0cmVlKGZvcm0sIGluZGV4KSB7XG4gIGlmIChmb3JtLlRBRyA9PT0gLyogTWFyayAqLzApIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgVEFHOiAvKiBCcmFuY2ggKi8wLFxuICAgICAgICAgICAgaW5kZXg6IGluZGV4LFxuICAgICAgICAgICAgZm9ybTogZm9ybSxcbiAgICAgICAgICAgIGNoaWxkcmVuOiBmb3JtLl8wLm1hcChmdW5jdGlvbiAoY250LCBpKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gcGFyc2VTdWJ0cmVlKGNudCwgaW5kZXguY29uY2F0KFtpXSkpO1xuICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgVEFHOiAvKiBMZWFmICovMSxcbiAgICAgICAgICAgIGluZGV4OiBpbmRleCxcbiAgICAgICAgICAgIGZvcm06IGZvcm1cbiAgICAgICAgICB9O1xuICB9XG59XG5cbmZ1bmN0aW9uIHBhcnNlKGV4cHIpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBmb3JtOiBleHByLFxuICAgICAgICAgIGNoaWxkcmVuOiBleHByLm1hcChmdW5jdGlvbiAoY250LCBpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHBhcnNlU3VidHJlZShjbnQsIFtpXSk7XG4gICAgICAgICAgICAgIH0pXG4gICAgICAgIH07XG59XG5cbnZhciB0ZXN0VHJlZXMgPSBbXG4gIHtcbiAgICBmb3JtOiBbXSxcbiAgICBjaGlsZHJlbjogW11cbiAgfSxcbiAge1xuICAgIGZvcm06IFt7XG4gICAgICAgIFRBRzogLyogQ1ZhbCAqLzEsXG4gICAgICAgIF8wOiAvKiBVICovMVxuICAgICAgfV0sXG4gICAgY2hpbGRyZW46IFt7XG4gICAgICAgIFRBRzogLyogTGVhZiAqLzEsXG4gICAgICAgIGluZGV4OiBbMF0sXG4gICAgICAgIGZvcm06IHtcbiAgICAgICAgICBUQUc6IC8qIENWYWwgKi8xLFxuICAgICAgICAgIF8wOiAvKiBVICovMVxuICAgICAgICB9XG4gICAgICB9XVxuICB9LFxuICB7XG4gICAgZm9ybTogW3tcbiAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgXzA6IFtdXG4gICAgICB9XSxcbiAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgVEFHOiAvKiBCcmFuY2ggKi8wLFxuICAgICAgICBpbmRleDogWzBdLFxuICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICBfMDogW11cbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtdXG4gICAgICB9XVxuICB9LFxuICB7XG4gICAgZm9ybTogW3tcbiAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgXzA6IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBUQUc6IC8qIENWYWwgKi8xLFxuICAgICAgICAgICAgXzA6IC8qIE0gKi8zXG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgXzA6IFtdXG4gICAgICAgICAgfVxuICAgICAgICBdXG4gICAgICB9XSxcbiAgICBjaGlsZHJlbjogW3tcbiAgICAgICAgVEFHOiAvKiBCcmFuY2ggKi8wLFxuICAgICAgICBpbmRleDogWzBdLFxuICAgICAgICBmb3JtOiB7XG4gICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICBfMDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBUQUc6IC8qIENWYWwgKi8xLFxuICAgICAgICAgICAgICBfMDogLyogTSAqLzNcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgIF8wOiBbXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfSxcbiAgICAgICAgY2hpbGRyZW46IFtcbiAgICAgICAgICB7XG4gICAgICAgICAgICBUQUc6IC8qIExlYWYgKi8xLFxuICAgICAgICAgICAgaW5kZXg6IFtcbiAgICAgICAgICAgICAgMCxcbiAgICAgICAgICAgICAgMFxuICAgICAgICAgICAgXSxcbiAgICAgICAgICAgIGZvcm06IHtcbiAgICAgICAgICAgICAgVEFHOiAvKiBDVmFsICovMSxcbiAgICAgICAgICAgICAgXzA6IC8qIE0gKi8zXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfSxcbiAgICAgICAgICB7XG4gICAgICAgICAgICBUQUc6IC8qIEJyYW5jaCAqLzAsXG4gICAgICAgICAgICBpbmRleDogW1xuICAgICAgICAgICAgICAwLFxuICAgICAgICAgICAgICAxXG4gICAgICAgICAgICBdLFxuICAgICAgICAgICAgZm9ybToge1xuICAgICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgICBfMDogW11cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICBjaGlsZHJlbjogW11cbiAgICAgICAgICB9XG4gICAgICAgIF1cbiAgICAgIH1dXG4gIH1cbl07XG5cbmZ1bmN0aW9uIGRuYVRvRk9STShkbmEpIHtcbiAgcmV0dXJuIFtdO1xufVxuXG5mdW5jdGlvbiB0b0ZPUk0ocGFyYW0pIHtcbiAgcmV0dXJuIFtdO1xufVxuXG52YXIgRm9ybUROQSA9IHtcbiAgc2hvdzogc2hvd0ZkbmEsXG4gIGRuYVRvRk9STTogZG5hVG9GT1JNLFxuICB0b0ZPUk06IHRvRk9STVxufTtcblxuZnVuY3Rpb24gdG9GT1JNdChzZXEpIHtcbiAgaWYgKCFzZXEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgIF8wOiBbXVxuICAgICAgICAgIH07XG4gIH1cbiAgdmFyIHNlcSRwID0gc2VxLnRsO1xuICB2YXIgZXhwciA9IHNlcS5oZDtcbiAgaWYgKHNlcSRwKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICBfMDogQmVsdF9BcnJheS5jb25jYXQoZXhwciwgW3RvRk9STXQoc2VxJHApXSlcbiAgICAgICAgICB9O1xuICB9IGVsc2Uge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgXzA6IGV4cHJcbiAgICAgICAgICB9O1xuICB9XG59XG5cbnZhciBTZXF1ZW5jZSA9IHtcbiAgc2hvdzogc2hvd1NlcSxcbiAgdG9GT1JNdDogdG9GT1JNdFxufTtcblxudmFyIEZPUk0gPSB7XG4gIG1hcms6IG1hcmssXG4gIGNWYWw6IGNWYWwsXG4gIHNlcVJFOiBzZXFSRSxcbiAgdW5jbDogdW5jbCxcbiAgZlZhcjogZlZhcixcbiAgZkRuYTogZkRuYSxcbiAgc2hvdzogc2hvd0V4cHJcbn07XG5cbnZhciBGQ09OID0ge1xuICByZWR1Y2U6IHJlZHVjZSxcbiAgdG9GVkFSOiB0b0ZWQVJfZXhwclxufTtcblxudmFyIEZWQVIgPSB7XG4gIHJlZHVjZTogcmVkdWNlJDEsXG4gIGdldFZhcnM6IGdldFZhcnMsXG4gIGNvdW50VmFyczogY291bnRWYXJzXG59O1xuXG52YXIgRGVwdGhUcmVlID0ge1xuICBzaG93OiBzaG93LFxuICBwYXJzZTogcGFyc2UsXG4gIHRlc3RUcmVlczogdGVzdFRyZWVzXG59O1xuXG5leHBvcnQge1xuICBGT1JNICxcbiAgRkNPTiAsXG4gIEZWQVIgLFxuICBEZXB0aFRyZWUgLFxuICBGb3JtRE5BICxcbiAgU2VxdWVuY2UgLFxuICBcbn1cbi8qIEROQS1Gb3JtZm9ybSBOb3QgYSBwdXJlIG1vZHVsZSAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IFJlU2NyaXB0LCBQTEVBU0UgRURJVCBXSVRIIENBUkVcblxuXG52YXIgTGV4ZXIgPSB7fTtcblxuZnVuY3Rpb24gcGFyc2UoZm0pIHtcbiAgcmV0dXJuIFtdO1xufVxuXG52YXIgUGFyc2VyID0ge1xuICBwYXJzZTogcGFyc2Vcbn07XG5cbmV4cG9ydCB7XG4gIExleGVyICxcbiAgUGFyc2VyICxcbiAgXG59XG4vKiBObyBzaWRlIGVmZmVjdCAqL1xuIiwiLy8gR2VuZXJhdGVkIGJ5IFJlU2NyaXB0LCBQTEVBU0UgRURJVCBXSVRIIENBUkVcblxuaW1wb3J0ICogYXMgQ3VycnkgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvY3VycnkuanNcIjtcbmltcG9ydCAqIGFzIEpzX2RpY3QgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvanNfZGljdC5qc1wiO1xuaW1wb3J0ICogYXMgSnNfbWF0aCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9qc19tYXRoLmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X0ludCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0ludC5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9MaXN0IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2JlbHRfTGlzdC5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9BcnJheSBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0FycmF5LmpzXCI7XG5pbXBvcnQgKiBhcyBETkEkRm9ybWZvcm0gZnJvbSBcIi4uL2NhbGMvRE5BLmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBDYWxjJEZvcm1mb3JtIGZyb20gXCIuLi9jYWxjL0NhbGMuYnMuanNcIjtcbmltcG9ydCAqIGFzIEpzUmF3JEZvcm1mb3JtIGZyb20gXCIuLi8uLi91dGlscy9Kc1Jhdy5icy5qc1wiO1xuaW1wb3J0ICogYXMgSGVscGVyJEZvcm1mb3JtIGZyb20gXCIuLi8uLi91dGlscy9IZWxwZXIuYnMuanNcIjtcblxuZnVuY3Rpb24gc2hvdyh2cCkge1xuICByZXR1cm4gXCJbXCIgKyBCZWx0X0xpc3QudG9BcnJheShCZWx0X0xpc3QubWFwKHZwLCAoZnVuY3Rpb24gKGMpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gQ2FsYyRGb3JtZm9ybS5Db25zdC5zaG93KGMpO1xuICAgICAgICAgICAgICAgICAgICB9KSkpLmpvaW4oXCIsXCIpICsgXCJdXCI7XG59XG5cbmZ1bmN0aW9uIHNob3dBc0tleSh2cCkge1xuICByZXR1cm4gQmVsdF9MaXN0LnRvQXJyYXkoQmVsdF9MaXN0Lm1hcCh2cCwgKGZ1bmN0aW9uIChjKSB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIENhbGMkRm9ybWZvcm0uQ29uc3Quc2hvd0FzS2V5KGMpO1xuICAgICAgICAgICAgICAgICAgICB9KSkpLmpvaW4oXCJcIik7XG59XG5cbmZ1bmN0aW9uIHRGcm9tU3RyKHNvcnROTVVJT3B0LCBzdHIpIHtcbiAgdmFyIHNvcnROTVVJID0gc29ydE5NVUlPcHQgIT09IHVuZGVmaW5lZCA/IHNvcnROTVVJT3B0IDogZmFsc2U7XG4gIHZhciBtYXliZV92cG9pbnQgPSBzdHIuc3BsaXQoXCJcIikubWFwKGZ1bmN0aW9uICh2YWwpIHtcbiAgICAgICAgdmFyIG4gPSBCZWx0X0ludC5mcm9tU3RyaW5nKHZhbCk7XG4gICAgICAgIGlmIChuICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICByZXR1cm4gQ2FsYyRGb3JtZm9ybS5Db25zdC5mcm9tSW50KHNvcnROTVVJLCBuKTtcbiAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICByZXR1cm4gQ2FsYyRGb3JtZm9ybS5Db25zdC50RnJvbVN0cih2YWwpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgaWYgKG1heWJlX3Zwb2ludC5ldmVyeShmdW5jdGlvbiAodikge1xuICAgICAgICAgIHJldHVybiB2ICE9PSB1bmRlZmluZWQ7XG4gICAgICAgIH0pKSB7XG4gICAgcmV0dXJuIEJlbHRfTGlzdC5mcm9tQXJyYXkobWF5YmVfdnBvaW50Lm1hcChmdW5jdGlvbiAodikge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdjtcbiAgICAgICAgICAgICAgICAgIH0pKTtcbiAgfVxuICBcbn1cblxudmFyIFZQb2ludCA9IHtcbiAgc2hvdzogc2hvdyxcbiAgc2hvd0FzS2V5OiBzaG93QXNLZXksXG4gIHRGcm9tU3RyOiB0RnJvbVN0clxufTtcblxuZnVuY3Rpb24gdG9BcnJheSh2c3BhY2UpIHtcbiAgcmV0dXJuIHZzcGFjZTtcbn1cblxuZnVuY3Rpb24gbWFrZShzb3J0Tk1VSU9wdCwgZGltKSB7XG4gIHZhciBzb3J0Tk1VSSA9IHNvcnROTVVJT3B0ICE9PSB1bmRlZmluZWQgPyBzb3J0Tk1VSU9wdCA6IGZhbHNlO1xuICB2YXIgcmVzb2x1dGlvbiA9IEpzX21hdGguZmxvb3JfaW50KE1hdGgucG93KDQuMCwgZGltKSk7XG4gIHJldHVybiBCZWx0X0FycmF5Lm1ha2VCeShyZXNvbHV0aW9uLCAoZnVuY3Rpb24gKGkpIHtcbiAgICAgICAgICAgICAgICB2YXIgdnBfc3RyID0gSnNSYXckRm9ybWZvcm0ucGFkU3RhcnQoaS50b1N0cmluZyg0KSwgZGltLCBcIjBcIik7XG4gICAgICAgICAgICAgICAgdmFyIHZ2ZWMgPSB0RnJvbVN0cihzb3J0Tk1VSSwgdnBfc3RyKTtcbiAgICAgICAgICAgICAgICBpZiAodnZlYyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgICByZXR1cm4gdnZlYztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgdGhyb3cge1xuICAgICAgICAgICAgICAgICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgfSkpO1xufVxuXG5mdW5jdGlvbiB0b0ROQSh2c3BjLCBtYXApIHtcbiAgcmV0dXJuIEROQSRGb3JtZm9ybS5tYWtlVW5zYWZlKHZzcGMubWFwKEN1cnJ5Ll9fMShtYXApKS5yZXZlcnNlKCkpO1xufVxuXG52YXIgVk1hcCA9IHt9O1xuXG5mdW5jdGlvbiBzaG93JDEodnRhYmxlKSB7XG4gIHJldHVybiBcIlwiO1xufVxuXG5mdW5jdGlvbiBtYWtlRnJvbUROQShkbmEpIHtcbiAgdmFyIGRuYUFyciA9IEROQSRGb3JtZm9ybS50b0FycmF5KGRuYSk7XG4gIHZhciBsZW4gPSBNYXRoLmxvZyhkbmFBcnIubGVuZ3RoKSAvIE1hdGgubG9nKDQuMCk7XG4gIHZhciB2c3BjID0gbWFrZSh1bmRlZmluZWQsIEpzX21hdGguZmxvb3JfaW50KGxlbikpO1xuICByZXR1cm4gSnNfZGljdC5mcm9tQXJyYXkoQmVsdF9BcnJheS56aXBCeSh2c3BjLCBkbmFBcnIucmV2ZXJzZSgpLCAoZnVuY3Rpb24gKHZwLCByZXN1bHQpIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIFtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBzaG93QXNLZXkodnApLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJlc3VsdFxuICAgICAgICAgICAgICAgICAgICAgICAgICBdO1xuICAgICAgICAgICAgICAgICAgfSkpKTtcbn1cblxudmFyIFZUYWJsZSA9IHtcbiAgc2hvdzogc2hvdyQxLFxuICBtYWtlRnJvbUROQTogbWFrZUZyb21ETkFcbn07XG5cbnZhciBWU3BhY2UgPSB7XG4gIHRvQXJyYXk6IHRvQXJyYXksXG4gIG1ha2U6IG1ha2UsXG4gIHRvRE5BOiB0b0ROQVxufTtcblxuZXhwb3J0IHtcbiAgVlBvaW50ICxcbiAgVlNwYWNlICxcbiAgVk1hcCAsXG4gIFZUYWJsZSAsXG4gIFxufVxuLyogRE5BLUZvcm1mb3JtIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgUmVTY3JpcHQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuXG5pbXBvcnQgKiBhcyBDdXJyeSBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9jdXJyeS5qc1wiO1xuaW1wb3J0ICogYXMgSnNfZXhuIGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2pzX2V4bi5qc1wiO1xuaW1wb3J0ICogYXMgQmVsdF9MaXN0IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2JlbHRfTGlzdC5qc1wiO1xuaW1wb3J0ICogYXMgQ2FtbF9hcnJheSBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9jYW1sX2FycmF5LmpzXCI7XG5pbXBvcnQgKiBhcyBIZWxwZXIkRm9ybWZvcm0gZnJvbSBcIi4uLy4uL3V0aWxzL0hlbHBlci5icy5qc1wiO1xuXG5mdW5jdGlvbiBuKCQkdmFyKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICBfMDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFICovMixcbiAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBBbnkgKi8yLFxuICAgICAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJbnN0ciAqLzBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXzE6IHtcbiAgICAgICAgICAgICAgICBoZDogW3tcbiAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgICAgICAgXzA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIEZWYXIgKi80LFxuICAgICAgICAgICAgICAgICAgICAgICAgXzA6ICQkdmFyXG4gICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgIH1dLFxuICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRSAqLzIsXG4gICAgICAgICAgICAgIF8wOiB7XG4gICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogRXZlbiAqLzAsXG4gICAgICAgICAgICAgICAgdW5tYXJrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0luc3RyICovMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBfMToge1xuICAgICAgICAgICAgICAgIGhkOiBbe1xuICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgICAgICAgICBfMDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgICAgICAgICAgICAgICBfMDogJCR2YXJcbiAgICAgICAgICAgICAgICAgICAgICB9XVxuICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBtKCQkdmFyKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICBfMDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFICovMixcbiAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBBbnkgKi8yLFxuICAgICAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJbnN0ciAqLzBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXzE6IHtcbiAgICAgICAgICAgICAgICBoZDogW3tcbiAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBGVmFyICovNCxcbiAgICAgICAgICAgICAgICAgICAgXzA6ICQkdmFyXG4gICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFRBRzogLyogU2VxUkUgKi8yLFxuICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgIHJlRW50cnlQYXI6IC8qIEV2ZW4gKi8wLFxuICAgICAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJbnN0ciAqLzBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgXzE6IHtcbiAgICAgICAgICAgICAgICBoZDogW3tcbiAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBGVmFyICovNCxcbiAgICAgICAgICAgICAgICAgICAgXzA6ICQkdmFyXG4gICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICBdXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIHUoJCR2YXIpIHtcbiAgcmV0dXJuIHtcbiAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgIF8wOiBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgIF8wOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRSAqLzIsXG4gICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBBbnkgKi8yLFxuICAgICAgICAgICAgICAgICAgICB1bm1hcmtlZDogZmFsc2UsXG4gICAgICAgICAgICAgICAgICAgIGludGVycHI6IC8qIFJlY0luc3RyICovMFxuICAgICAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgICAgIF8xOiB7XG4gICAgICAgICAgICAgICAgICAgIGhkOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgICAgICAgICAgIF8wOiBbe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6ICQkdmFyXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgICAgICAgfV0sXG4gICAgICAgICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgICAgICAgICBfMDogJCR2YXJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIF1cbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgIF8wOiBbXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgVEFHOiAvKiBTZXFSRSAqLzIsXG4gICAgICAgICAgICAgICAgICBfMDoge1xuICAgICAgICAgICAgICAgICAgICByZUVudHJ5UGFyOiAvKiBFdmVuICovMCxcbiAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJbnN0ciAqLzBcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBfMToge1xuICAgICAgICAgICAgICAgICAgICBoZDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgICAgICAgICAgICAgICBfMDogJCR2YXJcbiAgICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgICAgIF8wOiBbe1xuICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgICAgICAgICAgICAgXzA6ICQkdmFyXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9XG4gICAgICAgICAgXVxuICAgICAgICB9O1xufVxuXG5mdW5jdGlvbiBpKCQkdmFyKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICBfMDogW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgICBfMDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkUgKi8yLFxuICAgICAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogQW55ICovMixcbiAgICAgICAgICAgICAgICAgICAgdW5tYXJrZWQ6IGZhbHNlLFxuICAgICAgICAgICAgICAgICAgICBpbnRlcnByOiAvKiBSZWNJbnN0ciAqLzBcbiAgICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAgICBfMToge1xuICAgICAgICAgICAgICAgICAgICBoZDogW3tcbiAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgICAgICAgICAgICAgICBfMDogJCR2YXJcbiAgICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgICAgIF8wOiBbe1xuICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogRlZhciAqLzQsXG4gICAgICAgICAgICAgICAgICAgICAgXzA6ICQkdmFyXG4gICAgICAgICAgICAgICAgICAgIH1dXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBdXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgICBfMDogW1xuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgIFRBRzogLyogU2VxUkUgKi8yLFxuICAgICAgICAgICAgICAgICAgXzA6IHtcbiAgICAgICAgICAgICAgICAgICAgcmVFbnRyeVBhcjogLyogRXZlbiAqLzAsXG4gICAgICAgICAgICAgICAgICAgIHVubWFya2VkOiBmYWxzZSxcbiAgICAgICAgICAgICAgICAgICAgaW50ZXJwcjogLyogUmVjSW5zdHIgKi8wXG4gICAgICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICAgICAgXzE6IHtcbiAgICAgICAgICAgICAgICAgICAgaGQ6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgICAgICAgICAgICAgXzA6IFt7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBGVmFyICovNCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDogJCR2YXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfV1cbiAgICAgICAgICAgICAgICAgICAgICB9XSxcbiAgICAgICAgICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgVEFHOiAvKiBGVmFyICovNCxcbiAgICAgICAgICAgICAgICAgIF8wOiAkJHZhclxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgfVxuICAgICAgICAgIF1cbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gZ2V0KGMsICQkdmFyKSB7XG4gIHN3aXRjaCAoYykge1xuICAgIGNhc2UgLyogTiAqLzAgOlxuICAgICAgICByZXR1cm4gbigkJHZhcik7XG4gICAgY2FzZSAvKiBVICovMSA6XG4gICAgICAgIHJldHVybiB1KCQkdmFyKTtcbiAgICBjYXNlIC8qIEkgKi8yIDpcbiAgICAgICAgcmV0dXJuIGkoJCR2YXIpO1xuICAgIGNhc2UgLyogTSAqLzMgOlxuICAgICAgICByZXR1cm4gbSgkJHZhcik7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gZnJvbVZQb2ludCh2YXJzT3B0LCB2cCkge1xuICB2YXIgdmFycyA9IHZhcnNPcHQgIT09IHVuZGVmaW5lZCA/IHZhcnNPcHQgOiBIZWxwZXIkRm9ybWZvcm0uY29tbW9uX3ZhcnM7XG4gIGlmICh2YXJzLmxlbmd0aCA8IEJlbHRfTGlzdC5sZW5ndGgodnApKSB7XG4gICAgdGhyb3cgSnNfZXhuLnJhaXNlUmFuZ2VFcnJvcihcIkluc3VmZmljaWVudCB2YXJpYWJsZXMgaW4gZ2l2ZW4gbGlzdCFcIik7XG4gIH1cbiAgcmV0dXJuIHtcbiAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgIF8wOiBCZWx0X0xpc3QudG9BcnJheShCZWx0X0xpc3QubWFwV2l0aEluZGV4KHZwLCAoZnVuY3Rpb24gKGksIGMpIHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBNYXJrICovMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIF8wOiBbZ2V0KGMsIENhbWxfYXJyYXkuZ2V0KHZhcnMsIGkpKV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgICAgICB9KSkpXG4gICAgICAgIH07XG59XG5cbnZhciBJc29sYXRvciA9IHtcbiAgbjogbixcbiAgbTogbSxcbiAgdTogdSxcbiAgaTogaSxcbiAgZ2V0OiBnZXQsXG4gIGZyb21WUG9pbnQ6IGZyb21WUG9pbnRcbn07XG5cbmZ1bmN0aW9uIGFwcGx5KGZvcm0sIHB0bikge1xuICB2YXIgZm9ybSRwID0gQ3VycnkuXzEocHRuLCBmb3JtKTtcbiAgaWYgKGZvcm0kcCAhPT0gdW5kZWZpbmVkKSB7XG4gICAgcmV0dXJuIGZvcm0kcDtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gZm9ybTtcbiAgfVxufVxuXG52YXIgSW1wbHkgPSB7XG4gIGFwcGx5OiBhcHBseVxufTtcblxuZnVuY3Rpb24gYXBwbHlMKGZvcm0sIHBhcmFtKSB7XG4gIHZhciBmb3JtJHAgPSBDdXJyeS5fMShwYXJhbVswXSwgZm9ybSk7XG4gIGlmIChmb3JtJHAgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmb3JtJHA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZvcm07XG4gIH1cbn1cblxuZnVuY3Rpb24gYXBwbHlSKGZvcm0sIHBhcmFtKSB7XG4gIHZhciBmb3JtJHAgPSBDdXJyeS5fMShwYXJhbVsxXSwgZm9ybSk7XG4gIGlmIChmb3JtJHAgIT09IHVuZGVmaW5lZCkge1xuICAgIHJldHVybiBmb3JtJHA7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIGZvcm07XG4gIH1cbn1cblxudmFyIEVxdWl2ID0ge1xuICBhcHBseUw6IGFwcGx5TCxcbiAgYXBwbHlSOiBhcHBseVJcbn07XG5cbnZhciBQYXR0ZXJuID0ge1xuICBJbXBseTogSW1wbHksXG4gIEVxdWl2OiBFcXVpdlxufTtcblxuZnVuY3Rpb24gcmVmbCRwb3V0KGZvcm0pIHtcbiAgaWYgKGZvcm0ubGVuZ3RoICE9PSAxKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgbWF0Y2ggPSBmb3JtWzBdO1xuICBpZiAobWF0Y2guVEFHICE9PSAvKiBNYXJrICovMCkge1xuICAgIHJldHVybiA7XG4gIH1cbiAgdmFyIG1hdGNoJDEgPSBtYXRjaC5fMDtcbiAgaWYgKG1hdGNoJDEubGVuZ3RoICE9PSAxKSB7XG4gICAgcmV0dXJuIDtcbiAgfVxuICB2YXIgYSA9IG1hdGNoJDFbMF07XG4gIGlmIChhLlRBRyA9PT0gLyogTWFyayAqLzApIHtcbiAgICByZXR1cm4gYS5fMDtcbiAgfVxuICBcbn1cblxuZnVuY3Rpb24gcmVmbCRwaW4oZm9ybSkge1xuICByZXR1cm4gW3tcbiAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICBfMDogW3tcbiAgICAgICAgICAgICAgICBUQUc6IC8qIE1hcmsgKi8wLFxuICAgICAgICAgICAgICAgIF8wOiBmb3JtXG4gICAgICAgICAgICAgIH1dXG4gICAgICAgICAgfV07XG59XG5cbnZhciByZWZsID0gW1xuICByZWZsJHBpbixcbiAgcmVmbCRwb3V0XG5dO1xuXG52YXIgUHJpbUFsZyA9IHtcbiAgcmVmbDogcmVmbFxufTtcblxuZXhwb3J0IHtcbiAgSXNvbGF0b3IgLFxuICBQYXR0ZXJuICxcbiAgUHJpbUFsZyAsXG4gIFxufVxuLyogSGVscGVyLUZvcm1mb3JtIE5vdCBhIHB1cmUgbW9kdWxlICovXG4iLCIvLyBHZW5lcmF0ZWQgYnkgUmVTY3JpcHQsIFBMRUFTRSBFRElUIFdJVEggQ0FSRVxuXG5pbXBvcnQgKiBhcyBKc19kaWN0IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2pzX2RpY3QuanNcIjtcbmltcG9ydCAqIGFzIEJlbHRfTGlzdCBmcm9tIFwicmVzY3JpcHQvbGliL2VzNi9iZWx0X0xpc3QuanNcIjtcbmltcG9ydCAqIGFzIENhbWxfb3B0aW9uIGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2NhbWxfb3B0aW9uLmpzXCI7XG5pbXBvcnQgKiBhcyBETkEkRm9ybWZvcm0gZnJvbSBcIi4uL2NhbGMvRE5BLmJzLmpzXCI7XG5pbXBvcnQgKiBhcyBDYWxjJEZvcm1mb3JtIGZyb20gXCIuLi9jYWxjL0NhbGMuYnMuanNcIjtcbmltcG9ydCAqIGFzIEV4cHIkRm9ybWZvcm0gZnJvbSBcIi4uL2Zvcm0vRXhwci5icy5qc1wiO1xuaW1wb3J0ICogYXMgU2VxUkUkRm9ybWZvcm0gZnJvbSBcIi4uL2NhbGMvU2VxUkUuYnMuanNcIjtcbmltcG9ydCAqIGFzIFZhbHVlJEZvcm1mb3JtIGZyb20gXCIuLi9mb3JtL1ZhbHVlLmJzLmpzXCI7XG5cbmZ1bmN0aW9uIHRvVlBvaW50KGludGVycHIpIHtcbiAgcmV0dXJuIEJlbHRfTGlzdC5mcm9tQXJyYXkoSnNfZGljdC52YWx1ZXMoaW50ZXJwcikpO1xufVxuXG5mdW5jdGlvbiBmcm9tVlBvaW50KHZwLCB2YXJzKSB7XG4gIGlmIChCZWx0X0xpc3QubGVuZ3RoKHZwKSAhPT0gdmFycy5sZW5ndGgpIHtcbiAgICByZXR1cm4gO1xuICB9XG4gIHZhciBpbnRlcnByX2FyciA9IEJlbHRfTGlzdC5tYXBXaXRoSW5kZXgodnAsIChmdW5jdGlvbiAoaSwgYykge1xuICAgICAgICAgIHJldHVybiBbXG4gICAgICAgICAgICAgICAgICB2YXJzW2ldLFxuICAgICAgICAgICAgICAgICAgY1xuICAgICAgICAgICAgICAgIF07XG4gICAgICAgIH0pKTtcbiAgcmV0dXJuIENhbWxfb3B0aW9uLnNvbWUoSnNfZGljdC5mcm9tTGlzdChpbnRlcnByX2FycikpO1xufVxuXG5mdW5jdGlvbiBpbnRlcnByZXRFeHByKGV4cHIsIGludHByKSB7XG4gIHJldHVybiBleHByLm1hcChmdW5jdGlvbiAoZm9ybSkge1xuICAgICAgICAgICAgICBzd2l0Y2ggKGZvcm0uVEFHIHwgMCkge1xuICAgICAgICAgICAgICAgIGNhc2UgLyogTWFyayAqLzAgOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogTWFyayAqLzAsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6IGludGVycHJldEV4cHIoZm9ybS5fMCwgaW50cHIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgY2FzZSAvKiBDVmFsICovMSA6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgVEFHOiAvKiBDVmFsICovMSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDogZm9ybS5fMFxuICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNhc2UgLyogU2VxUkUgKi8yIDpcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIFNlcVJFICovMixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMDogZm9ybS5fMCxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBfMTogaW50ZXJwcmV0U2VxKGZvcm0uXzEsIGludHByKVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNhc2UgLyogVW5jbCAqLzMgOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogVW5jbCAqLzMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6IGZvcm0uXzBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICBjYXNlIC8qIEZWYXIgKi80IDpcbiAgICAgICAgICAgICAgICAgICAgdmFyIG1heWJlVmFsID0gSnNfZGljdC5nZXQoaW50cHIsIGZvcm0uXzApO1xuICAgICAgICAgICAgICAgICAgICBpZiAobWF5YmVWYWwgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBUQUc6IC8qIENWYWwgKi8xLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6IG1heWJlVmFsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB0aHJvdyB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIFJFX0VYTl9JRDogXCJOb3RfZm91bmRcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgRXJyb3I6IG5ldyBFcnJvcigpXG4gICAgICAgICAgICAgICAgICAgICAgICB9O1xuICAgICAgICAgICAgICAgIGNhc2UgLyogRkRuYSAqLzUgOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFRBRzogLyogRkRuYSAqLzUsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgXzA6IGludGVycHJldEZkbmEoZm9ybS5fMCwgaW50cHIpXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xufVxuXG5mdW5jdGlvbiBpbnRlcnByZXRGZG5hKHBhcmFtLCBpbnRwcikge1xuICB2YXIgZm9ybSA9IHBhcmFtLmZvcm07XG4gIHZhciBmb3JtQ29uID0gZm9ybSAhPT0gdW5kZWZpbmVkID8gaW50ZXJwcmV0RXhwcihmb3JtLCBpbnRwcikgOiB1bmRlZmluZWQ7XG4gIHJldHVybiB7XG4gICAgICAgICAgZG5hOiBwYXJhbS5kbmEsXG4gICAgICAgICAgZm9ybTogZm9ybUNvbixcbiAgICAgICAgICB2YXJzOiB1bmRlZmluZWRcbiAgICAgICAgfTtcbn1cblxuZnVuY3Rpb24gaW50ZXJwcmV0U2VxKHNlcSwgaW50cHIpIHtcbiAgcmV0dXJuIEJlbHRfTGlzdC5tYXAoc2VxLCAoZnVuY3Rpb24gKGV4cHIpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gaW50ZXJwcmV0RXhwcihleHByLCBpbnRwcik7XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gZXZhbEZvcm0oZm9ybSkge1xuICBzd2l0Y2ggKGZvcm0uVEFHIHwgMCkge1xuICAgIGNhc2UgLyogTWFyayAqLzAgOlxuICAgICAgICB2YXIgZXhwciA9IGZvcm0uXzA7XG4gICAgICAgIGlmIChleHByLmxlbmd0aCAhPT0gMCkge1xuICAgICAgICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LmludihldmFsRXhwcihleHByKSk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmV0dXJuIC8qIE0gKi8zO1xuICAgICAgICB9XG4gICAgY2FzZSAvKiBDVmFsICovMSA6XG4gICAgICAgIHJldHVybiBmb3JtLl8wO1xuICAgIGNhc2UgLyogU2VxUkUgKi8yIDpcbiAgICAgICAgcmV0dXJuIFNlcVJFJEZvcm1mb3JtLmNhbGNSRShmb3JtLl8wLCBuZXN0ZWRFdmFsKGZvcm0uXzEpKTtcbiAgICBjYXNlIC8qIFVuY2wgKi8zIDpcbiAgICAgICAgcmV0dXJuIC8qIFUgKi8xO1xuICAgIGNhc2UgLyogRkRuYSAqLzUgOlxuICAgICAgICByZXR1cm4gLyogTiAqLzA7XG4gICAgXG4gIH1cbn1cblxuZnVuY3Rpb24gZXZhbEV4cHIoZXhwcikge1xuICByZXR1cm4gZXhwci5yZWR1Y2UoKGZ1bmN0aW9uICh2YWwsIGZvcm0pIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gQ2FsYyRGb3JtZm9ybS5Db25zdC5yZWwodmFsLCBldmFsRm9ybShmb3JtKSk7XG4gICAgICAgICAgICAgIH0pLCAvKiBOICovMCk7XG59XG5cbmZ1bmN0aW9uIG5lc3RlZEV2YWwoc2VxKSB7XG4gIHJldHVybiB7XG4gICAgICAgICAgTkFNRTogXCJOZXN0VG9SXCIsXG4gICAgICAgICAgVkFMOiBCZWx0X0xpc3QubWFwKHNlcSwgZXZhbEV4cHIpXG4gICAgICAgIH07XG59XG5cbmZ1bmN0aW9uIGV2YWxTZXEoc2VxKSB7XG4gIGlmICghc2VxKSB7XG4gICAgcmV0dXJuIC8qIE0gKi8zO1xuICB9XG4gIHZhciBzZXEkcCA9IHNlcS50bDtcbiAgdmFyIGV4cHIgPSBzZXEuaGQ7XG4gIGlmIChzZXEkcCkge1xuICAgIHJldHVybiBDYWxjJEZvcm1mb3JtLkNvbnN0LmludihDYWxjJEZvcm1mb3JtLkNvbnN0LnJlbChldmFsRXhwcihleHByKSwgZXZhbFNlcShzZXEkcCkpKTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gQ2FsYyRGb3JtZm9ybS5Db25zdC5pbnYoZXZhbEV4cHIoZXhwcikpO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludGVyRXZhbChleHByLCBpbnRwcikge1xuICByZXR1cm4gZXZhbEV4cHIoaW50ZXJwcmV0RXhwcihleHByLCBpbnRwcikpO1xufVxuXG5mdW5jdGlvbiBldmFsQWxsKGV4cHIpIHtcbiAgdmFyIHZhcnMgPSBFeHByJEZvcm1mb3JtLkZWQVIuZ2V0VmFycyhleHByKTtcbiAgdmFyIHZudW0gPSB2YXJzLmxlbmd0aDtcbiAgdmFyIHZzcGFjZSA9IFZhbHVlJEZvcm1mb3JtLlZTcGFjZS5tYWtlKHVuZGVmaW5lZCwgdm51bSk7XG4gIHZhciBkbmEgPSBETkEkRm9ybWZvcm0ubWFrZVVuc2FmZShWYWx1ZSRGb3JtZm9ybS5WU3BhY2UudG9BcnJheSh2c3BhY2UpLm1hcChmdW5jdGlvbiAodnBvaW50KSB7XG4gICAgICAgICAgICAgIHZhciBpbnRlcnByID0gZnJvbVZQb2ludCh2cG9pbnQsIHZhcnMpO1xuICAgICAgICAgICAgICBpZiAoaW50ZXJwciAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGV2YWxFeHByKGludGVycHJldEV4cHIoZXhwciwgQ2FtbF9vcHRpb24udmFsRnJvbU9wdGlvbihpbnRlcnByKSkpO1xuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIHRocm93IHtcbiAgICAgICAgICAgICAgICAgICAgUkVfRVhOX0lEOiBcIk5vdF9mb3VuZFwiLFxuICAgICAgICAgICAgICAgICAgICBFcnJvcjogbmV3IEVycm9yKClcbiAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICB9KS5yZXZlcnNlKCkpO1xuICByZXR1cm4ge1xuICAgICAgICAgIGRuYTogZG5hLFxuICAgICAgICAgIGZvcm06IGV4cHIsXG4gICAgICAgICAgdmFyczogdmFyc1xuICAgICAgICB9O1xufVxuXG52YXIgSW50ZXJwciA9IHtcbiAgdG9WUG9pbnQ6IHRvVlBvaW50LFxuICBmcm9tVlBvaW50OiBmcm9tVlBvaW50LFxuICBpbnRlcnByZXQ6IGludGVycHJldEV4cHJcbn07XG5cbnZhciAkJGV2YWwgPSBldmFsRXhwcjtcblxuZXhwb3J0IHtcbiAgSW50ZXJwciAsXG4gICQkZXZhbCAsXG4gIGV2YWxTZXEgLFxuICBpbnRlckV2YWwgLFxuICBldmFsQWxsICxcbiAgXG59XG4vKiBETkEtRm9ybWZvcm0gTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBSZVNjcmlwdCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG5cbmltcG9ydCAqIGFzIEN1cnJ5IGZyb20gXCJyZXNjcmlwdC9saWIvZXM2L2N1cnJ5LmpzXCI7XG5pbXBvcnQgKiBhcyBCZWx0X0xpc3QgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvYmVsdF9MaXN0LmpzXCI7XG5pbXBvcnQgKiBhcyBDYW1sX2V4Y2VwdGlvbnMgZnJvbSBcInJlc2NyaXB0L2xpYi9lczYvY2FtbF9leGNlcHRpb25zLmpzXCI7XG5cbnZhciBVbnJlYWNoYWJsZSA9IC8qIEBfX1BVUkVfXyAqL0NhbWxfZXhjZXB0aW9ucy5jcmVhdGUoXCJIZWxwZXItRm9ybWZvcm0uVW5yZWFjaGFibGVcIik7XG5cbmZ1bmN0aW9uIGNsZWFuU3RyKHN0cikge1xuICByZXR1cm4gc3RyO1xufVxuXG5mdW5jdGlvbiBoYXNEZWNpbWFsKHgpIHtcbiAgcmV0dXJuICh4IHwgMCkgPCB4O1xufVxuXG5mdW5jdGlvbiBzaG93KHBhcml0eSkge1xuICBzd2l0Y2ggKHBhcml0eSkge1xuICAgIGNhc2UgLyogRXZlbiAqLzAgOlxuICAgICAgICByZXR1cm4gXCIyclwiO1xuICAgIGNhc2UgLyogT2RkICovMSA6XG4gICAgICAgIHJldHVybiBcIjJyKzFcIjtcbiAgICBjYXNlIC8qIEFueSAqLzIgOlxuICAgICAgICByZXR1cm4gXCJcIjtcbiAgICBcbiAgfVxufVxuXG52YXIgUGFyaXR5ID0ge1xuICBzaG93OiBzaG93XG59O1xuXG5mdW5jdGlvbiBwcmVwZW5kVG9BbGwobCwgc2VwKSB7XG4gIGlmIChsKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgICAgICAgIGhkOiBzZXAsXG4gICAgICAgICAgICB0bDoge1xuICAgICAgICAgICAgICBoZDogbC5oZCxcbiAgICAgICAgICAgICAgdGw6IHByZXBlbmRUb0FsbChsLnRsLCBzZXApXG4gICAgICAgICAgICB9XG4gICAgICAgICAgfTtcbiAgfSBlbHNlIHtcbiAgICByZXR1cm4gLyogW10gKi8wO1xuICB9XG59XG5cbmZ1bmN0aW9uIGludGVyc3BlcnNlKGwsIHNlcCkge1xuICBpZiAobCkge1xuICAgIHJldHVybiB7XG4gICAgICAgICAgICBoZDogbC5oZCxcbiAgICAgICAgICAgIHRsOiBwcmVwZW5kVG9BbGwobC50bCwgc2VwKVxuICAgICAgICAgIH07XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBpbnRlcmNhbGF0ZShsMSwgbDIpIHtcbiAgcmV0dXJuIEJlbHRfTGlzdC5mbGF0dGVuKGludGVyc3BlcnNlKGwxLCBsMikpO1xufVxuXG5mdW5jdGlvbiBqb2luKGwpIHtcbiAgaWYgKGwpIHtcbiAgICByZXR1cm4gbC5oZCArIGpvaW4obC50bCk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIFwiXCI7XG4gIH1cbn1cblxuZnVuY3Rpb24gam9pbldpdGgobCwgc2VwKSB7XG4gIHJldHVybiBqb2luKGludGVyc3BlcnNlKGwsIHNlcCkpO1xufVxuXG52YXIgTGlzdEV4dGVuc2lvbnMgPSB7XG4gIHByZXBlbmRUb0FsbDogcHJlcGVuZFRvQWxsLFxuICBpbnRlcnNwZXJzZTogaW50ZXJzcGVyc2UsXG4gIGludGVyY2FsYXRlOiBpbnRlcmNhbGF0ZSxcbiAgam9pbjogam9pbixcbiAgam9pbldpdGg6IGpvaW5XaXRoXG59O1xuXG5mdW5jdGlvbiBmbWFwKGwsIGZuKSB7XG4gIGlmIChsKSB7XG4gICAgcmV0dXJuIEJlbHRfTGlzdC5jb25jYXQoQ3VycnkuXzEoZm4sIGwuaGQpLCBmbWFwKGwudGwsIGZuKSk7XG4gIH0gZWxzZSB7XG4gICAgcmV0dXJuIC8qIFtdICovMDtcbiAgfVxufVxuXG5mdW5jdGlvbiBsaWZ0TTIobWYyLCBtYSwgbWIpIHtcbiAgcmV0dXJuIGZtYXAobWEsIChmdW5jdGlvbiAoeDEpIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZm1hcChtYiwgKGZ1bmN0aW9uICh4Mikge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGQ6IEN1cnJ5Ll8yKG1mMiwgeDEsIHgyKSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGw6IC8qIFtdICovMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KSk7XG4gICAgICAgICAgICAgIH0pKTtcbn1cblxuZnVuY3Rpb24gY2FydGVzUHJvZChsLCBkaW0pIHtcbiAgdmFyIGZuID0gZnVuY3Rpb24gKGwsIHNlcSwgbikge1xuICAgIGlmIChuID4gMCkge1xuICAgICAgcmV0dXJuIGZtYXAobCwgKGZ1bmN0aW9uICh4KSB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmbihsLCBCZWx0X0xpc3QuY29uY2F0KHNlcSwge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaGQ6IHgsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0bDogLyogW10gKi8wXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSksIG4gLSAxIHwgMCk7XG4gICAgICAgICAgICAgICAgICB9KSk7XG4gICAgfSBlbHNlIHtcbiAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAgIGhkOiBzZXEsXG4gICAgICAgICAgICAgIHRsOiAvKiBbXSAqLzBcbiAgICAgICAgICAgIH07XG4gICAgfVxuICB9O1xuICByZXR1cm4gZm4obCwgLyogW10gKi8wLCBkaW0pO1xufVxuXG52YXIgTGlzdE1vbmFkcyA9IHtcbiAgZm1hcDogZm1hcCxcbiAgbGlmdE0yOiBsaWZ0TTIsXG4gIGNhcnRlc1Byb2Q6IGNhcnRlc1Byb2Rcbn07XG5cbnZhciBjb21tb25fdmFycyA9IFwiYWJjZGVmZ2hpamtsbW5vcHFyc3R1dnd4eXpcIi5zcGxpdChcIlwiKTtcblxuZXhwb3J0IHtcbiAgVW5yZWFjaGFibGUgLFxuICBjbGVhblN0ciAsXG4gIGhhc0RlY2ltYWwgLFxuICBQYXJpdHkgLFxuICBMaXN0RXh0ZW5zaW9ucyAsXG4gIExpc3RNb25hZHMgLFxuICBjb21tb25fdmFycyAsXG4gIFxufVxuLyogY29tbW9uX3ZhcnMgTm90IGEgcHVyZSBtb2R1bGUgKi9cbiIsIi8vIEdlbmVyYXRlZCBieSBSZVNjcmlwdCwgUExFQVNFIEVESVQgV0lUSCBDQVJFXG5cblxudmFyIHBhZFN0YXJ0ID0gKChzdHIsIG1heExlbmd0aCwgZmlsbFN0cmluZykgPT4gc3RyLnBhZFN0YXJ0KG1heExlbmd0aCwgZmlsbFN0cmluZykpO1xuXG5leHBvcnQge1xuICBwYWRTdGFydCAsXG4gIFxufVxuLyogTm8gc2lkZSBlZmZlY3QgKi9cbiIsIi8vIFRoZSBtb2R1bGUgY2FjaGVcbnZhciBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX18gPSB7fTtcblxuLy8gVGhlIHJlcXVpcmUgZnVuY3Rpb25cbmZ1bmN0aW9uIF9fd2VicGFja19yZXF1aXJlX18obW9kdWxlSWQpIHtcblx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG5cdHZhciBjYWNoZWRNb2R1bGUgPSBfX3dlYnBhY2tfbW9kdWxlX2NhY2hlX19bbW9kdWxlSWRdO1xuXHRpZiAoY2FjaGVkTW9kdWxlICE9PSB1bmRlZmluZWQpIHtcblx0XHRyZXR1cm4gY2FjaGVkTW9kdWxlLmV4cG9ydHM7XG5cdH1cblx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcblx0dmFyIG1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF0gPSB7XG5cdFx0Ly8gbm8gbW9kdWxlLmlkIG5lZWRlZFxuXHRcdC8vIG5vIG1vZHVsZS5sb2FkZWQgbmVlZGVkXG5cdFx0ZXhwb3J0czoge31cblx0fTtcblxuXHQvLyBFeGVjdXRlIHRoZSBtb2R1bGUgZnVuY3Rpb25cblx0X193ZWJwYWNrX21vZHVsZXNfX1ttb2R1bGVJZF0obW9kdWxlLCBtb2R1bGUuZXhwb3J0cywgX193ZWJwYWNrX3JlcXVpcmVfXyk7XG5cblx0Ly8gUmV0dXJuIHRoZSBleHBvcnRzIG9mIHRoZSBtb2R1bGVcblx0cmV0dXJuIG1vZHVsZS5leHBvcnRzO1xufVxuXG4iLCIvLyBkZWZpbmUgZ2V0dGVyIGZ1bmN0aW9ucyBmb3IgaGFybW9ueSBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLmQgPSBmdW5jdGlvbihleHBvcnRzLCBkZWZpbml0aW9uKSB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iaiwgcHJvcCkgeyByZXR1cm4gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG9iaiwgcHJvcCk7IH0iLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImltcG9ydCAqIGFzIENhbGMgZnJvbSAnLi9jb3JlL2NhbGMvQ2FsYy5icy5qcyc7XG5pbXBvcnQgKiBhcyBETkEgZnJvbSAnLi9jb3JlL2NhbGMvRE5BLmJzLmpzJztcbmltcG9ydCAqIGFzIFNlcVJFIGZyb20gJy4vY29yZS9jYWxjL1NlcVJFLmJzLmpzJztcblxuaW1wb3J0ICogYXMgRXhwciBmcm9tICcuL2NvcmUvZm9ybS9FeHByLmJzLmpzJztcbmltcG9ydCAqIGFzIEZvcm11bGEgZnJvbSAnLi9jb3JlL2Zvcm0vRm9ybXVsYS5icy5qcyc7XG5pbXBvcnQgKiBhcyBWYWx1ZSBmcm9tICcuL2NvcmUvZm9ybS9WYWx1ZS5icy5qcyc7XG5cbmltcG9ydCAqIGFzIEFsZyBmcm9tICcuL2NvcmUvbG9naWMvQWxnLmJzLmpzJztcbmltcG9ydCAqIGFzIEV2YWwgZnJvbSAnLi9jb3JlL2xvZ2ljL0V2YWwuYnMuanMnO1xuXG4vLyBpbXBvcnQgKiBhcyBUZXN0IGZyb20gJy4vVGVzdC5icy5qcyc7XG5cbmV4cG9ydCBkZWZhdWx0IHsgQ2FsYywgRE5BLCBTZXFSRSwgIEV4cHIsIEZvcm11bGEsIFZhbHVlLCAgQWxnLCBFdmFsIH07XG4iXSwic291cmNlUm9vdCI6IiJ9