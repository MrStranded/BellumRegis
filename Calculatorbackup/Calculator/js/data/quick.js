let quickData = {
  "units": [
    {
      "name": "villager",
      "tags": ["infantry", "economic"],
      "health": 2,
      "armor": [3, 3, 5, 0],
      "attacks": [
        {
          "hits": 2,
          "bonuses": [
            {
              "bonus": [-2, null, null, null]
            },
            {
              "target": "siege",
              "bonus": [2, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "loomed villager",
      "tags": ["infantry", "economic"],
      "health": 2,
      "armor": [5, 5, 7, 0],
      "attacks": [
        {
          "hits": 2,
          "bonuses": [
            {
              "bonus": [-2, null, null, null]
            },
            {
              "target": "siege",
              "bonus": [2, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "priest",
      "tags": ["infantry", "priest"],
      "health": 2,
      "armor": [3, 3, 6, 0],
      "attacks": [
        {
          "hits": 1,
          "bonuses": [
            {
              "bonus": [null, null, null, -4]
            }
          ]
        }
      ]
    },
    {
      "name": "basel priest",
      "tags": ["infantry", "priest"],
      "health": 2,
      "armor": [5, 4, 6, 0],
      "attacks": [
        {
          "hits": 1,
          "bonuses": [
            {
              "bonus": [null, null, null, -4]
            }
          ]
        }
      ]
    },
    {
      "name": "spearman",
      "tags": ["infantry", "pike"],
      "health": 2,
      "armor": [5, 3, 6, 0],
      "attacks": [
        {
          "hits": 2,
          "bonuses": [
            {
              "bonus": [-2, null, null, null]
            },
            {
              "target": "cavalry",
              "bonus": [3, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "swordsman",
      "tags": ["infantry", "barracks"],
      "health": 2,
      "armor": [5, 5, 6, 0],
      "attacks": [
        {
          "hits": 2,
          "bonuses": [
            {
              "bonus": [2, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "javelin thrower",
      "tags": ["infantry", "ranged"],
      "health": 2,
      "armor": [3, 6, 6, 0],
      "attacks": [
        {
          "hits": 2,
          "bonuses": [
            {
              "bonus": [null, -2, null, null]
            },
            {
              "target": "ranged",
              "bonus": [null, 4, null, null]
            },
            {
              "target": "pike",
              "bonus": [null, 2, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "archer",
      "tags": ["infantry", "ranged"],
      "health": 2,
      "armor": [3, 5, 6, 0],
      "attacks": [
        {
          "hits": 2,
          "bonuses": [
            {
              "bonus": [null, -1, null, null]
            },
            {
              "target": "infantry",
              "bonus": [null, 1, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "scout",
      "tags": ["cavalry", "melee"],
      "health": 2,
      "armor": [3, 4, 7, 3],
      "attacks": [
        {
          "hits": 2,
          "bonuses": [
            {
              "bonus": [-1, null, null, null]
            },
            {
              "target": "priest",
              "bonus": [3, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "knight",
      "tags": ["cavalry", "melee"],
      "health": 3,
      "armor": [4, 5, 7, 0],
      "attacks": [
        {
          "hits": 2,
          "bonuses": [
            {
              "bonus": [2, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "battering ram",
      "tags": ["siege", "melee"],
      "health": 3,
      "armor": [3, 9, 4, 0],
      "attacks": [
        {
          "hits": 2,
          "bonuses": [
            {
              "bonus": [-4, null, null, null]
            },
            {
              "target": "building",
              "bonus": [4, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "catapult",
      "tags": ["siege", "ranged_siege", "gullible"],
      "health": 2,
      "armor": [3, 5, 4, 0],
      "attacks": [
        {
          "hits": 3,
          "bonuses": [
            {
              "bonus": [-1, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "trebuchet",
      "tags": ["siege", "ranged_siege"],
      "health": 2,
      "armor": [3, 7, 4, 0],
      "attacks": [
        {
          "hits": 1,
          "bonuses": [
            {
              "bonus": [-4, null, null, null]
            },
            {
              "target": "building",
              "bonus": [4, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "fishing ship",
      "tags": ["ship"],
      "health": 2,
      "armor": [3, 3, 6, 0],
      "attacks": []
    },
    {
      "name": "transport ship",
      "tags": ["ship"],
      "health": 3,
      "armor": [4, 6, 6, 0],
      "attacks": []
    },
    {
      "name": "galley",
      "tags": ["ship", "ranged_ship"],
      "health": 3,
      "armor": [4, 6, 6, 0],
      "attacks": [
        {
          "hits": 2,
          "bonuses": [
            {
              "bonus": [null, 1, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "boarding ship",
      "tags": ["ship", "melee"],
      "health": 3,
      "armor": [4, 7, 6, 0],
      "attacks": [
        {
          "hits": 2,
          "bonuses": [
            {
              "bonus": [2, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "explosion raft",
      "tags": ["ship", "melee"],
      "health": 2,
      "armor": [5, 3, 6, 0],
      "attacks": [
        {
          "hits": 5,
          "bonuses": [
            {
              "bonus": [1, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "cannon galleon",
      "tags": ["ship", "ranged_ship"],
      "health": 3,
      "armor": [4, 6, 6, 0],
      "attacks": [
        {
          "hits": 1,
          "bonuses": [
            {
              "bonus": [2, null, null, null]
            },
            {
              "target": "building",
              "bonus": [4, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "towncenter",
      "tags": ["building", "ranged"],
      "health": 3,
      "armor": [7, 9, 5, 0],
      "attacks": [
        {
          "hits": 1,
          "bonuses": [
            {
              "bonus": [0, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "house",
      "tags": ["building"],
      "health": 2,
      "armor": [4, 5, 4, 0],
      "attacks": []
    },
    {
      "name": "generic building",
      "tags": ["building"],
      "health": 3,
      "armor": [6, 8, 4, 0],
      "attacks": []
    },
    {
      "name": "tower",
      "tags": ["building", "ranged"],
      "health": 3,
      "armor": [5, 7, 4, 0],
      "attacks": [
        {
          "hits": 1,
          "bonuses": [
            {
              "bonus": [null, 2, null, null]
            }
          ]
        },
        {
          "hits": 1,
          "bonuses": [
            {
              "bonus": [null, 0, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "castle",
      "tags": ["building", "ranged"],
      "health": 6,
      "armor": [6, 8, 4, 0],
      "attacks": [
        {
          "hits": 3,
          "bonuses": [
            {
              "bonus": [null, 2, null, null]
            }
          ]
        }
      ]
    },
  ],
  "techs": []
};
