const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');


dotenv.config();
const app = express();


app.use(cors());
app.use('/', express.static(__dirname+ '/public'));
app.use(express.urlencoded({extended:true}))

app.listen(process.env.PORT||8080, ()=>{
    console.log(`running on ${process.env.PORT||8080}`);
})

let formInfo = [];
   
app.post('/', (req, res) => {
    let purchase = req.body.purchase;
    let quantity = req.body.quantity;
    let result = `${purchase}: ${quantity}`;
    formInfo.push(result);
    return res.redirect('/');
});

app.get('/getdata', (req,res) =>{
    res.json(formInfo);
    
})



