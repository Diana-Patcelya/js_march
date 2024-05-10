document.write('<hr>')

// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
function area_rectangle(a, b) {
    return a * b;
}

let rectangle = area_rectangle(5, 10)
document.write(rectangle);

document.write('<hr>')

// - створити функцію яка обчислює та повертає площу кола з радіусом r
function area_circle(r) {
    const pi = 3.14;
    return pi * (r * r)
}

let circle = area_circle(2)
document.write(circle)

document.write('<hr>')
// - створити функцію яка обчислює та повертає площу циліндру висотою h,
// та радіутом r
function area_cylinder(h, r) {
    const pi = 3.14;
    return (2 * pi * (r * r)) + (2 * pi * r * h);
}

let cylinder = area_cylinder(2, 4)
document.write(cylinder)

document.write('<hr>')

// - створити функцію яка приймає масив та виводить кожен його елемент
function cycle(arr) {
    let result = '';
    for (const item of arr) {
        result += item + "<br>";
    }
    return result;
}

const arrayOfStrings = [
    "Рядок 1",
    "Рядок 2",
    "Рядок 3",
    "Рядок 4",
    "Рядок 5",
    "Рядок 6",
    "Рядок 7",
    "Рядок 8",
    "Рядок 9",
    "Рядок 10"
];
document.write(cycle(arrayOfStrings));

document.write('<hr>')
// - створити функцію яка створює параграф з текстом. Текст задати через аргумент

// Не зовсім зрозуміла завдання, як саме повинен бути введений текст, зробила двома варіантами

function createParagraph1(text) {
    text = prompt('Введіть текст :', 'Hello');
    return '<p>' + text + '</p>'
}

document.write(createParagraph1())

function createParagraph2(text) {
    return '<p>' + text + '</p>';
}

document.write(createParagraph2('Hello!!!'));

document.write('<hr>')


// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий
function createThreeUl(text) {
    let ul = '<ul>';
    for (let i = 0; i < 3; i++) {
        ul += '<li>' + text + '</li>';
    }
    ul += '</ul>';
    return ul;
}

document.write(createThreeUl('Створено 3 елементів'));

document.write('<hr>')
// - створити функцію яка створює ul з трьома елементами li.
// Текст li задати через аргумент всім однаковий.
// Кількість li визначається другим аргументом, який є числовим
// (тут використовувати цикл)
function createThreeUlWithNumber(text, number) {
    number = +prompt('Введіть кількість елементів :', 5)
    let ul_2 = '<ul>';
    for (let i = 0; i < number; i++) {
        ul_2 += '<li>' + text + '</li>';
    }
    ul_2 += '</ul>';
    return ul_2;
}

document.write(createThreeUlWithNumber('Створено довільне число елементів - перший варіант '));

function createThreeUlWithNumber_2(text, number) {
    let ul = '<ul>';
    for (let i = 0; i < number; i++) {
        ul += '<li>' + text + '</li>';
    }
    ul += '</ul>';
    return ul;
}

const numberLi = 2;
document.write(createThreeUlWithNumber_2('Створено довільне число елементів - другий варіант ', numberLi));

document.write('<hr>')
// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список

let arrayList = [10, 'Hello', true, 3.14];

function createList() {
    document.write('<ul>');
    for (const item of arrayList) {
        document.write(`<li>${item}</li>`);
    }
    document.write('</ul>');
}

createList();

document.write('<hr>')

// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
const always = [
    {id: 1, name: 'Harry Potter', age: 17},
    {id: 2, name: 'Hermione Granger', age: 18},
    {id: 3, name: 'Ron Weasley', age: 18},
    {id: 4, name: 'Albus Dumbledore', age: 115},
    {id: 5, name: 'Severus Snape', age: 38},
    {id: 6, name: 'Sirius Black', age: 36},
    {id: 7, name: 'Rubeus Hagrid', age: 63},
];

function afterAllThisTime() {
    let result = '';
    for (const item of always) {
        result += '<div>';
        result += `<p>ID: ${item.id}</p>`;
        result += `<p>Name: ${item.name}</p>`;
        result += `<p>Age: ${item.age}</p>`;
        result += '</div>';
        result += '-------------------------------------';
    }
    return result;
}

document.write(afterAllThisTime())

document.write('<hr>')
// - створити функцію яка повертає найменьше число з масиву
const numbers = [10, -5, 3.14, -7, 25, -12, 8.5, -4.7, 100, -50, 0.75, -2.3, 45, -30, 6.8, -9, 18, -15, 2.25, -3.8];

function smallerNumber() {
    let smallNumber = numbers[0];

    for (let i = 1; i < numbers.length; i++) {
        if (numbers[i] < smallNumber) {
            smallNumber = numbers[i];
        }
    }
    return smallNumber;
}

document.write(smallerNumber());

document.write('<hr>')

// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
function sum(arr) {
    let summNumber = 0;
    for (let i = 0; i < arr.length; i++) {
        summNumber += arr[i];
    }
    return summNumber;
}

document.write(sum(numbers));
document.write('<hr>')


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]

document.write(numbers + '<br>');

function swapFn(arr, index1, index2) {
    let newIndex = arr[index1];
    arr[index1] = arr[index2];
    arr[index2] = newIndex;

    return arr;
}

document.write(swapFn(numbers.slice(), 0, 1));

document.write('<hr>')
// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250

function exchange(summ, arr, valuta) {
    let exchangeRate;
    for (const currency of arr) {
        if (currency.currency === valuta) {
            exchangeRate = currency.value;
            break;
        }
    }
    if (exchangeRate === undefined) {
        return "Даної валюти не знайдено.";
    }
    return summ / exchangeRate;
}

const result = exchange(10000, [{ currency: 'USD', value: 40 }, { currency: 'EUR', value: 42 }], 'USD');
document.write(result);
