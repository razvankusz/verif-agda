define(["exports","jAgda.Agda.Builtin.Char","jAgda.Agda.Builtin.Equality","jAgda.Agda.Primitive","jAgda.Data.Char.Base","jAgda.Data.Nat.Properties","jAgda.Relation.Binary.On","jAgda.Relation.Binary.PropositionalEquality","jAgda.Relation.Nullary","jAgda.Relation.Nullary.Decidable"],function(exports,jAgda_Agda_Builtin_Char,jAgda_Agda_Builtin_Equality,jAgda_Agda_Primitive,jAgda_Data_Char_Base,jAgda_Data_Nat_Properties,jAgda_Relation_Binary_On,jAgda_Relation_Binary_PropositionalEquality,jAgda_Relation_Nullary,jAgda_Relation_Nullary_Decidable) {
  exports["_≟_"] = function (x0) {
      return function (x1) {
        return exports["with-10"](x0)(x1)(jAgda_Agda_Builtin_Char["primCharEquality"](x0)(x1));
      };
    };
  exports["_24@168298123"] = {};
  exports["_24@168298123"]["whatever"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return undefined;
        };
      };
    };
  exports["_==_"] = function (x0) {
      return function (x1) {
        return jAgda_Relation_Nullary_Decidable["⌊_⌋"](jAgda_Agda_Primitive["lzero"])("*")(exports["_≟_"](x0)(x1));
      };
    };
  exports["with-10"] = function (x0) {
      return function (x1) {
        return function (x2) {
          if (x2) {
            return jAgda_Relation_Nullary["Dec"]["yes"](function (x3) {
              return function (x4) {
                return function (x5) {
                  return function (x6) {
                    return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
                  };
                };
              };
            });
          } else {
            return jAgda_Relation_Nullary["Dec"]["no"](function (x3) {
              return function (x4) {
                return function (x5) {
                  return undefined;
                };
              };
            });
          }
        };
      };
    };
  exports["setoid"] = jAgda_Relation_Binary_PropositionalEquality["setoid"](jAgda_Agda_Primitive["lzero"])("*");
  exports["decSetoid"] = jAgda_Relation_Binary_PropositionalEquality["decSetoid"](jAgda_Agda_Primitive["lzero"])("*")(exports["_≟_"]);
  exports["strictTotalOrder"] = jAgda_Relation_Binary_On["strictTotalOrder"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")(jAgda_Data_Nat_Properties["strictTotalOrder"])(jAgda_Data_Char_Base["toNat"]);
  });
