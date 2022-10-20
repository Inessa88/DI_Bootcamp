// Instructions
// Write a JavaScript program that recreates the pattern below.
// Do this challenge twice: first by using one loop, then by using two nested for loops (Nested means one inside the other - check out this tutorial of nested loops).
// Do this Daily Challenge by youself, without looking at the answers on the internet.
// *  
// * *  
// * * *  
// * * * *  
// * * * * *
// * * * * * *



const numIter = 6;


let pattern = "*";
for (i=0; i <= numIter; i++) {
    pattern = pattern + " * "
    console.log(pattern)
};



for (i=0; i < numIter; i++) {
    const starNumber = i + 1;
    let lines = ""
    for (j=0; j < starNumber; j++) {
    lines = lines + " * "
    }
    console.log(lines);
};
