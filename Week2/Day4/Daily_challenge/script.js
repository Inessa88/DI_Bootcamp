// Instructions
// Prompt the user for several words (separated by commas).
// Put the words into an array.
// Console.log the words one per line, in a rectangular frame as seen below.
// Check out the Hints and Requirements below.
// For example, if the user gives you:
// Hello, World, in, a, frame
// you will transform it to : ["Hello", "World", "in", "a", "frame"]
// that will get displayed as:

// stars and words


// Hint
// The number of stars that wraps the sentence, must depend on the length of the longest word.


// Requirements
// To do this challenge you only need Javascript(No HTML and no CSS)


let answer = prompt("Give me several different words and separate them with commas");
let words = answer.split(",");


function getLengthOfLongestWord() {
    let lengthOfLongestWord = 0;
    for(const word of words) {
        const wordLength = word.length;
        if (wordLength > lengthOfLongestWord) {
            lengthOfLongestWord = wordLength;
        }
    }
    return lengthOfLongestWord;
}

const lengthOfLongestWord = getLengthOfLongestWord();

function createEdgeRow() {
    const numberOfStarsOnFirstRow = lengthOfLongestWord + 4;
    return "*".repeat(numberOfStarsOnFirstRow);
}

function displayRows() {
    const edgeRow = createEdgeRow();
    console.log(edgeRow);
    for (const word of words) {
        displayWordWithStars(word);
    }
    console.log(edgeRow);
}

displayRows();

function displayWordWithStars(word) {
    const numberOfSpacesToAdd = lengthOfLongestWord - word.length;
    const emptySpace = " ".repeat(numberOfSpacesToAdd);
    console.log("* " + word + emptySpace + " *");
    
}