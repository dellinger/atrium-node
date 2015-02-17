"use strict";

var atriumServices = angular.module('atriumServices', ['ngResource']);

atriumServices.factory("Item", ['$resource',
    function($resource){
        return $resource('localhost:3000/items',{}, {
            query: {method: 'GET', isArray: true}
        });
    }
]);