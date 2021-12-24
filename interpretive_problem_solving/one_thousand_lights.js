/* one_thousand_lights.js

1000 Lights

You have a bank of switches before you, numbered from 1 to n. Every switch is
connected to exactly one light that is initially off. You walk down the row of
switches and toggle every one of them. You walk back to the beginning of the
row and start another pass. On this second pass, you toggle switches 2, 4, 6,
and so on. On the third pass, you go back to the beginning again, this time
toggling switches 3, 6, 9, and so on. You continue to repeat this process until
you have gone through n repetitions.

Write a program that takes one argument—the total number of switches—and
returns an array of the lights that are on after n repetitions.

lightsOn(5);        // [1, 4]
// Detailed result of each round for `5` lights
// Round 1: all lights are on
// Round 2: lights 2 and 4 are now off;     1, 3, and 5 are on
// Round 3: lights 2, 3, and 4 are now off; 1 and 5 are on
// Round 4: lights 2 and 3 are now off;     1, 4, and 5 are on
// Round 5: lights 2, 3, and 5 are now off; 1 and 4 are on

*/


/* PEDAC

Understand the Problem:
- input
  - a single NUMBER
- output
  - an array of NUMBERS
- rules
  - the given number represents the number of switches as well as the number of
    repetitions for looping through the 'toggling' sequence
  - return an array of numbers representing the switches that are ON at the end
    of the loop of repititions
  - all lights are initially off, but in turn 1 all lights are turned ON, so we
    essentially start at a state of all lights on
  - since we toggle switches my multiples of the current iteration, 1 will be
    turned on during the first pass and remain on for the duration, put another
    way, if a number is ON after that number of iterations, it will number get
    touched(toggled) again
  - given that, I think this is a constant list of result numbers, the question
    is simply to what boundary we generate the this

- clarifying questions
  - will the number always be greater than 0? (assume yes)
  - if not, what should we return for these inputs (assume empty array)

Examples/test cases:
- happy path
  - positive integer argument
    - 5     // [1, 4]
    - 7     // [1, 4]
    - 100   // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
- edge cases(bounds/emptiness)
  - 0, negative numbers, missing argument
    - return empty array in this case

Data structure:
  - it seems simplest to use an object, and create (switches) with a key name
    of the switch number and a value that is a boolean, true == on, false == off
  - we can then filter the resulting array by iterating through Object.keys for
    true values
  - remember we'll be using strings to represent the numbers for keys, those
    will need to be converted to numbers during loop toggling and for final
    result array.

Algorithm:
  - declare switchesLeftOn to []
  - declare bankOfSwitches to {}
  - setup switches, iterate from 1 to given number
    - insert property with number as key and true as value into (bankOfSwitches)
  - perform toggling loop
    - variable to track iteration number starting at 2
    - looping while less than or equal to given number
    - if switch number is a multiple of the iteration number toggle its boolean
  - iterate through Object.keys for (bankOfSwitches)
    - if the value is true push the key name converted to a number into
      our (switchesLeftOn) array.
  - return (switchesLeftOn)

Code.

*/

"use strict";

function createBankOfSwitches(numberOfSwitches) {
  let bankOfSwitches = {};
  for (let idx = 1; idx <= numberOfSwitches; idx++) {
    bankOfSwitches[idx] = false;
  }

  return bankOfSwitches;
}

function lightsOn(switches) {
  let bankOfSwitches = createBankOfSwitches(switches);
  let switchNames = Object.keys(bankOfSwitches);

  for (let jdx = 1; jdx <= switches; jdx++) {
    switchNames.forEach(element => {
      if (Number(element) % jdx === 0) {
        bankOfSwitches[element] = !(bankOfSwitches[element]);
      }
    });
  }

  return switchNames.map(Number).filter(element => {
    return bankOfSwitches[String(element)];
  });
}

console.log(lightsOn(-5));     // []
console.log(lightsOn(0));      // []
console.log(lightsOn(5));      // [1, 4]
console.log(lightsOn(7));      // [1, 4]
console.log(lightsOn(100));    // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn());       // []
console.log(lightsOn('a'));    // []