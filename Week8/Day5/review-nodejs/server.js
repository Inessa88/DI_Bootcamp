const express = require('express');
const app = express();
const cors = require('cors')
const db = require('./database/db.js')


app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use(cors)
app.listen(3001, ()=>{
    console.log('run on 3001');
})

// app.get('/login',(req,res)=>{
//     res.send('<h1>hello from loginget requeston 3001<h1>')
// })

// app.get('/register',(req,res)=>{
//     res.json({message:'hello from loginget requeston 3001'})
// })



// app.get('/weather', (req,res)=>{
//     let cur = {city: 'TLV', status:'windy'}
//     res.json(cur)
// })


// app.get('/users', (req, res)=>{
//     console.log(req.query);
//     // let name = req.query.name
//     let name = req.params.name
//     let users = [
//         {name:'aaa', email: 'aaa@aaa.com'},
//         {name:'bbb', email: 'bbb@bbb.com'},
//         {name:'ccc', email: 'ccc@ccc.com'}
//     ]
//     let findUser = users.find(item=>{
//         return item.name == name
//     })
//     res.json(findUser) //this gives us only that user we want, which we write in a query in url
// })


// app.post('/users', (req, res)=>{
//         console.log(req.body);
   
//         let name = req.body.name;
  
//         let users = [
//             {name:'aaa', email: 'aaa@aaa.com'},
//             {name:'bbb', email: 'bbb@bbb.com'},
//             {name:'ccc', email: 'ccc@ccc.com'}
//         ]
//         let findUser = users.find(item=>{
//             return item.name == name
//         })
//         res.json(findUser) //this gives us only that user we want, which we write in a query in url
//     })



    app.get('/countries',(req,res)=>{
        let name = req.query.country// it's for returning some particular country on localhost/countrycountry=israel
        db('country')
        .select('country_id','country') // here we get a promise, we need then
        .where({country:name})
        .then(rows =>{
            res.json(rows)
        })
        .catch(e=>{
            res.status(404).json({msg: e.message})
        })
    }) //that's it, if you go to ...localhost/countries you will get all your countries from the database