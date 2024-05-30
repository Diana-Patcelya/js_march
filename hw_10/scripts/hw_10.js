// Стоврити форму з трьома полями для name,sruname,age та кнопкою. При натисканні на кнопку зчитати данні з полів,
// та вивести об'єкт в документ. Іншими словами : заповниои форму, натиснули кнопку,
// під формою з'явився блок з вашим об'єктом

let f1 = document.forms.f1;
f1.onsubmit = function (e) {
    e.preventDefault();
    let username = f1.username.value;
    let surname = f1.surname.value;
    let age = f1.age.value;
    let obj = {username, surname, age};

    let usersFromStorageArr = localStorage.getItem('users');
    if (!usersFromStorageArr) {
        localStorage.setItem('users', JSON.stringify([obj]));
    }

    if (usersFromStorageArr) {
        let usersArr = JSON.parse(usersFromStorageArr);
        usersArr.push(obj);
        localStorage.setItem('users', JSON.stringify(usersArr));
    }
    updateUserList();
};

function updateUserList() {
    let usersJSON = localStorage.getItem('users');
    let users = JSON.parse(usersJSON);

    document.getElementById('usersList').innerHTML = '';

    users.forEach((user) => {
        let div = document.createElement('div');
        div.innerText = `${user.username} ${user.surname} ${user.age}`;
        document.getElementById('usersList').appendChild(div);
    });
}

updateUserList();
// ==========================

// є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
// Отримуємо елемент блоку з ідентифікатором `counter`
// Отримуємо поточне значення лічильника з текстового вмісту блоку

let savedCount = localStorage.getItem('counter');
let currentCount;
if (savedCount) {
    currentCount = parseInt(savedCount);
} else {
    currentCount = 0;
}
currentCount += 1;
localStorage.setItem('counter', currentCount);
let counterElement = document.getElementById('counter');
counterElement.innerText = currentCount;


// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще,
// в масив sessions зберігається інформація про дату та час відвідування сторінки.
// Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію
// про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію

const visitTime = new Date().toLocaleString();
let sessions = localStorage.getItem('sessions');
if (sessions) {
    sessions = JSON.parse(sessions);
} else {
    sessions = [];
}
sessions.push(visitTime);
localStorage.setItem('sessions', JSON.stringify(sessions));
//
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів

const names = ['John', 'Jane', 'Bob', 'Alice', 'Michael', 'Emily', 'David', 'Sarah', 'Daniel', 'Emma'];
const surnames = ['Smith', 'Johnson', 'Williams', 'Brown', 'Jones', 'Garcia', 'Martinez', 'Hernandez', 'Lopez', 'Gonzalez'];

function getRandomUser() {
    const randomName = names[Math.floor(Math.random() * names.length)];
    const randomSurname = surnames[Math.floor(Math.random() * surnames.length)];
    const randomAge = Math.floor(Math.random() * 80) ;
    return { name: randomName, surname: randomSurname, age: randomAge };
}

const randomUsers = Array.from({ length: 100 }, getRandomUser);

const userListContainer = document.getElementById('userListContainer');
let startIndex = 0;

function displayUsers() {
    userListContainer.innerHTML = '';
    const usersToShow = randomUsers.slice(startIndex, startIndex + 10);
    usersToShow.forEach(user => {
        const userElement = document.createElement('div');
        userElement.textContent = `Name: ${user.name}, Surname: ${user.surname}`;
        userListContainer.appendChild(userElement);
    });
}

displayUsers();

const prevButton = document.getElementById('prevButton');
const nextButton = document.getElementById('nextButton');

prevButton.addEventListener('click', () => {
    if (startIndex > 0) {
        startIndex -= 10;
        displayUsers();
    }
});

nextButton.addEventListener('click', () => {
    if (startIndex + 10 < randomUsers.length) {
        startIndex += 10;
        displayUsers();
    }
});

// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript,
// зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".

const textElement = document.getElementById('text');
const hideButton = document.getElementById('hideButton');
const showButton = document.getElementById('showButton');

hideButton.addEventListener('click', function() {
    textElement.style.display = 'none';
});
showButton.addEventListener('click', function (){
    textElement.style.display = 'block'
});

//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
const verifyButton = document.getElementById('verifyButton');
verifyButton.addEventListener('click', function() {
    const ageInput = document.getElementById('ageInput').value;
    const age = parseInt(ageInput);

    if (age < 18) {
        alert('Вибачте, вам має бути 18 або більше, щоб виконати цю дію.');
    } else if (age > 150) {
        alert('Вибачте, вам не може бути стільки років.');
    } else {
        alert('Ваш вік підтверджено.');
    }
});