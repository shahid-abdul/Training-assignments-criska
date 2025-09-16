// //Swapping of 2 numbers.
// let a = 10,
//   b = 20;
// console.log(a, b);
// a = a + b;
// b = a - b;
// a = a - b;
// console.log(a, b);
// // or using third variable
// let x = 1,
//   y = 2;
// console.log(x, y);
// let z;
// z = x;
// x = y;
// y = z;
// console.log(x, y);

// //Find even and add number.
// let a = 2;
// if (a % 2 === 0) {
//   console.log(a + " is even");
// } else {
//   console.log(a + " is odd");
// }
// console.log(a % 2 === 0 ? a + " is even" : a + " is odd");

// //Find the greatest number among 2 numbers.
// let a = 10,
//   b = 20;
// if (a > b) {
//   console.log(a + " is greater");
// } else {
//   console.log(b + " is greater");
// }
// console.log(a > b ? a + " is greater" : b + " is greater");

// //Find the greatest number among 3 numbers.
// let a = 2,
//   b = 5,
//   c = 10;
// console.log(a, b, c);
// if (a > b) {
//   if (a > c) {
//     console.log(a + " is greater");
//   } else {
//     console.log(c + " is greater");
//   }
// } else if (b > c) {
//   console.log(b + " is greater");
// } else {
//   console.log(c + " is greater");
// }
// //another method
// if (a > b && a > c) {
//   console.log(a + "is greater");
// } else if (b > a && b > c) {
//   console.log(b + " is greater");
// } else {
//   console.log(c + " is greater");
// }

// //Factorial of the numbers.
// let a = 5;
// console.log(a);
// let b = 1;
// for (a; a > 0; a--) {
//   b *= a;
// }
// console.log("Factorial is " + b);

//Power of given number.
// let base = 2,
//   power = 3;
// console.log(base ** power);
// //another method
// let a = Number(prompt("Enter a Base")),
//   b = Number(prompt("Enter Power"));
// console.log(a + " power " + b);
// console.log(a ** b);

// //Find the smallest number among 2 numbers.
// let a = 30,
//   b = 20;
// console.log(a, b);
// console.log(a < b ? a + " is smaller" : b + " is smaller");

// //Find the smallest number among 3 numbers.
// let a = 10,
//   b = 100,
//   c = 30;
// console.log(a, b);

// //Find the duplicate characters in the String
// //Find the unique characters in the string
// function unique_duplicate(str1) {
//   let str2 = "";
//   let duplicate = "";
//   for (let char of str1) {
//     if (!str2.includes(char)) {
//       str2 += char;
//     } else if (!duplicate.includes(char)) {
//       duplicate += char;
//     }
//   }

//   console.log(str2);
//   console.log(duplicate);
// }
// unique_duplicate("abdulshahid");

// //Is the given String being palindrome
// function polindrome(a) {
//   console.log(a);
//   let b = "";
//   for (let i = a.length - 1; i >= 0; i--) {
//     b += a[i];
//   }
//   if (a === b) {
//     console.log("is polindrome");
//   } else {
//     console.log("is not polindrome");
//   }
// }
// polindrome("amma");

// //Find even and add number in given range
// let a = Number(prompt("Enter the range"));
// let even = [];
// let odd = [];

// if (a <= 0) {
//   console.log("Enter a positive value greater than zero");
// } else {
//   for (let i = 1; i <= a; i++) {
//     if (i % 2 === 0) {
//       //   even += i;
//       even.push(i);
//     } else {
//       //   odd += i;
//       odd.push(i);
//     }
//   }
// }
// console.log(even);
// console.log(odd);

//Sort the given array
// const myArr = [2, 4, 1, 6, 9, 2, 1];
// let sortedArr = [];

// console.log(myArr);
// console.log(sortedArr);

// let currentEle;
// let concurentEle;

// const sortArray = (arr) => {
//   for (let i = 0; i <= arr.length; i++) {
//     currentEle = arr[i];
//     concurentEle = i < arr.length ? arr[i + 1] : arr[i - 1];

//     // console.log("i", i);
//     // console.log("currentEle", currentEle);
//     // console.log("concurentEle", concurentEle);

//     // if(currentEle > )

//     for (let j = 1; j < arr.length; j++) {
//       console.log("j", arr[j]);
//       if (arr[i] < arr[j]) {
//         let c = arr[i];
//         console.log(`Swapping c: ${c} wth arr -j: ${arr[j]} --- `, c, arr[j]);
//         arr[i] = arr[j];
//         arr[j] = c;
//       }
//     }
//     console.log("new");
//   }
//   //   console.log("Sorted arr", sortedArr);
//   console.log("myArr", myArr);
// };

// // sortArray(myArr);
// let arr = [2, 4, 2, 5, 4, 2, 1, 5, 6, 2, 9, 6, 8];

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length - 1; j++) {
//     if (arr[j] > arr[j + 1]) {
//       let temp = arr[j];
//       arr[j] = arr[j + 1];
//       arr[j + 1] = temp;
//     }
//   }
// }
// console.log(arr);

// // Find the highest element in given array
// let arr = [2, 4, 2, 5, 4, 2, 1, 5, 6, 2, 9, 6, 8];
// let max = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max) {
//     max = arr[i];
//   }
// }
// console.log(max);

// // Find the least element in given array
// let arr = [2, 4, 2, 5, 4, 2, 1, 5, 6, 2, 9, 6, 8];
// let min = arr[0];
// for (let i = 1; i < arr.length; i++) {
//   if (min > arr[i]) {
//     min = arr[i];
//   }
// }
// console.log(min);

// // Find the second highest element in the array.
// let arr = [2, 4, 2, 5, 4, 2, 1, 5, 6, 2, 9, 6, 8];
// let max1 = arr[0];
// let max2;
// for (let i = 1; i < arr.length; i++) {
//   if (arr[i] > max1) {
//     max2 = max1;
//     max1 = arr[i];
//   } else if (arr[i] > max2 && arr[i] !== max1) {
//     max2 = arr[i];
//   }
// }
// console.log(max2);

// // Add 2 arrays.
// let arr1 = [1, 2, 3, 4, 5];
// let arr2 = [6, 7, 8, 9, 10];
// // console.log(arr1 + arr2);
// for (let i = 0; i < arr2.length; i++) {
//   arr1.push(arr2[i]);
// }
// console.log(arr1);
