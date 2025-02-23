$(document).ready(function () {

  render();

});


let colors = getColors();

function getColors() {
  // let s = [45, 216, 45];
  let s = [10, 255, 10];
  // let e = [220, 40, 40];
  let e = [220, 20, 20];

  let colors = [];
  for (let i = 0; i < 11; i++) {
    colors.push("rgb("
      + interpolate(s[0], e[0], i) + ","
      + interpolate(s[1], e[1], i) + ","
      + interpolate(s[2], e[2], i)
      + ")");
  }
  return colors;
}

function interpolate(start, end, i) {
  let diff = (end - start) * i / 10;
  let lin = start + diff;
  // return lin;
  return Math.sqrt(lin * 255);
}



function render() {
  $("#content").empty();
  // createTable(quickData, "Normal");
  // createTable(quickReworkData, "Rework");
  createTable(slowData, "Slow");
}

function createTable(data, title) {
  let titleElement = document.createElement("h1");
  titleElement.textContent = title;
  $("#content").append(titleElement);

  let table = document.createElement("table");

  table.append(createHeader(data));

  for (let attacker of data.units) {
    table.append(createRow(attacker, data));
  }

  $("#content").append(table);

  let techs = document.createElement("div");
  techs.style.display = "flex";
  techs.style.flexDirection = "column";

  for (let tech of data.techs) {
    techs.append(createTech(tech));
  }

  $("#content").append(techs);
}

function createHeader(data) {
  let headerRow = document.createElement("tr");
  headerRow.id = "headerRow";

  let desc = document.createElement("th");
  desc.textContent = "Damage Table";
  headerRow.append(desc);

  for (let defender of data.units) {
    let label = document.createElement("th");
    label.textContent = defender.name;
    label.classList.add("vertical");
    headerRow.append(label);
  }

  let sumLabel = document.createElement("th");
  sumLabel.textContent = "sum";
  headerRow.append(sumLabel);
  return headerRow;
}

function createRow(attacker, data) {
  let row = document.createElement("tr");

  let label = document.createElement("td");
  label.textContent = attacker.name;
  label.style.fontWeight = "bold";
  row.appendChild(label);

  let damageSum = 0;

  for (let defender of data.units) {
    let attack = document.createElement("td");
    attack.style.textAlign = "center";
    attack.setAttribute("data-unit", defender.name);
    attack.addEventListener("click", function() {
      if (attack.classList.contains("active")) {
        $("[data-unit]").removeClass("not-active");
        $("[data-unit|='"+defender.name+"']").removeClass("active");
      } else {
        $("[data-unit]").addClass("not-active");
        $("[data-unit|='"+defender.name+"']").removeClass("not-active");
        $("[data-unit|='"+defender.name+"']").addClass("active");
      }
    });

    let damages = getDamages(attacker, defender, data.techs);
    attack.style.backgroundColor = getColor(getLowestRoll(damages));

    damageSum += getDamagesSum(damages);

    for (let d of damages) {
      let damageText = document.createElement("div");
      let actionpointInvestment = d.actionpoints != 1 ? " / " + d.actionpoints : "";
      damageText.textContent = d.damage + actionpointInvestment;//getDamageString(damages);
      attack.appendChild(damageText);
    }

    let hoverInfo =
      getExpectedNumberOfTurnsToKill(damages, defender, data.techs) + " turns"
      + getActionPointString(damages);
    attack.setAttribute("title", hoverInfo);

    if (attacker == defender) {
      attack.style.border = "2px solid black";
    }

    row.appendChild(attack);
  }

  let sum = document.createElement("td");
  sum.textContent = "~ " + Math.round(damageSum);
  row.appendChild(sum);

  return row;
}


function getActionPointString(damages) {
  let values = getActionPointsSum(damages);

  if (values > 0) {
    return " each " + values + " APs";
  }
  return "";
}

function getActionPointsSum(damages) {
  return damages
    .map(damageAndRoll => damageAndRoll.actionpoints)
    .filter(aps => aps !== undefined)
    .reduce((sum, aps) => sum + aps, 0);
}

function getDamagesSum(damages) {
  return damages
    .map(damageAndRoll => damageAndRoll.damage)
    .map(damage => parseFloat(damage))
    .filter(() => !NaN)
    .reduce((sum, damage) => sum + damage, 0);
}

function getDamageString(damages) {
  return damages
    .map(damageAndRoll => damageAndRoll.damage)
    .join(" + ");
}

function getLowestRoll(damages) {
  let roll = undefined;

  for (let damageAndRoll of damages) {
    if (damageAndRoll.roll !== undefined && (roll === undefined || damageAndRoll.roll < roll)) {
      roll = damageAndRoll.roll;
    }
  }

  return roll;
}

function getColor(roll) {
  if (roll === undefined) {
    return "#00000";
  }

  let safeRoll = Math.min(Math.max(roll, 1), 10);
  return colors[safeRoll];
}

function createTechCheck(tech, side) {
  let check = document.createElement("input");
  check.type = "checkbox";
  check.classList.add("checkbox");
  check.checked = tech[side] != null ? tech[side] : false;
  check.addEventListener("change", function () {
    tech[side] = this.checked;
    render();
  });
  return check;
}

function createTech(tech) {
  let techElement = document.createElement("div");

  techElement.append(createTechCheck(tech, "attacker"));
  techElement.append(createTechCheck(tech, "defender"));

  let label = document.createElement("span");
  label.textContent = tech.name;
  techElement.append(label);

  return techElement;
}

