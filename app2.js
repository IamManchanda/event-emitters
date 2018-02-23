/**
 * Node.js - ES5 Version
 */

var EventEmitter = require('events');
var util = require('util');

function Message() {
  this.name = 'Harry Manchanda';
  this.message = 'Hey Dude';
}

util.inherits(Message, EventEmitter)

Message.prototype.showMessage = function() {
  this.emit('showIt', this.message + ' ' + this.name);
}

var message = new Message();

message.on('showIt', function(data) {
  console.log(data);
});

message.showMessage();
// => Hey Dude Harry Manchanda