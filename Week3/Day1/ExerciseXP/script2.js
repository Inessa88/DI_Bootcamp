// Exercise 3 : Change The Navbar
// Instructions

// Add the code above, to your HTML file

// In the <div>, change the value of the id attribute from navBar to socialNetworkNavigation, using the setAttribute method.

// We are going to add a new <li> to the <ul>.
// First, create a new <li> tag (use the createElement method).
// Create a new text node with “Logout” as its specified text.
// Append the text node to the newly created list node (<li>).
// Finally, append this updated list node to the unordered list (<ul>), using the appendChild method.

// Bonus
// Use the firstElementChild and the lastElementChild properties to retrieve the first and last <li> elements from their parent element (<ul>). Display the text of each link. (Hint: use the textContent property).

function exercise() {
    
const div = document.getElementById("navBar");
div.setAttribute("id", 'socialNetworkNavigation');

const newLi = document.createElement('li')  
const newText = document.createTextNode('Logout');
newLi.appendChild(newText);
div.firstElementChild.appendChild(newLi);
}

exercise();


function firstLastChild() {
    const unOrdered = document.getElementsByTagName('ul')[0];
    const first = unOrdered.firstElementChild;
    const last = unOrdered.lastElementChild;
    console.log(`First and last elements of unordered list are ${first.textContent} and ${last.textContent}`);
}

firstLastChild();