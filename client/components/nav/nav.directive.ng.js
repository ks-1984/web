'use strict'

angular.module('main')
.directive('nav', function($api) {
    return {
        restrict: 'AE',
        templateUrl: 'client/components/nav/nav.view.html',
        controller: 'NavCtrl',
        replace: true
    };
});