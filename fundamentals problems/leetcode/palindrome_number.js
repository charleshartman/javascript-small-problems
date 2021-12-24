// palindrome_number.js
// 9. Palindrome Number - Easy

// Given an integer x, return true if x is palindrome integer.

// An integer is a palindrome when it reads the same backward as forward.
// For example, 121 is palindrome while 123 is not.

"use strict";

var isPalindrome = function(int) {
  return Number(String(int).split('').reverse().join('')) === int;
};

console.log(isPalindrome(121));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));
console.log(isPalindrome(-101));
