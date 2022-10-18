// Exercise 1: Your Favorite Food
// Instructions
// Store your favorite food into a variable.
// Store your favorite meal of the day into a variable (ie. breakfast, lunch or dinner)
// Console.log I eat <favorite food> at every <favorite meal>


const favoriteFood = 'mango';
const favoriteMeal = 'breakfast';
console.log(`I eat ${favoriteFood} at every ${favoriteMeal}`);


// Exercise 2 : Series
// Instructions
// Part I
// Using this array : const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
// Create a variable named myWatchedSeriesLength that is equal to the number of series in the myWatchedSeries array.
// Create a variable named myWatchedSeriesSentence, that is equal to a sentence describing the series you watched
// For example : black mirror, money heist, and the big bang theory
// Console.log a sentence using both of the variables created above
// For example : I watched 3 series : black mirror, money heist, and the big bang theory

// Part II
// Change the series “the big bang theory” to “friends”. Hint : You will need to use the index of “the big bang theory” series.
// Add, at the end of the array, the name of another series you watched.
// Add, at the beginning of the array, the name of your favorite series.
// Delete the series “black mirror”.
// Console.log the third letter of the series “money heist”.
// Finally, console.log the myWatchedSeries array, to see all the modifications you’ve made.


//Part 1
const myWatchedSeries = ["black mirror", "money heist", "the big bang theory"];
const myWatchedSeriesLength = myWatchedSeries.length;
const myWatchedSeriesSentence = myWatchedSeries[0] + ', ' + myWatchedSeries[1] + ' and ' + myWatchedSeries[2];
console.log('I watched 3 series: ' + myWatchedSeriesSentence);

//Part 2

myWatchedSeries[2] = 'friends';
myWatchedSeries.push('modern family');
myWatchedSeries.unshift('how I met your mother');
myWatchedSeries.splice(1,1);
console.log(myWatchedSeries[1][2]);
console.log(myWatchedSeries);




// Exercise 3 : The Temperature Converter
// Instructions
// Store a celsius temperature into a variable.
// Convert it to fahrenheit and console.log <temperature>°C is <temperature>°F.
// Hint : Should you create another variable to hold the temperature in fahrenheit? (ie. point 2)
// Hint: To convert a temperature from celsius to fahrenheit : Divide it by 5, then multiply it by 9, then add 32

const tempCelsius = 30;
const tempFahrenheit = tempCelsius/5*9+32;
console.log(`${tempCelsius}°C is ${tempFahrenheit}°F`);





// Exercise 4 : Guess The Answers #1
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.
// Using the code bellow 

let c;
let a = 34;
let b = 21;

// What will be the outcome of a + b in the first expression ?
// What will be the outcome of a + b in the second expression ?
// What is the value of c?
// Analyse the code below, what will be the outcome?
// console.log(3 + 4 + '5');


console.log(a+b) //first expression
// Prediction: 55, both a and b are numbers
// Actual: 55

a = 2;

console.log(a+b) //second expression
// Prediction: 23, because we reassigned the variable a to number 2
// Actual: 23
//The value of c:
// Prediction: no value, it's undefined
// Actual: undefined

console.log(3 + 4 + '5');

// Prediction: '75', because 3+4 equals 7 and after it automatically turns into a string and get concatenated with the string '5'
// Actual:'75'
   



// Exercise 5: Guess The Answers #2
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

typeof(15)
// Prediction: number, because 15 is a number
// Actual: number

typeof(5.5)
// Prediction: number, because 5.5 is a number
// Actual: number

typeof(NaN)
// Prediction: number, because NaN is a numeric data
// Actual: number

typeof("hello")
// Prediction: string
// Actual: string

typeof(true)
// Prediction: boolean
// Actual: boolean

typeof(1 != 2)
// Prediction: boolean, because the result is true and true is a boolean
// Actual: boolean

"hamburger" + "s"
// Prediction: hamburgers, because we concatenate 2 strings
// Actual: hamburgers

"hamburgers" - "s"
// Prediction: NaN, because Javascript will try to convert strings to numbers and 'hamburgers' and 's' can't be converted to numbers
// Actual: NaN

"1" + "3"
// Prediction: '13', because it's a string concatenation and not addition
// Actual: '13'

"1" - "3"
// Prediction: -2, because JavaScript will try to convert strings to numbers when subtracting and 1-3 equals -2
// Actual: -2

"johnny" + 5
// Prediction: johnny5, because 5 automatically becomes a string and it's a string concatenation
// Actual: johnny5

"johnny" - 5
// Prediction: NaN, because JavaScript will try to convert strings to numbers when subtracting and johnny can\t be converted to a number
// Actual: NaN

99 * "hello"
// Prediction: NaN, because 'hello' can\t be converted to a number
// Actual: NaN

1 != 1
// Prediction: false, because 1 is equal to 1
// Actual: false
 
1 == "1"
// Prediction: true, because we compare only the values, but not the data types
// Actual:true

1 === "1"
// Prediction:false, because we compare the values and the data types and string is not equal to a number
// Actual:false





// Exercise 6 : Guess The Answers #3
// Instructions
// For each expression, predict what you think the output will be in a comment (//) without first running the command.
// Of course, explain each prediction.
// Then run the expression in the console. Note the actual output in a comment and compare it with your prediction.

5 + "34"
// Prediction: 534 , because we concatenate two strings
// Actual: 534

5 - "4"
// Prediction: 1, because JavaScript will try to convert strings to numbers when subtracting
// Actual: 1

10 % 5
// Prediction: 0, because there is no reminder after dividing 10 on 5
// Actual: 0

5 % 10 
// Prediction: 5, because there is a reminder after dividing 5 on 10, equal to 5
// Actual: 5

"Java" + "Script"
// Prediction: JavaScript, because it's a string concatenation
// Actual: JavaScript

" " + " "
// Prediction: "  ", because it's a string concatenation
// Actual: "  "

" " + 0
// Prediction: " 0",  because it's a string concatenation
// Actual: " 0"

true + true
// Prediction: 2, because true equals to 1 and 1+1 equals 2
// Actual: 2

true + false 
// Prediction: 1,  because true equals to 1, false equals to 0 and 1+0 equals 1
// Actual: 1

false + true
// Prediction: 1,because true equals to 1, false equals to 0 and 0+1 equals 1
// Actual: 1

false - true
// Prediction: -1, because true equals to 1, false equals to 0 and 0-1 equals -1
// Actual:-1

!true
// Prediction: false, because it not equals to true
// Actual: false

3 - 4
// Prediction: -1, because it's a simple substraction
// Actual: -1

"Bob" - "bill"
// Prediction: NaN,  because JavaScript will try to convert strings to numbers when subtracting and 'Bob' and 'bill' can't be converted to numbers
// Actual:

