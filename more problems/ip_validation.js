/* eslint-disable id-length */
/* ip_validation.js

Write an algorithm that will identify valid IPv4 addresses in dot-decimal
format. IPs should be considered valid if they consist of four octets, with
values between 0 and 255, inclusive.

Valid inputs examples:

Examples of valid inputs:
1.2.3.4
123.45.67.89

Invalid input examples:
1.2.3
1.2.3.4.5
123.456.78.90
123.045.067.089

Notes:
Leading zeros (e.g. 01.02.03.04) are considered invalid
Inputs are guaranteed to be a single string

*/

/* PEDAC

Understand the Problem:
- input
  - a string
- output
  - a BOOLEAN
- rules(explicit & implicit)
  - return true if input string is a valid dot separate IP address
    - four numbers ONLY
    - numbers must be between 0 and 255 (inclusive)
    - numbers may not begin with 0
  - so input will be false if:
    - less than four numbers
    - numbers contain non-numerical chars
    - numbers begin with 0(s)
    - numbers are less than 0 or greater than 255

- clarifying questions
  -

Examples/test cases:
- happy path(generic)
  - (1.2.3.4) === true  // test normal
  - (123.45.67.89) === true  // test normal
  - (255.255.255.0) === true // test inclusivity
  - (1.2.3) === false  // three numbers
  - (1.2.3.4.5) === false  // five numbers
  - (123.456.78.90) === false  // number greater than 255
  - (123.045.067.089) === false // leading zero
  - (abc.df.erw.78) === false  // non-numerics
  - (\n87.45.2.1) === false  // non-numerics

- edge cases(bounds/emptiness)
  - ('') === false  // empty string

Mental Model:
  - after separating the input string to the elements separated by decimal
    points, we will perform a series of tests to indicate if given string
    represents a valid IP number

Data structure:
  - split string on ('.'), test the array itself (length) and then iterate over
    each element for further tests

Algorithm:
  - declare (octets) and initialize to string split on ('.')
  - if the length of (octets) is not 4 then return false
  - iterate with for loop
    - if element coerced to Number is less than 0 or greater than 255
      return false
    - if element coerced to Number then back to string does not equal original
      element then return false
      - if we make it through the for loop without returning false then we
        have a valid IP and may...
  - return true
Code.

*/

function isValidIP(str) {
  let octets = str.split('.');
  if (octets.length !== 4) return false;
  for (let i = 0; i < 4; i++) {
    let oct = Number(octets[i]);
    if (oct < 0 || oct > 255 || (String(oct) !== octets[i])) {
      return false;
    }
  }

  return true;
}

console.log(isValidIP('1.2.3.4') === true);            // test normal
console.log(isValidIP('123.45.67.89') === true);       // test normal
console.log(isValidIP('255.255.255.0') === true);      // test inclusivity
console.log(isValidIP('1.2.3') === false);             // three numbers
console.log(isValidIP('1.2.3.4.5') === false);         // five numbers
console.log(isValidIP('123.456.78.90') === false);     // number greater than 255
console.log(isValidIP('123.045.067.089') === false);   // leading zero
console.log(isValidIP('abc.df.erw.78') === false);     // non-numerics
console.log(isValidIP('\n87.45.2.1') === false);       // non-numerics
console.log(isValidIP('') === false);                  // empty string
