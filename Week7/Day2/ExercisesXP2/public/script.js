// In the script.js file, fetch your server and get the response. The response should be the JSON Object. console.log this object and display it on the HTML.

const getUser = () => {
    fetch('http://localhost:3000/get-user')
     .then(res => res.json())
     .then(data =>{
        createUser(data)
    })
    .catch(e => {
        console.log(e)
 })
}

getUser();

const createUser = (data) =>{
    const route = document.getElementById('route');
    let div = document.createElement('div');
    div.innerText = JSON.stringify(data)
    route.appendChild(div)
}
