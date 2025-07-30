let display = document.getElementById("display");
let currentInput = "";

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function appendOperator(operator) {
  if (currentInput === "") return;
  const lastChar = currentInput[currentInput.length - 1];
  if ("+-*/".includes(lastChar)) {
    currentInput = currentInput.slice(0, -1);
  }
  currentInput += operator;
  updateDisplay();
}

function appendDot() {
  const parts = currentInput.split(/[\+\-\*\/]/);
  const last = parts[parts.length - 1];
  if (!last.includes(".")) {
    currentInput += ".";
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = "";
  updateDisplay();
}

function deleteLast() {
  currentInput = currentInput.slice(0, -1);
  updateDisplay();
}

function calculate() {
  try {
    const result = eval(currentInput);
    currentInput = result.toString();
    updateDisplay();
  } catch (error) {
    display.textContent = "Error";
    currentInput = "";
  }
}

function updateDisplay() {
  display.textContent = currentInput || "0";
}
