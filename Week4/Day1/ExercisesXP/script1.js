// Exercise 2 : Ternary Operator
// Instructions
// Using the code below:

// function winBattle(){
//     return true;
// }
// Transform the winBattle() function to an arrow function.
// Create a variable called experiencePoints.
// Assign to this variable, a ternary operator. If winBattle() is true, the experiencePoints variable should be equal to 10, else the variable should be equal to 1.
// Console.log the experiencePoints variable.

const winBattle = () => true;
const experiencePoints = winBattle() === true ? 10 : 1;
console.log(experiencePoints);

// Exercise 3 : Is It A String ?
// Instructions
// Write a JavaScript arrow function that checks whether the value of the argument passed, is a string or not. Use ternary operator
// Check out the example below to see the expected output
// Example:

const checkStringOrNot = (a) => typeof a === 'string'? console.log('Variable is a string'): console.log('Variable is not a string');
 

// Exercise 4 : Colors
// Instructions
// Write a JavaScript program that displays the colors in the following order : “1# choice is Blue.” “2# choice is Green.” “3# choice is Red.” ect…
// Check if at least one element of the array is equal to the value “Violet”. If yes, console.log("Yeah"), else console.log("No...")
// Hint : Use the array methods taught in class. Look at the lesson Array Methods.


const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];

colors.forEach((element,index) => {
    console.log(`${index+1}# choice is ${element}`)
});


const check = colors.some((element) => {
    console.log('Yeah');
    return element=== "Violet";
})


colors.forEach((element,index) => element=== "Violet"? console.log("Yeah"): console.log("No..."));



// Exercise 5 : Colors #2
// Instructions
// Using these arrays :


// Write a JavaScript program that displays the colors in the following order : “1st choice is Blue .” “2nd choice is Green.” “3rd choice is Red.” ect…
// Hint : Use the array methods taught in class and ternary operator.


// const colors = ["Blue", "Green", "Red", "Orange", "Violet", "Indigo", "Yellow"];
const ordinal = ["th","st","nd","rd"];

colors.forEach((element,index) => index>=3 ? console.log(`${[index+1]}${ordinal[0]} choice is ${element}`): console.log(`${[index+1]}${ordinal[index+1]} choice is ${element}`));
 
// Exercise 6 : Bank Details
// Instructions
// In this exercise, you have to decide which type of variables you have to use (ie. let or const):

// Create a global variable called bankAmount which value is the amount of money currently in your account.
// Create a variable that saves the % amount of VAT (In Israel, it’s 17%).
// Create an array with all your monthly expenses, both positive and negative (money made and money spent).
// Example : const details = ["+200", "-100", "+146", "+167", "-2900"]
// Create a program that modifies the expenses (ie. the positive AND the negative expenses) so that they will include taxes (multiply each expense by the VAT).
// Display your current bankAccount standing at the end of the month.
    

let bankAmount = 5000;
const VAT = 1.17;
const details = ["+200", "-100", "+146", "+167", "-2900", "+3000"];

details.forEach((element) => {
    bankAmount = bankAmount + Number(element) * VAT});
console.log(bankAmount);