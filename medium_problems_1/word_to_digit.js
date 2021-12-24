/* word_to_digit.js

Word to Digit

Write a function that takes a sentence string as an argument and returns that
string with every occurrence of a "number word" — 'zero', 'one', 'two', 'three',
'four', 'five', 'six', 'seven', 'eight', 'nine' — converted to its corresponding
digit character. */

"use strict";

const WORD_DIGITS = {
  one: 1, two: 2, three: 3, four: 4, five: 5,
  six: 6, seven: 7, eight: 8, nine: 9, zero: 0, };

function wordToDigit(str) {
  return str.split(/([\s.!?])/g).map(element => {
    return WORD_DIGITS[element] ? WORD_DIGITS[element] : element;
  }).join('');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."
console.log(wordToDigit('The weight is done.'));
// "The weight is done."
console.log(wordToDigit('Type five to continue on to number six...'));
// "Type 5 to continue on to number 6..."

/* PEDAC

Understand the Problem:
- input
  -
- output
  -
- rules
  -

- clarifying questions
  -

Examples/test cases:
- happy path
  -
- edge cases(bounds/emptiness)
  -

Data structure:
  -

Algorithm:
  -

Code.

*/