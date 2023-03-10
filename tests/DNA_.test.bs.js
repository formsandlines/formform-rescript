// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Zora from "@dusty-phillips/rescript-zora/src/Zora.bs.js";
import * as Zora$1 from "zora";
import * as Caml_array from "rescript/lib/es6/caml_array.js";
import * as DNA$Formform from "../src/core/calc/DNA.bs.js";
import * as Helper$Formform from "../src/utils/Helper.bs.js";
import * as Caml_js_exceptions from "rescript/lib/es6/caml_js_exceptions.js";

var dnaV0 = [
  DNA$Formform.makeUnsafe([/* N */0]),
  DNA$Formform.makeUnsafe([/* U */1]),
  DNA$Formform.makeUnsafe([/* I */2]),
  DNA$Formform.makeUnsafe([/* M */3])
];

var dnaV1_01_f = "{@_ a}";

var dnaV1_01_nuim = DNA$Formform.makeUnsafe([
      /* M */3,
      /* U */1,
      /* U */1,
      /* I */2
    ]);

var dnaV1_01_nmui = DNA$Formform.makeUnsafe([
      /* U */1,
      /* U */1,
      /* M */3,
      /* I */2
    ]);

var dnaV1_01 = {
  f: dnaV1_01_f,
  nuim: dnaV1_01_nuim,
  nmui: dnaV1_01_nmui
};

var dnaV2_01_f = "((a)b)";

var dnaV2_01_nuim = DNA$Formform.makeUnsafe([
      /* N */0,
      /* U */1,
      /* I */2,
      /* M */3,
      /* N */0,
      /* N */0,
      /* I */2,
      /* I */2,
      /* N */0,
      /* U */1,
      /* N */0,
      /* U */1,
      /* N */0,
      /* N */0,
      /* N */0,
      /* N */0
    ]);

var dnaV2_01_nmui = DNA$Formform.makeUnsafe([
      /* N */0,
      /* I */2,
      /* N */0,
      /* I */2,
      /* U */1,
      /* N */0,
      /* N */0,
      /* U */1,
      /* U */1,
      /* I */2,
      /* N */0,
      /* M */3,
      /* N */0,
      /* N */0,
      /* N */0,
      /* N */0
    ]);

var dnaV2_01 = {
  f: dnaV2_01_f,
  nuim: dnaV2_01_nuim,
  nmui: dnaV2_01_nmui
};

var dnaV3_01_f = "{@ a,b,c}{@ b,c,a}{@ a,c,b}";

var dnaV3_01_nuim = DNA$Formform.makeUnsafe([
      /* N */0,
      /* U */1,
      /* I */2,
      /* M */3,
      /* U */1,
      /* N */0,
      /* M */3,
      /* I */2,
      /* I */2,
      /* M */3,
      /* N */0,
      /* U */1,
      /* M */3,
      /* I */2,
      /* U */1,
      /* N */0,
      /* U */1,
      /* U */1,
      /* M */3,
      /* M */3,
      /* U */1,
      /* I */2,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* U */1,
      /* U */1,
      /* M */3,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* M */3,
      /* I */2,
      /* I */2,
      /* M */3,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* M */3,
      /* I */2,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* I */2
    ]);

var dnaV3_01_nmui = DNA$Formform.makeUnsafe([
      /* I */2,
      /* M */3,
      /* U */1,
      /* M */3,
      /* M */3,
      /* U */1,
      /* M */3,
      /* U */1,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* M */3,
      /* U */1,
      /* M */3,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* M */3,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* I */2,
      /* M */3,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* I */2,
      /* N */0,
      /* M */3,
      /* I */2,
      /* U */1,
      /* M */3,
      /* N */0,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* I */2
    ]);

var dnaV3_01 = {
  f: dnaV3_01_f,
  nuim: dnaV3_01_nuim,
  nmui: dnaV3_01_nmui
};

