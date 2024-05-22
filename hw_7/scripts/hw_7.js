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

let couplesUsers = users.filter(user => user.id % 2 === 0)

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
    console.log(`Модель: ${this.model}`);
    console.log(`Виробник: ${this.manufacturer}`);
    console.log(`Рік випуску: ${this.yearOfManufacture}`);
    console.log(`Максимальна швидкість: ${this.maximumSpeed}`);
    console.log(`Об'єм двигуна: ${this.engineCapacity}`);
    if (this.driver) {
        console.log(`Водій: ${JSON.stringify(this.driver)}`);
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

console.log('****************************************************')

// - (Те саме, тільки через клас)
// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car_2 {
    constructor(model, manufacturer, yearOfManufacture, maximumSpeed, engineCapacity) {
        this.model = model;
        this.manufacturer = manufacturer;
        this.yearOfManufacture = yearOfManufacture;
        this.maximumSpeed = maximumSpeed;
        this.engineCapacity = engineCapacity;
    }
    drive() {
        console.log(`Їдемо зі швидкістю ${this.maximumSpeed} на годину`);
    }
    increaseMaxSpeed (newSpeed) {
        this.maximumSpeed += newSpeed;
    };
    changeYear (newValue) {
        this.yearOfManufacture = newValue;
    };
    addDriver (driver) {
        this.driver = driver;
    };
    info() {
        console.log(`Модель: ${this.model}`);
        console.log(`Виробник: ${this.manufacturer}`);
        console.log(`Рік випуску: ${this.yearOfManufacture}`);
        console.log(`Максимальна швидкість: ${this.maximumSpeed}`);
        console.log(`Об'єм двигуна: ${this.engineCapacity}`);
        if (this.driver) {
            console.log(`Водій: ${JSON.stringify(this.driver)}`);
        }
    };
}
let car2 = new Car_2('Corolla', 'Toyota', 2016, 180, '1.8L');
car2.drive();
car2.increaseMaxSpeed(120);
car2.changeYear(1990);
car2.addDriver({ name: 'Alice', surname: 'Melnyk', age: 28 });
car2.info();

console.log('****************************************************')
// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}

let cinderellas = [];
cinderellas.push(new Cinderella('Anna', 20, 35));
cinderellas.push(new Cinderella('Olena', 22, 36));
cinderellas.push(new Cinderella('Dana', 25, 37));
cinderellas.push(new Cinderella('Nastya', 21, 38));
cinderellas.push(new Cinderella('Darina', 23, 39));
cinderellas.push(new Cinderella('Mia', 24, 40));
cinderellas.push(new Cinderella('Olya', 26, 41));
cinderellas.push(new Cinderella('Nika', 27, 42));
cinderellas.push(new Cinderella('Veronika', 28, 43));
cinderellas.push(new Cinderella('Lucy', 29, 44));

class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }

    cinderellaForPrince(cinderellas) {
        for (let cinderella of cinderellas) {
            if (cinderella.footSize === this.foundShoe) {
                console.log(`${this.name} знайшов попелюшку: ${cinderella.name}`);
                return cinderella;
            }
        }
        console.log(`${this.name} не знайшов свою попелюшку`);
        return null;
    }
}

let prince = new Prince('Charming ', 30, 39);
prince.cinderellaForPrince(cinderellas);

let foundCinderella = cinderellas.find(cinderella => cinderella.footSize === prince.foundShoe);
if (foundCinderella) {
    console.log(`${prince.name} знайшов попелюшку: ${foundCinderella.name}(метод find) `);
} else {
    console.log(`${prince.name} не знайшов попелюшку (метод find)`);
}

console.log('****************************************************')

// Через Array.prototype. створити власний foreach, filter, map

Array.prototype.myEach = function(callback) {
    for (let i = 0; i < this.length; i++) {
        callback(this[i], i, this);
    }
};
let arr = ['Lorem Ipsum', 'is simply dummy', 'text of the printing', 'and typesetting industry'];
arr.myEach(function(word) {
    console.log(word);
});
console.log('_________________________')

Array.prototype.myFilter = function(callback) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        if (callback(this[i], i, this)) {
            arr.push(this[i]);
        }
    }
    return arr;
};
const numbers = [1, 20, 30, 80, 2, 9, 3];
const newNum = numbers.myFilter(function(n) {
    return n >= 10;
});
console.log(newNum);

console.log('_________________________')

Array.prototype.myMap = function(callback) {
    const arr = [];
    for (let i = 0; i < this.length; i++) {
        arr.push(callback(this[i], i, this));
    }
    return arr;
};
const numbers_2 = [10, 20, 30, 40];
const stringsNumbers = numbers_2.myMap(function(num) {
    return String(num);
});
console.log(stringsNumbers);
console.log('_________________________')
