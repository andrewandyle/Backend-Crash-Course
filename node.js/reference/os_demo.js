const os = require('os');

// Platform (Windows, Mac, etc.)
// Prints out win32
console.log(os.platform());

// CPU architecture
// Prints out x64
console.log(os.arch());

// CPU core info
console.log(os.cpus());

// Free memory
console.log(os.freemem());

// Total memory
console.log(os.totalmem());

// Home directory
console.log(os.homedir());

// Uptime
console.log(os.uptime());
