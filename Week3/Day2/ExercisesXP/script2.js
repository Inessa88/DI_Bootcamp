// Exercise 3 : Transform The Sentence
// Instructions
// Add this sentence to your HTML file then follow the steps :



// In the JS file:
// 
// Declare a global variable named allBoldItems.
// 
// Create a function called getBold_items() that takes no parameter. This function should collect all the bold items inside the paragraph and assign them to the allBoldItems variable.
// 
// Create a function called highlight() that changes the color of all the bold text to blue.
// 
// Create a function called return_normal() that changes the color of all the bold text back to black.
// 
// Call the function highlight() on mouseover (ie. when the mouse pointer is moved onto the paragraph), and the function return_normal() on mouseout (ie. when the mouse pointer is moved out of the paragraph). Look at this example


let allBoldItems = '';

function getBold_items(){
    allBoldItems = document.querySelectorAll('p>strong');

}



function highlight(){
    getBold_items()

    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = 'blue' // loops through the array and assigns the color to each element.
    }

}
highlight()

function return_normal(){
    getBold_items()

    for (let i = 0; i < allBoldItems.length; i++) {
        allBoldItems[i].style.color = 'black' // loops through the array and assigns the color to each element.
    }

}

const paragraph = document.querySelector("p");
paragraph.addEventListener("mouseover", highlight);
paragraph.addEventListener("mouseout", return_normal);






var tableEl = document.getElementsByClassName('td-test');

tableEl[0].addEventListener("mouseover", showDescription, false);
tableEl[0].addEventListener("mouseout", hideDescription, false);

function showDescription() {
  var el1 = this.querySelector("#content_1_1");
  var el2 = this.querySelector("#content_1_2");

  el1.style.display = "none";
  el2.style.display = "block";
}

function hideDescription() {
  var el1 = this.querySelector("#content_1_1");
  var el2 = this.querySelector("#content_1_2");

  el1.style.display = 'block';
  el2.style.display = 'none';
}