/* next_featured_number.js

Next Featured Number Higher than a Given Value

A featured number (something unique to this exercise) is an odd number that
is a multiple of 7, with all of its digits occurring exactly once each. For
example, 49 is a featured number, but 98 is not (it is not odd), 97 is not
(it is not a multiple of 7), and 133 is not (the digit 3 appears twice).

Write a function that takes an integer as an argument and returns the next
featured number greater than the integer. Issue an error message if there is
no next featured number.

NOTE: The largest possible featured number is 9876543201. */


/* PEDAC

Understand the Problem:
- input
  - integer
- output
  - integer or string (error message)
- rules
  - given a number, return the next greatest number that fulfills the following
    criteria:
    - must be an odd number
    - must be a multiple of 7
    - must only use each numerical character once, iow, no duplication of digits
  - given these rules, the largest possible 'feautred' number is 9876543201

- clarifying questions
  - how to handle negative numbers or zero
  - should 'error' be simple string return or more explicitly 'throw' an error

Examples/test cases:
- happy path
  - below
- edge cases(bounds/emptiness)
  - below

Data structure:
  - two conditional tests can be satisfied with numbers/math
  - discerning unique digit condition can be satisfied with list processing
    - convert number to string, split string, make unique (set or rebuild
      without duplicates), join, convert back to number, compare

Algorithm:
  - define for loop that will iterate from the given number + 1 to 9876543201
  - if the current number in the iteration is odd and multiple of 7 test for
    unique digits and return that number if uniq is true
  - if loop finishes without finding a number, return string 'error' specified

Code.

*/

"use strict";

function uniq(arr) {
  return [...new Set(arr)];
}

function onlyOneEach(num) {
  return Number(uniq(String(num).split('')).join('')) === num;
}

function findStartingOddSeven(num) {
  do {
    num += 1;
  } while (num % 2 === 0 || num % 7 !== 0);

  return num;
}

function featured (num) {
  const MAX_FEATURED = 9876543201;
  let featured = findStartingOddSeven(num);

  for (let counter = featured; counter <= MAX_FEATURED; counter += 14) {
    if (onlyOneEach(counter)) {
      return counter;
    }
  }

  return "There is no possible number that fulfills those requirements.";
}

console.log(featured(12));           // 21
console.log(featured(20));           // 21
console.log(featured(21));           // 35
console.log(featured(997));          // 1029
console.log(featured(1029));         // 1043
console.log(featured(999999));       // 1023547
console.log(featured(999999987));    // 1023456987
console.log(featured(9876543186));   // 9876543201
console.log(featured(9876543200));   // 9876543201
console.log(featured(9876543201));
// "There is no possible number that fulfills those requirements."

// console.log(uniq(['1', '0', '0', '5', '5', '9']));   // ['1', '0', '5', '9']
