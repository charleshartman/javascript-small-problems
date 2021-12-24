// my_filter.js

function myFilter(array, func) {
  let result = [];

  array.forEach(value => {
    if (func(value)) {
      result.push(value);
    }
  });

  return result;
}


let isPythagoreanTriple = function (trip) {
  return Math.pow(trip.a, 2) + Math.pow(trip.b, 2) === Math.pow(trip.c, 2);
};

console.log(myFilter([
  { a: 3, b: 4,  c: 5 },
  { a: 5, b: 12, c: 13 },
  { a: 1, b: 2,  c: 3 },
], isPythagoreanTriple));

// returns [ { a: 3, b: 4, c: 5 }, { a: 5, b: 12, c: 13 } ]
