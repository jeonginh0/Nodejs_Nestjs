// var greeting = 'hello';
// console.log(greeting);

// var greeting = 'hi';
// console.log(greeting);

// greeting = 'how are you?'
// console.log(greeting);

// let : 중복 선언 불가, 재할당 가능
// let greeting = 'hello';
// console.log(greeting);

// let greeting = 'hi';
// console.log(greeting);

// greeting = 'hi';
// console.log(greeting);

// const : 중복 선언 X, 재할당 X
// const greeting = 'hello';
// console.log(greeting);

// greeting = 'hi';
// console.log(greeting);

// 유효한 참조 범위
// var => 함수 레벨 스코프
// function func() {
//     if(true) {
//         var a = 'a';
//         console.log(a);
//     }
//     console.log(a);
// }
// console.log(a); // 에러 발생
// func();

// let, const => 블록(block) 레벨 스코프
// function func() {
//     if (true) {
//         let a = 'a';
//         console.log(a);
//     }
//     console.log(a); // 에러 발생
// }

// func();

// console.log(greeting);
// var greeting = 'hello';
// let greeting = 'hello';

// func();

// function func(){
//     console.log('hoisting test');
// }

/*
let / var / const 결론

변수를 생성할 때 재할당이 필요없으면 const 사용,
재할당이 필요하면 let을 사용하지만 변수의 scope를 최대한 좁게 만들어서 사용
*/