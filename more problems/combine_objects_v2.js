/* eslint-disable max-len */
/* combine_objects_v2.js

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

// Try to merge the objects manually, rather than using built-in methods. For
// bonus practice, what if the values are a different data type, like strings?
// Can you add versatility to your solution?


/* PEDAC

Understand the Problem:
  input
  - two objects
  output
  - a new object that combines the two given objects

- rules & definitions:
  explicitly stated
  - return a new obj
  - combine the two given objects values when they have matching keys
  - otherwise combine by merging k-v pairs

  implicitly identified
  -

- clarifying questions & answers
  - will the numeric values ever be represented as strings?
  - is it possible that one or both input objects will be empty ({})?

Examples/test cases:
  happy path(generic)
  - const objA = { a: 10, b: 20, c: 30, z: 0 }
    const objB = { a: 32, c: 6, d: 3, x: 10, z: 1 }
    console.log(combine(objA, objB)); // Returns { a: 42, b: 20, c: 36, d: 3, x: 10, z: 1 }

  edge cases(boundaries/emptiness)
  - console.log(combine({}, {})); // {}
  - console.log(combine({ a: 1 }, {})); // { a: 1 }
  - console.log(combine({}, { a: 1 })); // { a: 1 }

  - console.log(combine({ a: 10, b: 20, c: '30' }, { b: 10, c: 2})); // { a: 10, b: 30, c: 32 }

Mental model:
  -

Data structure:
  - new object for (result)

Algorithm:
  - declare (result) and insert all values from obj1 into it (coerce values to Number
    in case they are stringified)
  - iterate through keys of obj2
    - if key from obj two exists in obj one then += value (coerced to Number in case
      it is stringified)
    - else add key-value to obj2
  - return result

Code.

*/

"use strict";

function combine(obj1, obj2) {
  let result = {};
  Object.keys(obj1).forEach((key) => {
    result[key] = Number(obj1[key]);
  });

  Object.keys(obj2).forEach((key) => {
    if (result[key]) {
      result[key] += Number(obj2[key]);
    } else {
      result[key] = Number(obj2[key]);
    }
  });

  return result;
}

const objA = { a: 10, b: 20, c: 30 };
const objB = { a: 3, c: 6, d: 3 };
console.log(combine(objA, objB)); // Returns { a: 13, b: 20, c: 36, d: 3 }

const objC = { a: 10, b: 20, c: 30, z: 0 };
const objD = { a: 32, c: 6, d: 3, x: 10, z: 1 };
console.log(combine(objC, objD)); // Returns { a: 42, b: 20, c: 36, z: 1, d: 3, x: 10 }

console.log(combine({}, {})); // {}
console.log(combine({ a: 1 }, {})); // { a: 1 }
console.log(combine({}, { a: 1 })); // { a: 1 }

console.log(combine({ a: 10, b: 20, c: '30' }, { b: 10, c: 2})); // { a: 10, b: 30, c: 32 }
