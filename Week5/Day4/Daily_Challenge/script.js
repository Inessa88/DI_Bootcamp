// 1st Challenge
// Instructions
// Use Promise.all
// This function should accept an array of promises and return an array of resolved values.
// If any of the promises are rejected, the function should catch them.

// Explain in a comment how Promise.all work and why you receive this output.

// Example

const promise1 = Promise.resolve(3);
const promise2 = 42;
const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 3000, 'foo');
});
// expected output: Array [3, 42, "foo"] - I receive this output, because all my promises are fulfilled and non of them are regected. 

const promises = [promise1, promise2, promise3];
Promise.all(promises)
  .then(response => console.log(response)) 
  .catch(error => console.log(`Error`))

// Promise.All execute promises in parallel and wait until all of them are ready.
// So we will get our result only after every particular promise in array will be resolved.
// If any of the promises is rejected, the promise returned by Promise.all immediately rejects with that error.


// 2nd Challenge
// Instructions
// You will find the hour of sunrise of two cities, using the API https://sunrise-sunset.org/api.
// In the HTML file, create a form with 4 inputs:
// the latitude and longitude of the first city
// the latitude and longitude of the second city
// Retrieve the input’s value and display the hour of the sunrise for both city ONLY when both promises are resolved
// Hint : Use Promise.all()
// Try with Paris and New York

const form = document.getElementById('myForm');
form.addEventListener('submit', showSunrise);

function showSunrise(event) {
    event.preventDefault();
    const lat1 = form.elements[0].value;
    const long1 = form.elements[1].value;
    const lat2 = form.elements[2].value;
    const long2 = form.elements[3].value;
    const url1 = getUrl(lat1, long1)
    const url2 = getUrl(lat2, long2)
    const promise1 = fetch(url1).then((res) => res.json());
    const promise2 = fetch(url2).then((res) => res.json());;
    Promise.all([promise1, promise2])
        .then(response => console.log(response)) 
        .catch(error => console.log(`Error`))
}

function getUrl(lat, long){
    return `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${long}`
}


// Paris
// Latitude: 48.864716
// Longitude: 2.349014

// New York
// Latitude: 40.730610
// Longitude: -73.935242
