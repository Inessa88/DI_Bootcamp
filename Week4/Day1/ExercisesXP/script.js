// Exercise 1 : Scope
// Instructions
// Analyse the code below, and predict what will be the value of a in all the following functions.
// Write your prediction as comments in a js file. Explain your predictions.

// #1
function funcOne() {
    let a = 5;
    if(a > 1) {
        a = 3;
    }
    alert(`inside the funcOne function ${a}`); // it's gonna be equal 3, because we reassigned the function
}

// #1.1 - run in the console:
funcOne()
// #1.2 What will happen if the variable is declared 
// with const instead of let ? - // there would be an error, because we cant to reassign the value of the constant variable

//#2
let a = 0;
function funcTwo() {
    a = 5;
}

function funcThree() {
    alert(`inside the funcThree function ${a}`);
}

// #2.1 - run in the console:
funcThree() // a = 0, because we didn't change it yet
funcTwo()//a=5, we reassigned it in the second function, but we won't see it as we don't console.log it
funcThree()//a=5, we reassigned it in the second function
// #2.2 What will happen if the variable is declared 
// with const instead of let ?


//#3
function funcFour() {
    window.a = "hello";
} 


function funcFive() {
    alert(`inside the funcFive function ${a}`);
}

// #3.1 - run in the console:
funcFour() //nothing. because there is no return or alert or anything
funcFive() //a = 5

//#4
let a = 1;
function funcSix() {
    let a = "test";
    alert(`inside the funcSix function ${a}`);
}


// #4.1 - run in the console:
funcSix() //the result will be test, because inside of the function we declared a new variable a and we alert it
// #4.2 What will happen if the variable is declared 
// with const instead of let ? // nothing will change, because we are not changing it, we declaring it in a local scope

//#5
let a = 2;
if (true) {
    let a = 5;
    alert(`in the if block ${a}`); // here will be 5, because we declared a new variable inside of if statement
}
alert(`outside of the if block ${a}`); // here will be 2, because our global variable didn't change

// #5.1 - run the code in the console
// #5.2 What will happen if the variable is declared 
// with const instead of let ? //nothing will change, because we are not changing it, we declaring it in a local scope


