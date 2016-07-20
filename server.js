var express = require("express");
var app = express();

app.use(function(request, response) {
	if (request.url === "/") { 
		response.writeHead(200, {"Content-Type": "text/plain"});
		response.end("Hello World");
	}	
	else {
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.end("404, Page Not Found!");
	}
}).listen(8080);

console.log("Server is running at 8080");


