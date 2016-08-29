'use strict'

angular.module('main')
.directive('sidebar', function($api) {
    return {
        restrict: 'AE',
        templateUrl: 'client/components/sidebar/sidebar.view.html',
        controller: 'SidebarCtrl',
        replace: true
    };
});