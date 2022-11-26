const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();
const app = express();
app.set('view engine', 'ejs'); // we setting express to use ejs


app.use(cors());
app.use('/', express.static(__dirname+ '/public'));

app.listen(process.env.PORT||8080, ()=>{
    console.log(`running on ${process.env.PORT||8080}`);
})


// All this above isfor server

//this we do in order to see html.ejs on http://localhost:3001/home
app.get('/home', (req,res)=>{
    res.render('index')
})
//  the same here with about.ejs page on http://localhost:3001/about
app.get('/about', (req,res)=>{
    res.render('about')
})
//  the same here with about.ejs page on http://localhost:3001/contact
app.get('/contact', (req,res)=>{
    res.render('contact')
})

app.get('/shop', (req,res)=>{
    const products = [
        {id:1, name: 'IPhone', price: 800},
        {id:2, name: 'IPad', price: 700},
        {id:3, name: 'IWatch', price: 500}
    ]
    res.render('shop',{ //render also destucturing an object by himself, you don't need to do it
        data:products
    })

})