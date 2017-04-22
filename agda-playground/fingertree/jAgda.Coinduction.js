define(["exports"],function(exports) {
  exports["Rec"] = {};
  exports["unfold"] = function () {
      return function () {
        return function (x0) {
          return x0({
            "fold": function (x1) {
              return x1;
            }
          });
        };
      };
    };
  exports["Rec"]["fold"] = function (x0) {
      return function (x1) {
        return x1["fold"](x0);
      };
    };
  });
