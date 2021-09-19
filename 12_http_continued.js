const httpReq = require('http');

const req = httpReq.request('http://www.google.com', res => {
    // res.on('data', (data_obt) => {
    //     console.log(`Data obtained from Google \n ${data_obt}`);
    // })
    res.on('data', (data_obtained) => {
        console.log('Data obtained from Google \n', data_obtained);
    })
    // res.on('end', (end_received) => {
    //     console.log(`End Response is \n ${end_received}`);
    // })
    res.on('end', () => {
        console.log('No more data');
    })
})

req.end();