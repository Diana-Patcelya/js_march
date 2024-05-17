
console.log('******************************************')
// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length)
console.log('lorem ipsum'.length)
console.log('javascript is cool'.length)

console.log('******************************************')
// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool',
console.log('hello world'.toUpperCase(),
            'lorem ipsum'.toUpperCase(),
            'javascript is cool'.toUpperCase())

console.log('******************************************')

// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
let hello = 'HELLO WORLD';
let lorem = 'LOREM IPSUM';
let cool = 'JAVASCRIPT IS COOL';

console.log(hello.toLowerCase())
console.log(lorem.toLowerCase())
console.log(cool.toLowerCase())

console.log('******************************************')

// - Є "брудна" стрінга let str = ' dirty string   '
// . Почистити її від зайвих пробілів.
let str = ' dirty string   '
console.log(str)
console.log(str.length)
console.log(str.trim())
console.log(str.trim().length)

console.log('******************************************')


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
//     let str = 'Ревуть воли як ясла повні';
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']

let strArr = 'Ревуть воли як ясла повні';
function stringToarray(str) {
    return str.split(' ');
}
console.log(stringToarray(strArr))

console.log('******************************************')
// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
let arrNumbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
let arrStrings = arrNumbers.map(value => String(value));
console.log(arrStrings);

console.log('******************************************')

// - створити функцію sortNums(direction), яка прймає масив чисел,
// та сортує його від більшого до меньшого, або навпаки в залежності
// від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]

let nums = [11,21,3];
function sortNums(nums, direction) {
    return nums.sort((a, b) => {
        if (direction === 'ascending') {
            return a - b;
        } else if (direction === 'descending') {
            return b - a;
        }
    });
}
console.log(sortNums(nums, 'ascending'));
console.log(sortNums(nums, 'descending'));

console.log('******************************************')
// - є масив
// -- відсортувати його за спаданням за monthDuration
// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
//
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

let monthDurationMaxMin = coursesAndDurationArray.sort((min, max) => max.monthDuration - min.monthDuration);
console.log(monthDurationMaxMin)

let monthDurationFilter = coursesAndDurationArray.filter(function (elem) {
    return elem.monthDuration > 5;
});
console.log(monthDurationFilter)
let transformedArray = coursesAndDurationArray.map((course, index) => ({
    id: index + 1,
    title: course.title,
    monthDuration: course.monthDuration
}));
console.log(transformedArray);
console.log('******************************************')
//     описати колоду карт (від 6 до туза без джокерів)
// - знайти піковий туз
// - всі шістки
// - всі червоні карти
// - всі буби
// - всі трефи від 9 та більше
//

let cardSuits = ['spades', 'diamonds', 'hearts', 'clubs'];
let values = [6, 7, 8, 9, 10, 'jack', 'queen', 'king', 'ace'];

let cards = cardSuits.reduce((acc, suit) => {
    values.forEach(value => {
        let color = (suit === 'diamonds' || suit === 'hearts') ? 'red' : 'black';
        acc.push({
            cardSuit: suit,
            value: value,
            color: color
        });
    });
    return acc;
}, []);

console.log(cards);

let aceOfSpades = cards.find(card => card.cardSuit === 'spades' && card.value === 'ace');
console.log('Піковий туз:', aceOfSpades);

let sixesOfCards = cards.filter(card => card.value === 6);
console.log('Всі шістки:', sixesOfCards);

let redOfCards = cards.filter(card => card.color === 'red');
console.log('Всі червоні карти:', redOfCards);

let diamondsOfCards = cards.filter(card => card.cardSuit === 'diamonds');
console.log('Всі бубни:', diamondsOfCards);

let NineAndMore = cards.filter(card => card.cardSuit === 'clubs' &&
    ((typeof card.value !== 'number' && card.value) ||
    (typeof card.value === 'number' && card.value >= 9)));
console.log('Всі трефи від 9 та більше:', NineAndMore);

console.log('******************************************')
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по
//     "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }

let newDesk = cards.reduce((acc, card) => {
    acc[card.cardSuit].push(card);
    return acc;
}, {
    spades: [],
    diamonds: [],
    hearts: [],
    clubs: []
});

console.log(newDesk);

console.log('******************************************')

//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
// --написати пошук всіх об'єктів, в який в modules є sass
// --написати пошук всіх об'єктів, в який в modules є docker

let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
let coursesSass = [];
let coursesDocker = [];

coursesArray.forEach(course => {
    if (course.modules.includes('sass')) {
        coursesSass.push(course);
    }
    if (course.modules.includes('docker')) {
        coursesDocker.push(course);
    }
});

console.log('Courses with Sass:', coursesSass);
console.log('Courses with Docker:', coursesDocker);
