var Application = Application || {}

Application.ShellController = function ($scope) {
    $scope.alertModel = {
        text: null,
        title: null
    };

    $scope.models = {
        locations: [
            { id: "1", Location: "UK Warehouse" },
            { id: "2", Location: "Asian Distribution" },
            { id: "3", Location: "US Fulfilment" },
        ]
    };

    $scope.selectedLocation = $scope.models.locations[0];

    $scope.changeLocation = function (loc) {
        $scope.selectedLocation = loc;
    }

    $scope.search = function () {
        $scope.alertModel.text = "Ai reusit sa te intregistrezi ca producator."
        $scope.alertModel.title = "Super!"
    }
}

Application.ShellController.$inject = ["$scope"];
Application.ShellController.$type = "ShellController";