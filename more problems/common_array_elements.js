/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */
/* common_array_elements.js

Given three arrays of integers, return the sum of elements that are common
in all three arrays.

For example:

common([1,2,3],[5,3,2],[7,3,2]) = 5 because 2 & 3 are common in all 3 arrays
common([1,2,2,3],[5,3,2,2],[7,3,2,2]) = 7 because 2,2 & 3 are common
in the 3 arrays

*/

/* PEDAC

Understand the Problem:
- input
  - 3 arrays of numbers
- output
  - number that is the sum of all the common numbers in all the input arrays
- rules(explicit & implicit)
  - arrays could be empty or could contain numbers
  - assume that the arrays will only contain numbers
- clarifying questions

Examples/test cases:
- happy path(generic)
  - [1,2,3],[5,3,2],[7,3,2] -> 5 (2 + 3)
  - [1,2,2,3],[5,3,2,2],[7,3,2,2] -> 7 ( 2 + 2 + 3)
  - [1,2,2,3],[5,3,2,2],[7,3,2] -> 5 ( 2 + 3 )
- edge cases(bounds/emptiness)
  - [1, 2, 3], [3, 5, 6], [3, 7, 8] -> 3 (3)
  - [1, 2, 3], [4, 5, 6], [7, 8, 9] -> 0
  - [], [], [1, 2, 3] -> 0
  - [5], [5], [5] -> 15 (5)
  - [], [], [] -> 0
  - [-1, -2, -3], [-1, -2, -3], [-1, -2, -3] -> -18

Mental Model:
  - return the sum of all elements that are common to all three arrays.
    duplicate elements must have the same number of occurences across all three
    arrays to be added to the result.

Data structure:
  - use an array to store common elements
  - return a number that is the sum of those elements
  - use object(s) to store the number of occurences of each element in each
    array, then add element * lowest number of occurences for each common
    element to result array

Algorithm:
  - create a nested array from the arrays
  - declare a variable to keep track of the sum, starting at 0
  - iterate over the nested array, transforming each array to an object => array
    of objects
    - numbers as keys and counts as values
      - how: if the number is aleady in the object keys, add to count
        - convert number to string
      - otherwise create new key/value pairs for all the numbers in the array

  - iterate over the keys in one of the array objects (first array object)
  - compare the values in each of the array objects for that given key
  - check that comparison between the three values at that key for equality
    - if the object[key] is truthy in all objects, then key (as a number) * min
      value is added to the sum
    - otherwise don't add it to the sum
  - return sum
// [1,2,2,3],[5,3,2,2],[7,3,2] -> 7 (2 + 2 + 3)


[1, 2, 3]
[ {1: 1, 2: 2, 3: 1}, {5: 1, 3: 1, 2: 2}, {7: 1, 3: 1, 2: 2} ]
object2[currentKey] && object3[currentKey]
*/

// const foo = () => { 'foo' };

"use strict";

function common(...arrays) {
  let sum = 0;
  let array = [];

  arrays.forEach(subarray => {
    let obj = {};
    subarray.forEach(number => {
      if (obj[number]) {
        obj[number] += 1;
      } else {
        obj[number] = 1;
      }
    });
    array.push(obj);
  });

  Object.keys(array[0]).forEach(key => {
    if (array[1][key] && array[2][key]) {
      sum += Number(key) * Math.min(array[0][key], array[1][key], array[2][key]);
    }
  });

  return sum;
}

console.log(common([1,2,3],[5,3,2],[7,3,2]));         // 5
console.log(common([1,2,2,3],[5,3,2,2],[7,3,2,2]));   // 7
console.log(common([1, 2, 3], [3, 5, 6], [3, 7, 8])); // 3
console.log(common([1, 2, 3], [4, 5, 6], [7, 8, 9])); // 0
console.log(common([], [], [1, 2, 3]));               // 0
console.log(common([5], [5], [5]));                   // 5
console.log(common([], [], []));                      // 0
console.log(common([-1, -2, -3], [-1, -2, -3], [-1, -2, -3])); // -6

console.log(common([1,2,3],[5,3,2],[7,3,2]) === 5);
console.log(common([1,2,2,3],[5,3,2,2],[7,3,2,2]) === 7);

//my tests
console.log(common([1], [1, 2], [1, 2, 3]) === 1);
console.log(common([56, 21, 1, 17, 30], [56, 21, 99], [21, 17, 30, 1]) === 21);
console.log(common([], [], []));              // 0
console.log(common([1, 2, 3], [2], []));      // 0
