// const menus = [
//     {
//       "type": "po",
//       "mainDish": "1 Pieza de Pollo",
//       "sideDishOne": "Papas",
//       "sideDishTwo": "Arroz o Ensalada",
//       "drink": "Gaseosa",
//       "name": "Combo Uno",
//       "stock": {
//         "md": {
//           "id": "po",
//           "count": 1
//         },
//         "sd1": {
//           "id": "pa",
//           "count": 1
//         },
//         "sd2": {
//           "id": "aren",
//           "count": 1
//         },
//         "dr": {
//           "id": "cc",
//           "count": 1
//         }
//       }
//     },
//     {
//       "type": "po",
//       "mainDish": "2 Piezas de Pollo",
//       "sideDishOne": "Papas",
//       "sideDishTwo": "Arroz o Ensalada",
//       "drink": "Gaseosa",
//       "name": "Combo Dos",
//       "stock": {
//         "md": {
//           "id": "po",
//           "count": 2
//         },
//         "sd1": {
//           "id": "pa",
//           "count": 1
//         },
//         "sd2": {
//           "id": "aren",
//           "count": 1
//         },
//         "dr": {
//           "id": "cc",
//           "count": 1
//         }
//       }
//     },
//     {
//       "type": "po",
//       "mainDish": "3 Piezas de Pollo",
//       "sideDishOne": "Papas",
//       "sideDishTwo": "Arroz o Ensalada",
//       "drink": "Gaseosa",
//       "name": "Combo Tres",
//       "stock": {
//         "md": {
//           "id": "po",
//           "count": 3
//         },
//         "sd1": {
//           "id": "pa",
//           "count": 1
//         },
//         "sd2": {
//           "id": "aren",
//           "count": 1
//         },
//         "dr": {
//           "id": "cc",
//           "count": 1
//         }
//       }
//     },
//     {
//       "type": "po",
//       "mainDish": "4 Piezas de Pollo",
//       "sideDishOne": "Papas",
//       "sideDishTwo": "Arroz o Ensalada",
//       "drink": "Gaseosa",
//       "name": "Combo Cuatro",
//       "stock": {
//         "md": {
//           "id": "po",
//           "count": 4
//         },
//         "sd1": {
//           "id": "pa",
//           "count": 1
//         },
//         "sd2": {
//           "id": "aren",
//           "count": 1
//         },
//         "dr": {
//           "id": "cc",
//           "count": 1
//         }
//       }
//     },
//     {
//       "type": "po",
//       "mainDish": "8 Piezas de Pollo",
//       "sideDishOne": "2 Papas",
//       "sideDishTwo": 0,
//       "drink": 0,
//       "name": "Fast Chicken",
//       "stock": {
//         "md": {
//           "id": "po",
//           "count": 8
//         },
//         "sd1": {
//           "id": "pa",
//           "count": 2
//         },
//         "sd2": 0,
//         "dr": 0
//       }
//     },
//     {
//       "type": "po",
//       "mainDish": "12 Piezas de Pollo",
//       "sideDishOne": "3 Papas",
//       "sideDishTwo": 0,
//       "drink": 0,
//       "name": "Super Fast Chicken",
//       "stock": {
//         "md": {
//           "id": "po",
//           "count": 12
//         },
//         "sd1": {
//           "id": "pa",
//           "count": 3
//         },
//         "sd2": 0,
//         "dr": 0
//       }
//     },
//     {
//       "type": "ot",
//       "mainDish": "Crispy",
//       "side-dish": "Papas o Ensalada",
//       "drink": "Gaseosa",
//       "name": "Combo Crispy",
//       "stock": {
//         "md": {
//           "id": "po",
//           "count": 1
//         },
//         "sd1": {
//           "id": "paen",
//           "count": 1
//         },
//         "dr": {
//           "id": "cc",
//           "count": 1
//         }
//       }
//     },
//     {
//       "type": "ot",
//       "mainDish": "Nuggets",
//       "side-dish": "Papas o Ensalada",
//       "drink": "Gaseosa",
//       "name": "Fast Nuggets",
//       "stock": {
//         "md": {
//           "id": "nu",
//           "count": 1
//         },
//         "sd1": {
//           "id": "paen",
//           "count": 1
//         },
//         "dr": {
//           "id": "cc",
//           "count": 1
//         }
//       }
//     },
//     {
//       "type": "ot",
//       "mainDish": "Popcorns",
//       "side-dish": "Papas o Ensalada",
//       "drink": "Gaseosa",
//       "name": "Combo Popcorns",
//       "stock": {
//         "md": {
//           "id": "pc",
//           "count": 1
//         },
//         "sd1": {
//           "id": "paen",
//           "count": 1
//         },
//         "sd2": 0,
//         "dr": {
//           "id": "cc",
//           "count": 1
//         }
//       }
//     },
//     {
//       "type": "bg",
//       "mainDish": "Hamburguesa de Pollo",
//       "side-mix": 0,
//       "side-dish": "Papas",
//       "drink": "Gaseosa",
//       "name": "Fast Burger",
//       "stock": {
//         "md": {
//           "id": "bg",
//           "count": 1
//         },
//         "sd1": {
//           "id": "pa",
//           "count": 1
//         },
//         "mix": [
//           {
//             "id": "le",
//             "count": 1
//           },
//           {
//             "id": "to",
//             "count": 1
//           }
//         ],
//         "dr": {
//           "id": "cc",
//           "count": 1
//         }
//       }
//     },
//     {
//       "type": "bg",
//       "mainDish": "Hamburguesa de Pollo",
//       "side-mix": "Bacon y Jamon",
//       "side-dish": "Papas",
//       "drink": "Gaseosa",
//       "name": "Chicken Burger",
//       "stock": {
//         "md": {
//           "id": "bg",
//           "count": 1
//         },
//         "sd1": {
//           "id": "pa",
//           "count": 1
//         },
//         "mix": [
//           {
//             "id": "le",
//             "count": 1
//           },
//           {
//             "id": "to",
//             "count": 1
//           },
//           {
//             "id": "bc",
//             "count": 1
//           },
//           {
//             "id": "ja",
//             "count": 1
//           }
//         ],
//         "dr": {
//           "id": "cc",
//           "count": 1
//         }
//       }
//     },
//     {
//       "type": "bg",
//       "mainDish": "Hamburguesa de Carne",
//       "side-mix": "Bacon y Cheddar",
//       "side-dish": "Papas",
//       "drink": "Gaseosa",
//       "name": "Simple Bacon",
//       "stock": {
//         "md": {
//           "id": "bg",
//           "count": 1
//         },
//         "sd1": {
//           "id": "pa",
//           "count": 1
//         },
//         "mix": [
//           {
//             "id": "bc",
//             "count": 1
//           },
//           {
//             "id": "ch",
//             "count": 1
//           }
//         ],
//         "dr": {
//           "id": "cc",
//           "count": 1
//         }
//       }
//     },
//     {
//       "type": "bg",
//       "mainDish": "Hamburguesa de Carne",
//       "side-mix": "Cheddar y Lechuga",
//       "side-dish": "Papas",
//       "drink": "Gaseosa",
//       "name": "Simple Cheddar",
//       "stock": {
//         "md": {
//           "id": "bg",
//           "count": 1
//         },
//         "sd1": {
//           "id": "pa",
//           "count": 1
//         },
//         "mix": [
//           {
//             "id": "le",
//             "count": 1
//           },
//           {
//             "id": "ch",
//             "count": 1
//           }
//         ],
//         "dr": {
//           "id": "cc",
//           "count": 1
//         }
//       }
//     },
//     {
//       "type": "bg",
//       "mainDish": "Hamburguesa de Carne",
//       "side-mix": "Bacon y Cheddar",
//       "side-dish": "Papas",
//       "drink": "Gaseosa",
//       "name": "Doble Bacon",
//       "stock": {
//         "md": {
//           "id": "bg",
//           "count": 2
//         },
//         "sd1": {
//           "id": "pa",
//           "count": 1
//         },
//         "mix": [
//           {
//             "id": "bc",
//             "count": 1
//           },
//           {
//             "id": "ch",
//             "count": 1
//           }
//         ],
//         "dr": {
//           "id": "cc",
//           "count": 1
//         }
//       }
//     },
//     {
//       "type": "bg",
//       "mainDish": "Hamburguesa de Carne",
//       "side-mix": "Cheddar y Lechuga",
//       "side-dish": "Papas",
//       "drink": "Gaseosa",
//       "name": "Doble Cheddar",
//       "stock": {
//         "md": {
//           "id": "bg",
//           "count": 2
//         },
//         "sd1": {
//           "id": "pa",
//           "count": 1
//         },
//         "mix": [
//           {
//             "id": "bc",
//             "count": 1
//           },
//           {
//             "id": "ch",
//             "count": 1
//           }
//         ],
//         "dr": {
//           "id": "cc",
//           "count": 1
//         }
//       }
//     }
//   ]

