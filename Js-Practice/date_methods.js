// 1. Create a Date
let now = new Date(); // current date & time
let d1 = new Date("2025-09-16"); // from string
let d2 = new Date(2025, 8, 16, 10, 30); // year, month(0-based), day, hr, min

// 2. Get Date Parts
let date = new Date("2025-09-16T10:45:30");

console.log(date.getFullYear()); // 2025
console.log(date.getMonth()); // 8 (September, since Jan=0)
console.log(date.getDate()); // 16
console.log(date.getDay()); // 2 (0=Sunday, 1=Monday, ...)
console.log(date.getHours()); // 10
console.log(date.getMinutes()); // 45
console.log(date.getSeconds()); // 30
console.log(date.getMilliseconds()); // 0

// 3. Set Date Parts
date.setFullYear(2030);
date.setMonth(0); // January
date.setDate(1); // 1st
console.log(date.toDateString()); // "Tue Jan 01 2030"

// 4. Timestamps
console.log(Date.now()); // current timestamp
console.log(date.getTime()); // timestamp for given date

// 5. Formatting Dates
let today = new Date();

console.log(today.toDateString()); // "Tue Sep 16 2025"
console.log(today.toTimeString()); // "10:45:30 GMT+0000 ..."
console.log(today.toUTCString()); // "Tue, 16 Sep 2025 10:45:30 GMT"
console.log(today.toISOString()); // "2025-09-16T10:45:30.000Z" (standard)
console.log(today.toLocaleDateString()); // local format e.g. "9/16/2025"
console.log(today.toLocaleTimeString()); // local time e.g. "4:15:30 PM"

// 6. UTC Methods
// (Same as getFullYear() etc., but in UTC)

console.log(today.getUTCFullYear()); // 2025
console.log(today.getUTCHours()); // UTC hours

// 7. Math with Dates
let start = new Date("2025-09-01");
let end = new Date("2025-09-16");

let diffMs = end - start; // difference in ms
let diffDays = diffMs / (1000 * 60 * 60 * 24); // convert ms → days
console.log(diffDays); // 15
