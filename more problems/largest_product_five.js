/* largest_product_five.js

Largest product in a series

https://www.codewars.com/kata/529872bdd0f550a06b00026e/train/javascript

Complete the greatestProduct method so that it'll find the greatest product
of five consecutive digits in the given string of digits.

For example:
greatestProduct("123834539327238239583") // should return 3240

The input string always has more than five digits.
Adapted from Project Euler. */


/* ravenStarship study group

UNDERSTAND THE PROBLEM
  Inputs
    - one string, representing a set of numbers
  Outputs
    - one integer, representing the product of exactly 5 consecutive numbers in
      the original string
Rules/Implicit Requirements
  - product must be exactly from 5 consecutive digits
  - must be the greatest product
  - the product is always going to be an integer >= 0
  - we're dealing with base 10, digits 0-9
Clarifying Questions
  -
Mental Model (optional)
  -

EXAMPLES/TEST CASES
"123834539327238239583" => 3*9*5*8*3 => 3240

DATA STRUCTURE
  Inputs
    - string of digits
  Rules
    -

ALGORITHM
  - declare (result) to 0
  - create array of every consectutive group of five digits
  - convert string of digits to array of numbers
    - split('')
    - map string digits to numbers using Number
  - declare start index to 0
  - declare ending index to 5
  - for loop or while loop:
  - Use slice to obtain the 5 consecutive digits on each iteration of the for
    loop
  - Break out of the loop once we reach the last 5 consecutive digits
  - Compute the product of those digits, if that product is greater than the
    result, we re-assign the result to that product
  - return result

# CODE
*/

function greatestProduct(str) {
  let result = 0;
  for (let idx = 0; idx <= str.length - 5; idx += 1) {
    let currentProduct = str.slice(idx, idx + 5)
      .split('')
      .reduce((product, char) => product * Number(char), 1);

    if (currentProduct > result) result = currentProduct;
  }

  return result;
}

console.log(greatestProduct("123834539327238239583") === 3240);
console.log(greatestProduct("92494737828244222221111111532909999") === 5292);
console.log(greatestProduct("02494037820244202221011110532909999") === 0);
