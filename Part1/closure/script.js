/**
 * Closure?
 * 다른 함수 내부에 정의된 함수가 있는 경우 외부 함수가 실행을 완료하고 해당 변수가 해당 함수 외부에서 더이상 접근할 수 없는 경우에도 해당 함수 내부 함수는 외부 함수의 변수 및 범위에 접근할 수 있다.
 */

// function outerFunction(outerVariable) {
//     return function innerFunction(innerVariable) {
//         console.log('OuterFunction: ' + outerVariable);
//         console.log('InnerFunction: ' + innerVariable);
//     }
// }

// const newFunction = outerFunction('outside');
// console.log('New Function: ' + newFunction);
// newFunction('inside'); 

let a = 'a';

function functionA() {
    let b = 'b';
    function functionB() {
        let c = 'c';
        console.log(a, b, c);
    }
    functionB();
    console.log(a, b);
}

functionA();