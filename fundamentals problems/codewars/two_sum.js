/* two_sum.js

Write a function that takes an array of numbers (integers for the tests) and a
target number. It should find two different items in the array that, when added
together, give the target value. The indices of these items should then be
returned in a tuple like so: (index1, index2).

For the purposes of this kata, some tests may have multiple answers; any valid
solutions will be accepted.

The input will always be valid (numbers will be an array of length 2 or
greater, and all of the items will be numbers; target will always be the sum
of two different items from that array). */

"use strict";

function twoSum(arr, total) {
  const resultTuple = [];
  for (let idx1 = 0; idx1 < arr.length; idx1 += 1) {
    for (let idx2 = 1; idx2 < arr.length; idx2 += 1) {
      if (arr[idx1] + arr[idx2] === total) {
        resultTuple.push(idx1, idx2);
        break;
      }
    }

    if (resultTuple.length === 2) {
      break;
    }
  }

  return resultTuple;
}

console.log(twoSum([1, 2, 3], 4));              // [0, 2]
console.log(twoSum([1234, 5678, 9012], 14690)); // [1 ,2]
console.log(twoSum([2,2,3], 4));                // [0, 1]

/* algorithm
  - declare (resultTuple) to []
  - iterate through given array (first_element, i)
    - iterate through given array (second element, j)
      - if first_element + second_element equals given sum
        - push both indices into (resultTuple)
        - break
  - return (resultTuple)
*/
