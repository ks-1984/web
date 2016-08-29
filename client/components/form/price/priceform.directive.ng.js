'use strict'

angular.module('main')
.directive('priceform', function($api) {
    return {
        restrict: 'AE',
        templateUrl: 'client/components/form/price/priceform.view.html',
        controller: 'priceFormComponentCtrl',
        replace: true
    };
});