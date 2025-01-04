/* 
< for, for/in, while, do/while >
1. for: 코드 블록을 여러번 반복
2. for/in: 객체 속성을 따라 반복
3. while: 지정된 조건이 true인 동안 코드 블록 반복
4. do/while: while 루프의 변형. true인지 검사하기 전에 코드 블록을 한번 실행한 후 조건이 true인 동안 루프를 반복
*/

// for 반복
// for (let i = 0; i < 10; i++) {
//     if (i === 3) {
//         console.log('It is 3');
//         continue; // i가 3일 때 계속 됨.
//     }

//     if (i === 5) {
//         console.log('It is 5');
//         break; // i가 5일 때 반복을 끊음.
//     }
//     console.log('Number ' + i);
// }

// for/in 반복
// const user = {
//     name: 'Han',
//     province: '경기도',
//     city: '성남시'
// }

// for (let x in user) {
//     console.log(`${x}: ${user[x]}`);
// }

// while 반복
// let i = 0;

// while (i < 10) {
//     console.log('Number ' + i);
//     i++;
// }

// do/while 반복
// let i = 0;

// do {
//     console.log('Number ' + i);
//     i++;
// } while (i < 10);

// let i = 100;

// do {
//     console.log('Number ' + i);
//     i++;
// } while (i < 10);

// 배열 Loop 사용 컨트롤
const locations = ['서울', '부산', '경기도', '대구'];

// For (await과 함께 작동)
for (let i = 0; i < locations.length; i++) {
    console.log(locations[i]);
}

// ForEach (배열 요소 반복, await과 완벽하게 작동하지 않음)
locations.forEach(function (location, index, array) {
    console.log(`${index}: ${location}`);
    console.log(array);
})

// ForEach (arrow function)
locations.forEach((location, index, array) => {
    console.log(`${index}: ${location}`);
    console.log(array);
})

// MAP
locations.map(function (location) {
    console.log(location);
})