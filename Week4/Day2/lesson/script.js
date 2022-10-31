// self invoking anonymous FUNCTIONS
// Add in your html file a div with an id of container
// Create a self invoking function that takes one parameter the name of the user
// When invoked, the function adds the name of the user in a sentence in the div

// (function replacing (name){
//     const div = document.getElementById('container');
//     div.innerText = div.innerText + ' ' + name;
// })('Sam');


// Exercise 1 : guess what will be console.logged

// function setObj(person) {
//     person.age = 25; 
//     return person;
// }

// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> ?
// console.log(personObj2); // -> ?


// Exercise 2 guess what will be console.logged

// function setObj(person) {
// 	person = {
//         name: 'John',
//         age: 50
//     };
    
//     return person;
// }

// let personObj1 = {
//     name: 'Alex',
//     age: 30
// };

// let personObj2 = setObj(personObj1);

// console.log(personObj1); // -> ?
// console.log(personObj2); // -> ?



// Nested functions
// PART I
// 1. Create a function named starWars that takes no parameter.
// 2. The function should declare a variable characters equal to an empty array
// 3. In the startWars function, create a function named createCharacter. It receives two parameters, the first name and last name of a character. If the character doesn't have a last name, the default should be "Smith" and push it to the characters array.
// 4. In the startWars function, create a function named displayCharacter should display in the body the fullname of the characters,
// 5. Call the createCharacter function a few times inside the starWars function and call the displayCharacter function once





function starWars(){
    const characters = [];
    function createCharacter(firstName, lastName="Smith"){
        const fullName = `${firstName} ${lastName}`;
        characters.push(fullName); 
    }

    

    function displayCharacter(){
        const list = document.querySelector("#listcharacters");
        characters.forEach((fullname) => {
            const li = document.createElement("li");
            const text = document.createTextNode(`${fullname} is in ${spaceship}`);
            li.appendChild(text); 
            list.appendChild(li);
        })
    }

    createCharacter('John', 'Parker');
    createCharacter('Ellen');
    displayCharacter()

};

// Second Part 

// 6. Change the starWars function, to take one parameter, the name of the spaceship the characters are in 
// 7. The displayCharacter function should now display in the body the fullname and spaceship of the characters 
// 8. Call the starWars function once with the spaceship "The Devastator", and another times with the spaceship "Republic Attack Cruiser". what happens?

startWars("The Devastator")
startWars("Republic Attack Cruiser")




