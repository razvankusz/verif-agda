define(["exports","jAgda.Agda.Builtin.Equality","jAgda.Agda.Builtin.List","jAgda.Agda.Builtin.Unit","jAgda.Algebra","jAgda.Algebra.Structures","jAgda.Category.Monad","jAgda.Category.Monad.Indexed","jAgda.Data.List.Base","jAgda.Data.Product","jAgda.Function","jAgda.Relation.Binary.PropositionalEquality.Core"],function(exports,jAgda_Agda_Builtin_Equality,jAgda_Agda_Builtin_List,jAgda_Agda_Builtin_Unit,jAgda_Algebra,jAgda_Algebra_Structures,jAgda_Category_Monad,jAgda_Category_Monad_Indexed,jAgda_Data_List_Base,jAgda_Data_Product,jAgda_Function,jAgda_Relation_Binary_PropositionalEquality_Core) {
  exports["Monadic"] = {};
  exports["Monadic"]["mapM"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Function["_∘_"](x3)(x0)(x0)("*")(function (x7) {
                    return "*";
                  })(function (x7) {
                    return function (x8) {
                      return x1("*");
                    };
                  })(function (x7) {
                    return exports["Monadic"]["sequence"](x0)(x1)(x2)(x5);
                  })(jAgda_Data_List_Base["map"](x3)(x0)(x4)(x1(x5))(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["monadZero"] = function (x0) {
      return jAgda_Category_Monad_Indexed["RawIMonadZero"]["record"](exports["monad"](x0))(function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_List["List"]["[]"];
          };
        };
      });
    };
  exports["_12@19573777"] = {};
  exports["_12@19573777"]["identity"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        };
      };
    };
  exports["monadPlus"] = function (x0) {
      return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["record"](exports["monadZero"](x0))(function (x1) {
        return function (x2) {
          return jAgda_Data_List_Base["_++_"](x0);
        };
      });
    };
  exports["_12@19573777"]["assoc"] = function (x0) {
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
  exports["Monadic"]["sequence"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "[]": function () {
                  return jAgda_Category_Monad_Indexed["RawIMonad"]["return"](undefined)(undefined)(undefined)(undefined)(x2)(jAgda_Agda_Builtin_Unit["⊤"]["tt"])("*")(jAgda_Agda_Builtin_List["List"]["[]"]);
                },
                "_∷_": function (x5, x6) {
                  return exports["Monadic"]["_110@19573777"]["_⊛_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Unit["⊤"]["tt"])(jAgda_Agda_Builtin_Unit["⊤"]["tt"])(jAgda_Agda_Builtin_Unit["⊤"]["tt"])("*")("*")(exports["Monadic"]["_110@19573777"]["_<$>_"](x0)(x1)(x2)(jAgda_Agda_Builtin_Unit["⊤"]["tt"])(jAgda_Agda_Builtin_Unit["⊤"]["tt"])(x3)("*")(jAgda_Agda_Builtin_List["List"]["_∷_"])(x5))(exports["Monadic"]["sequence"](x0)(x1)(x2)(x3)(x6));
                }
              });
            };
          };
        };
      };
    };
  exports["Monadic"]["_110@19573777"] = {};
  exports["Monadic"]["_110@19573777"]["_<$>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad["RawMonad"]["_42@178150207"]["_<$>_"](x0)(x1)(x2);
        };
      };
    };
  exports["Monadic"]["_110@19573777"]["_⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad["RawMonad"]["_42@178150207"]["_⊛_"](x0)(x1)(x2);
        };
      };
    };
  exports["monoid"] = function (x0) {
      return function (x1) {
        return jAgda_Algebra["Monoid"]["record"]("*")("*")(jAgda_Data_List_Base["_++_"](x0)(x1))(jAgda_Agda_Builtin_List["List"]["[]"])(jAgda_Algebra_Structures["IsMonoid"]["record"](jAgda_Algebra_Structures["IsSemigroup"]["record"](jAgda_Relation_Binary_PropositionalEquality_Core["isEquivalence"](x0)("*"))(function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                };
              };
            };
          };
        })(function (x2) {
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
        }))(jAgda_Data_Product["Σ"]["_,_"](function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        })(function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
            };
          };
        })));
      };
    };
  exports["monad"] = function (x0) {
      return jAgda_Category_Monad_Indexed["RawIMonad"]["record"](function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_List["List"]["_∷_"](x3)(jAgda_Agda_Builtin_List["List"]["[]"]);
          };
        };
      })(function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return jAgda_Data_List_Base["concat"](x0)(x5)(jAgda_Data_List_Base["map"](x0)(x0)(x4)("*")(x7)(x6));
                  };
                };
              };
            };
          };
        };
      });
    };
  });
