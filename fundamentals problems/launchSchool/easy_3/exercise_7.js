/* exercise_7.js

Running Totals

Write a function that takes an array of numbers and returns an array with the
same number of elements, but with each element's value being the running total
from the original array. */

"use strict";

function runningTotal(arr) {
  let result = [];

  for (let index = 0, running = 0; index < arr.length; index += 1) {
    running += arr[index];
    result.push(running);
  }

  return result;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
