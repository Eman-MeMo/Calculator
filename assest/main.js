const screen = document.querySelector(".screen");
const buttons = document.querySelectorAll("button");
const operators = ["%", "/", "+", "-", "*", "="];
let result = "";

function calculate(val) {
  if (val === "AC") {
    result = "";
  } else if (val === "DEL") {
    result = result.toString().slice(0, -1);
  } else if (val === "=" && result !== "") {
    result = eval(result.replace("%", "/100"));
  } else {
    if (result === "" && operators.includes(val)) return;
    else result += val;
  }
  screen.value = result;
}

buttons.forEach((btn) => {
  btn.addEventListener("click", (e) => calculate(e.target.value));
});
