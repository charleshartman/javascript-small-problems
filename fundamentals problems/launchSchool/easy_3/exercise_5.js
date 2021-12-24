/* exercise_5.js

Palindromic Strings Part 2

Write another function that returns true if the string passed as an argument is
a palindrome, or false otherwise. This time, however, your function should be
case-insensitive, and should ignore all non-alphanumeric characters. If you
wish, you may simplify things by calling the isPalindrome function you wrote in
the previous exercise. */

// function isPalindrome(str) {
//   // console.log(str.split('').reverse().join(''));
//   return str.split('').reverse().join('') === str;
// }
//
// function isRealPalindrome(str) {
//   const cleanedStr = str.toLowerCase().match(/[a-zA-Z0-9]/g).join('') || [];
//   return isPalindrome(cleanedStr);
// }
"use strict";

function isRealPalindrome(str) {
  const cleanedStr = str.toLowerCase().match(/[a-z\d]/g) || [];
  return cleanedStr.join('') === cleanedStr.reverse().join('');
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
console.log(isRealPalindrome(''));                    // true

/* Book Solution

function isRealPalindrome(string) {
  string = removeNonLetterNumbers(string.toLowerCase());
  return isPalindrome(string);
}

function removeNonLetterNumbers(string) {
  let result = '';

  for (let i = 0; i < string.length; i += 1) {
    if (isLetter(string[i]) || isNumber(string[i])) {
      result += string[i];
    }
  }

  return result;
}

function isLetter(char) {
  return char >= 'a' && char <= 'z';
}

function isNumber(char) {
 return char >= '0' && char <= '9';
}

Discussion
The first part of the solution makes all characters lowercased. The second uses
the removeNonLetterNumbers function to replace any characters that are not
alphanumeric, using two helper functions that check for either a letter or
number, respectively. The solution relies on this to clean up the characters
that are not subject to comparison. It then uses the isPalindrome function from
the previous exercise.

Recall that strings are compared based on standard lexicographical ordering,
using Unicode values. */
