/* exercise_7.js

Name Swapping

Write a function that takes a string argument consisting of a first name,
a space, and a last name, and returns a new string consisting of the last name,
a comma, a space, and the first name. */

"use strict";

function swapName(str) {
  // return str.split(' ').reverse().join(', ');
  const name = str.split(' ');
  return `${name[name.length - 1]}, ${name.slice(0, -1).join(' ')}`;
}

console.log(swapName('Joe Roberts'));             // "Roberts, Joe"
console.log(swapName("N'golo Kante"));            // "Kante, N'Golo"
console.log(swapName('John Albert Danielson'));   // "Danielson, John Albert"

/* Further Exploration
What if the person had more than one first name? Refactor the current solution
so that it can accommodate this. */
