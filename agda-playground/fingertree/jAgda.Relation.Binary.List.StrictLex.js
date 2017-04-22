define(["exports","jAgda.Agda.Builtin.Unit","jAgda.Agda.Primitive","jAgda.Data.Empty","jAgda.Data.Product","jAgda.Data.Sum","jAgda.Function","jAgda.Relation.Binary","jAgda.Relation.Binary.Consequences","jAgda.Relation.Binary.Core","jAgda.Relation.Binary.List.Pointwise","jAgda.Relation.Nullary"],function(exports,jAgda_Agda_Builtin_Unit,jAgda_Agda_Primitive,jAgda_Data_Empty,jAgda_Data_Product,jAgda_Data_Sum,jAgda_Function,jAgda_Relation_Binary,jAgda_Relation_Binary_Consequences,jAgda_Relation_Binary_Core,jAgda_Relation_Binary_List_Pointwise,jAgda_Relation_Nullary) {
  exports["_10@122628600"] = {};
  exports["_10@122628600"]["Lex"] = {};
  exports["<-strictTotalOrder"] = function (x0) {
      return jAgda_Relation_Binary["StrictTotalOrder"]["record"]("*")("*")(function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      })(exports["_10@122628600"]["<-isStrictTotalOrder"](function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return "*";
            };
          };
        };
      })(function (x1) {
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
      })(function (x1) {
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
      })(jAgda_Relation_Binary["StrictTotalOrder"]["isStrictTotalOrder"](undefined)(undefined)(undefined)(x0)));
    };
  exports["_10@122628600"]["≤-total"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["_10@122628600"]["_656@122628600"]["total"](x0)(x1)(x2)(x3)(x4);
            };
          };
        };
      };
    };
  exports["_10@122628600"]["_364@122628600"] = {};
  exports["_10@122628600"]["_364@122628600"]["_426@122628600"] = {};
  exports["_10@122628600"]["_364@122628600"]["_426@122628600"]["Eq"] = {};
  exports["_10@122628600"]["_364@122628600"]["_426@122628600"]["Eq"]["trans"] = function (x0) {
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
                                    return jAgda_Relation_Binary_Core["IsEquivalence"]["trans"](undefined)(undefined)(undefined)(undefined)(x4);
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
  exports["_10@122628600"]["_754@122628600"] = {};
  exports["_10@122628600"]["_754@122628600"]["cmp"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "[]": function () {
                    return function (x6) {
                      return x6({
                        "[]": function () {
                          return jAgda_Relation_Binary_Core["Tri"]["tri≈"](function (x7) {
                            return function (x8) {
                              return function (x9) {
                                return function (x10) {
                                  return undefined;
                                };
                              };
                            };
                          })(jAgda_Relation_Binary_List_Pointwise["Rel"]["[]"])(function (x7) {
                            return function (x8) {
                              return function (x9) {
                                return function (x10) {
                                  return undefined;
                                };
                              };
                            };
                          });
                        },
                        "_∷_": function (x7, x8) {
                          return jAgda_Relation_Binary_Core["Tri"]["tri<"](exports["_10@122628600"]["Lex"]["halt"](x7)(x8))(function (x9) {
                            return function (x10) {
                              return function (x11) {
                                return function (x12) {
                                  return function (x13) {
                                    return function (x14) {
                                      return function (x15) {
                                        return function (x16) {
                                          return undefined;
                                        };
                                      };
                                    };
                                  };
                                };
                              };
                            };
                          })(function (x9) {
                            return function (x10) {
                              return function (x11) {
                                return function (x12) {
                                  return function (x13) {
                                    return function (x14) {
                                      return function (x15) {
                                        return function (x16) {
                                          return undefined;
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
                  "_∷_": function (x6, x7) {
                    return function (x8) {
                      return x8({
                        "[]": function () {
                          return jAgda_Relation_Binary_Core["Tri"]["tri>"](function (x9) {
                            return function (x10) {
                              return function (x11) {
                                return function (x12) {
                                  return function (x13) {
                                    return function (x14) {
                                      return function (x15) {
                                        return function (x16) {
                                          return undefined;
                                        };
                                      };
                                    };
                                  };
                                };
                              };
                            };
                          })(function (x9) {
                            return function (x10) {
                              return function (x11) {
                                return function (x12) {
                                  return function (x13) {
                                    return function (x14) {
                                      return function (x15) {
                                        return function (x16) {
                                          return undefined;
                                        };
                                      };
                                    };
                                  };
                                };
                              };
                            };
                          })(exports["_10@122628600"]["Lex"]["halt"](x6)(x7));
                        },
                        "_∷_": function (x9, x10) {
                          return exports["_10@122628600"]["_754@122628600"]["with-774"](x0)(x1)(x2)(x3)(x4)(x6)(x9)(x4(x6)(x9))(x7)(x10);
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
  exports["_10@122628600"]["_754@122628600"][".absurdlambda"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return undefined;
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_10@122628600"]["_946@122628600"] = {};
  exports["_10@122628600"]["_946@122628600"]["_948@122628600"] = {};
  exports["_10@122628600"]["_946@122628600"]["_948@122628600"]["Eq"] = {};
  exports["_10@122628600"]["_946@122628600"]["_948@122628600"]["Eq"]["sym"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary["IsStrictTotalOrder"]["Eq"]["sym"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x0)(x1)(x2)(x3);
          };
        };
      };
    };
  exports["_10@122628600"]["_364@122628600"]["_426@122628600"]["Eq"]["sym"] = function (x0) {
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
                                    return jAgda_Relation_Binary_Core["IsEquivalence"]["sym"](undefined)(undefined)(undefined)(undefined)(x4);
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
  exports["_10@122628600"]["<-irreflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return undefined;
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["≤-preorder"] = function (x0) {
      return jAgda_Relation_Binary["Preorder"]["record"]("*")("*")(function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      })(exports["_10@122628600"]["≤-isPreorder"](function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return "*";
            };
          };
        };
      })(function (x1) {
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
      })(function (x1) {
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
      })(jAgda_Relation_Binary["Preorder"]["_94@10167932"]["isEquivalence"](undefined)(undefined)(undefined)(x0))(jAgda_Relation_Binary["Preorder"]["_94@10167932"]["trans"](undefined)(undefined)(undefined)(x0))(exports["_1112@122628600"]["_1114@122628600"]["∼-resp-≈"](x0)));
    };
  exports["_10@122628600"]["Lex-<"] = function (x0) {
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
  exports["_10@122628600"]["_656@122628600"] = {};
  exports["_10@122628600"]["_656@122628600"]["total"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "[]": function () {
                    return function (x6) {
                      return x6({
                        "[]": function () {
                          return jAgda_Data_Sum["_⊎_"]["inj₁"](exports["_10@122628600"]["Lex"]["base"](jAgda_Agda_Builtin_Unit["⊤"]["tt"]));
                        },
                        "_∷_": function (x7, x8) {
                          return jAgda_Data_Sum["_⊎_"]["inj₁"](exports["_10@122628600"]["Lex"]["halt"](x7)(x8));
                        }
                      });
                    };
                  },
                  "_∷_": function (x6, x7) {
                    return function (x8) {
                      return x8({
                        "[]": function () {
                          return jAgda_Data_Sum["_⊎_"]["inj₂"](exports["_10@122628600"]["Lex"]["halt"](x6)(x7));
                        },
                        "_∷_": function (x9, x10) {
                          return exports["_10@122628600"]["_656@122628600"]["with-676"](x0)(x1)(x2)(x3)(x4)(x6)(x9)(x4(x6)(x9))(x7)(x10);
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
  exports["_10@122628600"]["_364@122628600"]["_392@122628600"] = {};
  exports["_10@122628600"]["_364@122628600"]["_392@122628600"]["Eq"] = {};
  exports["_10@122628600"]["_364@122628600"]["_392@122628600"]["Eq"]["trans"] = function (x0) {
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
                                    return jAgda_Relation_Binary_Core["IsEquivalence"]["trans"](undefined)(undefined)(undefined)(undefined)(x4);
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
  exports["_10@122628600"]["Lex"]["halt"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["halt"](x0, x1);
        };
      };
    };
  exports["_10@122628600"]["with-544"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "no": function (x6) {
                    return function (x7) {
                      return function (x8) {
                        return function (x9) {
                          return function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return function (x13) {
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
                                };
                              };
                            };
                          };
                        };
                      };
                    };
                  },
                  "yes": function (x6) {
                    return function (x7) {
                      return function (x8) {
                        return function (x9) {
                          return function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return function (x13) {
                                  return exports["_10@122628600"]["with-584"](x0)(x3)(x4)(x7)(x8)(x10)(x11)(x12)(x13)(exports["_10@122628600"]["decidable"](x0)(x10)(x3)(x7)(x11)(x4)(x8)(x12)(x13))(x1)(x2)(x6)(x9);
                                };
                              };
                            };
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
  exports["_10@122628600"]["_754@122628600"][".absurdlambda"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return undefined;
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_10@122628600"]["decidable"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "no": function (x5) {
                  return function (x6) {
                    return function (x7) {
                      return function (x8) {
                        return x8({
                          "[]": function () {
                            return function (x9) {
                              return x9({
                                "[]": function () {
                                  return jAgda_Relation_Nullary["Dec"]["no"](function (x10) {
                                    return function (x11) {
                                      return function (x12) {
                                        return function (x13) {
                                          return function (x14) {
                                            return function (x15) {
                                              return function (x16) {
                                                return function (x17) {
                                                  return undefined;
                                                };
                                              };
                                            };
                                          };
                                        };
                                      };
                                    };
                                  });
                                },
                                "_∷_": function (x10, x11) {
                                  return jAgda_Relation_Nullary["Dec"]["yes"](exports["_10@122628600"]["Lex"]["halt"](x10)(x11));
                                }
                              });
                            };
                          },
                          "_∷_": function (x9, x10) {
                            return function (x11) {
                              return x11({
                                "[]": function () {
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
                                "_∷_": function (x12, x13) {
                                  return exports["_10@122628600"]["with-508"](x0)(x3)(x7)(x9)(x12)(x7(x9)(x12))(x1)(x2)(x4)(x6)(x10)(x13);
                                }
                              });
                            };
                          }
                        });
                      };
                    };
                  };
                },
                "yes": function (x5) {
                  return function (x6) {
                    return function (x7) {
                      return function (x8) {
                        return x8({
                          "[]": function () {
                            return function (x9) {
                              return x9({
                                "[]": function () {
                                  return jAgda_Relation_Nullary["Dec"]["yes"](exports["_10@122628600"]["Lex"]["base"](x5));
                                },
                                "_∷_": function (x10, x11) {
                                  return jAgda_Relation_Nullary["Dec"]["yes"](exports["_10@122628600"]["Lex"]["halt"](x10)(x11));
                                }
                              });
                            };
                          },
                          "_∷_": function (x9, x10) {
                            return function (x11) {
                              return x11({
                                "[]": function () {
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
                                "_∷_": function (x12, x13) {
                                  return exports["_10@122628600"]["with-508"](x0)(x3)(x7)(x9)(x12)(x7(x9)(x12))(x1)(x2)(x4)(x6)(x10)(x13);
                                }
                              });
                            };
                          }
                        });
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
  exports["_10@122628600"]["_656@122628600"]["with-710"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return x7({
                      "inj₁": function (x8) {
                        return function (x9) {
                          return function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return function (x13) {
                                  return jAgda_Data_Sum["_⊎_"]["inj₁"](exports["_10@122628600"]["Lex"]["next"](x9)(x5)(x10)(x6)(x12)(x8));
                                };
                              };
                            };
                          };
                        };
                      },
                      "inj₂": function (x8) {
                        return function (x9) {
                          return function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return function (x13) {
                                  return jAgda_Data_Sum["_⊎_"]["inj₂"](exports["_10@122628600"]["Lex"]["next"](x10)(x6)(x9)(x5)(x3(x9)(x10)(x12))(x8));
                                };
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
  exports["_10@122628600"]["_754@122628600"]["with-774"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return x7({
                      "tri<": function (x8, x9, x10) {
                        return function (x11) {
                          return function (x12) {
                            return jAgda_Relation_Binary_Core["Tri"]["tri<"](exports["_10@122628600"]["Lex"]["this"](x5)(x11)(x6)(x12)(x8))(jAgda_Function["_∘_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")(function (x13) {
                              return x1(x5)(x6);
                            })(function (x13) {
                              return function (x14) {
                                return "*";
                              };
                            })(function (x13) {
                              return x9;
                            })(jAgda_Relation_Binary_List_Pointwise["head"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x0)(x0)(x1)(x5)(x6)(x11)(x12)))(function (x13) {
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
                            });
                          };
                        };
                      },
                      "tri>": function (x8, x9, x10) {
                        return function (x11) {
                          return function (x12) {
                            return jAgda_Relation_Binary_Core["Tri"]["tri>"](function (x13) {
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
                            })(jAgda_Function["_∘_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")(function (x13) {
                              return x1(x5)(x6);
                            })(function (x13) {
                              return function (x14) {
                                return "*";
                              };
                            })(function (x13) {
                              return x9;
                            })(jAgda_Relation_Binary_List_Pointwise["head"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x0)(x0)(x1)(x5)(x6)(x11)(x12)))(exports["_10@122628600"]["Lex"]["this"](x6)(x12)(x5)(x11)(x10));
                          };
                        };
                      },
                      "tri≈": function (x8, x9, x10) {
                        return function (x11) {
                          return function (x12) {
                            return exports["_10@122628600"]["_754@122628600"]["with-820"](x0)(x1)(x2)(x3)(x4)(x11)(x12)(exports["_10@122628600"]["_754@122628600"]["cmp"](x0)(x1)(x2)(x3)(x4)(x11)(x12))(x5)(x6)(x8)(x9)(x10);
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
  exports["_10@122628600"]["<-isStrictPartialOrder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary["IsStrictPartialOrder"]["record"](jAgda_Relation_Binary_List_Pointwise["isEquivalence"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x0)(x1)(jAgda_Relation_Binary["IsStrictPartialOrder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3)))(function (x4) {
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
            })(exports["_10@122628600"]["transitive"](x0)("*")(x1)(x2)(jAgda_Relation_Binary["IsStrictPartialOrder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3))(jAgda_Relation_Binary["IsStrictPartialOrder"]["<-resp-≈"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3))(jAgda_Relation_Binary["IsStrictPartialOrder"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3)))(exports["_10@122628600"]["respects₂"](x0)("*")(x1)(x2)(jAgda_Relation_Binary["IsStrictPartialOrder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3))(jAgda_Relation_Binary["IsStrictPartialOrder"]["<-resp-≈"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3)));
          };
        };
      };
    };
  exports["_10@122628600"]["¬[]<[]"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return undefined;
          };
        };
      };
    };
  exports["_10@122628600"]["<-isStrictTotalOrder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary["IsStrictTotalOrder"]["record"](jAgda_Relation_Binary_List_Pointwise["isEquivalence"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x0)(x1)(jAgda_Relation_Binary["IsStrictTotalOrder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3)))(exports["_10@122628600"]["transitive"](x0)("*")(x1)(x2)(jAgda_Relation_Binary["IsStrictTotalOrder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3))(exports["_10@122628600"]["_1070@122628600"]["_1072@122628600"]["<-resp-≈"](x0)(x1)(x2)(x3))(jAgda_Relation_Binary["IsStrictTotalOrder"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3)))(exports["_10@122628600"]["<-compare"](x0)(x1)(x2)(exports["_10@122628600"]["_1070@122628600"]["_1072@122628600"]["Eq"]["sym"](x0)(x1)(x2)(x3))(jAgda_Relation_Binary["IsStrictTotalOrder"]["compare"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3)));
          };
        };
      };
    };
  exports["_10@122628600"]["<-decidable"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["_10@122628600"]["decidable"](x0)("*")(x1)(x2)(jAgda_Relation_Nullary["Dec"]["no"](jAgda_Function["id"](jAgda_Agda_Primitive["lzero"])("*")));
        };
      };
    };
  exports["_10@122628600"]["≤-isPreorder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return jAgda_Relation_Binary["IsPreorder"]["record"](jAgda_Relation_Binary_List_Pointwise["isEquivalence"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x0)(x1)(x3))(exports["_10@122628600"]["≤-reflexive"](x0)(x1)(x2))(exports["_10@122628600"]["transitive"](x0)("*")(x1)(x2)(x3)(x5)(x4));
              };
            };
          };
        };
      };
    };
  exports["≤-partialOrder"] = function (x0) {
      return jAgda_Relation_Binary["Poset"]["record"]("*")("*")(function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      })(exports["_10@122628600"]["≤-isPartialOrder"](function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return "*";
            };
          };
        };
      })(function (x1) {
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
      })(function (x1) {
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
      })(jAgda_Relation_Binary["StrictPartialOrder"]["isStrictPartialOrder"](undefined)(undefined)(undefined)(x0)));
    };
  exports["_10@122628600"]["≤-isPartialOrder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary["IsPartialOrder"]["record"](exports["_10@122628600"]["≤-isPreorder"](x0)(x1)(x2)(jAgda_Relation_Binary["IsStrictPartialOrder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3))(jAgda_Relation_Binary["IsStrictPartialOrder"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3))(jAgda_Relation_Binary["IsStrictPartialOrder"]["<-resp-≈"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3)))(exports["_10@122628600"]["antisymmetric"](x0)("*")(x1)(x2)(jAgda_Relation_Binary["IsStrictPartialOrder"]["Eq"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3))(function (x4) {
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
            })(function (x4) {
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
            }));
          };
        };
      };
    };
  exports["_10@122628600"]["<-compare"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["_10@122628600"]["_754@122628600"]["cmp"](x0)(x1)(x2)(x3)(x4);
            };
          };
        };
      };
    };
  exports["_10@122628600"]["_992@122628600"] = {};
  exports["_10@122628600"]["_992@122628600"]["_994@122628600"] = {};
  exports["_10@122628600"]["_992@122628600"]["_994@122628600"]["_≟_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary["IsStrictTotalOrder"]["_≟_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x0)(x1)(x2)(x3);
          };
        };
      };
    };
  exports["_10@122628600"]["_754@122628600"]["with-820"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return x7({
                      "tri<": function (x8, x9, x10) {
                        return function (x11) {
                          return function (x12) {
                            return function (x13) {
                              return function (x14) {
                                return function (x15) {
                                  return jAgda_Relation_Binary_Core["Tri"]["tri<"](exports["_10@122628600"]["Lex"]["next"](x11)(x5)(x12)(x6)(x14)(x8))(jAgda_Function["_∘_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")(function (x16) {
                                    return "*";
                                  })(function (x16) {
                                    return function (x17) {
                                      return "*";
                                    };
                                  })(function (x16) {
                                    return x9;
                                  })(jAgda_Relation_Binary_List_Pointwise["tail"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x0)(x0)(x1)(x11)(x12)(x5)(x6)))(function (x16) {
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
                                };
                              };
                            };
                          };
                        };
                      },
                      "tri>": function (x8, x9, x10) {
                        return function (x11) {
                          return function (x12) {
                            return function (x13) {
                              return function (x14) {
                                return function (x15) {
                                  return jAgda_Relation_Binary_Core["Tri"]["tri>"](function (x16) {
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
                                  })(jAgda_Function["_∘_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")(function (x16) {
                                    return "*";
                                  })(function (x16) {
                                    return function (x17) {
                                      return "*";
                                    };
                                  })(function (x16) {
                                    return x9;
                                  })(jAgda_Relation_Binary_List_Pointwise["tail"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x0)(x0)(x1)(x11)(x12)(x5)(x6)))(exports["_10@122628600"]["Lex"]["next"](x12)(x6)(x11)(x5)(x3(x11)(x12)(x14))(x10));
                                };
                              };
                            };
                          };
                        };
                      },
                      "tri≈": function (x8, x9, x10) {
                        return function (x11) {
                          return function (x12) {
                            return function (x13) {
                              return function (x14) {
                                return function (x15) {
                                  return jAgda_Relation_Binary_Core["Tri"]["tri≈"](function (x16) {
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
                                  })(jAgda_Relation_Binary_List_Pointwise["Rel"]["_∷_"](x11)(x5)(x12)(x6)(x14)(x9))(function (x16) {
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
                                };
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
  exports["_10@122628600"]["_1070@122628600"] = {};
  exports["_10@122628600"]["_1070@122628600"]["_1072@122628600"] = {};
  exports["_10@122628600"]["_1070@122628600"]["_1072@122628600"]["<-resp-≈"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary["IsStrictTotalOrder"]["<-resp-≈"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x0)(x1)(x2)(x3);
          };
        };
      };
    };
  exports["_10@122628600"]["_364@122628600"]["resp²"] = function (x0) {
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
                              return x10;
                            };
                          },
                          "_∷_": function (x10, x11, x12, x13, x14, x15) {
                            return function (x16) {
                              return x16({
                                "base": function () {
                                  return undefined;
                                },
                                "halt": function () {
                                  return undefined;
                                },
                                "next": function (x17, x18, x19, x20, x21, x22) {
                                  return exports["_10@122628600"]["Lex"]["next"](x12)(x13)(x19)(x20)(exports["_10@122628600"]["_364@122628600"]["_426@122628600"]["Eq"]["trans"](x0)(x1)(x2)(x3)(x4)(x5)(x10)(x11)(x19)(x20)(x12)(x13)(x14)(x15)(x21)(x22)(x12)(x10)(x19)(exports["_10@122628600"]["_364@122628600"]["_426@122628600"]["Eq"]["sym"](x0)(x1)(x2)(x3)(x4)(x5)(x10)(x11)(x19)(x20)(x12)(x13)(x14)(x15)(x21)(x22)(x10)(x12)(x14))(x21))(exports["_10@122628600"]["_364@122628600"]["resp²"](x0)(x1)(x2)(x3)(x4)(x5)(x20)(x11)(x13)(x15)(x22));
                                },
                                "this": function (x17, x18, x19, x20, x21) {
                                  return exports["_10@122628600"]["Lex"]["this"](x12)(x13)(x19)(x20)(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(x5)(x19)(x10)(x12)(x14)(x21));
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
  exports["_10@122628600"][".extendedlambda0"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return undefined;
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_10@122628600"]["_656@122628600"]["with-676"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return x7({
                      "tri<": function (x8, x9, x10) {
                        return function (x11) {
                          return function (x12) {
                            return jAgda_Data_Sum["_⊎_"]["inj₁"](exports["_10@122628600"]["Lex"]["this"](x5)(x11)(x6)(x12)(x8));
                          };
                        };
                      },
                      "tri>": function (x8, x9, x10) {
                        return function (x11) {
                          return function (x12) {
                            return jAgda_Data_Sum["_⊎_"]["inj₂"](exports["_10@122628600"]["Lex"]["this"](x6)(x12)(x5)(x11)(x10));
                          };
                        };
                      },
                      "tri≈": function (x8, x9, x10) {
                        return function (x11) {
                          return function (x12) {
                            return exports["_10@122628600"]["_656@122628600"]["with-710"](x0)(x1)(x2)(x3)(x4)(x11)(x12)(exports["_10@122628600"]["_656@122628600"]["total"](x0)(x1)(x2)(x3)(x4)(x11)(x12))(x5)(x6)(x8)(x9)(x10);
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
  exports["_10@122628600"]["_754@122628600"][".absurdlambda"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return undefined;
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_10@122628600"]["_754@122628600"][".absurdlambda"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return undefined;
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_10@122628600"]["¬≤-next"] = function (x0) {
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
  exports["_1112@122628600"] = {};
  exports["_1112@122628600"]["_1114@122628600"] = {};
  exports["_1112@122628600"]["_1114@122628600"]["∼-resp-≈"] = function (x0) {
      return jAgda_Relation_Binary["Preorder"]["_94@10167932"]["∼-resp-≈"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x0);
    };
  exports["_10@122628600"]["Lex"]["base"] = function (x0) {
      return function (x1) {
        return x1["base"](x0);
      };
    };
  exports["_10@122628600"]["≤-isTotalOrder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary["IsTotalOrder"]["record"](exports["_10@122628600"]["≤-isPartialOrder"](x0)(x1)(x2)(jAgda_Relation_Binary["IsStrictPartialOrder"]["record"](jAgda_Relation_Binary["IsStrictTotalOrder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3))(function (x4) {
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
            })(jAgda_Relation_Binary["IsStrictTotalOrder"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3))(exports["_10@122628600"]["_946@122628600"]["_948@122628600"]["<-resp-≈"](x0)(x1)(x2)(x3))))(exports["_10@122628600"]["≤-total"](x0)(x1)(x2)(exports["_10@122628600"]["_946@122628600"]["_948@122628600"]["Eq"]["sym"](x0)(x1)(x2)(x3))(jAgda_Relation_Binary["IsStrictTotalOrder"]["compare"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3)));
          };
        };
      };
    };
  exports["_10@122628600"]["_266@122628600"] = {};
  exports["_10@122628600"]["_266@122628600"]["as"] = function (x0) {
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
                              "base": function (x12) {
                                return function (x13) {
                                  return x13({
                                    "base": function (x14) {
                                      return jAgda_Relation_Binary_List_Pointwise["Rel"]["[]"];
                                    },
                                    "halt": function () {
                                      return undefined;
                                    },
                                    "next": function () {
                                      return undefined;
                                    },
                                    "this": function () {
                                      return undefined;
                                    }
                                  });
                                };
                              },
                              "halt": function (x12, x13) {
                                return function (x14) {
                                  return undefined;
                                };
                              },
                              "next": function (x12, x13, x14, x15, x16, x17) {
                                return function (x18) {
                                  return x18({
                                    "base": function () {
                                      return undefined;
                                    },
                                    "halt": function () {
                                      return undefined;
                                    },
                                    "next": function (x19, x20, x21, x22, x23, x24) {
                                      return jAgda_Relation_Binary_List_Pointwise["Rel"]["_∷_"](x12)(x13)(x14)(x15)(x16)(exports["_10@122628600"]["_266@122628600"]["as"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x13)(x15)(x17)(x24));
                                    },
                                    "this": function (x19, x20, x21, x22, x23) {
                                      return jAgda_Data_Empty["⊥-elim"](jAgda_Agda_Primitive["lzero"])("*")(x5(x14)(x12)(x4(x12)(x14)(x16))(x23));
                                    }
                                  });
                                };
                              },
                              "this": function (x12, x13, x14, x15, x16) {
                                return function (x17) {
                                  return x17({
                                    "base": function () {
                                      return undefined;
                                    },
                                    "halt": function () {
                                      return undefined;
                                    },
                                    "next": function (x18, x19, x20, x21, x22, x23) {
                                      return jAgda_Data_Empty["⊥-elim"](jAgda_Agda_Primitive["lzero"])("*")(x5(x12)(x14)(x4(x14)(x12)(x22))(x16));
                                    },
                                    "this": function (x18, x19, x20, x21, x22) {
                                      return jAgda_Data_Empty["⊥-elim"](jAgda_Agda_Primitive["lzero"])("*")(x6(x12)(x14)(x16)(x22));
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
  exports["_10@122628600"]["Lex"]["next"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return x6["next"](x0, x1, x2, x3, x4, x5);
                };
              };
            };
          };
        };
      };
    };
  exports["_10@122628600"]["_312@122628600"] = {};
  exports["_10@122628600"]["_312@122628600"]["asym"] = function (x0) {
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
  exports["_10@122628600"][".absurdlambda"] = function (x0) {
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
  exports["_10@122628600"]["antisymmetric"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["_10@122628600"]["_266@122628600"]["as"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x7)(x8);
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_10@122628600"]["_312@122628600"]["irrefl"] = function (x0) {
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
  exports["_10@122628600"]["with-584"] = function (x0) {
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
                                    return jAgda_Relation_Nullary["Dec"]["yes"](exports["_10@122628600"]["Lex"]["next"](x11)(x7)(x12)(x8)(x13)(x10));
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
  exports["_10@122628600"]["<-asymmetric"] = function (x0) {
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
  exports["_10@122628600"]["≤-isDecTotalOrder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary["IsDecTotalOrder"]["record"](exports["_10@122628600"]["≤-isTotalOrder"](x0)(x1)(x2)(x3))(jAgda_Relation_Binary_List_Pointwise["decidable"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x0)(x0)(x1)(exports["_10@122628600"]["_992@122628600"]["_994@122628600"]["_≟_"](x0)(x1)(x2)(x3)))(exports["_10@122628600"]["≤-decidable"](x0)(x1)(x2)(exports["_10@122628600"]["_992@122628600"]["_994@122628600"]["_≟_"](x0)(x1)(x2)(x3))(jAgda_Relation_Binary_Consequences["tri⟶dec<"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x0)(x1)(x2)(jAgda_Relation_Binary["IsStrictTotalOrder"]["compare"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x3))));
          };
        };
      };
    };
  exports["_10@122628600"]["_946@122628600"]["_948@122628600"]["<-resp-≈"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary["IsStrictTotalOrder"]["<-resp-≈"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x0)(x1)(x2)(x3);
          };
        };
      };
    };
  exports["_10@122628600"]["≤-reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "[]": function () {
                    return exports["_10@122628600"]["Lex"]["base"](jAgda_Agda_Builtin_Unit["⊤"]["tt"]);
                  },
                  "_∷_": function (x6, x7, x8, x9, x10, x11) {
                    return exports["_10@122628600"]["Lex"]["next"](x6)(x7)(x8)(x9)(x10)(exports["_10@122628600"]["≤-reflexive"](x0)(x1)(x2)(x7)(x9)(x11));
                  }
                });
              };
            };
          };
        };
      };
    };
  exports["_10@122628600"]["_364@122628600"]["resp¹"] = function (x0) {
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
                              return x10;
                            };
                          },
                          "_∷_": function (x10, x11, x12, x13, x14, x15) {
                            return function (x16) {
                              return x16({
                                "base": function () {
                                  return undefined;
                                },
                                "halt": function (x17, x18) {
                                  return exports["_10@122628600"]["Lex"]["halt"](x12)(x13);
                                },
                                "next": function (x17, x18, x19, x20, x21, x22) {
                                  return exports["_10@122628600"]["Lex"]["next"](x17)(x18)(x12)(x13)(exports["_10@122628600"]["_364@122628600"]["_392@122628600"]["Eq"]["trans"](x0)(x1)(x2)(x3)(x4)(x5)(x10)(x11)(x17)(x18)(x12)(x13)(x14)(x15)(x21)(x22)(x17)(x10)(x12)(x21)(x14))(exports["_10@122628600"]["_364@122628600"]["resp¹"](x0)(x1)(x2)(x3)(x4)(x5)(x18)(x11)(x13)(x15)(x22));
                                },
                                "this": function (x17, x18, x19, x20, x21) {
                                  return exports["_10@122628600"]["Lex"]["this"](x17)(x18)(x12)(x13)(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(x5)(x17)(x10)(x12)(x14)(x21));
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
  exports["_10@122628600"]["_206@122628600"] = {};
  exports["_10@122628600"]["_206@122628600"]["trans"] = function (x0) {
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
                                return x13({
                                  "base": function (x14) {
                                    return function (x15) {
                                      return x15({
                                        "base": function (x16) {
                                          return exports["_10@122628600"]["Lex"]["base"](x14);
                                        },
                                        "halt": function (x16, x17) {
                                          return exports["_10@122628600"]["Lex"]["halt"](x16)(x17);
                                        },
                                        "next": function () {
                                          return undefined;
                                        },
                                        "this": function () {
                                          return undefined;
                                        }
                                      });
                                    };
                                  },
                                  "halt": function (x14, x15) {
                                    return function (x16) {
                                      return x16({
                                        "base": function () {
                                          return undefined;
                                        },
                                        "halt": function () {
                                          return undefined;
                                        },
                                        "next": function (x17, x18, x19, x20, x21, x22) {
                                          return exports["_10@122628600"]["Lex"]["halt"](x19)(x20);
                                        },
                                        "this": function (x17, x18, x19, x20, x21) {
                                          return exports["_10@122628600"]["Lex"]["halt"](x19)(x20);
                                        }
                                      });
                                    };
                                  },
                                  "next": function (x14, x15, x16, x17, x18, x19) {
                                    return function (x20) {
                                      return x20({
                                        "base": function () {
                                          return undefined;
                                        },
                                        "halt": function () {
                                          return undefined;
                                        },
                                        "next": function (x21, x22, x23, x24, x25, x26) {
                                          return exports["_10@122628600"]["Lex"]["next"](x14)(x15)(x23)(x24)(jAgda_Relation_Binary_Core["IsEquivalence"]["trans"](undefined)(undefined)(undefined)(undefined)(x4)(x14)(x16)(x23)(x18)(x25))(exports["_10@122628600"]["_206@122628600"]["trans"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x15)(x17)(x24)(x19)(x26));
                                        },
                                        "this": function (x21, x22, x23, x24, x25) {
                                          return exports["_10@122628600"]["Lex"]["this"](x14)(x15)(x23)(x24)(jAgda_Data_Product["Σ"]["proj₂"](undefined)(undefined)(undefined)(undefined)(x5)(x23)(x16)(x14)(jAgda_Relation_Binary_Core["IsEquivalence"]["sym"](undefined)(undefined)(undefined)(undefined)(x4)(x14)(x16)(x18))(x25));
                                        }
                                      });
                                    };
                                  },
                                  "this": function (x14, x15, x16, x17, x18) {
                                    return function (x19) {
                                      return x19({
                                        "base": function () {
                                          return undefined;
                                        },
                                        "halt": function () {
                                          return undefined;
                                        },
                                        "next": function (x20, x21, x22, x23, x24, x25) {
                                          return exports["_10@122628600"]["Lex"]["this"](x14)(x15)(x22)(x23)(jAgda_Data_Product["Σ"]["proj₁"](undefined)(undefined)(undefined)(undefined)(x5)(x14)(x16)(x22)(x24)(x18));
                                        },
                                        "this": function (x20, x21, x22, x23, x24) {
                                          return exports["_10@122628600"]["Lex"]["this"](x14)(x15)(x22)(x23)(x6(x14)(x16)(x22)(x18)(x24));
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
  exports["<-strictPartialOrder"] = function (x0) {
      return jAgda_Relation_Binary["StrictPartialOrder"]["record"]("*")("*")(function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      })(exports["_10@122628600"]["<-isStrictPartialOrder"](function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return "*";
            };
          };
        };
      })(function (x1) {
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
      })(function (x1) {
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
      })(jAgda_Relation_Binary["StrictPartialOrder"]["isStrictPartialOrder"](undefined)(undefined)(undefined)(x0)));
    };
  exports["_10@122628600"]["transitive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["_10@122628600"]["_206@122628600"]["trans"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x7)(x8)(x9);
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
  exports["_10@122628600"]["with-508"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "no": function (x6) {
                    return function (x7) {
                      return function (x8) {
                        return function (x9) {
                          return function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return exports["_10@122628600"]["with-544"](x0)(x3)(x4)(x8)(x10)(x10(x3)(x4))(x1)(x2)(x6)(x7)(x9)(x11)(x12);
                              };
                            };
                          };
                        };
                      };
                    };
                  },
                  "yes": function (x6) {
                    return function (x7) {
                      return function (x8) {
                        return function (x9) {
                          return function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return jAgda_Relation_Nullary["Dec"]["yes"](exports["_10@122628600"]["Lex"]["this"](x3)(x11)(x4)(x12)(x6));
                              };
                            };
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
  exports["_10@122628600"]["¬≤-this"] = function (x0) {
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
  exports["_10@122628600"]["respects₂"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return jAgda_Data_Product["Σ"]["_,_"](exports["_10@122628600"]["_364@122628600"]["resp¹"](x0)(x1)(x2)(x3)(x4)(x5))(exports["_10@122628600"]["_364@122628600"]["resp²"](x0)(x1)(x2)(x3)(x4)(x5));
              };
            };
          };
        };
      };
    };
  exports["_10@122628600"]["_1070@122628600"]["_1072@122628600"]["Eq"] = {};
  exports["_10@122628600"]["_1070@122628600"]["_1072@122628600"]["Eq"]["sym"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary["IsStrictTotalOrder"]["Eq"]["sym"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x0)(x1)(x2)(x3);
          };
        };
      };
    };
  exports["_10@122628600"]["Lex-≤"] = function (x0) {
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
  exports["≤-decTotalOrder"] = function (x0) {
      return jAgda_Relation_Binary["DecTotalOrder"]["record"]("*")("*")(function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      })(exports["_10@122628600"]["≤-isDecTotalOrder"](function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return "*";
            };
          };
        };
      })(function (x1) {
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
      })(function (x1) {
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
      })(jAgda_Relation_Binary["StrictTotalOrder"]["isStrictTotalOrder"](undefined)(undefined)(undefined)(x0)));
    };
  exports["_10@122628600"]["Lex"]["this"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5["this"](x0, x1, x2, x3, x4);
              };
            };
          };
        };
      };
    };
  exports["_10@122628600"]["≤-decidable"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["_10@122628600"]["decidable"](x0)("*")(x1)(x2)(jAgda_Relation_Nullary["Dec"]["yes"](jAgda_Agda_Builtin_Unit["⊤"]["tt"]));
        };
      };
    };
  });
