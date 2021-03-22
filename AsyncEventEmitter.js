// Create un Event Emitter
const EventEmitter = require("events");

// Our own async event emitter
class AsyncCodeEmitter extends EventEmitter {
  // Class method that receives async code
  async execute(asyncCode) {
    console.log("BEFORE");
    // emit start event
    this.emit("start");
    // wait for aysnc code, but we could use promises or even a callback (Don't)
    await asyncCode();
    // Emit final events.
    this.emit("finish");
    this.emit("done");
    console.log("AFTER");
  }
}

const emitter = new AsyncCodeEmitter();

// LISTERNERS

emitter.on("start", () => console.log("STARTING"));
// We can subscribe twice, no restrisctions.
emitter.on("finish", () => console.log("Finishing"));
emitter.on("finish", () => console.log("Finishing 2"));

emitter.on("done", () => console.log("It's Done"));

function asyncFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Hello World");
      resolve();
    }, 1000);
  });
}

emitter.execute(asyncFunction);
