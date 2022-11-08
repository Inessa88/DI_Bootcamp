// Instructions
// 1rst Daily Challenge
// Create two functions. Each function should return a promise.
// The first function called makeAllCaps(), takes an array of words as an argument
// If all the words in the array are strings, resolve the promise. The value of the resolved promise is the array of words uppercased.
// else, reject the promise with a reason.
// The second function called sortWords(), takes an array of words uppercased as an argument
// If the array length is bigger than 4, resolve the promise. The value of the resolved promise is the array of words sorted in alphabetical order.
// else, reject the promise with a reason.

let arr = [];

function makeAllCaps(arr){
    return new Promise ((resolve, reject) => {
        let allCaps = arr.map((element)=>{
            if(typeof element ==='string') {
                return element.toUpperCase();
             } else {
                reject('Not all elements are strings');
             }})
             resolve(allCaps);
            })
         }

function sortWords(arr){
    return new Promise ((resolve, reject) => {
        if(arr.length >= 4) {
             let sorted = arr.sort();
             resolve(sorted);
         } else {
             reject(console.log("The array is too short"))
         }
     })
    
 }

makeAllCaps([1, "pear", "banana"])
    .then(result => console.log(result))
    .catch(error => console.log(error))
makeAllCaps(["apple", "pear", "banana"])
    .then(result => console.log(result))
    .catch(error => console.log(error))
makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) 
      .catch(error => console.log(error))




// Create three functions. The two first functions should return a promise.

// The first function is named toJs():
// this function converts the morse json string provided above to a morse javascript object.
// if the morse javascript object is empty, throw an error (use reject)
// else return the morse javascript object (use resolve)

// The second function called toMorse(morseJS), takes one argument: the new morse javascript object.

// This function asks the user for a word or a sentence.
// if the user entered a character that doesn’t exist in the new morse javascript object, throw an error. (use reject)
// else return an array with the morse translation of the user’s word.
// if the user enters the word "Hello", the promise resolves with this value ["....", ".", ".-..", ".-..","---"]
// if the user entered the word "¡Hola!", the promise rejects because the character "¡" doesn't exist in the morse javascript object


// The third function called joinWords(morseTranslation), takes one argument: the morse translation array

// this function joins the morse translation by using line break and display it on the page (ie. On the DOM)

// Chain the three functions.


const morse = `{
    "0": "-----",
    "1": ".----",
    "2": "..---",
    "3": "...--",
    "4": "....-",
    "5": ".....",
    "6": "-....",
    "7": "--...",
    "8": "---..",
    "9": "----.",
    "a": ".-",
    "b": "-...",
    "c": "-.-.",
    "d": "-..",
    "e": ".",
    "f": "..-.",
    "g": "--.",
    "h": "....",
    "i": "..",
    "j": ".---",
    "k": "-.-",
    "l": ".-..",
    "m": "--",
    "n": "-.",
    "o": "---",
    "p": ".--.",
    "q": "--.-",
    "r": ".-.",
    "s": "...",
    "t": "-",
    "u": "..-",
    "v": "...-",
    "w": ".--",
    "x": "-..-",
    "y": "-.--",
    "z": "--..",
    ".": ".-.-.-",
    ",": "--..--",
    "?": "..--..",
    "!": "-.-.--",
    "-": "-....-",
    "/": "-..-.",
    "@": ".--.-.",
    "(": "-.--.",
    ")": "-.--.-"
  }`

function toJs(morse_json) {
    let js_obj = JSON.parse(morse_json)
    if (js_obj === {}){
        return Promise.reject('The object is empty!')
    } else {
        return Promise.resolve(js_obj)
    }

}

function toMorse(morseMapping) {
    return new Promise ((resolve, reject) => {
        const userInput = prompt('Give me a word or a sentence')
        const userLettersArray = userInput.split('')
        userLettersArray.forEach(function(currLeter){
            if (!(currLeter in  morseMapping)) {
                return reject(`You entered wrong character: ${currLeter}`)
            }
        })
        let morseCode = userLettersArray.map(
            function (element) {
                return morseMapping[element]
            }
        )
        return resolve(morseCode)
    })
}

function joinWords(morseCode) {
    document.getElementById('morse').innerHTML = morseCode.join('<br>')
}

toJs(morse)
.then((valueOne)=>{return toMorse(valueOne)})
.then((valueTwo)=>{joinWords(valueTwo)})



