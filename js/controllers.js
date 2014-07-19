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

    if ($routeParams.itemId > 0){
      $scope.prevId = Number($routeParams.itemId) - 1; 
    }else{
      $scope.prevId = $scope.players.length - 1;
    }

    if ($routeParams.itemId < $scope.players.length - 1){
      $scope.nextId = Number($routeParams.itemId) + 1; 
    }else{
      $scope.nextId = 0;
    }
  });
}]);