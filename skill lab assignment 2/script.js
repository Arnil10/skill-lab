let currentInput = '';
let currentOperation = '';
let firstOperand = null;

function appendNumber(number) {
  currentInput += number;
  updateDisplay();
}

function setOperation(operation) {
  if (currentInput !== '') {
    if (firstOperand !== null) {
      calculateResult();
    }
    firstOperand = parseFloat(currentInput);
    currentInput = '';
    currentOperation = operation;
    updateDisplay();
  }
}

function clearDisplay() {
  currentInput = '';
  currentOperation = '';
  firstOperand = null;
  updateDisplay();
}

function calculateResult() {
  if (currentInput !== '') {
    const secondOperand = parseFloat(currentInput);
    switch (currentOperation) {
      case '+':
        currentInput = (firstOperand + secondOperand).toString();
        break;
      case '-':
        currentInput = (firstOperand - secondOperand).toString();
        break;
      case '*':
        currentInput = (firstOperand * secondOperand).toString();
        break;
      case '/':
        currentInput = (firstOperand / secondOperand).toString();
        break;
    }
    currentOperation = '';
    firstOperand = null;
    updateDisplay();
  }
}

function updateDisplay() {
  const displayElement = document.getElementById('display');
  displayElement.textContent = currentInput || '0';
}