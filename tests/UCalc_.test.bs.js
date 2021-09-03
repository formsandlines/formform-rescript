// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Calc from "../src/lib/core-next/Calc/Calc.bs.js";
import * as Zora from "zora";
import * as UCalc from "../src/lib/core-next/Calc/UCalc.bs.js";

var valSpc1 = [
  /* N */0,
  /* M */3,
  /* U */1,
  /* I */2
];

var valSpc2 = [
  [
    /* N */0,
    /* N */0
  ],
  [
    /* N */0,
    /* M */3
  ],
  [
    /* N */0,
    /* U */1
  ],
  [
    /* N */0,
    /* I */2
  ],
  [
    /* M */3,
    /* N */0
  ],
  [
    /* M */3,
    /* M */3
  ],
  [
    /* M */3,
    /* U */1
  ],
  [
    /* M */3,
    /* I */2
  ],
  [
    /* U */1,
    /* N */0
  ],
  [
    /* U */1,
    /* M */3
  ],
  [
    /* U */1,
    /* U */1
  ],
  [
    /* U */1,
    /* I */2
  ],
  [
    /* I */2,
    /* N */0
  ],
  [
    /* I */2,
    /* M */3
  ],
  [
    /* I */2,
    /* U */1
  ],
  [
    /* I */2,
    /* I */2
  ]
];

var valSpc3 = [
  [
    /* N */0,
    /* N */0,
    /* N */0
  ],
  [
    /* N */0,
    /* N */0,
    /* M */3
  ],
  [
    /* N */0,
    /* N */0,
    /* U */1
  ],
  [
    /* N */0,
    /* N */0,
    /* I */2
  ],
  [
    /* N */0,
    /* M */3,
    /* N */0
  ],
  [
    /* N */0,
    /* M */3,
    /* M */3
  ],
  [
    /* N */0,
    /* M */3,
    /* U */1
  ],
  [
    /* N */0,
    /* M */3,
    /* I */2
  ],
  [
    /* N */0,
    /* U */1,
    /* N */0
  ],
  [
    /* N */0,
    /* U */1,
    /* M */3
  ],
  [
    /* N */0,
    /* U */1,
    /* U */1
  ],
  [
    /* N */0,
    /* U */1,
    /* I */2
  ],
  [
    /* N */0,
    /* I */2,
    /* N */0
  ],
  [
    /* N */0,
    /* I */2,
    /* M */3
  ],
  [
    /* N */0,
    /* I */2,
    /* U */1
  ],
  [
    /* N */0,
    /* I */2,
    /* I */2
  ],
  [
    /* M */3,
    /* N */0,
    /* N */0
  ],
  [
    /* M */3,
    /* N */0,
    /* M */3
  ],
  [
    /* M */3,
    /* N */0,
    /* U */1
  ],
  [
    /* M */3,
    /* N */0,
    /* I */2
  ],
  [
    /* M */3,
    /* M */3,
    /* N */0
  ],
  [
    /* M */3,
    /* M */3,
    /* M */3
  ],
  [
    /* M */3,
    /* M */3,
    /* U */1
  ],
  [
    /* M */3,
    /* M */3,
    /* I */2
  ],
  [
    /* M */3,
    /* U */1,
    /* N */0
  ],
  [
    /* M */3,
    /* U */1,
    /* M */3
  ],
  [
    /* M */3,
    /* U */1,
    /* U */1
  ],
  [
    /* M */3,
    /* U */1,
    /* I */2
  ],
  [
    /* M */3,
    /* I */2,
    /* N */0
  ],
  [
    /* M */3,
    /* I */2,
    /* M */3
  ],
  [
    /* M */3,
    /* I */2,
    /* U */1
  ],
  [
    /* M */3,
    /* I */2,
    /* I */2
  ],
  [
    /* U */1,
    /* N */0,
    /* N */0
  ],
  [
    /* U */1,
    /* N */0,
    /* M */3
  ],
  [
    /* U */1,
    /* N */0,
    /* U */1
  ],
  [
    /* U */1,
    /* N */0,
    /* I */2
  ],
  [
    /* U */1,
    /* M */3,
    /* N */0
  ],
  [
    /* U */1,
    /* M */3,
    /* M */3
  ],
  [
    /* U */1,
    /* M */3,
    /* U */1
  ],
  [
    /* U */1,
    /* M */3,
    /* I */2
  ],
  [
    /* U */1,
    /* U */1,
    /* N */0
  ],
  [
    /* U */1,
    /* U */1,
    /* M */3
  ],
  [
    /* U */1,
    /* U */1,
    /* U */1
  ],
  [
    /* U */1,
    /* U */1,
    /* I */2
  ],
  [
    /* U */1,
    /* I */2,
    /* N */0
  ],
  [
    /* U */1,
    /* I */2,
    /* M */3
  ],
  [
    /* U */1,
    /* I */2,
    /* U */1
  ],
  [
    /* U */1,
    /* I */2,
    /* I */2
  ],
  [
    /* I */2,
    /* N */0,
    /* N */0
  ],
  [
    /* I */2,
    /* N */0,
    /* M */3
  ],
  [
    /* I */2,
    /* N */0,
    /* U */1
  ],
  [
    /* I */2,
    /* N */0,
    /* I */2
  ],
  [
    /* I */2,
    /* M */3,
    /* N */0
  ],
  [
    /* I */2,
    /* M */3,
    /* M */3
  ],
  [
    /* I */2,
    /* M */3,
    /* U */1
  ],
  [
    /* I */2,
    /* M */3,
    /* I */2
  ],
  [
    /* I */2,
    /* U */1,
    /* N */0
  ],
  [
    /* I */2,
    /* U */1,
    /* M */3
  ],
  [
    /* I */2,
    /* U */1,
    /* U */1
  ],
  [
    /* I */2,
    /* U */1,
    /* I */2
  ],
  [
    /* I */2,
    /* I */2,
    /* N */0
  ],
  [
    /* I */2,
    /* I */2,
    /* M */3
  ],
  [
    /* I */2,
    /* I */2,
    /* U */1
  ],
  [
    /* I */2,
    /* I */2,
    /* I */2
  ]
];

