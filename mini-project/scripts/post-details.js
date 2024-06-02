// На странице post-details.html:
// 7 Вивести всю, без виключення, інформацію про об'єкт post на який клікнули .
// 8 Нижчє інформаці про пост, вивести всі коментарі поточного поста
// (ендпоінт  - https://jsonplaceholder.typicode.com/posts/POST_ID/comments)
function getQueryParam(param) {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(param);
}
const userIdFromURL = getQueryParam('userId');

if (userIdFromURL) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userIdFromURL}`)
        .then(response => response.json())
        .then(posts => {
            const postDetailsDiv = document.getElementById('postDetails');
            postDetailsDiv.innerHTML = `
                <p><strong>ID:</strong> ${posts[0].id}</p>
                <p><strong>Title:</strong> ${posts[0].title}</p>
                <p><strong>Body:</strong> ${posts[0].body}</p>
            `;

            return fetch(`https://jsonplaceholder.typicode.com/posts/${userIdFromURL}/comments`);
        })
        .then(response => response.json())
        .then(comments => {
            const commentsListDiv = document.getElementById('commentsList');
            comments.forEach(comment => {
                const commentItemDiv = document.createElement('div');
                commentItemDiv.className = 'comment-item';
                commentItemDiv.innerHTML = `
                    <p><strong>${comment.name}</strong> (${comment.email})</p>
                    <p>${comment.body}</p>
                `;
                commentsListDiv.appendChild(commentItemDiv);
            });
        })
        .catch(error => console.error('Error:', error));
}