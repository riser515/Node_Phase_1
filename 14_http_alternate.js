const {get} = require('http');

const req = get('http://www.google.com', res => {
    res.on('data', (data_obtained) => {
        console.log("Data obtained from Google \n", data_obtained);
    })
    res.on('end', () => {
        console.log("End of data reached");
    })
})

req.end();