var seqREV1 = [
  {
    f: "{@ a}",
    sign: {
      reEntryPar: /* Any */2,
      unmarked: false,
      interpr: /* RecInstr */0
    },
    results: [
      /* I */2,
      /* N */0,
      /* I */2,
      /* I */2
    ]
  },
  {
    f: "{..@ a}",
    sign: {
      reEntryPar: /* Even */0,
      unmarked: false,
      interpr: /* RecInstr */0
    },
    results: [
      /* U */1,
      /* N */0,
      /* U */1,
      /* U */1
    ]
  },
  {
    f: "{..@. a}",
    sign: {
      reEntryPar: /* Odd */1,
      unmarked: false,
      interpr: /* RecInstr */0
    },
    results: [
      /* I */2,
      /* N */0,
      /* I */2,
      /* I */2
    ]
  },
  {
    f: "{@_ a}",
    sign: {
      reEntryPar: /* Any */2,
      unmarked: true,
      interpr: /* RecInstr */0
    },
    results: [
      /* I */2,
      /* M */3,
      /* U */1,
      /* U */1
    ]
  },
  {
    f: "{..@_ a}",
    sign: {
      reEntryPar: /* Even */0,
      unmarked: true,
      interpr: /* RecInstr */0
    },
    results: [
      /* U */1,
      /* M */3,
      /* I */2,
      /* I */2
    ]
  },
  {
    f: "{..@._ a}",
    sign: {
      reEntryPar: /* Odd */1,
      unmarked: true,
      interpr: /* RecInstr */0
    },
    results: [
      /* I */2,
      /* M */3,
      /* U */1,
      /* U */1
    ]
  },
  {
    f: "{alt|@ a}",
    sign: {
      reEntryPar: /* Any */2,
      unmarked: false,
      interpr: /* RecIdent */1
    },
    results: [
      /* I */2,
      /* N */0,
      /* I */2,
      /* I */2
    ]
  },
  {
    f: "{alt|.@ a}",
    sign: {
      reEntryPar: /* Even */0,
      unmarked: false,
      interpr: /* RecIdent */1
    },
    results: [
      /* U */1,
      /* N */0,
      /* U */1,
      /* U */1
    ]
  },
  {
    f: "{alt|..@. a}",
    sign: {
      reEntryPar: /* Odd */1,
      unmarked: false,
      interpr: /* RecIdent */1
    },
    results: [
      /* I */2,
      /* N */0,
      /* I */2,
      /* I */2
    ]
  },
  {
    f: "{alt|@_ a}",
    sign: {
      reEntryPar: /* Any */2,
      unmarked: true,
      interpr: /* RecIdent */1
    },
    results: [
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2
    ]
  },
  {
    f: "{alt|..@_ a}",
    sign: {
      reEntryPar: /* Even */0,
      unmarked: true,
      interpr: /* RecIdent */1
    },
    results: [
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3
    ]
  },
  {
    f: "{alt|..@._ a}",
    sign: {
      reEntryPar: /* Odd */1,
      unmarked: true,
      interpr: /* RecIdent */1
    },
    results: [
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2
    ]
  }
];

