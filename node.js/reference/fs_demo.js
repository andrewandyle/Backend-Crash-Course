const fs = require('fs');
const path = require('path');

// Create folder
// First parameter: folder you want to create (include the path)
// Second parameter: options (we have none, so empty brackets)
// Third parameter: callback function
fs.mkdir(path.join(__dirname, '/test'), {}, err => {
  if(err) throw err;
  console.log('Folder created');
});

// Create and write to file
// First parameter: file to create
// Second parameter: content you want to write
// Third parameter: callback function
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
  if(err) throw err;
  console.log('File written to');
});

// A second call overrides the file content
fs.writeFile(path.join(__dirname, '/test', 'hello.txt'), 'Hello World!', err => {
  if(err) throw err;
  console.log('File written to');

  // File append
  fs.appendFile(path.join(__dirname, '/test', 'hello.txt'), ' I love Node.js!', err => {
    if(err) throw err;
    console.log('File appended to');
  });
});

// Read file
// Second parameter is the character encoding
// Not doing this will give you a raw buffer
fs.readFile(path.join(__dirname, '/test', 'hello.txt'), 'utf8', (err, data) => {
  if(err) throw err;
  console.log(data);
});

// Rename file
// Second parameter is the file name you're changing to
fs.rename(path.join(__dirname, '/test', 'hello.txt'), path.join(__dirname, '/test', 'helloworld.txt'), (err, data) => {
  if(err) throw err;
  console.log('File renamed');
});
