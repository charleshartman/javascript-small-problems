/* pp_matching_parentheses.js

Matching Parentheses

Write a function that takes a string as an argument and returns true if the
string contains properly balanced parentheses, false otherwise. Parentheses are
properly balanced only when '(' and ')' occur in matching pairs, with each pair
starting with '('. */

function isBalanced(str) {
  let counter = 0;
  for (let index = 0; index < str.length; index += 1) {
    if (str[index] === '(') {
      counter += 1;
    } else if (str[index] === ')') {
      counter -= 1;
    }

    if (counter < 0) {
      return false;
    }
  }

  return counter === 0;
}

console.log(isBalanced('What (is) this?'));        // true
console.log(isBalanced('What is) this?'));         // false
console.log(isBalanced('What (is this?'));         // false
console.log(isBalanced('((What) (is this))?'));    // true
console.log(isBalanced('((What)) (is this))?'));   // false
console.log(isBalanced('Hey!'));                   // true
console.log(isBalanced(')Hey!('));                 // false
console.log(isBalanced('What ((is))) up('));       // false

/* --> PEDAC

problem/rules:
  - determine if string has balanced number of open and closing parentheses
  - open must precede closed ')(' is not valid
  - what if str has zero parentheses? (assume true for now)

input: string
output: boolean

data structure:
  - string argument
  - integer counter
  - boolean result

algorithm:
  - declare counter and assign to 0
  - iterate through string
    - if character is ')' substract one from counter
      - if counter falls below zero then return false
  - return true

*/
