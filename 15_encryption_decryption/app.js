const {send} = require('./request');
const {read} = require('./response');

function makeRequest(url, data){
    const encData = send(url, data);
    return read(url, encData);
}

makeRequest('www.google.com', 'Khushi');