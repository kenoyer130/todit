var fs = require('fs');

function handler(path, response) {
 
  var master = fs.readFileSync("C:\\users\\jkenoyer\\workspace\\editor\\taskit\\client\\views\\master.html").toString();
	
  var body = "";
  
  if(path=="/")
	  body = fs.readFileSync("C:\\users\\jkenoyer\\workspace\\editor\\taskit\\client\\views\\index.html").toString();
  
  master = master.replace("{content}", body);
	
  response.writeHead(200, {"Content-Type": "text/html"});
  response.write(master);
  response.end();  
}

exports.handler = handler;