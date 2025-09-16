// 1. Create an Array
let arr = [10, 20, 30, 40];

// 2. Basic Operations
arr.push(50); // [10, 20, 30, 40, 50] → add at end
arr.pop(); // [10, 20, 30, 40] → remove from end

arr.unshift(5); // [5, 10, 20, 30, 40] → add at start
arr.shift(); // [10, 20, 30, 40] → remove from start

// 3. Access / Check
console.log(arr.length); // 4
console.log(arr.includes(20)); // true
console.log(arr.indexOf(30)); // 2

// 4. Join / Split
let fruits = ["apple", "banana", "cherry"];
console.log(fruits.join(", ")); // "apple, banana, cherry"

// 5. Slice & Splice
let nums = [1, 2, 3, 4, 5];

console.log(nums.slice(1, 3)); // [2, 3] → copy part (non-destructive)
nums.splice(2, 2, 99, 100); // removes 2 items at index 2, inserts 99,100
console.log(nums); // [1, 2, 99, 100, 5]

// 6. Transform Arrays
let numbers = [1, 2, 3, 4, 5];

let doubled = numbers.map((n) => n * 2); // [2, 4, 6, 8, 10]
let evens = numbers.filter((n) => n % 2 === 0); // [2, 4]
let sum = numbers.reduce((a, b) => a + b, 0); // 15

// 7. Find / Some / Every
console.log(numbers.find((n) => n > 3)); // 4 (first match)
console.log(numbers.some((n) => n > 4)); // true
console.log(numbers.every((n) => n > 0)); // true

// 8. Sort & Reverse
let arr2 = [40, 10, 30, 20];
console.log(arr2.sort()); // [10, 20, 30, 40] (lexicographic by default)
console.log(arr2.reverse()); // [40, 30, 20, 10]
// Correct numeric sort
console.log(arr2.sort((a, b) => a - b)); // [10, 20, 30, 40]

// 9. Flat & FlatMap (ES6+)
let nested = [1, [2, [3, 4]]];
console.log(nested.flat(2)); // [1, 2, 3, 4]

let words = ["hi", "bye"];
console.log(words.flatMap((w) => w.split(""))); // ["h","i","b","y","e"]

// 10. Spread & Destructuring
let nums1 = [1, 2];
let nums2 = [3, 4];
let merged = [...nums1, ...nums2]; // [1, 2, 3, 4]

let [first, second] = merged;
console.log(first, second); // 1 2
