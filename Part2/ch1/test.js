/**
 * 자바스크립트를 실행하려면 자바스크립트 엔진이 필요
 * interpreter: 한 줄씩 번역 및 분석 실행
 * compiler: 작성한 코드를 한번에 기계어로 변환 후 실행
 * 자바스크립트는 JIT Compiliation (Just In Time)으로 성능향상
 * 
 * 자바스크립트를 브라우저 밖에서 실행하려면?
 * Node.js를 이용하면 브라우저 밖에서도 실행 가능
*/

/**
 * Node.js Runtime
 * runtime (환경): 프로그래밍 언어가 구동되는 환경. Node.js, 브라우저 등도 자바스크립트 런타임
 * Node.js는 프로그래밍 언어도, 프레임워크도 아닌 자바스크립트 런타임
 * 
 * 자바스크립트 소스 코드 작성 -> '엔진'이 작성한 코드 실행 -> 코드를 읽는 것 이외 작업(DB 접근, 파일 읽기 등)은 'libuv'가 처리
 */

/**
 * Node.js Install
 * download: http://nodejs.org/ko/
 */

/**
 * Node.js REPL
 * REPL: Read-Eval(evaluation)-Print Loop의 약자
 * 사용자가 특정 코드를 입력하면 그 코드를 평가하고 코드의 실행결과를 출력해주는 것을 반복해주는 환경
 * 
 * <ex>
 * const ABC = "A" + "B" + "C";
 * console.log(ABC);
 * 
 * <output>
 * 'ABC'
 */

/**
 * Browser API & Node.js API
 * 브라우저와 Node.js 모두에서 사용하는 API
 * let greeting = `John Hello!`;
 * console.log(greeting);
 */

let who = process.argv[2];

let greeting = `${who} Hello!`;

console.log(greeting);

/**
 * COMMAND
 * cd Part2/ch1
 * node test.js John
 */ 