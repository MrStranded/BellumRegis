function getHitThreshold(armor, b) {
  return armor - b;
}

function getExpectedDamage(dice, roll) {
  if (roll === undefined) {
    return 0;
  }

  let distribution = [1];
  for (let i = 0; i < dice; i++) {
    distribution = growDistribution(distribution, i);
  }

  let sumDamage = 0;
  for (let i = 0; i < distribution.length; i++) {
    let attack = i + roll.modifier;
    let combinations = distribution[i];
    if (combinations > 0) {
      if (roll.armor <= 0) {
        sumDamage += (attack >= roll.armor ? combinations : 0);
      } else {
        sumDamage += combinations * Math.floor(attack / roll.armor);
      }
    }
  }

  let size = Math.pow(10, dice);
  return sumDamage / size;
}

function growDistribution(oldDistro, iteration) {
  let newDistro = new Array(oldDistro.length + 10);

  for (let old = iteration; old < oldDistro.length; old++) {
    for (let roll = 1; roll <= 10; roll++) {
      let existing = newDistro[old + roll];
      newDistro[old + roll] = (existing !== undefined ? existing : 0) + oldDistro[old];
    }
  }

  return newDistro;
}
