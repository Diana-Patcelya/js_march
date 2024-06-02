// На странице user-details.html:
// 4 Вивести всю, без виключення, інформацію про об'єкт user на який клікнули
// 5 Додати кнопку "post of current user", при кліку на яку, з'являються title всіх постів поточного юзера
// (для получения постов используйте эндпоинт https://jsonplaceholder.typicode.com/users/USER_ID/posts)
//     6 Каждому посту додати кнопку/посилання, при кліку на яку відбувається перехід на сторінку post-details.html,
//     котра має детальну інфу про поточний пост.


function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}

const userId = getQueryParam('id');

if (userId) {
    fetch(`https://jsonplaceholder.typicode.com/users/${userId}`)
        .then(response => response.json())
        .then(user => {
            const userDetails = document.getElementById('userDetails');
            const userInfo = `
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Ім'я:</strong> ${user.name}</p>
                <p><strong>Username:</strong> ${user.username}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                <p><strong>Адреса:</strong> <br>
                    <strong>Вулиця:</strong> ${user.address.street}, <br>
                    <strong>Квартира:</strong> ${user.address.suite},<br>
                    <strong>Місто:</strong> ${user.address.city},<br>
                    <strong>Поштовий індекс:</strong> ${user.address.zipcode},<br>
                    <strong>Geo:</strong> ${user.address.geo.lat} ${user.address.geo.lng}
                </p>
                <p><strong>Телефон:</strong> ${user.phone}</p>
                <p><strong>Вебсайт:</strong> ${user.website}</p>
                <p><strong>Компанія:</strong> ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
            `;
            userDetails.innerHTML = userInfo;

            const buttonPost = document.getElementById('userButton');
            buttonPost.addEventListener('click', () => {
                window.location.href = `post-details.html?userId=${user.id}`;
            });
        })
        .catch(error => console.error('Помилка:', error));
} else {
    document.getElementById('userDetails').innerText = 'ID користувача не вказано у URL';
}