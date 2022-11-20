// Instructions
// Part I:
// Create a file named main.js that contains a variable const largeNumber = 356; and export the module.

// Use the exported module in a script.js file.

// In the script.js file declare a variable const b = 5; and use it to output the sum of the imported module + b

const largeNumber = 356;

module.exports = {
    number: largeNumber
};


// In the main.js, create a function that returns the current date and time. Export the module.
function dateAndTime() {
    return new Date()
}

module.exports = {
   dateAndTime,
};