/* eslint-disable max-len */
/* eslint-disable no-sparse-arrays */

/* doubler.js

Write a function called doubler that doubles every value in an array.

- elements that are numbers should be multiplied by 2
- elements that are strings should be repeated twice via concatenation
- other types of elements should be duplicated in the array
- the input array should not be mutated
- elements that are special number values should remain unchanged
- elements that are any other type of number should be treated normally (multiplied by 2)
- elements that are empty strings should remain unchanged
- elements that are any other type of string should be treated normally (repeated twice)
- the input array can contain a mixture of different types of elements
- non-primitive elements should have their reference duplicated, not their value
- elements that appear more than once should be treated normally (as specified above)
- elements that contain nested arrays or objects should be treated normally (duplicated)
- if the input array contains empty slots (a "sparse array"), they should be removed
- if an inner array (element) contains empty slots, they should remain unchanged
- if the input array contains any object properties, they should remain unchanged
- if an inner array (element) contains any object properties, they should remain unchanged
- if the array is empty, return an empty array
- if multiple arguments are passed, ignore all but the first
- if the argument is a string, treat it as an array of characters
- if the argument is a non-negative integer, treat it as an array of digits
- if the argument is an object, treat it as an array of its property values
- all other kinds of inputs are invalid, and should return the string 'Invalid input'

*/

function doubler() {

}

console.log(doubler([1, 2, 3]));                   // [2, 4, 6]
console.log(doubler(['a', 'b', 'c']));             // ['aa', 'bb', 'cc']
console.log(doubler([true, 1, {1: 'beef'}]));      // [true, true, [1, 2] [1, 2], {1: 'beef'}, {1: 'beef'}]

const arr = [2, 4, 6];
console.log(doubler(arr));   // [4, 8, 12]
console.log(arr);            // [2, 4, 6]

console.log(doubler([NaN, Infinity, -Infinity]));  // [NaN, Infinity, -Infinity]

console.log(doubler([1.1, -2.2, 3.02]));           // [2.2, -4.4, 6.04]
console.log(doubler(['', 'cat', '9']));            // ['', 'catcat', '99']
console.log(doubler([]));                          // []
console.log(doubler([[], [1]]));                   // [[], [], [1], [1]]
console.log(doubler([1, 2, 3], ['a', 'b', 'c']));  // [2, 4, 6]
console.log(doubler(123));                         // [2, 4, 6]
console.log(doubler('abc'));                       // ['aa', 'bb', 'cc']
console.log(doubler({1: 'a', 2: 'b', 3: 'c'}));    // ['aa', 'bb', 'cc']
console.log(doubler(['a', , 'b', 'c']));           // ['aa', 'bb', 'cc']
console.log(doubler(undefined));                   // 'Invalid input'
console.log(doubler([undefined, null]));           // [undefined, undefined, null, null]
console.log(doubler([['a', , 'b', 'c']]));         // [['a', , 'b', 'c'], ['a', , 'b', 'c']]
