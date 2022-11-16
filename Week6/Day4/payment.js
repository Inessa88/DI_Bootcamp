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




(function Cart(){
    const div = document.getElementById("chosen_products");
    let totalPrice = 0;
    for (lsKey in localStorage) {
        if (lsKey.includes('localStorageProduct')) {
            let product = JSON.parse(localStorage[lsKey]);
            totalPrice += product.price;
            let name = document.createElement('h3');
            name.innerText = product.name;
            let price = document.createElement('h4');
            price.innerText = product.price;
            div.appendChild(name);
            div.appendChild(price);
        }

        
    }
    let totalPriceH2 = document.createElement('h2');
    totalPriceH2.innerText = `Total price: ${totalPrice}`;
    div.appendChild(totalPriceH2);

    const payDiv = document.getElementById("submit_payment");

    const payButton = document.createElement('button');
    payButton.textContent = 'Submit payment';
    payButton.addEventListener('click', submitPayment);
    payDiv.appendChild(payButton);
        
    
})();

let cart = [];

function submitPayment(){
    localStorage.clear();
    let successDiv = document.getElementById('success');
    successDiv.style.backgroundColor = 'green';
    let h1 = document.createElement('h1');
    h1.textContent = 'Your order has been submitted! :-)'
    successDiv.appendChild(h1);
}




