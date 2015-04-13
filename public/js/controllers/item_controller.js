angular.module('ItemController', []).controller('ItemController', function($scope,Item) {

    $scope.items = Item.get();

});
