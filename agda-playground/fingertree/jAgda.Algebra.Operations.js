define(["exports","jAgda.Agda.Builtin.Equality","jAgda.Agda.Builtin.Nat","jAgda.Agda.Primitive","jAgda.Algebra","jAgda.Data.Product","jAgda.Function","jAgda.Relation.Binary.EqReasoning","jAgda.Relation.Binary.PreorderReasoning"],function(exports,jAgda_Agda_Builtin_Equality,jAgda_Agda_Builtin_Nat,jAgda_Agda_Primitive,jAgda_Algebra,jAgda_Data_Product,jAgda_Function,jAgda_Relation_Binary_EqReasoning,jAgda_Relation_Binary_PreorderReasoning) {
  exports["×-homo-+"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "suc": function (x5) {
                  return function (x6) {
                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x3)(exports["_×_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_+_"](x5)(x6))(x3)))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x5)(x3))(exports["_×_"](x0)(x1)(x2)(x6)(x3))))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x3)(exports["_×_"](x0)(x1)(x2)(x5)(x3)))(exports["_×_"](x0)(x1)(x2)(x6)(x3)))(jAgda_Algebra["Semiring"]["_650@104512718"]["∙-cong"](undefined)(undefined)(x2)(x3)(x3)(exports["_×_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_+_"](x5)(x6))(x3))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x5)(x3))(exports["_×_"](x0)(x1)(x2)(x6)(x3)))(jAgda_Algebra["Semiring"]["_650@104512718"]["refl"](undefined)(undefined)(x2)(x3))(exports["×-homo-+"](x0)(x1)(x2)(x3)(x5)(x6)))(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x5)(x3))(exports["_×_"](x0)(x1)(x2)(x6)(x3))))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x3)(exports["_×_"](x0)(x1)(x2)(x5)(x3)))(exports["_×_"](x0)(x1)(x2)(x6)(x3)))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x3)(exports["_×_"](x0)(x1)(x2)(x5)(x3)))(exports["_×_"](x0)(x1)(x2)(x6)(x3)))(jAgda_Function["_$_"](x1)(x1)(function (x7) {
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
                      })(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x3)(exports["_×_"](x0)(x1)(x2)(x5)(x3)))(exports["_×_"](x0)(x1)(x2)(x6)(x3)))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x5)(x3))(exports["_×_"](x0)(x1)(x2)(x6)(x3))));
                    })(jAgda_Algebra["Semiring"]["_650@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x3)(exports["_×_"](x0)(x1)(x2)(x5)(x3)))(exports["_×_"](x0)(x1)(x2)(x6)(x3)))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x5)(x3))(exports["_×_"](x0)(x1)(x2)(x6)(x3)))))(jAgda_Algebra["Semiring"]["_650@104512718"]["assoc"](undefined)(undefined)(x2)(x3)(exports["_×_"](x0)(x1)(x2)(x5)(x3))(exports["_×_"](x0)(x1)(x2)(x6)(x3))))(exports["_92@118223565"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x3)(exports["_×_"](x0)(x1)(x2)(x5)(x3)))(exports["_×_"](x0)(x1)(x2)(x6)(x3))))));
                  };
                },
                "zero": function () {
                  return function (x5) {
                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["_×_"](x0)(x1)(x2)(x5)(x3))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x5)(x3)))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x5)(x3)))(jAgda_Function["_$_"](x1)(x1)(function (x6) {
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
                      })(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x5)(x3)))(exports["_×_"](x0)(x1)(x2)(x5)(x3));
                    })(jAgda_Algebra["Semiring"]["_650@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x5)(x3)))(exports["_×_"](x0)(x1)(x2)(x5)(x3)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["_10@118223565"]["identity"](x0)(x1)(x2))(exports["_×_"](x0)(x1)(x2)(x5)(x3))))(exports["_92@118223565"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x5)(x3)))));
                  };
                }
              });
            };
          };
        };
      };
    };
  exports["×-cong"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["_×_"](x0)(x1)(x2)(x3)(x5))(exports["_×_"](x0)(x1)(x2)(x4)(x5))(exports["_×_"](x0)(x1)(x2)(x4)(x6))(jAgda_Function["_$_"](x0)(x1)("*")(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return "*";
                                };
                              };
                            };
                          };
                        };
                      })(exports["_10@118223565"]["reflexive"](x0)(x1)(x2)(exports["_×_"](x0)(x1)(x2)(x3)(x5))(exports["_×_"](x0)(x1)(x2)(x4)(x5)))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return function (x16) {
                                      return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                                    };
                                  };
                                };
                              };
                            };
                          };
                        };
                      }))(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(x5))(exports["_×_"](x0)(x1)(x2)(x4)(x6))(exports["_×_"](x0)(x1)(x2)(x4)(x6))(exports["_232@118223565"]["×-congʳ"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x4)(x5)(x6)(x8))(exports["_92@118223565"]["_∎"](x0)(x1)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(x6)))));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_×′_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "suc": function (x4) {
                return x4({
                  "suc": function () {
                    return function (x5) {
                      return jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x5)(exports["_×′_"](x0)(x1)(x2)(x4)(x5));
                    };
                  },
                  "zero": function () {
                    return function (x5) {
                      return x5;
                    };
                  }
                });
              },
              "zero": function () {
                return function (x4) {
                  return jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2);
                };
              }
            });
          };
        };
      };
    };
  exports["×1-homo-*"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "suc": function (x4) {
                return function (x5) {
                  return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["_×_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_+_"](x5)(jAgda_Agda_Builtin_Nat["_*_"](x4)(x5)))(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_*_"](x4)(x5))(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(exports["×-homo-+"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))(x5)(jAgda_Agda_Builtin_Nat["_*_"](x4)(x5)))(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_*_"](x4)(x5))(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_650@104512718"]["∙-cong"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_*_"](x4)(x5))(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_650@104512718"]["refl"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(exports["×1-homo-*"](x0)(x1)(x2)(x4)(x5)))(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Function["_$_"](x1)(x1)(function (x6) {
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
                    })(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))));
                  })(jAgda_Algebra["Semiring"]["_650@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))))(jAgda_Algebra["Semiring"]["_650@104512718"]["∙-cong"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Semiring"]["_650@104512718"]["identity"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_650@104512718"]["refl"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))))))(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Function["_$_"](x1)(x1)(function (x6) {
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
                    })(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))));
                  })(jAgda_Algebra["Semiring"]["_650@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Semiring"]["_650@104512718"]["distrib"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))))(exports["_92@118223565"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(exports["_×_"](x0)(x1)(x2)(x5)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))))))));
                };
              },
              "zero": function () {
                return function (x4) {
                  return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Function["_$_"](x1)(x1)(function (x5) {
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
                    })(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2));
                  })(jAgda_Algebra["Semiring"]["_650@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Semiring"]["_650@104512718"]["zero"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))))(exports["_92@118223565"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))));
                };
              }
            });
          };
        };
      };
    };
  exports["_10@118223565"] = {};
  exports["_10@118223565"]["setoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["Semiring"]["_698@104512718"]["setoid"](x0)(x1)(x2);
        };
      };
    };
  exports["×′-cong"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["_×′_"](x0)(x1)(x2)(x3)(x5))(exports["_×_"](x0)(x1)(x2)(x3)(x5))(exports["_×′_"](x0)(x1)(x2)(x4)(x6))(jAgda_Function["_$_"](x1)(x1)(function (x9) {
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
                        return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lsuc"](x1))(function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        })(function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return "*";
                            };
                          };
                        })(function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        })(function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return "*";
                                };
                              };
                            };
                          };
                        })(exports["_×_"](x0)(x1)(x2)(x3)(x5))(exports["_×′_"](x0)(x1)(x2)(x3)(x5));
                      })(jAgda_Algebra["Semiring"]["_650@104512718"]["sym"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x3)(x5))(exports["_×′_"](x0)(x1)(x2)(x3)(x5)))(exports["×≈×′"](x0)(x1)(x2)(x3)(x5)))(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["_×_"](x0)(x1)(x2)(x3)(x5))(exports["_×_"](x0)(x1)(x2)(x4)(x6))(exports["_×′_"](x0)(x1)(x2)(x4)(x6))(exports["×-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8))(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(x6))(exports["_×′_"](x0)(x1)(x2)(x4)(x6))(exports["_×′_"](x0)(x1)(x2)(x4)(x6))(exports["×≈×′"](x0)(x1)(x2)(x4)(x6))(exports["_92@118223565"]["_∎"](x0)(x1)(x2)(exports["_×′_"](x0)(x1)(x2)(x4)(x6))))));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["^-cong"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["_^_"](x0)(x1)(x2)(x3)(x5))(exports["_^_"](x0)(x1)(x2)(x3)(x6))(exports["_^_"](x0)(x1)(x2)(x4)(x6))(jAgda_Function["_$_"](x0)(x1)("*")(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return "*";
                                };
                              };
                            };
                          };
                        };
                      })(exports["_10@118223565"]["reflexive"](x0)(x1)(x2)(exports["_^_"](x0)(x1)(x2)(x3)(x5))(exports["_^_"](x0)(x1)(x2)(x3)(x6)))(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return function (x16) {
                                      return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                                    };
                                  };
                                };
                              };
                            };
                          };
                        };
                      }))(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["_^_"](x0)(x1)(x2)(x3)(x6))(exports["_^_"](x0)(x1)(x2)(x4)(x6))(exports["_^_"](x0)(x1)(x2)(x4)(x6))(exports["_276@118223565"]["^-congˡ"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x6)(x3)(x4)(x7))(exports["_92@118223565"]["_∎"](x0)(x1)(x2)(exports["_^_"](x0)(x1)(x2)(x4)(x6)))));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_92@118223565"] = {};
  exports["_92@118223565"]["_∼⟨_⟩_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∼⟨_⟩_"](x0)(x1)(exports["_10@118223565"]["setoid"](x0)(x1)(x2));
        };
      };
    };
  exports["×′1-homo-*"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["_×′_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_*_"](x3)(x4))(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_*_"](x3)(x4))(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×′_"](x0)(x1)(x2)(x3)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×′_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Function["_$_"](x1)(x1)(function (x5) {
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
                })(exports["_×_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_*_"](x3)(x4))(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×′_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_*_"](x3)(x4))(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)));
              })(jAgda_Algebra["Semiring"]["_650@104512718"]["sym"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_*_"](x3)(x4))(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×′_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_*_"](x3)(x4))(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(exports["×≈×′"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_*_"](x3)(x4))(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["_×_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_*_"](x3)(x4))(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x3)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×′_"](x0)(x1)(x2)(x3)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×′_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(exports["×1-homo-*"](x0)(x1)(x2)(x3)(x4))(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x3)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×′_"](x0)(x1)(x2)(x3)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×′_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×′_"](x0)(x1)(x2)(x3)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×′_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(jAgda_Algebra["Semiring"]["_650@104512718"]["∙-cong"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x3)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×′_"](x0)(x1)(x2)(x3)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×′_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["×≈×′"](x0)(x1)(x2)(x3)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["×≈×′"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))(exports["_92@118223565"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(exports["_×′_"](x0)(x1)(x2)(x3)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2)))(exports["_×′_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2))))))));
            };
          };
        };
      };
    };
  exports["_^_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "suc": function (x5) {
                  return jAgda_Algebra["Semiring"]["_*_"](undefined)(undefined)(x2)(x3)(exports["_^_"](x0)(x1)(x2)(x3)(x5));
                },
                "zero": function () {
                  return jAgda_Algebra["Semiring"]["1#"](undefined)(undefined)(x2);
                }
              });
            };
          };
        };
      };
    };
  exports["_×_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "suc": function (x4) {
                return function (x5) {
                  return jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x5)(exports["_×_"](x0)(x1)(x2)(x4)(x5));
                };
              },
              "zero": function () {
                return function (x4) {
                  return jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2);
                };
              }
            });
          };
        };
      };
    };
  exports["_92@118223565"]["_∎"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∎"](x0)(x1)(exports["_10@118223565"]["setoid"](x0)(x1)(x2));
        };
      };
    };
  exports["_10@118223565"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["Semiring"]["_650@104512718"]["reflexive"](x0)(x1)(x2);
        };
      };
    };
  exports["1+×′"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "suc": function (x4) {
                return function (x5) {
                  return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Relation_Binary_PreorderReasoning["_≈⟨⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_92@118223565"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x5)(exports["_×′_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x4))(x5)))));
                };
              },
              "zero": function () {
                return function (x4) {
                  return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(x4)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2)))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2)))(jAgda_Function["_$_"](x1)(x1)(function (x5) {
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
                    })(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2)))(x4);
                  })(jAgda_Algebra["Semiring"]["_650@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2)))(x4))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["_10@118223565"]["identity"](x0)(x1)(x2))(x4)))(exports["_92@118223565"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2)))));
                };
              }
            });
          };
        };
      };
    };
  exports["_232@118223565"] = {};
  exports["_232@118223565"]["×-congʳ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return x9({
                          "suc": function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return function (x13) {
                                  return jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return "*";
                                          };
                                        };
                                      };
                                    };
                                  })(function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return "*";
                                          };
                                        };
                                      };
                                    };
                                  })(function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return "*";
                                          };
                                        };
                                      };
                                    };
                                  })(x13)(jAgda_Algebra["Semiring"]["_650@104512718"]["∙-cong"](undefined)(undefined)(x2)(x11)(x12)(exports["_×_"](x0)(x1)(x2)(x10)(x11))(exports["_×_"](x0)(x1)(x2)(x10)(x12)))(exports["_232@118223565"]["×-congʳ"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x10)(x11)(x12)(x13));
                                };
                              };
                            };
                          },
                          "zero": function () {
                            return function (x10) {
                              return function (x11) {
                                return function (x12) {
                                  return jAgda_Algebra["Semiring"]["_650@104512718"]["refl"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["Nat"]["zero"])(x10));
                                };
                              };
                            };
                          }
                        });
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
  exports["_10@118223565"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["Semiring"]["_650@104512718"]["identity"](x0)(x1)(x2);
        };
      };
    };
  exports["×≈×′"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "suc": function (x4) {
                return function (x5) {
                  return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x5)(exports["_×_"](x0)(x1)(x2)(x4)(x5)))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x5)(exports["_×′_"](x0)(x1)(x2)(x4)(x5)))(exports["_×′_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x4))(x5))(jAgda_Algebra["Semiring"]["_650@104512718"]["∙-cong"](undefined)(undefined)(x2)(x5)(x5)(exports["_×_"](x0)(x1)(x2)(x4)(x5))(exports["_×′_"](x0)(x1)(x2)(x4)(x5))(jAgda_Algebra["Semiring"]["_650@104512718"]["refl"](undefined)(undefined)(x2)(x5))(exports["×≈×′"](x0)(x1)(x2)(x4)(x5)))(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x5)(exports["_×′_"](x0)(x1)(x2)(x4)(x5)))(exports["_×′_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x4))(x5))(exports["_×′_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x4))(x5))(jAgda_Function["_$_"](x1)(x1)(function (x6) {
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
                    })(exports["_×′_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x4))(x5))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x5)(exports["_×′_"](x0)(x1)(x2)(x4)(x5)));
                  })(jAgda_Algebra["Semiring"]["_650@104512718"]["sym"](undefined)(undefined)(x2)(exports["_×′_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x4))(x5))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(x5)(exports["_×′_"](x0)(x1)(x2)(x4)(x5))))(exports["1+×′"](x0)(x1)(x2)(x4)(x5)))(exports["_92@118223565"]["_∎"](x0)(x1)(x2)(exports["_×′_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x4))(x5)))));
                };
              },
              "zero": function () {
                return function (x4) {
                  return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_92@118223565"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["0#"](undefined)(undefined)(x2)));
                };
              }
            });
          };
        };
      };
    };
  exports["_276@118223565"] = {};
  exports["_276@118223565"]["^-congˡ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return x9({
                          "suc": function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return function (x13) {
                                  return jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return "*";
                                          };
                                        };
                                      };
                                    };
                                  })(function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return "*";
                                          };
                                        };
                                      };
                                    };
                                  })(function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return "*";
                                          };
                                        };
                                      };
                                    };
                                  })(x13)(jAgda_Algebra["Semiring"]["_650@104512718"]["∙-cong"](undefined)(undefined)(x2)(x11)(x12)(exports["_^_"](x0)(x1)(x2)(x11)(x10))(exports["_^_"](x0)(x1)(x2)(x12)(x10)))(exports["_276@118223565"]["^-congˡ"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x10)(x11)(x12)(x13));
                                };
                              };
                            };
                          },
                          "zero": function () {
                            return function (x10) {
                              return function (x11) {
                                return function (x12) {
                                  return jAgda_Algebra["Semiring"]["_650@104512718"]["refl"](undefined)(undefined)(x2)(exports["_^_"](x0)(x1)(x2)(x10)(jAgda_Agda_Builtin_Nat["Nat"]["zero"]));
                                };
                              };
                            };
                          }
                        });
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
  exports["×′-homo-+"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["_×′_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_+_"](x4)(x5))(x3))(exports["_×_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_+_"](x4)(x5))(x3))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×′_"](x0)(x1)(x2)(x4)(x3))(exports["_×′_"](x0)(x1)(x2)(x5)(x3)))(jAgda_Function["_$_"](x1)(x1)(function (x6) {
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
                  })(exports["_×_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_+_"](x4)(x5))(x3))(exports["_×′_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_+_"](x4)(x5))(x3));
                })(jAgda_Algebra["Semiring"]["_650@104512718"]["sym"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_+_"](x4)(x5))(x3))(exports["_×′_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_+_"](x4)(x5))(x3)))(exports["×≈×′"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_+_"](x4)(x5))(x3)))(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(exports["_×_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Nat["_+_"](x4)(x5))(x3))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(x3))(exports["_×_"](x0)(x1)(x2)(x5)(x3)))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×′_"](x0)(x1)(x2)(x4)(x3))(exports["_×′_"](x0)(x1)(x2)(x5)(x3)))(exports["×-homo-+"](x0)(x1)(x2)(x3)(x4)(x5))(exports["_92@118223565"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(x3))(exports["_×_"](x0)(x1)(x2)(x5)(x3)))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×′_"](x0)(x1)(x2)(x4)(x3))(exports["_×′_"](x0)(x1)(x2)(x5)(x3)))(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×′_"](x0)(x1)(x2)(x4)(x3))(exports["_×′_"](x0)(x1)(x2)(x5)(x3)))(jAgda_Algebra["Semiring"]["_650@104512718"]["∙-cong"](undefined)(undefined)(x2)(exports["_×_"](x0)(x1)(x2)(x4)(x3))(exports["_×′_"](x0)(x1)(x2)(x4)(x3))(exports["_×_"](x0)(x1)(x2)(x5)(x3))(exports["_×′_"](x0)(x1)(x2)(x5)(x3))(exports["×≈×′"](x0)(x1)(x2)(x4)(x3))(exports["×≈×′"](x0)(x1)(x2)(x5)(x3)))(exports["_92@118223565"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["Semiring"]["_+_"](undefined)(undefined)(x2)(exports["_×′_"](x0)(x1)(x2)(x4)(x3))(exports["_×′_"](x0)(x1)(x2)(x5)(x3)))))));
              };
            };
          };
        };
      };
    };
  });
