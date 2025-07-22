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
              "bonus": [-2, null, null, null]
            },
            {
              "target": "resource",
              "bonus": [2, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "bush",
      "tags": ["resource"],
      "health": 2,
      "armor": [5, 9, 4, 0],
      "attacks": []
    },
    {
      "name": "fish",
      "tags": ["resource"],
      "health": 1,
      "armor": [4, 9, 4, 0],
      "attacks": []
    },
    {
      "name": "tree",
      "tags": ["resource"],
      "health": 2,
      "armor": [4, 9, 4, 0],
      "attacks": []
    },
    {
      "name": "mineral",
      "tags": ["resource"],
      "health": 4,
      "armor": [10, 10, 7, 0],
      "attacks": []
    },
    {
      "name": "priest",
      "tags": ["infantry", "priest"],
      "health": 2,
      "armor": [4, 4, 5, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 2,
          "bonuses": [
            {
              "bonus": [null, null, null, -7]
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
      "armor": [5, 4, 6, 0],
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
              "bonus": [null, 1, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "musketeer",
      "tags": ["infantry", "ranged"],
      "health": 3,
      "armor": [5, 5, 8, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [null, 4, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "scout",
      "tags": ["cavalry", "melee"],
      "health": 2,
      "armor": [3, 6, 8, 2],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [0, null, null, null]
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
      "armor": [4, 6, 8, 0],
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
          "hits": 1,
          "actionpoints": 2,
          "bonuses": [
            {
              "bonus": [null, null, 0, null]
            }
          ]
        },
        {
          "hits": 2,
          "actionpoints": 2,
          "bonuses": [
            {
              "target": "building",
              "bonus": [null, null, 0, null]
            },
            {
              "target": "wall",
              "bonus": [null, null, 0, null]
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
      "armor": [4, 7, 4, 0],
      "actions": 1,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 2,
          "bonuses": [
            {
              "bonus": [null, null, 0, null]
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
      "name": "cannon",
      "tags": ["siege", "ranged_siege", "gullible"],
      "health": 2,
      "armor": [5, 6, 6, 0],
      "actions": 1,
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
          "hits": 3,
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
              "bonus": [null, null, 2, null]
            },
            {
              "target": "building",
              "bonus": [null, null, 4, null]
            },
            {
              "target": "wall",
              "bonus": [null, null, 4, null]
            }
          ]
        }
      ]
    },
    {
      "name": "towncenter",
      "tags": ["building", "ranged"],
      "health": 4,
      "armor": [7, 9, 5, 3],
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
      "armor": [5, 7, 5, 0],
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
      "name": "bombard tower",
      "tags": ["building", "ranged_siege"],
      "health": 3,
      "armor": [6, 8, 5, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [null, null, 4, null]
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
      "name": "palisade wall",
      "tags": ["wall"],
      "health": 1,
      "armor": [6, 8, 4, 0],
      "attacks": []
    },
    {
      "name": "stone wall",
      "tags": ["wall"],
      "health": 1,
      "armor": [8, 10, 5, 0],
      "attacks": []
    },
    {
      "name": "outpost",
      "tags": [],
      "health": 1,
      "armor": [4, 6, 3, 0],
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
              "bonus": [null, null, 2, null]
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
      "type": "blacksmith",
      "target": {
        "tags": [["infantry"]]
      },
      "bonus": {
        "armor": [1, 1, 1, 0]
      }
    },
    {
      "name": "forging",
      "type": "blacksmith",
      "target": {
        "tags": [["melee"]]
      },
      "bonus": {
        "attack": [1, 1, 1, 0]
      }
    },
    {
      "name": "bodkin arrow",
      "type": "blacksmith",
      "target": {
        "tags": [["ranged"]]
      },
      "bonus": {
        "attack": [null, 1, null, null]
      }
    },
    {
      "name": "bracer",
      "type": "blacksmith",
      "target": {
        "tags": [["ranged"]]
      },
      "bonus": {
        "attack": [null, 1, null, null]
      }
    },
    {
      "name": "loom",
      "type": "market",
      "target": {
        "name": "villager"
      },
      "bonus": {
        "armor": [2, 2, 2, 0]
      }
    },
    {
      "name": "power of the people",
      "type": "market",
      "target": {
        "name": "villager"
      },
      "bonus": {
        "health": 1
      }
    },
    {
      "name": "siege engineers",
      "type": "university",
      "target": {
        "tags": [["siege"]]
      },
      "bonus": {
        "attack": [2, 2, 2, null]
      }
    },
    {
      "name": "pikeman",
      "type": "barracks",
      "target": {
        "name": "spearman"
      },
      "bonus": {
        "health": 1,
        "attack": [1, null, null, null],
        "armor": [1, 1, 1, 0]
      }
    },
    {
      "name": "halberdier",
      "type": "barracks",
      "target": {
        "name": "spearman"
      },
      "bonus": {
        "health": 1,
        "attack": [2, null, null, null],
        "armor": [2, 2, 2, 0]
      }
    },
    {
      "name": "longswordsman",
      "type": "barracks",
      "target": {
        "name": "swordsman"
      },
      "bonus": {
        "health": 1,
        "attack": [1, null, null, null],
        "armor": [1, 1, 1, 0]
      }
    },
    {
      "name": "two-handed swordsman",
      "type": "barracks",
      "target": {
        "name": "swordsman"
      },
      "bonus": {
        "health": 1,
        "attack": [3, null, null, null],
        "armor": [2, 2, 2, 0]
      }
    },
    {
      "name": "arbalester",
      "type": "archery range",
      "target": {
        "name": "archer"
      },
      "bonus": {
        "health": 1,
        "attack": [null, 3, null, null],
        "armor": [2, 2, 2, 0]
      }
    },
    {
      "name": "light cavalry",
      "type": "stable",
      "target": {
        "name": "scout"
      },
      "bonus": {
        "health": 1,
        "attack": [1, null, null, null],
        "armor": [1, 1, 1, 0]
      }
    },
    {
      "name": "hussar",
      "type": "stable",
      "target": {
        "name": "scout"
      },
      "bonus": {
        "health": 1,
        "attack": [3, null, null, null],
        "armor": [2, 2, 2, 0]
      }
    },
    {
      "name": "paladin",
      "type": "stable",
      "target": {
        "name": "knight"
      },
      "bonus": {
        "health": 1,
        "attack": [2, null, null, null],
        "armor": [2, 2, 2, 0]
      }
    },
    {
      "name": "cavalry marksman",
      "type": "stable",
      "target": {
        "name": "cavalry archer"
      },
      "bonus": {
        "health": 1,
        "attack": [null, 1, null, null],
        "armor": [1, 1, 1, 0]
      }
    },
    {
      "name": "explosion ship",
      "type": "dock",
      "target": {
        "name": "explosion raft"
      },
      "bonus": {
        "hits": 1,
        "armor": [2, 2, 2, 0]
      }
    },
    {
      "name": "bronze cannons",
      "type": "dock",
      "target": {
        "name": "cannon galleon"
      },
      "bonus": {
        "attack": [null, null, 2, null],
        "armor": [1, 1, 1, 0]
      }
    },
    {
      "name": "elite axe thrower",
      "target": {
        "name": "axe thrower"
      },
      "bonus": {
        "health": 1,
        "attack": [2, null, null, null],
        "armor": [1, 1, 1, 0]
      }
    },
    {
      "name": "coursers",
      "target": {
        "tags": [["cavalry"]]
      },
      "bonus": {
        "armor": [0, 2, 0, 0]
      }
    },
    {
      "name": "elite devout levy",
      "type": "swiss",
      "target": {
        "name": "devout levy"
      },
      "bonus": {
        "health": 1,
        "attack": [null, null, 3, null],
        "armor": [2, 2, 2, 0]
      }
    },
    {
      "name": "elite longbowman",
      "type": "england",
      "target": {
        "name": "longbowman"
      },
      "bonus": {
        "health": 1,
        "attack": [null, 2, 0, null],
        "armor": [1, 1, 1, 0]
      }
    }
  ]
}
