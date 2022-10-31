// Exercise 5 : Juice Bar
// Instructions
// You will use nested functions, to open a new juice bar.

// Part I:
// The outer function named makeJuice receives 1 argument: the size of the beverage the client wants - small, medium or large.

// The inner function named addIngredients receives 3 ingredients, and displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>".

// Invoke the inner function ONCE inside the outer function. Then invoke the outer function in the global scope.


// Part II:
// In the makeJuice function, create an empty array named ingredients.

// The addIngredients function should now receive 3 ingredients, and push them into the ingredients array.

// Create a new inner function named displayJuice that displays on the DOM a sentence like The client wants a <size drink> juice, containing <first ingredient>, <second ingredient>, <third ingredient>". Use the forEach method.

// The client wants 6 ingredients in his juice, therefore, invoke the addIngredients function TWICE. Then invoke once the displayJuice function. Finally, invoke the makeJuice function in the global scope.


function makeJuice(beverageSize) {
    const ingredients = [];
    
    
    function addIngredients(ingredient1, ingredient2, ingredient3) {
        ingredients.push(ingredient1, ingredient2, ingredient3);
        const body = document.getElementsByTagName('body')[0];
        const div = document.createElement('div');
        const text = document.createTextNode(`The client wants a ${beverageSize} juice, containing ${ingredient1}, ${ingredient2}, ${ingredient3}.`);
        div.appendChild(text);
        body.appendChild(div);
    };

    
    function displayJuice(ingredients){
        const body = document.getElementsByTagName('body')[0];
        const div = document.createElement('div');
        const firstPart = `The client wants a ${beverageSize} juice, containing `;
        let secondPart = "";
        const isLastElement =(array, index)=> index === array.length - 1;
        ingredients.forEach((element,index, ingredients) => {
            const word = `${element}${isLastElement(ingredients, index)? "." : ", "}`;
            secondPart += word;
        });
        const text = document.createTextNode(firstPart + secondPart);
        div.appendChild(text);
        body.appendChild(div);
        };
    
    addIngredients("lemon", "peach", "pear");
    addIngredients("ice-cream", "strawberry", "banana");
    displayJuice(ingredients);


};

makeJuice("medium");