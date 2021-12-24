/* eslint-disable id-length */
/* primorial_of_a_number.js

Definition (Primorial Of a Number)

Is similar to factorial of a number, In primorial, not all the natural numbers
get multiplied, only prime numbers are multiplied to calculate the primorial of
a number. It's denoted with P# and it is the product of the first n prime
numbers.

Task
Given a number N, calculate its primorial.

Notes
Only positive numbers will be passed (N > 0). */

/* PEDAC

Understand the Problem:
- input
  - number
- output
  - number
- rules
  - given a number, calculate that many prime numbers, starting at 2 and return
    the product of multiplying those n numbers together
  - given number will be greater than 0

- clarifying questions
  - do we need to handle invalid/empty input?

Examples/test cases:
- happy path
  - 6 = => 2 * 3 * 5 * 7 * 11 * 13 === 30030
- edge cases(bounds/emptiness)
  - 1 => 2

Data structure:
  - generate array of n number of primes
  - reduce the array to number that is product of all elements

Algorithm:
  - declare (primes) to []
  - loop until (primes) contains n number of elements
  - calculate product of all elements in (declare)
  - return product

Code.

*/

"use strict";

function isPrime(num) {
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) {
      return false;
    }
  }

  return true;
}

function numPrimorial(num) {
  const primes = [];
  for (let i = 2; primes.length < num; i++) {
    if (isPrime(i)) {
      primes.push(i);
    }
  }

  return primes.reduce((acc, num) => acc * num);
}

console.log((numPrimorial(3) === 30));
console.log((numPrimorial(4) === 210));
console.log((numPrimorial(5) === 2310));
console.log((numPrimorial(8) === 9699690));
console.log((numPrimorial(9) === 223092870));

console.log((numPrimorial(1) === 2));
console.log((numPrimorial(6) === 30030));

