// public/js/services/NerdService.js
app.factory('itemService', ['$http', function($http) {

    return {
        // call to get all items
        get : function() {
            console.log ('in get');
            return $http.get('/api/items');
        },


        // these will work when more API routes are defined on the Node side of things
        // call to POST and create a new item
        create : function(itemData) {
            return $http.post('/api/items', itemData);
        },

        // call to DELETE an item
        delete : function(id) {
            return $http.delete('/api/items/' + id);
        }
    }       

}]);
