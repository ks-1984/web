'use strict'

angular.module('main')
.config(function($stateProvider) {
  $stateProvider
  .state('saleReport', {
    url: '/sale/report',
    templateUrl: 'client/report/sale/saleReport.view.html',
    controller: 'SaleReportCtrl'
  })
  .state('priceReport', {
    url: '/price/report',
    templateUrl: 'client/report/price/priceReport.view.html',
    controller: 'PriceReportCtrl'
  })
  .state('customerReport', {
    url: '/customer/report',
    templateUrl: 'client/report/customer/customerReport.view.html',
    controller: 'CustomerReportCtrl'
  })
  .state('productReport', {
    url: '/product/report',
    templateUrl: 'client/report/product/productReport.view.html',
    controller: 'ProductReportCtrl'
  });
});