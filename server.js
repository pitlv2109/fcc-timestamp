// Import Express framework
var express = require("express");

// Import file system
var fs = require("fs");

// Create an Express instance
var app = express();	

var nullJSON = {
	unix: null,
	natural: null
}

var dateJSON = {
	unix: "",
	natural: ""
}

// Handle request
app.use(function(request, response) {
	// Handle homepage request
	// Show usage and example by public/index.html
	if (request.url === "/") { 
		var stream = fs.createReadStream("./public/index.html");
		stream.pipe(response);
		console.log("Got a request to the home page");
		
	}	
	
	else {
		
		var route = request.url.substring(1, request.url.length);
		var date;
		
		// If route is a number
		if (!isNaN(route)) {
			date = new Date(parseInt(route));
			dateJSON.unix = parseInt(route);
		}
		
		// If route is a string
		else {
			route = route.replace("%20", " ");
			date = new Date(route);
			// Convert to unix format
			dateJSON.unix = date.getTime();
		}
		
		// Handle date request
		// Respond with a JSON format date
		if (date.toString() !== "Invalid Date") {
			dateJSON.natural = date.toString().substring(4, date.toString().length - 24);
			response.json(dateJSON);
			console.log("Got a request to show a date");
		}
		
		// Invalid route
		// Respond with a null JSON format date
		else {
			response.json(nullJSON);
			console.log("Invalid route");
		}
	}
})

app.listen(8080);

console.log("Server is running at 8080");


