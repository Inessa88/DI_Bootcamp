const express = require('express');
const {products} = require('./modules/data.js') //object destructuring instead of writing products.products
const app = express();

app.listen(5000, () => {
    console.log('running on 5000');
})

app.use('/', express.static(__dirname + '/public')) //this express.static method is looking for static files in our directory

app.get('/api/products',(req,res)=>{
    // const products = [
    //     {id:1,name:'iPhone',price:1800},
    //     {id:2,name:'iPad',price:800},
    //     {id:3,name:'iWatch',price:650}
    // ]; we can get it from another file with require
    res.json(products)
})

// app.get('/inessa/',(req,res)=>{
//     res.json({message: 'OK'})




// })

// app.get('/about' , (req,res)=>{
//     res.sendFile(__dirname + '/public/about.html')
// }) // this is the same as line 9

// here we can get a single product
app.get('/api/products/:productId', (req,res) => {
    // console.log(req.params);
    const{productId} = req.params;
    const product = products.find(item =>{
        return item.id == productId
    })
    if(!product) {
        return res.status(404).json({msg:'Product not found'})
    }
    res.json(product);
})

app.get('/api/search', (req,res)=>{
    const {name} = (req.query); //destructuring
    const results = products.filter(item =>{
        return item.name.toLowerCase().includes(name.toLowerCase())
    })

    if(results.length === 0){
        return res.status(200).json({msg: 'No Products matched your search'})
    }
    res.json(results);
})