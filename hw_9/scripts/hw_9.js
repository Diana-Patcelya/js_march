// - створити блок,
//     - додати йому класи wrap, collapse, alpha, beta
// - додати стилі(довільні значення) : колір фону, колір тексту, розмір тексту
// - додати цей блок в body.
// - клонувати його повністю, та додати клон в body.

let div_1 = document.createElement('div');
div_1.classList.add('wrap', 'collapse', 'alpha', 'beta');
div_1.style.backgroundColor = 'green';
div_1.style.color = 'violet';
div_1.style.fontSize = '20px';
div_1.textContent = 'HW 9';
document.body.appendChild(div_1);

let newClone = div_1.cloneNode(true);
document.body.appendChild(newClone);

console.log(div_1)

document.write('*******************************************')

// - Є масив:
//     ['Main','Products','About us','Contacts']
// Зробити ul в середині якої будуть лежати елементи масиву (кожен в своєму li)

let arr = ['Main', 'Products', 'About us', 'Contacts'];

let newUl = document.createElement('ul');
document.body.appendChild(newUl);

for (let elem of arr) {
    let newLi = document.createElement('li');
    newLi.textContent = elem;
    newUl.appendChild(newLi);
}
console.log(newUl)

document.write('*******************************************')
// - Є масив
// Для кожного елементу масиву зробити блок в якому вивести інформацію про title та monthDuration
// Завдання робити через цикли.

let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

const createDivs = (courses) => {
    let divTask = '';
    for (let course of courses) {
        divTask += `<div>Title: ${course.title}, Duration: ${course.monthDuration} months</div>`;
    }
    return divTask;
}
document.write(createDivs(coursesAndDurationArray));

document.write('*******************************************')
//     - Є масив
// За допомоги скріпта для кожного елементу масиву зробити <div class='item'> ,
// в якому буде <h1 class='heading'>  з title  елементу, та <p class='description'> з monthDuration елементу.
//     Завдання робити через цикли.

for (let elem of coursesAndDurationArray) {
    let newDiv = document.createElement('div');
    newDiv.classList.add('item');

    let newT = document.createElement('h2');
    newT.classList.add('heading');
    newT.textContent = elem.title;

    let newM = document.createElement('p');
    newM.classList.add('description');
    newM.textContent = `Duration: ${elem.monthDuration} months`;

    document.body.appendChild(newDiv);
    newDiv.appendChild(newT);
    newDiv.appendChild(newM);
}
document.write('*******************************************')
// - є масив simpsons, котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
// Проітерувати його, створиши для кожного об'єкту  масиву <div class='member'> та наповнити його данними з об'єкту.
//     Якщо людською мовою: під кожного члена родини зробити блок та наповнити його інформацією з цього об'єкту

