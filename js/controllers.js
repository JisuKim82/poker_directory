var playerControllers = angular.module('playerControllers', []);

playerControllers.controller('ListController', ['$scope', '$http', function($scope, $http){
  $http.get('js/data.json').success(function(data){
    $scope.players = data;
  });
}]);

playerControllers.controller('DetailsController', ['$scope', '$http', '$routeParams', function($scope, $http, $routeParams){
  $http.get('js/data.json').success(function(data){
    $scope.players = data;
    $scope.whichPlayer = $routeParams.itemId;
  });
}]);