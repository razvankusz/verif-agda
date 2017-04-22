define(["exports","jAgda.Agda.Primitive","jAgda.Data.Product","jAgda.Function","jAgda.Relation.Binary","jAgda.Relation.Binary.Core","jAgda.Relation.Binary.EqReasoning","jAgda.Relation.Binary.PreorderReasoning"],function(exports,jAgda_Agda_Primitive,jAgda_Data_Product,jAgda_Function,jAgda_Relation_Binary,jAgda_Relation_Binary_Core,jAgda_Relation_Binary_EqReasoning,jAgda_Relation_Binary_PreorderReasoning) {
  exports["IsGroup"] = {};
  exports["IsSemiring"] = {};
  exports["IsSemiringWithoutAnnihilatingZero"] = {};
  exports["IsSemiringWithoutOne"] = {};
  exports["IsRing"] = {};
  exports["IsCommutativeSemiring"] = {};
  exports["IsCommutativeRing"] = {};
  exports["IsBooleanAlgebra"] = {};
  exports["IsSemigroup"] = {};
  exports["IsCommutativeMonoid"] = {};
  exports["IsNearSemiring"] = {};
  exports["IsDistributiveLattice"] = {};
  exports["IsCommutativeSemiringWithoutOne"] = {};
  exports["IsAbelianGroup"] = {};
  exports["IsLattice"] = {};
  exports["IsMonoid"] = {};
  exports["IsBooleanAlgebra"]["_2870@25348318"] = {};
  exports["IsBooleanAlgebra"]["_2870@25348318"]["∧-assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsDistributiveLattice"]["_2694@25348318"]["∧-assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsBooleanAlgebra"]["isDistributiveLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsRing"]["_2104@25348318"] = {};
  exports["IsRing"]["_2104@25348318"]["isGroup"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsAbelianGroup"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeRing"]["_2334@25348318"] = {};
  exports["IsCommutativeRing"]["_2334@25348318"]["isNearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["IsRing"]["_2186@25348318"]["isNearSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsDistributiveLattice"]["_2694@25348318"] = {};
  exports["IsDistributiveLattice"]["_2694@25348318"]["∧-comm"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsLattice"]["∧-comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDistributiveLattice"]["isLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiring"]["_1916@25348318"] = {};
  exports["IsCommutativeSemiring"]["_1916@25348318"]["isNearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["_1496@25348318"]["isNearSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiring"]["_1762@25348318"] = {};
  exports["IsCommutativeSemiring"]["_1762@25348318"]["_DistributesOver_"] = function (x0) {
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
    };
  exports["IsCommutativeRing"]["_2334@25348318"]["isCommutativeMonoid"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2104@25348318"]["isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsRing"]["distrib"] = function (x0) {
      return x0["distrib"];
    };
  exports["IsRing"]["isSemiringWithoutAnnihilatingZero"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsSemiringWithoutAnnihilatingZero"]["record"](exports["IsRing"]["_2104@25348318"]["isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0))(exports["IsRing"]["*-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0))(exports["IsRing"]["distrib"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeSemiring"]["_1916@25348318"]["isSemigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["_1456@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_2426@25348318"] = {};
  exports["_2426@25348318"]["Absorptive"] = function (x0) {
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
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"] = {};
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["zero"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemiringWithoutOne"]["zero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["isSemiringWithoutOne"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsSemiringWithoutOne"]["record"](exports["IsSemiring"]["_1456@25348318"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0))(exports["IsSemiring"]["_1456@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0))(exports["IsSemiring"]["_1456@25348318"]["distrib"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0))(exports["IsSemiring"]["zero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeMonoid"]["isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsMonoid"]["record"](exports["IsCommutativeMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(exports["IsCommutativeMonoid"]["identity"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeRing"]["_2334@25348318"]["identity"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2138@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["isSemigroup"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemiringWithoutOne"]["_1110@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiring"]["_1908@25348318"] = {};
  exports["IsCommutativeSemiring"]["_1908@25348318"]["zeroʳ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["_1870@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x5(x9)(x6))(x5(x6)(x9))(x6)(exports["IsCommutativeSemiring"]["*-CM"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8)(x9)(x6))(exports["IsCommutativeSemiring"]["_1870@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x5(x6)(x9))(x6)(x6)(exports["IsCommutativeSemiring"]["zeroˡ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8)(x9))(exports["IsCommutativeSemiring"]["_1870@25348318"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x6))));
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
  exports["IsGroup"]["_-_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return x4(x8)(x6(x9));
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
  exports["_2230@25348318"] = {};
  exports["_2230@25348318"]["Commutative"] = function (x0) {
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
  exports["IsNearSemiring"]["_962@25348318"] = {};
  exports["IsNearSemiring"]["_962@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemigroup"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsNearSemiring"]["*-isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["_1456@25348318"] = {};
  exports["IsSemiring"]["_1456@25348318"]["isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["isMonoid"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiring"]["distribʳ"] = function (x0) {
      return x0["distribʳ"];
    };
  exports["IsAbelianGroup"]["_770@25348318"] = {};
  exports["IsAbelianGroup"]["_770@25348318"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsGroup"]["_610@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsAbelianGroup"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"] = {};
  exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsCommutativeMonoid"]["_424@25348318"]["reflexive"](x0)(x1)(x2)(x3)(x4)(x6)(exports["IsSemiringWithoutAnnihilatingZero"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsMonoid"]["_274@25348318"] = {};
  exports["IsMonoid"]["_274@25348318"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsSemigroup"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemiringWithoutOne"]["_1134@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsGroup"]["_610@25348318"] = {};
  exports["IsGroup"]["_610@25348318"]["identity"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsMonoid"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsGroup"]["isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutOne"]["_1110@25348318"] = {};
  exports["IsSemiringWithoutOne"]["_1110@25348318"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsCommutativeMonoid"]["_424@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutOne"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeMonoid"]["_424@25348318"] = {};
  exports["IsCommutativeMonoid"]["_424@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsSemigroup"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsNearSemiring"]["_942@25348318"] = {};
  exports["IsNearSemiring"]["_942@25348318"]["isSemigroup"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsNearSemiring"]["+-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["_1456@25348318"]["identity"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["_1308@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsAbelianGroup"]["_770@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsGroup"]["_610@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsAbelianGroup"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsCommutativeMonoid"]["_424@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutAnnihilatingZero"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsRing"]["_2104@25348318"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsAbelianGroup"]["_770@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeRing"]["_2334@25348318"]["zero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["IsRing"]["zero"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsNearSemiring"]["+-isMonoid"] = function (x0) {
      return x0["+-isMonoid"];
    };
  exports["IsCommutativeMonoid"]["comm"] = function (x0) {
      return x0["comm"];
    };
  exports["IsLattice"]["∧-cong"] = function (x0) {
      return x0["∧-cong"];
    };
  exports["IsAbelianGroup"]["record"] = function (x0) {
      return function (x1) {
        return {
          "comm": x1,
          "isGroup": x0,
          "record": function (x2) {
            return x2["record"](x0, x1);
          }
        };
      };
    };
  exports["IsNearSemiring"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return {
              "*-isSemigroup": x1,
              "+-isMonoid": x0,
              "distribʳ": x2,
              "record": function (x4) {
                return x4["record"](x0, x1, x2, x3);
              },
              "zeroˡ": x3
            };
          };
        };
      };
    };
  exports["IsSemigroup"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return {
            "assoc": x1,
            "isEquivalence": x0,
            "record": function (x3) {
              return x3["record"](x0, x1, x2);
            },
            "∙-cong": x2
          };
        };
      };
    };
  exports["IsCommutativeSemiring"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return {
              "*-isCommutativeMonoid": x1,
              "+-isCommutativeMonoid": x0,
              "distribʳ": x2,
              "record": function (x4) {
                return x4["record"](x0, x1, x2, x3);
              },
              "zeroˡ": x3
            };
          };
        };
      };
    };
  exports["IsMonoid"]["_274@25348318"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsSemigroup"]["_134@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiring"]["zeroˡ"] = function (x0) {
      return x0["zeroˡ"];
    };
  exports["IsAbelianGroup"]["_770@25348318"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsGroup"]["_610@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsAbelianGroup"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsCommutativeMonoid"]["_424@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutAnnihilatingZero"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsNearSemiring"]["*-isSemigroup"] = function (x0) {
      return x0["*-isSemigroup"];
    };
  exports["IsNearSemiring"]["_942@25348318"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsMonoid"]["_274@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsNearSemiring"]["+-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["_1456@25348318"]["*-isMonoid"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["*-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeMonoid"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Data_Product["Σ"]["_,_"](exports["IsCommutativeMonoid"]["identityˡ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(exports["IsCommutativeMonoid"]["_444@25348318"]["identityʳ"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["_1456@25348318"]["isSemigroup"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutOne"]["_1110@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsCommutativeMonoid"]["_424@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutOne"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_316@25348318"] = {};
  exports["_316@25348318"]["LeftIdentity"] = function (x0) {
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
  exports["IsRing"]["_2104@25348318"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsAbelianGroup"]["_770@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeRing"]["isCommutativeSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["IsCommutativeSemiring"]["record"](exports["IsCommutativeRing"]["_2334@25348318"]["isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(exports["IsCommutativeMonoid"]["record"](exports["IsCommutativeRing"]["_2334@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["_2334@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)))(exports["IsCommutativeRing"]["*-comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["_2334@25348318"]["distrib"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["_2334@25348318"]["zero"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)));
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
  exports["IsLattice"]["absorptive"] = function (x0) {
      return x0["absorptive"];
    };
  exports["IsAbelianGroup"]["_770@25348318"]["identity"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsGroup"]["_610@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsAbelianGroup"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["comm"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsCommutativeMonoid"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutAnnihilatingZero"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiring"]["_1916@25348318"]["isSemiringWithoutAnnihilatingZero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsDistributiveLattice"]["_2694@25348318"]["∧-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsLattice"]["∧-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDistributiveLattice"]["isLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["_26@25348318"] = {};
  exports["_26@25348318"]["Associative"] = function (x0) {
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
  exports["IsCommutativeRing"]["_2334@25348318"]["*-isMonoid"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["*-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsBooleanAlgebra"]["_2870@25348318"]["absorptive"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsDistributiveLattice"]["_2694@25348318"]["absorptive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsBooleanAlgebra"]["isDistributiveLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeSemiring"]["*-CM"] = {};
  exports["IsCommutativeSemiring"]["*-CM"]["comm"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsCommutativeMonoid"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["*-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeRing"]["_2334@25348318"]["isGroup"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2104@25348318"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsBooleanAlgebra"]["_2870@25348318"]["∧-comm"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsDistributiveLattice"]["_2694@25348318"]["∧-comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsBooleanAlgebra"]["isDistributiveLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsRing"]["_2104@25348318"]["isMonoid"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsAbelianGroup"]["_770@25348318"]["isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeRing"]["_2334@25348318"]["isSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["IsRing"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsCommutativeSemiring"]["_1894@25348318"] = {};
  exports["IsCommutativeSemiring"]["_1894@25348318"]["distribˡ"] = function (x0) {
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
                            return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["_1870@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x5(x9)(x4(x10)(x11)))(x5(x4(x10)(x11))(x9))(x4(x5(x9)(x10))(x5(x9)(x11)))(exports["IsCommutativeSemiring"]["*-CM"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8)(x9)(x4(x10)(x11)))(exports["IsCommutativeSemiring"]["_1870@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x5(x4(x10)(x11))(x9))(x4(x5(x10)(x9))(x5(x11)(x9)))(x4(x5(x9)(x10))(x5(x9)(x11)))(exports["IsCommutativeSemiring"]["distribʳ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8)(x9)(x10)(x11))(exports["IsCommutativeSemiring"]["_1870@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x4(x5(x10)(x9))(x5(x11)(x9)))(x4(x5(x9)(x10))(x5(x9)(x11)))(x4(x5(x9)(x10))(x5(x9)(x11)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(x3(x5(x10)(x9))(x5(x9)(x10)))(x3(x5(x11)(x9))(x5(x9)(x11)))(x3(x4(x5(x10)(x9))(x5(x11)(x9)))(x4(x5(x9)(x10))(x5(x9)(x11))))(exports["IsCommutativeSemiring"]["*-CM"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8)(x10)(x9))(exports["IsCommutativeSemiring"]["+-CM"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8)(x5(x10)(x9))(x5(x9)(x10))(x5(x11)(x9))(x5(x9)(x11)))(exports["IsCommutativeSemiring"]["*-CM"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8)(x11)(x9)))(exports["IsCommutativeSemiring"]["_1870@25348318"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x4(x5(x9)(x10))(x5(x9)(x11)))))));
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
  exports["IsGroup"]["_610@25348318"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsMonoid"]["_274@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsGroup"]["isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutOne"]["_1110@25348318"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["IsCommutativeMonoid"]["_424@25348318"]["reflexive"](x0)(x1)(x2)(x3)(x4)(x6)(exports["IsSemiringWithoutOne"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["*-isSemigroup"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemiringWithoutOne"]["*-isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["distrib"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemiringWithoutOne"]["distrib"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemigroup"]["_134@25348318"] = {};
  exports["IsSemigroup"]["_134@25348318"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function (x0) {
                return jAgda_Relation_Binary_Core["IsEquivalence"]["refl"](undefined)(undefined)(undefined)(undefined)(exports["IsSemigroup"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(x0));
              };
            };
          };
        };
      };
    };
  exports["IsDistributiveLattice"]["_2694@25348318"]["absorptive"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsLattice"]["absorptive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDistributiveLattice"]["isLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeMonoid"]["_370@25348318"] = {};
  exports["IsCommutativeMonoid"]["_370@25348318"]["Identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
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
  exports["IsRing"]["isSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["IsSemiring"]["record"](exports["IsRing"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(exports["IsRing"]["zero"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9));
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
  exports["IsCommutativeSemiring"]["_1916@25348318"]["assoc"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["_1456@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_2426@25348318"]["Associative"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return "*";
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeMonoid"]["_444@25348318"] = {};
  exports["IsCommutativeMonoid"]["_444@25348318"]["identityʳ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeMonoid"]["_444@25348318"]["_446@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x4(x7)(x5))(x4(x5)(x7))(x7)(exports["IsCommutativeMonoid"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)(x7)(x5))(exports["IsCommutativeMonoid"]["_444@25348318"]["_446@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x4(x5)(x7))(x7)(x7)(exports["IsCommutativeMonoid"]["identityˡ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)(x7))(exports["IsCommutativeMonoid"]["_444@25348318"]["_446@25348318"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7))));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["_1456@25348318"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsRing"]["_2138@25348318"] = {};
  exports["IsRing"]["_2138@25348318"]["isSemigroup"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["*-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeSemiring"]["distrib"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return jAgda_Data_Product["Σ"]["_,_"](exports["IsCommutativeSemiring"]["_1894@25348318"]["distribˡ"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8))(exports["IsCommutativeSemiring"]["distribʳ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutOne"]["_1110@25348318"]["isSemigroup"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsCommutativeMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutOne"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_1352@25348318"] = {};
  exports["_1352@25348318"]["Zero"] = function (x0) {
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
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["+-isCommutativeMonoid"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemiringWithoutOne"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsGroup"]["_610@25348318"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsMonoid"]["_274@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsGroup"]["isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutOne"]["_1134@25348318"] = {};
  exports["IsSemiringWithoutOne"]["_1134@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemigroup"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutOne"]["*-isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsDistributiveLattice"]["isLattice"] = function (x0) {
      return x0["isLattice"];
    };
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemiringWithoutOne"]["_1110@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsRing"]["_2152@25348318"] = {};
  exports["IsRing"]["_2152@25348318"]["zeroʳ"] = function (x0) {
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
                          return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["_2152@25348318"]["_2154@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x5(x10)(x7))(x4(x5(x10)(x7))(x7))(x7)(jAgda_Function["_$_"](x1)(x1)(x3(x4(x5(x10)(x7))(x7))(x5(x10)(x7)))(function (x11) {
                            return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(x2)(x2)(function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            })(x3)(x4(x5(x10)(x7))(x7))(x5(x10)(x7));
                          })(exports["IsRing"]["_2104@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x4(x5(x10)(x7))(x7))(x5(x10)(x7)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["_2104@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(x5(x10)(x7))))(exports["IsRing"]["_2152@25348318"]["_2154@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x4(x5(x10)(x7))(x7))(x4(x5(x10)(x7))(x4(x5(x10)(x7))(x6(x5(x10)(x7)))))(x7)(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(x3(x5(x10)(x7))(x5(x10)(x7)))(x3(x7)(x4(x5(x10)(x7))(x6(x5(x10)(x7)))))(x3(x4(x5(x10)(x7))(x7))(x4(x5(x10)(x7))(x4(x5(x10)(x7))(x6(x5(x10)(x7))))))(exports["IsRing"]["_2104@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x5(x10)(x7)))(exports["IsRing"]["_2104@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x5(x10)(x7))(x5(x10)(x7))(x7)(x4(x5(x10)(x7))(x6(x5(x10)(x7)))))(exports["IsRing"]["_2104@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x4(x5(x10)(x7))(x6(x5(x10)(x7))))(x7)(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["_2104@25348318"]["inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(x5(x10)(x7)))))(exports["IsRing"]["_2152@25348318"]["_2154@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x4(x5(x10)(x7))(x4(x5(x10)(x7))(x6(x5(x10)(x7)))))(x4(x4(x5(x10)(x7))(x5(x10)(x7)))(x6(x5(x10)(x7))))(x7)(jAgda_Function["_$_"](x1)(x1)(x3(x4(x4(x5(x10)(x7))(x5(x10)(x7)))(x6(x5(x10)(x7))))(x4(x5(x10)(x7))(x4(x5(x10)(x7))(x6(x5(x10)(x7))))))(function (x11) {
                            return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(x2)(x2)(function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            })(x3)(x4(x4(x5(x10)(x7))(x5(x10)(x7)))(x6(x5(x10)(x7))))(x4(x5(x10)(x7))(x4(x5(x10)(x7))(x6(x5(x10)(x7)))));
                          })(exports["IsRing"]["_2104@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x4(x4(x5(x10)(x7))(x5(x10)(x7)))(x6(x5(x10)(x7))))(x4(x5(x10)(x7))(x4(x5(x10)(x7))(x6(x5(x10)(x7))))))(exports["IsRing"]["_2104@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x5(x10)(x7))(x5(x10)(x7))(x6(x5(x10)(x7)))))(exports["IsRing"]["_2152@25348318"]["_2154@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x4(x4(x5(x10)(x7))(x5(x10)(x7)))(x6(x5(x10)(x7))))(x4(x5(x10)(x4(x7)(x7)))(x6(x5(x10)(x7))))(x7)(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(x3(x4(x5(x10)(x7))(x5(x10)(x7)))(x5(x10)(x4(x7)(x7))))(x3(x6(x5(x10)(x7)))(x6(x5(x10)(x7))))(x3(x4(x4(x5(x10)(x7))(x5(x10)(x7)))(x6(x5(x10)(x7))))(x4(x5(x10)(x4(x7)(x7)))(x6(x5(x10)(x7)))))(exports["IsRing"]["_2104@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x5(x10)(x4(x7)(x7)))(x4(x5(x10)(x7))(x5(x10)(x7)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["distrib"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(x10)(x7)(x7)))(exports["IsRing"]["_2104@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x4(x5(x10)(x7))(x5(x10)(x7)))(x5(x10)(x4(x7)(x7)))(x6(x5(x10)(x7)))(x6(x5(x10)(x7))))(exports["IsRing"]["_2104@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x6(x5(x10)(x7)))))(exports["IsRing"]["_2152@25348318"]["_2154@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x4(x5(x10)(x4(x7)(x7)))(x6(x5(x10)(x7))))(x4(x5(x10)(x7))(x6(x5(x10)(x7))))(x7)(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(x3(x5(x10)(x4(x7)(x7)))(x5(x10)(x7)))(x3(x6(x5(x10)(x7)))(x6(x5(x10)(x7))))(x3(x4(x5(x10)(x4(x7)(x7)))(x6(x5(x10)(x7))))(x4(x5(x10)(x7))(x6(x5(x10)(x7)))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(x3(x10)(x10))(x3(x4(x7)(x7))(x7))(x3(x5(x10)(x4(x7)(x7)))(x5(x10)(x7)))(exports["IsRing"]["_2104@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x10))(exports["IsRing"]["_2138@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x10)(x10)(x4(x7)(x7))(x7))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["_2104@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(x7)))(exports["IsRing"]["_2104@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x5(x10)(x4(x7)(x7)))(x5(x10)(x7))(x6(x5(x10)(x7)))(x6(x5(x10)(x7))))(exports["IsRing"]["_2104@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x6(x5(x10)(x7)))))(exports["IsRing"]["_2152@25348318"]["_2154@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x4(x5(x10)(x7))(x6(x5(x10)(x7))))(x7)(x7)(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["_2104@25348318"]["inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(x5(x10)(x7)))(exports["IsRing"]["_2152@25348318"]["_2154@25348318"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x7))))))));
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
  exports["IsCommutativeSemiring"]["_1916@25348318"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["_1456@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemigroup"]["assoc"] = function (x0) {
      return x0["assoc"];
    };
  exports["IsCommutativeSemiring"]["+-isCommutativeMonoid"] = function (x0) {
      return x0["+-isCommutativeMonoid"];
    };
  exports["IsAbelianGroup"]["_770@25348318"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsGroup"]["_610@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsAbelianGroup"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsCommutativeMonoid"]["_424@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutAnnihilatingZero"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeMonoid"]["isSemigroup"] = function (x0) {
      return x0["isSemigroup"];
    };
  exports["IsCommutativeSemiring"]["_1916@25348318"]["trans"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["_1456@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsNearSemiring"]["_942@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsMonoid"]["_274@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsNearSemiring"]["+-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["_1456@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["_1308@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeMonoid"]["_424@25348318"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsSemigroup"]["_134@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["_1456@25348318"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["identity"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeMonoid"]["_444@25348318"]["_446@25348318"] = {};
  exports["IsCommutativeMonoid"]["_444@25348318"]["_446@25348318"]["_∎"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∎"](x0)(x1)(jAgda_Relation_Binary["Setoid"]["record"](x2)(x3)(exports["IsCommutativeMonoid"]["_424@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)));
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutOne"]["distrib"] = function (x0) {
      return x0["distrib"];
    };
  exports["IsBooleanAlgebra"]["_2870@25348318"]["∨-∧-distribʳ"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsDistributiveLattice"]["∨-∧-distribʳ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsBooleanAlgebra"]["isDistributiveLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsRing"]["_2104@25348318"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsAbelianGroup"]["_770@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeSemiring"]["_1870@25348318"] = {};
  exports["IsCommutativeSemiring"]["_1870@25348318"]["_∎"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∎"](x0)(x1)(jAgda_Relation_Binary["Setoid"]["record"](x2)(x3)(exports["IsCommutativeSemiring"]["+-CM"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8)));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeRing"]["_2334@25348318"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2104@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsLattice"]["∧-comm"] = function (x0) {
      return x0["∧-comm"];
    };
  exports["IsSemiringWithoutAnnihilatingZero"]["distrib"] = function (x0) {
      return x0["distrib"];
    };
  exports["IsLattice"]["_2554@25348318"] = {};
  exports["IsLattice"]["_2554@25348318"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return jAgda_Relation_Binary_Core["IsEquivalence"]["trans"](undefined)(undefined)(undefined)(undefined)(exports["IsLattice"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiring"]["_1916@25348318"]["isSemigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["_1456@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsDistributiveLattice"]["_2694@25348318"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsLattice"]["_2554@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDistributiveLattice"]["isLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutAnnihilatingZero"]["_1308@25348318"] = {};
  exports["IsSemiringWithoutAnnihilatingZero"]["_1308@25348318"]["identity"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsMonoid"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutAnnihilatingZero"]["*-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeRing"]["_2334@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2138@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsBooleanAlgebra"]["∧-complementʳ"] = function (x0) {
      return x0["∧-complementʳ"];
    };
  exports["IsRing"]["+-isAbelianGroup"] = function (x0) {
      return x0["+-isAbelianGroup"];
    };
  exports["IsCommutativeSemiring"]["+-CM"] = {};
  exports["IsCommutativeSemiring"]["+-CM"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsCommutativeMonoid"]["_424@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeRing"]["_2334@25348318"]["identity"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2104@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsBooleanAlgebra"]["_2870@25348318"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsDistributiveLattice"]["_2694@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsBooleanAlgebra"]["isDistributiveLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsRing"]["_2104@25348318"]["identity"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsAbelianGroup"]["_770@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeRing"]["_2334@25348318"]["distrib"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["distrib"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsSemiring"]["record"] = function (x0) {
      return function (x1) {
        return {
          "isSemiringWithoutAnnihilatingZero": x0,
          "record": function (x2) {
            return x2["record"](x0, x1);
          },
          "zero": x1
        };
      };
    };
  exports["IsBooleanAlgebra"]["¬-cong"] = function (x0) {
      return x0["¬-cong"];
    };
  exports["IsRing"]["*-isMonoid"] = function (x0) {
      return x0["*-isMonoid"];
    };
  exports["IsCommutativeRing"]["_2334@25348318"]["+-isAbelianGroup"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsAbelianGroup"]["_770@25348318"]["_-_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["IsGroup"]["_-_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["IsAbelianGroup"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsRing"]["_2104@25348318"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["IsAbelianGroup"]["_770@25348318"]["reflexive"](x0)(x1)(x2)(x3)(x4)(x7)(x6)(exports["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsCommutativeSemiring"]["_1870@25348318"]["_∼⟨_⟩_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∼⟨_⟩_"](x0)(x1)(jAgda_Relation_Binary["Setoid"]["record"](x2)(x3)(exports["IsCommutativeSemiring"]["+-CM"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8)));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeRing"]["_2334@25348318"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2104@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsSemiringWithoutOne"]["zero"] = function (x0) {
      return x0["zero"];
    };
  exports["IsCommutativeSemiring"]["+-CM"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsCommutativeMonoid"]["_424@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeRing"]["_2334@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2138@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsSemiringWithoutAnnihilatingZero"]["_1308@25348318"]["isSemigroup"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutAnnihilatingZero"]["*-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_2590@25348318"] = {};
  exports["_2590@25348318"]["_DistributesOverʳ_"] = function (x0) {
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
  exports["IsGroup"]["_610@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsMonoid"]["_274@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsGroup"]["isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutOne"]["isNearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["IsNearSemiring"]["record"](exports["IsSemiringWithoutOne"]["_1110@25348318"]["isMonoid"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7))(exports["IsSemiringWithoutOne"]["*-isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutOne"]["distrib"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutOne"]["zero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7)));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["IsSemiringWithoutOne"]["_1110@25348318"]["isMonoid"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsBooleanAlgebra"]["_2870@25348318"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsDistributiveLattice"]["_2694@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsBooleanAlgebra"]["isDistributiveLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsRing"]["_2104@25348318"]["isCommutativeMonoid"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsAbelianGroup"]["isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeRing"]["_2334@25348318"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2104@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["_830@25348318"] = {};
  exports["_830@25348318"]["_DistributesOverʳ_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
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
  exports["IsDistributiveLattice"]["_2694@25348318"]["∧-assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsLattice"]["∧-assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDistributiveLattice"]["isLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeMonoid"]["_370@25348318"]["RightIdentity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
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
  exports["IsCommutativeSemiring"]["_1916@25348318"]["isEquivalence"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["_1456@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemiringWithoutOne"]["_1134@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsRing"]["zero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Data_Product["Σ"]["_,_"](exports["IsRing"]["_2152@25348318"]["zeroˡ"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9))(exports["IsRing"]["_2152@25348318"]["zeroʳ"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9));
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
  exports["IsGroup"]["_610@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsMonoid"]["_274@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsGroup"]["isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutOne"]["_1110@25348318"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsCommutativeMonoid"]["_424@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutOne"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeMonoid"]["_424@25348318"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsSemigroup"]["_134@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsNearSemiring"]["_942@25348318"]["identity"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsMonoid"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsNearSemiring"]["+-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["_1456@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["_1308@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemigroup"]["∙-cong"] = function (x0) {
      return x0["∙-cong"];
    };
  exports["IsDistributiveLattice"]["∨-∧-distribʳ"] = function (x0) {
      return x0["∨-∧-distribʳ"];
    };
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemiringWithoutOne"]["_1110@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiring"]["_1916@25348318"]["*-isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["_1456@25348318"]["*-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["_1456@25348318"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeMonoid"]["identityˡ"] = function (x0) {
      return x0["identityˡ"];
    };
  exports["IsCommutativeSemiring"]["isCommutativeSemiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsCommutativeSemiringWithoutOne"]["record"](exports["IsCommutativeSemiring"]["_1916@25348318"]["isSemiringWithoutOne"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8))(exports["IsCommutativeSemiring"]["*-CM"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsLattice"]["∧-assoc"] = function (x0) {
      return x0["∧-assoc"];
    };
  exports["IsNearSemiring"]["_962@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemigroup"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsNearSemiring"]["*-isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["_1456@25348318"]["+-isCommutativeMonoid"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeMonoid"]["_444@25348318"]["_446@25348318"]["_∼⟨_⟩_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∼⟨_⟩_"](x0)(x1)(jAgda_Relation_Binary["Setoid"]["record"](x2)(x3)(exports["IsCommutativeMonoid"]["_424@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)));
                };
              };
            };
          };
        };
      };
    };
  exports["IsAbelianGroup"]["_770@25348318"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["IsGroup"]["_610@25348318"]["reflexive"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["IsAbelianGroup"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsCommutativeMonoid"]["_424@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutAnnihilatingZero"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsMonoid"]["_274@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsSemigroup"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiring"]["*-isCommutativeMonoid"] = function (x0) {
      return x0["*-isCommutativeMonoid"];
    };
  exports["IsCommutativeSemiringWithoutOne"]["record"] = function (x0) {
      return function (x1) {
        return {
          "*-comm": x1,
          "isSemiringWithoutOne": x0,
          "record": function (x2) {
            return x2["record"](x0, x1);
          }
        };
      };
    };
  exports["IsNearSemiring"]["_942@25348318"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsMonoid"]["_274@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsNearSemiring"]["+-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["_1456@25348318"]["comm"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["_1456@25348318"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemiringWithoutOne"]["_1110@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsRing"]["_2152@25348318"]["_2154@25348318"] = {};
  exports["IsRing"]["_2152@25348318"]["_2154@25348318"]["_∎"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∎"](x0)(x1)(jAgda_Relation_Binary["Setoid"]["record"](x2)(x3)(exports["IsRing"]["_2104@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)));
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
  exports["IsGroup"]["_610@25348318"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["IsMonoid"]["_274@25348318"]["reflexive"](x0)(x1)(x2)(x3)(x4)(x5)(exports["IsGroup"]["isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsAbelianGroup"]["isGroup"] = function (x0) {
      return x0["isGroup"];
    };
  exports["IsLattice"]["_2554@25348318"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_Core["IsEquivalence"]["reflexive"](x0)(x1)(x2)(x3)(exports["IsLattice"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutAnnihilatingZero"]["+-isCommutativeMonoid"] = function (x0) {
      return x0["+-isCommutativeMonoid"];
    };
  exports["IsAbelianGroup"]["_770@25348318"]["isMonoid"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsGroup"]["isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsAbelianGroup"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsCommutativeMonoid"]["isMonoid"](x0)(x1)(x2)(x3)(x4)(x6)(exports["IsSemiringWithoutAnnihilatingZero"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsMonoid"]["isSemigroup"] = function (x0) {
      return x0["isSemigroup"];
    };
  exports["_502@25348318"] = {};
  exports["_502@25348318"]["Inverse"] = function (x0) {
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
  exports["IsAbelianGroup"]["isCommutativeMonoid"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsCommutativeMonoid"]["record"](exports["IsAbelianGroup"]["_770@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["IsAbelianGroup"]["_770@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0)))(exports["IsAbelianGroup"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutAnnihilatingZero"]["_1308@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsMonoid"]["_274@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutAnnihilatingZero"]["*-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsMonoid"]["_274@25348318"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsSemigroup"]["_134@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["zero"] = function (x0) {
      return x0["zero"];
    };
  exports["IsCommutativeMonoid"]["_424@25348318"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsSemigroup"]["_134@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsRing"]["_2104@25348318"]["comm"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsAbelianGroup"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeRing"]["_2334@25348318"]["⁻¹-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2104@25348318"]["⁻¹-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsBooleanAlgebra"]["_2870@25348318"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsDistributiveLattice"]["_2694@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsBooleanAlgebra"]["isDistributiveLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsRing"]["_2104@25348318"]["inverse"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsAbelianGroup"]["_770@25348318"]["inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeRing"]["_2334@25348318"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2104@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsSemiringWithoutOne"]["+-isCommutativeMonoid"] = function (x0) {
      return x0["+-isCommutativeMonoid"];
    };
  exports["IsBooleanAlgebra"]["_2870@25348318"]["∨-comm"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsDistributiveLattice"]["_2694@25348318"]["∨-comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsBooleanAlgebra"]["isDistributiveLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"] = function (x0) {
      return x0["isSemiringWithoutOne"];
    };
  exports["IsRing"]["_2138@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsMonoid"]["_274@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["*-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsGroup"]["inverse"] = function (x0) {
      return x0["inverse"];
    };
  exports["IsCommutativeRing"]["_2394@25348318"] = {};
  exports["IsCommutativeRing"]["_2394@25348318"]["isCommutativeSemiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["IsCommutativeSemiring"]["isCommutativeSemiringWithoutOne"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsCommutativeRing"]["isCommutativeSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9));
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
  exports["IsSemiringWithoutOne"]["_1110@25348318"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["IsCommutativeMonoid"]["identity"](x0)(x1)(x2)(x3)(x4)(x6)(exports["IsSemiringWithoutOne"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_830@25348318"]["LeftZero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
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
  exports["IsLattice"]["∨-assoc"] = function (x0) {
      return x0["∨-assoc"];
    };
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemiringWithoutOne"]["_1110@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsRing"]["_2152@25348318"]["zeroˡ"] = function (x0) {
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
                          return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["_2152@25348318"]["_2154@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x5(x7)(x10))(x4(x5(x7)(x10))(x7))(x7)(jAgda_Function["_$_"](x1)(x1)(x3(x4(x5(x7)(x10))(x7))(x5(x7)(x10)))(function (x11) {
                            return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(x2)(x2)(function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            })(x3)(x4(x5(x7)(x10))(x7))(x5(x7)(x10));
                          })(exports["IsRing"]["_2104@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x4(x5(x7)(x10))(x7))(x5(x7)(x10)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["_2104@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(x5(x7)(x10))))(exports["IsRing"]["_2152@25348318"]["_2154@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x4(x5(x7)(x10))(x7))(x4(x5(x7)(x10))(x4(x5(x7)(x10))(x6(x5(x7)(x10)))))(x7)(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(x3(x5(x7)(x10))(x5(x7)(x10)))(x3(x7)(x4(x5(x7)(x10))(x6(x5(x7)(x10)))))(x3(x4(x5(x7)(x10))(x7))(x4(x5(x7)(x10))(x4(x5(x7)(x10))(x6(x5(x7)(x10))))))(exports["IsRing"]["_2104@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x5(x7)(x10)))(exports["IsRing"]["_2104@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x5(x7)(x10))(x5(x7)(x10))(x7)(x4(x5(x7)(x10))(x6(x5(x7)(x10)))))(exports["IsRing"]["_2104@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x4(x5(x7)(x10))(x6(x5(x7)(x10))))(x7)(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["_2104@25348318"]["inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(x5(x7)(x10)))))(exports["IsRing"]["_2152@25348318"]["_2154@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x4(x5(x7)(x10))(x4(x5(x7)(x10))(x6(x5(x7)(x10)))))(x4(x4(x5(x7)(x10))(x5(x7)(x10)))(x6(x5(x7)(x10))))(x7)(jAgda_Function["_$_"](x1)(x1)(x3(x4(x4(x5(x7)(x10))(x5(x7)(x10)))(x6(x5(x7)(x10))))(x4(x5(x7)(x10))(x4(x5(x7)(x10))(x6(x5(x7)(x10))))))(function (x11) {
                            return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(x2)(x2)(function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            })(x3)(x4(x4(x5(x7)(x10))(x5(x7)(x10)))(x6(x5(x7)(x10))))(x4(x5(x7)(x10))(x4(x5(x7)(x10))(x6(x5(x7)(x10)))));
                          })(exports["IsRing"]["_2104@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x4(x4(x5(x7)(x10))(x5(x7)(x10)))(x6(x5(x7)(x10))))(x4(x5(x7)(x10))(x4(x5(x7)(x10))(x6(x5(x7)(x10))))))(exports["IsRing"]["_2104@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x5(x7)(x10))(x5(x7)(x10))(x6(x5(x7)(x10)))))(exports["IsRing"]["_2152@25348318"]["_2154@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x4(x4(x5(x7)(x10))(x5(x7)(x10)))(x6(x5(x7)(x10))))(x4(x5(x4(x7)(x7))(x10))(x6(x5(x7)(x10))))(x7)(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(x3(x4(x5(x7)(x10))(x5(x7)(x10)))(x5(x4(x7)(x7))(x10)))(x3(x6(x5(x7)(x10)))(x6(x5(x7)(x10))))(x3(x4(x4(x5(x7)(x10))(x5(x7)(x10)))(x6(x5(x7)(x10))))(x4(x5(x4(x7)(x7))(x10))(x6(x5(x7)(x10)))))(exports["IsRing"]["_2104@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x5(x4(x7)(x7))(x10))(x4(x5(x7)(x10))(x5(x7)(x10)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["distrib"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(x10)(x7)(x7)))(exports["IsRing"]["_2104@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x4(x5(x7)(x10))(x5(x7)(x10)))(x5(x4(x7)(x7))(x10))(x6(x5(x7)(x10)))(x6(x5(x7)(x10))))(exports["IsRing"]["_2104@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x6(x5(x7)(x10)))))(exports["IsRing"]["_2152@25348318"]["_2154@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x4(x5(x4(x7)(x7))(x10))(x6(x5(x7)(x10))))(x4(x5(x7)(x10))(x6(x5(x7)(x10))))(x7)(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(x3(x5(x4(x7)(x7))(x10))(x5(x7)(x10)))(x3(x6(x5(x7)(x10)))(x6(x5(x7)(x10))))(x3(x4(x5(x4(x7)(x7))(x10))(x6(x5(x7)(x10))))(x4(x5(x7)(x10))(x6(x5(x7)(x10)))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(x3(x4(x7)(x7))(x7))(x3(x10)(x10))(x3(x5(x4(x7)(x7))(x10))(x5(x7)(x10)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["_2104@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(x7))(exports["IsRing"]["_2138@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x4(x7)(x7))(x7)(x10)(x10))(exports["IsRing"]["_2104@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x10)))(exports["IsRing"]["_2104@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x5(x4(x7)(x7))(x10))(x5(x7)(x10))(x6(x5(x7)(x10)))(x6(x5(x7)(x10))))(exports["IsRing"]["_2104@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(x6(x5(x7)(x10)))))(exports["IsRing"]["_2152@25348318"]["_2154@25348318"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x4(x5(x7)(x10))(x6(x5(x7)(x10))))(x7)(x7)(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["_2104@25348318"]["inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(x5(x7)(x10)))(exports["IsRing"]["_2152@25348318"]["_2154@25348318"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x7))))))));
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
  exports["IsCommutativeSemiring"]["_1916@25348318"]["assoc"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["_1456@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsRing"]["_2186@25348318"] = {};
  exports["IsRing"]["_2186@25348318"]["isSemiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["IsSemiring"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9));
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
  exports["IsCommutativeSemiring"]["_1916@25348318"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["_1456@25348318"]["identity"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemigroup"]["_134@25348318"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function (x0) {
                return jAgda_Relation_Binary_Core["IsEquivalence"]["trans"](undefined)(undefined)(undefined)(undefined)(exports["IsSemigroup"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(x0));
              };
            };
          };
        };
      };
    };
  exports["IsDistributiveLattice"]["_2694@25348318"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsLattice"]["_2554@25348318"]["reflexive"](x0)(x1)(x2)(x3)(x4)(x5)(exports["IsDistributiveLattice"]["isLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["IsDistributiveLattice"]["_2694@25348318"]["∨-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsLattice"]["∨-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDistributiveLattice"]["isLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiring"]["_1916@25348318"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["_1456@25348318"]["reflexive"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsBooleanAlgebra"]["isDistributiveLattice"] = function (x0) {
      return x0["isDistributiveLattice"];
    };
  exports["IsCommutativeRing"]["_2334@25348318"]["comm"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2104@25348318"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsMonoid"]["record"] = function (x0) {
      return function (x1) {
        return {
          "identity": x1,
          "isSemigroup": x0,
          "record": function (x2) {
            return x2["record"](x0, x1);
          }
        };
      };
    };
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["IsSemiringWithoutOne"]["_1110@25348318"]["identity"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsRing"]["_2152@25348318"]["_2154@25348318"]["_∼⟨_⟩_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∼⟨_⟩_"](x0)(x1)(jAgda_Relation_Binary["Setoid"]["record"](x2)(x3)(exports["IsRing"]["_2104@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)));
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
  exports["IsCommutativeSemiring"]["zero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return jAgda_Data_Product["Σ"]["_,_"](exports["IsCommutativeSemiring"]["zeroˡ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8))(exports["IsCommutativeSemiring"]["_1908@25348318"]["zeroʳ"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsGroup"]["_610@25348318"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsMonoid"]["_274@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsGroup"]["isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutOne"]["_1134@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemigroup"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutOne"]["*-isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["IsSemiringWithoutOne"]["_1110@25348318"]["reflexive"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiring"]["_1916@25348318"]["∙-cong"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["_1456@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemigroup"]["isEquivalence"] = function (x0) {
      return x0["isEquivalence"];
    };
  exports["IsDistributiveLattice"]["_2694@25348318"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsLattice"]["_2554@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDistributiveLattice"]["isLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiring"]["_1916@25348318"]["isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["_1456@25348318"]["isMonoid"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsMonoid"]["_274@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsSemigroup"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeRing"]["_2334@25348318"]["_-_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["IsRing"]["_2104@25348318"]["_-_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsSemiringWithoutAnnihilatingZero"]["_1308@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsMonoid"]["_274@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutAnnihilatingZero"]["*-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsNearSemiring"]["_942@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsMonoid"]["_274@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsNearSemiring"]["+-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeMonoid"]["_424@25348318"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsSemigroup"]["_134@25348318"]["reflexive"](x0)(x1)(x2)(x3)(x4)(exports["IsCommutativeMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["_1706@25348318"] = {};
  exports["_1706@25348318"]["_DistributesOverʳ_"] = function (x0) {
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
  exports["IsSemiring"]["_1456@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_170@25348318"] = {};
  exports["_170@25348318"]["Identity"] = function (x0) {
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
  exports["IsNearSemiring"]["_942@25348318"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsMonoid"]["_274@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsNearSemiring"]["+-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_1996@25348318"] = {};
  exports["_1996@25348318"]["_DistributesOver_"] = function (x0) {
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
    };
  exports["IsSemiring"]["_1456@25348318"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["reflexive"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutOne"]["_1110@25348318"]["isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["IsCommutativeMonoid"]["isMonoid"](x0)(x1)(x2)(x3)(x4)(x6)(exports["IsSemiringWithoutOne"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiringWithoutOne"]["*-comm"] = function (x0) {
      return x0["*-comm"];
    };
  exports["IsRing"]["_2138@25348318"]["identity"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsMonoid"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["*-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsGroup"]["⁻¹-cong"] = function (x0) {
      return x0["⁻¹-cong"];
    };
  exports["IsLattice"]["∨-cong"] = function (x0) {
      return x0["∨-cong"];
    };
  exports["IsAbelianGroup"]["comm"] = function (x0) {
      return x0["comm"];
    };
  exports["IsSemiringWithoutAnnihilatingZero"]["*-isMonoid"] = function (x0) {
      return x0["*-isMonoid"];
    };
  exports["IsLattice"]["_2554@25348318"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return jAgda_Relation_Binary_Core["IsEquivalence"]["sym"](undefined)(undefined)(undefined)(undefined)(exports["IsLattice"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["_998@25348318"] = {};
  exports["_998@25348318"]["Zero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
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
  exports["IsAbelianGroup"]["_770@25348318"]["isSemigroup"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsGroup"]["_610@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsAbelianGroup"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["isSemigroup"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsCommutativeMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutAnnihilatingZero"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsMonoid"]["identity"] = function (x0) {
      return x0["identity"];
    };
  exports["IsCommutativeSemiring"]["_1916@25348318"]["sym"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["_1456@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeRing"]["_2334@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2104@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsBooleanAlgebra"]["∨-complementʳ"] = function (x0) {
      return x0["∨-complementʳ"];
    };
  exports["IsRing"]["_2104@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsAbelianGroup"]["_770@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeSemiring"]["*-CM"]["isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsCommutativeMonoid"]["isMonoid"](x0)(x1)(x2)(x3)(x5)(x7)(exports["IsCommutativeSemiring"]["*-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeRing"]["_2334@25348318"]["inverse"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2104@25348318"]["inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsBooleanAlgebra"]["_2870@25348318"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["IsDistributiveLattice"]["_2694@25348318"]["reflexive"](x0)(x1)(x2)(x3)(x4)(x5)(exports["IsBooleanAlgebra"]["isDistributiveLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsBooleanAlgebra"]["_2870@25348318"]["∨-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsDistributiveLattice"]["_2694@25348318"]["∨-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsBooleanAlgebra"]["isDistributiveLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsRing"]["_2104@25348318"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsAbelianGroup"]["_770@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeRing"]["_2334@25348318"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["IsRing"]["_2104@25348318"]["reflexive"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsSemiringWithoutOne"]["*-isSemigroup"] = function (x0) {
      return x0["*-isSemigroup"];
    };
  exports["IsCommutativeRing"]["record"] = function (x0) {
      return function (x1) {
        return {
          "*-comm": x1,
          "isRing": x0,
          "record": function (x2) {
            return x2["record"](x0, x1);
          }
        };
      };
    };
  exports["IsRing"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return {
            "*-isMonoid": x1,
            "+-isAbelianGroup": x0,
            "distrib": x2,
            "record": function (x3) {
              return x3["record"](x0, x1, x2);
            }
          };
        };
      };
    };
  exports["IsLattice"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return {
                      "absorptive": x7,
                      "isEquivalence": x0,
                      "record": function (x8) {
                        return x8["record"](x0, x1, x2, x3, x4, x5, x6, x7);
                      },
                      "∧-assoc": x5,
                      "∧-comm": x4,
                      "∧-cong": x6,
                      "∨-assoc": x2,
                      "∨-comm": x1,
                      "∨-cong": x3
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsAbelianGroup"]["_770@25348318"]["inverse"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsGroup"]["inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsAbelianGroup"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsCommutativeMonoid"]["_424@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutAnnihilatingZero"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_1530@25348318"] = {};
  exports["_1530@25348318"]["Commutative"] = function (x0) {
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
  exports["IsSemiringWithoutOne"]["_1110@25348318"]["comm"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsCommutativeMonoid"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutOne"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeMonoid"]["_424@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsSemigroup"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["_666@25348318"] = {};
  exports["_666@25348318"]["Commutative"] = function (x0) {
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
  exports["IsNearSemiring"]["distribʳ"] = function (x0) {
      return x0["distribʳ"];
    };
  exports["IsBooleanAlgebra"]["_2870@25348318"]["∧-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsDistributiveLattice"]["_2694@25348318"]["∧-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsBooleanAlgebra"]["isDistributiveLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsRing"]["_2104@25348318"]["isSemigroup"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsAbelianGroup"]["_770@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeRing"]["_2334@25348318"]["isSemiringWithoutAnnihilatingZero"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeSemiring"]["_1916@25348318"]["isSemiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsDistributiveLattice"]["_2694@25348318"]["∨-assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsLattice"]["∨-assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDistributiveLattice"]["isLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsLattice"]["isEquivalence"] = function (x0) {
      return x0["isEquivalence"];
    };
  exports["_998@25348318"]["_DistributesOver_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
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
  exports["_2758@25348318"] = {};
  exports["_2758@25348318"]["RightInverse"] = function (x0) {
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
      };
    };
  exports["IsBooleanAlgebra"]["_2870@25348318"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsDistributiveLattice"]["_2694@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsBooleanAlgebra"]["isDistributiveLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsRing"]["_2104@25348318"]["_-_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["IsAbelianGroup"]["_770@25348318"]["_-_"](x0)(x1)(x2)(x3)(x4)(x7)(x6)(exports["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["IsCommutativeRing"]["_2334@25348318"]["isMonoid"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2104@25348318"]["isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsSemigroup"]["_134@25348318"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return jAgda_Relation_Binary_Core["IsEquivalence"]["reflexive"](x0)(x1)(x2)(x3)(exports["IsSemigroup"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(x5));
              };
            };
          };
        };
      };
    };
  exports["IsDistributiveLattice"]["_2694@25348318"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsLattice"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDistributiveLattice"]["isLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiring"]["_1916@25348318"]["comm"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["_1456@25348318"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_2426@25348318"]["Commutative"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return "*";
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["_1496@25348318"] = {};
  exports["IsSemiring"]["_1496@25348318"]["isNearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiringWithoutOne"]["isNearSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["IsSemiring"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeRing"]["_2334@25348318"]["isSemigroup"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2138@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemiringWithoutOne"]["_1110@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiring"]["isSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["record"](exports["IsSemiringWithoutAnnihilatingZero"]["record"](exports["IsCommutativeSemiring"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8))(exports["IsCommutativeSemiring"]["*-CM"]["isMonoid"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8))(exports["IsCommutativeSemiring"]["distrib"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)))(exports["IsCommutativeSemiring"]["zero"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["_1456@25348318"]["distrib"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["distrib"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_1706@25348318"]["LeftZero"] = function (x0) {
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
  exports["IsAbelianGroup"]["_770@25348318"]["⁻¹-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsGroup"]["⁻¹-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsAbelianGroup"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsCommutativeMonoid"]["_424@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutAnnihilatingZero"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsMonoid"]["_274@25348318"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsSemigroup"]["_134@25348318"]["reflexive"](x0)(x1)(x2)(x3)(x4)(exports["IsMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeRing"]["isRing"] = function (x0) {
      return x0["isRing"];
    };
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemiringWithoutOne"]["_1110@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsGroup"]["_610@25348318"]["isSemigroup"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsGroup"]["isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutOne"]["_1110@25348318"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsCommutativeMonoid"]["_424@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutOne"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsNearSemiring"]["_942@25348318"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsMonoid"]["_274@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsNearSemiring"]["+-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["_1456@25348318"]["isSemigroup"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["_1308@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutAnnihilatingZero"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return {
            "*-isMonoid": x1,
            "+-isCommutativeMonoid": x0,
            "distrib": x2,
            "record": function (x3) {
              return x3["record"](x0, x1, x2);
            }
          };
        };
      };
    };
  exports["IsDistributiveLattice"]["record"] = function (x0) {
      return function (x1) {
        return {
          "isLattice": x0,
          "record": function (x2) {
            return x2["record"](x0, x1);
          },
          "∨-∧-distribʳ": x1
        };
      };
    };
  exports["IsBooleanAlgebra"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return {
              "isDistributiveLattice": x0,
              "record": function (x4) {
                return x4["record"](x0, x1, x2, x3);
              },
              "¬-cong": x3,
              "∧-complementʳ": x2,
              "∨-complementʳ": x1
            };
          };
        };
      };
    };
  exports["IsGroup"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return {
            "inverse": x1,
            "isMonoid": x0,
            "record": function (x3) {
              return x3["record"](x0, x1, x2);
            },
            "⁻¹-cong": x2
          };
        };
      };
    };
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["comm"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsSemiringWithoutOne"]["_1110@25348318"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsGroup"]["_610@25348318"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsMonoid"]["_274@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsGroup"]["isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutOne"]["_1110@25348318"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsCommutativeMonoid"]["_424@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutOne"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["isNearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["IsSemiringWithoutOne"]["isNearSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsRing"]["_2186@25348318"]["isNearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["IsSemiring"]["_1496@25348318"]["isNearSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(exports["IsRing"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9));
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
  exports["IsCommutativeSemiring"]["_1916@25348318"]["∙-cong"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["_1456@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemigroup"]["_134@25348318"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function (x0) {
                return jAgda_Relation_Binary_Core["IsEquivalence"]["sym"](undefined)(undefined)(undefined)(undefined)(exports["IsSemigroup"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(x0));
              };
            };
          };
        };
      };
    };
  exports["IsDistributiveLattice"]["_2694@25348318"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsLattice"]["_2554@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDistributiveLattice"]["isLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeRing"]["*-comm"] = function (x0) {
      return x0["*-comm"];
    };
  exports["IsAbelianGroup"]["_770@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsGroup"]["_610@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsAbelianGroup"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsMonoid"]["_274@25348318"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsSemigroup"]["_134@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsNearSemiring"]["zeroˡ"] = function (x0) {
      return x0["zeroˡ"];
    };
  exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"] = function (x0) {
      return x0["isSemiringWithoutAnnihilatingZero"];
    };
  exports["IsCommutativeMonoid"]["_424@25348318"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsSemigroup"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsNearSemiring"]["_942@25348318"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["IsMonoid"]["_274@25348318"]["reflexive"](x0)(x1)(x2)(x3)(x4)(x6)(exports["IsNearSemiring"]["+-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["_1456@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiring"]["_1456@25348318"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function (x0) {
                      return exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsRing"]["_2138@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsMonoid"]["_274@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["*-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsGroup"]["isMonoid"] = function (x0) {
      return x0["isMonoid"];
    };
  exports["IsCommutativeRing"]["_2394@25348318"]["*-isCommutativeMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["IsCommutativeSemiring"]["*-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isCommutativeSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9));
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
  exports["IsSemiringWithoutOne"]["_1110@25348318"]["∙-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsCommutativeMonoid"]["_424@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsSemiringWithoutOne"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsLattice"]["∨-comm"] = function (x0) {
      return x0["∨-comm"];
    };
  exports["IsLattice"]["_2554@25348318"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return jAgda_Relation_Binary_Core["IsEquivalence"]["refl"](undefined)(undefined)(undefined)(undefined)(exports["IsLattice"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiring"]["_1762@25348318"]["Zero"] = function (x0) {
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
    };
  exports["IsAbelianGroup"]["_770@25348318"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function (x0) {
                    return exports["IsGroup"]["_610@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsAbelianGroup"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsCommutativeMonoid"]["identity"](x0)(x1)(x2)(x3)(x4)(x6)(exports["IsSemiringWithoutAnnihilatingZero"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsDistributiveLattice"]["_2694@25348318"]["∨-comm"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsLattice"]["∨-comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDistributiveLattice"]["isLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsCommutativeSemiring"]["_1916@25348318"]["refl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["IsSemiring"]["_1456@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_1176@25348318"] = {};
  exports["_1176@25348318"]["_DistributesOver_"] = function (x0) {
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
  exports["IsRing"]["_2050@25348318"] = {};
  exports["IsRing"]["_2050@25348318"]["Zero"] = function (x0) {
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
      };
    };
  exports["IsCommutativeRing"]["_2334@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2104@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeRing"]["_2334@25348318"]["isSemigroup"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsRing"]["_2104@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsBooleanAlgebra"]["_2870@25348318"]["isLattice"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsDistributiveLattice"]["isLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsBooleanAlgebra"]["isDistributiveLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsRing"]["_2104@25348318"]["assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsAbelianGroup"]["_770@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsCommutativeRing"]["_2334@25348318"]["isSemiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["IsRing"]["_2186@25348318"]["isSemiringWithoutOne"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9));
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
  exports["_316@25348318"]["Commutative"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return "*";
                };
              };
            };
          };
        };
      };
    };
  exports["IsBooleanAlgebra"]["_2870@25348318"]["∨-assoc"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsDistributiveLattice"]["_2694@25348318"]["∨-assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsBooleanAlgebra"]["isDistributiveLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsRing"]["_2104@25348318"]["⁻¹-cong"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function () {
                  return function () {
                    return function () {
                      return function (x0) {
                        return exports["IsAbelianGroup"]["_770@25348318"]["⁻¹-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["IsSemiringWithoutOne"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return {
              "*-isSemigroup": x1,
              "+-isCommutativeMonoid": x0,
              "distrib": x2,
              "record": function (x4) {
                return x4["record"](x0, x1, x2, x3);
              },
              "zero": x3
            };
          };
        };
      };
    };
  exports["IsCommutativeMonoid"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return {
            "comm": x2,
            "identityˡ": x1,
            "isSemigroup": x0,
            "record": function (x3) {
              return x3["record"](x0, x1, x2);
            }
          };
        };
      };
    };
  });
