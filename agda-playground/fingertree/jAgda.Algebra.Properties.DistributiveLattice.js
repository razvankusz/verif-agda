define(["exports","jAgda.Agda.Primitive","jAgda.Algebra","jAgda.Algebra.Properties.Lattice","jAgda.Algebra.Structures","jAgda.Data.Product","jAgda.Function","jAgda.Function.Equality","jAgda.Function.Equivalence","jAgda.Relation.Binary.EqReasoning","jAgda.Relation.Binary.PreorderReasoning"],function(exports,jAgda_Agda_Primitive,jAgda_Algebra,jAgda_Algebra_Properties_Lattice,jAgda_Algebra_Structures,jAgda_Data_Product,jAgda_Function,jAgda_Function_Equality,jAgda_Function_Equivalence,jAgda_Relation_Binary_EqReasoning,jAgda_Relation_Binary_PreorderReasoning) {
  exports["_118@83321714"] = {};
  exports["_118@83321714"]["_∎"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∎"](x0)(x1)(jAgda_Algebra["DistributiveLattice"]["_1378@104512718"]["setoid"](undefined)(undefined)(x2));
        };
      };
    };
  exports["∨-∧-distrib"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Data_Product["Σ"]["_,_"](exports["_142@83321714"]["∨-∧-distribˡ"](x0)(x1)(x2))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∨-∧-distribʳ"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_192@83321714"] = {};
  exports["_192@83321714"]["E"] = {};
  exports["_192@83321714"]["E"]["to"] = function () {
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
  exports["L"] = {};
  exports["L"]["poset"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_Lattice["poset"](x0)(x1)(jAgda_Algebra["DistributiveLattice"]["lattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_70@83321714"] = {};
  exports["_70@83321714"]["_DistributesOver_"] = function (x0) {
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
  exports["L"]["replace-equality"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_Lattice["replace-equality"](x0)(x1)(jAgda_Algebra["DistributiveLattice"]["lattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_118@83321714"]["_∼⟨_⟩_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∼⟨_⟩_"](x0)(x1)(jAgda_Algebra["DistributiveLattice"]["_1378@104512718"]["setoid"](undefined)(undefined)(x2));
        };
      };
    };
  exports["L"]["∧-idempotent"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_Lattice["∧-idempotent"](x0)(x1)(jAgda_Algebra["DistributiveLattice"]["lattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_156@83321714"] = {};
  exports["_156@83321714"]["∧-∨-distribˡ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_118@83321714"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x6) {
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
                })(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x4)))(x3)(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["absorptive"](undefined)(undefined)(x2))(x3)(x4)))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∧-cong"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5)))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5))))(exports["_118@83321714"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x3)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x6) {
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
                })(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x6) {
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
                })(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["refl"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∧-cong"](undefined)(undefined)(x2)(x3)(x3)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x3)))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∨-comm"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x3)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5)))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5))))(exports["_118@83321714"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x3)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5))))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∧-assoc"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5)))(exports["_118@83321714"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5))))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5))))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x6) {
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
                })(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["refl"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∧-cong"](undefined)(undefined)(x2)(x3)(x3)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5))))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["∨-∧-distrib"](x0)(x1)(x2))(x4)(x3)(x5))))(exports["_118@83321714"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5))))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5))))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x6) {
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
                })(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(x3)(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["absorptive"](undefined)(undefined)(x2))(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∧-cong"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5))))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))))(exports["_118@83321714"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5))))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Function["_$_"](x1)(x1)(function (x6) {
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
                  return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return "*";
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
                  })(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5))));
                })(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∨-∧-distrib"](x0)(x1)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5))(x3)(x4)))(exports["_118@83321714"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5))))))))));
              };
            };
          };
        };
      };
    };
  exports["∧-∨-isDistributiveLattice"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsDistributiveLattice"]["record"](exports["L"]["∧-∨-isLattice"](x0)(x1)(x2))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["∧-∨-distrib"](x0)(x1)(x2)));
        };
      };
    };
  exports["L"]["∧-∨-isLattice"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_Lattice["∧-∨-isLattice"](x0)(x1)(jAgda_Algebra["DistributiveLattice"]["lattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_142@83321714"] = {};
  exports["_142@83321714"]["∨-∧-distribˡ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_118@83321714"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x4)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x4)(x5))(x3))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∨-comm"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x4)(x5)))(exports["_118@83321714"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x4)(x5))(x3))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x5)(x3)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∨-∧-distribʳ"](undefined)(undefined)(x2)(x3)(x4)(x5))(exports["_118@83321714"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x5)(x3)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x6) {
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
                })(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∨-comm"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x5)(x3))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∨-comm"](undefined)(undefined)(x2)(x5)(x3)))(exports["_118@83321714"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x5)))))));
              };
            };
          };
        };
      };
    };
  exports["∧-∨-distributiveLattice"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["DistributiveLattice"]["record"](function (x3) {
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
          })(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2))(exports["∧-∨-isDistributiveLattice"](x0)(x1)(x2));
        };
      };
    };
  exports["L"]["∧-∨-lattice"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_Lattice["∧-∨-lattice"](x0)(x1)(jAgda_Algebra["DistributiveLattice"]["lattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["L"]["∨-idempotent"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_Lattice["∨-idempotent"](x0)(x1)(jAgda_Algebra["DistributiveLattice"]["lattice"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_156@83321714"]["∧-∨-distribʳ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_118@83321714"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5))(x3))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x5)(x3)))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∧-comm"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5))(x3))(exports["_118@83321714"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x4)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x5)(x3)))(exports["_156@83321714"]["∧-∨-distribˡ"](x0)(x1)(x2)(x3)(x4)(x5))(exports["_118@83321714"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x5)(x3)))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x5)(x3)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x6) {
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
                })(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∧-comm"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∨-cong"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x5)(x3)))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∧-comm"](undefined)(undefined)(x2)(x3)(x5)))(exports["_118@83321714"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x4)(x3))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x5)(x3)))))));
              };
            };
          };
        };
      };
    };
  exports["∧-∨-distrib"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Data_Product["Σ"]["_,_"](exports["_156@83321714"]["∧-∨-distribˡ"](x0)(x1)(x2))(exports["_156@83321714"]["∧-∨-distribʳ"](x0)(x1)(x2));
        };
      };
    };
  exports["replace-equality"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Algebra["DistributiveLattice"]["record"](function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              })(x3)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2))(jAgda_Algebra_Structures["IsDistributiveLattice"]["record"](jAgda_Algebra["Lattice"]["isLattice"](undefined)(undefined)(exports["L"]["replace-equality"](x0)(x1)(x2)(x3)(x4)))(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_192@83321714"]["E"]["to"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))(x5))(jAgda_Algebra["DistributiveLattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x6)(x5))(jAgda_Algebra["DistributiveLattice"]["_∨_"](undefined)(undefined)(x2)(x7)(x5))))(jAgda_Algebra["DistributiveLattice"]["_1346@104512718"]["∨-∧-distribʳ"](undefined)(undefined)(x2)(x5)(x6)(x7));
                  };
                };
              }));
            };
          };
        };
      };
    };
  });
