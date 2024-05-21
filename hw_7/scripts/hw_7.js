// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
//
//
//
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
//
//
//
// Через Array.prototype. створити власний foreach, filter, map
console.log('****************************************************')
// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let user1 = new User(1, 'Alexandr', 'Ivanov', 'alexandr.ivanov@example.com', 380500858934);
let user2 = new User(2, 'Olga', 'Petrova', 'olga.petrova@example.com', 380500858935);
let user3 = new User(3, 'Mikhail', 'Sidorov', 'mikhail.sidorov@example.com', 380500858936);
let user4 = new User(4, 'Natalia', 'Kovalenko', 'natalia.kovalenko@example.com', 380500858937);
let user5 = new User(5, 'Dmitro', 'Tkachenko', 'dmitro.tkachenko@example.com', 380500858938);
let user6 = new User(6, 'Viktoria', 'Shevchenko', 'viktoria.shevchenko@example.com', 380500858939);
let user7 = new User(7, 'Andriy', 'Bondarenko', 'andriy.bondarenko@example.com', 380500858940);
let user8 = new User(8, 'Marina', 'Krivenko', 'marina.krivenko@example.com', 380500858941);
let user9 = new User(9, 'Serhiy', 'Zhuk', 'serhiy.zhuk@example.com', 380500858942);
let user10 = new User(10, 'Anna', 'Melnyk', 'anna.melnyk@example.com', 380500858943);

let users = [];

users.push(user1);
users.push(user2);
users.push(user3);
users.push(user4);
users.push(user5);
users.push(user6);
users.push(user7);
users.push(user8);
users.push(user9);
users.push(user10);

console.log(users);

console.log('****************************************************')
// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

let couplesUsers = users.filter(function(user){
    return user.id % 2 === 0;
})
console.log(couplesUsers)

console.log('****************************************************')

// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)

let growthUsers = users.sort((min, max) => min.id - max.id);
console.log(growthUsers)

console.log('****************************************************')
// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client
// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}
let clients = [];

clients.push(new Client(1, 'Alexandr', 'Ivanov', 'alexandr.ivanov@example.com', 380500858934, ['Laptop']));
clients.push(new Client(2, 'Olga', 'Petrova', 'olga.petrova@example.com', 380500858935, ['Phone', 'Headphones']));
clients.push(new Client(3, 'Mikhail', 'Sidorov', 'mikhail.sidorov@example.com', 380500858936, ['Tablet', 'Keyboard', 'Mouse']));
clients.push(new Client(4, 'Natalia', 'Kovalenko', 'natalia.kovalenko@example.com', 380500858937, ['Monitor', 'USB Drive', 'Printer', 'Ink Cartridge']));
clients.push(new Client(5, 'Dmitro', 'Tkachenko', 'dmitro.tkachenko@example.com', 380500858938, ['Smartwatch', 'Charger', 'Bluetooth Speaker', 'Power Bank', 'Camera']));
clients.push(new Client(6, 'Viktoria', 'Shevchenko', 'viktoria.shevchenko@example.com', 380500858939, ['Camera']));
clients.push(new Client(7, 'Andriy', 'Bondarenko', 'andriy.bondarenko@example.com', 380500858940, ['Printer', 'Router']));
clients.push(new Client(8, 'Marina', 'Krivenko', 'marina.krivenko@example.com', 380500858941, ['Projector']));
clients.push(new Client(9, 'Serhiy', 'Zhuk', 'serhiy.zhuk@example.com', 380500858942, ['Speaker', 'Microphone', 'Headset']));
clients.push(new Client(10, 'Anna', 'Melnyk', 'anna.melnyk@example.com', 380500858943, ['Keyboard', 'Mouse', 'Webcam']));

console.log(clients);

let  growthClients = clients.sort((min, max) => min.order.length - max.order.length)
console.log(growthClients)

console.log('****************************************************')

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function Car(model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
    this.model = model;
    this.manufacturer = manufacturer;
    this.yearOfManufacture = yearOfManufacture;
    this.maximumSpeed = maximumSpeed;
    this.engineCapacity = engineCapacity;
}

Car.prototype.drive = function () {
    console.log(`Їдемо зі швидкістю ${this.maximumSpeed} на годину`);
};

Car.prototype.info = function () {
    for (const key in this) {
        if (typeof this[key] === "function") continue;
        let value = this[key];
        if (typeof value === 'object' && value !== null) {
            value = JSON.stringify(value)
        }
        console.log(`${key} - ${value}`);
    }
};

Car.prototype.increaseMaxSpeed = function (newSpeed) {
    this.maximumSpeed += newSpeed;
};

Car.prototype.changeYear = function (newValue) {
    this.yearOfManufacture = newValue;
};

Car.prototype.addDriver = function (driver) {
    this.driver = driver;
};

let car1 = new Car('Civic', 'Honda', 2018, 200, '1.5L');
car1.drive();
car1.increaseMaxSpeed(50);
car1.changeYear(2019);
car1.addDriver({ name: 'John', age: 30 });
car1.info();

console.log('________________________________________________');

let car2 = new Car('Corolla', 'Toyota', 2016, 180, '1.8L');
car2.drive();
car2.increaseMaxSpeed(120);
car2.changeYear(1990);
car2.addDriver({ name: 'Alice', surname: 'Melnyk', age: 28 });
car2.info();