'use strict'

var dateFormat = require('dateformat');

angular.module('main')
.controller('saleFormComponentCtrl', function($scope, $state, $api, $mdDialog, $mdMedia) {
    $api.get("customer").then(function(d){
        $scope.customers = [];

        for(var i = 0; i < d.length; i++){
            if(d[i].name != "default"){
                $scope.customers.push(d[i].name);
            }
        }

        $scope.customers.sort();
        $scope.customerName = $scope.customers[0];
    });

    $api.get("product").then(function(d){
        $scope.products = [];

        for(var i = 0; i < d.length; i++){
            $scope.products.push({
                id: d[i].id,
                name: d[i].name
            });
        }
    });

    $scope.save = function(ev){
        if($scope.productList.length == 0){
            $mdDialog.show(
              $mdDialog.alert()
                .parent(angular.element(document.body))
                .clickOutsideToClose(true)
                .title('Products cannot be empty')
                .textContent('Please select at least a product for the customer.')
                .ariaLabel('Error Message')
                .ok('Got it!')
                .targetEvent(ev)
            );
        }
        else{
            var products = $scope.getProducts();

            var object = {
                customer: $scope.customerName,
                productIds: products,
                price: $scope.price
            }

            $api.put("sale", object).then(function(d){
                $state.go('saleReport');
            }, function(d){
                alert("save error!");
            });
        }
    }

    var count = 0;
    $scope.addProduct = function(id){
        $scope.productList.push({
            id: count++,
            name: id
        });

        $scope.calculatePrice();
    }

    $scope.remove = function(){
        $scope.calculatePrice();
    }

    $scope.calculatePrice = function(){
        var products = $scope.getProducts();

        $api.post("price/calculation", {
            customerName: $scope.customerName,
            products: products
        }).then(function(price){
            $scope.price = parseFloat(price);
        });
    }

    $scope.getProducts = function(){
        var products = [];
        for(var i = 0; i < $scope.productList.length; i++){
            products.push($scope.productList[i].name);
        }
        return products;
    }
});