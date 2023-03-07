const http = require('http');
const filesys = require('fs');

const server = http.createServer((req, res) => {
    // parse the url
    const url = req.url;
    // parse the method
    const method = req.method;
    // add condition that executes only when the url is both a string and has a specific value
    if (url === '/') {
        res.write('<html>');
        res.write('<head><title>Submit Message</title><head>');
        // add a form with text inputs and a submit button
        res.write('<body><form action="/message" method="POST"><input type="text" name="message"><button type="submit">Send</button></body>');
        res.write('<html>');
        // add return to exit from this set of functions
        return res.end();
    }
    // add new condition to parse the url 'message' but only if it is a POST request
    if (url === '/message' && method === 'POST') {
        // create a new file and store the message
        filesys.writeFileSync('form.txt', 'Dummy text');
        // add return to exit from function and redirect back to /
        res.statusCode = 302;
        res.setHeader('Location', '/');
        return res.end();
    }
    res.setHeader('Content-Type', 'text/html');
    res.write('<html>');
    res.write('<head><title>My First Page</title><head>');
    res.write('<body><h1>Hello from my Node.js Server!!</h1></body>');
    res.write('<html>');
    res.end();
});

server.listen(5000);