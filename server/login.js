var Cookies = require("Cookies");

function isLoggedIn(request, response) {
	var cookies = new Cookies(request, response);	
	return (cookies.get("site") == 'undefined');
}

exports.isLoggedIn = isLoggedIn;