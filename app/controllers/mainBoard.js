app.controller("mainBoard", ["$scope", "getPics", function($scope, getPics){
	var ref = new Firebase("https://group-pinterest.firebaseio.com/pins/");
	$scope.pins = $firebaseArray(ref);

	$scope.input = {
		url: ''
	};

	$scope.click = function () {
		var url = $scope.input.url;
		getPics.getPics(url).then(
			function(data){
				console.log("data", data);
			});
	};
}]);