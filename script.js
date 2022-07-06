let savedOperator;
let savedNum;

function add(num1, num2) {
  return(num1 + num2);
}

function sub(num1, num2) {
  return(num1 - num2);
}

function mul(num1, num2) {
  return(num1 * num2);
}

function div(num1, num2) {
  return(num1 / num2);
}

function operate(num1, operator, num2) {
  return(operator(num1, num2));
}

function addDigitToDisplay() {
  const digitToAdd = +this.textContent;
  const display = document.querySelector("#display");
  const displayText = display.querySelector(":last-child");
  const currentNum = +displayText.textContent;
  let newNum = "";
  // if display is only a zero, replace it
  if (currentNum != 0) {
    newNum += currentNum;
  }
  newNum += digitToAdd;
  displayText.textContent = newNum;
}

function operateOnDigits() {
  const operator = this;
  const display = document.querySelector("#display");
  const displayText = display.querySelector(":last-child");
  const savedText = display.querySelector(":first-child");
  const currentNum = +displayText.textContent;
  if (!savedNum) {
    savedNum = currentNum;
    savedOperator = operator;
  } else {
    const result = operate(savedNum, window[savedOperator.name], currentNum);
    savedNum = result;
    savedOperator = operator;
  }
  displayText.textContent = "0";
  savedText.textContent = (savedNum + savedOperator.textContent);
}


const numButtons = document.querySelectorAll(".numButton");
numButtons.forEach((numButton) => {
  numButton.addEventListener("click", addDigitToDisplay);
});

const operatorButtons = document.querySelectorAll(".operator");
operatorButtons.forEach((operator) => {
  operator.addEventListener("click", operateOnDigits);
});
