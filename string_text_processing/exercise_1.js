/* exercise_1.js

Uppercase Check

Write a function that takes a string argument and returns true if all of the
alphabetic characters inside the string are uppercase; otherwise, return false.
Ignore characters that are not alphabetic. */

function isUppercase(str) {
  return str === str.toUpperCase();
}


console.log(isUppercase('t'));               // false
console.log(isUppercase('T'));               // true
console.log(isUppercase('Four Score'));      // false
console.log(isUppercase('FOUR SCORE'));      // true
console.log(isUppercase('4SCORE!'));         // true
console.log(isUppercase(''));                // true

/* regex solution

function isUppercase(string) {
  return !/[a-z]/.test(string);
}

*/
