'use strict'

angular.module('main')
.directive('customerform', function($api) {
    return {
        restrict: 'AE',
        templateUrl: 'client/components/form/customer/customerform.view.html',
        controller: 'customerFormComponentCtrl',
        replace: true
    };
});