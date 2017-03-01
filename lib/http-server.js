'use strict';

const http = require('http');
const url = require('url');

const server = http.createServer((request, response) => {
  let start = process.hrtime();
  let echo = {}; // empty object until line 10 is done running
  // copies the httpVersion attribute  to echo
  echo.httpVersion = request.httpVersion; // httpVersion is an attribute
  // copies 'method' attribute to echo
  echo.method = request.method;
  // url.parse breaks the url down to a host, a port, and a path
  // converts url into something readable :)
  echo.url = url.parse(request.url, true);
  // make a keys object with the copied (echo) url
  let keys = Object.keys(echo.url);
  keys.forEach((key) => {
    // if a key is empty, remove it from echo!
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
    // turn echo object into JSON! omg JSON is a fancy string
    let echoJSON = JSON.stringify(echo);
    // take the response, write the headers with status code, description, Content-Length and Content-Type
    response.writeHead(200, 'OK', {
      'Content-Length': echoJSON.length, // literally counts the characters in the string
      'Content-Type': 'application/json',
    });
    response.write(echoJSON);
    response.end(); // executing this is synchronous, but we don't confirm the end until it's done
    let elapsed = process.hrtime(start); // stopwatch the response time
    console.log(`Request processed in ${elapsed[0] * 1e9 + elapsed[1]} nanoseconds`);
  });
});

server.on('listening', () => { // when the server is ready to receive requests
  console.log('echo server listening');
});

server.listen(3000);
