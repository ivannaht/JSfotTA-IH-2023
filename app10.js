// Home Work 10
console.log("Home Work 10");

// task 10.1
const os = require("os"); 
const path = require("path");
const http = require("http");

let systemInformation = `<h1>System information</h1>
<p>Current user name: ${os.userInfo().username}</p>
<p>OS type: ${os.type()}</p>
<p>System work time: ${(os.uptime() / 60).toFixed(2)} minutes</p>
<p>Current work directory: ${path.dirname(__filename)}</p>
<p>Server file name: ${path.basename(__filename)}</p>`

const server = http.createServer((request, response) => {
    const url = request.url;
    if (url === "/") {
        response.writeHead(200, {"content-type": "text/html"});
        response.end(systemInformation);
    } else {
        response.writeHead(404, {"content-type": "text/html"});
        response.end("<h1>Page Not Found<h1>");
    }    
});

server.listen(5000, () => {
    console.log("Server is listening port 5000")
});

// task 10.2
let greetingInfo = require("./personalmodule.js");
const server2 = http.createServer((request, response) => {
    const url = request.url;
    if (url === "/") {
        response.writeHead(200, {"content-type": "text/html"});
        response.end(greetingInfo);
    } else {
        response.writeHead(404, {"content-type": "text/html"});
        response.end("<h1>Page Not Found<h1>");
    }    
});

server2.listen(8000, () => {
    console.log("Server is listening port 8000");
});
