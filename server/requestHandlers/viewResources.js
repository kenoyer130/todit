var fs = require('fs');
var settings = require("../settings.js");

function handler(path, response) {

    fs.readFile(settings.WORKING_DIRECTORY + 'views/'+path, 'utf8', function (err,data) {
        if (err)
            return console.log(err);

        if (/\.(css)$/.test(path))
            response.writeHead(200, {"Content-Type": "text/css"});
        else
            response.writeHead(200);

        response.write(data);
        response.end();
    });
}

exports.handler = handler;