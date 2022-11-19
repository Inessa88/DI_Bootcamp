//1.  How to access the second element of the array const nums = [3, 7, 10]

const secondElement = nums[1];

// 2. For the code below, what does arrNums.splice(2, 0) return?

// const arrNums = [1, 2, 3, 4, 5];

arrNums = [1, 2, 3, 4, 5]; 
slice method in this case won't delete anything.


// 3. What is the result of the following code :

// const bestNumbers = [1, 2, 3]
// const secondBestNumbers = [7, 8, 9]

// const favoriteNumbers = [4, 5, 6, ...bestNumbers, ...secondBestNumbers];
// console.log(favoriteNumbers)

favoriteNumbers = [4, 5, 6, 1, 2, 3, 7, 8, 9];

// 4. What does the following code print to the console?

// const football = {
//   type: "sport",
//   clubs: {
//     france : "Paris Saint-Germain",
//     spain : "Atlético Madrid",
//   }
// }  

// football.clubs.spain = "Real Madrid";
// console.log(football.clubs.spain);


Real Madrid


// 5. What does the following code print to the console?

// const myteam = "bestTeam";

// const football = {
//   type: "sport",
//   clubs: {
//     france : "Paris Saint-Germain",
//     spain : "Atlético Madrid",
//   }
// }  

// football.clubs[myteam] = "France national football team";
// console.log(football.clubs);

{
    myteam: "France national football team",
    france: "Paris Saint-Germain",
    spain: "Atlético Madrid",
}

// 6. Can we define the function as follows? If yes, what is it called, and explain how to invoke it.

// const x = function(a, b){
//    return a*b;
// }

Yes, it''s an anonymous function expression.
We can invoke it like this:

x(9, 7);

// 7. Variables created without any keyword, are always global, even if they are created inside a function ? Yes or No and explain

// function x() {
// 	a = 5;
// }

Yes, they are always global.
windows.a = 5 - global variable


// 8. In JavaScript can we pass functions as arguments to other functions? What does this code return ?

// function sayHello() {
//    return "Hello, ";
// }
// function greeting(helloMessage, name) {
//   console.log(helloMessage() + name);
// }
// greeting(sayHello, "JavaScript!");

Hello, JavaScript!

// 9. Transform this function into an arrow function

// function sum(num1, num2){
//     return num1 + num2
// }

// sum(40,2)
// sum(42,0)
// console.log("the answer to everything is", sum(42,0))

const sum = (num1, num2) => num1 + num2;


sum(40,2);
sum(42,0);
console.log("the answer to everything is", sum(42,0));

// 10. What does the following code print to the console? Explain the process and concept behind it

// function foo () {
//   function bar() {
//     return "Poppin' bottles";
//   }
//   return bar();
// }

// console.log(foo());

Poppin' bottles

Function bar is a function that is nested inside function foo. It returns Poppin' bottles. 
Function foo returns the output of function bar, which is Poppin' bottles.
So console.log will show the resulf of function foo, which is Poppin' bottles.

// 11. Which of the following events will you add in the addEventListener()method? ☐ click ☐ onclick

I will add click.


// 12. Does the addEventListener() method allow you to add many events to the same element?

// x.addEventListener("mouseover", func1);
// x.addEventListener("click", func2);
// x.addEventListener("mouseout", func3);`

Yes, addEventListener() method allows you to add several events to the same element.

// 13. DOM exercise

// Part I : Create a button in your HTML page, when the user will click 
// the the button a paragraph will be added on the DOM with the content "New Paragraph". 
// Use arrow functions.

// Part II : Add to each new paragraph, an event listener of mouse over. 
// When you hover on a paragraph, the paragraph 
// should become red (ie. color of the text).


const button = document.getElementById('button1')
button.addEventListener('click', () => {
    const div = document.getElementById('div')
    const para = document.createElement('p');
    para.addEventListener("mouseover", () => {para.style.color = 'red'})
    para.addEventListener("mouseout", () => {para.style.color = 'black'})
    const contentPara = document.createTextNode("New Paragraph");
    para.appendChild(contentPara);
    div.appendChild(para);
});


// 14. Do this exercise twice: first with a for loop, then with a for of loop. 
// Console.log the sum of this array

const marks = [67, 60, 89, 90, 67, 42];
let sum = 0;

for (let i = 0; i < marks.length; i++) {
    sum = sum + marks[i]
}
console.log(sum)


for(mark of marks) {
    sum = sum + mark;
}
console.log(sum)

// 15. What is the value of passed in the following code?

// const marks = [67, 60, 89, 90, 67, 42];

// const passed = marks.every(function(m) {
//    return m >= 50;
// });

    The value of passed will be false, as not every element in the array is >= 50.



// 16. What does the following code log?

// const nums = [10, 50, 88];

