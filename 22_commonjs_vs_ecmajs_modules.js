/* Common JS Modules involve statements like:
const name = require('xxxx.js');
*/ 

/* ECMA JS Modules involve statements like:
import {name} from './xxxx.mjs';
*/

// Hence, one needs to have a file with extension '.mjs' in place of that having normal extension '.js',
//in order to follow ECMA.

// To verify the abpve mentioned facts, run the lines given below:

import {eventCall} from '../Phase_1/21_call_event_from_module/requester';

const eventCall = new eventCalls();

eventCall.on('code', (msg) => {
    console.log(`Code event with message: ${msg}`);
});

eventCall.eventRun("Python");

// The output must be:
// Warning: To load an ES module, set "type": "module" in the package.json or use the .mjs extension.