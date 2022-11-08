// EXERCISE 1
// Create a function that takes in a single parameter and returns a new promise.
// Using setTimeout, after 5000 milliseconds, the promise will either resolve or reject.
// If the parameter is a string, the promise resolves with that same string uppercased.
// If the parameter is anything but a string it rejects with that same input.
// Use then to repeat the string twice use catch to console.log the error finally call a function that console.log ("congratulation")

function checkString(word){
   const mypromise = new Promise((resolve, reject)=> {
    setTimeout(() => {
        
        if (typeof(word) === "string") {
            resolve(word.toUpperCase());
        } else {
            reject(word);
        }
    },5000);
});
return mypromise;
}

checkString('Hello')
.then ((result) => console.log(result.repeat(2)))
.catch((err) => console.log(err))
.finally((result)  => console.log('Congratulations'))

checkString(1234)
.then ((result) => console.log(result.repeat(2)))
.catch((err) => console.log(err));





// Exercise
// PART I
// Use fetch to fetch one 1 random gif with the category of "sun", then append the gif to the page. Use fetch to fetch one 1 random gif with the category of "sun", then append the gif to the page.
// Use this documentation https://developers.giphy.com/docs/api/endpoint#random
// use this api : https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My
// PART 2
// Instead of having a fixed category of gif. First, fetch one word from this api :http://random-word-api.herokuapp.com/word?number=1 You will then fetch 1 random gif, depending on the word. The word will be the gif category Display the word and the gif on the page
// For example: you will fetch the random-word-api. This api will return a random word - for example : "happy" Using this word as a category, you will fetch one random gif with the category of "happy" and display it on the page
// Part III
// If the giphy API doesn't find a gif (because the word can be strange) - display a gif that says "404 ERROR"

// The first part
function getGif() {
    fetch("https://api.giphy.com/v1/gifs/random?tag=sun&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
    .then((res) => {
        if(res.status != 200){
            throw new Error ("failed status")
        } else {
            return res.json() //allow us to manipulate the data received
        }
    })
    .then((arr) => appendData1(arr)) 
    .catch((err) => console.log("IN THE CATCH", err))
}

getGif()
        
function appendData1(gif){
    let section = document.getElementById("container")
	const img = document.createElement("img");
            img.src = gif.data.images.original.url;
            img.width = "200";
		section.appendChild(img);
	;
}



// The second part

function fetchWord() {
    fetch("http://random-word-api.herokuapp.com/word?number=1")
    .then((res) => {
    if(res.status != 200){
        throw new Error ("failed status")
    } else {
        return res.json() 
    }
    })
    .then((arr) => wordYouNeed(arr)) 
    .catch((err) => console.log("IN THE CATCH", err))
}

fetchWord();

        
function wordYouNeed(word){
    const newWord = word[0];
    let urlYouNeed = `https://api.giphy.com/v1/gifs/random?tag=${newWord}&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My`
    fetch(urlYouNeed)
        .then((res) => {
            if(res.status != 200){
                throw new Error ("failed status")
            } else {
                return res.json() 
            }
        })
        .then((arr) => appendData(arr)) 
        .catch((err) => console.log("IN THE CATCH", err));

    let section = document.getElementById("container")
    const wordOnPage = document.createElement("p");
    const wordValue = document.createTextNode(newWord)
    wordOnPage.appendChild(wordValue);
    section.appendChild(wordOnPage);

}

function appendData(gif){
    let section = document.getElementById("container")
	const img = document.createElement("img");
    img.src = gif.data.images.original.url;
    img.width = "200";
    section.appendChild(img);
}

