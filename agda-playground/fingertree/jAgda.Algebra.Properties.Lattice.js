define(["exports","jAgda.Agda.Primitive","jAgda.Algebra","jAgda.Algebra.Structures","jAgda.Data.Product","jAgda.Function","jAgda.Function.Equality","jAgda.Function.Equivalence","jAgda.Relation.Binary","jAgda.Relation.Binary.Core","jAgda.Relation.Binary.EqReasoning","jAgda.Relation.Binary.PreorderReasoning"],function(exports,jAgda_Agda_Primitive,jAgda_Algebra,jAgda_Algebra_Structures,jAgda_Data_Product,jAgda_Function,jAgda_Function_Equality,jAgda_Function_Equivalence,jAgda_Relation_Binary,jAgda_Relation_Binary_Core,jAgda_Relation_Binary_EqReasoning,jAgda_Relation_Binary_PreorderReasoning) {
  exports["poset"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary["Poset"]["record"](function (x3) {
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
          })(function (x3) {
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
          })(jAgda_Relation_Binary["IsPartialOrder"]["record"](jAgda_Relation_Binary["IsPreorder"]["record"](jAgda_Algebra["Lattice"]["_1288@104512718"]["isEquivalence"](undefined)(undefined)(x2))(function (x3) {
            return function (x4) {
              return function (x5) {
                return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_98@89005912"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x3))(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Function["_$_"](x1)(x1)(function (x6) {
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
                  })(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x3))(x3);
                })(jAgda_Algebra["Lattice"]["_1288@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x3))(x3))(exports["∧-idempotent"](x0)(x1)(x2)(x3)))(exports["_98@89005912"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x3))(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∧-cong"](undefined)(undefined)(x2)(x3)(x3)(x3)(x4)(jAgda_Algebra["Lattice"]["_1288@104512718"]["refl"](undefined)(undefined)(x2)(x3))(x5))(exports["_98@89005912"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4)))));
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_98@89005912"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5))(x6)(exports["_98@89005912"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x4)(x5)))(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∧-cong"](undefined)(undefined)(x2)(x3)(x3)(x4)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x4)(x5))(jAgda_Algebra["Lattice"]["_1288@104512718"]["refl"](undefined)(undefined)(x2)(x3))(x7))(exports["_98@89005912"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x4)(x5)))(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(x5))(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5))(jAgda_Algebra["Lattice"]["_1288@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(x5))(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x4)(x5)))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∧-assoc"](undefined)(undefined)(x2)(x3)(x4)(x5)))(exports["_98@89005912"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(x5))(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5))(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∧-cong"](undefined)(undefined)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(x3)(x5)(x5)(jAgda_Algebra["Lattice"]["_1288@104512718"]["sym"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(x6))(jAgda_Algebra["Lattice"]["_1288@104512718"]["refl"](undefined)(undefined)(x2)(x5)))(exports["_98@89005912"]["_∎"](x0)(x1)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x5)))))));
                  };
                };
              };
            };
          }))(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_98@89005912"]["_∼⟨_⟩_"](x0)(x1)(x2)(x3)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(x4)(x5)(exports["_98@89005912"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x4))(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x4)(x3))(x4)(jAgda_Algebra["Lattice"]["_1288@104512718"]["∧-comm"](undefined)(undefined)(x2)(x3)(x4))(exports["_98@89005912"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x4)(x3))(x4)(x4)(jAgda_Algebra["Lattice"]["_1288@104512718"]["sym"](undefined)(undefined)(x2)(x4)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x4)(x3))(x6))(exports["_98@89005912"]["_∎"](x0)(x1)(x2)(x4)))));
                };
              };
            };
          }));
        };
      };
    };
  exports["_98@89005912"] = {};
  exports["_98@89005912"]["_∼⟨_⟩_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∼⟨_⟩_"](x0)(x1)(jAgda_Algebra["Lattice"]["setoid"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_174@89005912"] = {};
  exports["_174@89005912"]["E"] = {};
  exports["_174@89005912"]["E"]["to"] = function () {
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
  exports["_98@89005912"]["_∎"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary_EqReasoning["_34@177836773"]["_∎"](x0)(x1)(jAgda_Algebra["Lattice"]["setoid"](undefined)(undefined)(x2));
        };
      };
    };
  exports["_174@89005912"]["E"]["from"] = function () {
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
  exports["replace-equality"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Algebra["Lattice"]["record"](function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              })(x3)(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2))(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2))(jAgda_Algebra_Structures["IsLattice"]["record"](jAgda_Relation_Binary_Core["IsEquivalence"]["record"](function (x5) {
                return jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["to"](undefined)(undefined)(x2)(x3)(x4)(x5)(x5))(jAgda_Algebra["Lattice"]["_1288@104512718"]["refl"](undefined)(undefined)(x2)(x5));
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["to"](undefined)(undefined)(x2)(x3)(x4)(x6)(x5))(jAgda_Algebra["Lattice"]["_1288@104512718"]["sym"](undefined)(undefined)(x2)(x5)(x6)(jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["from"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(x7)));
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["to"](undefined)(undefined)(x2)(x3)(x4)(x5)(x7))(jAgda_Algebra["Lattice"]["_1288@104512718"]["trans"](undefined)(undefined)(x2)(x5)(x6)(x7)(jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["from"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(x8))(jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["from"](undefined)(undefined)(x2)(x3)(x4)(x6)(x7))(x9)));
                      };
                    };
                  };
                };
              }))(function (x5) {
                return function (x6) {
                  return jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["to"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2)(x6)(x5)))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∨-comm"](undefined)(undefined)(x2)(x5)(x6));
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["to"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2)(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2)(x6)(x7))))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∨-assoc"](undefined)(undefined)(x2)(x5)(x6)(x7));
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["to"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2)(x5)(x7))(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2)(x6)(x8)))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∨-cong"](undefined)(undefined)(x2)(x5)(x6)(x7)(x8)(jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["from"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(x9))(jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["from"](undefined)(undefined)(x2)(x3)(x4)(x7)(x8))(x10)));
                        };
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["to"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x6)(x5)))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∧-comm"](undefined)(undefined)(x2)(x5)(x6));
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["to"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x5)(x6))(x7))(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x6)(x7))))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∧-assoc"](undefined)(undefined)(x2)(x5)(x6)(x7));
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["to"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x5)(x7))(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x6)(x8)))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∧-cong"](undefined)(undefined)(x2)(x5)(x6)(x7)(x8)(jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["from"](undefined)(undefined)(x2)(x3)(x4)(x5)(x6))(x9))(jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["from"](undefined)(undefined)(x2)(x3)(x4)(x7)(x8))(x10)));
                        };
                      };
                    };
                  };
                };
              })(jAgda_Data_Product["Σ"]["_,_"](function (x5) {
                return function (x6) {
                  return jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["to"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x5)(x6)))(x5))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Lattice"]["_1288@104512718"]["absorptive"](undefined)(undefined)(x2))(x5)(x6));
                };
              })(function (x5) {
                return function (x6) {
                  return jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_174@89005912"]["E"]["to"](undefined)(undefined)(x2)(x3)(x4)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x5)(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2)(x5)(x6)))(x5))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Lattice"]["_1288@104512718"]["absorptive"](undefined)(undefined)(x2))(x5)(x6));
                };
              })));
            };
          };
        };
      };
    };
  exports["∧-idempotent"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_98@89005912"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x3))(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x3))))(x3)(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x4) {
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
            })(jAgda_Algebra["Lattice"]["_1288@104512718"]["refl"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∧-cong"](undefined)(undefined)(x2)(x3)(x3)(x3)(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x3))))(jAgda_Algebra["Lattice"]["_1288@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x3)))(x3)(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Lattice"]["_1288@104512718"]["absorptive"](undefined)(undefined)(x2))(x3)(x3))))(exports["_98@89005912"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x3))))(x3)(x3)(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Lattice"]["_1288@104512718"]["absorptive"](undefined)(undefined)(x2))(x3)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x3)))(exports["_98@89005912"]["_∎"](x0)(x1)(x2)(x3))));
          };
        };
      };
    };
  exports["∨-idempotent"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["_98@89005912"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2)(x3)(x3))(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x3)))(x3)(jAgda_Function["_⟨_⟩_"](x1)(x1)(x1)(function (x4) {
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
            })(jAgda_Algebra["Lattice"]["_1288@104512718"]["refl"](undefined)(undefined)(x2)(x3))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∨-cong"](undefined)(undefined)(x2)(x3)(x3)(x3)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x3)))(jAgda_Algebra["Lattice"]["_1288@104512718"]["sym"](undefined)(undefined)(x2)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x3))(x3)(exports["∧-idempotent"](x0)(x1)(x2)(x3))))(exports["_98@89005912"]["_∼⟨_⟩_"](x0)(x1)(x2)(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2)(x3)(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2)(x3)(x3)))(x3)(x3)(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(jAgda_Algebra["Lattice"]["_1288@104512718"]["absorptive"](undefined)(undefined)(x2))(x3)(x3))(exports["_98@89005912"]["_∎"](x0)(x1)(x2)(x3))));
          };
        };
      };
    };
  exports["∧-∨-lattice"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra["Lattice"]["record"](function (x3) {
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
          })(jAgda_Algebra["Lattice"]["_∧_"](undefined)(undefined)(x2))(jAgda_Algebra["Lattice"]["_∨_"](undefined)(undefined)(x2))(exports["∧-∨-isLattice"](x0)(x1)(x2));
        };
      };
    };
  exports["∧-∨-isLattice"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Algebra_Structures["IsLattice"]["record"](jAgda_Algebra["Lattice"]["_1288@104512718"]["isEquivalence"](undefined)(undefined)(x2))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∧-comm"](undefined)(undefined)(x2))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∧-assoc"](undefined)(undefined)(x2))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∧-cong"](undefined)(undefined)(x2))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∨-comm"](undefined)(undefined)(x2))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∨-assoc"](undefined)(undefined)(x2))(jAgda_Algebra["Lattice"]["_1288@104512718"]["∨-cong"](undefined)(undefined)(x2))(jAgda_Data_Product["swap"](jAgda_Agda_Primitive["_⊔_"](x1)(x0))(jAgda_Agda_Primitive["_⊔_"](x1)(x0))(function (x3) {
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
          })(function (x3) {
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
          })(jAgda_Algebra["Lattice"]["_1288@104512718"]["absorptive"](undefined)(undefined)(x2)));
        };
      };
    };
  });
