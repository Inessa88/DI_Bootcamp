// Exercise 1 : Find The Sum
// Instructions
// Create a one line function (ie. an arrow function) that receives two numbers as parameters and returns the sum.

const sum = (a,b) =>(a+b);

// Exercise 2 : Kg And Grams
// Instructions
// Create a function that receives a weight in kilograms and returns it in grams. (Hint: 1 kg is 1000gr)

// First, use function declaration and invoke it.
// Then, use function expression and invoke it.
// Write in a one line comment, the difference between function declaration and function expression.
// Finally, use a one line arrow function and invoke it.

function kgInGr(weightKg){
    const weightGm = weightKg*1000;
    return weightGm;
}

kgInGr(5);

const kgInGr2 = function(weightKg){
    const weightGm = weightKg*1000;
    return weightGm;
}

kgInGr2(5);

//The difference between two those kinds of functions is that in the second varian we put function in a variable

const kgInGr3 = (weightKg) => weightKg*1000;

kgInGr3(5);


// Exercise 3 : Fortune Teller
// Instructions
// Create a self invoking function that takes 4 arguments: number of children, partner’s name, geographic location, job title.
// The function should display in the DOM a sentence like "You will be a <job title> in <geographic location>, and married to <partner's name> with <number of children> kids."


(function fortuneTeller (numOfChildren, nameOfPartner, geoLocation, jobTitle){
    const div = document.createElement('div');
    const sentence = document.createTextNode(`You will be a ${jobTitle} in ${geoLocation}, and married to ${nameOfPartner} with ${numOfChildren} kids.`);
    div.appendChild(sentence);
})(4, 'Helen', 'Italy', 'programmer');


// Exercise 4 : Welcome
// Instructions
// John has just signed in to your website and you want to welcome him.

// Create a Bootstrap Navbar in your HTML file.
// In your js file, create a self invoking funtion that takes 1 argument: the name of the user that just signed in.
// The function should add a div in the nabvar, displaying the name of the user and his profile picture.


(function greetings(username){
    const div = document.createElement('div');
    div.innerText = username;
    const img=document.createElement("img");
    img.src = "photo.jpeg";
    img.setAttribute("height", "32px");
    img.setAttribute("width", "32px");
    img.setAttribute("alt", "Profile Picture");
    const navbar = document.querySelector(('.navbar'));
    navbar.appendChild(div);
    navbar.appendChild(img);
    
})('Sarah');

