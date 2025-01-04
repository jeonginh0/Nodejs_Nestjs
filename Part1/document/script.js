// let val;

// val = document;

// val = document.baseURI; // 웹 페이지의 절대 URI 반환
// val = document.head; // head 태그 반환
// val = document.body; // body 태그 반환

// val = document.forms; // form 태그 반환
// val = document.forms[0].id;
// val = document.forms[0].classList;
// val = document.forms[0].className;

// val = document.scripts; // script 태그 반환
// val = document.scripts[0].getAttribute('src'); // src 속성 값 가져오기

const headerContainer = document.getElementById('header-container');
// headerContainer.style.display = 'none';

// console.log(headerContainer);

headerContainer.textContent = 'Text Content';
headerContainer.innerText = 'Inner Text';
headerContainer.innerHTML = '<span>Inner HTML</span>'

// document.querySelector()
console.log(document.querySelector('#form-first-div'));
console.log(document.querySelector('.form-container'));
console.log(document.querySelector('h5'));

const items = document.getElementsByClassName('list-group-item');
console.log(items);

items[0].style.color = 'blue';
items[3].textContent = 'hi';

let lists = document.getElementsByTagName('li');
console.log(lists);

// lists.forEach((list) => {
//     console.log(list);
// }) 

lists = Array.from(lists);
console.log(lists);

lists.forEach((list, index) => {
    list.textContent = `${index}. List`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)');
liOdd.forEach((li) => {
    li.style.backgroundColor = 'gray'
})