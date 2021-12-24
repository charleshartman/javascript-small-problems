/* get_the_middle_char.js

You are going to be given a word. Your job is to return the middle character of
the word. If the word's length is odd, return the middle character. If the
word's length is even, return the middle 2 characters.

# Input
A word (string) of length 0 < str < 1000 (In javascript you may get slightly
more than 1000 in some test cases due to an error in the test cases). You do
not need to test for this. This is only here to tell you that you do not need
to worry about your solution timing out.

# Output
The middle character(s) of the word represented as a string. */

"use strict";

function getMiddle(str) {
  const middle = Math.floor(str.length / 2);
  return str.length % 2 === 0 ? str[middle - 1] + str[middle] : str[middle];
}

console.log(getMiddle("test") === "es");
console.log(getMiddle("testing") === "t");
console.log(getMiddle("middle") === "dd");
console.log(getMiddle("A") === "A");
