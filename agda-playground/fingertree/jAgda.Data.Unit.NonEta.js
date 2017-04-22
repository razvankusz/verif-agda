define(["exports"],function(exports) {
  exports["Unit"] = {};
  exports["Hidden"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["hide"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return x6({
                    "unit": function () {
                      return x4(x5);
                    }
                  });
                };
              };
            };
          };
        };
      };
    };
  exports["reveal"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2(exports["Unit"]["unit"]);
        };
      };
    };
  exports["Unit"]["unit"] = function (x0) {
      return x0["unit"]();
    };
  });
