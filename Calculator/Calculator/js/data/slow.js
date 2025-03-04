let slowData = {
  "units": [
    {
      "name": "villager",
      "tags": ["infantry", "economic"],
      "health": 2,
      "armor": [3, 3, 5, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [0, null, null, null]
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
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [0, null, null, null]
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
      "armor": [3, 3, 5, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 2,
          "bonuses": [
            {
              "bonus": [null, null, null, -5]
            }
          ]
        }
      ]
    },
    {
      "name": "basel priest",
      "tags": ["infantry", "priest"],
      "health": 2,
      "armor": [5, 4, 5, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 2,
          "bonuses": [
            {
              "bonus": [null, null, null, -5]
            }
          ]
        }
      ]
    },
    {
      "name": "spearman",
      "tags": ["infantry", "melee", "pike"],
      "health": 2,
      "armor": [5, 3, 6, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [-1, null, null, null]
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
      "tags": ["infantry", "melee"],
      "health": 2,
      "armor": [5, 5, 6, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
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
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [null, -2, null, null]
            },
            {
              "target": ["infantry", "ranged"],
              "bonus": [null, 4, null, null]
            },
            {
              "target": ["cavalry", "ranged"],
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
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [null, 0, null, null]
            },
            {
              "target": "infantry",
              "bonus": [null, 2, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "cavalry archer",
      "tags": ["cavalry", "ranged"],
      "health": 3,
      "armor": [3, 4, 7, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [null, 0, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "genoese archer",
      "tags": ["infantry", "ranged"],
      "health": 2,
      "armor": [3, 5, 6, 0],
      "attacks": [
        {
          "hits": 2,
          "actionpoints": 1,
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
      "armor": [3, 4, 8, 3],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
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
      "armor": [4, 5, 8, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [2, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "french scout",
      "tags": ["cavalry", "melee"],
      "health": 2,
      "armor": [4, 5, 8, 3],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
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
      "name": "french knight",
      "tags": ["cavalry", "melee"],
      "health": 3,
      "armor": [5, 6, 8, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
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
      "tags": ["siege"],
      "health": 3,
      "armor": [3, 9, 4, 0],
      "attacks": [
        {
          "hits": 2,
          "actionpoints": 2,
          "bonuses": [
            {
              "bonus": [null, null, 0, null]
            },
            {
              "target": "building",
              "bonus": [null, null, 3, null]
            },
            {
              "target": "wall",
              "bonus": [null, null, 3, null]
            }
          ]
        }
      ]
    },
    {
      "name": "scorpion",
      "tags": ["siege", "ranged_siege", "gullible"],
      "health": 2,
      "armor": [3, 5, 4, 0],
      "attacks": [
        {
          "hits": 2,
          "actionpoints": 2,
          "bonuses": [
            {
              "bonus": [null, 0, null, null]
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
          "hits": 2,
          "actionpoints": 2,
          "bonuses": [
            {
              "bonus": [null, null, 0, null]
            }
          ]
        }
      ]
    },
    {
      "name": "trebuchet",
      "tags": ["siege", "ranged_siege"],
      "health": 2,
      "armor": [3, 6, 4, 0],
      "actions": 1,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 2,
          "bonuses": [
            {
              "bonus": [null, null, -1, null]
            }
          ]
        },
        {
          "hits": 2,
          "actionpoints": 2,
          "bonuses": [
            {
              "target": "building",
              "bonus": [null, null, 2, null]
            },
            {
              "target": "wall",
              "bonus": [null, null, 2, null]
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
      "armor": [4, 6, 5, 0],
      "attacks": []
    },
    {
      "name": "galley",
      "tags": ["ship", "ranged_ship"],
      "health": 3,
      "armor": [4, 6, 5, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [null, 0, null, null]
            },
            {
              "target": "ship",
              "bonus": [null, 2, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "boarding ship",
      "tags": ["ship", "melee"],
      "health": 3,
      "armor": [4, 7, 5, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
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
      "armor": [5, 3, 5, 0],
      "attacks": [
        {
          "hits": 5,
          "actionpoints": 3,
          "bonuses": [
            {
              "bonus": [0, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "cannon galleon",
      "tags": ["ship", "ranged_ship"],
      "health": 3,
      "armor": [4, 6, 5, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 2,
          "bonuses": [
            {
              "bonus": [null, null, 0, null]
            },
            {
              "target": "building",
              "bonus": [null, null, 2, null]
            },
            {
              "target": "wall",
              "bonus": [null, null, 2, null]
            }
          ]
        }
      ]
    },
    {
      "name": "towncenter",
      "tags": ["building", "ranged"],
      "health": 3,
      "armor": [7, 9, 5, 10],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [null, 1, null, null]
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
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [null, 0, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "garrisoned tower",
      "tags": ["building", "ranged"],
      "health": 3,
      "armor": [5, 7, 4, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [null, 2, null, null]
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
          "hits": 2,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [null, 1, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "stone wall",
      "tags": ["wall"],
      "health": 1,
      "armor": [7, 9, 4, 0],
      "attacks": []
    },
    {
      "name": "fortified stone wall",
      "tags": ["wall"],
      "health": 1,
      "armor": [10, 11, 7, 0],
      "attacks": []
    },
    {
      "name": "encampment",
      "tags": ["unique", "building"],
      "health": 2,
      "armor": [4, 5, 4, 0],
      "attacks": []
    },
    {
      "name": "longbowman",
      "tags": ["unique", "infantry", "ranged"],
      "health": 2,
      "armor": [4, 5, 6, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [null, 1, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "crossbowman",
      "tags": ["unique", "infantry", "ranged"],
      "health": 2,
      "armor": [6, 4, 6, 0],
      "attacks": [
        {
          "hits": 2,
          "actionpoints": 2,
          "bonuses": [
            {
              "bonus": [null, -1, null, null]
            },
            {
              "target": "cavalry",
              "bonus": [null, 2, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "kings guard",
      "tags": ["unique", "cavalry", "melee"],
      "health": 4,
      "armor": [5, 3, 8, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [1, null, null, null]
            },
            {
              "target": "siege",
              "bonus": [3, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "devout levy",
      "tags": ["unique", "infantry", "melee"],
      "health": 2,
      "armor": [3, 6, 6, 3],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [null, null, 3, null]
            }
          ]
        }
      ]
    },
    {
      "name": "axe thrower",
      "tags": ["unique", "infantry", "melee"],
      "health": 2,
      "armor": [3, 5, 6, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [2, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "reisläufer",
      "tags": ["unique", "infantry", "melee", "pike"],
      "health": 2,
      "armor": [4, 5, 6, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [1, null, null, null]
            },
            {
              "target": "infantry",
              "bonus": [3, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "mercenary",
      "tags": ["unique", "cavalry", "melee"],
      "health": 3,
      "armor": [4, 4, 8, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 0,
          "bonuses": [
            {
              "bonus": [2, null, null, null]
            }
          ]
        },
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [1, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "guerrilla warrior",
      "tags": ["unique", "infantry", "melee"],
      "health": 2,
      "armor": [3, 3, 5, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [null, 1, null, null]
            },
            {
              "target": "cavalry",
              "bonus": [null, 3, null, null]
            }
          ]
        }
      ]
    },
  ],
  "techs": [
    {
      "name": "hill bonus",
      "bonus": {
        "attack": [1, 1, 1, 0],
        "armor": [1, 1, 1, 0]
      }
    },
    {
      "name": "gambesons",
      "target": {
        "tags": [["infantry"]]
      },
      "bonus": {
        "armor": [1, 1, 1, 0]
      }
    },
    {
      "name": "forging",
      "target": {
        "tags": [["melee"]]
      },
      "bonus": {
        "attack": [1, 1, 1, 0]
      }
    },
    {
      "name": "power of the people",
      "target": {
        "name": "villager"
      },
      "bonus": {
        "health": 1
      }
    }
  ]
}
