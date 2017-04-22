define(["exports","jAgda.Agda.Builtin.Equality","jAgda.Agda.Builtin.Nat","jAgda.Agda.Primitive","jAgda.Data.Nat.Base","jAgda.Function","jAgda.Relation.Nullary.Decidable"],function(exports,jAgda_Agda_Builtin_Equality,jAgda_Agda_Builtin_Nat,jAgda_Agda_Primitive,jAgda_Data_Nat_Base,jAgda_Function,jAgda_Relation_Nullary_Decidable) {
  exports["_≺_"] = {};
  exports["Ordering"] = {};
  exports["Fin"] = {};
  exports["with-344"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return x3({
              "equal": function (x4) {
                return exports["Ordering"]["equal"](exports["Fin"]["suc"](x0)(x4));
              },
              "greater": function (x4, x5) {
                return exports["Ordering"]["greater"](exports["Fin"]["suc"](x0)(x4))(exports["Fin"]["suc"](exports["toℕ"](x0)(x4))(x5));
              },
              "less": function (x4, x5) {
                return exports["Ordering"]["less"](exports["Fin"]["suc"](x0)(x4))(exports["Fin"]["suc"](exports["toℕ"](x0)(x4))(x5));
              }
            });
          };
        };
      };
    };
  exports["_ℕ-_"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3, x4) {
                return exports["_ℕ-_"](x1)(x4);
              },
              "zero": function (x3) {
                return exports["fromℕ"](x0);
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return x1({
              "suc": function (x2, x3) {
                return undefined;
              },
              "zero": function (x2) {
                return exports["fromℕ"](x0);
              }
            });
          };
        }
      });
    };
  exports["fold′"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return function (x3) {
              return function (x4) {
                return function (x5) {
                  return function (x6) {
                    return x6({
                      "suc": function (x7, x8) {
                        return x4(x8)(exports["fold′"](x1)(x2)(jAgda_Function["_∘_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lsuc"](x2))("*")(function (x9) {
                          return "*";
                        })(function (x9) {
                          return function (x10) {
                            return "*";
                          };
                        })(function (x9) {
                          return x3;
                        })(exports["inject₁"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x1))))(jAgda_Function["_∘_"](jAgda_Agda_Primitive["lzero"])(jAgda_Agda_Primitive["lzero"])(x2)("*")(function (x9) {
                          return "*";
                        })(function (x9) {
                          return function (x10) {
                            return "*";
                          };
                        })(function (x9) {
                          return x4;
                        })(exports["inject₁"](x1)))(x5)(x8));
                      },
                      "zero": function (x7) {
                        return x5;
                      }
                    });
                  };
                };
              };
            };
          };
        },
        "zero": function () {
          return function (x1) {
            return function (x2) {
              return function (x3) {
                return function (x4) {
                  return function (x5) {
                    return x5({
                      "suc": function (x6, x7) {
                        return undefined;
                      },
                      "zero": function (x6) {
                        return x4;
                      }
                    });
                  };
                };
              };
            };
          };
        }
      });
    };
  exports["Ordering"]["less"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["less"](x0, x1);
        };
      };
    };
  exports["Fin"]["suc"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["suc"](x0, x1);
        };
      };
    };
  exports["_-_"] = function (x0) {
      return function (x1) {
        return x1({
          "suc": function (x2, x3) {
            return function (x4) {
              return x4({
                "suc": function (x5, x6) {
                  return exports["_-_"](x2)(x3)(x6);
                },
                "zero": function (x5) {
                  return x1;
                }
              });
            };
          },
          "zero": function (x2) {
            return function (x3) {
              return x3({
                "suc": function (x4, x5) {
                  return undefined;
                },
                "zero": function (x4) {
                  return x1;
                }
              });
            };
          }
        });
      };
    };
  exports["fromℕ"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return exports["Fin"]["suc"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x1))(exports["fromℕ"](x1));
        },
        "zero": function () {
          return exports["Fin"]["zero"](0);
        }
      });
    };
  exports["pred"] = function (x0) {
      return function (x1) {
        return x1({
          "suc": function (x2, x3) {
            return exports["inject₁"](x2)(x3);
          },
          "zero": function (x2) {
            return exports["Fin"]["zero"](x2);
          }
        });
      };
    };
  exports["inject!"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3, x4) {
                return function (x5) {
                  return x5({
                    "suc": function (x6, x7) {
                      return exports["Fin"]["suc"](x1)(exports["inject!"](x1)(x4)(x7));
                    },
                    "zero": function (x6) {
                      return exports["Fin"]["zero"](x1);
                    }
                  });
                };
              },
              "zero": function (x3) {
                return function (x4) {
                  return undefined;
                };
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return x1({
              "suc": function (x2, x3) {
                return function (x4) {
                  return undefined;
                };
              },
              "zero": function (x2) {
                return function (x3) {
                  return undefined;
                };
              }
            });
          };
        }
      });
    };
  exports["fromℕ≤″"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return function (x3) {
              return x3({
                "less-than-or-equal": function (x4, x5) {
                  return x5({
                    "refl": function () {
                      return exports["Fin"]["suc"](jAgda_Agda_Builtin_Nat["_+_"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x1))(x4))(exports["fromℕ≤″"](x1)(jAgda_Agda_Builtin_Nat["_+_"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x1))(x4))(jAgda_Data_Nat_Base["_≤″_"]["less-than-or-equal"](x4)(jAgda_Agda_Builtin_Equality["_≡_"]["refl"])));
                    }
                  });
                }
              });
            };
          };
        },
        "zero": function () {
          return function (x1) {
            return function (x2) {
              return x2({
                "less-than-or-equal": function (x3, x4) {
                  return x4({
                    "refl": function () {
                      return exports["Fin"]["zero"](x3);
                    }
                  });
                }
              });
            };
          };
        }
      });
    };
  exports["compare"] = function (x0) {
      return function (x1) {
        return x1({
          "suc": function (x2, x3) {
            return function (x4) {
              return x4({
                "suc": function (x5, x6) {
                  return exports["with-344"](x2)(x3)(x6)(exports["compare"](x2)(x3)(x6));
                },
                "zero": function (x5) {
                  return exports["Ordering"]["greater"](exports["Fin"]["suc"](x2)(x3))(exports["Fin"]["zero"](exports["toℕ"](x2)(x3)));
                }
              });
            };
          },
          "zero": function (x2) {
            return function (x3) {
              return x3({
                "suc": function (x4, x5) {
                  return exports["Ordering"]["less"](exports["Fin"]["suc"](x2)(x5))(exports["Fin"]["zero"](exports["toℕ"](x2)(x5)));
                },
                "zero": function (x4) {
                  return exports["Ordering"]["equal"](exports["Fin"]["zero"](x2));
                }
              });
            };
          }
        });
      };
    };
  exports["inject₁"] = function (x0) {
      return function (x1) {
        return x1({
          "suc": function (x2, x3) {
            return exports["Fin"]["suc"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x2))(exports["inject₁"](x2)(x3));
          },
          "zero": function (x2) {
            return exports["Fin"]["zero"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x2));
          }
        });
      };
    };
  exports["raise"] = function (x0) {
      return function (x1) {
        return x1({
          "suc": function (x2) {
            return function (x3) {
              return exports["Fin"]["suc"](jAgda_Agda_Builtin_Nat["_+_"](x2)(x0))(exports["raise"](x0)(x2)(x3));
            };
          },
          "zero": function () {
            return function (x2) {
              return x2;
            };
          }
        });
      };
    };
  exports["Ordering"]["equal"] = function (x0) {
      return function (x1) {
        return x1["equal"](x0);
      };
    };
  exports["_≺_"]["_≻toℕ_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["_≻toℕ_"](x0, x1);
        };
      };
    };
  exports["reduce≥"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return function (x3) {
              return x3({
                "suc": function (x4, x5) {
                  return function (x6) {
                    return x6({
                      "s≤s": function (x7, x8, x9) {
                        return exports["reduce≥"](x1)(x2)(x5)(x9);
                      },
                      "z≤n": function () {
                        return undefined;
                      }
                    });
                  };
                },
                "zero": function (x4) {
                  return function (x5) {
                    return undefined;
                  };
                }
              });
            };
          };
        },
        "zero": function () {
          return function (x1) {
            return function (x2) {
              return function (x3) {
                return x2;
              };
            };
          };
        }
      });
    };
  exports["_+_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "suc": function (x3, x4) {
              return function (x5) {
                return exports["Fin"]["suc"](jAgda_Agda_Builtin_Nat["_+_"](exports["toℕ"](x3)(x4))(x1))(exports["_+_"](x3)(x1)(x4)(x5));
              };
            },
            "zero": function (x3) {
              return function (x4) {
                return x4;
              };
            }
          });
        };
      };
    };
  exports["fold"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return function (x3) {
            return function (x4) {
              return x4({
                "suc": function (x5, x6) {
                  return x2(x5)(exports["fold"](x0)(x5)(x2)(x3)(x6));
                },
                "zero": function (x5) {
                  return x3(x5);
                }
              });
            };
          };
        };
      };
    };
  exports["toℕ"] = function (x0) {
      return function (x1) {
        return x1({
          "suc": function (x2, x3) {
            return jAgda_Agda_Builtin_Nat["Nat"]["suc"](exports["toℕ"](x2)(x3));
          },
          "zero": function (x2) {
            return 0;
          }
        });
      };
    };
  exports["inject"] = function (x0) {
      return function (x1) {
        return x1({
          "suc": function (x2, x3) {
            return function (x4) {
              return x4({
                "suc": function (x5, x6) {
                  return exports["Fin"]["suc"](x2)(exports["inject"](x2)(x3)(x6));
                },
                "zero": function (x5) {
                  return exports["Fin"]["zero"](x2);
                }
              });
            };
          },
          "zero": function (x2) {
            return function (x3) {
              return undefined;
            };
          }
        });
      };
    };
  exports["_≤_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["strengthen"] = function (x0) {
      return function (x1) {
        return x1({
          "suc": function (x2, x3) {
            return exports["Fin"]["suc"](exports["toℕ"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x2))(exports["Fin"]["suc"](x2)(x3)))(exports["strengthen"](x2)(x3));
          },
          "zero": function (x2) {
            return exports["Fin"]["zero"](0);
          }
        });
      };
    };
  exports["_ℕ-ℕ_"] = function (x0) {
      return x0({
        "suc": function (x1) {
          return function (x2) {
            return x2({
              "suc": function (x3, x4) {
                return exports["_ℕ-ℕ_"](x1)(x4);
              },
              "zero": function (x3) {
                return x0;
              }
            });
          };
        },
        "zero": function () {
          return function (x1) {
            return x1({
              "suc": function (x2, x3) {
                return undefined;
              },
              "zero": function (x2) {
                return x0;
              }
            });
          };
        }
      });
    };
  exports["inject+"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "suc": function (x3, x4) {
              return exports["Fin"]["suc"](jAgda_Agda_Builtin_Nat["_+_"](x3)(x1))(exports["inject+"](x3)(x1)(x4));
            },
            "zero": function (x3) {
              return exports["Fin"]["zero"](jAgda_Agda_Builtin_Nat["_+_"](x3)(x1));
            }
          });
        };
      };
    };
  exports["fromℕ≤"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "s≤s": function (x3, x4, x5) {
              return x5({
                "s≤s": function (x6, x7, x8) {
                  return exports["Fin"]["suc"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x7))(exports["fromℕ≤"](x6)(jAgda_Agda_Builtin_Nat["Nat"]["suc"](x7))(jAgda_Data_Nat_Base["_≤_"]["s≤s"](x6)(x7)(x8)));
                },
                "z≤n": function (x6) {
                  return exports["Fin"]["zero"](x4);
                }
              });
            },
            "z≤n": function () {
              return undefined;
            }
          });
        };
      };
    };
  exports["Ordering"]["greater"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2["greater"](x0, x1);
        };
      };
    };
  exports["Fin"]["zero"] = function (x0) {
      return function (x1) {
        return x1["zero"](x0);
      };
    };
  exports["Fin′"] = function (x0) {
      return function (x1) {
        return "*";
      };
    };
  exports["lift"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "suc": function (x3) {
              return function (x4) {
                return function (x5) {
                  return x5({
                    "suc": function (x6, x7) {
                      return exports["Fin"]["suc"](jAgda_Agda_Builtin_Nat["_+_"](x3)(x1))(exports["lift"](x0)(x1)(x3)(x4)(x7));
                    },
                    "zero": function (x6) {
                      return exports["Fin"]["zero"](jAgda_Agda_Builtin_Nat["_+_"](x3)(x1));
                    }
                  });
                };
              };
            },
            "zero": function () {
              return function (x3) {
                return function (x4) {
                  return x3(x4);
                };
              };
            }
          });
        };
      };
    };
  exports["inject≤"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return x2({
            "suc": function (x3, x4) {
              return function (x5) {
                return x5({
                  "s≤s": function (x6, x7, x8) {
                    return exports["Fin"]["suc"](x7)(exports["inject≤"](x3)(x7)(x4)(x8));
                  },
                  "z≤n": function () {
                    return undefined;
                  }
                });
              };
            },
            "zero": function (x3) {
              return function (x4) {
                return x4({
                  "s≤s": function (x5, x6, x7) {
                    return exports["Fin"]["zero"](x6);
                  },
                  "z≤n": function () {
                    return undefined;
                  }
                });
              };
            }
          });
        };
      };
    };
  exports["_<_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return "*";
        };
      };
    };
  exports["#_"] = function (x0) {
      return function (x1) {
        return function (x2) {
          return exports["fromℕ≤"](x0)(x1)(jAgda_Relation_Nullary_Decidable["toWitness"](jAgda_Agda_Primitive["lzero"])("*")(jAgda_Data_Nat_Base["_≤?_"](jAgda_Agda_Builtin_Nat["Nat"]["suc"](x0))(x1))(x2));
        };
      };
    };
  });
