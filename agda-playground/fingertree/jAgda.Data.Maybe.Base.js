define(["exports","jAgda.Agda.Builtin.Unit","jAgda.Agda.Primitive","jAgda.Data.Bool.Base","jAgda.Function","jAgda.Level"],function(exports,jAgda_Agda_Builtin_Unit,jAgda_Agda_Primitive,jAgda_Data_Bool_Base,jAgda_Function,jAgda_Level) {
  exports["Any"] = {};
  exports["All"] = {};
  exports["Maybe"] = {};
  exports["decToMaybe"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "no": function (x3) {
              return exports["Maybe"]["nothing"];
            },
            "yes": function (x3) {
              return exports["Maybe"]["just"](x3);
            }
          });
        };
      };
    };
  exports["maybe"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return x6({
                    "just": function (x7) {
                      return x4(x7);
                    },
                    "nothing": function () {
                      return x5;
                    }
                  });
                };
              };
            };
          };
        };
      };
    };
  exports["boolToMaybe"] = function (x0) {
      if (x0) {
        return exports["Maybe"]["just"](jAgda_Agda_Builtin_Unit["⊤"]["tt"]);
      } else {
        return exports["Maybe"]["nothing"];
      }
    };
  exports["to-witness"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "just": function (x4, x5) {
                return x4;
              }
            });
          };
        };
      };
    };
  exports["Any"]["just"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["just"](x0, x1);
        };
      };
    };
  exports["Is-just"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["Maybe"]["nothing"] = function (x0) {
      return x0["nothing"]();
    };
  exports["Maybe"]["just"] = function (x0) {
      return function (x1) {
        return x1["just"](x0);
      };
    };
  exports["From-just"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["is-nothing"] = function (x0) {
      return function (x1) {
        return jAgda_Function["_∘_"](x0)(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")(function (x2) {
          return "*";
        })(function (x2) {
          return function (x3) {
            return "*";
          };
        })(function (x2) {
          return jAgda_Data_Bool_Base["not"];
        })(exports["is-just"](x0)(x1));
      };
    };
  exports["to-witness-T"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "just": function (x3) {
              return function (x4) {
                return x3;
              };
            },
            "nothing": function () {
              return function (x3) {
                return undefined;
              };
            }
          });
        };
      };
    };
  exports["from-just"] = function () {
      return function () {
        return function (x0) {
          return x0({
            "just": function (x1) {
              return x1;
            },
            "nothing": function () {
              return jAgda_Level["Lift"]["lift"](jAgda_Agda_Builtin_Unit["⊤"]["tt"]);
            }
          });
        };
      };
    };
  exports["All"]["nothing"] = function (x0) {
      return x0["nothing"]();
    };
  exports["is-just"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "just": function (x3) {
              return true;
            },
            "nothing": function () {
              return false;
            }
          });
        };
      };
    };
  exports["Is-nothing"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["All"]["just"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["just"](x0, x1);
        };
      };
    };
  exports["maybe′"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["maybe"](x0)(x1)(x2)(function (x4) {
              return x3;
            });
          };
        };
      };
    };
  exports["map"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["maybe"](x0)(x1)(x2)(function (x5) {
                return "*";
              })(jAgda_Function["_∘_"](x0)(x1)(x1)(x2)(function (x5) {
                return x3;
              })(function (x5) {
                return function (x6) {
                  return "*";
                };
              })(function (x5) {
                return exports["Maybe"]["just"];
              })(x4))(exports["Maybe"]["nothing"]);
            };
          };
        };
      };
    };
  });
