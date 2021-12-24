/* find_unique_number.js

There is an array with some numbers. All numbers are equal except for one.
Try to find it!

findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2
findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55
It’s guaranteed that array contains at least 3 numbers.

The tests contain some very huge arrays, so think about performance. */

"use strict";

function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] === arr[1] ? arr.pop() : arr.shift();
}

console.log(findUniq([ 0, 1, 0 ]) === 1);
console.log(findUniq([ 1, 1, 1, 2, 1, 1 ]) === 2);
console.log(findUniq([ 3, 10, 3, 3, 3 ]) === 10);
console.log(findUniq([ 0, 0, 0.55, 0, 0 ]) === 0.55);
