/* version_number_sort.js

An Example Problem: Comparing Version Numbers

To look at the steps of this problem solving approach in depth, we will work
through a problem and see how to apply each step in the process. The problem we
will look at compares software version numbers.

While version numbers often appear to be decimal numbers, they are, in fact,
a convenient notation for a more complicated number system. The following are
all legal version numbers:

1
1.0
1.2
3.2.3
3.0.0
4.2.3.0

Write a function that takes any two version numbers in this format and compares
them, with the result of this comparison showing whether the first is less than,
equal to, or greater than the second version:

If version1 > version2, we should return 1.
If version1 < version2, we should return -1.
If version1 === version2, we should return 0.
If either version number contains characters other than digits and
the . character, we should return null.

Here is an example of version number ordering:
0.1 < 1 = 1.0 < 1.1 < 1.2 = 1.2.0.0 < 1.18.2 < 13.37

*/
"use strict";

function compareVersions(version1, version2) {
  let invalid = /[^0-9.]|^\.|\.$|\.\./;
  if (invalid.test(version1) || invalid.test(version2)) {
    return null;
  }

  let ver1 = version1.split('.').map(Number);
  let ver2 = version2.split('.').map(Number);
  let longestArrayLength = Math.max(ver1.length, ver2.length);

  for (let index = 0; index < longestArrayLength; index += 1) {
    let val1 = ver1[index] || 0;
    let val2 = ver2[index] || 0;

    if (val1 > val2) {
      return 1;
    } else if (val2 > val1) {
      return -1;
    }
  }

  return 0;
}

// my test cases
console.log(compareVersions('1.2', '1.2.0.0'));      // 0
console.log(compareVersions('1', '1.0'));            // 0
console.log(compareVersions('2.13.1', '2.2'));       // 1
console.log(compareVersions('1.18.2', '13.37'));     // -1
console.log(compareVersions('0.1', '1'));            // -1
console.log(compareVersions('1.2.0.0', '1.18.2'));   // -1
console.log(compareVersions('charles', '1.23'));     // null
console.log(compareVersions('1.8', 'pete'));         // null

// LS test cases with edges
console.log(compareVersions('1', '1'));            // 0
console.log(compareVersions('1.1', '1.0'));        // 1
console.log(compareVersions('2.3.4', '2.3.5'));    // -1
console.log(compareVersions('1.a', '1'));          // null
console.log(compareVersions('.1', '1'));           // null
console.log(compareVersions('1.', '2'));           // null
console.log(compareVersions('1..0', '2.0'));       // null
console.log(compareVersions('1.0', '1.0.0'));      // 0
console.log(compareVersions('1.0.0', '1.1'));      // -1
console.log(compareVersions('1.0', '1.0.5'));      // -1

/* PEDAC
understand the Problem
input: implicitly a string
output: number (1, -1, 0) returned based on comparision of the two arguments

explicit requirements: accept decimal looking 'number' with any amount of points
  '.' and achieve token by token comparison of numerical greater than, lesser
  than or equality, return 1, -1, 0 based on result

rules:
  - achieve comparison of two strings that represent version numbers by
    comparing them token by token. Each numerical element separated by a (.)
    is a token in this mental model
  - return `null` if either given string contains a character that is not a
    number or a point ('.')

clarifying questions:
  - confirm that the input is a string

mental model:

Examples/test cases:
  0.1 < 1
  1 = 1.0
  1.0 < 1.1
  1.1 < 1.2
  1.2 = 1.2.0.0
  1.2.0.0 < 1.18.2
  1.18.2 < 13.37

Data structure:
  - we need to make an iterative comparison, token by token
    - so split given strings into arrays on the (.) delimiter

Algorithm:
  - guard clause: if either string contains [^0-9.] then return null
  - declare (ver1) and (ver2) and assign the return of splitting each argument
    on (.) and mapping to Numbers
  - iterate through (ver1) indices
    - compare value at each index, if greater or lesser return 1 or -1
    - if we make it through all iterations without returning 1 or -1 then must
      be equal, iteration finishes
  - return 0

Code!

*/
