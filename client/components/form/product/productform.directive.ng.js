'use strict'

angular.module('main')
.directive('productform', function($api) {
    return {
        restrict: 'AE',
        templateUrl: 'client/components/form/product/productform.view.html',
        controller: 'productFormComponentCtrl',
        replace: true
    };
});