let counterValue = 0;
let counterElement = document.getElementById("counter");
let counterLogsElement = document.getElementById("counterLogs");

function updateCounterDisplay() {
  counterElement.innerHTML = counterValue;
}

function addLogMessage(message) {
  counterLogsElement.innerHTML += `<p>${message}</p>`;
}

function increment() {
  counterValue++;
  updateCounterDisplay();
  addLogMessage("The counter has been increased by 1.");
}

function decrement() {
  counterValue--;
  updateCounterDisplay();
  addLogMessage("The counter has been decreased by 1.");
}

function reset() {
  counterValue = 0;
  updateCounterDisplay();
  addLogMessage("The counter has been Reset");
}