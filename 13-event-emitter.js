const EventEmitter = require('events');

const customEmitter = new EventEmitter();

// in event two method are most used are "on => listen for an event", "emit => emit an event"

customEmitter.on('response', (name, id) => {
  console.log(`Data recieved user ${name} with id:${id}`);
});
customEmitter.on('response', () => {
  console.log(`some other logic`);
});

customEmitter.emit('response', 'Saman', 32);