Zora$1.test("Testing getSize()", (function (t) {
        t.test("given a formDNA", (function (t) {
                var input = Caml_array.get(dnaV0, 0);
                var actual = DNA$Formform.getSize(input);
                t.equal(actual, 0, "should be size 0");
                
              }));
        t.test("given a formDNA", (function (t) {
                var input = dnaV1_01_nuim;
                var actual = DNA$Formform.getSize(input);
                t.equal(actual, 1, "should be size 1");
                
              }));
        t.test("given a formDNA", (function (t) {
                var input = dnaV2_01_nuim;
                var actual = DNA$Formform.getSize(input);
                t.equal(actual, 2, "should be size 2");
                
              }));
        t.test("given a formDNA", (function (t) {
                var input = dnaV3_01_nuim;
                var actual = DNA$Formform.getSize(input);
                t.equal(actual, 3, "should be size 3");
                
              }));
        
      }));

Zora$1.test("Testing isValidLength()", (function (t) {
        t.test("given a length as int", (function (t) {
                var test = DNA$Formform.isValidLength(-4);
                t.notOk(test, "should be power of 4");
                
              }));
        t.test("given a length as int", (function (t) {
                var test = DNA$Formform.isValidLength(0);
                t.notOk(test, "should be power of 4");
                
              }));
        t.test("given a length as int", (function (t) {
                var test = DNA$Formform.isValidLength(1);
                t.ok(test, "should be power of 4");
                
              }));
        t.test("given a length as int", (function (t) {
                var test = DNA$Formform.isValidLength(4);
                t.ok(test, "should be power of 4");
                
              }));
        t.test("given a length as int", (function (t) {
                var test = DNA$Formform.isValidLength(8);
                t.notOk(test, "should be power of 4");
                
              }));
        t.test("given a length as int", (function (t) {
                var test = DNA$Formform.isValidLength(16);
                t.ok(test, "should be power of 4");
                
              }));
        t.test("given a length as int", (function (t) {
                var test = DNA$Formform.isValidLength(64);
                t.ok(test, "should be power of 4");
                
              }));
        
      }));

Zora$1.test("Testing make()", (function (t) {
        t.test("given empty array", (function (t) {
                var input = DNA$Formform.make([]);
                return Zora.optionNone(t, input, "should be None");
              }));
        t.test("given an array of invalid size", (function (t) {
                var input = DNA$Formform.make([
                      /* N */0,
                      /* M */3,
                      /* U */1
                    ]);
                return Zora.optionNone(t, input, "should be None");
              }));
        t.test("given an array of invalid size", (function (t) {
                var input = DNA$Formform.make([
                      /* N */0,
                      /* N */0,
                      /* N */0,
                      /* N */0,
                      /* U */1,
                      /* U */1,
                      /* U */1,
                      /* U */1
                    ]);
                return Zora.optionNone(t, input, "should be None");
              }));
        t.test("given an array of valid size", (function (t) {
                var input = DNA$Formform.make([
                      /* N */0,
                      /* M */3,
                      /* U */1,
                      /* I */2
                    ]);
                var expected = DNA$Formform.makeUnsafe([
                      /* N */0,
                      /* M */3,
                      /* U */1,
                      /* I */2
                    ]);
                return Zora.optionSome(t, input, (function (t, n) {
                              t.equal(n, expected, "should be Some(dna)");
                              
                            }));
              }));
        
      }));

Zora$1.test("Testing reorderToNMUI()", (function (t) {
        t.test("given dna of single value", (function (t) {
                var input = DNA$Formform.makeUnsafe([/* U */1]);
                var actual = DNA$Formform.reorderToNMUI(undefined, input);
                var expected = DNA$Formform.makeUnsafe([/* U */1]);
                t.equal(actual, expected, "should be the same value");
                
              }));
        t.test("given dna of " + "{@_ a}" + " in NUIM ordering", (function (t) {
                var input = dnaV1_01_nuim;
                var actual = DNA$Formform.reorderToNMUI(undefined, input);
                var expected = dnaV1_01_nmui;
                t.equal(actual, expected, "should be dna of " + "{@_ a}" + " in NMUI ordering");
                
              }));
        t.test("given dna of " + "((a)b)" + " in NUIM ordering", (function (t) {
                var input = dnaV2_01_nuim;
                var actual = DNA$Formform.reorderToNMUI(undefined, input);
                var expected = dnaV2_01_nmui;
                t.equal(actual, expected, "should be dna of " + "((a)b)" + " in NMUI ordering");
                
              }));
        t.test("given dna of " + "{@ a,b,c}{@ b,c,a}{@ a,c,b}" + " in NUIM ordering", (function (t) {
                var input = dnaV3_01_nuim;
                var actual = DNA$Formform.reorderToNMUI(undefined, input);
                var expected = dnaV3_01_nmui;
                t.equal(actual, expected, "should be dna of " + "{@ a,b,c}{@ b,c,a}{@ a,c,b}" + " in NMUI ordering");
                
              }));
        
      }));

