function DestinationsCtrl($scope) {
	$scope.setActive('destinations');
	// $scope.sidebarURL = 'partials/airport.html';


  	$scope.setAirport = function (code) {
    	$scope.currentAirport = $scope.airports[code];
  	};
  	
}
