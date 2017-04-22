define(["exports","jAgda.Agda.Primitive","jAgda.Function"],function(exports,jAgda_Agda_Primitive,jAgda_Function) {
  exports["Σ"] = {};
  exports["∃!"] = function (x0) {
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
  exports["_-,-_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return jAgda_Function["_-[_]-_"](x0)(x1)(x2)(x3)(jAgda_Agda_Primitive["_⊔_"](x3)(x2))(x4)(x5)(x6)(x7)("*")(x8)(exports["Σ"]["_,_"])(x9);
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
  exports["uncurry"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return x7({
                      "_,_": function (x8, x9) {
                        return x6(x8)(x9);
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
  exports["zip"] = function (x0) {
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
                              return function (x13) {
                                return function (x14) {
                                  return x14({
                                    "_,_": function (x15, x16) {
                                      return function (x17) {
                                        return x17({
                                          "_,_": function (x18, x19) {
                                            return exports["Σ"]["_,_"](x12(x15)(x18))(x13(x15)(x18)(x16)(x19));
                                          }
                                        });
                                      };
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
          };
        };
      };
    };
  exports["∄"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["Σ-syntax"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports[",_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return exports["Σ"]["_,_"](x4)(x5);
              };
            };
          };
        };
      };
    };
  exports["_×_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["∃₂"] = function (x0) {
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
  exports["uncurry′"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return exports["uncurry"](x0)(x1)(x2)(x3)(function (x6) {
                  return x4;
                })(function (x6) {
                  return x5;
                });
              };
            };
          };
        };
      };
    };
  exports["_,′_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["Σ"]["_,_"];
          };
        };
      };
    };
  exports["swap"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "_,_": function (x5, x6) {
                  return exports["Σ"]["_,_"](x6)(x5);
                }
              });
            };
          };
        };
      };
    };
  exports["curry"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return x6(exports["Σ"]["_,_"](x7)(x8));
                    };
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["Σ"]["proj₁"] = function (x0) {
      return x0["proj₁"];
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
                        return function (x10) {
                          return x10({
                            "_,_": function (x11, x12) {
                              return exports["Σ"]["_,_"](x8(x11))(x9(x11)(x12));
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
  exports["Σ"]["proj₂"] = function (x0) {
      return x0["proj₂"];
    };
  exports["_-×-_"] = function (x0) {
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
  exports["Σ"]["_,_"] = function (x0) {
      return function (x1) {
        return {
          "_,_": function (x2) {
            return x2["_,_"](x0, x1);
          },
          "proj₁": x0,
          "proj₂": x1
        };
      };
    };
  exports["∃"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["<_,_>"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return exports["Σ"]["_,_"](x6(x8))(x7(x8));
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
