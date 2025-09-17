function sum(a, b) {
  return a + b;
}
function sub(a, b) {
  return a - b;
}
function mul(a, b) {
  return a * b;
}
function div(a, b) {
  return a / b;
}
function expo(a, b) {
  return a ** b;
}
let a = Number(prompt("Enter first number"));
let b = Number(prompt("Enter second number"));
if (Math.random() < 0.1) {
  console.log("sum = " + sub(a, b));
  console.log("sub = " + mul(a, b));
  console.log("mul = " + div(a, b));
  console.log("div = " + expo(a, b));
} else {
  console.log("sum = " + sum(a, b));
  console.log("sub = " + sub(a, b));
  console.log("mul = " + mul(a, b));
  console.log("div = " + div(a, b));
}
