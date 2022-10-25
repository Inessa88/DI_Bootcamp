// Get the value of each of the inputs in the HTML file when the form is submitted. Remember the event.preventDefault()
// Make sure the values are not empty
// Write a story that uses each of the values.
// Make sure you check the console for errors when playing the game.

const form = document.querySelector('form');

function createFunnyStory(event){
    event.preventDefault();
    const noun = document.querySelector('[name=noun]').value;
    const adjective = document.querySelector('[name=adjective]').value;
    const person = document.querySelector('[name=person]').value;
    const verb = document.querySelector('[name=verb]').value;
    const place = document.querySelector('[name=place]').value;


    if (noun === '' || adjective === '' || person === '' || verb === '' || place === ''){
        alert('Fill in all the fields in form, please!');
    } else{
        let story = `Jack carried the rock up to his ${place}.
        Edgar walked past Jack's ${adjective} house.
        Jack ${verb} the rock on Edgar's head.
        Jack called ${person}.
        Jack and Edgar became friends in the ${noun}.`
        const span = document.querySelector('span');
        span.innerHTML = story;
    }
}

form.addEventListener('submit', createFunnyStory);