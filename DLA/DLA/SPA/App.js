var Application = (function () {
    Application.initialize = function () {
        angular.module("SPA.App", ["ui.router"])
            .controller(Application.ShellController.$type, Application.ShellController)
            .controller(Application.DashboardController.$type, Application.DashboardController)
            .controller(Application.ClientLoginController.$type, Application.ClientLoginController)

        .config(["$stateProvider", "$urlRouterProvider", "$httpProvider", function ($stateProvider, $urlRouterProvider, $httpProvider) {
            $stateProvider
                .state("shell", {
                    cache: false,
                    abstract: true,
                    views: {
                        "Shell-Root": {
                            templateUrl: "SPA/Views/Shell.html",
                            controller: Application.ShellController.$type
                        }
                    }
                })
                .state("shell.dashBoard", {
                    cache: false,
                    url: "/",
                    views: {
                        "Shell-Body": {
                            templateUrl: "SPA/Views/Dashboard.html",
                            controller: Application.DashboardController.$type
                        }
                    }
                })
                .state("shell.clientLoginPage", {
                    cache: false,
                    url: "/clientPage",
                    views: {
                        "Shell-Body": {
                            templateUrl: "SPA/Views/ClientLogin.html",
                            controller: Application.ClientLoginController.$type
                        }
                    }
                });

            $urlRouterProvider.otherwise("/");
        }]);
    }

    return Application;
})();