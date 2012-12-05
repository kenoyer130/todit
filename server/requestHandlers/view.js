var fs = require('fs');
var settings = require('../settings')

function handler(path, response) {

    fs.readFile(settings.WORKING_DIRECTORY + "/views/master.html", 'utf8', function (err, master) {
        if (err)
            return console.log(err);

        var body = "";

        if (path == "/")
            path = "/index.html";

        fs.readFile(settings.WORKING_DIRECTORY + "/views" + path, 'utf8', function (err, data) {
            if (err)
                return console.log(err);

            writeOutputFile(master, data, response);
        });
    });
}

function writeOutputFile(master, data, response) {

    var body = master.replace('{content}', data);

    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(body);
    response.end();
}

exports.handler = handler;