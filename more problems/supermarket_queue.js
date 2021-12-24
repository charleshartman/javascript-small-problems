/* eslint-disable id-length */
/* supermarket_queue.js

There is a queue for the self-checkout tills at the supermarket. Your task is
write a function to calculate the total time required for all the customers to
check out!

input:
- customers: an array of positive integers representing the queue. Each integer
represents a customer, and its value is the amount of time they require to
check out.
- n: a positive integer, the number of checkout tills.

output:
The function should return an integer, the total time required.

Important!
Please look at the examples and clarifications below, to ensure you understand
the task correctly :)

Clarifications:
- There is only ONE queue serving many tills, and
- The order of the queue NEVER changes, and
- The front person in the queue (i.e. the first element in the array/list)
proceeds to a till as soon as it becomes free.
- N.B. You should assume that all the test input will be valid, as specified
above.

P.S. The situation in this kata can be likened to the more-computer-science-
related idea of a thread pool, with relation to running multiple processes at
the same time: https://en.wikipedia.org/wiki/Thread_pool */

/* PEDAC

Understand the Problem:
- input
  - an array representing a queue of customers, there is only one queue, each
    element represents a customer and the value represents the time the customer
    takes at a till
  - a number, which represents the number of tills available
- output
  - a number that represents the total time it takes for all customers in the
    queue to checkout
- rules
  - one queue only, customers go to till in order from left to right, iow, as
    if we are calling SHIFT on array
  - assume all inputs are valid as specified
  - the order of the queue never changes
  - we can think of this as FIFO - first in first out
  - first person in queue (index 0) proceeds to a till as soon as it is
    available

- clarifying questions
  - double check that I do not need to handle empty/invalid input
  - may I mutate input array?

Examples/test cases:
- happy path
  - [20, 5, 3], 3 => 20
  - [3, 4, 5, 7, 3], 2 => 11
  - [4, 3, 5, 7, 3], 2 => 11
- edge cases(bounds/emptiness)
  - [], 0 => 0 ? clarifying says no

Data structure:
  - create an array of that will house the same number of elements as there are
    tills, iterate though given array, add the initial customers to tills, then
    assess the lowest value element each time, and add next customer to that
    element

Algorithm:
  - declare (customers) and initialize to copy of our given array with slice
  - declare (till) to []
  - insert the same number of values into (till) as the given number, shifting
    each value from (customers)
  - find the index of the element in the array with the lowest value and add
    the next customer value to it (again with shift)
  - repeat that process until customers === []
  - return the greatest value in the (tills) array

Code.

*/

"use strict";

function queueTime(arr, num) {
  if (arr.length === 0) return 0;
  if (num > arr.length) num = arr.length;

  let customers = arr.slice();
  let tills = [];

  for (let i = 1; i <= num; i++) {
    tills.push(customers.shift());
  }

  while (customers.length !== 0) {
    let min = tills.indexOf(Math.min(...tills));
    tills[min] += customers.shift();
  }

  return Math.max(...tills);
}

console.log(queueTime([5,3,4], 1));          // 12
console.log(queueTime([10,2,3,3], 2));       // 10
console.log(queueTime([2,3,10], 2));         // 12
console.log(queueTime([20, 5, 3], 3));       // 20
console.log(queueTime([3, 4, 5, 7, 3], 2));  // 11
console.log(queueTime([4, 3, 5, 7, 3], 2));  // 11
console.log(queueTime([2, 3], 2));           // 3

console.log(queueTime([], 1) === 0);
console.log(queueTime([1,2,3,4], 1) === 10);
console.log(queueTime([2,2,3,3,4,4], 2) === 9);
console.log(queueTime([1,2,3,4,5], 100) === 5);
