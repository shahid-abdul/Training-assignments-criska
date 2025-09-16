// 1. Check / Convert
console.log(Number("42")); // 42 (string → number)
console.log(Number("3.14")); // 3.14
console.log(Number("abc")); // NaN

// 2. Parse (from strings)
console.log(parseInt("42px")); // 42
console.log(parseFloat("3.14")); // 3.14

// 3. Check NaN or Finite
console.log(Number.isNaN(NaN)); // true
console.log(Number.isFinite(100)); // true
console.log(Number.isFinite(Infinity)); // false

// 4. Check Integer
console.log(Number.isInteger(10)); // true
console.log(Number.isInteger(3.14)); // false

// 5. Formatting Numbers
let num = 3.14159;

console.log(num.toFixed(2)); // "3.14"  (2 decimal places)
console.log(num.toPrecision(3)); // "3.14"  (3 significant digits)
console.log(num.toExponential(2)); // "3.14e+0" (scientific notation)

// 6. Safe Integers
console.log(Number.MAX_SAFE_INTEGER); // 9007199254740991
console.log(Number.MIN_SAFE_INTEGER); // -9007199254740991

// 7. Infinity and NaN
console.log(Number.POSITIVE_INFINITY); // Infinity
console.log(Number.NEGATIVE_INFINITY); // -Infinity
console.log(Number.NaN); // NaN

// 8. Value Conversion
let x = 255;

console.log(x.toString()); // "255"
console.log(x.toString(2)); // "11111111" (binary)
console.log(x.toString(16)); // "ff" (hexadecimal)
