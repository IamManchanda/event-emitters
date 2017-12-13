/**
 * Node.js
 */

const EventEmitter = require('events');

class MyEmitter extends EventEmitter {}

const myEmitter = new MyEmitter();

const ringBell = () => {
  console.log('ring ring ring');
};

myEmitter.on('guestHere', ringBell);
myEmitter.emit('guestHere');

