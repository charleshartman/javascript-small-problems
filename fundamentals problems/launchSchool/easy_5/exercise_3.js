/* exercise_6.js

Reverse Number

Write a function that takes a positive integer as an argument and returns
that number with its digits reversed. */

"use strict";

function reverseNumber(num) {
  return Number(String(num).split('').reverse().join(''));
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1

/* algorithm:
  - declare (reversed) and assign given argument converted to string, split,
    and reversed
  - iterate through (reversed)
    - while the first element in the array is '0'
      - shift to remove it
  - return (reversed) joined and converted to number
*/