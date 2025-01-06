/**
 * Node.js가 작업을 처리하는 방법
 * v8(엔진)이 코드를 해석하고 Node.js APIs들 중 하나의 함수를 호출하고 Node.js 바인딩을 통해서 libuv에 의해서 원하는 작업을 처리하게 한다
 */

/**
 * Node.js 오픈 소스 코드를 통한 이해
 * page: https://gibhub.com/nodejs/node
 * lib 폴더: node Api의 자바스크립트 부분으로 console, http, os, path, process 등이 존재
 * src 폴더: node binding의 c++ 부분으로 Javascript와 C++을 연결해줌
 */

/**
 * libuv(유니콘 벨로시랩터 라이브러리)
 * page: https://libuv.org/
 * 이벤트 루프를 기반으로 비동기 I/O(Input/Output)입출력에 대한 지원을 제공하는 다중 플랫폼 C 라이브러리.
 * 파일시스템, DNS, 네트워크, 파이프, 신호 처리, 폴링 및 스트리밍을 처리하는 메커니즘 제공
 * 
 * 원래 unix, window는 서로 파일 컨트롤하는 방법이 다르지만 libuv에서 서로 compatible하게 해주므로 노드를 사용하는 사람은 따로 신경쓰지 않고 unix, window에서 같은 방법으로 사용할 수 있다.
 */

/**
 * 비동기와 동기
 * (Asynchronous vs Synchronous)
 * 
 * 동기는 이전의 것이 끝나야 다음 것을 할 수 있음
 * 비동기는 1번을 하면서 2, 3, 4번도 동시에 할 수 있음
 * 
 * Node.js는 비동기를 주로 사용함
 * 데이터베이스에서 데이터를 읽을 때, 저장할 때, 지울 때 등 대부분의 요청이 비동기로 이루어진다.
 * 대부분의 작업이 어느 정도의 시간을 요하기 때문이다.
 * 이 덕분에 여러 개 작업을 해도 다른 작업을 기다리지 않고 빠르게 여러 작업을 처리할 수 있다.
 */

console.log('1');
console.log('2');

setTimeout(() => {
    console.log('1');
}, 1000);
console.log(2);

/**
 * 자바스크립트는 동기 언어이다.
 * 비동기 코드를 작성하기 위해서 자바스크립트 이외의 도움을 받는다.
 * 자바스크립트는 비동기처럼 사용할 수 있으나, 결국은 다른 것의 도움을 받아서 비동기처럼 사용할 수 있다.
 */

/**
 * Blocking, Non-Blocking in Node.js
 * 
 * Blocking: Node.js 프로세스에서 추가 js 실행이 js가 아닌 작업이 완료될 때까지 기다려야 하는 경우이다.
 *           이는 Blocking 작업이 발생하는 동안 Event Loop가 js를 계속 실행할 수 없기 때문에 발생한다.
 * 
 * Node.js 표준 라이브러리의 모든 입출력(I/O) 메서드는 Non-Blocking 및 callback 함수를 허용하는 비동기 버전을 제공한다.
 */
// const fs = require('fs')
// const data = fs.readFileSync('../../README.md')
// console.log(data);

const fs = require('fs')
fs.readFile('../../README.md', (err, data) => {
    if (err) throw err;
    console.log(data);
})

/**
 * 프로세스: 어떠한 일을 하고나서 상태
 * 프로세서 === CPU | CPU Core는 CPU의 두뇌, 명령을 받고 계산 또는 작업을 수행
 * 
 * 스레드: 프로세스 내에서 일을 처리하는 세부 실행 단위
 * 스레드는 자원을 공유함. 
 * 
 * 프로세스 구조
 * Stack: 프로레스 스택에는 메서드/함수 매개변수. 반환 주소 및 지역 변수와 같은 임시 데이터가 포함됨
 * Heap: 런타임 동안 프로세스에 동적으로 할당된 메모리
 * Data: 전역 및 정적 변수가 포함됨
 * Text: Program Counter 값과 프로세서 레지스터의 내용이 나타내는 현재 활동이 포함됨
 * 메모리 속도: Stack > Data > Code > Heap 순으로 빠름
 * 
 * 싱글스레드: 하나의 프로세스에서 하나의 스레드를 실행. 프로세스 내의 작업을 순차적으로 실행
 * 멀티스레드: 하나의 프로세스 내에 여러 개의 스레드가 실행. 각각의 스레드가 다른 작업을 할당받아서
 *          프로세스가 병렬적으로 여러 작업을 수행할 수 있음. 각각 Stack만 따로 할당받고 Code, Data, Heap 영역은 공유함.
 * 
 * 멀티스레딩의 단점:
 * 공유하는 자원에서 동시 접근할 때 신경을 써줘야 함
 * 병목현상 발생 가능
 * 관리가 쉽지 않음
 */

/**
 * Node.js가 비동기 작업을 처리하는 방법
 * 
 * 노드는 libuv에서 제공하는 Event Loop를 이용하기 떄문에 여러개의 비동기 작업을 같이 해줄 수 있다.
 */