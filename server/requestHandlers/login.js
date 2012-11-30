var fs = require('fs');

function handler(path, response) {
	
	 var loginPage = fs.readFileSync("C:\\users\\jkenoyer\\workspace\\editor\\taskit\\client\\views\\login.html").toString();
	
	 response.writeHead(200, {"Content-Type": "text/html"});
	  response.write(loginPage);
	  response.end();  
}

exports.handler = handler;