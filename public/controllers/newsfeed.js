'use strict';
// Login comntroller for our view
angular.module('MyApp')
  .controller('NewsfeedCtrl', ['$scope', 'Shoe',  function($scope,Shoe) {
		$scope.shoes = Shoe.query();
		$scope.orderProp = 'age';  		
  }]);