// ── Result card ───────────────────────────────────────────────────────────

function buildResultCard(defender, attacks) {
  const damageAttacks    = attacks.filter(a => !a.isConversion);
  const conversionAttacks = attacks.filter(a =>  a.isConversion);

  const total = damageAttacks.reduce((s, a) => s + a.damage, 0);
  const turns = total <= 0 ? '∞' : Math.ceil(defender.health / total);

  let html = '<div class="card"><div class="summary">';
  html += `<div class="stat"><span class="lbl">Expected damage</span><span class="val">${fmt(total)}</span></div>`;
  if (conversionAttacks.length) {
    const pct = Math.round(conversionAttacks[0].damage * 100);
    html += `<div class="stat"><span class="lbl">Convert chance</span><span class="val">${pct}%</span></div>`;
  } else {
    html += `<div class="stat"><span class="lbl">Turns to kill</span><span class="val">${turns}</span></div>`;
  }
  html += '</div>';

  html += '<div class="attacks-detail">';
  for (const a of attacks) {
    const right = a.isConversion ? `${Math.round(a.damage * 100)}%` : fmt(a.damage);
    html += `<div class="atk"><span>${a.hits}d10 · ${a.actionpoints} AP</span><span>${right}</span></div>`;
  }
  html += '</div>';

  const chart = buildChart(attacks[0]);
  if (chart)
    html += `<div class="chart-section"><div class="chart-title">Damage by roll · ${attacks[0].hits}d10</div>${chart}</div>`;

  html += '</div>';
  return html;
}
