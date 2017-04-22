define(["exports","jAgda.Agda.Builtin.List","jAgda.Agda.Builtin.Nat","jAgda.Agda.Primitive","jAgda.Data.Bool.Base","jAgda.Data.Maybe.Base","jAgda.Data.Product","jAgda.Function"],function(exports,jAgda_Agda_Builtin_List,jAgda_Agda_Builtin_Nat,jAgda_Agda_Primitive,jAgda_Data_Bool_Base,jAgda_Data_Maybe_Base,jAgda_Data_Product,jAgda_Function) {
  exports["InitLast"] = {};
  exports["_368@141757744"] = {};
  exports["_368@141757744"]["Singleton"] = {};
  exports["zipWith"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return x7({
                      "[]": function () {
                        return function (x8) {
                          return jAgda_Agda_Builtin_List["List"]["[]"];
                        };
                      },
                      "_∷_": function (x8, x9) {
                        return function (x10) {
                          return x10({
                            "[]": function () {
                              return jAgda_Agda_Builtin_List["List"]["[]"];
                            },
                            "_∷_": function (x11, x12) {
                              return jAgda_Agda_Builtin_List["List"]["_∷_"](x6(x8)(x11))(exports["zipWith"](x0)(x1)(x2)(x3)(x4)(x5)(x6)(x9)(x12));
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
  exports["filter"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["gfilter"](x0)(x0)(x1)(x1)(function (x3) {
            return jAgda_Data_Bool_Base["if_then_else_"](x0)("*")(x2(x3))(jAgda_Data_Maybe_Base["Maybe"]["just"](x3))(jAgda_Data_Maybe_Base["Maybe"]["nothing"]);
          });
        };
      };
    };
  exports["gfilter"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "[]": function () {
                    return jAgda_Agda_Builtin_List["List"]["[]"];
                  },
                  "_∷_": function (x6, x7) {
                    return exports["with-630"](x0)(x1)(x2)(x3)(x4)(x6)(x4(x6))(x7);
                  }
                });
              };
            };
          };
        };
      };
    };
  exports["downFrom"] = function (x0) {
      return exports["unfold"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")("*")(exports["_368@141757744"]["f"](x0))(x0)(exports["_368@141757744"]["Singleton"]["wrap"](x0));
    };
  exports["null"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "[]": function () {
              return true;
            },
            "_∷_": function (x3, x4) {
              return false;
            }
          });
        };
      };
    };
  exports["inits"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "[]": function () {
              return jAgda_Agda_Builtin_List["List"]["_∷_"](jAgda_Agda_Builtin_List["List"]["[]"])(jAgda_Agda_Builtin_List["List"]["[]"]);
            },
            "_∷_": function (x3, x4) {
              return jAgda_Agda_Builtin_List["List"]["_∷_"](jAgda_Agda_Builtin_List["List"]["[]"])(exports["map"](x0)(x0)("*")("*")(jAgda_Agda_Builtin_List["List"]["_∷_"](x3))(exports["inits"](x0)(x1)(x4)));
            }
          });
        };
      };
    };
  exports["_368@141757744"]["f"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "wrap": function (x3) {
              return jAgda_Data_Maybe_Base["Maybe"]["just"](jAgda_Data_Product["Σ"]["_,_"](x1)(exports["_368@141757744"]["Singleton"]["wrap"](x1)));
            }
          });
        };
      };
    };
  exports["take"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "suc": function (x3) {
              return function (x4) {
                return x4({
                  "[]": function () {
                    return jAgda_Agda_Builtin_List["List"]["[]"];
                  },
                  "_∷_": function (x5, x6) {
                    return jAgda_Agda_Builtin_List["List"]["_∷_"](x5)(exports["take"](x0)(x1)(x3)(x6));
                  }
                });
              };
            },
            "zero": function () {
              return function (x3) {
                return jAgda_Agda_Builtin_List["List"]["[]"];
              };
            }
          });
        };
      };
    };
  exports["reverse"] = function (x0) {
      return function (x1) {
        return exports["foldl"](x0)(x0)("*")(x1)(function (x2) {
          return function (x3) {
            return jAgda_Agda_Builtin_List["List"]["_∷_"](x3)(x2);
          };
        })(jAgda_Agda_Builtin_List["List"]["[]"]);
      };
    };
  exports["InitLast"]["_∷ʳ'_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["_∷ʳ'_"](x0, x1);
        };
      };
    };
  exports["drop"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "suc": function (x3) {
              return function (x4) {
                return x4({
                  "[]": function () {
                    return jAgda_Agda_Builtin_List["List"]["[]"];
                  },
                  "_∷_": function (x5, x6) {
                    return exports["drop"](x0)(x1)(x3)(x6);
                  }
                });
              };
            },
            "zero": function () {
              return function (x3) {
                return x3;
              };
            }
          });
        };
      };
    };
  exports["splitAt"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "suc": function (x3) {
              return function (x4) {
                return x4({
                  "[]": function () {
                    return jAgda_Data_Product["Σ"]["_,_"](jAgda_Agda_Builtin_List["List"]["[]"])(jAgda_Agda_Builtin_List["List"]["[]"]);
                  },
                  "_∷_": function (x5, x6) {
                    return exports["with-438"](x0)(x1)(x3)(x6)(exports["splitAt"](x0)(x1)(x3)(x6))(x5);
                  }
                });
              };
            },
            "zero": function () {
              return function (x3) {
                return jAgda_Data_Product["Σ"]["_,_"](jAgda_Agda_Builtin_List["List"]["[]"])(x3);
              };
            }
          });
        };
      };
    };
  exports["[_]"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Agda_Builtin_List["List"]["_∷_"](x2)(jAgda_Agda_Builtin_List["List"]["[]"]);
        };
      };
    };
  exports["with-600"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "[]": function () {
                return function (x4) {
                  return exports["InitLast"]["_∷ʳ'_"](jAgda_Agda_Builtin_List["List"]["[]"])(x4);
                };
              },
              "_∷ʳ'_": function (x4, x5) {
                return function (x6) {
                  return exports["InitLast"]["_∷ʳ'_"](jAgda_Agda_Builtin_List["List"]["_∷_"](x6)(x4))(x5);
                };
              }
            });
          };
        };
      };
    };
  exports["with-526"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              if (x4) {
                return function (x5) {
                  return jAgda_Data_Product["map"](x0)(x0)(x0)(x0)("*")("*")(function (x6) {
                    return "*";
                  })(function (x6) {
                    return "*";
                  })(jAgda_Agda_Builtin_List["List"]["_∷_"](x3))(function (x6) {
                    return jAgda_Function["id"](x0)("*");
                  })(exports["span"](x0)(x1)(x2)(x5));
                };
              } else {
                return function (x5) {
                  return jAgda_Data_Product["Σ"]["_,_"](jAgda_Agda_Builtin_List["List"]["[]"])(jAgda_Agda_Builtin_List["List"]["_∷_"](x3)(x5));
                };
              }
            };
          };
        };
      };
    };
  exports["foldr"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return x6({
                    "[]": function () {
                      return x5;
                    },
                    "_∷_": function (x7, x8) {
                      return x4(x7)(exports["foldr"](x0)(x1)(x2)(x3)(x4)(x5)(x8));
                    }
                  });
                };
              };
            };
          };
        };
      };
    };
  exports["_∷ʳ_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["_++_"](x0)(x1)(x2)(exports["[_]"](x0)(x1)(x3));
          };
        };
      };
    };
  exports["any"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Function["_∘_"](x0)(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")(function (x3) {
            return "*";
          })(function (x3) {
            return function (x4) {
              return "*";
            };
          })(function (x3) {
            return exports["or"];
          })(exports["map"](x0)(jAgda_Agda_Primitive["lzero"])(x1)("*")(x2));
        };
      };
    };
  exports["with-466"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              if (x4) {
                return function (x5) {
                  return jAgda_Agda_Builtin_List["List"]["_∷_"](x3)(exports["takeWhile"](x0)(x1)(x2)(x5));
                };
              } else {
                return function (x5) {
                  return jAgda_Agda_Builtin_List["List"]["[]"];
                };
              }
            };
          };
        };
      };
    };
  exports["InitLast"]["[]"] = function (x0) {
      return x0["[]"]();
    };
  exports["span"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "[]": function () {
                return jAgda_Data_Product["Σ"]["_,_"](jAgda_Agda_Builtin_List["List"]["[]"])(jAgda_Agda_Builtin_List["List"]["[]"]);
              },
              "_∷_": function (x4, x5) {
                return exports["with-526"](x0)(x1)(x2)(x4)(x2(x4))(x5);
              }
            });
          };
        };
      };
    };
  exports["with-338"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return x7({
                      "just": function (x8) {
                        return x8({
                          "_,_": function (x9, x10) {
                            return jAgda_Agda_Builtin_List["List"]["_∷_"](x9)(exports["unfold"](x0)(x1)(x2)(x3)(x4)(x5)(x10));
                          }
                        });
                      },
                      "nothing": function () {
                        return jAgda_Agda_Builtin_List["List"]["[]"];
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
  exports["tails"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "[]": function () {
              return jAgda_Agda_Builtin_List["List"]["_∷_"](jAgda_Agda_Builtin_List["List"]["[]"])(jAgda_Agda_Builtin_List["List"]["[]"]);
            },
            "_∷_": function (x3, x4) {
              return jAgda_Agda_Builtin_List["List"]["_∷_"](jAgda_Agda_Builtin_List["List"]["_∷_"](x3)(x4))(exports["tails"](x0)(x1)(x4));
            }
          });
        };
      };
    };
  exports["unfold"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "suc": function (x6) {
                    return function (x7) {
                      return exports["with-338"](x0)(x1)(x2)(x3)(x4)(x6)(x7)(x4(x6)(x7));
                    };
                  },
                  "zero": function () {
                    return function (x6) {
                      return jAgda_Agda_Builtin_List["List"]["[]"];
                    };
                  }
                });
              };
            };
          };
        };
      };
    };
  exports["break"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["span"](x0)(x1)(jAgda_Function["_∘_"](x0)(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x1)(function (x3) {
            return "*";
          })(function (x3) {
            return function (x4) {
              return "*";
            };
          })(function (x3) {
            return jAgda_Data_Bool_Base["not"];
          })(x2));
        };
      };
    };
  exports["with-496"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              if (x4) {
                return function (x5) {
                  return exports["dropWhile"](x0)(x1)(x2)(x5);
                };
              } else {
                return function (x5) {
                  return jAgda_Agda_Builtin_List["List"]["_∷_"](x3)(x5);
                };
              }
            };
          };
        };
      };
    };
  exports["initLast"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "[]": function () {
              return exports["InitLast"]["[]"];
            },
            "_∷_": function (x3, x4) {
              return exports["with-600"](x0)(x1)(x4)(exports["initLast"](x0)(x1)(x4))(x3);
            }
          });
        };
      };
    };
  exports["length"] = function (x0) {
      return function (x1) {
        return exports["foldr"](x0)(jAgda_Agda_Primitive["lzero"])(x1)("*")(function (x2) {
          return jAgda_Agda_Builtin_Nat["Nat"]["suc"];
        })(0);
      };
    };
  exports["concatMap"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return jAgda_Function["_∘_"](x0)(x1)(x1)("*")(function (x5) {
                return "*";
              })(function (x5) {
                return function (x6) {
                  return "*";
                };
              })(function (x5) {
                return exports["concat"](x1)(x3);
              })(exports["map"](x0)(x1)(x2)("*")(x4));
            };
          };
        };
      };
    };
  exports["_++_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "[]": function () {
              return function (x3) {
                return x3;
              };
            },
            "_∷_": function (x3, x4) {
              return function (x5) {
                return jAgda_Agda_Builtin_List["List"]["_∷_"](x3)(exports["_++_"](x0)(x1)(x4)(x5));
              };
            }
          });
        };
      };
    };
  exports["with-672"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                if (x5) {
                  return function (x6) {
                    return x6({
                      "_,_": function (x7, x8) {
                        return jAgda_Data_Product["Σ"]["_,_"](jAgda_Agda_Builtin_List["List"]["_∷_"](x3)(x7))(x8);
                      }
                    });
                  };
                } else {
                  return function (x6) {
                    return x6({
                      "_,_": function (x7, x8) {
                        return jAgda_Data_Product["Σ"]["_,_"](x7)(jAgda_Agda_Builtin_List["List"]["_∷_"](x3)(x8));
                      }
                    });
                  };
                }
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
            return exports["zipWith"](x0)(x1)(jAgda_Agda_Primitive["_⊔_"](x1)(x0))(x2)(x3)("*")(jAgda_Data_Product["Σ"]["_,_"]);
          };
        };
      };
    };
  exports["fromMaybe"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "just": function (x3) {
              return exports["[_]"](x0)(x1)(x3);
            },
            "nothing": function () {
              return jAgda_Agda_Builtin_List["List"]["[]"];
            }
          });
        };
      };
    };
  exports["intersperse"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "[]": function () {
                return jAgda_Agda_Builtin_List["List"]["[]"];
              },
              "_∷_": function (x4, x5) {
                return x5({
                  "[]": function () {
                    return exports["[_]"](x0)(x1)(x4);
                  },
                  "_∷_": function (x6, x7) {
                    return jAgda_Agda_Builtin_List["List"]["_∷_"](x4)(jAgda_Agda_Builtin_List["List"]["_∷_"](x2)(exports["intersperse"](x0)(x1)(x2)(jAgda_Agda_Builtin_List["List"]["_∷_"](x6)(x7))));
                  }
                });
              }
            });
          };
        };
      };
    };
  exports["with-630"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return x6({
                    "just": function (x7) {
                      return function (x8) {
                        return jAgda_Agda_Builtin_List["List"]["_∷_"](x7)(exports["gfilter"](x0)(x1)(x2)(x3)(x4)(x8));
                      };
                    },
                    "nothing": function () {
                      return function (x7) {
                        return exports["gfilter"](x0)(x1)(x2)(x3)(x4)(x7);
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
  exports["map"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "[]": function () {
                    return jAgda_Agda_Builtin_List["List"]["[]"];
                  },
                  "_∷_": function (x6, x7) {
                    return jAgda_Agda_Builtin_List["List"]["_∷_"](x4(x6))(exports["map"](x0)(x1)(x2)(x3)(x4)(x7));
                  }
                });
              };
            };
          };
        };
      };
    };
  exports["replicate"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "suc": function (x3) {
              return function (x4) {
                return jAgda_Agda_Builtin_List["List"]["_∷_"](x4)(exports["replicate"](x0)(x1)(x3)(x4));
              };
            },
            "zero": function () {
              return function (x3) {
                return jAgda_Agda_Builtin_List["List"]["[]"];
              };
            }
          });
        };
      };
    };
  exports["scanr"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return x6({
                    "[]": function () {
                      return jAgda_Agda_Builtin_List["List"]["_∷_"](x5)(jAgda_Agda_Builtin_List["List"]["[]"]);
                    },
                    "_∷_": function (x7, x8) {
                      return exports["with-262"](x0)(x1)(x2)(x3)(x4)(x5)(x8)(exports["scanr"](x0)(x1)(x2)(x3)(x4)(x5)(x8))(x7);
                    }
                  });
                };
              };
            };
          };
        };
      };
    };
  exports["with-262"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return x7({
                      "[]": function () {
                        return function (x8) {
                          return jAgda_Agda_Builtin_List["List"]["[]"];
                        };
                      },
                      "_∷_": function (x8, x9) {
                        return function (x10) {
                          return jAgda_Agda_Builtin_List["List"]["_∷_"](x4(x10)(x8))(jAgda_Agda_Builtin_List["List"]["_∷_"](x8)(x9));
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
  exports["concat"] = function (x0) {
      return function (x1) {
        return exports["foldr"](x0)(x0)("*")("*")(exports["_++_"](x0)(x1))(jAgda_Agda_Builtin_List["List"]["[]"]);
      };
    };
  exports["with-438"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "_,_": function (x5, x6) {
                  return function (x7) {
                    return jAgda_Data_Product["Σ"]["_,_"](jAgda_Agda_Builtin_List["List"]["_∷_"](x7)(x5))(x6);
                  };
                }
              });
            };
          };
        };
      };
    };
  exports["takeWhile"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "[]": function () {
                return jAgda_Agda_Builtin_List["List"]["[]"];
              },
              "_∷_": function (x4, x5) {
                return exports["with-466"](x0)(x1)(x2)(x4)(x2(x4))(x5);
              }
            });
          };
        };
      };
    };
  exports["foldl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return x6({
                    "[]": function () {
                      return x5;
                    },
                    "_∷_": function (x7, x8) {
                      return exports["foldl"](x0)(x1)(x2)(x3)(x4)(x4(x5)(x7))(x8);
                    }
                  });
                };
              };
            };
          };
        };
      };
    };
  exports["scanl"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return x6({
                    "[]": function () {
                      return jAgda_Agda_Builtin_List["List"]["_∷_"](x5)(jAgda_Agda_Builtin_List["List"]["[]"]);
                    },
                    "_∷_": function (x7, x8) {
                      return jAgda_Agda_Builtin_List["List"]["_∷_"](x5)(exports["scanl"](x0)(x1)(x2)(x3)(x4)(x4(x5)(x7))(x8));
                    }
                  });
                };
              };
            };
          };
        };
      };
    };
  exports["_368@141757744"]["Singleton"]["wrap"] = function (x0) {
      return function (x1) {
        return x1["wrap"](x0);
      };
    };
  exports["all"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return jAgda_Function["_∘_"](x0)(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")(function (x3) {
            return "*";
          })(function (x3) {
            return function (x4) {
              return "*";
            };
          })(function (x3) {
            return exports["and"];
          })(exports["map"](x0)(jAgda_Agda_Primitive["lzero"])(x1)("*")(x2));
        };
      };
    };
  exports["dropWhile"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "[]": function () {
                return jAgda_Agda_Builtin_List["List"]["[]"];
              },
              "_∷_": function (x4, x5) {
                return exports["with-496"](x0)(x1)(x2)(x4)(x2(x4))(x5);
              }
            });
          };
        };
      };
    };
  exports["partition"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "[]": function () {
                return jAgda_Data_Product["Σ"]["_,_"](jAgda_Agda_Builtin_List["List"]["[]"])(jAgda_Agda_Builtin_List["List"]["[]"]);
              },
              "_∷_": function (x4, x5) {
                return exports["with-672"](x0)(x1)(x2)(x4)(x5)(x2(x4))(exports["partition"](x0)(x1)(x2)(x5));
              }
            });
          };
        };
      };
    };
  exports["product"] = exports["foldr"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")("*")(jAgda_Agda_Builtin_Nat["_*_"])(1);
  exports["sum"] = exports["foldr"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")("*")(jAgda_Agda_Builtin_Nat["_+_"])(0);
  exports["or"] = exports["foldr"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")("*")(jAgda_Data_Bool_Base["_∨_"])(false);
  exports["and"] = exports["foldr"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")("*")(jAgda_Data_Bool_Base["_∧_"])(true);
  });
