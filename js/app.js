var app = angular.module('myApp', []);

app.controller('MyController', ['$scope', '$http', function($scope, $http){
  $http.get('js/data.json').success(function(data){
    $scope.players = data;
  });
}]);