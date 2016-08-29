'use strict'

angular.module('main')
.controller('priceFormComponentCtrl', function($scope, $state, $api, $mdDialog, $mdMedia) {
    $scope.types = [];
    $scope.types.push("original price");
    $scope.types.push("price promotion");
    $scope.types.push("quantity promotion");
    $scope.type = $scope.types[0];

    $api.get("customer").then(function(d){
        $scope.customers = [];

        for(var i = 0; i < d.length; i++){
            $scope.customers.push(d[i].name);
        }

        $scope.customers.sort();
        $scope.customerName = $scope.customers[0];
    });

    $api.get("product").then(function(d){
        $scope.products = [];

        for(var i = 0; i < d.length; i++){
            $scope.products.push(d[i].id);
        }

        $scope.products.sort();
        $scope.productId = $scope.products[0];
    });

    $scope.save = function(){
        if($scope.quantity == undefined || $scope.price == undefined){
            return;
        }

        var object = {
            customerName: $scope.customerName,
            productId: $scope.productId,
            type: $scope.type,
            quantity: $scope.quantity,
            price: $scope.price
        }

        $api.put("price", object).then(function(d){
            $state.go('priceReport');
        }, function(d){
            alert("save error!");
        });
    }
});