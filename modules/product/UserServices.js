
var baseUrl = 'http://127.0.0.1\\:3000';
angular.module('movieApp.services',[])

    .factory('ProductFactory', function ($resource) {
        return $resource(baseUrl + '/api/products/:category', {}, {
            query: { method: 'GET', isArray: true, params: {category: '@category'} },
            create: { method: 'POST', params: {company_id: '@company_id'} },
            remove: { method: 'DELETE' , params: {id: '@id'} },
            update: { method: 'PUT', params: {id: '@id'} }
       })

});