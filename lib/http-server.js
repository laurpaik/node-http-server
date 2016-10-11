'use strict';

const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
  let start = process.hrtime();
  // start a POJO, so we can copy things over from the request object
  let echo = {};
  echo.httpVersion = request.httpVersion;
  echo.method = request.method;
  echo.url = url.parse(request.url, true);
  let keys = Object.keys(echo.url);
  keys.forEach((key) => {
    if (echo.url[key] === null) {
      delete echo.url[key];
    }
  });
  echo.headers = request.headers;
  echo.data = '';
  request.on('data', (chunk) => {
    echo.data += chunk;
  });
  request.on('end', () => {
    let echoJSON = JSON.stringify(echo);
    response.writeHead(200, 'OK', {
      'Content-Length': echoJSON.length,
      'Content-Type': 'application/json',
    });
    response.write(echoJSON);
    response.end();
    let elapsed = process.hrtime(start);
    console.log(`Request processed in ${elapsed[0] * 1e9 + elapsed[1]} nanoseconds`);
  });
});

server.on('listening', () => {
  console.log('echo server listening');
});

server.listen(3000);
