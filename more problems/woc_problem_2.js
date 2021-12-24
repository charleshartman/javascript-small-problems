/* woc_problem_2.js

Problem Description

The Luhn formula is a simple checksum formula used to validate a variety of
identification numbers, such as credit card numbers and Canadian Social
Insurance Numbers.

The formula verifies a number against its included check digit, which is usually
appended to a partial number to generate the full number. This number must pass
the following test:

Counting from the rightmost digit and moving left, double the value
of every second digit, so

1. For any digit that thus become 10 or more, subtract 9 from the result
1111 becomes 2121
8763 becomes 7733 (from 2 x 6 = 12 -> 12 - 9 = 3 and 2 x 8 = 16 -> 16 - 9 = 7)

2. Add all these digits together
1111 becomes 2121 sums as 2 + 1 + 2 + 1 to give a checksum of 6
8763 becomes 7733, and 7 + 7 + 3 + 3 is 20

3. If the total (the checksum) ends in 0 (put another way, if the total modulo
10 is congruent to 0), then the number is valid according to the Luhn Formula;
else it is not valid. Thus, 1111 is not valid (as shown above, it comes out
to 6), while 8763 is valid (as shown above, it comes out to 20).

Write a program that, given a number in string format, check if it is valid per
the Luhn formula. This should treat, for example, "2323 2005 7766 3554" as
valid. You can ignore all non-numeric characters in the input string.

*/

/* PEDAC
understand the Problem
input: a STRING of indeterminate length, which may include any chars
output: a BOOLEAN based on the result of a series of test/conditionals

explicit requirements:

rules:
  - return TRUE or FALSE based on if input, after cleaning and conversion
    to a number, conforms to the Luhn formula (internal checksum validates)
    - from right to left double the value of every second digit
      - if doubled value is greater than or equal to 10 then subtract 9
    - then sum all the numbers
      - if summed numbers % 10 === 0 then yes, TRUE
      - else no, FALSE
  - input is a string and may have non-numeric chars

clarifying questions:
  - confirm input may be of any length
  - confirm there may be any number of digits in the input string

mental model:
  -

Examples/test cases:

- "2323 2005 7766 3554"     // true
- "2323 2005 7766 3554x"    // true
- ""                        // false
- "1111"                    // false
- "8763"                    // true
- "9999 9999 1234 8754"     // false
- "9999 9999 1234 8764"     // true

Data structure:
  - string, array, numbers, boolean
  - clean string, convert to array, map to numbers, perform test, return boolean

Algorithm:
  - declare (regex) and assign to match non-numerics /[^0-9]/g
  - declare (cleaned) and assign to string with all non-numerics
    replaced (use regex) with ''
  - guard clause for empty string
  - declare (numbers) and assign to (cleaned) split and reversed and mapped
    to numbers
  - iterate through (numbers)
    - map every index's value
      - if index is odd (index % 2 === 1)
      - if value * 2 is >= 10 then map to num * 2 - 9
      - otherwise map to num * 2
      - else map to current num
  - declare (summed) and iterate through numbers and sum (reduce) them
  - if (summed) modulo 10 is 0 then return true
  - else return false

Code!

*/

function checkLuhn(str) {
  let regex = /[^0-9]/g;
  let cleaned = str.replace(regex, '');
  if (!cleaned) return false;
  let numbers = cleaned.split('').reverse().map(Number);
  let luhned = numbers.map((num, index) => {
    if (index % 2 === 1) {
      return num * 2 >= 10 ? (num * 2) - 9 : num * 2;
    } else {
      return num;
    }
  }).reduce((acc, element) => acc + element, 0);

  // console.log(luhned);
  return luhned % 10 === 0;
}

console.log(checkLuhn("2323 2005 7766 3554"));     // true
console.log(checkLuhn("2323 2005 7766 3554x"));    // true
console.log(checkLuhn(""));                        // false
console.log(checkLuhn("1111"));                    // false
console.log(checkLuhn("8763"));                    // true
console.log(checkLuhn("9999-9999-1234 8754"));     // false
console.log(checkLuhn("CC: 9999 9999 1234 8767")); // true
