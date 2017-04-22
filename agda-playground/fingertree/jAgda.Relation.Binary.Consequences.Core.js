define(["exports","jAgda.Data.Product"],function(exports,jAgda_Data_Product) {
  exports["subst⟶resp₂"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Data_Product["Σ"]["_,_"](function (x7) {
                    return x6(x5(x7));
                  })(function (x7) {
                    return x6(function (x8) {
                      return x5(x8)(x7);
                    });
                  });
                };
              };
            };
          };
        };
      };
    };
  });
