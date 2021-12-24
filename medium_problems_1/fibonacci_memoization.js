/* fibonacci_memoization.js

Fibonacci Numbers (Memoization)

Our recursive fibonacci function from the previous exercise is not very
efficient. It starts slowing down with an nth argument value as low as 35. One
way to improve the performance of our recursive fibonacci function (and other
  recursive functions) is to use memoization.

Memoization is an approach that involves saving a computed answer for future
reuse, instead of computing it from scratch every time it is needed. In the
case of our recursive fibonacci function, using memoization saves calls to
fibonacci(nth - 2) because the necessary values have already been computed by
the recursive calls to fibonacci(nth - 1).

For this exercise, your objective is to refactor the recursive fibonacci
function to use memoization. */

"use strict";

function fibonacci(nth, memo = {}) {
  if (memo[nth]) {
    return memo[nth];
  }

  if (nth === 1 || nth === 2) {
    memo[nth] = 1;
    return memo[nth];
  } else {
    memo[nth] = fibonacci(nth - 2, memo) + fibonacci(nth - 1, memo);
    return memo[nth];
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765

const fiftiethFib = fibonacci(50);
console.log(fiftiethFib);    // 12586269025

const fibs = {};
fibonacci(21, fibs);
console.log(fibs['21']);    // 10946
