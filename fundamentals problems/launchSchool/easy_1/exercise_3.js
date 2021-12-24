/* exercise_3.js

How Big is the Room

Build a program that asks the user to enter the length and width of a room in
meters, and then logs the area of the room to the console in both square meters
and square feet.

Note: 1 square meter == 10.7639 square feet

Do not worry about validating the input at this time. Use the readlineSync.prompt
method to collect user input.

Example:

Enter the length of the room in meters:
10
Enter the width of the room in meters:
7
The area of the room is 70.00 square meters (753.47 square feet). */

const SQMETERS_TO_SQFEET = 10.7639;

const readlineSync = require('readline-sync');

const length = parseFloat(readlineSync.question('Enter the length of the room in meters: '));
const width = parseFloat(readlineSync.question('Enter the width of the room in meters: '));
const areaMeters = length * width * 1.0;
const areaFeet = areaMeters * SQMETERS_TO_SQFEET;

console.log(`The area of the room is ${areaMeters.toFixed(2)} `
          + `square meters (${areaFeet.toFixed(2)} square feet).`);
