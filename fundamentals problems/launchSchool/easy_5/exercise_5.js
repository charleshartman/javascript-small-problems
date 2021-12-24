/* exercise_5.js

Always Return Negative

Write a function that takes a number as an argument. If the argument is a
positive number, return the negative of that number. If the argument is a
negative number, return it as-is. */

"use strict";

function negative(num) {
  return String(num)[0] === '-' ? num : Number('-' + String(num));
}

console.log(negative(5));     // -5
console.log(negative(-3));    // -3
console.log(negative(0));     // -0

/* Book Solution

function negative(number) {
  return Math.abs(number) * -1;
}

Discussion
The solution uses the Math.abs method to convert any type of number argument to
a positive number. The solution then multiplies this positive number by -1 to
convert it to a negative number, and returns the result.

Student Solution

function negative(n) {
  return Math.min(n, -n);
}

*/