Zora.test("Testing UCalc.calc with 1 val", (function (t) {
        seqREV1.forEach(function (input) {
              t.test("given value space for " + input.f, (function (t) {
                      var actual = valSpc1.map(function (a) {
                            return UCalc.calc(input.sign, {
                                        NAME: "NestToR",
                                        VAL: {
                                          hd: a,
                                          tl: /* [] */0
                                        }
                                      });
                          });
                      var expected = input.results;
                      t.equal(actual, expected, "should be according to " + input.f + " results");
                      
                    }));
              
            });
        
      }));

var seqREV2 = [
  {
    f: "{@ a,b}",
    sign: {
      reEntryPar: /* Any */2,
      unmarked: false,
      interpr: /* RecInstr */0
    },
    results: [
      /* U */1,
      /* N */0,
      /* U */1,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* I */2,
      /* N */0,
      /* U */1,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* U */1
    ]
  },
  {
    f: "{..@ a,b}",
    sign: {
      reEntryPar: /* Even */0,
      unmarked: false,
      interpr: /* RecInstr */0
    },
    results: [
      /* U */1,
      /* N */0,
      /* U */1,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* I */2,
      /* N */0,
      /* U */1,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* U */1
    ]
  },
  {
    f: "{..@. a,b}",
    sign: {
      reEntryPar: /* Odd */1,
      unmarked: false,
      interpr: /* RecInstr */0
    },
    results: [
      /* U */1,
      /* N */0,
      /* U */1,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* I */2,
      /* N */0,
      /* U */1,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* U */1
    ]
  },
  {
    f: "{@_ a,b}",
    sign: {
      reEntryPar: /* Any */2,
      unmarked: true,
      interpr: /* RecInstr */0
    },
    results: [
      /* I */2,
      /* M */3,
      /* U */1,
      /* U */1,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* U */1
    ]
  },
  {
    f: "{..@_ a,b}",
    sign: {
      reEntryPar: /* Even */0,
      unmarked: true,
      interpr: /* RecInstr */0
    },
    results: [
      /* I */2,
      /* M */3,
      /* U */1,
      /* U */1,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* U */1
    ]
  },
  {
    f: "{..@._ a,b}",
    sign: {
      reEntryPar: /* Odd */1,
      unmarked: true,
      interpr: /* RecInstr */0
    },
    results: [
      /* I */2,
      /* M */3,
      /* U */1,
      /* U */1,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* U */1
    ]
  },
  {
    f: "{alt|@ a,b}",
    sign: {
      reEntryPar: /* Any */2,
      unmarked: false,
      interpr: /* RecIdent */1
    },
    results: [
      /* U */1,
      /* N */0,
      /* U */1,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* U */1,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1
    ]
  },
  {
    f: "{alt|..@ a,b}",
    sign: {
      reEntryPar: /* Even */0,
      unmarked: false,
      interpr: /* RecIdent */1
    },
    results: [
      /* U */1,
      /* N */0,
      /* U */1,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* U */1,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1
    ]
  },
  {
    f: "{alt|..@. a,b}",
    sign: {
      reEntryPar: /* Odd */1,
      unmarked: false,
      interpr: /* RecIdent */1
    },
    results: [
      /* U */1,
      /* N */0,
      /* U */1,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* U */1,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1
    ]
  },
  {
    f: "{alt|@_ a,b}",
    sign: {
      reEntryPar: /* Any */2,
      unmarked: true,
      interpr: /* RecIdent */1
    },
    results: [
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* I */2
    ]
  },
  {
    f: "{alt|..@_ a,b}",
    sign: {
      reEntryPar: /* Even */0,
      unmarked: true,
      interpr: /* RecIdent */1
    },
    results: [
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* I */2
    ]
  },
  {
    f: "{alt|..@._ a,b}",
    sign: {
      reEntryPar: /* Odd */1,
      unmarked: true,
      interpr: /* RecIdent */1
    },
    results: [
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* I */2
    ]
  }
];

