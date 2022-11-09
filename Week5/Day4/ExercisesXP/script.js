// Exercise 1: Conversion
// Instructions
// Convert the below promise into async await:

// fetch("https://www.swapi.tech/api/starships/9/")
//     .then(response => response.json())
//     .then(objectStarWars => console.log(objectStarWars.result));

async function getStarWars(){
    const results = await fetch(`https://www.swapi.tech/api/starships/9/`)
    if(results.status !== 200) {
        throw new Error("Error")
    } else {
        const objectStarWars = await results.json(); 
        console.log(objectStarWars)
    }
}

getStarWars()



// Exercise 2: Analyze
// Instructions
function resolveAfter2Seconds() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve('resolved');
        }, 2000);
    });
}

async function asyncCall() {
    console.log('calling');
    let result = await resolveAfter2Seconds();
    console.log(result);
}

asyncCall();
// Analyse the code provided above before executing it - what will be the outcome?

//We gonna call the function asyncCall(), it means at first console log('calling') will appear and then after 2 seconds will be console.log the sesult of resolveAfter2Seconds()function - 'resolved'.
