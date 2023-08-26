const add = (num1, num2) => {
  return num1 + num2;
};

const subtract = (num1, num2) => {
  return num1 - num2;
};

const multiply = (num1, num2) => {
  return num1 * num2;
};

const divide = (num1, num2) => {
  if (num2 === 0) return "Can't divide by 0";
  return num1 / num2;
};

const operation = (num1, num2, operator) => {
  if (operator === "+") return add(num1, num2);
  else if (operator === "-") return subtract(num1, num2);
  else if (operator === "*") return multiply(num1, num2);
  else return divide(num1, num2);
};

const screen = document.querySelector(".calc-screen");

const digits = document.querySelectorAll(".show-screen");
digits.forEach((item) => {
  item.addEventListener("click", (event) => {
    if (event.target.textContent === "." && screen.innerHTML.includes(".")) {
      return; // exit early and don't append the '.'
    }
    if (screen.innerHTML === "0" && event.target.textContent === ".") {
      screen.innerHTML += event.target.textContent;
    } else if (screen.innerHTML === "0") {
      screen.innerHTML = event.target.textContent; // replace "0" with clicked number
    } else {
      screen.innerHTML += event.target.textContent; // append the clicked number
    }
  });
});

const clear = document.getElementById("clear");
clear.addEventListener("click", () => {
  screen.innerHTML = "0";
});
