'use strict'

angular.module('main')
.config(function($stateProvider) {
  $stateProvider
  .state('customerForm', {
    url: '/customer/form',
    templateUrl: 'client/form/forms/customerForm.view.html'
  })
  .state('priceForm', {
    url: '/price/form',
    templateUrl: 'client/form/forms/priceForm.view.html'
  })
  .state('productForm', {
    url: '/product/form',
    templateUrl: 'client/form/forms/productForm.view.html'
  })
  .state('saleForm', {
    url: '/sale/form',
    templateUrl: 'client/form/forms/saleForm.view.html'
  });
});