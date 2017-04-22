define(["exports","jAgda.Agda.Builtin.Equality","jAgda.Agda.Builtin.Nat","jAgda.Agda.Primitive","jAgda.Data.Product","jAgda.Data.Vec","jAgda.Function","jAgda.Function.Equivalence"],function(exports,jAgda_Agda_Builtin_Equality,jAgda_Agda_Builtin_Nat,jAgda_Agda_Primitive,jAgda_Data_Product,jAgda_Data_Vec,jAgda_Function,jAgda_Function_Equivalence) {
  exports["N-ary-level"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "suc": function (x3) {
              return jAgda_Agda_Primitive["_⊔_"](x0)(exports["N-ary-level"](x0)(x1)(x3));
            },
            "zero": function () {
              return x1;
            }
          });
        };
      };
    };
  exports["∀ⁿʰ"] = function (x0) {
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
  exports["appⁿ-cong"] = function (x0) {
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
                                  return x11;
                                },
                                "_∷_": function (x13, x14, x15) {
                                  return exports["appⁿ-cong"](x13)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9(x14))(x10(x14))(x11(x14))(x15);
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
  exports["∃ⁿ"] = function (x0) {
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
  exports["curryⁿ-cong"] = function (x0) {
      return x0({
        "suc": function (x1) {
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
                                  return exports["curryⁿ-cong"](x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(jAgda_Function["_∘_"](x2)(x2)(x3)("*")(function (x14) {
                                    return "*";
                                  })(function (x14) {
                                    return function (x15) {
                                      return x7;
                                    };
                                  })(function (x14) {
                                    return x10;
                                  })(jAgda_Data_Vec["Vec"]["_∷_"](x1)(x13)))(jAgda_Function["_∘_"](x2)(x2)(x4)("*")(function (x14) {
                                    return "*";
                                  })(function (x14) {
                                    return function (x15) {
                                      return x8;
                                    };
                                  })(function (x14) {
                                    return x11;
                                  })(jAgda_Data_Vec["Vec"]["_∷_"](x1)(x13)))(function (x14) {
                                    return x12(jAgda_Data_Vec["Vec"]["_∷_"](x1)(x13)(x14));
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
        },
        "zero": function () {
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
                                return x11(jAgda_Data_Vec["Vec"]["[]"]);
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
        }
      });
    };
  exports["_256@145695262"] = {};
  exports["_256@145695262"]["⇒"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "suc": function (x6) {
                    return function (x7) {
                      return function (x8) {
                        return function (x9) {
                          return x9({
                            "[]": function () {
                              return undefined;
                            },
                            "_∷_": function (x10, x11, x12) {
                              return exports["_256@145695262"]["⇒"](x0)(x1)(x2)(x3)(x4)(x6)(x7(x11))(x8(x11))(x12);
                            }
                          });
                        };
                      };
                    };
                  },
                  "zero": function () {
                    return function (x6) {
                      return function (x7) {
                        return function (x8) {
                          return x8({
                            "[]": function () {
                              return x7;
                            },
                            "_∷_": function () {
                              return undefined;
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
    };
  exports["N-ary"] = function (x0) {
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
  exports["curryⁿ-cong⁻¹"] = function (x0) {
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
                                  return x11;
                                },
                                "_∷_": function (x13, x14, x15) {
                                  return exports["curryⁿ-cong⁻¹"](x13)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(jAgda_Function["_∘_"](x1)(x1)(x2)("*")(function (x16) {
                                    return "*";
                                  })(function (x16) {
                                    return function (x17) {
                                      return x6;
                                    };
                                  })(function (x16) {
                                    return x9;
                                  })(jAgda_Data_Vec["Vec"]["_∷_"](x13)(x14)))(jAgda_Function["_∘_"](x1)(x1)(x3)("*")(function (x16) {
                                    return "*";
                                  })(function (x16) {
                                    return function (x17) {
                                      return x7;
                                    };
                                  })(function (x16) {
                                    return x10;
                                  })(jAgda_Data_Vec["Vec"]["_∷_"](x13)(x14)))(x11(x14))(x15);
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
  exports["left-inverse"] = function (x0) {
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
  exports["Eq"] = function (x0) {
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
      };
    };
  exports["Eq-to-Eqʰ"] = function (x0) {
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
                          return function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return function (x13) {
                                  return exports["Eq-to-Eqʰ"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x8)(x9)(x10(x13))(x11(x13))(x12(x13));
                                };
                              };
                            };
                          };
                        };
                      },
                      "zero": function () {
                        return function (x8) {
                          return function (x9) {
                            return function (x10) {
                              return function (x11) {
                                return x11;
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
  exports["_$ⁿ_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return x6({
                    "[]": function () {
                      return x5;
                    },
                    "_∷_": function (x7, x8, x9) {
                      return exports["_$ⁿ_"](x7)(x1)(x2)(x3)(x4)(x5(x8))(x9);
                    }
                  });
                };
              };
            };
          };
        };
      };
    };
  exports["uncurry-∀ⁿ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Function_Equivalence["equivalence"](exports["N-ary-level"](x1)(x2)(x0))(jAgda_Agda_Primitive["_⊔_"](x2)(x1))(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              })("*")(exports["_256@145695262"]["⇒"](x0)(x1)(x2)(x3)(x4)(x0)(x4))(exports["_256@145695262"]["⇐"](x0)(x1)(x2)(x3)(x4)(x0)(x4));
            };
          };
        };
      };
    };
  exports["_316@145695262"] = {};
  exports["_316@145695262"]["⇒"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "suc": function (x6) {
                    return function (x7) {
                      return function (x8) {
                        return x8({
                          "_,_": function (x9, x10) {
                            return jAgda_Data_Product["map"](x1)(x1)(x2)(x2)("*")("*")(function (x11) {
                              return exports["_$ⁿ_"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x6))(x1)(jAgda_Agda_Primitive["lsuc"](x2))(x3)("*")(x7)(jAgda_Data_Vec["Vec"]["_∷_"](x6)(x9)(x11));
                            })(exports["_$ⁿ_"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x6))(x1)(jAgda_Agda_Primitive["lsuc"](x2))(x3)("*")(x7))(jAgda_Data_Vec["Vec"]["_∷_"](x6)(x9))(function (x11) {
                              return jAgda_Function["id"](x2)(exports["_$ⁿ_"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x6))(x1)(jAgda_Agda_Primitive["lsuc"](x2))(x3)("*")(x7)(jAgda_Data_Vec["Vec"]["_∷_"](x6)(x9)(x11)));
                            })(exports["_316@145695262"]["⇒"](x0)(x1)(x2)(x3)(x4)(x6)(x7(x9))(x10));
                          }
                        });
                      };
                    };
                  },
                  "zero": function () {
                    return function (x6) {
                      return function (x7) {
                        return jAgda_Data_Product["Σ"]["_,_"](jAgda_Data_Vec["Vec"]["[]"])(x7);
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
  exports["appⁿ-cong⁻¹"] = function (x0) {
      return x0({
        "suc": function (x1) {
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
                                  return exports["appⁿ-cong⁻¹"](x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x10(x13))(x11(x13))(function (x14) {
                                    return x12(jAgda_Data_Vec["Vec"]["_∷_"](x1)(x13)(x14));
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
        },
        "zero": function () {
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
                                return x11(jAgda_Data_Vec["Vec"]["[]"]);
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
        }
      });
    };
  exports["∀ⁿ"] = function (x0) {
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
  exports["_316@145695262"]["⇐"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "suc": function (x6) {
                    return function (x7) {
                      return function (x8) {
                        return x8({
                          "_,_": function (x9, x10) {
                            return x9({
                              "[]": function () {
                                return undefined;
                              },
                              "_∷_": function (x11, x12, x13) {
                                return jAgda_Data_Product["Σ"]["_,_"](x11)(exports["_316@145695262"]["⇐"](x0)(x1)(x2)(x3)(x4)(x6)(x7(x11))(jAgda_Data_Product["Σ"]["_,_"](x12)(x13)));
                              }
                            });
                          }
                        });
                      };
                    };
                  },
                  "zero": function () {
                    return function (x6) {
                      return function (x7) {
                        return x7({
                          "_,_": function (x8, x9) {
                            return x8({
                              "[]": function () {
                                return x9;
                              },
                              "_∷_": function () {
                                return undefined;
                              }
                            });
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
  exports["Eqʰ-to-Eq"] = function (x0) {
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
                          return function (x10) {
                            return function (x11) {
                              return function (x12) {
                                return function (x13) {
                                  return exports["Eqʰ-to-Eq"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x8)(x9)(x10(x13))(x11(x13))(x12(x13));
                                };
                              };
                            };
                          };
                        };
                      },
                      "zero": function () {
                        return function (x8) {
                          return function (x9) {
                            return function (x10) {
                              return function (x11) {
                                return x11;
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
  exports["curryⁿ"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return function (x3) {
              return function (x4) {
                return function (x5) {
                  return function (x6) {
                    return function (x7) {
                      return exports["curryⁿ"](x1)(x2)(x3)(x4)(x5)(jAgda_Function["_∘_"](x2)(x2)(x3)("*")(function (x8) {
                        return "*";
                      })(function (x8) {
                        return function (x9) {
                          return x5;
                        };
                      })(function (x8) {
                        return x6;
                      })(jAgda_Data_Vec["Vec"]["_∷_"](x1)(x7)));
                    };
                  };
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
                  return function (x5) {
                    return x5(jAgda_Data_Vec["Vec"]["[]"]);
                  };
                };
              };
            };
          };
        }
      });
    };
  exports["Eqʰ"] = function (x0) {
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
      };
    };
  exports["right-inverse"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "suc": function (x5) {
                  return function (x6) {
                    return function (x7) {
                      return exports["right-inverse"](x0)(x1)(x2)(x3)(x5)(x6(x7));
                    };
                  };
                },
                "zero": function () {
                  return function (x5) {
                    return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                  };
                }
              });
            };
          };
        };
      };
    };
  exports["uncurry-∃ⁿ"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Function_Equivalence["equivalence"](exports["N-ary-level"](x1)(x2)(x0))(jAgda_Agda_Primitive["_⊔_"](x2)(x1))(function (x5) {
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
                      return "*";
                    };
                  };
                };
              })(exports["_316@145695262"]["⇒"](x0)(x1)(x2)(x3)(x4)(x0)(x4))(exports["_316@145695262"]["⇐"](x0)(x1)(x2)(x3)(x4)(x0)(x4));
            };
          };
        };
      };
    };
  exports["_256@145695262"]["⇐"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "suc": function (x6) {
                    return function (x7) {
                      return function (x8) {
                        return function (x9) {
                          return exports["_256@145695262"]["⇐"](x0)(x1)(x2)(x3)(x4)(x6)(x7(x9))(jAgda_Function["_∘_"](x1)(x1)(x2)("*")(function (x10) {
                            return "*";
                          })(function (x10) {
                            return exports["_$ⁿ_"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x6))(x1)(jAgda_Agda_Primitive["lsuc"](x2))(x3)("*")(x7);
                          })(function (x10) {
                            return x8;
                          })(jAgda_Data_Vec["Vec"]["_∷_"](x6)(x9)));
                        };
                      };
                    };
                  },
                  "zero": function () {
                    return function (x6) {
                      return function (x7) {
                        return x7(jAgda_Data_Vec["Vec"]["[]"]);
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
  });
