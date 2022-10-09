const menus = [
    {
      "type": "po",
      "mainDish": "1 Pieza de Pollo",
      "sideDishOne": "Papas",
      "sideDishTwo": "Arroz o Ensalada",
      "drink": "Gaseosa",
      "name": "Combo Uno",
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
      "type": "po",
      "mainDish": "2 Piezas de Pollo",
      "sideDishOne": "Papas",
      "sideDishTwo": "Arroz o Ensalada",
      "drink": "Gaseosa",
      "name": "Combo Dos",
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
      "type": "po",
      "mainDish": "3 Piezas de Pollo",
      "sideDishOne": "Papas",
      "sideDishTwo": "Arroz o Ensalada",
      "drink": "Gaseosa",
      "name": "Combo Tres",
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
      "type": "po",
      "mainDish": "4 Piezas de Pollo",
      "sideDishOne": "Papas",
      "sideDishTwo": "Arroz o Ensalada",
      "drink": "Gaseosa",
      "name": "Combo Cuatro",
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
      "type": "po",
      "mainDish": "8 Piezas de Pollo",
      "sideDishOne": "2 Papas",
      "sideDishTwo": 0,
      "drink": 0,
      "name": "Fast Chicken",
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
      "type": "po",
      "mainDish": "12 Piezas de Pollo",
      "sideDishOne": "3 Papas",
      "sideDishTwo": 0,
      "drink": 0,
      "name": "Super Fast Chicken",
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
      "type": "ot",
      "mainDish": "Crispy",
      "side-dish": "Papas o Ensalada",
      "drink": "Gaseosa",
      "name": "Combo Crispy",
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
      "type": "ot",
      "mainDish": "Nuggets",
      "side-dish": "Papas o Ensalada",
      "drink": "Gaseosa",
      "name": "Fast Nuggets",
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
      "type": "ot",
      "mainDish": "Popcorns",
      "side-dish": "Papas o Ensalada",
      "drink": "Gaseosa",
      "name": "Combo Popcorns",
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
      "type": "bg",
      "mainDish": "Hamburguesa de Pollo",
      "side-mix": 0,
      "side-dish": "Papas",
      "drink": "Gaseosa",
      "name": "Fast Burger",
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
      "type": "bg",
      "mainDish": "Hamburguesa de Pollo",
      "side-mix": "Bacon y Jamon",
      "side-dish": "Papas",
      "drink": "Gaseosa",
      "name": "Chicken Burger",
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
      "type": "bg",
      "mainDish": "Hamburguesa de Carne",
      "side-mix": "Bacon y Cheddar",
      "side-dish": "Papas",
      "drink": "Gaseosa",
      "name": "Simple Bacon",
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
      "type": "bg",
      "mainDish": "Hamburguesa de Carne",
      "side-mix": "Cheddar y Lechuga",
      "side-dish": "Papas",
      "drink": "Gaseosa",
      "name": "Simple Cheddar",
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
      "type": "bg",
      "mainDish": "Hamburguesa de Carne",
      "side-mix": "Bacon y Cheddar",
      "side-dish": "Papas",
      "drink": "Gaseosa",
      "name": "Doble Bacon",
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
      "type": "bg",
      "mainDish": "Hamburguesa de Carne",
      "side-mix": "Cheddar y Lechuga",
      "side-dish": "Papas",
      "drink": "Gaseosa",
      "name": "Doble Cheddar",
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
    }
  ]

  export const getData = new Promise(res=>{
    res(menus)
  })