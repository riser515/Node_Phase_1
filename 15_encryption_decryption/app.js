function makeRequest(url, msg){
    request.send(url, msg)
    return response.read();
}