//here we are sending a post request with a form or fetch
//for react it alco work

function getData() {
    fetch('http://localhost:3001/users', {
        method:'POST',
        headera:{
            'Content-type': 'application/json'
        },
        body:JSON.stringify({name: 'aaa'})
    })
    .then(res => res.json())
    .then(data=>{
        console.log(data);
    })
    .catch(e =>{
        console.log(e);
    })
}


getData();