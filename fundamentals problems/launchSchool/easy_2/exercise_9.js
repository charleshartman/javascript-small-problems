/* exercise_9.js

Clean Up the Words

Given a string that consists of some words and an assortment of non-alphabetic
characters, write a function that returns that string with all of the non-alphabetic
characters replaced by spaces. If one or more non-alphabetic characters occur in
a row, you should only have one space in the result (i.e., the result string
should never have consecutive spaces). */

function cleanUp(str) {
  const regex1 = /[^a-z]/gi
  const regex2 = /\s+/g

  let newStr = str.replace(regex1, ' ');
  newStr = newStr.replace(regex2, ' ');

  console.log(newStr);
}

cleanUp("---what's my +*& line?");    // " what s my line "
