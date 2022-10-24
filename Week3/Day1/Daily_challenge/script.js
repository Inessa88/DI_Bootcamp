// Instructions
// In this exercise we will be creating a webpage with a black background as the universe and we will fill the universe with planets and their moons.
// We will provide the HTML page.
// You only have to work with a JS file.



// Create an array which value is the planets of the solar system.
// For each planet in the array, create a <div> using createElement. This div should have a class named "planet".
// Each planet should have a different background color. (Hint: you could add a new class to each planet - each class containing a different background-color).
// Finally append each div to the <section> in the HTML (presented below).
// Bonus: Do the same process to create the moons.
// Be careful, each planet has a certain amount of moons. How should you display them?
// Should you still use an array for the planets ? Or an array of objects ?

function planetRepresentation () {
    const planets = ['Mercury', 'Venus', 'Earth', 'Mars', 'Jupiter', 'Saturn', 'Uranus', 'Neptune']
    const bg_colors = ['blue', 'fuchsia', 'gray', 'green', 'lime', 'aqua', 'maroon', 'red']

    const planet_moon_matching = {
        Mercury : 0,
        Venus : 0,
        Neptune : 0,
        Earth : 1,
        Mars : 2,
        Jupiter : 80 ,
        Saturn : 83 ,
        Uranus : 27,
    }
    const section = document.getElementsByClassName('listPlanets')[0];

    for (let i = 0; i < planets.length; i++) {
        const div = document.createElement("div");
        div.style.backgroundColor = bg_colors[i];
        div.className = 'planet';
        for (let j = 0; j < planet_moon_matching[planets[i]]; j++) {
            let moon = document.createElement("div");
            moon.className = 'moon';
            moon.style.left = j * 10 + 'px';
            div.appendChild(moon);
        }
        section.appendChild(div);
    }
}

planetRepresentation ();