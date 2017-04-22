define(["exports","jAgda.Agda.Builtin.Equality","jAgda.Agda.Builtin.Nat","jAgda.Agda.Primitive","jAgda.Algebra","jAgda.Algebra.Operations","jAgda.Algebra.RingSolver.AlmostCommutativeRing","jAgda.Algebra.RingSolver.Lemmas","jAgda.Data.Product","jAgda.Data.Vec","jAgda.Function","jAgda.Relation.Binary.EqReasoning","jAgda.Relation.Binary.PreorderReasoning","jAgda.Relation.Binary.Reflection","jAgda.Relation.Nullary"],function(exports,jAgda_Agda_Builtin_Equality,jAgda_Agda_Builtin_Nat,jAgda_Agda_Primitive,jAgda_Algebra,jAgda_Algebra_Operations,jAgda_Algebra_RingSolver_AlmostCommutativeRing,jAgda_Algebra_RingSolver_Lemmas,jAgda_Data_Product,jAgda_Data_Vec,jAgda_Function,jAgda_Relation_Binary_EqReasoning,jAgda_Relation_Binary_PreorderReasoning,jAgda_Relation_Binary_Reflection,jAgda_Relation_Nullary) {
  exports["Op"] = {};
  exports["_≈H_"] = {};
  exports["_≈N_"] = {};
  exports["Normal"] = {};
  exports["Polynomial"] = {};
  exports["HNF"] = {};
  exports["Polynomial"]["_:^_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["_:^_"](x0, x1);
        };
      };
    };
  exports["_50@45255833"] = {};
  exports["_50@45255833"]["zero"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_176@119710315"]["zero"](x1)(x2)(x4);
                };
              };
            };
          };
        };
      };
    };
  exports["_*HN_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "_*x+_": function (x9, x10, x11) {
                          return function (x12) {
                            return exports["with-706"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(exports["_≟N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(exports["0N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(x10)(x11);
                          };
                        },
                        "∅": function (x9) {
                          return function (x10) {
                            return exports["HNF"]["∅"](x7);
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
  exports["_:-_"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function (x0) {
                return function (x1) {
                  return function (x2) {
                    return function (x3) {
                      return function (x4) {
                        return exports["_:+_"](undefined)(undefined)(undefined)(undefined)(undefined)(x0)(x1)(x2)(x3)(exports["Polynomial"][":-_"](x4));
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
  exports["_50@45255833"]["_*_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4);
                };
              };
            };
          };
        };
      };
    };
  exports["_50@45255833"]["∙-cong"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_176@119710315"]["∙-cong"](x1)(x2)(x4);
                };
              };
            };
          };
        };
      };
    };
  exports["_240@45255833"] = {};
  exports["_240@45255833"]["_∎"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∎"](x1)(x2)(exports["_50@45255833"]["setoid"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["with-706"] = function (x0) {
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
                          "no": function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return exports["HNF"]["_*x+_"](x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x8))(exports["_*N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x8));
                              };
                            };
                          },
                          "yes": function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return exports["HNF"]["∅"](x7);
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
  exports["_18@45255833"] = {};
  exports["_18@45255833"]["lemma₀"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_Lemmas["lemma₀"](x0)(x1)(x2)(x3)(x4)(x5);
                };
              };
            };
          };
        };
      };
    };
  exports["HNF"]["_*x+_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["_*x+_"](x0, x1, x2);
          };
        };
      };
    };
  exports["_200@45255833"] = {};
  exports["_200@45255833"]["⟦_⟧"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["_-Raw-AlmostCommutative⟶_"]["⟦_⟧"](undefined)(undefined)(undefined)(undefined)(undefined)(x5);
                };
              };
            };
          };
        };
      };
    };
  exports["_1292@45255833"] = {};
  exports["_1292@45255833"]["solve"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_Reflection["solve"](x0)(x1)(x2)("*")(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      };
                    };
                  })(exports["_50@45255833"]["setoid"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(function (x7) {
                    return exports["Polynomial"]["var"];
                  })(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["⟦_⟧↓"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["correct"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports[".extendedlambda0"] = function (x0) {
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
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return undefined;
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
        };
      };
    };
  exports["_200@45255833"]["1-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["_-Raw-AlmostCommutative⟶_"]["1-homo"](undefined)(undefined)(undefined)(undefined)(undefined)(x5);
                };
              };
            };
          };
        };
      };
    };
  exports["_50@45255833"]["-_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x4);
                };
              };
            };
          };
        };
      };
    };
  exports["⟦_⟧N"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "con": function (x9) {
                          return function (x10) {
                            return exports["_200@45255833"]["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9);
                          };
                        },
                        "poly": function (x9, x10) {
                          return function (x11) {
                            return exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x10)(x11);
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
  exports["∅*x+HN-homo"] = function (x0) {
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
                          return exports["with-906"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["_≟N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["0N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(x9)(x10);
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
  exports["_*x+H_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "_*x+_": function (x9, x10, x11) {
                          return function (x12) {
                            return x12({
                              "_*x+_": function (x13, x14, x15) {
                                return exports["_*x+HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(x15);
                              },
                              "∅": function (x13) {
                                return exports["HNF"]["_*x+_"](x7)(exports["HNF"]["_*x+_"](x7)(x10)(x11))(exports["0N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7));
                              }
                            });
                          };
                        },
                        "∅": function (x9) {
                          return function (x10) {
                            return x10({
                              "_*x+_": function (x11, x12, x13) {
                                return exports["_*x+HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12))(x13);
                              },
                              "∅": function (x11) {
                                return exports["HNF"]["∅"](x7);
                              }
                            });
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
  exports["_50@45255833"]["trans"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_176@119710315"]["trans"](x1)(x2)(x4);
                };
              };
            };
          };
        };
      };
    };
  exports["_18@45255833"]["lemma₇"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_Lemmas["lemma₇"](x0)(x1)(x2)(x3)(x4)(x5);
                };
              };
            };
          };
        };
      };
    };
  exports["1H"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["HNF"]["_*x+_"](x7)(exports["HNF"]["∅"](x7))(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["-H_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["-N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(x8);
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["with-512"] = function (x0) {
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
                          return x10({
                            "no": function (x11) {
                              return jAgda_Relation_Nullary["Dec"]["no"](function (x12) {
                                return function (x13) {
                                  return function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return function (x20) {
                                                return function (x21) {
                                                  return function (x22) {
                                                    return function (x23) {
                                                      return undefined;
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
                              });
                            },
                            "yes": function (x11) {
                              return jAgda_Relation_Nullary["Dec"]["yes"](exports["_≈N_"]["poly"](x7)(x8)(x9)(x11));
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
    };
  exports[".absurdlambda"] = function (x0) {
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
                          return undefined;
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
  exports["_^N_"] = function (x0) {
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
                            return exports["_*N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["_^N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x10));
                          },
                          "zero": function () {
                            return exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7);
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
  exports[".extendedlambda2"] = function (x0) {
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
                          return undefined;
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
  exports["Op"]["[*]"] = function (x0) {
      return x0["[*]"]();
    };
  exports["_18@45255833"]["lemma₂"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_Lemmas["lemma₂"](x0)(x1)(x2)(x3)(x4)(x5);
                };
              };
            };
          };
        };
      };
    };
  exports["with-678"] = function (x0) {
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
                          "no": function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return exports["HNF"]["_*x+_"](x7)(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11))(exports["_*N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12));
                              };
                            };
                          },
                          "yes": function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return exports["HNF"]["∅"](x7);
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
  exports["_214@45255833"] = {};
  exports["_214@45255833"]["_^_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_Operations["_^_"](x1)(x2)(exports["_50@45255833"]["semiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["with-870"] = function (x0) {
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
                          "no": function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["with-600"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Relation_Nullary["Dec"]["no"](x10)))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x11)(x12)));
                              };
                            };
                          },
                          "yes": function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x11))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12)))(exports["0≈⟦0⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x10)(x12))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12))(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["0#"](x0)(x1)(x2)(x3)(x4)(x5))(x11))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x11))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12)))(jAgda_Function["_$_"](x2)(x2)(function (x13) {
                                  return function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return "*";
                                        };
                                      };
                                    };
                                  };
                                })(function (x13) {
                                  return jAgda_Function["flip"](x1)(x1)(jAgda_Agda_Primitive["lsuc"](x2))(function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return "*";
                                      };
                                    };
                                  })(function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return "*";
                                      };
                                    };
                                  })(function (x14) {
                                    return function (x15) {
                                      return "*";
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
                                  })(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["0#"](x0)(x1)(x2)(x3)(x4)(x5))(x11))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12));
                                })(exports["_50@45255833"]["sym"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["0#"](x0)(x1)(x2)(x3)(x4)(x5))(x11))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12)))(exports["_18@45255833"]["lemma₆"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12))(x11)))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x11))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12))))));
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
  exports["_50@45255833"]["-‿cong"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_176@119710315"]["-‿cong"](undefined)(undefined)(x4);
                };
              };
            };
          };
        };
      };
    };
  exports["_50@45255833"]["refl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_176@119710315"]["refl"](x1)(x2)(x4);
                };
              };
            };
          };
        };
      };
    };
  exports["_*H_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "_*x+_": function (x9, x10, x11) {
                          return function (x12) {
                            return x12({
                              "_*x+_": function (x13, x14, x15) {
                                return exports["_*x+HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*x+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14))))(exports["_*N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x15));
                              },
                              "∅": function (x13) {
                                return exports["HNF"]["∅"](x7);
                              }
                            });
                          };
                        },
                        "∅": function (x9) {
                          return function (x10) {
                            return exports["HNF"]["∅"](x7);
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
  exports["_≈H_"]["_*x+_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return x7["_*x+_"](x0, x1, x2, x3, x4, x5, x6);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["C"] = {};
  exports["C"]["_+_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra["RawRing"]["_+_"](undefined)(x3);
                };
              };
            };
          };
        };
      };
    };
  exports["Polynomial"][":-_"] = function (x0) {
      return function (x1) {
        return x1[":-_"](x0);
      };
    };
  exports["0H"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function (x0) {
                return function (x1) {
                  return exports["HNF"]["∅"];
                };
              };
            };
          };
        };
      };
    };
  exports["_50@45255833"]["_≈_"] = function (x0) {
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
  exports["1N-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "[]": function () {
                          return exports["_200@45255833"]["1-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6);
                        },
                        "_∷_": function (x9, x10, x11) {
                          return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x10))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9))(x11)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x10))(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x12) {
                            return function (x13) {
                              return function (x14) {
                                return function (x15) {
                                  return function (x16) {
                                    return "*";
                                  };
                                };
                              };
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
                          })(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x10)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x10))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x10))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9))(x11))(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(exports["1N-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x11)))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x10))(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["_18@45255833"]["lemma₆"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x10))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))));
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
  exports["⟦_⟧N-cong"] = function (x0) {
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
                          return x10({
                            "con": function (x11, x12, x13) {
                              return function (x14) {
                                return x13;
                              };
                            },
                            "poly": function (x11, x12, x13, x14) {
                              return function (x15) {
                                return exports["⟦_⟧H-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x11)(x12)(x13)(x14)(x15);
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
    };
  exports["C"]["_*_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra["RawRing"]["_*_"](undefined)(x3);
                };
              };
            };
          };
        };
      };
    };
  exports["⟦_⟧↓"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8))(x9);
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
  exports["1N"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return x7({
                      "suc": function (x8) {
                        return exports["Normal"]["poly"](x8)(exports["1H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x8));
                      },
                      "zero": function () {
                        return exports["Normal"]["con"](exports["C"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
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
  exports["_50@45255833"]["_+_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4);
                };
              };
            };
          };
        };
      };
    };
  exports["Op"]["[+]"] = function (x0) {
      return x0["[+]"]();
    };
  exports["*HN-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "_*x+_": function (x9, x10, x11) {
                          return function (x12) {
                            return function (x13) {
                              return function (x14) {
                                return exports["with-1112"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(exports["_≟N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(exports["0N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(x10)(x11)(x13)(x14);
                              };
                            };
                          };
                        },
                        "∅": function (x9) {
                          return function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return exports["_50@45255833"]["sym"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["_50@45255833"]["zero"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12)));
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
  exports["_50@45255833"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_176@119710315"]["identity"](x1)(x2)(x4);
                };
              };
            };
          };
        };
      };
    };
  exports["*x+HN≈*x+"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "_*x+_": function (x9, x10, x11) {
                          return function (x12) {
                            return function (x13) {
                              return exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*x+HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(x10)(x11))(x12))(x13));
                            };
                          };
                        },
                        "∅": function (x9) {
                          return function (x10) {
                            return function (x11) {
                              return x11({
                                "[]": function () {
                                  return undefined;
                                },
                                "_∷_": function (x12, x13, x14) {
                                  return exports["with-870"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(exports["_≟N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(exports["0N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(x13)(x14);
                                }
                              });
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
  exports["+H-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "_*x+_": function (x9, x10, x11) {
                          return function (x12) {
                            return x12({
                              "_*x+_": function (x13, x14, x15) {
                                return function (x16) {
                                  return x16({
                                    "[]": function () {
                                      return undefined;
                                    },
                                    "_∷_": function (x17, x18, x19) {
                                      return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*x+HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(exports["_+N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x15)))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(exports["_+N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x15)))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(exports["*x+HN≈*x+"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(exports["_+N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x15))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x15))(x19)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(exports["+H-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18)(x18))(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x18)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x15))(x19))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(exports["+N-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x15)(x19)))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19)))(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(exports["_18@45255833"]["lemma₁"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))(x18))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))))));
                                    }
                                  });
                                };
                              },
                              "∅": function (x13) {
                                return function (x14) {
                                  return exports["_50@45255833"]["sym"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(x10)(x11))(exports["HNF"]["∅"](x7)))(x14))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(x10)(x11))(exports["HNF"]["∅"](x7)))(x14))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["_50@45255833"]["identity"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(x10)(x11))(exports["HNF"]["∅"](x7)))(x14)));
                                };
                              }
                            });
                          };
                        },
                        "∅": function (x9) {
                          return function (x10) {
                            return function (x11) {
                              return exports["_50@45255833"]["sym"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["∅"](x7))(x10))(x11)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["∅"](x7))(x10))(x11))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["_50@45255833"]["identity"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["∅"](x7))(x10))(x11)));
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
  exports["_≈N_"]["poly"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4["poly"](x0, x1, x2, x3);
            };
          };
        };
      };
    };
  exports["_240@45255833"]["_∼⟨_⟩_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∼⟨_⟩_"](x1)(x2)(exports["_50@45255833"]["setoid"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["-N_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "con": function (x9) {
                          return exports["Normal"]["con"](exports["C"]["-_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9));
                        },
                        "poly": function (x9, x10) {
                          return exports["Normal"]["poly"](x9)(exports["-H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x10));
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
  exports["_152@45255833"] = {};
  exports["_152@45255833"]["Op₂"] = function (x0) {
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
  exports["Polynomial"]["op"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["op"](x0, x1, x2);
          };
        };
      };
    };
  exports["_18@45255833"]["lemma₁"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_Lemmas["lemma₁"](x0)(x1)(x2)(x3)(x4)(x5);
                };
              };
            };
          };
        };
      };
    };
  exports["Normal"]["con"] = function (x0) {
      return function (x1) {
        return x1["con"](x0);
      };
    };
  exports["_+H_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "_*x+_": function (x9, x10, x11) {
                          return function (x12) {
                            return x12({
                              "_*x+_": function (x13, x14, x15) {
                                return exports["_*x+HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(exports["_+N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x15));
                              },
                              "∅": function (x13) {
                                return x8;
                              }
                            });
                          };
                        },
                        "∅": function (x9) {
                          return function (x10) {
                            return x10({
                              "_*x+_": function () {
                                return x10;
                              },
                              "∅": function (x11) {
                                return x10;
                              }
                            });
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
  exports["-N‿-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "con": function (x9) {
                          return function (x10) {
                            return exports["_200@45255833"]["-‿homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9);
                          };
                        },
                        "poly": function (x9, x10) {
                          return function (x11) {
                            return exports["-H‿-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x10)(x11);
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
  exports["⟦_⟧H-cong"] = function (x0) {
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
                          return x10({
                            "_*x+_": function (x11, x12, x13, x14, x15, x16, x17) {
                              return function (x18) {
                                return x18({
                                  "[]": function () {
                                    return undefined;
                                  },
                                  "_∷_": function (x19, x20, x21) {
                                    return jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x22) {
                                      return function (x23) {
                                        return function (x24) {
                                          return function (x25) {
                                            return function (x26) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x22) {
                                      return function (x23) {
                                        return function (x24) {
                                          return function (x25) {
                                            return function (x26) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x22) {
                                      return function (x23) {
                                        return function (x24) {
                                          return function (x25) {
                                            return function (x26) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x22) {
                                      return function (x23) {
                                        return function (x24) {
                                          return function (x25) {
                                            return function (x26) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x22) {
                                      return function (x23) {
                                        return function (x24) {
                                          return function (x25) {
                                            return function (x26) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x22) {
                                      return function (x23) {
                                        return function (x24) {
                                          return function (x25) {
                                            return function (x26) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(exports["⟦_⟧H-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x13)(x16)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x20)(x21)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x20)(x21)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x13)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x20)(x21)))(x20)(x20))(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x20)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x20)(x21)))(x20))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x13)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x20)(x21)))(x20))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(x21))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x21)))(exports["⟦_⟧N-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(x15)(x17)(x21));
                                  }
                                });
                              };
                            },
                            "∅": function (x11) {
                              return function (x12) {
                                return exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["∅"](x7))(x12));
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
    };
  exports["_18@45255833"]["lemma₄"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_Lemmas["lemma₄"](x0)(x1)(x2)(x3)(x4)(x5);
                };
              };
            };
          };
        };
      };
    };
  exports["_200@45255833"]["+-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["_-Raw-AlmostCommutative⟶_"]["+-homo"](undefined)(undefined)(undefined)(undefined)(undefined)(x5);
                };
              };
            };
          };
        };
      };
    };
  exports["*x+H-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "_*x+_": function (x9, x10, x11) {
                          return function (x12) {
                            return x12({
                              "_*x+_": function (x13, x14, x15) {
                                return function (x16) {
                                  return function (x17) {
                                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*x+HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(x15))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(x15))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(x16))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(x16))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x17))))(exports["*x+HN≈*x+"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(x15)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(x16))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x17)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17))))(x16))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x17)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(x16))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(x16))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x17))))(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x18) {
                                      return function (x19) {
                                        return function (x20) {
                                          return function (x21) {
                                            return function (x22) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x18) {
                                      return function (x19) {
                                        return function (x20) {
                                          return function (x21) {
                                            return function (x22) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x18) {
                                      return function (x19) {
                                        return function (x20) {
                                          return function (x21) {
                                            return function (x22) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x18) {
                                      return function (x19) {
                                        return function (x20) {
                                          return function (x21) {
                                            return function (x22) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x18) {
                                      return function (x19) {
                                        return function (x20) {
                                          return function (x21) {
                                            return function (x22) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x18) {
                                      return function (x19) {
                                        return function (x20) {
                                          return function (x21) {
                                            return function (x22) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(exports["+H-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17))))(x16)(x16))(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x16)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(x16))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17))))(x16))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x17))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x17)))(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x17))))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17))))(x16))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x17)))(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(x16))(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(x16))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x17))))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(x16))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(x16))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x17))))(exports["_18@45255833"]["lemma₀"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x17))(x16))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(x16))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x16)(x17)))(x16))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x17))))))));
                                  };
                                };
                              },
                              "∅": function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(x10)(x11))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["0N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7))(x15)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(x10)(x11))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(x10)(x11))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return function (x20) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return function (x20) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return function (x20) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(x10)(x11))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(x10)(x11))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(x10)(x11))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["0N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7))(x15))(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(exports["0N-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(x10)(x11))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))));
                                  };
                                };
                              }
                            });
                          };
                        },
                        "∅": function (x9) {
                          return function (x10) {
                            return x10({
                              "_*x+_": function (x11, x12, x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*x+HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12))(x13))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12))(x13))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x13)(x15))))(exports["*x+HN≈*x+"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12))(x13)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x13)(x15)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15))))(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x13)(x15)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x13)(x15))))(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return function (x20) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return function (x20) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return function (x20) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return function (x20) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return function (x20) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return function (x20) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(exports["+H-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15))))(x14)(x14))(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x14)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15))))(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x13)(x15))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x13)(x15)))(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x13)(x15))))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15))))(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x13)(x15)))(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x13)(x15))))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x13)(x15))))(exports["_18@45255833"]["lemma₀"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x13)(x15))(x14))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x13)(x15))))))));
                                  };
                                };
                              },
                              "∅": function (x11) {
                                return function (x12) {
                                  return function (x13) {
                                    return jAgda_Function["_$_"](x2)(x2)(function (x14) {
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
                                      return jAgda_Function["flip"](x1)(x1)(jAgda_Agda_Primitive["lsuc"](x2))(function (x15) {
                                        return function (x16) {
                                          return function (x17) {
                                            return "*";
                                          };
                                        };
                                      })(function (x15) {
                                        return function (x16) {
                                          return function (x17) {
                                            return "*";
                                          };
                                        };
                                      })(function (x15) {
                                        return function (x16) {
                                          return "*";
                                        };
                                      })(function (x15) {
                                        return function (x16) {
                                          return function (x17) {
                                            return function (x18) {
                                              return function (x19) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["0#"](x0)(x1)(x2)(x3)(x4)(x5))(x12))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*x+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["∅"](x7))(exports["HNF"]["∅"](x7)))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x12)(x13))))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*x+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["∅"](x7))(exports["HNF"]["∅"](x7)))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x12)(x13)));
                                    })(exports["_50@45255833"]["sym"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["0#"](x0)(x1)(x2)(x3)(x4)(x5))(x12))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*x+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["∅"](x7))(exports["HNF"]["∅"](x7)))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x12)(x13))))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*x+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["∅"](x7))(exports["HNF"]["∅"](x7)))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x12)(x13))))(exports["_18@45255833"]["lemma₆"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*x+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["∅"](x7))(exports["HNF"]["∅"](x7)))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x12)(x13)))(x12));
                                  };
                                };
                              }
                            });
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
  exports["_50@45255833"]["1#"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["1#"](undefined)(undefined)(x4);
                };
              };
            };
          };
        };
      };
    };
  exports["with-906"] = function (x0) {
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
                          "no": function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return exports["_18@45255833"]["lemma₆"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12))(x11);
                              };
                            };
                          },
                          "yes": function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return exports["0≈⟦0⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x10)(x12);
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
  exports["_≈H_"]["∅"] = function (x0) {
      return function (x1) {
        return x1["∅"](x0);
      };
    };
  exports["_50@45255833"]["semiring"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_244@119710315"]["semiring"](x1)(x2)(x4);
                };
              };
            };
          };
        };
      };
    };
  exports["_*N_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "con": function (x9) {
                          return function (x10) {
                            return x10({
                              "con": function (x11) {
                                return exports["Normal"]["con"](exports["C"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x11));
                              },
                              "poly": function () {
                                return undefined;
                              }
                            });
                          };
                        },
                        "poly": function (x9, x10) {
                          return function (x11) {
                            return x11({
                              "con": function () {
                                return undefined;
                              },
                              "poly": function (x12, x13) {
                                return exports["Normal"]["poly"](x9)(exports["_*H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x10)(x13));
                              }
                            });
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
  exports["^N-homo"] = function (x0) {
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
                              return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["_^N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x10)))(x11))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_^N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x10))(x11)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11))(exports["_214@45255833"]["_^_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11))(x10)))(exports["*N-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["_^N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x10))(x11))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_^N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x10))(x11)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11))(exports["_214@45255833"]["_^_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11))(x10)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11))(exports["_214@45255833"]["_^_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11))(x10)))(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x12) {
                                return function (x13) {
                                  return function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return "*";
                                      };
                                    };
                                  };
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
                              })(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_^N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x10))(x11))(exports["_214@45255833"]["_^_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11))(x10)))(exports["^N-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x10)(x11)))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11))(exports["_214@45255833"]["_^_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11))(x10))))));
                            };
                          },
                          "zero": function () {
                            return function (x10) {
                              return exports["1N-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10);
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
  exports["_:+_"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function (x0) {
                return function (x1) {
                  return function (x2) {
                    return exports["Polynomial"]["op"](exports["Op"]["[+]"]);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["C"]["0#"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra["RawRing"]["0#"](undefined)(x3);
                };
              };
            };
          };
        };
      };
    };
  exports["0≈⟦0⟧"] = function (x0) {
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
                          return exports["_50@45255833"]["sym"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x10))(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x10))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["0N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7))(x10))(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["⟦_⟧N-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["0N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7))(x9)(x10))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["0N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7))(x10))(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["0N-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))))));
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
  exports["0N"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return x7({
                      "suc": function (x8) {
                        return exports["Normal"]["poly"](x8)(exports["0H"](undefined)(undefined)(undefined)(undefined)(undefined)(x5)(x6)(x8));
                      },
                      "zero": function () {
                        return exports["Normal"]["con"](exports["C"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
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
  exports["correct"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        ":-_": function (x9) {
                          return function (x10) {
                            return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["-N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)))(x10))(exports["_50@45255833"]["-_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9))(x10)))(exports["_50@45255833"]["-_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x10)))(exports["-N‿-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9))(x10))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["-_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧↓"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x10)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x4)(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x10)))(exports["_50@45255833"]["-_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x10)))(exports["_50@45255833"]["-‿cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧↓"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x10))(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x10))(exports["correct"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x10)))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["-_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x10))))));
                          };
                        },
                        "_:^_": function (x9, x10) {
                          return function (x11) {
                            return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_^N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9))(x10))(x11))(exports["_214@45255833"]["_^_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9))(x11))(x10))(exports["_214@45255833"]["_^_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x11))(x10))(exports["^N-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9))(x10)(x11))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_214@45255833"]["_^_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧↓"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x11))(x10))(jAgda_Algebra_Operations["_^_"](x1)(x2)(exports["_50@45255833"]["semiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x11))(x10))(exports["_214@45255833"]["_^_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x11))(x10))(jAgda_Function["_⟨_⟩_"](x2)(jAgda_Agda_Primitive["lzero"])(x2)(function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return function (x16) {
                                      return "*";
                                    };
                                  };
                                };
                              };
                            })("*")(function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return function (x16) {
                                      return "*";
                                    };
                                  };
                                };
                              };
                            })(exports["correct"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x11))(exports["_214@45255833"]["^-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧↓"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x11))(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x11))(x10)(x10))(jAgda_Agda_Builtin_Equality["_≡_"]["refl"]))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_214@45255833"]["_^_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x11))(x10)))));
                          };
                        },
                        "con": function (x9) {
                          return function (x10) {
                            return exports["correct-con"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x10);
                          };
                        },
                        "op": function (x9, x10, x11) {
                          return x9({
                            "[*]": function () {
                              return function (x12) {
                                return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10))(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)))(x12))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10))(x12))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11))(x12)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12))(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x12)))(exports["*N-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10))(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11))(x12))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧↓"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12))(exports["⟦_⟧↓"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x12)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12))(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x12)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12))(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x12)))(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x13) {
                                  return function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return "*";
                                        };
                                      };
                                    };
                                  };
                                })(function (x13) {
                                  return function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return "*";
                                        };
                                      };
                                    };
                                  };
                                })(function (x13) {
                                  return function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return "*";
                                        };
                                      };
                                    };
                                  };
                                })(exports["correct"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧↓"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12))(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12))(exports["⟦_⟧↓"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x12))(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x12)))(exports["correct"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x12)))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12))(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x12))))));
                              };
                            },
                            "[+]": function () {
                              return function (x12) {
                                return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10))(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)))(x12))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10))(x12))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11))(x12)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12))(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x12)))(exports["+N-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10))(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11))(x12))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧↓"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12))(exports["⟦_⟧↓"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x12)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12))(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x12)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12))(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x12)))(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x13) {
                                  return function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return "*";
                                        };
                                      };
                                    };
                                  };
                                })(function (x13) {
                                  return function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return "*";
                                        };
                                      };
                                    };
                                  };
                                })(function (x13) {
                                  return function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return "*";
                                        };
                                      };
                                    };
                                  };
                                })(exports["correct"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧↓"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12))(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12))(exports["⟦_⟧↓"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x12))(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x12)))(exports["correct"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x12)))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12))(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x12))))));
                              };
                            }
                          });
                        },
                        "var": function (x9) {
                          return function (x10) {
                            return exports["correct-var"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x10);
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
  exports["with-488"] = function (x0) {
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
                          "no": function (x10) {
                            return jAgda_Relation_Nullary["Dec"]["no"](function (x11) {
                              return function (x12) {
                                return function (x13) {
                                  return function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return function (x20) {
                                                return function (x21) {
                                                  return undefined;
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
                            });
                          },
                          "yes": function (x10) {
                            return jAgda_Relation_Nullary["Dec"]["yes"](exports["_≈N_"]["con"](x7)(x8)(x10));
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
  exports["sem"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return x7({
                      "[*]": function () {
                        return exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6);
                      },
                      "[+]": function () {
                        return exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6);
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
  exports["normalise-var"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "suc": function (x9, x10) {
                          return exports["Normal"]["poly"](x9)(exports["_*x+HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(exports["HNF"]["∅"](x9))(exports["normalise-var"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x10)));
                        },
                        "zero": function (x9) {
                          return exports["Normal"]["poly"](x9)(exports["HNF"]["_*x+_"](x9)(exports["HNF"]["_*x+_"](x9)(exports["HNF"]["∅"](x9))(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)))(exports["0N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)));
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
  exports["with-600"] = function (x0) {
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
                          "no": function (x10) {
                            return exports["HNF"]["_*x+_"](x7)(exports["HNF"]["∅"](x7))(x8);
                          },
                          "yes": function (x10) {
                            return exports["HNF"]["∅"](x7);
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
  exports["with-1112"] = function (x0) {
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
                          "no": function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return function (x13) {
                                  return function (x14) {
                                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x8))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x8))(x14)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14)))(x13))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14)))(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(exports["*HN-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x8)(x13)(x14))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x8))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14)))(x13)(x13))(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x13)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x8))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x8))(x14))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))))(exports["*N-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x8)(x14)))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14)))(x13))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))))(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14)))(exports["_18@45255833"]["lemma₂"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(x13))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))))));
                                  };
                                };
                              };
                            };
                          },
                          "yes": function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return function (x13) {
                                  return function (x14) {
                                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14)))(exports["_50@45255833"]["sym"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["_50@45255833"]["zero"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14)))(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14)))(exports["0≈⟦0⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x10)(x14)))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))))));
                                  };
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
  exports["_≟H_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "_*x+_": function (x9, x10, x11) {
                          return function (x12) {
                            return x12({
                              "_*x+_": function (x13, x14, x15) {
                                return exports["with-440"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x10)(x11)(x14)(x15)(exports["_≟H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x9))(x10)(x14))(exports["_≟N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x11)(x15));
                              },
                              "∅": function (x13) {
                                return jAgda_Relation_Nullary["Dec"]["no"](function (x14) {
                                  return function (x15) {
                                    return function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return function (x20) {
                                              return function (x21) {
                                                return function (x22) {
                                                  return function (x23) {
                                                    return function (x24) {
                                                      return undefined;
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
                                });
                              }
                            });
                          };
                        },
                        "∅": function (x9) {
                          return function (x10) {
                            return x10({
                              "_*x+_": function (x11, x12, x13) {
                                return jAgda_Relation_Nullary["Dec"]["no"](function (x14) {
                                  return function (x15) {
                                    return function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return function (x20) {
                                              return function (x21) {
                                                return function (x22) {
                                                  return function (x23) {
                                                    return function (x24) {
                                                      return undefined;
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
                                });
                              },
                              "∅": function (x11) {
                                return jAgda_Relation_Nullary["Dec"]["yes"](exports["_≈H_"]["∅"](x9));
                              }
                            });
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
  exports["*NH-homo"] = function (x0) {
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
                          "_*x+_": function (x10, x11, x12) {
                            return function (x13) {
                              return function (x14) {
                                return exports["with-1068"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["_≟N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["0N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(x11)(x12)(x13)(x14);
                              };
                            };
                          },
                          "∅": function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return exports["_50@45255833"]["sym"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["_50@45255833"]["zero"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12)));
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
  exports["correct-con"] = function (x0) {
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
                          "[]": function () {
                            return exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(0)(exports["normalise-con"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(0)(x8))(jAgda_Data_Vec["Vec"]["[]"]));
                          },
                          "_∷_": function (x10, x11, x12) {
                            return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x10)(exports["_*x+HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x10)(exports["HNF"]["∅"](x10))(exports["normalise-con"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x10)(x8)))(jAgda_Data_Vec["Vec"]["_∷_"](x10)(x11)(x12)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x10)(exports["normalise-con"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x10)(x8))(x12))(exports["_200@45255833"]["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x8))(exports["∅*x+HN-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x10)(exports["normalise-con"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x10)(x8))(x11)(x12))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x10)(exports["normalise-con"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x10)(x8))(x12))(exports["_200@45255833"]["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x8))(exports["_200@45255833"]["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x8))(exports["correct-con"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x10)(x8)(x12))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_200@45255833"]["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x8)))));
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
  exports["_200@45255833"]["*-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["_-Raw-AlmostCommutative⟶_"]["*-homo"](undefined)(undefined)(undefined)(undefined)(undefined)(x5);
                };
              };
            };
          };
        };
      };
    };
  exports["Polynomial"]["con"] = function (x0) {
      return function (x1) {
        return x1["con"](x0);
      };
    };
  exports["_18@45255833"]["lemma₃"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_Lemmas["lemma₃"](x0)(x1)(x2)(x3)(x4)(x5);
                };
              };
            };
          };
        };
      };
    };
  exports["*N-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "con": function (x9) {
                          return function (x10) {
                            return x10({
                              "con": function (x11) {
                                return function (x12) {
                                  return exports["_200@45255833"]["*-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x11);
                                };
                              },
                              "poly": function () {
                                return undefined;
                              }
                            });
                          };
                        },
                        "poly": function (x9, x10) {
                          return function (x11) {
                            return x11({
                              "con": function () {
                                return undefined;
                              },
                              "poly": function (x12, x13) {
                                return function (x14) {
                                  return exports["*H-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x10)(x13)(x14);
                                };
                              }
                            });
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
  exports["_+N_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "con": function (x9) {
                          return function (x10) {
                            return x10({
                              "con": function (x11) {
                                return exports["Normal"]["con"](exports["C"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x11));
                              },
                              "poly": function () {
                                return undefined;
                              }
                            });
                          };
                        },
                        "poly": function (x9, x10) {
                          return function (x11) {
                            return x11({
                              "con": function () {
                                return undefined;
                              },
                              "poly": function (x12, x13) {
                                return exports["Normal"]["poly"](x9)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x10)(x13));
                              }
                            });
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
  exports["_50@45255833"]["0#"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4);
                };
              };
            };
          };
        };
      };
    };
  exports["Normal"]["poly"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["poly"](x0, x1);
        };
      };
    };
  exports["with-440"] = function (x0) {
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
                            return function (x12) {
                              return x12({
                                "no": function (x13) {
                                  return function (x14) {
                                    return x14({
                                      "no": function (x15) {
                                        return jAgda_Relation_Nullary["Dec"]["no"](function (x16) {
                                          return function (x17) {
                                            return function (x18) {
                                              return function (x19) {
                                                return function (x20) {
                                                  return function (x21) {
                                                    return function (x22) {
                                                      return function (x23) {
                                                        return function (x24) {
                                                          return function (x25) {
                                                            return function (x26) {
                                                              return function (x27) {
                                                                return function (x28) {
                                                                  return function (x29) {
                                                                    return function (x30) {
                                                                      return undefined;
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
                                            };
                                          };
                                        });
                                      },
                                      "yes": function () {
                                        return jAgda_Relation_Nullary["Dec"]["no"](function (x15) {
                                          return function (x16) {
                                            return function (x17) {
                                              return function (x18) {
                                                return function (x19) {
                                                  return function (x20) {
                                                    return function (x21) {
                                                      return function (x22) {
                                                        return function (x23) {
                                                          return function (x24) {
                                                            return function (x25) {
                                                              return function (x26) {
                                                                return function (x27) {
                                                                  return function (x28) {
                                                                    return function (x29) {
                                                                      return undefined;
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
                                            };
                                          };
                                        });
                                      }
                                    });
                                  };
                                },
                                "yes": function (x13) {
                                  return function (x14) {
                                    return x14({
                                      "no": function (x15) {
                                        return jAgda_Relation_Nullary["Dec"]["no"](function (x16) {
                                          return function (x17) {
                                            return function (x18) {
                                              return function (x19) {
                                                return function (x20) {
                                                  return function (x21) {
                                                    return function (x22) {
                                                      return function (x23) {
                                                        return function (x24) {
                                                          return function (x25) {
                                                            return function (x26) {
                                                              return function (x27) {
                                                                return function (x28) {
                                                                  return function (x29) {
                                                                    return function (x30) {
                                                                      return undefined;
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
                                            };
                                          };
                                        });
                                      },
                                      "yes": function (x15) {
                                        return jAgda_Relation_Nullary["Dec"]["yes"](exports["_≈H_"]["_*x+_"](x7)(x8)(x10)(x9)(x11)(x13)(x15));
                                      }
                                    });
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
        };
      };
    };
  exports["correct-var"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "suc": function (x9, x10) {
                          return function (x11) {
                            return x11({
                              "[]": function () {
                                return undefined;
                              },
                              "_∷_": function (x12, x13, x14) {
                                return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(exports["_*x+HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(exports["HNF"]["∅"](x9))(exports["normalise-var"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x10)))(jAgda_Data_Vec["Vec"]["_∷_"](x9)(x13)(x14)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(exports["normalise-var"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x10))(x14))(jAgda_Data_Vec["lookup"](x1)(x9)(function (x15) {
                                  return function (x16) {
                                    return function (x17) {
                                      return function (x18) {
                                        return function (x19) {
                                          return function (x20) {
                                            return function (x21) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    };
                                  };
                                })(x10)(x14))(exports["∅*x+HN-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(exports["normalise-var"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x10))(x13)(x14))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(exports["normalise-var"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x10))(x14))(jAgda_Data_Vec["lookup"](x1)(x9)(function (x15) {
                                  return function (x16) {
                                    return function (x17) {
                                      return function (x18) {
                                        return function (x19) {
                                          return function (x20) {
                                            return function (x21) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    };
                                  };
                                })(x10)(x14))(jAgda_Data_Vec["lookup"](x1)(x9)(function (x15) {
                                  return function (x16) {
                                    return function (x17) {
                                      return function (x18) {
                                        return function (x19) {
                                          return function (x20) {
                                            return function (x21) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    };
                                  };
                                })(x10)(x14))(exports["correct-var"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x10)(x14))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Data_Vec["lookup"](x1)(x9)(function (x15) {
                                  return function (x16) {
                                    return function (x17) {
                                      return function (x18) {
                                        return function (x19) {
                                          return function (x20) {
                                            return function (x21) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    };
                                  };
                                })(x10)(x14)))));
                              }
                            });
                          };
                        },
                        "zero": function (x9) {
                          return function (x10) {
                            return x10({
                              "[]": function () {
                                return undefined;
                              },
                              "_∷_": function (x11, x12, x13) {
                                return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x12))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9))(x13)))(x12))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(exports["0N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9))(x13)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x12))(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(x12))(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(x12)(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x14) {
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
                                })(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x14) {
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
                                })(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x14) {
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
                                })(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x12)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x12))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x12))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9))(x13))(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(exports["1N-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x13)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x12))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9))(x13)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x12))(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(x12)(x12))(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x12)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x12))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9))(x13)))(x12))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x12))(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(x12))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(exports["0N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9))(x13))(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(exports["0N-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x13)))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(x12))(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(x12))(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(x12)(x12)(exports["_18@45255833"]["lemma₅"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x12))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x12))));
                              }
                            });
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
  exports["C"]["-_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra["RawRing"]["-_"](undefined)(x3);
                };
              };
            };
          };
        };
      };
    };
  exports[".absurdlambda"] = function (x0) {
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
                          return undefined;
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
  exports["+N-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "con": function (x9) {
                          return function (x10) {
                            return x10({
                              "con": function (x11) {
                                return function (x12) {
                                  return exports["_200@45255833"]["+-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x11);
                                };
                              },
                              "poly": function () {
                                return undefined;
                              }
                            });
                          };
                        },
                        "poly": function (x9, x10) {
                          return function (x11) {
                            return x11({
                              "con": function () {
                                return undefined;
                              },
                              "poly": function (x12, x13) {
                                return function (x14) {
                                  return exports["+H-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x10)(x13)(x14);
                                };
                              }
                            });
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
  exports["_200@45255833"]["0-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["_-Raw-AlmostCommutative⟶_"]["0-homo"](undefined)(undefined)(undefined)(undefined)(undefined)(x5);
                };
              };
            };
          };
        };
      };
    };
  exports["HNF"]["∅"] = function (x0) {
      return function (x1) {
        return x1["∅"](x0);
      };
    };
  exports["_50@45255833"]["sym"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_176@119710315"]["sym"](x1)(x2)(x4);
                };
              };
            };
          };
        };
      };
    };
  exports["_*NH_"] = function (x0) {
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
                          "_*x+_": function (x10, x11, x12) {
                            return exports["with-678"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["_≟N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(exports["0N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(x11)(x12);
                          },
                          "∅": function (x10) {
                            return exports["HNF"]["∅"](x7);
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
  exports["_18@45255833"]["lemma₆"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_Lemmas["lemma₆"](x0)(x1)(x2)(x3)(x4)(x5);
                };
              };
            };
          };
        };
      };
    };
  exports["0N-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "[]": function () {
                          return exports["_200@45255833"]["0-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6);
                        },
                        "_∷_": function (x9, x10, x11) {
                          return exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x9))(exports["0N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x9)))(jAgda_Data_Vec["Vec"]["_∷_"](x9)(x10)(x11)));
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
  exports["_:*_"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function (x0) {
                return function (x1) {
                  return function (x2) {
                    return exports["Polynomial"]["op"](exports["Op"]["[*]"]);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["C"]["Carrier"] = function (x0) {
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
  exports["_50@45255833"]["∙-cong"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_176@119710315"]["∙-cong"](x1)(x2)(x4);
                };
              };
            };
          };
        };
      };
    };
  exports[".extendedlambda1"] = function (x0) {
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
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return undefined;
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
        };
      };
    };
  exports["_214@45255833"]["^-cong"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_Operations["^-cong"](x1)(x2)(exports["_50@45255833"]["semiring"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["normalise-con"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return x7({
                      "suc": function (x8) {
                        return function (x9) {
                          return exports["Normal"]["poly"](x8)(exports["_*x+HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x8)(exports["HNF"]["∅"](x8))(exports["normalise-con"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x8)(x9)));
                        };
                      },
                      "zero": function () {
                        return function (x8) {
                          return exports["Normal"]["con"](x8);
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
  exports[".extendedlambda3"] = function (x0) {
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
                            return undefined;
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
  exports["*H-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "_*x+_": function (x9, x10, x11) {
                          return function (x12) {
                            return x12({
                              "_*x+_": function (x13, x14, x15) {
                                return function (x16) {
                                  return x16({
                                    "[]": function () {
                                      return undefined;
                                    },
                                    "_∷_": function (x17, x18, x19) {
                                      return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*x+HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*x+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14))))(exports["_*N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x15)))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(exports["_*x+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14))))(exports["_*N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x15)))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(exports["*x+HN≈*x+"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*x+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14))))(exports["_*N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x15))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*x+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14))))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x15))(x19)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14)))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(exports["*x+H-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14)))(x18)(x19))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*x+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14))))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14)))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18)(x18))(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x18)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*x+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14))))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14)))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x15))(x19))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(exports["*N-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x15)(x19)))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14)))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))))(x18))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(exports["*H-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18)(x18))(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x18)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14)))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))))(exports["+H-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14)))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))))(x18)(x18))(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x18)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_+H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14)))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))))(x18))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19)))))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))))(x18))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))))(x18))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))))(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(function (x20) {
                                        return function (x21) {
                                          return function (x22) {
                                            return function (x23) {
                                              return function (x24) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      })(exports["*HN-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15)(x18)(x19))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))))(exports["*NH-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14)(x18)(x19))))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))))(x18)(x18))(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x18)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*HN_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x15))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x14))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))))(x18))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))))(x18))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19)))))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))(x18))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19))))))(x18))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19)))(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))(exports["_18@45255833"]["lemma₄"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))(x18))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x19)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x14)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x18)(x19)))(x18))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x15)(x19))))))))));
                                    }
                                  });
                                };
                              },
                              "∅": function (x13) {
                                return function (x14) {
                                  return jAgda_Function["_$_"](x2)(x2)(function (x15) {
                                    return function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return "*";
                                          };
                                        };
                                      };
                                    };
                                  })(function (x15) {
                                    return jAgda_Function["flip"](x1)(x1)(jAgda_Agda_Primitive["lsuc"](x2))(function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return "*";
                                        };
                                      };
                                    })(function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return "*";
                                        };
                                      };
                                    })(function (x16) {
                                      return function (x17) {
                                        return "*";
                                      };
                                    })(function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return function (x20) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(x10)(x11))(x14))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4));
                                  })(exports["_50@45255833"]["sym"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(x10)(x11))(x14))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4)))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["_50@45255833"]["zero"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["HNF"]["_*x+_"](x7)(x10)(x11))(x14)));
                                };
                              }
                            });
                          };
                        },
                        "∅": function (x9) {
                          return function (x10) {
                            return function (x11) {
                              return jAgda_Function["_$_"](x2)(x2)(function (x12) {
                                return function (x13) {
                                  return function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return "*";
                                      };
                                    };
                                  };
                                };
                              })(function (x12) {
                                return jAgda_Function["flip"](x1)(x1)(jAgda_Agda_Primitive["lsuc"](x2))(function (x13) {
                                  return function (x14) {
                                    return function (x15) {
                                      return "*";
                                    };
                                  };
                                })(function (x13) {
                                  return function (x14) {
                                    return function (x15) {
                                      return "*";
                                    };
                                  };
                                })(function (x13) {
                                  return function (x14) {
                                    return "*";
                                  };
                                })(function (x13) {
                                  return function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return "*";
                                        };
                                      };
                                    };
                                  };
                                })(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x11)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4));
                              })(exports["_50@45255833"]["sym"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x11)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4)))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["_50@45255833"]["zero"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x11)));
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
  exports["normalise"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        ":-_": function (x9) {
                          return exports["-N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9));
                        },
                        "_:^_": function (x9, x10) {
                          return exports["_^N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9))(x10);
                        },
                        "con": function (x9) {
                          return exports["normalise-con"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9);
                        },
                        "op": function (x9, x10, x11) {
                          return x9({
                            "[*]": function () {
                              return exports["_*N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10))(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11));
                            },
                            "[+]": function () {
                              return exports["_+N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10))(exports["normalise"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11));
                            }
                          });
                        },
                        "var": function (x9) {
                          return exports["normalise-var"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9);
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
  exports["_1292@45255833"]["prove"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_Reflection["prove"](x0)(x1)(x2)("*")(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      };
                    };
                  })(exports["_50@45255833"]["setoid"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(function (x7) {
                    return exports["Polynomial"]["var"];
                  })(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["⟦_⟧↓"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["correct"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["_1292@45255833"]["_⊜_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_Reflection["_⊜_"](x0)(x1)(x2)("*")(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      };
                    };
                  })(exports["_50@45255833"]["setoid"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(function (x7) {
                    return exports["Polynomial"]["var"];
                  })(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["⟦_⟧↓"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["correct"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["_18@45255833"]["lemma₅"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_Lemmas["lemma₅"](x0)(x1)(x2)(x3)(x4)(x5);
                };
              };
            };
          };
        };
      };
    };
  exports["Polynomial"]["var"] = function (x0) {
      return function (x1) {
        return x1["var"](x0);
      };
    };
  exports["-H‿-homo"] = function (x0) {
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
                          "[]": function () {
                            return undefined;
                          },
                          "_∷_": function (x10, x11, x12) {
                            return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["-N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(x8))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x11)(x12)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["-N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(x12))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x11)(x12))))(exports["_50@45255833"]["-_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x11)(x12))))(exports["*NH-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["-N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(x8)(x11)(x12))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["-N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(x12))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x11)(x12))))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x4)(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x11)(x12))))(exports["_50@45255833"]["-_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x11)(x12))))(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x13) {
                              return function (x14) {
                                return function (x15) {
                                  return function (x16) {
                                    return function (x17) {
                                      return "*";
                                    };
                                  };
                                };
                              };
                            })(function (x13) {
                              return function (x14) {
                                return function (x15) {
                                  return function (x16) {
                                    return function (x17) {
                                      return "*";
                                    };
                                  };
                                };
                              };
                            })(function (x13) {
                              return function (x14) {
                                return function (x15) {
                                  return function (x16) {
                                    return function (x17) {
                                      return "*";
                                    };
                                  };
                                };
                              };
                            })(exports["_50@45255833"]["trans"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["-N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(x12))(exports["_50@45255833"]["-_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7))(x12)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x4)(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(exports["-N‿-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7))(x12))(exports["_50@45255833"]["-‿cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7))(x12))(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["1N-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12))))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["-N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["1N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)))(x12))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["-_"](undefined)(undefined)(x4)(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x11)(x12)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x11)(x12))))(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x11)(x12)))))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["-_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["1#"](x0)(x1)(x2)(x3)(x4)(x5)(x6)))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x11)(x12))))(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["-_"](x0)(x1)(x2)(x3)(x4)(x5)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x11)(x12))))(exports["_50@45255833"]["-_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x11)(x12))))(exports["_18@45255833"]["lemma₇"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x11)(x12))))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["-_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x11)(x12))))))));
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
  exports["_≟N_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "con": function (x9) {
                          return function (x10) {
                            return x10({
                              "con": function (x11) {
                                return exports["with-488"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x11)(x6(x9)(x11));
                              },
                              "poly": function () {
                                return undefined;
                              }
                            });
                          };
                        },
                        "poly": function (x9, x10) {
                          return function (x11) {
                            return x11({
                              "con": function () {
                                return undefined;
                              },
                              "poly": function (x12, x13) {
                                return exports["with-512"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x10)(x13)(exports["_≟H_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x9))(x10)(x13));
                              }
                            });
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
  exports["_200@45255833"]["-‿homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["_-Raw-AlmostCommutative⟶_"]["-‿homo"](undefined)(undefined)(undefined)(undefined)(undefined)(x5);
                };
              };
            };
          };
        };
      };
    };
  exports["_50@45255833"]["Carrier"] = function (x0) {
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
  exports["⟦_⟧H"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "_*x+_": function (x9, x10, x11) {
                          return function (x12) {
                            return x12({
                              "[]": function () {
                                return undefined;
                              },
                              "_∷_": function (x13, x14, x15) {
                                return exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x14)(x15)))(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x15));
                              }
                            });
                          };
                        },
                        "∅": function (x9) {
                          return function (x10) {
                            return exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6);
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
  exports["_50@45255833"]["setoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_244@119710315"]["setoid"](x1)(x2)(x4);
                };
              };
            };
          };
        };
      };
    };
  exports["_≈N_"]["con"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["con"](x0, x1, x2);
          };
        };
      };
    };
  exports["C"]["1#"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Algebra["RawRing"]["1#"](undefined)(x3);
                };
              };
            };
          };
        };
      };
    };
  exports["with-1068"] = function (x0) {
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
                          "no": function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return function (x13) {
                                  return function (x14) {
                                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12))(x14)))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_+_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14))))(x13))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))))(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(exports["*NH-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11)(x13)(x14))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14))))(x13)(x13))(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x13)))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*NH_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x11))(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14))))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(exports["_*N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12))(x14))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))))(exports["*N-homo"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x12)(x14)))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14))))(x13))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))))(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Algebra_RingSolver_Lemmas["_32@139859501"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))))(exports["_18@45255833"]["lemma₃"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))(x13))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))))));
                                  };
                                };
                              };
                            };
                          },
                          "yes": function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return function (x13) {
                                  return function (x14) {
                                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))))(exports["_50@45255833"]["sym"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["0#"](undefined)(undefined)(x4))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["_50@45255833"]["zero"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))))(exports["_240@45255833"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))))(jAgda_Algebra_RingSolver_AlmostCommutativeRing["AlmostCommutativeRing"]["_*_"](undefined)(undefined)(x4)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))))(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))))(jAgda_Function["_⟨_⟩_"](x2)(x2)(x2)(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return function (x18) {
                                            return function (x19) {
                                              return "*";
                                            };
                                          };
                                        };
                                      };
                                    })(exports["0≈⟦0⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x10)(x14))(exports["_50@45255833"]["∙-cong"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["0#"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14))))(exports["_50@45255833"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))))(exports["_240@45255833"]["_∎"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x14))(exports["_50@45255833"]["_+_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["_50@45255833"]["_*_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧H"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(jAgda_Data_Vec["Vec"]["_∷_"](x7)(x13)(x14)))(x13))(exports["⟦_⟧N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x12)(x14)))))));
                                  };
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
  exports["⟦_⟧"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        ":-_": function (x9) {
                          return function (x10) {
                            return exports["_50@45255833"]["-_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x10));
                          };
                        },
                        "_:^_": function (x9, x10) {
                          return function (x11) {
                            return exports["_214@45255833"]["_^_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x9)(x11))(x10);
                          };
                        },
                        "con": function (x9) {
                          return function (x10) {
                            return exports["_200@45255833"]["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9);
                          };
                        },
                        "op": function (x9, x10, x11) {
                          return function (x12) {
                            return jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x13) {
                              return function (x14) {
                                return function (x15) {
                                  return "*";
                                };
                              };
                            })(function (x13) {
                              return function (x14) {
                                return function (x15) {
                                  return function (x16) {
                                    return function (x17) {
                                      return function (x18) {
                                        return function (x19) {
                                          return "*";
                                        };
                                      };
                                    };
                                  };
                                };
                              };
                            })(function (x13) {
                              return function (x14) {
                                return function (x15) {
                                  return function (x16) {
                                    return function (x17) {
                                      return function (x18) {
                                        return function (x19) {
                                          return "*";
                                        };
                                      };
                                    };
                                  };
                                };
                              };
                            })(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x12))(exports["sem"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9))(exports["⟦_⟧"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x11)(x12));
                          };
                        },
                        "var": function (x9) {
                          return function (x10) {
                            return jAgda_Data_Vec["lookup"](x1)(x7)(function (x11) {
                              return function (x12) {
                                return function (x13) {
                                  return function (x14) {
                                    return function (x15) {
                                      return function (x16) {
                                        return function (x17) {
                                          return "*";
                                        };
                                      };
                                    };
                                  };
                                };
                              };
                            })(x9)(x10);
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
  exports["_*x+HN_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "_*x+_": function (x9, x10, x11) {
                          return function (x12) {
                            return exports["HNF"]["_*x+_"](x7)(exports["HNF"]["_*x+_"](x7)(x10)(x11))(x12);
                          };
                        },
                        "∅": function (x9) {
                          return function (x10) {
                            return exports["with-600"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(exports["_≟N_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(exports["0N"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)));
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
  });
