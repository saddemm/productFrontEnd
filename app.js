/**
 * Created by Sandeep on 01/06/14.
 */

angular.module('movieApp',['ui.router','ngResource','angularModalService','ngSanitize','movieApp.controllers','movieApp.services'])
    .run(function($state){
   $state.go('product');
});

