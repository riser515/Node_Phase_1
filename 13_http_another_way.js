const {request} = require('http');

const req = request('http://www.google.com', res => {
    res.on('data', (data_obtained) => {
        console.log("Data obtained from Google is \n", data_obtained);
    })
    res.on('end', () => {
        console.log("No more data");
    })
})

req.end();