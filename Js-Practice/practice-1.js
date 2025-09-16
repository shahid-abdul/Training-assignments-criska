// let age = 20;
// age = 21;
// console.log("Age:", age);

// const pi = 3.1416;
// console.log("PI:", pi);

// var name = "Abdul";
// console.log("Name:", name);

console.log();
// // String
// let userName = "John";
// console.log("String:", userName);

// // Number
// let score = 95.5;
// console.log("Number:", score);

// // Boolean
// let isLoggedIn = true;
// console.log("Boolean:", isLoggedIn);

// // Null
// let emptyValue = null;
// console.log("Null:", emptyValue);

// // Undefined
// let notAssigned;
// console.log("Undefined:", notAssigned);

// // Object
// let person = { name: "Alice", age: 25 };
// console.log("Object:", person);

// // Array
// let colors = ["red", "green", "blue"];
// console.log("Array:", colors);

// // Function (also a type)
// let greet = function() {
//   console.log("Hello from function!");
// };
// greet(); // call the function

console.log();
// // Arithmetic Operators
// let a = 10,
//   b = 3;
// console.log(a + b); // 13 (addition)
// console.log(a - b); // 7 (subtraction)
// console.log(a * b); // 30 (multiplication)
// console.log(a / b); // 3.33 (division)
// console.log(a % b); // 1 (modulus - remainder)
// console.log(a ** b); // 1000 (exponentiation)

// // Comparison Operators
// console.log(a > b); // true
// console.log(a < b); // false
// console.log(a == "10"); // true (loose equality, only value checked)
// console.log(a === "10"); // false (strict equality, type checked)

// // Logical Operators
// let x = true,
//   y = false;
// console.log(x && y); // false (AND)
// console.log(x || y); // true  (OR)
// console.log(!x); // false (NOT)

// // Assignment Operators
// let num = 5;
// num += 2; // same as num = num + 2 → 7

console.log();
// function greetUser(name) {
//   console.log("Hello, " + name + "!");
// }

// greetUser("John");

console.log();
// let normalNum = 9007199254740991n; // max safe integer
// console.log(normalNum + 1n);
// console.log(normalNum + 2n);
// console.log(normalNum + 3n);
// console.log(normalNum + 4n);
// console.log(normalNum + 5n);
// console.log(normalNum + 6n);
// console.log(normalNum + 7n);

// let user = {
//   name: "Alice",
// };

// Developer A adds an ID using Symbol
// let id1 = Symbol("id");
// user[id1] = 101;

// // Developer B also adds an ID using Symbol
// let id2 = Symbol("id");
// user[id2] = "XYZ123";

// console.log(user); // { name: "Alice" }
// console.log(user[id1]); // 101
// console.log(user[id2]); // "XYZ123"

function greet() {
  console.log("Hello!");
}
greet(); // Output: Hello!

const greet = function () {
  console.log("Hello!");
};
greet(); // Output: Hello!

const greet = () => {
  console.log("Hello!");
};
greet(); // Output: Hello!

setTimeout(function () {
  console.log("Runs after 2 seconds");
}, 2000);
