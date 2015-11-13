require('angular');
var infLib = require('infinite-library');

angular.module('app')
       .controller('SearchController', SearchController)

function SearchController(){
    var vm = this;
    vm.query = "";
    vm.runQuery = runQuery;
    vm.submitId = submitId;

    function runQuery(){
        return null
    }

    function submitId(){
        return null
    }
}
