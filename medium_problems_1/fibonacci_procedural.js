/* fibonacci_procedural.js

Fibonacci Numbers (Procedural)

In the previous exercise, we developed a recursive solution for computing the
nth Fibonacci number. In a language that is not optimized for recursion, some
(but not all) recursive functions can be extremely slow and may require massive
quantities of memory and/or stack space. If you tested for bigger nth numbers,
you might have noticed that getting the 50th fibonacci number already takes a
significant amount of time.

Fortunately, every recursive function can be rewritten as a non-recursive
(or procedural) function.

Rewrite your recursive fibonacci function so that it computes its results
without using recursion. */

"use strict";

function fibonacci(nth) {
  let fibonacciNums = [1, 1];
  for (let count = 3; count <= nth; count++) {
    fibonacciNums.push(fibonacciNums.slice(-2).reduce((acc, num) => acc + num));
  }

  return fibonacciNums[fibonacciNums.length - 1];
}

console.log(fibonacci(12));       // 144
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050

// Note that JavaScript can accurately compute integers up to 16 digits long;
// this means that fibbonacci(78) is the largest Fibbonacci number that you can
// accurately compute with simple operations in JavaScript.

/* algorithm - as before but without recursion
  - declare (fibonacciNums) and assign to [1, 1]
  - iterate from 3 to given number
    - append to fibonacciNums the value of summing the last two elements of
      fibonacciNums
  - return the final element in the array
*/