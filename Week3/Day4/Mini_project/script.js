const sectionLeft = document.getElementById('left');
const sectionRight = document.getElementById('right');
const buttonClear = document.createElement("button");
buttonClear.innerHTML = "Clear";
buttonClear.className = 'buttonClear';
sectionLeft.appendChild(buttonClear);
buttonClear.addEventListener('click', resetColor);
let currentColor;
let weAreDrawing = false;


function resetColor() {
    currentColor = 'white';
    for (let div of document.querySelectorAll('.drawingDiv')) {
        div.style.backgroundColor = 'white';
    };
    
    
}

function createColorBox(){
    const bg_colors = ['blue', 'fuchsia', 'gray', 'green', 'lime', 'aqua', 'maroon', 'red', 'yellow', 'purple', 'pink', 'orange', 'black', 'indigo', 'violet', 'magenta', 'olive', 'salmon', 'lavender', 'silver', 'cyan'];
    for (let i = 0; i < bg_colors.length; i++) {
        let coloredDiv = document.createElement("div");
        coloredDiv.style.backgroundColor = bg_colors[i];
        coloredDiv.className = 'coloredBox';
        sectionLeft.appendChild(coloredDiv);
        coloredDiv.addEventListener('click', setCurrentColor);
        
    }

}
createColorBox();

function setCurrentColor(e){
    currentColor = e.target.style.backgroundColor;
}
function createDrawingArea(){
    for (let i = 0; i <= 1200; i++){
        let drawingDiv = document.createElement("div");
        drawingDiv.style.backgroundColor = 'white';
        drawingDiv.className = 'drawingDiv';
        drawingDiv.addEventListener('mousedown', startStopDrawing);
        drawingDiv.addEventListener('mouseup', startStopDrawing);
        drawingDiv.addEventListener('mouseover', drawInCurrentColor);
        drawingDiv.addEventListener('click', drawInCurrentColor);
        sectionRight.appendChild(drawingDiv);

    }
}

createDrawingArea()

function drawInCurrentColor(e) {
    if(weAreDrawing === true && currentColor){
        e.target.style.backgroundColor = currentColor;
    }
    
}

function startStopDrawing(e){
    weAreDrawing = !weAreDrawing;
    if(weAreDrawing === true && currentColor){
        e.target.style.backgroundColor = currentColor;
    }
}
