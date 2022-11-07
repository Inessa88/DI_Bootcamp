// Instructions
// Use this Giphy API documentation. Use the API KEY provided in Exercises XP.
// In the HTML file, add a form, containing an input and a button. This input is used to fetch gif depending on a specific category.
// In the JS file, create a program to fetch one random gif depending on the search of the user (ie. If the search is “sun”, append on the page one gif with a category of “sun”).
// The gif should be appended with a DELETE button next to it. Hint : to find the URL of the gif, look for the sub-object named “images” inside the data you receive from the API.
// Allow the user to delete a specific gif by clicking the DELETE button.
// Allow the user to remove all of the GIFs by clicking a DELETE ALL button.


const form = document.getElementById('myForm');
const search = document.getElementById('search');
form.addEventListener('submit', getGif);

function getGif(e) {
    let searchValue = e.target.elements.search.value; 
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.open("GET", "https://api.giphy.com/v1/gifs/search?q="+searchValue+"&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1")
    xhr.responseType = "json";
    xhr.send();
    xhr.onload = function() {
        if(xhr.status === 200) {
            allMyGifUrls.push(xhr.response.data[0].images.original.url)
            displayResult();
        } else {
            console.log("ERROR");
        }
    }
}

let allMyGifUrls = [];

function displayResult () {
        const div = document.querySelector("#results")
        div.innerHTML = ""
        for (gifUrl of allMyGifUrls) {
            const img = document.createElement("img");
            img.src = gifUrl;
            img.width = "200";
            const deleteButton = document.createElement("button");
            deleteButton.innerHTML = 'DELETE';
            deleteButton.style.marginLeft = '20px'
            deleteButton.style.marginRight = '20px'
            deleteButton.deleteUrl = gifUrl;
            deleteButton.addEventListener('click', deleteOneGif)
            div.appendChild(img);
            div.appendChild(deleteButton);  
            
        }
        if (allMyGifUrls.length > 1) {
            const deleteAllButton = document.createElement("button");
            deleteAllButton.innerHTML = 'DELETE ALL';
            deleteAllButton.style.marginLeft = '20px'
            deleteAllButton.addEventListener('click', deleteAllGif)
            div.appendChild(deleteAllButton);  
        }

}

function deleteOneGif(e) {

    allMyGifUrls = allMyGifUrls.filter(gifUrl => gifUrl != e.target.deleteUrl);
    displayResult()
    
}

function deleteAllGif() {
    allMyGifUrls = [];
    displayResult()
}
