angular.
  module('getmealApp').
  config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
      $locationProvider.hashPrefix('!');

      $routeProvider.
        when('/orders', {
          template: '<order-list></order-list>'
        }).
        otherwise('/orders');
    }
  ]);
