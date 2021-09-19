function encrypt(data){
    var encryptedStr = '';
    for (let i = 0; i < data.length; i++){
        if (i < data.length - 1){
            encryptedStr += data.charCodeAt(i) + 21;
            encryptedStr += 'x';
        }
        else{
            encryptedStr += data.charCodeAt(i) + 21;
        }
    }
    return encryptedStr;
}

function send(url, data){
    const encData = encrypt(data);
    console.log(`Sending ${encData} to ${url}`);
    return encData;
}

module.exports = {
    send
};