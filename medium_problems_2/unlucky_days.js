/* unlucky_days.js

Unlucky Days

Write a function that takes a year as an argument and returns the number of
'Friday the 13ths' in that year. You may assume that the year is greater than
1752 (when the modern Gregorian Calendar was adopted by the United Kingdom).
You may also assume that the same calendar will remain in use for the
oreseeable future. */

/* PEDAC

Understand the Problem:
- input
  - number greater than 1752
- output
  - number representing the number of Friday the 13ths in the given year
- rules
  -

- clarifying questions
  -

Examples/test cases:
- happy path
  -
- edge cases(bounds/emptiness)
  -

Data structure:
  - use a for loop to loop over twelve months of date objects for the given
    year and increment counter if the 13th of the month is a Friday

Algorithm:
  - declare (unluckyDays) to 0
  - define for loop with a counter to 1 that iterates twelve times
    - in each iteration define a date object that is each successive month of
      the given year.
    - if the 13 is a Friday (5) then increment (unluckyDays) by 1
  - return (unluckyDays)

Code.

*/

"use strict";

function fridayThe13ths(year) {
  let unluckyDays = 0;
  for (let month = 0; month < 12; month++) {
    if (new Date(year, month, 13).getDay() === 5) {
      unluckyDays += 1;
    }
  }

  return unluckyDays;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2
console.log(fridayThe13ths(2020));      // 2
console.log(fridayThe13ths(2021));      // 1
console.log(fridayThe13ths(2022));      // 1
