define(["exports","jAgda.Agda.Builtin.Equality","jAgda.Relation.Binary.Consequences.Core","jAgda.Relation.Binary.Core"],function(exports,jAgda_Agda_Builtin_Equality,jAgda_Relation_Binary_Consequences_Core,jAgda_Relation_Binary_Core) {
  exports["trans"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                };
              };
            };
          };
        };
      };
    };
  exports["isEquivalence"] = function (x0) {
      return function (x1) {
        return jAgda_Relation_Binary_Core["IsEquivalence"]["record"](function (x2) {
          return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
        })(function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                };
              };
            };
          };
        })(function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                    };
                  };
                };
              };
            };
          };
        });
      };
    };
  exports["subst"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return x6({
                    "refl": function () {
                      return function (x7) {
                        return x7;
                      };
                    }
                  });
                };
              };
            };
          };
        };
      };
    };
  exports["sym"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
            };
          };
        };
      };
    };
  exports["resp₂"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Relation_Binary_Consequences_Core["subst⟶resp₂"](x0)(x0)(x1)(x2)("*")(x3)(exports["subst"](x0)(x1)(x2));
          };
        };
      };
    };
  });
