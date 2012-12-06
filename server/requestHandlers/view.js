var fs = require('fs');
var settings = require('../settings')

var views = {};

function handler(path, response) {

    if (views.length == undefined)
        loadViews();

    fs.readFile(settings.WORKING_DIRECTORY + "/master.html", 'utf8', function (err, master) {
        if (err)
            return console.log(err);

        var page = master;

        var myregexp = /{(.*?)}/g;
        var view = myregexp.exec(master);

        while (view != null) {
            view = myregexp.exec(master);
            if (view == null)
                continue;

            var body = views[view[1] + ".html"];
            page = page.replace(view[0], body);
        }

        writeOutputFile(page, response);
    });
}

function loadViews() {
    var files = fs.readdirSync(settings.WORKING_DIRECTORY);

    for (i = 0; i < files.length; i++) {
        var file = files[i];
        if (file.match(".html$") && !file.match("master.html$"))
            views[file] = fs.readFileSync(settings.WORKING_DIRECTORY + "/" + files[i]);
    }
}

function writeOutputFile(body, response) {

    response.writeHead(200, {"Content-Type":"text/html"});
    response.write(body);
    response.end();
}

exports.handler = handler;