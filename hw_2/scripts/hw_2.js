
// // --------------------------------   1   ------------------------- //
// Масиви та об'єкти:

// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль

 let arr =  [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
 console.log(arr[0])
 console.log(arr[1])
 console.log(arr[2])
 console.log(arr[3])
 console.log(arr[4])
 console.log(arr[5])
 console.log(arr[6])
 console.log(arr[7])
 console.log(arr[8])
 console.log(arr[9])

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
  let book_1 = {
  title: 'xxx',
  pageCount: 200,
  genre: 'ccc'
}
let book_2 = {
 title: 'aaa',
 pageCount: 100,
 genre: 'bbb'
}

let book_3 ={
 title: 'www',
 pageCount: 300,
 genre: 'ddd'
}
console.log(book_1)
console.log(book_2)
console.log(book_3)

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors.
//          Поле "автори" - являється  масивом. Кожен автор має поля name та age.


let bookAuthors_1 = {
  title: 'The Secret Garden',
  pageCount: 300,
  genre: 'Children\'s Literature',
  authors :{
   name: 'Frances Hodgson Burnett',
   age: 53
  }
}
let bookAuthors_2 = {
  title: '1984',
  pageCount: 328,
  genre: 'Dystopian Fiction',
  authors :{
   name: 'George Orwell',
   age: 46
 }

}

let bookAuthors_3 ={
  title: 'To Kill a Mockingbird',
  pageCount: 281,
  genre: 'Southern Gothic',
  authors :{
   name: 'Harper Lee',
   age: 89
 }

}
console.log(bookAuthors_1)
console.log(bookAuthors_2)
console.log(bookAuthors_3)

// - Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password.
//          Вивести в консоль пароль кожного


let users = [
 {
  name: 'Emily',
  username: 'emily_21',
  password: 123456
 },
 {
  name: 'Maxim',
  username: 'max_power',
  password: 123789
 },
 {
  name: 'Sophia',
  username: 'sophia_starlight',
  password: 123258
 },
 {
  name: 'Alexander',
  username: 'alex_4ever',
  password: 123741
 },
 {
  name: 'Anastasia',
  username: 'nastya_dreamer',
  password: 789456
 },

 {name: 'Igor',
  username: 'igor_the_great',
  password: 123852
 },
 {
  name: 'Katherine',
  username: 'kate_kitty',
  password: 123963
 },
 {
  name: 'Artem',
  username: 'artemis_prime',
  password: 111111
 },
 {name: 'Julia',
  username: 'julia_wanderlust',
  password: 123951
 },
 {name: 'Vladislav',
  username: 'vlad_mastermind',
  password: 123159
 }
]
console.log(users[0].password)
console.log(users[1].password)
console.log(users[2].password)
console.log(users[3].password)
console.log(users[4].password)
console.log(users[5].password)
console.log(users[6].password)
console.log(users[7].password)
console.log(users[8].password)
console.log(users[9].password)


// - описати масив, в якому буде зберігатись інформація про температуру вранці, вдень і ввечері за термін в 7 днів.
//          Як зробити цей масив - вам потрібно подумати. Нормальних варіантів опису - 2.
//           Варіант, коли в вас буде одновимірний масив з 21 значенням вичключаємо одразу
let tempOfWeeks = [

 {
  id : 1,
  day : 'Monday',
  MorningTemperature : +20,
  AfternoonTemperature: +20,
  evening: +21
 },

{
  id : 2,
  day :'Tuesday',
  MorningTemperature: +28,
  AfternoonTemperature: +22,
 EveningTemperature: +15
 },

 {
  id : 3,
  day :'Wednesday',
  MorningTemperature: +18,
  AfternoonTemperature: +22,
  EveningTemperature: +16
 },

 {
  id : 4,
  day :'Thursday',
  MorningTemperature: +15,
  AfternoonTemperature: +10,
  EveningTemperature: +7
 },

 {
  id : 5,
  day :'Friday',
  MorningTemperature: +5,
  AfternoonTemperature: +3,
  EveningTemperature: 0
 },

 {
  id : 6,
  day :'Saturday',
  MorningTemperature: -1,
  AfternoonTemperature: +3,
  EveningTemperature: -3
 },

 {
  id : 7,
  day :'Sunday',
  MorningTemperature: -3,
  AfternoonTemperature: +5,
  EveningTemperature: -4
 }

]
console.log(tempOfWeeks[2])
// --------------------------------   2   ------------------------- //
// Логічні розгалуження:

//     - Є змінна х, якій ви надаєте довільне числове значення.
//     Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'.
//     Перевірте  скрипт при a, що дорівнює 1, 0, -3
  let x = 0 !== 0 ? 'Вірно' : 'Невірно'
 console.log(x)

 let y = 0;
 if (y !== 0) {
   console.log('Вірно')
 }
 else {
  console.log('Невірно')
 }

// - Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить,
// до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).

let time = 45;
if (time < 0 || time > 59) {
 console.log('Invalid time, enter a number from 0 to 59');
} else if (time <= 15) {
 console.log('The given number belongs to the first quadrant.');
} else if (time <= 30) {
 console.log('The given number belongs to the second quadrant.');
} else if (time <= 45) {
 console.log('The given number belongs to the third quadrant.');
} else {
 console.log('The given number belongs to the fourth quadrant.');
}


// - У змінній day дано якесь число від 1 до 31. Потрібно визначити,
// у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).

let day = 0;
if (day <= 0) {
 console.log('Invalid day, enter a day from 1 to 31');
} else if (day <= 10) {
 console.log('The day falls on the first decade of the month');
} else if (day <= 20) {
 console.log('The day falls on the second decade of the month');
} else if (day <= 31) {
 console.log('The day falls on the third decade of the month');
} else {
 console.log('Invalid day, enter a day from 1 to 31');
}


// - Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня
// і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).


// let dayOfWeek = prompt('Enter day of week: ')
let dayOfWeek = 'Monday'
 switch (dayOfWeek){
  case 'Monday':
   console.log(
       '9:00 AM - Gym',
       '11:00 AM - Meeting with clients',
       '2:00 PM - Lunch break');
   break

  case 'Tuesday':
   console.log(
       '10:00 AM - Team brainstorming session',
       '1:00 PM - Project presentation',
       '3:00 PM - Coffee with a friend');
   break

  case 'Wednesday':
   console.log(
       '8:30 AM - Yoga class',
       '12:00 PM - Working on reports',
       '3:30 PM - Language class');
   break

  case 'Thursday':
   console.log(
       '9:30 AM - Marketing workshop',
       '11:30 AM - Strategy meeting',
       '4:00 PM - Volunteer work');
   break

  case 'Friday':
   console.log(
       '10:00 AM - Team building activities',
       '2:00 PM - Networking event',
       '5:00 PM - Happy hour');
   break

  case 'Saturday':
   console.log(
       '10:00 AM - Brunch with friends',
       '1:00 PM - Hiking trip',
       '4:00 PM - Movie night');
   break

  case 'Sunday':
   console.log(
       '12:00 PM - Family lunch',
       '3:00 PM - Beach outing',
       '7:00 PM - Dinner with relatives');
   break
 }

//  - Користувач вводить або має два числа.
//      Потрібно знайти та вивести максимальне число з тих двох .
//      Також потрібно врахувати коли введені рівні числа.

let user1 = -9;
let user2 = 9;

if (user1 > user2) {
 console.log( 'The user number 1 is greater')
}
else if (user1 < user2){
 console.log( 'The user number 2 is greater')
}
else {
 console.log('The user numbers are the same')
}


// // --------------------------------   3   ------------------------- //


// - є змінна х, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
//     буде присвоювати змінній х значення "default"  якщо ви намагаєтесь присвоїти в неї falsy-значення
//     (хибноподібні, тобто ті, які приводиться до false, а це 0 null undefined і тд).

let xxx = 'Hello';
if ( !! xxx === true){
  console.log('True')
}
else {
 console.log('Default')
}
// 0, '', false, undefined, null, Nan //false


// // --------------------------------   4   ------------------------- //

// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray.
//     За допомоги іф перевірити кожен його елемент на тривалість навчання.
//     У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".

let coursesAndDurationArray = [
 {title: 'JavaScript Complex', monthDuration: 5},
 {title: 'Java Complex', monthDuration: 6},
 {title: 'Python Complex', monthDuration: 6},
 {title: 'QA Complex', monthDuration: 4},
 {title: 'FullStack', monthDuration: 7},
 {title: 'Frontend', monthDuration: 4}
];
if (coursesAndDurationArray[0].monthDuration > 5){
 console.log('Супер')
}
if (coursesAndDurationArray[1].monthDuration > 5){
 console.log('Супер')
}
if (coursesAndDurationArray[2].monthDuration > 5){
 console.log('Супер')
}
if (coursesAndDurationArray[3].monthDuration > 5){
 console.log('Супер')
}
if (coursesAndDurationArray[4].monthDuration > 5){
 console.log('Супер')
}
if (coursesAndDurationArray[5].monthDuration > 5){
 console.log('Супер')
}
