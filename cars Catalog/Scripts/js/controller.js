angular.module('app.controllers', []);

TodoApp.factory('Todo', function ($resource) {
    return $resource('/api/todo/:id', { id: '@id' }, { update: { method: 'PUT' } });
});

var ListCtrl = function ($scope, $location, Todo) {
    $scope.items = Todo.query();
    $scope.test = " I am Here with the datbase ";
};
var AppContrl = angular.module('AppContrl', []);
AppContrl.controller('MenuCntrl', [
    '$scope', '$http', function($scope, $http) {
        $scope.menulocation = ['/list', '/about', '/contact', '/details'];

    }]);