// Exercise 1 : Change The Article
// Instructions
// Copy the code below, into a structured HTML file:



// Using a DOM property, retrieve the h1 and console.log it.

    const h1 = document.getElementsByTagName("h1")[0];
    console.log(h1);

// Using DOM methods, remove the last paragraph in the <article> tag.
function removed() {
    const lastElement = document.getElementsByTagName("p")[3];
    lastElement.remove();
}
removed();


// Add a event listener which will change the background color of the h2 to red, when it’s clicked on.

const h2 = document.getElementsByTagName("h2")[0];
h2.addEventListener("click", changeColor);

function changeColor(event){
    h2.style.backgroundColor = "red";
}


// Add an event listener which will hide the h3 when it’s clicked on (use the display:none property).
const h3 = document.getElementsByTagName("h3")[0];
h3.addEventListener("click", hideHeading);

function hideHeading(event){
    h3.style.display = "none";
}

// Add a <button> to the HTML file, that when clicked on, should make the text of all the paragraphs, bold.


function bold(){
    let allPara = document.querySelectorAll('p');
    for (const par of allPara) {
        par.classList.add("bold");
    }  
}

const btn = document.createElement("button");
btn.textContent = 'test value';
btn.addEventListener("click", bold);
document.body.appendChild(btn);





