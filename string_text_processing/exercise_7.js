/* exercise_7.js

Staggered Caps Part 2

Modify the function from the previous exercise so that it ignores non-alphabetic
characters when determining whether a letter should be upper or lower case.
Non-alphabetic characters should still be included in the output string, but
should not be counted when determining the appropriate case. */

function staggeredCase(str) {
  let capitalize = true;
  return str.split('').map(char => {
    if (!/[a-zA-Z]/.test(char)) {
      return char;
    } else if (capitalize === true) {
      capitalize = false;
      return char.toUpperCase();
    } else {
      capitalize = true;
      return char.toLowerCase();
    }
  }).join('');
}

console.log(staggeredCase('I Love Launch School!'));        // "I lOvE lAuNcH sChOoL!"
console.log(staggeredCase('ALL CAPS'));                     // "AlL cApS"
console.log(staggeredCase('ignore 77 the 444 numbers'));    // "IgNoRe 77 ThE 444 nUmBeRs"

/* PEDAC
problem/rules:
  - starting at the first index in the given string, capitalize the first
    alphabetical character and then alternate LOWERCASE and CAP for each
    successive ALPHABETICAL char
  - IGNORE non-alphabetical chars

input: string
output: string

clarifying questions:

examples/test cases:

data structure: string -> array -> string

algorithm:
  - return the result of spliting given string on '' and iterating through
    resultant array
  - declare (capitalize) and assign true
  - if char is not alphabetical then continue
  - else if capitalize is true then toUpperCase
    and reassign to false
  - else toLowerCase and reassign to true
  - join resultant mapped array

*/