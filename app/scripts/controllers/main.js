'use strict';

/**
 * @ngdoc function
 * @name myAngularAppApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the myAngularAppApp
 */
angular.module('myAngularAppApp')
  .controller('MainCtrl', function ($scope) {
    $scope.todos = ['Item 1', 'Item 2', 'Item 3'];
    $scope.addTodo = function(todo) {
    	$scope.todos.push(todo);
    	console.log('Hinzugefuegter todo: ' + todo);
    	$scope.todo ='';
        todo = "";
    }
    $scope.removeTodo = function(index) {
    	$scope.todos.splice(index, 1);
    }
});
