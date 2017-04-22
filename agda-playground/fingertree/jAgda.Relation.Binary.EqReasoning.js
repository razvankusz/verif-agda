define(["exports","jAgda.Relation.Binary","jAgda.Relation.Binary.PreorderReasoning"],function(exports,jAgda_Relation_Binary,jAgda_Relation_Binary_PreorderReasoning) {
  exports["_34@177836773"] = {};
  exports["_34@177836773"]["_IsRelatedTo_"] = {};
  exports["_34@177836773"]["relTo"] = function (x0) {
      return function (x1) {
        return x1["relTo"](x0);
      };
    };
  exports["_34@177836773"]["begin_"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function (x0) {
                return function (x1) {
                  return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined);
                };
              };
            };
          };
        };
      };
    };
  exports["_34@177836773"]["_≈⟨⟩_"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function (x0) {
                return function (x1) {
                  return jAgda_Relation_Binary_PreorderReasoning["_≈⟨⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined);
                };
              };
            };
          };
        };
      };
    };
  exports["_34@177836773"]["_≈⟨_⟩_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary_PreorderReasoning["_≈⟨_⟩_"](x0)(x0)(x1)(exports["_12@177836773"]["preorder"](x0)(x1)(x2));
        };
      };
    };
  exports["_12@177836773"] = {};
  exports["_12@177836773"]["preorder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary["Setoid"]["preorder"](x0)(x1)(x2);
        };
      };
    };
  exports["_34@177836773"]["_∼⟨_⟩_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary_PreorderReasoning["_∼⟨_⟩_"](x0)(x0)(x1)(exports["_12@177836773"]["preorder"](x0)(x1)(x2));
        };
      };
    };
  exports["_34@177836773"]["_∎"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary_PreorderReasoning["_∎"](undefined)(undefined)(undefined)(exports["_12@177836773"]["preorder"](x0)(x1)(x2));
        };
      };
    };
  exports["_34@177836773"]["_IsRelatedTo_"]["relTo"] = function (x0) {
      return function (x1) {
        return x1["relTo"](x0);
      };
    };
  });
