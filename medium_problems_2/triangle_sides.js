/* triangle_sides.js

Triangle Sides

A triangle is classified as follows:

Equilateral: All three sides are of equal length.
Isosceles: Two sides are of equal length, while the third is different.
Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of the two shortest sides must
be greater than the length of the longest side, and every side must have a
length greater than 0. If either of these conditions is not satisfied, the
triangle is invalid.

Write a function that takes the lengths of the three sides of a triangle as
arguments and returns one of the following four strings representing the
triangle's classification: 'equilateral', 'isosceles', 'scalene', or 'invalid'.

*/

/* PEDAC

Understand the Problem:
- input
  - three integers
- output
  - 'equilateral', 'isosceles', 'scalene', or 'invalid' string depending on the
    result of conditionals
- rules
  - the sum of the lengths of the two shorter sides must be greater than
    the longer side, otherwise 'invalid'
  - every side must have a length greater than 0, otherwise 'invalid'
  - all sides equal, return 'equilateral'
  - two sides equal, return 'isoceles'
  - all sides different, return 'scalene'

- clarifying questions
  - confirm we do not need to deal with empty or non number inputs

Examples/test cases:
- happy path
  - see below
- edge cases(bounds/emptiness)
  - none at present

Data structure:
  - place given arguments in array to use sort method to provide ordering for
    comparison

Algorithm:
  - guard clause: if any of the given arguments are equal to or less than zero,
    return 'invalid'
  - declare (sides) and assign to [side1, side2, side3]
  - sort array by descending value
  - if arr[0] > arr[1] + arr[2] return 'invalid'
  - main conditionals
    - if all arr elements are equal return 'equilateral'
    - if only two elements are equal return 'isoceles'
    - otherwise return 'scalene'

Code.

*/

"use strict";

function triangle(...sides) {
  sides.sort((a, b) => b - a);

  if (sides[0] > sides[1] + sides[2] || sides.some(side => side <= 0)) {
    return 'invalid';
  }

  if (sides[0] === sides[1] && sides[1] === sides[2]) {
    return 'equilateral';
  } else if (sides[0] === sides[1] || sides[1] === sides[2]) {
    return 'isosceles';
  }

  return 'scalene';
}

console.log(triangle(5, 6, 7));        // 'scalene'
console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"
console.log(triangle(1, 10, 2));       // "invalid"
