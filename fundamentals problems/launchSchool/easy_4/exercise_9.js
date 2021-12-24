/* exercise_9.js

How Many

Write a function that counts the number of occurrences of each element in a
given array. Once counted, log each element alongside the number of occurrences.

*/

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
  'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  const result = {};
  for (let index = 0; index < arr.length; index += 1) {
    if (result[arr[index]]) {
      result[arr[index]] += 1;
    } else {
      result[arr[index]] = 1;
    }
  }

  Object.keys(result).forEach(element => {
    console.log(`${element} => ${result[element]}`);
  });
}

countOccurrences(vehicles);

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
