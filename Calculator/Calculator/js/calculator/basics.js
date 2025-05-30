function getDamages(attacker, defender, techs) {
  let damages = [];

  for (let attack of attacker.attacks) {
    if (attackApplies(attack, defender)) {
      damages.push(getDamage(attack, attacker, defender, techs));
    }
  }

  damages.sort((a, b) => b.damage - a.damage);

  if (attacker.actions !== undefined && damages.length > attacker.actions) {
    damages = damages.slice(0, attacker.actions);
  }

  return damages;
}

function getHits(attack, attacker, techs) {
  let hits = attack.hits;

  for (let tech of techs) {
    if (tech.attacker) {
      if (tech.bonus.hits) {
        if (techApplies(tech, attacker)) {
          hits += tech.bonus.hits;
        }
      }
    }
  }

  return hits;
}

function getDamage(attack, attacker, defender, techs) {
  let damage = 0;
  let roll = undefined;

  for (let bonus of attack.bonuses) {
    if (bonusApplies(bonus, defender)) {
      let modifier = addBonuses(bonus.bonus, getAttackBonus(attack, attacker, defender, techs));
      let requiredRoll = getRequiredRoll(modifier, defender, techs);
      let expectedDamage = getExpectedDamage(getHits(attack, attacker, techs), requiredRoll);

      if (expectedDamage > damage) {
        damage = expectedDamage;
        roll = requiredRoll.roll;
      }
    }
  }

  if (damage.toString().length > 3) {
    damage = damage.toPrecision(2);
  }

  return {
    damage: damage,
    roll: roll,
    actionpoints: attack.actionpoints
  };
}

function addBonuses(a, b) {
  if (b === undefined) {
    return a;
  }

  let sum = [];
  for (let i = 0; i < 4; i++) {
    sum.push(a[i] !== null ? a[i] + (b[i] !== null ? b[i] : 0) : null);
  }
  return sum;
}

function attackApplies(attack, defender) {
  return attack.bonuses.some(bonus => bonusApplies(bonus, defender));
}

function bonusApplies(bonus, defender) {
  if (bonus.target === undefined) {
    return true;
  }

  if (Array.isArray(bonus.target)) {
    return defender.tags !== undefined
      && bonus.target.every(tag => defender.tags.includes(tag));
  }

  return defender.tags !== undefined
    && defender.tags.includes(bonus.target);
}

function getRequiredRoll(modifier, defender, techs) {
  let lowestRoll = undefined;
  let lowestArmor = undefined;
  let bestModifier = undefined;
  let armor = addBonuses(defender.armor, getDefenseBonus(defender, techs));

  for (let i in modifier) {
    let m = modifier[i];
    if (m !== null) {
      let roll = getHitThreshold(armor[i], m);
      if (roll <= 10 && (lowestRoll === undefined || roll < lowestRoll)) {
        lowestRoll = roll;
        lowestArmor = armor[i];
        bestModifier = m;
      }
    }
  }

  let requiredRoll = {
    roll: lowestRoll,
    armor: lowestArmor,
    modifier: bestModifier
  };

  return requiredRoll;
}

function getExpectedNumberOfTurnsToKill(damages, defender, techs) {
  let damageSum = getDamagesSum(damages);

  if (damageSum <= 0) {
    return "♾️";
  }

  let health = defender.health + getHealthBonus(defender, techs);

  return Math.ceil(health / damageSum).toString();
}

function getAttackBonus(attack, attacker, defender, techs) {
  let bonus = [0, 0, 0, 0];

  for (let tech of techs) {
    if (tech.attacker) {
      if (techApplies(tech, attacker)) {
        bonus = addBonuses(bonus, tech.bonus.attack);
      }
    }
  }

  return bonus;
}

function getDefenseBonus(defender, techs) {
  let bonus = [0, 0, 0, 0];

  for (let tech of techs) {
    if (tech.defender) {
      if (techApplies(tech, defender)) {
        bonus = addBonuses(bonus, tech.bonus.armor);
      }
    }
  }

  return bonus;
}

function getHealthBonus(target, techs) {
  let bonus = 0;

  for (let tech of techs) {
    if (tech.defender) {
      if (techApplies(tech, target) && tech.bonus.health) {
        bonus = bonus + tech.bonus.health;
      }
    }
  }

  return bonus;
}

function techApplies(tech, target) {
  if (tech.target === undefined) {
    return true;
  }

  if (tech.target.tags !== undefined) {
    for (let group of tech.target.tags) {
      if (target.tags !== undefined
        && group.every(tag => target.tags.includes(tag))) {
        return true;
      }
    }
  }

  if (tech.target.name !== undefined) {
    if (target.name == tech.target.name) {
      return true;
    }
  }

  return false;
}
