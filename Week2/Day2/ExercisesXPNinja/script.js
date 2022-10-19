// Exercise 1 : Age Difference
// Instruction
// Given the years two people were born, find the date when the younger one is exactly half the age of the older.
// Notes: The dates are given in the format YYYY


let older = 1978;
let younger = 1998;
let year = 2*younger - older;
let ageOlder= year - older;
let ageYounger= year - younger;
console.log(year);
console.log(ageOlder);
console.log(ageYounger);


// Exercise 3 : Secret Word
// Instruction
// Harder exercise
// Hint : Use Regular Expressions

// Prompt the user for a word and save it to a variable.
// Delete all the vowels of the word and console.log the result.


let word = prompt('Give me a word');
const noVowels = word.replace(/[aeiou]/gi, '');
console.log(noVowels); 