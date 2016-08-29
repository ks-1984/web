'use strict'

require( 'datatables.net' )( window, $ );
var table;

angular.module('main')
.controller('SaleReportCtrl', function($scope, $state, $api) {
    $api.get("sale").then(function(d){
        var data = [];

        for(var i = 0; i < d.length; i++){
            var products = "";

            for(var j = 0; j < d[i].productIds.length; j++){
                if(products == ""){
                    products = d[i].productIds[j];
                }
                else{
                    products += ", " + d[i].productIds[j];
                }
            }

            data.push({
                id: d[i]._id,
                customer: d[i].customer,
                products: products,
                price: d[i].price
            });
        }

        $scope.$watch('datas', function() {
            $scope.$$postDigest(function(){
                initDatatable();
            });
        });

        $scope.datas = data;
    }, function(){
        initDatatable();
    });

    $scope.delete = function(id, index){
        $api.delete("sale", id);
        table.row(index).remove().draw(false);
    }
});

function initDatatable(){
    table = $('#saleList').DataTable({
        "stateSave": true,
        "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
        "iDisplayLength": 50,
        "order": [[ 0, 'asc' ]]
    });
    
    $('#saleList').removeClass("hidden");
    $('#saleList').addClass("show");
}
