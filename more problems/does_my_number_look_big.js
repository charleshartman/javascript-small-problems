/* does_my_number_look_big.js

A Narcissistic Number is a positive number which is the sum of its own digits,
each raised to the power of the number of digits in a given base. In this Kata,
we will restrict ourselves to decimal (base 10).

For example, take 153 (3 digits), which is narcisstic:
  1^3 + 5^3 + 3^3 = 1 + 125 + 27 = 153
and 1652 (4 digits), which isn't:
  1^4 + 6^4 + 5^4 + 2^4 = 1 + 1296 + 625 + 16 = 1938

The Challenge:
Your code must return true or false depending upon whether the given number
is a Narcissistic number in base 10.

Error checking for text strings or other invalid inputs is not required,
only valid positive non-zero integers will be passed into the function. */

/* PEDAC

Understand the Problem:
- input
  - positive, non-zero integers ONLY
- output
  - boolean
- rules
  - power = number of digits in given number
  - sum each digit to the power of (power)
  - if sum is the same as the given num, return true
  - else return false

- clarifying questions
  -

Examples/test cases:
- happy path
  - see below
- edge cases(bounds/emptiness)
  - rules clarify that edge cases will not exist

Data structure:
  - convert num to string, get (length)
  - array methods for processing

Algorithm:
  - convert num to string, get (length)
  - split and map to individual digits
  - reduce to sum each element to the power of (power)
  - return (sum === given num)

Code.

*/

"use strict";

function narcissistic(value) {
  const len = String(value).length;
  let summed = String(value).split('').map(Number)
    .reduce((acc, num) => acc + (num ** len), 0);
  return summed === value;
}

console.log(narcissistic(153));     // true
console.log(narcissistic(371));     // true
console.log(narcissistic(1938));    // false
