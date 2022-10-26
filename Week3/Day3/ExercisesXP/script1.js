// Copy the code above, to a structured HTML file.
// In your Javascript file, use setInterval to move the <div id="animate"> to the right side of the <div id="container">, when the button is clicked on.
// The <div id="animate"> should move 1px to the right every milisecond, until it reaches the end of the <div id="container">.
// Hint : use clearInterval as soon as the box reaches the right end side of the container
// Hint : check out the demonstration in the Course Noted named JS Functions


const divAnimate = document.getElementById('animate');
let s = 1;
let counter = 0;
let timerOne;
const btn = document.querySelector('button');
btn.addEventListener('click', moveDiv);


function moveDiv(){
   timerOne = setInterval(moving, 1) 
};

function moving (){
    counter++
    if (counter < 350){
        let divLeftPos = divAnimate.offsetLeft;
        divAnimate.style.left = (divLeftPos + s) + 'px';
    } else {
        clearInterval(timerOne);
    }
};


// another variant
// function moveDiv(){
    
//     let timerOne = setInterval(() => {
//          counter++ 
//         if(counter < 350){
//             let divLeftPos = divAnimate.offsetLeft;
//             divAnimate.style.left = (divLeftPos + s) + 'px';
//         } else {
//             clearInterval(timerOne);
//         }
//     }, 1);
// }

