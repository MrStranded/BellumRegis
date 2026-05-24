// ── Damage type metadata ──────────────────────────────────────────────────

const TYPES  = ['Slash', 'Pierce', 'Blunt', 'Conversion'];
const TCOLOR = ['#d07060', '#5a90c8', '#b08840', '#9060cc'];

function primaryTypeIdx(bonusArr) {
  for (let i = 0; i < 4; i++) if (bonusArr[i] !== null) return i;
  return null;
}

function signedMod(n) { return n >= 0 ? `+${n}` : `${n}`; }

// ── Calculation (ported from Calculator/Calculator/js/calculator/) ────────

function growDistribution(oldDist, iteration) {
  const newDist = new Array(oldDist.length + 10);
  for (let old = iteration; old < oldDist.length; old++) {
    if (!oldDist[old]) continue;
    for (let roll = 1; roll <= 10; roll++) {
      newDist[old + roll] = (newDist[old + roll] || 0) + oldDist[old];
    }
  }
  return newDist;
}

function getExpectedDamage(dice, rollInfo) {
  if (!rollInfo) return 0;
  let distribution = [1];
  for (let i = 0; i < dice; i++) distribution = growDistribution(distribution, i);
  let sum = 0;
  for (let i = 0; i < distribution.length; i++) {
    const c = distribution[i];
    if (!c) continue;
    const atk = i + rollInfo.modifier;
    if (rollInfo.armor <= 0) { if (atk >= rollInfo.armor) sum += c; }
    else if (atk > 0) sum += c * Math.floor(atk / rollInfo.armor);
  }
  return sum / Math.pow(10, dice);
}

function bonusApplies(bonus, defender) {
  if (bonus.target === undefined) return true;
  if (!defender.tags) return false;
  if (Array.isArray(bonus.target)) return bonus.target.every(t => defender.tags.includes(t));
  return defender.tags.includes(bonus.target);
}

function bestRollInfo(bonusArr, armorArr) {
  let best = null;
  for (let i = 0; i < 4; i++) {
    if (bonusArr[i] === null) continue;
    const threshold = armorArr[i] - bonusArr[i];
    if (threshold <= 10 && (!best || threshold < best.threshold))
      best = { threshold, armor: armorArr[i], modifier: bonusArr[i], typeIdx: i };
  }
  return best;
}

function calculateDamages(attacker, defender) {
  const results = [];
  for (const attack of attacker.attacks) {
    const applicable = attack.bonuses.filter(b => bonusApplies(b, defender));
    if (!applicable.length) continue;
    let bestDmg = 0, bestRoll = null;
    for (const bonus of applicable) {
      const ri = bestRollInfo(bonus.bonus, defender.armor);
      if (!ri) continue;
      const dmg = getExpectedDamage(attack.hits, ri);
      if (dmg > bestDmg) { bestDmg = dmg; bestRoll = ri; }
    }
    results.push({ damage: bestDmg, actionpoints: attack.actionpoints, hits: attack.hits, rollInfo: bestRoll, isConversion: bestRoll?.typeIdx === 3 });
  }
  results.sort((a, b) => b.damage - a.damage);
  return attacker.actions !== undefined ? results.slice(0, attacker.actions) : results;
}
