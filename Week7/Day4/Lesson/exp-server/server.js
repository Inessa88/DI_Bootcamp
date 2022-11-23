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
const {db} = require('./data/products.js'); //we extract db from that location

dotenv.config();

// db.raw('select 1')//this way I just checking connection
// .then(data=>{
//     console.log(data);
// })
// .catch(e=>{
//     console.log(e);
// })



// db.raw('select * from products')//here I retrieve our products
// .then(data=>{
//     console.log(data.rows);
// })
// .catch(e=>{
//     console.log(e);
// })




const app = express();
app.use(cors()) //this is how we use cors
app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.listen(process.env.PORT, ( )=> {
    console.log(`run on port ${process.env.PORT}`);
})


//this is READ from CRUD
//now we are making a query
app.get ('/api/products', (req,res)=>{
    db('products')
    .select('id','name','price')//this is a promise
    .then(rows =>{ //here we can put any word like data or result
        res.json(rows) //here we convert to a string
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({msg:e.message})
    })
})

//read - going to get 1 product with params
app.get('/api/products/:id',(req,res)=>{
    const {id} = req.params;
    db('products')
    .select('id','name','price')
    .where({id:id})
    .then(rows=>{
        res.json(rows)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({msg:e.message})
    })
})

//read - will search for products - query

app.get('/api/search',(req,res)=>{
    const {q} = req.query; //q -it's a name I gave to my key
    db('products')
    .select('id','name','price')
    .whereILike('name',`${q}%`)
    .then(rows=>{
        if(rows.length ===0){
            return res.status(404).json({msg:'not found'})
        }
        res.json(rows)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({msg:e.message})
    })
})


//Create - Post requestto create a new product
app.post('/api/products', (req,res)=>{
    // console.log(req.body);
    const {name, price} = req.body;
    db('products')
    .insert({
        name: name,
        price: price
    })
    .returning('*')//to check after what we added 
    .then(rows=>{
        if(rows.length ===0){
            return res.status(404).json({msg:'not found'})
        }
        res.json(rows)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({msg:e.message})
    })
})

//update - put - update/modify a product
app.put('/api/products/:id', (req,res)=>{
    const {id} = req.params;
    const{name, price} = req.body;
    db('products')
    .select('id','name','price')
    .where({id:id})
    .update({
        name: name,
        price: price
    })
    .then(rows=>{
        res.json(rows)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({msg:e.message})
    })

})


//DELETE - delete a product

app.delete('/api/products/:id', (req,res)=>{
    const {id} = req.params;
    db('products')
    .select('id','name','price')
    .where({id:id})
    .del(['id', 'name', 'price'])
    .returning('*')
    .then(rows=>{
        res.json(rows)
    })
    .catch(e=>{
        console.log(e);
        res.status(404).json({msg:e.message})
    })
})




