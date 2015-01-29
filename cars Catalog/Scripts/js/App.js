var TodoApp = angular.module("TodoApp",
[
    'ngResource', 'ngRoute', 'app.controllers', 'AppContrl']).
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
