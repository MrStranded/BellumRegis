let slowData = {
  "units": [
    {
      "name": "villager",
      "tags": ["infantry", "economic"],
      "health": 2,
      "armor": [3, 3, 5, 0],
      "steps": 2,
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
      "health": 1,
      "armor": [5, 9, 5, 0],
      "attacks": []
    },
    {
      "name": "fish",
      "tags": ["resource"],
      "health": 1,
      "armor": [5, 9, 5, 0],
      "attacks": []
    },
    {
      "name": "tree",
      "tags": ["resource"],
      "health": 1,
      "armor": [5, 9, 5, 0],
      "attacks": []
    },
    {
      "name": "mineral",
      "tags": ["resource"],
      "health": 3,
      "armor": [9, 10, 8, 0],
      "attacks": []
    },
    {
      "name": "priest",
      "tags": ["infantry", "priest"],
      "health": 2,
      "armor": [4, 4, 6, 0],
      "steps": 2,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "range": 3,
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
      "tags": ["infantry", "slash", "pike"],
      "health": 2,
      "armor": [5, 4, 6, 0],
      "steps": 2,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [-3, null, null, null]
            },
            {
              "target": "cavalry",
              "bonus": [2, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "swordsman",
      "tags": ["infantry", "slash"],
      "health": 2,
      "armor": [4, 5, 6, 0],
      "steps": 2,
      "attacks": [
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
      "name": "javelin thrower",
      "tags": ["infantry", "pierce", "ranged"],
      "health": 2,
      "armor": [3, 6, 5, 0],
      "steps": 2,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "range": 2,
          "bonuses": [
            {
              "bonus": [null, -3, null, null]
            },
            {
              "target": ["infantry", "ranged"],
              "bonus": [null, 2, null, null]
            },
            {
              "target": ["cavalry", "ranged"],
              "bonus": [null, 2, null, null]
            },
            {
              "target": ["infantry", "gunpowder"],
              "bonus": [null, 1, null, null]
            },
            {
              "target": ["cavalry", "gunpowder"],
              "bonus": [null, 1, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "archer",
      "tags": ["infantry", "pierce", "ranged"],
      "health": 2,
      "armor": [4, 5, 5, 0],
      "steps": 2,
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
      "name": "cavalry archer",
      "tags": ["cavalry", "pierce", "ranged"],
      "health": 3,
      "armor": [4, 5, 7, 0],
      "steps": 4,
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
      "tags": ["infantry", "pierce", "gunpowder"],
      "health": 3,
      "armor": [5, 5, 6, 0],
      "steps": 2,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "range": 4,
          "splash": true,
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
      "tags": ["cavalry", "slash"],
      "health": 2,
      "armor": [4, 6, 8, 2],
      "steps": 4,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 0,
          "bonuses": [
            {
              "bonus": [-2, null, null, null]
            },
            {
              "target": "priest",
              "bonus": [0, null, null, null]
            },
            {
              "target": "economic",
              "bonus": [0, null, null, null]
            },
            {
              "target": "production",
              "bonus": [0, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "knight",
      "tags": ["cavalry", "slash"],
      "health": 3,
      "armor": [4, 6, 8, 0],
      "steps": 4,
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
      "tags": ["siege", "garrison", "blunt"],
      "health": 3,
      "armor": [4, 9, 5, 0],
      "steps": 2,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "bonuses": [
            {
              "bonus": [null, null, 0, null]
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
      "name": "scorpion",
      "tags": ["siege", "ranged_siege", "gullible", "pierce"],
      "health": 2,
      "armor": [4, 6, 5, 0],
      "steps": 2,
      "attacks": [
        {
          "hits": 2,
          "actionpoints": 1,
          "splash": true,
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
      "tags": ["siege", "ranged_siege", "gullible", "blunt"],
      "health": 2,
      "armor": [4, 6, 5, 0],
      "steps": 2,
      "attacks": [
        {
          "hits": 2,
          "actionpoints": 1,
          "splash": true,
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
      "armor": [4, 8, 5, 0],
      "steps": 2,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "range": 7,
          "bonuses": [
            {
              "bonus": [null, null, 0, null]
            }
          ]
        },
        {
          "hits": 2,
          "actionpoints": 1,
          "range": 7,
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
      "name": "cannon",
      "tags": ["siege", "ranged_siege", "gullible", "blunt", "gunpowder"],
      "health": 2,
      "armor": [6, 8, 6, 0],
      "steps": 2,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "splash": true,
          "bonuses": [
            {
              "bonus": [null, null, 4, null]
            }
          ]
        }
      ]
    },
    {
      "name": "fishing ship",
      "tags": ["ship"],
      "health": 2,
      "armor": [4, 4, 6, 0],
      "steps": 2,
      "attacks": []
    },
    {
      "name": "transport ship",
      "tags": ["ship", "garrison"],
      "health": 2,
      "armor": [4, 6, 5, 0],
      "steps": 4,
      "garrison": {
        "space": 3,
        "occupantTags": ["infantry", "cavalry", "siege"]
      },
      "attacks": []
    },
    {
      "name": "galley",
      "tags": ["ship", "ranged", "pierce"],
      "health": 2,
      "armor": [4, 6, 5, 0],
      "steps": 3,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 0,
          "range": 2,
          "bonuses": [
            {
              "bonus": [null, 0, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "boarding ship",
      "tags": ["ship", "slash"],
      "health": 2,
      "armor": [4, 6, 5, 0],
      "steps": 4,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 0,
          "bonuses": [
            {
              "bonus": [0, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "explosion raft",
      "tags": ["ship"],
      "health": 2,
      "armor": [6, 4, 5, 0],
      "steps": 4,
      "attacks": [
        {
          "hits": 3,
          "actionpoints": 1,
          "splash": true,
          "splashRange": 2,
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
      "tags": ["ship", "ranged_siege", "blunt", "gunpowder"],
      "health": 3,
      "armor": [4, 6, 5, 0],
      "steps": 3,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 1,
          "range": 5,
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
      "tags": ["building", "ranged", "pierce", "garrison"],
      "health": 4,
      "armor": [6, 8, 5, 3],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 0,
          "bonuses": [
            {
              "bonus": [null, 0, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "house",
      "tags": ["building"],
      "health": 1,
      "armor": [9, 10, 8, 0],
      "attacks": []
    },
    {
      "name": "generic building",
      "tags": ["building"],
      "health": 3,
      "armor": [6, 8, 5, 0],
      "attacks": []
    },
    {
      "name": "tower",
      "tags": ["building", "ranged", "pierce", "garrison"],
      "health": 2,
      "armor": [6, 8, 5, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 0,
          "range": 3,
          "bonuses": [
            {
              "bonus": [null, -1, null, null]
            }
          ]
        },
        {
          "hits": 1,
          "requirements": [ // requirements as-of-yet not implemented
            {"key": "garrissoned", "atleast": 1}
          ],
          "actionpoints": 0,
          "range": 3,
          "bonuses": [
            {
              "bonus": [null, 1, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "garrisoned tower",
      "tags": ["building", "ranged", "pierce", "garrison"],
      "health": 2,
      "armor": [6, 8, 5, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 0,
          "range": 3,
          "bonuses": [
            {
              "bonus": [null, 1, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "bombard tower",
      "tags": ["building", "ranged_siege", "blunt", "gunpowder", "garrison"],
      "health": 4,
      "armor": [6, 8, 5, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 0,
          "range": 5,
          "splash": true,
          "bonuses": [
            {
              "bonus": [null, null, 2, null]
            }
          ]
        },
        {
          "hits": 1,
          "requirements": [ // requirements as-of-yet not implemented
            {"key": "garrissoned", "atleast": 1}
          ],
          "actionpoints": 0,
          "range": 5,
          "splash": true,
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
      "tags": ["building", "ranged", "age2", "age2", "pierce", "garrison"],
      "health": 5,
      "armor": [6, 8, 5, 0],
      "attacks": [
        {
          "hits": 2,
          "actionpoints": 0,
          "range": 3,
          "bonuses": [
            {
              "bonus": [null, 0, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "palisade wall",
      "tags": ["wall"],
      "health": 1,
      "armor": [8, 9, 7, 0],
      "attacks": []
    },
    {
      "name": "stone wall",
      "tags": ["wall"],
      "health": 1,
      "armor": [9, 10, 8, 0],
      "attacks": []
    },
    {
      "name": "outpost",
      "tags": ["wall"],
      "health": 1,
      "armor": [7, 8, 6, 0],
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
      "tags": ["unique", "infantry", "ranged", "pierce"],
      "health": 3,
      "armor": [4, 4, 6, 0],
      "steps": 2,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 0,
          "range": 3,
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
      "tags": ["unique", "infantry", "ranged", "pierce"],
      "health": 3,
      "armor": [5, 3, 6, 0],
      "steps": 2,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 0,
          "bonuses": [
            {
              "bonus": [null, 0, null, null]
            },
            {
              "target": "cavalry",
              "bonus": [null, 4, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "kings guard",
      "tags": ["unique", "cavalry", "slash"],
      "health": 4,
      "armor": [5, 3, 8, 0],
      "steps": 4,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 0,
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
      "tags": ["unique", "infantry", "slash", "economic"],
      "health": 3,
      "armor": [4, 6, 6, 3],
      "steps": 2,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 0,
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
      "tags": ["unique", "infantry", "slash"],
      "health": 3,
      "armor": [4, 4, 6, 0],
      "steps": 2,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 0,
          "range": 2,
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
      "tags": ["unique", "infantry", "slash"],
      "health": 3,
      "armor": [5, 5, 6, 0],
      "steps": 2,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 0,
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
      "tags": ["unique", "cavalry", "slash"],
      "health": 3,
      "armor": [4, 4, 8, 0],
      "steps": 4,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 0,
          "bonuses": [
            {
              "bonus": [1, null, null, null]
            }
          ]
        },
        {
          "hits": 1,
          "actionpoints": 0,
          "cost": {
            "gold": 1
          },
          "bonuses": [
            {
              "bonus": [3, null, null, null]
            }
          ]
        }
      ]
    },
    {
      "name": "guerrilla warrior",
      "tags": ["unique", "infantry", "slash"],
      "health": 3,
      "armor": [3, 3, 5, 0],
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 0,
          "range": 2,
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
    {
      "name": "conquistador",
      "tags": ["unique", "cavalry", "gunpowder"],
      "health": 3,
      "armor": [4, 4, 7, 0],
      "steps": 4,
      "attacks": [
        {
          "hits": 1,
          "actionpoints": 0,
          "bonuses": [
            {
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
        "tags": [["slash"]]
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
