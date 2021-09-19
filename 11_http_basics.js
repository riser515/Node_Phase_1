const httpReq = require('http');

const req = httpReq.request('http://www.google.com', res => {
    return res;
})
// const req = httpReq.request('https://www.google.com', res => {
//     return res;
// })
// The above code would throw an error. To mitigate this, one should use "require('http')"

req.end();  // Not using this and trying to re-run the program, will result in "Code is already running!".
console.log(req);