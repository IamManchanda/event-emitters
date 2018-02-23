/**
 * Node.js
 */

const events = require('events');
const eventEmitter = new events.EventEmitter();

// Questions
eventEmitter.on('guestHere', () => {
  console.log('ring ring ring');
});

eventEmitter.on('guestHere', () => {
  console.log(`Hello who's there`);
});

// Answers 
eventEmitter.on('guestHere', (action) => {
  console.log(action);
});

eventEmitter.emit('guestHere', 'Its me your guest');
