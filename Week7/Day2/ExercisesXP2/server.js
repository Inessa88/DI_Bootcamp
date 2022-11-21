
// Exercise 1 : Express & JSON
// Instructions
// Create two files : server.js and script.js.
// In the server.js file, create an express server and a route /, using the GET method.
// Add the below Javascript Object in the handler function of the route:

//     const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }


// Use your server to get the static HTML file from the public folder. Check out the lesson named Express Routes & Queries in the Course Notes, more specifically the part “How To Serve Static Files In Express”.

// Your server should run on http://localhost:3000/ to serve the HTML file.
// In the script.js file, fetch your server and get the response. The response should be the JSON Object. console.log this object and display it on the HTML.



const express = require('express');
const app = express();
app.use('/', express.static(__dirname + '/public'))
app.get('/get-user', (req, res) => {
        const user = {
            firstname: 'John',
            lastname: 'Doe'
        }
        res.send(user)
    });


app.listen(3000, () => {
    console.log('running on 3000');
})





// Exercise 2 : Express & Parameters
// Instructions
// In the server.js file, create your server using express.
// Create a route /, and use a GET request method.
// The path of the route should contain the route parameter id. Check out the lesson named Express Routes & Queries in the Course Notes.
// The handler function of the route should respond with the value of the route parameter. Check out req.params.
// Run on port http://localhost:3000/ and add an id, for example http://localhost:3000/1234
// The response on the page and on the console, should be a JSON Object


// const express = require('express');
// const app = express();
// app.get('/:id',(req, res) => {
//     console.log("req.params: ", req.params)
//     res.send({id: req.params.id})
       
//     });

// app.listen(3000, () => {
//     console.log('running on 3000');
// })



// Exercise 3: Express & Static Files
// Instructions
// Create a public folder, that contains an HTML file. This HTML file can contain some CSS and some JavaScript (for example a head tag with some classes for styling, and in the body a button with an onClick attribute calling a Javascript function with an alert)
// In a server.js file create your server using express.
// Use your server to get the static HTML file from the public folder
// Your server should run on http://localhost:3000/ to serve the HTML file


// const express = require('express');
// const app = express();
// app.use('/', express.static(__dirname + '/public'))


// app.listen(3000, () => {
//     console.log('running on 3000');
// })


