// ── Data ──────────────────────────────────────────────────────────────────

function fmt(d) { return parseFloat(d.toFixed(2)); }

const units = slowData.units.slice().sort((a, b) => a.name.localeCompare(b.name));

function populate(selectEl) {
  for (const unit of units) {
    const opt = document.createElement('option');
    opt.value = unit.name;
    opt.textContent = unit.name;
    selectEl.appendChild(opt);
  }
}

// ── Render ────────────────────────────────────────────────────────────────

function render() {
  const attacker = units.find(u => u.name === document.getElementById('attacker').value);
  const defender  = units.find(u => u.name === document.getElementById('defender').value);

  document.getElementById('attacker-stats').innerHTML = attacker ? buildAttackerStats(attacker, defender) : '';
  document.getElementById('defender-stats').innerHTML = defender  ? buildDefenderStats(defender) : '';

  const el = document.getElementById('result');
  if (!attacker || !defender) return;

  const attacks = calculateDamages(attacker, defender);
  el.innerHTML = attacks.length
    ? buildResultCard(defender, attacks)
    : '<div class="card"><p class="no-damage">No applicable attacks</p></div>';
}

// ── Selection change handlers ─────────────────────────────────────────────

function onAttackerChange() {
  render();
  if (overviewState.mode === 'attacker') {
    overviewState.unit = units.find(u => u.name === document.getElementById('attacker').value) ?? overviewState.unit;
    renderOverviewContent();
  }
}

function onDefenderChange() {
  render();
  if (overviewState.mode === 'defender') {
    overviewState.unit = units.find(u => u.name === document.getElementById('defender').value) ?? overviewState.unit;
    renderOverviewContent();
  }
}

// ── Init ──────────────────────────────────────────────────────────────────

window.addEventListener('DOMContentLoaded', () => {
  const aSel = document.getElementById('attacker');
  const dSel = document.getElementById('defender');
  populate(aSel);
  populate(dSel);
  if (dSel.options.length > 1) dSel.selectedIndex = 1;
  aSel.addEventListener('change', onAttackerChange);
  dSel.addEventListener('change', onDefenderChange);
  document.getElementById('btn-attacker-overview').addEventListener('click', () => renderOverview('attacker'));
  document.getElementById('btn-defender-overview').addEventListener('click', () => renderOverview('defender'));
  render();
});
