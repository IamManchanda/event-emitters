/**
 * Node.js - ES6+ Version
 */

const EventEmitter = require('events');

class Message extends EventEmitter {
  constructor() {
    super();
    this.name = 'Harry Manchanda';
    this.message = 'Hey Dude';
    this.showMessage = () => this.emit('showIt', `${this.message} ${this.name}`);
  }
}

const message = new Message();
message.on('showIt', (data) => console.log(data));
message.showMessage();
// => Hey Dude Harry Manchanda
