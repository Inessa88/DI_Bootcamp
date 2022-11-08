// Exercise 1 : Comparison
// Instructions
// Create a function called compareToTen(num) that takes a number as an argument.
// The function should return a Promise:
// the promise resolves if the argument is less than 10
// the promise rejects if argument is greater than 10.

let num;
function compareToTen(num){
   let myNumber = new Promise ((resolve, reject) => {
        if (num < 10) {
                resolve("The number is less then 10")
                
            } else {
                reject("Too big number")
            }
        })
    return myNumber;
}

compareToTen(15)
    .then(result => console.log(result))
    .catch(error => console.log(error))

compareToTen(8)
    .then(result => console.log(result))
    .catch(error => console.log(error))


// Exercise 2 : Promises
// Instructions
// Create a promise that resolves itself in 4 seconds and returns a “success” string.
// How can you make your promise from part 1 shorter using Promise.resolve() and console.log “success”?
// Add code to catch errors and console.log ‘Ooops something went wrong’.

    


new Promise ((resolve) => {
	setTimeout(() => {
		resolve(console.log("success"))
	}, 4000)
})



setTimeout(() => {
    Promise.resolve("success").then(
        (value) => {
          console.log(value); 
        },
      ).catch((err) => console.log("Ooops something went wrong"));
}, 4000)





// Exercise 3 : Resolve & Reject
// Instructions
// Use Promise.resolve(value) to create a promise that will resolve itself with a value of 3.
// Use Promise.reject(error) to create a promise that will reject itself with the string “Boo!”

const promise = Promise.resolve(3);
promise.then(function(val) {
    console.log(val);
});


const promise1 = Promise.reject("Boo");
promise1.catch(function (error) {
  console.log(error);
});