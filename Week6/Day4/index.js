// Exercise
// Create a shopping List
// Create an HTML file
// Create a JS file - Add the below array of objects inside your javascript file.
// Using a self invoking function, and using the DOM - add the products to the page and make them clickable.
// The user clicks on the item to add them to his cart. The cart is an array of items, saved in the localstorage.
// Each item is an object containing the name of the product and the price.
// When the user is done with his shopping, he will click on the "Pay button"
// (which is actually an anchor) and it will redirect him to another HTML page.
// This HTML page is linked to another Javascript file. Using the DOM display all the items that the user bought and 
// the total price he needs to pay as well as a "Submit payment" Button
// When the button is clicked -> add a successful message on the page, and clear all the items from the local storage.


const products = [
    {
        id: 0,
        name: "Deluxe Bicycle",
        url: "https://image.shutterstock.com/image-photo/yellow-black-29er-mountainbike-thick-600w-1498702814.jpg",
        price: 499.98
    },
    {
        id: 1,
        name: "Super Deluxe bagpack",
        url: "https://image.shutterstock.com/image-photo/yellow-school-backpack-isolated-on-600w-534499549.jpg",
        price: 134.99
    },
    {
        id: 2,
        name: "Super Duper Scooter",
        url: "https://image.shutterstock.com/image-illustration/yellow-retro-vintage-scooter-isolated-600w-1421727647.jpg",
        price: 1090.95
    },
    {
        id: 3,
        name: "Smartphone",
        url: "https://image.shutterstock.com/image-vector/concept-touch-screen-smartphone-blank-600w-1433190200.jpg",
        price: 399.99
    }
];


(function shoppingList(items){
    const div = document.getElementById("all_products");
    const productList = document.createElement('div');
    for (let i = 0; i< items.length; i++){
        const img = document.createElement('img');
        const nameHeading = document.createElement('h3');
        const pricePar = document.createElement('p');
        const orderButton = document.createElement('button');
        img.src = items[i].url;
        img.style.width = "100px";
        const name = document.createTextNode(items[i].name);
        nameHeading.appendChild(name);
        const price = document.createTextNode(items[i].price);
        pricePar.appendChild(price);
        orderButton.textContent = 'Add';
        orderButton.setAttribute('id', items[i].id);
        orderButton.addEventListener('click', saveToLocalStorage);
        let imgDiv = document.createElement('div');
        imgDiv.appendChild(img);
        productList.appendChild(imgDiv);
        productList.appendChild(nameHeading);
        productList.appendChild(pricePar);
        productList.appendChild(orderButton);
        

    }
    div.appendChild(productList);
    
})(products);

let cart = [];

function saveToLocalStorage(e){
    let product = products.filter((product) => product.id == e.target.id)[0];
    let productStorageId = `localStorageProduct${product.id}`;
    localStorage.setItem(productStorageId, JSON.stringify({name: product.name,price:product.price}));
    let usedButton = document.getElementById(`${product.id}`);
    usedButton.style.display = 'none';
    const anchor = document.createElement('a');
    anchor.href = 'payment.html';
    const payButton = document.createElement('button');
    payButton.textContent = 'To Pay';
    anchor.appendChild(payButton);
    const div = document.getElementById("to_pay");
    div.innerText = '';
    div.appendChild(anchor);
    

}




