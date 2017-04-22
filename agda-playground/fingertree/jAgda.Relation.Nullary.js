define(["exports"],function(exports) {
  exports["Dec"] = {};
  exports["¬_"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["Dec"]["yes"] = function (x0) {
      return function (x1) {
        return x1["yes"](x0);
      };
    };
  exports["Dec"]["no"] = function (x0) {
      return function (x1) {
        return x1["no"](x0);
      };
    };
  });
