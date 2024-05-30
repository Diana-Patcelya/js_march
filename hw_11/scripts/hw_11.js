// - взяти https://dummyjson.com/docs/carts та вивести інформацію про всі корзини. Відобразити всі поля кожної корзини.

// document.getElementById('task_1').addEventListener('click', () => {
//     let productsBlock = document.getElementsByClassName('products')[0];
//     let baseUrl = 'https://dummyjson.com/carts';
//
//     let url = new URL(baseUrl);
//
//     console.log(url);
//     fetch(url)
//         .then((value) => value.json())
//         .then((response) => {
//             let carts = response['carts'];
//             for (const cart of carts) {
//                 let divCartContainer = document.createElement('div');
//
//                 let divCartInfo = document.createElement('div');
//                 divCartContainer.id = 'divCartContainer';
//                 divCartInfo.innerText = `ID корзини: ${cart.id},
//                 ID користувача: ${cart.userId},
//                 Кількість продуктів: ${cart.totalProducts},
//                 Загальна кількість: ${cart.totalQuantity},
//                 Всього: ${cart.total}$,
//                 Знижена ціна: ${cart.discountedTotal}$`;
//                 divCartContainer.appendChild(divCartInfo);
//
//                 let products = cart.products;
//                 for (const product of products) {
//                     let divProductContainer = document.createElement('div');
//
//                     let divDescription = document.createElement('div');
//                     divDescription.innerText = `ID продукту: ${product.id}, Назва: ${product.title}, Ціна: ${product.price}$, Кількість: ${product.quantity}, Всього: ${product.total}$, Відсоток знижки: ${product.discountPercentage}%, Знижена ціна: ${product.discountedTotal}$`;
//
//                     let productImage = document.createElement('img');
//                     productImage.src = product.thumbnail;
//                     productImage.alt = product.title;
//
//                     divProductContainer.append(divDescription, productImage);
//                     divCartContainer.appendChild(divProductContainer);
//                 }
//                 productsBlock.appendChild(divCartContainer);
//             }
//         })
// });

//     - взяти https://dummyjson.com/docs/recipes та вивести інформацію про всі рецепти. Інгредієнти повинні бути список під час відображення.

// document.getElementById('task_2').addEventListener('click', () => {
//     let recipesBlock = document.getElementsByClassName('recipes')[0];
//     let baseUrl = 'https://dummyjson.com/recipes';
//
//     let url = new URL(baseUrl);
//
//     console.log(url);
//     fetch(url)
//         .then((value) => value.json())
//         .then((response) => {
//             let recipes = response['recipes'];
//             for (const recipe of recipes) {
//                 let divRecipeContainer = document.createElement('div');
//                 divRecipeContainer.classList.add('recipe-container');
//
//                 let ingredientsHTML = recipe.ingredients.map(ingredient => `<li>${ingredient}</li>`).join('');
//
//                 let divRecipeInfo = document.createElement('div');
//                 divRecipeInfo.classList.add('recipe-info');
//                 divRecipeContainer.id = 'divRecipeContainer';
//                 divRecipeInfo.innerHTML = `
//                             <p><b>ID рецепту:</b> ${recipe.id}</p>
//                             <h1>Назва: ${recipe.name}</h1>
//                             <h2>Інгредієнти:</h2>
//                             <ul>${ingredientsHTML}</ul>
//                             <p><b>Інструкції:</b> <i>${recipe.instructions.join('. ')}</i></p>
//                             <p><b>Час підготовки:</b> ${recipe.prepTimeMinutes} хв</p>
//                             <p><b>Час приготування:</b> ${recipe.cookTimeMinutes} хв</p>
//                             <p><b>Порції:</b> ${recipe.servings}</p>
//                             <p><b>Складність:</b> ${recipe.difficulty}</p>
//                             <p><b>Кухня:</b> ${recipe.cuisine}</p>
//                             <p><b>Калорії на порцію:</b> ${recipe.caloriesPerServing} ккал</p>
//                             <p><b>Теги:</b> ${recipe.tags.join(', ')}</p>
//                             <p><b>ID користувача:</b> ${recipe.userId}</p>
//                             <p><b>Рейтинг:</b> ${recipe.rating}</p>
//                             <p><b>Кількість відгуків:</b> ${recipe.reviewCount}</p>
//                             <p><b>Тип прийому їжі:</b> ${recipe.mealType.join(', ')}</p>
//                         `;
//                 divRecipeContainer.appendChild(divRecipeInfo);
//
//                 let recipeImage = document.createElement('img');
//                 recipeImage.src = recipe.image;
//                 recipeImage.alt = recipe.name;
//                 divRecipeContainer.appendChild(recipeImage);
//
//                 recipesBlock.appendChild(divRecipeContainer);
//             }
//         })
// });

//     - зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів)
// отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   де ХХХ - айді користувача)

fetch('http://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
        console.log(users);
        const usersList = document.getElementById('usersList');
        users.forEach(user => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.href = `user-details.html?id=${user.id}`;
            link.innerText = `${user.id} - ${user.name}`;
            listItem.appendChild(link);
            usersList.appendChild(listItem);
        });
    })
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
            userDetails.innerHTML = `
                        <p>ID: ${user.id}</p>
                        <p>Name: ${user.name}</p>
                        <p>Username: ${user.username}</p>
                        <p>Email: ${user.email}</p>
                        <p>Address: <br>Street: ${user.address.street}, <br>Suite: ${user.address.suite},<br>City: ${user.address.city},<br>Zipcode: ${user.address.zipcode},<br>Geo: ${user.address.geo.lat} ${user.address.geo.lng}</p>
                        <p>Phone: ${user.phone}</p>
                        <p>Website: ${user.website}</p>
                        <p>Company:  ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}</p>
                    `;
        })
}