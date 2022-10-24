// Exercise 1
// <html>
// <body>
//   <div>Users:</div>
//   <ul>
//     <li>John</li>
//     <li>Pete</li>
//   </ul>
// </body>
// </html>
// For each of the questions, find 2 WAYS of accessing :




// 1. The div DOM node?
const div = document.body.firstElementChild;
console.log(div);
const div2 = document.body.children[0];
console.log(div2)

// 2. The ul DOM node?
const ul = document.body.children[1];
console.log(ul)
const ul2 = div.nextElementSibling;
console.log(ul2)

// 3. The second li (with Pete)?
const li = ul2.children[1];
console.log(li)
const li2 = ul2.lastElementChild;
console.log(li2)
