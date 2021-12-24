/* pp_octal_to_decimal.js

Practice Problem: Octal

Write a Function named octalToDecimal that performs octal to decimal conversion.
When invoked on a String that contains the representation of an octal number,
the Function returns a decimal version of that value as a Number. Implement the
conversion yourself: do not use something else to perform the conversion for
you. */

function octalToDecimal(numberString) {
  let digits = numberString.split('').map((digit, index) => {
    return digit * Math.pow(8, numberString.length - index - 1);
  });

  return digits.reduce((sum, num) => sum + num);
}

console.log(octalToDecimal('1'));           // 1
console.log(octalToDecimal('10'));          // 8
console.log(octalToDecimal('130'));         // 88
console.log(octalToDecimal('17'));          // 15
console.log(octalToDecimal('2047'));        // 1063
console.log(octalToDecimal('011'));         // 9

/* algorithm
  - declare (digits) and assign given string split on ''
  - iterate through (digits)
    - map result of converting string to number and mulitiplying by 8^x
      - where (x) is length of array - 1
  - iterate through resultant array and sum elements with reduce
  - return result
*/
