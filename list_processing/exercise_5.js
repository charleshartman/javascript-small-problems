/* exercise_5.js

Leading Substrings

Write a function that takes a string argument and returns a list of substrings
of that string. Each substring should begin with the first letter of the word,
and the list should be ordered from shortest to longest. */

function leadingSubstrings(str) {
  let result = [];
  for (let len = 1; len <= str.length; len += 1) {
    result.push(str.slice(0, len));
  }

  return result;
}

console.log(leadingSubstrings('abc'));      // ["a", "ab", "abc"]
console.log(leadingSubstrings('a'));        // ["a"]
console.log(leadingSubstrings('xyzzy'));    // ["x", "xy", "xyz", "xyzz", "xyzzy"]

/* algorithm
  - declare (result) to []
  - iterate through string length number of times
    - slice from 0 to index + 1 each time and push slice into (result)
  - return result
*/