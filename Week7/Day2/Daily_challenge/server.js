// Instructions
// Use Express to create a few routes:
// The route /aboutMe/:hobby: displays the name of one hobby (ie. the value of the route parameter).
// If the parameter is not a string (ie. numbers or else), set the status to 404.

// The route /pic : displays an HTML file with a picture of your choice.
// The route /form : displays an HTML file.
// Requirements:
// The HTML file must be in the public folder.
// The HTML file must contain a form to contact you.
// The form must contain the inputs email and message. (add some HTML form validations)
// Output:
// You should get the data and display it on the route /formData.
// For example, “john@gmail.com sent you a message “Love your new website”.

const express = require('express');
const app = express();

app.listen(5000, () => {
    console.log('running on 5000');
})

app.get('/aboutMe/:hobby',(req,res)=>{
    let hobby = req.params.hobby
    if (! /^[a-zA-Z]+$/.test(hobby)) {
        return res.status(404).json({msg:'Hobby is not valid!'})
        
    }
    res.json(req.params.hobby)
})

app.use('/pic',express.static(__dirname + '/public'))

app.use('/form',express.static(__dirname + '/public'))

app.use(express.urlencoded({
    extended: true
  }))

app.post('/formData',(req,res)=>{
    let message = req.body.message;
    let email = req.body.email;
    let result = `${email} sent you a message: ${message}`
    res.json(result);

})