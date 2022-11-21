
const getProducts = () => {
    fetch('http://localhost:5000/api/products')
 .then(res => res.json())
 .then(data =>{
    createProducts(data);
 })
 .catch(e => {
    console.log(e)
 })
}

getProducts();

const createProducts = (arr) =>{
    const root = document.getElementById('root');
    arr.forEach((item,i)=>{
        let div =document.createElement('div');
        div.innerText = item.name+ ' ' + item.price
        root.appendChild(div)
    })
}
// const div = document.createElement('div')
// const products = document.createTextNode()