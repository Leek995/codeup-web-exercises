// DOM Manipulation
// getElementById()
const title = document.getElementById('main-heading');
console.log(title);
// Inline Styling
title.style.color = 'red';

// getElementsByClass()
const listItems = document.getElementsByClassName('list-items');
console.log(listItems);
// Since applying inline Styling a for loop has to be created to attach style to multiple elements with same name
for(let i = 0; i < listItems.length; ++i){
    listItems[i].style.fontSize = `2rem`;
}
// querySelector()
const container = document.querySelector('div');
console.log(container);

// querySelectorAll()
const allContainers = document.querySelectorAll('div');
console.log(allContainers);

// Creating Element
const ul = document.querySelector('ul');
const li = document.createElement('li');

ul.append(li)

li.innerHTML = "x-men";

li.classList.add('list-items');
console.log(li.classList.contains('list-items'));
li.remove();