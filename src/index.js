import "./styles.css";
var outputArea = document.querySelector("#outAns");
var btnAdding = document.querySelector("#btnAdd");
var btnSubtract = document.querySelector("#btnSub");
var btnMultiply = document.querySelector("#btnMul");
var numberOne = document.querySelector("#nmbrOne");
var numberTwo = document.querySelector("#nmbrTwo");

btnAdding.addEventListener("click", () => {
  var numberOnefor1 = parseInt(numberOne.value);
  var numberTwofor1 = parseInt(numberTwo.value);
  var result1 = parseInt(numberOnefor1 + numberTwofor1);
  document.querySelector("#outAns").innerHTML =
    "Your Output is" + " " + result1;
});
btnSubtract.addEventListener("click", () => {
  var numberOnefor2 = parseInt(numberOne.value);
  var numberTwofor2 = parseInt(numberTwo.value);
  var result2 = parseInt(numberOnefor2 - numberTwofor2);
  document.querySelector("#outAns").innerHTML =
    "Your Output is" + " " + result2;
});
btnMultiply.addEventListener("click", () => {
  var numberOnefor = parseInt(numberOne.value);
  var numberTwofor = parseInt(numberTwo.value);
  var result3 = parseInt(numberOnefor * numberTwofor);
  document.querySelector("#outAns").innerHTML =
    "Your Output is" + " " + result3;
});
