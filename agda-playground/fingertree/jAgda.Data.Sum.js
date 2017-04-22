define(["exports","jAgda.Agda.Primitive","jAgda.Data.Maybe.Base","jAgda.Function"],function(exports,jAgda_Agda_Primitive,jAgda_Data_Maybe_Base,jAgda_Function) {
  exports["_⊎_"] = {};
  exports["_⊎_"]["inj₁"] = function (x0) {
      return function (x1) {
        return x1["inj₁"](x0);
      };
    };
  exports["isInj₂"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "inj₁": function (x5) {
                  return jAgda_Data_Maybe_Base["Maybe"]["nothing"];
                },
                "inj₂": function (x5) {
                  return jAgda_Data_Maybe_Base["Maybe"]["just"](x5);
                }
              });
            };
          };
        };
      };
    };
  exports["[_,_]′"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return exports["[_,_]"](x0)(x1)(x2)(x3)(x4)(function (x6) {
                  return x5;
                });
              };
            };
          };
        };
      };
    };
  exports["map"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["[_,_]"](x0)(x1)(jAgda_Agda_Primitive["_⊔_"](x3)(x2))(x4)(x5)(function (x10) {
                          return "*";
                        })(jAgda_Function["_∘_"](x0)(x2)(jAgda_Agda_Primitive["_⊔_"](x3)(x2))(x4)(function (x10) {
                          return x6;
                        })(function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        })(function (x10) {
                          return exports["_⊎_"]["inj₁"];
                        })(x8))(jAgda_Function["_∘_"](x1)(x3)(jAgda_Agda_Primitive["_⊔_"](x3)(x2))(x5)(function (x10) {
                          return x7;
                        })(function (x10) {
                          return function (x11) {
                            return "*";
                          };
                        })(function (x10) {
                          return exports["_⊎_"]["inj₂"];
                        })(x9));
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
  exports["isInj₁"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "inj₁": function (x5) {
                  return jAgda_Data_Maybe_Base["Maybe"]["just"](x5);
                },
                "inj₂": function (x5) {
                  return jAgda_Data_Maybe_Base["Maybe"]["nothing"];
                }
              });
            };
          };
        };
      };
    };
  exports["_⊎_"]["inj₂"] = function (x0) {
      return function (x1) {
        return x1["inj₂"](x0);
      };
    };
  exports["_-⊎-_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
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
          };
        };
      };
    };
  exports["[_,_]"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x8({
                        "inj₁": function (x9) {
                          return x6(x9);
                        },
                        "inj₂": function (x9) {
                          return x7(x9);
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
