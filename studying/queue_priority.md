## queue 종류 및 우선순위

1. Queue의 공식 명칭은

[https://html.spec.whatwg.org/multipage/webappapis.html#event-loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)

(Task Queue, Microtask Queue)

2. Queue의 우선순위 및 실행 순서는

[https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke#syntax](https://dev.to/lydiahallie/javascript-visualized-promises-async-await-5gke#syntax) 여기 나와있는데 (어떤 한국분이 정리를 해놓으셨네요:
[https://velog.io/@titu/JavaScript-Task-Queue%EB%A7%90%EA%B3%A0-%EB%8B%A4%EB%A5%B8-%ED%81%90%EA%B0%80-%EB%8D%94-%EC%9E%88%EB%8B%A4%EA%B3%A0-MicroTask-Queue-Animation-Frames-Render-Queue](https://velog.io/@titu/JavaScript-Task-Queue%EB%A7%90%EA%B3%A0-%EB%8B%A4%EB%A5%B8-%ED%81%90%EA%B0%80-%EB%8D%94-%EC%9E%88%EB%8B%A4%EA%B3%A0-MicroTask-Queue-Animation-Frames-Render-Queue)

[https://html.spec.whatwg.org/multipage/webappapis.html#event-loops](https://html.spec.whatwg.org/multipage/webappapis.html#event-loops)

-------
# 정리
* Lydia hallie 블로그 정리



1. (macro) task queue : setTimeout, setInterval, setImmdediate
2. micro task : process.nextTick, Promise callback, queueMicrotask

* 엘리스 [05-03] 교안 Node.js와 MongoDB1 p.53

1. Message Queue : setTimeout같은 지연실행함수를 등록하는 fifo큐. 콜스택이 비어있을 경우 등록된 함스 콜스택 추가
2. Job Queue : Promise 콜백 등록하는 fifo큐. 상위함수 종료되기 전에 콜스택 비어있지 않더라도 잡큐에 등록된 콜백을 콜스택에 추가



- 용어
    
    task queue = macro task queue = message queue
    
    job queue = micro task queue 
    
- 우선순위
    1. job queue > task queue
    2. queue는 콜스택이 비워져야 실행되는 걸로 설명하는 문서가 대부분이지만 엘리스 교육자료를 참고하면 job queue의 태스크는 상위 함수가 종료되기 전에 콜스택에 추가된다.

 https://jsbin.com/gapadubeja/edit?js,console

 * 예상 출력은?
 ```javascript
 function funcA(){
    console.log('script starts')

    funcB()

    funcE()
}

function funcB(){
    Promise.resolve()
        
        .then(console.log('promise'))
        .then(setTimeout(()=>{
        console.log('setTimeout')
    },0))
    
}

function funcE(){
    console.log('script ends')
}

funcA();
```

* 정답


1. script starts
2. promise
3. script ends
4. setTimeout 



* ps

setTimeout과 promise의 위치 바꿔보면?
```javascript
 function funcA(){
    console.log('script starts')

    funcB()

    funcE()
}

function funcB(){
    Promise.resolve()
        .then(setTimeout(()=>{
        console.log('setTimeout')
    },0))
        .then(console.log('promise'))
    
}

function funcE(){
    console.log('script ends')
}

funcA();
```

출력 순서 : 
1. script starts
2. promise
3. script ends
4. setTimeout


### 코드 실행 결과에 대해...
1. 비동기 함수인 promise와 setTimeout이 JS엔진에서 바로 실행되지 않고 큐에 쌓였다가 콜스택이 비면 실행될 것이란 점은 예상 가능.

2. 그럼 

    console.log('script starts') -> 
    
    console.log('script ends') -> 
    
    promise -> 
    
    setTimeout
    
    일까?

3. 잡큐의 특징 중 상위 함수가 종료되기 전 콜스택이 비지 않더라도 잡큐의 콜백을 콜스택에 추가한다는 점을 확인해보고 싶음

3. promise의 상위함수는 funcB이고 이 함수의 종료는 마지막 funcE까지 모두 실행시켰을때임.

4. 콜스택에 funcA의 첫번째 태스크가 올라갔다 실행되고 funcB의 두 비동기 함수들은 모두 각자의 큐에 보내지고 funcE가 콜스택에 올라가기 전에 우선순위가 높은 잡큐인 promise가 먼저 콜스택에 올라가 실행됨. 이후 funcE가 콜스택에 올라오고 실행되고 나면 더이상 콜스택에 funcA가 실행할 작업은 남아있지 않게됨. 이렇게 콜스택이 비게 되면 태스크큐의 작업인 setTimeout이 콜스택에 올라가게 됨.