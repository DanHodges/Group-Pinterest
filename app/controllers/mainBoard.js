app.controller("mainBoard", ["$scope","$firebaseArray", "getPics","getStorage", function($scope, $firebaseArray, getPics, getStorage){
	var ref = new Firebase("https://group-pinterest.firebaseio.com/pins/");

  $scope.showBoolean = true;

	$scope.pins = $firebaseArray(ref);
	console.log("$scope.pins :", $scope.pins);
	$scope.filters = {};

	$scope.setTerm = function () {
		getStorage.addTerm($scope.searchTerm);
	};

	$scope.killSong = function(pin) {
		$scope.pins.$remove(pin);
	};

  $scope.status = {
    isopen: false
  };

  $scope.status = {
    isFirstOpen: true,
    isFirstDisabled: false
  };

  $scope.showInput = function(context) {
    console.log("click");
    context.showBoolean = false;
  };

  $scope.saveData = function(photo) {
    console.log("click");
    console.log(photo);
    photo.caption = photo.caption;
    photo.cat = photo.cat;
    $scope.pins.$save(photo);
    photo.showBoolean = true;
  };

  $scope.toggleDropdown = function($event) {
    $event.preventDefault();
    $event.stopPropagation();
    $scope.status.isopen = !$scope.status.isopen;
  };

  $scope.killPin = function(pin) {
		console.log("click");
		$scope.pins.$remove(pin);
	};

  
}]);