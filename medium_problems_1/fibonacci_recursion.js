/* fibonacci_recursion.js

Fibonacci Numbers (Recursion)

The Fibonacci series is a sequence of numbers in which each number is the sum\
of the previous two numbers. The first two Fibonacci numbers are 1 and 1. The
third number is 1 + 1 = 2, the fourth is 1 + 2 = 3, the fifth is 2 + 3 = 5, and
so on. In mathematical terms, this can be represented as:

F(1) = 1
F(2) = 1
F(n) = F(n - 1) + F(n - 2) where n > 2

This simple sequence can easily be computed using a recursive function.
A recursive function is one in which the function calls itself. */

/* PEDAC

Understand the Problem:
- input
  -
- output
  -
- rules
  - write a recursive function to calculate the nth fibonacci number
  - base case is fib1: 1 and fib2: 1, so:
    - if n === 1 OR n === 2 then return 1
  - fibonacci numbers are the equal to the sum of the prior 2 numbers in the
    sequence
  - the function must call itself at least once to be recursive

- clarifying questions
  -

Examples/test cases:
- happy path
  - fibonacci(1);       // 1
  - fibonacci(2);       // 1
  - fibonacci(3);       // 2
  - fibonacci(4);       // 3
  - fibonacci(5);       // 5
  - fibonacci(12);      // 144
  - fibonacci(20);      // 6765

- edge cases(bounds/emptiness)
  - none unless we need to account for non positive int input or empty input
    - fibonacci('a')    // NaN?

Data structure:
  - numbers, recursive function calls itself until it reaches the base case,
    then unwinds upward until last call on the stack is finished (which is our
    initial argument), this is returned

Algorithm:
  - conditional statement that if we are calling on 1 or 2 we return 1
  - return statement that returns the return value of calling fibonacci
    recursively on n - 2 and n - 1 and summing them

Code.

*/

function fibonacci(nth) {
  if (nth === 1 || nth === 2) return 1;
  return fibonacci(nth - 2) + fibonacci(nth - 1);
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(12));      // 144
console.log(fibonacci(20));      // 6765
