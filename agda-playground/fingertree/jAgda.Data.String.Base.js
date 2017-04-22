define(["exports","jAgda.Agda.Builtin.Equality","jAgda.Agda.Builtin.String"],function(exports,jAgda_Agda_Builtin_Equality,jAgda_Agda_Builtin_String) {
  exports["fromList∘toList"] = function (x0) {
      return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
    };
  exports["unlines"] = function (x0) {
      return x0({
        "[]": function () {
          return "";
        },
        "_∷_": function (x1, x2) {
          return exports["_++_"](x1)(exports["_++_"]("\n")(exports["unlines"](x2)));
        }
      });
    };
  exports["toList∘fromList"] = function (x0) {
      return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
    };
  exports["toList"] = jAgda_Agda_Builtin_String["primStringToList"];
  exports["_++_"] = jAgda_Agda_Builtin_String["primStringAppend"];
  exports["fromList"] = jAgda_Agda_Builtin_String["primStringFromList"];
  exports["show"] = jAgda_Agda_Builtin_String["primShowString"];
  });
