var url = require('url')

function route(handle, pathname, response, request) {

    var root;

    var path = url.parse(pathname, false, true)

    if ((path.pathname.match("\.js$") == ".js" || path.pathname.match("\.css$") == ".css") && path.pathname.indexOf("scripts") == -1)
        root = "/viewResources";
    else
        root = "/" + path.pathname.split('/')[1];

    console.log("About to route a request for " + root + " " + pathname);

    if (typeof handle[root] === 'function') {
        handle[root](pathname, response, request);
    } else {
        writeError(pathname, response);
    }
}

function writeError(root, response) {
    console.log("No request handler found for " + root);
    response.writeHead(404, {
        "Content-Type":"text/plain"
    });
    response.write("404 Not found");
    response.end();
}

exports.route = route;
