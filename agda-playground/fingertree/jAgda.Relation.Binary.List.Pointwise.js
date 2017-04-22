define(["exports","jAgda.Agda.Builtin.Equality","jAgda.Agda.Primitive","jAgda.Data.Product","jAgda.Function","jAgda.Function.Equality","jAgda.Function.Inverse","jAgda.Relation.Binary","jAgda.Relation.Binary.Core","jAgda.Relation.Binary.PropositionalEquality","jAgda.Relation.Nullary","jAgda.Relation.Nullary.Decidable"],function(exports,jAgda_Agda_Builtin_Equality,jAgda_Agda_Primitive,jAgda_Data_Product,jAgda_Function,jAgda_Function_Equality,jAgda_Function_Inverse,jAgda_Relation_Binary,jAgda_Relation_Binary_Core,jAgda_Relation_Binary_PropositionalEquality,jAgda_Relation_Nullary,jAgda_Relation_Nullary_Decidable) {
  exports["Rel"] = {};
  exports["refl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "[]": function () {
                    return exports["Rel"]["[]"];
                  },
                  "_∷_": function (x6, x7) {
                    return exports["Rel"]["_∷_"](x6)(x7)(x6)(x7)(x4(x6))(exports["refl"](x0)(x1)(x2)(x3)(x4)(x7));
                  }
                });
              };
            };
          };
        };
      };
    };
  exports["setoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary["Setoid"]["record"]("*")("*")(exports["isEquivalence"](x0)(x1)(function (x3) {
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
          })(jAgda_Relation_Binary["Setoid"]["isEquivalence"](undefined)(undefined)(x2)));
        };
      };
    };
  exports["with-664"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                };
              };
            };
          };
        };
      };
    };
  exports["isPartialOrder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary["IsPartialOrder"]["record"](exports["isPreorder"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Relation_Binary["IsPartialOrder"]["isPreorder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)))(exports["antisymmetric"](x0)(x1)(x2)(x3)(x4)(x5)(jAgda_Relation_Binary["IsPartialOrder"]["antisym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)));
                };
              };
            };
          };
        };
      };
    };
  exports["respects₂"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Data_Product["Σ"]["_,_"](exports["_340@172758850"]["resp¹"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["_340@172758850"]["resp²"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
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
  exports["rec"] = function (x0) {
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
                                "[]": function () {
                                  return x9;
                                },
                                "_∷_": function (x13, x14, x15, x16, x17, x18) {
                                  return x8(x13)(x15)(x14)(x16)(x18)(x17)(exports["rec"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x14)(x16)(x18));
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
  exports["poset"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary["Poset"]["record"]("*")("*")("*")(exports["isPartialOrder"](x0)(x1)(x2)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
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
            })(function (x4) {
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
            })(jAgda_Relation_Binary["Poset"]["isPartialOrder"](undefined)(undefined)(undefined)(x3)));
          };
        };
      };
    };
  exports["with-444"] = function (x0) {
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
                                  return jAgda_Relation_Nullary["Dec"]["no"](jAgda_Function["_∘_"](jAgda_Agda_Primitive["_⊔_"](x2)(jAgda_Agda_Primitive["_⊔_"](x1)(x0)))(jAgda_Agda_Primitive["_⊔_"](x2)(jAgda_Agda_Primitive["_⊔_"](x1)(x0)))(jAgda_Agda_Primitive["lzero"])("*")(function (x14) {
                                    return "*";
                                  })(function (x14) {
                                    return function (x15) {
                                      return "*";
                                    };
                                  })(function (x14) {
                                    return x10;
                                  })(exports["tail"](x0)(x1)(x2)(x3)(x4)(x5)(x11)(x12)(x7)(x8)));
                                };
                              };
                            };
                          },
                          "yes": function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return function (x13) {
                                  return jAgda_Relation_Nullary["Dec"]["yes"](exports["Rel"]["_∷_"](x11)(x7)(x12)(x8)(x13)(x10));
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
                            return x11({
                              "[]": function () {
                                return exports["Rel"]["[]"];
                              },
                              "_∷_": function (x12, x13, x14, x15, x16, x17) {
                                return exports["Rel"]["_∷_"](x12)(x13)(x14)(x15)(x8(x12)(x14)(x16))(exports["map"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x13)(x15)(x17));
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
  exports["antisymmetric"] = function (x0) {
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
                            return function (x10) {
                              return x10({
                                "[]": function () {
                                  return exports["Rel"]["[]"];
                                },
                                "_∷_": function () {
                                  return undefined;
                                }
                              });
                            };
                          },
                          "_∷_": function (x10, x11, x12, x13, x14, x15) {
                            return function (x16) {
                              return x16({
                                "[]": function () {
                                  return undefined;
                                },
                                "_∷_": function (x17, x18, x19, x20, x21, x22) {
                                  return exports["Rel"]["_∷_"](x10)(x11)(x12)(x13)(x6(x10)(x12)(x14)(x21))(exports["antisymmetric"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x11)(x13)(x15)(x22));
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
  exports["Rel"]["_∷_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return x6["_∷_"](x0, x1, x2, x3, x4, x5);
                };
              };
            };
          };
        };
      };
    };
  exports["tail"] = function (x0) {
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
                            "[]": function () {
                              return undefined;
                            },
                            "_∷_": function (x11, x12, x13, x14, x15, x16) {
                              return x16;
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
  exports["isPreorder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary["IsPreorder"]["record"](exports["isEquivalence"](x0)(x1)(x3)(x4)(jAgda_Relation_Binary["IsPreorder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)))(exports["reflexive"](x0)(x0)(x1)(x2)(x3)(x3)(x4)(x5)(jAgda_Relation_Binary["IsPreorder"]["reflexive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)))(exports["transitive"](x0)(x0)(x0)(x2)(x2)(x2)(x3)(x3)(x3)(x5)(x5)(x5)(jAgda_Relation_Binary["IsPreorder"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)));
                };
              };
            };
          };
        };
      };
    };
  exports["Rel"]["[]"] = function (x0) {
      return x0["[]"]();
    };
  exports["decSetoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary["DecSetoid"]["record"]("*")("*")(exports["isDecEquivalence"](x0)(x1)(function (x3) {
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
          })(jAgda_Relation_Binary["DecSetoid"]["isDecEquivalence"](undefined)(undefined)(x2)));
        };
      };
    };
  exports["preorder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary["Preorder"]["record"]("*")("*")("*")(exports["isPreorder"](x0)(x1)(x2)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
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
            })(function (x4) {
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
            })(jAgda_Relation_Binary["Preorder"]["isPreorder"](undefined)(undefined)(undefined)(x3)));
          };
        };
      };
    };
  exports["≡⇒Rel≡"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "refl": function () {
                  return exports["refl"](x0)(x0)(x1)("*")(function (x5) {
                    return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                  })(x2);
                }
              });
            };
          };
        };
      };
    };
  exports["with-416"] = function (x0) {
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
                                return jAgda_Relation_Nullary["Dec"]["no"](jAgda_Function["_∘_"](jAgda_Agda_Primitive["_⊔_"](x2)(jAgda_Agda_Primitive["_⊔_"](x1)(x0)))(x2)(jAgda_Agda_Primitive["lzero"])("*")(function (x13) {
                                  return x5(x7)(x8);
                                })(function (x13) {
                                  return function (x14) {
                                    return "*";
                                  };
                                })(function (x13) {
                                  return x10;
                                })(exports["head"](x0)(x1)(x2)(x3)(x4)(x5)(x7)(x8)(x11)(x12)));
                              };
                            };
                          },
                          "yes": function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return exports["with-444"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x11)(x12)(exports["decidable"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x11)(x12))(x7)(x8)(x10);
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
  exports["_700@172758850"] = {};
  exports["_700@172758850"]["_702@172758850"] = {};
  exports["_700@172758850"]["_702@172758850"]["_≟_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Relation_Binary["DecSetoid"]["_218@10167932"]["_≟_"](undefined)(undefined)(exports["decSetoid"](x0)(x0)(jAgda_Relation_Binary_PropositionalEquality["decSetoid"](x0)(x1)(x2)));
            };
          };
        };
      };
    };
  exports["decidable-≡"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Relation_Nullary_Decidable["map′"](x0)(x0)("*")("*")(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                      };
                    };
                  };
                };
              })(exports["≡⇒Rel≡"](x0)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              })(x3)(x4))(exports["_700@172758850"]["_702@172758850"]["_≟_"](x0)(x1)(x2)(x3)(x4)(x3)(x4));
            };
          };
        };
      };
    };
  exports["_340@172758850"] = {};
  exports["_340@172758850"]["resp²"] = function (x0) {
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
                            "[]": function () {
                              return function (x11) {
                                return x11({
                                  "[]": function () {
                                    return exports["Rel"]["[]"];
                                  },
                                  "_∷_": function () {
                                    return undefined;
                                  }
                                });
                              };
                            },
                            "_∷_": function (x11, x12, x13, x14, x15, x16) {
                              return function (x17) {
                                return x17({
                                  "[]": function () {
                                    return undefined;
                                  },
                                  "_∷_": function (x18, x19, x20, x21, x22, x23) {
                                    return exports["Rel"]["_∷_"](x13)(x14)(x20)(x21)(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(x6)(x20)(x11)(x13)(x15)(x22))(exports["_340@172758850"]["resp²"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x21)(x12)(x14)(x16)(x23));
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
  exports["symmetric"] = function (x0) {
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
                            return x11({
                              "[]": function () {
                                return exports["Rel"]["[]"];
                              },
                              "_∷_": function (x12, x13, x14, x15, x16, x17) {
                                return exports["Rel"]["_∷_"](x14)(x15)(x12)(x13)(x8(x12)(x14)(x16))(exports["symmetric"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x13)(x15)(x17));
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
  exports["isEquivalence"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Relation_Binary_Core["IsEquivalence"]["record"](exports["refl"](x0)(x1)(x2)(x3)(jAgda_Relation_Binary_Core["IsEquivalence"]["refl"](undefined)(undefined)(undefined)(undefined)(x4)))(exports["symmetric"](x0)(x0)(x1)(x1)(x2)(x2)(x3)(x3)(jAgda_Relation_Binary_Core["IsEquivalence"]["sym"](undefined)(undefined)(undefined)(undefined)(x4)))(exports["transitive"](x0)(x0)(x0)(x1)(x1)(x1)(x2)(x2)(x2)(x3)(x3)(x3)(jAgda_Relation_Binary_Core["IsEquivalence"]["trans"](undefined)(undefined)(undefined)(undefined)(x4)));
            };
          };
        };
      };
    };
  exports["Rel≡⇒≡"] = function (x0) {
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
  exports["transitive"] = function (x0) {
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
                                      return x16({
                                        "[]": function () {
                                          return function (x17) {
                                            return x17({
                                              "[]": function () {
                                                return exports["Rel"]["[]"];
                                              },
                                              "_∷_": function () {
                                                return undefined;
                                              }
                                            });
                                          };
                                        },
                                        "_∷_": function (x17, x18, x19, x20, x21, x22) {
                                          return function (x23) {
                                            return x23({
                                              "[]": function () {
                                                return undefined;
                                              },
                                              "_∷_": function (x24, x25, x26, x27, x28, x29) {
                                                return exports["Rel"]["_∷_"](x17)(x18)(x26)(x27)(x12(x17)(x19)(x26)(x21)(x28))(exports["transitive"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x10)(x11)(x12)(x18)(x20)(x27)(x22)(x29));
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
          };
        };
      };
    };
  exports["head"] = function (x0) {
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
                            "[]": function () {
                              return undefined;
                            },
                            "_∷_": function (x11, x12, x13, x14, x15, x16) {
                              return x15;
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
  exports["decidable"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return x7({
                      "[]": function () {
                        return function (x8) {
                          return x8({
                            "[]": function () {
                              return jAgda_Relation_Nullary["Dec"]["yes"](exports["Rel"]["[]"]);
                            },
                            "_∷_": function (x9, x10) {
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
                              });
                            }
                          });
                        };
                      },
                      "_∷_": function (x8, x9) {
                        return function (x10) {
                          return x10({
                            "[]": function () {
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
                              });
                            },
                            "_∷_": function (x11, x12) {
                              return exports["with-416"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x8)(x11)(x6(x8)(x11))(x9)(x12);
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
  exports["isDecEquivalence"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Relation_Binary["IsDecEquivalence"]["record"](exports["isEquivalence"](x0)(x1)(x2)(x3)(jAgda_Relation_Binary["IsDecEquivalence"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(x4)))(exports["decidable"](x0)(x0)(x1)(x2)(x2)(x3)(jAgda_Relation_Binary["IsDecEquivalence"]["_≟_"](undefined)(undefined)(undefined)(undefined)(x4)));
            };
          };
        };
      };
    };
  exports["Rel↔≡"] = function (x0) {
      return function (x1) {
        return jAgda_Function_Inverse["Inverse"]["record"](jAgda_Function_Equality["Π"]["record"](jAgda_Function["id"](x0)(function (x2) {
          return function (x3) {
            return function (x4) {
              return "*";
            };
          };
        }))(function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                };
              };
            };
          };
        }))(jAgda_Function_Equality["Π"]["record"](jAgda_Function["id"](x0)(function (x2) {
          return function (x3) {
            return function (x4) {
              return "*";
            };
          };
        }))(exports["≡⇒Rel≡"](x0)(x1)))(jAgda_Function_Inverse["_InverseOf_"]["record"](function (x2) {
          return exports["refl"](x0)(x0)(function (x3) {
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
            return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
          })(jAgda_Function["id"](x0)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(jAgda_Function["id"](x0)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(x2)));
        })(function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        }));
      };
    };
  exports["reflexive"] = function (x0) {
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
                            return x11({
                              "[]": function () {
                                return exports["Rel"]["[]"];
                              },
                              "_∷_": function (x12, x13, x14, x15, x16, x17) {
                                return exports["Rel"]["_∷_"](x12)(x13)(x14)(x15)(x8(x12)(x14)(x16))(exports["reflexive"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x13)(x15)(x17));
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
  exports["_340@172758850"]["resp¹"] = function (x0) {
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
                            "[]": function () {
                              return function (x11) {
                                return x11({
                                  "[]": function () {
                                    return exports["Rel"]["[]"];
                                  },
                                  "_∷_": function () {
                                    return undefined;
                                  }
                                });
                              };
                            },
                            "_∷_": function (x11, x12, x13, x14, x15, x16) {
                              return function (x17) {
                                return x17({
                                  "[]": function () {
                                    return undefined;
                                  },
                                  "_∷_": function (x18, x19, x20, x21, x22, x23) {
                                    return exports["Rel"]["_∷_"](x18)(x19)(x13)(x14)(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(x6)(x18)(x11)(x13)(x15)(x22))(exports["_340@172758850"]["resp¹"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x19)(x12)(x14)(x16)(x23));
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
