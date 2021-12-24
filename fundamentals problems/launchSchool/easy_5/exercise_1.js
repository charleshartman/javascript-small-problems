/* exercise_1.js

Double Char Part 1

Write a function that takes a string, doubles every character in the string,
and returns the result as a new string. */

"use strict";

function repeater(str) {
  let result = '';
  for (let char of str) {
    result += (char + char);
  }

  return result;
}

console.log(repeater('Hello'));        // "HHeelllloo"
console.log(repeater('Good job!'));    // "GGoooodd  jjoobb!!"
console.log(repeater(''));             // ""

// algorithm:
//   - declare (doubled) variable and assign '' to it
//   - iterate through given string
//     - for each char in string, concat * 2 with (result)
//   - return result
