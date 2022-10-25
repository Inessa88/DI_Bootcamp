// console.log(document.forms) 
// //find all the forms in the DOM
// // collection of forms

// console.log(document.forms[0])
// // find the first form on the DOM

// console.log(document.forms[0].elements)
// // find the elemets of the forms
// // its a collection of elements

// //find the first element of the form
// console.log(document.forms[0].elements[0])
// /* <input name=​"one">​ */

// // find the value of the first element
// console.log(document.forms[0].elements[0].value)
// 'hello'

// // find the value of the first element
// // the first element has a name attribute of "one"
// console.log(document.forms[0].elements.one.value)
// 'hello'

// // find the value of the first element
// // the first element has a name attribute of "one"
// console.log(document.forms[0].elements['one'].value)


// //find all the inputs from the form
// console.log(document.forms[0].querySelectorAll("input"))

// //retrieve the form
// const firstForm = document.forms[0];

// //submit event listener is for a form
// firstForm.addEventListener("submit", retrieveData)

// function retrieveData(event){
//     event.preventDefault(); //preventing the default
//     const allElementsForm = firstForm.elements; 
//     // find all the elements inside the form
//     // [input, input, button]

//     //retrieve the first input
//     const firstInput = allElementsForm[0];
//     const valueFirstInput = firstInput.value; //value of the input

//     // secondInput
//     const secondInput = allElementsForm[1];
//     const valueSecondInput = secondInput.value; //value of the input

//     console.log(valueFirstInput,valueSecondInput);
// }

const firstForm = document.forms[0];


function retrieveData(){
    
    const allElementsForm = firstForm.elements; 
    // find all the elements inside the form
    // [input, input, button]

    //retrieve the first input
    const firstName = allElementsForm[0];
    const valueFirstName = firstName.value; //value of the input

    // secondInput
    const lastName = allElementsForm[1];
    const valueLastName = lastName.value; //value of the input

    console.log(valueFirstName,valueLastName);
}

retrieveData();



