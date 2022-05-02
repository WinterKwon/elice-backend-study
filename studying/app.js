// nodejs로 http서버 만들기

const http = require('http')

http.createServer((request, response) => {
    response.statusCode = 200;
    response.setHeader('Content-Type', 'text/plain');
    response.end('Hello World');
}).listen(3002);

console.log('Server running at http://127.0.0.1:3002/')