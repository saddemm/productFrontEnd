
angular.module('movieApp').config(function($stateProvider,$httpProvider){
    $stateProvider.state('product',{
        url:'/product',
        templateUrl:'modules/product/dashboard.html',
        controller:'ProductController'
    });
});