// check list:

// 1. create our package filenpm init -y or npm init
// 2. install packages you need - XPathExpression, dotenv, cors, axios, bcript, body-parser or something else
// npm i name-of-package
// 3. install nodemon: npm i -D nodemon
// 4. make changes in package.json file if weneed to
// 5. npm start - to start our application
// 6. create our .env file
// 7. create express server

const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const bcrypt = require('bcrypt')
const fs = require('fs')

dotenv.config();
const app = express();
app.use(cors());

app.use(express.json());
app.use(express.urlencoded({extended: true})) //those two lines we need for our post request and get req.body
app.use('/', express.static(__dirname + '/public'));


app.listen(process.env.PORT||8080,()=>{
    console.log(`run on port ${process.env.PORT||8080}`);
})


app.post('/login', (req,res)=>{
    const{email,password} = req.body
    console.log(req.body);
    let users = [];
    try{
        const f = fs.readFileSync('./users')
        users = JSON.parse(f.toString())
    }
    catch(e){
        console.log(e);
     } 

    if(!isUserExist(users,email)){
        return res.json({msg: 'user does not exist'})
    }

    const userData = users.find(user =>{
        return user.email == email
    })
    console.log('userData->', userData); //checking the userData

    const match = bcrypt.compareSync(password, userData.password)

    if(!match){
        return res.json({msg:'wrong password'})
    }
    res.json({msg:'login succesfully'})
})

app.post('/register', (req,res)=>{
    console.log(req.body);
    // const {firstname,lastname,email,username,password} = req.body //it's for option 2 of changing the password to hash
    

    let users = [];
    try{
        const f = fs.readFileSync('./users')
        users = JSON.parse(f.toString())
    }
    catch(e){
        console.log(e);
     } 


    if(isUserExist(users,req.body.email)){//calling the function to check if the user exists
        return res.json({msg: 'email exist'})
    }

    const salt = bcrypt.genSaltSync();
    // console.log(salt);
    const hash = bcrypt.hashSync(req.body.password, salt)

    //option one of changing the password to hash
    req.body.password = hash
    users.push(req.body)
    //option 2 of changing the password to hash
    // username.push({firstname,lastname,email,username,password})
        
     fs.writeFile('./users',JSON.stringify(users), err =>{
        if(err){
            console.log(err);
        }
     })
    res.json({password:hash})
})

const isUserExist = (arr, email)=>{
    const filterUsers = arr.filter(user =>{
        return user.email == email;
    })
    return (filterUsers.length > 0)? true:false
}