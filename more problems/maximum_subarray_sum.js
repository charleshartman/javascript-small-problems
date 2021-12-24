/* eslint-disable id-length */
/* maximum_subarray_sum.js

The maximum sum subarray problem consists in finding the maximum sum of a
contiguous subsequence in an array or list of integers:

maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4])
// should be 6: [4, -1, 2, 1]

Easy case is when the list is made up of only positive numbers and the maximum
sum is the sum of the whole array. If the list is made up of only negative
numbers, return 0 instead.

Empty list is considered to have zero greatest sum. Note that the empty list or
array is also a valid sublist/subarray. */

/* PEDAC

Understand the Problem:
- input
  - an array of numbers
    - may include negative numbers
    - may be empty
- output
  - number, sum of the longest contiguous string of numbers within the array

- rules
  - if the array is all positive numbers (iow >= 0), we can sum entire array
  - if the array is all negative numbers, we can return 0
  - empty array returns 0
  - otherwise, find the contiguous set of numbers that sum to the greatest num

- clarifying questions
  - can a single element be considered a contiguous subsequence?
  - do we need to deal with invalid type or empty input

Examples/test cases:
- happy path
  - maxSequence([1, 2, 3, 4, 5]) === 15
  - maxSequence([-1, -2, -3, -4, -5]) === 0
  - maxSequence([]) === 0
  - maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6
  - maxSequence([4]) === 4
  - maxSequence([-1]) === 0

- edge cases(bounds/emptiness)
  - see above, covered in happy path

Data structure:
  - store greatest sum in (result)
  - use nest for loop to test all (sub)sequences

Algorithm:
  - declare (result) to 0

  - (for) loop starting at index 0 while < arr. length
    - inner loop starting at index 0 while < arr.length
      - if sum (reduce) of current sequence (slice from i, j + 1) is greater
        than result
      - then reassign result to sum

  - return result

  - subprocess (sumArray)
    - take given array and return sum of all elements, if arr is empty return 0
Code.

*/

"use strict";

function sumArray(arr) {
  return arr.length === 0 ? 0 : arr.reduce((sum, num) => sum + num);
}

function maxSequence(arr) {
  let result = 0;
  for (let i = 0; i < arr.length; i++) {
    for (let j = i; j < arr.length; j++) {
      let sequenceSum = sumArray((arr.slice(i, j + 1)));
      if (sequenceSum > result) {
        result = sequenceSum;
      }
    }
  }

  return result;
}

// console.log(sumArray([1, 2, 3]) === 6);
console.log(maxSequence([1, 2, 3, 4, 5]) === 15);
console.log(maxSequence([-1, -2, -3, -4, -5]) === 0);
console.log(maxSequence([]) === 0);
console.log(maxSequence([-2, 1, -3, 4, -1, 2, 1, -5, 4]) === 6);
console.log(maxSequence([4]) === 4);
console.log(maxSequence([-1]) === 0);
console.log(maxSequence([ -13, 31 ]) === 31);