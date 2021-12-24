/* eslint-disable max-len */
/* sort_the_odd.js

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
- input
  - an array of numbers
- output
  - a NEW array with the odd numbers of the given array sorted in ascending
    order and the even
    numbers in the same index position as the original array
- rules
  - even numbers must stay in their exact index position
  - odd numbers should be sorted in ascending order
  - do not mutate given array

- clarifying questions
  - will numbers in the given array always by > 0?

Examples/test cases:
- happy path
  - [5, 2, 3, 11, 12 ] => [3, 2, 5, 11, 12]

- edge cases(bounds/emptiness)
  - [] => []
  - [10, 8, 2] => [10, 8, 2]

Data structure:
  - object to hold even numbers and position
  - new array to hold sorted odds and spliced in evens

Algorithm:
  - declare (evens) and iterate through given arr, if num is even, add it and
    it's index number
    to evens
  - declare oddSort and assign given arr filtered to odd numbers, and sorted
  - iterate through keys of (evens) and splice value of each key into (oddSort)
    at the key
    converted to number, index position
  - return (oddSort)

Code.

*/

"use strict";

function sortArray(arr) {
  let evens = {};
  arr.forEach((num, idx) => {
    if (num % 2 === 0) {
      evens[idx] = num;
    }
  });

  let oddSort = arr.filter((num) => Math.abs(num % 2) === 1).sort((a, b) => a - b);

  Object.keys(evens).forEach((key) => {
    oddSort.splice(Number(key), 0, evens[key]);
  });

  return oddSort;
}

console.log(sortArray([5, 3, 2, 8, 1, 4]));     // [1, 3, 2, 8, 5, 4]
console.log(sortArray([5, 3, 1, 8, 0]));        // [1, 3, 5, 8, 0]
console.log(sortArray([]));                     // []

console.log(sortArray([10, 8, 2]));             // [10, 8, 2]
console.log(sortArray([5, 2, 3, 11, 12]));     // [3, 2, 5, 11, 12]
console.log(sortArray([ 22, 49, -50, -20, -18, 14, -8, 9, 36, 0, 10, 30, -28 ]));
// [ 22, 9, -50, -20, -18, 14, -8, 49, 36, 0, 10, 30, -28 ]

console.log(sortArray([5, -3, 2, 8, 1, 4]));     // [-3, 1, 2, 8, 5, 4]

/* clever codewars
function sortArray(array) {
  const odd = array.filter((x) => x % 2).sort((a,b) => a - b);
  return array.map((x) => x % 2 ? odd.shift() : x);
}

BUT (CW comment):
Time complexity here!!
If you do odd.shift(), your time complexity would be [O(n)] there;
If rather you take the list and sort it reversed .sort((a,b) => b - a),
you would now be able to .pop() with constant time [O(1)].

The total time complexity of your algorithm is [O(n^2)] (as you have a map [O(n)]
which in the worst case is running the odd.shift() method with [O(n)] as well).

If you do that little change your algorithm improves to [O(n)] as .pop() will be
constant [O(1)]

*/