Zora$1.test("Testing fromIntArr()", (function (t) {
        t.test("given empty array", (function (t) {
                var input = [];
                var actual = DNA$Formform.fromIntArr(undefined, input);
                return Zora.optionNone(t, actual, "should be None");
              }));
        t.test("given dna of single value", (function (t) {
                var input = [1];
                var actual = DNA$Formform.fromIntArr(undefined, input);
                var expected = DNA$Formform.makeUnsafe([/* U */1]);
                t.equal(actual, expected, "should be U (NUIM ordering)");
                
              }));
        t.test("given dna of " + "((a)b)" + " as ints in NUIM ordering", (function (t) {
                var input = [
                  0,
                  1,
                  2,
                  3,
                  0,
                  0,
                  2,
                  2,
                  0,
                  1,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0
                ];
                var actual = DNA$Formform.fromIntArr(undefined, input);
                var expected = dnaV2_01_nuim;
                t.equal(actual, expected, "should be dna of " + "((a)b)" + " in NUIM ordering");
                
              }));
        t.test("given dna of " + "((a)b)" + " as ints in NMUI ordering", (function (t) {
                var input = [
                  0,
                  3,
                  0,
                  3,
                  2,
                  0,
                  0,
                  2,
                  2,
                  3,
                  0,
                  1,
                  0,
                  0,
                  0,
                  0
                ];
                var actual = DNA$Formform.fromIntArr(true, input);
                var expected = dnaV2_01_nuim;
                t.equal(actual, expected, "should be dna of " + "((a)b)" + " in NUIM ordering");
                
              }));
        
      }));

Zora$1.test("Testing fromStrArr()", (function (t) {
        t.test("given empty array", (function (t) {
                var input = [];
                var actual = DNA$Formform.fromStrArr(undefined, input);
                return Zora.optionNone(t, actual, "should be None");
              }));
        t.test("given dna of single value", (function (t) {
                var input = [""];
                var actual = DNA$Formform.fromStrArr(undefined, input);
                var expected = DNA$Formform.makeUnsafe([/* N */0]);
                t.equal(actual, expected, "should be N");
                
              }));
        t.test("given dna of " + "((a)b)" + " as strings", (function (t) {
                var input = [
                  "N",
                  "U",
                  "I",
                  "()",
                  "(())",
                  "N",
                  "i",
                  "(mn)",
                  "N",
                  "mn",
                  "N",
                  "u",
                  ".",
                  "N",
                  "",
                  "N"
                ];
                var actual = DNA$Formform.fromStrArr(undefined, input);
                var expected = dnaV2_01_nuim;
                t.equal(actual, expected, "should be dna of " + "((a)b)" + " in NUIM ordering");
                
              }));
        t.test("given dna of single value", (function (t) {
                var input = [
                  "0",
                  "1",
                  "2",
                  "3"
                ];
                var actual = DNA$Formform.fromStrArr(undefined, input);
                var expected = DNA$Formform.makeUnsafe([
                      /* N */0,
                      /* U */1,
                      /* I */2,
                      /* M */3
                    ]);
                t.equal(actual, expected, "should be NUIM");
                var input$1 = [
                  "2",
                  "3",
                  "0",
                  "1"
                ];
                var actual$1 = DNA$Formform.fromStrArr(true, input$1);
                t.equal(actual$1, expected, "should be NUIM");
                
              }));
        
      }));

