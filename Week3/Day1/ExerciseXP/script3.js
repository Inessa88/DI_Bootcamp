// Exercise 4 : My Book List
// Instructions
// Take a look at this link for help.

// The point of this challenge is to display a list of two books on your browser.

// In the body of the HTML page, create an empty div:
// <div class="listBooks"></div>
// In the js file, create an array called allBooks. This is an array of objects. Each object is a book that has 4 keys (ie. 4 properties) :
// title,
// author,
// image : a url,
// alreadyRead : which is a boolean (true or false).

// Initiate the array with 2 books of your choice (ie. Add manually 2 books objects in the array)
// 
// Requirements : All the instructions below need to be coded in the js file:
// Using the DOM, render the books inside an HTML table (the HTML table must be added to the <div> created in part 1).
// For each book :
// You have to display the book’s title and the book’s author.
// Example: HarryPotter written by JKRolling.
// The width of the image has to be set to 100px.
// If the book is already read. Set the color of the book’s details to red.


let allBooks = [
    {
        title:'12 Rules of Life', 
        author: 'Jordan Peterson', 
        image: 'https://storage.googleapis.com/belbet-site-production/DXDDErUW4AEE7b3_lFsl8rK.jpg',
        alreadyRead:true,
    },
    {
        title:'Beyond Order', 
        author:'Jordan Peterson', 
        image: 'https://storage.googleapis.com/belbet-site-production/DXDDErUW4AEE7b3_lFsl8rK.jpg',
        alreadyRead:false,
        },

];

function bookTable(){
  // creates a <table> element and a <tbody> element
  const tbl = document.createElement("table");
  const tblBody = document.createElement("tbody");

  // creating all cells
  for (let i = 0; i < allBooks.length; i++) {
    let book = allBooks[i]
    // creates a table row
    const row = document.createElement("tr");

    // Create a <td> element and a text node, make the text
    // node the contents of the <td>, and put the <td> at
    // the end of the table row
    const cell_1 = document.createElement("td");
    const cell_1Text = document.createTextNode(`${book.title} written by ${book.author}`);
    cell_1.style.color = book.alreadyRead ? 'red': 'black';
    cell_1.appendChild(cell_1Text);
    row.appendChild(cell_1);

    const cell_2 = document.createElement("td");
    const cel_2_img = document.createElement("img");
    cel_2_img.src = book.image
    cel_2_img.style.width = '100px'
    cell_2.appendChild(cel_2_img);
    row.appendChild(cell_2);

    // add the row to the end of the table body
    tblBody.appendChild(row);
  }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);
  const div = document.getElementsByClassName('listBooks')[0];
  // appends <table> into <div>
  div.appendChild(tbl);
  // sets the border attribute of tbl to '2'
  tbl.setAttribute("border", "2");

}

bookTable();