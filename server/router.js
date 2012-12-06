var url = require('url')

function route(handle, pathname, response, request) {

    var root = "/";

    if (pathname.match(".html$") || pathname == "/")
        root = "/view";
    else if (pathname.match("^/api/"))
        root = "/api";
    else if (pathname.match("^/login$"))
        root = "/login"
    else
        root = "/root"

    if (pathname == "/")
        pathname = "/index.html";

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
