angular.module('ToDoApp').controller('ToDoController', function ($scope) {

    $scope.todos = [];

    $scope.newToDo = '';

    //Add's To Do to list
    $scope.AddToDo = function () {
        $scope.todos.push($scope.newToDo);

        $scope.newToDo = '';
    };



});