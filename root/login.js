$(document).ready(function () {

    $("#btnLogin").button();
    $('#txtLogin').focus();

    $('#txtLogin, #txtPassword').keypress(function (e) {
        if (e.which == 13) {
            $("#btnLogin").focus();
            $("#btnLogin").click();
        }
    });

    ko.applyBindings(new LoginViewModel());
});


function LoginViewModel() {
    var self = this;

    self.login = "";
    self.password = "";

    self.loginClicked = function () {
        $.ajax("/api/validate", {
            data:ko.toJSON({ login:self.login, password:self.password }),
            type:"post", contentType:"application/json",
            success:function (result) {
                if (result.length > 0) {
                    alert(result)
                    $("#btnLogin").focus();
                } else {
                    window.location.replace("/");
                }
            }
        });
    };
}
