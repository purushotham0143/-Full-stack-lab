

/* 
first we will import the EventEmitter class and then 
we will create tthe instance of the EventEmitter(object)
with the method we will use the methods of the EventEmitter class 
the on method is one which takes event name and callback;
then the emit method takes m paramters one is necessary which is event name 
*/



// const EventEmitter = require('events')

// const event = new EventEmitter();

// event.on("message",() => {
//    console.log("My first event");
// });


// event.on("message",() => {
//    console.log("My second event");
// });

// event.emit("message");





//* Inbuilt class

// const EventEmitter = require('events')

// const event = new EventEmitter();

// event.on("message",(name) => {
//    console.log(name);
//    console.log("My first event");
// });


// event.on("message",() => {
//    console.log("My second event");
// });

// event.emit("message","rohan");






//* User class we are extending the 

// const EventEmitter = require('events')

// class Logger extends EventEmitter{
//    log(){
//       console.log("Class Logger log method run");
//       this.emit("myevent");
//    }
// }

// const obj = new Logger();
// // obj.log(); this will not load the event because the log method is loaded before

// obj.on("myevent",() => {
//    console.log("Event handled");
// })

// obj.log();
///********************************************Up to here Madam Notes 



const EventEmitter = require('events');   // This willl return one  Class
let time = "6 AM";
let name = "Puru";

class Logger extends EventEmitter {
    log() {
        this.emit("message", name, time);
    }
}

module.exports = Logger;
