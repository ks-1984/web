'use strict'

require( 'datatables.net' )( window, $ );
var table;

angular.module('main')
.controller('ProductReportCtrl', function($scope, $state, $api) {
    $api.get("product").then(function(d){
        $scope.$watch('datas', function() {
            $scope.$$postDigest(function(){
                initDatatable();
            });
        });

        $scope.datas = d;
    }, function(){
        initDatatable();
    });

    $scope.delete = function(id, index){
        $api.delete("product", id);
        table.row(index).remove().draw(false);
    }
});

function initDatatable(){
    table = $('#productList').DataTable({
        "stateSave": true,
        "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
        "iDisplayLength": 50,
        "order": [[ 0, 'asc' ]]
    });

    $('#productList').removeClass("hidden");
    $('#productList').addClass("show");
}
