/* eslint-disable quote-props */
/* duplicates_duplicates.js

You are given a table, in which every key is a stringified number, and each
corresponding value is an array of characters, e.g.

{
  "1": ["A", "B", "C"],
  "2": ["A", "B", "D", "A"],
}

Create a function that returns a table with the same keys, but each character
should appear only once among the value-arrays, e.g.

{
  "1": ["C"],
  "2": ["A", "B", "D"],
}

Rules

Whenever two keys share the same character, they should be compared numerically,
and the larger key will keep that character. That's why in the example above
the array under the key "2" contains "A" and "B", as 2 > 1.

If duplicate characters are found in the same array, the first occurance should
be kept. */

/* PEDAC

Understand the Problem:
- input
  - an object where keys are strings representing numbers and values are arrays
    of characters
- output
  - a new object where duplicates have been removed from the given object by
    applying a set of rules
- rules
  - a character value should only appear once in our 'table'
  - comparing the keys numerically, greater key values take precedence for the
    purpose of determining where a character should be retained
  - within the same property value there should also be no duplicates
  - all original keys should appear in our result object, if there are no
    character values left after duplicates are removed that key will have
    an empty array as a value

- clarifying questions
  - confirm we should return a NEW object
  - do we need to handle invalid type or empty input
  - confirm chars are case sensitive? should we only expect upper case letters?

Examples/test cases:
- happy path
  - see below
- edge cases(bounds/emptiness)
  - see clarifying questions

Data structure:
  - array to store (usedChars)
  - new obj to store (result)
  - conversion/comparison of numerical values of keys for precedence

Algorithm:
  - declare (usedChars) to []
  - declare (result) to {}
  - declare (order) and initialize to array of keys of given object,
    converted to numbers and sorted in descending order then converted back to
    strings
  - iterate through given obj using (order)
    - add property to (result) and initialize prop value to []
    - iterate through each key's value (array)
      - if character is not in (usedChars)
        - push char to array value of that property in (result)
        - push char to (usedChars)
  - return (result)
Code.

*/

"use strict";

function removeDuplicateIds(table) {
  let usedChars = [];
  let result = {};
  let order = Object.keys(table).map(Number).sort((a, b) => b - a).map(String);

  order.forEach((key) => {
    result[key] = [];
    table[key].forEach((char) => {
      if (!usedChars.includes(char)) {
        result[key].push(char);
        usedChars.push(char);
      }
    });
  });

  return result;
}

// Example 1
const input1 = {
  "1": ["C", "F", "G"],
  "2": ["A", "B", "C"],
  "3": ["A", "B", "D"],
};
/*
output = {
  "1": ["F", "G"],
  "2": ["C"],
  "3": ["A", "B", "D"],
}
*/
// Example 2
const input2 = {
  "1": ["A"],
  "2": ["A"],
  "3": ["A"],
};
/*
output = {
  "1": [],
  "2": [],
  "3": ["A"],
}
*/

// Example 3
const input3 = {
  "432": ["A", "A", "B", "D"],
  "53": ["L", "G", "B", "C"],
  "236": ["L", "A", "X", "G", "H", "X"],
  "11": ["P", "R", "S", "D"],
};
/*
output = {
  "11": ["P", "R", "S"],
  "53": ["C"],
  "236": ["L", "X", "G", "H"],
  "432": ["A", "B", "D"],
}
*/

console.log(removeDuplicateIds(input1));
console.log(removeDuplicateIds(input2));
console.log(removeDuplicateIds(input3));
