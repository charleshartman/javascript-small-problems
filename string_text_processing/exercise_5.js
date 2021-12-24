/* exercise_5.js

Swap Case

Write a function that takes a string as an argument and returns that string
with every lowercase letter changed to uppercase and every uppercase letter
changed to lowercase. Leave all other characters unchanged. */

function swapCase(str) {
  return str.split('').map(char => {
    if (/[a-z]/.test(char)) {
      return char.toUpperCase();
    } else if (/[A-Z]/.test(char)) {
      return char.toLowerCase();
    } else {
      return char;
    }
  }).join('');
}

console.log(swapCase('CamelCase'));              // "cAMELcASE"
console.log(swapCase('Tonight on XYZ-TV'));      // "tONIGHT ON xyz-tv"