Zora$1.test("Testing show()", (function (t) {
        t.test("given dna of single value", (function (t) {
                var input = DNA$Formform.makeUnsafe([/* U */1]);
                var actual = DNA$Formform.show(undefined, undefined, input);
                var expected = "???1";
                t.equal(actual, expected, "should be " + expected);
                
              }));
        t.test("given dna of " + "((a)b)", (function (t) {
                var input = dnaV2_01_nuim;
                var actual = DNA$Formform.show(undefined, undefined, input);
                var expected = "???0123002201010000";
                t.equal(actual, expected, "should be " + expected);
                
              }));
        t.test("given dna of " + "((a)b)", (function (t) {
                var input = dnaV2_01_nuim;
                var actual = DNA$Formform.show(true, true, input);
                var expected = ":: 0303 2002 2301 0000";
                t.equal(actual, expected, "should be spaced number string in NMUI ordering: " + expected);
                
              }));
        t.test("given dna of " + "{@ a,b,c}{@ b,c,a}{@ a,c,b}", (function (t) {
                var input = dnaV3_01_nuim;
                var actual = DNA$Formform.show(undefined, true, input);
                var expected = "??? 0123 1032 2301 3210 1133 1233 3311 3312 2323 3232 2323 3232 3333 3333 3333 3332";
                t.equal(actual, expected, "should be spaced number string: " + expected);
                
              }));
        
      }));

Zora$1.test("Testing raw()", (function (t) {
        t.test("given dna of single value", (function (t) {
                var input = DNA$Formform.makeUnsafe([/* U */1]);
                var actual = DNA$Formform.raw(input);
                var expected = "U";
                t.equal(actual, expected, "should be " + expected);
                
              }));
        t.test("given dna of " + "((a)b)", (function (t) {
                var input = dnaV2_01_nuim;
                var actual = DNA$Formform.raw(input);
                var expected = "NUIMNNIINUNUNNNN";
                t.equal(actual, expected, "should be " + expected);
                
              }));
        
      }));

Zora$1.test("Testing inv()", (function (t) {
        t.test("given dna of single value", (function (t) {
                var input = DNA$Formform.makeUnsafe([/* U */1]);
                var actual = DNA$Formform.inv(input);
                var expected = DNA$Formform.makeUnsafe([/* I */2]);
                t.equal(actual, expected, "should be [I]");
                
              }));
        t.test("given dna of " + "((a)b)", (function (t) {
                var input = dnaV2_01_nuim;
                var actual = DNA$Formform.inv(input);
                var expected = DNA$Formform.makeUnsafe([
                      /* M */3,
                      /* I */2,
                      /* U */1,
                      /* N */0,
                      /* M */3,
                      /* M */3,
                      /* U */1,
                      /* U */1,
                      /* M */3,
                      /* I */2,
                      /* M */3,
                      /* I */2,
                      /* M */3,
                      /* M */3,
                      /* M */3,
                      /* M */3
                    ]);
                t.equal(actual, expected, "should be inversion of input");
                
              }));
        
      }));

