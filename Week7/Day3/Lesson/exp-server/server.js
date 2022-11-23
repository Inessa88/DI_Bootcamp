//RESTful API
// There are methods in http:
// GET - we want to get data 

// POST - new data like creating a new URLSearchParams, product (we send data from the client to the server)

// PUT - to modify or update data

// DELETE - to delete data (we can send an id and delete that product by it's id)


// This is called CRUD - it/s one rule of restful api
// Create - post api/product api/users
// Read - get api/product api/users
// Update - put api/product api/users
// Delete - delete api/product api/users

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const {products} = require('./data/products.js');

dotenv.config();
const app = express();
app.use(cors()) //this is how we use cors
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.listen(process.env.PORT, ( )=> {
    console.log(`run on port ${process.env.PORT}`);
})
//this is READ from CRUD
app.get ('/api/products', (req,res)=>{
    res.json(products)
})

//read - going to get 1 product with params
app.get('/api/products/:id',(req,res)=>{
    const {id} = req.params;
    const product = products.find(item =>{
        return item.id == id //because we compare string and number
    })

    if(!product){
        return res.status(404).json({msg:'not found'})
    }
    res.json(product)
})

//read - will search for products - query

app.get('/api/search',(req,res)=>{
    const {q} = req.query; //q -it's a name I gave to my key
    const result = products.filter(item =>{
        return item.name.toLocaleLowerCase().includes(q.toLocaleLowerCase())

    })
    if(result.length ===0){
        return res.status(200).json({msg: 'no product found'})
    }
    res.json(result)
})


//Create - Post requestto create a new product
app.post('/api/products', (req,res)=>{
    console.log(req.body);
    const {name, price} = req.body;
    const newProduct = {
        id: products.length+1,
        name: name,
        price: price
    }
    products.push(newProduct)
    res.json(products)
})

//update - put - update/modify a product
app.put('/api/products/:id', (req,res)=>{
    const {id} = req.params;
    const{name, price} = req.body;

 //let's find the index of the item we want to change:
    const index = products.findIndex(item =>{
        return item.id == id
    })
    if(index===-1){
        return res.json(404).json({msg:'product not found'})
    }
    const updatedProduct = {
        id: id,
        name: name,
        price: price
    }

    products[index] = updatedProduct;

    res.json(products)
})

//DELETE - delete a product

app.delete('/api/products/:id', (req,res)=>{
    const {id} = req.params;
    const index = products.findIndex(item =>{
        return item.id == id
    })
    if(index === -1){
        return res.status(404).json({msg: 'not found'})
    }
    products.splice(index,1)
    res.json(products)
})