Zora.test("Testing UCalc.calc with 2 vals", (function (t) {
        seqREV2.forEach(function (input) {
              t.test("given value space for " + input.f, (function (t) {
                      var actual = valSpc2.map(function (param) {
                            return UCalc.calc(input.sign, {
                                        NAME: "NestToR",
                                        VAL: {
                                          hd: param[1],
                                          tl: {
                                            hd: param[0],
                                            tl: /* [] */0
                                          }
                                        }
                                      });
                          });
                      var expected = input.results;
                      t.equal(actual, expected, "should be according to " + input.f + " results");
                      
                    }));
              
            });
        
      }));

var seqREV3 = [
  {
    f: "{@ a,b,c}",
    sign: {
      reEntryPar: /* Any */2,
      unmarked: false,
      interpr: /* RecInstr */0
    },
    results: [
      /* I */2,
      /* N */0,
      /* I */2,
      /* I */2,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* I */2,
      /* I */2,
      /* N */0,
      /* N */0,
      /* N */0,
      /* N */0,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* N */0,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* I */2,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* N */0,
      /* I */2,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* N */0,
      /* U */1,
      /* U */1,
      /* N */0,
      /* I */2,
      /* I */2
    ]
  },
  {
    f: "{..@ a,b,c}",
    sign: {
      reEntryPar: /* Even */0,
      unmarked: false,
      interpr: /* RecInstr */0
    },
    results: [
      /* U */1,
      /* N */0,
      /* U */1,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* I */2,
      /* N */0,
      /* U */1,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* U */1,
      /* N */0,
      /* N */0,
      /* N */0,
      /* N */0,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* N */0,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* U */1,
      /* N */0,
      /* U */1,
      /* N */0,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* I */2,
      /* N */0,
      /* U */1,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* U */1,
      /* N */0,
      /* N */0,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* N */0,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* U */1
    ]
  },
  {
    f: "{..@. a,b,c}",
    sign: {
      reEntryPar: /* Odd */1,
      unmarked: false,
      interpr: /* RecInstr */0
    },
    results: [
      /* I */2,
      /* N */0,
      /* I */2,
      /* I */2,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* I */2,
      /* I */2,
      /* N */0,
      /* N */0,
      /* N */0,
      /* N */0,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* N */0,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* I */2,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* N */0,
      /* I */2,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* N */0,
      /* U */1,
      /* U */1,
      /* N */0,
      /* I */2,
      /* I */2
    ]
  },
  {
    f: "{@_ a,b,c}",
    sign: {
      reEntryPar: /* Any */2,
      unmarked: true,
      interpr: /* RecInstr */0
    },
    results: [
      /* I */2,
      /* M */3,
      /* U */1,
      /* U */1,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* U */1,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* M */3,
      /* U */1,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* U */1
    ]
  },
  {
    f: "{..@_ a,b,c}",
    sign: {
      reEntryPar: /* Even */0,
      unmarked: true,
      interpr: /* RecInstr */0
    },
    results: [
      /* U */1,
      /* M */3,
      /* I */2,
      /* I */2,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* U */1,
      /* M */3,
      /* I */2,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* I */2,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* I */2,
      /* M */3,
      /* I */2,
      /* M */3,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* U */1,
      /* M */3,
      /* I */2,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* I */2
    ]
  },
  {
    f: "{..@._ a,b,c}",
    sign: {
      reEntryPar: /* Odd */1,
      unmarked: true,
      interpr: /* RecInstr */0
    },
    results: [
      /* I */2,
      /* M */3,
      /* U */1,
      /* U */1,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* U */1,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* M */3,
      /* U */1,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* U */1
    ]
  },
  {
    f: "{alt|@ a,b,c}",
    sign: {
      reEntryPar: /* Any */2,
      unmarked: false,
      interpr: /* RecIdent */1
    },
    results: [
      /* I */2,
      /* N */0,
      /* I */2,
      /* I */2,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* I */2,
      /* N */0,
      /* N */0,
      /* N */0,
      /* N */0,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* N */0,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* N */0,
      /* I */2,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* N */0,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* I */2
    ]
  },
  {
    f: "{alt|..@ a,b,c}",
    sign: {
      reEntryPar: /* Even */0,
      unmarked: false,
      interpr: /* RecIdent */1
    },
    results: [
      /* U */1,
      /* N */0,
      /* U */1,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* U */1,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* N */0,
      /* N */0,
      /* N */0,
      /* N */0,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* N */0,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* U */1,
      /* N */0,
      /* U */1,
      /* N */0,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* U */1,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* U */1,
      /* N */0,
      /* N */0,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* N */0,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1
    ]
  },
  {
    f: "{alt|..@. a,b,c}",
    sign: {
      reEntryPar: /* Odd */1,
      unmarked: false,
      interpr: /* RecIdent */1
    },
    results: [
      /* I */2,
      /* N */0,
      /* I */2,
      /* I */2,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* I */2,
      /* N */0,
      /* N */0,
      /* N */0,
      /* N */0,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* N */0,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* I */2,
      /* N */0,
      /* N */0,
      /* I */2,
      /* M */3,
      /* N */0,
      /* I */2,
      /* U */1,
      /* U */1,
      /* N */0,
      /* N */0,
      /* U */1,
      /* I */2,
      /* N */0,
      /* I */2,
      /* I */2
    ]
  },
  {
    f: "{alt|@_ a,b,c}",
    sign: {
      reEntryPar: /* Any */2,
      unmarked: true,
      interpr: /* RecIdent */1
    },
    results: [
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* I */2,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* I */2
    ]
  },
  {
    f: "{alt|..@_ a,b,c}",
    sign: {
      reEntryPar: /* Even */0,
      unmarked: true,
      interpr: /* RecIdent */1
    },
    results: [
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3
    ]
  },
  {
    f: "{alt|..@._ a,b,c}",
    sign: {
      reEntryPar: /* Odd */1,
      unmarked: true,
      interpr: /* RecIdent */1
    },
    results: [
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* I */2,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* M */3,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* U */1,
      /* M */3,
      /* U */1,
      /* M */3,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* N */0,
      /* M */3,
      /* U */1,
      /* I */2,
      /* I */2,
      /* M */3,
      /* M */3,
      /* I */2,
      /* I */2,
      /* M */3,
      /* U */1,
      /* I */2
    ]
  }
];

