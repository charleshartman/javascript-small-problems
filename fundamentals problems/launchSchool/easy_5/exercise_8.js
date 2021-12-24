/* exercise_8.js

Sequence Count

Create a function that takes two integers as arguments. The first argument is a
count, and the second is the starting number of a sequence that your function
will create. The function should return an array containing the same number of
elements as the count argument. The value of each element should be a multiple
of the starting number.

You may assume that the count argument will always be an integer greater than
or equal to 0. The starting number can be any integer. If the count is 0, the
function should return an empty array. */

"use strict";

function sequence(count, baseNum) {
  // const result = [];
  // if (count === 0) return result;
  // for (let i = 1; i <= count; i += 1) {
  //   result.push(i * baseNum);
  // }

  // return result;

  return Array(count).fill().map((_, i) => (i + 1) * baseNum);

}

console.log(sequence(5, 1));          // [1, 2, 3, 4, 5]
console.log(sequence(4, -7));         // [-7, -14, -21, -28]
console.log(sequence(3, 0));          // [0, 0, 0]
console.log(sequence(0, 1000000));    // []

// return Array(count).fill().map((_, i) => (i + 1) * baseNum);

/* 
problem: 
  - given two arguments,
    - an integer equal to or greater than 0 (count)
    - an integer (baseNum)
  - return an array made up of the results of multiplying 1..(count) iteratively
  - if count is 0, return empty area

algorithm:
  - declare (result) and assign [] to it
  - guard clause, if (count === 0 return result)
  - iterate from 1 to (count)
    - push each product of count * baseNum to (result)
  - return result
*/