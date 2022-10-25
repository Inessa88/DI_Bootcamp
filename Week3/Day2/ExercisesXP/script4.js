// Exercise 5 : Event Listeners
// Instructions
// Add many events listeners to one element on your webpage. Use the click, mouseover, mouseout and dblclick events.
// Each listener should do a different thing, for instance - change position x, change position y, change color, change the font size… and more.

let ourChangableDiv = document.querySelector('div');
ourChangableDiv.addEventListener('click', changeColor);
ourChangableDiv.addEventListener('mouseover', changeFontSize);
ourChangableDiv.addEventListener('mouseout', changeBgColor);
ourChangableDiv.addEventListener('dblclick', changeOpacity);

function changeColor() {
    let div = document.querySelector('div');
    if (div.style.color === 'red') {
        div.style.color = 'green';
    } else {
        div.style.color = 'red';
    };
}
function changeFontSize() {
    let div = document.querySelector('div');
    if (div.style.fontSize === '54px') {
        div.style.fontSize = '24px';
    } else {
        div.style.fontSize = '54px';
    };
}
function changeBgColor() {
    let div = document.querySelector('div');
    if (div.style.backgroundColor === 'yellow') {
        div.style.backgroundColor = 'aquamarine';
    } else {
        div.style.backgroundColor = 'yellow';
    };
}
function changeOpacity() {
    let div = document.querySelector('div');
    if (div.style.opacity === '0.2') {
        div.style.opacity = '1';
    } else {
        div.style.opacity = '0.2';
    };
}
