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