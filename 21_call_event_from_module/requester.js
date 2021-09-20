const EventEmitter = require('events');

class eventCall extends EventEmitter{
    
    eventRun(msg){
        console.log(msg);

        this.emit('code', msg);
    }
}

module.exports = eventCall;