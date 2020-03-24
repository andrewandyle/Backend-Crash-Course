const EventEmitter = require('events');

// Create emitter class
class MyEmitter extends EventEmitter { }

// Init object
const myEmitter = new MyEmitter();

// Event listener
// Second parameter is a callback
myEmitter.on('event', () => console.log('Event fired'));

// Init event
myEmitter.emit('event');
