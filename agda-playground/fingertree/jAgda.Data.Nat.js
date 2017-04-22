define(["exports","jAgda.Agda.Builtin.Equality","jAgda.Agda.Builtin.Nat","jAgda.Agda.Primitive","jAgda.Data.Nat.Base","jAgda.Data.Sum","jAgda.Relation.Binary","jAgda.Relation.Binary.PartialOrderReasoning","jAgda.Relation.Binary.PreorderReasoning","jAgda.Relation.Binary.PropositionalEquality","jAgda.Relation.Binary.PropositionalEquality.Core","jAgda.Relation.Nullary.Decidable"],function(exports,jAgda_Agda_Builtin_Equality,jAgda_Agda_Builtin_Nat,jAgda_Agda_Primitive,jAgda_Data_Nat_Base,jAgda_Data_Sum,jAgda_Relation_Binary,jAgda_Relation_Binary_PartialOrderReasoning,jAgda_Relation_Binary_PreorderReasoning,jAgda_Relation_Binary_PropositionalEquality,jAgda_Relation_Binary_PropositionalEquality_Core,jAgda_Relation_Nullary_Decidable) {
  exports["≤-Reasoning"] = {};
  exports["≤-Reasoning"]["_66@166314648"] = {};
  exports["≤-Reasoning"]["_66@166314648"]["_IsRelatedTo_"] = {};
  exports["_16@166314648"] = {};
  exports["_16@166314648"]["trans"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "s≤s": function (x4, x5, x6) {
                return function (x7) {
                  return x7({
                    "s≤s": function (x8, x9, x10) {
                      return jAgda_Data_Nat_Base["_≤_"]["s≤s"](x4)(x9)(exports["_16@166314648"]["trans"](x4)(x5)(x9)(x6)(x10));
                    },
                    "z≤n": function () {
                      return undefined;
                    }
                  });
                };
              },
              "z≤n": function (x4) {
                return function (x5) {
                  return jAgda_Data_Nat_Base["_≤_"]["z≤n"](x2);
                };
              }
            });
          };
        };
      };
    };
  exports["≤-Reasoning"]["_66@166314648"]["_IsRelatedTo_"]["relTo"] = function (x0) {
      return function (x1) {
        return x1["relTo"](x0);
      };
    };
  exports["_16@166314648"]["refl′"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return function (x3) {
              return x3({
                "refl": function () {
                  return jAgda_Data_Nat_Base["_≤_"]["s≤s"](x1)(x1)(exports["_16@166314648"]["refl′"](x1)(x1)(jAgda_Agda_Builtin_Equality["_≡_"]["refl"]));
                }
              });
            };
          };
        },
        "zero": function () {
          return function (x1) {
            return function (x2) {
              return x2({
                "refl": function () {
                  return jAgda_Data_Nat_Base["_≤_"]["z≤n"](0);
                }
              });
            };
          };
        }
      });
    };
  exports["_16@166314648"]["with-48"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "inj₁": function (x3) {
              return jAgda_Data_Sum["_⊎_"]["inj₁"](jAgda_Data_Nat_Base["_≤_"]["s≤s"](x0)(x1)(x3));
            },
            "inj₂": function (x3) {
              return jAgda_Data_Sum["_⊎_"]["inj₂"](jAgda_Data_Nat_Base["_≤_"]["s≤s"](x1)(x0)(x3));
            }
          });
        };
      };
    };
  exports["eq?"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Nullary_Decidable["_106@161698229"]["via-injection"](x0)(x0)(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Relation_Binary_PropositionalEquality["setoid"](x0)(x1))(jAgda_Relation_Binary_PropositionalEquality["setoid"](jAgda_Agda_Primitive["lzero"])("*"))(x2)(jAgda_Data_Nat_Base["_≟_"]);
        };
      };
    };
  exports["≤-Reasoning"]["_66@166314648"]["_≈⟨⟩_"] = function () {
      return function () {
        return function (x0) {
          return function (x1) {
            return jAgda_Relation_Binary_PreorderReasoning["_≈⟨⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined);
          };
        };
      };
    };
  exports["_16@166314648"]["antisym"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
          };
        };
      };
    };
  exports["≤-Reasoning"]["_<⟨_⟩_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["≤-Reasoning"]["_66@166314648"]["_∼⟨_⟩_"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x0))(x1)(x2)(x3)(x4);
            };
          };
        };
      };
    };
  exports["_16@166314648"]["total"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3) {
                return exports["_16@166314648"]["with-48"](x1)(x3)(exports["_16@166314648"]["total"](x1)(x3));
              },
              "zero": function () {
                return jAgda_Data_Sum["_⊎_"]["inj₂"](jAgda_Data_Nat_Base["_≤_"]["z≤n"](x0));
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return x1({
              "suc": function () {
                return jAgda_Data_Sum["_⊎_"]["inj₁"](jAgda_Data_Nat_Base["_≤_"]["z≤n"](x1));
              },
              "zero": function () {
                return jAgda_Data_Sum["_⊎_"]["inj₁"](jAgda_Data_Nat_Base["_≤_"]["z≤n"](x1));
              }
            });
          };
        }
      });
    };
  exports["≤-Reasoning"]["_66@166314648"]["relTo"] = function (x0) {
      return function (x1) {
        return x1["relTo"](x0);
      };
    };
  exports["_16@166314648"]["with-28"] = function (x0) {
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
  exports["≤-Reasoning"]["_66@166314648"]["begin_"] = function () {
      return function () {
        return function (x0) {
          return function (x1) {
            return jAgda_Relation_Binary_PreorderReasoning["begin_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined);
          };
        };
      };
    };
  exports["decTotalOrder"] = jAgda_Relation_Binary["DecTotalOrder"]["record"]("*")("*")("*")(jAgda_Relation_Binary["IsDecTotalOrder"]["record"](jAgda_Relation_Binary["IsTotalOrder"]["record"](jAgda_Relation_Binary["IsPartialOrder"]["record"](jAgda_Relation_Binary["IsPreorder"]["record"](jAgda_Relation_Binary_PropositionalEquality_Core["isEquivalence"](jAgda_Agda_Primitive["lzero"])("*"))(exports["_16@166314648"]["refl′"])(exports["_16@166314648"]["trans"]))(function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_Equality["_≡_"]["refl"];
          };
        };
      };
    }))(exports["_16@166314648"]["total"]))(jAgda_Data_Nat_Base["_≟_"])(jAgda_Data_Nat_Base["_≤?_"]));
  exports["≤-Reasoning"]["_66@166314648"]["_∼⟨_⟩_"] = jAgda_Relation_Binary_PartialOrderReasoning["_50@260426602"]["_∼⟨_⟩_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Relation_Binary["DecTotalOrder"]["_1098@10167932"]["poset"](undefined)(undefined)(undefined)(exports["decTotalOrder"]));
  exports["≤-Reasoning"]["_66@166314648"]["_∎"] = jAgda_Relation_Binary_PartialOrderReasoning["_50@260426602"]["_∎"](undefined)(undefined)(undefined)(jAgda_Relation_Binary["DecTotalOrder"]["_1098@10167932"]["poset"](undefined)(undefined)(undefined)(exports["decTotalOrder"]));
  exports["≤-Reasoning"]["_66@166314648"]["_≈⟨_⟩_"] = jAgda_Relation_Binary_PartialOrderReasoning["_50@260426602"]["_≈⟨_⟩_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Relation_Binary["DecTotalOrder"]["_1098@10167932"]["poset"](undefined)(undefined)(undefined)(exports["decTotalOrder"]));
  });
