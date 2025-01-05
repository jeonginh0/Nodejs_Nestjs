// function fetchData() {
//     return new Promise((resolve, reject) => {
//         // 비동기 요청
//         const success = true;
//         if (success) {
//             resolve('성공');
//         } else {
//             reject('실패');
//         }
//     })
// }

// fetchData()
//     .then((response) => {
//         console.log(response);
//     })
//     .catch((error) => {
//         console.error(error);
//     })

// fetch('http://jsonplaceholder.typicode.com/todos/1')
//     .then(response1 => response1.json())
//     .then(json1 => console.log(json1))
//     .then(() => fetch('http://jsonplaceholder.typicode.com/todos/2'))
//     .then(response2 => response2.json())
//     .then(json2 => console.log(json2))
//     .catch((error) => {
//         console.error(error);
//     })
//     .finally(() => {
//         console.log('작업 끝!');
//     })

// Promise.all()
// const promise1 = Promise.resolve(3);
// // const promise1 = Promise.reject('failed reason);
// const promise2 = 42;
// const promise3 = new Promise((res, rej) => {
//     setTimeout(res, 3000, 'foo');
// });

// Promise.all([promise1, promise2, promise3]).then((values) => {
//     console.log(values);
// }).catch((error) => {
//     console.error(error);
// });

// Promise.race()
// const promise4 = new Promise((res, rej) => {
//     setTimeout(res, 500, 'one');
// })

// const promise5 = new Promise((res, rej) => {
//     setTimeout(res, 100, 'two');
// })

// Promise.race([promise4, promise5]).then((value) => {
//     console.log(value);
// })

async function makeRequests() {
    try {
        const response1 = await fetch('http://jsonplaceholder.typicode.com/todos/1');
        const jsonResponse1 = await response1.json();
        console.log('jsonRepsonse1', jsonResponse1);

        const response2 = await fetch('http://jsonplaceholder.typicode.com/todos/2');
        const jsonResponse2 = await response2.json();
        console.log('jsonRepsonse2', jsonResponse2);
    } catch (error) { 
        console.error(error);
    } finally {
        console.log('작업 끝');
    }
}

makeRequests();