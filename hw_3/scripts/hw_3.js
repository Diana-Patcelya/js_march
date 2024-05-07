// - За допомогою циклу for і document.write() вивести 10 блоків div c
// довільним текстом всередині

let arbitrary_text = 'Довільний текст'

for (let i = 0; i < 10; i++) {
    document.write(`<div>${arbitrary_text}</div>`)
}

document.write('<hr>')

// - За допомогою циклу for і document.write() вивести 10 блоків div c
// довільним текстом і індексом всередині
let id = 1
for (let i = 0; i < 10; i++) {
    const text_id = id++
    document.write(`<div>${text_id} ${arbitrary_text}</div>`)
}

document.write('<hr>')

// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом
// всередині.

let i = 0
while (i < 10) {
    document.write(`<h1>${arbitrary_text}</h1>`)
    i++
}

document.write('<hr>')


// - За допомогою циклу while вивести в документ 20 блоків h1 c довільним текстом
// і індексом всередині.

let i_h1 = 0
let id_h1 = 1
while (i_h1 < 10){
    const h1_id =  id_h1++
    document.write(`<h1>${h1_id} ${arbitrary_text}</h1>`)
    i_h1++
}

document.write('<hr>')


// - Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// ШАБЛОН:
//     <ul>
//         <li>ITEM OF ARRAY</li>
//         <!--
//             і тд інші об'єкти масиву
//              ...
//              ...
//              ...
//         -->
//     </ul>
//
// замість 'ITEM OF ARRAY' підставити елемент з масиву щоб получився цілий список
// з даними з масиву
let listOfItems = ['html', 'css', 'javascript', 'mysql', 'mongodb', 'react',
'angular', 'node.js'];
document.write('<ul>')
    for (const listOfItem of listOfItems) {
        document.write(`<li> ${listOfItem} </li>`);
}
document.write('</ul>')

document.write('<hr>')

// Використовуючи данні з масиву, за допомоги document.write та циклу
// побудувати структуру по шаблону
// Великими літерами прописанні властивості об'єкту які потрібно впровадити в шаблон

// ШАБЛОН
// <div class="product-card">
//     <h3 class="product-title">TITLE. Price - PRICE</h3>
// <img src="IMAGE" alt="" class="product-image">
// </div>
// Замість TITLE PRICE IMAGE - підставити відповідні поля з об'єкту

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
];

document.write('<div class="product-card">')
for (const product of products) {
document.write(`
    <h3 class="product-title">${product.title} Price - ${product.price}</h3>
    <img src="${product.image}" alt="" class="product-image">
`)
    }
document.write('</div>')

document.write('<hr>')

// є масив
// за допомоги циклу вивести:
// - користувачів зі статусом false
// - користувачів які старші за 30 років

let users = [
    {name: 'vasya', age: 31, status: false},
    {name: 'petya', age: 30, status: true},
    {name: 'kolya', age: 29, status: true},
    {name: 'olya', age: 28, status: false},
    {name: 'max', age: 30, status: true},
    {name: 'anya', age: 31, status: false},
    {name: 'oleg', age: 28, status: false},
    {name: 'andrey', age: 29, status: true},
    {name: 'masha', age: 30, status: true},
    {name: 'olya', age: 31, status: false},
    {name: 'max', age: 31, status: true}
];

// - користувачів зі статусом true
for (const user_true  of users) {
    if (user_true.status === true) {
        document.write(`${user_true.name} <br>`)
    }
}

document.write('<hr>')

// - користувачів зі статусом false
for (const user_false  of users) {
    if (user_false.status === false) {
        document.write(`${user_false.name} <br>`)
    }
}
document.write('<hr>')

// - користувачів які старші за 30 років
for (const user_age  of users) {
if (user_age.age > 30) {
    document.write(`${user_age.name} <br>`)
}
}
document.write('<hr>')


