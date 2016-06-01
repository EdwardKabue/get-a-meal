angular.module('core.order').
	factory('Order',['$resource',
		function($resource){
			return $resource('orders/:orderId.json',{},{
				query:{
					method:'GET',
					params:{orderId: 'orders'},
					isArray: true
				}
			});
		}]);