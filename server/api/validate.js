var Cookies = require("Cookies");
var MongoClient = require('mongodb').MongoClient;

function execute(args, callback, request, response) {

    MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
        if (err) {
            return console.dir(err);
        }

        var accounts = db.collection('account');

        var count = accounts.find({ "login":args.login, "password":args.password}).toArray(function (items) {
            if (items != null) {
                var cookies = new Cookies(request, response);
                cookies.set("site", "site", { httpOnly:false });
                callback();
            }
        });
    });

    callback("Invalid login");
}

exports.execute = execute;