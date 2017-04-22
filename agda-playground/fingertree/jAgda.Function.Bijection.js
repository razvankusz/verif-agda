define(["exports","jAgda.Function.Equality","jAgda.Function.Injection","jAgda.Function.LeftInverse","jAgda.Function.Surjection"],function(exports,jAgda_Function_Equality,jAgda_Function_Injection,jAgda_Function_LeftInverse,jAgda_Function_Surjection) {
  exports["Bijective"] = {};
  exports["Bijection"] = {};
  exports["Bijection"]["_112@179060475"] = {};
  exports["Bijection"]["_112@179060475"]["to-from"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Function_LeftInverse["LeftInverse"]["to-from"](x0)(x1)(x2)(x3)(x4)(x5)(exports["Bijection"]["left-inverse"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["Bijection"]["injection"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return jAgda_Function_Injection["Injection"]["record"](exports["Bijection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0))(exports["Bijection"]["_86@179060475"]["injective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Bijection"]["to"] = function (x0) {
      return x0["to"];
    };
  exports["Bijection"]["record"] = function (x0) {
      return function (x1) {
        return {
          "bijective": x1,
          "record": function (x2) {
            return x2["record"](x0, x1);
          },
          "to": x0
        };
      };
    };
  exports["Bijection"]["bijective"] = function (x0) {
      return x0["bijective"];
    };
  exports["Bijection"]["surjection"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return jAgda_Function_Surjection["Surjection"]["record"](exports["Bijection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0))(exports["Bijection"]["_86@179060475"]["surjective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Bijective"]["record"] = function (x0) {
      return function (x1) {
        return {
          "injective": x0,
          "record": function (x2) {
            return x2["record"](x0, x1);
          },
          "surjective": x1
        };
      };
    };
  exports["Bijective"]["injective"] = function (x0) {
      return x0["injective"];
    };
  exports["Bijection"]["_86@179060475"] = {};
  exports["Bijection"]["_86@179060475"]["from"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["Bijective"]["_42@179060475"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Bijection"]["bijective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Bijective"]["surjective"] = function (x0) {
      return x0["surjective"];
    };
  exports["Bijection"]["_102@179060475"] = {};
  exports["Bijection"]["_102@179060475"]["equivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return jAgda_Function_Surjection["Surjection"]["equivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Bijection"]["surjection"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Bijection"]["_86@179060475"]["injective"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["Bijective"]["injective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Bijection"]["bijective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
          return exports["Bijection"]["record"](jAgda_Function_Equality["id"](x0)(x1)(x2))(exports["Bijective"]["record"](jAgda_Function_Injection["Injection"]["injective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Function_Injection["id"](x0)(x1)(x2)))(jAgda_Function_Surjection["Surjection"]["surjective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Function_Surjection["id"](x0)(x1)(x2))));
        };
      };
    };
  exports["Bijection"]["_102@179060475"]["to-from"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Function_Surjection["Surjection"]["_84@251632949"]["to-from"](x0)(x1)(x2)(x3)(x4)(x5)(exports["Bijection"]["surjection"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["Bijection"]["_102@179060475"]["right-inverse"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return jAgda_Function_Surjection["Surjection"]["right-inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Bijection"]["surjection"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Bijection"]["_86@179060475"]["left-inverse-of"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["Bijective"]["left-inverse-of"](x0)(x1)(x2)(x3)(x4)(x5)(exports["Bijection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(exports["Bijection"]["bijective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["Bijective"]["_42@179060475"] = {};
  exports["Bijective"]["_42@179060475"]["from"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return jAgda_Function_Surjection["Surjective"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Bijective"]["surjective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Bijection"]["left-inverse"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Function_LeftInverse["LeftInverse"]["record"](exports["Bijection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(exports["Bijection"]["_86@179060475"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(exports["Bijection"]["_86@179060475"]["left-inverse-of"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["Bijection"]["_86@179060475"]["right-inverse-of"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["Bijective"]["_42@179060475"]["right-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Bijection"]["bijective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Bijective"]["_42@179060475"]["right-inverse-of"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return jAgda_Function_Surjection["Surjective"]["right-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Bijective"]["surjective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
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
                          return exports["Bijection"]["record"](jAgda_Function_Equality["_∘_"](x0)(x1)(x6)(x2)(x3)(x7)(x4)(x5)(x8)(exports["Bijection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(exports["Bijection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10)))(exports["Bijective"]["record"](jAgda_Function_Injection["Injection"]["injective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Function_Injection["_∘_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["Bijection"]["injection"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(exports["Bijection"]["injection"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10))))(jAgda_Function_Surjection["Surjection"]["surjective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Function_Surjection["_∘_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["Bijection"]["surjection"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(exports["Bijection"]["surjection"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10)))));
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
  exports["Bijection"]["_86@179060475"]["surjective"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["Bijective"]["surjective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Bijection"]["bijective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Bijective"]["left-inverse-of"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["Bijective"]["injective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7)(jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Function_Surjection["Surjective"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Bijective"]["surjective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7)))(jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)(x8)))(x8)(exports["Bijective"]["_42@179060475"]["right-inverse-of"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7)(jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)(x8)));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  });
