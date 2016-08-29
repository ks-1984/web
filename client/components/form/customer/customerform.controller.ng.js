'use strict'

angular.module('main')
.controller('customerFormComponentCtrl', function($scope, $state, $api, $mdDialog, $mdMedia) {
    $scope.save = function(){
        if($scope.name == undefined){
            return;
        }

        var object = {
            name: $scope.name
        }

        $api.put("customer", object).then(function(d){
            $state.go('customerReport');
        }, function(d){
            alert("save error!");
        });
    }
});