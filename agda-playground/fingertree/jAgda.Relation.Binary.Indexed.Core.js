define(["exports"],function(exports) {
  exports["Setoid"] = {};
  exports["IsEquivalence"] = {};
  exports["IsEquivalence"]["refl"] = function (x0) {
      return x0["refl"];
    };
  exports["REL"] = function (x0) {
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
  exports["Setoid"]["_174@221572815"] = {};
  exports["Setoid"]["_174@221572815"]["trans"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return exports["IsEquivalence"]["trans"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Setoid"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(x0));
            };
          };
        };
      };
    };
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
  exports["Setoid"]["Carrier"] = function (x0) {
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
  exports["IsEquivalence"]["sym"] = function (x0) {
      return x0["sym"];
    };
  exports["Setoid"]["_174@221572815"]["reflexive"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["IsEquivalence"]["reflexive"](x0)(x2)(x3)(x1)(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return "*";
                        };
                      };
                    };
                  };
                };
              })(function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return function (x11) {
                            return function (x12) {
                              return function (x13) {
                                return "*";
                              };
                            };
                          };
                        };
                      };
                    };
                  };
                };
              })(exports["Setoid"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(x4));
            };
          };
        };
      };
    };
  exports["Setoid"]["_174@221572815"]["sym"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return exports["IsEquivalence"]["sym"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Setoid"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(x0));
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
                    return function (x8) {
                      return function (x9) {
                        return function (x10) {
                          return x10({
                            "refl": function () {
                              return exports["IsEquivalence"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x6)(x7)(x8);
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
      };
    };
  exports["Setoid"]["_174@221572815"]["refl"] = function () {
      return function () {
        return function () {
          return function () {
            return function (x0) {
              return exports["IsEquivalence"]["refl"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Setoid"]["isEquivalence"](undefined)(undefined)(undefined)(undefined)(x0));
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
  exports["Setoid"]["_≈_"] = function (x0) {
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
  exports["Symmetric"] = function (x0) {
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
  exports["Reflexive"] = function (x0) {
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
  exports["IsEquivalence"]["trans"] = function (x0) {
      return x0["trans"];
    };
  exports["Rel"] = function (x0) {
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
  exports["Setoid"]["isEquivalence"] = function (x0) {
      return x0["isEquivalence"];
    };
  exports["Transitive"] = function (x0) {
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
  });
