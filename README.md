[![General Assembly Logo](https://camo.githubusercontent.com/1a91b05b8f4d44b5bbfb83abac2b0996d8e26c92/687474703a2f2f692e696d6775722e636f6d2f6b6538555354712e706e67)](https://generalassemb.ly/education/web-development-immersive)

# Node HTTP Module: Server

Node has a built-in HTTP module for making and responding to requests. In this
training, we'll examine the Node HTTP docs and annotate server code. We'll
become familiar with the HTTP module, as well as using function signatures to
find the correct documentation for a procedure. We'll also look at a promisified
version of a simple server.

## Prerequisites

-   [ga-wdi-boston/node-api-promises](https://github.com/ga-wdi-boston/node-api-promises)

## Objectives

By the end of this, developers should be able to:

-   Diagram the flow of a server written in Node.
-   Annotate code using documentation.
-   Find documentation based on function signature.

## Preparation

1.  [Fork and clone](https://github.com/ga-wdi-boston/meta/wiki/ForkAndClone)
    this repository.
1.  Install dependencies with `npm install`.

## Lab: Read Node Server Documentation

Read the following documentation from the Node HTTP module. While reading, take
note of any new concepts or vocabulary that is confusing. Pay attention to
function signatures. When you're finished taking notes, research one or two
points you'd like made clearer. We will discuss our findings.

-   [Class: `http.Server`](https://nodejs.org/dist/latest-v4.x/docs/api/http.html#http_class_http_server)
  - a constructor function for Server
  - node makes these for us, so we're never gonna need to do new http.Server or new http.ServerResponse
-   [Class: `http.ServerResponse`](https://nodejs.org/dist/latest-v4.x/docs/api/http.html#http_class_http_serverresponse)
  - This is what you have before your data gets stringified into JSON
-   [`http.Server` Event: `'request'`](https://nodejs.org/dist/latest-v4.x/docs/api/http.html#http_event_request)
-   [`server.listen(path[, callback])`](https://nodejs.org/dist/latest-v4.x/docs/api/http.html#http_server_listen_path_callback)
-   [`server.listen(port[, hostname][, backlog][, callback])`](https://nodejs.org/dist/latest-v4.x/docs/api/http.html#http_server_listen_port_hostname_backlog_callback)

## Demo: A Node Echo Server

An echo server is a server that responds with all the information it received
during a request. It's a bit like "Hello, World!".

Let's run the echo server with `node lib/htpp-server.js`.
You should see `echo server listening`. Now make a request with `curl`:

```sh
curl --include --request GET \
  http://localhost:3000/people/?name=Jason&role=Awesome
```

Next, try this request:

```sh
curl --include --request POST http://localhost:3000/sign-in \
  --header "Content-Type: application/json" \
  --data "{
    \"credentials\": {
      \"email\": \"an@example.email\",
      \"password\": \"an example password\"
    }
  }"
```

## Annotate Along: Echo Server

Let's read the code in [`lib/http-server.js`](lib/http-server.js).
Our goal is to annotate the code as we try to understand what it is doing at a
 high level.
As we take notes, write questions you have along with your notes.

After we annotate a few lines together, you may continue annotating on your own.

## Read-Along: Examine a Promisified Server

Read the code in [`lib/http-server-promises.js`](lib/http-server-promises.js).
Compare it to the code in [`lib/http-server.js`](lib/http-server.js).
Annotate any questions you have **about promises**.

## Additional Resources

-   [Creating a HTTP Server in Node.js](http://www.sitepoint.com/creating-a-http-server-in-node-js/)
-   [Beginner’s Guide To Node.js (Server-side JavaScript) - Hongkiat](http://www.hongkiat.com/blog/node-js-server-side-javascript/)

## [License](LICENSE)

1.  All content is licensed under a CC­BY­NC­SA 4.0 license.
1.  All software code is licensed under GNU GPLv3. For commercial use or
    alternative licensing, please contact legal@ga.co.
