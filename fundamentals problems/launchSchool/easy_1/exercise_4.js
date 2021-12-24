/* exercise_4.js

Tip Calculator

Create a simple tip calculator. The program should prompt for a bill amount and
a tip rate. The program must compute the tip, and then log both the tip and the
total amount of the bill to the console. You can ignore input validation and
assume that the user will put in numbers.

Example:

What is the bill? 200
What is the tip percentage? 15

The tip is $30.00
The total is $230.00

*/

const readlineSync = require('readline-sync');

const bill = parseFloat(readlineSync.question('What is the bill? '));
const tipPercentage = parseFloat(readlineSync.question('What is the tip percentage? '));
const tip = bill * (tipPercentage * 0.01);
const total = bill + tip;

console.log(`The tip is $${tip.toFixed(2)}\nThe total is $${total.toFixed(2)}`);

