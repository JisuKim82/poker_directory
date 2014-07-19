var playerControllers = angular.module('playerControllers', []);

playerControllers.controller('ListController', ['$scope', '$http', function($scope, $http){
  $http.get('js/data.json').success(function(data){
    $scope.players = data;
  });
}]);