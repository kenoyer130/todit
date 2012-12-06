var Cookies = require("Cookies");
var MongoClient = require('mongodb').MongoClient;

function execute(args, callback, request, response) {

    MongoClient.connect("mongodb://localhost:27017/test", function (err, db) {
        if (err)
            return console.dir(err);

        var account = db.collection('account');

        var count = account.find({ "login": args.login, "password": args.password }).toArray(function (err, items) {
            if (err)
                return console.dir(err);

            if (items != null && items.length == 1) {
                var cookies = new Cookies(request, response);
                cookies.set("site", "site", { httpOnly:false });
                callback();
            } else {
                callback("Invalid login");
            }
        });
    });
}

exports.execute = execute;