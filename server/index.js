var server = require("./server");
var router = require("./router");

var stock = require("./requestHandlers/stock.js");
var view = require("./requestHandlers/view.js");
var api = require("./requestHandlers/api.js");
var login = require("./requestHandlers/login.js");

var handle = {};
handle["/login"] = login.handler;
handle["/root"] = stock.handler;
handle["/view"] = view.handler;
handle["/api"] = api.handler;

server.start(router.route, handle);