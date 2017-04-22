define(["exports","jAgda.Agda.Builtin.Equality","jAgda.Agda.Primitive","jAgda.Data.Sum","jAgda.Data.Unit.Base","jAgda.Relation.Binary","jAgda.Relation.Binary.PropositionalEquality","jAgda.Relation.Binary.PropositionalEquality.Core","jAgda.Relation.Nullary"],function(exports,jAgda_Agda_Builtin_Equality,jAgda_Agda_Primitive,jAgda_Data_Sum,jAgda_Data_Unit_Base,jAgda_Relation_Binary,jAgda_Relation_Binary_PropositionalEquality,jAgda_Relation_Binary_PropositionalEquality_Core,jAgda_Relation_Nullary) {
  exports["_≤?_"] = function (x0) {
      return function (x1) {
        return jAgda_Relation_Nullary["Dec"]["yes"](jAgda_Data_Unit_Base["_≤_"]["record"]);
      };
    };
  exports["total"] = function (x0) {
      return function (x1) {
        return jAgda_Data_Sum["_⊎_"]["inj₁"](jAgda_Data_Unit_Base["_≤_"]["record"]);
      };
    };
  exports["_≟_"] = function (x0) {
      return function (x1) {
        return jAgda_Relation_Nullary["Dec"]["yes"](jAgda_Agda_Builtin_Equality["_≡_"]["refl"]);
      };
    };
  exports["_18@127442662"] = {};
  exports["_18@127442662"]["antisym"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
          };
        };
      };
    };
  exports["decTotalOrder"] = jAgda_Relation_Binary["DecTotalOrder"]["record"]("*")("*")("*")(jAgda_Relation_Binary["IsDecTotalOrder"]["record"](jAgda_Relation_Binary["IsTotalOrder"]["record"](jAgda_Relation_Binary["IsPartialOrder"]["record"](jAgda_Relation_Binary["IsPreorder"]["record"](jAgda_Relation_Binary_PropositionalEquality_Core["isEquivalence"](jAgda_Agda_Primitive["lzero"])("*"))(function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Data_Unit_Base["_≤_"]["record"];
        };
      };
    })(function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Data_Unit_Base["_≤_"]["record"];
            };
          };
        };
      };
    }))(function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
              };
            };
          };
        };
      };
    }))(exports["total"]))(exports["_≟_"])(exports["_≤?_"]));
  exports["poset"] = jAgda_Relation_Binary["DecTotalOrder"]["_1098@10167932"]["poset"](undefined)(undefined)(undefined)(exports["decTotalOrder"]);
  exports["preorder"] = jAgda_Relation_Binary_PropositionalEquality["preorder"](jAgda_Agda_Primitive["lzero"])("*");
  exports["decSetoid"] = jAgda_Relation_Binary["DecTotalOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(exports["decTotalOrder"]);
  exports["setoid"] = jAgda_Relation_Binary_PropositionalEquality["setoid"](jAgda_Agda_Primitive["lzero"])("*");
  });
