var http = require("http");
var url = require("url");
var login = require("./login");

function start(route, handle) {
	function onRequest(request, response) {

		var pathname = url.parse(request.url).pathname;

		if (!login.isLoggedIn(request, response) &&  pathname.indexOf("scripts")==-1)
			pathname = "/login";

		if (pathname.indexOf("favicon") > -1)
			return;

		console.log("Request for " + pathname + " received.");

		route(handle, pathname, response);
	}

	http.createServer(onRequest).listen(8888);
	console.log("Server has started.");
}

exports.start = start;