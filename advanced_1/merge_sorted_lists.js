/* eslint-disable id-length */
/* eslint-disable max-lines-per-function */
/* merge_sorted_lists.js

Merge Sorted Lists

Write a function that takes two sorted arrays as arguments and returns a new
array that contains all the elements from both input arrays in sorted order.

You may not provide any solution that requires you to sort the result array.
You must build the result array one element at a time in the proper order.

Your solution should not mutate the input arrays. */

/* PEDAC

Understand the Problem:
- input
  - two SORTED arrays
- output
  - a new array with all of the values from the given arrays merged and
    retaining sorted order
- rules
  - do not mutate the given arrays
  - build new array element by element in order, we may NOT sort the resultant
    array, it should be formed in order
  - duplicate values are possible and should be handled

- clarifying questions
  - may we use guard clause and simply return a copy of one array if other is
    empty?

Examples/test cases:
- happy path
  - provided below
  - [1, 2, 3], [4, 5, 6] // [1, 2, 3, 4, 5, 6]
- edge cases(bounds/emptiness)
  - [1, 2, 3], [1, 2, 3] // [1, 1, 2, 2, 3, 3]  // duplicate values
  - [2, 3], [1, 4, 5]    // [1, 2, 3, 4, 5]     // arr1 is shorter

Data structure:
  - arrays, element by element comparison
  - build new array, so result of each comparison gets pushed to (result)

Algorithm:
  - declare (result) to []
  - declare (counter1) to 0
  - declare (counter2) to 0
  - iterate through arr1
    - if current element of arr1 is less than current element arr2
      - push element to result and increment counter1 by 1
    - if current element of arr1 is equal to current element of arr2
      - push both elements to result and increment both counters by 1
    - otherwise arr2 must be less than arr1 so
      - push element from arr2 to result and increment counter2 by 1
  - return (result)

Code.

*/

function merge(arr1, arr2) {
  let result = [];
  let counter1 = 0;
  let counter2 = 0;
  if (arr2.length > arr1.length) {
    [arr1, arr2] = [arr2, arr1];
  }

  for (let i = 0; i < arr1.length + arr2.length;) {
    if (arr1[counter1] < arr2[counter2] || !arr2[counter2]) {
      result.push(arr1[counter1]);
      counter1 += 1;
      i += 1;
    } else if (arr1[counter1] === arr2[counter2]) {
      result.push(arr1[counter1], arr2[counter2]);
      counter1 += 1;
      counter2 += 1;
      i += 2;
    } else {
      result.push(arr2[counter2]);
      counter2 += 1;
      i += 1;
    }
  }

  return result;
}

console.log(merge([1, 5, 9], [2, 6, 8]));    // [1, 2, 5, 6, 8, 9]
console.log(merge([1, 1, 3], [2, 2]));       // [1, 1, 2, 2, 3]
console.log(merge([], [1, 4, 5]));           // [1, 4, 5]
console.log(merge([1, 4, 5], []));           // [1, 4, 5]
console.log(merge([1, 2, 3], [4, 5, 6]));    // [1, 2, 3, 4, 5, 6]
console.log(merge([1, 2, 3], [1, 2, 3]));    // [1, 1, 2, 2, 3, 3]
console.log(merge([2, 3], [1, 4, 5]));       // [1, 2, 3, 4, 5]


