var server = require("./server");
var router = require("./router");
var login = require("./requestHandlers/login.js");
var view = require("./requestHandlers/view.js");
var scripts = require("./requestHandlers/scripts.js");

var handle = {};
handle["/"] = view.handler;
handle["/login"] = login.handler;
handle["/scripts"] = scripts.handler;

server.start(router.route, handle);