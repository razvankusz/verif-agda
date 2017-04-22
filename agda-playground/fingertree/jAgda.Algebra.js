define(["exports","jAgda.Algebra.Structures","jAgda.Relation.Binary"],function(exports,jAgda_Algebra_Structures,jAgda_Relation_Binary) {
  exports["CommutativeSemiringWithoutOne"] = {};
  exports["CommutativeMonoid"] = {};
  exports["CommutativeRing"] = {};
  exports["Semigroup"] = {};
  exports["Group"] = {};
  exports["SemiringWithoutAnnihilatingZero"] = {};
  exports["DistributiveLattice"] = {};
  exports["Semiring"] = {};
  exports["NearSemiring"] = {};
  exports["RawMonoid"] = {};
  exports["CommutativeSemiring"] = {};
  exports["Lattice"] = {};
  exports["SemiringWithoutOne"] = {};
  exports["RawRing"] = {};
  exports["Ring"] = {};
  exports["AbelianGroup"] = {};
  exports["BooleanAlgebra"] = {};
  exports["Monoid"] = {};
  exports["NearSemiring"]["_384@104512718"] = {};
  exports["NearSemiring"]["_384@104512718"]["refl"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsNearSemiring"]["_942@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["NearSemiring"]["isNearSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"] = {};
  exports["BooleanAlgebra"]["_1424@104512718"]["isEquivalence"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["_2870@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeMonoid"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["Semiring"]["_650@104512718"] = {};
  exports["Semiring"]["_650@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"] = {};
  exports["CommutativeRing"]["_1148@104512718"]["+-isAbelianGroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_914@104512718"] = {};
  exports["CommutativeSemiring"]["_914@104512718"]["rawMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_698@104512718"]["rawMonoid"](undefined)(undefined)(exports["CommutativeSemiring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["RawMonoid"]["ε"] = function (x0) {
      return x0["ε"];
    };
  exports["AbelianGroup"]["_302@104512718"] = {};
  exports["AbelianGroup"]["_302@104512718"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsAbelianGroup"]["_770@25348318"]["reflexive"](x0)(x1)(function (x3) {
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
          })(exports["AbelianGroup"]["_∙_"](undefined)(undefined)(x2))(exports["AbelianGroup"]["ε"](undefined)(undefined)(x2))(exports["AbelianGroup"]["_⁻¹"](undefined)(undefined)(x2))(exports["AbelianGroup"]["isAbelianGroup"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Ring"]["_1076@104512718"] = {};
  exports["Ring"]["_1076@104512718"]["semiringWithoutAnnihilatingZero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["semiringWithoutAnnihilatingZero"](undefined)(undefined)(exports["Ring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["DistributiveLattice"]["_1346@104512718"] = {};
  exports["DistributiveLattice"]["_1346@104512718"]["isEquivalence"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsDistributiveLattice"]["_2694@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DistributiveLattice"]["isDistributiveLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"] = {};
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["isEquivalence"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1076@104512718"]["*-monoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_698@104512718"]["*-monoid"](undefined)(undefined)(exports["Ring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["AbelianGroup"]["_302@104512718"]["identity"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsAbelianGroup"]["_770@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AbelianGroup"]["isAbelianGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1228@104512718"] = {};
  exports["CommutativeRing"]["_1228@104512718"]["semiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeSemiring"]["_914@104512718"]["semiringWithoutOne"](x0)(x1)(exports["CommutativeRing"]["commutativeSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["SemiringWithoutOne"]["_462@104512718"] = {};
  exports["SemiringWithoutOne"]["_462@104512718"]["isEquivalence"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["_1110@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["CommutativeRing"]["_1228@104512718"]["+-commutativeMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeSemiring"]["_914@104512718"]["+-commutativeMonoid"](x0)(x1)(exports["CommutativeRing"]["commutativeSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["SemiringWithoutOne"]["_462@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["_1110@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["identity"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_854@104512718"] = {};
  exports["CommutativeSemiring"]["_854@104512718"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["reflexive"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Semiring"]["1#"] = function (x0) {
      return x0["1#"];
    };
  exports["NearSemiring"]["_384@104512718"]["*-isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsNearSemiring"]["*-isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["NearSemiring"]["isNearSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["_∧_"] = function (x0) {
      return x0["_∧_"];
    };
  exports["CommutativeRing"]["0#"] = function (x0) {
      return x0["0#"];
    };
  exports["NearSemiring"]["_≈_"] = function (x0) {
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
  exports["CommutativeSemiring"]["_854@104512718"]["distribʳ"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["distribʳ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Monoid"]["_102@104512718"] = {};
  exports["Monoid"]["_102@104512718"]["trans"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsMonoid"]["_274@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Monoid"]["isMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["1#"] = function (x0) {
      return x0["1#"];
    };
  exports["AbelianGroup"]["_∙_"] = function (x0) {
      return x0["_∙_"];
    };
  exports["Semigroup"]["_28@104512718"] = {};
  exports["Semigroup"]["_28@104512718"]["sym"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemigroup"]["_134@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semigroup"]["isSemigroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1014@104512718"] = {};
  exports["Ring"]["_1014@104512718"]["refl"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2104@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_800@104512718"] = {};
  exports["CommutativeSemiringWithoutOne"]["_800@104512718"]["+-monoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["SemiringWithoutOne"]["_502@104512718"]["+-monoid"](x0)(x1)(exports["CommutativeSemiringWithoutOne"]["semiringWithoutOne"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["⁻¹-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2104@25348318"]["⁻¹-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"] = {};
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["reflexive"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiringWithoutOne"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiringWithoutOne"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiringWithoutOne"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Lattice"]["_1288@104512718"] = {};
  exports["Lattice"]["_1288@104512718"]["∧-assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsLattice"]["∧-assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Lattice"]["isLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semigroup"]["_≈_"] = function (x0) {
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
  exports["SemiringWithoutOne"]["_+_"] = function (x0) {
      return x0["_+_"];
    };
  exports["Semiring"]["_698@104512718"] = {};
  exports["Semiring"]["_698@104512718"]["rawMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["SemiringWithoutAnnihilatingZero"]["_594@104512718"]["rawMonoid"](x0)(x1)(exports["Semiring"]["semiringWithoutAnnihilatingZero"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeRing"]["_1220@104512718"] = {};
  exports["CommutativeRing"]["_1220@104512718"]["+-abelianGroup"] = function () {
      return function () {
        return function (x0) {
          return exports["Ring"]["+-abelianGroup"](undefined)(undefined)(exports["CommutativeRing"]["ring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["RawRing"]["-_"] = function (x0) {
      return x0["-_"];
    };
  exports["CommutativeMonoid"]["_160@104512718"] = {};
  exports["CommutativeMonoid"]["_160@104512718"]["trans"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeMonoid"]["_424@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeMonoid"]["isCommutativeMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["refl"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["distributiveLattice"] = function () {
      return function () {
        return function (x0) {
          return exports["DistributiveLattice"]["record"](function (x1) {
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
          })(exports["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x0))(exports["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x0))(exports["BooleanAlgebra"]["_1424@104512718"]["isDistributiveLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["zero"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["zero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_854@104512718"]["assoc"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["assoc"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AbelianGroup"]["_338@104512718"] = {};
  exports["AbelianGroup"]["_338@104512718"]["rawMonoid"] = function () {
      return function () {
        return function (x0) {
          return exports["Group"]["_260@104512718"]["rawMonoid"](undefined)(undefined)(exports["AbelianGroup"]["group"](undefined)(undefined)(x0));
        };
      };
    };
  exports["DistributiveLattice"]["_1346@104512718"]["∧-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsDistributiveLattice"]["_2694@25348318"]["∧-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DistributiveLattice"]["isDistributiveLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_594@104512718"] = {};
  exports["SemiringWithoutAnnihilatingZero"]["_594@104512718"]["rawMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeMonoid"]["_188@104512718"]["rawMonoid"](x0)(x1)(exports["SemiringWithoutAnnihilatingZero"]["+-commutativeMonoid"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Group"]["_260@104512718"] = {};
  exports["Group"]["_260@104512718"]["rawMonoid"] = function () {
      return function () {
        return function (x0) {
          return exports["Monoid"]["rawMonoid"](undefined)(undefined)(exports["Group"]["monoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["comm"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2104@25348318"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["+-isCommutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Lattice"]["isLattice"] = function (x0) {
      return x0["isLattice"];
    };
  exports["Group"]["_230@104512718"] = {};
  exports["Group"]["_230@104512718"]["refl"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsGroup"]["_610@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Group"]["isGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_914@104512718"]["semiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["semiringWithoutOne"](undefined)(undefined)(exports["CommutativeSemiring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"]["∧-comm"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["_2870@25348318"]["∧-comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeMonoid"]["_160@104512718"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeMonoid"]["identity"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeMonoid"]["_∙_"](undefined)(undefined)(x2))(exports["CommutativeMonoid"]["ε"](undefined)(undefined)(x2))(exports["CommutativeMonoid"]["isCommutativeMonoid"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["isEquivalence"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["isCommutativeSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["isCommutativeSemiring"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["NearSemiring"]["_418@104512718"] = {};
  exports["NearSemiring"]["_418@104512718"]["semigroup"] = function () {
      return function () {
        return function (x0) {
          return exports["Monoid"]["semigroup"](undefined)(undefined)(exports["NearSemiring"]["+-monoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return {
                  "0#": x4,
                  "Carrier": x0,
                  "_*_": x3,
                  "_+_": x2,
                  "_≈_": x1,
                  "isCommutativeSemiringWithoutOne": x5,
                  "record": function (x6) {
                    return x6["record"](x0, x1, x2, x3, x4, x5);
                  }
                };
              };
            };
          };
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return {
                    "0#": x4,
                    "1#": x5,
                    "Carrier": x0,
                    "_*_": x3,
                    "_+_": x2,
                    "_≈_": x1,
                    "isSemiringWithoutAnnihilatingZero": x6,
                    "record": function (x7) {
                      return x7["record"](x0, x1, x2, x3, x4, x5, x6);
                    }
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Ring"]["record"] = function (x0) {
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
                      "isRing": x7,
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
  exports["Semiring"]["_650@104512718"]["isNearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1496@25348318"]["isNearSemiring"](x0)(x1)(function (x3) {
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
          })(exports["Semiring"]["_+_"](undefined)(undefined)(x2))(exports["Semiring"]["_*_"](undefined)(undefined)(x2))(exports["Semiring"]["0#"](undefined)(undefined)(x2))(exports["Semiring"]["1#"](undefined)(undefined)(x2))(exports["Semiring"]["isSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["NearSemiring"]["_418@104512718"]["setoid"] = function () {
      return function () {
        return function (x0) {
          return exports["Monoid"]["_124@104512718"]["setoid"](undefined)(undefined)(exports["NearSemiring"]["+-monoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"]["∧-complementʳ"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["∧-complementʳ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeMonoid"]["_160@104512718"]["identityˡ"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeMonoid"]["identityˡ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeMonoid"]["isCommutativeMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["isCommutativeSemiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2394@25348318"]["isCommutativeSemiringWithoutOne"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeSemiring"]["_914@104512718"]["setoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_698@104512718"]["setoid"](x0)(x1)(exports["CommutativeSemiring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["sym"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Lattice"]["_1288@104512718"]["∧-comm"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsLattice"]["∧-comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Lattice"]["isLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semigroup"]["_∙_"] = function (x0) {
      return x0["_∙_"];
    };
  exports["Ring"]["_1014@104512718"]["inverse"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2104@25348318"]["inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutOne"]["_*_"] = function (x0) {
      return x0["_*_"];
    };
  exports["CommutativeRing"]["_1220@104512718"]["group"] = function () {
      return function () {
        return function (x0) {
          return exports["Ring"]["_1100@104512718"]["group"](undefined)(undefined)(exports["CommutativeRing"]["ring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["RawRing"]["0#"] = function (x0) {
      return x0["0#"];
    };
  exports["Semiring"]["_698@104512718"]["semigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["SemiringWithoutAnnihilatingZero"]["_594@104512718"]["semigroup"](x0)(x1)(exports["Semiring"]["semiringWithoutAnnihilatingZero"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeMonoid"]["_160@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeMonoid"]["_424@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeMonoid"]["isCommutativeMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semiring"]["semiringWithoutAnnihilatingZero"] = function () {
      return function () {
        return function (x0) {
          return exports["SemiringWithoutAnnihilatingZero"]["record"](function (x1) {
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
          })(exports["Semiring"]["_+_"](undefined)(undefined)(x0))(exports["Semiring"]["_*_"](undefined)(undefined)(x0))(exports["Semiring"]["0#"](undefined)(undefined)(x0))(exports["Semiring"]["1#"](undefined)(undefined)(x0))(exports["Semiring"]["_650@104512718"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["reflexive"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["SemiringWithoutOne"]["_462@104512718"]["isNearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["isNearSemiring"](x0)(x1)(function (x3) {
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
          })(exports["SemiringWithoutOne"]["_+_"](undefined)(undefined)(x2))(exports["SemiringWithoutOne"]["_*_"](undefined)(undefined)(x2))(exports["SemiringWithoutOne"]["0#"](undefined)(undefined)(x2))(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Group"]["_230@104512718"]["_-_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsGroup"]["_-_"](x0)(x1)(function (x3) {
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
          })(exports["Group"]["_∙_"](undefined)(undefined)(x2))(exports["Group"]["ε"](undefined)(undefined)(x2))(exports["Group"]["_⁻¹"](undefined)(undefined)(x2))(exports["Group"]["isGroup"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["CommutativeRing"]["_1228@104512718"]["setoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeSemiring"]["_914@104512718"]["setoid"](x0)(x1)(exports["CommutativeRing"]["commutativeSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["Ring"]["_≈_"] = function (x0) {
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
  exports["AbelianGroup"]["_338@104512718"]["semigroup"] = function () {
      return function () {
        return function (x0) {
          return exports["Group"]["_260@104512718"]["semigroup"](undefined)(undefined)(exports["AbelianGroup"]["group"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_854@104512718"]["assoc"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["assoc"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["DistributiveLattice"]["_1346@104512718"]["∨-assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsDistributiveLattice"]["_2694@25348318"]["∨-assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DistributiveLattice"]["isDistributiveLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_594@104512718"]["semigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeMonoid"]["_188@104512718"]["semigroup"](x0)(x1)(exports["SemiringWithoutAnnihilatingZero"]["+-commutativeMonoid"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2104@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["isMonoid"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiringWithoutOne"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiringWithoutOne"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiringWithoutOne"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Group"]["_260@104512718"]["semigroup"] = function () {
      return function () {
        return function (x0) {
          return exports["Monoid"]["semigroup"](undefined)(undefined)(exports["Group"]["monoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["*-comm"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["*-comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutOne"]["_502@104512718"] = {};
  exports["SemiringWithoutOne"]["_502@104512718"]["*-semigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["NearSemiring"]["*-semigroup"](undefined)(undefined)(exports["SemiringWithoutOne"]["nearSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["_-_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsRing"]["_2104@25348318"]["_-_"](x0)(x1)(function (x3) {
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
          })(exports["Ring"]["_+_"](undefined)(undefined)(x2))(exports["Ring"]["_*_"](undefined)(undefined)(x2))(exports["Ring"]["-_"](undefined)(undefined)(x2))(exports["Ring"]["0#"](undefined)(undefined)(x2))(exports["Ring"]["1#"](undefined)(undefined)(x2))(exports["Ring"]["isRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Group"]["_230@104512718"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsGroup"]["_610@25348318"]["reflexive"](x0)(x1)(function (x3) {
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
          })(exports["Group"]["_∙_"](undefined)(undefined)(x2))(exports["Group"]["ε"](undefined)(undefined)(x2))(exports["Group"]["_⁻¹"](undefined)(undefined)(x2))(exports["Group"]["isGroup"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Semigroup"]["_28@104512718"]["trans"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemigroup"]["_134@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semigroup"]["isSemigroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AbelianGroup"]["ε"] = function (x0) {
      return x0["ε"];
    };
  exports["Ring"]["_1014@104512718"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsRing"]["_2104@25348318"]["reflexive"](x0)(x1)(function (x3) {
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
          })(exports["Ring"]["_+_"](undefined)(undefined)(x2))(exports["Ring"]["_*_"](undefined)(undefined)(x2))(exports["Ring"]["-_"](undefined)(undefined)(x2))(exports["Ring"]["0#"](undefined)(undefined)(x2))(exports["Ring"]["1#"](undefined)(undefined)(x2))(exports["Ring"]["isRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_800@104512718"]["rawMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["SemiringWithoutOne"]["_502@104512718"]["rawMonoid"](x0)(x1)(exports["CommutativeSemiringWithoutOne"]["semiringWithoutOne"](undefined)(undefined)(x2));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"] = function (x0) {
      return x0["isSemiringWithoutAnnihilatingZero"];
    };
  exports["CommutativeRing"]["_1148@104512718"]["isCommutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_914@104512718"]["semigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_698@104512718"]["semigroup"](undefined)(undefined)(exports["CommutativeSemiring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["comm"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["NearSemiring"]["_384@104512718"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsNearSemiring"]["_942@25348318"]["reflexive"](x0)(x1)(function (x3) {
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
          })(exports["NearSemiring"]["_+_"](undefined)(undefined)(x2))(exports["NearSemiring"]["_*_"](undefined)(undefined)(x2))(exports["NearSemiring"]["0#"](undefined)(undefined)(x2))(exports["NearSemiring"]["isNearSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"]["isLattice"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["_2870@25348318"]["isLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeMonoid"]["_≈_"] = function (x0) {
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
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["refl"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1076@104512718"]["semiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["semiringWithoutOne"](undefined)(undefined)(exports["Ring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["AbelianGroup"]["_302@104512718"]["sym"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsAbelianGroup"]["_770@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AbelianGroup"]["isAbelianGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["DistributiveLattice"]["_1346@104512718"]["isLattice"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsDistributiveLattice"]["isLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DistributiveLattice"]["isDistributiveLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["comm"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AbelianGroup"]["_302@104512718"]["inverse"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsAbelianGroup"]["_770@25348318"]["inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AbelianGroup"]["isAbelianGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["DistributiveLattice"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["Ring"]["_1076@104512718"]["rawMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_698@104512718"]["rawMonoid"](undefined)(undefined)(exports["Ring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["CommutativeSemiring"]["_854@104512718"]["comm"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["comm"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Monoid"]["_102@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsMonoid"]["_274@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Monoid"]["isMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutOne"]["_462@104512718"]["comm"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["_1110@25348318"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1228@104512718"]["monoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeSemiring"]["_914@104512718"]["monoid"](x0)(x1)(exports["CommutativeRing"]["commutativeSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["NearSemiring"]["_384@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsNearSemiring"]["_942@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["NearSemiring"]["isNearSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["*-isCommutativeMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2394@25348318"]["*-isCommutativeMonoid"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeSemiring"]["_854@104512718"]["sym"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["sym"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["BooleanAlgebra"]["¬_"] = function (x0) {
      return x0["¬_"];
    };
  exports["Semiring"]["isSemiring"] = function (x0) {
      return x0["isSemiring"];
    };
  exports["NearSemiring"]["_+_"] = function (x0) {
      return x0["_+_"];
    };
  exports["Monoid"]["_102@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsMonoid"]["_274@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Monoid"]["isMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["1#"] = function (x0) {
      return x0["1#"];
    };
  exports["CommutativeSemiring"]["_854@104512718"]["isCommutativeSemiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["isCommutativeSemiringWithoutOne"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["RawRing"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return {
                  "-_": x3,
                  "0#": x4,
                  "1#": x5,
                  "Carrier": x0,
                  "_*_": x2,
                  "_+_": x1,
                  "record": function (x6) {
                    return x6["record"](x0, x1, x2, x3, x4, x5);
                  }
                };
              };
            };
          };
        };
      };
    };
  exports["SemiringWithoutOne"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return {
                  "0#": x4,
                  "Carrier": x0,
                  "_*_": x3,
                  "_+_": x2,
                  "_≈_": x1,
                  "isSemiringWithoutOne": x5,
                  "record": function (x6) {
                    return x6["record"](x0, x1, x2, x3, x4, x5);
                  }
                };
              };
            };
          };
        };
      };
    };
  exports["DistributiveLattice"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return {
                "Carrier": x0,
                "_∧_": x3,
                "_∨_": x2,
                "_≈_": x1,
                "isDistributiveLattice": x4,
                "record": function (x5) {
                  return x5["record"](x0, x1, x2, x3, x4);
                }
              };
            };
          };
        };
      };
    };
  exports["RawMonoid"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return {
              "Carrier": x0,
              "_∙_": x2,
              "_≈_": x1,
              "record": function (x4) {
                return x4["record"](x0, x1, x2, x3);
              },
              "ε": x3
            };
          };
        };
      };
    };
  exports["CommutativeSemiring"]["_854@104512718"]["*-isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["*-isMonoid"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_606@104512718"] = {};
  exports["SemiringWithoutAnnihilatingZero"]["_606@104512718"]["semigroup"] = function () {
      return function () {
        return function (x0) {
          return exports["Monoid"]["semigroup"](undefined)(undefined)(exports["SemiringWithoutAnnihilatingZero"]["*-monoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Monoid"]["ε"] = function (x0) {
      return x0["ε"];
    };
  exports["SemiringWithoutOne"]["_462@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["_1134@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1228@104512718"]["rawMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeSemiring"]["_914@104512718"]["rawMonoid"](x0)(x1)(exports["CommutativeRing"]["commutativeSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["NearSemiring"]["_384@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsNearSemiring"]["_962@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["NearSemiring"]["isNearSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_854@104512718"]["isSemiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["isSemiringWithoutOne"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["BooleanAlgebra"]["_≈_"] = function (x0) {
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
  exports["Semiring"]["_*_"] = function (x0) {
      return x0["_*_"];
    };
  exports["CommutativeRing"]["_1148@104512718"]["*-comm"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["*-comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Monoid"]["_102@104512718"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsMonoid"]["_274@25348318"]["reflexive"](x0)(x1)(function (x3) {
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
          })(exports["Monoid"]["_∙_"](undefined)(undefined)(x2))(exports["Monoid"]["ε"](undefined)(undefined)(x2))(exports["Monoid"]["isMonoid"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeRing"]["_*_"] = function (x0) {
      return x0["_*_"];
    };
  exports["CommutativeSemiring"]["_854@104512718"]["isSemigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["isSemigroup"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"]["¬-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["¬-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeMonoid"]["_160@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeMonoid"]["_424@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeMonoid"]["isCommutativeMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["inverse"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_914@104512718"]["nearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_718@104512718"]["nearSemiring"](x0)(x1)(exports["CommutativeSemiring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["isSemiringWithoutOne"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Lattice"]["_1288@104512718"]["sym"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsLattice"]["_2554@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Lattice"]["isLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["isMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2104@25348318"]["isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeMonoid"]["_188@104512718"] = {};
  exports["CommutativeMonoid"]["_188@104512718"]["setoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Monoid"]["_124@104512718"]["setoid"](undefined)(undefined)(exports["CommutativeMonoid"]["monoid"](x0)(x1)(x2));
        };
      };
    };
  exports["SemiringWithoutOne"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["CommutativeRing"]["commutativeSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeSemiring"]["record"](function (x3) {
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
          })(exports["CommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["_1148@104512718"]["isCommutativeSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["RawRing"]["_+_"] = function (x0) {
      return x0["_+_"];
    };
  exports["Semiring"]["_698@104512718"]["+-commutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return exports["SemiringWithoutAnnihilatingZero"]["+-commutativeMonoid"](undefined)(undefined)(exports["Semiring"]["semiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"]["∨-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["_2870@25348318"]["∨-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeMonoid"]["_160@104512718"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeMonoid"]["_424@25348318"]["reflexive"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeMonoid"]["_∙_"](undefined)(undefined)(x2))(exports["CommutativeMonoid"]["ε"](undefined)(undefined)(x2))(exports["CommutativeMonoid"]["isCommutativeMonoid"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["sym"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["isSemiringWithoutAnnihilatingZero"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutOne"]["_462@104512718"]["isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["_1110@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Group"]["_⁻¹"] = function (x0) {
      return x0["_⁻¹"];
    };
  exports["CommutativeRing"]["_1228@104512718"]["semiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeSemiring"]["semiring"](x0)(x1)(exports["CommutativeRing"]["commutativeSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["CommutativeSemiring"]["1#"] = function (x0) {
      return x0["1#"];
    };
  exports["DistributiveLattice"]["_1346@104512718"]["∧-assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsDistributiveLattice"]["_2694@25348318"]["∧-assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DistributiveLattice"]["isDistributiveLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Lattice"]["_∨_"] = function (x0) {
      return x0["_∨_"];
    };
  exports["SemiringWithoutOne"]["+-commutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return exports["CommutativeMonoid"]["record"](function (x1) {
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
          })(exports["SemiringWithoutOne"]["_+_"](undefined)(undefined)(x0))(exports["SemiringWithoutOne"]["0#"](undefined)(undefined)(x0))(exports["SemiringWithoutOne"]["_462@104512718"]["+-isCommutativeMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2138@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Group"]["monoid"] = function () {
      return function () {
        return function (x0) {
          return exports["Monoid"]["record"](function (x1) {
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
          })(exports["Group"]["_∙_"](undefined)(undefined)(x0))(exports["Group"]["ε"](undefined)(undefined)(x0))(exports["Group"]["_230@104512718"]["isMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"] = function (x0) {
      return x0["isCommutativeSemiringWithoutOne"];
    };
  exports["SemiringWithoutOne"]["_462@104512718"]["zero"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["zero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["1#"] = function (x0) {
      return x0["1#"];
    };
  exports["Group"]["_230@104512718"]["isMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsGroup"]["isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Group"]["isGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semigroup"]["_28@104512718"]["refl"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemigroup"]["_134@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semigroup"]["isSemigroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AbelianGroup"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["isSemiringWithoutAnnihilatingZero"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_800@104512718"]["*-semigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["SemiringWithoutOne"]["_502@104512718"]["*-semigroup"](x0)(x1)(exports["CommutativeSemiringWithoutOne"]["semiringWithoutOne"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Lattice"]["setoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Relation_Binary["Setoid"]["record"](function (x1) {
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
          })(exports["Lattice"]["_1288@104512718"]["isEquivalence"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_*_"] = function (x0) {
      return x0["_*_"];
    };
  exports["CommutativeRing"]["_1148@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["*-isMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["*-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["NearSemiring"]["_384@104512718"]["distribʳ"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsNearSemiring"]["distribʳ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["NearSemiring"]["isNearSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"]["absorptive"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["_2870@25348318"]["absorptive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1076@104512718"]["semigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_698@104512718"]["semigroup"](x0)(x1)(exports["Ring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["AbelianGroup"]["_302@104512718"]["isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsAbelianGroup"]["_770@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AbelianGroup"]["isAbelianGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["RawMonoid"]["_≈_"] = function (x0) {
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
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["*-isMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["*-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AbelianGroup"]["_302@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsAbelianGroup"]["_770@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AbelianGroup"]["isAbelianGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["semiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["record"](function (x3) {
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
          })(exports["Ring"]["_+_"](undefined)(undefined)(x2))(exports["Ring"]["_*_"](undefined)(undefined)(x2))(exports["Ring"]["0#"](undefined)(undefined)(x2))(exports["Ring"]["1#"](undefined)(undefined)(x2))(exports["Ring"]["_1014@104512718"]["isSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["Semigroup"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return {
              "Carrier": x0,
              "_∙_": x2,
              "_≈_": x1,
              "isSemigroup": x3,
              "record": function (x4) {
                return x4["record"](x0, x1, x2, x3);
              }
            };
          };
        };
      };
    };
  exports["CommutativeRing"]["record"] = function (x0) {
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
                      "isCommutativeRing": x7,
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
  exports["Monoid"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return {
                "Carrier": x0,
                "_∙_": x2,
                "_≈_": x1,
                "isMonoid": x4,
                "record": function (x5) {
                  return x5["record"](x0, x1, x2, x3, x4);
                },
                "ε": x3
              };
            };
          };
        };
      };
    };
  exports["AbelianGroup"]["_302@104512718"]["comm"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsAbelianGroup"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AbelianGroup"]["isAbelianGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["_1308@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1228@104512718"]["semiringWithoutAnnihilatingZero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeSemiring"]["_914@104512718"]["semiringWithoutAnnihilatingZero"](x0)(x1)(exports["CommutativeRing"]["commutativeSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["Group"]["isGroup"] = function (x0) {
      return x0["isGroup"];
    };
  exports["SemiringWithoutOne"]["_462@104512718"]["distrib"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["distrib"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_594@104512718"]["monoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeMonoid"]["monoid"](x0)(x1)(exports["SemiringWithoutAnnihilatingZero"]["+-commutativeMonoid"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeSemiring"]["isCommutativeSemiring"] = function (x0) {
      return x0["isCommutativeSemiring"];
    };
  exports["AbelianGroup"]["_338@104512718"]["monoid"] = function () {
      return function () {
        return function (x0) {
          return exports["Group"]["monoid"](undefined)(undefined)(exports["AbelianGroup"]["group"](undefined)(undefined)(x0));
        };
      };
    };
  exports["DistributiveLattice"]["_1346@104512718"]["∧-comm"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsDistributiveLattice"]["_2694@25348318"]["∧-comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DistributiveLattice"]["isDistributiveLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2104@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["identity"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiringWithoutOne"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiringWithoutOne"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiringWithoutOne"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Lattice"]["_∧_"] = function (x0) {
      return x0["_∧_"];
    };
  exports["CommutativeRing"]["-_"] = function (x0) {
      return x0["-_"];
    };
  exports["CommutativeSemiring"]["_854@104512718"]["distrib"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["distrib"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Monoid"]["_102@104512718"]["sym"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsMonoid"]["_274@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Monoid"]["isMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["NearSemiring"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["0#"] = function (x0) {
      return x0["0#"];
    };
  exports["Ring"]["_1014@104512718"]["isSemiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsRing"]["_2186@25348318"]["isSemiringWithoutOne"](x0)(x1)(function (x3) {
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
          })(exports["Ring"]["_+_"](undefined)(undefined)(x2))(exports["Ring"]["_*_"](undefined)(undefined)(x2))(exports["Ring"]["-_"](undefined)(undefined)(x2))(exports["Ring"]["0#"](undefined)(undefined)(x2))(exports["Ring"]["1#"](undefined)(undefined)(x2))(exports["Ring"]["isRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_800@104512718"]["+-commutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return exports["SemiringWithoutOne"]["+-commutativeMonoid"](undefined)(undefined)(exports["CommutativeSemiringWithoutOne"]["semiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AbelianGroup"]["_≈_"] = function (x0) {
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
  exports["Semigroup"]["_28@104512718"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsSemigroup"]["_134@25348318"]["reflexive"](x0)(x1)(function (x3) {
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
          })(exports["Semigroup"]["_∙_"](undefined)(undefined)(x2))(exports["Semigroup"]["isSemigroup"](undefined)(undefined)(x2));
        };
      };
    };
  exports["NearSemiring"]["_384@104512718"]["isEquivalence"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsNearSemiring"]["_942@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["NearSemiring"]["isNearSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_914@104512718"]["*-monoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_698@104512718"]["*-monoid"](undefined)(undefined)(exports["CommutativeSemiring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"]["isDistributiveLattice"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["isDistributiveLattice"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["identity"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AbelianGroup"]["_302@104512718"]["refl"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsAbelianGroup"]["_770@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AbelianGroup"]["isAbelianGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["DistributiveLattice"]["_1346@104512718"]["absorptive"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsDistributiveLattice"]["_2694@25348318"]["absorptive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DistributiveLattice"]["isDistributiveLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["RawMonoid"]["_∙_"] = function (x0) {
      return x0["_∙_"];
    };
  exports["Ring"]["_1076@104512718"]["nearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_718@104512718"]["nearSemiring"](x0)(x1)(exports["Ring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["distrib"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["distrib"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["trans"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"]["∨-∧-distribʳ"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["_2870@25348318"]["∨-∧-distribʳ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeMonoid"]["_160@104512718"]["sym"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeMonoid"]["_424@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeMonoid"]["isCommutativeMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["isSemiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["isSemiringWithoutOne"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeSemiring"]["_854@104512718"]["isSemigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["isSemigroup"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["DistributiveLattice"]["_1378@104512718"] = {};
  exports["DistributiveLattice"]["_1378@104512718"]["setoid"] = function () {
      return function () {
        return function (x0) {
          return exports["Lattice"]["setoid"](undefined)(undefined)(exports["DistributiveLattice"]["lattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Monoid"]["isMonoid"] = function (x0) {
      return x0["isMonoid"];
    };
  exports["SemiringWithoutOne"]["_462@104512718"]["*-isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["*-isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1228@104512718"]["semigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeSemiring"]["_914@104512718"]["semigroup"](x0)(x1)(exports["CommutativeRing"]["commutativeSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["BooleanAlgebra"]["_∨_"] = function (x0) {
      return x0["_∨_"];
    };
  exports["Semiring"]["0#"] = function (x0) {
      return x0["0#"];
    };
  exports["CommutativeRing"]["_1148@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_854@104512718"]["refl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["refl"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["NearSemiring"]["_384@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsNearSemiring"]["_962@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["NearSemiring"]["isNearSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutOne"]["nearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["NearSemiring"]["record"](function (x3) {
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
          })(exports["SemiringWithoutOne"]["_+_"](undefined)(undefined)(x2))(exports["SemiringWithoutOne"]["_*_"](undefined)(undefined)(x2))(exports["SemiringWithoutOne"]["0#"](undefined)(undefined)(x2))(exports["SemiringWithoutOne"]["_462@104512718"]["isNearSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["Group"]["_230@104512718"]["isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsGroup"]["_610@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Group"]["isGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["isRing"] = function (x0) {
      return x0["isRing"];
    };
  exports["CommutativeMonoid"]["_160@104512718"]["comm"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeMonoid"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeMonoid"]["isCommutativeMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["NearSemiring"]["_418@104512718"]["rawMonoid"] = function () {
      return function () {
        return function (x0) {
          return exports["Monoid"]["rawMonoid"](undefined)(undefined)(exports["NearSemiring"]["+-monoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["distrib"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["distrib"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_914@104512718"]["semiringWithoutAnnihilatingZero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["semiringWithoutAnnihilatingZero"](undefined)(undefined)(exports["CommutativeSemiring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"]["∧-assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["_2870@25348318"]["∧-assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["distrib"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["distrib"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Lattice"]["_1288@104512718"]["trans"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsLattice"]["_2554@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Lattice"]["isLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semigroup"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2104@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["refl"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semiring"]["_698@104512718"]["monoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["SemiringWithoutAnnihilatingZero"]["_594@104512718"]["monoid"](x0)(x1)(exports["Semiring"]["semiringWithoutAnnihilatingZero"](undefined)(undefined)(x2));
        };
      };
    };
  exports["SemiringWithoutOne"]["_≈_"] = function (x0) {
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
  exports["RawRing"]["_*_"] = function (x0) {
      return x0["_*_"];
    };
  exports["Lattice"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return {
                "Carrier": x0,
                "_∧_": x3,
                "_∨_": x2,
                "_≈_": x1,
                "isLattice": x4,
                "record": function (x5) {
                  return x5["record"](x0, x1, x2, x3, x4);
                }
              };
            };
          };
        };
      };
    };
  exports["CommutativeSemiring"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return {
                    "0#": x4,
                    "1#": x5,
                    "Carrier": x0,
                    "_*_": x3,
                    "_+_": x2,
                    "_≈_": x1,
                    "isCommutativeSemiring": x6,
                    "record": function (x7) {
                      return x7["record"](x0, x1, x2, x3, x4, x5, x6);
                    }
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["CommutativeRing"]["_1228@104512718"]["*-commutativeMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeSemiring"]["*-commutativeMonoid"](undefined)(undefined)(exports["CommutativeRing"]["commutativeSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["CommutativeMonoid"]["_188@104512718"]["rawMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Monoid"]["rawMonoid"](undefined)(undefined)(exports["CommutativeMonoid"]["monoid"](x0)(x1)(x2));
        };
      };
    };
  exports["Semiring"]["_698@104512718"]["rawMonoid"] = function () {
      return function () {
        return function (x0) {
          return exports["SemiringWithoutAnnihilatingZero"]["_606@104512718"]["rawMonoid"](undefined)(undefined)(exports["Semiring"]["semiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["zero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["zero"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Monoid"]["_102@104512718"]["isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Monoid"]["isMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_≈_"] = function (x0) {
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
  exports["CommutativeSemiring"]["_854@104512718"]["+-isCommutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1228@104512718"]["commutativeSemiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeSemiring"]["commutativeSemiringWithoutOne"](x0)(x1)(exports["CommutativeRing"]["commutativeSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["SemiringWithoutOne"]["_462@104512718"]["+-isCommutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Group"]["_∙_"] = function (x0) {
      return x0["_∙_"];
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["isEquivalence"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Lattice"]["_1288@104512718"]["refl"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsLattice"]["_2554@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Lattice"]["isLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["isCommutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2104@25348318"]["isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Lattice"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["identity"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2138@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Group"]["_230@104512718"]["⁻¹-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsGroup"]["⁻¹-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Group"]["isGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutOne"]["_502@104512718"]["semigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["NearSemiring"]["_418@104512718"]["semigroup"](undefined)(undefined)(exports["SemiringWithoutOne"]["nearSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["refl"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["isRing"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["isRing"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"]["∨-comm"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["_2870@25348318"]["∨-comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeMonoid"]["_160@104512718"]["isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeMonoid"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeMonoid"]["isCommutativeMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_≈_"] = function (x0) {
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
  exports["Semigroup"]["_28@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemigroup"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semigroup"]["isSemigroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["isNearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsRing"]["_2186@25348318"]["isNearSemiring"](x0)(x1)(function (x3) {
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
          })(exports["Ring"]["_+_"](undefined)(undefined)(x2))(exports["Ring"]["_*_"](undefined)(undefined)(x2))(exports["Ring"]["-_"](undefined)(undefined)(x2))(exports["Ring"]["0#"](undefined)(undefined)(x2))(exports["Ring"]["1#"](undefined)(undefined)(x2))(exports["Ring"]["isRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["semiringWithoutOne"] = function () {
      return function () {
        return function (x0) {
          return exports["SemiringWithoutOne"]["record"](function (x1) {
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
          })(exports["CommutativeSemiringWithoutOne"]["_+_"](undefined)(undefined)(x0))(exports["CommutativeSemiringWithoutOne"]["_*_"](undefined)(undefined)(x0))(exports["CommutativeSemiringWithoutOne"]["0#"](undefined)(undefined)(x0))(exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["isSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Lattice"]["_1288@104512718"]["∨-comm"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsLattice"]["∨-comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Lattice"]["isLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1100@104512718"] = {};
  exports["Ring"]["_1100@104512718"]["group"] = function () {
      return function () {
        return function (x0) {
          return exports["AbelianGroup"]["group"](undefined)(undefined)(exports["Ring"]["+-abelianGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_*_"] = function (x0) {
      return x0["_*_"];
    };
  exports["DistributiveLattice"]["_1346@104512718"]["sym"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsDistributiveLattice"]["_2694@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DistributiveLattice"]["isDistributiveLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["trans"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AbelianGroup"]["_302@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsAbelianGroup"]["_770@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AbelianGroup"]["isAbelianGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["+-isCommutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1076@104512718"]["monoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_698@104512718"]["monoid"](x0)(x1)(exports["Ring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["AbelianGroup"]["_302@104512718"]["isGroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsAbelianGroup"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AbelianGroup"]["isAbelianGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["DistributiveLattice"]["_∧_"] = function (x0) {
      return x0["_∧_"];
    };
  exports["SemiringWithoutOne"]["_462@104512718"]["sym"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["_1110@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["-_"] = function (x0) {
      return x0["-_"];
    };
  exports["Group"]["_230@104512718"]["inverse"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsGroup"]["inverse"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Group"]["isGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_*_"] = function (x0) {
      return x0["_*_"];
    };
  exports["DistributiveLattice"]["_1346@104512718"]["∨-∧-distribʳ"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsDistributiveLattice"]["∨-∧-distribʳ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DistributiveLattice"]["isDistributiveLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Monoid"]["_≈_"] = function (x0) {
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
  exports["CommutativeSemiring"]["_854@104512718"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["identity"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["NearSemiring"]["_384@104512718"]["+-isMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsNearSemiring"]["+-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["NearSemiring"]["isNearSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["isBooleanAlgebra"] = function (x0) {
      return x0["isBooleanAlgebra"];
    };
  exports["CommutativeRing"]["_1148@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_854@104512718"]["zeroˡ"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["zeroˡ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["NearSemiring"]["isNearSemiring"] = function (x0) {
      return x0["isNearSemiring"];
    };
  exports["CommutativeSemiring"]["_854@104512718"]["isSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["isSemiring"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Monoid"]["_124@104512718"] = {};
  exports["Monoid"]["_124@104512718"]["setoid"] = function () {
      return function () {
        return function (x0) {
          return exports["Semigroup"]["setoid"](undefined)(undefined)(exports["Monoid"]["semigroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semiring"]["_≈_"] = function (x0) {
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
  exports["CommutativeRing"]["_1148@104512718"]["_-_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["_-_"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["zero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsRing"]["zero"](x0)(x1)(function (x3) {
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
          })(exports["Ring"]["_+_"](undefined)(undefined)(x2))(exports["Ring"]["_*_"](undefined)(undefined)(x2))(exports["Ring"]["-_"](undefined)(undefined)(x2))(exports["Ring"]["0#"](undefined)(undefined)(x2))(exports["Ring"]["1#"](undefined)(undefined)(x2))(exports["Ring"]["isRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_800@104512718"]["setoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["SemiringWithoutOne"]["_502@104512718"]["setoid"](x0)(x1)(exports["CommutativeSemiringWithoutOne"]["semiringWithoutOne"](undefined)(undefined)(x2));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["_1308@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"]["sym"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["_2870@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeMonoid"]["isCommutativeMonoid"] = function (x0) {
      return x0["isCommutativeMonoid"];
    };
  exports["Semiring"]["_650@104512718"]["+-isCommutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["+-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_914@104512718"]["rawMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_698@104512718"]["rawMonoid"](x0)(x1)(exports["CommutativeSemiring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["NearSemiring"]["_384@104512718"]["zeroˡ"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsNearSemiring"]["zeroˡ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["NearSemiring"]["isNearSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Group"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return {
                  "Carrier": x0,
                  "_⁻¹": x4,
                  "_∙_": x2,
                  "_≈_": x1,
                  "isGroup": x5,
                  "record": function (x6) {
                    return x6["record"](x0, x1, x2, x3, x4, x5);
                  },
                  "ε": x3
                };
              };
            };
          };
        };
      };
    };
  exports["Semiring"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return {
                    "0#": x4,
                    "1#": x5,
                    "Carrier": x0,
                    "_*_": x3,
                    "_+_": x2,
                    "_≈_": x1,
                    "isSemiring": x6,
                    "record": function (x7) {
                      return x7["record"](x0, x1, x2, x3, x4, x5, x6);
                    }
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Semiring"]["_+_"] = function (x0) {
      return x0["_+_"];
    };
  exports["Monoid"]["rawMonoid"] = function () {
      return function () {
        return function (x0) {
          return exports["RawMonoid"]["record"](function (x1) {
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
          })(exports["Monoid"]["_∙_"](undefined)(undefined)(x0))(exports["Monoid"]["ε"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_854@104512718"]["isSemiringWithoutAnnihilatingZero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["isSemiringWithoutAnnihilatingZero"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["BooleanAlgebra"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["Monoid"]["_102@104512718"]["refl"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsMonoid"]["_274@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Monoid"]["isMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_+_"] = function (x0) {
      return x0["_+_"];
    };
  exports["CommutativeSemiring"]["_854@104512718"]["isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["isMonoid"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Semigroup"]["_28@104512718"]["isEquivalence"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemigroup"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semigroup"]["isSemigroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["isSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsRing"]["isSemiring"](x0)(x1)(function (x3) {
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
          })(exports["Ring"]["_+_"](undefined)(undefined)(x2))(exports["Ring"]["_*_"](undefined)(undefined)(x2))(exports["Ring"]["-_"](undefined)(undefined)(x2))(exports["Ring"]["0#"](undefined)(undefined)(x2))(exports["Ring"]["1#"](undefined)(undefined)(x2))(exports["Ring"]["isRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Lattice"]["_1288@104512718"]["∨-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsLattice"]["∨-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Lattice"]["isLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_+_"] = function (x0) {
      return x0["_+_"];
    };
  exports["CommutativeRing"]["_1148@104512718"]["comm"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["semiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["record"](function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_854@104512718"]["isSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["identity"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["NearSemiring"]["_384@104512718"]["isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsNearSemiring"]["_942@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["NearSemiring"]["isNearSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeMonoid"]["_188@104512718"]["semigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Monoid"]["semigroup"](undefined)(undefined)(exports["CommutativeMonoid"]["monoid"](x0)(x1)(x2));
        };
      };
    };
  exports["CommutativeRing"]["ring"] = function () {
      return function () {
        return function (x0) {
          return exports["Ring"]["record"](function (x1) {
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
          })(exports["CommutativeRing"]["_+_"](undefined)(undefined)(x0))(exports["CommutativeRing"]["_*_"](undefined)(undefined)(x0))(exports["CommutativeRing"]["-_"](undefined)(undefined)(x0))(exports["CommutativeRing"]["0#"](undefined)(undefined)(x0))(exports["CommutativeRing"]["1#"](undefined)(undefined)(x0))(exports["CommutativeRing"]["_1148@104512718"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["RawRing"]["Carrier"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["Semiring"]["_698@104512718"]["semigroup"] = function () {
      return function () {
        return function (x0) {
          return exports["SemiringWithoutAnnihilatingZero"]["_606@104512718"]["semigroup"](undefined)(undefined)(exports["Semiring"]["semiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"]["∨-complementʳ"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["∨-complementʳ"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeMonoid"]["_160@104512718"]["refl"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeMonoid"]["_424@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeMonoid"]["isCommutativeMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["reflexive"](x0)(x1)(function (x3) {
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
          })(exports["Semiring"]["_+_"](undefined)(undefined)(x2))(exports["Semiring"]["_*_"](undefined)(undefined)(x2))(exports["Semiring"]["0#"](undefined)(undefined)(x2))(exports["Semiring"]["1#"](undefined)(undefined)(x2))(exports["Semiring"]["isSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["isSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["isSemiring"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["DistributiveLattice"]["lattice"] = function () {
      return function () {
        return function (x0) {
          return exports["Lattice"]["record"](function (x1) {
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
          })(exports["DistributiveLattice"]["_∨_"](undefined)(undefined)(x0))(exports["DistributiveLattice"]["_∧_"](undefined)(undefined)(x0))(exports["DistributiveLattice"]["_1346@104512718"]["isLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Monoid"]["_∙_"] = function (x0) {
      return x0["_∙_"];
    };
  exports["CommutativeSemiring"]["_854@104512718"]["*-isCommutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["*-isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_606@104512718"]["rawMonoid"] = function () {
      return function () {
        return function (x0) {
          return exports["Monoid"]["rawMonoid"](undefined)(undefined)(exports["SemiringWithoutAnnihilatingZero"]["*-monoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semiring"]["_718@104512718"] = {};
  exports["Semiring"]["_718@104512718"]["nearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["SemiringWithoutOne"]["nearSemiring"](x0)(x1)(exports["Semiring"]["semiringWithoutOne"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeRing"]["_1228@104512718"]["*-monoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeSemiring"]["_914@104512718"]["*-monoid"](x0)(x1)(exports["CommutativeRing"]["commutativeSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["SemiringWithoutOne"]["_462@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["_1134@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Group"]["_230@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsGroup"]["_610@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Group"]["isGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["comm"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Lattice"]["_≈_"] = function (x0) {
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
  exports["SemiringWithoutOne"]["_502@104512718"]["setoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["NearSemiring"]["_418@104512718"]["setoid"](undefined)(undefined)(exports["SemiringWithoutOne"]["nearSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["*-isMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["*-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["0#"] = function (x0) {
      return x0["0#"];
    };
  exports["CommutativeSemiringWithoutOne"]["0#"] = function (x0) {
      return x0["0#"];
    };
  exports["Group"]["_230@104512718"]["isEquivalence"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsGroup"]["_610@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Group"]["isGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutOne"]["_462@104512718"]["trans"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["_1110@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["isMonoid"](x0)(x1)(function (x3) {
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
          })(exports["Semiring"]["_+_"](undefined)(undefined)(x2))(exports["Semiring"]["_*_"](undefined)(undefined)(x2))(exports["Semiring"]["0#"](undefined)(undefined)(x2))(exports["Semiring"]["1#"](undefined)(undefined)(x2))(exports["Semiring"]["isSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["⁻¹-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["⁻¹-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_914@104512718"]["semigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_698@104512718"]["semigroup"](x0)(x1)(exports["CommutativeSemiring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["NearSemiring"]["+-monoid"] = function () {
      return function () {
        return function (x0) {
          return exports["Monoid"]["record"](function (x1) {
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
          })(exports["NearSemiring"]["_+_"](undefined)(undefined)(x0))(exports["NearSemiring"]["0#"](undefined)(undefined)(x0))(exports["NearSemiring"]["_384@104512718"]["+-isMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"]["trans"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["_2870@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["isGroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2104@25348318"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["isNearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["isNearSemiring"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiringWithoutOne"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiringWithoutOne"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiringWithoutOne"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Lattice"]["_1288@104512718"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsLattice"]["_2554@25348318"]["reflexive"](x0)(x1)(function (x3) {
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
          })(exports["Lattice"]["_∨_"](undefined)(undefined)(x2))(exports["Lattice"]["_∧_"](undefined)(undefined)(x2))(exports["Lattice"]["isLattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Ring"]["_1076@104512718"]["rawMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_698@104512718"]["rawMonoid"](x0)(x1)(exports["Ring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["DistributiveLattice"]["isDistributiveLattice"] = function (x0) {
      return x0["isDistributiveLattice"];
    };
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["isMonoid"](x0)(x1)(function (x3) {
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
          })(exports["SemiringWithoutAnnihilatingZero"]["_+_"](undefined)(undefined)(x2))(exports["SemiringWithoutAnnihilatingZero"]["_*_"](undefined)(undefined)(x2))(exports["SemiringWithoutAnnihilatingZero"]["0#"](undefined)(undefined)(x2))(exports["SemiringWithoutAnnihilatingZero"]["1#"](undefined)(undefined)(x2))(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x2));
        };
      };
    };
  exports["RawMonoid"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["AbelianGroup"]["_302@104512718"]["isMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsAbelianGroup"]["_770@25348318"]["isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AbelianGroup"]["isAbelianGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["identity"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["_1308@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["+-abelianGroup"] = function () {
      return function () {
        return function (x0) {
          return exports["AbelianGroup"]["record"](function (x1) {
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
          })(exports["Ring"]["_+_"](undefined)(undefined)(x0))(exports["Ring"]["0#"](undefined)(undefined)(x0))(exports["Ring"]["-_"](undefined)(undefined)(x0))(exports["Ring"]["_1014@104512718"]["+-isAbelianGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AbelianGroup"]["_302@104512718"]["_-_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsAbelianGroup"]["_770@25348318"]["_-_"](x0)(x1)(function (x3) {
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
          })(exports["AbelianGroup"]["_∙_"](undefined)(undefined)(x2))(exports["AbelianGroup"]["ε"](undefined)(undefined)(x2))(exports["AbelianGroup"]["_⁻¹"](undefined)(undefined)(x2))(exports["AbelianGroup"]["isAbelianGroup"](undefined)(undefined)(x2));
        };
      };
    };
  exports["SemiringWithoutOne"]["_462@104512718"]["isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["_1110@25348318"]["isMonoid"](x0)(x1)(function (x3) {
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
          })(exports["SemiringWithoutOne"]["_+_"](undefined)(undefined)(x2))(exports["SemiringWithoutOne"]["_*_"](undefined)(undefined)(x2))(exports["SemiringWithoutOne"]["0#"](undefined)(undefined)(x2))(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Group"]["ε"] = function (x0) {
      return x0["ε"];
    };
  exports["CommutativeRing"]["_1228@104512718"]["nearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeSemiring"]["_914@104512718"]["nearSemiring"](x0)(x1)(exports["CommutativeRing"]["commutativeSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["AbelianGroup"]["group"] = function () {
      return function () {
        return function (x0) {
          return exports["Group"]["record"](function (x1) {
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
          })(exports["AbelianGroup"]["_∙_"](undefined)(undefined)(x0))(exports["AbelianGroup"]["ε"](undefined)(undefined)(x0))(exports["AbelianGroup"]["_⁻¹"](undefined)(undefined)(x0))(exports["AbelianGroup"]["_302@104512718"]["isGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["DistributiveLattice"]["_1346@104512718"]["trans"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsDistributiveLattice"]["_2694@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DistributiveLattice"]["isDistributiveLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["rawRing"] = function () {
      return function () {
        return function (x0) {
          return exports["RawRing"]["record"](function (x1) {
            return function (x2) {
              return function (x3) {
                return "*";
              };
            };
          })(exports["Ring"]["_+_"](undefined)(undefined)(x0))(exports["Ring"]["_*_"](undefined)(undefined)(x0))(exports["Ring"]["-_"](undefined)(undefined)(x0))(exports["Ring"]["0#"](undefined)(undefined)(x0))(exports["Ring"]["1#"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["0#"] = function (x0) {
      return x0["0#"];
    };
  exports["SemiringWithoutAnnihilatingZero"]["+-commutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return exports["CommutativeMonoid"]["record"](function (x1) {
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
          })(exports["SemiringWithoutAnnihilatingZero"]["_+_"](undefined)(undefined)(x0))(exports["SemiringWithoutAnnihilatingZero"]["0#"](undefined)(undefined)(x0))(exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["+-isCommutativeMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_854@104512718"]["comm"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["*-CM"]["comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["DistributiveLattice"]["_1346@104512718"]["∨-comm"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsDistributiveLattice"]["_2694@25348318"]["∨-comm"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DistributiveLattice"]["isDistributiveLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_594@104512718"]["setoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeMonoid"]["_188@104512718"]["setoid"](x0)(x1)(exports["SemiringWithoutAnnihilatingZero"]["+-commutativeMonoid"](undefined)(undefined)(x2));
        };
      };
    };
  exports["AbelianGroup"]["_338@104512718"]["setoid"] = function () {
      return function () {
        return function (x0) {
          return exports["Group"]["_260@104512718"]["setoid"](undefined)(undefined)(exports["AbelianGroup"]["group"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["identity"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2104@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Group"]["_260@104512718"]["setoid"] = function () {
      return function () {
        return function (x0) {
          return exports["Monoid"]["_124@104512718"]["setoid"](undefined)(undefined)(exports["Group"]["monoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Lattice"]["_1288@104512718"]["absorptive"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsLattice"]["absorptive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Lattice"]["isLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutOne"]["_502@104512718"]["+-monoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["NearSemiring"]["+-monoid"](undefined)(undefined)(exports["SemiringWithoutOne"]["nearSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["Group"]["_230@104512718"]["sym"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsGroup"]["_610@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Group"]["isGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2138@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeMonoid"]["_160@104512718"]["isEquivalence"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeMonoid"]["_424@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeMonoid"]["isCommutativeMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["NearSemiring"]["*-semigroup"] = function () {
      return function () {
        return function (x0) {
          return exports["Semigroup"]["record"](function (x1) {
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
          })(exports["NearSemiring"]["_*_"](undefined)(undefined)(x0))(exports["NearSemiring"]["_384@104512718"]["*-isSemigroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["isEquivalence"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["*-commutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return exports["CommutativeMonoid"]["record"](function (x1) {
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
          })(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x0))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x0))(exports["CommutativeSemiring"]["_854@104512718"]["*-isCommutativeMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"]["∧-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["_2870@25348318"]["∧-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["isSemiringWithoutAnnihilatingZero"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeMonoid"]["_∙_"] = function (x0) {
      return x0["_∙_"];
    };
  exports["NearSemiring"]["_384@104512718"]["sym"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsNearSemiring"]["_942@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["NearSemiring"]["isNearSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["isGroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["isGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_914@104512718"]["+-commutativeMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_698@104512718"]["+-commutativeMonoid"](undefined)(undefined)(exports["CommutativeSemiring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"]["refl"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["_2870@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AbelianGroup"]["_302@104512718"]["trans"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsAbelianGroup"]["_770@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AbelianGroup"]["isAbelianGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["DistributiveLattice"]["_1346@104512718"]["refl"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsDistributiveLattice"]["_2694@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DistributiveLattice"]["isDistributiveLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["reflexive"](x0)(x1)(function (x3) {
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
          })(exports["SemiringWithoutAnnihilatingZero"]["_+_"](undefined)(undefined)(x2))(exports["SemiringWithoutAnnihilatingZero"]["_*_"](undefined)(undefined)(x2))(exports["SemiringWithoutAnnihilatingZero"]["0#"](undefined)(undefined)(x2))(exports["SemiringWithoutAnnihilatingZero"]["1#"](undefined)(undefined)(x2))(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Ring"]["_1076@104512718"]["setoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_698@104512718"]["setoid"](x0)(x1)(exports["Ring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["CommutativeSemiring"]["_≈_"] = function (x0) {
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
  exports["AbelianGroup"]["_302@104512718"]["isCommutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsAbelianGroup"]["isCommutativeMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AbelianGroup"]["isAbelianGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1076@104512718"]["semigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_698@104512718"]["semigroup"](undefined)(undefined)(exports["Ring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["DistributiveLattice"]["_≈_"] = function (x0) {
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
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Group"]["_230@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsGroup"]["_610@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Group"]["isGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_+_"] = function (x0) {
      return x0["_+_"];
    };
  exports["CommutativeSemiringWithoutOne"]["_≈_"] = function (x0) {
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
  exports["SemiringWithoutOne"]["_462@104512718"]["refl"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["_1110@25348318"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutOne"]["_462@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["_1110@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Group"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["CommutativeRing"]["_1228@104512718"]["rawMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeSemiring"]["_914@104512718"]["rawMonoid"](x0)(x1)(exports["CommutativeRing"]["commutativeSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["NearSemiring"]["_384@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsNearSemiring"]["_942@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["NearSemiring"]["isNearSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_854@104512718"]["trans"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["trans"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["BooleanAlgebra"]["⊤"] = function (x0) {
      return x0["⊤"];
    };
  exports["CommutativeRing"]["_1148@104512718"]["*-isMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["*-isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Monoid"]["semigroup"] = function () {
      return function () {
        return function (x0) {
          return exports["Semigroup"]["record"](function (x1) {
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
          })(exports["Monoid"]["_∙_"](undefined)(undefined)(x0))(exports["Monoid"]["_102@104512718"]["isSemigroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["isCommutativeRing"] = function (x0) {
      return x0["isCommutativeRing"];
    };
  exports["CommutativeSemiring"]["_854@104512718"]["isEquivalence"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["isEquivalence"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["NearSemiring"]["_*_"] = function (x0) {
      return x0["_*_"];
    };
  exports["CommutativeSemiringWithoutOne"]["_800@104512718"]["semigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["SemiringWithoutOne"]["_502@104512718"]["semigroup"](x0)(x1)(exports["CommutativeSemiringWithoutOne"]["semiringWithoutOne"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Semigroup"]["_28@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemigroup"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semigroup"]["isSemigroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["sym"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2104@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AbelianGroup"]["_⁻¹"] = function (x0) {
      return x0["_⁻¹"];
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["trans"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Lattice"]["_1288@104512718"]["∧-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsLattice"]["∧-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Lattice"]["isLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semigroup"]["isSemigroup"] = function (x0) {
      return x0["isSemigroup"];
    };
  exports["Ring"]["_1014@104512718"]["distrib"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["distrib"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1220@104512718"]["rawRing"] = function () {
      return function () {
        return function (x0) {
          return exports["Ring"]["rawRing"](undefined)(undefined)(exports["CommutativeRing"]["ring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["RawRing"]["1#"] = function (x0) {
      return x0["1#"];
    };
  exports["Semiring"]["_698@104512718"]["setoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["SemiringWithoutAnnihilatingZero"]["_594@104512718"]["setoid"](x0)(x1)(exports["Semiring"]["semiringWithoutAnnihilatingZero"](undefined)(undefined)(x2));
        };
      };
    };
  exports["SemiringWithoutOne"]["0#"] = function (x0) {
      return x0["0#"];
    };
  exports["CommutativeRing"]["_1148@104512718"]["sym"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["_1464@104512718"] = {};
  exports["BooleanAlgebra"]["_1464@104512718"]["lattice"] = function () {
      return function () {
        return function (x0) {
          return exports["DistributiveLattice"]["lattice"](undefined)(undefined)(exports["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeMonoid"]["monoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Monoid"]["record"](function (x3) {
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
          })(exports["CommutativeMonoid"]["_∙_"](undefined)(undefined)(x2))(exports["CommutativeMonoid"]["ε"](undefined)(undefined)(x2))(exports["CommutativeMonoid"]["_160@104512718"]["isMonoid"](x0)(x1)(x2));
        };
      };
    };
  exports["Monoid"]["_102@104512718"]["identity"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsMonoid"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Monoid"]["isMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_854@104512718"]["∙-cong"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["∙-cong"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeMonoid"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return {
                "Carrier": x0,
                "_∙_": x2,
                "_≈_": x1,
                "isCommutativeMonoid": x4,
                "record": function (x5) {
                  return x5["record"](x0, x1, x2, x3, x4);
                },
                "ε": x3
              };
            };
          };
        };
      };
    };
  exports["NearSemiring"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return {
                  "0#": x4,
                  "Carrier": x0,
                  "_*_": x3,
                  "_+_": x2,
                  "_≈_": x1,
                  "isNearSemiring": x5,
                  "record": function (x6) {
                    return x6["record"](x0, x1, x2, x3, x4, x5);
                  }
                };
              };
            };
          };
        };
      };
    };
  exports["Monoid"]["_102@104512718"]["isEquivalence"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsMonoid"]["_274@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Monoid"]["isMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["CommutativeSemiring"]["_854@104512718"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["identity"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Group"]["_≈_"] = function (x0) {
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
  exports["CommutativeRing"]["_1228@104512718"]["semigroup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeSemiring"]["_914@104512718"]["semigroup"](x0)(x1)(exports["CommutativeRing"]["commutativeSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["SemiringWithoutOne"]["_462@104512718"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["_1110@25348318"]["identity"](x0)(x1)(function (x3) {
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
          })(exports["SemiringWithoutOne"]["_+_"](undefined)(undefined)(x2))(exports["SemiringWithoutOne"]["_*_"](undefined)(undefined)(x2))(exports["SemiringWithoutOne"]["0#"](undefined)(undefined)(x2))(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_854@104512718"]["zero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["zero"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["NearSemiring"]["_384@104512718"]["identity"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsNearSemiring"]["_942@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["NearSemiring"]["isNearSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["⊥"] = function (x0) {
      return x0["⊥"];
    };
  exports["Semiring"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["NearSemiring"]["0#"] = function (x0) {
      return x0["0#"];
    };
  exports["CommutativeSemiring"]["_854@104512718"]["isNearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["isNearSemiring"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeSemiring"]["commutativeSemiringWithoutOne"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["CommutativeSemiringWithoutOne"]["record"](function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_854@104512718"]["isCommutativeSemiringWithoutOne"](x0)(x1)(x2));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"]["∨-assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["_2870@25348318"]["∨-assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeMonoid"]["_160@104512718"]["isMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeMonoid"]["isMonoid"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeMonoid"]["_∙_"](undefined)(undefined)(x2))(exports["CommutativeMonoid"]["ε"](undefined)(undefined)(x2))(exports["CommutativeMonoid"]["isCommutativeMonoid"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Semiring"]["_650@104512718"]["isSemiringWithoutOne"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiring"]["isSemiringWithoutOne"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Semiring"]["isSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["isNearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["isNearSemiring"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeRing"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["-_"](undefined)(undefined)(x2))(exports["CommutativeRing"]["0#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["1#"](undefined)(undefined)(x2))(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["isEquivalence"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2104@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["zero"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["zero"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["Lattice"]["_1288@104512718"]["∨-assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsLattice"]["∨-assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Lattice"]["isLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutOne"]["isSemiringWithoutOne"] = function (x0) {
      return x0["isSemiringWithoutOne"];
    };
  exports["Semiring"]["semiringWithoutOne"] = function () {
      return function () {
        return function (x0) {
          return exports["SemiringWithoutOne"]["record"](function (x1) {
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
          })(exports["Semiring"]["_+_"](undefined)(undefined)(x0))(exports["Semiring"]["_*_"](undefined)(undefined)(x0))(exports["Semiring"]["0#"](undefined)(undefined)(x0))(exports["Semiring"]["_650@104512718"]["isSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["trans"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["_1464@104512718"]["setoid"] = function () {
      return function () {
        return function (x0) {
          return exports["DistributiveLattice"]["_1378@104512718"]["setoid"](undefined)(undefined)(exports["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Semiring"]["_698@104512718"]["*-monoid"] = function () {
      return function () {
        return function (x0) {
          return exports["SemiringWithoutAnnihilatingZero"]["*-monoid"](undefined)(undefined)(exports["Semiring"]["semiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_+_"] = function (x0) {
      return x0["_+_"];
    };
  exports["Group"]["_230@104512718"]["identity"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsGroup"]["_610@25348318"]["identity"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Group"]["isGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutOne"]["_462@104512718"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsSemiringWithoutOne"]["_1110@25348318"]["reflexive"](x0)(x1)(function (x3) {
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
          })(exports["SemiringWithoutOne"]["_+_"](undefined)(undefined)(x2))(exports["SemiringWithoutOne"]["_*_"](undefined)(undefined)(x2))(exports["SemiringWithoutOne"]["0#"](undefined)(undefined)(x2))(exports["SemiringWithoutOne"]["isSemiringWithoutOne"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Ring"]["_*_"] = function (x0) {
      return x0["_*_"];
    };
  exports["AbelianGroup"]["commutativeMonoid"] = function () {
      return function () {
        return function (x0) {
          return exports["CommutativeMonoid"]["record"](function (x1) {
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
          })(exports["AbelianGroup"]["_∙_"](undefined)(undefined)(x0))(exports["AbelianGroup"]["ε"](undefined)(undefined)(x0))(exports["AbelianGroup"]["_302@104512718"]["isCommutativeMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["DistributiveLattice"]["_1346@104512718"]["∨-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsDistributiveLattice"]["_2694@25348318"]["∨-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DistributiveLattice"]["isDistributiveLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Monoid"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["*-monoid"] = function () {
      return function () {
        return function (x0) {
          return exports["Monoid"]["record"](function (x1) {
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
          })(exports["SemiringWithoutAnnihilatingZero"]["_*_"](undefined)(undefined)(x0))(exports["SemiringWithoutAnnihilatingZero"]["1#"](undefined)(undefined)(x0))(exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["*-isMonoid"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_854@104512718"]["∙-cong"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["_1916@25348318"]["∙-cong"](x0)(x1)(function (x3) {
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
          })(exports["CommutativeSemiring"]["_+_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["_*_"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["0#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["1#"](undefined)(undefined)(x2))(exports["CommutativeSemiring"]["isCommutativeSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["+-isAbelianGroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["+-isAbelianGroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["distrib"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["distrib"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Lattice"]["_1288@104512718"]["isEquivalence"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsLattice"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Lattice"]["isLattice"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Group"]["_230@104512718"]["trans"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsGroup"]["_610@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Group"]["isGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["∙-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2138@25348318"]["∙-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_756@104512718"]["*-isSemigroup"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["_1634@25348318"]["*-isSemigroup"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeSemiringWithoutOne"]["isCommutativeSemiringWithoutOne"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutOne"]["_502@104512718"]["rawMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["NearSemiring"]["_418@104512718"]["rawMonoid"](undefined)(undefined)(exports["SemiringWithoutOne"]["nearSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["AbelianGroup"]["isAbelianGroup"] = function (x0) {
      return x0["isAbelianGroup"];
    };
  exports["Semigroup"]["setoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Relation_Binary["Setoid"]["record"](function (x1) {
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
          })(exports["Semigroup"]["_28@104512718"]["isEquivalence"](undefined)(undefined)(x0));
        };
      };
    };
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["assoc"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["_1308@25348318"]["assoc"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["Ring"]["_1014@104512718"]["trans"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsRing"]["_2104@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Ring"]["isRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiringWithoutOne"]["_800@104512718"]["nearSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["SemiringWithoutOne"]["nearSemiring"](x0)(x1)(exports["CommutativeSemiringWithoutOne"]["semiringWithoutOne"](undefined)(undefined)(x2));
        };
      };
    };
  exports["NearSemiring"]["_384@104512718"]["trans"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsNearSemiring"]["_942@25348318"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["NearSemiring"]["isNearSemiring"](undefined)(undefined)(x0));
        };
      };
    };
  exports["CommutativeSemiring"]["_914@104512718"]["monoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_698@104512718"]["monoid"](x0)(x1)(exports["CommutativeSemiring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["BooleanAlgebra"]["_1424@104512718"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["_2870@25348318"]["reflexive"](x0)(x1)(function (x3) {
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
          })(exports["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2))(exports["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2))(exports["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2))(exports["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(exports["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(exports["BooleanAlgebra"]["isBooleanAlgebra"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeMonoid"]["ε"] = function (x0) {
      return x0["ε"];
    };
  exports["Semiring"]["_650@104512718"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsSemiring"]["_1456@25348318"]["identity"](x0)(x1)(function (x3) {
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
          })(exports["Semiring"]["_+_"](undefined)(undefined)(x2))(exports["Semiring"]["_*_"](undefined)(undefined)(x2))(exports["Semiring"]["0#"](undefined)(undefined)(x2))(exports["Semiring"]["1#"](undefined)(undefined)(x2))(exports["Semiring"]["isSemiring"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeRing"]["_1148@104512718"]["isMonoid"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsCommutativeRing"]["_2334@25348318"]["isMonoid"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["CommutativeRing"]["isCommutativeRing"](undefined)(undefined)(x0));
        };
      };
    };
  exports["DistributiveLattice"]["_1346@104512718"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsDistributiveLattice"]["_2694@25348318"]["reflexive"](x0)(x1)(function (x3) {
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
          })(exports["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2))(exports["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2))(exports["DistributiveLattice"]["isDistributiveLattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["CommutativeSemiring"]["_+_"] = function (x0) {
      return x0["_+_"];
    };
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["sym"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x0));
        };
      };
    };
  exports["AbelianGroup"]["_302@104512718"]["⁻¹-cong"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsAbelianGroup"]["_770@25348318"]["⁻¹-cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AbelianGroup"]["isAbelianGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["DistributiveLattice"]["_∨_"] = function (x0) {
      return x0["_∨_"];
    };
  exports["SemiringWithoutAnnihilatingZero"]["_554@104512718"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsSemiringWithoutAnnihilatingZero"]["_1284@25348318"]["identity"](x0)(x1)(function (x3) {
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
          })(exports["SemiringWithoutAnnihilatingZero"]["_+_"](undefined)(undefined)(x2))(exports["SemiringWithoutAnnihilatingZero"]["_*_"](undefined)(undefined)(x2))(exports["SemiringWithoutAnnihilatingZero"]["0#"](undefined)(undefined)(x2))(exports["SemiringWithoutAnnihilatingZero"]["1#"](undefined)(undefined)(x2))(exports["SemiringWithoutAnnihilatingZero"]["isSemiringWithoutAnnihilatingZero"](undefined)(undefined)(x2));
        };
      };
    };
  exports["Ring"]["_1076@104512718"]["+-commutativeMonoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Semiring"]["_698@104512718"]["+-commutativeMonoid"](undefined)(undefined)(exports["Ring"]["semiring"](x0)(x1)(x2));
        };
      };
    };
  exports["AbelianGroup"]["_302@104512718"]["isEquivalence"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Algebra_Structures["IsAbelianGroup"]["_770@25348318"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["AbelianGroup"]["isAbelianGroup"](undefined)(undefined)(x0));
        };
      };
    };
  exports["BooleanAlgebra"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return {
                      "Carrier": x0,
                      "_∧_": x3,
                      "_∨_": x2,
                      "_≈_": x1,
                      "isBooleanAlgebra": x7,
                      "record": function (x8) {
                        return x8["record"](x0, x1, x2, x3, x4, x5, x6, x7);
                      },
                      "¬_": x4,
                      "⊤": x5,
                      "⊥": x6
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["AbelianGroup"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return {
                  "Carrier": x0,
                  "_⁻¹": x4,
                  "_∙_": x2,
                  "_≈_": x1,
                  "isAbelianGroup": x5,
                  "record": function (x6) {
                    return x6["record"](x0, x1, x2, x3, x4, x5);
                  },
                  "ε": x3
                };
              };
            };
          };
        };
      };
    };
  });
