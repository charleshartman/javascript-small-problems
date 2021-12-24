// two_sums_v2.js

"use strict";

function twoSum(arr, total) {
  const foundNums = {};
  const resultTuple = [];
  let counterpart;

  arr.forEach((num, index) => {
    counterpart = total - num;
    if (foundNums[counterpart] !== undefined) {
      resultTuple.push(foundNums[counterpart], index);
    } else {
      foundNums[num] = index;
    }
  });

  return resultTuple;
}

console.log(twoSum([1, 2, 3], 4));              // [0, 2]
console.log(twoSum([1234, 5678, 9012], 14690)); // [1 ,2]
console.log(twoSum([2,2,3], 4));                // [0, 1]
console.log(twoSum([3,2,4], 6));                // [1, 2]

/* algorithm
  - declare (foundNums) to {}
  - declare (resultTuple) to []
  - iterate through given array with index
    - if total minus element is present in (foundNums)
      - push [index, (foundNums[total - element])] to (resultTuple)
    - else push element: index to (foundNums)
  - return (resultTuple)
*/
