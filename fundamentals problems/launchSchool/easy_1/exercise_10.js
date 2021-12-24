/* exercise_10.js

UTF-16 String Value

Write a function that determines and returns the UTF-16 string value of a string
passed in as an argument. The UTF-16 string value is the sum of the UTF-16 values
of every character in the string. (You may use String.prototype.charCodeAt() to
determine the UTF-16 value of a character.) */

function utf16Value(str) {
  let result = 0;

  for (let index = 0; index < str.length; index += 1) {
    result += str.charCodeAt(index);
  }

  return result;
}

console.log(utf16Value('Four score'));         // 984
console.log(utf16Value('Launch School'));      // 1251
console.log(utf16Value('a'));                  // 97
console.log(utf16Value(''));                   // 0

// The next three lines demonstrate that the code
// works with non-ASCII characters from the UTF-16
// character set.
const OMEGA = "\u03A9";             // UTF-16 character 'Ω' (omega)
console.log(utf16Value(OMEGA));                  // 937
console.log(utf16Value(OMEGA + OMEGA + OMEGA));  // 2811

/* Algorithm
  - declare (result) variable and assign to 0
  - iterate through string by index
    - add the return value of calling charCodeAt on each char to (result)
  - return result
*/
