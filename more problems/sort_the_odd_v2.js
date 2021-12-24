/* eslint-disable max-len */
/* sort_the_odd_v2.js

Task

You will be given an array of numbers. You have to sort the odd numbers in
ascending order while leaving the even numbers at their original positions.

Examples
[7, 1]  =>  [1, 7]
[5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
[9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]

*/

/* PEDAC

Understand the Problem:
  input
  - an array of numbers
  output
  - a new array in which the odd numbers are sorted and the even numbers remain
    in the same place (the same index and order)

- rules & definitions:
  explicitly stated
  - return a new array
  - odd numbers must be sorted ascending
  - even numbers should remain in the same (index) position within the new array
  - there may be duplicate numbers in the given array

  implicitly identified
  -

- clarifying questions & answers
  - confirm we will only have numbers
  - do we need to deal with empty arguments or wrong type arguments? assume NO
  - do we need to deal with an empty array input? return value? yes, []
  - do we need to deal with negative numbers? assume yes
  - do we need to deal with other kinds of numbers like floats, or NaN or
    Infinity/-Infinity, assume no

Examples/test cases:
  happy path(generic)
  - [7, 1]  =>  [1, 7]
  - [5, 8, 6, 3, 4]  =>  [3, 8, 6, 5, 4]
  - [9, 8, 7, 6, 5, 4, 3, 2, 1, 0]  =>  [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
  - [2, 4, 6] => [2, 4, 6]
  - [9, 1, 2, 1, 2] => [1, 1, 2, 9, 2]

  edge cases(boundaries/emptiness)
  - [] => []
  - [-1, 0, 1, 2, -3] => [-3, 0, -1, 2, 1]

{'1': 0, '3': 2}
[-3, 0, -1, 2, 1]

Mental model:
  - if a number is even, record its value and index position in an object
  - if a number is odd, filter to result array and SORT ASCENDING
  - insert the even numbers back into the result array at the correct index pos

Data structure:
  - object to store even numbers and position
  - result to store odd numbers, which we will then sort (mutating) and splice
    in evens with info from object

Algorithm:
  - declare (evens) to {}
  - iterate through given array
    - if value is even, add the index number as a key and the number as a value to (evens)
  - declare (result) to given arr filtered to odd numbers only and sorted ASC
  - iterate through Object.keys of (evens)
    - splice into (result) the property value at the property name (key) position
  - return result

Code.

*/

"use strict";

function sortOddOnly(arr) {
  let evens = {};

  arr.forEach((num, index) => {
    if (Math.abs(num) % 2 === 0) {
      evens[index] = num;
    }
  });

  let result = arr.filter((num) => Math.abs(num) % 2 === 1).sort((a, b) => a - b);

  Object.keys(evens).forEach((key) => result.splice(key, 0, evens[key]));

  return result;
}


console.log(sortOddOnly([7, 1]));                           // [1, 7]
console.log(sortOddOnly([5, 8, 6, 3, 4]));                  // [3, 8, 6, 5, 4]
console.log(sortOddOnly([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));   // [1, 8, 3, 6, 5, 4, 7, 2, 9, 0]
console.log(sortOddOnly([2, 4, 6]));                        // [2, 4, 6]
console.log(sortOddOnly([9, 1, 2, 1, 2]));                  // [1, 1, 2, 9, 2]
console.log(sortOddOnly([]));                               // []
console.log(sortOddOnly([-1, 0, 1, 2, -3]));                // [-3, 0, -1, 2, 1]
console.log(sortOddOnly([5, 3, 2, 8, 1, 4]));               // [1, 3, 2, 8, 5, 4]
console.log(sortOddOnly([5, 3, 1, 8, 0]));                  // [1, 3, 5, 8, 0]
console.log(sortOddOnly([10, 8, 2]));                       // [10, 8, 2]
console.log(sortOddOnly([5, 2, 3, 11, 12]));                // [3, 2, 5, 11, 12]

console.log(sortOddOnly([ 22, 49, -50, -20, -18, 14, -8, 9, 36, 0, 10, 30, -28 ]));
// [ 22, 9, -50, -20, -18, 14, -8, 49, 36, 0, 10, 30, -28 ]

console.log(sortOddOnly([5, -3, 2, 8, 1, 4]));              // [-3, 1, 2, 8, 5, 4]

