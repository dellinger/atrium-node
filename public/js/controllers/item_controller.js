angular.module('ItemController', []).controller('ItemController', function($scope,Item) {

    $scope.items = Item.get.
        success(function(data){
            $scope.items = data;
            console.log("Retrieve " + scope.items.length + " items");
    }).
        error(function(data, status, headers, config) {
            console.log("Error");
        });;
});
