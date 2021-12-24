/* octal_again.js

Practice Problem: Octal

Write a Function named octalToDecimal that performs octal to decimal conversion.
When invoked on a String that contains the representation of an octal number,
the Function returns a decimal version of that value as a Number. Implement the
conversion yourself: do not use something else to perform the conversion for
you.

Decimal, the numbering system we're most familiar with, is a base-10 system.
You can understand the number 233 in base 10 notation as a linear combination
of powers of 10:

The rightmost digit gets multiplied by 100 = 1
The next number gets multiplied by 101 = 10
...
The nth number gets multiplied by 10n-1
All these values are summed
Here is an example:

  233                         // decimal
= 2*10^2 + 3*10^1 + 3*10^0
= 2*100  + 3*10   + 3*1
Octal works in a similar way, but uses powers of 8 rather than powers of 10
(and is called a base-8 system as a result):

  233                          // octal
= 2*8^2 + 3*8^1 + 3*8^0
= 2*64  + 3*8   + 3*1
= 128   + 24    + 3
= 155                          // decimal

*/

/* PEDAC

Understand the Problem:
- input
  - a string of digits [0-9] only
- output
  - a number, representing the conversion of the number represented by the
    string, converted from octal to decimal
- rules
  - starting at the right most digit, multiply the digit by 8**0 and add one
    to the 'power' as we move to the left
  - so if we reverse the number we can multiply by 8**index position
  - then sum the results of each product result as in the examples

- clarifying questions
  - do we need to deal with empty or invalid type input
  - are we guaranteed only digits in our input string

Examples/test cases:
- happy path
  - ('1337') === 7*8^0 + 3*8^1 + 3*8^2 + 1*8^3 === 735
- edge cases(bounds/emptiness)
  - ('007') === 7*8^0 + 0*8^1 + 0*8^2 === 7

Data structure:
  - convert string to array with split, reverse it and convert elements to
    numbers, this will leave us with an array where index positions can be used
    as exponents

Algorithm:
  - declare (nums) and assign to given string split and reversed and mapped to
    Numbers
  - declare (result) to 0
  - iterate over (nums) with forEach
    - add sum of multiplying number by Math.pow(8, index) to (result)
  - return (result)

Code.

*/

function octalToDecimal(numberString) {
  let nums = numberString.split('').reverse().map(Number);
  // let result = 0;
  // nums.forEach((num, index) => {
  //   result += num * Math.pow(8, index);
  // });

  // return result;

  // refactored
  return nums.reduce((sum, num, index) => {
    return sum + (num * Math.pow(8, index));
  }, 0);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9

console.log(octalToDecimal('007'));         // 7
console.log(octalToDecimal('1337'));        // 735
