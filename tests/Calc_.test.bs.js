// Generated by ReScript, PLEASE EDIT WITH CARE

import * as Calc from "../src/lib/core-next/Calc/Calc.bs.js";
import * as Zora from "zora";

Zora.test("Testing toInt()", (function (t) {
        t.test("given [const] array in NMUI ordering", (function (t) {
                var input = [
                  /* N */0,
                  /* M */3,
                  /* U */1,
                  /* I */2
                ];
                var actual = input.map(function (c) {
                      return Calc.Const.toInt(true, c);
                    });
                var expected = [
                  0,
                  1,
                  2,
                  3
                ];
                t.equal(actual, expected, "should be int array with corresponding NMUI indices");
                
              }));
        t.test("given [const] array in NUIM ordering", (function (t) {
                var input = [
                  /* N */0,
                  /* U */1,
                  /* I */2,
                  /* M */3
                ];
                var actual = input.map(function (c) {
                      return Calc.Const.toInt(undefined, c);
                    });
                var expected = [
                  0,
                  1,
                  2,
                  3
                ];
                t.equal(actual, expected, "should be int array with corresponding NUIM indices");
                
              }));
        
      }));

Zora.test("Testing fromInt()", (function (t) {
        t.test("given int array in NMUI ordering", (function (t) {
                var input = [
                  0,
                  1,
                  2,
                  3
                ];
                var actual = input.map(function (c) {
                      return Calc.Const.fromInt(true, c);
                    });
                var expected = [
                  /* N */0,
                  /* M */3,
                  /* U */1,
                  /* I */2
                ];
                t.equal(actual, expected, "should be [const] array with corresponding NMUI symbols");
                
              }));
        t.test("given int array in NUIM ordering", (function (t) {
                var input = [
                  0,
                  1,
                  2,
                  3
                ];
                var actual = input.map(function (c) {
                      return Calc.Const.fromInt(undefined, c);
                    });
                var expected = [
                  /* N */0,
                  /* U */1,
                  /* I */2,
                  /* M */3
                ];
                t.equal(actual, expected, "should be [const] array with corresponding NUIM symbols");
                
              }));
        
      }));

Zora.test("Testing inv() and rel()", (function (t) {
        var input = [
          [
            /* N */0,
            /* N */0
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
            /* N */0,
            /* M */3
          ],
          [
            /* U */1,
            /* N */0
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
            /* U */1,
            /* M */3
          ],
          [
            /* I */2,
            /* N */0
          ],
          [
            /* I */2,
            /* U */1
          ],
          [
            /* I */2,
            /* I */2
          ],
          [
            /* I */2,
            /* M */3
          ],
          [
            /* M */3,
            /* N */0
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
            /* M */3,
            /* M */3
          ]
        ];
        t.test("should be OR relation according to calculus", (function (t) {
                var actual = input.map(function (param) {
                      return Calc.Const.rel(param[0], param[1]);
                    });
                var expected = [
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
                  /* M */3
                ];
                t.equal(actual, expected, "should be binary relation");
                
              }));
        t.test("should be AND relation according to calculus", (function (t) {
                var actual = input.map(function (param) {
                      return Calc.Const.inv(Calc.Const.rel(Calc.Const.inv(param[0]), Calc.Const.inv(param[1])));
                    });
                var expected = [
                  /* N */0,
                  /* N */0,
                  /* N */0,
                  /* N */0,
                  /* N */0,
                  /* U */1,
                  /* N */0,
                  /* U */1,
                  /* N */0,
                  /* N */0,
                  /* I */2,
                  /* I */2,
                  /* N */0,
                  /* U */1,
                  /* I */2,
                  /* M */3
                ];
                t.equal(actual, expected, "should be binary conjunction");
                
              }));
        
      }));

