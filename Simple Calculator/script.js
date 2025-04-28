// script.js

const display = document.getElementById("display");
const buttons = document.querySelectorAll(".btn");

let currentInput = "";

// Button click handling
buttons.forEach((button) => {
  button.addEventListener("click", () => handleInput(button.textContent));
});

// Keyboard handling
document.addEventListener("keydown", (e) => {
  if (e.key >= "0" && e.key <= "9") {
    handleInput(e.key);
  } else if (["+", "-", "*", "/"].includes(e.key)) {
    handleInput(e.key);
  } else if (e.key === "Enter") {
    handleInput("=");
  } else if (e.key === "Backspace") {
    currentInput = currentInput.slice(0, -1);
    display.value = currentInput;
  } else if (e.key === "Escape") {
    currentInput = "";
    display.value = "";
  }
});

// Main logic function
function handleInput(value) {
  if (value === "C") {
    currentInput = "";
    display.value = "";
  } else if (value === "=") {
    try {
      currentInput = eval(currentInput);
      display.value = currentInput;
    } catch {
      display.value = "Error";
      currentInput = "";
    }
  } else {
    if (isOperator(value) && isOperator(currentInput.slice(-1))) {
      currentInput = currentInput.slice(0, -1) + value;
    } else {
      currentInput += value;
    }
    display.value = currentInput;
  }
}

// Helper to check operators
function isOperator(char) {
  return ["+", "-", "*", "/"].includes(char);
}
