// Exercise 1 - basic add event listener

// Create two buttons - id of "red", id of "blue"
// When we click on the red button -> Change the backgroundcolor of the page to red
// When we click on the blue button -> Change the backgroundcolor of the page to blue


// Exercise 1 - basic add event listener

// Create two buttons - id of "red", id of "blue"
// When we click on the red button -> Change the backgroundcolor of the page to red
// When we click on the blue button -> Change the backgroundcolor of the page to blue

const firstBtn = document.getElementById("red");
const secondBtn = document.getElementById("blue");

firstBtn.addEventListener("click", alertUser);
secondBtn.addEventListener("click", alertUser);

function alertUser(event){
    console.log(event);
    console.log(event.target.id);
    document.body.style.backgroundColor = event.target.id;
}

// Exercise 2 - using the event object

// const colors = ["blue", "yellow", "green", "pink"];

// Add inside the HTML file a div of id "container" (do it directly in the HTML)
// Add one button per color inside the div container (do it directly in the JS)
// Each button should have an "click" event listener that changes the background color of the document, to the text content of the button (do it directly in the JS)



const colors = ["blue", "yellow", "green", "pink"];
function task(){
    const div = document.querySelector("#container");
    for (let i = 0; i< colors.length; i++){
        let btn = document.createElement('button');
        btn.textContent = colors[i];
        btn.setAttribute("id", colors[i])
        btn.addEventListener("click", alertUser);
        div.appendChild(btn);
        
    }
}
task();


// function changeColor(event){
//     console.log(event);
//     console.log(event.target.id);
//     document.body.style.backgroundColor = event.target.id;
// }




// retrieve the buttons
// const buttonOne = document.getElementById("red");
// const buttonTwo = document.getElementById("blue");

// buttonOne.addEventListener("click", changeBgBlue)
// buttonTwo.addEventListener("click", changeBgRed)

// function changeBgBlue(){
//     document.body.style.backgroundColor = "blue";
// }

// function changeBgRed(){
//     document.body.style.backgroundColor = "red";
// }

// buttonOne.addEventListener("click", changeBg)
// buttonTwo.addEventListener("click", changeBg)

// function changeBg(event){
//     console.log(event);
//     console.log(event.target.id);
//     document.body.style.backgroundColor = event.target.id;
// }



