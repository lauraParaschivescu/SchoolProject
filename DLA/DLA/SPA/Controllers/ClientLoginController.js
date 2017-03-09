var Application = Application || {}

Application.ClientLoginController = function ($scope) {
    $scope.init = function () {
        $('[data-toggle="popover"]').popover();
    }
}

Application.ClientLoginController.$inject = ["$scope"];
Application.ClientLoginController.$type = "ClientLoginController";