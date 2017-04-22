define(["exports","jAgda.Data.Product","jAgda.Function","jAgda.Relation.Binary.Consequences","jAgda.Relation.Binary.Core","jAgda.Relation.Binary.Indexed.Core","jAgda.Relation.Binary.PropositionalEquality.Core"],function(exports,jAgda_Data_Product,jAgda_Function,jAgda_Relation_Binary_Consequences,jAgda_Relation_Binary_Core,jAgda_Relation_Binary_Indexed_Core,jAgda_Relation_Binary_PropositionalEquality_Core) {
  exports["IsTotalOrder"] = {};
  exports["IsStrictTotalOrder"] = {};
  exports["Setoid"] = {};
  exports["DecPoset"] = {};
  exports["DecSetoid"] = {};
  exports["IsDecEquivalence"] = {};
  exports["IsDecTotalOrder"] = {};
  exports["DecTotalOrder"] = {};
  exports["Preorder"] = {};
  exports["DecStrictPartialOrder"] = {};
  exports["StrictTotalOrder"] = {};
  exports["IsStrictPartialOrder"] = {};
  exports["StrictPartialOrder"] = {};
  exports["IsPreorder"] = {};
  exports["IsDecStrictPartialOrder"] = {};
  exports["TotalOrder"] = {};
  exports["Poset"] = {};
  exports["IsDecPartialOrder"] = {};
  exports["IsPartialOrder"] = {};
  exports["Poset"]["_324@10167932"] = {};
  exports["Poset"]["_324@10167932"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsPartialOrder"]["_272@10167932"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Poset"]["isPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecTotalOrder"]["totalOrder"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["TotalOrder"]["record"](function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return "*";
                  };
                };
              };
            })(function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return function (x5) {
                      return function (x6) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return function (x5) {
                      return function (x6) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["DecTotalOrder"]["DTO"]["isTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsStrictPartialOrder"]["Eq"] = {};
  exports["IsStrictPartialOrder"]["Eq"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return jAgda_Relation_Binary_Core["IsEquivalence"]["sym"](undefined)(undefined)(undefined)(undefined)(exports["IsStrictPartialOrder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["TotalOrder"]["_902@10167932"] = {};
  exports["TotalOrder"]["_902@10167932"]["∼-resp-≈"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["IsTotalOrder"]["_846@10167932"]["∼-resp-≈"](x0)(x1)(x2)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["TotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["IsPreorder"]["trans"] = function (x0) {
      return x0["trans"];
    };
  exports["DecTotalOrder"]["DTO"] = {};
  exports["DecTotalOrder"]["DTO"]["isPartialOrder"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecTotalOrder"]["TO"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecTotalOrder"]["isDecTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["Eq"] = {};
  exports["DecStrictPartialOrder"]["Eq"]["_788@10167932"] = {};
  exports["DecStrictPartialOrder"]["Eq"]["_788@10167932"]["sym"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["_218@10167932"]["sym"](undefined)(undefined)(exports["DecStrictPartialOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["StrictPartialOrder"]["_618@10167932"] = {};
  exports["StrictPartialOrder"]["_618@10167932"]["Eq"] = {};
  exports["StrictPartialOrder"]["_618@10167932"]["Eq"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["IsStrictPartialOrder"]["Eq"]["reflexive"](x0)(x1)(x2)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["StrictPartialOrder"]["isStrictPartialOrder"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["TotalOrder"]["_902@10167932"]["antisym"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsTotalOrder"]["_846@10167932"]["antisym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["TotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsDecPartialOrder"]["PO"] = {};
  exports["IsDecPartialOrder"]["PO"]["antisym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPartialOrder"]["antisym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDecPartialOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Setoid"]["isEquivalence"] = function (x0) {
      return x0["isEquivalence"];
    };
  exports["DecSetoid"]["isDecEquivalence"] = function (x0) {
      return x0["isDecEquivalence"];
    };
  exports["StrictTotalOrder"]["_1228@10167932"] = {};
  exports["StrictTotalOrder"]["_1228@10167932"]["isDecEquivalence"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["IsStrictTotalOrder"]["isDecEquivalence"](x0)(x1)(x2)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["StrictTotalOrder"]["isStrictTotalOrder"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["IsDecTotalOrder"]["TO"] = {};
  exports["IsDecTotalOrder"]["TO"]["isPreorder"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsTotalOrder"]["_846@10167932"]["isPreorder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDecTotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecPoset"]["DPO"] = {};
  exports["DecPoset"]["DPO"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecPartialOrder"]["PO"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecPoset"]["isDecPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["Preorder"]["_94@10167932"] = {};
  exports["Preorder"]["_94@10167932"]["∼-resp-≈"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["IsPreorder"]["∼-resp-≈"](x0)(x1)(x2)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["Preorder"]["isPreorder"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["DecTotalOrder"]["Eq"] = {};
  exports["DecTotalOrder"]["Eq"]["_1108@10167932"] = {};
  exports["DecTotalOrder"]["Eq"]["_1108@10167932"]["sym"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["_218@10167932"]["sym"](undefined)(undefined)(exports["DecTotalOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["StrictPartialOrder"]["isStrictPartialOrder"] = function (x0) {
      return x0["isStrictPartialOrder"];
    };
  exports["IsDecEquivalence"]["_≟_"] = function (x0) {
      return x0["_≟_"];
    };
  exports["IsDecStrictPartialOrder"]["Eq"] = {};
  exports["IsDecStrictPartialOrder"]["Eq"]["_706@10167932"] = {};
  exports["IsDecStrictPartialOrder"]["Eq"]["_706@10167932"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["_186@10167932"]["refl"](undefined)(undefined)(undefined)(undefined)(exports["IsDecStrictPartialOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecPoset"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["StrictTotalOrder"]["_<_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["Eq"]["_788@10167932"]["_≟_"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["_218@10167932"]["_≟_"](undefined)(undefined)(exports["DecStrictPartialOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecTotalOrder"]["_≈_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["IsPartialOrder"]["_272@10167932"] = {};
  exports["IsPartialOrder"]["_272@10167932"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPreorder"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsPartialOrder"]["isPreorder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["TotalOrder"]["_934@10167932"] = {};
  exports["TotalOrder"]["_934@10167932"]["preorder"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["Poset"]["preorder"](undefined)(undefined)(undefined)(exports["TotalOrder"]["poset"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsStrictTotalOrder"]["isStrictPartialOrder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsStrictPartialOrder"]["record"](exports["IsStrictTotalOrder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return function (x16) {
                                      return function (x17) {
                                        return undefined;
                                      };
                                    };
                                  };
                                };
                              };
                            };
                          };
                        };
                      };
                    };
                  })(exports["IsStrictTotalOrder"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(exports["IsStrictTotalOrder"]["<-resp-≈"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["IsDecStrictPartialOrder"]["_<?_"] = function (x0) {
      return x0["_<?_"];
    };
  exports["IsDecPartialOrder"]["Eq"] = {};
  exports["IsDecPartialOrder"]["Eq"]["_420@10167932"] = {};
  exports["IsDecPartialOrder"]["Eq"]["_420@10167932"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(exports["IsDecPartialOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsDecTotalOrder"]["Eq"] = {};
  exports["IsDecTotalOrder"]["Eq"]["_1010@10167932"] = {};
  exports["IsDecTotalOrder"]["Eq"]["_1010@10167932"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["_186@10167932"]["refl"](undefined)(undefined)(undefined)(undefined)(exports["IsDecTotalOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["StrictTotalOrder"]["Eq"] = {};
  exports["StrictTotalOrder"]["Eq"]["sym"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["DecSetoid"]["_218@10167932"]["sym"](undefined)(undefined)(exports["StrictTotalOrder"]["decSetoid"](x0)(x1)(x2)(x3));
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["DSPO"] = {};
  exports["DecStrictPartialOrder"]["DSPO"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecStrictPartialOrder"]["SPO"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecStrictPartialOrder"]["isDecStrictPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecPoset"]["Eq"] = {};
  exports["DecPoset"]["Eq"]["_512@10167932"] = {};
  exports["DecPoset"]["Eq"]["_512@10167932"]["isDecEquivalence"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["isDecEquivalence"](undefined)(undefined)(exports["DecPoset"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["Poset"]["_324@10167932"]["Eq"] = {};
  exports["Poset"]["_324@10167932"]["Eq"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["IsPartialOrder"]["_272@10167932"]["Eq"]["reflexive"](x0)(x1)(x2)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["Poset"]["isPartialOrder"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["Preorder"]["_≈_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["DecTotalOrder"]["Eq"]["_1108@10167932"]["_≟_"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["_218@10167932"]["_≟_"](undefined)(undefined)(exports["DecTotalOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsTotalOrder"]["_846@10167932"] = {};
  exports["IsTotalOrder"]["_846@10167932"]["reflexive"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPartialOrder"]["_272@10167932"]["reflexive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsTotalOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["StrictTotalOrder"]["Eq"]["_≟_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["DecSetoid"]["_218@10167932"]["_≟_"](undefined)(undefined)(exports["StrictTotalOrder"]["decSetoid"](x0)(x1)(x2)(x3));
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["_≈_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["DecSetoid"]["setoid"] = function () {
      return function () {
        return function (x0) {
          return exports["Setoid"]["record"](function (x1) {
            return function (x2) {
              return function (x3) {
                return "*";
              };
            };
          })(function (x1) {
            return function (x2) {
              return function (x3) {
                return function (x4) {
                  return function (x5) {
                    return "*";
                  };
                };
              };
            };
          })(exports["DecSetoid"]["_218@10167932"]["isEquivalence"](undefined)(undefined)(x0));
        };
      };
    };
  exports["DecTotalOrder"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return {
              "Carrier": x0,
              "_≈_": x1,
              "_≤_": x2,
              "isDecTotalOrder": x3,
              "record": function (x4) {
                return x4["record"](x0, x1, x2, x3);
              }
            };
          };
        };
      };
    };
  exports["Preorder"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return {
              "Carrier": x0,
              "_∼_": x2,
              "_≈_": x1,
              "isPreorder": x3,
              "record": function (x4) {
                return x4["record"](x0, x1, x2, x3);
              }
            };
          };
        };
      };
    };
  exports["DecTotalOrder"]["Eq"]["_1108@10167932"]["setoid"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["setoid"](undefined)(undefined)(exports["DecTotalOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsTotalOrder"]["_846@10167932"]["Eq"] = {};
  exports["IsTotalOrder"]["_846@10167932"]["Eq"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPartialOrder"]["_272@10167932"]["Eq"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsTotalOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["StrictPartialOrder"]["_<_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["Preorder"]["_94@10167932"]["trans"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsPreorder"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Preorder"]["isPreorder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsDecEquivalence"]["isEquivalence"] = function (x0) {
      return x0["isEquivalence"];
    };
  exports["StrictTotalOrder"]["_≈_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["IsDecStrictPartialOrder"]["Eq"]["_706@10167932"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(exports["IsDecStrictPartialOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsPartialOrder"]["_272@10167932"]["reflexive"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPreorder"]["reflexive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsPartialOrder"]["isPreorder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["Eq"]["_788@10167932"]["_≈_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["DecTotalOrder"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["DecPoset"]["Eq"]["_512@10167932"]["trans"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["_218@10167932"]["trans"](undefined)(undefined)(exports["DecPoset"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsDecPartialOrder"]["Eq"]["_420@10167932"]["_≟_"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["_≟_"](undefined)(undefined)(undefined)(undefined)(exports["IsDecPartialOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsStrictTotalOrder"]["<-resp-≈"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_Consequences["trans∧tri⟶resp≈"](x0)(x1)(x2)(x3)(x4)(x5)(exports["IsStrictTotalOrder"]["Eq"]["sym"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["IsStrictTotalOrder"]["Eq"]["trans"](x0)(x1)(x2)(x3)(x4)(x5)(x6))(exports["IsStrictTotalOrder"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(exports["IsStrictTotalOrder"]["compare"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["IsDecStrictPartialOrder"]["_≟_"] = function (x0) {
      return x0["_≟_"];
    };
  exports["DecStrictPartialOrder"]["DSPO"]["irrefl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return undefined;
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["DecPoset"]["poset"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["Poset"]["record"](function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return "*";
                  };
                };
              };
            })(function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return function (x5) {
                      return function (x6) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return function (x5) {
                      return function (x6) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["DecPoset"]["DPO"]["isPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsDecTotalOrder"]["Eq"]["_1010@10167932"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(exports["IsDecTotalOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["StrictTotalOrder"]["Eq"]["setoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["DecSetoid"]["setoid"](undefined)(undefined)(exports["StrictTotalOrder"]["decSetoid"](x0)(x1)(x2)(x3));
          };
        };
      };
    };
  exports["DecPoset"]["Eq"]["_512@10167932"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["Preorder"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["DecTotalOrder"]["Eq"]["_1108@10167932"]["_≈_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["IsTotalOrder"]["_846@10167932"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPartialOrder"]["_272@10167932"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsTotalOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Poset"]["_324@10167932"]["Eq"]["refl"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsPartialOrder"]["_272@10167932"]["Eq"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Poset"]["isPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecSetoid"]["_218@10167932"] = {};
  exports["DecSetoid"]["_218@10167932"]["trans"] = function () {
      return function () {
        return function (x0) {
          return exports["IsDecEquivalence"]["_186@10167932"]["trans"](undefined)(undefined)(undefined)(undefined)(exports["DecSetoid"]["isDecEquivalence"](undefined)(undefined)(x0));
        };
      };
    };
  exports["StrictTotalOrder"]["Eq"]["_≈_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["IsPreorder"]["∼-resp-≈"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Data_Product["Σ"]["_,_"](function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return exports["IsPreorder"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)(x7)(x8)(x9)(x11)(exports["IsPreorder"]["reflexive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)(x8)(x9)(x10));
                          };
                        };
                      };
                    };
                  })(function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return exports["IsPreorder"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)(x9)(x8)(x7)(jAgda_Function["_$_"](x1)(x2)(x4(x9)(x8))(function (x11) {
                            return x5(x9)(x8);
                          })(exports["IsPreorder"]["reflexive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)(x9)(x8))(exports["IsPreorder"]["Eq"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)(x8)(x9)(x10)));
                        };
                      };
                    };
                  });
                };
              };
            };
          };
        };
      };
    };
  exports["DecTotalOrder"]["DTO"]["∼-resp-≈"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["IsDecTotalOrder"]["TO"]["∼-resp-≈"](x0)(x1)(x2)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["DecTotalOrder"]["isDecTotalOrder"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["IsStrictPartialOrder"]["Eq"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_Core["IsEquivalence"]["reflexive"](x0)(x1)(x3)(x4)(exports["IsStrictPartialOrder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["Poset"]["_324@10167932"]["antisym"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsPartialOrder"]["antisym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Poset"]["isPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsStrictTotalOrder"]["isDecEquivalence"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsDecEquivalence"]["record"](exports["IsStrictTotalOrder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6))(exports["IsStrictTotalOrder"]["_≟_"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["TotalOrder"]["_902@10167932"]["trans"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsTotalOrder"]["_846@10167932"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["TotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["Setoid"]["preorder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Preorder"]["record"](function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })("*")(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["Setoid"]["isPreorder"](x0)(x1)(x2));
        };
      };
    };
  exports["IsPreorder"]["reflexive"] = function (x0) {
      return x0["reflexive"];
    };
  exports["DecStrictPartialOrder"]["Eq"]["_788@10167932"]["setoid"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["setoid"](undefined)(undefined)(exports["DecStrictPartialOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecTotalOrder"]["DTO"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecTotalOrder"]["TO"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecTotalOrder"]["isDecTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["StrictPartialOrder"]["_618@10167932"]["Eq"]["refl"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsStrictPartialOrder"]["Eq"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["StrictPartialOrder"]["isStrictPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["Setoid"]["_≈_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return "*";
            };
          };
        };
      };
    };
  exports["DecPoset"]["DPO"]["antisym"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecPartialOrder"]["PO"]["antisym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecPoset"]["isDecPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecSetoid"]["_≈_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return "*";
            };
          };
        };
      };
    };
  exports["IsDecTotalOrder"]["TO"]["isPartialOrder"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsTotalOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDecTotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["StrictTotalOrder"]["_1228@10167932"]["irrefl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return undefined;
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsDecPartialOrder"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return {
            "_≟_": x1,
            "_≤?_": x2,
            "isPartialOrder": x0,
            "record": function (x3) {
              return x3["record"](x0, x1, x2);
            }
          };
        };
      };
    };
  exports["IsDecStrictPartialOrder"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return {
            "_<?_": x2,
            "_≟_": x1,
            "isStrictPartialOrder": x0,
            "record": function (x3) {
              return x3["record"](x0, x1, x2);
            }
          };
        };
      };
    };
  exports["IsPartialOrder"]["record"] = function (x0) {
      return function (x1) {
        return {
          "antisym": x1,
          "isPreorder": x0,
          "record": function (x2) {
            return x2["record"](x0, x1);
          }
        };
      };
    };
  exports["IsDecPartialOrder"]["_≤?_"] = function (x0) {
      return x0["_≤?_"];
    };
  exports["Setoid"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["TotalOrder"]["isTotalOrder"] = function (x0) {
      return x0["isTotalOrder"];
    };
  exports["DecPoset"]["DPO"]["_≤?_"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecPartialOrder"]["_≤?_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecPoset"]["isDecPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecSetoid"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["StrictTotalOrder"]["_1228@10167932"]["compare"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsStrictTotalOrder"]["compare"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["StrictTotalOrder"]["isStrictTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsDecTotalOrder"]["TO"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsTotalOrder"]["_846@10167932"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDecTotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Preorder"]["_94@10167932"]["reflexive"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsPreorder"]["reflexive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Preorder"]["isPreorder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsTotalOrder"]["_846@10167932"]["Eq"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPartialOrder"]["_272@10167932"]["Eq"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsTotalOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecTotalOrder"]["Eq"]["_1108@10167932"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["DecSetoid"]["_218@10167932"]["reflexive"](x0)(x1)(exports["DecTotalOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["StrictPartialOrder"]["_≈_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["StrictTotalOrder"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["IsDecStrictPartialOrder"]["Eq"]["_706@10167932"]["_≟_"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["_≟_"](undefined)(undefined)(undefined)(undefined)(exports["IsDecStrictPartialOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsPartialOrder"]["_272@10167932"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPreorder"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsPartialOrder"]["isPreorder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecPoset"]["Eq"]["_512@10167932"]["sym"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["_218@10167932"]["sym"](undefined)(undefined)(exports["DecPoset"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsDecStrictPartialOrder"]["isStrictPartialOrder"] = function (x0) {
      return x0["isStrictPartialOrder"];
    };
  exports["IsStrictTotalOrder"]["Eq"] = {};
  exports["IsStrictTotalOrder"]["Eq"]["trans"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsDecEquivalence"]["_186@10167932"]["trans"](undefined)(undefined)(undefined)(undefined)(exports["IsStrictTotalOrder"]["isDecEquivalence"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["TotalOrder"]["poset"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["Poset"]["record"](function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return "*";
                  };
                };
              };
            })(function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return function (x5) {
                      return function (x6) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return function (x5) {
                      return function (x6) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["TotalOrder"]["_902@10167932"]["isPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["StrictTotalOrder"]["Eq"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["DecSetoid"]["_218@10167932"]["reflexive"](x0)(x1)(exports["StrictTotalOrder"]["decSetoid"](x0)(x1)(x2)(x3));
          };
        };
      };
    };
  exports["IsDecTotalOrder"]["Eq"]["_1010@10167932"]["_≟_"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["_≟_"](undefined)(undefined)(undefined)(undefined)(exports["IsDecTotalOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["DSPO"]["<-resp-≈"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecStrictPartialOrder"]["SPO"]["<-resp-≈"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecStrictPartialOrder"]["isDecStrictPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecPoset"]["Eq"]["_512@10167932"]["_≟_"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["_218@10167932"]["_≟_"](undefined)(undefined)(exports["DecPoset"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsTotalOrder"]["_846@10167932"]["isPreorder"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPartialOrder"]["isPreorder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsTotalOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecPoset"]["DPO"]["∼-resp-≈"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["IsDecPartialOrder"]["PO"]["∼-resp-≈"](x0)(x1)(x2)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["DecPoset"]["isDecPartialOrder"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["DecSetoid"]["_218@10167932"]["sym"] = function () {
      return function () {
        return function (x0) {
          return exports["IsDecEquivalence"]["_186@10167932"]["sym"](undefined)(undefined)(undefined)(undefined)(exports["DecSetoid"]["isDecEquivalence"](undefined)(undefined)(x0));
        };
      };
    };
  exports["DecTotalOrder"]["DTO"]["trans"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecTotalOrder"]["TO"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecTotalOrder"]["isDecTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsPreorder"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return function (x1) {
                    return exports["IsPreorder"]["reflexive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0)(x1)(x1)(exports["IsPreorder"]["Eq"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0)(x1));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsStrictPartialOrder"]["Eq"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return jAgda_Relation_Binary_Core["IsEquivalence"]["refl"](undefined)(undefined)(undefined)(undefined)(exports["IsStrictPartialOrder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Setoid"]["isPreorder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsPreorder"]["record"](jAgda_Relation_Binary_PropositionalEquality_Core["isEquivalence"](x0)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          }))(exports["Setoid"]["_138@10167932"]["reflexive"](x0)(x1)(x2))(exports["Setoid"]["_138@10167932"]["trans"](undefined)(undefined)(x2));
        };
      };
    };
  exports["TotalOrder"]["_902@10167932"]["total"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsTotalOrder"]["total"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["TotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsStrictTotalOrder"]["_<?_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_Consequences["tri⟶dec<"](x0)(x1)(x2)(x3)(x4)(x5)(exports["IsStrictTotalOrder"]["compare"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["IsDecPartialOrder"]["PO"]["∼-resp-≈"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsPartialOrder"]["_272@10167932"]["∼-resp-≈"](x0)(x1)(x2)(x3)(x4)(x5)(exports["IsDecPartialOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["IsPartialOrder"]["_272@10167932"]["Eq"] = {};
  exports["IsPartialOrder"]["_272@10167932"]["Eq"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPreorder"]["Eq"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsPartialOrder"]["isPreorder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsPreorder"]["isEquivalence"] = function (x0) {
      return x0["isEquivalence"];
    };
  exports["DecTotalOrder"]["DTO"]["antisym"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecTotalOrder"]["TO"]["antisym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecTotalOrder"]["isDecTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["Eq"]["_788@10167932"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["DecSetoid"]["_218@10167932"]["reflexive"](x0)(x1)(exports["DecStrictPartialOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["IsDecEquivalence"]["record"] = function (x0) {
      return function (x1) {
        return {
          "_≟_": x1,
          "isEquivalence": x0,
          "record": function (x2) {
            return x2["record"](x0, x1);
          }
        };
      };
    };
  exports["StrictTotalOrder"]["Eq"]["refl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["DecSetoid"]["_218@10167932"]["refl"](undefined)(undefined)(exports["StrictTotalOrder"]["decSetoid"](x0)(x1)(x2)(x3));
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["DSPO"]["_≟_"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecStrictPartialOrder"]["_≟_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecStrictPartialOrder"]["isDecStrictPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["DSPO"]["Eq"] = {};
  exports["DecStrictPartialOrder"]["DSPO"]["Eq"]["isDecEquivalence"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecStrictPartialOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecStrictPartialOrder"]["isDecStrictPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecPoset"]["Eq"]["_512@10167932"]["_≈_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["Poset"]["_324@10167932"]["∼-resp-≈"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["IsPartialOrder"]["_272@10167932"]["∼-resp-≈"](x0)(x1)(x2)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["Poset"]["isPartialOrder"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["DecTotalOrder"]["Eq"]["decSetoid"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["record"](function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return "*";
                  };
                };
              };
            })(function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return function (x5) {
                      return function (x6) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["DecTotalOrder"]["DTO"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsTotalOrder"]["_846@10167932"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPartialOrder"]["_272@10167932"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsTotalOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["StrictTotalOrder"]["decSetoid"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["DecSetoid"]["record"](function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["StrictTotalOrder"]["_1228@10167932"]["isDecEquivalence"](x0)(x1)(x2)(x3));
          };
        };
      };
    };
  exports["IsDecTotalOrder"]["TO"]["∼-resp-≈"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsTotalOrder"]["_846@10167932"]["∼-resp-≈"](x0)(x1)(x2)(x3)(x4)(x5)(exports["IsDecTotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["DecPoset"]["DPO"]["trans"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecPartialOrder"]["PO"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecPoset"]["isDecPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecSetoid"]["_218@10167932"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["IsDecEquivalence"]["_186@10167932"]["reflexive"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["DecSetoid"]["isDecEquivalence"](undefined)(undefined)(x2));
        };
      };
    };
  exports["IsPreorder"]["Eq"] = {};
  exports["IsPreorder"]["Eq"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return jAgda_Relation_Binary_Core["IsEquivalence"]["trans"](undefined)(undefined)(undefined)(undefined)(exports["IsPreorder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecTotalOrder"]["DTO"]["total"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecTotalOrder"]["TO"]["total"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecTotalOrder"]["isDecTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["Poset"]["isPartialOrder"] = function (x0) {
      return x0["isPartialOrder"];
    };
  exports["IsDecPartialOrder"]["PO"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPartialOrder"]["_272@10167932"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDecPartialOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Setoid"]["_138@10167932"] = {};
  exports["Setoid"]["_138@10167932"]["trans"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Relation_Binary_Core["IsEquivalence"]["trans"](undefined)(undefined)(undefined)(undefined)(exports["Setoid"]["isEquivalence"](undefined)(undefined)(x0));
        };
      };
    };
  exports["TotalOrder"]["_902@10167932"]["reflexive"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsTotalOrder"]["_846@10167932"]["reflexive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["TotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsStrictTotalOrder"]["_≟_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_Consequences["tri⟶dec≈"](x0)(x1)(x2)(x3)(x4)(x5)(exports["IsStrictTotalOrder"]["compare"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["IsPartialOrder"]["_272@10167932"]["Eq"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPreorder"]["Eq"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsPartialOrder"]["isPreorder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecTotalOrder"]["DTO"]["_≤?_"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecTotalOrder"]["_≤?_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecTotalOrder"]["isDecTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["Eq"]["_788@10167932"]["refl"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["_218@10167932"]["refl"](undefined)(undefined)(exports["DecStrictPartialOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["StrictPartialOrder"]["_618@10167932"]["trans"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsStrictPartialOrder"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["StrictPartialOrder"]["isStrictPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["Preorder"]["_94@10167932"]["Eq"] = {};
  exports["Preorder"]["_94@10167932"]["Eq"]["trans"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsPreorder"]["Eq"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Preorder"]["isPreorder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["TotalOrder"]["_≤_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["IsDecPartialOrder"]["_≟_"] = function (x0) {
      return x0["_≟_"];
    };
  exports["IsDecTotalOrder"]["TO"]["antisym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsTotalOrder"]["_846@10167932"]["antisym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDecTotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["StrictTotalOrder"]["_1228@10167932"]["<-resp-≈"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["IsStrictTotalOrder"]["<-resp-≈"](x0)(x1)(x2)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["StrictTotalOrder"]["isStrictTotalOrder"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["DecPoset"]["DPO"]["_≟_"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecPartialOrder"]["_≟_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecPoset"]["isDecPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["Preorder"]["_94@10167932"]["refl"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsPreorder"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Preorder"]["isPreorder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecTotalOrder"]["Eq"]["_1108@10167932"]["refl"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["_218@10167932"]["refl"](undefined)(undefined)(exports["DecTotalOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsTotalOrder"]["_846@10167932"]["Eq"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsPartialOrder"]["_272@10167932"]["Eq"]["reflexive"](x0)(x1)(x2)(x3)(x4)(x5)(exports["IsTotalOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["StrictPartialOrder"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["IsDecStrictPartialOrder"]["SPO"] = {};
  exports["IsDecStrictPartialOrder"]["SPO"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsStrictPartialOrder"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDecStrictPartialOrder"]["isStrictPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsDecEquivalence"]["_186@10167932"] = {};
  exports["IsDecEquivalence"]["_186@10167932"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return jAgda_Relation_Binary_Core["IsEquivalence"]["trans"](undefined)(undefined)(undefined)(undefined)(exports["IsDecEquivalence"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(x0));
            };
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["Eq"]["decSetoid"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["record"](function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return "*";
                  };
                };
              };
            })(function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return function (x5) {
                      return function (x6) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["DecStrictPartialOrder"]["DSPO"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecPoset"]["Eq"]["_512@10167932"]["setoid"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["setoid"](undefined)(undefined)(exports["DecPoset"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsPartialOrder"]["_272@10167932"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPreorder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsPartialOrder"]["isPreorder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["TotalOrder"]["_902@10167932"]["Eq"] = {};
  exports["TotalOrder"]["_902@10167932"]["Eq"]["trans"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsTotalOrder"]["_846@10167932"]["Eq"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["TotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsStrictTotalOrder"]["Eq"]["sym"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsDecEquivalence"]["_186@10167932"]["sym"](undefined)(undefined)(undefined)(undefined)(exports["IsStrictTotalOrder"]["isDecEquivalence"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["IsDecPartialOrder"]["Eq"]["isDecEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["record"](exports["IsDecPartialOrder"]["PO"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0))(exports["IsDecPartialOrder"]["_≟_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Setoid"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return {
            "Carrier": x0,
            "_≈_": x1,
            "isEquivalence": x2,
            "record": function (x3) {
              return x3["record"](x0, x1, x2);
            }
          };
        };
      };
    };
  exports["DecPoset"]["Eq"]["_512@10167932"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["DecSetoid"]["_218@10167932"]["reflexive"](x0)(x1)(exports["DecPoset"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["IsStrictTotalOrder"]["Eq"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsDecEquivalence"]["_186@10167932"]["reflexive"](x0)(x1)(x3)(x4)(exports["IsStrictTotalOrder"]["isDecEquivalence"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["TotalOrder"]["_902@10167932"]["Eq"]["sym"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsTotalOrder"]["_846@10167932"]["Eq"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["TotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["StrictTotalOrder"]["Eq"]["preorder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["DecSetoid"]["_234@10167932"]["preorder"](x0)(x1)(exports["StrictTotalOrder"]["decSetoid"](x0)(x1)(x2)(x3));
          };
        };
      };
    };
  exports["IsDecTotalOrder"]["Eq"]["isDecEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["record"](exports["IsDecTotalOrder"]["TO"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0))(exports["IsDecTotalOrder"]["_≟_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["DSPO"]["_<?_"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecStrictPartialOrder"]["_<?_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecStrictPartialOrder"]["isDecStrictPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsTotalOrder"]["_846@10167932"]["antisym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPartialOrder"]["antisym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsTotalOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Poset"]["_324@10167932"]["trans"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsPartialOrder"]["_272@10167932"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Poset"]["isPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecSetoid"]["_218@10167932"]["refl"] = function () {
      return function () {
        return function (x0) {
          return exports["IsDecEquivalence"]["_186@10167932"]["refl"](undefined)(undefined)(undefined)(undefined)(exports["DecSetoid"]["isDecEquivalence"](undefined)(undefined)(x0));
        };
      };
    };
  exports["IsDecTotalOrder"]["TO"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsTotalOrder"]["_846@10167932"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDecTotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["StrictTotalOrder"]["strictPartialOrder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["StrictPartialOrder"]["record"](function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["StrictTotalOrder"]["_1228@10167932"]["isStrictPartialOrder"](x0)(x1)(x2)(x3));
          };
        };
      };
    };
  exports["DecPoset"]["DPO"]["reflexive"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecPartialOrder"]["PO"]["reflexive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecPoset"]["isDecPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsPreorder"]["Eq"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return jAgda_Relation_Binary_Core["IsEquivalence"]["sym"](undefined)(undefined)(undefined)(undefined)(exports["IsPreorder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecTotalOrder"]["DTO"]["reflexive"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecTotalOrder"]["TO"]["reflexive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecTotalOrder"]["isDecTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["Poset"]["_≤_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["IsStrictPartialOrder"]["<-resp-≈"] = function (x0) {
      return x0["<-resp-≈"];
    };
  exports["IsDecPartialOrder"]["PO"]["reflexive"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPartialOrder"]["_272@10167932"]["reflexive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDecPartialOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Setoid"]["_138@10167932"]["sym"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Relation_Binary_Core["IsEquivalence"]["sym"](undefined)(undefined)(undefined)(undefined)(exports["Setoid"]["isEquivalence"](undefined)(undefined)(x0));
        };
      };
    };
  exports["TotalOrder"]["_902@10167932"]["refl"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsTotalOrder"]["_846@10167932"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["TotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsStrictTotalOrder"]["compare"] = function (x0) {
      return x0["compare"];
    };
  exports["DecTotalOrder"]["DTO"]["_≟_"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecTotalOrder"]["_≟_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecTotalOrder"]["isDecTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["Eq"]["_788@10167932"]["preorder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["DecSetoid"]["_234@10167932"]["preorder"](x0)(x1)(exports["DecStrictPartialOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["IsPartialOrder"]["_272@10167932"]["Eq"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsPreorder"]["Eq"]["reflexive"](x0)(x1)(x2)(x3)(x4)(x5)(exports["IsPartialOrder"]["isPreorder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["Preorder"]["_94@10167932"]["Eq"]["sym"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsPreorder"]["Eq"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Preorder"]["isPreorder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["StrictPartialOrder"]["_618@10167932"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsStrictPartialOrder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["StrictPartialOrder"]["isStrictPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsDecPartialOrder"]["isPartialOrder"] = function (x0) {
      return x0["isPartialOrder"];
    };
  exports["TotalOrder"]["_≈_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["StrictTotalOrder"]["_1228@10167932"]["_≟_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["IsStrictTotalOrder"]["_≟_"](x0)(x1)(x2)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["StrictTotalOrder"]["isStrictTotalOrder"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["Preorder"]["_94@10167932"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsPreorder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Preorder"]["isPreorder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsTotalOrder"]["_846@10167932"]["Eq"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPartialOrder"]["_272@10167932"]["Eq"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsTotalOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecTotalOrder"]["Eq"]["_1108@10167932"]["preorder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["DecSetoid"]["_234@10167932"]["preorder"](x0)(x1)(exports["DecTotalOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["IsDecStrictPartialOrder"]["SPO"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsStrictPartialOrder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDecStrictPartialOrder"]["isStrictPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsDecPartialOrder"]["Eq"]["_420@10167932"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["_186@10167932"]["trans"](undefined)(undefined)(undefined)(undefined)(exports["IsDecPartialOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsDecStrictPartialOrder"]["Eq"]["isDecEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["record"](exports["IsDecStrictPartialOrder"]["SPO"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0))(exports["IsDecStrictPartialOrder"]["_≟_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsDecEquivalence"]["_186@10167932"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return jAgda_Relation_Binary_Core["IsEquivalence"]["sym"](undefined)(undefined)(undefined)(undefined)(exports["IsDecEquivalence"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(x0));
            };
          };
        };
      };
    };
  exports["IsDecTotalOrder"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return {
            "_≟_": x1,
            "_≤?_": x2,
            "isTotalOrder": x0,
            "record": function (x3) {
              return x3["record"](x0, x1, x2);
            }
          };
        };
      };
    };
  exports["Poset"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return {
              "Carrier": x0,
              "_≈_": x1,
              "_≤_": x2,
              "isPartialOrder": x3,
              "record": function (x4) {
                return x4["record"](x0, x1, x2, x3);
              }
            };
          };
        };
      };
    };
  exports["IsTotalOrder"]["record"] = function (x0) {
      return function (x1) {
        return {
          "isPartialOrder": x0,
          "record": function (x2) {
            return x2["record"](x0, x1);
          },
          "total": x1
        };
      };
    };
  exports["StrictTotalOrder"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return {
              "Carrier": x0,
              "_<_": x2,
              "_≈_": x1,
              "isStrictTotalOrder": x3,
              "record": function (x4) {
                return x4["record"](x0, x1, x2, x3);
              }
            };
          };
        };
      };
    };
  exports["DecTotalOrder"]["Eq"]["_1108@10167932"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["_218@10167932"]["isEquivalence"](undefined)(undefined)(exports["DecTotalOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["Poset"]["preorder"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["Preorder"]["record"](function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return "*";
                  };
                };
              };
            })(function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return function (x5) {
                      return function (x6) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return function (x5) {
                      return function (x6) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["Poset"]["_324@10167932"]["isPreorder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["StrictTotalOrder"]["Eq"]["isEquivalence"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["DecSetoid"]["_218@10167932"]["isEquivalence"](undefined)(undefined)(exports["StrictTotalOrder"]["decSetoid"](x0)(x1)(x2)(x3));
          };
        };
      };
    };
  exports["Poset"]["_≈_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["IsStrictPartialOrder"]["trans"] = function (x0) {
      return x0["trans"];
    };
  exports["Poset"]["_324@10167932"]["reflexive"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsPartialOrder"]["_272@10167932"]["reflexive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Poset"]["isPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecTotalOrder"]["_1098@10167932"] = {};
  exports["DecTotalOrder"]["_1098@10167932"]["preorder"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["TotalOrder"]["_934@10167932"]["preorder"](undefined)(undefined)(undefined)(exports["DecTotalOrder"]["totalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsStrictTotalOrder"]["Eq"]["refl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsDecEquivalence"]["_186@10167932"]["refl"](undefined)(undefined)(undefined)(undefined)(exports["IsStrictTotalOrder"]["isDecEquivalence"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["TotalOrder"]["_902@10167932"]["Eq"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["IsTotalOrder"]["_846@10167932"]["Eq"]["reflexive"](x0)(x1)(x2)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["TotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["DecTotalOrder"]["DTO"]["refl"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecTotalOrder"]["TO"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecTotalOrder"]["isDecTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsPreorder"]["Eq"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return jAgda_Relation_Binary_Core["IsEquivalence"]["reflexive"](x0)(x1)(x3)(x4)(exports["IsPreorder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["TotalOrder"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["StrictPartialOrder"]["asymmetric"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return undefined;
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Setoid"]["_138@10167932"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Relation_Binary_Core["IsEquivalence"]["reflexive"](x0)(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          })(function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          })(exports["Setoid"]["isEquivalence"](undefined)(undefined)(x2));
        };
      };
    };
  exports["TotalOrder"]["_902@10167932"]["isPreorder"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsTotalOrder"]["_846@10167932"]["isPreorder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["TotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsStrictTotalOrder"]["trans"] = function (x0) {
      return x0["trans"];
    };
  exports["IsDecPartialOrder"]["PO"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPartialOrder"]["_272@10167932"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDecPartialOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecPoset"]["DPO"]["refl"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecPartialOrder"]["PO"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecPoset"]["isDecPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecSetoid"]["_218@10167932"]["isEquivalence"] = function () {
      return function () {
        return function (x0) {
          return exports["IsDecEquivalence"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(exports["DecSetoid"]["isDecEquivalence"](undefined)(undefined)(x0));
        };
      };
    };
  exports["StrictTotalOrder"]["_1228@10167932"]["trans"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsStrictTotalOrder"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["StrictTotalOrder"]["isStrictTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsDecTotalOrder"]["TO"]["total"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsTotalOrder"]["total"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDecTotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["StrictPartialOrder"]["_618@10167932"]["irrefl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return undefined;
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Preorder"]["_94@10167932"]["Eq"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["IsPreorder"]["Eq"]["reflexive"](x0)(x1)(x2)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["Preorder"]["isPreorder"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["IsDecEquivalence"]["_186@10167932"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Relation_Binary_Core["IsEquivalence"]["reflexive"](x0)(x1)(x2)(x3)(exports["IsDecEquivalence"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["IsDecTotalOrder"]["_≤?_"] = function (x0) {
      return x0["_≤?_"];
    };
  exports["StrictTotalOrder"]["_1228@10167932"]["_<?_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["IsStrictTotalOrder"]["_<?_"](x0)(x1)(x2)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["StrictTotalOrder"]["isStrictTotalOrder"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["IsDecStrictPartialOrder"]["Eq"]["_706@10167932"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["_186@10167932"]["trans"](undefined)(undefined)(undefined)(undefined)(exports["IsDecStrictPartialOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecPoset"]["isDecPartialOrder"] = function (x0) {
      return x0["isDecPartialOrder"];
    };
  exports["IsPartialOrder"]["_272@10167932"]["Eq"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPreorder"]["Eq"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsPartialOrder"]["isPreorder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["Eq"]["_788@10167932"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["_218@10167932"]["isEquivalence"](undefined)(undefined)(exports["DecStrictPartialOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsDecPartialOrder"]["Eq"]["_420@10167932"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["_186@10167932"]["sym"](undefined)(undefined)(undefined)(undefined)(exports["IsDecPartialOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsDecStrictPartialOrder"]["SPO"]["irrefl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return undefined;
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["DecPoset"]["Eq"]["decSetoid"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["record"](function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return "*";
                  };
                };
              };
            })(function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return function (x5) {
                      return function (x6) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["DecPoset"]["DPO"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsDecTotalOrder"]["Eq"]["_1010@10167932"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["_186@10167932"]["trans"](undefined)(undefined)(undefined)(undefined)(exports["IsDecTotalOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecPoset"]["Eq"]["_512@10167932"]["refl"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["_218@10167932"]["refl"](undefined)(undefined)(exports["DecPoset"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsPartialOrder"]["antisym"] = function (x0) {
      return x0["antisym"];
    };
  exports["DecStrictPartialOrder"]["strictPartialOrder"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["StrictPartialOrder"]["record"](function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return "*";
                  };
                };
              };
            })(function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return function (x5) {
                      return function (x6) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x1) {
              return function (x2) {
                return function (x3) {
                  return function (x4) {
                    return function (x5) {
                      return function (x6) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["DecStrictPartialOrder"]["DSPO"]["isStrictPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecPoset"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return {
              "Carrier": x0,
              "_≈_": x1,
              "_≤_": x2,
              "isDecPartialOrder": x3,
              "record": function (x4) {
                return x4["record"](x0, x1, x2, x3);
              }
            };
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return {
              "Carrier": x0,
              "_<_": x2,
              "_≈_": x1,
              "isDecStrictPartialOrder": x3,
              "record": function (x4) {
                return x4["record"](x0, x1, x2, x3);
              }
            };
          };
        };
      };
    };
  exports["IsPreorder"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return {
            "isEquivalence": x0,
            "record": function (x3) {
              return x3["record"](x0, x1, x2);
            },
            "reflexive": x1,
            "trans": x2
          };
        };
      };
    };
  exports["IsStrictTotalOrder"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return {
            "compare": x2,
            "isEquivalence": x0,
            "record": function (x3) {
              return x3["record"](x0, x1, x2);
            },
            "trans": x1
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["DSPO"]["trans"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecStrictPartialOrder"]["SPO"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecStrictPartialOrder"]["isDecStrictPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsDecTotalOrder"]["Eq"]["_1010@10167932"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["_186@10167932"]["sym"](undefined)(undefined)(undefined)(undefined)(exports["IsDecTotalOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecPoset"]["Eq"]["_512@10167932"]["preorder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["DecSetoid"]["_234@10167932"]["preorder"](x0)(x1)(exports["DecPoset"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["IsPartialOrder"]["isPreorder"] = function (x0) {
      return x0["isPreorder"];
    };
  exports["Preorder"]["isPreorder"] = function (x0) {
      return x0["isPreorder"];
    };
  exports["DecTotalOrder"]["Eq"]["_1108@10167932"]["isDecEquivalence"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["isDecEquivalence"](undefined)(undefined)(exports["DecTotalOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsTotalOrder"]["_846@10167932"]["∼-resp-≈"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsPartialOrder"]["_272@10167932"]["∼-resp-≈"](x0)(x1)(x2)(x3)(x4)(x5)(exports["IsTotalOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["Poset"]["_324@10167932"]["Eq"]["trans"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsPartialOrder"]["_272@10167932"]["Eq"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Poset"]["isPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecSetoid"]["_234@10167932"] = {};
  exports["DecSetoid"]["_234@10167932"]["preorder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Setoid"]["preorder"](x0)(x1)(exports["DecSetoid"]["setoid"](undefined)(undefined)(x2));
        };
      };
    };
  exports["StrictTotalOrder"]["Eq"]["isDecEquivalence"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["DecSetoid"]["isDecEquivalence"](undefined)(undefined)(exports["StrictTotalOrder"]["decSetoid"](x0)(x1)(x2)(x3));
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["isDecStrictPartialOrder"] = function (x0) {
      return x0["isDecStrictPartialOrder"];
    };
  exports["Poset"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["DecTotalOrder"]["DTO"]["Eq"] = {};
  exports["DecTotalOrder"]["DTO"]["Eq"]["isDecEquivalence"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecTotalOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecTotalOrder"]["isDecTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsStrictPartialOrder"]["irrefl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return undefined;
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Poset"]["_324@10167932"]["refl"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsPartialOrder"]["_272@10167932"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Poset"]["isPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsTotalOrder"]["total"] = function (x0) {
      return x0["total"];
    };
  exports["DecTotalOrder"]["_1098@10167932"]["poset"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["TotalOrder"]["poset"](undefined)(undefined)(undefined)(exports["DecTotalOrder"]["totalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsStrictTotalOrder"]["Eq"]["isEquivalence"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsDecEquivalence"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(exports["IsStrictTotalOrder"]["isDecEquivalence"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["Setoid"]["indexedSetoid"] = function () {
      return function () {
        return function (x0) {
          return function (x1) {
            return function (x2) {
              return jAgda_Relation_Binary_Indexed_Core["Setoid"]["record"](function (x3) {
                return function (x4) {
                  return function (x5) {
                    return function (x6) {
                      return "*";
                    };
                  };
                };
              })(function (x3) {
                return function (x4) {
                  return function (x5) {
                    return function (x6) {
                      return function (x7) {
                        return function (x8) {
                          return function (x9) {
                            return "*";
                          };
                        };
                      };
                    };
                  };
                };
              })(jAgda_Relation_Binary_Indexed_Core["IsEquivalence"]["record"](function (x3) {
                return exports["Setoid"]["_138@10167932"]["refl"](undefined)(undefined)(x0);
              })(function (x3) {
                return function (x4) {
                  return exports["Setoid"]["_138@10167932"]["sym"](undefined)(undefined)(x0);
                };
              })(function (x3) {
                return function (x4) {
                  return function (x5) {
                    return exports["Setoid"]["_138@10167932"]["trans"](undefined)(undefined)(x0);
                  };
                };
              }));
            };
          };
        };
      };
    };
  exports["TotalOrder"]["_902@10167932"]["Eq"]["refl"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsTotalOrder"]["_846@10167932"]["Eq"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["TotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsPreorder"]["Eq"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return jAgda_Relation_Binary_Core["IsEquivalence"]["refl"](undefined)(undefined)(undefined)(undefined)(exports["IsPreorder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecTotalOrder"]["DTO"]["isTotalOrder"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecTotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecTotalOrder"]["isDecTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["StrictPartialOrder"]["_618@10167932"]["Eq"]["trans"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsStrictPartialOrder"]["Eq"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["StrictPartialOrder"]["isStrictPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsDecPartialOrder"]["PO"]["isPreorder"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPartialOrder"]["isPreorder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDecPartialOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Setoid"]["_138@10167932"]["refl"] = function () {
      return function () {
        return function (x0) {
          return jAgda_Relation_Binary_Core["IsEquivalence"]["refl"](undefined)(undefined)(undefined)(undefined)(exports["Setoid"]["isEquivalence"](undefined)(undefined)(x0));
        };
      };
    };
  exports["TotalOrder"]["_902@10167932"]["isPartialOrder"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsTotalOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["TotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsStrictTotalOrder"]["isEquivalence"] = function (x0) {
      return x0["isEquivalence"];
    };
  exports["DecPoset"]["DPO"]["isPreorder"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecPartialOrder"]["PO"]["isPreorder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecPoset"]["isDecPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecSetoid"]["_218@10167932"]["_≟_"] = function () {
      return function () {
        return function (x0) {
          return exports["IsDecEquivalence"]["_≟_"](undefined)(undefined)(undefined)(undefined)(exports["DecSetoid"]["isDecEquivalence"](undefined)(undefined)(x0));
        };
      };
    };
  exports["IsDecTotalOrder"]["TO"]["reflexive"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsTotalOrder"]["_846@10167932"]["reflexive"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDecTotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["StrictTotalOrder"]["_1228@10167932"]["isStrictPartialOrder"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["IsStrictTotalOrder"]["isStrictPartialOrder"](x0)(x1)(x2)(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return "*";
                      };
                    };
                  };
                };
              };
            })(exports["StrictTotalOrder"]["isStrictTotalOrder"](undefined)(undefined)(undefined)(x3));
          };
        };
      };
    };
  exports["StrictPartialOrder"]["_618@10167932"]["<-resp-≈"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsStrictPartialOrder"]["<-resp-≈"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["StrictPartialOrder"]["isStrictPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["Preorder"]["_94@10167932"]["Eq"]["refl"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsPreorder"]["Eq"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Preorder"]["isPreorder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsDecEquivalence"]["_186@10167932"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return jAgda_Relation_Binary_Core["IsEquivalence"]["refl"](undefined)(undefined)(undefined)(undefined)(exports["IsDecEquivalence"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(x0));
            };
          };
        };
      };
    };
  exports["IsDecTotalOrder"]["_≟_"] = function (x0) {
      return x0["_≟_"];
    };
  exports["IsDecStrictPartialOrder"]["Eq"]["_706@10167932"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["_186@10167932"]["sym"](undefined)(undefined)(undefined)(undefined)(exports["IsDecStrictPartialOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecPoset"]["_≤_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["Eq"]["_788@10167932"]["isDecEquivalence"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["isDecEquivalence"](undefined)(undefined)(exports["DecStrictPartialOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecTotalOrder"]["isDecTotalOrder"] = function (x0) {
      return x0["isDecTotalOrder"];
    };
  exports["IsDecPartialOrder"]["Eq"]["_420@10167932"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsDecEquivalence"]["_186@10167932"]["reflexive"](x0)(x1)(x3)(x4)(exports["IsDecPartialOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["IsStrictTotalOrder"]["_1194@10167932"] = {};
  exports["IsStrictTotalOrder"]["_1194@10167932"]["irrefl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return undefined;
                        };
                      };
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsDecStrictPartialOrder"]["SPO"]["<-resp-≈"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsStrictPartialOrder"]["<-resp-≈"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDecStrictPartialOrder"]["isStrictPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["IsStrictPartialOrder"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return {
              "<-resp-≈": x3,
              "irrefl": x1,
              "isEquivalence": x0,
              "record": function (x4) {
                return x4["record"](x0, x1, x2, x3);
              },
              "trans": x2
            };
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["Eq"]["_788@10167932"]["trans"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["_218@10167932"]["trans"](undefined)(undefined)(exports["DecStrictPartialOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecTotalOrder"]["DTO"]["isPreorder"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecTotalOrder"]["TO"]["isPreorder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecTotalOrder"]["isDecTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["StrictPartialOrder"]["_618@10167932"]["Eq"]["sym"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsStrictPartialOrder"]["Eq"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["StrictPartialOrder"]["isStrictPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsDecPartialOrder"]["PO"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPartialOrder"]["_272@10167932"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDecPartialOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["TotalOrder"]["_902@10167932"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsTotalOrder"]["_846@10167932"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["TotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsDecTotalOrder"]["TO"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsTotalOrder"]["_846@10167932"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsDecTotalOrder"]["isTotalOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["StrictTotalOrder"]["_1228@10167932"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsStrictTotalOrder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["StrictTotalOrder"]["isStrictTotalOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecPoset"]["DPO"]["isPartialOrder"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecPartialOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecPoset"]["isDecPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecTotalOrder"]["Eq"]["_1108@10167932"]["trans"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["_218@10167932"]["trans"](undefined)(undefined)(exports["DecTotalOrder"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecPoset"]["_≈_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["StrictTotalOrder"]["isStrictTotalOrder"] = function (x0) {
      return x0["isStrictTotalOrder"];
    };
  exports["IsDecTotalOrder"]["isTotalOrder"] = function (x0) {
      return x0["isTotalOrder"];
    };
  exports["IsDecStrictPartialOrder"]["Eq"]["_706@10167932"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsDecEquivalence"]["_186@10167932"]["reflexive"](x0)(x1)(x3)(x4)(exports["IsDecStrictPartialOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["DecTotalOrder"]["_≤_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["IsPartialOrder"]["_272@10167932"]["∼-resp-≈"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsPreorder"]["∼-resp-≈"](x0)(x1)(x2)(x3)(x4)(x5)(exports["IsPartialOrder"]["isPreorder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["Eq"]["_788@10167932"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["IsDecPartialOrder"]["Eq"]["_420@10167932"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsDecEquivalence"]["_186@10167932"]["refl"](undefined)(undefined)(undefined)(undefined)(exports["IsDecPartialOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["StrictTotalOrder"]["Eq"]["trans"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["DecSetoid"]["_218@10167932"]["trans"](undefined)(undefined)(exports["StrictTotalOrder"]["decSetoid"](x0)(x1)(x2)(x3));
          };
        };
      };
    };
  exports["IsDecTotalOrder"]["Eq"]["_1010@10167932"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsDecEquivalence"]["_186@10167932"]["reflexive"](x0)(x1)(x3)(x4)(exports["IsDecTotalOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["DSPO"]["isStrictPartialOrder"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecStrictPartialOrder"]["isStrictPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecStrictPartialOrder"]["isDecStrictPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecPoset"]["_504@10167932"] = {};
  exports["DecPoset"]["_504@10167932"]["preorder"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["Poset"]["preorder"](undefined)(undefined)(undefined)(exports["DecPoset"]["poset"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["DecPoset"]["Eq"]["_512@10167932"]["isEquivalence"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["DecSetoid"]["_218@10167932"]["isEquivalence"](undefined)(undefined)(exports["DecPoset"]["Eq"]["decSetoid"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["Poset"]["_324@10167932"]["Eq"]["sym"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsPartialOrder"]["_272@10167932"]["Eq"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Poset"]["isPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["Preorder"]["_∼_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["IsTotalOrder"]["_846@10167932"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return exports["IsPartialOrder"]["_272@10167932"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["IsTotalOrder"]["isPartialOrder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["DecTotalOrder"]["Eq"]["_1108@10167932"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["DecStrictPartialOrder"]["_<_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return "*";
              };
            };
          };
        };
      };
    };
  exports["DecPoset"]["DPO"]["Eq"] = {};
  exports["DecPoset"]["DPO"]["Eq"]["isDecEquivalence"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsDecPartialOrder"]["Eq"]["isDecEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["DecPoset"]["isDecPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["StrictTotalOrder"]["Eq"]["Carrier"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["IsStrictPartialOrder"]["isEquivalence"] = function (x0) {
      return x0["isEquivalence"];
    };
  exports["IsTotalOrder"]["isPartialOrder"] = function (x0) {
      return x0["isPartialOrder"];
    };
  exports["IsStrictPartialOrder"]["Eq"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function () {
              return function () {
                return function (x0) {
                  return jAgda_Relation_Binary_Core["IsEquivalence"]["trans"](undefined)(undefined)(undefined)(undefined)(exports["IsStrictPartialOrder"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x0));
                };
              };
            };
          };
        };
      };
    };
  exports["Poset"]["_324@10167932"]["isPreorder"] = function () {
      return function () {
        return function () {
          return function (x0) {
            return exports["IsPartialOrder"]["isPreorder"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Poset"]["isPartialOrder"](undefined)(undefined)(undefined)(x0));
          };
        };
      };
    };
  exports["IsStrictTotalOrder"]["Eq"]["_≟_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return exports["IsDecEquivalence"]["_≟_"](undefined)(undefined)(undefined)(undefined)(exports["IsStrictTotalOrder"]["isDecEquivalence"](x0)(x1)(x2)(x3)(x4)(x5)(x6));
                };
              };
            };
          };
        };
      };
    };
  exports["TotalOrder"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return {
              "Carrier": x0,
              "_≈_": x1,
              "_≤_": x2,
              "isTotalOrder": x3,
              "record": function (x4) {
                return x4["record"](x0, x1, x2, x3);
              }
            };
          };
        };
      };
    };
  exports["DecSetoid"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return {
            "Carrier": x0,
            "_≈_": x1,
            "isDecEquivalence": x2,
            "record": function (x3) {
              return x3["record"](x0, x1, x2);
            }
          };
        };
      };
    };
  exports["StrictPartialOrder"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return {
              "Carrier": x0,
              "_<_": x2,
              "_≈_": x1,
              "isStrictPartialOrder": x3,
              "record": function (x4) {
                return x4["record"](x0, x1, x2, x3);
              }
            };
          };
        };
      };
    };
  });
