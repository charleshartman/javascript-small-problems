/* exercise_4.js

Get the Middle Character

Write a function that takes a non-empty string argument and returns the middle
character(s) of the string. If the string has an odd length, you should return
exactly one character. If the string has an even length, you should return
exactly two characters. */

"use strict";

function centerOf(str) {
  const mid = Math.ceil(str.length / 2);
  return str.length % 2 === 0 ? str[mid - 1] + str[mid] : str[mid - 1];
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"
