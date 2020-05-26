// const fetch = require('node-fetch');
// fetch('https://api.github.com/users/baturaandrew/repos')
//   .then(response => response.text()).then(res => console.log(res));

// const {
//   XMLHttpRequest,
// } = require('xmlhttprequest');

// let data;
// fetch('https://api.github.com/users/baturaandrew/repos')
//   .then(response => response.text()).then((res) => {
//     data = res;
//   });

// // // Создаётся объект promise
// const promise = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     // переведёт промис в состояние fulfilled с результатом "result"
//     resolve('вернули из resolve');
//   }, 1000);

//   // throw new Error('Ошибка в URI');
// });

// // promise.then навешивает обработчики на успешный результат или ошибку
// promise
//   .then(
//     (result) => {
//       // первая функция-обработчик - запустится при вызове resolve
//       console.log(`Fulfilled: ${result}`); // result - аргумент resolve
//     },
//     (error) => {
//       // вторая функция - запустится при вызове reject
//       console.log(`Rejected: ${error.message}`); // error - аргумент reject
//     },
//   );

// function httpGet(url) {
//   return new Promise(
//     (resolve, reject) => {
//       const xhr = new XMLHttpRequest();
//       xhr.open('GET', url, true);

//       xhr.onload = function () {
//         if (this.status == 200) {
//           resolve(this.response);
//         } else {
//           const error = new Error(this.statusText);
//           error.code = this.status;
//           reject(error);
//         }
//       };

//       xhr.onerror = function () {
//         reject(new Error('Network Error'));
//       };

//       xhr.send();
//     },
//   );
// }

// httpGet('https://api.github.com/users/baturaandrew/repos')
//   .then(
//     response => console.log(`Fulfilled: ${response}`),
//     error => console.log(`Rejected: ${error}`),
//   );

// (async () => {
//   try {
//     const data = await httpGet('https://api.github.com/users/baturaandrew/repos');
//     console.log(data);
//   } catch (err) {
//     console.log(err);
//   }
// })();

// httpGet('https://api.github.com/users')
//   .then(JSON.parse)
//   .then(user => httpGet(`https://api.github.com/users/${user[2].login}`))
//   .then(
//     JSON.parse,
//     (error) => {
//       if (error.code == 404) {
//         return {
//           name: 'NoGithub',
//           avatar_url: '/article/promise/anon.png',
//         };
//       }
//       throw error;
//     },
//   )
//   .then((githubUser) => {
//     const img = new Image();
//     img.src = githubUser.avatar_url;
//     img.className = 'promise-avatar-example';
//     document.body.appendChild(img);
//     setTimeout(() => img.remove(), 3000);
//   })
//   .catch((error) => {
//     alert(error); // Error: Not Found
//   });

// (async () => {
//   const user = await fetch('https://api.github.com/users').then(response => response.text()).then(JSON.parse);
//   const githubUser = await fetch(`https://api.github.com/users/${user[1].login}`).then(response => response.text()).then(JSON.parse);

//   const img = new Image();
//   img.src = githubUser.avatar_url;
//   img.className = 'promise-avatar-example';
//   document.body.appendChild(img);
//   setTimeout(() => img.remove(), 3000);
// })();

// (async () => {
//   const user = JSON.parse(await httpGet('https://api.github.com/users'));
//   const githubUser = JSON.parse(await httpGet(`https://api.github.com/users/${user[2].login}`));

//   const img = new Image();
//   img.src = githubUser.avatar_url;
//   img.className = 'promise-avatar-example';
//   document.body.appendChild(img);
//   await setTimeout(() => img.remove(), 3000);
// })();
// A: Простое умножение
function doubleA(n) {
  return n * 2;
}
const o = {
  valueOf: Math.random,
};
console.log(doubleA(o)); // -> 1.7709942335937932
console.log(doubleA(o)); // -> 1.2600863386367704
