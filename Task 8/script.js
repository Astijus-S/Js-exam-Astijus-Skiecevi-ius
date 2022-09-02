/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite konstruktoriaus funkciją "Calculator" (naudokite ES5), kuri gebės sukurti objektus su 4 metodais:
sum(a, b) - priima du skaičius ir grąžina jų sumą.
subtraction(a, b) - priima du skaičius ir grąžina jų skirtumą.
multiplication(a, b) - priima du skaičius ir grąžina jų daugybos rezultatą;
division(a, b) - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

function Calculator(a, b, operation) {
  this.a = a;
  this.b = b;
  this.operation = operation;
}
let a = 9;
let b = 22;
let operation = "multiplication";

Calculator.prototype.result = function () {
  switch (operation) {
    case "sum":
      res = this.a + this.b;
      break;
    case "subtraction":
      res = this.a - this.b;
      break;
    case "multiplication":
      res = this.a * this.b;
      break;
    case "division":
      res = this.a / this.b;
      break;
  }
  return res;
};

let calculator = new Calculator(a, b, operation);

console.log(calculator.result());