Zora$1.test("Testing rel()", (function (t) {
        t.test("given 2 equal singleton dnas", (function (t) {
                var input_a = DNA$Formform.makeUnsafe([/* N */0]);
                var input_b = DNA$Formform.makeUnsafe([/* N */0]);
                var actual = DNA$Formform.rel(input_a, input_b);
                var expected = DNA$Formform.makeUnsafe([/* N */0]);
                t.equal(actual, expected, "should be same as either input");
                
              }));
        t.test("given 2 different singleton dnas", (function (t) {
                var input_a = DNA$Formform.makeUnsafe([/* I */2]);
                var input_b = DNA$Formform.makeUnsafe([/* U */1]);
                var actual = DNA$Formform.rel(input_a, input_b);
                var expected = DNA$Formform.makeUnsafe([/* M */3]);
                t.equal(actual, expected, "should be M");
                
              }));
        t.test("given a singleton and a larger dna", (function (t) {
                var input_a = DNA$Formform.makeUnsafe([/* I */2]);
                var input_b = DNA$Formform.makeUnsafe([
                      /* U */1,
                      /* N */0,
                      /* M */3,
                      /* N */0
                    ]);
                var actual = DNA$Formform.rel(input_a, input_b);
                var expected = DNA$Formform.makeUnsafe([
                      /* M */3,
                      /* N */0,
                      /* M */3,
                      /* N */0
                    ]);
                t.equal(actual, expected, "should be [M,N,M,N]");
                
              }));
        t.test("given a len 3 and a len 2 dna", (function (t) {
                var input_a = DNA$Formform.makeUnsafe([
                      /* N */0,
                      /* M */3,
                      /* N */0,
                      /* U */1,
                      /* N */0,
                      /* N */0,
                      /* N */0,
                      /* N */0,
                      /* U */1,
                      /* I */2,
                      /* U */1,
                      /* I */2,
                      /* M */3,
                      /* I */2,
                      /* U */1,
                      /* N */0
                    ]);
                var input_b = DNA$Formform.makeUnsafe([
                      /* I */2,
                      /* N */0,
                      /* N */0,
                      /* U */1
                    ]);
                var actual = DNA$Formform.rel(input_a, input_b);
                var expected = DNA$Formform.makeUnsafe([
                      /* I */2,
                      /* M */3,
                      /* N */0,
                      /* U */1,
                      /* N */0,
                      /* N */0,
                      /* N */0,
                      /* N */0,
                      /* U */1,
                      /* I */2,
                      /* U */1,
                      /* I */2,
                      /* M */3,
                      /* I */2,
                      /* U */1,
                      /* N */0
                    ]);
                t.equal(actual, expected, "should be [I,M,N,U, N,N,N,N, U,I,U,I, M,I,U,N]");
                
              }));
        t.test("given two dnas of equal length", (function (t) {
                var input_a = DNA$Formform.makeUnsafe([
                      /* N */0,
                      /* M */3,
                      /* N */0,
                      /* U */1
                    ]);
                var input_b = DNA$Formform.makeUnsafe([
                      /* I */2,
                      /* N */0,
                      /* U */1,
                      /* N */0
                    ]);
                var actual = DNA$Formform.rel(input_a, input_b);
                var expected = DNA$Formform.makeUnsafe([
                      /* I */2,
                      /* M */3,
                      /* U */1,
                      /* U */1
                    ]);
                t.equal(actual, expected, "should be [I,M,U,U]");
                
              }));
        t.test("given dna of " + "{@ a,b,c}{@ b,c,a}{@ a,c,b}" + " as input a and " + "((a)b)" + " as input b", (function (t) {
                var input_a = dnaV3_01_nuim;
                var input_b = dnaV2_01_nuim;
                var actual = DNA$Formform.rel(input_a, input_b);
                var expected = DNA$Formform.makeUnsafe([
                      /* N */0,
                      /* U */1,
                      /* I */2,
                      /* M */3,
                      /* U */1,
                      /* N */0,
                      /* M */3,
                      /* I */2,
                      /* I */2,
                      /* M */3,
                      /* N */0,
                      /* U */1,
                      /* M */3,
                      /* I */2,
                      /* U */1,
                      /* N */0,
                      /* U */1,
                      /* U */1,
                      /* M */3,
                      /* M */3,
                      /* U */1,
                      /* I */2,
                      /* M */3,
                      /* M */3,
                      /* M */3,
                      /* M */3,
                      /* U */1,
                      /* U */1,
                      /* M */3,
                      /* M */3,
                      /* U */1,
                      /* I */2,
                      /* I */2,
                      /* M */3,
                      /* I */2,
                      /* M */3,
                      /* M */3,
                      /* I */2,
                      /* M */3,
                      /* I */2,
                      /* I */2,
                      /* M */3,
                      /* I */2,
                      /* M */3,
                      /* M */3,
                      /* I */2,
                      /* M */3,
                      /* I */2,
                      /* M */3,
                      /* M */3,
                      /* M */3,
                      /* M */3,
                      /* M */3,
                      /* M */3,
                      /* M */3,
                      /* M */3,
                      /* M */3,
                      /* M */3,
                      /* M */3,
                      /* M */3,
                      /* M */3,
                      /* M */3,
                      /* M */3,
                      /* I */2
                    ]);
                t.equal(actual, expected, "should be the relation of dna b with the first n values of dna a, where n is the size of dna b");
                
              }));
        
      }));

