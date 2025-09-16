let str = "Hello";

// 1. Length
console.log(str.length); // 5

// 2. Access characters
console.log(str[0]); // "H"
console.log(str.charAt(1)); // "e"

// 3. Case Conversion
console.log(str.toUpperCase()); // "HELLO"
console.log(str.toLowerCase()); // "hello"

let text = "JavaScript is awesome";

// 4. Search / Check
console.log(text.includes("Script")); // true
console.log(text.startsWith("Java")); // true
console.log(text.endsWith("awesome")); // true
console.log(text.indexOf("is")); // 11 (position)
console.log(text.lastIndexOf("a")); // 3

// 5. Extract
console.log(text.slice(0, 10)); // "JavaScript"
console.log(text.substring(0, 4)); // "Java"
// console.log(text.substr(0, 4)); // "Java" (old, not recommended)

// 6. Modify
console.log("   hello   ".trim()); // "hello"
console.log("hi".padStart(5, "*")); // "***hi"
console.log("hi".padEnd(5, "-")); // "hi---"
console.log("Hello".repeat(3)); // "HelloHelloHello"

// 7. Replace
console.log(text.replace("JavaScript", "JS")); // "JS is awesome"
console.log(text.replaceAll("a", "*")); // "J*v*Script is *wesome"

// 8. Split & Join
let parts = text.split(" "); // ["JavaScript", "is", "awesome"]
console.log(parts.join("-")); // "JavaScript-is-awesome"

// 9. Template Literals (ES6)
let name = "John";
console.log(`Hello, ${name}!`); // "Hello, John!"
