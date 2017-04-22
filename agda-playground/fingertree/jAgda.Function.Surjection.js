define(["exports","jAgda.Function.Equality","jAgda.Function.Equivalence","jAgda.Function.LeftInverse"],function(exports,jAgda_Function_Equality,jAgda_Function_Equivalence,jAgda_Function_LeftInverse) {
  exports["Surjection"] = {};
  exports["Surjective"] = {};
  exports["Surjection"]["_76@251632949"] = {};
  exports["Surjection"]["_76@251632949"]["right-inverse-of"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["Surjective"]["right-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Surjection"]["surjective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Surjection"]["_76@251632949"]["from"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["Surjective"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Surjection"]["surjective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
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
                          return exports["Surjection"]["record"](jAgda_Function_Equality["_∘_"](x0)(x1)(x6)(x2)(x3)(x7)(x4)(x5)(x8)(exports["Surjection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(exports["Surjection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10)))(exports["Surjective"]["record"](jAgda_Function_LeftInverse["LeftInverse"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_182@251632949"]["g∘f"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x10)))(jAgda_Function_LeftInverse["LeftInverse"]["left-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_182@251632949"]["g∘f"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x10))));
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
  exports["Surjective"]["record"] = function (x0) {
      return function (x1) {
        return {
          "from": x0,
          "record": function (x2) {
            return x2["record"](x0, x1);
          },
          "right-inverse-of": x1
        };
      };
    };
  exports["Surjection"]["equivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return jAgda_Function_Equivalence["Equivalence"]["record"](exports["Surjection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0))(exports["Surjection"]["_76@251632949"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["fromRightInverse"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["Surjection"]["record"](jAgda_Function_LeftInverse["LeftInverse"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(exports["Surjective"]["record"](jAgda_Function_LeftInverse["LeftInverse"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(jAgda_Function_LeftInverse["LeftInverse"]["left-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)));
                };
              };
            };
          };
        };
      };
    };
  exports["Surjection"]["surjective"] = function (x0) {
      return x0["surjective"];
    };
  exports["_152@251632949"] = {};
  exports["_152@251632949"]["id′"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Function_LeftInverse["id"](x0)(x1)(x2);
        };
      };
    };
  exports["Surjection"]["injection"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Function_LeftInverse["LeftInverse"]["injection"](x2)(x3)(x0)(x1)(x5)(x4)(exports["Surjection"]["right-inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["Surjection"]["to"] = function (x0) {
      return x0["to"];
    };
  exports["Surjective"]["right-inverse-of"] = function (x0) {
      return x0["right-inverse-of"];
    };
  exports["Surjection"]["injective"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Function_LeftInverse["LeftInverse"]["injective"](x2)(x3)(x0)(x1)(x5)(x4)(exports["Surjection"]["right-inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["_182@251632949"] = {};
  exports["_182@251632949"]["g∘f"] = function (x0) {
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
                          return jAgda_Function_LeftInverse["_∘_"](x4)(x5)(x2)(x3)(x0)(x1)(x8)(x7)(x6)(exports["Surjection"]["right-inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10))(exports["Surjection"]["right-inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["Surjection"]["_84@251632949"] = {};
  exports["Surjection"]["_84@251632949"]["to-from"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Function_LeftInverse["LeftInverse"]["to-from"](x2)(x3)(x0)(x1)(x5)(x4)(exports["Surjection"]["right-inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["Surjective"]["from"] = function (x0) {
      return x0["from"];
    };
  exports["_↠_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["Surjection"]["record"] = function (x0) {
      return function (x1) {
        return {
          "record": function (x2) {
            return x2["record"](x0, x1);
          },
          "surjective": x1,
          "to": x0
        };
      };
    };
  exports["id"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Surjection"]["record"](jAgda_Function_Equality["id"](x0)(x1)(x2))(exports["Surjective"]["record"](jAgda_Function_LeftInverse["LeftInverse"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_152@251632949"]["id′"](x0)(x1)(x2)))(jAgda_Function_LeftInverse["LeftInverse"]["left-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_152@251632949"]["id′"](x0)(x1)(x2))));
        };
      };
    };
  exports["Surjection"]["right-inverse"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return jAgda_Function_LeftInverse["LeftInverse"]["record"](exports["Surjection"]["_76@251632949"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0))(exports["Surjection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0))(exports["Surjection"]["_76@251632949"]["right-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  });
