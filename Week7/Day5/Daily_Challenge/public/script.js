function manage(txt) {
    const bt = document.getElementById('bt');
    const element = document.getElementsByTagName('input'); 


    for (i = 0; i < element.length; i++) {
        if ((element[i].type == 'text'|| element[i].type == 'password')  && element[i].value == '') {
            bt.disabled = true;    
            return false;
        }
        else {
            bt.disabled = false;   
        }
    }
}    


const getRegisterData = ()=>{
    let registerResult = window.location.search.substring(1);
    const div = document.getElementById('register-result')
    if (registerResult && registerResult.includes('success=1')) {
        const loginLink = document.createElement('a');
        loginLink.href = 'http://localhost:5000/login.html'
        loginLink.innerText = 'Login'
        const par = document.createElement('p')
        par.innerText = 'Hello! Your account is now created!'
        div.appendChild(par)
        div.appendChild(loginLink)

    } else if (registerResult && registerResult.includes('success=0')) {
        div.innerText = 'Username already exists...'
    }

}
getRegisterData();