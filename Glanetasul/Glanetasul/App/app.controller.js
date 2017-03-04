(function () {
    'use strict';

    angular
        .module('app')
        .controller('MainCtrl', ["$scope", function ($scope) {
            $scope.model = {
                food: "pizza"
            }
            $scope.doSomething = function () {
                alert("afsafdsa");
            }
        }]);
})();
