define(["exports"],function(exports) {
  exports["Nat"] = {};
  exports["Nat"]["zero"] = function (x0) {
      return x0["zero"]();
    };
  exports["Nat"]["suc"] = function (x0) {
      return function (x1) {
        return x1["suc"](x0);
      };
    };
  exports["div-helper"] = undefined;
  exports["_==_"] = undefined;
  exports["_-_"] = undefined;
  exports["mod-helper"] = undefined;
  exports["_*_"] = undefined;
  exports["_<_"] = undefined;
  exports["_+_"] = undefined;
  });
