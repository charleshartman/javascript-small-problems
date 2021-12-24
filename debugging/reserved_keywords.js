/* reserved_keywords.js

Reserved Keywords

We have been asked to implement a function that determines whether or not a
given word is a reserved keyword. We wrote the isReserved function below along
with some test cases, but we aren't seeing the expected result. Why not? Fix
the code so that it behaves as intended. */


const RESERVED_KEYWORDS = ['break', 'case', 'catch', 'class', 'const', 'continue',
  'debugger', 'default', 'delete', 'do', 'else', 'enum', 'export', 'extends', 'finally',
  'for', 'function', 'if', 'implements', 'import', 'in', 'instanceof', 'interface',
  'let', 'new', 'package', 'private', 'protected', 'public', 'return', 'static',
  'super', 'switch', 'this', 'throw', 'try', 'typeof', 'var', 'void', 'while',
  'with', 'yield'];

function isReserved(name) {
  let result = false;
  RESERVED_KEYWORDS.forEach(reserved => {
    if (name === reserved) {
      result = true;
    }
  });

  return result;
}

console.log(isReserved('monkey')); // false
console.log(isReserved('patch'));  // false
console.log(isReserved('switch')); // should be: true

/* book solutions

function isReserved(name) {
  for (let i = 0; i < RESERVED_KEYWORDS.length; i += 1) {
    if (RESERVED_KEYWORDS[i] === name) {
      return true;
    }
  }

  return false;
}

function isReserved(name) {
  return RESERVED_KEYWORDS.includes(name);
}

*/
