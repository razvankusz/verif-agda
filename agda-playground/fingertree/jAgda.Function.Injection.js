define(["exports","jAgda.Function","jAgda.Function.Equality"],function(exports,jAgda_Function,jAgda_Function_Equality) {
  exports["Injection"] = {};
  exports["Injection"]["injective"] = function (x0) {
      return x0["injective"];
    };
  exports["Injection"]["to"] = function (x0) {
      return x0["to"];
    };
  exports["Injection"]["record"] = function (x0) {
      return function (x1) {
        return {
          "injective": x1,
          "record": function (x2) {
            return x2["record"](x0, x1);
          },
          "to": x0
        };
      };
    };
  exports["Injective"] = function (x0) {
      return function (x1) {
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
      };
    };
  exports["_26@135643009"] = {};
  exports["_26@135643009"]["_28@135643009"] = {};
  exports["_26@135643009"]["_28@135643009"]["_≈_"] = function (x0) {
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
  exports["id"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Injection"]["record"](jAgda_Function_Equality["id"](x0)(x1)(x2))(function (x3) {
            return function (x4) {
              return jAgda_Function["id"](x1)(function (x5) {
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
              });
            };
          });
        };
      };
    };
  exports["_26@135643009"]["_50@135643009"] = {};
  exports["_26@135643009"]["_50@135643009"]["_≈_"] = function (x0) {
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
  exports["_↣_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return "*";
          };
        };
      };
    };
  exports["_∘_"] = function (x0) {
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
                          return exports["Injection"]["record"](jAgda_Function_Equality["_∘_"](x0)(x1)(x6)(x2)(x3)(x7)(x4)(x5)(x8)(exports["Injection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9))(exports["Injection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10)))(function (x11) {
                            return function (x12) {
                              return jAgda_Function["_∘_"](x5)(x3)(x1)(function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return function (x20) {
                                              return function (x21) {
                                                return "*";
                                              };
                                            };
                                          };
                                        };
                                      };
                                    };
                                  };
                                };
                              })(function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return function (x20) {
                                              return function (x21) {
                                                return function (x22) {
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
                              })(function (x13) {
                                return function (x14) {
                                  return function (x15) {
                                    return function (x16) {
                                      return function (x17) {
                                        return function (x18) {
                                          return function (x19) {
                                            return function (x20) {
                                              return function (x21) {
                                                return function (x22) {
                                                  return function (x23) {
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
                              })(function (x13) {
                                return exports["Injection"]["injective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10)(x11)(x12);
                              })(exports["Injection"]["injective"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x9)(jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Injection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10))(x11))(jAgda_Function_Equality["Π"]["_⟨$⟩_"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(exports["Injection"]["to"](undefined)(undefined)(undefined)(undefined)(undefined)(undefined)(x10))(x12)));
                            };
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
  });
