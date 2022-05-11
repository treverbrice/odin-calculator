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
  const currentNum = +display.textContent;
  let newNum = "";
  // if display is only a zero, replace it
  if (currentNum != 0) {
    newNum += currentNum;
  }
  newNum += digitToAdd;
  display.textContent = newNum;
}

const numButtons = document.querySelectorAll(".numButton");
numButtons.forEach((numButton) => {
  numButton.addEventListener("click", addDigitToDisplay);
});
