define(["exports"],function(exports) {
  exports["∞"] = {};
  exports["♭"] = function (x0) {
      return x0["♭"];
    };
  exports["♯_"] = function (x0) {
      return {
        "♭": x0,
        "♯_": function (x1) {
          return x1["♯_"](x0);
        }
      };
    };
  });
