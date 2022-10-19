const userCart = {
	username : "John",
	password: 1234,
	isUserSignedIn : true,
	cart : {
		apple : 2,
		banana : 1,
		pear : 5,
	},
	prices : {
		apple : 0.5,
		banana : 0.8646466363,
		pear : 0.2
	}
};

// 1. Add the lastname Smith to the object
// 2. Change the price of the pear, so it will contain the Taxes. 17%
// 3. Ask the user for the fruit he wants between Apple, Banana and Pear. Make sure that your code accept all type of strings, for example "Banana" or "banana" or "BaNaNA"
// 4. Console.log the price for the specific fruit the user wants


userCart['lastname'] = 'Smith';

userCart['prices']['pear'] *= 1.17;

const answer = prompt('What fruit do you want: Apple, Banana, Pear?').toLowerCase();

//without quotes, because we need a variable and not a property

console.log(userCart['prices'][answer]);



// Exercise 1 Conditionals

//Make a keyless car!

//This car will only let you drive if you are over 18. Make it do the following:

//Using prompt() and alert(), ask a user for their age.

//IF they say they are below 18, respond with: "Sorry, you are too young to drive this car. Powering off
//IF they say they are 18, respond with: "Congratulations on your first year of driving. Enjoy the ride!
//IF they say they are over 18, respond with: "Powering On. Enjoy the ride!"


let age = +prompt('What is your age?');

if (age < 18) {
    alert('Sorry, you are too young to drive this car. Powering off');
} else if (age === 18) {
    alert('Congratulations on your first year of driving. Enjoy the ride!');
} else {
    alert('Powering On. Enjoy the ride!');
}




// Exercise 2
// Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it

let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:// here will appear alert with "Exactly" and there won't be further checking, because of break
    alert( 'Exactly!' );
    break;
  case 5:
    alert( 'Too large' );
    break;
  default:
    alert( "I don't know such values" );
}



// Exercise 3
// Write as comments the steps of the resolution of this piece of code

// Guess what will be the result before checking it

let a = 2 + 2;

switch (a) {
  case 4:
    alert('Right!'); // here will appear alert with "Right!" and there won't be further checking, because of break
    break;

  case 3: // (*) grouped two cases
  case 5:
    alert('Wrong!');
    alert("Why don't you take a math class?");
    break;

  default:
    alert('The result is strange. Really.');
}
