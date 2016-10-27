(function(angular, undefined) {

	'use strict';

	angular.module('megaStore').controller('ClientController', controller);

	controller.$inject = ['$routeParams', '$http', 'ClientService'];

	function controller($routeParams, $http, clientService) {
		/* jshint validthis: true */
		var vm = this;

		vm.initList = function() {  //O ideal era ter apenas um init, 
									//o initPersist deveria ficar no seu proprio controller, 
									//pois representa uma outra view

			vm.clients = [];

			clientService.getClients().success(function(data) {
				vm.clients = data;
			});
		};

		vm.initPersist = function() {

			vm.client = {};
		};

		vm.save = function(client) {

			clientService.save(client).success(function(data) {
				console.log(data);
			});
		};
	}

})(angular);