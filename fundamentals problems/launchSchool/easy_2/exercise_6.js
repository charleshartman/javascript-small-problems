/* exercise_6.js

Madlibs

Madlibs is a simple game where you create a story template with "blanks" for words.
You, or another player, then construct a list of words and place them into the story,
creating an often silly or funny story as a result.

Create a simple madlib program that prompts for a noun, a verb, an adverb, and
an adjective, and injects them into a story that you create.

Example:

Enter a noun: dog
Enter a verb: walk
Enter an adjective: blue
Enter an adverb: quickly

// console output
Do you walk your blue dog quickly? That's hilarious! */

const readlineSync = require('readline-sync');

const nounChoice = readlineSync.question('Enter a noun: ');
const verbChoice = readlineSync.question('Enter a verb: ');
const adjectiveChoice = readlineSync.question('Enter an adjective: ');
const adverbChoice = readlineSync.question('Enter an adverb: ');

const sentence1 = `Did you ${verbChoice} the ${adjectiveChoice} ${nounChoice} ${adverbChoice}?`;

console.log(sentence1);

/* (book)

const noun = prompt('Enter a noun:');
const verb = prompt('Enter a verb:');
const adjective = prompt('Enter an adjective:');
const adverb = prompt('Enter an adverb:');

const sentence1 = `Do you ${verb} your ${adjective} ${noun} ${adverb}? That's hilarious!`;
const sentence2 = `The ${adjective} ${noun} ${verb}s ${adverb} over the lazy dog.`;
const sentence3 = `The ${noun} ${adverb} ${verb}s up ${adjective} Joe's turtle.`;

console.log(sentence1);
console.log(sentence2);
console.log(sentence3);

*/

