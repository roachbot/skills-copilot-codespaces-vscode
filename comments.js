// Create Web Server
// 1. Install NodeJS
// 2. Create a JS file
// 3. Create a web server
// 4. Run the server and output "Running at Port 3000"
// 5. Parse the URL and output the path and query string
// 6. If path is /hello and query string is name=xxx, then output "Hello xxx"

var http = require('http');
var url = require('url');

var server = http.createServer(function(req, res) {
    var path = url.parse(req.url).pathname;
    var query = url.parse(req.url, true).query;
    if (path === '/hello' && query.name) {
        res.end('Hello ' + query.name);
    } else {
        res.statusCode = 404;
        res.end();
    }
});

server.listen(3000);
console.log('Server is running at port 3000');