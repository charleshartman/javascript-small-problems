/* exercise_6.js

Multiplicative Average

Write a function that takes an array of integers as input, multiplies all of the
integers together, divides the result by the number of entries in the array, and
returns the result as a string with the value rounded to three decimal places.

*/

"use strict";

function showMultiplicativeAverage(arr) {
  return (arr.reduce((product, num) => product * num) / arr.length).toFixed(3);
}

console.log(showMultiplicativeAverage([3, 5]));                   // "7.500"
console.log(showMultiplicativeAverage([2, 5, 7, 11, 13, 17]));    // "28361.667"
