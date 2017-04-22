define(["exports","jAgda.Agda.Builtin.Equality","jAgda.Agda.Builtin.List","jAgda.Agda.Builtin.Nat","jAgda.Agda.Primitive","jAgda.Category.Applicative.Indexed","jAgda.Data.Fin","jAgda.Data.List.Base","jAgda.Data.Nat.Base","jAgda.Data.Product","jAgda.Function"],function(exports,jAgda_Agda_Builtin_Equality,jAgda_Agda_Builtin_List,jAgda_Agda_Builtin_Nat,jAgda_Agda_Primitive,jAgda_Category_Applicative_Indexed,jAgda_Data_Fin,jAgda_Data_List_Base,jAgda_Data_Nat_Base,jAgda_Data_Product,jAgda_Function) {
  exports["Vec"] = {};
  exports["_∈_"] = {};
  exports["_[_]=_"] = {};
  exports["_[_]=_"]["there"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return x6["there"](x0, x1, x2, x3, x4, x5);
                };
              };
            };
          };
        };
      };
    };
  exports["_⋎_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "[]": function () {
                  return function (x5) {
                    return x5;
                  };
                },
                "_∷_": function (x5, x6, x7) {
                  return function (x8) {
                    return exports["Vec"]["_∷_"](jAgda_Data_Nat_Base["_+⋎_"](x2)(x5))(x6)(exports["_⋎_"](x0)(x2)(x5)(x3)(x8)(x7));
                  };
                }
              });
            };
          };
        };
      };
    };
  exports["group"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "suc": function (x3) {
              return function (x4) {
                return function (x5) {
                  return exports["with-466"](x0)(x1)(x3)(x4)(x5)(exports["splitAt"](x0)(x1)(x4)(jAgda_Agda_Builtin_Nat["_*_"](x3)(x4))(x5));
                };
              };
            },
            "zero": function () {
              return function (x3) {
                return function (x4) {
                  return x4({
                    "[]": function () {
                      return jAgda_Data_Product["Σ"]["_,_"](exports["Vec"]["[]"])(jAgda_Agda_Builtin_Equality["_≡_"]["refl"]);
                    },
                    "_∷_": function () {
                      return undefined;
                    }
                  });
                };
              };
            }
          });
        };
      };
    };
  exports["lookup"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "suc": function (x4, x5) {
                return function (x6) {
                  return x6({
                    "[]": function () {
                      return undefined;
                    },
                    "_∷_": function (x7, x8, x9) {
                      return exports["lookup"](x0)(x4)(x2)(x5)(x9);
                    }
                  });
                };
              },
              "zero": function (x4) {
                return function (x5) {
                  return x5({
                    "[]": function () {
                      return undefined;
                    },
                    "_∷_": function (x6, x7, x8) {
                      return x7;
                    }
                  });
                };
              }
            });
          };
        };
      };
    };
  exports["_[_]≔_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "[]": function () {
                return function (x4) {
                  return function (x5) {
                    return undefined;
                  };
                };
              },
              "_∷_": function (x4, x5, x6) {
                return function (x7) {
                  return x7({
                    "suc": function (x8, x9) {
                      return function (x10) {
                        return exports["Vec"]["_∷_"](x4)(x5)(exports["_[_]≔_"](x0)(x4)(x2)(x6)(x9)(x10));
                      };
                    },
                    "zero": function (x8) {
                      return function (x9) {
                        return exports["Vec"]["_∷_"](x4)(x9)(x6);
                      };
                    }
                  });
                };
              }
            });
          };
        };
      };
    };
  exports["_⊛*_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["_>>=_"](jAgda_Agda_Primitive["_⊔_"](x1)(x0))(x1)(x2)(x3)("*")(x5)(x6)(function (x8) {
                      return exports["map"](x0)(x1)(x3)(x4)(x5)(x8)(x7);
                    });
                  };
                };
              };
            };
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
                  return function (x7) {
                    return x7({
                      "[]": function () {
                        return x6;
                      },
                      "_∷_": function (x8, x9, x10) {
                        return exports["foldl"](x0)(x1)(x2)(function (x11) {
                          return x3(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x11));
                        })(x8)(function (x11) {
                          return x5(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x11));
                        })(x5(jAgda_Agda_Builtin_Nat["Nat"]["zero"])(x6)(x9))(x10);
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
  exports["_>>=_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return exports["concat"](x1)(x3)(x2)(x5)(exports["map"](x0)(x1)(x2)(x4)("*")(x7)(x6));
                  };
                };
              };
            };
          };
        };
      };
    };
  exports["splitAt"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "suc": function (x3) {
              return function (x4) {
                return function (x5) {
                  return x5({
                    "[]": function () {
                      return undefined;
                    },
                    "_∷_": function (x6, x7, x8) {
                      return exports["with-384"](x3)(x4)(x0)(x1)(x8)(exports["splitAt"](x0)(x1)(x3)(x4)(x8))(x7);
                    }
                  });
                };
              };
            },
            "zero": function () {
              return function (x3) {
                return function (x4) {
                  return jAgda_Data_Product["Σ"]["_,_"](exports["Vec"]["[]"])(jAgda_Data_Product["Σ"]["_,_"](x4)(jAgda_Agda_Builtin_Equality["_≡_"]["refl"]));
                };
              };
            }
          });
        };
      };
    };
  exports["[_]"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["Vec"]["_∷_"](jAgda_Agda_Builtin_Nat["Nat"]["zero"])(x2)(exports["Vec"]["[]"]);
        };
      };
    };
  exports["_⊛_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "[]": function () {
                    return function (x6) {
                      return exports["Vec"]["[]"];
                    };
                  },
                  "_∷_": function (x6, x7, x8) {
                    return function (x9) {
                      return x9({
                        "[]": function () {
                          return undefined;
                        },
                        "_∷_": function (x10, x11, x12) {
                          return exports["Vec"]["_∷_"](x6)(x7(x11))(exports["_⊛_"](x0)(x1)(x6)(x3)(x4)(x8)(x12));
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
  exports["_∈_"]["there"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5["there"](x0, x1, x2, x3, x4);
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
              return exports["zipWith"](x0)(x1)(jAgda_Agda_Primitive["_⊔_"](x1)(x0))(x2)(x3)(x4)("*")(jAgda_Data_Product["Σ"]["_,_"]);
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
                  return function (x7) {
                    return x7({
                      "[]": function () {
                        return x6;
                      },
                      "_∷_": function (x8, x9, x10) {
                        return x5(x8)(x9)(exports["foldr"](x0)(x1)(x2)(x3)(x8)(x5)(x6)(x10));
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
  exports["replicate"] = function (x0) {
      return function (x1) {
        return x1({
          "suc": function (x2) {
            return function (x3) {
              return function (x4) {
                return exports["Vec"]["_∷_"](x2)(x4)(exports["replicate"](x0)(x2)(x3)(x4));
              };
            };
          },
          "zero": function () {
            return function (x2) {
              return function (x3) {
                return exports["Vec"]["[]"];
              };
            };
          }
        });
      };
    };
  exports["Vec"]["_∷_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["_∷_"](x0, x1, x2);
          };
        };
      };
    };
  exports["with-626"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "_,_": function (x5, x6) {
                  return x6({
                    "_,_": function (x7, x8) {
                      return x8({
                        "refl": function () {
                          return x7;
                        }
                      });
                    }
                  });
                }
              });
            };
          };
        };
      };
    };
  exports["take"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["with-410"](x0)(x1)(x2)(x3)(x4)(exports["splitAt"](x0)(x1)(x2)(x3)(x4));
            };
          };
        };
      };
    };
  exports["with-434"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "_,_": function (x6, x7) {
                    return x7({
                      "_,_": function (x8, x9) {
                        return x9({
                          "refl": function () {
                            return x8;
                          }
                        });
                      }
                    });
                  }
                });
              };
            };
          };
        };
      };
    };
  exports["applicative"] = function (x0) {
      return function (x1) {
        return jAgda_Category_Applicative_Indexed["RawIApplicative"]["record"](function (x2) {
          return exports["replicate"](x0)(x1);
        })(function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["_⊛_"](x0)(x0)(x1);
            };
          };
        });
      };
    };
  exports["zipWith"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return function (x6) {
                  return function (x7) {
                    return function (x8) {
                      return function (x9) {
                        return exports["_⊛_"](x1)(x2)(x3)(x5)(x6)(exports["_⊛_"](x0)(jAgda_Agda_Primitive["_⊔_"](x2)(x1))(x3)(x4)("*")(exports["replicate"](jAgda_Agda_Primitive["_⊔_"](x2)(jAgda_Agda_Primitive["_⊔_"](x1)(x0)))(x3)("*")(x7))(x8))(x9);
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
  exports["with-466"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "_,_": function (x6, x7) {
                    return x7({
                      "_,_": function (x8, x9) {
                        return x9({
                          "refl": function () {
                            return exports["with-478"](x0)(x1)(x2)(x3)(x8)(exports["group"](x0)(x1)(x2)(x3)(x8))(x6);
                          }
                        });
                      }
                    });
                  }
                });
              };
            };
          };
        };
      };
    };
  exports["toList"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "[]": function () {
                return jAgda_Agda_Builtin_List["List"]["[]"];
              },
              "_∷_": function (x4, x5, x6) {
                return jAgda_Agda_Builtin_List["List"]["_∷_"](x5)(exports["toList"](x0)(x4)(x2)(x6));
              }
            });
          };
        };
      };
    };
  exports["with-608"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "_,_": function (x5, x6) {
                  return x6({
                    "_,_": function (x7, x8) {
                      return x8({
                        "refl": function () {
                          return x5;
                        }
                      });
                    }
                  });
                }
              });
            };
          };
        };
      };
    };
  exports["concat"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "[]": function () {
                  return exports["Vec"]["[]"];
                },
                "_∷_": function (x5, x6, x7) {
                  return exports["_++_"](x0)(x1)(jAgda_Agda_Builtin_Nat["_*_"](x5)(x1))(x3)(x6)(exports["concat"](x0)(x1)(x5)(x3)(x7));
                }
              });
            };
          };
        };
      };
    };
  exports["with-384"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "_,_": function (x6, x7) {
                    return x7({
                      "_,_": function (x8, x9) {
                        return x9({
                          "refl": function () {
                            return function (x10) {
                              return jAgda_Data_Product["Σ"]["_,_"](exports["Vec"]["_∷_"](x0)(x10)(x6))(jAgda_Data_Product["Σ"]["_,_"](x8)(jAgda_Agda_Builtin_Equality["_≡_"]["refl"]));
                            };
                          }
                        });
                      }
                    });
                  }
                });
              };
            };
          };
        };
      };
    };
  exports["_++_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "[]": function () {
                  return function (x5) {
                    return x5;
                  };
                },
                "_∷_": function (x5, x6, x7) {
                  return function (x8) {
                    return exports["Vec"]["_∷_"](jAgda_Agda_Builtin_Nat["_+_"](x5)(x2))(x6)(exports["_++_"](x0)(x5)(x2)(x3)(x7)(x8));
                  };
                }
              });
            };
          };
        };
      };
    };
  exports["foldl₁"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "[]": function () {
                  return undefined;
                },
                "_∷_": function (x5, x6, x7) {
                  return exports["foldl"](x0)(x0)(x1)(function (x8) {
                    return x1;
                  })(x2)(function (x8) {
                    return x3;
                  })(x6)(x7);
                }
              });
            };
          };
        };
      };
    };
  exports["unzip"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "[]": function () {
                    return jAgda_Data_Product["Σ"]["_,_"](exports["Vec"]["[]"])(exports["Vec"]["[]"]);
                  },
                  "_∷_": function (x6, x7, x8) {
                    return x7({
                      "_,_": function (x9, x10) {
                        return jAgda_Data_Product["map"](x0)(x0)(x1)(x1)("*")("*")(function (x11) {
                          return "*";
                        })(function (x11) {
                          return "*";
                        })(exports["Vec"]["_∷_"](x6)(x8))(function (x11) {
                          return exports["Vec"]["_∷_"](x6)(x9);
                        })(exports["unzip"](x0)(x1)(x6)(x3)(x4)(x10));
                      }
                    });
                  }
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
                  return exports["_⊛_"](x0)(x1)(x2)(x3)(x4)(exports["replicate"](jAgda_Agda_Primitive["_⊔_"](x1)(x0))(x2)("*")(x5))(x6);
                };
              };
            };
          };
        };
      };
    };
  exports["head"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "[]": function () {
                return undefined;
              },
              "_∷_": function (x4, x5, x6) {
                return x5;
              }
            });
          };
        };
      };
    };
  exports["initLast"] = function (x0) {
      return function (x1) {
        return x1({
          "suc": function (x2) {
            return function (x3) {
              return function (x4) {
                return x4({
                  "[]": function () {
                    return undefined;
                  },
                  "_∷_": function (x5, x6, x7) {
                    return exports["with-586"](x2)(x0)(x3)(x7)(exports["initLast"](x0)(x2)(x3)(x7))(x6);
                  }
                });
              };
            };
          },
          "zero": function () {
            return function (x2) {
              return function (x3) {
                return x3({
                  "[]": function () {
                    return undefined;
                  },
                  "_∷_": function (x4, x5, x6) {
                    return x6({
                      "[]": function () {
                        return jAgda_Data_Product["Σ"]["_,_"](exports["Vec"]["[]"])(jAgda_Data_Product["Σ"]["_,_"](x5)(jAgda_Agda_Builtin_Equality["_≡_"]["refl"]));
                      },
                      "_∷_": function () {
                        return undefined;
                      }
                    });
                  }
                });
              };
            };
          }
        });
      };
    };
  exports["with-478"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "_,_": function (x6, x7) {
                    return x7({
                      "refl": function () {
                        return function (x8) {
                          return jAgda_Data_Product["Σ"]["_,_"](exports["Vec"]["_∷_"](x2)(x8)(x6))(jAgda_Agda_Builtin_Equality["_≡_"]["refl"]);
                        };
                      }
                    });
                  }
                });
              };
            };
          };
        };
      };
    };
  exports["reverse"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["foldl"](x0)(x0)(x2)("*")(x1)(function (x3) {
            return function (x4) {
              return function (x5) {
                return exports["Vec"]["_∷_"](x3)(x5)(x4);
              };
            };
          })(exports["Vec"]["[]"]);
        };
      };
    };
  exports["split"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "[]": function () {
                return jAgda_Data_Product["Σ"]["_,_"](exports["Vec"]["[]"])(exports["Vec"]["[]"]);
              },
              "_∷_": function (x4, x5, x6) {
                return x6({
                  "[]": function () {
                    return jAgda_Data_Product["Σ"]["_,_"](exports["Vec"]["_∷_"](jAgda_Agda_Builtin_Nat["Nat"]["zero"])(x5)(exports["Vec"]["[]"]))(exports["Vec"]["[]"]);
                  },
                  "_∷_": function (x7, x8, x9) {
                    return jAgda_Data_Product["map"](x0)(x0)(x0)(x0)("*")("*")(function (x10) {
                      return "*";
                    })(function (x10) {
                      return "*";
                    })(exports["Vec"]["_∷_"](jAgda_Data_Nat_Base["⌈_/2⌉"](x7))(x5))(function (x10) {
                      return exports["Vec"]["_∷_"](jAgda_Data_Nat_Base["⌊_/2⌋"](x7))(x8);
                    })(exports["split"](x0)(x7)(x2)(x9));
                  }
                });
              }
            });
          };
        };
      };
    };
  exports["Vec"]["[]"] = function (x0) {
      return x0["[]"]();
    };
  exports["fromList"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "[]": function () {
              return exports["Vec"]["[]"];
            },
            "_∷_": function (x3, x4) {
              return exports["Vec"]["_∷_"](jAgda_Data_List_Base["length"](x0)(x1)(x4))(x3)(exports["fromList"](x0)(x1)(x4));
            }
          });
        };
      };
    };
  exports["foldr₁"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "[]": function () {
                  return undefined;
                },
                "_∷_": function (x5, x6, x7) {
                  return x7({
                    "[]": function () {
                      return x6;
                    },
                    "_∷_": function (x8, x9, x10) {
                      return x3(x6)(exports["foldr₁"](x0)(x1)(x8)(x3)(exports["Vec"]["_∷_"](x8)(x9)(x10)));
                    }
                  });
                }
              });
            };
          };
        };
      };
    };
  exports["last"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["with-626"](x0)(x1)(x2)(x3)(exports["initLast"](x0)(x1)(x2)(x3));
          };
        };
      };
    };
  exports["drop"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return exports["with-434"](x0)(x1)(x2)(x3)(x4)(exports["splitAt"](x0)(x1)(x2)(x3)(x4));
            };
          };
        };
      };
    };
  exports["tail"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "[]": function () {
                return undefined;
              },
              "_∷_": function (x4, x5, x6) {
                return x6;
              }
            });
          };
        };
      };
    };
  exports["with-410"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return function (x5) {
                return x5({
                  "_,_": function (x6, x7) {
                    return x7({
                      "_,_": function (x8, x9) {
                        return x9({
                          "refl": function () {
                            return x6;
                          }
                        });
                      }
                    });
                  }
                });
              };
            };
          };
        };
      };
    };
  exports["with-586"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "_,_": function (x5, x6) {
                  return x6({
                    "_,_": function (x7, x8) {
                      return x8({
                        "refl": function () {
                          return function (x9) {
                            return jAgda_Data_Product["Σ"]["_,_"](exports["Vec"]["_∷_"](x0)(x9)(x5))(jAgda_Data_Product["Σ"]["_,_"](x7)(jAgda_Agda_Builtin_Equality["_≡_"]["refl"]));
                          };
                        }
                      });
                    }
                  });
                }
              });
            };
          };
        };
      };
    };
  exports["allFin"] = function (x0) {
      return exports["tabulate"](x0)(jAgda_Agda_Primitive["lzero"])("*")(jAgda_Function["id"](jAgda_Agda_Primitive["lzero"])("*"));
    };
  exports["init"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return exports["with-608"](x0)(x1)(x2)(x3)(exports["initLast"](x0)(x1)(x2)(x3));
          };
        };
      };
    };
  exports["_[_]=_"]["here"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["here"](x0, x1, x2);
          };
        };
      };
    };
  exports["sum"] = function (x0) {
      return exports["foldr"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])("*")(function (x1) {
        return "*";
      })(x0)(function (x1) {
        return jAgda_Agda_Builtin_Nat["_+_"];
      })(0);
    };
  exports["tabulate"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return function (x3) {
              return function (x4) {
                return exports["Vec"]["_∷_"](x1)(x4(jAgda_Data_Fin["Fin"]["zero"](x1)))(exports["tabulate"](x1)(x2)(x3)(jAgda_Function["_∘_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x2)("*")(function (x5) {
                  return "*";
                })(function (x5) {
                  return function (x6) {
                    return x3;
                  };
                })(function (x5) {
                  return x4;
                })(jAgda_Data_Fin["Fin"]["suc"](x1))));
              };
            };
          };
        },
        "zero": function () {
          return function (x1) {
            return function (x2) {
              return function (x3) {
                return exports["Vec"]["[]"];
              };
            };
          };
        }
      });
    };
  exports["_∈_"]["here"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3["here"](x0, x1, x2);
          };
        };
      };
    };
  exports["_∷ʳ_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "[]": function () {
                return function (x4) {
                  return exports["[_]"](x0)(x2)(x4);
                };
              },
              "_∷_": function (x4, x5, x6) {
                return function (x7) {
                  return exports["Vec"]["_∷_"](jAgda_Agda_Builtin_Nat["_+_"](1)(x4))(x5)(exports["_∷ʳ_"](x0)(x4)(x2)(x6)(x7));
                };
              }
            });
          };
        };
      };
    };
  });
