/* eslint-disable id-length */
/* message_validator.js

In this kata, you have an input string and you should check whether it is a
valid message. To decide that, you need to split the string by the numbers,
and then compare the numbers with the number of characters in the following
substring.

For example "3hey5hello2hi" should be split into 3, hey, 5, hello, 2, hi and
the function should return true, because "hey" is 3 characters, "hello" is 5,
and "hi" is 2; as the numbers and the character counts match, the result is
true.

Notes:
- Messages are composed of only letters and digits
- Numbers may have multiple digits: e.g. "4code13hellocodewars" is a valid
  message
- Every number must match the number of character in the following substring,
  otherwise the message is invalid: e.g. "hello5" and "2hi2" are invalid
- If the message is an empty string, you should return true

*/

/* PEDAC

Understand the Problem:
- input
  - string containing ONLY letters and digits
- output
  - BOOLEAN
- rules
  - message string contains only [a-zA-Z0-9]
  - numbers within string maybe me multiple digits (e.g. 13)
  - each number must match the number of letters that follow it before another
    number or end of string is reached
  - numbers at the end of the string without any letters after always result in
    false (no letters possible)
  - no number at the beginning of string also always returns false
  - empty string should return true

- clarifying questions
  - confirm clean input and that no whitespace or non word or '_' need to be
    considered
  - do we need to handle uppercase letters?

Examples/test cases:
- happy path
  - '10abcdfhjfds2hi' returns true
  - 'abc3rgf' returns false
- edge cases(bounds/emptiness)
  - '' returns true
  - '3DOG7Charles' returns true

Data structure:
  - array result from MATCHing string on one or more digits OR one or more
    letter groups

Algorithm:
  - guard clause: if str is empty (falsy) return true
  - declare (messageParts) and assign to match of regex /([0-9]+|[a-zA-Z]+)/g
  - if the first element of the array is letter(s) or the last element is
    digit(s), then return false
  - iterate through the array by 2s (for loop)
    - if element at iterator index converted to a number is not equal to the
      length of the element at iterator index + 1 then return false
  - if prior loop completes without returning false then we can return true

Code.

*/

"use strict";

function isAValidMessage(str) {
  if (!str) return true;

  let subs = str.match(/([0-9]+|[a-z]+)/gi);

  if (/[a-z]+/i.test(subs[0]) || /[0-9]+/.test(subs[subs.length - 1])) {
    return false;
  }

  for (let i = 0; i < subs.length; i += 2) {
    if (Number(subs[i]) !== subs[i + 1].length) {
      return false;
    }
  }

  return true;
}

console.log(isAValidMessage("3hey5hello2hi") === true);
console.log(isAValidMessage("4code13hellocodewars") === true);
console.log(isAValidMessage("3hey5hello2hi5") === false);
console.log(isAValidMessage("code4hello5") === false);
console.log(isAValidMessage("1a2bb3ccc4dddd5eeeee") === true);
console.log(isAValidMessage("") === true);

console.log(isAValidMessage("10abcdfhjfds2hi") === true);
console.log(isAValidMessage("abc3rgf") === false);
console.log(isAValidMessage("3DOG7Charles") === true);
console.log(isAValidMessage("1a1c3rgf") === true);