const combos = [
  {
    "id": 1,
    "type": "po",
    "description": "1 Pieza de Pollo, Papas, Arroz o Ensalada y Gaseosa",
    "name": "Combo Uno",
    "price": 1000,
    "stock": {
      "md": {
        "id": "po",
        "count": 1
      },
      "sd1": {
        "id": "pa",
        "count": 1
      },
      "sd2": {
        "id": "aren",
        "count": 1
      },
      "dr": {
        "id": "cc",
        "count": 1
      }
    }
  },
  {
    "id": 2,
    "type": "po",
    "description": "2 Pieza de Pollo, Papas, Arroz o Ensalada y Gaseosa",
    "name": "Combo Dos",
    "price": 1000,
    "stock": {
      "md": {
        "id": "po",
        "count": 2
      },
      "sd1": {
        "id": "pa",
        "count": 1
      },
      "sd2": {
        "id": "aren",
        "count": 1
      },
      "dr": {
        "id": "cc",
        "count": 1
      }
    }
  },
  {
    "id": 3,
    "type": "po",
    "description": "3 Pieza de Pollo, Papas, Arroz o Ensalada y Gaseosa",
    "name": "Combo Tres",
    "price": 1000,
    "stock": {
      "md": {
        "id": "po",
        "count": 3
      },
      "sd1": {
        "id": "pa",
        "count": 1
      },
      "sd2": {
        "id": "aren",
        "count": 1
      },
      "dr": {
        "id": "cc",
        "count": 1
      }
    }
  },
  {
    "id": 4,
    "type": "po",
    "description": "4 Pieza de Pollo, Papas, Arroz o Ensalada y Gaseosa",
    "name": "Combo Cuatro",
    "price": 1000,
    "stock": {
      "md": {
        "id": "po",
        "count": 4
      },
      "sd1": {
        "id": "pa",
        "count": 1
      },
      "sd2": {
        "id": "aren",
        "count": 1
      },
      "dr": {
        "id": "cc",
        "count": 1
      }
    }
  },
  {
    "id": 5,
    "type": "po",
    "description": "8 Piezas de Pollo y 2 Papas",
    "name": "Fast Chicken",
    "price": 1000,
    "stock": {
      "md": {
        "id": "po",
        "count": 8
      },
      "sd1": {
        "id": "pa",
        "count": 2
      },
      "sd2": 0,
      "dr": 0
    }
  },
  {
    "id": 6,
    "type": "po",
    "description": "12 Piezas de Pollo y 3 Papas",
    "name": "Super Fast Chicken",
    "price": 1000,
    "stock": {
      "md": {
        "id": "po",
        "count": 12
      },
      "sd1": {
        "id": "pa",
        "count": 3
      },
      "sd2": 0,
      "dr": 0
    }
  },
  {
    "id": 7,
    "type": "ot",
    "description": "Crispy, Papas o Ensalada y Gaseosa",
    "name": "Combo Crispy",
    "price": 1000,
    "stock": {
      "md": {
        "id": "po",
        "count": 1
      },
      "sd1": {
        "id": "paen",
        "count": 1
      },
      "dr": {
        "id": "cc",
        "count": 1
      }
    }
  },
  {
    "id": 8,
    "type": "ot",
    "description": "Nuggets, Papas o Ensalada y gaseosa",
    "name": "Fast Nuggets",
    "price": 1000,
    "stock": {
      "md": {
        "id": "nu",
        "count": 1
      },
      "sd1": {
        "id": "paen",
        "count": 1
      },
      "dr": {
        "id": "cc",
        "count": 1
      }
    }
  },
  {
    "id": 9,
    "type": "ot",
    "description": "Popcorns, Papas o Ensalada y Gaseosa",
    "name": "Combo Popcorns",
    "price": 1000,
    "stock": {
      "md": {
        "id": "pc",
        "count": 1
      },
      "sd1": {
        "id": "paen",
        "count": 1
      },
      "sd2": 0,
      "dr": {
        "id": "cc",
        "count": 1
      }
    }
  },
  {
    "id": 10,
    "type": "bg",
    "description": "Hamburguesa de Pollo, Papas y Gaseosa",
    "name": "Fast Burger",
    "price": 1000,
    "stock": {
      "md": {
        "id": "bg",
        "count": 1
      },
      "sd1": {
        "id": "pa",
        "count": 1
      },
      "mix": [
        {
          "id": "le",
          "count": 1
        },
        {
          "id": "to",
          "count": 1
        }
      ],
      "dr": {
        "id": "cc",
        "count": 1
      }
    }
  },
  {
    "id": 11,
    "type": "bg",
    "description": "Hamburguesa de Pollo, Bacon y Jamon, Papas y Gaseosa",
    "name": "Chicken Burger",
    "price": 1000,
    "stock": {
      "md": {
        "id": "bg",
        "count": 1
      },
      "sd1": {
        "id": "pa",
        "count": 1
      },
      "mix": [
        {
          "id": "le",
          "count": 1
        },
        {
          "id": "to",
          "count": 1
        },
        {
          "id": "bc",
          "count": 1
        },
        {
          "id": "ja",
          "count": 1
        }
      ],
      "dr": {
        "id": "cc",
        "count": 1
      }
    }
  },
  {
    "id": 12,
    "type": "bg",
    "description": "Hamburguesa de Carne, Bacon y Cheddar, Papas y Gaseosa",
    "name": "Simple Bacon",
    "price": 1000,
    "stock": {
      "md": {
        "id": "bg",
        "count": 1
      },
      "sd1": {
        "id": "pa",
        "count": 1
      },
      "mix": [
        {
          "id": "bc",
          "count": 1
        },
        {
          "id": "ch",
          "count": 1
        }
      ],
      "dr": {
        "id": "cc",
        "count": 1
      }
    }
  },
  {
    "id": 13,
    "type": "bg",
    "description": "Hamburguesa de Carne, Cheddar y Lechuga, Papas y Gaseosa",
    "name": "Simple Cheddar",
    "price": 1000,
    "stock": {
      "md": {
        "id": "bg",
        "count": 1
      },
      "sd1": {
        "id": "pa",
        "count": 1
      },
      "mix": [
        {
          "id": "le",
          "count": 1
        },
        {
          "id": "ch",
          "count": 1
        }
      ],
      "dr": {
        "id": "cc",
        "count": 1
      }
    }
  },
  {
    "id": 14,
    "type": "bg",
    "description": "Hamburguesa de Carne, Bacon y Cheddar, Papas y Gaseosa",
    "name": "Doble Bacon",
    "price": 1000,
    "stock": {
      "md": {
        "id": "bg",
        "count": 2
      },
      "sd1": {
        "id": "pa",
        "count": 1
      },
      "mix": [
        {
          "id": "bc",
          "count": 1
        },
        {
          "id": "ch",
          "count": 1
        }
      ],
      "dr": {
        "id": "cc",
        "count": 1
      }
    }
  },
  {
    "id": 15,
    "type": "bg",
    "description": "Hamburguesa de Carne, Cheddar y Lechuga, Papas y Gaseosa",
    "name": "Doble Cheddar",
    "price": 1000,
    "stock": {
      "md": {
        "id": "bg",
        "count": 2
      },
      "sd1": {
        "id": "pa",
        "count": 1
      },
      "mix": [
        {
          "id": "bc",
          "count": 1
        },
        {
          "id": "ch",
          "count": 1
        }
      ],
      "dr": {
        "id": "cc",
        "count": 1
      }
    }
  },
  {
    "id": 16,
    "type": "ex",
    "name": "Arroz",
    "description": "Porcion de Arroz extra",
    "price": 1000,
    "stock": [
      { "id": "ar" }
    ]
  },
  {
    "id": 17,
    "type": "ex",
    "name": "Papas",
    "description": "Porcion de Papas extra",
    "price": 1000,
    "stock": [
      { "id": "pa" }
    ]
  },
  {
    "id": 18,
    "type": "ex",
    "name": "Ensalada",
    "description": "Porcion de ensalada extra",
    "price": 1000,
    "stock": [
      { "id": "en" }
    ]
  },
  {
    "id": 19,
    "type": "ex",
    "name": "Gaseosa",
    "description": "",
    "price": 1000,
    "stock": [
      { "id": "cc" }
    ]
  },
  {
    "id": 20,
    "type": "ex",
    "name": "Pieza de Pollo",
    "description": "Pieza de pollo extra",
    "price": 1000,
    "stock": [
      { "id": "po" }
    ]
  }
]

export const getData = new Promise(res=>{
  res(combos)
})