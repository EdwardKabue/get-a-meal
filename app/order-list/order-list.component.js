angular.module('orderList').
	component('orderList',{
		templateUrl:'order-list/order-list.template.html',
		controller: ['Order', function OrderListController(Order){
			var self = this;
			self.orders = Order.query();

			self.getActive = function getActive(order){
				if(order.delivered === false){
					return true;
				}
			};

			self.getHistory = function getHistory(order){
				if(order.delivered === true){
					return true;
				}
			};
			//Attributes and functions that hide the lists of active and archived orders
			self.showActive = false;
			self.showHistory = false;

			self.showHistoryFunc = function showHistoryFunc(){
				self.showHistory = !self.showHistory;
			};

			self.showActiveFunc = function showActiveFunc(){
				self.showActive = !self.showActive;
			};

			//Attributes and functions that hide the ldetails of active and archived orders
			self.showActiveDetails = false;
			self.showHistoryDetails = false;

			self.activeDetails = function activeDetails(){
				self.showActiveDetails = !self.showActiveDetails;				
			};

			self.historyDetails = function historyDetails(){
				self.showHistoryDetails = !self.showHistoryDetails;
			};

			//Default values for the user entries
			self.mealName = "";
			self.mealPrice = 0;
			self.restaurant = "";
			self.finalised = false;
			self.delivered = false;
			self.ordered = true;

			//A function that stores an entry
			self.saveData = function saveData(){
				var userOrder = new Order();
				userOrder.restaurant = self.restaurant;
				newCard.$save();
			};
		}]
	});