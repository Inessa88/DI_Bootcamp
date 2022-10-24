// Exercise 2 : Users And Style
// Instructions

// Add the code above, to your HTML file

// Add a “light blue” background color and some padding to the <div>.

const div = document.body.firstElementChild;
div.style.background ='lightblue';
div.style.padding ='20px';

// Do not display the <li> that contains the text node “John”.
const hidden = div.nextElementSibling.firstElementChild;
hidden.style.visibility ='hidden';


// Add a border to the <li> that contains the text node “Pete”.
const addBorder = div.nextElementSibling.lastElementChild;
addBorder.style.border = '2px solid red';

// Change the font size of the whole body.
changeFontSize = document.body;
changeFontSize.style.fontSize = "2.5em";

// Bonus: If the background color of the div is “light blue”, alert “Hello x and y” (x and y are the users in the div).

if (div.style.background ==='lightblue') {
    console.log(`Hello ${hidden.innerHTML} and ${addBorder.innerHTML}`)
}