/* count_the_divisors.js

Count the number of divisors of a positive integer n.

Random tests go up to n = 500000. */

// let getDivisorsCnt = function(int) {
//   let resultArr = [];
//   for (let num = 1; num <= int; num++) {
//     if (int % num === 0) resultArr.push(num);
//   }
//
//   return resultArr.length;
// };

function getDivisorsCnt(int) {
  let result = 0;
  for (let num = 1; num <= int; num++) {
    if (int % num === 0) result += 1;
  }

  return result;
}

console.log(getDivisorsCnt(4) === 3);  // 1, 2, 4
console.log(getDivisorsCnt(5) === 2);  // 1, 5
console.log(getDivisorsCnt(12) === 6); // 1, 2, 3, 4, 6, 12
console.log(getDivisorsCnt(30) === 8); // 1, 2, 3, 5, 6, 10, 15, 30
