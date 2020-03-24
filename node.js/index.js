// // Previous code from person.js
// const Person = require('./person');
//
// const person1 = new Person('Andy Le', 20);
//
// person1.greeting();

// // Previous code for Logger example
// const Logger = require('./logger');
//
// const logger = new Logger();
//
// logger.on('message', (data) => console.log('Called listener', data));
//
// // Calls the listener and shows the data object (id and message)
// logger.log('Hello World');

const http = require('http');
const path = require('path');
const fs = require('fs');

const server = http.createServer((req, res) => {
  // // Initial examples for server
  // // Check for the home page
  // if (req.url === '/') {
  //   // Load the homepage
  //   fs.readFile(path.join(__dirname, 'public', 'index.html'), (err, content) => {
  //     if (err) throw err;
  //     res.writeHead(200, { 'Content-Type': 'text/html'});
  //     res.end(content);
  //   });
  // } else if (req.url === '/about') {
  //   // Load the about page
  //   fs.readFile(path.join(__dirname, 'public', 'about.html'), (err, content) => {
  //     if (err) throw err;
  //     res.writeHead(200, { 'Content-Type': 'text/html'});
  //     res.end(content);
  //   });
  // } else if (req.url === '/api/users') {
  //   // REST API example
  //   const users = [
  //     { name: 'Andy Le', age: 20 },
  //     { name: 'Andrew Le', age: 21 }
  //   ];
  //   res.writeHead(200, {'Content-Type': 'application/json'});
  //   res.end(JSON.stringify(users));
  // }

  // Build file path
  let filePath = path.join(__dirname, 'public', req.url === '/' ? 'index.html' : req.url);
  // Extension of file
  let extname = path.extname(filePath);
  // Initial content type
  let contentType = 'text/html';
  // Check the extension and then set content type
  switch(extname) {
    case '.js':
      contentType = 'text/javascript';
      break;
    case '.css':
      contentType = 'text/css';
      break;
    case '.json':
      contentType = 'application/json';
      break;
    case '.png':
      contentType = 'image/png';
      break;
    case '.jpg':
      contentType = 'image/jpg';
      break;
  }

  // Read file
  fs.readFile(filePath, (err, content) => {
    if (err) {
      if (err.code == 'ENOENT') {
        // Page not found
        fs.readFile(path.join(__dirname, 'public', '404.html'), (err, content) => {
          res.writeHead(200, { 'Content-Type': 'text/html'});
          res.end(content, 'utf8');
        });
      } else {
        // Other server error
        res.writeHead(500);
        res.end(`Server Error: ${err.code}`);
      }
    } else {
      // Success
      res.writeHead(200, { 'Content-Type': contentType});
      res.end(content, 'utf8');
    }
  });
});

// Check the environment variable for port, otherwise port is 5000
const PORT = process.env.PORT || 5000;

server.listen(PORT, () => console.log(`Server running on port ${PORT}`));
