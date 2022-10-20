// Exercise 1 : List Of People
// Instructions
// const people = ["Greg", "Mary", "Devon", "James"];


// Part I - Review About Arrays
// Write code to remove “Greg” from the people array.

// Write code to replace “James” to “Jason”.

// Write code to add your name to the end of the people array.

// Write code that console.logs Mary’s index. take a look at the indexOf method on Google.

// Write code to make a copy of the people array using the slice method.
// The copy should NOT include “Mary” or your name.
// Hint: remember that now the people array should look like this const people = ["Mary", "Devon", "Jason", "Yourname"];
// Hint: Check out the documentation for the slice method

// Write code that gives the index of “Foo”. Why does it return -1 ?

// Create a variable called last which value is the last element of the array.
// Hint: What is the relationship between the index of the last element in the array and the length of the array?


// Part II - Loops
// Using a loop, iterate through the people array and console.log each person.

// Using a loop, iterate through the people array and exit the loop after you console.log “Jason” .
// Hint: take a look at the break statement in the lesson.


// 1 Part

const people = ["Greg", "Mary", "Devon", "James"];

people.shift();

people[2] = "Jason";

people.push("Inessa");

console.log(people.indexOf("Mary"));

let copyOfArray = people.slice(1,3);

console.log(people.indexOf("Foo")); // it gives -1, because there is no element with name "Foo" in people

let last = people[(people.length-1)];

// 2 Part

for (i of people) {
    console.log(i);
};



for (let i = 0; i<people.length; i++) {
    if (people[i]==="Jason"){
        console.log(people[i]);
        break;
    }
console.log(people[i]);
};


// Exercise 2 : Your Favorite Colors
// Instructions
// Create an array called colors where the value is a list of your five favorite colors.
// Loop through the array and as you loop console.log a string like so: “My #1 choice is blue”, “My #2 choice is red” ect… .
// Bonus: Change it to console.log “My 1st choice”, “My 2nd choice”, “My 3rd choice”, picking the correct suffix for each number.
// Hint : create an array of suffixes to do the Bonus

const colors = ["green", "blue", "orange", "red", "grey"];
for (let i = 0; i <colors.length; i++) {
    console.log(`My #${i+1} choice is ${colors[i]}`)
};

const suffixes = ["1st", "2nd", "3rd", "4th", "5th"];

for (let i = 0; i < colors.length; i++) {
    console.log(`My ${suffixes[i]} choice is ${colors[i]}`)
};


// Exercise 3 : Repeat The Question
// Instructions
// Prompt the user for a number.
// Hint : Check the data type you receive from the prompt (ie. Use the typeof method)

// While the number is smaller than 10 continue asking the user for a new number.
// Tip : Which while loop is more relevant for this situation?


let number;
do {
    number = +prompt("Give me a number");
   }
  while (number < 10); //do while loop is more relevant in this case, because we need to ask for a number and after evaluate if it's smaller or bigger than 10.



//   Exercise 4 : Building Management
// Instructions:
// Review About Objects
// Copy and paste the above object to your Javascript file.

// Console.log the number of floors in the building.

// Console.log how many apartments are on the floors 1 and 3.

// Console.log the name of the second tenant and the number of rooms he has in his apartment.

// Check if the sum of Sarah’s and David’s rent is bigger than Dan’s rent. If it is, than increase Dan’s rent to 1200.


const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}

console.log(building['numberOfFloors']);

console.log(`There are ${building['numberOfAptByFloor']['firstFloor']} apartments on the first floor and ${building['numberOfAptByFloor']['thirdFloor']} apartments on the third floor.`);

console.log(`The second tenant's name is ${building['nameOfTenants'][1]} and he has ${building['numberOfRoomsAndRent']['dan'][0]} rooms.`);

let DanRent = building['numberOfRoomsAndRent']['dan'][1];
let SarahDavidRent = building['numberOfRoomsAndRent']['sarah'][1] + building['numberOfRoomsAndRent']['david'][1];
if (SarahDavidRent > DanRent) {
    building['numberOfRoomsAndRent']['dan'][1] = 1200;
};


// Exercise 5: Family
// Instructions
// Create an object called family with a few key value pairs.
// Using a for in loop, console.log the keys of the object.
// Using a for in loop, console.log the values of the object.


const family = {
    lastName: "Smith",
    quantityOfMembers: 4,
    placeOfLiving: "Israel"
  };

for (i in family) {
    console.log(i);
};

for (i in family) {
    console.log(family[i]);
};


// Exercise 6 : Rudolf
// Instructions
// const details = {
//   my: 'name',
//   is: 'Rudolf',
//   the: 'raindeer'
// }
// Given the object above and using a for loop, console.log “my name is Rudolf the raindeer”

const details = {
    my: 'name',
    is: 'Rudolf',
    the: 'raindeer'
  }

let sentence = '';
for (const i in details) {
    sentence = sentence + i + ' ' + details[i] + ' '
};


// Exercise 7 : Secret Group
// Instructions
// const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
// A group of friends have decided to start a secret society. The society’s name will be the first letter of each of their names sorted in alphabetical order.
// Hint: a string is an array of letters
// Console.log the name of their secret society. The output should be “ABJKPS”

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];

let word = "";
for (const i of names.sort()){
    word = word + i[0];
};
console.log(word);