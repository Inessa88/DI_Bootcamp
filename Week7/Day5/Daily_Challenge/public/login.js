const getLogedIn = ()=>{
    const div = document.getElementById('login-message')

    const urlSearchParams = new URLSearchParams(window.location.search);
    const params = Object.fromEntries(urlSearchParams.entries());
    
    if ('success' in params && params.success == 1 && 'firstname' in params) {
        div.innerText = `Hi, ${params.firstname}! Welcome back again!`;
    } else if ('success' in params && params.success == 0) {
        div.innerText = 'Username is not registered'
    }

}
getLogedIn();