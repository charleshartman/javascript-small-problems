/* eslint-disable id-length */
/* sum_of_pairs.js

Sum of Pairs

Given a list of integers and a single sum value, return the first two values
(parse from the left please) in order of appearance that add up to form the sum.

sumPairs([11, 3, 7, 5],         10)
#              ^--^      3 + 7 = 10
== [3, 7]

sumPairs([4, 3, 2, 3, 4],         6)
#          ^-----^         4 + 2 = 6, indices: 0, 2 *
#             ^-----^      3 + 3 = 6, indices: 1, 3
#                ^-----^   2 + 4 = 6, indices: 2, 4
#  * entire pair is earlier, and therefore is the correct answer
== [4, 2]

sumPairs([0, 0, -2, 3], 2)
#  there are no pairs of values that can be added to produce 2.
== None/nil/undefined (Based on the language)

sumPairs([10, 5, 2, 3, 7, 5],         10)
#              ^-----------^   5 + 5 = 10, indices: 1, 5
#                    ^--^      3 + 7 = 10, indices: 3, 4 *
#  * entire pair is earlier, and therefore is the correct answer
== [3, 7]

Negative numbers and duplicate numbers can and will appear.

NOTE: There will also be lists tested of lengths upwards of 10,000,000 elements.
Be sure your code doesn't time out. */


/* PEDAC

Understand the Problem:
- input
  - array of numbers, including negative and duplicates
  - a number (sum value)
- output
  - a two element array representing the values of the 'earliest' pair
- rules(explicit & implicit)
  - explicit
    - list of integers
     - if we can't find at least one pair of integers in the list that add up
      to the sum, then return undefined
     - we can expect any negative or positive integers (including 0) as elements
       in the array or as the provided sum
  - implicit
    - input array can be of any length, including empty
    - 'earliest' pair
      if a2 < b2 => a is the earlier pair
      a1 a2 b1 b2 => a
      a1 b1 a2 b2 => a
      b1 a1 a2 b2 => a

      b1 a1 b2 a2 => b
      b1 b2 a1 a2 => b

- clarifying questions
  - can sum value number be negative or zero?
  - do we need to deal with empty or otherwise invalid (type) input?

Examples/test cases:
- happy path(generic)
  - sumPairs([11, 3, 7, 5], 10)  // [3, 7]
  - sumPairs([4, 3, 2, 3, 4], 6) // [4, 2]
  - sumPairs([0, 0, -2, 3], 2)   // undefined
  - sumPairs([10, 5, 2, 3, 7, 5], 10) [3, 7]

- edge cases(bounds/emptiness)
  - sumPairs([5], 5) // undefined
  - sumPairs([], 0)  // undefined
  - sumPairs([-3, 10], 7) // [-3, 10]
  - sumPairs([0, 0, -5, 5], 0) // [0, 0]

Mental Model:
  - return the earliest pair, iow the earliest pair is identified by the pair
    with the earliest second element index. If there are no pairs, return
    undefined.

Data structure:
  - array of sub-arrays representing the index values of each valid pair

Algorithm:
  - declare a pairs array
  - find all the pairs
    - check if the current pair adds up to the target value
    - if it does, push to the pairs array as an array of two elements
      (idx1, idx2)
  - find the pair with the earliest second value
    - return undefined if the pairs array is empty
    - sort the nested array of pairs by the second element ascending
  - then return that pair
    - use the indicies in the first element of the sorted pairs array to
      retrieve the elements in the original array
    - return those elements in an array

Code.

*/

// function sumPairs(arr, sum) {
//   let pairs = [];
//   for (let i = 0; i < arr.length - 1; i += 1){
//     for (let j = i + 1; j < arr.length; j += 1) {
//       if (arr[i] + arr[j] === sum) pairs.push([i, j]);
//     }
//   }
//   if (pairs.length === 0) return undefined;
//   pairs.sort((arr1, arr2) => arr1[1] - arr2[1]);
//   return [arr[pairs[0][0]], arr[pairs[0][1]]];
// }

"use strict";

function sumPairs(arr, sum) {
  let counterparts = {};

  for (let i = 0; i < arr.length; i++) {
    let offset = sum - arr[i];
    if (counterparts[offset]) {
      return [offset, arr[i]];
    } else {
      counterparts[arr[i]] = true;
    }
  }

  return undefined;
}

console.log(sumPairs([11, 3, 7, 5], 10));        // [3, 7]
console.log(sumPairs([4, 3, 2, 3, 4], 6));       // [4, 2]
console.log(sumPairs([0, 0, -2, 3], 2));         // undefined
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));  // [3, 7]

console.log(sumPairs([5], 5));                   // undefined
console.log(sumPairs([], 0));                    // undefined
console.log(sumPairs([-3, 10], 7));              // [-3, 10]
console.log(sumPairs([0, 0, -5, 5], 0));         // [0, 0]

console.log(sumPairs([1, 4, 8, 7, 3, 15], 8));    // [1, 7], "Basic: [1, 4, 8, 7, 3, 15] should return [1, 7] for sum = 8");
console.log(sumPairs([1, -2, 3, 0, -6, 1], -6));  // [0, -6], "Negatives: [1, -2, 3, 0, -6, 1] should return [0, -6] for sum = -6");
console.log(sumPairs([20, -13, 40], -7));         // undefined, "No Match: [20, -13, 40] should return undefined for sum = -7");
console.log(sumPairs([1, 2, 3, 4, 1, 0], 2));     // [1, 1], "First Match From Left: [1, 2, 3, 4, 1, 0] should return [1, 1] for sum = 2");
console.log(sumPairs([10, 5, 2, 3, 7, 5], 10));   // [3, 7], "First Match From Left REDUX!: [10, 5, 2, 3, 7, 5] should return [3, 7] for sum = 10");
console.log(sumPairs([4, -2, 3, 3, 4], 8));       // [4, 4], "Duplicates: [4, -2, 3, 3, 4] should return [4, 4] for sum = 8");
console.log(sumPairs([0, 2, 0], 0));              // [0, 0], "Zeroes: [0, 2, 0] should return [0, 0] for sum = 0");
console.log(sumPairs([5, 9, 13, -3], 10));        // [13, -3], "Subtraction: [5, 9, 13, -3] should return [13, -3] for sum = 10");
