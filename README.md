we can get readFileSync or writeFileSync by require('os), this will read or write a file synchronously which will block until some task done.

we can also get readFile or writeFile with require('fs), it will read or write file asynchronously which is non-blocking fucntions.

## Event Loop:

- The event loop is what allows the node js perfom non-blocking I/O operation despite the fact that JavaScript is single threaded, by offloading operation to system kernel whenever possible.
  ** offloading **. you can find more on nodejs.dev Event Loop
  node.js event loop video on youtube by bert belder, IBM

## Events Emistter:

The EventEmitter is a module that facilitates communication/interaction between objects in Node. EventEmitter is at the core of Node asynchronous event-driven architecture. Many of Node’s built-in modules inherit from EventEmitter including prominent frameworks like Express.js.

The concept is quite simple: emitter objects emit named events that cause previously registered listeners to be called. So, an emitter object basically has two main features:

- Emitting name events.
- Registering and unregistering listener functions.

## Streams:

Streams are a way to handle reading/writing files, network communications, or any kind of end-to-end information exchange in an efficient way.

What makes streams unique, is that instead of a program reading a file into memory all at once like in the traditional way, streams read chunks of data piece by piece, processing its content without keeping it all in memory.

This makes streams really powerful when working with large amounts of data, for example, a file size can be larger than your free memory space, making it impossible to read the whole file into the memory in order to process it. That’s where streams come to the rescue!
