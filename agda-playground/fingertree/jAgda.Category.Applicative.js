define(["exports","jAgda.Agda.Primitive","jAgda.Category.Applicative.Indexed"],function(exports,jAgda_Agda_Primitive,jAgda_Category_Applicative_Indexed) {
  exports["RawApplicative"] = {};
  exports["RawApplicative"]["_22@45830940"] = {};
  exports["RawApplicative"]["_22@45830940"]["zipWith"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Applicative_Indexed["RawIApplicative"]["zipWith"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawApplicative"]["_22@45830940"]["_<$_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Applicative_Indexed["RawIApplicative"]["RF"]["_<$_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawApplicative"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["RawApplicative"]["_22@45830940"]["rawFunctor"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Applicative_Indexed["RawIApplicative"]["rawFunctor"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawApplicative"]["_22@45830940"]["pure"] = function (x0) {
      return x0["pure"];
    };
  exports["RawApplicative"]["_22@45830940"]["_⊛>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Applicative_Indexed["RawIApplicative"]["_⊛>_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawApplicative"]["_22@45830940"]["_⊛_"] = function (x0) {
      return x0["_⊛_"];
    };
  exports["RawApplicative"]["_22@45830940"]["_⊗_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Applicative_Indexed["RawIApplicative"]["_⊗_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawApplicative"]["_22@45830940"]["_<⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Applicative_Indexed["RawIApplicative"]["_<⊛_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  exports["RawApplicative"]["_22@45830940"]["_<$>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Category_Applicative_Indexed["RawIApplicative"]["RF"]["_<$>_"](jAgda_Agda_Primitive["lzero"])(x0)("*")(function (x3) {
            return function (x4) {
              return x1;
            };
          })(x2);
        };
      };
    };
  });
