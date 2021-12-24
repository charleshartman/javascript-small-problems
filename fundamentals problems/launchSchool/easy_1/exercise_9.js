/* exercise_9.js

Multiples of 3 and 5

Write a function that computes the sum of all numbers between 1 and some other
number, inclusive, that are multiples of 3 or 5. For instance, if the supplied
number is 20, the result should be 98 (3 + 5 + 6 + 9 + 10 + 12 + 15 + 18 + 20).

You may assume that the number passed in is an integer greater than 1. */

function multisum(num) {
  let result = 0;

  for (let i = 0; i <= num; i += 1) {
    if (i % 3 === 0 || i % 5 === 0) {
      result += i;
    }
  }

  return result;
}

console.log(multisum(3));       // 3
console.log(multisum(5));       // 8
console.log(multisum(10));      // 33
console.log(multisum(1000));    // 234168

/* Algorithm
  - declare a (result) variable
  - iterate from 1 to the given number
    - if it is a multiple of 3 or 5
      - add it to (result)
  - return result
*/

/* (book)

function isMultiple(number, divisor) {
  return number % divisor === 0;
}

function multisum(maxValue) {
  let sum = 0;

  for (let number = 1; number <= maxValue; number += 1) {
    if (isMultiple(number, 3) || isMultiple(number, 5)) {
      sum += number;
    }
  }

  return sum;
}

*/
