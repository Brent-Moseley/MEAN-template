// public/js/controllers/NerdCtrl.js
app.controller('ItemController', ['itemService', function($scope, itemService) {

    $scope.tagline = 'Here are some items';
    $scope.items = itemService.get();

}]);