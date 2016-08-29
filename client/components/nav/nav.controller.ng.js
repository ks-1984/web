'use strict'

angular.module('main')
.controller('NavCtrl', function($scope, $state, $mdSidenav) {
    $scope.toggleSidenav = function() {
        if($state.current.name != "login"){
            return $mdSidenav('right').toggle();
        }
    };
});