define(["exports","jAgda.Agda.Builtin.Equality"],function(exports,jAgda_Agda_Builtin_Equality) {
  exports["_≅_"] = {};
  exports["_≅_"]["refl"] = function (x0) {
      return x0["refl"]();
    };
  exports["≅-to-≡"] = function (x0) {
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
  });
