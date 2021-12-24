/* eslint-disable id-length */
/* one_thousand_lights_again.js

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
  input
  - a number representing the number of switches and the number of repetitions
  output
  - an array representing the switches that are 'on' after n repititions

- rules & definitions:
  explicitly stated
  - all switches start off with a state of ON (true)
  - starting with 2 we need to toggle (change the value to the opposite of its
    current value) each switch that is a multiple of n
  - we do this n times (iow we check the multiple (or modulo) of the current
    repetition ... we do this through all repetitions

  implicitly identified
  -


- clarifying questions & answers
  - confirm input will never be missing and never anything other than a positive
    integer

Examples/test cases:
  happy path(generic)
  - lightsOn(5);        // [1, 4]
  - lightsOn(6);        // [1, 4, 6]
  - lightsOn(7);        // [1, 4, 6, 7]

  edge cases(boundaries/emptiness)
  -


  {1: true, 2: false, 3: false, 4: true, 5: false, 6: false }

Mental model:
  -
Data structure:
  - object to represent bank of switches, key is switch number, value is boolean
  - iterate changing/toggling values as necessary as per rules
  - after all (n) iterations return an array of keys (as numbers) where the
    value is true

Algorithm:
  - declare (lights) and assign to return value of iterating from 1 to given
    number and creating k-v pairs, 1: true, 2: true, etc...

  - iterate n number of times starting at 2
    - on each iteration check if value of each light % n === 0
      if it does toggle its BOOLEAN


  - return keys of (lights) filtered to those that are TRUE

Code.

*/

function lightsOn(num) {
  let lights = {};
  for (let i = 1; i <= num; i++) {
    lights[i] = true;
  }

  for (let i = 2; i <= num; i++) {
    Object.keys(lights).forEach((key) => {
      if (Number(key) % i === 0) {
        lights[key] = !lights[key];
      }
    });
  }

  return Object.keys(lights).filter((key) => lights[key] === true).map(Number);
}


console.log(lightsOn(-5));     // []
console.log(lightsOn(0));      // []
console.log(lightsOn(5));      // [1, 4]
console.log(lightsOn(6));      // [1, 4]
console.log(lightsOn(7));      // [1, 4]
console.log(lightsOn(100));    // [1, 4, 9, 16, 25, 36, 49, 64, 81, 100]
console.log(lightsOn());       // []
console.log(lightsOn('a'));    // []
