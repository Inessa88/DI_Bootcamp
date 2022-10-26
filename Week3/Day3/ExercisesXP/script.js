// Part I
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will alert “Hello World”.


// Part II
// In your Javascript file, using setTimeout, call a function after 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.


// Part III
// In your Javascript file, using setInterval, call a function every 2 seconds.
// The function will add a new paragraph <p>Hello World</p> to the <div id="container">.
// The interval will be cleared (ie. clearInterval), when the user will click on the button.
// Instead of clicking on the button, the interval will be cleared (ie. clearInterval) as soon as there will be 5 paragraphs inside the <div id="container">.

// Part I
setTimeout(hello, 2000);
function hello (){
    alert('Hello Wolrd!')
}


// Part II

setTimeout(newElement, 2000);
function newElement (){
    const div = document.getElementById("container")
    const myPar = document.createElement("p");
    myPar.textContent = 'Hello World';
    div.appendChild(myPar);
}


// Part III


const timerOne = setInterval(addPar, 2000);
function addPar (){
    const div = document.getElementById("container")
    const myPar = document.createElement("p");
    myPar.textContent = 'Hello World';
    div.appendChild(myPar);
    const btn = document.getElementById('clear');
    btn.addEventListener('click', clear);
}
function clear() {
        clearInterval(timerOne)
      }  
    
      
// Part III the other variant of clearInterval  



// const timerOne = setInterval(addPar, 2000);
// let counter = 0;

// function addPar (){
//     counter++;
//     if(counter <=5) {
//         const div = document.getElementById("container")
//         const myPar = document.createElement("p");
//         myPar.textContent = 'Hello World';
//         div.appendChild(myPar);
//     } else {
//         clearInterval(timerOne)
        
//     }
// }
