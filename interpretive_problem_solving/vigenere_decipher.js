/* eslint-disable id-length */
// vigenere_decipher.js

"use strict";

function generateCipherTable(start, end, num = 1) {
  let cipherTable = [];
  for (let i = 1; i <= num; i++) {
    for (let j = start; j <= end; j++) {
      cipherTable.push(String.fromCharCode(j));
    }
  }

  return cipherTable;
}

const LOWERS = generateCipherTable(97, 122, 2);
const UPPERS = generateCipherTable(65, 90, 2);


function caesarDecrypt(char, shiftNum) {
  if (char.charCodeAt() >= 65 && char.charCodeAt() <= 90) {
    return UPPERS[UPPERS.lastIndexOf(char) - shiftNum];
  } else if (char.charCodeAt() >= 97 && char.charCodeAt() <= 122) {
    return LOWERS[LOWERS.lastIndexOf(char) - shiftNum];
  } else {
    return char;
  }
}

function vigenereDecipher(str, key) {
  let result = '';
  let shiftTable = key.toLowerCase().repeat(Math.ceil(str.length / key.length));
  let keyCounter = 0;

  str.split('').forEach(char => {
    if (/[a-zA-Z]/.test(char)) {
      result += caesarDecrypt(char, LOWERS.indexOf(shiftTable[keyCounter]));
      keyCounter += 1;
    } else {
      result += char;
    }
  });

  return result;
}

console.log(vigenereDecipher("fkvc, vk in rbk a **ceeu** pmsoceh tri sz, eau io hvun'o xnbe hi gno cshis, wyg jtdpy r gjsq vxzvpzsz eau I amau tci pzpcie fnzw sln.", "raven"));
console.log(vigenereDecipher("Riogaqrlfu dpp't hq oo riabat!", "cab"));