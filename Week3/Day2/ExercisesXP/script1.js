// Exercise 2 : Work With Forms
// Instructions
// Copy the code below, into a structured HTML file:

// {/* Retrieve the form and console.log it.
console.log(document.forms[0]);


// Retrieve the inputs by their id and console.log them.
const firstName1 = document.getElementById('fname').value;
const lastName1 = document.getElementById('lname').value;
console.log(firstName1, lastName1);

// Retrieve the inputs by their name attribute and console.log them.
// When the user submits the form (ie. submit event listener)
// use event.preventDefault(), why ?
// get the values of the input tags,
// make sure that they are not empty,
// create an li per input value,
// then append them to a the <ul class="usersAnswer"></ul>, below the form.
// The output should be :

// <ul class="usersAnswer">
//     <li>first name of the user</li>
//     <li>last name of the user</li>
// </ul>  */}


const button = document.getElementById('submit');

const form = document.querySelector('form');

function logInputs(event){
    event.preventDefault()
    const firstName = document.querySelector('[name=fname]').value;
    const lastName = document.querySelector('[name=lname]').value;
    console.log(firstName, lastName);

    if (firstName=== '' || lastName===''){
        alert('Fill in the form, please!')
    } else{
        const ul = document.querySelector('.usersAnswer');
        ul.innerHTML = ""
        const li1 = document.createElement('li');
        const li2 = document.createElement('li');
        li1.innerText = firstName;
        li2.innerText = lastName;
        ul.append(li1, li2);

    }
}

form.addEventListener('submit', logInputs);