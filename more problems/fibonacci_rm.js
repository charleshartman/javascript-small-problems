// fibonacci_rm.js
// Recursive with Memoization Fibonacci

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

const oneHundredthFib = fibonacci(100);
console.log(oneHundredthFib); // 354224848179262000000

const fibs = {};
fibonacci(20, fibs);
console.log(fibs['20']);      // 6765
