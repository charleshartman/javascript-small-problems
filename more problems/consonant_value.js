/* consonant_value.js

Given a lowercase string that has alphabetic characters only and no spaces,
return the highest value of consonant substrings. Consonants are any letters
of the alphabet except "aeiou".

We shall assign the following values: a = 1, b = 2, c = 3, .... z = 26.

For example, for the word "zodiacs", let's cross out the vowels. We get:
"z o d ia cs"

-- The consonant substrings are: "z", "d" and "cs" and the values are z = 26,
d = 4 and cs = 3 + 19 = 22. The highest is 26.
solve("zodiacs") = 26

For the word "strength", solve("strength") = 57
-- The consonant substrings are: "str" and "ngth" with values "str" = 19 + 20
+ 18 = 57 and "ngth" = 14 + 7 + 20 + 8 = 49. The highest is 57. */

/* PEDAC

Understand the Problem:
- input
  - string of only lowercase alphabetic chars with no spaces
- output
  - number representing the highest value consonant substring according to a
    set of rules
- rules
  - letters are valued by their position in the alphabet 1..26
  - substrings in this case are created by removing vowels, in essence, vowels
    become spaces that break the string into substrings
  - return the total value of the substring with the highest value

- clarifying questions
  - do we need to deal with empty string or invalid type input

Examples/test cases:
- happy path
  - 'charles' => 'rl' => 30
- edge cases(bounds/emptiness)
  - '' => 0

Data structure:
  - use array * + a-z indexes for values
  - split on vowels, iterate substrings and each string
  - return num

Algorithm:
  - declare (result) to 0
  - declare (valueKey) to '*abcdefghijklmnopqrstuvwxyz'.split('')
  - declare (validSubs) to given string split on vowels /[aeiou]+/
  - iterate through validSubs
    - iterate through each substring with reduce, totaling value
      based on valueKey
    - if acc value is greater than (result) then reassign acc value to (result)
  - return result

Code.

*/

"use strict";

function solve(str) {
  let result = 0;
  const valueKey = '*abcdefghijklmnopqrstuvwxyz'.split('');
  const validSubs = str.split(/[aeiou]+/);

  validSubs.forEach((sub) => {
    let subtotal = sub.split('').reduce((acc, char) => {
      return acc + valueKey.indexOf(char);
    }, 0);

    if (subtotal > result) {
      result = subtotal;
    }
  });

  return result;
}

console.log(solve("zodiac") === 26);
console.log(solve("chruschtschov") === 80);
console.log(solve("khrushchev") === 38);
console.log(solve("strength") === 57);
console.log(solve("catchphrase") === 73);
console.log(solve("twelfthstreet") === 103);
console.log(solve("mischtschenkoana") === 80);

console.log(solve("charles") === 30);
console.log(solve("") === 0);
