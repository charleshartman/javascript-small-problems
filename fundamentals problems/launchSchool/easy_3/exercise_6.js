/* exercise_6.js

Palindromic Number

Write a function that returns true if its integer argument is palindromic, or
false otherwise. A palindromic number reads the same forwards and backwards. */

"use strict";

function isPalindromicNumber(num) {
  return String(num) === String(num).split('').reverse().join('');
}

console.log(isPalindromicNumber(34543));        // true
console.log(isPalindromicNumber(123210));       // false
console.log(isPalindromicNumber(22));           // true
console.log(isPalindromicNumber(5));            // true
