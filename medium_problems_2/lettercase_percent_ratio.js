/* lettercase_percent_ratio.js

Lettercase Percentage Ratio

Write a function that takes a string and returns an object containing the
following three properties:

the percentage of characters in the string that are lowercase letters
the percentage of characters that are uppercase letters
the percentage of characters that are neither

You may assume that the string will always contain at least one character. */

/* PEDAC

Understand the Problem:
- input
  - string with mixed chars
- output
  - object with three properties representing percentage of lowercase,
    uppercase and neither chars in a strring
- rules
  - count the number of each of three categories of char type in the given
    string and generate percentages based on the sixe of the given string
  - uppercase and lowercase are self explanatory, 'neither' would be regex
    non-word chars as well as whitespace chars (based on examples)

- clarifying questions
  - confirm understanding of 'neither', assume [^a-zA-Z]
  - confirm math aspects

Examples/test cases:
- happy path
  - provided
- edge cases(bounds/emptiness)
  - how to handle empty string? assume return all zeroes? but could guard or
    throw

Data structure:
  - split given string to array of all chars incl whitespace
  - store three counts in an object
  - create and populate second object with percentages based on given array
    length OR reassign values in counter object

Algorithm:
  - // declare (chars) and assign to given string split on ''
  - declare (charInv) and assign to { lowercase: 0, uppercase: 0,
    neither: 0 }
  - iterate through chars (split str on '') with forEach
    - if [a-z], [A-Z], [^a-zA-Z] increment + 1 to respective categories
  - iterate through values in (charInv) with Object.keys, reassign
    value based on percentage (divide by given string's length * 100)
    - convert values to strings
  - return (charInv)
Code.

*/

"use strict";

function letterPercentages(str) {
  let charInv = { lowercase: 0, uppercase: 0, neither: 0 };
  str.split('').forEach(char => {
    if (/[a-z]/.test(char)) {
      charInv.lowercase += 1;
    } else if (/[A-Z]/.test(char)) {
      charInv.uppercase += 1;
    } else {
      charInv.neither += 1;
    }
  });

  Object.keys(charInv).forEach(key => {
    charInv[key] = ((charInv[key] / str.length) * 100).toFixed(2);
  });

  return charInv;
}

console.log(letterPercentages('Charles Hartman_17_.'));
// { lowercase: "60.00", uppercase: "10.00", neither: "30.00" }

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }