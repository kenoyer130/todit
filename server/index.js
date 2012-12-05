var server = require("./server");
var router = require("./router");
var login = require("./requestHandlers/login.js");
var view = require("./requestHandlers/view.js");
var scripts = require("./requestHandlers/scripts.js");
var viewResources = require("./requestHandlers/viewResources.js");
var api = require("./requestHandlers/api.js");
var settings = require("./settings.js");

var handle = {};
handle["/"] = view.handler;
handle["/login"] = login.handler;
handle["/scripts"] = scripts.handler;
handle["/api"] = api.handler;
handle["/viewResources"] = viewResources.handler;

process.chdir(settings.WORKING_DIRECTORY);

server.start(router.route, handle);