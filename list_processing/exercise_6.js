/* exercise_6.js

All Substrings

Write a function that returns a list of all substrings of a string. Order the
returned list by where in the string the substring begins. This means that all
substrings that start at index position 0 should come first, then all substrings
that start at index position 1, and so on. Since multiple substrings will occur
at each position, return the substrings at a given index from shortest to
longest.

You may (and should) use the leadingSubstrings function you wrote in the
previous exercise: */

function leadingSubstrings(str) {
  let substrings = [];
  for (let len = 1; len <= str.length; len += 1) {
    substrings.push(str.slice(0, len));
  }

  return substrings;
}

function substrings(masterString) {
  let subs = [];
  for (let index = 0; index < masterString.length; index += 1) {
    subs = subs.concat(leadingSubstrings(masterString.slice(index)));
  }

  return subs;
}

console.log(substrings('abcde'));

/* returns

[ "a", "ab", "abc", "abcd", "abcde",
  "b", "bc", "bcd", "bcde",
  "c", "cd", "cde",
  "d", "de",
  "e" ]

*/