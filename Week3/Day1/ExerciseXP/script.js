// Exercise 1 : Users
// Instructions

// Add the code above, to your HTML file

// Using Javascript:
// Retrieve the div and console.log it

const div = document.body.firstElementChild;
console.log(div);

// Change the name “Pete” to “Richard”.

let newName = document.getElementsByTagName('li')[1];
newName.innerHTML = 'Richard';

// Change each first name of the two <ul>'s to your name.

let changeName = document.getElementsByTagName('li');
changeName[0].innerHTML = 'Inessa';
changeName[2].innerHTML = 'Inessa';

// Delete the <li> that contains the text node “Sarah”.
const parentDelete = document.getElementsByTagName('ul')[1];
let deleteName = document.getElementsByTagName('li')[3];
parentDelete.removeChild(deleteName);

// Bonus - Using Javascript:
// Add a class called student_list to both of the <ul>'s.
const unorderedList = document.getElementsByClassName('list');
unorderedList[0].classList.add("student_list");
unorderedList[1].classList.add("student_list");
// Add the classes university and attendance to the first <ul>.
unorderedList[0].classList.add("university", "attendance");

