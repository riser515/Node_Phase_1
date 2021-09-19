function decrypt(data){
    var decryptedStr = '';
    var generatedArray = data.split('x');
    for (let i=0; i < generatedArray.length; i++){
        decryptedStr += String.fromCharCode(generatedArray[i] - 21);
    }
    return decryptedStr;
}

function read(url, data){
    const decData = decrypt(data);
    console.log(`Decrypted data ${decData} from ${url}`);
}

module.exports = {
    read
};