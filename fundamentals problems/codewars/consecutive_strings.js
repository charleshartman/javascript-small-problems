/* consecutive_strings.js

Consecutive strings

You are given an array(list) strarr of strings and an integer k. Your task is
to return the first longest string consisting of k consecutive strings taken
in the array. */

"use strict";

function longestConsec(arr, elements) {
  if ((elements < 1) || (elements > arr.length)) {
    return '';
  }

  const eachCons = [];
  for (let index = 0; index <= arr.length - elements; index += 1) {
    eachCons.push(arr.slice(index, elements + index).join(''));
  }

  let firstLongest = '';
  eachCons.forEach((element) => {
    if (element.length > firstLongest.length) {
      firstLongest = element;
    }
  });

  return firstLongest;
}

console.log(longestConsec(["ejjjjmmtthh", "zxxuueeg", "aanlljrrrxx", "dqqqaaabbb", "oocccffuucccjjjkkkjyyyeehh"], 1) === "oocccffuucccjjjkkkjyyyeehh");
console.log(longestConsec([], 3) === "");
console.log(longestConsec(["itvayloxrp","wkppqsztdkmvcuwvereiupccauycnjutlv","vweqilsfytihvrzlaodfixoyxvyuyvgpck"], 2) === "wkppqsztdkmvcuwvereiupccauycnjutlvvweqilsfytihvrzlaodfixoyxvyuyvgpck");
console.log(longestConsec(["wlwsasphmxx","owiaxujylentrklctozmymu","wpgozvxxiu"], 2) === "wlwsasphmxxowiaxujylentrklctozmymu");
console.log(longestConsec(["zone", "abigail", "theta", "form", "libe", "zas"], -2) === "");
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 3) === "ixoyx3452zzzzzzzzzzzz");
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 15) === "");
console.log(longestConsec(["it","wkppv","ixoyx", "3452", "zzzzzzzzzzzz"], 0) === "");

/* algorithm
  - guard clause for invalid elements argument (< 1 OR > length)
  - initialize (eachCons) to []
  - iterate through the given array
    - while the index is less than the array length minus the elements argument,
      - slice the index to the elements argument and join the result,
        push this into (eachCons)
  - find the str with the greatest length in eachCons and return it
*/
