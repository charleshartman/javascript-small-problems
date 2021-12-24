/* exercise_2.js

Searching 101

Write a program that solicits six numbers from the user and logs a message that
describes whether the sixth number appears among the first five numbers.

Examples:

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 17

The number 17 appears in [25, 15, 20, 17, 23].

-----

Enter the 1st number: 25
Enter the 2nd number: 15
Enter the 3rd number: 20
Enter the 4th number: 17
Enter the 5th number: 23
Enter the last number: 18

The number 18 does not appear in [25, 15, 20, 17, 23].

*/

"use strict";

let readlineSync = require('readline-sync');
let numbers = [];

numbers.push(Number(readlineSync.question('Enter the 1st number: ')));
numbers.push(Number(readlineSync.question('Enter the 2nd number: ')));
numbers.push(Number(readlineSync.question('Enter the 3rd number: ')));
numbers.push(Number(readlineSync.question('Enter the 4th number: ')));
numbers.push(Number(readlineSync.question('Enter the 5th number: ')));

const query = Number(readlineSync.question('Enter the last number: '));

if (numbers.includes(query)) {
  console.log(`The number ${query} appears in [${numbers.join(', ')}].`);
} else {
  console.log(`The number ${query} does not appear in [${numbers.join(', ')}].`);
}

// function isIncluded(arr, val) {
//   for (let i = 0; i < arr.length; i += 1) {
//     if (arr[i] > val) {
//       return true;
//     }
//   }
//
//   return false;
// }