// const bignums = nums.filter(function(n) {
//     return n > 10;
// });

// console.log(bignums);

[50, 88]


//17. Use a javascript array method to square the value of every element in the array.

   const input = [ 1, 2, 3, 4, 5 ];
   const squared = input.map(x => x * x);
   console.log(squared); // [ 1, 4, 9, 16, 25]

// 18. Use 2 javascript array methods and chain them to return the sum of all the positives ones.

   const secondInput = [ 1, -4, 12, 0, -3, 29, -150];
   const total = secondInput
                .filter(number => number > 0)
                .reduce(
                    (previousValue, currentValue) => previousValue + currentValue)
    console.log(total) //42


// 19. Use 3 javascript methods and chain them to abbreviate the name and return the name initials.

const input = 'George Raymond Richard Martin';
const initials = input
                .split(' ')
                .map(input => input[0])
                .join('');

console.log(initials)//'GRRM'

// 20. How objects are passed to a function in JavaScript? By Value or By Reference ?
//  Explain in detail, using the below example:

function changeTshirt (myshirt){
    console.log("myshirt", myshirt);
    myshirt.color = "red"
    console.log("myshirt", myshirt); //this is the parameter
    console.log("tshirt", tshirt);   //this is the global variable
}

const tshirt = {
    color : "blue",
    price : 10
}

changeTshirt(tshirt)

Objects are passed to a function in JavaScript By Reference.


// 21. How would you change the code above, so that when you modify the key 
// color from the parameter myshirt,
//  it won't change the global variable tshirt ?

This I need to repeat!!!!!!!!!!!!!!!!

// 22. Use object destructuring to retrieve the value of the keys france and spain

const football = {
     type: "sport",
     clubs: {
       france : "Paris Saint-Germain",
       spain : "Atlético Madrid",
     }
   }  


const {clubs: {france}} = football;
console.log(france);
const {clubs: {spain}} = football;
console.log(spain);

// 23.Use object destructuring in the function to retrieve the value of the keys france and spain

 function retrieveSports (//here) {
    const sentence = `My favorite football teams are ${franceTeam} and ${spainTeam}`;
    console.log(sentence);
 }

 const football = {
     type: "sport",
     clubs: {
       france : "Paris Saint-Germain",
       spain : "Atlético Madrid",
     }
   }  

 retrieveSports(football)


 This I need to repeat!!!!!!!!!


// 24. What will be printed in the console

class Item {
   constructor(nameProduct, priceProduct) { 
         this.name = nameProduct;
         this.price = priceProduct;
   }
   displayInfo () {
        console.log(this.name + " is for $ " + this.price)
   }
} 
const cake = new Item("Chocolate Cake", 10);
cake.displayInfo();


Chocolate Cake is for $ 10


// 25.What will be the output and why ? What will be the state of the promise ?

// Promise.resolve('Success!')
//   .then(data => {
//     return data.toUpperCase()
//   })
//   .then(data => {
//     console.log(data)
//   })

  The output will be SUCCESS!
  The state will be fulfilled.
  This is Promise.resolve which is used only for promises, which are always resolved.
  First then gives us a string which is converted to upper case. The second then gives us this string console logged.

// 26.  What will be displayed by the following code, after 2 seconds?

  const p = new Promise(function(resolve, reject) {
     setTimeout(function() {
        resolve("OK");
     }, 2000);
  });
  
  p.then().then(function(data) {
     console.log(data);
  });

  After 2 seconds OK will be displayed.


// 27. Consider the following async function and its output. 
// What will be displayed to the console when calling the test() function? Explain the process

async function test() {
  let result = 'first!';
  const promise = new Promise((resolve, reject) => {
    setTimeout(() => resolve('done!'), 1000);
  });

  result = await promise;

  console.log(result);
}

test();

Variable promise will give us a promise in 1 second.
Then variable result will be reassigned to the promise which will be already consumed with await, which means it will 
give us value 'done!'. Then this value just will be console logged.

// 28. Use async await, and fetch a fact on cats and display it. Use this third party API : https://catfact.ninja/fact

// In the HTML file, create a button, everytime you click it you will add a random cat fact on the DOM
// In the JS file, create 2 functions : one to fetch data from API, the other one to display it on the page using the DOM
// Make sure to use try and catch


const buttonCat = document.getElementById('catinfo')
const div = document.getElementById('info')
buttonCat.addEventListener('click', getinfo)

async function getinfo(){
    try {
        const results = await fetch("https://catfact.ninja/fact");
        if(results.status == 200) {
            const info = await results.json(); 
            const text = info.fact;
            const fact = document.createElement('p');
            const contentfact = document.createTextNode(text);
            fact.appendChild(contentfact);
            div.appendChild(fact);

        } else {
            throw new Error("failed status")
        }
    } catch (err){
        console.log("the error is", err);
  }
};






