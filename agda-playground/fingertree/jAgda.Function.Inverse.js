define(["exports","jAgda.Function.Bijection","jAgda.Function.Equality","jAgda.Function.LeftInverse","jAgda.Function.Surjection"],function(exports,jAgda_Function_Bijection,jAgda_Function_Equality,jAgda_Function_LeftInverse,jAgda_Function_Surjection) {
  exports["Inverse"] = {};
  exports["_InverseOf_"] = {};
  exports["Inverse"]["_100@201915682"] = {};
  exports["Inverse"]["_100@201915682"]["right-inverse"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Function_Bijection["Bijection"]["_102@179060475"]["right-inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Inverse"]["bijection"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["zip"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return function (x20) {
                                              return function (x21) {
                                                return function (x22) {
                                                  return exports["Inverse"]["record"](x18(exports["Inverse"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x21))(exports["Inverse"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x22)))(x19(exports["Inverse"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x21))(exports["Inverse"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x22)))(x20(exports["Inverse"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x21))(exports["Inverse"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x21))(exports["Inverse"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x22))(exports["Inverse"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x22))(exports["Inverse"]["inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x21))(exports["Inverse"]["inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x22)));
                                                };
                                              };
                                            };
                                          };
                                        };
                                      };
                                    };
                                  };
                                };
                              };
                            };
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_InverseOf_"]["left-inverse-of"] = function (x0) {
      return x0["left-inverse-of"];
    };
  exports["Inverse"]["left-inverse"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return jAgda_Function_LeftInverse["LeftInverse"]["record"](exports["Inverse"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0))(exports["Inverse"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0))(exports["Inverse"]["_84@201915682"]["left-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Inverse"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return {
            "from": x1,
            "inverse-of": x2,
            "record": function (x3) {
              return x3["record"](x0, x1, x2);
            },
            "to": x0
          };
        };
      };
    };
  exports["_InverseOf_"]["record"] = function (x0) {
      return function (x1) {
        return {
          "left-inverse-of": x0,
          "record": function (x2) {
            return x2["record"](x0, x1);
          },
          "right-inverse-of": x1
        };
      };
    };
  exports["_InverseOf_"]["right-inverse-of"] = function (x0) {
      return x0["right-inverse-of"];
    };
  exports["map"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return exports["Inverse"]["record"](x12(exports["Inverse"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x15)))(x13(exports["Inverse"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x15)))(x14(exports["Inverse"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x15))(exports["Inverse"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x15))(exports["Inverse"]["inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x15)));
                                  };
                                };
                              };
                            };
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Inverse"]["_100@201915682"]["surjection"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Function_Bijection["Bijection"]["surjection"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Inverse"]["bijection"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["id"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Inverse"]["record"](jAgda_Function_Equality["id"](x0)(x1)(x2))(jAgda_Function_Equality["id"](x0)(x1)(x2))(exports["_InverseOf_"]["record"](jAgda_Function_LeftInverse["LeftInverse"]["left-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_308@201915682"]["id′"](x0)(x1)(x2)))(jAgda_Function_LeftInverse["LeftInverse"]["left-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_308@201915682"]["id′"](x0)(x1)(x2))));
        };
      };
    };
  exports["Inverse"]["_92@201915682"] = {};
  exports["Inverse"]["_92@201915682"]["injection"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Function_LeftInverse["LeftInverse"]["injection"](x0)(x1)(x2)(x3)(x4)(x5)(exports["Inverse"]["left-inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["Inverse"]["to"] = function (x0) {
      return x0["to"];
    };
  exports["Inverse"]["_100@201915682"]["surjective"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Function_Bijection["Bijection"]["_86@179060475"]["surjective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Inverse"]["bijection"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["Inverse"]["from"] = function (x0) {
      return x0["from"];
    };
  exports["Inverse"]["_92@201915682"]["injective"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Function_LeftInverse["LeftInverse"]["injective"](x0)(x1)(x2)(x3)(x4)(x5)(exports["Inverse"]["left-inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["Inverse"]["_100@201915682"]["to-from"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Function_Bijection["Bijection"]["_112@179060475"]["to-from"](x0)(x1)(x2)(x3)(x4)(x5)(exports["Inverse"]["bijection"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["Inverse"]["inverse-of"] = function (x0) {
      return x0["inverse-of"];
    };
  exports["Inverse"]["bijection"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Function_Bijection["Bijection"]["record"](exports["Inverse"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(jAgda_Function_Bijection["Bijective"]["record"](exports["Inverse"]["_92@201915682"]["injective"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(jAgda_Function_Surjection["Surjective"]["record"](exports["Inverse"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(exports["Inverse"]["_84@201915682"]["right-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))));
                };
              };
            };
          };
        };
      };
    };
  exports["_↔̇_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["_∘_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return exports["Inverse"]["record"](jAgda_Function_Equality["_∘_"](x0)(x1)(x6)(x2)(x3)(x7)(x4)(x5)(x8)(exports["Inverse"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(exports["Inverse"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10)))(jAgda_Function_Equality["_∘_"](x4)(x5)(x8)(x2)(x3)(x7)(x0)(x1)(x6)(exports["Inverse"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10))(exports["Inverse"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)))(exports["_InverseOf_"]["record"](jAgda_Function_LeftInverse["LeftInverse"]["left-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Function_LeftInverse["_∘_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["Inverse"]["left-inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(exports["Inverse"]["left-inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10))))(jAgda_Function_LeftInverse["LeftInverse"]["left-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Function_LeftInverse["_∘_"](x4)(x5)(x2)(x3)(x0)(x1)(x8)(x7)(x6)(exports["Inverse"]["_100@201915682"]["right-inverse"](x0)(x1)(x2)(x3)(x6)(x7)(x10))(exports["Inverse"]["_100@201915682"]["right-inverse"](x2)(x3)(x4)(x5)(x7)(x8)(x9)))));
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["sym"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["Inverse"]["record"](exports["Inverse"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(exports["Inverse"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(exports["_InverseOf_"]["record"](exports["Inverse"]["_84@201915682"]["right-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(exports["Inverse"]["_84@201915682"]["left-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)));
                };
              };
            };
          };
        };
      };
    };
  exports["Inverse"]["_84@201915682"] = {};
  exports["Inverse"]["_84@201915682"]["left-inverse-of"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["_InverseOf_"]["left-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Inverse"]["inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Inverse"]["_100@201915682"]["equivalence"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Function_Bijection["Bijection"]["_102@179060475"]["equivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Inverse"]["bijection"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["_↔_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["_308@201915682"] = {};
  exports["_308@201915682"]["id′"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Function_LeftInverse["id"](x0)(x1)(x2);
        };
      };
    };
  exports["Inverse"]["_100@201915682"]["to-from"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Function_Bijection["Bijection"]["_102@179060475"]["to-from"](x0)(x1)(x2)(x3)(x4)(x5)(exports["Inverse"]["bijection"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["fromBijection"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["Inverse"]["record"](jAgda_Function_Bijection["Bijection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(jAgda_Function_Bijection["Bijection"]["_86@179060475"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(exports["_InverseOf_"]["record"](jAgda_Function_Bijection["Bijection"]["_86@179060475"]["left-inverse-of"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(jAgda_Function_Bijection["Bijection"]["_86@179060475"]["right-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)));
                };
              };
            };
          };
        };
      };
    };
  exports["Inverse"]["_84@201915682"]["right-inverse-of"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["_InverseOf_"]["right-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Inverse"]["inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  });
