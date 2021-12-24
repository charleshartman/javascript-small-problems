/* diamonds.js

Diamonds

Write a function that displays a four-pointed diamond in an nxn grid, where n
is an odd integer supplied as an argument to the function. You may assume that
the argument will always be an odd integer. */

/* PEDAC
understand the Problem
input: a single ODD integer
output: a four pointed star, at it's widest point (middle row) it is given
  integer stars(*) wide/long

explicit requirements: output a number of lines of * to the console based on
  given argument, the output should be diamond shaped, each row successively
  longer (starting at one, growing to the middle point then shorter back to one

rules:
  - output is diamond shaped

clarifying questions: none

mental model: work up to an output that is n times *, starting from 1, then
  work down from n to 1

Examples/test cases:
invoked with the argument 5 would output:
  *
 ***
*****
 ***
  *

Data structure: integers to track * and whitespace, concatenated strings
    to build diamond

Algorithm:
  main
  - declare (stars) to 1
  - declare (spaces) to n / 2 rounded down (floor)
  - begin while loop, while stars <= to given number
    - output string that is concat of spaces + stars
    - reassign stars + 2 and spaces - 1
  - reset stars to given int - 2
  - reset spaces to stars - 1
  - while stars > 0
    - output string that is concat of spaces + stars
    - reassign stars - 2 and spaces + 1

  subprocess to build string:
    - take to args, (spaces) and (stars)
    - log the concat of spaces * ' ' and stars * '*'
Code!
*/

function buildRow(spaces, stars) {
  console.log(' '.repeat(spaces) + '*'.repeat(stars));
}

function diamond(middle) {
  let stars = 1;
  let spaces = Math.floor(middle / 2);

  while (stars <= middle) {
    buildRow(spaces, stars);
    stars += 2;
    spaces -= 1;
  }

  if (middle === 1) {
    return;
  }

  stars -= 4;
  spaces += 2;

  while (stars > 0) {
    buildRow(spaces, stars);
    stars -= 2;
    spaces += 1;
  }
}

diamond(1);
diamond(3);
diamond(9);
/* logs

    *
   ***
  *****
 *******
*********
 *******
  *****
   ***
    *

*/