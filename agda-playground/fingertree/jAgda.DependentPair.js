define(["exports"],function(exports) {
  exports["Σ"] = {};
  exports["Σ"]["snd"] = function (x0) {
      return x0["snd"];
    };
  exports["Σ"]["⟨_,_⟩"] = function (x0) {
      return function (x1) {
        return {
          "fst": x0,
          "snd": x1,
          "⟨_,_⟩": function (x2) {
            return x2["⟨_,_⟩"](x0, x1);
          }
        };
      };
    };
  exports["Σ"]["fst"] = function (x0) {
      return x0["fst"];
    };
  });
