/* disemvowel_trolls.js

Disemvowel Trolls

Your task is to write a function that takes a string and return a new string
with all vowels removed. */

"use strict";

function disemvowel(str) {
  // return str.match(/[^aeiou]/gi).join('');
  return str.replace(/[aeiou]/gi, '');
}

console.log(disemvowel('This website is for losers LOL!')) 
// 'Ths wbst s fr lsrs LL!'
