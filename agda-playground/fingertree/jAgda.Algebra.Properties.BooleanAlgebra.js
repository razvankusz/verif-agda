define(["exports","jAgda.Agda.Primitive","jAgda.Algebra","jAgda.Algebra.Properties.DistributiveLattice","jAgda.Algebra.Structures","jAgda.Data.Product","jAgda.Function","jAgda.Function.Equality","jAgda.Function.Equivalence","jAgda.Relation.Binary.EqReasoning","jAgda.Relation.Binary.PreorderReasoning"],function(exports,jAgda_Agda_Primitive,jAgda_Algebra,jAgda_Algebra_Properties_DistributiveLattice,jAgda_Algebra_Structures,jAgda_Data_Product,jAgda_Function,jAgda_Function_Equality,jAgda_Function_Equivalence,jAgda_Relation_Binary_EqReasoning,jAgda_Relation_Binary_PreorderReasoning) {
  exports["DL"] = {};
  exports["DL"]["replace-equality"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_DistributiveLattice["replace-equality"](x0)(x1)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["¬-involutive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["lemma"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x3)(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∧-complement"](x0)(x1)(x2))(x3))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∨-complement"](x0)(x1)(x2))(x3));
          };
        };
      };
    };
  exports["XorRing"] = {};
  exports["XorRing"]["_512@217385760"] = {};
  exports["XorRing"]["_512@217385760"]["lem₄"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(exports["deMorgan₁"](x0)(x1)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7))))(exports["XorRing"]["_512@217385760"]["lem₄'"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7))))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["DL"]["∨-∧-distrib"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-assoc"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-assoc"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-comm"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7)))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))))))));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["XorRing"]["lemma₂"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(x8)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(x8)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x8))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x8))))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["DL"]["∨-∧-distrib"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(x7)(x8))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(x8)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x5)(x7))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x6)(x7)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x5)(x8))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x6)(x8))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x8))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x8))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["DL"]["∨-∧-distrib"](x0)(x1)(x2))(x7)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x5)(x6))(x7))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x5)(x7))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x6)(x7)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x5)(x6))(x8))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x5)(x8))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x6)(x8))))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["DL"]["∨-∧-distrib"](x0)(x1)(x2))(x8)(x5)(x6)))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x8))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x8)))))));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["DL"]["∨-∧-distrib"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_DistributiveLattice["∨-∧-distrib"](x0)(x1)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["∧-complement"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Data_Product["Σ"]["_,_"](exports["_176@217385760"]["∧-complementˡ"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-complementʳ"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_94@217385760"] = {};
  exports["_94@217385760"]["Op₂"] = function (x0) {
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
  exports["XorRing"]["⊕-¬-distribˡ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Function["_$_"](x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return jAgda_Function["_on_"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })("*")(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2))(x3(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))));
                  })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["¬-cong"](undefined)(undefined)(x2)(x3(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(x4(x5)(x6)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["¬-cong"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["DL"]["∧-∨-distrib"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))(x5)(x6)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Function["_$_"](x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return jAgda_Function["_on_"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })("*")(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5)))));
                  })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["¬-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5)))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(x6)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["¬-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-comm"](undefined)(undefined)(x2)(x5)(x6))))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Function["_$_"](x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return jAgda_Function["_on_"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })("*")(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5)))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))));
                  })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["¬-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5)))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(exports["XorRing"]["_372@217385760"]["lem"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))))(exports["XorRing"]["_372@217385760"]["lem"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x6)(x5))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(exports["deMorgan₂"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(exports["deMorgan₁"](x0)(x1)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(exports["XorRing"]["helper"](x0)(x1)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x6))(exports["¬-involutive"](x0)(x1)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-comm"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))))(x3(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Function["_$_"](x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(x3(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))));
                  })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(x3(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6)))))(x4(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6)))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6)))))))))));
                };
              };
            };
          };
        };
      };
    };
  exports["XorRing"]["_456@217385760"] = {};
  exports["XorRing"]["_456@217385760"]["distʳ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x7))(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x7)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(x5)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-comm"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x7))(x5))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x7)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(x5)))(exports["XorRing"]["_456@217385760"]["distˡ"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(x5)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(x5)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-comm"](undefined)(undefined)(x2)(x5)(x6))(exports["XorRing"]["⊕-cong"](x0)(x1)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(x5)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-comm"](undefined)(undefined)(x2)(x5)(x7)))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(x5)))))));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["∧-identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Data_Product["Σ"]["_,_"](function (x3) {
            return jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-comm"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(x3))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["trans"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(x3))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(x3))(exports["_190@217385760"]["x∧⊤=x"](x0)(x1)(x2)(x3));
          })(exports["_190@217385760"]["x∧⊤=x"](x0)(x1)(x2));
        };
      };
    };
  exports["XorRing"]["_456@217385760"]["distˡ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(x5)(x5)(x3(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(x4(x6)(x7)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-assoc"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(exports["deMorgan₁"](x0)(x1)(x2)(x6)(x7)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∨-identity"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(exports["XorRing"]["_456@217385760"]["_468@217385760"]["lem₃"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["DL"]["∧-∨-distrib"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(exports["deMorgan₁"](x0)(x1)(x2)(x6)(x7)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))(exports["deMorgan₁"](x0)(x1)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(exports["XorRing"]["helper"](x0)(x1)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))))(exports["XorRing"]["_456@217385760"]["_468@217385760"]["lem₁"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x5)(x6))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x5)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["DL"]["∧-∨-distrib"](x0)(x1)(x2))(x5)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x5)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x6)(x7)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x5)(x6))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x5)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7))))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))))(x3(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(x3(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(x3(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7))))))(x4(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7))))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))))))))))))));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["XorRing"]["_372@217385760"] = {};
  exports["XorRing"]["_372@217385760"]["lem"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(x8))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(x7))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(x7)(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(x8)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8))))(exports["deMorgan₁"](x0)(x1)(x2)(x7)(x8)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8))))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["DL"]["∧-∨-distrib"](x0)(x1)(x2))(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-complement"](x0)(x1)(x2))(x7))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∨-identity"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8))))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x7)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8))))))));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["XorRing"]["_456@217385760"]["_468@217385760"] = {};
  exports["XorRing"]["_456@217385760"]["_468@217385760"]["lem₃"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-zero"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-complement"](x0)(x1)(x2))(x5))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-assoc"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-comm"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(x5))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))))))));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["XorRing"]["⊕-¬-distribʳ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x5)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Function["_$_"](x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return jAgda_Function["_on_"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })("*")(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x5));
                  })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["¬-cong"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x5)))(exports["XorRing"]["⊕-comm"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x5)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x5))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(exports["XorRing"]["⊕-¬-distribˡ"](x0)(x1)(x2)(x3)(x4)(x6)(x5))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x5))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(exports["XorRing"]["⊕-comm"](x0)(x1)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x5))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))))));
                };
              };
            };
          };
        };
      };
    };
  exports["XorRing"]["⊕-cong"] = function (x0) {
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
                          return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x8))(x4(x5)(x7))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x8))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x8))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x8))(exports["XorRing"]["helper"](x0)(x1)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x8))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x8))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return "*";
                                  };
                                };
                              };
                            };
                          })(function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return "*";
                                  };
                                };
                              };
                            };
                          })(function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return "*";
                                  };
                                };
                              };
                            };
                          })(x9)(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(x5)(x6)(x7)(x8))(x10))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return "*";
                                  };
                                };
                              };
                            };
                          })(function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return "*";
                                  };
                                };
                              };
                            };
                          })(function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return "*";
                                  };
                                };
                              };
                            };
                          })(x9)(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(x5)(x6)(x7)(x8))(x10)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x8))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x8))))(x3(x6)(x8))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x8))(jAgda_Function["_$_"](x1)(x1)(function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return "*";
                                  };
                                };
                              };
                            };
                          })(function (x11) {
                            return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return "*";
                                };
                              };
                            })(function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return "*";
                                };
                              };
                            })(function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            })(function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return function (x16) {
                                      return "*";
                                    };
                                  };
                                };
                              };
                            })(x3(x6)(x8))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x8))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x8))));
                          })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(x3(x6)(x8))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x8))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x8)))))(x4(x6)(x8)))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x8))))));
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
  exports["DL"]["poset"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_DistributiveLattice["L"]["poset"](x0)(x1)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["DL"]["∨-idempotent"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_DistributiveLattice["L"]["∨-idempotent"](x0)(x1)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["XorRing"]["_512@217385760"]["lem₄'"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7)))(exports["deMorgan₁"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(exports["deMorgan₂"](x0)(x1)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))(exports["¬-involutive"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7)))(exports["XorRing"]["lemma₂"](x0)(x1)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))(x6)(x7))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∨-complement"](x0)(x1)(x2))(x6))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x6))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-comm"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))(x6)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))(x7))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∨-complement"](x0)(x1)(x2))(x7))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∧-identity"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-identity"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7))))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x7)))))))));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["¬⊤=⊥"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["lemma"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-zero"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∨-identity"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)));
        };
      };
    };
  exports["DL"]["∧-∨-distrib"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_DistributiveLattice["∧-∨-distrib"](x0)(x1)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["XorRing"]["isCommutativeRing"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Algebra_Structures["IsCommutativeRing"]["record"](jAgda_Algebra_Structures["IsRing"]["record"](jAgda_Algebra_Structures["IsAbelianGroup"]["record"](jAgda_Algebra_Structures["IsGroup"]["record"](jAgda_Algebra_Structures["IsMonoid"]["record"](jAgda_Algebra_Structures["IsSemigroup"]["record"](jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["isEquivalence"](undefined)(undefined)(x2))(exports["XorRing"]["⊕-assoc"](x0)(x1)(x2)(x3)(x4))(exports["XorRing"]["⊕-cong"](x0)(x1)(x2)(x3)(x4)))(exports["XorRing"]["⊕-identity"](x0)(x1)(x2)(x3)(x4)))(exports["XorRing"]["⊕-inverse"](x0)(x1)(x2)(x3)(x4))(function (x5) {
                return function (x6) {
                  return jAgda_Function["id"](x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  });
                };
              }))(exports["XorRing"]["⊕-comm"](x0)(x1)(x2)(x3)(x4)))(jAgda_Algebra_Structures["IsMonoid"]["record"](jAgda_Algebra_Structures["IsSemigroup"]["record"](jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["isEquivalence"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-assoc"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)))(exports["∧-identity"](x0)(x1)(x2)))(exports["XorRing"]["distrib-∧-⊕"](x0)(x1)(x2)(x3)(x4)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-comm"](undefined)(undefined)(x2));
            };
          };
        };
      };
    };
  exports["_236@217385760"] = {};
  exports["_236@217385760"]["x∨⊤=⊤"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(x3)(x3)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∨-complement"](x0)(x1)(x2))(x3))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Function["_$_"](x1)(x1)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return "*";
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))));
            })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-assoc"](undefined)(undefined)(x2)(x3)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(exports["DL"]["∨-idempotent"](x0)(x1)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["DistributiveLattice"]["lattice"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2)))(x3)(x3))(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∨-complement"](x0)(x1)(x2))(x3))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))))));
          };
        };
      };
    };
  exports["_204@217385760"] = {};
  exports["_204@217385760"]["x∨⊥=x"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(x3)(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(x3)(x3)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-complement"](x0)(x1)(x2))(x3))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(x3)(x3)(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["absorptive"](undefined)(undefined)(x2))(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(x3))));
          };
        };
      };
    };
  exports["XorRing"]["_428@217385760"] = {};
  exports["XorRing"]["_428@217385760"]["⊥⊕x=x"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(x5))))(x5)(x4(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(x5))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(x5))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))))(x5)(exports["XorRing"]["helper"](x0)(x1)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(x5))(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(x5))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∨-identity"](x0)(x1)(x2))(x5))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∧-zero"](x0)(x1)(x2))(x5)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(x5)(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    };
                  };
                })(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    };
                  };
                })(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    };
                  };
                })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(x5)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(exports["¬⊥=⊤"](x0)(x1)(x2)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(x5)(x5)(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-identity"](x0)(x1)(x2))(x5))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(x5))))));
              };
            };
          };
        };
      };
    };
  exports["_284@217385760"] = {};
  exports["_284@217385760"]["lem₃"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["DL"]["∨-∧-distrib"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x3)(x4))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∨-complement"](x0)(x1)(x2))(x3))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∧-identity"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-comm"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4)))))));
            };
          };
        };
      };
    };
  exports["DefaultXorRing"] = {};
  exports["DefaultXorRing"]["commutativeRing"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["XorRing"]["commutativeRing"](x0)(x1)(x2)(exports["_⊕_"](undefined)(undefined)(x2))(function (x3) {
            return function (x4) {
              return jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(exports["_⊕_"](undefined)(undefined)(x2)(x3)(x4));
            };
          });
        };
      };
    };
  exports["XorRing"]["⊕-comm"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x5))(x4(x5)(x6))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x5))(exports["XorRing"]["helper"](x0)(x1)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-comm"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-comm"](undefined)(undefined)(x2)(x5)(x6)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))))(x3(x6)(x5))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x5))(jAgda_Function["_$_"](x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(x3(x6)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))));
                  })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(x3(x6)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5)))))(x4(x6)(x5)))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x5))))));
                };
              };
            };
          };
        };
      };
    };
  exports["DL"]["∧-idempotent"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_DistributiveLattice["L"]["∧-idempotent"](x0)(x1)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_284@217385760"]["lem₁"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["DL"]["∧-∨-distrib"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-comm"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-assoc"](undefined)(undefined)(x2)(x4)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-assoc"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(x4))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(x4)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-complement"](x0)(x1)(x2))(x3)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(x3)(x3)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-complement"](x0)(x1)(x2))(x4))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-zero"](x0)(x1)(x2))(x4))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-zero"](x0)(x1)(x2))(x3)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∨-identity"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))))))));
            };
          };
        };
      };
    };
  exports["XorRing"]["_512@217385760"]["lem₅"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-assoc"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-comm"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-assoc"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))))));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["lemma"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(x4)(jAgda_Function["_$_"](x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3));
                  })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-identity"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(x4)))(x4)(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(x6)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x3))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4)))(x4)(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["DL"]["∧-∨-distrib"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x3)(x4))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x3))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4)))(x4)(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∧-complement"](x0)(x1)(x2))(x3))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x3))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4)))(x4)(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(x5))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(x4))(x4)(jAgda_Function["_$_"](x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(x4))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4)));
                  })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(x4))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4))))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["DL"]["∧-∨-distrib"](x0)(x1)(x2))(x4)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(x4))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(x4))(x4)(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∨-complement"](x0)(x1)(x2))(x3))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(x4)(x4))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(x4)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(x4))(x4)(x4)(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∧-identity"](x0)(x1)(x2))(x4))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(x4))))))))));
                };
              };
            };
          };
        };
      };
    };
  exports["_218@217385760"] = {};
  exports["_218@217385760"]["x∧⊥=⊥"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(x3)(x3)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-complement"](x0)(x1)(x2))(x3))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Function["_$_"](x1)(x1)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return "*";
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))));
            })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-assoc"](undefined)(undefined)(x2)(x3)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(exports["DL"]["∧-idempotent"](x0)(x1)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["DistributiveLattice"]["lattice"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2)))(x3)(x3))(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-complement"](x0)(x1)(x2))(x3))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))))));
          };
        };
      };
    };
  exports["XorRing"]["_442@217385760"] = {};
  exports["XorRing"]["_442@217385760"]["x⊕x=⊥"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x5))))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(x4(x5)(x5))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x5))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(exports["XorRing"]["helper"](x0)(x1)(x2)(x3)(x4)(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["DistributiveLattice"]["lattice"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2)))(x5)(x5))(x5)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["DistributiveLattice"]["lattice"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2)))(x5)(x5))(x5)(exports["DL"]["∨-idempotent"](x0)(x1)(x2)(x5))(exports["DL"]["∧-idempotent"](x0)(x1)(x2)(x5)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-complement"](x0)(x1)(x2))(x5))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))))));
              };
            };
          };
        };
      };
    };
  exports["_⊕_"] = function () {
      return function () {
        return function (x0) {
          return function (x1) {
            return function (x2) {
              return jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x0)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x0)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x0)(x1)(x2)));
            };
          };
        };
      };
    };
  exports["deMorgan₁"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["lemma"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(exports["_284@217385760"]["lem₁"](x0)(x1)(x2)(x3)(x4))(exports["_284@217385760"]["lem₂"](x0)(x1)(x2)(x3)(x4));
            };
          };
        };
      };
    };
  exports["XorRing"]["distrib-∧-⊕"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Data_Product["Σ"]["_,_"](exports["XorRing"]["_456@217385760"]["distˡ"](x0)(x1)(x2)(x3)(x4))(exports["XorRing"]["_456@217385760"]["distʳ"](x0)(x1)(x2)(x3)(x4));
            };
          };
        };
      };
    };
  exports["XorRing"]["⊕-annihilates-¬"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Function["_$_"](x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6));
                  })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6)))(exports["¬-involutive"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Function["_$_"](x1)(x1)(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return jAgda_Function["_on_"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    })("*")(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6));
                  })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["¬-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6)))(exports["XorRing"]["⊕-¬-distribˡ"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(exports["XorRing"]["⊕-¬-distribʳ"](x0)(x1)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))))));
                };
              };
            };
          };
        };
      };
    };
  exports["_142@217385760"] = {};
  exports["_142@217385760"]["_∼⟨_⟩_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∼⟨_⟩_"](x0)(x1)(jAgda_Algebra["BooleanAlgebra"]["_1464@104512718"]["setoid"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_316@217385760"] = {};
  exports["_316@217385760"]["E"] = {};
  exports["_316@217385760"]["E"]["from"] = function () {
      return function () {
        return function (x0) {
          return function (x1) {
            return function (x2) {
              return function (x3) {
                return function (x4) {
                  return jAgda_Function_Equivalence["Equivalence"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x2(x3)(x4));
                };
              };
            };
          };
        };
      };
    };
  exports["_94@217385760"]["Identity"] = function (x0) {
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
  exports["DefaultXorRing"]["⊕-annihilates-¬"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["XorRing"]["⊕-annihilates-¬"](x0)(x1)(x2)(exports["_⊕_"](undefined)(undefined)(x2))(function (x3) {
            return function (x4) {
              return jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(exports["_⊕_"](undefined)(undefined)(x2)(x3)(x4));
            };
          });
        };
      };
    };
  exports["DL"]["∧-∨-isDistributiveLattice"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_DistributiveLattice["∧-∨-isDistributiveLattice"](x0)(x1)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["XorRing"]["_512@217385760"]["lem₂'"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6)));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∧-identity"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-identity"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x5)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x6))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x5)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x5)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∨-complement"](x0)(x1)(x2))(x5))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x5))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-comm"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x5)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x5)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x6))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∨-complement"](x0)(x1)(x2))(x6)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x5)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x5)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x6))));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x5))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x5)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x6)))))(exports["XorRing"]["lemma₂"](x0)(x1)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(x5)(x6)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(exports["deMorgan₂"](x0)(x1)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))(exports["¬-involutive"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(exports["deMorgan₁"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))))))));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["replace-equality"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Algebra["BooleanAlgebra"]["record"](function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              })(x3)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra_Structures["IsBooleanAlgebra"]["record"](jAgda_Algebra["DistributiveLattice"]["isDistributiveLattice"](undefined)(undefined)(exports["DL"]["replace-equality"](x0)(x1)(x2)(x3)(x4)))(function (x5) {
                return jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_316@217385760"]["E"]["to"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-complementʳ"](undefined)(undefined)(x2)(x5));
              })(function (x5) {
                return jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_316@217385760"]["E"]["to"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-complementʳ"](undefined)(undefined)(x2)(x5));
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_316@217385760"]["E"]["to"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["¬-cong"](undefined)(undefined)(x2)(x5)(x6)(jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_316@217385760"]["E"]["from"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(x7)));
                  };
                };
              }));
            };
          };
        };
      };
    };
  exports["∨-∧-isCommutativeSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["record"](jAgda_Algebra_Structures["IsCommutativeMonoid"]["record"](jAgda_Algebra_Structures["IsSemigroup"]["record"](jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["isEquivalence"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-assoc"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∨-identity"](x0)(x1)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-comm"](undefined)(undefined)(x2)))(jAgda_Algebra_Structures["IsCommutativeMonoid"]["record"](jAgda_Algebra_Structures["IsSemigroup"]["record"](jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["isEquivalence"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-assoc"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∧-identity"](x0)(x1)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-comm"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["DL"]["∧-∨-distrib"](x0)(x1)(x2)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∧-zero"](x0)(x1)(x2)));
        };
      };
    };
  exports["_284@217385760"]["lem₂"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Function["_$_"](x1)(x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                })(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                })(function (x6) {
                  return function (x7) {
                    return "*";
                  };
                })(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    };
                  };
                })(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))));
              })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-assoc"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(exports["_284@217385760"]["lem₃"](x0)(x1)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-assoc"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∨-complement"](x0)(x1)(x2))(x4)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∨-zero"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))))))));
            };
          };
        };
      };
    };
  exports["DefaultXorRing"]["isCommutativeRing"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["XorRing"]["isCommutativeRing"](x0)(x1)(x2)(exports["_⊕_"](undefined)(undefined)(x2))(function (x3) {
            return function (x4) {
              return jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(exports["_⊕_"](undefined)(undefined)(x2)(x3)(x4));
            };
          });
        };
      };
    };
  exports["_142@217385760"]["_∎"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∎"](x0)(x1)(jAgda_Algebra["BooleanAlgebra"]["_1464@104512718"]["setoid"](undefined)(undefined)(x2));
        };
      };
    };
  exports["XorRing"]["_512@217385760"]["lem₁"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(x7))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7)));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(x7))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["DL"]["∨-∧-distrib"](x0)(x1)(x2))(x7)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(exports["deMorgan₁"](x0)(x1)(x2)(x5)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7)(x7))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(x7)))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7)))));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["DL"]["∧-∨-distributiveLattice"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_DistributiveLattice["∧-∨-distributiveLattice"](x0)(x1)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_190@217385760"] = {};
  exports["_190@217385760"]["x∧⊤=x"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(x3)(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(x3)(x3)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∨-complement"](x0)(x1)(x2))(x3))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))))(x3)(x3)(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["absorptive"](undefined)(undefined)(x2))(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(x3))));
          };
        };
      };
    };
  exports["_176@217385760"] = {};
  exports["_176@217385760"]["∧-complementˡ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x3))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-comm"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x3))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-complementʳ"](undefined)(undefined)(x2)(x3))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))));
          };
        };
      };
    };
  exports["∨-complement"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Data_Product["Σ"]["_,_"](exports["_166@217385760"]["∨-complementˡ"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-complementʳ"](undefined)(undefined)(x2));
        };
      };
    };
  exports["XorRing"]["commutativeRing"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Algebra["CommutativeRing"]["record"](function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2))(jAgda_Function["id"](x0)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              }))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(exports["XorRing"]["isCommutativeRing"](x0)(x1)(x2)(x3)(x4));
            };
          };
        };
      };
    };
  exports["XorRing"]["helper"] = function (x0) {
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
                          return jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return "*";
                                  };
                                };
                              };
                            };
                          })(function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return "*";
                                  };
                                };
                              };
                            };
                          })(function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return "*";
                                  };
                                };
                              };
                            };
                          })(x9)(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(x5)(x6)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x8)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["¬-cong"](undefined)(undefined)(x2)(x7)(x8)(x10));
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
  exports["_94@217385760"]["_DistributesOver_"] = function (x0) {
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
  exports["_94@217385760"]["Zero"] = function (x0) {
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
  exports["XorRing"]["_456@217385760"]["_468@217385760"]["lem₁"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["DistributiveLattice"]["lattice"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2)))(x5)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["DistributiveLattice"]["lattice"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2)))(x5)(x5))(x5)(exports["DL"]["∧-idempotent"](x0)(x1)(x2)(x5)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["DistributiveLattice"]["lattice"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2)))(x5)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x5))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-assoc"](undefined)(undefined)(x2)(x5)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(x5)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7))))(exports["XorRing"]["_456@217385760"]["_468@217385760"]["lem₂"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7))));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-assoc"](undefined)(undefined)(x2)(x5)(x6)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7))))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7))))))));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["deMorgan₂"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(jAgda_Function["_$_"](x1)(x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return jAgda_Function["_on_"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                })(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                })("*")(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    };
                  };
                })(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))));
              })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["¬-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(x3)(exports["¬-involutive"](x0)(x1)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(x4)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(x4)(exports["¬-involutive"](x0)(x1)(x2)(x4)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(jAgda_Function["_$_"](x1)(x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return jAgda_Function["_on_"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                })(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                })("*")(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    };
                  };
                })(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))));
              })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["¬-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))))(jAgda_Function["_$_"](x1)(x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })(function (x5) {
                return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                })(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                })(function (x6) {
                  return function (x7) {
                    return "*";
                  };
                })(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    };
                  };
                })(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))));
              })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))))(exports["deMorgan₁"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))(exports["¬-involutive"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4))))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x4)))))));
            };
          };
        };
      };
    };
  exports["DefaultXorRing"]["⊕-¬-distribˡ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["XorRing"]["⊕-¬-distribˡ"](x0)(x1)(x2)(exports["_⊕_"](undefined)(undefined)(x2))(function (x3) {
            return function (x4) {
              return jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(exports["_⊕_"](undefined)(undefined)(x2)(x3)(x4));
            };
          });
        };
      };
    };
  exports["XorRing"]["_512@217385760"]["lem₃"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(x5)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(exports["deMorgan₁"](x0)(x1)(x2)(x6)(x7))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["DL"]["∨-∧-distrib"](x0)(x1)(x2))(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-assoc"](undefined)(undefined)(x2)(x5)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-assoc"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))))));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["¬⊥=⊤"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["lemma"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-identity"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∨-zero"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)));
        };
      };
    };
  exports["∧-∨-commutativeSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["CommutativeSemiring"]["record"](function (x3) {
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
          })(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(exports["∧-∨-isCommutativeSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["∨-zero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Data_Product["Σ"]["_,_"](function (x3) {
            return jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-comm"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(x3))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["trans"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(x3))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))(exports["_236@217385760"]["x∨⊤=⊤"](x0)(x1)(x2)(x3));
          })(exports["_236@217385760"]["x∨⊤=⊤"](x0)(x1)(x2));
        };
      };
    };
  exports["XorRing"]["_⊕_"] = function () {
      return function () {
        return function (x0) {
          return function (x1) {
            return function (x2) {
              return x1;
            };
          };
        };
      };
    };
  exports["DL"]["∧-∨-lattice"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_DistributiveLattice["L"]["∧-∨-lattice"](x0)(x1)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["∨-identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Data_Product["Σ"]["_,_"](function (x3) {
            return jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-comm"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(x3))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["trans"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(x3))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(x3))(exports["_204@217385760"]["x∨⊥=x"](x0)(x1)(x2)(x3));
          })(exports["_204@217385760"]["x∨⊥=x"](x0)(x1)(x2));
        };
      };
    };
  exports["∧-∨-booleanAlgebra"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["BooleanAlgebra"]["record"](function (x3) {
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
          })(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(exports["∧-∨-isBooleanAlgebra"](x0)(x1)(x2));
        };
      };
    };
  exports["XorRing"]["⊕-identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Data_Product["Σ"]["_,_"](exports["XorRing"]["_428@217385760"]["⊥⊕x=x"](x0)(x1)(x2)(x3)(x4))(function (x5) {
                return jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    };
                  };
                })(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    };
                  };
                })(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    };
                  };
                })(exports["XorRing"]["⊕-comm"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["trans"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(x5))(x5))(exports["XorRing"]["_428@217385760"]["⊥⊕x=x"](x0)(x1)(x2)(x3)(x4)(x5));
              });
            };
          };
        };
      };
    };
  exports["_166@217385760"] = {};
  exports["_166@217385760"]["∨-complementˡ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x3))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-comm"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3))(x3))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x3)))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-complementʳ"](undefined)(undefined)(x2)(x3))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2)))));
          };
        };
      };
    };
  exports["∧-∨-isCommutativeSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsCommutativeSemiring"]["record"](jAgda_Algebra_Structures["IsCommutativeMonoid"]["record"](jAgda_Algebra_Structures["IsSemigroup"]["record"](jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["isEquivalence"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-assoc"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∧-identity"](x0)(x1)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-comm"](undefined)(undefined)(x2)))(jAgda_Algebra_Structures["IsCommutativeMonoid"]["record"](jAgda_Algebra_Structures["IsSemigroup"]["record"](jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["isEquivalence"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-assoc"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∨-identity"](x0)(x1)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-comm"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["DL"]["∨-∧-distrib"](x0)(x1)(x2)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∨-zero"](x0)(x1)(x2)));
        };
      };
    };
  exports["XorRing"]["⊕-assoc"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x7)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(x7));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x7)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(x7)))(jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x6)(x7)))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(x7))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(x5))(exports["XorRing"]["⊕-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x5)(x3(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(x4(x6)(x7)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(x7))(x4(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(x7))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(exports["XorRing"]["_512@217385760"]["lem₃"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(exports["XorRing"]["_512@217385760"]["lem₄"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-assoc"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(x7))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))))(exports["XorRing"]["_512@217385760"]["lem₅"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(x7))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-assoc"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7))))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(x7))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(exports["XorRing"]["_512@217385760"]["lem₁"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7))))(exports["XorRing"]["_512@217385760"]["lem₂"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7))))(x3(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(x7))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(x3(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7))));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(x3(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7)))))(x4(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x3(x5)(x6))(x7))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(x7))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x3(x5)(x6))(x7))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x3(x5)(x6))(x7))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(x4(x5)(x6))(exports["XorRing"]["⊕-cong"](x0)(x1)(x2)(x3)(x4)(x3(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7)(x7))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(x7))))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(x7)))))))))))));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["DL"]["∧-∨-isLattice"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_DistributiveLattice["L"]["∧-∨-isLattice"](x0)(x1)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["XorRing"]["_512@217385760"]["lem₂"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7)))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(jAgda_Algebra["BooleanAlgebra"]["distributiveLattice"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["DL"]["∨-∧-distrib"](x0)(x1)(x2))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(exports["XorRing"]["_512@217385760"]["lem₂'"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x6)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x5))(x6)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7)))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7)))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7)));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(x7))))(exports["deMorgan₁"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7)))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["¬_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))))(x7)))))));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["XorRing"]["⊕-inverse"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Data_Product["Σ"]["_,_"](exports["XorRing"]["_442@217385760"]["x⊕x=⊥"](x0)(x1)(x2)(x3)(x4))(function (x5) {
                return jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    };
                  };
                })(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    };
                  };
                })(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    };
                  };
                })(exports["XorRing"]["⊕-comm"](x0)(x1)(x2)(x3)(x4)(x5)(x5))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["trans"](undefined)(undefined)(x2)(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x5))(exports["XorRing"]["_⊕_"](undefined)(undefined)(x2)(x3)(x4)(x5)(x5))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(exports["XorRing"]["_442@217385760"]["x⊕x=⊥"](x0)(x1)(x2)(x3)(x4)(x5));
              });
            };
          };
        };
      };
    };
  exports["∧-∨-isBooleanAlgebra"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsBooleanAlgebra"]["record"](exports["DL"]["∧-∨-isDistributiveLattice"](x0)(x1)(x2))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-complement"](x0)(x1)(x2)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∨-complement"](x0)(x1)(x2)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["¬-cong"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_94@217385760"]["Inverse"] = function (x0) {
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
  exports["DefaultXorRing"]["⊕-¬-distribʳ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["XorRing"]["⊕-¬-distribʳ"](x0)(x1)(x2)(exports["_⊕_"](undefined)(undefined)(x2))(function (x3) {
            return function (x4) {
              return jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(exports["_⊕_"](undefined)(undefined)(x2)(x3)(x4));
            };
          });
        };
      };
    };
  exports["∧-zero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Data_Product["Σ"]["_,_"](function (x3) {
            return jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-comm"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(x3))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["trans"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(x3))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2)))(exports["_218@217385760"]["x∧⊥=⊥"](x0)(x1)(x2)(x3));
          })(exports["_218@217385760"]["x∧⊥=⊥"](x0)(x1)(x2));
        };
      };
    };
  exports["XorRing"]["_456@217385760"]["_468@217385760"]["lem₂"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Function["_$_"](x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7)));
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-assoc"](undefined)(undefined)(x2)(x5)(x6)(x7)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        };
                      };
                    })(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-comm"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))(x7)(x7))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["refl"](undefined)(undefined)(x2)(x7)))(exports["_142@217385760"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(x5))(x7))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))(jAgda_Algebra["BooleanAlgebra"]["_1424@104512718"]["∧-assoc"](undefined)(undefined)(x2)(x6)(x5)(x7))(exports["_142@217385760"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x6)(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2)(x5)(x7)))))));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["∨-∧-commutativeSemiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["CommutativeSemiring"]["record"](function (x3) {
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
          })(jAgda_Algebra["BooleanAlgebra"]["_∨_"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["_∧_"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊥"](undefined)(undefined)(x2))(jAgda_Algebra["BooleanAlgebra"]["⊤"](undefined)(undefined)(x2))(exports["∨-∧-isCommutativeSemiring"](x0)(x1)(x2));
        };
      };
    };
  exports["_316@217385760"]["E"]["to"] = function () {
      return function () {
        return function (x0) {
          return function (x1) {
            return function (x2) {
              return function (x3) {
                return function (x4) {
                  return jAgda_Function_Equivalence["Equivalence"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x2(x3)(x4));
                };
              };
            };
          };
        };
      };
    };
  });
