define(["exports","jAgda.Function"],function(exports,jAgda_Function) {
  exports["RawFunctor"] = {};
  exports["RawFunctor"]["record"] = function (x0) {
      return {
        "_<$>_": x0,
        "record": function (x1) {
          return x1["record"](x0);
        }
      };
    };
  exports["RawFunctor"]["_<$_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["RawFunctor"]["_<$>_"](undefined)(undefined)(x2)(x4)(x3)(jAgda_Function["const"](x0)(x0)(x3)(x4)(x5))(x6);
                };
              };
            };
          };
        };
      };
    };
  exports["RawFunctor"]["_<$>_"] = function (x0) {
      return x0["_<$>_"];
    };
  });
