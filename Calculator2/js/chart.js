// ── Chart ─────────────────────────────────────────────────────────────────

function barColor(dmg, maxDmg) {
  const t = maxDmg > 1 ? (dmg - 1) / (maxDmg - 1) : 1;
  return `rgb(${Math.round(120 + t*120)},${Math.round(82 + t*114)},${Math.round(28 + t*52)})`;
}

function buildChart(attack) {
  if (!attack?.rollInfo) return '';
  const { hits, rollInfo } = attack;
  const data = [];
  let maxDmg = 0;
  for (let roll = hits; roll <= hits * 10; roll++) {
    const atk = roll + rollInfo.modifier;
    let dmg = 0;
    if (rollInfo.armor <= 0) dmg = atk >= rollInfo.armor ? 1 : 0;
    else if (atk > 0) dmg = Math.floor(atk / rollInfo.armor);
    data.push({ roll, dmg });
    if (dmg > maxDmg) maxDmg = dmg;
  }
  if (maxDmg === 0) return '';

  const W = 400, H = 130, pL = 26, pR = 6, pT = 8, pB = 22;
  const cW = W - pL - pR, cH = H - pT - pB;
  const n = data.length, barW = cW / n, gap = Math.max(0.5, barW * 0.15);
  let s = `<svg viewBox="0 0 ${W} ${H}" xmlns="http://www.w3.org/2000/svg" style="width:100%;display:block;">`;

  for (let d = 0; d <= maxDmg; d++) {
    const y = pT + cH - (d / maxDmg) * cH;
    s += `<line x1="${pL}" y1="${y.toFixed(1)}" x2="${W-pR}" y2="${y.toFixed(1)}" stroke="${d===0?'#2a2a40':'#21213a'}" stroke-width="1"${d>0?' stroke-dasharray="3,3"':''}/>`;
    s += `<text x="${(pL-5).toFixed(1)}" y="${(y+3.5).toFixed(1)}" fill="#44446a" font-size="9" text-anchor="end" font-family="system-ui,sans-serif">${d}</text>`;
  }

  for (let i = 0; i < n; i++) {
    const { dmg } = data[i];
    if (!dmg) continue;
    const x = pL + i * barW + gap / 2;
    const bH = (dmg / maxDmg) * cH;
    s += `<rect x="${x.toFixed(1)}" y="${(pT+cH-bH).toFixed(1)}" width="${(barW-gap).toFixed(1)}" height="${bH.toFixed(1)}" fill="${barColor(dmg,maxDmg)}" rx="1.5"/>`;
  }

  const step = n <= 10 ? 1 : 5;
  for (let i = 0; i < n; i++) {
    const { roll } = data[i];
    if ((roll - hits) % step === 0 || i === n - 1) {
      const x = pL + i * barW + barW / 2;
      s += `<text x="${x.toFixed(1)}" y="${H-4}" fill="#44446a" font-size="9" text-anchor="middle" font-family="system-ui,sans-serif">${roll}</text>`;
    }
  }

  s += '</svg>';
  return s;
}
