define(["exports","jAgda.Agda.Builtin.Equality"],function(exports,jAgda_Agda_Builtin_Equality) {
  exports["erase"] = function (x0) {
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
  exports["trustMe"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
          };
        };
      };
    };
  });
