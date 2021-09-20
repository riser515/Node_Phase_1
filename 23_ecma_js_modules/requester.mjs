import { EventEmitter } from 'events';

class eventCall extends EventEmitter{
    
    eventRun(msg){
        console.log(msg);

        this.emit('code', msg);
    }
}

export {
    eventCall,
};