const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url, req.method, req.headers);
    // exits event loop for the server:
    // process.exit();
});

server.listen(5000);