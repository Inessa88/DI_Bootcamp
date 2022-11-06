// Instructions
// Create a form with two fields (name, last name) and a submit button.
// When you click the Send button, retrieve the data from the inputs, and append it on the DOM as a JSON string.
// The output should be:
// output


const form = document.getElementById('myForm');
form.addEventListener('submit', showJson);

function showJson(event) {
    event.preventDefault();
    const myFormData = new FormData(event.target);
    const formDataObj = {};
    myFormData.forEach((value, key) => (formDataObj[key] = value));
    const formDataObjJson = JSON.stringify(formDataObj)
    const jsonString = document.createTextNode(formDataObjJson)
    const div = document.getElementById('result');
    div.appendChild(jsonString);

}