/* exercise_7.js

Multiply Lists

Write a function that takes two array arguments, each containing a list of
numbers, and returns a new array that contains the product of each pair of
numbers from the arguments that have the same index. You may assume that the
arguments contain the same number of elements. */

"use strict";

function multiplyList(arr1, arr2) {
  const products = [];
  for (let index = 0; index < arr1.length; index += 1) {
    products.push(arr1[index] * arr2[index]);
  }

  return products;
}

console.log(multiplyList([3, 5, 7], [9, 10, 11]));    // [27, 50, 77]

/* from another student's solution:

function multiplyList(arr1, arr2) {
  return arr1.map((num, idx) => num * arr2[idx]);
}

*/