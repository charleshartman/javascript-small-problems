/* eslint-disable max-len */
/* eslint-disable id-length */
// strip_comments.js
// solved with Mia & Raul

// function p(something) {
//   console.log(something);
// }

// https://www.codewars.com/kata/51c8e37cee245da6b40000bd/train/javascript

/*
Complete the solution so that it strips all text that follows any of a set of
comment markers passed in. Any whitespace at the end of the line should also be
stripped out.

Given an input string of:
apples, pears # and bananas
grapes
bananas !apples

The expected output would be:
apples, pears
grapes
bananas

// PEDAC

Understand the Problem:
- input
  - one string of any chars
  - one array of chars (component markers)
- output
  - one string of any chars
- rules
  - all text on a given line after and including the marker should be removed
  - any whitespace between the last char and the marker should be removed

- clarifying questions
  - What does whitespace consist of? (tabs, spaces, newlines)
    - Everything but newlines
  - How should the output look? => String or as shown above
  - Should we handle empty input or input of the wrong type?
    - Inputs are going to be the same
  - Any non-alphabetical character for the markers
  - Markers can be any sequence of characters (0 or more)
  - Default markers?
  - Strip all whitespace at the end of each line irrespective of a marker?

Examples/test cases:
- happy path
  - solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]) === "apples, pears\ngrapes\nbananas"
  - solution("apples, pears# and bananas\ngrapes\nbananas !apples", ["#", "!"]) === "apples, pears\ngrapes\nbananas"
  - solution("apples", ["2"]) === "apples"
  - solution('apples#', ['#$']) === "apples#"
  - solution("apples \t @ dog something", ['@']) === "apples"
  - solution("apples \t \n@ dog something", ['@']) === "apples \t \n" // or "apples"

- edge cases(bounds/emptiness)
  - solution("", ['#']) === ''
  - solution("hey", ['']) === ''
  - solution("hello", []) === "hello"

Data structure:
  - array of strings that are lines
  - array of markers
  - output: array -> string (with /n)

Algorithm:
  - split input string at newlines => array
  - iterate over the array => tranforming each string into a new string
    - test for each marker in the current string
      - for the valid test (true), split current string at marker and select 0th element
    - trim the trailing whitespace from the new string
    - return "cleaned string" to map iteration
  - join the strings with newlines
*/
"use strict";

function solution(str, markers) {
  let markerRegex = new RegExp(`[${markers.join('')}]`);

  return str.split(/\n+/).map((line) => {
    return line.split(markerRegex)[0].trimEnd();
  }).join('\n');
}

console.log(solution("apples, pears # and bananas\ngrapes\nbananas !apples", ["#", "!"]));
// result should == "apples, pears\ngrapes\nbananas"
console.log(solution("apples, pears # !and bananas\ngrapes\nbananas !apples", ["#", "!"]));
// result should == "apples, pears\ngrapes\nbananas"
console.log(solution("apples, pears# and bananas\ngrapes\nbananas !apples", ["#", "!"]) === "apples, pears\ngrapes\nbananas");
console.log(solution("apples", ["2"]) === "apples");
console.log(solution('apples#', ['#$'])); //=== "apples#");
// console.log(solution("apples \t @ dog something", ['@']) === "apples");
// console.log(solution("apples \t \n@ dog something", ['@'])) //=== "apples"); // or "apples"
// console.log(solution("apples \t \n\n apples\n@ dog something", ['@'])) //=== "apples"); // or "apples"

