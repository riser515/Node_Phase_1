const whatever = require('events');
// Conventionally, we use EventEmitter in place of whatever.
/* Remember: 
whatever => variable name, given by us, to refer to the required module;
{whatever} => Referring to use the function named whatever, present inside the required module.
*/
console.log(whatever);
/* NOTE:
Whatever you assign the importing filename, instead of 'whatever', it's always the EventEmitter class 
that gets accessed from the 'events' module! 
*/
console.log("******************************************");
// To access any class, we always require an object of that class. Hence, we use emitter object, as below:

const eventObj = new whatever();
// Conventionally, we use emitter in place of eventObj.
// emitter.emit('code');   // Calls don't work before definitions! Do they?

eventObj.on('code', function() {
    console.log("Event invoked");
})

eventObj.emit('code');

console.log("******************************************");

eventObj.on('temp', function(arg){
    console.log("Event with Function 1", arg);
})

eventObj.emit('temp', {temp: 98, unit: 'F'});

console.log("******************************************");

// Directly using arrow function instead of the above method: 
eventObj.on('data', (arg) => {
    console.log("Event with Function 2", arg);
})

eventObj.emit('data', {temp: 98, unit: 'F'});