// Exercise 1 : Analyzing The Map Method
// Instructions
// Analyze this code, what will be the output ?

[1, 2, 3].map(num => {
  if (typeof num === 'number') return num * 2;
  return ;
});
 //The output will be an array with all the elements multiplied by 2 like [2, 4, 6].



//  Exercise 2: Analyzing The Reduce Method
// Instructions
// Analyze this code, what will be the output ?

[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2],
);

// The result will be [1, 2, 0, 1, 2, 3], because with reduce method the array [1, 2] will be ainitial value, so it will be at the beginning of the resul array. And concat will flatten arrays into one array.


// Exercise 3 : Analyze This Code
// Instructions
// Using this code:

const arrayNum = [1, 2, 4, 5, 8, 9];
const newArray = arrayNum.map((num, i) => {
    console.log(num, i);
    alert(num);
    return num * 2;
})
// What is the value of i ?

//This code suppose to console log each element of arrayNum with the index of the element. After there supposed to be an alarm on the page with num and map method creating newArray, multiplying every element of arrayNum by 2.
//The value of i - indexes changes from 0 to 5.



// Exercise 4 : Nested Arrays
// Instructions
// Using a method, take this array const array = [[1],[2],[3],[[[4]]],[[[5]]]] and modify it to look like this array: [1,2,3,[4],[5]].


const array = [[1],[2],[3],[[[4]]],[[[5]]]]
const newOne = array.flat(2);
console.log(newOne);

// Using a method, take this array const greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]]; and modify it to look like this array: ["Hello young grasshopper!","you are","learning fast!"].

greeting = [["Hello", "young", "grasshopper!"], ["you", "are"], ["learning", "fast!"]];
const withoutCommas = greeting.map((element)=> element.join(' '))
const newGreetings = withoutCommas.flat();
console.log(newGreetings);


// Turn the greeting array into a string: ‘Hello young grasshopper you are learning fast!’.

const greetingString = newGreetings.join(' ');
const greetingStringClean = greetingString.replace(/!/, '');
console.log(greetingStringClean);

// Turn the trapped number 3 const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]] into: [3]

const trapped = [[[[[[[[[[[[[[[[[[[[[[[[[[3]]]]]]]]]]]]]]]]]]]]]]]]]]
const untrapped = trapped.flat(25);
console.log(untrapped);