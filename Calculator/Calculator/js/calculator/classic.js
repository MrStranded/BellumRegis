function getHitThreshold(armor, b) {
  return armor + 1 - b;
}

function getExpectedDamage(dice, roll) {
  if (roll === undefined) {
    return 0;
  }

  let safeRoll = Math.min(Math.max(roll.roll, 1), 10);
  let damage = (11 - safeRoll) / 10;
  return damage * dice;
}
