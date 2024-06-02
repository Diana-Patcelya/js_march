// В index.html
// 1 отримати масив об'єктів з endpoint`а https://jsonplaceholder.typicode.com/users
// 2 Вивести id,name всіх user в index.html. Окремий блок для кожного user.
// 3 Додати кожному блоку кнопку/посилання , при кліку на яку відбувається перехід  на сторінку user-details.html,
// котра має детальну інфорацію про об'єкт на який клікнули

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users);
        const usersList = document.getElementById('usersList');
        users.forEach(user => {
            const userDiv = document.createElement('div');
            userDiv.classList.add('user');
            const userInfo = document.createElement('p');
            userInfo.innerText = `${user.id} - ${user.name}`;
            userDiv.appendChild(userInfo);

            const button = document.createElement('button');
            button.innerText = 'Details';
            button.classList.add('button');
            button.addEventListener('click', () => {
                window.location.href = `details.html?id=${user.id}`;
            });
            userDiv.appendChild(button);

            usersList.appendChild(userDiv);
        });
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });