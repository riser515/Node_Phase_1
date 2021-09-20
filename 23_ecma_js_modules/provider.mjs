import {eventCall} from './requester.mjs';

const eventCalls = new eventCall();

eventCalls.on('code', (msg) => {
    console.log(`Code event with message: ${msg}`);
});

eventCalls.eventRun("Python");