'use strict';

describe('orderList', function() {

  // Load the module that contains the `orderList` component before each test
  beforeEach(module('orderList'));

  // Test the controller
  describe('OrderListController', function() {
    var $httpBackend, ctrl;

    beforeEach(inject(function($componentController, _$httpBackend_) {
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('orders/orders.json')
                  .respond([{meal: 'Ugali'}, {meal: 'Chip'}]);

      ctrl = $componentController('orderList');
    }));

    it('should create a `orders` property with 2 orders fetched with `$http`', function() {
      jasmine.addCustomEqualityTester(angular.equals);

      expect(ctrl.orders).toEqual([]);

      $httpBackend.flush();
      expect(ctrl.orders).toEqual([{meal: 'Ugali'}, {meal: 'Chip'}]);
    });
    
  });

});
