/* eslint-disable id-length */
/* dance_for_cash.js

Dance for Cash

Your local bank has decided to upgrade its ATM machines by incorporating motion
sensor technology. The machines now interpret a series of consecutive dance
moves in place of a PIN number.

Create a program that converts a customer's PIN number to its dance equivalent.
There is one dance move per digit in the PIN number. A list of dance moves is
given in the code.

Notes:

Each dance move will be selected from a list by index based on the current
digit's value plus that digit's index value. If this value is greater than
the last index value of the dance list, it should cycle to the beginning
of the list.

Valid input will always be a string of four digits. Output will be a string
array.

If the input is not four valid numbers, return the string, "Invalid input." */


/* algorithm
  - guard: if string contains anything other than numbers || given string length
    does not equal 4, then return "Invalid input."
  - declare (result) array to []
  - iterate through each char coerced to Number
    - if number plus index value is less than length of MOVES then push the
      value in MOVES at number plus index value to result otherwise push the
      value in MOVES at  (remainder of MOVES.length / MOVES.length to number)
      to result
  - return result
*/

"use strict";

const MOVES = [
  "Shimmy", "Shake", "Pirouette", "Slide", "Box Step", "Headspin",
  "Dosado", "Pop", "Lock", "Arabesque"
];

function danceConvert(pin) {
  if (pin.length !== 4 || /[^0-9]/.test(pin)) return "Invalid input.";
  let result = [];
  for (let i = 0; i < pin.length; i++) {
    let move = Number(pin[i]) + i;
    result.push(move <= 9 ? MOVES[move] : MOVES[move % MOVES.length]);
  }

  return result;
}

console.log(danceConvert("0000")); // ➞ ["Shimmy", "Shake", "Pirouette", "Slide"]
console.log(danceConvert("3856")); // ➞ [ "Slide", "Arabesque", "Pop", "Arabesque" ]
console.log(danceConvert("9999")); // ➞ [ "Arabesque", "Shimmy", "Shake", "Pirouette" ]
console.log(danceConvert("32a1")); // ➞ "Invalid input."

