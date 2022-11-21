const http = require('http');

const server = http.createServer((req, res)=>{
    //send back response to the client
    console.log('url => ', req.url);
    console.log('method =>', req.method);
    if(req.url === '/'){
        // if(req.method === 'GET') {

        // }
        res.end('<h1> Home page </h1>')
    } else if (req.url === '/about'){
        res.end('<h1> About </h1>')
    } else {
        res.end('<h1> 404 Not found </h1>')
    }
    // console.log('get a request from the client side');
    // res.end('hello from my first server')
})

server.listen(5000, ()=>{
    console.log('Server is running to the post 5000')
})