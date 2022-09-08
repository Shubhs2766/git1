var itemList = document.querySelector('#items');
// parentNode
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor= '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode); 

// parentElementNode
// console.log(itemList.parentElement);
// itemList.parentNode.style.backgroundColor= '#f4f4f4';
// console.log(itemList.parentNode.parentNode.parentNode); 

// lastChild
// console.log(itemList.lastChild);

// lastElementChild
// console.log(itemList.lastElementChild);

//firstChild
// console.log(itemList.firstChild);

// firstElementChild
// console.log(itemList.firstElementChild);

// nextSibling
// console.log(itemList.nextSibling);

// nextElementSibling
// console.log(itemList.nextElementSibling);

// previousSibling
// console.log(itemList.previousSibling);

//previousElementSibling
// console.log(itemList.previousElementSibling);

// createElement

// Create a Div
var newDiv = document.createElement('div');

newDiv.className = 'Hello';

//Create a New ID
newDiv.id = 'hello1';

//Create a Attribute
newDiv.setAttribute('title', 'Hello Div');

// Create a TextNode
var newDivText = document.createTextNode('HEllo');

// Add text to div
newDiv.appendChild(newDivText);

// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');


// container.insertBefore(newDiv,h1);

var container = document.querySelector('.list-group');
var h2 = document.querySelector('list-group');

console.log(newDiv);
container.insertBefore(newDiv,h2);