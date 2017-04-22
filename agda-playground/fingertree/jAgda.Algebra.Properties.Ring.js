define(["exports","jAgda.Agda.Primitive","jAgda.Algebra","jAgda.Algebra.Properties.AbelianGroup","jAgda.Data.Product","jAgda.Function","jAgda.Relation.Binary.EqReasoning","jAgda.Relation.Binary.PreorderReasoning"],function(exports,jAgda_Agda_Primitive,jAgda_Algebra,jAgda_Algebra_Properties_AbelianGroup,jAgda_Data_Product,jAgda_Function,jAgda_Relation_Binary_EqReasoning,jAgda_Relation_Binary_PreorderReasoning) {
  exports["_136@204093087"] = {};
  exports["_136@204093087"]["⁻¹-involutive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_AbelianGroup["_90@261499811"]["⁻¹-involutive"](x0)(x1)(jAgda_Algebra["Ring"]["+-abelianGroup"](undefined)(undefined)(x2));
        };
      };
    };
  exports["-‿*-distribʳ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_116@204093087"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4)))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Function["_$_"](x1)(x1)(function (x5) {
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
                })(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4)));
              })(jAgda_Algebra["Ring"]["_1014@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4))))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Ring"]["_1014@104512718"]["identity"](undefined)(undefined)(x2))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4)))))(exports["_116@204093087"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
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
              })(jAgda_Algebra["Ring"]["_1014@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Ring"]["_1014@104512718"]["inverse"](undefined)(undefined)(x2))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["_1014@104512718"]["∙-cong"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["Ring"]["_1014@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4)))))(exports["_116@204093087"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4)))))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_1014@104512718"]["assoc"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4))))(exports["_116@204093087"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4)))))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4)))))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
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
              })(jAgda_Algebra["Ring"]["_1014@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["_1014@104512718"]["∙-cong"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4)))))(jAgda_Algebra["Ring"]["_1014@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4))))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Ring"]["_1014@104512718"]["distrib"](undefined)(undefined)(x2))(x3)(x4)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4)))))(exports["_116@204093087"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4)))))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
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
              })(jAgda_Algebra["Ring"]["_1014@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["_1014@104512718"]["∙-cong"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4))))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
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
              })(jAgda_Algebra["Ring"]["_1014@104512718"]["refl"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["Ring"]["_1014@104512718"]["∙-cong"](undefined)(undefined)(x2)(x3)(x3)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x4)))(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Ring"]["_1014@104512718"]["inverse"](undefined)(undefined)(x2))(x4))))(exports["_116@204093087"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2)))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
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
              })(jAgda_Algebra["Ring"]["_1014@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["_1014@104512718"]["∙-cong"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2)))(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["_12@204093087"]["zero"](x0)(x1)(x2))(x3)))(exports["_116@204093087"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2)))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Ring"]["_1014@104512718"]["identity"](undefined)(undefined)(x2))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(exports["_116@204093087"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))))))))));
            };
          };
        };
      };
    };
  exports["_116@204093087"] = {};
  exports["_116@204093087"]["_∎"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∎"](x0)(x1)(exports["_12@204093087"]["setoid"](x0)(x1)(x2));
        };
      };
    };
  exports["_12@204093087"] = {};
  exports["_12@204093087"]["zero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["Ring"]["_1014@104512718"]["zero"](x0)(x1)(x2);
        };
      };
    };
  exports["_136@204093087"]["right-inverse-unique"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_AbelianGroup["_90@261499811"]["right-inverse-unique"](x0)(x1)(jAgda_Algebra["Ring"]["+-abelianGroup"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_136@204093087"]["⁻¹-∙-comm"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_AbelianGroup["⁻¹-∙-comm"](x0)(x1)(jAgda_Algebra["Ring"]["+-abelianGroup"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_136@204093087"]["left-inverse-unique"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_AbelianGroup["_90@261499811"]["left-inverse-unique"](x0)(x1)(jAgda_Algebra["Ring"]["+-abelianGroup"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_136@204093087"]["right-identity-unique"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_AbelianGroup["_90@261499811"]["right-identity-unique"](x0)(x1)(jAgda_Algebra["Ring"]["+-abelianGroup"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_136@204093087"]["identity-unique"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_AbelianGroup["_90@261499811"]["identity-unique"](x0)(x1)(jAgda_Algebra["Ring"]["+-abelianGroup"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_116@204093087"]["_∼⟨_⟩_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∼⟨_⟩_"](x0)(x1)(exports["_12@204093087"]["setoid"](x0)(x1)(x2));
        };
      };
    };
  exports["_12@204093087"]["setoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["Ring"]["_1076@104512718"]["setoid"](x0)(x1)(x2);
        };
      };
    };
  exports["_136@204093087"]["left-identity-unique"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Properties_AbelianGroup["_90@261499811"]["left-identity-unique"](x0)(x1)(jAgda_Algebra["Ring"]["+-abelianGroup"](undefined)(undefined)(x2));
        };
      };
    };
  exports["-‿*-distribˡ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_116@204093087"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2)))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Function["_$_"](x1)(x1)(function (x5) {
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
                })(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4));
              })(jAgda_Algebra["Ring"]["_1014@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Ring"]["_1014@104512718"]["identity"](undefined)(undefined)(x2))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))))(exports["_116@204093087"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2)))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
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
              })(jAgda_Algebra["Ring"]["_1014@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4)))(jAgda_Algebra["Ring"]["_1014@104512718"]["∙-cong"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))))(jAgda_Algebra["Ring"]["_1014@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Ring"]["_1014@104512718"]["inverse"](undefined)(undefined)(x2))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))))(exports["_116@204093087"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Function["_$_"](x1)(x1)(function (x5) {
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
                })(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))));
              })(jAgda_Algebra["Ring"]["_1014@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))))(jAgda_Algebra["Ring"]["_1014@104512718"]["assoc"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))))(exports["_116@204093087"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x3))(x4))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
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
              })(jAgda_Algebra["Ring"]["_1014@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x3))(x4))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Ring"]["_1014@104512718"]["distrib"](undefined)(undefined)(x2))(x4)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x3)))(jAgda_Algebra["Ring"]["_1014@104512718"]["∙-cong"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x4))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x3))(x4))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["_1014@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))))(exports["_116@204093087"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x3))(x4))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))(x4))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
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
              })(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Ring"]["_1014@104512718"]["inverse"](undefined)(undefined)(x2))(x3))(jAgda_Algebra["Ring"]["_1014@104512718"]["∙-cong"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x3))(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))(x4)(x4))(jAgda_Algebra["Ring"]["_1014@104512718"]["refl"](undefined)(undefined)(x2)(x4)))(jAgda_Algebra["Ring"]["_1014@104512718"]["∙-cong"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(x3))(x3))(x4))(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))(x4))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["_1014@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))))(exports["_116@204093087"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))(x4))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x5) {
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
              })(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["_12@204093087"]["zero"](x0)(x1)(x2))(x4))(jAgda_Algebra["Ring"]["_1014@104512718"]["∙-cong"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))(x4))(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["_1014@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))))(exports["_116@204093087"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Ring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["0#"](undefined)(undefined)(x2))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Ring"]["_1014@104512718"]["identity"](undefined)(undefined)(x2))(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4))))(exports["_116@204093087"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["Ring"]["-_"](undefined)(undefined)(x2)(jAgda_Algebra["Ring"]["_*_"](undefined)(undefined)(x2)(x3)(x4)))))))))));
            };
          };
        };
      };
    };
  });
