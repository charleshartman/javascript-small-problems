/* pp_total_sq_area.js

Practice Problem: Total Square Area

For this practice problem, we'll represent rectangles as Arrays with two
elements: a height and a width.

Write a Function named totalArea that takes an Array of rectangles as an
argument. The Function should return the total area covered by all the
rectangles. */

// function totalArea(arr) {
//   return arr.reduce((total, sub) => {
//     return total + (sub[0] * sub[1]);
//   }, 0);
// }

function totalArea(arr) {
  let areas = arr.map(sub => sub[0] * sub[1]);
  let total = areas.reduce((sum, area) => sum + area);
  return total;
}

let rectangles = [[3, 4], [6, 6], [1, 8], [9, 9], [2, 2]];
console.log(totalArea(rectangles));    // 141

function totalSquareArea(arr) {
  let squares = arr.filter(sub => sub[0] === sub[1]);
  return totalArea(squares);
}

console.log(totalSquareArea(rectangles));    // 121