


const getProducts = ()=>{
    fetch('http://localhost:5000/api/products')
    .then(res =>res.json())
    .then(prods =>{
        console.log(prods);
    })
    .catch(e =>{
        console.log(e);
    })
}

// getProducts() we dn't need thishere if we use onclick in html with calling that function there


// fetching with a post request
const createProduct =()=>{
    const name = document.getElementById('name').value;
    const price = document.getElementById('price').value;
 
    // fetch(url, option)

    fetch('/api/products', {
        method:'POST',
        headers: {
            'Content-type': 'application/json'
        },
        body: JSON.stringify({name,price})//we send here Object, but stringified
    })
    .then(res => res.json())
    .then(data => {
        console.log(data);
    })
    .catch(e=>{
        console.log(e);
    })
}

// this fetch is for deleting something from the front-end
fetch('/api/products/9', {
    method:'DELETE',
    
})
.then(res => res.json())
.then(data => {
    console.log(data);
})
.catch(e=>{
    console.log(e);
})
