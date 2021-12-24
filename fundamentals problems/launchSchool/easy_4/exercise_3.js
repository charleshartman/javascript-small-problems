/* exercise_3.js

Halvsies

Write a function that takes an array as an argument and returns an array that
contains two elements, each of which is an array. Put the first half of the
original array elements in the first element of the return value, and put the
second half in the second element. If the original array contains an odd number
of elements, place the middle element in the first half array. */

"use strict";

function halvsies(arr) {
  const middle = Math.ceil(arr.length / 2);
  const twoHalves = [[], []];

  for (let index = 0; index < arr.length; index += 1) {
    if (index < middle) {
      twoHalves[0].push(arr[index]);
    } else {
      twoHalves[1].push(arr[index]);
    }
  }

  return twoHalves;
}

console.log(halvsies([1, 2, 3, 4]));       // [[1, 2], [3, 4]]
console.log(halvsies([1, 5, 2, 4, 3]));    // [[1, 5, 2], [4, 3]]
console.log(halvsies([5]));                // [[5], []]
console.log(halvsies([]));                 // [[], []]

/* book better

function halvsies(array) {
  const half = Math.ceil(array.length / 2);
  const firstHalf = array.slice(0, half);
  const secondHalf = array.slice(half);

  return [firstHalf, secondHalf];
}

*/