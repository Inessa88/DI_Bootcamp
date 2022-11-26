const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const fs = require('fs')

dotenv.config();
const app = express();

app.use(cors());
app.use('/', express.static(__dirname+ '/public'));
app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT||8080, ()=>{
    console.log(`running on ${process.env.PORT||8080}`);
})

fs.writeFile('./register.json', '[]', err => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully wrote file')
            }
        })

function buffer() {
const buff = fs.readFileSync('./register.json', 'utf-8', (err,data)=>{
    if (err){
        console.log(err);
        return '';
    }
    else{
        const fileContent = buffer.toString();
        return fileContent;
    }
})
return buff
}  

app.post('/register.html', (req,res)=>{
    const {firstname, lastname, email, username, psw} = req.body;
    const fileContent = JSON.parse(buffer());
    let userAlreadyExists = false;
    for (const user of fileContent) {
        if(user.username === username || user.psw === psw) {
            userAlreadyExists = true;
            break;
        }
    }
    if (!userAlreadyExists) {
        fileContent.push({firstname, lastname, email, username, psw})
        const jsonString = JSON.stringify(fileContent, null, 2)
        fs.writeFile('./register.json', jsonString, (err) => {
            if (err) {
                console.log('Error writing file', err)
            } else {
                console.log('Successfully updated the file')
            }
        })
        return res.redirect('/register.html?success=1')
    } else {
        return res.redirect('/register.html?success=0')
    }
})



app.post('/login.html', (req,res)=>{
    console.log(req.body);
    const {username, psw} = req.body;
    const userDetails = JSON.parse(buffer());
    let userExists = false;
    let userFirstName = ''
    for(const userDetail of userDetails){
        if (userDetail.username === username && userDetail.psw === psw) {
            userFirstName = userDetail.firstname;
            userExists = true;
            break;
        }
    }
    if (userExists) {
        return res.redirect(`/login.html?success=1&firstname=${userFirstName}`)        
    } else {
        return res.redirect('/login.html?success=0')
    }
})



