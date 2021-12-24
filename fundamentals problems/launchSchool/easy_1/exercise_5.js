/* exercise_5.js

Sum or Product of Consecutive Integers

Write a program that asks the user to enter an integer greater than 0, then asks
if the user wants to determine the sum or the product of all numbers between 1
and the entered integer, inclusive.

Examples:

Please enter an integer greater than 0: 5
Enter "s" to compute the sum, or "p" to compute the product. s

The sum of the integers between 1 and 5 is 15.

Please enter an integer greater than 0: 6
Enter "s" to compute the sum, or "p" to compute the product. p

The product of the integers between 1 and 6 is 720. */

function factorial(num) {
  let product = 1;
  for (let count = 1; count <= num; count += 1) {
    product *= count;
  }

  return product;
}

function summed(num) {
  let sum = 0;
  for (let count = 1; count <= num; count += 1) {
    sum += count;
  }

  return sum;
}

const readlineSync = require('readline-sync');

const numberChoice = Number(readlineSync.question('Please enter an integer greater than 0: '));
const sumOrProduct = readlineSync.question('Enter "s" to compute the sum, or "p" to compute the product. ');

if (sumOrProduct === 'p') {
  console.log(`The product of the integers between 1 and ${numberChoice} is ${factorial(numberChoice)}.`);
} else if (sumOrProduct === 's') {
  console.log(`The product of the integers between 1 and ${numberChoice} is ${summed(numberChoice)}.`);
} else {
  console.log('Invalid selection. Exiting...');
}
