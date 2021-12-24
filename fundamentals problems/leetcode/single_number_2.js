// single_number_2.js
// 137. Single Number II - Medium

// Given an integer array nums where every element appears three times except
// for one, which appears exactly once. Find the single element and return it.

// You must implement a solution with a linear runtime complexity and use only
// constant extra space.

var singleNumber = function(nums) {
  // const obj = {};
  // nums.forEach(num => {
  //   if (obj[nums] !== undefined) {
  //     obj[nums] += 1;
  //   } else {
  //     obj[nums] = 1;
  //   }
  // });
  
  // const sortedNums = nums.sort((a, b) => a - b );
  // console.log(sortedNums);

 };

console.log(singleNumber([2,2,3,2]) === 3);
console.log(singleNumber([0,1,0,1,0,1,99]) === 99);
