'use strict';

describe('Order', function() {
  var $httpBackend;
  var Order;
  var ordersData = [
    {name: 'Order X'},
    {name: 'Order Y'},
    {name: 'Order Z'}
  ];

  // Add a custom equality tester before each test
  beforeEach(function() {
    jasmine.addCustomEqualityTester(angular.equals);
  });

  // Load the module that contains the `order` service before each test
  beforeEach(module('core.order'));

  // Instantiate the service and "train" `$httpBackend` before each test
  beforeEach(inject(function(_$httpBackend_, _Order_) {
    $httpBackend = _$httpBackend_;
    $httpBackend.expectGET('orders/orders.json').respond(ordersData);

    Order = _Order_;
  }));

  // Verify that there are no outstanding expectations or requests after each test
  afterEach(function () {
    $httpBackend.verifyNoOutstandingExpectation();
    $httpBackend.verifyNoOutstandingRequest();
  });

  it('should fetch the orders data from `/orders/orders.json`', function() {
    var orders = Order.query();

    expect(orders).toEqual([]);

    $httpBackend.flush();
    expect(orders).toEqual(ordersData);
  });

});
