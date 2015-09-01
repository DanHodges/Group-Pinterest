app.controller("mainBoard", ["$scope","$firebaseArray", "getPics","getStorage", function($scope, $firebaseArray, getPics, getStorage){
	var ref = new Firebase("https://group-pinterest.firebaseio.com/pins/");
	$scope.pins = $firebaseArray(ref);
	$scope.filters = {};

	$scope.setTerm = function () {
		console.log("click");
		getStorage.addTerm($scope.searchTerm);
		console.log("getStorage.getTerm() :", getStorage.getTerm());
	};

	$scope.killSong = function(pin) {
		$scope.pins.$remove(pin);
	};

  $scope.status = {
    isopen: false
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };
}]);