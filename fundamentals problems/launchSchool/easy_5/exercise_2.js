/* exercise_2.js

Double Char Part 2

Write a function that takes a string, doubles every consonant character in the
string, and returns the result as a new string. The function should not double
vowels ('a','e','i','o','u'), digits, punctuation, or whitespace. */

"use strict";

function doubleConsonants(str) {
  let regex = /[^aeiou\d\W]/gi;
  let result = '';

  for (let char of str) {
    if (char.match(regex)) {
      result += (char + char);
    } else {
      result += char;
    }
  }

  return result;
}

console.log(doubleConsonants('String'));          // "SSttrrinngg"
console.log(doubleConsonants('Hello-World!'));    // "HHellllo-WWorrlldd!"
console.log(doubleConsonants('July 4th'));        // "JJullyy 4tthh"
console.log(doubleConsonants(''));                // ""
