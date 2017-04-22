define(["exports","jAgda.Agda.Builtin.Unit","jAgda.Agda.Primitive","jAgda.Function","jAgda.Function.Equality","jAgda.Function.Equivalence","jAgda.Function.Injection","jAgda.Level","jAgda.Relation.Nullary"],function(exports,jAgda_Agda_Builtin_Unit,jAgda_Agda_Primitive,jAgda_Function,jAgda_Function_Equality,jAgda_Function_Equivalence,jAgda_Function_Injection,jAgda_Level,jAgda_Relation_Nullary) {
  exports["_106@161698229"] = {};
  exports["_106@161698229"]["via-injection"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["_106@161698229"]["with-138"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x8)(x9)(x7(jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Function_Injection["Injection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(x8))(jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Function_Injection["Injection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(x9)));
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
                return x5({
                  "no": function (x6) {
                    return jAgda_Relation_Nullary["Dec"]["no"](jAgda_Function["_∘_"](x1)(x0)(jAgda_Agda_Primitive["lzero"])(function (x7) {
                      return function (x8) {
                        return function (x9) {
                          return "*";
                        };
                      };
                    })(function (x7) {
                      return x2;
                    })(function (x7) {
                      return function (x8) {
                        return "*";
                      };
                    })(function (x7) {
                      return x6;
                    })(jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Function_Equivalence["Equivalence"]["from"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x4))));
                  },
                  "yes": function (x6) {
                    return jAgda_Relation_Nullary["Dec"]["yes"](jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Function_Equivalence["Equivalence"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x4))(x6));
                  }
                });
              };
            };
          };
        };
      };
    };
  exports["True"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["_106@161698229"]["with-138"] = function (x0) {
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
                                return x11(jAgda_Function_Equality["Π"]["cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(jAgda_Function_Injection["Injection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(x8)(x9)(x12));
                              });
                            },
                            "yes": function (x11) {
                              return jAgda_Relation_Nullary["Dec"]["yes"](jAgda_Function_Injection["Injection"]["injective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)(x8)(x9)(x11));
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
  exports["fromWitness"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "no": function (x3) {
              return x3;
            },
            "yes": function (x3) {
              return jAgda_Function["const"](jAgda_Agda_Primitive["lzero"])(x0)(function (x4) {
                return function (x5) {
                  return function (x6) {
                    return "*";
                  };
                };
              })(x1)(jAgda_Agda_Builtin_Unit["⊤"]["tt"]);
            }
          });
        };
      };
    };
  exports["⌊_⌋"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "no": function (x3) {
              return false;
            },
            "yes": function (x3) {
              return true;
            }
          });
        };
      };
    };
  exports["From-no"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["_106@161698229"]["_120@161698229"] = {};
  exports["_106@161698229"]["_120@161698229"]["_≈_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["False"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["From-yes"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["toWitnessFalse"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return undefined;
            };
          };
        };
      };
    };
  exports["from-no"] = function () {
      return function () {
        return function (x0) {
          return x0({
            "no": function (x1) {
              return x1;
            },
            "yes": function (x1) {
              return jAgda_Level["Lift"]["lift"](jAgda_Agda_Builtin_Unit["⊤"]["tt"]);
            }
          });
        };
      };
    };
  exports["from-yes"] = function () {
      return function () {
        return function (x0) {
          return x0({
            "no": function (x1) {
              return jAgda_Level["Lift"]["lift"](jAgda_Agda_Builtin_Unit["⊤"]["tt"]);
            },
            "yes": function (x1) {
              return x1;
            }
          });
        };
      };
    };
  exports["map′"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return exports["map"](x0)(x1)(x2)(x3)(jAgda_Function_Equivalence["equivalence"](x0)(x1)(x2)(x3)(x4)(x5));
              };
            };
          };
        };
      };
    };
  exports["fromWitnessFalse"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "no": function (x3) {
              return jAgda_Function["const"](jAgda_Agda_Primitive["lzero"])(x0)(function (x4) {
                return function (x5) {
                  return function (x6) {
                    return "*";
                  };
                };
              })(function (x4) {
                return function (x5) {
                  return "*";
                };
              })(jAgda_Agda_Builtin_Unit["⊤"]["tt"]);
            },
            "yes": function (x3) {
              return jAgda_Function["flip"](x0)(x0)(jAgda_Agda_Primitive["lzero"])("*")(x1)(function (x4) {
                return function (x5) {
                  return "*";
                };
              })(jAgda_Function["_$_"](x0)(jAgda_Agda_Primitive["lzero"])(x1)(function (x4) {
                return "*";
              }))(x3);
            }
          });
        };
      };
    };
  exports["toWitness"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "no": function (x3) {
              return function (x4) {
                return undefined;
              };
            },
            "yes": function (x3) {
              return function (x4) {
                return x3;
              };
            }
          });
        };
      };
    };
  });
