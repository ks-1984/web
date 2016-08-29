'use strict'

angular.module('main')
.controller('productFormComponentCtrl', function($scope, $state, $api, $mdDialog, $mdMedia) {
    $scope.save = function(){
        if($scope.id == undefined || $scope.name == undefined){
            return;
        }

        var object = {
            id: $scope.id,
            name: $scope.name
        }

        $api.put("product", object).then(function(d){
            $state.go('productReport');
        }, function(d){
            alert("save error!");
        });
    }
});