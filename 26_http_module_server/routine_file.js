const http = require('http');
const name = process.argv[2];
const server = http.createServer((req, res) => {
    if(req.url === '/'){
        res.write('Hello Node');
        res.end();
    }

    if(req.url === '/api/node'){
        res.write(JSON.stringify(["Python", "JS", "SQL", "JAVA"]));
        res.end();
    }

    if(req.url === `/api/${name}`){
        res.write(`Hello ${name}`);
        res.end();
    }
});
// console.log(server);

server.on('connection', (socket) => {
    console.log("Connected...");
    // console.log("Connected...", socket);
});

server.listen(9000);

console.log("Server on port 9000");