Zora.test("Testing Nested.show()", (function (t) {
        t.test("given #NestToL(…)", (function (t) {
                var actual = Calc.Nested.show({
                      NAME: "NestToL",
                      VAL: {
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
                      }
                    });
                var expected = "((((" + Calc.Const.show(/* N */0) + ")" + Calc.Const.show(/* U */1) + ")" + Calc.Const.show(/* I */2) + ")" + Calc.Const.show(/* M */3) + ")";
                t.equal(actual, expected, "should be ((((N)U)I)M)");
                
              }));
        t.test("given #NestToR(…)", (function (t) {
                var actual = Calc.Nested.show({
                      NAME: "NestToR",
                      VAL: {
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
                      }
                    });
                var expected = "(" + Calc.Const.show(/* N */0) + "(" + Calc.Const.show(/* U */1) + "(" + Calc.Const.show(/* I */2) + "(" + Calc.Const.show(/* M */3) + "))))";
                t.equal(actual, expected, "should be (N(U(I(M))))");
                
              }));
        
      }));

Zora.test("Testing Nested.reduceByCrossing()", (function (t) {
        t.test("given #NestToL(…)", (function (t) {
                var actual = Calc.Nested.reduceByCrossingL({
                      NAME: "NestToL",
                      VAL: {
                        hd: /* N */0,
                        tl: {
                          hd: /* N */0,
                          tl: {
                            hd: /* I */2,
                            tl: {
                              hd: /* N */0,
                              tl: {
                                hd: /* N */0,
                                tl: {
                                  hd: /* M */3,
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
                    });
                t.equal(actual, {
                      NAME: "NestToL",
                      VAL: {
                        hd: /* I */2,
                        tl: {
                          hd: /* M */3,
                          tl: /* [] */0
                        }
                      }
                    }, "should be input without N,N sequence");
                
              }));
        t.test("given #NestToR(…)", (function (t) {
                var actual = Calc.Nested.reduceByCrossingR({
                      NAME: "NestToR",
                      VAL: {
                        hd: /* N */0,
                        tl: {
                          hd: /* N */0,
                          tl: {
                            hd: /* I */2,
                            tl: {
                              hd: /* N */0,
                              tl: {
                                hd: /* N */0,
                                tl: {
                                  hd: /* M */3,
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
                    });
                t.equal(actual, {
                      NAME: "NestToR",
                      VAL: {
                        hd: /* I */2,
                        tl: {
                          hd: /* M */3,
                          tl: /* [] */0
                        }
                      }
                    }, "should be input without N,N sequence");
                
              }));
        
      }));

Zora.test("Testing Nested.reduceByCalling()", (function (t) {
        t.test("given #NestToL(…)", (function (t) {
                var actual = Calc.Nested.reduceByCallingL({
                      NAME: "NestToL",
                      VAL: {
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
                      }
                    });
                t.equal(actual, {
                      NAME: "NestToL",
                      VAL: {
                        hd: /* M */3,
                        tl: {
                          hd: /* I */2,
                          tl: /* [] */0
                        }
                      }
                    }, "should be input reduced be law of calling from right");
                
              }));
        t.test("given #NestToR(…)", (function (t) {
                var actual = Calc.Nested.reduceByCallingR({
                      NAME: "NestToR",
                      VAL: {
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
                      }
                    });
                t.equal(actual, {
                      NAME: "NestToR",
                      VAL: {
                        hd: /* N */0,
                        tl: {
                          hd: /* M */3,
                          tl: /* [] */0
                        }
                      }
                    }, "should be input reduced be law of calling from left");
                
              }));
        
      }));

Zora.test("Testing Nested.calc()", (function (t) {
        t.test("given #NestToL(…)", (function (t) {
                var actual = Calc.Nested.calcL({
                      NAME: "NestToL",
                      VAL: {
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
                      }
                    });
                t.equal(actual, /* U */1, "should be U");
                
              }));
        t.test("given #NestToR(…)", (function (t) {
                var actual = Calc.Nested.calcR({
                      NAME: "NestToR",
                      VAL: {
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
                      }
                    });
                t.equal(actual, /* M */3, "should be M");
                
              }));
        
      }));

export {
  
}
/*  Not a pure module */
