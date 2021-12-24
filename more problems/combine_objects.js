/* combine_objects.js

Your task is to write a function that takes two or more objects and returns a
new object which combines all the input objects.

All input object properties will have only numeric values. Objects are combined
together so that the values of matching keys are added together.

An example:
const objA = { a: 10, b: 20, c: 30 }
const objB = { a: 3, c: 6, d: 3 }
combine(objA, objB) // Returns { a: 13, b: 20, c: 36, d: 3 }

The combine function should be a good citizen, so should not mutate the input
objects. */

/* PEDAC

Understand the Problem:
- input
  - two or more objects
- output
  - one NEW object
- rules
  - do not mutate the input objects
  - accept two or more objects
  - object properties contain only number values
  - combine all input objects, if property names already exist then add value

- clarifying questions
  -

Examples/test cases:
- happy path
  -
- edge cases(bounds/emptiness)
  -

Data structure:
  -

Algorithm:
  - declare (result) to {}
  - iterate through (args) array
  - iterate through each object with keys
    - if key is present add value
      - else add key and value
  - return result

Code.

*/

"use strict";

function combine(...objs) {
  let result = {};

  objs.forEach((obj) => {
    Object.keys(obj).forEach((key) => {
      if (result[key]) {
        result[key] += obj[key];
      } else {
        result[key] = obj[key];
      }
    });
  });

  return result;
}


const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
const objC = { a: 5, d: 11, e: 8 };
const objD = { c: 3 };

console.log(combine(objA, objB));       // { a: 13, b: 20, c: 36, d: 3 }
console.log(combine(objA, objC));       // { a: 15, b: 20, c: 30, d: 11, e: 8 }
console.log(combine(objA, objB, objC)); // { a: 18, b: 20, c: 36, d: 14, e: 8 }
console.log(combine(objA, objC, objD)); // { a: 15, b: 20, c: 33, d: 11, e: 8 }
console.log(combine({}, {}, {}));       // {}
console.log(combine(objA, objC, {}));   // { a: 15, b: 20, c: 30, d: 11, e: 8 }

