function route(handle, pathname, response) {

	var root = "/" + pathname.split('/')[1];

	console.log("About to route a request for " + root);
	if (typeof handle[root] === 'function') {
		handle[root](pathname, response);
	} else {
		console.log("No request handler found for " + root);
		response.writeHead(404, {
			"Content-Type" : "text/plain"
		});
		response.write("404 Not found");
		response.end();
	}
}

exports.route = route;
