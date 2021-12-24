/* exercise_3.js

Multiply All Pairs

Write a function that takes two array arguments, each containing a list of
numbers, and returns a new array containing the products of all combinations
of number pairs that exist between the two arrays. The returned array should
be sorted in ascending numerical order.

You may assume that neither argument will be an empty array. */

function multiplyAllPairs(arr1, arr2) {
  const result = [];

  arr1.forEach(num1 => {
    arr2.forEach(num2 => {
      result.push(num1 * num2);
    });
  });

  return result.sort((a, b) => a - b);
}

console.log(multiplyAllPairs([2, 4], [4, 3, 1, 2]));    // [2, 4, 4, 6, 8, 8, 12, 16]
