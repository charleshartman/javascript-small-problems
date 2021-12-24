/* tri_angles.js

Tri-Angles

A triangle is classified as follows:

Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must be exactly 180 degrees, and
every angle must be greater than 0. If either of these conditions is not
satisfied, the triangle is invalid.

Write a function that takes the three angles of a triangle as arguments and
returns one of the following four strings representing the triangle's
classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values, so you do not have to
worry about floating point errors. You may also assume that the arguments are
in degrees. */

"use strict";

function triangle(...angles) {
  if (angles.reduce((sum, num) => sum + num) !== 180
    || angles.some(ang => ang <= 0)) {
    return 'invalid';
  }

  if (angles.some(ang => ang === 90)) {
    return 'right';
  } else if (angles.some(ang => ang > 90)) {
    return 'obtuse';
  }

  return 'acute';
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"
