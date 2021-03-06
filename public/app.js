'use strict';


angular.module('MyApp', ['ngCookies', 'ngResource', 'ngMessages', 'ngRoute', 'mgcrea.ngStrap', 'sneakerdeckServices'])
 .config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
 	/* each string in config array
 	is the name of the service to inject
 	for the corresponding parameter */


  	//enable HTML5 pushstate
  	/*locationProvider is a built in
  	AngularJs service for configuring application
  	linking paths.
  	*/
  	$locationProvider.html5Mode(true);

  	//Routes
  	$routeProvider
	  	.when('/', {
		    templateUrl: 'views/home.html',
		    controller: 'MainCtrl'
		  })
	  		.when('/merchants', {
		    templateUrl: 'views/merchants.html',
		    controller: 'MerchantCtrl'
		  })
		.when('/help', {
		    templateUrl: 'views/help.html',
		    controller: 'HelpCtrl'
		  })
		.when('/login', {
		    templateUrl: 'views/login.html',
		    controller: 'LoginCtrl'
		  })
		.when('/signup', {
		    templateUrl: 'views/signup.html',
		    controller: 'SignupCtrl'
		  })
		.when('/newsfeed', {
		    templateUrl: 'views/newsfeed.html',
		    controller: 'NewsfeedCtrl'
		  })
		.otherwise({
		    redirectTo: '/'
		  });
  }]);