Zora.test("Testing UCalc.calc with 3 vals", (function (t) {
        seqREV3.forEach(function (input) {
              t.test("given value space for " + input.f, (function (t) {
                      var actual = valSpc3.map(function (param) {
                            return UCalc.calc(input.sign, {
                                        NAME: "NestToR",
                                        VAL: {
                                          hd: param[2],
                                          tl: {
                                            hd: param[1],
                                            tl: {
                                              hd: param[0],
                                              tl: /* [] */0
                                            }
                                          }
                                        }
                                      });
                          });
                      var expected = input.results;
                      t.equal(actual, expected, "should be according to " + input.f + " results");
                      
                    }));
              
            });
        
      }));

var seqRE_empty = [
  [
    {
      reEntryPar: /* Any */2,
      unmarked: false,
      interpr: /* RecInstr */0
    },
    /* I */2
  ],
  [
    {
      reEntryPar: /* Even */0,
      unmarked: false,
      interpr: /* RecInstr */0
    },
    /* U */1
  ],
  [
    {
      reEntryPar: /* Odd */1,
      unmarked: false,
      interpr: /* RecInstr */0
    },
    /* I */2
  ],
  [
    {
      reEntryPar: /* Any */2,
      unmarked: true,
      interpr: /* RecInstr */0
    },
    /* I */2
  ],
  [
    {
      reEntryPar: /* Even */0,
      unmarked: true,
      interpr: /* RecInstr */0
    },
    /* U */1
  ],
  [
    {
      reEntryPar: /* Odd */1,
      unmarked: true,
      interpr: /* RecInstr */0
    },
    /* I */2
  ],
  [
    {
      reEntryPar: /* Any */2,
      unmarked: false,
      interpr: /* RecIdent */1
    },
    /* I */2
  ],
  [
    {
      reEntryPar: /* Even */0,
      unmarked: false,
      interpr: /* RecIdent */1
    },
    /* U */1
  ],
  [
    {
      reEntryPar: /* Odd */1,
      unmarked: false,
      interpr: /* RecIdent */1
    },
    /* I */2
  ],
  [
    {
      reEntryPar: /* Any */2,
      unmarked: true,
      interpr: /* RecIdent */1
    },
    /* I */2
  ],
  [
    {
      reEntryPar: /* Even */0,
      unmarked: true,
      interpr: /* RecIdent */1
    },
    /* U */1
  ],
  [
    {
      reEntryPar: /* Odd */1,
      unmarked: true,
      interpr: /* RecIdent */1
    },
    /* I */2
  ]
];

