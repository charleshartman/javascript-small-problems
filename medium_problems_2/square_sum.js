/* square_sum.js

Sum Square - Square Sum

Write a function that computes the difference between the square of the sum
of the first n positive integers and the sum of the squares of the first n
positive integers. */

/* PEDAC

Understand the Problem:
- input
  - integer
- output
  - integer
- rules
  - sum the numbers from 1 to the given number and square that total
  - square each number from 1 to the given number and sum that group of results
  - return the difference between the former and the latter

- clarifying questions
  - will input always be a positive integer?

Examples/test cases:
- happy path
  - below
- edge cases(bounds/emptiness)
  - negative or zero input, or empty input

Data structure:
  - numbers OR
  - perhaps build intermediate array
  - iterate in both cases, assign returns to variables, substract
    second from first

Algorithm:
  - declare (sumSquared) and (squaresSum)
  - iterate from 1 to given num, add counter each iteration then return sum
  - iterate from 1 to given num, square each counter value then sum all of them
  - return sumSquared - squaresSum

Code.

*/

"use strict";

function sumSquareDifference(num) {
  let sumSquared = [];
  let squaresSum = [];

  for (let count = 1; count <= num; count++) {
    sumSquared.push(count);
    squaresSum.push(count ** 2);
  }

  return ((sumSquared.reduce((acc, num) => acc + num)) ** 2)
    - (squaresSum.reduce((acc, num) => acc + num));
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150
