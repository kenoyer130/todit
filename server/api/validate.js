var Cookies = require("Cookies");

function execute(args, callback, request,response) {

    if(args.login=="kenoyer130" && args.password=="!!"){
        var cookies = new Cookies(request, response);
        cookies.set("site","site",{ httpOnly: false });
        callback();
    }

    callback("Invalid login");
}

exports.execute = execute;