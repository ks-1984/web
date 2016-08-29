'use strict'

angular.module('main')
.directive('saleform', function($api) {
    return {
        restrict: 'AE',
        templateUrl: 'client/components/form/sale/saleform.view.html',
        controller: 'saleFormComponentCtrl',
        replace: true
    };
});