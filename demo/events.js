const EventEmitter = require("events");

// const emitter = new EventEmitter();

// emitter.on("anything", function(data) {
//   console.log("ON: anything", data);
// });

// setTimeout(() => {
//   emitter.emit("anything", { c: 3 });
//   console.log("time: ", new Date().toJSON());
// }, 1500);

// emitter.emit("anything", { a: 1 });
// emitter.emit("anything", { b: 2 });
// console.log("time: ", new Date().toJSON());

class Dispather extends EventEmitter {
  subscribe(eventName, cb) {
    console.log("[Subscribe...]");
    this.on(eventName, cb);
  }

  dispatch(eventName, data) {
    console.log("[Dispatching...]");
    this.emit(eventName, data);
  }
}

const dis = new Dispather();

dis.subscribe("aa", data => {
  console.log("ON aa: ", data);
});

dis.dispatch("aa", { aa: 123 });
