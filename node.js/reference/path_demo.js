const path = require('path');

// basename - gives us ONLY the file name
console.log(path.basename(__filename));

// dirname - gives us only the directory name
console.log(path.dirname(__filename));

// extname - gives us the file extension
console.log(path.extname(__filename));

// Create path object using parse method
console.log(path.parse(__filename));

// join - concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));
