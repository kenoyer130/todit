var fs = require('fs');
var settings = require("../settings.js");

function handler(path, response) {

    fs.readFile(settings.WORKING_DIRECTORY + path, 'utf8',

        function (err, data) {
            if (err) {
                return console.log(err);
            }
            response.writeHead(200, {"Content-Type":"text/html"});
            response.write(data);
            response.end()
        });
}

exports.handler = handler;