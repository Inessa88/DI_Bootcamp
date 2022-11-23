// Create an fs.js file and use the Node js File System to read the RightLeft file. In the file, you will see a list of symbols : > and <. Each one of this symbol has a meaning:
// > means that you move 1 step to the right
// < means that you move 1 step to the left


const fs = require('fs');

// fs.readFile('./RightLeft.txt', 'utf-8', (err,data)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(data);
//     }
// })



// Use the corresponding operations to calculate the final position at the end of the file - The answer should be: 74 steps to the right.
let result = 0;
characters = [];
// let data = fs.readFileSync('./RightLeft.txt', 'utf-8');
// for (const ch of data){
//     characters.push(ch)
//     if (ch === '>'){
//         result++
//     } else if ((ch === '<')){
//         result--
//     }
// }
// console.log(characters);
// console.log(`The final position at the end of the file is ${result}`);

// Use the corresponding operations to calculate the number of steps needed to hit position the -1 for the first time - The answer should be: 1795 steps.
let data2 = fs.readFileSync('./RightLeft.txt', 'utf-8');
position = 0;
for (const ch of data2){
    characters.push(ch)
    if (result === -1){
        break
    } else{
        
        if (ch === '>'){
            result++
            position++
        } else if ((ch === '<')){
            result--
            position++
        }
    }
}
console.log(characters);
console.log(`The position is ${result}`);
console.log(`First time in the left side is in position ${position}`);


