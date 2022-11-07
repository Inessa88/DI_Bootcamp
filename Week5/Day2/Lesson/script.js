// Exercise XML HTTP REQUEST
// AJAX
// Make an HTTP request using the GET METHOD on this API: https://jsonplaceholder.typicode.com/users

// Use the method onload, onprogress, onerror

// If there is no error, display on the page the name, email, city of the 3 first users


const xhr = new XMLHttpRequest();
xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.responseType = "json";
xhr.send();

xhr.onload = function() {
    if(xhr.status === 200) {
        console.log("SUCCESS");
        console.log(xhr.response);
        displayRobots(xhr.response)
    } else {
        console.log("ERROR");
        displayError()
    }
}

xhr.onprogress = function (){
    console.log("test");

}


xhr.onerror = function (){
    console.log("error");
}




function displayRobots (robots) {
    const container = document.querySelector("#results")
    robots.forEach((element, index) => {
            if (index <3){
                const info = document.createElement("p");
                const text = document.createTextNode(`The name is ${element.name}, email is ${element.email}, from ${element.address.city}`)
                info.appendChild(text);
                container.appendChild(info)
            }
 
    })
}

function displayError () {
    const container = document.querySelector("#results")
    const info = document.createElement("p");
    const text = document.createTextNode(`WRONG`)
    info.appendChild(text);
    container.appendChild(info)
}




