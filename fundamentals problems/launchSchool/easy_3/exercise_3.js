/* exercise_3.js

When Will I Retire

Build a program that logs when the user will retire and how many more years the
user has to work until retirement.

Example:

What is your age? 30
At what age would you like to retire? 70

It's 2017. You will retire in 2057.
You have only 40 years of work to go!

*/

"use strict";

function retirementPlan() {
  const readlineSync = require('readline-sync');
  const currentAge = Number(readlineSync.question('What is your age? '));
  const retirementAge = Number(readlineSync.question(
    'At what age would you like to retire? '));
  const currentYear = new Date().getFullYear();
  const retireYear = currentYear + (retirementAge - currentAge);

  console.log(`\nIt's ${currentYear}. You will retire in ${retireYear}.`);
  console.log(
    `You have only ${retirementAge - currentAge} years worth of work to go!`);
}

/* algorithm:
  - get (currentAge)
  - get (retirementAge)
  - declare currentYear and assign to new Date().getFullYear();
  - declare retireYear and assign to currentYear + (retirementAge - currentAge)
  - log appropriate messages to console
*/

retirementPlan();
