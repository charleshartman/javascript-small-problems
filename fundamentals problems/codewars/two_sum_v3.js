// two_sums_v3.js

"use strict";

function twoSum(arr, total) {
  const foundNums = {};
  let counterpart;

  for (let index = 0; index < arr.length; index += 1) {
    counterpart = total - arr[index];
    if (foundNums[counterpart] !== undefined) {
      return [foundNums[counterpart], index];
    } else {
      foundNums[arr[index]] = index;
    }
  }

  return [];
}

console.log(twoSum([1, 2, 3], 4));              // [0, 2]
console.log(twoSum([1234, 5678, 9012], 14690)); // [1 ,2]
console.log(twoSum([2,2,3], 4));                // [0, 1]
console.log(twoSum([3,2,4], 6));                // [1, 2]
console.log(twoSum([3,2,5], 6));                // []
