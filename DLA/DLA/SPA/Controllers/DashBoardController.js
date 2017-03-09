var Application = Application || {}

Application.DashboardController = function ($scope, $state) {
    $scope.goToClientLoginPage = function () {
        $state.go("shell.clientLoginPage");
    }
}

Application.DashboardController.$inject = ["$scope", "$state"];
Application.DashboardController.$type = "DashboardController";