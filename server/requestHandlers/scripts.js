var fs = require('fs');

function handler(path, response) {
	
	 var script = fs.readFileSync("C:\\users\\jkenoyer\\workspace\\editor\\taskit\\client"+path).toString();
	
	 response.writeHead(200, {"Content-Type": "text/html"});
	  response.write(script);
	  response.end();  
}

exports.handler = handler;