var TodoApp = angular.module("TodoApp",
        ['ngResource', 'ngRoute', 'app.controllers']).
    config(function ($routeProvider) {
        $routeProvider.
            when('/',
            {
                controller: ListCtrl,
                templateUrl: 'partials/list.html'
            }

            ).
            otherwise({ redirectTo: '/' });
    });
