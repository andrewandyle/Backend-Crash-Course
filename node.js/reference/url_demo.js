const url = require('url');

// Instantiate
const myUrl = new URL('http://mywebsite.com:8000/hello.html?id=100&status=active');

// Serialized URL - get the straight up url
// toString() gives the same thing
console.log(myUrl.href);

// Host (root domain)
console.log(myUrl.host);
// Host name - doesn't include the port (8000)
console.log(myUrl.hostname);

// Path name
console.log(myUrl.pathname);

// Serialized query (everything after the ?)
console.log(myUrl.search);

// Params object
console.log(myUrl.searchParams);

// Add param
myUrl.searchParams.append('abc', '123');
console.log(myUrl.searchParams);

// Loop through params
myUrl.searchParams.forEach((value, name) => console.log(`${name}: ${value}`));
