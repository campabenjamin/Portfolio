const rollBtn = document.getElementById("rollBtn");
const diceBody = document.getElementById("diceBody");
const totalField = document.getElementById("total");
const status = document.getElementById("status");

function rollDice() {
  diceBody.innerHTML = "";
  let total = 0;

  for (let i = 1; i <= 5; i++) {
    const value = Math.floor(Math.random() * 6) + 1;
    total += value;

    const row = document.createElement("tr");
    row.innerHTML = `<td>Die ${i}</td><td><input type="text" value="${value}" readonly></td>`;
    diceBody.appendChild(row);
  }

  totalField.value = total;
  status.textContent = `You rolled a total of ${total}`;
  rollBtn.focus();
}

window.onload = rollDice;
rollBtn.onclick = rollDice;
