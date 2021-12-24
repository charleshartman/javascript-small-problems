/* exercise_7.js

Double Doubles

A double number is an even-length number whose left-side digits are exactly the
same as its right-side digits. For example, 44, 3333, 103103, and 7676 are all
double numbers, whereas 444, 334433, and 107 are not.

Write a function that returns the number provided as an argument multiplied by
two, unless the argument is a double number; otherwise, return the double
number as-is. */

function twice(number) {
  let validateNum = String(number);
  if (validateNum.length % 2 === 0) {
    let halfLength = validateNum.length / 2;
    let firstHalf = '';
    let secondHalf = '';

    for (let index = 0; index < halfLength; index += 1) {
      firstHalf += validateNum[index];
    }

    for (let index2 = halfLength; index2 < validateNum.length; index2 += 1) {
      secondHalf += validateNum[index2];
    }

    if (firstHalf === secondHalf) {
      return number;
    }
  }

  return number * 2;
}

console.log(twice(37));          // 74
console.log(twice(44));          // 44
console.log(twice(334433));      // 668866
console.log(twice(444));         // 888
console.log(twice(107));         // 214
console.log(twice(103103));      // 103103
console.log(twice(3333));        // 3333
console.log(twice(7676));        // 7676

/* Algorithm
  - validation
    - declare (validateNumber) variable and assign given number converted to string
      - if length of that string is even?
        - get half of length and assign to variable (halfLength)
          - iterate to build firstHalf and secondHalf
          - if firstHalf === secondHalf
            - then return given number
    - else
      - return given number * 2
*/