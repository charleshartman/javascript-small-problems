// running_sum_of_1d_array.js
// 1480. Running Sum of 1d Array - Easy

// Given an array nums. We define a running sum of an array as
// runningSum[i] = sum(nums[0]…nums[i]).

// Return the running sum of nums.

"use strict";

var runningSum = function(nums) {
  let sum = 0;
  return nums.map(num => sum += num);
};

console.log(runningSum([1, 2, 3, 4]))     // [1, 3, 6, 10]
console.log(runningSum([1, 1, 1, 1, 1]))  // [1, 2, 3, 4, 5]
console.log(runningSum([3, 1, 2, 10, 1])) // [3, 4, 6, 16, 17]

// Other option is to mutate array for O(1) space complexity
