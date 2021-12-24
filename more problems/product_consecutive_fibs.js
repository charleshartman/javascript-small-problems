/* product_consecutive_fibs.js

The Fibonacci numbers are the numbers in the following integer sequence (Fn):

0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144, 233, ...

such as

F(n) = F(n-1) + F(n-2) with F(0) = 0 and F(1) = 1.

Given a number, say prod (for product), we search two Fibonacci numbers
F(n) and F(n+1) verifying

F(n) * F(n+1) = prod.

Your function productFib takes an integer (prod) and returns an array:

[F(n), F(n+1), true] or {F(n), F(n+1), 1} or (F(n), F(n+1), True)
depending on the language if F(n) * F(n+1) = prod.

If you don't find two consecutive F(n) verifying F(n) * F(n+1) = prod
you will return

[F(n), F(n+1), false] or {F(n), F(n+1), 0} or (F(n), F(n+1), False)
F(n) being the smallest one such as F(n) * F(n+1) > prod. */

/* PEDAC

Understand the Problem:
- input
  - a number
- output
  - an array with three elements, the two fibs whose product equals the given n
    or the fibs whose product just goes over the given number, plus a BOOLEAN
- rules
  - find the two CONSECUTIVE fibs whose product equals the given number, if
    these do not exist then find the two consecutive fibs that produce the first
    greater product over the given number
  - return the two fibs specified plus a BOOLEAN in a three element array

- clarifying questions
  - confirm our fibonacci sequence should begin with 0
  - do we need to handle invalid input (wrong type, empty)

Examples/test cases:
- happy path
  -
- edge cases(bounds/emptiness)
  - productFib(0)   // [0, 1, true]
  - productFib(15)  // [3, 5, true]
  - productFib(16)  // [5, 8, false]

Data structure:
  - generate fibs and push into array starting with [0, 1]
  - place result in separate array when conditions are met (or unmet > given n)

Algorithm:
  - declare (fibs) to [0, 1]
  - do loop while the product of the last two elements of fibs is less than or
    equal to given number
    - if equal, return those two numbers + true
    - else push next fibonacci into (fibs)
  - if we exit loop without returning then
  - return last two number in fibs + false

Code.

*/

"use strict";

function productFib(num) {
  const fibs = [0, 1];
  do {
    if (fibs[fibs.length - 1] * fibs[fibs.length - 2] === num) {
      return fibs.slice(-2).concat(true);
    } else {
      fibs.push(fibs[fibs.length - 1] + fibs[fibs.length - 2]);
    }
  } while (fibs[fibs.length - 1] * fibs[fibs.length - 2] <= num);

  return fibs.slice(-2).concat(false);
}

console.log(productFib(4895));            // [55, 89, true])
console.log(productFib(5895));            // [89, 144, false])
console.log(productFib(74049690));        // [6765, 10946, true])
console.log(productFib(84049690));        // [10946, 17711, false])
console.log(productFib(193864606));       // [10946, 17711, true])
console.log(productFib(447577));          // [610, 987, false])
console.log(productFib(602070));          // [610, 987, true])

console.log(productFib(0));               // [0, 1, true]
console.log(productFib(15));              // [3, 5, true]
console.log(productFib(16));              // [5, 8, false]