let simpsons = [
    {
        name: 'Bart',
        surname: 'Simpson',
        age: 10,
        info: 'Бартолом\'ю ДжоДжо «Барт» Сімпсон (англ. Bartholomew JoJo «Bart» Simpson) — один із головних героїв мультиплікаційного серіалу Сімпсони. Барт — найстарша дитина Гомера і Мардж Сімпсон. У нього також є дві молодші сестри — Ліса і Меґґі. Барт є втіленням образу бешкетника та посереднього учня у школі. Разом зі своїм батьком Барт є одним із найвідоміших персонажів у цьому серіалі.',
        photo: 'https://upload.wikimedia.org/wikipedia/uk/a/aa/Bart_simpson.png'
    },
    {
        name: 'Homer',
        surname: 'Simpson',
        age: 40,
        info: 'Гомер Джей Сімпсон (англ. Homer Jay Simpson) — один із головних героїв мультсеріалу «Сімпсони». Гомер — грубий і неввічливий батько родини, він має очевидні вади: товстий, лисий і не дуже розумний. Нерідко він поводиться як блазень, абсурдно, егоїстично і нетактовно, але все ж лишається симпатичним.',
        photo: 'http://upload.wikimedia.org/wikipedia/en/0/02/Homer_Simpson_2006.png'
    },
    {
        name: 'Marge',
        surname: 'Simpson',
        age: 38,
        info: 'Ма́рджори Жакли́н «Мардж» Си́мпсон (в девичестве Бувье́) (англ. Marjorie Jacqueline «Marge» Simpson) — постоянный персонаж мультипликационного сериала «Симпсоны», её озвучивает Джулия Кавнер. Обычно носит зелёное платье, красные балетки, на шее — ожерелье из искусственного жемчуга и ездит на оранжевом универсале. У неё шикарные синие волосы, которые она обычно собирает в очень высокую причёску. Глаза цвета ореха (19s6e). Основное занятие — домохозяйка, большую часть времени проводит в заботе о доме, детях и Гомере. Образ Мардж копирует стереотип провинциальной американской домохозяйки 50-х годов. Мардж — единственный член семьи, посещающий церковь добровольно. Старается поддерживать нравственность не только своей семьи, но и всего города. Отлично готовит, особенно славятся её свиные отбивные и зефир. Любимое блюдо — лапша с маслом.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/0/0b/Marge_Simpson.png'
    },
    {
        name: 'Lisa',
        surname: 'Simpson',
        age: 9,
        info: 'Ли́за Мари́ Си́мпсон (англ. Lisa Marie Simpson) — героиня мультипликационного сериала «Симпсоны». Средний ребёнок в семье, восьмилетняя девочка, выделяющаяся среди остальных Симпсонов прежде всего своим умом и рассудительностью.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/e/ec/Lisa_Simpson.png'
    },
    {
        name: 'Maggie',
        surname: 'Simpson',
        age: 1,
        info: 'Ма́ргарет Эвелин «Мэ́гги» Си́мпсон (англ. Margaret Evelyn “Maggie” Simpson) — персонаж мультсериала «Симпсоны». Впервые появилась на телевидении в шоу Трейси Ульман, в короткометражке Good Night (англ.)русск. 19 апреля 1987 года. Мэгги была придумана и разработана карикатуристом Мэттом Грейнингом, пока он ждал встречи с Джеймсом Л. Бруксом. Названа в честь младшей сестры Грейнинга. После появления в шоу Трейси Ульман, через три года семья Симпсонов получила собственный сериал на телеканале Fox, дебют произошёл 17 декабря 1989 года.',
        photo: 'https://upload.wikimedia.org/wikipedia/ru/9/9d/Maggie_Simpson.png'
    },
];
for (let simpson of simpsons) {
    let memberDiv = document.createElement('div');
    let infoDiv = document.createElement('div');
    let nameHeading = document.createElement('h1');
    let ageSpan = document.createElement('span');
    let infoParagraph = document.createElement('p');
    let photoImg = document.createElement('img');

    document.body.appendChild(memberDiv);
    memberDiv.appendChild(infoDiv);
    memberDiv.appendChild(photoImg);
    infoDiv.appendChild(nameHeading);
    infoDiv.appendChild(ageSpan);
    infoDiv.appendChild(infoParagraph);

    memberDiv.classList.add('member');
    infoDiv.classList.add('info');
    nameHeading.textContent = `${simpson.name} ${simpson.surname}`;
    ageSpan.textContent = `Age: ${simpson.age}`;
    infoParagraph.textContent = `${simpson.info}`;
    photoImg.src = simpson.photo;

    memberDiv.style.display = 'flex';
    memberDiv.style.alignItems = 'flex-start';
    memberDiv.style.border = '3px dashed green';
    memberDiv.style.borderRadius = '15px';
    memberDiv.style.margin = '10px';
    memberDiv.style.padding = '10px';
    photoImg.style.width = '100px';
    photoImg.style.marginLeft = '20px';
    memberDiv.style.flexDirection = 'row';
}

document.write('*******************************************')
//     Цикл в циклі
// - Є масив coursesArray котрий лежить в arrays.js (на цей момент ви вже знаєте де він знаходиться)
//
// Створити для кожного елементу масиву свій блок, блок розділити блоками, в яких будуть зберігатись значення окремих властивостей, для властивості modules зробити список з елементами
// Приклад структири знаходиться у файлі example.png який лежить в папці з поточним фйлом

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
for (let course of coursesArray) {
    let outerDiv = document.createElement('div');
    outerDiv.classList.add('outerDiv');

    let courseDiv = document.createElement('div');
    courseDiv.classList.add('course');

    let titleDiv = document.createElement('div');
    titleDiv.textContent = `Title: ${course.title}`;
    titleDiv.classList.add('title');
    titleDiv.style.border = '1px solid black';
    titleDiv.style.margin = '5px';
    titleDiv.style.padding = '5px';
    courseDiv.appendChild(titleDiv);

    let durationDiv = document.createElement('div');
    durationDiv.textContent = `Duration: ${course.monthDuration} months, ${course.hourDuration} hours`;
    durationDiv.classList.add('duration');
    durationDiv.style.border = '1px solid black';
    durationDiv.style.margin = '5px';
    durationDiv.style.padding = '5px';
    courseDiv.appendChild(durationDiv);

    let modulesDiv = document.createElement('div');
    modulesDiv.classList.add('modules');
    modulesDiv.style.border = '1px solid black';
    modulesDiv.style.margin = '5px';
    modulesDiv.style.padding = '5px';
    courseDiv.appendChild(modulesDiv);

    for (let module of course.modules) {
        let moduleItem = document.createElement('li');
        moduleItem.textContent = module;
        moduleItem.classList.add('module');
        modulesDiv.appendChild(moduleItem);
    }

    courseDiv.style.border = '2px solid red';
    courseDiv.style.padding = '5px';
    courseDiv.style.margin = '5px';

    outerDiv.appendChild(courseDiv);
    document.body.appendChild(outerDiv);
}
document.write('*******************************************')


