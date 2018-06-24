const log = console.log;

// document.getElementsByClassName : gives html collection
// const items = document.getElementsByClassName('collection-item');
// log(items);
// log(items[0]);
// items[0].style.color = 'red';

// const listItems = document.querySelector('ul').getElementsByClassName('collection-item')
// log(listItems);

// document.getElementsByTagName
// const lis = document.getElementsByTagName('li');
// log(lis);
// lis[3].innerText = 'jack';

// Convert HTMLcollection to Array : so we can use array methods on it
// const lisArr = Array.from(lis);

// lisArr.forEach((i, idx) => {
//   log(i.innerText);
//   i.textContent = `list #${idx}`;
// });

// querySelectorAll : gives us a NodeList
const items = document.querySelectorAll('ul.collection li.collection-item');

items.forEach((i, idx) => {
  log(i.innerText);
  i.textContent = `list #${idx}`;
});

// Select odd list items
const liOdd = document.querySelectorAll('li:nth-child(odd)');

liOdd.forEach((i, idx) => {
  i.style.color = `green`;
});