// printer_errors.js

// return `${str.match(/[^a-m]/g).length}/${str.length}`;

"use strict";

function printerError(str) {
  const errors = str.match(/[^a-m]/g) ? str.match(/[^a-m]/g).length : 0;
  return `${errors}/${str.length}`;
}

console.log(printerError('aaaxbbbbyyhwawiwjjjwwm'));
