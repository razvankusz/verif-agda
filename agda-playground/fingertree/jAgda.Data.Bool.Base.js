define(["exports","jAgda.Agda.Builtin.Equality","jAgda.Relation.Nullary"],function(exports,jAgda_Agda_Builtin_Equality,jAgda_Relation_Nullary) {
  exports["_≟_"] = function (x0) {
      if (x0) {
        return function (x1) {
          if (x1) {
            return jAgda_Relation_Nullary["Dec"]["yes"](jAgda_Agda_Builtin_Equality["_≡_"]["refl"]);
          } else {
            return jAgda_Relation_Nullary["Dec"]["no"](function (x2) {
              return undefined;
            });
          }
        };
      } else {
        return function (x1) {
          if (x1) {
            return jAgda_Relation_Nullary["Dec"]["no"](function (x2) {
              return undefined;
            });
          } else {
            return jAgda_Relation_Nullary["Dec"]["yes"](jAgda_Agda_Builtin_Equality["_≡_"]["refl"]);
          }
        };
      }
    };
  exports["_∨_"] = function (x0) {
      if (x0) {
        return function (x1) {
          return true;
        };
      } else {
        return function (x1) {
          return x1;
        };
      }
    };
  exports["if_then_else_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          if (x2) {
            return function (x3) {
              return function (x4) {
                return x3;
              };
            };
          } else {
            return function (x3) {
              return function (x4) {
                return x4;
              };
            };
          }
        };
      };
    };
  exports["_xor_"] = function (x0) {
      if (x0) {
        return function (x1) {
          return exports["not"](x1);
        };
      } else {
        return function (x1) {
          return x1;
        };
      }
    };
  exports[".absurdlambda"] = function (x0) {
      return undefined;
    };
  exports["_∧_"] = function (x0) {
      if (x0) {
        return function (x1) {
          return x1;
        };
      } else {
        return function (x1) {
          return false;
        };
      }
    };
  exports["T"] = function (x0) {
      return "*";
    };
  exports[".absurdlambda"] = function (x0) {
      return undefined;
    };
  exports["not"] = function (x0) {
      if (x0) {
        return false;
      } else {
        return true;
      }
    };
  });
