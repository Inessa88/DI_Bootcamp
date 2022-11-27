const login = (event)=>{
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    fetch('/login', {
        method: 'POST',
        body: JSON.stringify({email,password}),
        headers: {
            'content-type':'application/json'
        }//this was a request
    })
    // this is a response
    .then(res => res.json())
    .then(data =>{
        const root = document.getElementById('root')
        root.innerText = data.msg //here we show our message whether user loded in or not, because we get a response fromm fetch like {msg:'wrong password'}
        console.log(data);
    })
    .catch(e =>{
        console.log(e);

    })
}