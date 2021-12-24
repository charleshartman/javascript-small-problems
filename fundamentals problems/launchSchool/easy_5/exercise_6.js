/* exercise_6.js

Counting Up

Write a function that takes an integer argument and returns an array containing
all integers between 1 and the argument (inclusive), in ascending order.

You may assume that the argument will always be a positive integer. */

"use strict";

function sequence(int) {
  const resultArray = [];

  for (let counter = 1; counter <= int; counter += 1) {
    resultArray.push(counter);
  }

  return resultArray;
}

console.log(sequence(5));    // [1, 2, 3, 4, 5]
console.log(sequence(3));    // [1, 2, 3]
console.log(sequence(1));    // [1]

/* Student solutions

function sequence(number) {
  return [...Array(number).keys()].map(num => num + 1);
}

function sequence(number) {
  return Array(number).fill(0).map((_, idx) => idx + 1)
}

*/
