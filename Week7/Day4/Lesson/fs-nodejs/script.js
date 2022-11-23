const fs = require('fs');


// How to read to a file
// console.log(1);
// fs.readFile('./user', 'utf-8', (err,data)=>{
//     if (err){
//         console.log(err);
//     }
//     else{
//         console.log(JSON.parse(data));
//     }
// })



// const f= fs.readFileSync('./name.txt')
// console.log(f.toString());

// console.log(2);


//How to append to a file
// let obj = {
//     name: 'John',
//     age: 25
// }

// fs.appendFile('./user', JSON.stringify(obj), (err)=>{
//     if(err){
//         console.log(err);
//     }
// } )

// How to write to a file

fs.writeFile('./name1', '123456', (err)=>{
    if(err){
        console.log(err);
    }
})