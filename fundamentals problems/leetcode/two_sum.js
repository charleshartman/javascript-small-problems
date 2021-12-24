// two_sum.js

"use strict";

var twoSum = function(nums, target) {
  const foundNums = {};
  let counterpart;

  for (let index = 0; index < nums.length; index += 1) {
    counterpart = target - nums[index];
    if (foundNums[counterpart] !== undefined) {
      return [foundNums[counterpart], index];
    } else {
      foundNums[nums[index]] = index;
    }
  }

  return [];
};

console.log(twoSum([2,7,11,15], 9)) // [0, 1]
console.log(twoSum([3,2,4], 6))     // [1, 2]
console.log(twoSum([3,3], 6))       // [0, 1]
