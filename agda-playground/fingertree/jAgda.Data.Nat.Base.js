define(["exports","jAgda.Agda.Builtin.Equality","jAgda.Agda.Builtin.Nat","jAgda.Agda.Primitive","jAgda.Function","jAgda.Relation.Binary.PropositionalEquality.Core","jAgda.Relation.Nullary"],function(exports,jAgda_Agda_Builtin_Equality,jAgda_Agda_Builtin_Nat,jAgda_Agda_Primitive,jAgda_Function,jAgda_Relation_Binary_PropositionalEquality_Core,jAgda_Relation_Nullary) {
  exports["_≤′_"] = {};
  exports["_≤_"] = {};
  exports["Ordering"] = {};
  exports["_≤″_"] = {};
  exports["_⊔_"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3) {
                return jAgda_Agda_Builtin_Nat["Nat"]["suc"](exports["_⊔_"](x1)(x3));
              },
              "zero": function () {
                return jAgda_Agda_Builtin_Nat["Nat"]["suc"](x1);
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return x1;
          };
        }
      });
    };
  exports["_>_"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["Ordering"]["equal"] = function (x0) {
      return function (x1) {
        return x1["equal"](x0);
      };
    };
  exports["_≤″_"]["less-than-or-equal"] = function (x0) {
      return function (x1) {
        return {
          "k": x0,
          "less-than-or-equal": function (x2) {
            return x2["less-than-or-equal"](x0, x1);
          },
          "proof": x1
        };
      };
    };
  exports["fold"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "suc": function (x4) {
                return x2(exports["fold"](x0)(x1)(x2)(x4));
              },
              "zero": function () {
                return x1;
              }
            });
          };
        };
      };
    };
  exports["_>″_"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["_≤?_"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3) {
                return exports["with-262"](x1)(x3)(exports["_≤?_"](x1)(x3));
              },
              "zero": function () {
                return jAgda_Relation_Nullary["Dec"]["no"](function (x3) {
                  return function (x4) {
                    return undefined;
                  };
                });
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return jAgda_Relation_Nullary["Dec"]["yes"](exports["_≤_"]["z≤n"](x1));
          };
        }
      });
    };
  exports["_≤″_"]["proof"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["_<′_"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["compare"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3) {
                return exports["with-310"](x1)(x3)(exports["compare"](x1)(x3));
              },
              "zero": function () {
                return exports["Ordering"]["greater"](jAgda_Agda_Builtin_Nat["Nat"]["zero"])(x1);
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return x1({
              "suc": function (x2) {
                return exports["Ordering"]["less"](jAgda_Agda_Builtin_Nat["Nat"]["zero"])(x2);
              },
              "zero": function () {
                return exports["Ordering"]["equal"](jAgda_Agda_Builtin_Nat["Nat"]["zero"]);
              }
            });
          };
        }
      });
    };
  exports["_≮_"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["Ordering"]["less"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["less"](x0, x1);
        };
      };
    };
  exports["_≤″_"]["k"] = function (x0) {
      return x0["k"];
    };
  exports["_≟_"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3) {
                return exports["with-226"](x1)(x3)(exports["_≟_"](x1)(x3));
              },
              "zero": function () {
                return jAgda_Relation_Nullary["Dec"]["no"](function (x3) {
                  return function (x4) {
                    return undefined;
                  };
                });
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return x1({
              "suc": function (x2) {
                return jAgda_Relation_Nullary["Dec"]["no"](function (x3) {
                  return function (x4) {
                    return undefined;
                  };
                });
              },
              "zero": function () {
                return jAgda_Relation_Nullary["Dec"]["yes"](jAgda_Agda_Builtin_Equality["_≡_"]["refl"]);
              }
            });
          };
        }
      });
    };
  exports[".absurdlambda"] = function (x0) {
      return function (x1) {
        return undefined;
      };
    };
  exports["_≥_"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["_⊓_"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3) {
                return jAgda_Agda_Builtin_Nat["Nat"]["suc"](exports["_⊓_"](x1)(x3));
              },
              "zero": function () {
                return jAgda_Agda_Builtin_Nat["Nat"]["zero"];
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return jAgda_Agda_Builtin_Nat["Nat"]["zero"];
          };
        }
      });
    };
  exports["_≤′_"]["≤′-step"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["≤′-step"](x0, x1);
        };
      };
    };
  exports["≤-pred"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "s≤s": function (x3, x4, x5) {
              return x5;
            },
            "z≤n": function () {
              return undefined;
            }
          });
        };
      };
    };
  exports["GeneralisedArithmetic"] = {};
  exports["GeneralisedArithmetic"]["mul"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return exports["fold"](x0)(x1)(x3(x5))(x4);
              };
            };
          };
        };
      };
    };
  exports["_≤_"]["z≤n"] = function (x0) {
      return function (x1) {
        return x1["z≤n"](x0);
      };
    };
  exports["erase"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "less-than-or-equal": function (x3, x4) {
              return exports["_≤″_"]["less-than-or-equal"](x3)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                      };
                    };
                  };
                };
              });
            }
          });
        };
      };
    };
  exports["_≥″_"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["⌈_/2⌉"] = function (x0) {
      return exports["⌊_/2⌋"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x0));
    };
  exports["with-310"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "equal": function (x3) {
              return exports["Ordering"]["equal"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x3));
            },
            "greater": function (x3, x4) {
              return exports["Ordering"]["greater"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x3))(x4);
            },
            "less": function (x3, x4) {
              return exports["Ordering"]["less"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x3))(x4);
            }
          });
        };
      };
    };
  exports["_≯_"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["with-262"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "no": function (x3) {
              return jAgda_Relation_Nullary["Dec"]["no"](jAgda_Function["_∘_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")(function (x4) {
                return "*";
              })(function (x4) {
                return function (x5) {
                  return "*";
                };
              })(function (x4) {
                return x3;
              })(exports["≤-pred"](x0)(x1)));
            },
            "yes": function (x3) {
              return jAgda_Relation_Nullary["Dec"]["yes"](exports["_≤_"]["s≤s"](x0)(x1)(x3));
            }
          });
        };
      };
    };
  exports["_>′_"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["_+⋎_"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return jAgda_Agda_Builtin_Nat["Nat"]["suc"](exports["_+⋎_"](x2)(x1));
          };
        },
        "zero": function () {
          return function (x1) {
            return x1;
          };
        }
      });
    };
  exports["Ordering"]["greater"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["greater"](x0, x1);
        };
      };
    };
  exports["_≰_"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["_<_"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["⌊_/2⌋"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return x1({
            "suc": function (x2) {
              return jAgda_Agda_Builtin_Nat["Nat"]["suc"](exports["⌊_/2⌋"](x2));
            },
            "zero": function () {
              return 0;
            }
          });
        },
        "zero": function () {
          return 0;
        }
      });
    };
  exports["pred"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return x1;
        },
        "zero": function () {
          return jAgda_Agda_Builtin_Nat["Nat"]["zero"];
        }
      });
    };
  exports["_≤′_"]["≤′-refl"] = function (x0) {
      return x0["≤′-refl"]();
    };
  exports["with-226"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "no": function (x3) {
              return jAgda_Relation_Nullary["Dec"]["no"](jAgda_Function["_∘_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")(function (x4) {
                return "*";
              })(function (x4) {
                return function (x5) {
                  return "*";
                };
              })(function (x4) {
                return x3;
              })(function (x4) {
                return jAgda_Relation_Binary_PropositionalEquality_Core["subst"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")(function (x5) {
                  return "*";
                })(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x0))(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x1))(x4)(jAgda_Agda_Builtin_Equality["_≡_"]["refl"]);
              }));
            },
            "yes": function (x3) {
              return x3({
                "refl": function () {
                  return jAgda_Relation_Nullary["Dec"]["yes"](jAgda_Agda_Builtin_Equality["_≡_"]["refl"]);
                }
              });
            }
          });
        };
      };
    };
  exports[".absurdlambda"] = function (x0) {
      return function (x1) {
        return undefined;
      };
    };
  exports["_≱_"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["_≥′_"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["GeneralisedArithmetic"]["add"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["fold"](x0)(x4)(x2)(x3);
            };
          };
        };
      };
    };
  exports["_≤_"]["s≤s"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["s≤s"](x0, x1, x2);
          };
        };
      };
    };
  exports["_<″_"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports[".absurdlambda"] = function (x0) {
      return function (x1) {
        return undefined;
      };
    };
  });
