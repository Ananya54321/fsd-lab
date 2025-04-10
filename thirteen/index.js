const events = require("events");

const eventEmitter = new events.EventEmitter();
const sampleEvent = function (message) {
  console.log(message);
};

eventEmitter.on("myEvent", sampleEvent);
eventEmitter.emit("myEvent", "Event emitted");
