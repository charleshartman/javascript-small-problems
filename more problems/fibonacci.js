// fibonacci.js

"use strict";

function iterativeFib(nth) {
  const fibArray = [0, 1];
  let counter = 2;

  while (counter <= nth) {
    let last = fibArray[fibArray.length - 1];
    let nextToLast = fibArray[fibArray.length - 2];

    fibArray.push(last + nextToLast);
    counter += 1;
  }

  // console.log(fibArray);
  return fibArray[nth];
}

console.log('---------------------------------');
console.log('Iterative Fibonacci');
console.log('---------------------------------');
// console.log(iterativeFib(10));
// console.log(iterativeFib(45));
console.log(iterativeFib(100));

function recursiveFib(nth) {
  if (nth === 1 || nth === 2) {
    return 1;
  } else {
    return recursiveFib(nth - 2) + recursiveFib(nth - 1);
  }
}

console.log('---------------------------------');
console.log('Recursive Fibonacci');
console.log('---------------------------------');
console.log(recursiveFib(20));

function recurseMemoFib(nth, memo = {}) {
  if (memo[nth]) {
    return memo[nth];
  }

  if (nth === 1 || nth === 2) {
    memo[nth] = 1;
    return memo[nth];
  } else {
    memo[nth] = recurseMemoFib(nth - 2, memo) + recurseMemoFib(nth - 1, memo);
    return memo[nth];
  }
}

console.log('---------------------------------');
console.log('Recursive + Memoization Fibonacci');
console.log('---------------------------------');
console.log(recurseMemoFib(100));

/* pedac
  problem:
  given an positive integer argument, return the nth fibonacci number
    represented by that integer

  examples:
  F0  F1  F2  F3  F4  F5  F6  F7  F8  F9  F10
  0   1   1   2   3   5   8   13  21  34  55

  F11 F12 F13 F14 F15 F16 F17   F18   F19   F20
  89  144 233 377 610 987 1597  2584  4181  6765

  data structure: integer, array, object
    - first implement with iteration with storage in simple array object, index
      corresponds to (nth) fibonacci number

  algorithm:
    - the next fibonacci number is the sum of the preceding two numbers
    - declare variable (fibArray) to [0, 1]
    - declare variable (counter) to 2

    - while the counter is less than or equal to the given integer
      - declare (last) and (nextToLast) and assign to the respective index
        positions in (fibArray)
      - sum the last two numbers in (fibArray)
      - add the result to the end of (fibArray)

    - return the last element in (fibArray)

  */
