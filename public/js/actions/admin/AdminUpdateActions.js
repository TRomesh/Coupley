var AppDispatcher = require('../../dispatcher/AppDispatcher');
var RegisterConstants = require('../../constants/RegisterConstants');

var UpdateActions = {
    checks: function (credentials) {
        console.log(credentials);
        $.post('/admin-api/updateAdmin', credentials, function (data) {

            if (data.status === 200) {
                swal("Good job!", "Updated your profile", "success")
            }

            else {
                swal("Error","An account with the same email exists already", "error");
            }
        }).fail(function () {
            swal("Error","Something went wrong, Please try again later", "error");
        });

        document.location = "/cp-admin#/settings";
    }

};

module.exports = UpdateActions;