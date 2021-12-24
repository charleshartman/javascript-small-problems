/* rotation_part_2.js

Rotation Part 2

Write a function that rotates the last n digits of a number. For the rotation,
rotate by one digit to the left, moving the first digit to the end. */

/* PEDAC

Understand the Problem:
- input
  - two positive integers
- output
  - single integer with 'rotated' digit
- rules
  - move the digit that is n places from the end of the number to the end of
    the number, for example (735291, 3) '2' is 3 places from the end, pick it
    up and move it to the last number.
  - essentially the index position of the number (converted to a string and
    split to an array) to move would be (number.length - n), so splice from
    there, assign to variable and push back onto the end of the mutated array

- clarifying questions
  - do we need a guard for invalid input? i.e. non positive integer

Examples/test cases:
- happy path
  - see below
- edge cases(bounds/emptiness)
  - non positive integer inputs, empty input

Data structure:
  - convert number to string and split to array, perform rotation then convert
    back to strings and join and covert back to number

Algorithm:
  - declare (digitArray) and assign to return of converting to string and
    splitting on ''
  - declare (moveDigit) and assign to splicing out the char ar position
    (digitArray.length - givenNumber)
  - push moveDigit to digitArray
  - return digitArray joined on '' and converted to number

Code.

*/

"use strict";

function rotateRightmostDigits(number, moveNum) {
  let digitArray = String(number).split('');
  let moveDigit = digitArray.splice(digitArray.length - moveNum, 1);
  return Number(digitArray.concat(moveDigit).join(''));
}

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917
