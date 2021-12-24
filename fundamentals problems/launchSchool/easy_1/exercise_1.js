/* eslint-disable no-console */
/* exercise_1.js

Odd Numbers

Log all odd numbers from 1 to 99, inclusive, to the console, with each number
on a separate line. */

const readlineSync = require('readline-sync');

const oddLimit = Number(readlineSync.question('Enter the upper limit number: '));

for (let num = 1; num <= oddLimit; num += 2) {
  console.log(num);
}
