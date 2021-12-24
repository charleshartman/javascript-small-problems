/* pp_anagrams.js

Practice Problem: Anagrams

Write a Function named anagram that takes two arguments: a word and an array
of words. Your function should return an array that contains all the words
from the array argument that are anagrams of the word argument. For example,
given the word "listen" and an array of candidate words like "enlist", "google",
"inlets", and "banana", the program should return an array that contains
"enlist" and "inlets". */

function anagram(word, list) {
  return list.filter(element => {
    return element.split('').sort().join('') === word.split('').sort().join('');
  });
}

console.log(anagram('listen', ['enlists', 'google', 'inlets', 'banana']));  // [ "inlets" ]
console.log(anagram('listen', ['enlist', 'google', 'inlets', 'banana']));   // [ "enlist", "inlets" ]

/* algorithm
  - iterate through given array
  - return filtered results
    - if element split sorted and joined === given word split sorted and joined
*/

/* book solution

function anagram(word, list) {
  return list.filter(candidate => areAnagrams(candidate, word));
}

function areAnagrams(source, target) {
  let sourceLetters = source.split('').sort();
  let targetLetters = target.split('').sort();
  return compareArrays(sourceLetters, targetLetters);
}

function compareArrays(array1, array2) {
  if (array1.length !== array2.length) {
    return false;
  }

  return array1.every((letter, index) => letter === array2[index]);
}

*/