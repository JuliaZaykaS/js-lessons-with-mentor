const numbersEl = document.getElementById('numbers')
// console.log(numbersEl.children);
// console.dir(numbersEl);

// const arrayOfChildren = Array.from(numbersEl.children);
// const arrayOfChildren = [...numbersEl.children];
// console.log(arrayOfChildren);
// arrayOfChildren.forEach((elem) => {
//     console.log(elem);
//     elem.textContent = 'hi';
//     // console.log(elem);
// });

const titleEl1 = document.createElement('h2');
// console.log(titleEl1);
titleEl1.textContent = 'Calculator';
titleEl1.setAttribute('lang', 'en');
// console.log(titleEl1.getAttribute('lang'));

// const titleEl2 = titleEl1.cloneNode(true);
// console.log(titleEl2);

// const titleEl3 = titleEl1.cloneNode(true);
// const titleEl4 = titleEl1.cloneNode(true);

const titleEl2 = document.createElement('h2');
titleEl2.textContent = 'title2';
const titleEl3 = document.createElement('h2');
titleEl3.textContent = 'title3';
const titleEl4 = document.createElement('h2');
titleEl4.textContent = 'title4';

const calculatorEl = document.getElementById('calculator');
console.log(calculatorEl);


// Метод встраивания одного элемента

// calculatorEl.insertAdjacentElement('beforebegin', titleEl1);
// calculatorEl.insertAdjacentElement('afterbegin', titleEl2);
// calculatorEl.insertAdjacentElement('beforeend', titleEl3);
// calculatorEl.insertAdjacentElement('afterend',titleEl4);

// Методы встраивания одного или более элементов
// Если больше одного элемента, то их распыляем при передаче(...)
// calculatorEl.before(titleEl1);
// calculatorEl.prepend(titleEl2);
// calculatorEl.append(titleEl3);
// calculatorEl.after(titleEl4);

const arrayOfTitles1 = [titleEl1, titleEl2];
// console.log(arrayOfTitles1);
const arrayOfTitles2 = [titleEl3, titleEl4];
// console.log(arrayOfTitles2);


calculatorEl.before(...arrayOfTitles1);
calculatorEl.prepend(...arrayOfTitles2);
// calculatorEl.append(...arrayOfTitles1);
// calculatorEl.after(...arrayOfTitles2);

function createElement(element,array) {
    const divsEl = array.map((elem) => {
        const divEl = document.createElement(element);
        divEl.textContent = elem;
        // console.log(divEl.textContent);
        return divEl;
    });
    return divsEl;


}

// const elements = createElement('div', ['a', 'b', 'c', 'd', 'e']);
// console.log(createElement('div', ['a', 'b', 'c', 'd', 'e']));
// calculatorEl.append(...elements);

calculatorEl.append(...(createElement('div', ['a', 'b', 'c', 'd', 'e'])));

calculatorEl.addEventListener('click', (e) => {
    console.log(e);
    console.log(e.target);
    console.log(e.currentTarget);
    if (e.target.textContent === 'c') { e.target.style.color = 'green' }
    else { e.target.style.color = 'red' };
});

const navList = `<ul><li><a>Home</a></li><li><a>About</a></li><li><a>Contact</a></li></ul>`;
calculatorEl.insertAdjacentHTML('afterend', navList);
// calculatorEl.innerHTML=navList;

const formEl = document.getElementById('form')
console.log(formEl);
const objects = [];
const newObj = formEl.addEventListener('submit', handleSubmit);

function handleSubmit(e) {
    e.preventDefault();
    // console.log(e);
    // console.log(e.target);
    // console.log(e.target.elements);
    // console.log(e.target.elements.name);
    // console.log(e.target.elements.password);
    // // console.dir(e.target.elements.name);
    // console.log(e.target.elements.name.value);
    // console.log(e.target.elements.password.value);
    // const object = {
    //     name: e.target.elements.name.value,
    //     password: e.target.elements.password.value,
    // };
    const { name, password } = e.target.elements;
    const obj = {
        name:name.value,
        password:password.value,
    }
    // console.log(obj);
    objects.push(obj);
    console.log(objects);
    name.value = '';
    password.value = '';
    return objects;
}


const array = [{ title: 'notre dame de paris', url: 'https://i.pinimg.com/originals/f3/40/f4/f340f42241a91966444229a51ec07ac6.jpg', author: 'victor hugo' },
    { title: 'code da vinci', url: 'https://www.babcockbooks.com/pictures/26675.jpg', author: 'dan brown' },
    { title: 'мастер и маргарита', url: 'https://knijky.ru/sites/default/files/styles/264x390/public/31583.jpg?itok=rm1YiVJV', author: 'Михаил булгаков' }
];


function createList(array) {
    console.log(array);
    return array.map((elem) => {
        const itemEl = document.createElement('li');
        const titleEl = document.createElement('h2');
        const imageEl = document.createElement('img');
        const pEl = document.createElement('p');
        imageEl.setAttribute('src', elem.url);
        imageEl.setAttribute('width', '200px');
        // imageEl.width = 200 px;
        imageEl.setAttribute('alt', `${elem.title} ${elem.author}`);
        pEl.textContent = elem.author;
        titleEl.textContent = elem.title;
        itemEl.append(titleEl, imageEl, pEl);
        return itemEl;



})

};

const items = createList(array);
console.log(items);

const booksEl = document.getElementById('books');
booksEl.append(...items);







