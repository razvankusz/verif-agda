define(["exports","jAgda.Algebra","jAgda.Algebra.Properties.AbelianGroup","jAgda.Algebra.Properties.Ring","jAgda.Algebra.Structures","jAgda.Function"],function(exports,jAgda_Algebra,jAgda_Algebra_Properties_AbelianGroup,jAgda_Algebra_Properties_Ring,jAgda_Algebra_Structures,jAgda_Function) {
  exports["_-Raw-AlmostCommutative⟶_"] = {};
  exports["IsAlmostCommutativeRing"] = {};
  exports["AlmostCommutativeRing"] = {};
  exports["AlmostCommutativeRing"]["_244@119710315"] = {};
  exports["AlmostCommutativeRing"]["_244@119710315"]["semiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["CommutativeSemiring"]["semiring"](x0)(x1)(exports["AlmostCommutativeRing"]["commutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["commutativeSemiring"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra["CommutativeSemiring"]["record"](function (x1) {
            return function (x2) {
              return function (x3) {
                return "*";
              };
            };
          })(function (x1) {
            return function (x2) {
              return function (x3) {
                return function (x4) {
                  return function (x5) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x0))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x0))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x0))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x0))(exports["AlmostCommutativeRing"]["_176@119710315"]["isCommutativeSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"] = {};
  exports["AlmostCommutativeRing"]["_176@119710315"]["isSemiringWithoutAnnihilatingZero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["isSemiringWithoutAnnihilatingZero"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"] = {};
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["∙-cong"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["_1008@119710315"] = {};
  exports["_1008@119710315"]["_1010@119710315"] = {};
  exports["_1008@119710315"]["_1010@119710315"]["refl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["CommutativeSemiring"]["_854@104512718"]["refl"](x0)(x1)(x2);
        };
      };
    };
  exports["F"] = {};
  exports["F"]["_+_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Algebra["RawRing"]["_+_"](undefined)(x3);
            };
          };
        };
      };
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["zero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["zero"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["isNearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["isNearSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["identity"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["AlmostCommutativeRing"]["_176@119710315"]["-‿cong"] = function () {
      return function () {
        return function (x0) {
          return exports["IsAlmostCommutativeRing"]["-‿cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["comm"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["comm"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["assoc"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["assoc"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_≈_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return "*";
            };
          };
        };
      };
    };
  exports["IsAlmostCommutativeRing"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return {
              "-‿*-distribˡ": x2,
              "-‿+-comm": x3,
              "-‿cong": x1,
              "isCommutativeSemiring": x0,
              "record": function (x4) {
                return x4["record"](x0, x1, x2, x3);
              }
            };
          };
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["distrib"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["distrib"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["zeroˡ"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["zeroˡ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["AlmostCommutativeRing"]["_176@119710315"]["comm"] = function () {
      return function () {
        return function (x0) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["+-isCommutativeMonoid"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["AlmostCommutativeRing"]["_176@119710315"]["∙-cong"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["∙-cong"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_+_"] = function (x0) {
      return x0["_+_"];
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["identity"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["AlmostCommutativeRing"]["_244@119710315"]["setoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["CommutativeSemiring"]["_914@104512718"]["setoid"](x0)(x1)(exports["AlmostCommutativeRing"]["commutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["isSemiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["isSemiringWithoutOne"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_838@119710315"] = {};
  exports["_838@119710315"]["_982@119710315"] = {};
  exports["_838@119710315"]["_982@119710315"]["⁻¹-∙-comm"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_AbelianGroup["⁻¹-∙-comm"](x0)(x1)(jAgda_Algebra["CommutativeRing"]["_1220@104512718"]["+-abelianGroup"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_402@119710315"] = {};
  exports["_402@119710315"]["Homomorphic₀"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsAlmostCommutativeRing"]["-‿*-distribˡ"] = function (x0) {
      return x0["-‿*-distribˡ"];
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["isSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["F"]["-_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Algebra["RawRing"]["-_"](undefined)(x3);
            };
          };
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["∙-cong"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["∙-cong"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["isMonoid"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["AlmostCommutativeRing"]["_176@119710315"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["identity"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_244@119710315"]["*-commutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra["CommutativeSemiring"]["*-commutativeMonoid"](undefined)(undefined)(exports["AlmostCommutativeRing"]["commutativeSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_*_"] = function (x0) {
      return x0["_*_"];
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["*-isCommutativeMonoid"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["*-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["AlmostCommutativeRing"]["rawRing"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra["RawRing"]["record"](function (x1) {
            return function (x2) {
              return function (x3) {
                return "*";
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x0))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x0))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x0))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x0))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["refl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["refl"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_574@119710315"] = {};
  exports["_574@119710315"]["_576@119710315"] = {};
  exports["_574@119710315"]["_576@119710315"]["refl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["AlmostCommutativeRing"]["_176@119710315"]["refl"](x0)(x1)(x2);
        };
      };
    };
  exports["_402@119710315"]["Homomorphic₁"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["isSemiringWithoutAnnihilatingZero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["isSemiringWithoutAnnihilatingZero"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["F"]["0#"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Algebra["RawRing"]["0#"](undefined)(x3);
            };
          };
        };
      };
    };
  exports["_-Raw-AlmostCommutative⟶_"]["⟦_⟧"] = function (x0) {
      return x0["⟦_⟧"];
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["distribʳ"] = function () {
      return function () {
        return function (x0) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["distribʳ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["-raw-almostCommutative⟶"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["_-Raw-AlmostCommutative⟶_"]["record"](jAgda_Function["id"](x0)(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          }))(function (x3) {
            return function (x4) {
              return exports["_574@119710315"]["_576@119710315"]["refl"](x0)(x1)(x2)(jAgda_Function["id"](x0)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(exports["F"]["_+_"](x0)(x0)(x1)(exports["AlmostCommutativeRing"]["rawRing"](undefined)(undefined)(x2))(x2)(x3)(x4)));
            };
          })(function (x3) {
            return function (x4) {
              return exports["_574@119710315"]["_576@119710315"]["refl"](x0)(x1)(x2)(jAgda_Function["id"](x0)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(exports["F"]["_*_"](x0)(x0)(x1)(exports["AlmostCommutativeRing"]["rawRing"](undefined)(undefined)(x2))(x2)(x3)(x4)));
            };
          })(function (x3) {
            return exports["_574@119710315"]["_576@119710315"]["refl"](x0)(x1)(x2)(jAgda_Function["id"](x0)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(exports["F"]["-_"](x0)(x0)(x1)(exports["AlmostCommutativeRing"]["rawRing"](undefined)(undefined)(x2))(x2)(x3)));
          })(exports["_574@119710315"]["_576@119710315"]["refl"](x0)(x1)(x2)(jAgda_Function["id"](x0)(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["F"]["0#"](x0)(x0)(x1)(exports["AlmostCommutativeRing"]["rawRing"](undefined)(undefined)(x2))(x2))))(exports["_574@119710315"]["_576@119710315"]["refl"](x0)(x1)(x2)(jAgda_Function["id"](x0)(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["F"]["1#"](x0)(x0)(x1)(exports["AlmostCommutativeRing"]["rawRing"](undefined)(undefined)(x2))(x2))));
        };
      };
    };
  exports["_-Raw-AlmostCommutative⟶_"]["+-homo"] = function (x0) {
      return x0["+-homo"];
    };
  exports["F"]["1#"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Algebra["RawRing"]["1#"](undefined)(x3);
            };
          };
        };
      };
    };
  exports["_402@119710315"]["Homomorphic₂"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["isSemiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["isSemiringWithoutOne"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["isSemigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["isSemigroup"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["AlmostCommutativeRing"]["_176@119710315"]["isCommutativeSemiring"] = function () {
      return function () {
        return function (x0) {
          return exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["+-isCommutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["identity"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["-_"] = function (x0) {
      return x0["-_"];
    };
  exports["AlmostCommutativeRing"]["_244@119710315"]["*-monoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["CommutativeSemiring"]["_914@104512718"]["*-monoid"](x0)(x1)(exports["AlmostCommutativeRing"]["commutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["reflexive"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["*-isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["*-isMonoid"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["refl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["F"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return "*";
            };
          };
        };
      };
    };
  exports["_-Raw-AlmostCommutative⟶_"]["*-homo"] = function (x0) {
      return x0["*-homo"];
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["isCommutativeSemiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["isCommutativeSemiringWithoutOne"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["*-isCommutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["*-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Induced-equivalence"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["distrib"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["distrib"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["AlmostCommutativeRing"]["_176@119710315"]["isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["isMonoid"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_244@119710315"]["semigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["CommutativeSemiring"]["_914@104512718"]["semigroup"](x0)(x1)(exports["AlmostCommutativeRing"]["commutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["0#"] = function (x0) {
      return x0["0#"];
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["isSemigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["isSemigroup"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["_710@119710315"] = {};
  exports["_710@119710315"]["_814@119710315"] = {};
  exports["_710@119710315"]["_814@119710315"]["⟦_⟧"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function (x0) {
                return function (x1) {
                  return function (x2) {
                    return exports["_-Raw-AlmostCommutative⟶_"]["⟦_⟧"](undefined)(undefined)(undefined)(undefined)(undefined)(x0);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["fromCommutativeSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["AlmostCommutativeRing"]["record"](function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(jAgda_Algebra["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(jAgda_Algebra["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(jAgda_Function["id"](x0)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          }))(jAgda_Algebra["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(jAgda_Algebra["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["IsAlmostCommutativeRing"]["record"](jAgda_Algebra["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2))(function (x3) {
            return function (x4) {
              return jAgda_Function["id"](x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              });
            };
          })(function (x3) {
            return function (x4) {
              return exports["_1008@119710315"]["_1010@119710315"]["refl"](x0)(x1)(x2)(jAgda_Algebra["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Function["id"](x0)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              })(x3))(x4));
            };
          })(function (x3) {
            return function (x4) {
              return exports["_1008@119710315"]["_1010@119710315"]["refl"](x0)(x1)(x2)(jAgda_Algebra["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Function["id"](x0)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              })(x3))(jAgda_Function["id"](x0)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              })(x4)));
            };
          }));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["sym"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["sym"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_838@119710315"]["_840@119710315"] = {};
  exports["_838@119710315"]["_840@119710315"]["isCommutativeSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["CommutativeRing"]["_1148@104512718"]["isCommutativeSemiring"](x0)(x1)(x2);
        };
      };
    };
  exports["_402@119710315"]["Morphism"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return "*";
            };
          };
        };
      };
    };
  exports["IsAlmostCommutativeRing"]["-‿+-comm"] = function (x0) {
      return x0["-‿+-comm"];
    };
  exports["_-Raw-AlmostCommutative⟶_"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return {
                  "*-homo": x2,
                  "+-homo": x1,
                  "-‿homo": x3,
                  "0-homo": x4,
                  "1-homo": x5,
                  "record": function (x6) {
                    return x6["record"](x0, x1, x2, x3, x4, x5);
                  },
                  "⟦_⟧": x0
                };
              };
            };
          };
        };
      };
    };
  exports["AlmostCommutativeRing"]["_244@119710315"]["+-commutativeMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["CommutativeSemiring"]["_914@104512718"]["+-commutativeMonoid"](x0)(x1)(exports["AlmostCommutativeRing"]["commutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["trans"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["trans"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["assoc"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["assoc"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"] = function (x0) {
      return x0["isCommutativeSemiring"];
    };
  exports["_-Raw-AlmostCommutative⟶_"]["-‿homo"] = function (x0) {
      return x0["-‿homo"];
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["reflexive"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["distribʳ"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["distribʳ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["AlmostCommutativeRing"]["_176@119710315"]["isEquivalence"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["isEquivalence"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["isSemigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["isSemigroup"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["*-isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["*-isMonoid"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["1#"] = function (x0) {
      return x0["1#"];
    };
  exports["AlmostCommutativeRing"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return {
                      "-_": x4,
                      "0#": x5,
                      "1#": x6,
                      "Carrier": x0,
                      "_*_": x3,
                      "_+_": x2,
                      "_≈_": x1,
                      "isAlmostCommutativeRing": x7,
                      "record": function (x8) {
                        return x8["record"](x0, x1, x2, x3, x4, x5, x6, x7);
                      }
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["zero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["zero"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["comm"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["comm"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["assoc"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["assoc"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsAlmostCommutativeRing"]["-‿cong"] = function (x0) {
      return x0["-‿cong"];
    };
  exports["_-Raw-AlmostCommutative⟶_"]["0-homo"] = function (x0) {
      return x0["0-homo"];
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["sym"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["sym"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["isCommutativeSemiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["isCommutativeSemiringWithoutOne"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["AlmostCommutativeRing"]["_176@119710315"]["isNearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["isNearSemiring"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_710@119710315"]["_712@119710315"] = {};
  exports["_710@119710315"]["_712@119710315"]["_≈_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
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
  exports["AlmostCommutativeRing"]["_176@119710315"]["-‿*-distribˡ"] = function () {
      return function () {
        return function (x0) {
          return exports["IsAlmostCommutativeRing"]["-‿*-distribˡ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["isSemigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["isSemigroup"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"] = function (x0) {
      return x0["isAlmostCommutativeRing"];
    };
  exports["AlmostCommutativeRing"]["_244@119710315"]["monoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["CommutativeSemiring"]["_914@104512718"]["monoid"](x0)(x1)(exports["AlmostCommutativeRing"]["commutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["AlmostCommutativeRing"]["_244@119710315"]["semigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["CommutativeSemiring"]["_914@104512718"]["semigroup"](x0)(x1)(exports["AlmostCommutativeRing"]["commutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["zeroˡ"] = function () {
      return function () {
        return function (x0) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["zeroˡ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["isSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["isSemiring"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["comm"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["*-CM"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["fromCommutativeRing"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["AlmostCommutativeRing"]["record"](function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(jAgda_Algebra["CommutativeRing"]["_+_"](undefined)(undefined)(x2))(jAgda_Algebra["CommutativeRing"]["_*_"](undefined)(undefined)(x2))(jAgda_Algebra["CommutativeRing"]["-_"](undefined)(undefined)(x2))(jAgda_Algebra["CommutativeRing"]["0#"](undefined)(undefined)(x2))(jAgda_Algebra["CommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["IsAlmostCommutativeRing"]["record"](exports["_838@119710315"]["_840@119710315"]["isCommutativeSemiring"](x0)(x1)(x2))(jAgda_Algebra["CommutativeRing"]["_1148@104512718"]["⁻¹-cong"](undefined)(undefined)(x2))(exports["_838@119710315"]["_962@119710315"]["-‿*-distribˡ"](x0)(x1)(x2))(exports["_838@119710315"]["_982@119710315"]["⁻¹-∙-comm"](x0)(x1)(x2)));
        };
      };
    };
  exports["_-Raw-AlmostCommutative⟶_"]["1-homo"] = function (x0) {
      return x0["1-homo"];
    };
  exports["F"]["_*_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Algebra["RawRing"]["_*_"](undefined)(x3);
            };
          };
        };
      };
    };
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["trans"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["trans"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["isEquivalence"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["isEquivalence"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsAlmostCommutativeRing"]["_76@119710315"]["∙-cong"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsAlmostCommutativeRing"]["isCommutativeSemiring"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["AlmostCommutativeRing"]["_176@119710315"]["-‿+-comm"] = function () {
      return function () {
        return function (x0) {
          return exports["IsAlmostCommutativeRing"]["-‿+-comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["_838@119710315"]["_962@119710315"] = {};
  exports["_838@119710315"]["_962@119710315"]["-‿*-distribˡ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_Ring["-‿*-distribˡ"](x0)(x1)(jAgda_Algebra["CommutativeRing"]["ring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AlmostCommutativeRing"]["_176@119710315"]["assoc"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsAlmostCommutativeRing"]["_76@119710315"]["assoc"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["AlmostCommutativeRing"]["isAlmostCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  });
