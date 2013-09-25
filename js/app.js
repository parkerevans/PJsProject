angular.module('pjs', [])
	.config(airlineRouter);

function airlineRouter ($routeProvider) {
		$routeProvider 
			.when('/', {templateUrl: 'partials/destinations.html', 
				controller: 'DestinationsCtrl'})
			.when('/flights', {template: '<h3>Flights</h3> {{airports | json}}', 
				controller: 'FlightsCtrl'})
			.when('/reservations', {template: '<h3>Your Reservations</h3>', 
				controller: 'ReservationsCtrl'})
			.when('/memberships', {template: '<h3>Memberships</h3>', 
				controller: 'MembershipsCtrl'})
			.when('/dailydeals', {template: '<h3>Daily Deals</h3>', 
				controller: 'DailydealsCtrl'})
			.when('/myaccount', {template: '<h3>My Account</h3>', 
				controller: 'MyaccountCtrl'})
			.when('/login', {template: '<h3>Login</h3>', 
				controller: 'LoginCtrl'});
}
