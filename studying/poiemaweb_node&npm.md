* clientt side JS

script 태그 사용해 외부스크립트파일을 가져올수는 있으나 
파일마다 독립적인 scope 가지는게 아니라 하나의 전역객체 (global object)에 바인딩 되므로 전역변수가 중복되는 문제 발생할 수 있다.

* server side JS

모듈 기능이 반드시 필요해지자 commonJS와 AMD(Asyncronous Module Definition) 방식이 나왔다. 둘은 사양(spec)으로 이런 라이브러리가 존재하는 것은 아니다.

## commonJS

* 동기식  syncronous loading
* 간단한 문법
* 사실상 Node.js의 표준 모듈

## AMD

* 비동기식 asyncrounous loading
* 대표적인 모듈로더는 RequireJS

==================
모든 브라우저가 ES6 모듈을 지원하는 건 아니므로 Browserify 또는 webpack 같은 모듈 번들러를 사용한다.

===================
# npm

 Node.js에서 사용할 수 있는 모듈들을 패키지화하여 모아둔 저장소 역할과 패키지 설치 및 관리를 위한 CLI(Command line interface)를 제공

$ npm install <package>

npm 모듈의 설치 범위(영역?)
: npm은 기본적으로 별도 옵션(-g)을 주지ㅣ 않으면 **지역**으로 설치
: 프로젝트 루트 디렉토리에 `node_modules`디렉토리가 생성되고 그 안에 패키지가 설치된다. 
: 지역으로 설치된 패키지는 해당 프로젝트 내에서만 사용할 수 있다. 

전역에 설치된 패키지는 OS에 따라 설치 장소가 다르다.

macOS의 경우
/usr/local/lib/node_modules
윈도우의 경우
c:\Users\%USERNAME%\AppData\Roaming\npm\node_modules