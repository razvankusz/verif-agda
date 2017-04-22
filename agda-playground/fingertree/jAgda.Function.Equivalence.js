define(["exports","jAgda.Agda.Builtin.Equality","jAgda.Agda.Primitive","jAgda.Function","jAgda.Function.Equality","jAgda.Relation.Binary","jAgda.Relation.Binary.Core","jAgda.Relation.Binary.PropositionalEquality"],function(exports,jAgda_Agda_Builtin_Equality,jAgda_Agda_Primitive,jAgda_Function,jAgda_Function_Equality,jAgda_Relation_Binary,jAgda_Relation_Binary_Core,jAgda_Relation_Binary_PropositionalEquality) {
  exports["Equivalence"] = {};
  exports["⇔-setoid"] = function (x0) {
      return jAgda_Relation_Binary["Setoid"]["record"]("*")(function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return "*";
            };
          };
        };
      })(jAgda_Relation_Binary_Core["IsEquivalence"]["record"](function (x1) {
        return exports["id"](x0)(x0)(jAgda_Relation_Binary_PropositionalEquality["setoid"](x0)(x1));
      })(function (x1) {
        return function (x2) {
          return exports["sym"](x0)(x0)(x0)(x0)(jAgda_Relation_Binary_PropositionalEquality["setoid"](x0)(x1))(jAgda_Relation_Binary_PropositionalEquality["setoid"](x0)(x2));
        };
      })(function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Function["flip"](x0)(x0)(x0)("*")("*")(function (x4) {
              return function (x5) {
                return "*";
              };
            })(exports["_∘_"](x0)(x0)(x0)(x0)(x0)(x0)(jAgda_Relation_Binary_PropositionalEquality["setoid"](x0)(x1))(jAgda_Relation_Binary_PropositionalEquality["setoid"](x0)(x2))(jAgda_Relation_Binary_PropositionalEquality["setoid"](x0)(x3)));
          };
        };
      }));
    };
  exports["_⇔_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["zip"] = function (x0) {
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
                                  return function (x15) {
                                    return function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return function (x20) {
                                              return function (x21) {
                                                return exports["Equivalence"]["record"](x18(exports["Equivalence"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x20))(exports["Equivalence"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x21)))(x19(exports["Equivalence"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x20))(exports["Equivalence"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x21)));
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
                };
              };
            };
          };
        };
      };
    };
  exports["Equivalence"]["record"] = function (x0) {
      return function (x1) {
        return {
          "from": x1,
          "record": function (x2) {
            return x2["record"](x0, x1);
          },
          "to": x0
        };
      };
    };
  exports["id"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Equivalence"]["record"](jAgda_Function_Equality["id"](x0)(x1)(x2))(jAgda_Function_Equality["id"](x0)(x1)(x2));
        };
      };
    };
  exports["_∘_"] = function (x0) {
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
                          return exports["Equivalence"]["record"](jAgda_Function_Equality["_∘_"](x0)(x1)(x6)(x2)(x3)(x7)(x4)(x5)(x8)(exports["Equivalence"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(exports["Equivalence"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10)))(jAgda_Function_Equality["_∘_"](x4)(x5)(x8)(x2)(x3)(x7)(x0)(x1)(x6)(exports["Equivalence"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10))(exports["Equivalence"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)));
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
  exports["sym"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["Equivalence"]["record"](exports["Equivalence"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(exports["Equivalence"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["Equivalence"]["to"] = function (x0) {
      return x0["to"];
    };
  exports["setoid"] = function (x0) {
      return function (x1) {
        return jAgda_Relation_Binary["Setoid"]["record"]("*")("*")(jAgda_Relation_Binary_Core["IsEquivalence"]["record"](exports["id"](x0)(x1))(exports["sym"](x0)(x1)(x0)(x1))(function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Function["flip"](jAgda_Agda_Primitive["_⊔_"](x1)(x0))(jAgda_Agda_Primitive["_⊔_"](x1)(x0))(jAgda_Agda_Primitive["_⊔_"](x1)(x0))("*")("*")(function (x5) {
                return function (x6) {
                  return "*";
                };
              })(exports["_∘_"](x0)(x1)(x0)(x1)(x0)(x1)(x2)(x3)(x4));
            };
          };
        }));
      };
    };
  exports["Equivalence"]["from"] = function (x0) {
      return x0["from"];
    };
  exports["map"] = function (x0) {
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
                                  return exports["Equivalence"]["record"](x12(exports["Equivalence"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x14)))(x13(exports["Equivalence"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x14)));
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
  exports["equivalence"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return exports["Equivalence"]["record"](jAgda_Relation_Binary_PropositionalEquality["→-to-⟶"](x0)(x1)(x1)(x2)(jAgda_Relation_Binary["Setoid"]["record"](x3)(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    };
                  };
                })(jAgda_Relation_Binary_Core["IsEquivalence"]["record"](function (x6) {
                  return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                })(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                        };
                      };
                    };
                  };
                })(function (x6) {
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
                })))(x4))(jAgda_Relation_Binary_PropositionalEquality["→-to-⟶"](x1)(x0)(x0)(x3)(jAgda_Relation_Binary["Setoid"]["record"](x2)(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    };
                  };
                })(jAgda_Relation_Binary_Core["IsEquivalence"]["record"](function (x6) {
                  return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                })(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                        };
                      };
                    };
                  };
                })(function (x6) {
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
                })))(x5));
              };
            };
          };
        };
      };
    };
  });
