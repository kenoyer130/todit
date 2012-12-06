var fs = require('fs');
var settings = require('../settings')

function handler(path, response) {

    fs.readFile(settings.WORKING_DIRECTORY + path, 'utf8', function (err, content) {
        if (err)
            return console.log(err);
        response.write(content);
        response.end();
    });
};

exports.handler = handler;
