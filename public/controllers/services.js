'use strict';

//custom controller for filling newsfeed with images
var sneakerdeckServices = angular.module('sneakerdeckServices',['ngResource']);

sneakerdeckServices.factory('Shoe',['$resource',
	function ($resource) {
		return $resource(':shoeId.json',{},{
			query:{method:'GET',params:{shoeId:'shoes'},isArray:true}
		});
	}]);