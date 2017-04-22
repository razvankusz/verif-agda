define(["exports","jAgda.Function","jAgda.Relation.Binary","jAgda.Relation.Binary.Core","jAgda.Relation.Binary.Indexed.Core"],function(exports,jAgda_Function,jAgda_Relation_Binary,jAgda_Relation_Binary_Core,jAgda_Relation_Binary_Indexed_Core) {
  exports["Π"] = {};
  exports["_124@264950272"] = {};
  exports["_124@264950272"]["From"] = {};
  exports["_124@264950272"]["From"]["refl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return jAgda_Relation_Binary["Setoid"]["_138@10167932"]["refl"](undefined)(undefined)(x4);
              };
            };
          };
        };
      };
    };
  exports["flip"] = function () {
      return function () {
        return function (x0) {
          return function (x1) {
            return function (x2) {
              return function (x3) {
                return function (x4) {
                  return function (x5) {
                    return function (x6) {
                      return function (x7) {
                        return exports["Π"]["record"](function (x8) {
                          return exports["Π"]["record"](function (x9) {
                            return exports["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7)(x9))(x8);
                          })(function (x9) {
                            return function (x10) {
                              return function (x11) {
                                return exports["Π"]["cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7)(x9)(x10)(x11)(x8)(x8)(jAgda_Relation_Binary["Setoid"]["_138@10167932"]["refl"](undefined)(undefined)(x3)(x8));
                              };
                            };
                          });
                        })(function (x8) {
                          return function (x9) {
                            return function (x10) {
                              return function (x11) {
                                return function (x12) {
                                  return function (x13) {
                                    return exports["Π"]["cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7)(x11)(x12)(x13)(x8)(x9)(x10);
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
        };
      };
    };
  exports["_⇨_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return exports["setoid"](x0)(x1)(x2)(x3)(x4)(jAgda_Relation_Binary["Setoid"]["indexedSetoid"](undefined)(undefined)(x5)(x0)(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                }));
              };
            };
          };
        };
      };
    };
  exports["_124@264950272"]["From"]["_≈_"] = function (x0) {
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
  exports["_124@264950272"]["From"]["sym"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return jAgda_Relation_Binary["Setoid"]["_138@10167932"]["sym"](undefined)(undefined)(x4);
              };
            };
          };
        };
      };
    };
  exports["id"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Π"]["record"](jAgda_Function["id"](x0)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          }))(function (x3) {
            return function (x4) {
              return jAgda_Function["id"](x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              });
            };
          });
        };
      };
    };
  exports["≡-setoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Relation_Binary["Setoid"]["record"]("*")(function (x5) {
                return function (x6) {
                  return "*";
                };
              })(jAgda_Relation_Binary_Core["IsEquivalence"]["record"](function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_Indexed_Core["Setoid"]["_174@221572815"]["refl"](undefined)(undefined)(undefined)(undefined)(x4)(x6)(x5(x6));
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return jAgda_Relation_Binary_Indexed_Core["Setoid"]["_174@221572815"]["sym"](undefined)(undefined)(undefined)(undefined)(x4)(x8)(x8)(x5(x8))(x6(x8))(x7(x8));
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return jAgda_Relation_Binary_Indexed_Core["Setoid"]["_174@221572815"]["trans"](undefined)(undefined)(undefined)(undefined)(x4)(x10)(x10)(x10)(x5(x10))(x6(x10))(x7(x10))(x8(x10))(x9(x10));
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
    };
  exports["const"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["Π"]["record"](jAgda_Function["const"](x3)(x0)(function (x7) {
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
                  })(x6))(function (x7) {
                    return function (x8) {
                      return jAgda_Function["const"](x4)(x1)(function (x9) {
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
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      })(jAgda_Relation_Binary["Setoid"]["_138@10167932"]["refl"](undefined)(undefined)(x5)(jAgda_Function["const"](x3)(x0)(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        };
                      })(x6)(x7)));
                    };
                  });
                };
              };
            };
          };
        };
      };
    };
  exports["setoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return jAgda_Relation_Binary["Setoid"]["record"]("*")(function (x6) {
                  return function (x7) {
                    return "*";
                  };
                })(jAgda_Relation_Binary_Core["IsEquivalence"]["record"](exports["Π"]["cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined))(function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return jAgda_Relation_Binary_Indexed_Core["Setoid"]["_174@221572815"]["sym"](undefined)(undefined)(undefined)(undefined)(x5)(x10)(x9)(exports["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)(x10))(exports["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7)(x9))(x8(x10)(x9)(exports["_124@264950272"]["From"]["sym"](x0)(x1)(x2)(x3)(x4)(x5)(x9)(x10)(x11)));
                          };
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
                              return function (x13) {
                                return jAgda_Relation_Binary_Indexed_Core["Setoid"]["_174@221572815"]["trans"](undefined)(undefined)(undefined)(undefined)(x5)(x11)(x11)(x12)(exports["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)(x11))(exports["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x7)(x11))(exports["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x8)(x12))(x9(x11)(x11)(exports["_124@264950272"]["From"]["refl"](x0)(x1)(x2)(x3)(x4)(x5)(x11)))(x10(x11)(x12)(x13));
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
      };
    };
  exports["Π"]["record"] = function (x0) {
      return function (x1) {
        return {
          "_⟨$⟩_": x0,
          "cong": x1,
          "record": function (x2) {
            return x2["record"](x0, x1);
          }
        };
      };
    };
  exports["_⟶_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
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
                          return exports["Π"]["record"](jAgda_Function["_∘_"](x0)(x3)(x6)(function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          })(function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return "*";
                                };
                              };
                            };
                          })(function (x11) {
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
                          })(function (x11) {
                            return exports["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9);
                          })(exports["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10)))(function (x11) {
                            return function (x12) {
                              return jAgda_Function["_∘_"](x1)(x4)(x7)(function (x13) {
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
                                        return function (x18) {
                                          return "*";
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
                                            return function (x20) {
                                              return function (x21) {
                                                return function (x22) {
                                                  return function (x23) {
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
                              })(function (x13) {
                                return exports["Π"]["cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(exports["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10)(x11))(exports["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10)(x12));
                              })(exports["Π"]["cong"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10)(x11)(x12));
                            };
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
  exports["Π"]["cong"] = function (x0) {
      return x0["cong"];
    };
  exports["Π"]["_⟨$⟩_"] = function (x0) {
      return x0["_⟨$⟩_"];
    };
  });
