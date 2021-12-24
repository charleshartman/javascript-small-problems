/* exercise_2.js

Even Numbers

Log all even numbers from 1 to 99, inclusive, to the console, with each number
on a separate line. */

for (let num = 1; num <= 99; num += 1) {
  if (num % 2 === 0) {
    console.log(num);
  }
}
