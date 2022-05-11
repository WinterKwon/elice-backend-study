// nodejs로 http서버 만들기
// 터미널에서 node 0429/app.js로 실행하기
// 브라우저 자동으로 열리지 않음. localhost:3002로 접속해 확인하기

const http = require('http')

http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');
}).listen(3002);

console.log('Server running at http://127.0.0.1:3002/')