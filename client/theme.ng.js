'use strict'

angular.module('main')
.config(function($mdThemingProvider, $mdIconProvider) {
  $mdThemingProvider.theme('default')
  .primaryPalette('blue')
  .accentPalette('lime');
    
  $mdIconProvider
       .defaultFontSet( 'fontawesome' )
       .icon('menu', 'img/icons/menu.svg')
});