var dnaPerm_samples = [
  {
    input: DNA$Formform.makeUnsafe([/* U */1]),
    perms: [[
        [],
        DNA$Formform.makeUnsafe([/* U */1])
      ]]
  },
  {
    input: DNA$Formform.makeUnsafe([
          /* M */3,
          /* U */1,
          /* U */1,
          /* I */2
        ]),
    perms: [[
        [0],
        DNA$Formform.makeUnsafe([
              /* M */3,
              /* U */1,
              /* U */1,
              /* I */2
            ])
      ]]
  },
  {
    input: DNA$Formform.makeUnsafe([
          /* N */0,
          /* U */1,
          /* I */2,
          /* M */3,
          /* N */0,
          /* N */0,
          /* I */2,
          /* I */2,
          /* N */0,
          /* U */1,
          /* N */0,
          /* U */1,
          /* N */0,
          /* N */0,
          /* N */0,
          /* N */0
        ]),
    perms: [
      [
        [
          0,
          1
        ],
        DNA$Formform.makeUnsafe([
              /* N */0,
              /* U */1,
              /* I */2,
              /* M */3,
              /* N */0,
              /* N */0,
              /* I */2,
              /* I */2,
              /* N */0,
              /* U */1,
              /* N */0,
              /* U */1,
              /* N */0,
              /* N */0,
              /* N */0,
              /* N */0
            ])
      ],
      [
        [
          1,
          0
        ],
        DNA$Formform.makeUnsafe([
              /* N */0,
              /* N */0,
              /* N */0,
              /* N */0,
              /* U */1,
              /* N */0,
              /* U */1,
              /* N */0,
              /* I */2,
              /* I */2,
              /* N */0,
              /* N */0,
              /* M */3,
              /* I */2,
              /* U */1,
              /* N */0
            ])
      ]
    ]
  },
  {
    input: DNA$Formform.makeUnsafe([
          /* N */0,
          /* U */1,
          /* I */2,
          /* M */3,
          /* U */1,
          /* N */0,
          /* M */3,
          /* I */2,
          /* I */2,
          /* M */3,
          /* N */0,
          /* U */1,
          /* M */3,
          /* I */2,
          /* U */1,
          /* N */0,
          /* U */1,
          /* U */1,
          /* M */3,
          /* M */3,
          /* U */1,
          /* I */2,
          /* M */3,
          /* M */3,
          /* M */3,
          /* M */3,
          /* U */1,
          /* U */1,
          /* M */3,
          /* M */3,
          /* U */1,
          /* I */2,
          /* I */2,
          /* M */3,
          /* I */2,
          /* M */3,
          /* M */3,
          /* I */2,
          /* M */3,
          /* I */2,
          /* I */2,
          /* M */3,
          /* I */2,
          /* M */3,
          /* M */3,
          /* I */2,
          /* M */3,
          /* I */2,
          /* M */3,
          /* M */3,
          /* M */3,
          /* M */3,
          /* M */3,
          /* M */3,
          /* M */3,
          /* M */3,
          /* M */3,
          /* M */3,
          /* M */3,
          /* M */3,
          /* M */3,
          /* M */3,
          /* M */3,
          /* I */2
        ]),
    perms: [
      [
        [
          0,
          1,
          2
        ],
        DNA$Formform.makeUnsafe([
              /* N */0,
              /* U */1,
              /* I */2,
              /* M */3,
              /* U */1,
              /* N */0,
              /* M */3,
              /* I */2,
              /* I */2,
              /* M */3,
              /* N */0,
              /* U */1,
              /* M */3,
              /* I */2,
              /* U */1,
              /* N */0,
              /* U */1,
              /* U */1,
              /* M */3,
              /* M */3,
              /* U */1,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* U */1,
              /* U */1,
              /* M */3,
              /* M */3,
              /* U */1,
              /* I */2,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* I */2
            ])
      ],
      [
        [
          2,
          1,
          0
        ],
        DNA$Formform.makeUnsafe([
              /* N */0,
              /* U */1,
              /* I */2,
              /* M */3,
              /* U */1,
              /* U */1,
              /* M */3,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* U */1,
              /* U */1,
              /* M */3,
              /* M */3,
              /* N */0,
              /* I */2,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* N */0,
              /* U */1,
              /* I */2,
              /* M */3,
              /* U */1,
              /* U */1,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* U */1,
              /* U */1,
              /* M */3,
              /* M */3,
              /* N */0,
              /* I */2,
              /* I */2,
              /* I */2
            ])
      ],
      [
        [
          1,
          2,
          0
        ],
        DNA$Formform.makeUnsafe([
              /* N */0,
              /* U */1,
              /* I */2,
              /* M */3,
              /* U */1,
              /* U */1,
              /* M */3,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* U */1,
              /* U */1,
              /* M */3,
              /* M */3,
              /* N */0,
              /* I */2,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* N */0,
              /* U */1,
              /* I */2,
              /* M */3,
              /* U */1,
              /* U */1,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* U */1,
              /* U */1,
              /* M */3,
              /* M */3,
              /* N */0,
              /* I */2,
              /* I */2,
              /* I */2
            ])
      ],
      [
        [
          0,
          2,
          1
        ],
        DNA$Formform.makeUnsafe([
              /* N */0,
              /* U */1,
              /* I */2,
              /* M */3,
              /* U */1,
              /* N */0,
              /* M */3,
              /* I */2,
              /* I */2,
              /* M */3,
              /* N */0,
              /* U */1,
              /* M */3,
              /* I */2,
              /* U */1,
              /* N */0,
              /* U */1,
              /* U */1,
              /* M */3,
              /* M */3,
              /* U */1,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* U */1,
              /* U */1,
              /* M */3,
              /* M */3,
              /* U */1,
              /* I */2,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* I */2
            ])
      ],
      [
        [
          2,
          0,
          1
        ],
        DNA$Formform.makeUnsafe([
              /* N */0,
              /* U */1,
              /* I */2,
              /* M */3,
              /* U */1,
              /* U */1,
              /* M */3,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* U */1,
              /* N */0,
              /* M */3,
              /* I */2,
              /* U */1,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* I */2,
              /* M */3,
              /* N */0,
              /* U */1,
              /* M */3,
              /* M */3,
              /* U */1,
              /* U */1,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* I */2,
              /* U */1,
              /* N */0,
              /* M */3,
              /* M */3,
              /* U */1,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* I */2
            ])
      ],
      [
        [
          1,
          0,
          2
        ],
        DNA$Formform.makeUnsafe([
              /* N */0,
              /* U */1,
              /* I */2,
              /* M */3,
              /* U */1,
              /* U */1,
              /* M */3,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* U */1,
              /* N */0,
              /* M */3,
              /* I */2,
              /* U */1,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* I */2,
              /* M */3,
              /* N */0,
              /* U */1,
              /* M */3,
              /* M */3,
              /* U */1,
              /* U */1,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* M */3,
              /* I */2,
              /* U */1,
              /* N */0,
              /* M */3,
              /* M */3,
              /* U */1,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* I */2,
              /* M */3,
              /* M */3,
              /* M */3,
              /* I */2
            ])
      ]
    ]
  }
];

