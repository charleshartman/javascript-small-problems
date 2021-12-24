/* eslint-disable id-length */
/* three_sum.js

Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]]
such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

Input: nums = [-1, 0, -1, 2, -1, -4, 1]
i; i < - 2
j i+3

Output: [[-1, -1, 2], [-1, 0, 1]]
*/

/* PEDAC

Understand the Problem:
- input
  - an array of numbers, may be positive, negative or zero
- output
  - an array of three element subarrays, 'triplets'
- rules(explicit & implicit)
  - find three elements within the given array that sum to 0
  - we may use each element only once per subarray
  - given array may be empty

- clarifying questions
  - do not mutate given array

Examples/test cases:
- happy path(generic)
  - [-1, 0, -1, 2, -1, -4, 1] => [[-1, -1, 2], [-1, 0, 1]]
  - [-10, 20, 13, -10] => [[-10, 20, -10]]
  - [-1, 0, -1, 2, -1, -4, 1, 4] => [[-1, -1, 2], [-1, 0, 1], [0, -4, 4]]
  - [-1, 0, 2, -4, 1] => [[-1, 0, 1]]
  - [-1, 0, 2] => []
  - [-1, 0, 1] => [-1, 0, 1]

- edge cases(bounds/emptiness)
  - [] => []
  - [2, 3] => []

Mental Model:
  - we are looking for combinations of three distinct elements within the given
    array that sum to zero
  - we can iterate over the given array looking for those three distinct
    elements, if we find them, we add them to our result array and then search
    again, once we don't find any more combinations, we stop iterating and
    return the result
  - we want all combinations of three numbers from given array

Data structure:
  - return a new array of three element subarrays
  - using iteration conditionals over the given array

Algorithm:
  - declare (result)

Code.

*/

function getCombinations(arr) {
  let combos = [];
  for (let i = 0; i < arr.length - 2; i++) {
    for (let j = i + 1; j < arr.length - 1; j++) {
      for (let k = j + 1; k < arr.length; k++) {
        combos.push([arr[i], arr[j], arr[k]]);
      }
    }
  }

  return combos;
}

function eliminateDups(arr) {
  let uniques = [];
  let seen = {};
  arr.forEach((sub) => {
    if (!seen[String(sub)]) {
      seen[String(sub)] = true;
      uniques.push(sub);
    }
  });

  return uniques;
}

function threeSum(arr) {
  let combos = getCombinations(arr);
  let subs = combos.filter((sub) => (sub.reduce((sum, num) => sum + num)) === 0)
    .map((sub) => sub.sort((a, b) => a - b));

  return eliminateDups(subs);
}

console.log(threeSum([-1, 0, -1, 2, -1, -4, 1]));    // [[-1, -1, 2], [-1, 0, 1]]
console.log(threeSum([-10, 20, 13, -10]));           // [[-10, 20, -10]]
console.log(threeSum([-1, 0, -1, 2, -1, -4, 1, 4])); // [[-1, -1, 2], [-1, 0, 1], [0, -4, 4]]
console.log(threeSum([-1, 0, 2, -4, 1]));            // [[-1, 0, 1]]
console.log(threeSum([-1, 0, 2]));                   // []
console.log(threeSum([-1, 0, 1]));                   // [[-1, 0, 1]]
console.log(threeSum([]));                           // []
console.log(threeSum([2, 3]));                       // []
