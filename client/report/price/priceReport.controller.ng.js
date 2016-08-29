'use strict'

var dateFormat = require('dateformat');
require( 'datatables.net' )( window, $ );
var table;

angular.module('main')
.controller('PriceReportCtrl', function($scope, $state, $api) {
    $api.get("price").then(function(d){
        var data = [];

        for(var i = 0; i < d.length; i++){
            var date = new Date(d[i].createdDate);
            var month = addZero(date.getMonth() + 1);
            var day = addZero(date.getDate());
            var h = addZero(date.getHours());
            var m = addZero(date.getMinutes());
            var s = addZero(date.getSeconds());

            data.push({
                id: d[i]._id,
                customerName: d[i].customerName,
                productId: d[i].productId,
                type: d[i].type,
                quantity: d[i].quantity,
                price: d[i].price,
                date: date.getFullYear() + "-" + month + "-" + day + " " + h + ":" + m + ":" + s
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
        $api.delete("price", id);
        table.row(index).remove().draw(false);
    }
});

function initDatatable(){
    table = $('#priceList').DataTable({
        "stateSave": true,
        "lengthMenu": [[10, 25, 50, 100, -1], [10, 25, 50, 100, "All"]],
        "iDisplayLength": 50,
        "order": [[ 0, 'asc' ]]
    });

    $('#priceList').removeClass("hidden");
    $('#priceList').addClass("show");
}

function addZero(i) {
    if (i < 10) {
        i = "0" + i;
    }
    return i;
}

