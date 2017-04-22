define(["exports"],function(exports) {
  exports["Lift"] = {};
  exports["Lift"]["lower"] = function (x0) {
      return x0["lower"];
    };
  exports["Lift"]["lift"] = function (x0) {
      return {
        "lift": function (x1) {
          return x1["lift"](x0);
        },
        "lower": x0
      };
    };
  });
