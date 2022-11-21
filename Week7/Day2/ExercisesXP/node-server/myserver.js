// Exercise 1 : HTTP
// Instructions
// Create a new folder, name it - node-server
// Create a server file, name it - myserver.js
// In this file, use http to create a server. You should return at least three different lines of HTML to the browser. (Use only HTML tags, no HTML files)
// Your server should run on http://localhost:3000/


let http = require("http");
const server = http.createServer(function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.writeHead(200);
    res.end('<html><body><h1>This is my first response</h1><br><h1>This is my second response</h1><br><p>This is my third response</p></body></html>');
  });

  server.listen(3000, ()=>{
    console.log('Server is running to the post 3000')
})


