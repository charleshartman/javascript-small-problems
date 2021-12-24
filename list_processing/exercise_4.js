/* exercise_4.js

Sum of Sums

Write a function that takes an array of numbers and returns the sum of the sums
of each leading subsequence in that array. Examine the examples to see what we
mean. You may assume that the array always contains at least one number. */

function sumOfSums(arr) {
  let result = arr.map((_, idx) => {
    return arr.slice(0, idx + 1).reduce((sum, num) => sum + num);
  });

  return result.reduce((sum, num) => sum + num);
}

// function sumOfSums(arr) {
//   return arr.map((_, idx) => arr.slice(0, idx + 1)
//     .reduce((sum, num) => sum + num))
//     .reduce((sum, num) => sum + num);
// }

/* Mia recursion:

function sumOfSums(arr, total = 0) {
  if (arr.length === 0) return total;
  total += arr.reduce((sum, num) => sum + num);
  return sumOfSums(arr.slice(0, -1), total);
}

*/
console.log(sumOfSums([3, 5, 2]));        // (3) + (3 + 5) + (3 + 5 + 2) --> 21
console.log(sumOfSums([1, 5, 7, 3]));     // (1) + (1 + 5) + (1 + 5 + 7) + (1 + 5 + 7 + 3) --> 36
console.log(sumOfSums([4]));              // 4
console.log(sumOfSums([1, 2, 3, 4, 5]));  // 35

/* algorigthm
  - map reduced slices into (result)
  - sum (result) and return
*/