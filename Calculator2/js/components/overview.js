// ── Overview panel ────────────────────────────────────────────────────────

function calcTotalDamage(attacker, defender) {
  const attacks = calculateDamages(attacker, defender);
  return attacks.filter(a => !a.isConversion).reduce((s, a) => s + a.damage, 0);
}

function buildOverview(fixedUnit, mode, sort) {
  // mode: 'attacker' = fixed unit attacks everyone
  //       'defender' = everyone attacks fixed unit
  const rows = units.map(unit => {
    const attacker = mode === 'attacker' ? fixedUnit : unit;
    const defender  = mode === 'attacker' ? unit : fixedUnit;
    const total = calcTotalDamage(attacker, defender);
    const hp = defender.health;
    const turns = total <= 0 ? Infinity : Math.ceil(hp / total);
    return { name: unit.name, total, turns };
  });

  const { col, dir } = sort;
  const mul = dir === 'asc' ? 1 : -1;
  rows.sort((a, b) => {
    if (col === 'name')   return mul * a.name.localeCompare(b.name);
    if (col === 'damage') return mul * (a.total - b.total) || a.name.localeCompare(b.name);
    // turns: Infinity always last in asc, first in desc
    if (a.turns === Infinity && b.turns === Infinity) return 0;
    if (a.turns === Infinity) return dir === 'asc' ?  1 : -1;
    if (b.turns === Infinity) return dir === 'asc' ? -1 :  1;
    return mul * (a.turns - b.turns) || a.name.localeCompare(b.name);
  });

  const maxDmg = Math.max(...rows.map(r => r.total), 0.001);

  const label = mode === 'attacker'
    ? `${fixedUnit.name} attacking every unit`
    : `every unit attacking ${fixedUnit.name}`;

  function arrow(c) {
    if (col !== c) return '<span class="ov-arrow inactive">⇅</span>';
    return `<span class="ov-arrow">${dir === 'asc' ? '▲' : '▼'}</span>`;
  }

  let html = `<div class="ov-panel"><div class="ov-header">${label}</div>`;
  html += `<div class="ov-row ov-col-header">`;
  html += `<span class="ov-name ov-sortable" onclick="sortOverview('name')">Name ${arrow('name')}</span>`;
  html += `<span></span>`;
  html += `<span class="ov-dmg ov-sortable" onclick="sortOverview('damage')">Exp Dmg ${arrow('damage')}</span>`;
  html += `<span class="ov-turns ov-sortable" onclick="sortOverview('turns')">Turns ${arrow('turns')}</span>`;
  html += `</div>`;

  for (const row of rows) {
    const pct = (row.total / maxDmg * 100).toFixed(1);
    const turnsStr = row.turns === Infinity ? '∞' : row.turns;
    html += `<div class="ov-row">`;
    html += `<span class="ov-name">${row.name}</span>`;
    html += `<span class="ov-track"><span class="ov-fill" style="width:${pct}%"></span></span>`;
    html += `<span class="ov-dmg">${fmt(row.total)}</span>`;
    html += `<span class="ov-turns">${turnsStr}t</span>`;
    html += `</div>`;
  }
  html += '</div>';
  return html;
}

const overviewState = {
  mode: null,
  unit: null,
  sort: { col: 'damage', dir: 'desc' },
};

function sortOverview(col) {
  const s = overviewState.sort;
  s.dir = (s.col === col && s.dir === 'asc') ? 'desc' : 'asc';
  s.col = col;
  renderOverviewContent();
}

function renderOverviewContent() {
  document.getElementById('overview').innerHTML =
    buildOverview(overviewState.unit, overviewState.mode, overviewState.sort);
}

function renderOverview(mode) {
  const attacker = units.find(u => u.name === document.getElementById('attacker').value);
  const defender  = units.find(u => u.name === document.getElementById('defender').value);
  const fixedUnit = mode === 'attacker' ? attacker : defender;

  const btnA = document.getElementById('btn-attacker-overview');
  const btnD = document.getElementById('btn-defender-overview');

  if (overviewState.mode === mode || !fixedUnit) {
    overviewState.mode = null;
    overviewState.unit = null;
    document.getElementById('overview').innerHTML = '';
    btnA.classList.remove('active');
    btnD.classList.remove('active');
    return;
  }

  overviewState.mode = mode;
  overviewState.unit = fixedUnit;
  btnA.classList.toggle('active', mode === 'attacker');
  btnD.classList.toggle('active', mode === 'defender');
  renderOverviewContent();
}
