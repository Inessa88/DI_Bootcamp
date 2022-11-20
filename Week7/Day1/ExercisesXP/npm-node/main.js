// Exercise 1 : Hello Node.Js
// Create a new folder called - npm-node
// Create a JS file called - main.js
// Add the following code to the file main.js :
// Write some more code in the main.js file so when you run it in the command prompt it logs Hello you are 15

const a = 5;
const b = 10;
function ageInfo(){
    console.log(`Hello, you are ${a + b}`);
}

ageInfo()


// Exercise 2 : Hello Node.Js #2
// Create a package.json file - use npm init
// Run the main.js file using npm start.
// Tip: you need to change the package.json file in order to achieve this.
// You should output something in the command prompt, for example: Hi! How are you ?

function howAreYou() {
    console.log('Hello, how are you?');
}

howAreYou()
// in order to use npm start on main.js we need to add this "start": "node main.js" in 'scripts' section




// Exercise 3 : Nodemon
// Create a package.json file - use npm init
// Install nodemon
// Write the following code, in a main.js file:
// Add some more code in the main.js, and run it using nodemon in order to log the sum of a + b.
// Tip: you need to change the package.json file in order to achieve this.

// Update the main.js file to console.log the sum of x + c

const a1 = 5;
const b1 = 10;
const x = a1 + b1;;
const c = 6;
console.log(x)
const y = x + c;
console.log(y);

