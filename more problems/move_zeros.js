/* eslint-disable max-len */
/* eslint-disable max-lines-per-function */

// Write an algorithm that takes an array and moves all of the zeros to the end,
// preserving the order of the other elements.

// console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"]));
// returns [false, 1, 1, 2, 1, 3, "a", 0, 0]

/* PEDAC

Understand the Problem:
  input
  - array of a mixture of data types, booleans, integers, strings
  output
  - a new array

- rules & definitions:
  explicitly stated
  - return a new array in which all zeros are moved to the end of the array
    while preserving the order of all other elements in the array

  implicitly identified
  - array will only contain boolean, string and number data types

- clarifying questions & answers
  - empty array possible as input

Examples/test cases:
  happy path(generic)
console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])) // [false, 1, 1, 2, 1, 3, "a", 0, 0]
console.log(moveZeros(['raul', 1, 1, '2', 1, 3, "a"])) // ['raul', 1, 1, '2', 1, 3, "a"]
  edge cases(boundaries/emptiness)
console.log([]) // []
console.log(moveZeros([false, 1, 0, 1, '2', '0', 1, 3, "a"])) // [false, 1, 1, '2', 1, 3, "a", 0, 0]
- Element where number includes a zero as well as other numbers
console.log(moveZeros([false, 1, 0, 101, '201'])) // [false, 1, 11, '21', 0, 0, 0]

Mental model:
  - we need to analyze each element to determine
    - is it 0? => remove it and increment a (zeroes) counter
    - is it a string that contains a zero or zeroes => remove the zero or zeroes and
      add that many zeroes to (zeroes) counter
  - so will either push the current element to our result array or we will
    transform or remove the current element and keep track of the number of
    zeroes we have dealt with
  - at the end we will append that many (zeroes) to our result array

Data structure:
  - new result array []
  - iterating over given array
    - analyze, if string, split and iterate over result
    - if not string basic conditional tests

Algorithm:
  - declare (result) to []
  - declare (zeros) to 0
  - iterate through given array -> forEach
    - if typeof element returns boolean
      - then push element into result array
    - if element === 0 or element === '0'
      - then add 1 to (zeros) counter
    - if typeof element returns number and is not 0
      - convert to string, split and filter and count (zeros),
         remove zeroes, join, convert to number and push number to (result)
    - if typeof string and is not '0'
      - split string
        - count number of string '0's (filter and length)
        - add that number to (zeros)
        - join the string and use replace to remove zeroes
        - then push that string to (result)
  - push the number of 0s in our (zeros) counter to the (result) array
  - return (result)

Code.

*/

function moveZeros(arr) {
  let result = [];
  let zeros = 0;

  arr.forEach((ele) => {
    if (typeof ele === 'boolean') result.push(ele);

    if (ele === 0 || ele === '0') zeros += 1;

    if (typeof ele === 'number' && ele !== 0) {
      zeros += String(ele).split('').filter((digit) => digit === '0').length;
      result.push(Number(String(ele).replace(/[0]/g, '')));
    }

    if (typeof ele === 'string' && ele !== '0') {
      zeros += ele.split('').filter((digit) => digit === '0').length;
      result.push(ele.replace(/[0]/g, ''));
    }
  });

  while (zeros > 0) {
    result.push(0);
    zeros -= 1;
  }

  return result;
}

console.log(moveZeros([false, 1, 0, 1, 2, 0, 1, 3, "a"])); // [false, 1, 1, 2, 1, 3, "a", 0, 0]
console.log(moveZeros(['raul', 1, 1, '2', 1, 3, "a"])); // ['raul', 1, 1, '2', 1, 3, "a"]
console.log(moveZeros([])); // []
console.log(moveZeros([false, 1, 0, 1, '2', '0', 1, 3, "a"])); // [false, 1, 1, '2', 1, 3, "a", 0, 0]
console.log(moveZeros([false, 1, 0, 101, '201'])); // [false, 1, 11, '21', 0, 0, 0]
console.log(moveZeros([false, 1, 0, 101, '2001'])); // [false, 1, 11, '21', 0, 0, 0, 0]
