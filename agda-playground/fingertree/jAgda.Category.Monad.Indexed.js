define(["exports","jAgda.Category.Applicative.Indexed","jAgda.Function"],function(exports,jAgda_Category_Applicative_Indexed,jAgda_Function) {
  exports["RawIMonadPlus"] = {};
  exports["RawIMonadZero"] = {};
  exports["RawIMonad"] = {};
  exports["RawIMonadZero"]["∅"] = function (x0) {
      return x0["∅"];
    };
  exports["RawIMonadZero"]["_214@15579464"] = {};
  exports["RawIMonadZero"]["_214@15579464"]["rawIApplicative"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonad"]["rawIApplicative"](x0)(x1)(x2)(x3)(exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonad"]["_156@15579464"] = {};
  exports["RawIMonad"]["_156@15579464"]["_⊗_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Category_Applicative_Indexed["RawIApplicative"]["_⊗_"](x0)(x1)(x2)(x3)(exports["RawIMonad"]["rawIApplicative"](x0)(x1)(x2)(x3)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadPlus"]["_288@15579464"] = {};
  exports["RawIMonadPlus"]["_288@15579464"]["_⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonadZero"]["_214@15579464"]["_⊛_"](x0)(x1)(x2)(x3)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadZero"]["_214@15579464"]["_>>_"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return exports["RawIMonad"]["_>>_"](undefined)(undefined)(undefined)(undefined)(exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(x0));
            };
          };
        };
      };
    };
  exports["RawIMonadPlus"]["_288@15579464"]["_<$>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonadZero"]["_214@15579464"]["_<$>_"](x0)(x1)(x2)(x3)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadPlus"]["_288@15579464"]["zipWith"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonadZero"]["_214@15579464"]["zipWith"](x0)(x1)(x2)(x3)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadZero"]["_214@15579464"]["_>=>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonad"]["_>=>_"](x0)(x1)(x2)(x3)(exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadZero"]["_214@15579464"]["rawFunctor"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonad"]["_156@15579464"]["rawFunctor"](x0)(x1)(x2)(x3)(exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadPlus"]["_288@15579464"]["_<$_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonadZero"]["_214@15579464"]["_<$_"](x0)(x1)(x2)(x3)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonad"]["rawIApplicative"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Category_Applicative_Indexed["RawIApplicative"]["record"](exports["RawIMonad"]["return"](undefined)(undefined)(undefined)(undefined)(x4))(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return exports["RawIMonad"]["_>>=_"](undefined)(undefined)(undefined)(undefined)(x4)(x5)(x6)(x7)("*")(x9)(x10)(function (x12) {
                              return exports["RawIMonad"]["_>>=_"](undefined)(undefined)(undefined)(undefined)(x4)(x6)(x7)(x7)(x8)(x9)(x11)(function (x13) {
                                return exports["RawIMonad"]["return"](undefined)(undefined)(undefined)(undefined)(x4)(x7)(x9)(x12(x13));
                              });
                            });
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
  exports["RawIMonadPlus"]["_288@15579464"]["return"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return exports["RawIMonadZero"]["_214@15579464"]["return"](undefined)(undefined)(undefined)(undefined)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x0));
            };
          };
        };
      };
    };
  exports["RawIMonadPlus"]["_288@15579464"]["_⊗_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonadZero"]["_214@15579464"]["_⊗_"](x0)(x1)(x2)(x3)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonad"]["_156@15579464"]["_<⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Category_Applicative_Indexed["RawIApplicative"]["_<⊛_"](x0)(x1)(x2)(x3)(exports["RawIMonad"]["rawIApplicative"](x0)(x1)(x2)(x3)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadPlus"]["record"] = function (x0) {
      return function (x1) {
        return {
          "_∣_": x1,
          "monadZero": x0,
          "record": function (x2) {
            return x2["record"](x0, x1);
          }
        };
      };
    };
  exports["RawIMonadPlus"]["_288@15579464"]["_<⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonadZero"]["_214@15579464"]["_<⊛_"](x0)(x1)(x2)(x3)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadPlus"]["_288@15579464"]["join"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonadZero"]["_214@15579464"]["join"](x0)(x1)(x2)(x3)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadZero"]["_214@15579464"]["_<$_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonad"]["_156@15579464"]["_<$_"](x0)(x1)(x2)(x3)(exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonad"]["_156@15579464"]["_⊛>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Category_Applicative_Indexed["RawIApplicative"]["_⊛>_"](x0)(x1)(x2)(x3)(exports["RawIMonad"]["rawIApplicative"](x0)(x1)(x2)(x3)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadZero"]["_214@15579464"]["_⊗_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonad"]["_156@15579464"]["_⊗_"](x0)(x1)(x2)(x3)(exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonad"]["_=<<_"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return function (x1) {
                return function (x2) {
                  return function (x3) {
                    return function (x4) {
                      return function (x5) {
                        return function (x6) {
                          return function (x7) {
                            return exports["RawIMonad"]["_>>=_"](undefined)(undefined)(undefined)(undefined)(x0)(x1)(x2)(x3)(x4)(x5)(x7)(x6);
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["RawIMonadZero"]["_214@15579464"]["zipWith"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonad"]["_156@15579464"]["zipWith"](x0)(x1)(x2)(x3)(exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadPlus"]["monadZero"] = function (x0) {
      return x0["monadZero"];
    };
  exports["RawIMonadZero"]["_214@15579464"]["return"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return exports["RawIMonad"]["return"](undefined)(undefined)(undefined)(undefined)(exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(x0));
            };
          };
        };
      };
    };
  exports["RawIMonad"]["_156@15579464"]["_⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Category_Applicative_Indexed["RawIApplicative"]["_⊛_"](undefined)(undefined)(undefined)(undefined)(exports["RawIMonad"]["rawIApplicative"](x0)(x1)(x2)(x3)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonad"]["_>>_"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return function (x1) {
                return function (x2) {
                  return function (x3) {
                    return function (x4) {
                      return function (x5) {
                        return function (x6) {
                          return function (x7) {
                            return exports["RawIMonad"]["_>>=_"](undefined)(undefined)(undefined)(undefined)(x0)(x1)(x2)(x3)(x4)(x5)(x6)(function (x8) {
                              return x7;
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
  exports["RawIMonadPlus"]["_288@15579464"]["∅"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return exports["RawIMonadZero"]["∅"](undefined)(undefined)(undefined)(undefined)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x0));
            };
          };
        };
      };
    };
  exports["RawIMonadPlus"]["_288@15579464"]["_⊛>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonadZero"]["_214@15579464"]["_⊛>_"](x0)(x1)(x2)(x3)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadZero"]["_214@15579464"]["_>>=_"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return exports["RawIMonad"]["_>>=_"](undefined)(undefined)(undefined)(undefined)(exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(x0));
            };
          };
        };
      };
    };
  exports["RawIMonadPlus"]["_288@15579464"]["_<=<_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonadZero"]["_214@15579464"]["_<=<_"](x0)(x1)(x2)(x3)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadZero"]["_214@15579464"]["_⊛>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonad"]["_156@15579464"]["_⊛>_"](x0)(x1)(x2)(x3)(exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadPlus"]["_288@15579464"]["_>=>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonadZero"]["_214@15579464"]["_>=>_"](x0)(x1)(x2)(x3)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadPlus"]["_288@15579464"]["pure"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonadZero"]["_214@15579464"]["pure"](x0)(x1)(x2)(x3)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonad"]["_>=>_"] = function (x0) {
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
                                return jAgda_Function["_∘_"](x8)(x1)(x1)(x9)(function (x14) {
                                  return x3(x5)(x6)(x10);
                                })(function (x14) {
                                  return function (x15) {
                                    return x3(x5)(x7)(x11);
                                  };
                                })(function (x14) {
                                  return exports["RawIMonad"]["_=<<_"](undefined)(undefined)(undefined)(undefined)(x4)(x5)(x6)(x7)(x10)(x11)(x13);
                                })(x12);
                              };
                            };
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["RawIMonadZero"]["_214@15579464"]["_<=<_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonad"]["_<=<_"](x0)(x1)(x2)(x3)(exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonad"]["_156@15579464"]["rawFunctor"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Category_Applicative_Indexed["RawIApplicative"]["rawFunctor"](x0)(x1)(x2)(x3)(exports["RawIMonad"]["rawIApplicative"](x0)(x1)(x2)(x3)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadZero"]["monad"] = function (x0) {
      return x0["monad"];
    };
  exports["RawIMonadZero"]["record"] = function (x0) {
      return function (x1) {
        return {
          "monad": x0,
          "record": function (x2) {
            return x2["record"](x0, x1);
          },
          "∅": x1
        };
      };
    };
  exports["RawIMonadZero"]["_214@15579464"]["_<$>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonad"]["_156@15579464"]["_<$>_"](x0)(x1)(x2)(x3)(exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadPlus"]["_288@15579464"]["_=<<_"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return exports["RawIMonadZero"]["_214@15579464"]["_=<<_"](undefined)(undefined)(undefined)(undefined)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x0));
            };
          };
        };
      };
    };
  exports["RawIMonad"]["_156@15579464"]["pure"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Category_Applicative_Indexed["RawIApplicative"]["pure"](undefined)(undefined)(undefined)(undefined)(exports["RawIMonad"]["rawIApplicative"](x0)(x1)(x2)(x3)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonad"]["_>>=_"] = function (x0) {
      return x0["_>>=_"];
    };
  exports["RawIMonadPlus"]["_288@15579464"]["monad"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x0));
            };
          };
        };
      };
    };
  exports["RawIMonadZero"]["_214@15579464"]["_⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonad"]["_156@15579464"]["_⊛_"](x0)(x1)(x2)(x3)(exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadZero"]["_214@15579464"]["pure"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonad"]["_156@15579464"]["pure"](x0)(x1)(x2)(x3)(exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonad"]["_156@15579464"]["_<$>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Category_Applicative_Indexed["RawIApplicative"]["RF"]["_<$>_"](x0)(x1)(x2)(x3)(exports["RawIMonad"]["rawIApplicative"](x0)(x1)(x2)(x3)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadPlus"]["_288@15579464"]["rawIApplicative"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonadZero"]["_214@15579464"]["rawIApplicative"](x0)(x1)(x2)(x3)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadPlus"]["_288@15579464"]["_>>=_"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return exports["RawIMonadZero"]["_214@15579464"]["_>>=_"](undefined)(undefined)(undefined)(undefined)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x0));
            };
          };
        };
      };
    };
  exports["RawIMonadZero"]["_214@15579464"]["_=<<_"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return exports["RawIMonad"]["_=<<_"](undefined)(undefined)(undefined)(undefined)(exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(x0));
            };
          };
        };
      };
    };
  exports["RawIMonad"]["_<=<_"] = function (x0) {
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
                                return exports["RawIMonad"]["_>=>_"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x7)(x10)(x11)(x8)(x9)(x13)(x12);
                              };
                            };
                          };
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["RawIMonadPlus"]["_288@15579464"]["rawFunctor"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonadZero"]["_214@15579464"]["rawFunctor"](x0)(x1)(x2)(x3)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadZero"]["_214@15579464"]["join"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonad"]["join"](x0)(x1)(x2)(x3)(exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonad"]["join"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["RawIMonad"]["_>>=_"](undefined)(undefined)(undefined)(undefined)(x4)(x5)(x6)(x7)(x3(x6)(x7)(x8))(x8)(x9)(jAgda_Function["id"](x1)(x3(x6)(x7)(x8)));
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["RawIMonad"]["return"] = function (x0) {
      return x0["return"];
    };
  exports["RawIMonadPlus"]["_288@15579464"]["_>>_"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return exports["RawIMonadZero"]["_214@15579464"]["_>>_"](undefined)(undefined)(undefined)(undefined)(exports["RawIMonadPlus"]["monadZero"](undefined)(undefined)(undefined)(undefined)(x0));
            };
          };
        };
      };
    };
  exports["RawIMonad"]["_156@15579464"]["_<$_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Category_Applicative_Indexed["RawIApplicative"]["RF"]["_<$_"](x0)(x1)(x2)(x3)(exports["RawIMonad"]["rawIApplicative"](x0)(x1)(x2)(x3)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadZero"]["_214@15579464"]["_<⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["RawIMonad"]["_156@15579464"]["_<⊛_"](x0)(x1)(x2)(x3)(exports["RawIMonadZero"]["monad"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonad"]["_156@15579464"]["zipWith"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Category_Applicative_Indexed["RawIApplicative"]["zipWith"](x0)(x1)(x2)(x3)(exports["RawIMonad"]["rawIApplicative"](x0)(x1)(x2)(x3)(x4));
            };
          };
        };
      };
    };
  exports["RawIMonadPlus"]["_∣_"] = function (x0) {
      return x0["_∣_"];
    };
  exports["RawIMonad"]["record"] = function (x0) {
      return function (x1) {
        return {
          "_>>=_": x1,
          "record": function (x2) {
            return x2["record"](x0, x1);
          },
          "return": x0
        };
      };
    };
  });
