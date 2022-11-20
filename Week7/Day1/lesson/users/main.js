

// 1. require users function
// 2. call the function
// 3. console the data ()

const users = require('./users.js') // because those files in one folder
users.getUsers()
.then(data=>{
    console.log(data);
});

