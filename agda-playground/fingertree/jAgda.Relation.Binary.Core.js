define(["exports"],function(exports) {
  exports["Tri"] = {};
  exports["IsEquivalence"] = {};
  exports["NonEmpty"] = {};
  exports["IsEquivalence"]["record"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return {
            "record": function (x3) {
              return x3["record"](x0, x1, x2);
            },
            "refl": x0,
            "sym": x1,
            "trans": x2
          };
        };
      };
    };
  exports["Symmetric"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["_⇒_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["NonEmpty"]["x"] = function (x0) {
      return x0["x"];
    };
  exports["Trichotomous"] = function (x0) {
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
  exports["IsEquivalence"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return x7({
                      "refl": function () {
                        return exports["IsEquivalence"]["refl"](undefined)(undefined)(undefined)(undefined)(x4)(x5);
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
  exports["REL"] = function (x0) {
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
  exports["NonEmpty"]["y"] = function (x0) {
      return x0["y"];
    };
  exports["Sym"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_Preserves₂_⟶_⟶_"] = function (x0) {
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
                          return function (x11) {
                            return function (x12) {
                              return "*";
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
      };
    };
  exports["NonEmpty"]["proof"] = function (x0) {
      return x0["proof"];
    };
  exports["NonEmpty"]["nonEmpty"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return {
            "nonEmpty": function (x3) {
              return x3["nonEmpty"](x0, x1, x2);
            },
            "proof": x2,
            "x": x0,
            "y": x1
          };
        };
      };
    };
  exports["_=[_]⇒_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["_Respects_"] = function (x0) {
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
  exports["Tri"]["tri>"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["tri>"](x0, x1, x2);
          };
        };
      };
    };
  exports["Antisymmetric"] = function (x0) {
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
  exports["TransFlip"] = function (x0) {
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
                          return function (x11) {
                            return "*";
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
    };
  exports["Trans"] = function (x0) {
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
                          return function (x11) {
                            return "*";
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
    };
  exports["Asymmetric"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["Tri"]["tri<"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["tri<"](x0, x1, x2);
          };
        };
      };
    };
  exports["_Respects₂_"] = function (x0) {
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
  exports["_434@246418723"] = {};
  exports["_434@246418723"]["_>_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Substitutive"] = function (x0) {
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
  exports["_Preserves_⟶_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return "*";
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsEquivalence"]["refl"] = function (x0) {
      return x0["refl"];
    };
  exports["Transitive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["IsEquivalence"]["sym"] = function (x0) {
      return x0["sym"];
    };
  exports["Reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["_≢_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["Decidable"] = function (x0) {
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
  exports["Tri"]["tri≈"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["tri≈"](x0, x1, x2);
          };
        };
      };
    };
  exports["Irreflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return "*";
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["IsEquivalence"]["trans"] = function (x0) {
      return x0["trans"];
    };
  exports["Rel"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  });
