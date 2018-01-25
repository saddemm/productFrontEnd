
var app = angular.module('movieApp.controllers',[])
    .controller('ProductController', function($scope, $stateParams, ProductFactory) {

   $scope.products=ProductFactory.query();

    });

