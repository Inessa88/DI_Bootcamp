
const getFormData = ()=>{
    fetch('http://localhost:3000/getdata')
    .then(res =>res.json())
    .then(result =>{
                console.log(result)
                const resultDiv = document.getElementById('result');
                for(const item of result){
                    console.log(item);
                    console.log(typeof item);
                    const par = document.createElement('h3');
                    par.innerText = item;
                    resultDiv.appendChild(par)
                }
            })
    .catch(e =>{
        console.log(e);
    })
}
getFormData();