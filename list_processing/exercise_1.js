/* exercise_1.js

Sum of Digits

Write a function that takes one argument, a positive integer, and returns the
sum of its digits. Do this without using for, while, or do...while loops -
instead, use a series of method calls to perform the sum. */

function sum(int) {
  return String(int).split('').reduce((acc, num) => acc + Number(num), 0);
}

console.log(sum(23));           // 5
console.log(sum(496));          // 19
console.log(sum(123456789));    // 45
