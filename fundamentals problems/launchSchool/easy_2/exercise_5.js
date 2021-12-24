/* exercise_5.js

Right Triangles

Write a function that takes a positive integer, n, as an argument and logs a right
triangle whose sides each have n stars. The hypotenuse of the triangle (the diagonal
side in the images below) should have one end at the lower-left of the triangle, and
the other end at the upper-right.

Examples:

triangle(5);

    *
   **
  ***
 ****
*****

triangle(9);

        *
       **
      ***
     ****
    *****
   ******
  *******
 ********
*********

*/

function triangle(num) {
  let spaces = num - 1;
  let stars = 1;

  while (stars <= num) {
    console.log(`${' '.repeat(spaces)}${'*'.repeat(stars)}`);
    spaces -= 1;
    stars += 1;
  }
}

triangle(5);
triangle(9);

/* Algorithm
  - declare variable (spaces) and assign to given argument - 1
  - declare variable (stars) and assign to 1
  - iterare from 1 to given argument
    - print ' ' number of spaces and '*' number of stars to console
    - stars += 1, spaces -= 1
*/

/* (book)

function triangle(height) {
  let stars = 1;
  let spaces = height - 1;

  for (let i = 0; i < height; i += 1) {
    console.log(repeat(' ', spaces) + repeat('*', stars));
    stars += 1;
    spaces -= 1;
  }
}

function repeat(char, count) {
  let repeated = '';

  for (let i = 0; i < count; i += 1) {
    repeated += char;
  }

  return repeated;
}

*/
