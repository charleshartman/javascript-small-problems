/* lowest_product_four.js

Lowest product of 4 consecutive numbers

https://www.codewars.com/kata/554e52e7232cdd05650000a0/train/javascript

Create a function that returns the lowest product of 4 consecutive digits
in a number given as a string.

This should only work if the number has 4 digits or more.
If not, return "Number is too small". */

function lowestProduct(str) {
  if (str.length < 4) return 'Number is too small';
  let result = Infinity;
  for (let index = 0; index <= str.length - 4; index += 1) {
    let product = str.slice(index, index + 4)
      .split('')
      .reduce((product, num) => product * Number(num));

    if (product < result) result = product;
  }

  return result;
}

console.log((lowestProduct("123456789") === 24));
console.log((lowestProduct("234567899") === 120));
console.log((lowestProduct("2345611117899") === 1));
console.log((lowestProduct("333") === "Number is too small"));
console.log((lowestProduct("1234111") === 4));

/* algo
  - guard: if given string is less than 4 chars in length
    - return "Number is too small"
  - declare (result) to Infinity
  - loop through every four chars of string
    - if product of four element slice is less than (result)
      - result = product
  - return (result)
*/