var fs = require('fs');
var settings = require("../settings.js");
var http = require('http');
var validate = require("../api/validate");

var api = {};

function handler(path, response, request) {

    if (api.length == undefined)
        loadApi();

    if (request.method == 'POST') {
        console.log("[200] " + request.method + " to " + request.url);

        var responseString = '';

        request.on('data', function (chunk) {
            responseString += chunk;
        });

        request.on('end', function () {
            if (responseString.length > 0)
                var args = JSON.parse(responseString);

            var root = path.replace('/api', '');

            // find out what api we are trying to call
            if (typeof api[root] === 'function') {
                var jsonResponse = api[root](args, function(jsonResponse){
                    if(jsonResponse != undefined)
                        response.write(jsonResponse);
                    response.end();
                }, request, response);

            } else {
                response.write("api method " + root + " not found");
                response.end();
            }
        });
    }
}

function loadApi() {
    api["/validate"] = validate.execute;
}

exports.handler = handler;