Zora$1.test("Testing Perspective.make", (function (t) {
        dnaPerm_samples.forEach(function (sample) {
              t.test("given dna and an int array", (function (t) {
                      var dna = sample.input;
                      sample.perms.forEach(function (param) {
                            var permOrder = param[0];
                            try {
                              var actual = DNA$Formform.Perspective.permute(dna, permOrder);
                              var expected = DNA$Formform.Perspective.makeUnsafe(permOrder, param[1]);
                              return Zora.optionSome(t, actual, (function (t, psp) {
                                            console.log(psp.permOrder, DNA$Formform.show(undefined, undefined, psp.dna));
                                            t.equal(psp, expected, "should be identical to input dna");
                                            
                                          }));
                            }
                            catch (raw_msg){
                              var msg = Caml_js_exceptions.internalToOCamlException(raw_msg);
                              if (msg.RE_EXN_ID === Helper$Formform.IndexExc) {
                                var match = msg._1;
                                var msg$1 = match[0];
                                console.log(msg$1, match[1]);
                                t.fail(msg$1);
                                return ;
                              }
                              if (msg.RE_EXN_ID === Helper$Formform.Debug) {
                                var msg$2 = msg._1;
                                console.log(msg$2);
                                t.fail(msg$2);
                                return ;
                              }
                              console.log(msg);
                              t.fail("Unknown Error!");
                              return ;
                            }
                          });
                      
                    }));
              
            });
        
      }));

export {
  dnaV0 ,
  dnaV1_01 ,
  dnaV2_01 ,
  dnaV3_01 ,
  dnaPerm_samples ,
  
}
/* dnaV0 Not a pure module */
