// reverse_integer.js
// 7. Reverse Integer - Easy

// Given a signed 32-bit integer x, return x with its digits reversed. If
// reversing x causes the value to go outside the signed 32-bit integer range
// [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed
// or unsigned).

"use strict";

var reverse = function(num) {
  let revNum;
  if (num < 0) {
    revNum = Number('-' + String(num).split('').slice(1).reverse().join(''));
  } else {
    revNum = Number(String(num).split('').reverse().join(''));
  }

  if (revNum < -Math.pow(2, 31) || revNum > Math.pow(2, 31)) {
    return 0;
  }

  return revNum;
};


console.log(reverse(123) === 321);
console.log(reverse(-123) === -321);
console.log(reverse(120) === 21);
console.log(reverse(0) === 0);
console.log(reverse(1534236469) === 0);