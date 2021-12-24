/* exercise_1.js

How Old is Teddy

Build a program that randomly generates Teddy's age, and logs it to the console.
Have the age be a random number between 20 and 200 (inclusive).

Example Output:
Teddy is 69 years old!

*/
"use strict";

function random(min, max) {
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  return num;
}

function randomAge() {
  let age = random(20, 200);
  console.log(`Teddy is ${age} years old!`);
}

randomAge();

/* Book
The solution makes use of the random() method of the Math object. The random()
method generates a random floating-point number between 0 (inclusive) and 1
(exclusive). To have the random number be between 20 and 200, the solution uses
the function randomBetween. It takes a min and a max value as arguments.

The first part of the expression returned by randomBetween function,
Math.floor(Math.random() * (max - min + 1)), generates a number based on
the range (distance) between the max and the min. If the arguments passed
are 20 and 200, there are 181 possible values, starting from 0 up to 180.

The second part, + min;, which completes the expression, offsets the current
value so that the number returned falls within the range of the arguments
passed.

Finally, the Math.floor() method turns the generated number into an integer.
The method takes a number and reduces it to the next lower integer, effectively
truncating any digits following the decimal point. */
