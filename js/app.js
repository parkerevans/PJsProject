angular.module('pjs', [])
	.config(airlineRouter);

function airlineRouter ($routeProvider) {
		$routeProvider 
			.when('/', {templateUrl: 'partials/destinations.html', controller: function() {
				setActive('destinations');
			}})
			.when('/flights', {template: '<h3>Flights</h3>'})
			.when('/reservations', {template: '<h3>Your Reservations</h3>'})
			.when('/memberships', {template: '<h3>Memberships</h3>'})
			.when('/dailydeals', {template: '<h3>Daily Deals</h3>'})
			.when('/myaccount', {template: '<h3>My Account</h3>'})
			.when('/login', {template: '<h3>Login</h3>'});
}
