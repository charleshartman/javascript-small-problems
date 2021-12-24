/* array_numbers_ranges.js

Description

Your task is to take arrays of numbers and compress them into ranges.

The numbers in the array are mostly consecutive. If you convert them as ranges,
it will save a lot of space. You should write a function that will convert an
array of numbers into a string. A range, or series of consecutive numbers, will
be represented as two numbers separated by an underscore, a range of one just
by the number its self and multiple ranges separated by commas.

For example:
The numbers 5, 6, 7, 8 and 9 would be displayed as "5_9"
The number 6 would just be "6"
The numbers 3,4,5,6,9 would be "3_6,9"

Using the above system, you should write two functions:
toRange - convert an array of numbers to a range string
toArray - convert a range string back to an array

Warnings:
The numbers could arrive all jumbled up so you'll need to sort them. Sometimes
the same number may appear more than once, duplicates should be discarded.

Edge cases:
An empty array should become an empty string if passed to toRange and vise
versa for the toArray function. Also, ranges of 2 digits will take the same
space whether they are represented as a sequence or a range. I.e.
"5,6,8,9".length === "5_6,8_9".length so there will be no compression, but
represent them as a range anyway for consistency. */

/* PEDAC

Understand the Problem:
- input
  - depending on the function:
    - an array of numbers, possibly unsorted and with duplicates
    - a string where two or more consecutive numbers are represented by the
      first and last number separated by an underscore, multiple ranges or
      single numbers are separated by commas
- output
  - same as input, but vise versa
- rules
  - 2 or more consecutive numbers make a range => 1_2, 1_3
  - empty string returns empty array and vise versa depending on which function
  - for given array toRange, sort and remove duplicates prior to translating
    to string
  - write two separate functions, toRange() and toArray()

- clarifying questions
  - do we need to deal with non-positive integers?
  - do we need to deal with floats?

Examples/test cases:
- happy path
  - [1, 2, 3, 4, 4, 4, 7, 8, 100] => "1_4,7_8,10"
  - [] => ''
  - '' => []
  - '1_5,7,100_102' => [1, 2, 3, 4, 5, 7, 100, 101, 102]
- edge cases(bounds/emptiness)
  - [0, -1, -2, 3, 4, 5] => '-2_0, 3_5'

Data structure:
  - build new array or string with push/concat depending on the function
  - use regex to break string
  - use iteration of array to build string

Algorithm:
  - toArray()
    - declare (result) to []
    - declare (nums) and initialize to string split on comma (',')
    - iterate through nums with forEach
      - if Number(element) is truthy
        - push element to result
      - else
        - declare (range) and assign to element split on (_)...
        - use loop to push consectitve numbers starting at the value of index 0
          until and including value at index 1 to (result)
  - return result

  - toRange()
    - declare (cleanSortNums) and assign to given array with duplicates
      removed and sorted in ascending order
    - declare (result) to []
    - iterate through array by index
      - if index value + 1 equals value of index + 1
         end = index + 1

Code.

*/

"use strict";

function toRange() {}

function toArray() {}

const actualString = toRange([3,4,5,6,9]);
console.log(actualString);                  // '3_6,9'

const actualArr = toArray('3_6,9');
console.log(actualArr);                     // [3,4,5,6,9]