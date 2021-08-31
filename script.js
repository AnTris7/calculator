const nums = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const operators = document.querySelectorAll(".operator");
const equals = document.querySelector("#equal");
const dot = document.querySelector("#dot");
const clear = document.querySelector(".clear");
const deleteBtn = document.querySelector("#delete-btn");

let displayValue = "0";
let num1 = " ";
let num2 = " ";
let operator = " ";

display.innerText = "0";

nums.forEach(function (num) {
  num.addEventListener("click", function (e) {
    if (e.target.innerText === "." && display.innerText.includes(".")) {
      return;
    }

    if (operator === " ") {
      num1 += e.target.innerText;
      console.log(num1);
      display.innerText = num1;
    } else if (operator !== " " && num1 !== " " && num2 === " ") {
      num2 += e.target.innerText;
      console.log(num2);
      display.innerText = num2;
    } else {
      num2 += e.target.innerText;
      console.log(num2);
      display.innerText = num2;
    }
  });
});

operators.forEach(function (operatorBtn) {
  operatorBtn.addEventListener("click", function (e) {
    if (num1 !== " " && num2 !== " ") {
      calculate(num1, num2);
      num1 = displayValue;
      num2 = " ";
      operator = e.target.innerText;
    } else {
      operator = e.target.innerText;
      console.log(operator);
    }
  });
});

equals.addEventListener("click", calculate);

function calculate() {
  if (operator === "+") {
    add(num1, num2);
  } else if (operator === "-") {
    subtract(num1, num2);
  } else if (operator === "÷") {
    if (num2 === " 0") {
      display.innerText = "no way";
    } else {
      divide(num1, num2);
    }
  } else if (operator === "x") {
    multiply(num1, num2);
  } else if (num1 === " " && num2 === " ") {
    return;
  }
}

clear.addEventListener("click", function () {
  display.innerText = "0";
  num1 = " ";
  num2 = " ";
  operator = " ";
});

deleteBtn.addEventListener("click", function () {
  display.innerText = display.innerText.slice(0, -1);

  if (num1 !== " ") {
    num1 = " ";
  } else if (num2 !== " ") {
    num2 = " ";
  }

  if (operator !== " ") {
    operator = " ";
  }
});

function add(num1, num2) {
  displayValue = parseFloat(num1) + parseFloat(num2);
  displayValueLength = displayValue.toString().length;
  if (displayValueLength >= 18) {
    let roundedDisV = displayValue.toFixed(7);
    display.innerText = roundedDisV;
  } else {
    display.innerText = displayValue;
  }
}

function subtract(num1, num2) {
  displayValue = parseFloat(num1) - parseFloat(num2);
  displayValueLength = displayValue.toString().length;

  if (displayValueLength >= 18) {
    let roundedDisV = displayValue.toFixed(7);
    display.innerText = roundedDisV;
  } else {
    display.innerText = displayValue;
  }
}

function divide(num1, num2) {
  displayValue = parseFloat(num1) / parseFloat(num2);
  displayValueLength = displayValue.toString().length;

  if (displayValueLength >= 18) {
    let roundedDisV = displayValue.toFixed(7);
    display.innerText = roundedDisV;
  } else {
    display.innerText = displayValue;
  }
}

function multiply(num1, num2) {
  displayValue = parseFloat(num1) * parseFloat(num2);

  displayValueLength = displayValue.toString().length;
  if (displayValueLength >= 18) {
    let roundedDisV = displayValue.toFixed(7);
    display.innerText = roundedDisV;
  } else {
    display.innerText = displayValue;
  }
}
