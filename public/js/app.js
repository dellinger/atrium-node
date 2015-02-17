"use strict";

var atriumApp = angular.module('phonecatApp', [
    'ngRoute',
    'atriumControllers'
]);

atriumApp.config(['$routeProvider',
    function($routeProvider) {
        $routeProvider.
            when('/', {
                templateUrl: 'partials/item-list.html',
                controller: 'ItemListCtrl'
            }).
            otherwise({
                redirectTo: '/'
            });
    }]);