// Exercise 2 : HTTP & JSON
// Instructions
// Create a server file, name it - server.js
// In this file, use http to create a server. Send the below Javascript Object to the browser:
//     const user = {
//         firstname: 'John',
//         lastname: 'Doe'
//     }
// Hint : use JSON.
// 3. Your server should run on http://localhost:8080/



let http = require("http");
const server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'application/json');
    res.writeHead(200);
    res.end(`"const user" = {"firstname":" John", "lastname": "Doe"}`);
  });

  server.listen(8080, ()=>{
    console.log('Server is running to the post 8080')
})
