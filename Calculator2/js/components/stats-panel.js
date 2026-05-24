// ── Side panel cards ──────────────────────────────────────────────────────

function buildAttackerStats(unit, defender) {
  let h = `<div class="sr"><span class="sk">Health</span><span class="sv">${unit.health}</span></div>`;
  if (!unit.attacks?.length) { h += '<div class="sno">No attacks</div>'; return h; }
  h += '<hr class="sdiv">';
  for (const atk of unit.attacks) {
    const pool = defender ? atk.bonuses.filter(b => bonusApplies(b, defender)) : atk.bonuses;
    const bon = pool.reduce((best, b) => {
      const ti = primaryTypeIdx(b.bonus);
      if (ti === null) return best;
      if (!best) return b;
      const bi = primaryTypeIdx(best.bonus);
      return b.bonus[ti] > best.bonus[bi] ? b : best;
    }, null) ?? atk.bonuses[0];
    if (!bon) continue;
    const ti = primaryTypeIdx(bon.bonus);
    if (ti === null) continue;
    const mod = bon.bonus[ti];
    h += `<div class="satk">`;
    h += `<span class="stype" style="color:${TCOLOR[ti]}">${TYPES[ti]}</span>`;
    h += `<span class="sinfo">${atk.hits}d10 · ${signedMod(mod)} · ${atk.actionpoints} AP</span>`;
    h += `</div>`;
  }
  return h;
}

function buildDefenderStats(unit) {
  let h = `<div class="sr"><span class="sk">Health</span><span class="sv">${unit.health}</span></div>`;
  h += '<hr class="sdiv">';
  for (let i = 0; i < 4; i++) {
    h += `<div class="sr"><span class="stype" style="color:${TCOLOR[i]}">${TYPES[i]}</span><span class="sv">${unit.armor[i]}</span></div>`;
  }
  return h;
}
