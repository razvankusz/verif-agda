define(["exports","jAgda.Relation.Binary"],function(exports,jAgda_Relation_Binary) {
  exports["_IsRelatedTo_"] = {};
  exports["begin_"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return x0({
                    "relTo": function (x1) {
                      return x1;
                    }
                  });
                };
              };
            };
          };
        };
      };
    };
  exports["_≈⟨⟩_"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return x0;
                };
              };
            };
          };
        };
      };
    };
  exports["_∎"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return function (x1) {
              return exports["_IsRelatedTo_"]["relTo"](jAgda_Relation_Binary["Preorder"]["_94@10167932"]["refl"](undefined)(undefined)(undefined)(x0)(x1));
            };
          };
        };
      };
    };
  exports["_≈⟨_⟩_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "relTo": function (x9) {
                          return exports["_IsRelatedTo_"]["relTo"](jAgda_Relation_Binary["Preorder"]["_94@10167932"]["trans"](undefined)(undefined)(undefined)(x3)(x4)(x5)(x6)(jAgda_Relation_Binary["Preorder"]["_94@10167932"]["reflexive"](undefined)(undefined)(undefined)(x3)(x4)(x5)(x7))(x9));
                        }
                      });
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_IsRelatedTo_"]["relTo"] = function (x0) {
      return function (x1) {
        return x1["relTo"](x0);
      };
    };
  exports["_∼⟨_⟩_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "relTo": function (x9) {
                          return exports["_IsRelatedTo_"]["relTo"](jAgda_Relation_Binary["Preorder"]["_94@10167932"]["trans"](undefined)(undefined)(undefined)(x3)(x4)(x5)(x6)(x7)(x9));
                        }
                      });
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  });
