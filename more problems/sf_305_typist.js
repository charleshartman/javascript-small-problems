/* sf_305_typist.js

Task

John is a typist. He has a habit of typing: he never use the Shift key to
switch case, just using only Caps Lock.

Given a string s. Your task is to count how many times the keyboard has been
tapped by John.

You can assume that, at the beginning the Caps Lock light is not lit.

Input/Output

[input] string s
A non-empty string. It contains only English letters(uppercase or lowercase).
1 ≤ s.length ≤ 10000

[output] an integer
The number of times John tapped the keyboard.

Examples
For s = "a", the output should be 1.
John hit button a.

For s = "aa", the output should be 2.
John hit button a, a.

For s = "A", the output should be 2.
John hit button Caps Lock, A.

For s = "Aa", the output should be 4.
John hit button Caps Lock, A, Caps Lock, a. */


/* PEDAC

Understand the Problem:
  input
  - string containing only letters, upper and lower case
  output
  - number

- rules & definitions:
  explicitly stated
  - caplock starts off in the off position
  - based on input string count the number of key presses required to create
    the given string
  - a switch from one case to the other requires two key presses
  - otherwise a consistent case from letter to letter requires one key press
  - if first char is lowercase, count starts at zero, otherwise 1
  - input string is at least one character

  implicitly identified
  -


- clarifying questions & answers
  -

Examples/test cases:
  happy path(generic)
  - see below

  edge cases(boundaries/emptiness)
  - none identified


Mental model:
  - start count at either 1 or 0 based on case, if case changes, change toggle
    and add 2, otherwise add 1
Data structure:
  - use number to hold (keyPressCount)
  - use boolean to hold (isLower)
  - iterate through string with for loop

Algorithm:
  - declare (keyPressCount)
  - declare (isLower)

  - return (keyPressCount)

Code.

*/

"use strict";

function typist() {}

console.log((typist("a") === 1));
console.log((typist("aa") === 2));
console.log((typist("A") === 2));
console.log((typist("AA") === 3));
console.log((typist("aA") === 3));
console.log((typist("Aa") === 4));
console.log((typist("BeiJingDaXueDongMen") === 31));
console.log((typist("AAAaaaBBBbbbABAB") === 21));
console.log((typist("AmericanRAILWAY") === 18));
console.log((typist("AaAaAa") === 12));
console.log((typist("DFjfkdaB") === 11));