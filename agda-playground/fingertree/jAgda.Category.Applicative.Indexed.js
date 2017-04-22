define(["exports","jAgda.Agda.Builtin.Equality","jAgda.Category.Functor","jAgda.Data.Product","jAgda.Function"],function(exports,jAgda_Agda_Builtin_Equality,jAgda_Category_Functor,jAgda_Data_Product,jAgda_Function) {
  exports["RawIApplicative"] = {};
  exports["Morphism"] = {};
  exports["Morphism"]["A₁"] = {};
  exports["Morphism"]["A₁"]["_<$>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["RF"]["_<$>_"](x0)(x1)(x2)(x3)(x5);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Morphism"]["op-<$>"] = function (x0) {
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
      };
    };
  exports["RawIApplicative"]["RF"] = {};
  exports["RawIApplicative"]["RF"]["_<$>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Category_Functor["RawFunctor"]["_<$>_"](undefined)(undefined)(exports["RawIApplicative"]["rawFunctor"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["RawIApplicative"]["pure"] = function (x0) {
      return x0["pure"];
    };
  exports["Morphism"]["A₂"] = {};
  exports["Morphism"]["A₂"]["rawFunctor"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["rawFunctor"](x0)(x1)(x2)(x4)(x6);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["RawIApplicative"]["zipWith"] = function (x0) {
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
                                return exports["RawIApplicative"]["_⊛_"](undefined)(undefined)(undefined)(undefined)(x4)(x5)(x6)(x7)(x9)(x10)(exports["RawIApplicative"]["RF"]["_<$>_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x8)("*")(x11)(x12))(x13);
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
  exports["Morphism"]["A₂"]["pure"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["pure"](undefined)(undefined)(undefined)(undefined)(x6);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["A₁"] = {};
  exports["A₁"]["_⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["RawIApplicative"]["_⊛_"](undefined)(undefined)(undefined)(undefined)(x5);
                };
              };
            };
          };
        };
      };
    };
  exports["Morphism"]["A₁"]["zipWith"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["zipWith"](x0)(x1)(x2)(x3)(x5);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Morphism"]["A₁"]["_<$_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["RF"]["_<$_"](x0)(x1)(x2)(x3)(x5);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["RawIApplicative"]["RF"]["_<$_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Category_Functor["RawFunctor"]["_<$_"](x1)(x3(x5)(x6))(exports["RawIApplicative"]["rawFunctor"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["RawIApplicative"]["record"] = function (x0) {
      return function (x1) {
        return {
          "_⊛_": x1,
          "pure": x0,
          "record": function (x2) {
            return x2["record"](x0, x1);
          }
        };
      };
    };
  exports["RawIApplicative"]["_⊛_"] = function (x0) {
      return x0["_⊛_"];
    };
  exports["Morphism"]["A₂"]["_⊛>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["_⊛>_"](x0)(x1)(x2)(x4)(x6);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["RawIApplicative"]["_⊛>_"] = function (x0) {
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
                            return exports["RawIApplicative"]["_⊛_"](undefined)(undefined)(undefined)(undefined)(x4)(x5)(x6)(x7)(x9)(x9)(exports["RawIApplicative"]["RF"]["_<$>_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x8)("*")(jAgda_Function["flip"](x1)(x1)(x1)(x9)(x8)(function (x12) {
                              return function (x13) {
                                return x9;
                              };
                            })(jAgda_Function["const"](x1)(x1)(x9)(x8)))(x10))(x11);
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
  exports["RawIApplicative"]["_⊗_"] = function (x0) {
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
                            return exports["RawIApplicative"]["_⊛_"](undefined)(undefined)(undefined)(undefined)(x4)(x5)(x6)(x7)(x9)("*")(exports["RawIApplicative"]["RF"]["_<$>_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x8)("*")(jAgda_Data_Product["Σ"]["_,_"])(x10))(x11);
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
  exports["RawIApplicative"]["_<⊛_"] = function (x0) {
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
                            return exports["RawIApplicative"]["_⊛_"](undefined)(undefined)(undefined)(undefined)(x4)(x5)(x6)(x7)(x9)(x8)(exports["RawIApplicative"]["RF"]["_<$>_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x8)("*")(jAgda_Function["const"](x1)(x1)(x8)(x9))(x10))(x11);
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
  exports["Morphism"]["A₁"]["rawFunctor"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["rawFunctor"](x0)(x1)(x2)(x3)(x5);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Morphism"]["A₁"]["pure"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["pure"](undefined)(undefined)(undefined)(undefined)(x5);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Morphism"]["op"] = function (x0) {
      return x0["op"];
    };
  exports["Morphism"]["A₂"]["_⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["_⊛_"](undefined)(undefined)(undefined)(undefined)(x6);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Morphism"]["A₂"]["_⊗_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["_⊗_"](x0)(x1)(x2)(x4)(x6);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Morphism"]["A₁"]["_⊛>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["_⊛>_"](x0)(x1)(x2)(x3)(x5);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Morphism"]["A₂"]["_<⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["_<⊛_"](x0)(x1)(x2)(x4)(x6);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Morphism"]["A₁"]["_⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["_⊛_"](undefined)(undefined)(undefined)(undefined)(x5);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Morphism"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return {
            "op": x0,
            "op-pure": x1,
            "op-⊛": x2,
            "record": function (x3) {
              return x3["record"](x0, x1, x2);
            }
          };
        };
      };
    };
  exports["Morphism"]["A₂"]["_<$>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["RF"]["_<$>_"](x0)(x1)(x2)(x4)(x6);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Morphism"]["A₁"]["_⊗_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["_⊗_"](x0)(x1)(x2)(x3)(x5);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IFun"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["Morphism"]["A₁"]["_<⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["_<⊛_"](x0)(x1)(x2)(x3)(x5);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Morphism"]["op-pure"] = function (x0) {
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
  exports["Morphism"]["op-⊛"] = function (x0) {
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
        };
      };
    };
  exports["RawIApplicative"]["rawFunctor"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Category_Functor["RawFunctor"]["record"](function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["RawIApplicative"]["_⊛_"](undefined)(undefined)(undefined)(undefined)(x4)(x5)(x5)(x6)(x7)(x8)(exports["RawIApplicative"]["pure"](undefined)(undefined)(undefined)(undefined)(x4)(x5)("*")(x9));
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
  exports["Morphism"]["A₂"]["zipWith"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["zipWith"](x0)(x1)(x2)(x4)(x6);
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["A₁"]["pure"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["RawIApplicative"]["pure"](undefined)(undefined)(undefined)(undefined)(x5);
                };
              };
            };
          };
        };
      };
    };
  exports["Morphism"]["A₂"]["_<$_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["RawIApplicative"]["RF"]["_<$_"](x0)(x1)(x2)(x4)(x6);
                  };
                };
              };
            };
          };
        };
      };
    };
  });
