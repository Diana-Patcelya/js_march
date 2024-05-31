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
        <p>ID: ${user.id}</p>
        <p>Name: ${user.name}</p>
        <p>Username: ${user.username}</p>
        <p>Email: ${user.email}</p>
        <p>Address: ${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}</p>
        <p>Phone: ${user.phone}</p>
        <p>Website: ${user.website}</p>
        <p>Company: ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
      `;
            userDetails.innerHTML = userInfo;
        })
        .catch(error => console.error('Error:', error));
} else {
    document.getElementById('userDetails').innerText = 'ID користувача не вказано у URL';
}