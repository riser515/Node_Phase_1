const eventCalls = require('./requester');

const eventCall = new eventCalls();

eventCall.on('code', (msg) => {
    console.log(`Code event with message: ${msg}`);
});

eventCall.eventRun("Python");