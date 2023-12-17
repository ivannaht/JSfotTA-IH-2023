// Home Work 11
console.log("Home Work 11");

// task 11.1
const os = require("os"); 
const path = require("path");
const http = require("http");

let htmlElements = `<button type="submit" id="btn-vote">Vote!</button>`

const server = http.createServer((request, response) => {
    const url = request.url;
    if (url === "/") {
        response.writeHead(200, {"content-type": "text/html"});
        response.end(htmlElements);
    } else {
        response.writeHead(404, {"content-type": "text/html"});
        response.end("<h1>Page Not Found<h1>");
    }    
});

server.listen(5000, () => {
    console.log("Server is listening port 5000")
});
