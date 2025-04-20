let calculation = localStorage.getItem("result")
  ? JSON.parse(localStorage.getItem("result")).toString()
  : "";
document.querySelector(".js-result").innerHTML = calculation;

function calculate(value) {
  calculation += value;
  document.querySelector(".js-result").innerHTML = calculation;
  console.log(calculation);
}

function total() {
  try {
    let result = eval(calculation);
    localStorage.setItem("result", JSON.stringify(result));
    document.querySelector(".js-result").innerHTML = result;
    calculation = result.toString();
  } catch (error) {
    document.querySelector(".js-result").innerHTML = "Error";
  }
}

function reset() {
  calculation = "";
  localStorage.removeItem("result");
  document.querySelector(".js-result").innerHTML = "";
}
