define(["exports","jAgda.Agda.Primitive","jAgda.Category.Monad.Indexed"],function(exports,jAgda_Agda_Primitive,jAgda_Category_Monad_Indexed) {
  exports["RawMonadPlus"] = {};
  exports["RawMonadPlus"]["_134@178150207"] = {};
  exports["RawMonadPlus"]["_134@178150207"]["pure"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["pure"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonad"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["RawMonadZero"] = {};
  exports["RawMonadZero"]["_86@178150207"] = {};
  exports["RawMonadZero"]["_86@178150207"]["_>>=_"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Category_Monad_Indexed["RawIMonadZero"]["_214@15579464"]["_>>=_"](undefined)(undefined)(undefined)(undefined)(x0);
        };
      };
    };
  exports["RawMonadZero"]["_86@178150207"]["rawIApplicative"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadZero"]["_214@15579464"]["rawIApplicative"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonad"]["_42@178150207"] = {};
  exports["RawMonad"]["_42@178150207"]["_>=>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonad"]["_>=>_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonad"]["_42@178150207"]["rawFunctor"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonad"]["_156@15579464"]["rawFunctor"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["_>>=_"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["_>>=_"](undefined)(undefined)(undefined)(undefined)(x0);
        };
      };
    };
  exports["RawMonadZero"]["_86@178150207"]["return"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Category_Monad_Indexed["RawIMonadZero"]["_214@15579464"]["return"](undefined)(undefined)(undefined)(undefined)(x0);
        };
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["_<$_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["_<$_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadZero"]["_86@178150207"]["_⊗_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadZero"]["_214@15579464"]["_⊗_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonad"]["_42@178150207"]["_>>_"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Category_Monad_Indexed["RawIMonad"]["_>>_"](undefined)(undefined)(undefined)(undefined)(x0);
        };
      };
    };
  exports["RawMonad"]["_42@178150207"]["rawIApplicative"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonad"]["rawIApplicative"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["_∣_"] = function (x0) {
      return x0["_∣_"];
    };
  exports["RawMonadZero"]["_86@178150207"]["_<$_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadZero"]["_214@15579464"]["_<$_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["rawFunctor"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["rawFunctor"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonad"]["_42@178150207"]["_<⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonad"]["_156@15579464"]["_<⊛_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonad"]["_42@178150207"]["join"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonad"]["join"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["_>=>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["_>=>_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["monad"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["monad"](undefined)(undefined)(undefined)(undefined)(x0);
        };
      };
    };
  exports["RawMonadZero"]["_86@178150207"]["pure"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadZero"]["_214@15579464"]["pure"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadZero"]["_86@178150207"]["_>=>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadZero"]["_214@15579464"]["_>=>_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["monadZero"] = function (x0) {
      return x0["monadZero"];
    };
  exports["RawMonadZero"]["_86@178150207"]["_>>_"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Category_Monad_Indexed["RawIMonadZero"]["_214@15579464"]["_>>_"](undefined)(undefined)(undefined)(undefined)(x0);
        };
      };
    };
  exports["RawMonad"]["_42@178150207"]["pure"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonad"]["_156@15579464"]["pure"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["_>>_"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["_>>_"](undefined)(undefined)(undefined)(undefined)(x0);
        };
      };
    };
  exports["RawMonadZero"]["_86@178150207"]["rawFunctor"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadZero"]["_214@15579464"]["rawFunctor"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonad"]["_42@178150207"]["_=<<_"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Category_Monad_Indexed["RawIMonad"]["_=<<_"](undefined)(undefined)(undefined)(undefined)(x0);
        };
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["_⊛>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["_⊛>_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonad"]["_42@178150207"]["_<$>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonad"]["_156@15579464"]["_<$>_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["_<⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["_<⊛_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadZero"]["_86@178150207"]["_<⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadZero"]["_214@15579464"]["_<⊛_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonad"]["_42@178150207"]["_⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonad"]["_156@15579464"]["_⊛_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["zipWith"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["zipWith"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadZero"]["_86@178150207"]["join"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadZero"]["_214@15579464"]["join"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonad"]["_42@178150207"]["_<=<_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonad"]["_<=<_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonad"]["_42@178150207"]["_⊛>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonad"]["_156@15579464"]["_⊛>_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadZero"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["join"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["join"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadZero"]["_86@178150207"]["_=<<_"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Category_Monad_Indexed["RawIMonadZero"]["_214@15579464"]["_=<<_"](undefined)(undefined)(undefined)(undefined)(x0);
        };
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["∅"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["∅"](undefined)(undefined)(undefined)(undefined)(x0);
        };
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["_=<<_"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["_=<<_"](undefined)(undefined)(undefined)(undefined)(x0);
        };
      };
    };
  exports["RawMonadZero"]["_86@178150207"]["monad"] = function (x0) {
      return x0["monad"];
    };
  exports["RawMonadZero"]["_86@178150207"]["_⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadZero"]["_214@15579464"]["_⊛_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadPlus"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["RawMonadZero"]["_86@178150207"]["zipWith"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadZero"]["_214@15579464"]["zipWith"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["_<$>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["_<$>_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonad"]["_42@178150207"]["_>>=_"] = function (x0) {
      return x0["_>>=_"];
    };
  exports["RawMonad"]["_42@178150207"]["return"] = function (x0) {
      return x0["return"];
    };
  exports["RawMonadPlus"]["_134@178150207"]["_⊗_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["_⊗_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["rawIApplicative"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["rawIApplicative"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadZero"]["_86@178150207"]["_<$>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadZero"]["_214@15579464"]["_<$>_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonad"]["_42@178150207"]["_⊗_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonad"]["_156@15579464"]["_⊗_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonad"]["_42@178150207"]["zipWith"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonad"]["_156@15579464"]["zipWith"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["_⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["_⊛_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonad"]["_42@178150207"]["_<$_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonad"]["_156@15579464"]["_<$_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadZero"]["_86@178150207"]["_<=<_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadZero"]["_214@15579464"]["_<=<_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadPlus"]["_134@178150207"]["return"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["return"](undefined)(undefined)(undefined)(undefined)(x0);
        };
      };
    };
  exports["RawMonadZero"]["_86@178150207"]["∅"] = function (x0) {
      return x0["∅"];
    };
  exports["RawMonadPlus"]["_134@178150207"]["_<=<_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadPlus"]["_288@15579464"]["_<=<_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawMonadZero"]["_86@178150207"]["_⊛>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Monad_Indexed["RawIMonadZero"]["_214@15579464"]["_⊛>_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  });
