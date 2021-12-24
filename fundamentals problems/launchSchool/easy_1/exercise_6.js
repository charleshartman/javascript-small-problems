/* exercise_6.js

Short Long Short

Write a function that takes two strings as arguments, determines the length of
the two strings, and then returns the result of concatenating the shorter string,
the longer string, and the shorter string once again. You may assume that the
strings are of different lengths. */

function shortLongShort(str1, str2) {
  let short = '';
  let long = '';

  if (str1.length > str2.length) {
    long = str1;
    short = str2;
  } else {
    short = str1;
    long = str2;
  }

  return short + long + short;
}


console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"

/* Algorithm
  - determine which string is shorter and assign it to (short)
  - assign other string to (long)
  - return concat of (short + long + short)
*/

/* (book)

function shortLongShort(string1, string2) {
  if (string1.length > string2.length) {
    return string2 + string1 + string2;
  } else {
    return string1 + string2 + string1;
  }
}

Discussion

This solution takes advantage of the fact that JavaScript automatically coerces
string primitives to String objects when needed.

Notice how string1 and string2 can both use the .length property, even though
they both reference string primitive values and not String objects. It's as if
both values were created using the new String() function (i.e., new
String('abc')). */

