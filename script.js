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

const numButtons = document.querySelectorAll(".numButton");
numButtons.forEach((numButton) => {
  numButton.addEventListener("click", addDigitToDisplay);
});
