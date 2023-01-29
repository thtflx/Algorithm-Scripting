//! PROMISE.
//* последовательная асинхронность с помощью CALLBACK.
// console.log(`Request data...`);

// setTimeout(() => {
//     console.log(`Preparing data...`);

//     const backendData = {
//         server: 'aws',
//         port: 2000,
//         status: 'working'
//     }

//     setTimeout(() => {
//         backendData.modified = true;
//         console.log(`Data received`, backendData);
//     }, 2000);
// }, 2000);




//* настоящие promise'ы.
// const somePromise = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         console.log(`Preparing data...`);
//         const backendData = {
//             server: 'aws',
//             port: 2000,
//             status: 'working'
//         }
//         resolve(backendData);
//     }, 2000);
// });


// somePromise
//     .then((data) => {
//         return new Promise((resolve, reject) => {
//             setTimeout(() => {
//                 data.modified = true;
//                 resolve(data);
//             }, 2000);
//         });
//     })
//     .then((clientData) => {
//         clientData.fromPromise = true;
//         return clientData;
//     })
//     .then((data) => {
//         console.log(`Modified`, data);
//     })
//     .catch((err) => console.log(`Error: `, err))
//     .finally(() => console.log(`Finally`))


//* трюк с ракетой.
// const sleep = (ms) => {
//     return new Promise((resolve) => {
//         setTimeout(() => {
//             resolve();
//         }, ms);
//     })
// }

// sleep(1000).then(() => console.log(`3....`))
// sleep(2000).then(() => console.log(`2...`))
// sleep(3000).then(() => console.log(`1..`))
// sleep(4000).then(() => console.log(`Rocket has been flown.`))


//* Еще 2 promise'a.
// Promise.all([sleep(2000), sleep(5000)]).then(() => {
//     console.log(`All promises`);
// })

// Promise.race([sleep(2000), sleep(5000)]).then(() => {
//     console.log(`Race promises`);
// })




// mytry
// e-mail request.
// const emailRequest = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         const backendInfo = {
//             server: 'bws',
//             port: 5000,
//             status: 'working'
//         }
//         resolve(backendInfo);
//     }, 2000);
// });


// emailRequest
//     .then((data) => {
//         console.log(`Original data: `, data);
//     })
//     .catch((err) => console.log(`Error: `, err))
//     .finally(() => console.log(`Request completed!`));






//! Fetch, XMLHttpRequest (XHR), Ajax.
// ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ---- ----
//! XMLHttpRequest (XHR)
// *сначала подключаем наш js в html файл* 
// const requestURL = `https://jsonplaceholder.typicode.com/users`;

// function sendRequest(method, url) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.open(method, url);

//         xhr.responseType = 'json';

//         // выводит в консоль наш объект:
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response);
//             } else {
//                 resolve(xhr.response);
//             }
//             console.log(JSON.parse(xhr.response));
//         }

//         // в случае где-то в ссылке допущена ошибка:
//         xhr.onerror = () => {
//             reject(xhr.response);
//         }

//         xhr.send();
//     });
// }


// sendRequest('GET', requestURL)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err))



// еще что-то дополнительное сюда:
// function sendRequest(method, url, body = null) {
//     return new Promise((resolve, reject) => {
//         const xhr = new XMLHttpRequest();

//         xhr.open(method, url);

//         xhr.responseType = 'json';
//         xhr.setRequestHeader('Content-Type', 'application/json')

//         // выводит в консоль наш объект:
//         xhr.onload = () => {
//             if (xhr.status >= 400) {
//                 reject(xhr.response);
//             } else {
//                 resolve(xhr.response);
//             }
//             console.log(JSON.parse(xhr.response));
//         }

//         // в случае где-то в ссылке допущена ошибка:
//         xhr.onerror = () => {
//             reject(xhr.response);
//         }

//         xhr.send(JSON.stringify(body));
//     });
// }

// const body = {
//     name: 'Azizi',
//     age: 19
// }

// sendRequest('POST', requestURL, body)
//     .then((data) => console.log(data))
//     .catch((err) => console.log(err));


//! Fetch.
// *сначала подключаем наш js в html файл*
const requestURL = `https://jsonplaceholder.typicode.com/users`;

function sendRequest(method, url, body = null) {
    const headers = {
        'Content-Type': 'application/json'
    }
    return fetch(url, {
            method: method,
            body: JSON.stringify(body),
            headers: headers
        })
        .then((response) => {
            if (response.ok) {
                return response.json();
            }
            return response.json()
                .then((error) => {
                    const e = new Error('Something went wrong!');
                    e.data = error;
                    throw e;
                })
        })
}

sendRequest('POST', requestURL, body)
    .then((data) => console.log(data))
    .catch((err) => console.log(err));

const body = {
    name: 'Azizi',
    age: 19
}