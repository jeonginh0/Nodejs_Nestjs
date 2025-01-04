// 자바스크립트는 동적 타입.
// 아래와 같이 모든 타입의 값으로 할당(재할당) 가능
let foo = 42
foo = 'bar';
foo = true;

console.log(typeof foo);

// 원시 타입
// 문자열 String
const name = "han";
// Number
const age = 30;
// Boolean
const hasJob = true;
// null
const car = null;
// undefined
let anything;
// Symbol
const sym = Symbol();

// 참조 타입
// Array 배열 (배열도 Object의 하나의 형태.)
const hobbies = ['walking', 'books'];
// Object 객체
const address = {
    province: '경기도',
    city: '성남시'
}

console.log(typeof hobbies);
console.log(Array.isArray(hobbies)); // isArray: 배열인지 아닌지 확인 가능