define(["exports","jAgda.Agda.Builtin.Equality","jAgda.Agda.Builtin.Nat","jAgda.Agda.Primitive","jAgda.Algebra","jAgda.Algebra.RingSolver.AlmostCommutativeRing","jAgda.Algebra.RingSolver.Simple","jAgda.Algebra.Structures","jAgda.Data.Nat","jAgda.Data.Nat.Base","jAgda.Data.Product","jAgda.Data.Sum","jAgda.Function","jAgda.Relation.Binary","jAgda.Relation.Binary.Core","jAgda.Relation.Binary.PreorderReasoning","jAgda.Relation.Binary.PropositionalEquality.Core"],function(exports,jAgda_Agda_Builtin_Equality,jAgda_Agda_Builtin_Nat,jAgda_Agda_Primitive,jAgda_Algebra,jAgda_Algebra_RingSolver_AlmostCommutativeRing,jAgda_Algebra_RingSolver_Simple,jAgda_Algebra_Structures,jAgda_Data_Nat,jAgda_Data_Nat_Base,jAgda_Data_Product,jAgda_Data_Sum,jAgda_Function,jAgda_Relation_Binary,jAgda_Relation_Binary_Core,jAgda_Relation_Binary_PreorderReasoning,jAgda_Relation_Binary_PropositionalEquality_Core) {
  exports["SemiringSolver"] = {};
  exports["SemiringSolver"]["Op"] = {};
  exports["SemiringSolver"]["_≈N_"] = {};
  exports["SemiringSolver"]["Normal"] = {};
  exports["SemiringSolver"]["_≈H_"] = {};
  exports["SemiringSolver"]["HNF"] = {};
  exports["SemiringSolver"]["Polynomial"] = {};
  exports["m+n∸m≡n"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["with-406"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "inj₁": function (x3) {
              return jAgda_Data_Sum["_⊎_"]["inj₁"](function (x4) {
                return function (x5) {
                  return function (x6) {
                    return function (x7) {
                      return function (x8) {
                        return function (x9) {
                          return function (x10) {
                            return function (x11) {
                              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                            };
                          };
                        };
                      };
                    };
                  };
                };
              });
            },
            "inj₂": function (x3) {
              return jAgda_Data_Sum["_⊎_"]["inj₂"](function (x4) {
                return function (x5) {
                  return function (x6) {
                    return function (x7) {
                      return function (x8) {
                        return function (x9) {
                          return function (x10) {
                            return function (x11) {
                              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
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
      };
    };
  exports["SemiringSolver"]["+H-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
          };
        };
      };
    };
  exports["SemiringSolver"]["0N-homo"] = function (x0) {
      return function (x1) {
        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
      };
    };
  exports["⌈n/2⌉≤′n"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return x1({
            "suc": function (x2) {
              return exports["s≤′s"](jAgda_Data_Nat_Base["⌈_/2⌉"](x2))(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x2))(jAgda_Data_Nat_Base["_≤′_"]["≤′-step"](x2)(exports["⌈n/2⌉≤′n"](x2)));
            },
            "zero": function () {
              return jAgda_Data_Nat_Base["_≤′_"]["≤′-refl"];
            }
          });
        },
        "zero": function () {
          return jAgda_Data_Nat_Base["_≤′_"]["≤′-refl"];
        }
      });
    };
  exports["≤⇒≤′"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "s≤s": function (x3, x4, x5) {
              return exports["s≤′s"](x3)(x4)(exports["≤⇒≤′"](x3)(x4)(x5));
            },
            "z≤n": function (x3) {
              return exports["z≤′n"](x1);
            }
          });
        };
      };
    };
  exports["SemiringSolver"]["_≈H_"]["∅"] = function (x0) {
      return function (x1) {
        return x1["∅"](x0);
      };
    };
  exports["m≢1+m+n"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return undefined;
        };
      };
    };
  exports["SemiringSolver"]["poly"] = function (x0) {
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
  exports["n≤1+n"] = function (x0) {
      return exports["≤-step"](x0)(x0)(exports["_6@155729788"]["refl"](x0));
    };
  exports["SemiringSolver"]["correct"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["SemiringSolver"]["Polynomial"]["con"] = function (x0) {
      return function (x1) {
        return x1["con"](x0);
      };
    };
  exports["cancel-+-left"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
          };
        };
      };
    };
  exports["SemiringSolver"]["Normal"]["con"] = function (x0) {
      return function (x1) {
        return x1["con"](x0);
      };
    };
  exports["_738@155729788"] = {};
  exports["_738@155729788"]["2+m+n≰m"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return undefined;
        };
      };
    };
  exports["SemiringSolver"]["poly"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["poly"](x0, x1);
        };
      };
    };
  exports["_+-mono_"] = function (x0) {
      return x0({
        "suc": function () {
          return function (x1) {
            return function (x2) {
              return function (x3) {
                return function (x4) {
                  return x4({
                    "s≤s": function (x5, x6, x7) {
                      return function (x8) {
                        return jAgda_Data_Nat_Base["_≤_"]["s≤s"](jAgda_Agda_Builtin_Nat["_+_"](x5)(x2))(jAgda_Agda_Builtin_Nat["_+_"](x6)(x3))(exports["_+-mono_"](x5)(x6)(x2)(x3)(x7)(x8));
                      };
                    },
                    "z≤n": function () {
                      return undefined;
                    }
                  });
                };
              };
            };
          };
        },
        "zero": function () {
          return function (x1) {
            return function (x2) {
              return function (x3) {
                return function (x4) {
                  return x4({
                    "s≤s": function (x5, x6, x7) {
                      return function (x8) {
                        return jAgda_Data_Nat_Base["_≤_"]["s≤s"](jAgda_Agda_Builtin_Nat["_+_"](x5)(x2))(jAgda_Agda_Builtin_Nat["_+_"](x6)(x3))(exports["_+-mono_"](x5)(x6)(x2)(x3)(x7)(x8));
                      };
                    },
                    "z≤n": function (x5) {
                      return function (x6) {
                        return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∼⟨_⟩_"](x2)(x3)(jAgda_Agda_Builtin_Nat["_+_"](x1)(x3))(x6)(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∼⟨_⟩_"](x3)(jAgda_Agda_Builtin_Nat["_+_"](x1)(x3))(jAgda_Agda_Builtin_Nat["_+_"](x1)(x3))(exports["n≤m+n"](x1)(x3))(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∎"](jAgda_Agda_Builtin_Nat["_+_"](x1)(x3)))));
                      };
                    }
                  });
                };
              };
            };
          };
        }
      });
    };
  exports["≤′⇒≤"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "≤′-refl": function () {
              return exports["_6@155729788"]["refl"](x0);
            },
            "≤′-step": function (x3, x4) {
              return exports["≤-step"](x0)(x3)(exports["≤′⇒≤"](x0)(x3)(x4));
            }
          });
        };
      };
    };
  exports["SemiringSolver"]["∅*x+HN-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
          };
        };
      };
    };
  exports["_10@155729788"] = {};
  exports["_10@155729788"]["Absorptive"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["SemiringSolver"]["con"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["con"](x0, x1, x2);
          };
        };
      };
    };
  exports["i+j≡0⇒i≡0"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["⊔-sel"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3) {
                return exports["with-430"](x1)(x3)(exports["⊔-sel"](x1)(x3));
              },
              "zero": function () {
                return jAgda_Data_Sum["_⊎_"]["inj₁"](jAgda_Agda_Builtin_Equality["_≡_"]["refl"]);
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return jAgda_Data_Sum["_⊎_"]["inj₂"](jAgda_Agda_Builtin_Equality["_≡_"]["refl"]);
          };
        }
      });
    };
  exports["SemiringSolver"]["Polynomial"][":-_"] = function (x0) {
      return function (x1) {
        return x1[":-_"](x0);
      };
    };
  exports["cancel-+-left-≤"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return function (x3) {
              return function (x4) {
                return x4({
                  "s≤s": function (x5, x6, x7) {
                    return exports["cancel-+-left-≤"](x1)(x2)(x3)(x7);
                  },
                  "z≤n": function () {
                    return undefined;
                  }
                });
              };
            };
          };
        },
        "zero": function () {
          return function (x1) {
            return function (x2) {
              return function (x3) {
                return x3;
              };
            };
          };
        }
      });
    };
  exports["m⊓n+n∸m≡n"] = function (x0) {
      return function (x1) {
        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
      };
    };
  exports["n∸m≤n"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3) {
                return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∼⟨_⟩_"](jAgda_Agda_Builtin_Nat["_-_"](x3)(x1))(x3)(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x3))(exports["n∸m≤n"](x1)(x3))(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∼⟨_⟩_"](x3)(jAgda_Agda_Builtin_Nat["_+_"](1)(x3))(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x3))(exports["n≤1+n"](x3))(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∎"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x3)))));
              },
              "zero": function () {
                return exports["_6@155729788"]["refl"](jAgda_Agda_Builtin_Nat["_-_"](jAgda_Agda_Builtin_Nat["Nat"]["zero"])(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x1)));
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return exports["_6@155729788"]["refl"](jAgda_Agda_Builtin_Nat["_-_"](x1)(jAgda_Agda_Builtin_Nat["Nat"]["zero"]));
          };
        }
      });
    };
  exports["*-distrib-∸ʳ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["_372@155729788"] = {};
  exports["_372@155729788"]["abs-⊔-⊓"] = function (x0) {
      return function (x1) {
        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
      };
    };
  exports["SemiringSolver"]["*x+HN≈*x+"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
          };
        };
      };
    };
  exports["i∸k∸j+j∸k≡i+j∸k"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["_1126@155729788"] = {};
  exports["_1126@155729788"]["_1128@155729788"] = {};
  exports["_1126@155729788"]["_1128@155729788"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary["DecTotalOrder"]["DTO"]["reflexive"](undefined)(undefined)(undefined)(jAgda_Data_Nat["decTotalOrder"]);
        };
      };
    };
  exports["SemiringSolver"]["_≈H_"]["_*x+_"] = function (x0) {
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
  exports["s≤′s"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "≤′-refl": function () {
              return jAgda_Data_Nat_Base["_≤′_"]["≤′-refl"];
            },
            "≤′-step": function (x3, x4) {
              return jAgda_Data_Nat_Base["_≤′_"]["≤′-step"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x3))(exports["s≤′s"](x0)(x3)(x4));
            }
          });
        };
      };
    };
  exports["_334@155729788"] = {};
  exports["_334@155729788"]["distribˡ-⊓-⊔"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["[m∸n]⊓[n∸m]≡0"] = function (x0) {
      return function (x1) {
        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
      };
    };
  exports["n≤m+n∸m"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3) {
                return jAgda_Data_Nat_Base["_≤_"]["s≤s"](x3)(jAgda_Agda_Builtin_Nat["_+_"](x1)(jAgda_Agda_Builtin_Nat["_-_"](x3)(x1)))(exports["n≤m+n∸m"](x1)(x3));
              },
              "zero": function () {
                return jAgda_Data_Nat_Base["_≤_"]["z≤n"](jAgda_Agda_Builtin_Nat["_+_"](x0)(jAgda_Agda_Builtin_Nat["_-_"](jAgda_Agda_Builtin_Nat["Nat"]["zero"])(x0)));
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return x1({
              "suc": function (x2) {
                return exports["_6@155729788"]["refl"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x2));
              },
              "zero": function () {
                return jAgda_Data_Nat_Base["_≤_"]["z≤n"](jAgda_Agda_Builtin_Nat["_+_"](x0)(jAgda_Agda_Builtin_Nat["_-_"](jAgda_Agda_Builtin_Nat["Nat"]["zero"])(x0)));
              }
            });
          };
        }
      });
    };
  exports["SemiringSolver"]["op"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["op"](x0, x1, x2);
          };
        };
      };
    };
  exports["_*-mono_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "s≤s": function (x5, x6, x7) {
                  return function (x8) {
                    return exports["_+-mono_"](x2)(x3)(jAgda_Agda_Builtin_Nat["_*_"](x5)(x2))(jAgda_Agda_Builtin_Nat["_*_"](x6)(x3))(x8)(exports["_*-mono_"](x5)(x6)(x2)(x3)(x7)(x8));
                  };
                },
                "z≤n": function (x5) {
                  return function (x6) {
                    return jAgda_Data_Nat_Base["_≤_"]["z≤n"](jAgda_Agda_Builtin_Nat["_*_"](x1)(x3));
                  };
                }
              });
            };
          };
        };
      };
    };
  exports["SemiringSolver"]["∅"] = function (x0) {
      return function (x1) {
        return x1["∅"](x0);
      };
    };
  exports["cancel-*-right"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
          };
        };
      };
    };
  exports["_274@155729788"] = {};
  exports["_274@155729788"]["n⊔0≡n"] = function (x0) {
      return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
    };
  exports["SemiringSolver"]["con"] = function (x0) {
      return function (x1) {
        return x1["con"](x0);
      };
    };
  exports["with-674"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return undefined;
        };
      };
    };
  exports["SemiringSolver"]["Polynomial"]["_:^_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["_:^_"](x0, x1);
        };
      };
    };
  exports["_738@155729788"]["with-754"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "equal": function (x3) {
              return jAgda_Relation_Binary_Core["Tri"]["tri≈"](function (x4) {
                return function (x5) {
                  return undefined;
                };
              })(jAgda_Agda_Builtin_Equality["_≡_"]["refl"])(function (x4) {
                return function (x5) {
                  return undefined;
                };
              });
            },
            "greater": function (x3, x4) {
              return jAgda_Relation_Binary_Core["Tri"]["tri>"](function (x5) {
                return function (x6) {
                  return function (x7) {
                    return undefined;
                  };
                };
              })(jAgda_Function["_∘_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")(function (x5) {
                return "*";
              })(function (x5) {
                return function (x6) {
                  return "*";
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return undefined;
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                      };
                    };
                  };
                };
              }))(exports["m≤m+n"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x3))(x4));
            },
            "less": function (x3, x4) {
              return jAgda_Relation_Binary_Core["Tri"]["tri<"](exports["m≤m+n"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x3))(x4))(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return undefined;
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return undefined;
                  };
                };
              });
            }
          });
        };
      };
    };
  exports["n≤′m+n"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return jAgda_Data_Nat_Base["_≤′_"]["≤′-step"](jAgda_Agda_Builtin_Nat["_+_"](x1)(x2))(exports["n≤′m+n"](x1)(x2));
          };
        },
        "zero": function () {
          return function (x1) {
            return jAgda_Data_Nat_Base["_≤′_"]["≤′-refl"];
          };
        }
      });
    };
  exports["n∸n≡0"] = function (x0) {
      return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
    };
  exports["SemiringSolver"]["HNF"]["∅"] = function (x0) {
      return function (x1) {
        return x1["∅"](x0);
      };
    };
  exports["_10@155729788"]["Zero"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["≤⇒pred≤"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return function (x3) {
              return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∼⟨_⟩_"](x1)(jAgda_Agda_Builtin_Nat["_+_"](1)(x1))(x2)(exports["n≤1+n"](x1))(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∼⟨_⟩_"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x1))(x2)(x2)(x3)(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∎"](x2))));
            };
          };
        },
        "zero": function () {
          return function (x1) {
            return function (x2) {
              return x2;
            };
          };
        }
      });
    };
  exports["<⇒≤pred"] = function (x0) {
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
  exports["≤pred⇒≤"] = function (x0) {
      return function (x1) {
        return x1({
          "suc": function (x2) {
            return function (x3) {
              return exports["≤-step"](x0)(jAgda_Data_Nat_Base["pred"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x2)))(x3);
            };
          },
          "zero": function () {
            return function (x2) {
              return x2;
            };
          }
        });
      };
    };
  exports["⊓-assoc"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["[i+j]∸[i+k]≡j∸k"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["SemiringSolver"]["*x+H-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
            };
          };
        };
      };
    };
  exports["≤-steps"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "suc": function (x3) {
              return function (x4) {
                return exports["≤-step"](x0)(jAgda_Agda_Builtin_Nat["_+_"](x3)(x1))(exports["≤-steps"](x0)(x1)(x3)(x4));
              };
            },
            "zero": function () {
              return function (x3) {
                return x3;
              };
            }
          });
        };
      };
    };
  exports["SemiringSolver"]["HNF"]["_*x+_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["_*x+_"](x0, x1, x2);
          };
        };
      };
    };
  exports["<-trans"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∼⟨_⟩_"](jAgda_Agda_Builtin_Nat["_+_"](1)(x0))(x1)(x2)(x3)(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∼⟨_⟩_"](x1)(jAgda_Agda_Builtin_Nat["_+_"](1)(x1))(x2)(exports["n≤1+n"](x1))(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∼⟨_⟩_"](jAgda_Agda_Builtin_Nat["_+_"](1)(x1))(x2)(x2)(x4)(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∎"](x2)))));
            };
          };
        };
      };
    };
  exports["SemiringSolver"][":-_"] = function (x0) {
      return function (x1) {
        return x1[":-_"](x0);
      };
    };
  exports["SemiringSolver"]["*NH-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
            };
          };
        };
      };
    };
  exports["m⊓n≤m"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3) {
                return jAgda_Function["_$_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")(function (x4) {
                  return "*";
                })(jAgda_Data_Nat_Base["_≤_"]["s≤s"](jAgda_Data_Nat_Base["_⊓_"](x1)(x3))(x1))(exports["m⊓n≤m"](x1)(x3));
              },
              "zero": function () {
                return jAgda_Data_Nat_Base["_≤_"]["z≤n"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x1));
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return jAgda_Data_Nat_Base["_≤_"]["z≤n"](jAgda_Agda_Builtin_Nat["Nat"]["zero"]);
          };
        }
      });
    };
  exports["SemiringSolver"]["-N‿-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["pred-mono"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "s≤s": function (x3, x4, x5) {
              return x5;
            },
            "z≤n": function (x3) {
              return jAgda_Data_Nat_Base["_≤_"]["z≤n"](jAgda_Data_Nat_Base["pred"](x1));
            }
          });
        };
      };
    };
  exports["≤⇒≤″"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Data_Nat_Base["_≤″_"]["less-than-or-equal"](exports["_696@155729788"]["k"](x0)(x1)(x2)(x0)(x1)(x2))(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                    };
                  };
                };
              };
            };
          });
        };
      };
    };
  exports["≤-step"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "s≤s": function (x3, x4, x5) {
              return jAgda_Data_Nat_Base["_≤_"]["s≤s"](x3)(jAgda_Agda_Builtin_Nat["_+_"](1)(x4))(exports["≤-step"](x3)(x4)(x5));
            },
            "z≤n": function (x3) {
              return jAgda_Data_Nat_Base["_≤_"]["z≤n"](jAgda_Agda_Builtin_Nat["_+_"](1)(x1));
            }
          });
        };
      };
    };
  exports["SemiringSolver"]["∅"] = function (x0) {
      return function (x1) {
        return x1["∅"](x0);
      };
    };
  exports["SemiringSolver"]["con"] = function (x0) {
      return function (x1) {
        return x1["con"](x0);
      };
    };
  exports["n≤m+n"] = function (x0) {
      return function (x1) {
        return exports["≤′⇒≤"](x1)(jAgda_Agda_Builtin_Nat["_+_"](x0)(x1))(exports["n≤′m+n"](x0)(x1));
      };
    };
  exports["SemiringSolver"]["^N-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
          };
        };
      };
    };
  exports["SemiringSolver"]["Op"]["[+]"] = function (x0) {
      return x0["[+]"]();
    };
  exports["0∸n≡0"] = function (x0) {
      return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
    };
  exports["_334@155729788"]["distribʳ-⊓-⊔"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["with-990"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["⊓-comm"] = function (x0) {
      return function (x1) {
        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
      };
    };
  exports["SemiringSolver"]["1N-homo"] = function (x0) {
      return function (x1) {
        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
      };
    };
  exports["_10@155729788"]["Identity"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["SemiringSolver"]["*N-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
          };
        };
      };
    };
  exports["_372@155729788"]["abs-⊓-⊔"] = function (x0) {
      return function (x1) {
        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
      };
    };
  exports["_696@155729788"] = {};
  exports["_696@155729788"]["proof"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
              };
            };
          };
        };
      };
    };
  exports["SemiringSolver"]["⟦_⟧N-cong"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
            };
          };
        };
      };
    };
  exports["SemiringSolver"]["_:^_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["_:^_"](x0, x1);
        };
      };
    };
  exports["with-430"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "inj₁": function (x3) {
              return jAgda_Data_Sum["_⊎_"]["inj₁"](function (x4) {
                return function (x5) {
                  return function (x6) {
                    return function (x7) {
                      return function (x8) {
                        return function (x9) {
                          return function (x10) {
                            return function (x11) {
                              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                            };
                          };
                        };
                      };
                    };
                  };
                };
              });
            },
            "inj₂": function (x3) {
              return jAgda_Data_Sum["_⊎_"]["inj₂"](function (x4) {
                return function (x5) {
                  return function (x6) {
                    return function (x7) {
                      return function (x8) {
                        return function (x9) {
                          return function (x10) {
                            return function (x11) {
                              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
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
      };
    };
  exports["i+j≡0⇒j≡0"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["≤″⇒≤"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "less-than-or-equal": function (x3, x4) {
              return x4({
                "refl": function () {
                  return exports["m≤m+n"](x0)(x3);
                }
              });
            }
          });
        };
      };
    };
  exports["SemiringSolver"]["var"] = function (x0) {
      return function (x1) {
        return x1["var"](x0);
      };
    };
  exports["i+1+j≢i"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return undefined;
        };
      };
    };
  exports["m≤m+n"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return jAgda_Data_Nat_Base["_≤_"]["s≤s"](x1)(jAgda_Agda_Builtin_Nat["_+_"](x1)(x2))(exports["m≤m+n"](x1)(x2));
          };
        },
        "zero": function () {
          return function (x1) {
            return jAgda_Data_Nat_Base["_≤_"]["z≤n"](jAgda_Agda_Builtin_Nat["_+_"](jAgda_Agda_Builtin_Nat["Nat"]["zero"])(x1));
          };
        }
      });
    };
  exports["SemiringSolver"]["Op"]["[*]"] = function (x0) {
      return x0["[*]"]();
    };
  exports["m+n∸n≡m"] = function (x0) {
      return function (x1) {
        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
      };
    };
  exports["im≡jm+n⇒[i∸j]m≡n"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
            };
          };
        };
      };
    };
  exports["SemiringSolver"]["_*x+_"] = function (x0) {
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
  exports["SemiringSolver"]["[+]"] = function (x0) {
      return x0["[+]"]();
    };
  exports["≰⇒>"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3) {
                return function (x4) {
                  return jAgda_Data_Nat_Base["_≤_"]["s≤s"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x3))(x1)(exports["≰⇒>"](x1)(x3)(jAgda_Function["_∘_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")(function (x5) {
                    return "*";
                  })(function (x5) {
                    return function (x6) {
                      return "*";
                    };
                  })(function (x5) {
                    return x4;
                  })(jAgda_Data_Nat_Base["_≤_"]["s≤s"](x1)(x3))));
                };
              },
              "zero": function () {
                return function (x3) {
                  return jAgda_Data_Nat_Base["_≤_"]["s≤s"](jAgda_Agda_Builtin_Nat["Nat"]["zero"])(x1)(jAgda_Data_Nat_Base["_≤_"]["z≤n"](x1));
                };
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return function (x2) {
              return exports["with-674"](x1)(x2)(x2(jAgda_Data_Nat_Base["_≤_"]["z≤n"](x1)));
            };
          };
        }
      });
    };
  exports["SemiringSolver"]["-H‿-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["m≤m⊔n"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3) {
                return jAgda_Function["_$_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")(function (x4) {
                  return "*";
                })(jAgda_Data_Nat_Base["_≤_"]["s≤s"](x1)(jAgda_Data_Nat_Base["_⊔_"](x1)(x3)))(exports["m≤m⊔n"](x1)(x3));
              },
              "zero": function () {
                return exports["_6@155729788"]["refl"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x1));
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return jAgda_Data_Nat_Base["_≤_"]["z≤n"](jAgda_Data_Nat_Base["_⊔_"](jAgda_Agda_Builtin_Nat["Nat"]["zero"])(x1));
          };
        }
      });
    };
  exports["⌊n/2⌋≤′n"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return jAgda_Data_Nat_Base["_≤′_"]["≤′-step"](x1)(exports["⌈n/2⌉≤′n"](x1));
        },
        "zero": function () {
          return jAgda_Data_Nat_Base["_≤′_"]["≤′-refl"];
        }
      });
    };
  exports["⊓-sel"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3) {
                return exports["with-406"](x1)(x3)(exports["⊓-sel"](x1)(x3));
              },
              "zero": function () {
                return jAgda_Data_Sum["_⊎_"]["inj₂"](jAgda_Agda_Builtin_Equality["_≡_"]["refl"]);
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return jAgda_Data_Sum["_⊎_"]["inj₁"](jAgda_Agda_Builtin_Equality["_≡_"]["refl"]);
          };
        }
      });
    };
  exports["SemiringSolver"]["_≈N_"]["poly"] = function (x0) {
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
  exports["SemiringSolver"]["*HN-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
            };
          };
        };
      };
    };
  exports["_696@155729788"]["k"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "suc": function (x4) {
                return function (x5) {
                  return x5({
                    "suc": function (x6) {
                      return function (x7) {
                        return exports["_696@155729788"]["k"](x0)(x1)(x2)(x4)(x6)(jAgda_Data_Nat_Base["≤-pred"](x4)(x6)(x7));
                      };
                    },
                    "zero": function () {
                      return function (x6) {
                        return undefined;
                      };
                    }
                  });
                };
              },
              "zero": function () {
                return function (x4) {
                  return function (x5) {
                    return x4;
                  };
                };
              }
            });
          };
        };
      };
    };
  exports["i*j≡1⇒i≡1"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["⌈n/2⌉-mono"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["⌊n/2⌋-mono"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x0))(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x1))(jAgda_Data_Nat_Base["_≤_"]["s≤s"](x0)(x1)(x2));
        };
      };
    };
  exports["⊔-assoc"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["_10@155729788"]["_DistributesOver_"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["∸-+-assoc"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["SemiringSolver"]["Polynomial"]["var"] = function (x0) {
      return function (x1) {
        return x1["var"](x0);
      };
    };
  exports["_738@155729788"]["cmp"] = function (x0) {
      return function (x1) {
        return exports["_738@155729788"]["with-754"](x0)(x1)(jAgda_Data_Nat_Base["compare"](x0)(x1));
      };
    };
  exports["SemiringSolver"]["_*x+_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["_*x+_"](x0, x1, x2);
          };
        };
      };
    };
  exports["¬i+1+j≤i"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return undefined;
        };
      };
    };
  exports["SemiringSolver"]["[*]"] = function (x0) {
      return x0["[*]"]();
    };
  exports["SemiringSolver"]["_≈N_"]["con"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["con"](x0, x1, x2);
          };
        };
      };
    };
  exports["SemiringSolver"]["*H-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
          };
        };
      };
    };
  exports["i*j≡0⇒i≡0∨j≡0"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3) {
                return function (x4) {
                  return undefined;
                };
              },
              "zero": function () {
                return function (x3) {
                  return jAgda_Data_Sum["_⊎_"]["inj₂"](jAgda_Agda_Builtin_Equality["_≡_"]["refl"]);
                };
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return function (x2) {
              return jAgda_Data_Sum["_⊎_"]["inj₁"](jAgda_Agda_Builtin_Equality["_≡_"]["refl"]);
            };
          };
        }
      });
    };
  exports["z≤′n"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return jAgda_Data_Nat_Base["_≤′_"]["≤′-step"](x1)(exports["z≤′n"](x1));
        },
        "zero": function () {
          return jAgda_Data_Nat_Base["_≤′_"]["≤′-refl"];
        }
      });
    };
  exports["SemiringSolver"]["⟦_⟧H-cong"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
            };
          };
        };
      };
    };
  exports["∸-mono"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "s≤s": function (x5, x6, x7) {
                  return function (x8) {
                    return x8({
                      "s≤s": function (x9, x10, x11) {
                        return exports["∸-mono"](x5)(x6)(x10)(x9)(x7)(x11);
                      },
                      "z≤n": function (x9) {
                        return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∼⟨_⟩_"](jAgda_Agda_Builtin_Nat["_-_"](x0)(x9))(x0)(x1)(exports["n∸m≤n"](x9)(x0))(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∼⟨_⟩_"](x0)(x1)(x1)(x4)(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∎"](x1))));
                      }
                    });
                  };
                },
                "z≤n": function (x5) {
                  return function (x6) {
                    return x6({
                      "s≤s": function (x7, x8, x9) {
                        return jAgda_Data_Nat_Base["_≤_"]["z≤n"](jAgda_Agda_Builtin_Nat["_-_"](x1)(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x7)));
                      },
                      "z≤n": function (x7) {
                        return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∼⟨_⟩_"](jAgda_Agda_Builtin_Nat["_-_"](x0)(x7))(x0)(x1)(exports["n∸m≤n"](x7)(x0))(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∼⟨_⟩_"](x0)(x1)(x1)(x4)(jAgda_Data_Nat["≤-Reasoning"]["_66@166314648"]["_∎"](x1))));
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
  exports["1+n≰n"] = function (x0) {
      return function (x1) {
        return undefined;
      };
    };
  exports["SemiringSolver"]["correct-var"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["+-∸-assoc"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
          };
        };
      };
    };
  exports["cancel-*-right-≤"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3) {
                return function (x4) {
                  return function (x5) {
                    return jAgda_Data_Nat_Base["_≤_"]["s≤s"](x1)(x3)(exports["cancel-*-right-≤"](x1)(x3)(x4)(exports["cancel-+-left-≤"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x4))(jAgda_Agda_Builtin_Nat["_*_"](x1)(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x4)))(jAgda_Agda_Builtin_Nat["_*_"](x3)(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x4)))(x5)));
                  };
                };
              },
              "zero": function () {
                return function (x3) {
                  return function (x4) {
                    return undefined;
                  };
                };
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return function (x2) {
              return function (x3) {
                return jAgda_Data_Nat_Base["_≤_"]["z≤n"](x1);
              };
            };
          };
        }
      });
    };
  exports["SemiringSolver"]["+N-homo"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
          };
        };
      };
    };
  exports["SemiringSolver"]["0≈⟦0⟧"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
          };
        };
      };
    };
  exports["SemiringSolver"]["prove"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
            };
          };
        };
      };
    };
  exports["⊔-comm"] = function (x0) {
      return function (x1) {
        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
      };
    };
  exports["SemiringSolver"]["correct-con"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["⌊n/2⌋-mono"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "s≤s": function (x3, x4, x5) {
              return x5({
                "s≤s": function (x6, x7, x8) {
                  return jAgda_Data_Nat_Base["_≤_"]["s≤s"](jAgda_Data_Nat_Base["⌊_/2⌋"](x6))(jAgda_Data_Nat_Base["⌊_/2⌋"](x7))(exports["⌊n/2⌋-mono"](x6)(x7)(x8));
                },
                "z≤n": function (x6) {
                  return jAgda_Data_Nat_Base["_≤_"]["z≤n"](jAgda_Data_Nat_Base["⌊_/2⌋"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x4)));
                }
              });
            },
            "z≤n": function (x3) {
              return jAgda_Data_Nat_Base["_≤_"]["z≤n"](jAgda_Data_Nat_Base["⌊_/2⌋"](x1));
            }
          });
        };
      };
    };
  exports["m≤′m+n"] = function (x0) {
      return function (x1) {
        return exports["≤⇒≤′"](x0)(jAgda_Agda_Builtin_Nat["_+_"](x0)(x1))(exports["m≤m+n"](x0)(x1));
      };
    };
  exports["SemiringSolver"]["Polynomial"]["op"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["op"](x0, x1, x2);
          };
        };
      };
    };
  exports["SemiringSolver"]["Normal"]["poly"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["poly"](x0, x1);
        };
      };
    };
  exports["i*j≡1⇒j≡1"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["_312@155729788"] = {};
  exports["_312@155729788"]["n⊓0≡0"] = function (x0) {
      return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
    };
  exports["_6@155729788"] = {};
  exports["_6@155729788"]["refl"] = jAgda_Relation_Binary["DecTotalOrder"]["DTO"]["refl"](undefined)(undefined)(undefined)(jAgda_Data_Nat["decTotalOrder"]);
  exports["⊓-zero"] = jAgda_Data_Product["Σ"]["_,_"](function (x0) {
      return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
    })(function (x0) {
      return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
    });
  exports["absorptive-⊓-⊔"] = jAgda_Data_Product["Σ"]["_,_"](function (x0) {
      return function (x1) {
        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
      };
    })(function (x0) {
      return function (x1) {
        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
      };
    });
  exports["strictTotalOrder"] = jAgda_Relation_Binary["StrictTotalOrder"]["record"]("*")("*")(function (x0) {
      return function (x1) {
        return "*";
      };
    })(jAgda_Relation_Binary["IsStrictTotalOrder"]["record"](jAgda_Relation_Binary_PropositionalEquality_Core["isEquivalence"](jAgda_Agda_Primitive["lzero"])("*"))(exports["<-trans"])(exports["_738@155729788"]["cmp"]));
  exports["⊔-identity"] = jAgda_Data_Product["Σ"]["_,_"](function (x0) {
      return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
    })(function (x0) {
      return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
    });
  exports["isCommutativeSemiring"] = jAgda_Algebra_Structures["IsCommutativeSemiring"]["record"](jAgda_Algebra_Structures["IsCommutativeMonoid"]["record"](jAgda_Algebra_Structures["IsSemigroup"]["record"](jAgda_Relation_Binary_PropositionalEquality_Core["isEquivalence"](jAgda_Agda_Primitive["lzero"])("*"))(function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    })(function (x0) {
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
                              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
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
    }))(function (x0) {
      return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
    })(function (x0) {
      return function (x1) {
        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
      };
    }))(jAgda_Algebra_Structures["IsCommutativeMonoid"]["record"](jAgda_Algebra_Structures["IsSemigroup"]["record"](jAgda_Relation_Binary_PropositionalEquality_Core["isEquivalence"](jAgda_Agda_Primitive["lzero"])("*"))(function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    })(function (x0) {
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
                              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
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
    }))(function (x0) {
      return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
    })(function (x0) {
      return function (x1) {
        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
      };
    }))(function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    })(function (x0) {
      return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
    });
  exports["commutativeSemiring"] = jAgda_Algebra["CommutativeSemiring"]["record"]("*")("*")(jAgda_Agda_Builtin_Nat["_+_"])(jAgda_Agda_Builtin_Nat["_*_"])(0)(1)(exports["isCommutativeSemiring"]);
  exports["SemiringSolver"]["_:+_"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["_:+_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["⟦_⟧H"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["⟦_⟧H"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["_≟N_"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["_≟N_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["sem"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["sem"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["1H"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["1H"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["-H_"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["-H_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["_:-_"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["_:-_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["normalise"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["normalise"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["⟦_⟧N"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["⟦_⟧N"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["solve"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["solve"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["1N"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["1N"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["_⊜_"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["_⊜_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["normalise-con"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["normalise-con"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["-N_"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["-N_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["_*N_"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["_*N_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["_≟H_"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["_≟H_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["⟦_⟧"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["⟦_⟧"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["_:*_"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["_:*_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["_+N_"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["_+N_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["_*HN_"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["_*HN_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["0N"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["0N"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["0H"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["0H"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["_+H_"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["_+H_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["_*H_"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["_*H_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["_*x+HN_"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["_*x+HN_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["⟦_⟧↓"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["⟦_⟧↓"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["_^N_"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["_^N_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["normalise-var"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["normalise-var"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["SemiringSolver"]["_*x+H_"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["_*x+H_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  exports["distrib-⊓-⊔"] = jAgda_Data_Product["Σ"]["_,_"](function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    })(function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    });
  exports["isDistributiveLattice"] = jAgda_Algebra_Structures["IsDistributiveLattice"]["record"](jAgda_Algebra_Structures["IsLattice"]["record"](jAgda_Relation_Binary_PropositionalEquality_Core["isEquivalence"](jAgda_Agda_Primitive["lzero"])("*"))(function (x0) {
      return function (x1) {
        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
      };
    })(function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    })(function (x0) {
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
                              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
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
    })(function (x0) {
      return function (x1) {
        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
      };
    })(function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    })(function (x0) {
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
                              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
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
    })(exports["absorptive-⊓-⊔"]))(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(exports["distrib-⊓-⊔"]));
  exports["distributiveLattice"] = jAgda_Algebra["DistributiveLattice"]["record"]("*")("*")(jAgda_Data_Nat_Base["_⊓_"])(jAgda_Data_Nat_Base["_⊔_"])(exports["isDistributiveLattice"]);
  exports["⊔-⊓-0-isCommutativeSemiringWithoutOne"] = jAgda_Algebra_Structures["IsCommutativeSemiringWithoutOne"]["record"](jAgda_Algebra_Structures["IsSemiringWithoutOne"]["record"](jAgda_Algebra_Structures["IsCommutativeMonoid"]["record"](jAgda_Algebra_Structures["IsSemigroup"]["record"](jAgda_Relation_Binary_PropositionalEquality_Core["isEquivalence"](jAgda_Agda_Primitive["lzero"])("*"))(function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    })(function (x0) {
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
                              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
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
    }))(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(exports["⊔-identity"]))(function (x0) {
      return function (x1) {
        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
      };
    }))(jAgda_Algebra_Structures["IsSemigroup"]["record"](jAgda_Relation_Binary_PropositionalEquality_Core["isEquivalence"](jAgda_Agda_Primitive["lzero"])("*"))(function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    })(function (x0) {
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
                              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
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
    }))(exports["distrib-⊓-⊔"])(exports["⊓-zero"]))(function (x0) {
      return function (x1) {
        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
      };
    });
  exports["⊔-⊓-0-commutativeSemiringWithoutOne"] = jAgda_Algebra["CommutativeSemiringWithoutOne"]["record"]("*")("*")(jAgda_Data_Nat_Base["_⊔_"])(jAgda_Data_Nat_Base["_⊓_"])(0)(exports["⊔-⊓-0-isCommutativeSemiringWithoutOne"]);
  exports["SemiringSolver"]["_*NH_"] = jAgda_Algebra_RingSolver_Simple["_116@67970628"]["_*NH_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Algebra_RingSolver_AlmostCommutativeRing["fromCommutativeSemiring"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(exports["commutativeSemiring"]))(jAgda_Data_Nat_Base["_≟_"]);
  });
