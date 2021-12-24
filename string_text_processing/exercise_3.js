/* exercise_3.js

Lettercase Counter

Write a function that takes a string and returns an object containing three
properties: one representing the number of characters in the string that are
lowercase letters, one representing the number of characters that are uppercase
letters, and one representing the number of characters that are neither. */

function letterCaseCount(str) {
  let result = { lowercase: 0, uppercase: 0, neither: 0 };
  for (let index = 0; index < str.length; index += 1) {
    if  (/[a-z]/.test(str[index])) {
      result.lowercase += 1;
    } else if (/[A-Z]/.test(str[index])) {
      result.uppercase += 1;
    } else {
      result.neither += 1;
    }
  }

  return result;
}

console.log(letterCaseCount('abCdef 123'));  // { lowercase: 5, uppercase: 1, neither: 4 }
console.log(letterCaseCount('AbCd +Ef'));    // { lowercase: 3, uppercase: 3, neither: 2 }
console.log(letterCaseCount('123'));         // { lowercase: 0, uppercase: 0, neither: 3 }
console.log(letterCaseCount(''));            // { lowercase: 0, uppercase: 0, neither: 0 }

/* PEDAC
problem/rules:
  - given a string argument, return an object with three properites
    representing lowercase, uppercase and non-alpha character counts
  - white spaces count as character

input: string
output: object with three properties

data structure: string, object, integer counter, for loop

algorithm:
  - declare (result) to { lowercase: 0, uppercase: 0, neither: 0 }
  - iterate through string, if char test [a-z] add lowercase += 1
    - same for upper and neither
  - this problem is about Regex [a-z], [A-Z], ![a-zA-Z]
  - return (result)
*/