'use strict';
/* Controllers */
var atriumControllers = angular.module('atriumControllers', []);

atriumControllers.controller('ItemListCtrl', ['$scope', 'Item',
    function($scope, Phone) {
        $scope.items = Item.query();
       // $scope.orderProp = 'age';
    }]);

/*
atriumControllers.controller('PhoneDetailCtrl', ['$scope', '$routeParams', 'Phone',
    function($scope, $routeParams, Phone) {
        $scope.phone = Phone.get({phoneId: $routeParams.phoneId}, function(phone) {
            $scope.mainImageUrl = phone.images[0];
        });
        $scope.setImage = function(imageUrl) {
            $scope.mainImageUrl = imageUrl;
        }
    }]);*/
