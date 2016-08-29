'use strict'

angular.module('main', [
  'angular-meteor',
  'ui.router',
  'ngMaterial',
  'ngMessages',    
  'api.service'
]);

var onReady = function() {
  angular.bootstrap(document, ['main']);
};
  
if(Meteor.isCordova) {
  angular.element(document).on('deviceready', onReady);
} else {
  angular.element(document).ready(onReady);
}