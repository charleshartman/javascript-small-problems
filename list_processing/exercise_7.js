/* exercise_7.js

Palindromic Substrings

Write a function that returns a list of all substrings of a string that are
palindromic. That is, each substring must consist of the same sequence of
characters forwards as backwards. The substrings in the returned list should be
sorted by their order of appearance in the input string. Duplicate substrings
should be included multiple times.

You may (and should) use the substrings function you wrote in the previous
exercise.

For the purpose of this exercise, you should consider all characters and pay
attention to case; that is, 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA'
are not. In addition, assume that single characters are not palindromes. */

function leadingSubstrings(str) {
  let substrings = [];
  for (let len = 1; len <= str.length; len += 1) {
    substrings.push(str.slice(0, len));
  }

  return substrings;
}

function substrings(masterString) {
  let subs = [];
  for (let index = 0; index < masterString.length; index += 1) {
    subs = subs.concat(leadingSubstrings(masterString.slice(index)));
  }

  return subs;
}

function palindromes(str) {
  return substrings(str).filter(sub => {
    return (sub === sub.split('').reverse().join('')) && sub.length > 1;
  });
}

console.log(palindromes('abcd'));       // []
console.log(palindromes('madam'));      // [ "madam", "ada" ]

console.log(palindromes('hello-madam-did-madam-goodbye'));
/* returns
[ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
  "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
  "-madam-", "madam", "ada", "oo" ]
*/

console.log(palindromes('knitting cassettes'));
/* returns
[ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]
*/