/* eslint-disable max-len */
/* woc_problem_1.js

Problem Description

Write a program that cleans up user-entered phone numbers so that they can be
sent as SMS messages. Other than digits, the number may also contain special
character such as spaces, dash, dot, and parentheses that should be ignored.

The rules are as follows:
If the phone number is less than 10 digits, assume that it is a bad number.
If the phone number is 10 digits, assume that it is good.
If the phone number is 11 digits and the first number is 1, trim the 1 and use the last 10 digits.
If the phone number is 11 digits and the first number is not 1, then it is a bad number.
If the phone number is more than 11 digits, assume that it is a bad number.
For bad numbers, just a return a string of 10 0s.

*/

/* PEDAC
understand the Problem
input: a STRING of characters that may include numbers as well as other chars
output: a STRING of ten digits that represent:
  - a phone number
  - or 10 0s for invalid input

explicit requirements:
  - string must contain 10 digits, or 11 digits beginning with '1'

rules:
  - if string can be cleaned to 10 digits then it is valid
  - if string can be cleaned to 11 digits and the first digit is a 1 then it is valid
  - if string can to cleaned and is less than 10 digits it is bad
  - if string can be cleaned to more than 11 digits it is bad
  - if string can be cleaned to 11 digits and the first char is not a 1 then it is bad

clarifying questions:
  - is it OK if the string contains non-punc chars that can be cleaned away, like letters?

mental model:
  - take an input string and remove all chars except [0-9] then apply series of
    conditions to the result and return value based on the return of those conditionals

Examples/test cases:
  - 'charles'         // '0000000000'
  - '13047659868'     // '3047659868'
  - '09876543212'     // '0000000000'
  - '1a7643940214'    // '7643940214'
  - '(503) 287-3886'  // '5032873886'
  - '456-432-4565'    // '4564324565'
  - 'h:453 456-2312'  // '4534562312'
  - '764823432'       // '0000000000'

Data structure:
  - strings, use regex to clean away everything except numbers,
    then apply conditions to cleaned string
  - return string of 10 digits

Algorithm:
  - declare (regex) and assign to /[^0-9]/g
  - declare (cleaned) and assign to given string replacing regex with ''
  - apply conditions to (cleaned) based on rules:
    - if (invalidInput) return '0000000000'
    - if string length is 11 and string[0] is '1' then return string.slice(1)
    - if none of the above are true than string must be good to go already so...
  - return string

  - subprocess (invalidInput) function returns true:
      - if string length is less than 10
      - if string length is greater than 11
      - if string length is 11 and string[0] is not '1'

Code!

*/

function invalidInput(cleaned) {
  return cleaned.length < 10 || cleaned.length > 11
    || (cleaned.length === 11 && cleaned[0] !== '1');
}

function phoneNumber(str) {
  let regex = /[^0-9]/g;
  let cleaned = str.replace(regex, '');
  if (invalidInput(cleaned)) {
    return '0000000000';
  } else if (cleaned.length === 11) {
    return cleaned.slice(1);
  }

  return cleaned;
}

console.log(phoneNumber('charles'));         // '0000000000'
console.log(phoneNumber('13047659868'));     // '3047659868'
console.log(phoneNumber('09876543212'));     // '0000000000'
console.log(phoneNumber('1a7643940214'));    // '7643940214'
console.log(phoneNumber('(503) 287-3886'));  // '5032873886'
console.log(phoneNumber('456-432-4565'));    // '4564324565'
console.log(phoneNumber('h:453 456-2312'));  // '4534562312'
console.log(phoneNumber('764823432'));       // '0000000000'