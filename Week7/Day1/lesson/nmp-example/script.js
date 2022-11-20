// const slugify = require('slugify');
// console.log(slugify('my new web site', '_'));


const axios = require('axios');


const getUsers = async() => {
    try {
        const res = await axios.get('https://jsonplaceholder.typicode.com/users');
        // console.log(res)
        if(res.status == 200){
            console.log(res.data)
        }
    } catch (e) {
        console.log(e)
    }
}

getUsers()