// Exercise 1 : guess what will be console logged, and explain why
let text = "Hello";

function checkText (){
	console.log("In the function",text); //2.'Hello' - it was declared globally
	text += " World";
	console.log("Still in the function",text); //3.'Hello World', because we reassigned the text variable
}

console.log("before the function", text);//1.'Hello'

checkText()

console.log("after the function", text);//'Hello World', because we reassigned the text variable
// Exercise 2 : guess what will be console logged, and explain why
let friend = "Harry";

function checkfriend (){
	let friend = "Alice";
	console.log("In the function",friend); //2.Alice, it's a local variable
	friend += " Smith";
	console.log("Still in the function",friend); //3.Alica Smith, because in the beginning we searcha variable inside the function
}

console.log("before the function", friend); //1. Harry

checkfriend()

console.log("after the function", friend);//4 Harry




// Exercise 1:

// Greet the user with his name, the user's name is a parameter. Do this exercise,
// first by using function declarations
// then function expression,
// then arrow function

function greetings(name) {
    alert(`Hello ${name}`)
};

const greetings = function(name) {
    alert(`Hello ${name}`)
};

const greetings = (name) => alert(`Hello ${name}`);


// Exercise 2: Function & Arrow function & Ternary Operator

// Check if the user's age is higher than 18. Use ternary operator.
// if the user's age is higher than 18, return "You can drive"
// else, return "You cannot drive"
// Do this exercise,

// first by using function declarations
// then function expression,
// then arrow function

function checking (age){
    const result = age>18 ? "You can drive" : "You cannot drive";
    return result

}

const checking = function(age) {
    return age>18 ? "You can drive" : "You cannot drive";
     
};

const checking = (age) => age>18 ? "You can drive" : "You cannot drive";
