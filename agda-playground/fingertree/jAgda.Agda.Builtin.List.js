define(["exports"],function(exports) {
  exports["List"] = {};
  exports["List"]["_∷_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["_∷_"](x0, x1);
        };
      };
    };
  exports["List"]["[]"] = function (x0) {
      return x0["[]"]();
    };
  });
