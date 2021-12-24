function longestCommonPrefix(array) {
  let finalString = '';

  for (let idx = 0; idx < array[0].length; idx += 1) {
    let currentChar = array[0][idx];

    for (let jdx = 0; jdx < array.length; jdx += 1) {
      let currentString = array[jdx];

      if (currentChar !== currentString[idx]) {
        return finalString;
      }
    }

    finalString += currentChar;
  }

  return finalString;
}

console.log(longestCommonPrefix(["flower","flow","flight"]) === "fl");
console.log(longestCommonPrefix(["dog","racecar","car"]) === "");
