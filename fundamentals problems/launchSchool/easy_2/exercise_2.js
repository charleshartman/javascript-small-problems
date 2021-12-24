/* exercise_2.js

Bannerizer

Write a function that will take a short line of text, and write it to the
console log within a box.

Examples:
logInBox('To boldly go where no one has gone before.');
will log on the console:
+--------------------------------------------+
|                                            |
| To boldly go where no one has gone before. |
|                                            |
+--------------------------------------------+

logInBox('');
+--+
|  |
|  |
|  |
+--+
You may assume that the output will always fit in your browser window. */

function logInBox(str) {
  const dash = `+${'-'.repeat(str.length + 2)}+`;
  const space = `|${' '.repeat(str.length + 2)}|`;
  
  console.log(dash);
  console.log(space);
  console.log(`| ${str} |`);
  console.log(space);
  console.log(dash);
}

logInBox('To boldly go where no one has gone before.');
logInBox('');
logInBox('Your Mom.');

