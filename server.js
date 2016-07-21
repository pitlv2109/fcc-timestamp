// Import Express framework
var express = require("express");	
// Create an Express instance
var app = express();	

// Handle request
app.use(function(request, response, next) {
	if (request.url === "/") { 
		next();
		console.log("Got a request");
	}	
	
	//TODO:
	// Handle route for the following formats
	// https://timestamp-ms.herokuapp.com/December%2015,%202015
	// https://timestamp-ms.herokuapp.com/December 15 2015
	// https://timestamp-ms.herokuapp.com/1450137600
	//
	// If route is correct, display in JSON format as
	// { "unix": 1450137600, "natural": "December 15, 2015" }
	//
	// Else { "unix": null, "natural": null}
	
	else {
		response.writeHead(404, {"Content-Type": "text/plain"});
		response.end("404, Page Not Found!");
	}
})

app.use(express.static("./public"));

app.listen(8080);

console.log("Server is running at 8080");


