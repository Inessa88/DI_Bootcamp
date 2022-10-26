// // make the banner appear
// function startOne () {
//     setTimeout(makeBannerAppear, 10000);
// }

// //it will be called after 3 seconds
// function makeBannerAppear (){
//     //retrieve the div
//     const div = document.getElementById("hello"); //retrieve the div from the DOM
//     div.style.display = "block"; //change the style
// }

// startOne() //called when the page is executed

const timerOne = setInterval(addDiv, 1000);//global variable
//decalred in the global scope
// I create an interval, that calls the function addDiv everysecond
let counter = 11;

//add the div, 10 times
function addDiv (){
    counter--;
    if(counter >0) {
        const section = document.getElementById("wrapper")
        const myDiv = document.createElement("div");
        myDiv.textContent = `The sales end in ${counter}sec !`;
        myDiv.classList.add("banner");
        section.appendChild(myDiv);
    } else {
        clearInterval(timerOne) //clearInterval(1)
        
    }
}