Zora.test("Testing empty list cases", (function (t) {
        seqRE_empty.forEach(function (param) {
              var result = param[1];
              var sign = param[0];
              t.test("given empty list", (function (t) {
                      var actual = UCalc.calc(sign, {
                            NAME: "NestToR",
                            VAL: /* [] */0
                          });
                      t.equal(actual, result, "should be " + Calc.Const.showAsKey(result));
                      
                    }));
              
            });
        
      }));

Zora.test("Testing UCalc.calc with >= 4 vals and some edge cases", (function (t) {
        t.test("given arbitrary nested values", (function (t) {
                var actual = UCalc.calc({
                      reEntryPar: /* Odd */1,
                      unmarked: false,
                      interpr: /* RecInstr */0
                    }, {
                      NAME: "NestToR",
                      VAL: {
                        hd: /* U */1,
                        tl: {
                          hd: /* U */1,
                          tl: {
                            hd: /* N */0,
                            tl: {
                              hd: /* N */0,
                              tl: /* [] */0
                            }
                          }
                        }
                      }
                    });
                t.equal(actual, /* U */1, "should be " + Calc.Const.showAsKey(/* U */1));
                
              }));
        t.test("given arbitrary nested values", (function (t) {
                var actual = UCalc.calc({
                      reEntryPar: /* Even */0,
                      unmarked: true,
                      interpr: /* RecInstr */0
                    }, {
                      NAME: "NestToR",
                      VAL: {
                        hd: /* N */0,
                        tl: {
                          hd: /* U */1,
                          tl: {
                            hd: /* N */0,
                            tl: {
                              hd: /* N */0,
                              tl: {
                                hd: /* U */1,
                                tl: /* [] */0
                              }
                            }
                          }
                        }
                      }
                    });
                t.equal(actual, /* U */1, "should be " + Calc.Const.showAsKey(/* U */1));
                
              }));
        t.test("given arbitrary nested values", (function (t) {
                var actual = UCalc.calc({
                      reEntryPar: /* Any */2,
                      unmarked: false,
                      interpr: /* RecInstr */0
                    }, {
                      NAME: "NestToR",
                      VAL: {
                        hd: /* I */2,
                        tl: {
                          hd: /* N */0,
                          tl: {
                            hd: /* I */2,
                            tl: {
                              hd: /* N */0,
                              tl: {
                                hd: /* N */0,
                                tl: {
                                  hd: /* N */0,
                                  tl: {
                                    hd: /* I */2,
                                    tl: /* [] */0
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    });
                t.equal(actual, /* I */2, "should be " + Calc.Const.showAsKey(/* I */2));
                
              }));
        t.test("given arbitrary nested values", (function (t) {
                var actual = UCalc.calc({
                      reEntryPar: /* Even */0,
                      unmarked: true,
                      interpr: /* RecInstr */0
                    }, {
                      NAME: "NestToR",
                      VAL: {
                        hd: /* N */0,
                        tl: {
                          hd: /* N */0,
                          tl: {
                            hd: /* N */0,
                            tl: {
                              hd: /* N */0,
                              tl: {
                                hd: /* N */0,
                                tl: {
                                  hd: /* N */0,
                                  tl: {
                                    hd: /* N */0,
                                    tl: {
                                      hd: /* N */0,
                                      tl: {
                                        hd: /* N */0,
                                        tl: {
                                          hd: /* N */0,
                                          tl: /* [] */0
                                        }
                                      }
                                    }
                                  }
                                }
                              }
                            }
                          }
                        }
                      }
                    });
                t.equal(actual, /* I */2, "should be " + Calc.Const.showAsKey(/* I */2));
                
              }));
        
      }));

export {
  valSpc1 ,
  valSpc2 ,
  valSpc3 ,
  seqREV1 ,
  seqREV2 ,
  seqREV3 ,
  seqRE_empty ,
  
}
/*  Not a pure module */
